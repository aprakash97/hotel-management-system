from fastapi import APIRouter, Depends, status, Query, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.model import Hotel
from app import model as models
from app.schemas import HotelCreate, HotelResponse, HotelOut, HotelUpdate

router = APIRouter(
    prefix="/hotels",
    tags=["Hotels"]
)

@router.post(
    "/",
    response_model=HotelResponse,
    status_code=status.HTTP_201_CREATED
)

def create_hotel(
    hotel: HotelCreate,
    db: Session = Depends(get_db)
):
    new_hotel = Hotel(
        name=hotel.name,
        address=hotel.address
    )

    db.add(new_hotel)
    db.commit()
    db.refresh(new_hotel)

    return new_hotel

@router.get(
    "/", 
    response_model=list[HotelOut]
)

def get_hotels(
    db: Session = Depends(get_db)
    ):
    return db.query(models.Hotel).all()

@router.get("/search", response_model=list[HotelOut])
def get_hotel_by_name(
    name: str = Query(..., min_length=1),
    db: Session = Depends(get_db)
):
    hotel = db.query(models.Hotel).filter(Hotel.name.ilike(f"%{name}%")).all()

    if not hotel:
        raise HTTPException(status_code=404, detail="Hotel not found")

    return hotel

@router.put("/{hotel_id}", response_model=HotelOut)
def update_hotel(
    hotel_id: int,
    hotel_data: HotelUpdate,
    db: Session = Depends(get_db)
):
    hotel = db.query(models.Hotel).filter(models.Hotel.id == hotel_id).first()

    if not hotel:
        raise HTTPException(status_code=404, detail="Hotel not found")

    for field, value in hotel_data.dict(exclude_unset=True).items():
        setattr(hotel, field, value)

    db.commit()
    db.refresh(hotel)

    return hotel

@router.delete("/{hotel_id}", status_code=204)
def delete_hotel(hotel_id: int, db: Session = Depends(get_db)):
    hotel = db.query(models.Hotel).filter(models.Hotel.id == hotel_id).first()

    if not hotel:
        raise HTTPException(status_code=404, detail="Hotel not found")

    db.delete(hotel)
    db.commit()