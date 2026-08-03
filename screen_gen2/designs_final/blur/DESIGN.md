---
name: mobile-app-blur-and-gradient-animation-for-home-screen-community
source: Mobile App Blur and Gradient Animation for Home Screen (Community)
kind: design-system-context
---

# blur - Design System

## Overview

Mobile home-screen design for iPhone 13 / 13 Pro at 390×844px. The experience uses blurred gradients, dark translucent overlays, white typography, a rounded “Get Started” CTA, status-bar chrome, and a home indicator.

## Design language

- Dark, atmospheric visual foundation using black, charcoal, pale gray, and warm yellow gradient forms.
- Background vectors use 100px layer blur.
- A full-screen black translucent overlay uses 200px background blur.
- Primary CTA uses a 179×43px rounded glass-like treatment with layered fills, a 3px linear gradient stroke, and drop shadows.
- Heading uses Georgia at 28px.
- Supporting and action text uses Open Sans.
- Text is primarily white, with copyright text using translucent white.

## Color palette

| Color | Usage |
|---|---:|
| `#000000` | 12 uses; screen fill and CTA blur layer |
| `#DADADA` | 12 uses |
| `#FFFFFF` | 12 uses; primary text and status-bar elements |
| `#0000001A` | 4 uses; full-screen overlay |
| `#0000004D` | 4 uses; CTA shadowed surface |
| `#2F2F2F` | 4 uses; blurred background vector |
| `#F6F6F6` | 4 uses; blurred background vector |
| `#FFCB74` | 4 uses; warm blurred background vector |
| `#FFFFFF1A` | 4 uses; CTA translucent highlight |
| `#FFFFFFBF` | 4 uses; copyright text |

Named color token:

- `Label Color/Dark/Primary`: `#FFFFFF`, 24 uses.

## Type scale

| Size | Typeface | Weight | Tracking | Usage |
|---:|---|---:|---:|---|
| 28px | Georgia Georgia | — | — | Heading: “Think Big. Start Small. Work Fast.” |
| 17px | SF Pro Text Semibold | 600 | -0.41px | `Default/Bold/Body`; status-bar time |
| 16px | Open Sans SemiBold | — | — | CTA label: “Get Started” |
| 12px | Open Sans Regular | — | — | Copyright text |

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 50px: screen frame
- 35px: body and CTA groups
- 24px: status-bar left-side group
- 100px: home indicator

## Elevation & effects

- Background vectors: `layer_blur 100px`.
- Full-screen overlay: `background_blur 200px`.
- CTA dark layer: `layer_blur 100px`.
- CTA surface: two drop shadows, each `10px`; offsets `4px 4px` and `-5px 0`.
- CTA surface: 3px linear gradient stroke.
- Background variant on screen 2: opacity `40%`.

## Components

_None found in source._

## Screen patterns

- Four screens named `iPhone 13 / 13 Pro - 1` through `- 4`, each using a 390×844px frame with a 50px radius and black fill.
- All screens share:
  - Blurred background vectors in `#2F2F2F`, `#FFCB74`, and `#F6F6F6`.
  - A 390×844px black translucent overlay with 200px background blur.
  - A 281×134px body area with a 35px radius.
  - A 179×43px rounded “Get Started” CTA.
  - The 281×64px Georgia heading.
  - iPhone status-bar instance at 390×47px.
  - Home-indicator instance at 375×34px, with a 134×5px indicator.
  - Copyright text sized 219×16px.
- Screens 1 and 4 use the smaller background group dimensions: 735.35×926.83px.
- Screens 2 and 3 use the larger background group dimensions: 1170.33×1100.25px.
- Screen 2 applies 40% opacity to the background group.
- Screen 1 places copyright text before the status-bar and home-indicator layers in the extracted structure; screens 2–4 place it after those layers.

## Notes for implementers

- Preserve the 390×844px iPhone frame and 50px outer radius.
- Use the three background vector colors exactly: `#2F2F2F`, `#FFCB74`, and `#F6F6F6`.
- Apply 100px layer blur to each background vector and 200px background blur to the full-screen overlay.
- Keep the CTA at 179×43px with a 35px radius, white `16px` Open Sans SemiBold label, translucent layered surface, 3px gradient stroke, and the specified drop shadows.
- Use white for primary text and `#FFFFFFBF` for copyright text.
- Do not introduce additional spacing, radius, component, motion, or effect tokens; none were extracted.
