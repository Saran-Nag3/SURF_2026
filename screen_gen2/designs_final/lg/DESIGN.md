---
name: washing-machine-interface-lg-community
source: Washing Machine Interface - LG (Community), Page 1
kind: design-system-context
---

# lg - Design System

## Overview

A washing-machine control interface centered on a dark control board inside a large white canvas. The visual system uses warm mauve circular controls, dark brown surfaces, light-gray rectangular controls, and white labels. Typography combines Poppins for interface labels and values with Open Sans SemiBold for compact button labels.

## Design language

- **Overall character:** appliance control panel; compact, utilitarian, and high-contrast.
- **Primary surface:** dark brown and black control surfaces.
- **Primary actions:** mauve circular controls with light-gray borders and drop shadows.
- **Secondary controls:** light-gray rectangular buttons with dark text.
- **Labels:** white text on dark surfaces and black text on light-gray controls.
- **Geometry:** rounded rectangular controls, circular action buttons, and tightly packed numeric/status displays.
- **Alignment:** controls use left/top placement extensively; the touch board and time-left display use centered constraints.
- **Typography:** Poppins provides light, medium, and black weights; Open Sans SemiBold provides compact control labels.

## Color palette

Ranked by reported usage:

| Color | Usage | Role |
|---|---:|---|
| `#E5E5E5` | 68 | Light-gray controls, borders, sensor cells, icon backgrounds |
| `#FFFFFF` | 25 | Canvas, labels, button text, and light control surfaces |
| `#000000` | 23 | Dark text and strokes |
| `#966363` | 10 | Primary circular control buttons |
| `#2D1E1E` | 3 | Dark brown sensor/control surface |

No local paint styles or color variables were found.

## Type scale

### Reported typography usage

| Font | Weight | Size | Usage count |
|---|---|---:|---:|
| Open Sans | SemiBold | 12px | 10 |
| Poppins | Light | 10px | 10 |
| Open Sans | SemiBold | 6px | 8 |
| Poppins | Medium | 10px | 5 |
| Poppins | Light | 12px | 3 |

### Hierarchy

- **12px:** Open Sans SemiBold and Poppins Light.
- **10px:** Poppins Light and Poppins Medium.
- **6px:** Open Sans SemiBold.

### Additional observed text sizes

- Poppins Light: 5px, 9px, 12px, 14px.
- Poppins Medium: 10px.
- Poppins Black: 20px.
- Open Sans SemiBold: 5px, 6px, 12px.
- Quantico Regular: 18px.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `0px`: square group geometry.
- `2px`: outer washing-machine frame corners; sensor board corners.
- `3px`: time-left display, icon frames, right-side and left-side button groups.
- `6px`: touch board and temperature option buttons.
- `55px`: outer washing-machine frame bottom corners.

## Elevation & effects

- Circular primary controls use a drop shadow with a `0 4px` offset and a reported `4px` effect value.
- The Spin control contains the same drop-shadow effect twice.
- Borders are used on circular controls, icon frames, the time-left display, and the sensor board.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

### Page 1 canvas

- White rectangle: `1256x465px`.
- Main washing-machine interface frame: `1012x292px`.
- Outer frame uses a dark translucent fill in the source, a black `1px` stroke, and asymmetric rounded corners.
- Central touch board: `534x171px`, dark surface, black `1px` stroke, `6px` radius.
- Touch board includes:
  - Temperature heading and Warm, Hot, and Cold options.
  - Water-detergent sensor board with ten light-gray cells and numbered values.
  - Time-left display.
  - Five small icon controls.
  - Delay Start and Time Left indicators.
  - Two columns of compact wash-program buttons.
- Main interface includes TurboDrum branding, wash/rinse/minute markings, decorative arrows, and image-based decorative assets.
- Outer controls include circular buttons for Air Dry, Temp, Wash, Water, Rinse, Spin, Delay, and Program.
- Larger controls include Start Pause and Power Auto Off.

### Control patterns

- **Temperature options:** `54x20px` light-gray rounded rectangles with `6px` radius and Poppins Light `12px` black labels.
- **Program buttons:** `60x18px` light-gray rounded rectangles with `3px` radius and Open Sans SemiBold `6px` black labels.
- **Primary circular controls:** approximately `58–60px` wide, mauve fill, light-gray `2px` border, white Open Sans SemiBold `12px` label.
- **Start Pause control:** `70x65px` ellipse with a mauve fill and white two-line label.
- **Power control:** `59x56px` mauve ellipse with an inner image-based symbol and white label.
- **Sensor cells:** `29x15px` light-gray rounded rectangles with `3px` radius.

## Notes for implementers

- Use only the listed palette colors for newly authored UI.
- Preserve the contrast pattern: white labels on dark or mauve surfaces, black labels on light-gray controls.
- Use Poppins Light for spacious headings and values; use Open Sans SemiBold for compact button labels.
- Keep primary actions circular and secondary program controls rectangular.
- Use the reported radii directly; do not introduce additional radius values.
- No reusable component families, local variables, paint styles, text styles, spacing tokens, or radius tokens were defined in the source.
- Several decorative and icon elements use image fills in the source; their visual content is not represented by token values here.
