---
name: google-home-app-conceito-community
source: 🏡 Google Home app | Conceito (Community)
kind: design-system-context
---

# google-home - Design System

## Overview

Google Home app concept design covering a 1920×1080 cover screen and 414×896 iPhone 11 Pro Max UI screens. The UI includes light and dark themes, room tiles, device controls, quick-action pills, device illustrations, navigation, and status-bar treatments.

## Design language

- Google Sans is the primary typeface; SF Pro Text Semibold is used for the status-bar time.
- The interface uses large page headings, colorful room tiles, and rounded action pills.
- Dark screens use `#202125` backgrounds with `#FFFFFF` primary text.
- Light screens use `#FFFFFF` backgrounds with `#000000` primary text.
- Room and device states are communicated through color-coded surfaces, labels, and icons.
- The cover presents overlapping iPhone mockups on a light `#F4F4F4` background.

## Color palette

Ranked by raw usage count:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 208 |
| `#DADADA` | 147 |
| `#000000` | 97 |
| `#92B2F2` | 27 |
| `#2A2B2E` | 26 |
| `#4285F4` | 26 |
| `#484A4E` | 24 |
| `#00000000` | 21 |
| `#C4C4C400` | 21 |
| `#AFAFAF` | 17 |
| `#DDDDDD` | 17 |
| `#202125` | 14 |
| `#313F57` | 13 |
| `#EA4335` | 13 |
| `#F4F4F4` | 13 |
| `#91C799` | 10 |
| `#CA8A2A` | 9 |
| `#F6D775` | 9 |
| `#ED8484` | 8 |
| `#34A853` | 7 |
| `#7E7E7E` | 7 |
| `#FBBC05` | 7 |
| `#008914` | 6 |
| `#626262` | 6 |
| `#F5F9FF` | 6 |
| `#574B2F` | 5 |

Key usage:

- Primary light background: `#FFFFFF`
- Primary dark background: `#202125`
- Primary light text: `#000000`
- Primary dark text: `#FFFFFF`
- Secondary text: `#AFAFAF`, `#7E7E7E`, `#626262`
- Blue room/device treatment: `#313F57`, `#92B2F2`, `#4285F4`
- Green room/device treatment: `#91C799`, `#008914`, `#34A853`
- Red room/device treatment: `#ED8484`, `#EA4335`
- Yellow room/device treatment: `#F6D775`, `#CA8A2A`
- Neutral surfaces: `#2A2B2E`, `#484A4E`, `#DADADA`, `#DDDDDD`, `#F4F4F4`
- Transparent fills: `#00000000`, `#C4C4C400`

## Type scale

| Size | Typeface | Weight/style | Usage count |
|---:|---|---|---:|
| 144px | Google Sans | Medium | 3 |
| 55px | Google Sans | Regular | 5 |
| 40.42px | Google Sans | Medium | 21 |
| 20.5px | Google Sans | Medium | 8 |
| 20px | Google Sans | Medium | 14 |
| 18px | Google Sans | Medium | 39 |
| 18px | Google Sans | Regular | 10 |
| 18px | Google Sans | Bold | 4 |
| 16.56px | SF Pro Text | Semibold | 21 |
| 14px | Google Sans | Regular | 8 |

Additional cover text sizes:

- `83.25px`, Google Sans Medium: “Google home”
- `41.63px`, Google Sans Regular: “Conceito”

Hierarchy:

- Mobile page headings: `40.42px`, Google Sans Medium.
- Room labels: `20px` or `20.5px`, Google Sans Medium.
- Quick-action labels and section labels: `18px`, Google Sans Medium.
- Status-bar time: `16.56px`, SF Pro Text Semibold.
- Small supporting text: `14px`, Google Sans Regular.

## Spacing scale

_None found in source._

## Radius scale

- `15.38px` and `15.4px`: room tiles.
- `49.64px`: iPhone mockup rectangles on the cover.
- `90px`: action pills and bottom gesture indicator.
- `7px`: device illustration rectangles.
- `600px`: small rounded device-detail rectangle.
- `0px`: groups and some containers without rounded corners.

## Elevation & effects

- Cover iPhone mockups use multiple drop-shadow layers with:
  - Blur `1.8px`, offset `0 0`
  - Blur `14.4px`, offset `0 7.2px`
  - Blur `43.2px`, offset `0 28.8px`
  - Blur `57.6px`, offset `0 43.2px`
- Mobile bottom navigation bars use a drop shadow with blur `4px` and offset `0 4px` in the dark theme.
- Mobile bottom navigation bars use a drop shadow with blur `4px` and offset `0 0` in the light theme.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

- **Cover:** 1920×1080 frame with `#F4F4F4` background, overlapping 1070.06×617.75px iPhone mockups, large “Google home” title, and “Conceito” subtitle.
- **Home, dark:** 414×896 screen with `#202125` background, `Home` heading, six 163px room tiles, settings and menu controls, transparent status bar, and a 104px bottom navigation area.
- **Home, light:** Same home layout on `#FFFFFF`, using dark text and lighter room/device surfaces.
- **Room detail, dark:** 414×896 screen with room heading, back arrow, four 52px-high rounded quick-action pills, “Acesso rápido” and “Dispositivos” labels, device illustration area, and bottom gesture indicator.
- **Room detail, light:** Same room-detail structure with `#FFFFFF` background, `#000000` heading and navigation controls, and light action-pill surfaces.
- **Device detail:** A dark-themed `Nest mini` screen is present in the extracted UI set, with a back arrow and settings control.

## Notes for implementers

- Use the exact 414×896 mobile frame size represented in the source.
- Use 163×163px room tiles with approximately `15.38px` corner radii.
- Use `40.42px` Google Sans Medium for mobile page headings.
- Use 52px-high rounded action pills with a `90px` radius.
- Preserve separate light and dark treatments rather than deriving one theme automatically.
- Keep status-bar content at approximately 41.95px high and the bottom navigation area at 104px high where shown.
- Use only the listed palette colors; no local variables or paint styles were defined.
- Components and component sets were not extracted, so implement repeated UI patterns directly from the documented screen patterns.
