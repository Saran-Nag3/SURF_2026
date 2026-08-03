---
name: mobile-outlook-and-linkedin-community
source: Mobile outlook and LinkedIn (Community)
kind: design-system-context
---

# outlook - Design System

## Overview

- Mobile UI design for 360px-wide Android screens.
- Primary screen height is 800px; the digital wellbeing screen extends to 1236px and Google Play Protect extends to 815px.
- Visual language combines image-based home/app surfaces with Android-style system settings screens.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, grid styles, or effect styles were found.
- The only extracted component family is Android keyboard.

## Design language

- Use full-screen image backgrounds for home and tools surfaces.
- Use white backgrounds for system, settings, apps, feedback, and wellbeing surfaces.
- Home surfaces use white or near-white labels over imagery.
- System surfaces use black text, thin pale-pink dividers, compact icon rows, and rounded action controls.
- App and tool launchers use repeated icon tiles with small semibold labels.
- Navigation and status affordances use small geometric shapes and circular controls.
- Typography is predominantly Inter; the Android keyboard uses Roboto.

## Color palette

Ranked by extracted usage count:

| Color | Usage |
|---|---:|
| `#000000` | 481 |
| `#FFFFFF` | 190 |
| `#FAEAEA` | 75 |
| `#493C3C` | 67 |
| `#FCD5D5` | 25 |
| `#F8F4F4` | 24 |
| `#D9D9D9` | 22 |
| `#FFFAFA` | 10 |
| `#0000005C` | 9 |
| `#445CDA` | 9 |
| `#4248DD` | 8 |
| `#CBCED5` | 8 |
| `#120101` | 6 |
| `#FFF8F8` | 5 |

Observed usage:

- `#FFFFFF`: primary screen and keyboard fill.
- `#000000`: primary system and app text.
- `#FAEAEA`, `#F8F4F4`, `#FFFAFA`, `#FFF8F8`: pale warm surfaces and light text treatments.
- `#FCD5D5`: 1px horizontal dividers.
- `#493C3C`: dark geometric navigation controls.
- `#D9D9D9`: neutral geometric controls and button fills.
- `#445CDA`, `#4248DD`: blue accents.
- `#0000005C`: translucent black.
- `#CBCED5`: muted neutral accent.
- `#120101`: dark warm text.

## Type scale

Fonts and weights are extracted directly from raw typography usage.

### Roboto

- Regular 24px — 72 uses
- Regular 20px — 4 uses
- Keyboard text includes Regular 14px, 16px, 20px, and 24px

### Inter

- Regular 32px — 3 uses
- Regular 16px — 18 uses
- Regular 15px — 4 uses
- Regular 13px — 3 uses
- Regular 12px — 40 uses
- Regular 11px — 23 uses
- Regular 10px — 5 uses
- SemiBold 20px — 42 uses
- SemiBold 16px — 28 uses
- SemiBold 14px — 8 uses
- SemiBold 12px — 55 uses
- SemiBold 10px — 66 uses
- Medium 16px — 27 uses
- Medium 15px — 3 uses
- Medium 14px — 11 uses
- Medium 12px — 16 uses
- Medium 11px — 7 uses
- Medium 10px — 15 uses
- Bold 20px — 21 uses
- Bold 15px — 14 uses
- Bold 14px — 4 uses
- Light 15px — 5 uses
- Light 14px — 5 uses
- Light 13px — 5 uses
- Light 12px — 5 uses
- Light 10px — 34 uses
- Light 8px — 8 uses
- ExtraLight 15px — 5 uses
- ExtraLight 11px — 8 uses

### Observed hierarchy

- 32px: Inter Regular
- 24px: Roboto Regular; also Inter Regular and Inter Medium in screen headings
- 20px: Inter Bold, Inter SemiBold, and Roboto Regular
- 16px: Inter Medium, Inter Regular, and Inter SemiBold
- 15px: Inter Bold, ExtraLight, Light, Medium, and Regular
- 14px: Inter Bold, Light, Medium, and SemiBold
- 13px: Inter Light and Regular
- 12px: Inter Light, Medium, Regular, and SemiBold
- 11px: Inter ExtraLight, Medium, and Regular
- 10px: Inter Light, Medium, Regular, and SemiBold
- 8px: Inter Light

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `10px` — 78×47px home control
- `20px` — 132×44px scan controls
- `30px` — 305×49px submit feedback control

## Elevation & effects

_None found in source._

## Components

### Android keyboard

- Size: `360×244px`
- Fill: `#FFFFFF`
- Text styles: Roboto Regular 14px, 16px, 20px, and 24px
- This is the only extracted component family and component specification.

## Screen patterns

- **Home / Home 2:** 360×800px image-backed launcher surfaces with weather/status text, 52px app icon tiles, small white Inter labels, geometric controls, and grouped app shortcuts.
- **Tools:** 360×800px image-backed tools launcher with a large “Tools” heading, approximately 74–75px-wide tool imagery, 12px Inter SemiBold labels, and bottom geometric controls.
- **Apps:** App directory with 52px icon tiles, 10px Inter SemiBold labels, category labels at 15px Inter Bold, and a white surface.
- **Security settings:** White settings screen with a 32px Inter Regular title, 20px Inter Bold status rows, 20px Inter Light secondary values, icon controls, and 1px `#FCD5D5` dividers.
- **Google Play Protect:** White system detail screen with a 20px title, 100px status illustration, 24px status heading, 16px supporting text, rounded 132×44px scan controls, and 1px `#FCD5D5` dividers.
- **System apps updater:** White system detail screen with a 20px title, 100px status illustration, 16px explanatory text, 20px section heading, 30px app icons, and 1px `#FCD5D5` dividers.
- **Feedback:** White settings-style screen with a 24px heading, 16px medium list items, 14px FAQ text, 1px `#FCD5D5` dividers, and a 305×49px rounded submit control.
- **Digital wellbeing:** Extended white screen with a 24px heading, 13px supporting text, 20px “Today” heading, 16px usage metrics, large circular data visualizations, and repeated settings-style header/divider controls.

## Notes for implementers

- Keep the primary mobile canvas at 360px wide.
- Preserve the distinction between image-backed launcher screens and white system screens.
- Use extracted image assets for launcher icons and illustrations; their hashes identify source imagery but do not define reusable color tokens.
- Do not introduce local variables or inferred design tokens; none were present in the extraction.
- Use only the listed Inter and Roboto font combinations and sizes.
- Use 1px `#FCD5D5` rules for the observed system-screen separators.
- Use rounded controls only at the observed 10px, 20px, or 30px radii.
- The source contains no documented elevation, motion, grid, spacing, or effect specifications.
