---
name: alltrails-ios-screens-community
source: AllTrails iOS Screens (Community)
kind: design-system-context
---

# alltrails - Design System

## Overview

AllTrails iOS screen designs covering onboarding, exploration, search, maps, trail details, navigation, trail completion and reviews, community, saved lists, profile, settings, and premium plans. The source is primarily a collection of 390x844px mobile screen compositions presented on warm off-white section backgrounds.

## Design language

- Image-led iOS experience with trail, map, and community-oriented screens.
- Warm off-white section background: `#F7F4F0`.
- Dark charcoal typography and iconography: `#181D27`.
- Mobile screens use strongly rounded outer corners with a 32px radius.
- Display typography uses Inter with large, bold headings.
- Supporting presentation material uses rounded chips, translucent fills, and soft drop shadows.
- No formal local design-token collections were found.

## Color palette

Ranked by recorded usage:

| Color | Usage | Role |
|---|---:|---|
| `#0000001A` | 26 uses | Section strokes and subtle borders |
| `#F7F4F0` | 26 uses | Section and screen-group background |
| `#181D27` | 5 uses | Primary dark text and vector/icon fills |

## Type scale

Font family: Inter.

| Size | Weight | Observed usage |
|---:|---|---|
| 120px | SemiBold | Large display heading |
| 96px | Regular | Supporting display heading |
| 40px | Medium | Chip labels |
| 36px | SemiBold | Attribution/supporting heading |

No local text styles or ranked typography tokens were found.

## Spacing scale

_No spacing variables or formal spacing tokens found in source._

Observed layout values include:

- 8px frame gap
- 12px chip gap
- 18px horizontal chip padding
- 24px frame gap
- 32px chip padding and frame gap
- 60px frame gap

## Radius scale

Observed radii:

- 16px: chips
- 20.61px: decorative grouped artwork
- 32px: mobile screen frames
- 32.88px: circular image frame

## Elevation & effects

- `hi`: drop shadow with `43.46px` blur, `0px` horizontal offset, `4.35px` vertical offset, color `#C0C0C040`.
- The `hi` effect is recorded as the most-used effect style with 2 uses.

## Components

_None found in source._

## Screen patterns

- **Onboarding:** 12 mobile screens, each 390x844px with a 32px outer radius.
- **Explore:** 12 mobile screens, each 390x844px with a 32px outer radius.
- **Search:** 27 or more mobile screens, each 390x844px with a 32px outer radius.
- **Map:** 7 mobile screens, each 390x844px with a 32px outer radius.
- **Trail Details:** 51 or more mobile screens, each 390x844px with a 32px outer radius.
- **Navigate Trail:** 12 mobile screens, each 390x844px with a 32px outer radius.
- **Complete Trail & Review:** a sequence of mobile screens, each 390x844px with a 32px outer radius.
- Additional source sections cover Trail Reviews, Community, Saved & List Creation, Profile, Settings, and Premium Plan.
- Screen collections are arranged inside large sections using `#F7F4F0` backgrounds and `#0000001A` strokes.
- Thumbnail presentation includes large Inter headings, rounded chips, attribution, and decorative artwork with soft shadow effects.

## Notes for implementers

- Treat 390x844px as the documented mobile screen size.
- Apply a 32px radius to full mobile screen compositions unless a more specific radius is documented.
- Use only the documented palette colors: `#F7F4F0`, `#181D27`, `#0000001A`, and `#C0C0C040`.
- Use Inter for the documented typography sizes and weights.
- Do not infer additional component families, spacing tokens, motion tokens, or local text styles; none were extracted.
- Preserve the image-led nature of the screens. Image assets are present in the source, but their visual contents are not represented as reusable design tokens.
