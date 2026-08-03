---
name: n26-ui-community
source: N26 UI (Community)
kind: design-system-context
---

# n26 - Design System

## Overview

- Figma file: N26 UI (Community)
- Figma page: All pages (2): cover, references
- No local variable collections found.
- The extraction contains color and typography tokens, a broad icon library, iOS status-bar and home-indicator elements, and interface components.

## Design language

- Typography uses Manrope for most labels and headings, with Inter for two paragraph/label styles.
- The system combines neutral black and white foundations with green, blue, red, and yellow semantic colors.
- Icons are generally 24×24px and support Filled and Outlined variants.
- iOS-specific elements include a 375×44px status bar and a Home Indicator - iOS component.

## Color palette

Colors ranked by raw unstyled usage where counts are available:

| Color | Usage / token references |
|---|---|
| `#000000` | 597 raw uses; Content / contentPrimary; Inverse / Background / backgroundInversePrimary |
| `#0B1C3F` | 55 raw uses |
| `#FFFFFF` | 22 raw uses; white; grey-100; Background/backgroundPrimary; Inverse / Content / contentInversePrimary; Content++ / contentOnColor |
| `#9747FF` | 10 raw uses |
| `#0000001A` | 6 raw uses |
| `#36A18B` | green-500 |
| `#1B1B1B` | black |
| `#6D6D6D` | grey-400 |
| `#B15D5B` | red-300 |
| `#F2ECE1` | yellow-100 |
| `#E8F2EE` | green-100 |
| `#E9EEF2` | blue-100 |
| `#2B697A` | blue-300 |
| `#F2E8E8` | red-100 |
| `#CCE3DA` | green-200 |
| `#838388` | grey-300 |
| `#9BD0C5` | green-400 |
| `#BBD8E8` | blue-200 |
| `#967C4D` | yellow-300 |
| `#B1D5D1` | green-300 |
| `#AC4C4C` | Interface essential/Compass fill |

Additional extracted color values:

- `#6E6E6E00`
- `#6E6E6E03`
- `#6E6E6E0D`
- `#6E6E6E17`
- `#6E6E6E1A`

No token was provided for grey-200.

## Type scale

### Headings

| Token | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `heading/large` | Manrope | 600 | 36px / 40px | 0px |
| `heading/medium` | Manrope | 600 | 24px / 32px | 0px |
| `heading/small` | Manrope | 600 | 20px / 28px | 0px |
| `heading/xsmall` | Manrope | 600 | 18px / 24px | 0px |

### Labels

| Token | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `label/large` | Manrope | 500 | 18px / 24px | 0px |
| `label/medium` | Manrope | 600 | 16px / 20px | 0px |
| `label/small` | Manrope | 500 | 16px / 20px | 0px |
| `Label/X Small (12\16)` | Inter | 500 | 12px / 16px | 0px |
| `label/xsmall` | Manrope | 500 | 10px / 16px | 0px |

### Paragraphs

| Token | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `Paragraph/Medium (16\24)` | Inter | 400 | 16px / 24px | 0px |
| `Paragraph/small` | Manrope | 400 | 14px / 20px | 0.1px |

### Raw typography

- Manrope Medium, 18px: 9 uses.
- SF Pro Text Semibold, 15px: 8 uses.
- Manrope Bold, 14px: 6 uses.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles found.
- No motion variables found.
- No local grid styles found.

## Components

Allowed component families present:

- `.Itemnav`
- `.circle-Icon`
- `.colors`
- `.listItem`
- `Arrows-chevron`
- `Avatar`
- `Banners`
- `Brand`
- `Comercial`
- `Documents`
- `Edit`
- `Folder`
- `Home Indicator - iOS`
- `Icon-button`
- `Interface essential`
- `Layout`
- `List`
- `Music and sound Player`
- `Status bar - iOS`
- `Typography`
- `User`
- `bottomNav`
- `buttons`
- `devices`
- `divider`
- `filter`
- `heading`
- `input`
- `mouse and keyboard`
- `search`
- `verticalButton`

### Shared icon behavior

- The icon families include `Arrows-chevron`, `Edit`, `Layout`, `Documents`, `Folder`, `devices`, `mouse and keyboard`, `Comercial`, `Music and sound Player`, `Interface essential`, and `User`.
- Standard icon size: 24×24px.
- Standard icon fill: `#FFFFFF`.
- Most icons provide `Style: Filled` and `Style: Outlined` variants.
- `Music and sound Player/Airplay` provides `Style: Filled/Outlined`.
- `Interface essential/Compass` uses `#AC4C4C` and provides Filled/Outlined variants.
- `Interface essential/Facebook` provides a Filled variant.
- Component-specific variant names include `Style: Filled - 0/Outlined` for `Arrows-chevron/Rotate`.

### Status bar

- `Status bar - iOS`: 375×44px.
- Layout: vertical.
- Padding: 0 0 0 0px.
- Gap: 101px.
- Sizing: width fixed, height fixed.
- Text: SF Pro Text Semibold, 15px.
- Variants:
  - `soft`: iOS
  - `theme`: dark/light
  - `size`: large/small

### Music and sound Player

- `Airplay`: 24×24px, fill `#FFFFFF`, Filled/Outlined.
- Includes Play-pause, Play, Pause-rectangle, Next, previous, Music-note-1, Volume-Down, Volume-Up, Volume, Forward, and backwards icons.
- These icons are 24×24px with Filled/Outlined variants and `#FFFFFF` fill.

### Edit

- Includes marker, Crop, Add-anchor-point, Brush, Edit-anchor-point, Eraser, Brush-1, Remove-anchor-point, Layer, and Edit.
- Icons are 24×24px with `#FFFFFF` fill.
- Variants are Filled/outlined or Filled/Outlined as specified in the source.

### Arrows-chevron

- Includes directional arrows, chevrons, rotate, corner arrows, and square-corner arrows.
- Icons are 24×24px with `#FFFFFF` fill.
- Variants are Filled/Outlined, with Rotate using `Filled - 0/Outlined`.

### Documents and Folder

- `Documents` includes document search, copy, edit, favorites, add, secure, sync, history, broken-document, and shredder icons.
- `Folder` includes opened, remove, marked, sync, secure, content, information, locked, details, shared, multi-folder, and edit-folder icons.
- All listed icons are 24×24px, use `#FFFFFF` fill, and provide Filled/Outlined variants.

### Interface essential

- Includes navigation, information, retry, download, eye, wallet, filter, expand, image, flag, sort, send/receive, external link, communication, social, loading, tags, security, activity, status, media, and utility icons.
- Standard size is 24×24px.
- Standard fill is `#FFFFFF`.
- Variants are generally Filled/Outlined.
- `Compass` uses `#AC4C4C`.

### Other icon families

- `Layout`: grid-1 through grid-8.
- `devices`: phones, computers, audio devices, batteries, storage, gaming, and connected-device icons.
- `mouse and keyboard`: Mouse and keyboard states.
- `Comercial`: shopping, box, delivery, basket, store, discount, and positioning icons.
- `User`: Group-person, Two-Person, and Add-Person.
- All listed icons use 24×24px size, `#FFFFFF` fill, and Filled/Outlined variants unless otherwise specified.

## Screen patterns

- The source page contains two pages: `cover` and `references`.
- No product screens or detailed screen compositions were extracted.
- The references page contains the design-system token and component references summarized above.

## Notes for implementers

- Use only the listed palette values; `#000000` is the most-used raw color, followed by `#0B1C3F` and `#FFFFFF`.
- Prefer the named typography tokens over raw typography values when implementing headings, labels, and paragraphs.
- Use 24×24px for the extracted icon components.
- Preserve Filled/Outlined icon variants and the explicitly listed variant names.
- Do not infer spacing, corner radii, shadows, motion, or grid behavior; none were defined in the source.
- Treat `Status bar - iOS` as a fixed 375×44px component with its specified gap and iOS variants.
