---
name: design-system-v0-3-community
source: Design System / v0.3 (Community)
kind: design-system-context
---

# v0 - Design System

## Overview

- Design system version: v0.3 Community.
- Source contains 10 Figma pages: Start Here, typography, grids, colors, icons, buttons, documentation, inputs, media, and components.
- Primary typeface: Open Sans.
- Layout grids use 8px spatial increments.
- No local variable collections, spacing variables, radius variables, or motion variables were found.

## Design language

- Use Open Sans for interface typography.
- Use regular, bold, and italic weights.
- Use dark gray text on white surfaces for primary content.
- Use blue for primary actions and section labels.
- Use green, purple, orange, red, and yellow as supporting accent colors.
- Layouts are centered and grid-based, with 12 columns on desktop, 8 on tablet, and 4 on mobile.
- Standard icon size is 24x24px.
- The only documented elevation is a subtle drop shadow.

## Color palette

Ranked by reported usage where counts are available:

| Token | Value | Usage |
|---|---|---:|
| gray / medium | `#969696` | 225 |
| basic / white | `#FFFFFF` | 128 |
| gray / light | No value found | 128 |
| gray / dark | `#323232` | 111 |
| gray / light medium | `#D8D8D8` | 107 |
| basic / black | `#000000` | 68 |
| cool / blue | `#1BA2E8` | 12 |
| gray / medium dark | `#646464` | 2 |
| warm / red | `#E33E38` | 1 |
| warm / orange | `#FF8B00` | 1 |
| warm / yellow | `#F6DC41` | 1 |
| cool / green | `#41D33E` | 1 |
| cool / green hover | `#35B233` | 1 |
| cool / purple | `#8D38E3` | 1 |
| cool / purple hover | `#762DBE` | 1 |

Duplicate color aliases:

- `cool / blue hover` resolves to `#FFFFFF`; no separate hover color value was found.
- `Dark Gray` resolves to `#FFFFFF`; it is used as the thumbnail frame stroke, shadowed frame content, and thumbnail text.
- `#3333331A` is used for the color swatch effect.
- `#0000001A` is used for the documented drop shadow.

Implementation note:

- `gray / light` is referenced by components but has no extracted hex value. Do not substitute another gray.

## Type scale

All styles use Open Sans. Tracking is `0px` unless specified.

| Style | Weight/style | Size | Line height | Tracking |
|---|---|---:|---:|---:|
| display | Regular | 72px | 80px | 0px |
| display | Bold | 72px | 80px | 0px |
| display | Italic | 72px | 80px | 0px |
| h1 | Regular | 56px | 64px | 0px |
| h1 | Bold | 56px | 64px | 0px |
| h1 | Italic | 56px | 64px | 0px |
| h2 | Regular | 48px | 56px | 0px |
| h2 | Bold | 48px | 56px | 0px |
| h2 | Italic | 48px | 56px | 0px |
| h3 | Regular | 40px | 48px | 0px |
| h3 | Bold | 40px | 48px | 0px |
| h3 | Italic | 40px | 48px | 0px |
| h4 | Regular | 30px | 40px | 0px |
| h4 | Bold | 32px | 40px | 0px |
| h4 | Italic | 30px | 40px | 0px |
| h5 | Bold | 24px | 32px | 0px |
| h5 | Italic | 20px | 28px | 0px |
| h6 | Regular | 20px | 28px | 0px |
| h6 | Bold | 20px | 28px | 0px |
| h6 | Italic | 16px | 24px | 0px |
| p | Regular | 16px | 24px | 0px |
| p | Bold | 16px | 24px | 0px |
| p | Italic | 16px | 24px | 0px |
| label | Regular | 14px | 22px | 0px |
| label | Bold | 14px | 22px | 0px |
| label | Italic | 14px | 22px | 0px |
| tiny | Regular | 12px | 20px | 0px |
| tiny | Bold | 12px | 20px | 0px |
| tiny | Italic | 12px | 20px | 0px |
| tiny uppercase | Regular | 12px | auto | 0.24px |

## Spacing scale

No spacing variables were found.

Documented spacing values:

- Grid: 8px.
- Common component gaps: 8px and 16px.
- Button padding: 8px 16px.
- Color swatch padding: 8px on all sides; gap 8px.
- Section label padding: 16px 32px; gap 16px.
- Menu and icon group gap: 16px.
- Callout gap: 16px.
- Grid gutters: 16px.
- Desktop and tablet section size: 80px.
- Mobile section size: 64px.

## Radius scale

No radius variables were found.

Documented component radii:

- Color style swatch: 8px.
- Radio: 50px.
- Media avatar: 100px.
- Start Here thumbnail frame: 40px.
- Checkbox, button, field, menu, and other components have no documented radius.

## Elevation & effects

- Drop Shadow:
  - Offset: `0 4px`
  - Color: `#0000001A`
- Color style swatch effect:
  - Offset: `3px 1px`
  - Color: `#3333331A`
- Start Here thumbnail uses the Drop Shadow effect.
- No motion tokens were found.

## Components

### Actions and controls

- **button**
  - Size: 141x40px.
  - Horizontal layout.
  - Padding: 8px 16px.
  - Gap: 8px.
  - Alignment: center/center.
  - Fill: `#1BA2E8`.
  - Text: Open Sans Regular label, 14px/22px.
  - Variant: `button/button hover`; hover color value is `#FFFFFF`.

- **button group**
  - Size: 290x40px.
  - Horizontal layout.
  - Gap: 8px.
  - Text: Open Sans Regular label.

- **radio**
  - Unselected size: 16x16px.
  - Radius: 50px.
  - Fill: `#FFFFFF`.
  - Stroke: gray / light, 1px; token value not extracted.

- **checkbox**
  - Unchecked size: 16x16px.
  - Fill: `#FFFFFF`.
  - Stroke: gray / light, 1px; token value not extracted.

- **field**
  - Default and active size: 176x40px.
  - Default fill: `#FFFFFF`.
  - Default stroke: gray / light, 1px; token value not extracted.
  - Active stroke: cool / blue hover, 1px; value `#FFFFFF`.
  - Disabled fill: gray / light; token value not extracted.
  - Disabled stroke: `#D8D8D8`, 1px.
  - Text: Open Sans Regular label, 14px/22px.

- **section label**
  - Size: 201x96px.
  - Horizontal layout.
  - Padding: 16px 32px.
  - Gap: 16px.
  - Fill: `#1BA2E8`.
  - Text: Open Sans Bold h1, 56px/64px.

- **callout**
  - Size: 368x214px.
  - Vertical layout.
  - Gap: 16px.
  - Alignment: center/min.
  - Text: Open Sans Regular label, Regular p, and Bold h3.

- **steps**
  - Numbers size: 664x38px.
  - Horizontal layout.
  - Gap: 0px.
  - Text: Open Sans Regular label.

### Navigation and layout

- **menu**
  - Horizontal: 964x24px, gap 16px, Open Sans Regular p.
  - Vertical: 176x384px, gap 16px, Open Sans Regular p.
  - Vertical with title: 176x432px, gap 16px, Open Sans Regular p and Bold h5.

- **icon group**
  - Vertical: 24x424px, gap 16px.
  - Horizontal: 424x24px, gap 16px.
  - Both use fixed dimensions and centered alignment.

- **placeholder**
  - `24px` variant: 24x24px.
  - Fill: `#D8D8D8`.

### Media

- **media**
  - General icon size: 24x24px.
  - Variants: fullscreen, fullscreen-exit, pause, play, volume-high, volume-low, volume-medium, volume-minus, volume-mute, volume-off, volume-plus.

- **media**
  - Image: 176x176px; image fill uses source hash `efe98099a0aa97c1aa64e286bc82e633cc9aed22`.
  - Gallery: 176x200px.
  - Video: 176x176px; image fill uses source hash `efe98099a0aa97c1aa64e286bc82e633cc9aed22`.
  - Avatar: 176x176px, radius 100px, fill `#000000`, Open Sans Bold display text.

### Icons

- Standard icon size: 24x24px.
- Documented icon families include:
  - Icon
  - home
  - dollar sign
  - braille
  - boxes
  - box
  - box open
  - bowling ball
  - bookmark
  - book
  - book open
  - bong
  - bomb
  - bolt
  - bold
  - blind
  - blender
  - birthday cake
  - binoculars
  - bicycle
  - bezier curve
  - bell
  - bell slash
  - search
  - calendar
  - payment
  - action
  - directional
- Documented icon variants include:
  - search / magnifying glass
  - calendar / month
  - payment / dollar
  - payment / percent
  - payment / calculator
  - action / close x
  - directional / chevron left
  - directional / chevron down
  - directional / chevron right
  - directional / chevron up
- Many solid Icon variants are documented at 24x24px with fill `#FFFFFF`, including arrows, alignment icons, accessibility icons, media-related icons, and utility icons.

### Swatches

- **color style swatch**
  - Size: 176x132px.
  - Radius: 8px.
  - Vertical layout.
  - Padding: 8px on all sides.
  - Gap: 8px.
  - Fill: `#FFFFFF`.
  - Effect: offset `3px 1px`, color `#3333331A`.
  - Text: Open Sans Regular tiny uppercase and Bold label.

## Screen patterns

- **Start Here / Thumbnail**
  - Frame: 1600x960px.
  - Fill: `#FFFFFF`.
  - Radius: 40px.
  - Stroke: `#FFFFFF`, 8px.
  - Drop shadow: offset `0 4px`, color `#0000001A`.
  - Centered title content includes “Design System”, “System.Design”, and “v0.3”.
  - Title typography in the source uses Helvetica Bold at 96px and 32px; this is specific to the thumbnail and is not part of the Open Sans type scale.
  - Includes a 96x96px solar-system vector.

- **Typography documentation**
  - Uses a dark gray header area with white Open Sans specimen text.
  - Displays regular, bold, and italic type specimens from tiny through display.
  - Type specimens use 1px divider lines.
  - Documentation content is arranged in centered 944px-wide examples.

- **Responsive grids**
  - Desktop: 12 columns, 80px section, 16px gutter, centered, 8px grid.
  - Tablet: 8 columns, 80px section, 16px gutter, centered, 8px grid.
  - Mobile: 4 columns, 64px section, 16px gutter, centered, 8px grid.

## Notes for implementers

- Prefer the named semantic tokens over raw values.
- Use Open Sans for product UI; use the thumbnail’s Helvetica treatment only for the Start Here thumbnail pattern.
- Preserve the documented line heights and tracking values.
- Use 24x24px icons by default.
- Use 16px gutters and 8px spatial increments.
- Do not invent a value for `gray / light`; its token value was not extracted.
- Do not treat `cool / blue hover` as a blue hover color: the extracted value is `#FFFFFF`.
- Do not treat `Dark Gray` as a separate color: it resolves to `#FFFFFF` in the extraction.
- No spacing, radius, motion, or local variable collections are available beyond the explicit component and grid measurements above.
