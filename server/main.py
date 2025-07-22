from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.scraper_routes import router as scraper_routes
app = FastAPI()
app.add_middleware(
   CORSMiddleware,
   allow_origins=["*"],
   allow_credentials=True,
   allow_methods=["*"],
   allow_headers=["*"],
)
app.include_router(scraper_routes, prefix="/api")
@app.get("/")
def root():
   return {"message": "Concert Calendar Backend Running"}