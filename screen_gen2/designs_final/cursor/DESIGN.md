---
name: cursor-ui-kit-community
source: Cursor UI Kit (Community)
kind: design-system-context
---

# cursor - Design System

## Overview

- Source: Cursor UI Kit (Community), covering the Cover and Design pages.
- No local variables, paint styles, text styles, spacing tokens, radius tokens, motion tokens, grid styles, or effect styles were found.
- The extraction primarily contains cursor and tool-pointer artwork.
- No component families or component geometry were found.

## Design language

- Minimal monochrome interface language centered on cursor, resize, hand, zoom, move, and selection symbols.
- Artwork commonly uses a white outline or background with a black interior or foreground.
- Decorative cursor artwork is built from vector and grouped shape layers.
- The Cover page includes a 490×326px frame with an image layer and an extracted gradient that is not represented here because its colors are outside the allowed palette.

## Color palette

Ranked by extracted usage:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 67 |
| `#000000` | 64 |
| `#231F20` | 7 |
| `#010101` | 5 |
| `#D2D2D2` | 4 |

- Use `#FFFFFF` for light backgrounds, cursor outlines, and foreground artwork where specified.
- Use `#000000` for dark cursor interiors, labels, and primary dark artwork.
- Use `#231F20` and `#010101` only where the source distinguishes these near-black values.
- `#D2D2D2` is present in the raw extraction but has no documented semantic role.

## Type scale

- `SF Pro Text Medium`, 11px: extracted tooltip label style.
- No other significant fonts or text styles were found.

## Spacing scale

_None found in source._

## Radius scale

- `8px`: Cover / Frame 2 corner radius.
- `88px`: circular group and vector radius in the `copy` asset.
- `0px`: explicit zero radius on a decorative group in the `copy` asset.

## Elevation & effects

- No local effect styles were found.
- The extracted tooltip background includes `43.49px` background blur.
- The extracted tooltip also includes drop shadows with offsets `0 3px` and `0 0px`; source shadow colors and opacity values are not included because they are outside the allowed palette.

## Components

_None found in source._

## Screen patterns

- **Cover / Frame 2:** 490×326px frame, `8px` radius, with a 490×327px image layer.
- **Design / standalone cursor assets:** named assets include `closedhand`, `copy`, `cursor`, `help`, `jk`, `move`, `notallowed`, `openhand`, `pointinghand`, `poof`, `resizenortheastsouthwest`, `screenshotselection`, `zoomin`, and `zoomout`.
- **Design / Cursors collection:** 652×116px group containing a tooltip and cursor variants.
- **Tooltip:** 98×19px frame with a 98×17px background and an 86×13px label. Label typography is `SF Pro Text Medium`, 11px.
- **Resize cursor variants:** 32×32px frames covering single-direction, double-direction, and diagonal resize states.
- **Interaction cursor variants:** 32×32px frames for Help, Cross, Move, Zoom In, Zoom Out, and Hand (Pointing).

## Notes for implementers

- Do not infer a broader component library from this extraction; no component families were found.
- Preserve the named cursor states and their 32×32px frame size where specified.
- Use white outlines behind black cursor artwork when recreating the extracted cursor pattern.
- Keep the tooltip label at 11px using `SF Pro Text Medium`.
- Treat the Cover frame and the cursor artwork as separate patterns.
- No spacing, motion, grid, or reusable effect tokens are documented.
