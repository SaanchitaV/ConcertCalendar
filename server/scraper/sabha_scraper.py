import requests
from bs4 import BeautifulSoup
def scrape_sabha_website(url):
   try:
       response = requests.get(url)
       soup = BeautifulSoup(response.content, "html.parser")
       event_blocks = soup.find_all("div", class_="event")
       result = []
       for block in event_blocks:
           title = block.find("h3").get_text(strip=True) if block.find("h3") else "Concert"
           date = block.find("span", class_="date").get_text(strip=True) if block.find("span", class_="date") else "TBD"
           venue = block.find("div", class_="venue").get_text(strip=True) if block.find("div", class_="venue") else "TBD"
           artist = block.find("p").get_text(strip=True) if block.find("p") else "TBD"
           result.append({
               "title": title,
               "artist": artist,
               "venue": venue,
               "city": "Chennai",
               "state": "Tamil Nadu",
               "country": "India",
               "date": date,
               "time": "TBD",
               "ticket_link": "",
               "map_link": "",
               "accompanying_artists": ""
           })
       return result
   except Exception as e:
       print(f"Error scraping sabha site: {e}")
       return []