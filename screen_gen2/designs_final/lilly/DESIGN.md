---
name: lilly
source: Grillas Android & iOS listas para usarse y replicarse (Community)
kind: design-system-context
---

# lilly - Design System

## Overview

A grid-focused design system for iOS and Android, presented through a 16:9 cover slide, mobile grid examples, measurement diagrams, and support-platform graphics.

No local variables, paint styles, text styles, spacing styles, radius styles, motion tokens, effect styles, or grid styles were found.

## Design language

- Minimal, instructional, and diagrammatic.
- Primary visual language uses black, white, gray, and lime green.
- Typography is heavy and oversized for cover and promotional messaging.
- Mobile examples use white backgrounds and explicit column, gutter, and margin measurements.
- Decorative logos and measurement annotations support the instructional presentation.
- Support graphics use large rounded-square tiles and centered platform marks.

## Color palette

Ranked by raw usage:

| Color | Usage |
|---|---:|
| `#000000` | 42 |
| `#FFFFFF` | 9 |
| `#666666` | 6 |
| `#A4C639` | 6 |

Observed applications:

- `#A4C639`: cover slide background.
- `#666666`: cover logo, ampersand, and title.
- `#000000`: measurement labels and support typography.
- `#FFFFFF`: mobile screen backgrounds and support tile backgrounds.

## Type scale

No local text styles were found.

Observed typography:

| Font family | Weight | Size | Usage |
|---|---|---:|---|
| Roboto | Black | 344.95px | Large support headings; 8 uses |
| Roboto | Black | 100.02px | Cover ampersand |
| Roboto | Black | 75.12px | Cover title |
| Roboto | Regular | 16px | iOS and Android grid measurement labels |

## Spacing scale

No spacing tokens were found.

Observed mobile grid specifications:

- iOS: 77px columns, 11px gutters, 18px margins.
- Android: 76px columns, 8px gutters, 16px margins.
- iOS reference frame: 375 × 667px.
- Android reference frame: 360 × 640px.

## Radius scale

No radius tokens were found.

Observed corner radii:

- 25px: cover title rectangle.
- 183px: large support-platform tiles.
- 0px: decorative measurement groups.

## Elevation & effects

No elevation, motion, or local effect styles were found.

Observed effects:

- Support tiles use flat fills with centered platform marks.
- Apple Podcast uses a linear gradient in the source, but its source colors are not included in the allowed palette.
- No shadows or elevation values were extracted.

## Components

_None found in source._

## Screen patterns

- **Cover:** 1920 × 1080px 16:9 slide with a lime-green background, gray logo and ampersand, and a rounded title bar reading “Grids for iOS and Android.”
- **iOS grid reference:** 375 × 667px white mobile frame, documented with 77px columns, 11px gutters, and 18px margins.
- **Android grid reference:** 360 × 640px white mobile frame, documented with 76px columns, 8px gutters, and 16px margins.
- **Support platform tiles:** Large square tiles, generally 1831 × 1831px or 1756.63 × 1756.63px, with 183px corner radii where specified and centered platform marks.
- **Support messaging:** Oversized Roboto Black headings for courses, professional backing, podcast content, and donation messaging.
- **Support platforms represented:** YouTube, PayPal, Apple Podcast, Amazon Prime, Spotify, YouTube Music, Deezer, and Linkedin.

## Notes for implementers

- Preserve the distinction between iOS and Android grid metrics; do not normalize them to one shared grid.
- Use the exact mobile reference sizes: 375 × 667px for iOS and 360 × 640px for Android.
- Use Roboto Black for high-impact headings and Roboto Regular at 16px for grid annotations.
- Treat the cover title rectangle as a 25px-radius shape.
- Treat support tiles as large rounded squares with 183px radius where the source specifies it.
- Keep the palette limited to `#000000`, `#666666`, `#A4C639`, and `#FFFFFF`.
- No reusable component families or component geometry were extracted; implement repeated patterns directly from the screen descriptions.
