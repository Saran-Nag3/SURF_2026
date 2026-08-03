"""Quick Pexels connectivity test. Run: python check_pexels.py"""
import images, config

if not config.PEXELS_API_KEY:
    raise SystemExit("PEXELS_API_KEY is empty in .env")

uris = images.data_uris_for(["modern apartment interior", "person portrait headshot"], "test")
ok = sum(1 for u in uris if u)
print(f"key: {config.PEXELS_API_KEY[:4]}…  | slots filled: {ok}/2")
if ok:
    print("SUCCESS — Pexels returned and cached images. Check assets/cache/ for the files.")
else:
    print("No images came back — check the key, or you may be rate-limited / offline.")
