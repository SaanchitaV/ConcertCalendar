from fastapi import APIRouter
from scraper.instagram_scraper import scrape_instagram_profile
from scraper.sabha_scraper import scrape_sabha_website
from scraper.bookmyshow_scraper import scrape_bookmyshow_classical
from typing import List
router = APIRouter()
@router.get("/scrape/instagram")
def scrape_instagram(usernames: List[str] = ["tmkrishna", "jayanthikumaresh"]):
   events = []
   for username in usernames:
       posts = scrape_instagram_profile(username)
       for post in posts:
           events.append({
               "title": post["caption"].split("\\n")[0][:50],
               "artist": username,
               "venue": "TBD",
               "city": "TBD",
               "state": "TBD",
               "country": "India",
               "date": post["date"],
               "time": "TBD",
               "ticket_link": "",
               "map_link": "",
               "accompanying_artists": ""
           })
   return {"status": "success", "events": events}
@router.get("/scrape/sabha")
def scrape_sabha(urls: List[str] = ["https://musicacademymadras.in/events"]):
   events = []
   for url in urls:
       events.extend(scrape_sabha_website(url))
   return {"status": "success", "events": events}
@router.get("/scrape/bookmyshow")
def scrape_bookmyshow(city: str = "chennai"):
   events = scrape_bookmyshow_classical(city)
   return {"status": "success", "events": events}