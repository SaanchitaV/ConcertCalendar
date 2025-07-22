from typing import List, Dict
import hashlib
def normalize_event(event: Dict) -> Dict:
   return {
       "title": event.get("title", "").strip(),
       "artist": event.get("artist", "").strip(),
       "accompanying_artists": event.get("accompanying_artists", "").strip() if "accompanying_artists" in event else "",
       "venue": event.get("venue", "").strip(),
       "city": event.get("city", "").strip(),
       "state": event.get("state", "").strip(),
       "country": event.get("country", "").strip(),
       "date": event.get("date", "").strip(),
       "time": event.get("time", "").strip(),
       "ticket_link": event.get("ticket_link", "").strip(),
       "map_link": event.get("map_link", "").strip()
   }
def generate_event_hash(event: Dict) -> str:
   key_string = (event.get("title", "") + event.get("artist", "") +
                 event.get("venue", "") + event.get("date", "") + event.get("time", ""))
   return hashlib.sha256(key_string.encode('utf-8')).hexdigest()
def deduplicate_events(events: List[Dict]) -> List[Dict]:
   seen_hashes = set()
   unique_events = []
   for event in events:
       norm_event = normalize_event(event)
       event_hash = generate_event_hash(norm_event)
       if event_hash not in seen_hashes:
           seen_hashes.add(event_hash)
           unique_events.append(norm_event)
   return unique_events