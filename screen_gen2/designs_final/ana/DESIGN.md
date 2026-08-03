---
name: angry-birds-website-prototype-community
source: Angry Birds website prototype (Community)
kind: design-system-context
---

# ana - Design System

## Overview

- Source: Angry Birds website prototype (Community), Page 1.
- Screens are primarily full-screen `2560x1440px` frames.
- The visual system is image-led, with large navigation labels, bold yellow calls to action, and circular social-link controls.
- No local variables, paint styles, text styles, spacing variables, motion variables, grid styles, or component families were found.

## Design language

- Use full-screen image backgrounds as the dominant visual layer.
- Primary navigation labels use uppercase text such as `MOVIE`, `GAMES`, and `ANIMATIONS`.
- Navigation and headings commonly use Oswald Regular.
- Primary calls to action use `#FFC700` fills, `#000000` text, and a `19px` radius.
- Social links are represented as circular outlines using platform-specific colors.
- White and black are used for high-contrast text and surfaces.
- Some screens use white text over image backgrounds; others use black text.

## Color palette

Ranked by observed usage:

| Color | Uses | Observed usage |
|---|---:|---|
| `#000000` | 99 | Primary dark text |
| `#FFFFFF` | 76 | Backgrounds and light text |
| `#00ACED` | 28 | Twitter outline |
| `#3B5998` | 26 | Facebook outline |
| `#517FA4` | 26 | Instagram outline |
| `#BB0000` | 26 | YouTube outline |
| `#FFC700` | 26 | Primary CTA fill |
| `#008542` | 4 | Buy Now screen controls and CTA |

## Type scale

Observed typography:

- Oswald Regular, `46px` — 35 uses; primary navigation and headings.
- Oswald Regular, `40px` — 23 uses.
- Oswald Regular, `30px` — 17 uses; CTA labels.
- Oswald Regular, `39px` — 17 uses.
- Oswald Regular, `41px` — 12 uses.
- Inter Light, `18px` — 11 uses.
- Oswald Regular, `35px` — 9 uses; CTA labels.
- Roboto Regular, `25px` — 5 uses.
- Oswald Regular, `44px` — 4 uses.
- Inter Medium, `30px` — 3 uses.
- Oswald Regular, `68px` — observed on the `MORBIUS` heading.
- Roboto Regular, `34px` — observed on `SONY PICTURES`.
- Inter Regular, `19px`, `25px`, `26px`, `29px`, and `36px` — observed on Arcade content.
- Noto Sans Regular, `26px` and `30px` — observed on Buy Now content.

Observed hierarchy:

- Large Oswald headings: `46px`, `44px`, `41px`, `40px`, `39px`, and `35px`.
- Oswald CTA labels: `30px` and `35px`.
- Roboto content/navigation: `25px` and `34px`.
- Inter navigation/content: `18px`, `19px`, `25px`, `26px`, `29px`, `30px`, and `36px`.
- Large display text: Oswald Regular `68px`.

## Spacing scale

_None found in source._

## Radius scale

- `19px` — used on yellow CTA rectangles.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

- `Angry Birds`: Full-screen image background with black `MOVIE`, `GAMES`, and `ANIMATIONS` navigation, a yellow `BUY NOW!` CTA, and four circular social links.
- `Angry Birds - Movie zatamnjen`, `Angry Birds - Games zatamnjen`, `Angry Birds - Animations zatamnjen`, and `Angry Birds - Creators zatamnjen`: Darkened-state variants using the same navigation, CTA, social-link, and image-led structure.
- `Movie` and movie dimmed variants: Full-screen movie image with a white active `MOVIE` label, supporting white Oswald copy, yellow `GET IT NOW` and `WATCH TRAILER!` CTAs, and social links.
- `Games`: Full-screen games image with active white `GAMES`, black inactive navigation, a yellow `READ MORE` CTA, and social links.
- `Animations`: Full-screen animations image with active white `ANIMATIONS`, a yellow `WATCH THE TRAILER` CTA, and social links.
- `Creators`: Full-screen creators image with the standard black navigation and social-link row.
- `Buy Now!`: Full-screen image with green controls, white Noto Sans labels, and platform controls for Twitter, Facebook, and Reddit.
- `Get It Now`: Full-screen image with white Roboto navigation labels including `EXPLORE`, `MOVIES`, `TELEVISION`, `GAMES`, and `CAREERS`, plus Sony Pictures and Morbius text.
- `Read More`: Full-screen image with black navigation, a yellow `PLAY NOW!` CTA, and social links.
- `Arcade`: Apple-style navigation and product-content screen using Inter Light and Inter Medium typography with white and black text.
- `Store` and `App`: Minimal screens containing isolated navigation or heading text.

## Notes for implementers

- Use only the documented colors: `#000000`, `#008542`, `#00ACED`, `#3B5998`, `#517FA4`, `#BB0000`, `#FFC700`, and `#FFFFFF`.
- Preserve exact observed font families, weights, and sizes; no local typography styles were defined.
- Use `19px` radius only where a rounded CTA rectangle is required.
- Social controls should be circular or near-circular, with `1px` outlines in the documented platform colors.
- Background imagery is essential to the screen compositions; source image assets were extracted as image fills.
- No component geometry or reusable component definitions were extracted.
