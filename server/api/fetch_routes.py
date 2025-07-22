from fastapi import APIRouter
from db.mongo import get_all_concerts
router = APIRouter()
@router.get("/concerts")
def fetch_concerts():
   concerts = get_all_concerts()
   return {"concerts": concerts}