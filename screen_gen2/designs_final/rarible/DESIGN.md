---
name: rarible-app-kit-community
source: "📱 Rarible App Kit (Community)"
kind: design-system-context
---

# rarible - Design System

## Overview

Rarible mobile app kit for 390px-wide mobile screens. The system supports Light and Dark themes and uses Inter as the primary UI typeface, with SF Pro Text for system UI. Component families include navigation, galleries, collections, actions, titles, NFT items, system chrome, and icon assets.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Mobile-first layouts commonly use a 390px fixed width.
- Light theme uses `#FFFFFF` as the primary base and `#16161A` for primary labels.
- Dark theme uses `#1E1E24` as the primary base and `#FFFFFF` for primary labels.
- Brand color is `#FEDA03`.
- Success colors: Light `#2CB462`; Dark `#18C35C`.
- Error colors: Light `#FC5230`; Dark `#FF6243`.
- Promotional surfaces use a linear gradient: `#FF00B8` at 0%, `#64A1FF` at 51%, `#0066FF` at 100%.
- UI uses rounded controls, bottom tab navigation, compact captions, and strong semibold labels.
- Inter Grotesque styles are the primary application typography. “Tight” styles reduce line height for compact UI.

## Color palette

### Semantic colors

| Role | Light | Dark | Usage |
|---|---|---|---:|
| Label | `#16161A` | `#FFFFFF` | Light 894; Dark 897 |
| Label secondary | No value found | `#A9A9AC` | Dark 227 |
| Label tertiary | `#A2A2A3` | `#7F7F83` | Light 155; Dark 70 |
| Label inverse | `#FFFFFF` | `#16161A` | Light 248; Dark 93 |
| Base | `#FFFFFF` | `#1E1E24` | Light 160; Dark 92 |
| Base inverse | `#16161A` | `#FFFFFF` | Light 88; Dark 58 |
| Base secondary | `#F2F2F7` | `#292930` | Light 4; Dark 4 |
| Fill | `#16161A0A` | `#FFFFFF0F` | Light 41; Dark 37 |
| Navigation | `#D1D1D666` | `#57576766` | Light 16; Dark 35 |
| Fog | `#16161A66` | `#15161966` | Light 6; Dark 6 |
| Fullscreen | `#16161ACC` | `#151619CC` | Light 1; Dark 1 |
| Brand | `#FEDA03` | `#FEDA03` | Light 30; Dark 9 |
| Success | `#2CB462` | `#18C35C` | Light 162; Dark 40 |
| Error | `#FC5230` | `#FF6243` | Light 178; Dark 22 |
| Promo | `#FF00B8` → `#64A1FF` → `#0066FF` | `#FF00B8` → `#64A1FF` → `#0066FF` | 1 each |
| Divider | No usable hex value found | `#F8E8F7` | Light 170; Dark 85 |

### Frequently used raw colors

Use these only where an existing design does not map to a semantic token:

1. `#000000` — 2,126 uses
2. `#FFFFFF` — 1,972 uses
3. `#FCFFFF` — 278 uses
4. `#646464` — 253 uses
5. `#AEB3BE` — 216 uses
6. `#8A8A98CC` — 214 uses
7. `#DADADA` — 195 uses
8. `#484C4F` — 126 uses
9. `#50555C` — 108 uses
10. `#2CB4621F` — 76 uses
11. `#CED2D9B2` — 55 uses
12. `#121212` — 51 uses
13. `#FC52301F` — 51 uses
14. `#18C35C1F` — 36 uses
15. `#3F3F3F` — 36 uses
16. `#00000099` — 32 uses

## Type scale

Primary application typeface: Inter.

| Style | Typeface | Size / line height | Weight | Tracking |
|---|---|---:|---:|---:|
| Header / Normal | Inter | 40px / 42px | 500 or 600 | -0.6px |
| Header / Tight | Inter | 40px / 34px | 500 or 600 | -0.6px |
| Title 1 / Normal | Inter | 32px / 35px | 500 or 600 | -0.16px |
| Title 1 / Tight | Inter | 32px / 28px | 500 or 600 | -0.16px |
| Title 2 / Normal | Inter | 28px / 31px | 500 or 600 | -0.06px |
| Title 2 / Tight | Inter | 28px / 26px | 500 or 600 | -0.06px |
| Title 3 / Normal | Inter | 24px / 27px | 500 or 600 | 0px |
| Title 3 / Tight | Inter | 24px / 24px | 500 or 600 | 0px |
| Body 1 / Normal | Inter | 20px / 26px | 500 or 600 | 0px |
| Body 1 / Tight | Inter | 20px / 20px | 500 or 600 | 0px |
| Body 2 / Normal | Inter | 16px / 22px | 500 or 600 | 0px |
| Body 2 / Tight | Inter | 16px / 16px | 500 or 600 | 0px |
| Caption 1 / Normal | Inter | 13px / 16px | 500 or 600 | 0.13px |
| Caption 1 / Tight | Inter | 13px / 12px | 500 or 600 | 0.13px |
| Caption 2 / Normal | Inter | 11px / 14px | 500 or 600 | 0.11px |
| Caption 2 / Tight | Inter | 11px / 10px | 500 or 600 | 0.11px |
| Default / Bold / Body | SF Pro Text | 17px / 22px | 600 | -0.41px |

Most-used text styles:

- Body 2 / Normal / 600 — 480 uses
- Caption 2 / Tight / 500 — 389 uses
- Caption 2 / Normal / 500 — 271 uses
- Caption 1 / Normal / 500 — 159 uses
- Caption 1 / Normal / 600 — 156 uses
- Body 1 / Normal / 600 — 76 uses
- Default / Bold / Body — 65 uses

Observed raw system styles include SF Pro Text Light at 24px, SF Pro Text Regular at 16px, Roboto Regular at 24px and 30px, Inter SemiBold at 10px, and SF Mono at 10px and 14px.

## Spacing scale

No spacing variables found in source.

Observed component spacing values:

- 0px
- 2px
- 4px
- 6px
- 8px
- 10px
- 12px
- 13px
- 16px
- 24px

## Radius scale

No radius variables found in source.

Observed radii:

- 6px
- 12px
- 14px
- 16px
- 24px
- 40px
- 100px
- 1000px
- Page title compound radius: `24/24/0/0px`

## Elevation & effects

- Level 1: drop shadow, offset `0 3`, color `#00000033`, blur `4px`.
- Level 1 alternative: drop shadows `0 5` with `#00000014` and `0 2` with `#00000026`; blur values `17px` and `7px`.
- Level 2: drop shadows `0 1` with `#00000033` and `0 3` with `#0000001F`; blur values `8px` and `3px`.
- Level 3: drop shadows `0 5` with `#00000033` and `0 3` with `#0000001F`; blur values `5px` and `14px`.
- Level 3 reversed: drop shadows `0 -5` with `#00000033` and `0 -3` with `#0000001F`; blur values `5px` and `14px`.
- Level 4: drop shadows `0 11` with `#00000033` and `0 9` with `#0000001F`; blur values `15px` and `46px`.
- Background blur: `40px`.
- Level 1 usage: 102.
- Level 2 usage: 70.
- Level 3 usage: 6.
- Level 4 usage: 6.

## Components

Only the following component families are defined in the source.

### Tab bar

- Size: `390x84px`.
- Horizontal layout.
- Padding: `13px 16px 0 16px`.
- Gap: `24px`.
- Alignment: center/min.
- Fixed width and height.
- Fill: `#FFFFFFF2`.
- Effects: background blur `40px`; shadow offset `0 -0.3`, color `#00000040`.
- Variants:
  - State: Tab1, Tab2, Tab3.
  - Dark: False, True.

### Gallery

- Size: `390x144px`.
- Horizontal layout.
- Padding: `0 0 0 16px`.
- Gap: `12px`.
- Typography: Caption 2 / Normal / 500.
- Variants:
  - Items: 1-2, 2+, SeeAll.

### Collection

- Size: `390x64px`.
- Vertical layout.
- Padding: `0 0 0 16px`.
- Gap: `16px`.
- Alignment: center/min.
- Typography: Caption 1 / Normal / 600; Caption 2 / Normal / 500; Caption 2 / Tight / 500; Body 2 / Normal / 600; Inter SemiBold 10px.
- Variants:
  - Size: L, S.
  - State: Collapsed, Preview.

### System

- Size: `390x44px`.
- Typography: Default / Bold / Body.
- Variants:
  - Android: False, True.
  - Type: Home, KeysChar, KeysNum, Nav, Status.
  - Dark: False, True.

### Item

- Size: `48x48px`.
- Fill: `#FFFFFF`.
- Variants:
  - Size: Bullet, L, S, Spot.
  - Price: False, True.
  - Video: False, True.
- Large item variant: `343x343px`, fill `#FFFFFF`.

### Actions

- Size: `264x154px`.
- Radius: `16px`.
- Vertical layout.
- Padding: `4px 0 6px 0`.
- Gap: `0px`.
- Fill: Light / Base, `#FFFFFF`.
- Effect: Level 2.
- Typography: Body 2 / Normal / 600.

### Page title

- Size: `374x56px`.
- Horizontal layout.
- Padding: `8px` on all sides.
- Gap: `12px`.
- Alignment: space-between/center.
- Width: fill; height fixed.
- Radius: `24/24/0/0px`.
- Fill: Light / Base, `#FFFFFF`.
- Effect: Level 2.
- Typography: Body 2 / Normal / 600.

### 40x40

Network assets, each `40x40px`, fill `#FFFFFF`:

- Solana
- Tezos
- Polygon
- Flow
- Ethereum

### 24x24

Each asset is `24x24px`:

- Profile
- Saved
- Explore
- Verified — fill `#FFFFFF`
- Close
- Checked
- Loader
- BrokenImage
- Pause
- Play

### 16x16

Each asset is `16x16px`:

- Marketplaces: Sudoswap, Looksrare, X2Y2, Rarible, Opensea
- Wallet and explorers: Metamask, Etherscan, Wallet
- Social: Telegram, Instagram, Twitter, Discord, Web
- Watching: Watched, StartWatching, Watch, StopNotifications, Notifications
- Media: NoSound, Sound, Pause, Play
- Actions: Feedback, Error, Question, Copy, CornerDown, Settings, Share, Search, Clear, Reload, Scan, CopyOutlined, Fitscreen, Fullscreen, Edit, Filter, More
- Controls: Collection, MinusFilled, PlusFilled, Minus, Plus, Close, Checked
- Navigation: ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Down, Up
- Verified — fill `#FFFFFF`

## Screen patterns

### Empty state

Two theme variants are shown at `390x844px`:

- Light screen:
  - Fill: `#FFFFFF`.
  - System area: `390x44px`.
  - Header/page title: `390x56px`.
  - Main content region: `390x701px`.
  - Bottom system area: `390x34px`.
- Dark screen:
  - Fill: `#1E1E24`.
  - System area: `390x44px`.
  - Header/page title: `390x56px`.
  - Main content region: `390x701px`.
  - Bottom system area: `390x34px`.

Shared structure:

- Page title uses left chevron, centered title, and right close control.
- Page title padding: `8px`.
- Page title gap: `12px`.
- Page title radius: `24/24/0/0px`.
- Header title uses Body 2 / Normal / 600.
- Content begins with a 48px control row containing “Items”, a sort control, and a filter control.
- Sort and filter controls use a 40px height and 14px radius.
- Filter control includes a 10px notification indicator with the error color.
- Segmented filter controls use 40px height, 14px radius, and 4px gaps.
- Empty content includes a 248px circular placeholder area and centered empty-state messaging.
- Empty-state heading uses Title 3 / Normal / 500.
- Empty-state body uses Body 2 / Normal / 500.
- Bottom system area includes a centered `134x5px` home indicator with `100px` radius.

## Notes for implementers

- Prefer semantic Light/Dark tokens over raw colors.
- Use the usage-ranked styles first: Label, Body 2 / Normal / 600, Caption 2 / Tight / 500, Caption 2 / Normal / 500, and Caption 1 styles.
- Preserve the distinction between Normal and Tight line-height variants.
- Treat 390px as the canonical mobile component width where a component width is specified.
- Use only the listed component families and named icon assets.
- No source values define a general spacing scale or radius scale; use the concrete component values only.
- The Light Divider token has an unusable image value in the extraction; do not substitute a color.
- `Light/Label Secondary` is referenced by usage but has no extracted color value; do not substitute one.
