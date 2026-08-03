---
name: minimized-ux-flow-pro-kit-community
source: Minimized ux-flow-pro-kit (Community)
kind: design-system-context
---

# cameron - Design System

## Overview

- Flowchart and UX-flow kit extracted from the Figma pages `Kit`, `Samples`, and `Symbols`.
- The system is organized around reusable flowchart shapes, arrows, notes, labels, markers, devices, and card families.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- Component families are available in blue, dark, and gray variants where listed.

## Design language

- Typeface: Roboto.
- Visual language: compact diagram elements with white fills and colored variant families.
- Primary component groups:
  - Flowchart primitives: simple, shapes, arrows.
  - Annotation elements: notes, labels, letters, numbers.
  - Device illustrations: devices.
  - Content containers: Small Cards, Modal Cards, Various Cards, E-commerce Cards, Home Page Cards, Layout Cards.
- Many components have regular and dotted variants.
- Component dimensions are fixed per symbol and should not be inferred from text content.
- Use the exact family and variant names from the source when selecting symbols.

## Color palette

Ranked by source usage:

| Color | Usage |
|---|---:|
| `#89969F` | 2662 |
| `#B8C5D0` | 2581 |
| `#F6F8F9` | 955 |
| `#1477F8` | 905 |
| `#454D58` | 774 |
| `#FFFFFF` | 740 |
| `#DEE7EE` | 594 |
| `#D4E6FD` | 204 |
| `#DBDDE0` | 163 |
| `#72C850` | 80 |

- Component specifications frequently use `#FFFFFF` as the fill.
- The source does not define semantic names for these colors.
- Do not assign additional colors beyond this palette.

## Type scale

All typography uses Roboto.

| Size | Weight | Observed usage |
|---:|---|---:|
| 11px | Bold | 285 |
| 14px | Bold | 242 |
| 11px | Regular | 102 |
| 9px | Regular | 98 |
| 13px | Regular | 69 |
| 12px | Bold | 65 |
| 13px | Bold | 58 |
| 7px | Bold | 32 |
| 10px | Bold | 11 |
| 20px | Bold | 9 |
| 16px | Regular | 8 |
| 24px | Bold | 5 |

Hierarchy includes:

- 24px Roboto Bold
- 20px Roboto Bold
- 16px Roboto Regular
- 14px Roboto Bold
- 13px Roboto Bold
- 13px Roboto Regular
- 12px Roboto Bold
- 11px Roboto Bold
- 11px Roboto Regular
- 10px Roboto Bold
- 9px Roboto Regular
- 7px Roboto Bold

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles found.
- No elevation values or shadow specifications found.
- No motion tokens found.
- No grid styles found.

## Components

### Available component families

- E-commerce Cards
- Home Page Cards
- Layout Cards
- Modal Cards
- Small Cards
- Various Cards
- arrows blue
- arrows dark
- arrows gray
- devices blue
- devices dark
- devices gray
- labels 2 blue
- labels 2 dark
- labels 2 gray
- labels blue
- labels dark
- labels gray
- letters blue
- letters dark
- letters gray
- notes blue
- notes dark
- notes gray
- numbers blue
- numbers dark
- numbers gray
- shapes blue
- shapes dark
- shapes gray
- simple blue
- simple dark
- simple gray

### Simple pages

- `simple blue/main page`: 120×150px, white fill, Roboto Bold 14px text.
- `simple blue/inner page`: 57×71px, white fill, Roboto Bold 11px text.
- `simple blue/inner page 2`: 50×50px, white fill, Roboto Bold 10px text.
- `simple dark` provides the same named page variants:
  - `main page`: 120×150px, white fill, Roboto Bold 14px text.
  - `inner page`: 57×71px, white fill, Roboto Bold 11px text.
  - `inner page 2`: 50×50px, white fill, Roboto Bold 10px text.

### Flowchart shapes

The blue and dark families include regular and dotted variants of:

- `multi process`: 110×70px, white fill, Roboto Bold 11px text.
- `off-page ref`: 60×72px, white fill, Roboto Bold 11px text.
- `on-page ref`: 60×60px, white fill, Roboto Bold 11px text.
- `manual operation`: 98×60px, white fill, Roboto Bold 11px text.
- `preparation`: 124×60px, white fill, Roboto Bold 11px text.
- `delay`: 100×60px, white fill, Roboto Bold 11px text.
- `document`: 100×60px, white fill, Roboto Bold 11px text.
- `data`: 110×60px, white fill, Roboto Bold 11px text.
- `process`: 100×60px, white fill, Roboto Bold 11px text.
- `start-end`: 100×60px, white fill, Roboto Bold 11px text.
- `decision`: 86×86px, white fill, Roboto Bold 11px text.

### Devices

Blue and dark device families include:

- `watch`: approximately 35–36×56px, white fill.
- `ipad`: 68×94px, white fill.
- `samsung`: 42×74px, white fill.
- `iphone`: 42×74px, white fill.
- `iphone x`: approximately 41–43×80–82px, white fill.
- Device variants include named `white` versions.

### Notes

Blue and dark note families include directional variants `DOWN`, `UP`, `RIGHT`, and `LEFT`.

Small notes:

- `note small DOWN`: 210×45px, white fill, Roboto Regular 13px.
- `note small UP`: 210×45px, white fill, Roboto Regular 13px.
- `note small RIGHT`: 214×40px, white fill, Roboto Regular 13px.
- `note small LEFT`: 214×40px, white fill, Roboto Regular 13px.

Large notes:

- `note DOWN`: 210×114px, white fill, Roboto Bold 13px.
- `note UP`: 210×115px, white fill, Roboto Bold 13px.
- `note RIGHT`: 218×106px, white fill, Roboto Bold 13px.
- `note LEFT`: 218×106px, white fill, Roboto Bold 13px.

### Labels

`labels 2` blue and dark families include:

- `minus`, `plus`, `cross`, `tick`: 32×32px, white fill.
- `no`, `yes`: 32×32px, white fill, 13px text.
- `label`: 68×20px, white fill, 13px text.
- `success`: 78×20px, white fill, 13px text.
- `error`: 68×20px, white fill, 13px text.

The blue family uses Roboto Regular for these text-bearing variants. The dark family uses Roboto Bold.

`labels` blue and dark families include 46×13px square and pill variants:

- Blue labels use Roboto Regular 9px.
- Dark labels use Roboto Bold 7px.
- Named variants include `label 1`, `label 2`, and `label 3` where present.

### Letters and numbers

- `letters` and `numbers` families are available in blue, dark, and gray variants.
- Markers are 22×22px with white fill.
- Styles include `semi`, `outlined`, and `solid`.
- Blue semi and outlined variants use Roboto Regular 11px; blue solid variants use Roboto Bold 11px.
- Dark variants use Roboto Bold 11px.
- Color-name variants include combinations such as gray, black, brown, purple, dark green, yellow, blue, orange, and green according to the family.

### Arrows

- Arrow families are available in blue, dark, and gray variants.
- Regular and dotted versions are available.
- Observed arrow sizes range from compact lines to large directional connectors:
  - Horizontal line: approximately 119–121×3px.
  - Horizontal arrow: approximately 119–121×5px.
  - Horizontal tagged arrow: approximately 119–121×13px, with Roboto Regular 9px text.
  - Vertical tagged arrow: approximately 46×57–59px, with Roboto Regular 9px text.
  - Small directional arrows: approximately 60–63×63–66px.
  - Large directional arrows: approximately 120–123×63–67px.
  - Large curved or routed arrows: approximately 120–121×120–126px.
- Named arrow variants include `arrow 1` through `arrow 8.3`, with intermediate variants such as `1.1` through `1.5`.

## Screen patterns

- `Kit`: reusable component inventory and symbol construction set.
- `Samples`: example compositions using the available flowchart, annotation, device, and card families.
- `Symbols`: named symbols organized by family and color variant.
- The source does not provide detailed screen dimensions, layout grids, or spacing rules for these pages.

## Notes for implementers

- Use only the listed component families and exact component names.
- Preserve fixed source dimensions for symbols, especially flowchart shapes, arrows, notes, labels, and markers.
- Use white fills where the component specification explicitly states `#FFFFFF`.
- Treat blue, dark, and gray as source family variants; do not substitute or merge them without an explicit design requirement.
- Preserve dotted versus regular variants as separate choices.
- Use Roboto with the exact weight and size specified for each component.
- No spacing, radius, elevation, shadow, motion, or grid values are defined; do not invent them.
- Card families are present, but no card-specific dimensions or styling specifications were available in the extraction.
