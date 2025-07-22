import instaloader
def scrape_instagram_profile(username, max_posts=10):
   L = instaloader.Instaloader(download_pictures=False, download_videos=False, download_video_thumbnails=False)
   posts_data = []
   try:
       profile = instaloader.Profile.from_username(L.context, username)
       for post in profile.get_posts():
           if len(posts_data) >= max_posts:
               break
           posts_data.append({
               "caption": post.caption,
               "date": str(post.date_utc),
               "url": post.url,
           })
   except Exception as e:
       print(f"Failed to scrape {username}: {e}")
   return posts_data