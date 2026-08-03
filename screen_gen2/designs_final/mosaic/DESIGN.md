---
name: mosaic-design-system-community
source: Mosaic Design System (Community)
kind: design-system-context
---

# mosaic - Design System

## Overview

Mosaic is a component-based design system using Cabin for interface text and Lexend Deca for titles and display text. Its primary visual language is teal, with white surfaces, dark teal text, rounded controls, hard teal shadows, and Font Awesome iconography.

Source: Figma file “Mosaic Design System (Community)”, all 21 pages. No local variable collections were found.

## Design language

- **Primary visual identity:** teal and turquoise, led by `#32857D` and `#1C4A45`.
- **Surface treatment:** white surfaces using `#FFFFFF`, commonly with a `1px` light-primary border.
- **Typography:** Cabin for body, subtitle, and caption text; Lexend Deca for title and display text.
- **Shape language:** controls and compact navigation elements use `8px` radius; checkboxes use `4px`; the design-system header uses `56px`.
- **Effects:** hard teal drop shadows at `0px 5px` and `0px 2px`.
- **Iconography:** Font Awesome 6 Pro, Free, Duotone, and Brands families.
- **Layout language:** horizontal controls with centered alignment, vertical cards and menus, and fixed dimensions in the extracted component specifications.

## Color palette

### Highest-usage semantic colors

Use these first when a semantic token is needed, ranked by extracted usage:

| Token | Color | Uses |
|---|---:|---:|
| Core Palette/Primary/700 | `#32857D` | 907 |
| Absolutes/White | `#FFFFFF` | 569 |
| Core Palette/Primary/900 | `#1C4A45` | 292 |
| Core Palette/Primary/100 | `#FFFFFF` | 260 |
| Core Palette/Primary/300 | `#89D2CB` | 65 |
| Core Palette/Primary/50 | `#E1F4F2` | 43 |
| Text/Blue Gray 700 | `#4E6287` | 24 |
| Core Palette/Error/500 | `#BB2649` | 23 |
| Absolutes/Black | `#000000` | 6 |

`Core Palette/Primary/100` and `Core Palette/Primary/800` both resolve to `#FFFFFF`. `Core Palette/Primary/500` has no extracted value.

### Core palette

- **Primary:** 50 `#E1F4F2`; 100 `#FFFFFF`; 200 `#A6DDD8`; 300 `#89D2CB`; 400 `#6BC7BE`; 500 not defined; 600 `#3EA399`; 700 `#32857D`; 800 `#FFFFFF`; 900 `#1C4A45`.
- **Grays:** 50 not defined; 100 `#D5D6D7`; 200 `#C1C2C3`; 300 `#ACADAF`; 400 `#939597`; 500 `#828587`; 600 `#6E7072`; 700 `#5A5C5E`; 800 `#464749`; 900 `#323334`.
- **Error:** 50 `#F1BBC8`; 100 `#EA99AC`; 200 `#E37891`; 300 `#DC5675`; 400 `#D5345A`; 500 `#BB2649`; 600 `#981F3B`; 700 `#77182E`; 800 `#551121`; 900 `#330A14`.
- **Warning:** 50 `#FCF1DA`; 100 `#F8E3B4`; 200 `#F5D48F`; 300 not defined; 400 `#EEB844`; 500 `#EAAA1F`; 600 `#CD9213`; 700 `#A87810`; 800 `#835D0C`; 900 `#5D4309`.
- **Success:** 50 `#C9E2E3`; 100 `#AED3D5`; 200 `#93C4C8`; 300 `#78B5BA`; 400 `#5DA7AC`; 500 `#478589`; 600 `#3E7579`; 700 `#315B5E`; 800 `#234143`; 900 `#152728`.

### Color stacks

Each stack has shades `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, and `900`.

- **Teal:** 50 `#C9E2E3`; 100 `#AED3D5`; 200 `#93C4C8`; 300 `#78B5BA`; 400 `#5DA7AC`; 500 `#478589`; 600 `#3E7579`; 700 `#315B5E`; 800 `#234143`; 900 `#152728`.
- **Turquoise:** 50 `#E1F4F2`; 100 `#C4E9E5`; 200 `#A6DDD8`; 300 `#89D2CB`; 400 `#6BC7BE`; 500 `#45B5AA`; 600 `#3EA399`; 700 `#32857D`; 800 `#276861`; 900 `#1C4A45`.
- **Pink / Honeysuckle:** 50 `#F8DEE4`; 100 `#F0BCC8`; 200 `#E99BAD`; 300 `#E27992`; 400 `#D94F70`; 500 `#D3365B`; 600 `#B8284A`; 700 `#97213C`; 800 `#751A2F`; 900 `#541222`.
- **Blue Gray / Serenity:** 50 `#F1F4F9`; 100 `#D4DDED`; 200 `#B8C6E0`; 300 `#93A9D1`; 400 `#7E98C8`; 500 `#6281BC`; 600 `#496CAB`; 700 `#3D5A8F`; 800 `#314872`; 900 `#253656`.
- **Green / Greenery:** 50 `#ECF3E2`; 100 `#D9E7C6`; 200 `#C7DAA9`; 300 `#B4CE8D`; 400 `#A1C270`; 500 `#88B04B`; 600 `#799D43`; 700 `#638137`; 800 `#4D642B`; 900 `#37471F`.
- **Violet / Ultra Violet:** 50 `#E8E4F1`; 100 `#D2CAE2`; 200 `#BBAFD4`; 300 `#A495C6`; 400 `#8E7AB8`; 500 `#7760A9`; 600 `#5F4B8B`; 700 `#524077`; 800 `#40325D`; 900 `#2D2442`.
- **Blue / Classic Blue:** 50 `#DAECFB`; 100 `#B6D8F6`; 200 `#91C5F2`; 300 `#6DB2EE`; 400 `#489EEA`; 500 `#489EEA`; 600 `#248BE5`; 700 `#1876C9`; 800 `#1361A4`; 900 `#0F4C81`.
- **Yellow / Mimosa:** 50 `#FCF1DA`; 100 `#F8E3B4`; 200 `#F5D48F`; 300 `#F0C05A`; 400 `#EEB844`; 500 `#EAAA1F`; 600 `#CD9213`; 700 `#A87810`; 800 `#835D0C`; 900 `#5D4309`.
- **Yellow / Illuminating:** 50 `#FEFBEC`; 100 `#FCF4C5`; 200 `#F9ED9F`; 300 `#F7E678`; 400 `#F5DF4D`; 500 `#F3D82B`; 600 `#E7CA0D`; 700 `#C1A90B`; 800 `#9A8709`; 900 `#746507`.
- **Gray / Ultimate Gray:** 50 `#EAEBEB`; 100 `#D5D6D7`; 200 `#C1C2C3`; 300 `#ACADAF`; 400 `#939597`; 500 `#828587`; 600 `#6E7072`; 700 `#5A5C5E`; 800 `#464749`; 900 `#323334`.
- **Purple / Very Peri:** 50 `#F2F2F8`; 100 `#D8D8E9`; 200 `#BDBEDB`; 300 `#A3A4CC`; 400 `#8989BE`; 500 `#6667AB`; 600 `#57589E`; 700 `#484984`; 800 `#3A3B69`; 900 `#2B2C4F`.
- **Red / Viva Magenta:** 50 `#F1BBC8`; 100 `#EA99AC`; 200 `#E37891`; 300 `#DC5675`; 400 `#D5345A`; 500 `#BB2649`; 600 `#981F3B`; 700 `#77182E`; 800 `#551121`; 900 `#330A14`.

Additional raw unstyled color: `#9747FF` with 5 uses.

## Type scale

### Text families

- **Cabin:** body, subtitle, and caption styles.
- **Lexend Deca:** title and display styles.
- **Font Awesome 6:** icon text styles.

### Display

- `Display/Thin`: Lexend Deca Light, 300, `68px`, `68px` line height, `-2.72px` tracking.
- `Display/Regular`: Lexend Deca Regular, 400, `68px`, `68px` line height, `-2.72px` tracking.
- `Display/Heavy`: Lexend Deca Bold, 700, `68px`, `68px` line height, `-2.72px` tracking.

### Titles

- `Title/Large/Regular`: Lexend Deca Regular, 400, `42px`, `42px` line height, `-1.68px` tracking.
- `Title/Large/Heavy`: Lexend Deca SemiBold, 600, `42px`, `42px` line height, `-1.68px` tracking.
- `Title/Normal/Thin`: Lexend Deca Light, 300, `32px`, `100%` line height, `-1.28px` tracking.
- `Title/Normal/Regular`: Lexend Deca Regular, 400, `32px`, `100%` line height, `-1.28px` tracking.
- `Title/Normal/Heavy`: Lexend Deca Bold, 700, `32px`, `100%` line height, `-1.28px` tracking.

### Subtitles

- `Subtitle/Large/Regular`: Cabin Regular, 400, `28px`, `102.88%` line height, `-0.56px` tracking.
- `Subtitle/Large/Medium`: Cabin Medium, 500, `28px`, `102.88%` line height, `0px` tracking.
- `Subtitle/Large/Heavy`: Cabin Bold, 700, `28px`, `102.88%` line height, `-0.56px` tracking.
- `Subtitle/Normal/Regular`: Cabin Regular, 400, `20px`, `102.88%` line height, `0px` tracking.
- `Subtitle/Normal/Heavy`: Cabin SemiBold, 600, `20px`, `102.88%` line height, `0px` tracking.

### Body

- `Body/Large/Regular`: Cabin Regular, 400, `18px`, `102.88%` line height, `0px` tracking.
- `Body/Large/Medium`: Cabin Medium, 500, `18px`, `102.88%` line height, `0px` tracking.
- `Body/Large/Heavy`: Cabin Bold, 700, `18px`, `102.88%` line height, `0px` tracking.
- `Body/Normal/Regular`: Cabin Medium, 500, `16px`, `102.88%` line height, `0px` tracking.
- `Body/Normal/Medium`: Cabin Medium, 500, `16px`, `102.88%` line height, `0px` tracking.
- `Body/Normal/Heavy`: Cabin SemiBold, 600, `16px`, `102.88%` line height, `0px` tracking.
- `Body/Small/Regular`: Cabin Regular, 400, `14px`, `123.46%` line height, `0px` tracking.
- `Body/Small/Medium`: Cabin Medium, 500, `14px`, `102.88%` line height, `0px` tracking.
- `Body/Small/Heavy`: Cabin SemiBold, 600, `14px`, `102.88%` line height, `0px` tracking.

### Captions

- `Caption/Normal/Regular`: Cabin Regular, 400, `12px`, `102.88%` line height, `0px` tracking.
- `Caption/Normal/Medium`: Cabin Medium, 500, `12px`, `102.88%` line height, `0px` tracking.
- `Caption/Normal/Heavy`: Cabin SemiBold, 600, `12px`, `123.46%` line height, `0px` tracking.
- `Caption/Small/Regular`: Cabin Regular, 400, `10px`, `102.88%` line height, `0px` tracking.
- `Caption/Small/Medium`: Cabin Medium, 500, `10px`, `102.88%` line height, `0px` tracking.
- `Caption/Small/Heavy`: Cabin SemiBold, 600, `10px`, `102.88%` line height, `0px` tracking.

### Icon text sizes

- Font Awesome 6 Pro Regular: `12px`, `14px`.
- Font Awesome 6 Free Solid: `12px`, `14px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`, `112px`, `128px`, `144px`, `160px`.
- Font Awesome 6 Duotone Solid: `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`, `112px`, `128px`, `144px`, `160px`.
- Font Awesome 6 Brands Regular: `14px`.

## Spacing scale

_None found in source._

Component-specific padding and gaps are documented under Components.

## Radius scale

_None found in source._

Extracted component radii are `4px`, `8px`, and `56px`; these are component specifications, not a global radius-token scale.

## Elevation & effects

- `Card/Hard Shadow/4px`: drop shadow `0px` horizontal offset, `5px` vertical offset, color `#45B5AA`. Used 28 times.
- `Card/Hard Shadow/2px`: drop shadow `0px` horizontal offset, `2px` vertical offset, color `#45B5AA`. Used 5 times.
- Dropdown uses `Card/Hard Shadow/4px`.
- No motion variables were found.
- No local grid styles were found.

## Components

Only the extracted component families should be used: Breadcrumb, Button, Card, Checkbox, Design system header, Divider, FA6 - Brands, FA6 - DuoTone, FA6 - Free, FA6 - Pro, breadcrumb_buildingBlock, dropdown, and dropdown_buildingBlock.

### Button

- Size: `165px × 48px`.
- Radius: `8px`.
- Layout: horizontal; gap `8px`; align center/center.
- Padding: `12px 24px 12px 24px`.
- Sizing: fixed width and fixed height.
- Fill: `Core Palette/Primary/700` (`#32857D`).
- Text: `Body/Large/Medium`.
- Variants:
  - Hierarchy: Primary, Secondary Outline, Tertiary - No Outline.
  - Size: Large, Medium, Small, x-small.
  - State: Default, Disabled, Hover, Pressed, Active.
  - Icon: After Content, Before Content, Both, False, Only.
  - Theme: Light.

### Card

- Size: `120px × 160px`.
- Layout: vertical; gap `0px`.
- Padding: `0px`.
- Fill: `#FFFFFF`.
- Stroke: `Core Palette/Primary/100` (`#FFFFFF`), `1px`.
- Text: `Body/Large/Regular`, `Body/Large/Heavy`.
- Sizing: fixed width and fixed height.
- Variants:
  - Style: All, All / Sideways / Heading / Subtext / Heading Only.
  - Dark Text: False, True.
  - State: Default, Hover, No Hover.
  - Card Design Style: V1 (Sharp), V2 (Rounded).

### Checkbox

- Size: `32px × 32px`.
- Radius: `4px`.
- Fill: `#FFFFFF`.
- Stroke: `Core Palette/Primary/500`, `1px`; the source has no color value for Primary/500.
- Variants:
  - Size: Default, Large, X-large.
  - State: Active, Default, Disabled, Focus.
  - Checked: False, True.
  - Type: Checkbox, Radio.

### Breadcrumb

- Size: `184px × 28px`.
- Layout: horizontal; gap `0px`; align min/center.
- Padding: `0px`.
- Sizing: fixed width and fixed height.
- Text: `Caption/Normal/Medium`, `Body/Small/Regular`, Font Awesome 6 Pro Regular `12px`.
- Variants:
  - Type: Basic, With Icon.
  - Separator: Arrow, Slash.

### breadcrumb_buildingBlock

- Size: `48px × 28px`.
- Radius: `8px`.
- Layout: horizontal; gap `4px`; align center/center.
- Padding: `4px 8px 4px 8px`.
- Text: `Caption/Normal/Medium`.
- Sizing: fixed width and fixed height.
- Variants:
  - Type: Active, Default.
  - State: default, hover.
  - Icon: Before Content, Off, Only.

### dropdown

- Size: `169px × 156px`.
- Radius: `8px`.
- Layout: vertical; gap `8px`.
- Padding: `8px`.
- Fill: `#FFFFFF`.
- Stroke: `Core Palette/Primary/100` (`#FFFFFF`), `1px`.
- Effect: `Card/Hard Shadow/4px`.
- Text: Font Awesome 6 Pro Regular `12px`, `Body/Small/Regular`.
- Sizing: fixed width and fixed height.

### dropdown_buildingBlock

- Size: `44px × 28px`.
- Radius: `8px`.
- Layout: horizontal; gap `4px`; align center/center.
- Padding: `4px 8px 4px 8px`.
- Text: `Body/Small/Regular`.
- Sizing: fixed width and fixed height.
- Variants:
  - State: default, hover.
  - Icon: after Text, before Text, both, off.
  - Disabled: false, true.
  - Destructive: false, true.

### Divider

- Size: `686px × 0px`.
- Layout: vertical; gap `10px`.
- Padding: `0px`.
- Sizing: fixed width and fixed height.
- Variants: Heavy, Light, Normal.

### Design system header

- Size: `1416px × 295px`.
- Radius: `56px`.
- Layout: vertical; gap `0px`.
- Padding: `0px`.
- Sizing: fixed width and fixed height.
- Text: `Subtitle/Large/Regular`, `Display/Heavy`.

### Font Awesome components

- **FA6 - Pro:** `14px × 16px`; horizontal; padding `0px`; gap `0px`; centered; fixed sizing. Text uses Font Awesome 6 Pro Light, `14px`. Style variants: light, regular, sharp-solid, solid, thin. Padding variants: false, fixed-width, none, roomy, square. Scale variants: `.75x`, `1x`, `1.25x`, `1.5x`, `2x`, `2.5x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`.
- **FA6 - DuoTone:** `20px × 16px`; horizontal; padding `0px`; gap `-16px`; centered; fixed sizing. Text uses Font Awesome 6 Duotone Solid, `16px`. Style: duotone. Padding variants: fixed-width, none, roomy, square. Scale variants: `1x`, `1.25x`, `1.5x`, `2x`, `2.5x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`.
- **FA6 - Brands:** `20px × 16px`; horizontal; padding `0px`; gap `0px`; centered; fixed sizing. Text uses Font Awesome 6 Brands Regular, `14px`. Padding variants: fixed-width, none, roomy, square. Scale variants: `1x`, `1.25x`, `1.5x`, `2x`, `2.5x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`.
- **FA6 - Free:** `20px × 16px`; horizontal; padding `0px`; gap `0px`; centered; fixed sizing. Text uses Font Awesome 6 Free Solid, `14px`. Style variants: regular, solid. Padding variants: fixed-width, none, roomy, square. Scale variants: `1x`, `1.25x`, `1.5x`, `2x`, `2.5x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`.

## Screen patterns

- **Playground:** component experimentation and combined examples.
- **Color Palette:** semantic core colors and multi-hue color stacks.
- **General Elements:** buttons, typography, and Font Awesome icon components.
- **Navigation:** breadcrumb and dropdown patterns.
- **Layout:** dividers.
- **Form Elements:** checkbox and radio states.
- **Cards:** card variants and card presentation styles.
- **Design system header:** large rounded header pattern using display and subtitle typography.

## Notes for implementers

- Prefer the ranked semantic tokens, especially `#32857D`, `#FFFFFF`, `#1C4A45`, and `#89D2CB`.
- Preserve exact typography family, weight, size, line height, and tracking from the Type scale.
- Do not create a spacing, radius, motion, or grid token system; none was extracted.
- Use the listed component dimensions, padding, gaps, radii, strokes, fills, and effects as fixed specifications where applicable.
- Treat `Core Palette/Primary/500`, `Core Palette/Grays/50`, `Core Palette/Warning/300`, and `Most Used/White` as unresolved or separately named source tokens when no concrete value is provided.
- `Core Palette/Primary/100`, `Core Palette/Primary/800`, and the `Absolutes/White` token all resolve to `#FFFFFF`; use the semantic token appropriate to the component.
- The raw unstyled color `#9747FF` appears 5 times but is not assigned to a semantic palette token.
- Use only the extracted component families and their documented variants.
