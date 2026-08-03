---
name: apex-legends-website-design-community
source: Apex Legends - Website design (Community)
kind: design-system-context
---

# apex-legends - Design System

## Overview

- Source page: Apex Website design.
- Visual direction centers on a dark, high-contrast interface with white Oxanium typography, red accents, geometric navigation decoration, and large character/logo imagery.
- Primary extracted screen: a 1920×1080 Apex Legends landing page.
- Additional screens: a 1920×1080 loading screen and a 706×302 information screen.

## Design language

- Use Oxanium as the primary typeface.
- Favor uppercase navigation and action labels.
- Use strong white-on-dark contrast.
- Use red as the primary action and brand accent.
- Use geometric, angular decorative forms around navigation, logos, loading indicators, and promotional controls.
- Use blurred translucent overlays for prominent controls and visual layering.
- Preserve large-scale background imagery and oversized logo/character compositions where applicable.

## Color palette

Ranked by extracted usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 160 | Primary text, light fills, vector artwork, borders |
| `#C83C35` | 6 | Brand and primary-action accent |
| `#FFFFFF1A` | 4 | Translucent decorative overlay |
| `#000000` | 3 | Dark screen and background fill |
| `#00000066` | 3 | Translucent dark overlay |

## Type scale

Typeface: Oxanium.

| Size | Weight/style | Extracted usage |
|---:|---|---:|
| 18px | SemiBold | 7 uses |
| 18px | Bold | Used by the “DOWNLOAD FOR FREE” navigation action |
| 24px | Regular | 3 uses |
| 24px | Bold | Used by “PLAY FREE NOW” and “WATCH THE TRAILER” |
| 32px | SemiBold | Used by the information-screen heading |

Usage guidance:

- Navigation labels use Oxanium SemiBold at 18px.
- The navigation download action uses Oxanium Bold at 18px.
- Supporting platform text uses Oxanium Regular at 24px.
- Promotional actions use Oxanium Bold at 24px.
- The information-screen heading uses Oxanium SemiBold at 32px.

## Spacing scale

No spacing variables were found. Extracted layout spacing values:

- `0px` padding
- `10px` padding and gap
- `12px` padding
- `24px` padding and gap
- `40px` navigation-link gap
- `350px` menu gap

Extracted control padding:

- Download action: vertical `12px`, horizontal `24px`.
- Platform text container: `10px` padding on all sides.

## Radius scale

_None found in source._

## Elevation & effects

- Effect style: `Blurred`.
- Background blur: `10px`.
- Button outline treatment uses `background_blur 30px`.
- Prominent promotional controls layer a translucent dark overlay with blurred translucent decorative vectors.
- No elevation, shadow, or radius tokens were found.

## Components

_None found in source._

## Screen patterns

### Apex Legends landing screen

- Canvas: 1920×1080px.
- Full-screen world imagery forms the background.
- A large top navigation area includes decorative geometry, a logo, uppercase navigation links, and a red download action.
- Central content stacks a logo, platform-support copy, and two equal promotional controls.
- Promotional controls are 281×71px and separated by a 24px gap.
- Right-side visual composition combines a large red logo mark, a character image, and an additional red logo piece.

### Loading screen

- Canvas: 1920×1080px.
- Solid black background.
- Centered decorative Apex loading icon measuring 80×95.25px.

### Information screen

- Canvas: 706×302px.
- Solid black background.
- White Oxanium heading and supporting contact copy.
- Decorative angular navigation artwork occupies the right side.

## Notes for implementers

- Do not introduce additional color tokens beyond the extracted palette.
- Keep navigation labels uppercase and use the extracted Oxanium weights and sizes.
- Treat the 1920×1080 landing screen as the primary composition target.
- Preserve the large image-led visual hierarchy: background first, navigation at the top, centered promotional content, and oversized right-side artwork.
- Use the red accent for primary calls to action and brand marks.
- For promotional controls, retain the 281×71px geometry, 24px inter-control gap, dark translucent blurred base, light outline, and white uppercase label treatment.
- No reusable component families or local design tokens were extracted; implement repeated patterns consistently without naming them as source-defined components.
