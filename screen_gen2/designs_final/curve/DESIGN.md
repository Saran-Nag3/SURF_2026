---
name: curve-crousel-prototype-community
source: Curve crousel prototype (Community)
kind: design-system-context
---

# curve - Design System

## Overview

A single-screen carousel prototype on a 1152×700px desktop frame. The visual system uses a pale cyan background, black and white accents, Lato typography, rounded framing, and a horizontally structured content area.

## Design language

- Light, minimal interface with pale cyan surfaces.
- Black text and iconography provide primary contrast.
- White is used for the notification icon container and the selected circular marker.
- Navigation labels are uppercase, with one contextual label: “Where ??”.
- The main frame uses a rounded 20px corner treatment.
- Layout includes repeated nested frames, suggesting a carousel or horizontally scrolling content structure.

## Color palette

Ranked by observed usage:

| Color | Usage |
|---|---:|
| `#000000` | 9 |
| `#FFFFFF` | 7 |
| `#D7F1F8` | 3 |

Additional source colors were present on individual layers but are not included in the allowed palette.

## Type scale

- **14px** — Lato Medium; 6 uses; used for navigation and interface labels.
- **29px** — Lato Medium; used for the “M” heading inside the circular marker.

No local text styles or typography tokens were defined.

## Spacing scale

No spacing tokens were defined.

Observed layout values:

- 10px padding on nested frames.
- 10px gap on nested frames.
- 10px vertical padding on the main content frame.
- 10px vertical padding on the nested content frames.

## Radius scale

- **20px** — main desktop frame corner radius.

No local radius tokens were defined.

## Elevation & effects

- Main frame: drop shadow with 30px value and offset 20px horizontally and 20px vertically.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

### Desktop carousel prototype

- Canvas: 1152×700px.
- Main frame: pale cyan surface with 20px radius.
- Top navigation band: 85px tall.
- Navigation labels: “SOLO”, “FAMILY”, “BEST”, “PRICES”, “Where ??”, and “NOTIFICATIONS”.
- Notification control: 33×33px white frame containing a black notification icon.
- Main content area: nested fixed-size frames with 10px padding and 10px gaps.
- Two large 1152×128px pale cyan ellipses provide curved visual layers.
- Circular marker: 62×62px black ellipse.
- Centered marker frame: 60×55px, containing a white “M” at 29px.

## Notes for implementers

- Treat the 1152×700px frame as the primary desktop composition.
- Preserve the 85px top navigation height.
- Use Lato Medium for the extracted text styles.
- Keep navigation labels uppercase except for the contextual “Where ??” label.
- Reproduce the nested fixed-frame structure as a horizontally oriented carousel/content region rather than flattening it into a standard grid.
- Use only the documented palette values for generated UI: `#000000`, `#D7F1F8`, and `#FFFFFF`.
- No reusable component families were extracted; implementers should derive repeated UI behavior from the screen pattern without assuming additional component specifications.
