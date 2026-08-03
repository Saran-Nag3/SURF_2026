"""Configuration, device presets, and deterministic per-company choices.

A "company" is one Design.md. For each company we pick ONE platform and ONE
device size and hold them constant across that company's screens, but the choice
is randomish across companies (seeded, so runs are reproducible). That mixes
iOS and Android across the whole set the way the real control screenshots do.
"""
from __future__ import annotations

import hashlib
import os
import random
from dataclasses import dataclass, field

from dotenv import load_dotenv

load_dotenv()


# ---------------------------------------------------------------------------
# Environment
# ---------------------------------------------------------------------------
AZURE_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT", "").rstrip("/")
AZURE_API_KEY = os.getenv("AZURE_OPENAI_API_KEY", "")
AZURE_DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT", "")
AZURE_API_VERSION = os.getenv("AZURE_OPENAI_API_VERSION", "2024-10-21")

DESIGN_DIR = os.getenv("DESIGN_DIR", "./designs")
DESIGN_GLOB = os.getenv("DESIGN_GLOB", "**/Design.md")
OUTPUT_DIR = os.getenv("OUTPUT_DIR", "./output")
SEED = int(os.getenv("SEED", "1337"))
MAX_INPUT_CHARS = int(os.getenv("MAX_INPUT_CHARS", "100000"))
# Upper bound on tokens the model may emit per company. Reasoning models (GPT-5.x,
# o-series) spend part of this on internal reasoning, so it needs headroom for that
# PLUS the JSON of N HTML screens. Too low => truncated JSON => parse failure.
MAX_OUTPUT_TOKENS = int(os.getenv("MAX_OUTPUT_TOKENS", "32000"))
# Folder of royalty-free photos the harness uses to fill image slots, and the max
# dimension each is resized to before inlining (keeps the rendered HTML small/fast).
PHOTO_DIR = os.getenv("PHOTO_DIR", "./assets/photos")
PHOTO_MAX_PX = int(os.getenv("PHOTO_MAX_PX", "900"))
# Pexels: if set, image slots are filled from Pexels (cached locally). If blank, the
# harness falls back to the local PHOTO_DIR pool, then to gray boxes.
PEXELS_API_KEY = os.getenv("PEXELS_API_KEY", "")
IMG_CACHE_DIR = os.getenv("IMG_CACHE_DIR", "./assets/cache")


def assert_azure_config() -> None:
    """Fail early with a clear message if Azure creds are missing."""
    missing = [
        name
        for name, val in [
            ("AZURE_OPENAI_ENDPOINT", AZURE_ENDPOINT),
            ("AZURE_OPENAI_API_KEY", AZURE_API_KEY),
            ("AZURE_OPENAI_DEPLOYMENT", AZURE_DEPLOYMENT),
        ]
        if not val
    ]
    if missing:
        raise SystemExit(
            "Missing Azure config: "
            + ", ".join(missing)
            + "\nCopy .env.example to .env and fill it in (see README)."
        )


# ---------------------------------------------------------------------------
# Device presets
# ---------------------------------------------------------------------------
@dataclass(frozen=True)
class Device:
    name: str
    platform: str            # "ios" | "android"
    width: int               # logical (CSS) px
    height: int              # logical (CSS) px
    dpr: float               # device scale factor -> output pixels = logical * dpr
    notch: str = "none"      # ios: "island" | "notch" | "none"; android: "punch" | "none"
    status_h: int = 0        # status bar height in logical px
    bottom_inset: int = 0    # home indicator / gesture area height in logical px


DEVICES: list[Device] = [
    # --- iOS ---
    Device("iPhone 16", "ios", 393, 852, 3.0, notch="island", status_h=54, bottom_inset=34),
    Device("iPhone 15 Pro Max", "ios", 430, 932, 3.0, notch="island", status_h=59, bottom_inset=34),
    Device("iPhone 13 mini", "ios", 375, 812, 3.0, notch="notch", status_h=50, bottom_inset=34),
    Device("iPhone SE (3rd gen)", "ios", 375, 667, 2.0, notch="none", status_h=20, bottom_inset=0),
    # --- Android ---
    Device("Pixel 8", "android", 412, 915, 2.625, notch="punch", status_h=28, bottom_inset=24),
    Device("Pixel 7a", "android", 412, 892, 2.625, notch="punch", status_h=26, bottom_inset=24),
    Device("Galaxy S23", "android", 360, 780, 3.0, notch="punch", status_h=28, bottom_inset=24),
    Device("Galaxy A54", "android", 393, 873, 2.75, notch="punch", status_h=26, bottom_inset=24),
]

# Pool of distinct screen archetypes. Each company gets N *different* ones, so its
# screens vary in purpose/layout instead of all looking like the same list.
SCREEN_ARCHETYPES = [
    "home_feed", "item_detail", "search_browse", "settings", "profile",
    "library_list", "create_form", "notifications", "empty_state", "onboarding",
]


@dataclass
class CompanyPlan:
    """The fixed-for-this-company decisions, derived deterministically."""
    company: str
    device: Device
    n_screens: int
    clock: str               # status bar time, e.g. "10:53" (never 9:41)
    battery: int             # 1-100
    screen_kinds: list[str] = field(default_factory=list)  # distinct archetype per screen
    rng: random.Random = field(repr=False, default_factory=random.Random)


def _company_seed(company: str) -> int:
    h = hashlib.sha256(f"{SEED}:{company}".encode("utf-8")).hexdigest()
    return int(h[:16], 16)


def plan_for_company(company: str) -> CompanyPlan:
    """Deterministic platform/device/screen-count/status-bar choice per company."""
    rng = random.Random(_company_seed(company))
    device = rng.choice(DEVICES)
    n_screens = rng.randint(3, 5)
    # Realistic-but-not-default clock: avoid 9:41 (Apple) and 10:08 (watch ad cliche).
    hour = rng.randint(1, 12)
    minute = rng.randint(0, 59)
    clock = f"{hour}:{minute:02d}"
    if clock in ("9:41", "10:08"):
        minute = (minute + 7) % 60
        clock = f"{hour}:{minute:02d}"
    battery = rng.randint(18, 96)
    # N distinct archetypes, always starting from the home/feed so the set feels anchored.
    rest = [a for a in SCREEN_ARCHETYPES if a != "home_feed"]
    rng.shuffle(rest)
    screen_kinds = (["home_feed"] + rest)[:n_screens]
    return CompanyPlan(
        company=company, device=device, n_screens=n_screens,
        clock=clock, battery=battery, screen_kinds=screen_kinds, rng=rng,
    )
