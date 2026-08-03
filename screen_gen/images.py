"""Image source for photo slots.

Priority per slot query: (1) local cache, (2) Pexels API (then cached), (3) the local
PHOTO_DIR pool, (4) gray. Fetched images are cached to IMG_CACHE_DIR so reruns don't
re-hit the API and stay reproducible, which also respects Pexels' 200 req/hour limit.

Pexels guidelines ask for attribution: photographer credits for fetched images are
written to IMG_CACHE_DIR/credits.json so you can attribute them if you publish.
"""
from __future__ import annotations

import base64
import hashlib
import io
import json
import random
import urllib.parse
import urllib.request
from pathlib import Path

import config
from config import _company_seed

try:
    from PIL import Image
    _HAVE_PIL = True
except ImportError:  # pragma: no cover
    _HAVE_PIL = False

# A real-browser UA avoids Cloudflare blocking programmatic image downloads.
_UA = "Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0"
_EXTS = {".jpg", ".jpeg", ".png", ".webp"}
_query_cache: dict[str, list[str]] = {}   # query -> list of data URIs (this process)
_warned = False


def _cache_dir() -> Path:
    d = Path(config.IMG_CACHE_DIR)
    d.mkdir(parents=True, exist_ok=True)
    return d


def _qhash(q: str) -> str:
    return hashlib.sha1(q.lower().encode("utf-8")).hexdigest()[:16]


def _encode(raw: bytes) -> str:
    mime = "image/jpeg"
    if _HAVE_PIL:
        try:
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            im.thumbnail((config.PHOTO_MAX_PX, config.PHOTO_MAX_PX))
            buf = io.BytesIO()
            im.save(buf, format="JPEG", quality=82)
            raw = buf.getvalue()
        except Exception:
            pass
    return f"data:{mime};base64," + base64.b64encode(raw).decode("ascii")


def _cached_files(q: str) -> list[Path]:
    return sorted(_cache_dir().glob(f"{_qhash(q)}_*.jpg"))


def _fetch_pexels(q: str, want: int = 6) -> list[Path]:
    """Search Pexels, download up to `want` photos into the cache, return their paths."""
    global _warned
    if not config.PEXELS_API_KEY:
        return []
    d, h = _cache_dir(), _qhash(q)
    url = "https://api.pexels.com/v1/search?" + urllib.parse.urlencode(
        {"query": q, "per_page": want, "orientation": "landscape"}
    )
    try:
        req = urllib.request.Request(
            url, headers={"Authorization": config.PEXELS_API_KEY, "User-Agent": _UA}
        )
        with urllib.request.urlopen(req, timeout=15) as r:
            data = json.loads(r.read().decode("utf-8"))
    except Exception as e:
        if not _warned:
            print(f"  ! Pexels request failed ({e}); using local pool / gray instead.")
            _warned = True
        return []

    paths, credits = [], []
    for i, p in enumerate(data.get("photos", [])[:want]):
        src = (p.get("src") or {})
        link = src.get("large") or src.get("medium") or src.get("original")
        if not link:
            continue
        try:
            ir = urllib.request.Request(link, headers={"User-Agent": _UA})
            with urllib.request.urlopen(ir, timeout=15) as resp:
                raw = resp.read()
            fp = d / f"{h}_{i}.jpg"
            if _HAVE_PIL:
                im = Image.open(io.BytesIO(raw)).convert("RGB")
                im.thumbnail((config.PHOTO_MAX_PX, config.PHOTO_MAX_PX))
                im.save(fp, format="JPEG", quality=82)
            else:
                fp.write_bytes(raw)
            paths.append(fp)
            credits.append({"photographer": p.get("photographer"), "url": p.get("url")})
        except Exception:
            continue

    if credits:  # record attribution
        cf = d / "credits.json"
        allc = {}
        if cf.exists():
            try:
                allc = json.loads(cf.read_text())
            except Exception:
                allc = {}
        allc[q] = credits
        cf.write_text(json.dumps(allc, indent=2))
    return paths


def _local_pool() -> list[str]:
    d = Path(config.PHOTO_DIR)
    uris = []
    if d.is_dir():
        for p in sorted(d.iterdir()):
            if p.suffix.lower() in _EXTS:
                try:
                    uris.append(_encode(p.read_bytes()))
                except Exception:
                    pass
    return uris


def _pool_for_query(q: str) -> list[str]:
    if q in _query_cache:
        return _query_cache[q]
    files = _cached_files(q) or _fetch_pexels(q)
    uris = []
    for fp in files:
        try:
            uris.append(_encode(fp.read_bytes()))
        except Exception:
            pass
    if not uris:                      # no Pexels result -> fall back to local pool
        uris = _local_pool()
    _query_cache[q] = uris
    return uris


def data_uris_for(queries: list[str], company: str) -> list[str | None]:
    """One data URI per slot query (None where nothing is available -> gray slot).

    Slots sharing a query get DIFFERENT photos (rotated), seeded per company so reruns match.
    """
    rng = random.Random(_company_seed(company))
    per: dict[str, list[str]] = {}
    cursor: dict[str, int] = {}
    out: list[str | None] = []
    for q in queries:
        key = (q or "abstract minimal texture").strip().lower()
        if key not in per:
            pool = _pool_for_query(key)[:]
            rng.shuffle(pool)
            per[key] = pool
            cursor[key] = 0
        pool = per[key]
        if pool:
            out.append(pool[cursor[key] % len(pool)])
            cursor[key] += 1
        else:
            out.append(None)
    return out
