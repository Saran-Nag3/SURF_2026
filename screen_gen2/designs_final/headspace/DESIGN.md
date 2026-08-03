---
name: headspace-ios-screens-community
source: Headspace iOS Screens (Community)
kind: design-system-context
---

# headspace - Design System

## Overview

Headspace iOS screen collection covering onboarding, subscription, Today, exercise, reflection, search, profile, favorites and recents, account settings, and cancellation flows.

The source contains mobile screens sized 393 × 852px, presented in grouped flow sections. No local variables, styles, component sets, grids, motion tokens, or spacing tokens were found.

## Design language

- Calm, minimal mobile wellness interface.
- Warm off-white section background: `#F7F4F0`.
- Dark navy-gray primary text and icon color: `#181D27`.
- Large Inter typography with strong display headings.
- Rounded mobile screen containers with a `32px` radius.
- Soft translucent surfaces and restrained shadows.
- Content is organized as sequential flows and screen collections rather than extracted reusable components.

## Color palette

Ranked by usage in the source:

| Color | Usage | Role |
|---|---:|---|
| `#0000001A` | 34 uses | Section stroke / subtle border |
| `#F7F4F0` | 34 uses | Flow section background |
| `#757575` | 12 uses | Secondary neutral |
| `#181D27` | 5 uses | Primary text and icon color |
| `#C0C0C040` | Effect usage | Drop-shadow color |

## Type scale

Font family: Inter.

| Size | Weight | Observed use |
|---:|---|---|
| `120px` | SemiBold | Large heading |
| `96px` | Regular | Secondary large heading |
| `40px` | Medium | Chip labels |
| `36px` | SemiBold | Attribution text |

No local text styles or ranked typography tokens were found.

## Spacing scale

Observed spacing values:

- `8px` frame gap
- `12px` chip icon-to-label gap
- `18px` chip vertical padding
- `24px` attribution frame gap
- `32px` chip horizontal padding and frame gap
- `60px` content frame gap

No spacing variables were found.

## Radius scale

Observed radii:

- `16px` chips
- `25.77px` decorative group
- `32px` mobile screen containers
- `32.88px` circular logo frame

## Elevation & effects

- Most-used effect: `hi`, 2 uses.
- `hi`: drop shadow with `0px` horizontal offset, `4.35px` vertical offset, `43.46px` blur, color `#C0C0C040`.
- A `10px` layer blur is used on a gradient overlay.
- Other source shadows use colors outside the allowed palette and are not specified here.

## Components

_None found in source._

## Screen patterns

- Mobile screens use a consistent `393 × 852px` canvas with a `32px` outer radius.
- Flow sections use a `#F7F4F0` background and `#0000001A` 1px stroke.
- Onboarding is represented as a long sequence of screens.
- Subscription and cancellation flows are grouped into sequential screen collections.
- Core content areas include Today, search, profile, favorites and recents, account settings, guided programs, reflections, and exercise experiences.
- Exercise patterns are separated into meditation, sleep, move, and music experiences.
- The thumbnail presentation uses a large Inter heading, paired translucent chips, logo/attribution content, and soft decorative effects.
- Screen content is primarily represented by image-filled screen frames; detailed internal UI geometry was not extracted.

## Notes for implementers

- Use only the palette documented above; do not infer additional colors from unstyled or image content.
- Use Inter for all available text treatments.
- Preserve the large heading scale of `120px` and `96px` where a display treatment is needed.
- Use `32px` radius for mobile screen containers and `16px` radius for chip-like surfaces.
- Apply the documented spacing values rather than introducing an unverified spacing system.
- Treat the screen groups as flow references, not as reusable component specifications.
- No component family or component geometry was extracted; build reusable components only when required by the generated interface, without claiming they are source-defined.
