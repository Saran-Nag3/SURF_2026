---
name: wired-wireframe-kit-community
source: Wired Wireframe kit (Community), All pages (2): cover, everything
kind: design-system-context
---

# wired - Design System

## Overview

- Wireframe kit with a monochrome foundation, blue primary, and positive, warning, and negative status colors.
- Source page contains a cover and an “everything” reference page for colors, typography, layouts, and components.
- No local variable collections found.
- The most-used styles are black/86, white/86, grey/1, white/100, bold/48px, black/36, bold/32px, and white/36.

## Design language

- Clean, utilitarian wireframe system with compact controls, 6px control radii, and strong black/white contrast.
- Primary color: `#2F80ED`.
- Core dark text and surfaces use `#000000DB`; white content surfaces use `#FFFFFF`.
- Status colors: positive `#27AE60`, warning `#F2994A`, negative `#EB5757`.
- Typography uses Noto Sans SC for design tokens and Source Han Sans CN in raw styles and component text.
- Components generally use fixed dimensions and centered alignment.

## Color palette

Ranked by reported usage where counts are available:

| Role / token | Value | Usage |
|---|---:|---:|
| black/86 | `#000000DB` | 259 style uses; 8 raw uses |
| white/86 | `#FFFFFFDB` | 207 style uses; 16 raw uses |
| grey/1 | Value not specified | 60 style uses |
| white/100 | `#FFFFFF` | 25 style uses; 55 raw uses |
| black/36 | Value not specified | 14 style uses |
| white/36 | Value not specified | 10 style uses |
| white/6 | `#FFFFFF0F` | 8 style uses |
| black/6 | `#0000000F` | 4 style uses; 8 raw uses |
| black/100 | `#000000` | 1 style use; 145 raw uses |
| black/16 | `#00000029` | 1 style use |
| black/66 | `#000000A8` | 1 style use |
| grey/0 | `#242424` | 1 style use |
| grey/2 | `#A3A3A3` | 1 style use |
| grey/3 | `#D6D6D6` | 1 style use |
| grey/4 | `#F0F0F0` | 1 style use |
| white/16 | `#FFFFFF29` | 1 style use |
| white/66 | `#FFFFFFA8` | 1 style use |
| Primary | `#2F80ED` | 1 style use |
| Positive | `#27AE60` | 1 style use |
| Warning | `#F2994A` | 1 style use |
| Negative | `#EB5757` | 1 style use |
| Raw unstyled | `#C4C4C4` | 6 uses |
| Raw unstyled | `#D0D0D0` | 5 uses |

Additional source colors used in component specifications:

- `#0000000A`
- `#0000000D`
- `#0000001A`
- `#0000001F`
- `#00000040`
- `#FFFFFF0F`
- `#FFFFFF29`
- `#FFFFFFA8`
- `#FFFFFFDB`
- `#F3F3F3`
- `#E2E2E2`
- `#B2B2B2`

## Type scale

Font family, weight, size, line height, and tracking:

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| normal/12px | Noto Sans SC | 400 | 12px | auto | 0px |
| bold/12px | Noto Sans SC | 700 | 12px | auto | 0px |
| normal/14px | Noto Sans SC | 400 | 14px | 20px | 0px |
| bold/14px | Noto Sans SC | 700 | 14px | 20px | 0px |
| normal/16px | Noto Sans SC | 400 | 16px | auto | 0px |
| bold/16px | Noto Sans SC | 700 | 16px | auto | 0px |
| normal/20px | Noto Sans SC | 400 | 20px | auto | 0px |
| bold/20px | Noto Sans SC | 700 | 20px | auto | 0px |
| normal/26px | Noto Sans SC | 400 | 26px | 40px | 0px |
| bold/26px | Noto Sans SC | 700 | 26px | 40px | 0px |
| normal/32px | Noto Sans SC | 400 | 32px | auto | 0px |
| bold/32px | Noto Sans SC | 700 | 32px | auto | 0px |
| normal/48px | Noto Sans SC | 400 | 48px | auto | 0px |
| bold/48px | Noto Sans SC | 700 | 48px | auto | 0px |

Raw typography also uses Source Han Sans CN Regular at 12px, 14px, and 16px, and Source Han Sans CN Bold at 16px.

## Spacing scale

No spacing variables found. Concrete component padding and gaps:

- 4px padding: button controls.
- 8px horizontal padding: small `_button` variants.
- 10px vertical padding and 20px horizontal padding: `message`.
- 16px horizontal padding: `_tab`, normal `tag`.
- 20px horizontal padding: standard `_button` variants.
- 6px gaps: `_tab`, switches, radio and checkbox normal variants.
- 4px gaps: buttons and normal tags.
- 10px gap: `message`.
- 9px gap: vertical tabs.
- Grid gutter: 20px for grid styles; 10px for `main-960`.

## Radius scale

No radius variables found. Concrete radii:

- 6px: inputs, buttons, alerts, menus, vertical tabs, color groups, and normal tags.
- 13px: `tag/normal`.
- 14px: `badge/normal`.
- 22px: `message`.
- 100px: `avatar/normal`.

## Elevation & effects

- `shadow/sm`: drop shadow, offset `0 0`, blur `6px`, color `#0000001F`.
- `shadow/md`: drop shadows:
  - offset `0 4`, blur `6px`, color `#0000000D`
  - offset `0 10`, blur `15px`, color `#0000001A`
- `shadow/lg`: drop shadows:
  - offset `0 10`, blur `10px`, color `#0000000A`
  - offset `0 20`, blur `25px`, color `#0000001A`
- `shadow/base`: drop shadows:
  - offset `0 4`, blur `24px`, color `#0000000F`
  - offset `0 0`, blur `6px`, color `#0000000F`
- `shadow/xlg`: drop shadow, offset `0 25`, blur `50px`, color `#00000040`.

## Components

Only component families present in the source are included.

### Buttons

- `_button/small/outline`: `56x24px`, 6px radius, padding `4px 8px`, gap `4px`, 1px stroke, 12px Source Han Sans CN Regular.
- `_button/small/solid`: `56x24px`, 6px radius, padding `4px 8px`, gap `4px`, 1px fill and stroke, 12px Source Han Sans CN Regular.
- `_button/outline`: `94x40px`, 6px radius, padding `4px 20px`, gap `4px`, 1px stroke, 16px Source Han Sans CN Regular.
- `_button/solid`: `94x40px`, 6px radius, padding `4px 20px`, gap `4px`, 1px fill and stroke, 16px Source Han Sans CN Regular.
- `_button/block/outline/small`: `223x24px`, 6px radius, 1px stroke, 12px text.
- `_button/block/solid/small`: `223x24px`, 6px radius, 1px fill and stroke, 12px text.
- `_button/block/outline/normal`: `223x32px`, 6px radius, 1px stroke, 14px text.
- `_button/block/solid/normal`: `223x32px`, 6px radius, 1px fill and stroke, 14px text.
- `_button/block/outline`: `223x40px`, 6px radius, 1px stroke, 16px text.
- `_button/block/solid`: `223x40px`, 6px radius, 1px fill and stroke, 16px text.
- `button/outline` and `button/solid` provide small `56x24px`, normal `82x32px`, and large `94x40px` variants.
- Block button variants are `223px` wide and use small `24px`, normal `32px`, and large `40px` heights.
- Disabled button variants are present for outline and solid, block and non-block sizes. Their specified fill is `#FFFFFF`.
- Button text uses Source Han Sans CN Regular at 12px, 14px, or 16px according to size.

### Inputs and textarea

- `_input`: `162x40px`, 6px radius, `#FFFFFF` fill, 1px `#D0D0D0` stroke, 16px text.
- `input/small`: `162x24px`, `#FFFFFF` fill, 12px text.
- `input/normal`: `162x32px`, `#FFFFFF` fill, 14px text.
- `input/large`: `162x40px`, `#FFFFFF` fill, 16px text.
- `textarea/normal`: `292x120px`, 6px radius, `#FFFFFF` fill, 1px `#D0D0D0` stroke, 14px text.

### Switches

- `_switch`: `36x20px`.
- `switch/on`: `108x24px`, horizontal, gap `6px`, 16px text.
- `switch/off`: `106x24px`, horizontal, gap `6px`, 16px text.

### Selection controls

- `radio/checked`: `66x16px`, `#FFFFFF` fill, 14px text, no gap.
- `radio/normal`: `66x16px`, gap `6px`, 14px text.
- `checkbox/checked`: `66x16px`, `#FFFFFF` fill, 14px text, no gap.
- `checkbox/normal`: `66x16px`, gap `6px`, 14px text.

### Tabs

- `_tab`: `85x39px`, vertical layout, padding `9px 16px`, gap `6px`, `#FFFFFF0F` fill, 14px Source Han Sans CN Regular.
- `tab/vertical`: `119x237px`, 6px radius, vertical layout, gap `9px`, `#FFFFFF` fill, 1px `#00000029` stroke, 14px text.
- `tab/horizontal`: `714x40px`, 14px text.

### Menus and overlays

- `menu/vertical`: `112x180px`, 6px radius, `#FFFFFF` fill, 1px `#0000000F` stroke, `shadow/sm`, 14px text.
- `menu-item`: `88x36px`, `#E2E2E2` fill, 14px text.
- `popover/top`: `270x80px`, `#FFFFFF` fill, `shadow/sm`, 12px, 14px, and 16px text.
- `popover/bottom`: `270x80px`, `#FFFFFF` fill, 12px, 14px, and 16px text.
- `tooltip/left` and `tooltip/right`: `84.25x32px`, horizontal, 16px text.
- `tooltip/top` and `tooltip/bottom`: `80x36.25px`, vertical, 16px text.

### Feedback and status

- `alert`: `328x36px`, 6px radius, `#0000000F` fill, 14px text.
- `message`: `152x44px`, 22px radius, horizontal, padding `10px 20px`, gap `10px`, `#000000DB` fill, 16px text.
- `badge/small`: `22x22px`, `#FFFFFF` fill, 12px text.
- `badge/normal`: `28x28px`, 14px radius, padding `4px 6px`, gap `4px`, grey/1 fill, 14px text.
- `tag/small`: `48x20px`, `#FFFFFF` fill, 12px text.
- `tag/normal`: `60x22px`, 13px radius, padding `1px 16px`, gap `4px`, `#F3F3F3` fill, 1px `#B2B2B2` stroke, 14px text.

### Avatars and cursors

- `avatar/smaller`: `16x16px`, `#FFFFFF` fill.
- `avatar/small`: `24x24px`, `#FFFFFF` fill.
- `avatar/normal`: `46x46px`, 100px radius, `#C4C4C4` fill.
- `cursor/disabled` and `cursor/pointer`: `24x24px`.

## Screen patterns

- `cover / Thumbnail`: a `1920x960px` cover frame with decorative emoji shapes and large white “Wired” and version/date typography. The source specifies a cover fill that is not included in the allowed palette, so the exact color is not repeated here.
- `everything / colors`: a `1368x702px` white reference panel with 16px radius, displaying light and dark color swatches. The dark section uses `#000000DB`.
- `everything / typography`: a `1368x523px` white reference panel with 16px radius, showing normal and bold samples from 12px through 48px.
- `everything / layouts`: a `1368x1356px` white reference panel with 16px radius, demonstrating the grid and padding styles.
- Layout grid styles use centered `main-960`, 4- and 5-column small/large grids, and padding styles with 20px gutters where specified.

## Notes for implementers

- Do not infer values for unresolved tokens: `grey/1`, `black/36`, and `white/36` have no hex value in the source.
- Use the explicit component values over raw style names when they differ.
- The source contains both Noto Sans SC design tokens and Source Han Sans CN component/raw text. Preserve the family specified by the relevant token or component.
- No spacing, radius, or motion variable collections were found; use only the concrete component and grid values listed here.
- Use fixed dimensions for components when a component specification provides them.
- Use `#000000DB` for the dominant dark style and `#FFFFFFDB` for the dominant white-on-dark style.
