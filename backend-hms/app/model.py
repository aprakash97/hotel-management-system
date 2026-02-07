from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from .database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)

class Hotel(Base):
    __tablename__ = "hotels"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=True)

    # Relationship to room types
    room_types = relationship("RoomType", back_populates="hotel")

class RoomType(Base):
    __tablename__ = "room_types"

    id = Column(Integer, primary_key=True)
    hotel_id = Column(Integer, ForeignKey("hotels.id"), nullable=False)
    name = Column(String, nullable=False)
    base_rate = Column(Float, nullable=False)

    hotel = relationship("Hotel", back_populates="room_types")
    special_rates = relationship("SpecialRate", back_populates="room_type")

class SpecialRate(Base):
    __tablename__ = "special_rates"

    id = Column(Integer, primary_key=True)
    room_type_id = Column(Integer, ForeignKey("room_types.id"), nullable=False)
    date = Column(Date, nullable=False)
    rate = Column(Float, nullable=False)

    room_type = relationship("RoomType", back_populates="special_rates")