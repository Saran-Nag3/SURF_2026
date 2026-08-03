---
name: plaid-pattern-mobile-desktop-community
source: Plaid Pattern • 📱 Mobile • 🖥️ Desktop (Community)
kind: design-system-context
---

# plaid - Design System

## Overview

A high-contrast visual system centered on a red-and-black plaid pattern, blue and pink accents, white surfaces, bold display typography, and layered drop shadows.

Source pages:
- 🖼️ Cover
- 🧇 Paid Pattern
- 📬 Contact Card

No local variables, spacing tokens, radius tokens, motion tokens, or grid styles were found.

## Design language

- Use the Plaid Pattern as the primary graphic background.
- Combine #EE2020 red with #0E0F11 black for the plaid treatment.
- Use #4285F4 blue as a primary contact-card background.
- Use white typography and surfaces for high contrast.
- Favor bold, large display typography.
- Use drop shadows for white content blocks, labels, logos, and icons.
- Pink #F439A0 appears as an accent for the Guinea Pig graphic.

## Color palette

Ranked by reported usage where available:

| Color | Usage |
|---|---:|
| #000000 | 92 raw uses |
| #FFFFFF | 6 raw uses; Grey • White: 33 uses |
| #0E0F11 | 4 raw uses |
| #4285F4 | Blue 500: 2 uses |
| #F439A0 | Pink 500: 1 use |
| #EE2020 | Plaid Pattern fill |
| #3C404326 | Effect color |
| #3C40434D | Effect color |

Deduplicated color names:
- Grey • White and white both resolve to #FFFFFF.
- Grey • Black resolves to #000000.
- Blue 500 resolves to #4285F4.
- Pink 500 resolves to #F439A0.

## Type scale

No local text styles were found. Extracted typography:

| Size | Font |
|---:|---|
| 20px | Mark Pro Bold |
| 24px | Lato Regular |
| 32px | Mark Pro Black |
| 36px | Mark Pro MarkPro |
| 48px | Mark Pro Bold |
| 64px | Mark Pro Bold |
| 110px | Mark Pro Heavy |
| 152px | Mark Pro Bold |

The 20px Mark Pro Bold style is the only raw typography style reported with usage, at 6 uses.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

Reported effects:

- `5`: drop shadow with `4px` offset, `0 4`, color #3C40434D; plus drop shadow with `12px` offset, `0 8`, color #3C404326. Reported 15 uses.
- `Elevation Light/1`: drop shadow with `3px` offset, `0 1`, color #3C404326; plus drop shadow with `2px` offset, `0 1`, color #3C40434D. Reported 3 uses.

Use these effects on the white contact-card labels, logo, icon elements, and title blocks where shown in the source.

## Components

### Cover Backgrounds

#### Plaid Pattern

- Component family: Cover Backgrounds
- Size: 960x480px
- Fill: #EE2020
- Contains two 480x480px vector regions.
- Vector fill: #0E0F11
- Used at larger dimensions through scaling, including 1667x834px and 1920x960px instances.

## Screen patterns

### 🖼️ Cover / Cover

- Frame: 1667x834px
- Background: #FFFFFF
- Full-frame Plaid Pattern instance with #EE2020 fill.
- Two #0E0F11 vector regions, each 833.5x834px.
- Decorative Box Shape group: 1200x424px.
- White title: 975x152px, Mark Pro Bold, 152px.
- White subtitle: 700x64px, Mark Pro Bold, 64px.

### 🧇 Paid Pattern / Cover Backgrounds / Plaid Pattern

- Plaid Pattern component: 960x480px.
- Background fill: #EE2020.
- Two #0E0F11 vector regions, each 480x480px.

### 📬 Contact Card

- Frame: 1920x960px.
- Background: #4285F4.
- Plaid Pattern overlay: #4285F4, opacity 80%.
- Overlay contains two #000000 vector regions, each 960x960px.
- Includes a decorative Mii Door frame sized 259x392px.
- White elevated content blocks include `devonv.com + logo`, `Design //`, `Photography //`, and `Master Title`.
- Master Title block: 1200x294px with 20px gap.
- Title text sizes: 48px, 110px, and 36px.
- Social and URL text uses white and Mark Pro Bold, 20px.
- Guinea Pig graphic: 100x70px, filled #F439A0.

## Notes for implementers

- Keep the Plaid Pattern’s red #EE2020 base and black #0E0F11 or #000000 geometric regions distinct.
- Deduplicate #FFFFFF under one white color token.
- Preserve the 80% opacity on the Contact Card Plaid Pattern overlay.
- Use only the extracted typography sizes and font families; no local text styles were defined.
- Apply the named shadow recipes exactly where elevation is shown.
- No radius, spacing, motion, or grid values are available; do not introduce them as system tokens.
- Treat Box Shape, Mii Door, Guinea Pig, icons, logos, and emoji rectangles as screen-specific artwork rather than additional component families.
