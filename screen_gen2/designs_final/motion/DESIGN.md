---
name: inima-playground-animation-example-motion-animated-prototype-community
source: inima playground - animation example, motion, animated, prototype (Community)
kind: design-system-context
---

# motion - Design System

## Overview

Motion-focused visual prototype containing:
- 256×256 star variations.
- Animated “inima” mark studies.
- 418×329 power/energy scenes.
- 320×320 orbital ring and glowing-ball scenes.
- A wide 2560×616 “Tip” banner.

No local variables, paint styles, text styles, spacing tokens, radius tokens, motion tokens, effect styles, grid styles, or reusable components were found.

## Design language

- Futuristic, energetic, and neon-oriented.
- Strong contrast between deep navy backgrounds, vivid cyan, indigo, lavender, coral, and white.
- Uses layered ellipses, rings, glowing balls, radial/linear/angular gradients, blurred duplicates, and opacity variations to convey energy and motion.
- The “inima” mark combines indigo and coral rounded bars with black and white central details.
- Decorative elements are frequently centered within fixed-size frames.
- Typography is limited to Source Han Sans CN in medium and regular weights.

## Color palette

Ranked by usage count in the source:

| Color | Uses | Role |
|---|---:|---|
| `#000000` | 48 | Black details and central mark elements |
| `#FFFFFF` | 34 | White details, highlights, and particles |
| `#6374D4` | 25 | Primary indigo mark and star color |
| `#00F0FF` | 8 | Cyan rings, strokes, and energy effects |
| `#D9D9D9` | 8 | Masked ellipse base fill |
| `#FF928A` | 8 | Coral mark elements and gradient endpoint |
| `#001535` | 6 | Deep navy power-scene background |
| `#2D2470` | 6 | Dark indigo accent |
| `#CBCFEC` | 5 | Pale lavender accent |
| `#000D1F00` | 4 | Transparent deep-navy overlay |
| `#34A853` | 4 | Green accent |
| `#4285F4` | 4 | Blue accent |
| `#7B7B7B` | 4 | Gray accent |
| `#E04439` | 4 | Red accent |
| `#EA4335` | 4 | Bright red accent |
| `#FBBC05` | 4 | Yellow accent |
| `#009CFF1A` | 3 | Translucent blue energy fill |
| `#0A3F52` | 3 | Dark teal accent |
| `#4341B2` | 3 | Tip banner background |

## Type scale

| Size | Family | Weight | Usage count |
|---:|---|---|---:|
| 24px | Source Han Sans CN | Medium | 20 |
| 16px | Source Han Sans CN | Regular | 12 |

## Spacing scale

_None found in source._

## Radius scale

Observed radii:
- `11.2px`
- `11.86px`
- `13.06px`
- `19.59px`
- `22.86px`
- `26.81px`

Additional zero-radius group geometry is present as `0/0/0/0px`.

## Elevation & effects

- Layer blur values: `1px`, `2px`, `3px`, `4px`, `7px`, `8px`, `20px`, and `60px`.
- Blurred duplicate layers are used behind rings, dashed ellipses, and masked glowing-ball groups.
- The “Tip” frame uses a drop shadow with `111.71px` blur and `44.68px` horizontal and vertical offsets.
- Energy scenes use radial, linear, and angular gradients.
- Opacity variations include `10%`, `30%`, `60%`, `95%`, `97%`, and `0%`.

## Components

_None found in source._

## Screen patterns

- **Star studies:** Three 256×256 frames containing centered star shapes. Observed star sizes are `177.92×177.92px`, `224.19×224.19px`, and `248.51×248.51px`; one uses a `60px` layer blur.
- **Inima mark studies:** Multiple 256×256 frames testing animated rounded bars, central black/white details, indigo letter vectors, and coral/indigo accent changes. Mark detail frames range from `19.59×19.59px` to `32.12×32.12px`.
- **Power scenes:** 418×329 frames with a `#001535` background, centered elliptical energy structures, a decorative battery group sized `118×178px`, and vertical particle lines sized `6×76px` or `6×109px`.
- **Orbital scenes:** 320×320 transparent-background frames composed of nested rings, dashed ellipses, glowing balls, and masked ellipse groups. The larger state uses ring geometry up to `154.07×241.85px`, a ball of `54.38×85.36px`, and masked groups of `99.69×156.49px`.
- **Tip banner:** A 2560×616 rounded frame with `26.81px` radius and `#4341B2` fill. Inner content frame is `2440×466px` with a `13.41px` gap; its main text container is `1634.59×466px` with a `32px` gap.

## Notes for implementers

- Treat the source as motion and visual-effect reference rather than a component library.
- Preserve fixed frame sizes where the pattern is reproduced: 256×256, 320×320, 418×329, and 2560×616.
- Use centered composition for the star, energy-ring, and orbital studies unless the target screen explicitly follows a left/top constraint.
- Recreate motion through layered opacity changes, blurred duplicates, changing ellipse dimensions, and gradient transitions.
- Use only the documented palette and typography. No local design tokens or reusable component specifications were extracted.
- Do not infer missing spacing, animation duration, easing, component APIs, or additional colors.
