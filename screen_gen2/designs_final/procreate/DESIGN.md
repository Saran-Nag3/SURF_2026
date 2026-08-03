---
name: procreate-keyboard-wireframe-v-2-community
source: Procreate Keyboard Wireframe V.2 (Community)
kind: design-system-context
---

# procreate - Design System

## Overview

- iPad Pro canvas: `1194x834px`.
- The source depicts keyboard settings, keyboard layout editing, shortcut icon selection, and layout customization flows.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion styles, effect styles, or grid styles were found.
- Primary UI direction: dark settings surfaces with light editing tiles and orange action controls.

## Design language

- Use a high-contrast dark interface built around `#1F1F1F`, `#1B1B1B`, and `#242424`.
- Use `#C4C4C4`, `#AAAAAA`, and `#FBFBFB` for light text and editing surfaces.
- Use `#FD9F00` for compact action buttons such as Done, Edit, Clear, and Save.
- Editing shortcut tiles are light, square cards with rounded corners, black borders, and drop shadows.
- The interface uses large, centered headings and compact action labels.
- Rounded geometry is common: 10px settings controls, 15px shortcut tiles, and a large nonuniform `100/100/80/80px` editing surface radius.

## Color palette

| Color | Usage count | Guidance |
|---|---:|---|
| `#000000` | 2052 | Primary icon and border color |
| `#00000000` | 756 | Transparent fill or stroke |
| `#FBFBFB` | 428 | Light shortcut tile surface |
| `#FBFBFB40` | 374 | Translucent light editing surface |
| `#FFBABA40` | 208 | Translucent accent surface |
| `#D8BAFF40` | 154 | Translucent accent surface |
| `#FFFFFF` | 78 | White surface or frame fill |
| `#C4C4C4` | 34 | Light secondary text |
| `#000000BD` | 30 | Dark action-label text |
| `#1B1B1B` | 30 | Dark navigation or panel surface |
| `#FD9F00` | 30 | Action-button fill |
| `#AAAAAA` | 24 | Muted heading and label text |
| `#242424` | 23 | Dark card and control surface |
| `#1F1F1F` | 22 | Main dark screen background |

## Type scale

- Roboto Medium, `35px` — large heading; used by “Shortcut icons”.
- Roboto Medium, `30px` — screen heading; used by “Keyboard Settings”.
- Roboto Medium, `24px` — section headings and layout names.
- Roboto Regular, `24px` — regular large text.
- Roboto Regular, `20px` — compact action labels such as Done, Edit, Clear, and Save.
- Roboto Medium, `19px` — settings option descriptions.
- Roboto Medium, `13px` — small labels.
- Roboto Light, `14px` — keyboard label text.

## Spacing scale

_None found in source._

## Radius scale

- `0px` — square vector geometry.
- `5px` — compact dark cards.
- `10px` — settings controls and action buttons.
- `15px` — shortcut tiles.
- `100/100/80/80px` — nonuniform radius on the large editing surface.

## Elevation & effects

- Shortcut tiles: drop shadow with `4px` blur and offset `0 4`.
- Large editing surface: drop shadow with `4px` blur and offset `0 4`.
- Shortcut tile border: `#000000`, `3px`.
- Large editing surface stroke: `#00000000`, observed at `0px` and `1px`.

## Components

### Archive

- Component family: `Archive`.
- Extracted family spec: `57x57px`.
- Observed nested instance size: `68x68px`.
- Icon strokes use `#000000` at `3px`.

### Unarchive

- Component family: `Unarchive`.
- Extracted family spec: `56x56px`.
- Observed nested instance size: `68x68px`.
- Icon strokes use `#000000` at `3px`.

### Picker

- Component family: `Picker`.
- Extracted family spec: `62x62px`.
- Observed nested instance size: `62x62px`.
- Icon stroke uses `#000000` at `3px`.

## Screen patterns

- **Settings overview:** `1194x834px` dark screen with a `#1F1F1F` background, `30px` “Keyboard Settings” heading, `24px` section heading, dark option cards, and orange action controls.
- **Keyboard layout editing:** dark split-panel layout with a `547x834px` dark side region, a `331x56px` layout selector, `24px` layout-name heading, and orange Save, Done, Edit, or Clear actions.
- **Shortcut icon picker:** a large editing area with a `426x631px` decorative region and a shortcut collection. Shortcut tiles are generally `84x84px`, with `#FBFBFB` fill, `15px` radius, `#000000` `3px` border, and a drop shadow.
- **Shortcut toolbar:** a dark panel containing shortcut tiles and a `35px` “Shortcut icons” heading.
- **Initial and transitional screens:** white `1194x834px` frames containing source image fills and translucent interaction overlays.

## Notes for implementers

- Target the `1194x834px` iPad Pro frame for screen layouts.
- Preserve the dark/light contrast hierarchy: dark backgrounds, light shortcut tiles, and orange action controls.
- Use only the observed Roboto weights and sizes; no local typography styles were defined.
- Treat image-filled rectangles as source artwork/assets rather than substituting invented colors.
- Keep shortcut tiles at `84x84px` when reproducing the shortcut picker pattern.
- Do not infer a spacing, motion, grid, or variable system; none was extracted.
