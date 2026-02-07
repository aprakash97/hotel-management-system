from pydantic import BaseModel
from typing import Optional

class HotelBase(BaseModel):
    name: str
    address: Optional[str] = None

class HotelResponse(HotelBase):
    id: int

    class Config:
        orm_mode = True

class HotelCreate(HotelBase):
    pass

class HotelUpdate(BaseModel):
    name: Optional[str] = None
    address: Optional[str] = None

class HotelOut(HotelBase):
    id: int

    class Config:
        from_attributes = True