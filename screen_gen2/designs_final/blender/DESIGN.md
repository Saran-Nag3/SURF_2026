---
name: blender-ui-icons-community
source: Blender UI Icons (Community)
kind: design-system-context
---

# blender - Design System

## Overview

- Community Blender UI icon and thumbnail asset collection.
- Source page: `Thumbail & Icons`.
- The source is primarily an asset catalog containing Blender logos, alert icons, preview icons, and categorized brush and curve icons.
- No local variables, styles, or component families were extracted.

## Design language

- Asset-led and iconographic, with image-based icon tiles.
- White is used for vector iconography and informational text.
- Presentation includes dark surfaces, translucent overlays, blur, and shadow effects.
- One background uses a linear dark-to-orange gradient.
- Icon collections are arranged in fixed horizontal frames with consistent 96px asset tiles and 40px gaps.

## Color palette

| Color | Usage |
|---|---:|
| `#FFFFFF` | 1693 uses |
| `#F9F9F93D` | 827 uses |

## Type scale

- Inter Bold, 50px — 4 uses.
- Inter Regular, 18.86px — used for informational text.
- No local text styles were found.

## Spacing scale

- 0px — frame padding.
- 40px — repeated horizontal gap between icon tiles.

## Radius scale

- 10px — informational overlay container and surface.

## Elevation & effects

- Background blur: 40px, used on the informational overlay surface.
- Drop shadow: 6px, with offset `3px 4px`, used on informational text.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

- **Thumbnail** — 1920×1080px image-filled frame with a 1px white stroke.
- **Background** — 4236×1728px rectangle using a linear dark-to-orange gradient and a 1px stroke.
- **More Info** — 1729×1584px rounded informational overlay with a translucent surface, 40px background blur, and white text.
- **gp_brush_option** — 640×232px horizontal icon collection containing ten 96×96px image tiles with 40px gaps.
- **gp_brush** — 776×232px horizontal icon collection containing twelve 96×96px image tiles with 40px gaps.
- **Brush** — 368×212px horizontal icon collection containing six 96×96px image tiles with 40px gaps.
- **Curves** — 652×357px icon collection containing eleven 96×96px image tiles with 40px gaps.
- **blender_logo.png** — 548×137px logo asset frame.
- **prvicons.svg** — 605×86px white vector icon strip.
- **alert_icons.svg** — 256×64px white vector strip containing warning, question, error, and info icons.
- **blender_icons.svg** — 1505×1600px white vector icon collection composed of large decorative layers with varying opacity.

## Notes for implementers

- Treat brush and curve assets as image-backed icon tiles rather than reusable component families.
- Preserve the 96px tile size and 40px horizontal gap when recreating the categorized icon collections.
- Use white for icon and informational text treatments.
- Use a rounded 10px translucent panel with 40px background blur for the More Info pattern.
- Use Inter Bold at 50px and Inter Regular at 18.86px only where those source text treatments are required.
- No component geometry, local variables, local styles, grid styles, spacing tokens, radius tokens, motion tokens, or effect styles were extracted.
