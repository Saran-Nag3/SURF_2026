---
name: rivian
source: Rivian App Prototype with autolayout (Community)
kind: design-system-context
---

# rivian - Design System

## Overview

Rivian mobile app design system and prototype covering:
- Cover and presentation screens.
- Design showcase screens with device mockups.
- Home dashboard at 411×1028px.
- Loading screen at 411×731px.
- Charging screen at 411×1315px.
- Reusable components, logos, icons, background texture, and metadata style chips.

The interface combines dark Rivian-branded vehicle status areas with light dashboard surfaces, modular status tiles, station lists, and strong typographic hierarchy.

## Design language

- Use Inter Bold for structured responsive headings and Inter Regular for standard body copy.
- Use Calibre for the app’s expressive vehicle and charging content, including large mileage values and section headings.
- Use Suisse Int'l Trial Bold for compact navigation, labels, and action controls.
- Pair dark surfaces such as `#1D2222`, `#17232E`, and `#111920` with white and light-gray content surfaces.
- Use `#F3AF3D` as the primary accent for charging, progress, and highlighted controls.
- Use rounded cards, pills, icon containers, and sticky actions.
- Dashboard cards use compact headers with a title, status label, icon container, and chevron affordance.
- Dark overview sections use white text, translucent white overlays, and large centered metrics.
- Responsive grids use 12 columns on desktop and tablet, and 6 columns on mobile.

## Color palette

Colors are ranked by reported usage where counts are available.

### High-usage raw colors

| Color | Usage |
|---|---:|
| `#DADADA` | 119 |
| `#FFFFFF26` | 10 |
| `#FFFFFFD9` | 10 |
| `#FFFFFF33` | 8 |
| `#C4C4C4` | 7 |
| `#FDFAF933` | 7 |
| `#000000` | 6 |
| `#3B59741A` | 6 |
| `#FFFFFFB2` | 6 |
| `#03A1681A` | 5 |
| `#17232E1A` | 5 |
| `#F3AF3D26` | 5 |
| `#FFFFFF` | 4 |
| `#FFFFFF40` | 4 |

### Semantic palette

- Neutral / White: `#FFFFFF` — 243 reported uses.
- Neutral / Grey 4: no concrete color value found in source.
- Brand / Tertiary-2: no concrete color value found in source.
- Neutral / Grey 5: `#ADB1B2` — 73 reported uses.
- Neutral / Grey 8: `#1E2021` — 73 reported uses.
- Neutral / Grey 6: `#5D5E61` — 68 reported uses.
- Brand / Primary / Default: `#F3AF3D` — 51 reported uses.
- Neutral / Grey 1: `#F6F6F6` — 43 reported uses.
- Neutral / Grey 7: `#2D2F30` — 43 reported uses.
- Brand / Secondary / Shade 1: `#3B5974` — 23 reported uses.
- Brand / Secondary / Default: `#17232E` — 22 reported uses.
- Brand / Tertiary: `#1D2222` — 20 reported uses.
- Carbon Neutral/300: `#D6D9DD` — 17 reported uses.
- SystemOrange / Light: `#FF9500` — 17 reported uses.
- Neutral / Grey 3: `#F1ECEC` — 15 reported uses.
- Neutral / Grey 2: `#F7F6F5` — 12 reported uses.
- Brand / Secondary / Shade 2: `#111920` — 3 reported uses.
- Messaging / Info: `#0172CB` — 4 reported uses.
- Messaging / Error: `#D21C1C` — 1 reported use.
- Messaging / Success: `#28A138` — 1 reported use.
- Messaging / Warning: `#F9971E` — 1 reported use.
- Brand / Primary / Shade 1: `#EECE7F` — 1 reported use.
- Brand / Primary / Shade 2: `#DA9D38` — 1 reported use.
- Carbon / Darkest: `#24262B`.
- fl-gray-600: `#636F73`.
- fl-gray-1000: `#121515`.
- Screen Components: `#262C2D`.
- Device BG: `#121515`.
- Device Surround: `#3A4245`.
- Side Buttons: `#121515`.

### Transparency and utility colors

- `#000000`
- `#00000005`
- `#0000000D`
- `#171B1E0D`
- `#171B1E40`
- `#171B1E4D`
- `#17232E1A`
- `#03A1681A`
- `#3B59741A`
- `#F3AF3D26`
- `#FDFAF933`
- `#FFFFFF26`
- `#FFFFFF33`
- `#FFFFFF40`
- `#FFFFFFB2`
- `#FFFFFFD9`

### Gradient

- Gradient: linear gradient from `#03AD70` at 0% to `#03AD70` at 100%.

## Type scale

### Inter

All Inter styles use the Inter typeface.

| Token | Weight | Size / line height | Tracking |
|---|---:|---:|---:|
| H1 / Desktop | 700 | 72px / 96px | 0px |
| H2 / Desktop | 700 | 56px / 72px | 0px |
| H3 / Desktop | 700 | 48px / 64px | 0px |
| H4 / Desktop | 700 | 32px / 40px | 0px |
| H5 / Desktop | 700 | 24px / 32px | 0px |
| H1 / Tablet | 700 | 56px / 72px | 0px |
| H2 / Tablet | 700 | 48px / 64px | 0px |
| H3 / Tablet | 700 | 40px / 56px | -0.5px |
| H4 / Tablet | 700 | 28px / 32px | 0px |
| H1 / Mobile | 700 | 40px / 56px | 0px |
| H2 / Mobile | 700 | 36px / 48px | -0.5px |
| H3 / Mobile | 700 | 32px / 40px | -0.5px |
| H4 / Mobile | 700 | 24px / 28px | 0px |
| H5 / Tablet+mobile | 700 | 18px / 24px | 0px |
| H6 / All breakpoints | 700 | 14px / 18px | 0.5px |
| Body / Large | 700 | 18px / 28px | 0px |
| Body / Standard | 400 | 16px / 24px | 0px |
| Body / Small | 400 | 14px / 22px | -0.25px |
| Paragraph 2 / Normal | 400 | 14px / 22px | -0.25px |

### Calibre

| Token | Weight | Size / line height | Tracking |
|---|---:|---:|---:|
| 1 | 500 | 20px / 20px | 0px |
| 2 | 400 | 16px / 20px | 0px |
| 3 | 400 | 18px / 20px | 0px |

Raw Calibre styles also appear at 14px, 18px, 20px, 24px, 30px, and 72px. Raw Suisse Int'l Trial Bold appears at 16px.

## Spacing scale

No spacing variables were defined. Observed spacing values:

- Grid gutters: 24px desktop, 16px tablet, 12px mobile.
- Component gap: 16px in Location tile and metadata components.
- Location tile content gap: 11px.
- Status pill gap: 4px.
- Aircon overview gap: 2px.
- Media timer gap: 42px between space-between controls.
- Card inner header dimensions: 40px high.
- Common icon sizes: 18px and 24px.
- Common icon containers: 40×40px.
- Common content widths: 160px, 164px, 356px, 377px, and 379px.
- Component padding is explicitly 0px on each side for Location tile and metadata components.

### Grid

- Desktop: 12 columns, 90px section, 24px gutter, stretch alignment.
- Tablet: 12 columns, 45.33px section, 16px gutter, stretch alignment.
- Mobile: 6 columns, 47.17px section, 12px gutter, stretch alignment.

## Radius scale

Observed radius values:

- 4px: metadata style chip and charging controls.
- 8px: icon containers and overview detail panels.
- 12px: dashboard cards.
- 24px: charging status pill.
- 32px: circular controls, chart, sticky footer, and action icon containers.

Observed compound radii:

- Top metadata chip: `4/4/0/0px`.
- Bottom metadata chip: `0/0/4/4px`.
- Location tile: no radius specified.
- Status bar time container: `32px`.

## Elevation & effects

- Elevation / Level 1: drop shadow, offset `0 1px`, color `#171B1E40`.
- Elevation / Level 1 alternative: drop shadow, offset `0 1px`, color `#171B1E0D`, plus drop shadow, offset `0 2px`, color `#0000000D`.
- Elevation / Level 2: drop shadow, offset `0 1px`, color `#171B1E4D`.
- Elevation / Level 3: drop shadow, offset `0 4px`, color `#BAC7D580`.
- Shadow: drop shadow, offset `0 1px`, color `#00000005`.
- Dashboard cards use Shadow.
- The sticky footer uses Elevation / Level 2.

## Components

Only the extracted component families below are defined.

### Header

- Size: 379×32px.
- Text: Suisse Int'l Trial Bold, 16px.
- Dashboard usage includes a 32×32px profile picture and a 32×32px settings control.
- Settings control uses a 32px radius and `#FFFFFF33` fill.
- Owner label uses `#ADB1B2`.

### Location tile

- Size: 411×106px.
- Vertical layout.
- Padding: `0 0 0 0px`.
- Gap: 16px.
- Alignment: min/center.
- Fixed width and height.
- Fill: `#FFFFFF`.
- Text styles: Calibre Medium 18px, Calibre Regular 18px, and Calibre Medium 20px.
- Station lists use top and bottom divider strokes with the Neutral / Grey 4 token, whose concrete value is not defined in source.
- Content frame: 379×74px.
- Content gap: 11px.

### Logo

- Reverse: 602.35×120px, fill `#FFFFFF`.
- Brandmark: 120×120px, fill `#FFFFFF`.
- Wordmark: 612.54×120px, fill `#FFFFFF`.
- Vertical: 135.33×120px, fill `#FFFFFF`.
- Loading screen instance: 262×52.2px, fill `#FFFFFF`.

### Rivian - App - Loading - 2

- Size: 411×820px.
- Fill: Brand / Tertiary, `#1D2222`.

### background-texture

- Size: 1330×344px.
- Fill: `#FFFFFF`.

### u:angle-left

- Size: 24×24px.
- Fill: `#FFFFFF`.
- Used in the charging screen header.

### u:crosshair-alt

- Size: 24×24px.
- Fill: `#FFFFFF`.

### u:location-pin-alt

- Size: 24×24px.
- Fill: `#FFFFFF`.

### _Meta / Section header

- Size: 1344×56px.
- Vertical layout.
- Padding: `0 0 0 0px`.
- Gap: 16px.
- Fixed width and height.
- Text style: H4 / Desktop.

### _Meta / Style chip

- Primary: 318×96px, radius 4px, fill `#F3AF3D`, Paragraph 2 / Normal.
- Top: 318×96px, radius `4/4/0/0px`, fill `#EECE7F`, Paragraph 2 / Normal.
- Bottom: 318×96px, radius `0/0/4/4px`, fill `#DA9D38`, Paragraph 2 / Normal.

## Screen patterns

### Cover

- Frame: 1440×900px.
- Uses a white Reverse logo at 408×80px.
- Includes an oversized Reverse logo at 5% opacity.
- Includes a 417×757px app presentation image.
- The app presentation image has a drop shadow in the source, but its color value is not in the allowed palette.

### Design showcase

- Presentation frame: 800×600px.
- Uses two app presentation images at approximately 320px wide.
- A second showcase arrangement uses two 341.6×670.16px device mockups.
- Device screens are 305×585.8px.
- Device screen shape uses Brand / Secondary / Shade 2, `#111920`.

### Home dashboard

- Frame: 411×1028px.
- Base surface: Neutral / Grey 1, `#F6F6F6`.
- Dark overview: 411×338px using Brand / Tertiary, `#1D2222`.
- Overview includes a 110×25px charging status pill with 24px radius.
- Large mileage metric uses Calibre Regular 72px; unit uses Calibre Regular 24px.
- Dashboard tiles use 184px-wide cards, 158px high, and 12px radius.
- Cards use 40px headers, 40×40px icon containers, and Shadow.
- Energy card uses the Gradient.
- Location, Controls, and Aircon cards use white fills.
- Media card: 380×146px, 12px radius.
- Sticky footer: 379×56px, 32px radius, Neutral / Grey 8 `#1E2021`, Elevation / Level 2.

### Loading

- Frame: 411×731px.
- Uses Brand / Tertiary, `#1D2222`.
- Centered loading logo instance: 262×52.2px, fill `#FFFFFF`.

### Charging

- Frame: 411×1315px.
- Base surface: Neutral / Grey 1, `#F6F6F6`.
- Reuses the 411×338px dark overview section.
- Battery section width: 377px.
- Battery heading uses Calibre Medium 20px and Brand / Secondary / Default, `#17232E`.
- Open charge port button: 377×48px, 4px radius, 1px stroke in `#F3AF3D`.
- Button label uses Suisse Int'l Trial Bold 16px.
- Station heading uses Calibre Medium 20px and Brand / Tertiary, `#1D2222`.
- Station lists use repeated 411×106px Location tiles.

## Notes for implementers

- Treat named tokens without concrete values, such as Neutral / Grey 4 and Brand / Tertiary-2, as unresolved source references; do not substitute colors.
- Preserve the distinction between Inter, Calibre, and Suisse Int'l Trial typography.
- Use the responsive heading sizes by breakpoint exactly as listed.
- Prefer the semantic color names when implementing components, while using the concrete hex values provided here.
- Keep dashboard cards modular and consistent: compact header, icon container, status text where present, and a right-side chevron affordance.
- Use 24px icons for utility actions and 18px icons for compact card and status controls.
- Do not infer additional spacing, radius, motion, or component families; no spacing variables, radius variables, or motion tokens were extracted.
- The source includes image fills and decorative device artwork; these are references rather than newly defined color or component tokens.
