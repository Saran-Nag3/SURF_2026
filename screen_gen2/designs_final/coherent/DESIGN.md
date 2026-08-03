---
name: coherent-design-system-cds-community
source: Coherent Design System (CDS) (Community)
kind: design-system-context
---

# coherent - Design System

## Overview

- Coherent Design System (CDS), Community edition.
- Source: Figma file “Coherent Design System (CDS) (Community)”, all 51 pages.
- Primary organization: styles, basic components, grouped controls, and system components.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Material-oriented UI system using Roboto typography and a blue primary accent.
- Surfaces use white and dark neutral tones with subtle elevation overlays.
- Controls emphasize clear states: resting, hovered, focused, pressed, selected, disabled, read-only, and error.
- Layout examples use 40px base blocks and multiples of 40px for horizontal and vertical layout blocks.
- Common controls use compact geometry: 4px button radius, 32px chip radius, circular icon controls, and 4px progress lines.
- Use semantic color tokens where available:
  - Primary inactive: `#9DB0FF`
  - On-surface: `#191919`
  - On-surface medium: `#666666`
  - On-surface low: `#999999`
  - On-surface disabled: `#CCCCCC`
  - Ripple hover: `#4362DD14`

## Color palette

### Ranked raw colors

Use these by relative frequency when no semantic token is available:

1. `#212121` — 2490 uses
2. `#DADADA` — 1401 uses
3. `#0167A4` — 495 uses
4. `#0214BD` — 466 uses
5. `#111111` — 462 uses
6. `#E6E6E6` — 153 uses
7. `#666666` — 136 uses
8. `#E5E5E5` — 136 uses
9. `#FFFFFF` — 111 uses
10. `#000000` — 46 uses
11. `#CA3D35` — 44 uses

### Semantic and component colors

- Surface/on-surface: `#191919`
- Background HUD: `#222222`
- White surface: `#FFFFFF`
- Blue Grey 50: `#ECEFF1`
- Blue Grey 900: `#263238`
- Green 600: `#43A047`
- Disabled on-surface: `#CCCCCC`
- Medium on-surface: `#666666`
- Low on-surface: `#999999`
- Primary inactive: `#9DB0FF`
- Ripple hover: `#4362DD14`
- Primary control fill: `#4759FF`
- Progress fill: `#4759FF`
- Badge fill: `#D83535`
- Layout block fill: `#5D667D0F`
- Layout block stroke: `#5D667D`
- Placeholder/image background: `#F2F2F2`
- Banner stroke: `#E6E6E6`
- Badge stroke: `#FFFFFF`
- Transparent menu value fill: `#FFFFFF00`

### Elevation surface colors

- 1dp: `#191919`, `#FFFFFF0D`
- 2dp: `#191919`, `#FFFFFF12`
- 3dp: `#FFFFFF`, `#FFFFFF14`
- 4dp: `#FFFFFF`, `#FFFFFF17`
- 5dp: `#191919`, `#FFFFFF1C`

## Type scale

Use Roboto unless otherwise specified. Tracking values are in pixels.

| Token | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| headline1 | Roboto Light | 300 | 96px / 116px | -1.5px |
| headline2 | Roboto Light | 300 | 60px / 112px | -0.5px |
| headline3 | Roboto Regular | 400 | 48px / 56px | 0px |
| headline4 | Roboto Regular | 400 | 34px / 40px | 0.25px |
| headline5 | Roboto Regular | 400 | 24px / 32px | 0px |
| headline6 | Roboto Medium | 500 | 20px / 24px | 0.15px |
| subtitle1 | Roboto Regular | 400 | 16px / 20px | 0.15px |
| subtitle2 | Roboto Medium | 500 | 14px / 16px | 0.1px |
| body1 | Roboto Regular | 400 | 16px / 24px | 0.5px |
| body1-bold | Roboto Bold | 700 | 16px / 24px | 0.5px |
| body2 | Roboto Regular | 400 | 14px / 20px | 0.25px |
| body2-bold | Roboto Bold | 700 | 14px / 20px | 0.5px |
| body2-strikethrough | Roboto Regular | 400 | 14px / 20px | 0.25px |
| body2-bold-strikethrough | Roboto Bold | 700 | 14px / 20px | 0.25px |
| button1 | Roboto Medium | 500 | 16px / 24px | 0.5px |
| button2 | Roboto Medium | 500 | 14px / 20px | 0.1px |
| button2-uppercase | Roboto Medium | 500 | 14px / 20px | 1.25px |
| caption | Roboto Regular | 400 | 12px / 16px | 0.4px |
| overline | Roboto Regular | 400 | 10px / 12px | 1.5px |
| Neg – UI 11 | Inter Regular | 400 | 11px / 16px | 0.11px |

Duplicate `csds/` aliases resolve to the corresponding tokens above.

## Spacing scale

No spacing variables were found.

Observed component spacing values:

- `0px`, `1px`, `2px`, `4px`, `8px`, `12px`, `16px`, `24px`, `26px`, `57px`
- Content Wrapper size variants: `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `96px`, `112px`, `128px`
- LayoutBlocks use 40px increments from `40px` through `400px`.
- Common component padding:
  - Button: `8px 12px`
  - Banner: `8px 8px 8px 16px`
  - Chip: `4px`
  - Dropdown Menu: `8px 0px`
  - Calendar Body: `8px 16px`
  - Calendar Header: `16px 8px 12px 24px`

## Radius scale

No radius variables were found.

Observed radii:

- `0px`
- `1px`
- `2px`
- `4px`
- `12px`
- `22px`
- `32px`
- `99px`
- `120px`
- `256px`
- `999px`
- Badge: `22px`
- Button, Calendar, Dropdown Menu, and Banner: `4px`
- Chip: `32px`
- FAB: `256px`
- Icon Button: `999px`
- Avatar Image: `999px`
- Thumbnail: `999px`
- Ripple: `120px`
- Slider Parts thumb: `99px`

## Elevation & effects

### Elevation effects

- Elevation/1:
  - `drop_shadow 2px offset 0 1 #0000004D`
  - `drop_shadow 3px offset 0 1 #00000026`
- Elevation/2:
  - `drop_shadow 2px offset 0 1 #0000004D`
  - `drop_shadow 6px offset 0 2 #00000026`
- Elevation/3:
  - `drop_shadow 3px offset 0 1 #0000004D`
  - `drop_shadow 8px offset 0 4 #00000026`
- Elevation/4:
  - `drop_shadow 3px offset 0 2 #0000004D`
  - `drop_shadow 10px offset 0 6 #00000026`
- Elevation/5:
  - `drop_shadow 4px offset 0 4 #0000004D`
  - `drop_shadow 12px offset 0 8 #00000026`

### FAB effects

- FAB/Standard:
  - `drop_shadow 5px offset 0 4 #00000024`
  - `drop_shadow 10px offset 0 1 #0000001F`
  - `drop_shadow 4px offset 0 2 #00000033`
- FAB/Hover:
  - `drop_shadow 4px offset 0 2 #00000024`
  - `drop_shadow 5px offset 0 4 #0000001F`
  - `drop_shadow 10px offset 0 1 #00000033`

### Other effects

- Ripple: `#4759FF14`, 40px × 40px, radius `120px`.
- Overlay (Scrim) supports blurred, darkened, and none styles.
- Motion tokens were not found.

## Components

Use only the listed component families and their documented variants.

- **Badge** — 12px × 12px, radius `22px`, red fill `#D83535`, 1px white stroke; digit, dot, and icon variants; small, medium, and large sizes.
- **Banner** — 360px × 52px, white fill, 1px `#E6E6E6` stroke, padding `8px 8px 8px 16px`; desktop/mobile and one/two-line variants.
- **Button** — 95px × 36px, radius `4px`, padding `8px 12px`, primary fill `#4759FF`, `button2`; contained, ghost, and outlined styles with size, state, and disabled variants.
- **Checkbox** — 80px × 20px, horizontal layout, 4px gap; supports checked, indeterminate, focus, hover, pressed, resting, size, and disabled variants.
- **Chip** — 96px × 32px, radius `32px`, padding `4px`, `body2`; contained dark, contained light, and outlined styles.
- **DDM Components** — menu background 280px × 56px with bottom radius `4px`, Elevation Surface/3dp, and Elevation/3; menu values are 280px × 48px.
- **Dropdown Menu** — 280px × 256px, radius `4px`, vertical padding `8px`; auto and fixed width variants.
- **Divider** — 90px × 1px; horizontal or vertical direction, optionally showing a title.
- **FAB** — 48px × 48px, radius `256px`, padding `12px`, fill `#4759FF`, FAB/Standard effect; supports hover, focus, pressed, and resting states.
- **Icon Button** — 48px × 48px, radius `999px`; small, default, and large sizes with state and disabled variants.
- **Input Parts** — caret is 1px × 24px with vertical padding `4px` and gap `8px`; error and non-error variants.
- **Calendar** — 256px × 296px, radius `4px`, Elevation Surface/3dp, Elevation/3; date, date range, month, and year variants.
- **Date Picker Components** — calendar header 256px × 52px, body 256px × 244px, row 224px × 32px, footer 256px × 44px.
- **Content Wrapper** — size variants from `8px` through `128px` as documented in the spacing scale.
- **LayoutBlocks** — 40px base blocks; horizontal and vertical x1–x10 variants reach 400px.
- **Image** — 102.86px × 240.01px example; aspect-ratio variants include 16:10, 16:9, 1:1, 21:9, 2:1, 3:2, and 4:3.
- **Avatar Image** — 40px × 40px, radius `999px`.
- **Thumbnail** — 24px × 24px, radius `999px`; abbreviation, icon, and image types.
- **Paginator** — 550px × 56px, horizontal layout, 8px horizontal padding, 12px gap.
- **Spinner** — 48px × 48px; determinate and indeterminate types with percentage states.
- **Progress Line** — 240px × 4px, radius `4px`, inactive fill `#F2F2F2`, active fill `#4759FF`.
- **Progress Indicator** — 240px × 52px, vertical layout, 4px gap; circular and linear types.
- **Radio Button** — 80px × 20px, horizontal layout, 4px gap; checked, state, size, and disabled variants.
- **Tick Marks** — 240px × 2px with 26px gap; active and inactive tick states.
- **Slider Parts** — thumb is 12px × 12px, radius `99px`, fill `#4759FF`.
- **Tab**, **Tab Navigation Control**, and **Tab Navigation Bar** — support tab navigation patterns and control states.
- **Table-Parts** — table construction parts.
- **Time Picker**, **Clock**, **Hour**, **Time Selector**, **Period Selector**, and **Period** — time selection controls and subparts.
- **Toggle Button** and **Toggle Bar** — segmented control patterns.
- **Tooltip** — contextual assistance pattern.
- **Bottom Navigation** and **Bottom Navigation Cell** — bottom navigation patterns.
- **Breadcrumbs** and **Breadcrumb Elements** — breadcrumb navigation patterns.
- **Card**, **Card Background**, **Card-Header**, and **Card-Content** — card composition patterns.
- **Chat Message**, **Message Content**, **Message Status**, and **Message Status Icons** — messenger patterns.
- **Chart Widget**, **Chart Body**, **Chart Content (Editable)**, **Chart Parts**, **Data Visualization Section**, **Grid Cell**, **Grid Line**, **Grid Type**, **Bar Base**, **Bar Blocks**, and **Scale Cell** — chart and data visualization patterns.
- **Dialog** and **Dialog Components** — popup and modal patterns.
- **List**, **List Item**, **Advanced list-item**, **Tree**, and **Tree Node** — hierarchical and list patterns.
- **Header** and **Toolbar** — application header and toolbar patterns.
- **Navigation Drawer**, **Navigation Rail**, **Nav Drawer Parts**, **Nav Rail Parts**, **Pin**, **Large Logo**, and **Thumbnail Logo** — navigation shell patterns.
- **Popover** and **Popover Components** — floating contextual surfaces.
- **Stepper** and **Stepper Item** — sequential progress patterns.
- **Video Player** and **Video Player Parts** — media playback patterns.
- **Snackbar (Toast)** — transient feedback pattern.
- **Switch** — toggle control pattern.
- **Rating Stars** — rating input/display pattern.
- **Scrollbar** — scrolling affordance.
- **Overlay (Scrim)** and **Ripple** — layered interaction effects.
- **Figma-logo**, **Instance Icon**, **Variable Icon**, **Main Component Icon**, **Documentation Header**, **System**, **modifier**, and **cursors** — system and documentation support elements.

## Screen patterns

- **Getting Started** — documentation-oriented introduction using **Documentation Header**, **Figma-logo**, typography, color, elevation, overlay, and ripple guidance.
- **Component List** — catalog of basic, grouped, and system components.
- **Styles** — visual style reference for colors, elevation, fonts, overlay scrims, and ripple behavior.
- **Basic Components** — badges, banners, buttons, selection controls, inputs, layout blocks, media, pagination, progress, sliders, snackbars, tabs, tables, time pickers, toggles, and tooltips.
- **Grouped Controls** — bottom navigation, breadcrumbs, cards, chat, charts, dialogs, headers, lists, trees, navigation drawers and rails, popovers, steppers, and video players.
- **System Components** — supporting icons, modifiers, cursors, color token tables, and documentation elements.

## Notes for implementers

- Prefer semantic tokens over raw colors where both are available.
- When choosing among raw colors, prioritize by the documented usage counts.
- Use Roboto typography tokens for all standard UI text; use Inter only for `Neg – UI 11`.
- Preserve documented line heights and tracking; do not normalize them to a generic scale.
- Reuse documented component dimensions, padding, gaps, radii, and effects rather than introducing new values.
- Treat states as first-class component variants: resting, hovered, focused, pressed, selected, disabled, read-only, error, and indeterminate.
- Do not infer missing spacing, radius, motion, grid, image, or icon tokens from the extraction.
- Image fills identified only by hashes have no usable color value in the source and should not be converted into invented colors.
