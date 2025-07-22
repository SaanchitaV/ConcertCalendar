from pymongo import MongoClient
from bson.objectid import ObjectId
import hashlib
import os
client = MongoClient(os.getenv("MONGODB_URI", "mongodb://localhost:27017"))
db = client["concert_calendar"]
concerts = db["concerts"]
def hash_event(event):
   string_repr = f"{event['title']}_{event['date']}_{event['venue']}"
   return hashlib.sha256(string_repr.encode()).hexdigest()
def insert_concert(event):
   event_hash = hash_event(event)
   existing = concerts.find_one({"_hash": event_hash})
   if not existing:
       event["_hash"] = event_hash
       concerts.insert_one(event)
       return True
   return False
def get_all_concerts(filters=None):
   query = filters or {}
   return list(concerts.find(query, {"_id": 0, "_hash": 0}))