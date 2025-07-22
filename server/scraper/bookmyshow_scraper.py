import requests
from bs4 import BeautifulSoup
def scrape_bookmyshow_classical(city="chennai"):
   url = f"https://in.bookmyshow.com/explore/music-{city}"
   try:
       response = requests.get(url, timeout=10)
       soup = BeautifulSoup(response.text, "html.parser")
       events = []
       cards = soup.select("div.__event-card")
       for card in cards:
           title = card.select_one("div.__name")
           venue = card.select_one("div.__venue-name")
           date = card.select_one("div.__date")
           events.append({
               "title": title.get_text(strip=True) if title else "Classical Music Event",
               "artist": "TBD",
               "venue": venue.get_text(strip=True) if venue else "TBD",
               "city": city,
               "state": "TBD",
               "country": "India",
               "date": date.get_text(strip=True) if date else "TBD",
               "time": "TBD",
               "ticket_link": "",
               "map_link": "",
               "accompanying_artists": ""
           })
       return events
   except Exception as e:
       print(f"Error scraping BookMyShow: {e}")
       return []