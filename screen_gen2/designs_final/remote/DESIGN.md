---
name: remote-app-hyundai-community
source: REMOTE APP (Hyundai) (Community)
kind: design-system-context
---

# remote - Design System

## Overview

Hyundai remote vehicle-control app concept for a 375×812px mobile viewport, presented in Apple iPhone mockups and larger 1920×1266px showcase frames.

Primary flows:
- Landing page: passcode entry with a 10-key numeric keypad.
- Main screen: vehicle connection status, lock/unlock control, vehicle image, navigation, alerts, and status cards.
- Checkup screen: vehicle status dashboard with tabs, status cards, and maintenance information.
- Final presentation frames: showcase the landing page and main screen inside device mockups with explanatory presentation copy.

No local variable collections, text styles, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Dark automotive interface layered over vehicle imagery.
- High-contrast white typography over dark imagery and dark blue surfaces.
- Hyundai-oriented blue and cyan accents, including `#003082`, `#00EBFF80`, and `#14EB29`.
- Translucent glass-like cards and controls using low-opacity fills.
- Rounded mobile surfaces and circular controls.
- Status states use cyan/teal for connection, green for positive indicators, and red for danger alerts.
- Large editorial headings appear in Noto Serif and Poppins across presentation frames.
- The mobile UI uses Poppins primarily, with Noto Serif Light for keypad numerals.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Use |
|---|---:|---|
| `#FFFFFF` | 124 | Primary text, light surfaces, status bar |
| `#DADADA` | 64 | Secondary navigation text and neutral UI |
| `#000000` | 40 | Dark fills and presentation text |
| `#00474D42` | 20 | Translucent keypad circles |
| `#A7A7A780` | 20 | Muted icon treatment |
| `#BFBAAF` | 17 | Landing-page decorative graphic |
| `#050505` | 14 | Dark keypad component fill and text stroke |
| `#A0A0A0` | 14 | Secondary navigation and inactive icons |
| `#C4C4C433` | 12 | Translucent dashboard cards |
| `#F3F3F3` | 12 | Alert icon details |
| `#14EB2987` | 8 | Translucent positive status accent |
| `#FDFDFD` | 8 | Keypad circle interiors |
| `#FF0000` | 8 | Danger indicator |
| `#00EBFF80` | 6 | Cyan glow and active navigation indicator |
| `#14EB29` | 6 | Positive status accent |
| `#DADADA52` | 6 | Home indicator |
| `#C3C5C5` | 4 | Neutral UI color |
| `#00000099` | 3 | Presentation explanatory text |
| `#003082` | 3 | Primary blue surfaces and controls |
| `#FFFFFFB2` | 3 | Secondary white text |

Named design tokens:
- Carbon / Darkest: `#24262B`
- Carbon Neutral/300: `#D6D9DD`
- Screen Components: `#262C2D`
- fl-gray-600: `#636F73`
- fl-gray-1000: `#121515`
- Device BG: `#121515`
- Device Surround: `#3A4245`
- Side Buttons: `#121515`

## Type scale

| Size | Family and weight | Observed use |
|---:|---|---|
| 72px | Roboto Regular | Large presentation heading, “Creta” |
| 72px | Noto Serif TC SemiBold | Presentation title, “HYUNDAI REMOTE APP” |
| 36px | Noto Serif Light | Passcode keypad numerals |
| 36px | Poppins SemiBold | Presentation heading, “HOME PAGE” |
| 36px | Poppins Bold | Vehicle name, “CRETA” |
| 36px | Poppins Regular | Presentation explanatory heading |
| 24px | Poppins Bold | Mobile screen heading |
| 24px | Poppins SemiBold | “CAR IS LOCKED”; presentation subtitle |
| 24px | Poppins Medium | Presentation subtitle |
| 24px | Poppins Regular | Presentation explanatory copy |
| 14px | Noto Sans Tamil UI Bold | Observed hierarchy style |
| 14px | Poppins SemiBold | Mobile labels |
| 14px | Poppins Regular | Mobile navigation labels |
| 14px | Poppins Medium | “Enter your Passcode” |
| 13px | Poppins SemiBold | Dashboard labels |
| 13px | Poppins Regular | “Last updated now” |
| 13px | Poppins Light | Sync metadata |
| 13px | Jua Regular | “CONNECTED” |
| 11px | Poppins Light | Small supporting text |
| 10px | Poppins Bold | Small labels |
| 10px | Poppins Regular | Small supporting text |
| 9px | Poppins Light | Smallest observed text |

Typography hierarchy prioritizes large serif or bold sans-serif headings, followed by Poppins labels and light metadata.

## Spacing scale

_None found in source._

Known component dimensions:
- Mobile viewport: `375×812px`
- Status bar component: `375×44px`
- Home indicator: `134×5px`
- Main lock control: `76×76px`
- Secondary circular control: `63×63px`
- Dashboard cards: `166×108px`, `136×108px`, `136×226px`, and `311×79px`
- Landing keypad circles: `74×74px`
- Password indicators: `14×14px`

## Radius scale

Observed radii:
- `15px`: dashboard cards and main-screen status cards
- `30px`: mobile screen frames in final presentation mockups
- `40px`: presentation glass panel
- `50px`: Page 1 mobile screen frames
- `100px`: home indicator

## Elevation & effects

- Device Dropshadow:
  - Drop shadow offset `0 0`, color `#00154024`
  - Drop shadow offset `0 2`, color `#0015400D`
  - Drop shadow offset `13 37`, color `#00000039`
- Cyan glow: `#00EBFF80` with layer blur `20px`
- Main circular controls use layer blur `5px`.
- Landing keypad circles use an inner shadow with offset `-5 2`.
- Other observed effects include background blur, layer blur, drop shadows, and inner shadows.

## Components

Allowed component families:

### Mode=Light, Type=Video Active

- Size: `375×44px`
- Fill: `#FFFFFF`
- Used as the mobile status-bar / device-top component.
- Contains an iPhone X or newer decorative status-bar frame.

### Ellipse 1

- Size: `14×14px`
- Component fill: `#050505`
- Inner ellipse fill: `#FDFDFD`
- Used for passcode indicators and keypad-related circular elements.

Other recurring component patterns:
- **Primary lock control:** `76×76px` circular control with a lock icon and blue/cyan treatment.
- **Secondary action control:** `63×63px` circular control with a bullhorn icon.
- **Danger indicator:** `15×15px` red circle using `#FF0000`, with `#F3F3F3` alert details.
- **Navigation controls:** home, checkup, and settings icons, generally `22–26px`, with active white or cyan treatment and inactive `#A0A0A0`.
- **Dashboard cards:** translucent rounded rectangles using `#C4C4C433`.
- **Passcode keypad:** `74×74px` translucent circular keys using `#00474D42`, with white Noto Serif Light numerals at `36px`.
- **Home indicator:** `134×5px`, radius `100px`, fill `#DADADA52`.

## Screen patterns

### Landing page

- Mobile frame: `375×812px`, radius `50px`.
- Full-screen vehicle imagery forms the backdrop.
- Passcode prompt: “Enter your Passcode” in white Poppins Medium at `14px`.
- Six password indicators appear above the keypad.
- Ten circular numeric keys use `74×74px` circles and `36px` Noto Serif Light numerals.
- Keypad circles use translucent teal fill `#00474D42` with dark outlines and inner shadow treatment.
- Decorative branding artwork uses `#BFBAAF`.

### Main screen

- Mobile frame: `375×812px`, radius `50px`.
- Top status-bar component occupies `375×44px`.
- Vehicle name “CRETA” uses Poppins Bold at `36px`.
- A blue-to-cyan hero treatment overlays the vehicle imagery.
- Connection state is shown as “CONNECTED”.
- Sync metadata reads “Last Sync 2 min ago”.
- Main action state reads “CAR IS LOCKED” with supporting text “HOLD TO UNLOCK”.
- Prominent lock control is circular and `76×76px`.
- Secondary bullhorn action is circular and `63×63px`.
- Bottom navigation includes home, checkup, and settings controls.
- Red danger indicator appears near the navigation area.
- Rounded translucent status cards use `15px` radius.

### Checkup screen

- Mobile frame: `375×812px`, radius `50px`.
- Uses the same vehicle-image background, status-bar component, and bottom navigation pattern as the main screen.
- Heading: “Vechile Status” in Poppins Bold at `24px`.
- Tab labels include “Summary”, “Mileage”, “Maintainance”, and “Statistic”.
- Active tab uses white text; inactive tabs use `#DADADA`.
- “Last updated now” appears as supporting metadata.
- Dashboard uses translucent rounded cards in multiple sizes, including `166×108px`, `136×108px`, `136×226px`, and `311×79px`.
- “Tyre Pressure” is an observed dashboard label in Poppins SemiBold at `13px`.

### Final presentation frames

- Canvas: `1920×1266px`.
- Uses radial blue-to-white presentation backgrounds.
- Device mockups contain the landing page and main screen.
- Presentation headings include “HYUNDAI REMOTE APP” and “HOME PAGE”.
- Supporting copy is set in Poppins and uses dark text over light presentation surfaces.
- Large rounded translucent presentation panels use `40px` radius and background blur.

## Notes for implementers

- Treat the landing page, main screen, and checkup screen as separate mobile states sharing the same background, status bar, and bottom navigation patterns.
- Preserve the `375×812px` mobile composition before adapting to larger canvases.
- Use only the observed palette; prioritize `#FFFFFF`, `#DADADA`, `#000000`, `#003082`, `#00EBFF80`, `#14EB29`, and `#FF0000` for primary visual states.
- Keep primary actions circular and visually prominent; the lock control is larger than the secondary bullhorn control.
- Use translucent surfaces for dashboard cards rather than opaque panels.
- Use Poppins for the product UI and Noto Serif Light for passcode numerals.
- Preserve the exact observed labels where reproducing the screens, including “Vechile Status”, “Maintainance”, “Statistic”, “CAR IS LOCKED”, and “HOLD TO UNLOCK”.
- Image assets are present in the source extraction but are identified only by hashes; no image asset specifications were provided.
