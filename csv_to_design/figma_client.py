"""Resilient, rate-limit-aware Figma REST client with version-aware disk caching.

This replaces figma_ingest.py's original _get / fetch_file / fetch_variables trio.
It addresses four of the improvements discussed:

  1. Rate limits  - Figma updated its limits on 2025-11-17. A 429 arrives with
     `Retry-After`, `X-Figma-Plan-Tier`, and `X-Figma-Rate-Limit-Type` headers,
     and Retry-After can be *days* on the wrong plan/seat. We honor Retry-After
     but never sleep past MAX_RETRY_AFTER_SECONDS; beyond that we raise a clear
     RateLimited error so the batch skips the file and reports, instead of hanging.
     Transient (5xx / network) errors get exponential backoff. We also self-throttle
     to a minimum interval between calls, which is the cheapest way to avoid 429s.

  2. Version-aware cache  - the old cache never expired. With check_version=True we
     do a cheap `?depth=1` HEAD-ish request to compare the remote `version` against
     the cached one, and only refetch the (large) full tree when it actually changed.

  4. Thread-safe "warn once"  - the Enterprise-only variables endpoint 403s on lower
     plans. The warning is guarded by a lock so concurrent fetches stay safe.

Usage:
    from figma_client import FigmaClient, RateLimited
    client = FigmaClient(token=os.environ["FIGMA_TOKEN"], cache_dir=Path("./assets/figma_files"))
    file_json = client.fetch_file(file_key)
    var_json  = client.fetch_variables(file_key)   # None if unavailable on this plan
"""
from __future__ import annotations

import json
import logging
import threading
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Optional

log = logging.getLogger("figma")

FIGMA_API = "https://api.figma.com/v1"

# Never sleep longer than this on a 429. Figma can hand back multi-day Retry-After
# values; hanging a batch job for hours is worse than failing the file loudly.
MAX_RETRY_AFTER_SECONDS = 120
# Total attempts (initial + retries) for a single request.
MAX_ATTEMPTS = 5
# Exponential backoff base for transient (non-429) errors.
BACKOFF_BASE = 2.0


class RateLimited(RuntimeError):
    """Raised when Figma asks us to wait longer than MAX_RETRY_AFTER_SECONDS."""

    def __init__(self, retry_after: int, tier: Optional[str], rl_type: Optional[str]):
        self.retry_after = retry_after
        self.tier = tier
        self.rl_type = rl_type
        super().__init__(
            f"Figma rate limit: Retry-After={retry_after}s (plan tier={tier}, "
            f"type={rl_type}) exceeds the {MAX_RETRY_AFTER_SECONDS}s cap"
        )


class FigmaClient:
    def __init__(
        self,
        token: str,
        cache_dir: Path,
        *,
        min_interval: float = 0.5,
        timeout: int = 120,
        check_version: bool = False,
    ):
        if not token:
            raise ValueError("FigmaClient requires a Figma personal access token")
        self.token = token
        self.cache_dir = Path(cache_dir)
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        self.min_interval = min_interval
        self.timeout = timeout
        self.check_version = check_version

        self._throttle_lock = threading.Lock()
        self._last_request_ts = 0.0
        self._vars_lock = threading.Lock()
        self._vars_warned = False

    # --- low-level request with throttle + retry ---------------------------
    def _throttle(self) -> None:
        with self._throttle_lock:
            wait = self.min_interval - (time.monotonic() - self._last_request_ts)
            if wait > 0:
                time.sleep(wait)
            self._last_request_ts = time.monotonic()

    def _raw_get(self, url: str) -> dict:
        req = urllib.request.Request(url, headers={"X-Figma-Token": self.token})
        with urllib.request.urlopen(req, timeout=self.timeout) as r:
            return json.loads(r.read().decode("utf-8"))

    @staticmethod
    def _retry_after_seconds(err: urllib.error.HTTPError) -> Optional[int]:
        raw = err.headers.get("Retry-After")
        if raw is None:
            return None
        try:
            return int(float(raw))
        except (TypeError, ValueError):
            return None

    def request(self, url: str) -> dict:
        """GET a Figma URL as JSON, retrying on 429 and transient errors."""
        last_exc: Optional[Exception] = None
        for attempt in range(1, MAX_ATTEMPTS + 1):
            self._throttle()
            try:
                return self._raw_get(url)
            except urllib.error.HTTPError as e:
                last_exc = e
                tier = e.headers.get("X-Figma-Plan-Tier")
                rl_type = e.headers.get("X-Figma-Rate-Limit-Type")
                if e.code == 429:
                    wait = self._retry_after_seconds(e)
                    if wait is None:
                        wait = min(int(BACKOFF_BASE ** attempt), MAX_RETRY_AFTER_SECONDS)
                    if wait > MAX_RETRY_AFTER_SECONDS:
                        raise RateLimited(wait, tier, rl_type) from e
                    log.warning(
                        "429 from Figma (tier=%s type=%s); waiting %ss (attempt %d/%d)",
                        tier, rl_type, wait, attempt, MAX_ATTEMPTS,
                    )
                    time.sleep(wait)
                    continue
                if 500 <= e.code < 600:
                    back = BACKOFF_BASE ** attempt
                    log.warning("Figma %s; backing off %.1fs (attempt %d/%d)",
                                e.code, back, attempt, MAX_ATTEMPTS)
                    time.sleep(back)
                    continue
                raise  # other 4xx (401/403/404) are not retryable
            except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
                last_exc = e
                back = BACKOFF_BASE ** attempt
                log.warning("network error %s; backing off %.1fs (attempt %d/%d)",
                            e, back, attempt, MAX_ATTEMPTS)
                time.sleep(back)
                continue
        assert last_exc is not None
        raise last_exc

    # --- files (version-aware cache) ---------------------------------------
    def _cached_version(self, cache: Path) -> Optional[str]:
        try:
            return json.loads(cache.read_text()).get("version")
        except Exception:
            return None

    def _remote_version(self, file_key: str) -> Optional[str]:
        try:
            head = self.request(f"{FIGMA_API}/files/{file_key}?depth=1")
            return head.get("version")
        except Exception as e:  # a failed HEAD check should not sink the run
            log.debug("version check failed for %s: %s", file_key, e)
            return None

    def fetch_file(self, file_key: str, *, refresh: bool = False) -> dict:
        cache = self.cache_dir / f"{file_key}.json"
        if cache.exists() and not refresh:
            if not self.check_version:
                return json.loads(cache.read_text())
            remote_v = self._remote_version(file_key)
            cached_v = self._cached_version(cache)
            if remote_v is None or cached_v is None or remote_v == cached_v:
                # Can't tell, or unchanged -> trust the cache.
                return json.loads(cache.read_text())
            log.info("%s changed (%s -> %s); refetching", file_key, cached_v, remote_v)
        data = self.request(f"{FIGMA_API}/files/{file_key}")
        cache.write_text(json.dumps(data))
        return data

    # --- variables (Enterprise endpoint, degrades gracefully) --------------
    def fetch_variables(self, file_key: str, *, refresh: bool = False) -> Optional[dict]:
        cache = self.cache_dir / f"{file_key}.variables.json"
        if cache.exists() and not refresh:
            return json.loads(cache.read_text())
        try:
            data = self.request(f"{FIGMA_API}/files/{file_key}/variables/local")
        except Exception as e:
            with self._vars_lock:
                if not self._vars_warned:
                    log.info(
                        "variables unavailable on this token/plan - proceeding "
                        "without them. first reason: %s", e,
                    )
                    self._vars_warned = True
            return None
        cache.write_text(json.dumps(data))
        return data
