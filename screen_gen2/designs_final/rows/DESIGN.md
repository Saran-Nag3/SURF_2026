---
name: table-ui-kit-rows-cols-community
source: Table UI kit (rows, cols) (Community)
kind: design-system-context
---

# rows - Design System

## Overview
Table-focused UI kit for configurable columns, table headers, cells, rows, statuses, avatars, icons, checkboxes, and compact action buttons. Source pages: Table components and Cover.

## Design language
- Typeface: Inter.
- UI is compact and grid-oriented, with fixed-width table columns and fixed-height headers, cells, and rows.
- Primary table surfaces use #FFFFFF; headers use #F6F7F9.
- Borders primarily use #DCE0E5.
- Statuses use rounded pills with contrasting semantic colors.
- No local variable collections, grid styles, spacing variables, radius variables, or motion tokens were found.

## Color palette
Ranked by raw usage where counts are available:
- `#DF0C3D` — 252 uses
- `#F6F7F9` — 249 uses
- `#6F7C8E` — 98 uses
- `#FFFFFF` — 75 uses
- `#90909014` — 44 uses
- `#B6C1CA` — 44 uses
- `#A6B5C3` — 43 uses
- `#DDE1E7` — 43 uses
- `#DCE0E5` — 30 uses; table stroke color
- `#DB6E00` — 28 uses; pending status text
- `#FFED9E` — 28 uses; pending status fill
- `#00A81C` — 16 uses; complete status text
- `#9EFFB3` — 16 uses; complete status fill
- `#3348FF14` — 10 uses
- `#525E6F` — 10 uses
- `#9747FF` — 10 uses; component-set stroke
- `#C57BFF` — 8 uses
- `#141B34` — Dark token; 3 uses
- `#3030301A` — button inner shadow
- `#FFFFFF14` — button inner shadow
- `#FFFFFF29` — button inner shadow
- `#FFFFFF33` — button inner shadow

Named tokens:
- `gray-500`: `#AEBECD`
- `Dark`: `#141B34`
- `border-color`: no value specified
- `text-color-base`: no value specified

## Type scale
All typography uses Inter with `0px` tracking unless noted:
- 13px — Regular 400, `Typography/text-sm`, line height auto
- 15px — Regular 400, `Text-style-base`, line height `115.68%`
- 15px — Regular 400, `Typography/text-base`, line height `115.68%`
- 15px — Medium 500, `Typography/text-base-500`, line height `115.68%`
- 18px — Medium 500, raw style
- 20px — Medium 500, raw style
- 24px — Medium 500, raw style
- 36px — SemiBold 600, `Typography/text-h1`, line height `115.68%`
- 48px — SemiBold 600, raw style

## Spacing scale
_No spacing variables found in source._

Observed component spacing:
- Button padding: `8px 6px 8px 6px`; gap `6px`
- Status padding: `4px 12px 4px 12px`; gap `4px`
- Table header padding: `8px` on all sides; gap `4px`
- Table cell padding: `8px` on all sides; gap `8px`
- Table rows and columns: padding `0`; gap `0`

## Radius scale
_No radius variables found in source._

Observed component radii:
- Button: `8px`
- Status: `29px`
- Avatar: `24px`
- Column-table component set: `5px`
- Icons: `0px` on the decorative icon group

## Elevation & effects
- `button-effect`: inner shadow at `0px` offset, `0 2`, color `#FFFFFF29`; inner shadow at `16px` offset, `0 8`, color `#FFFFFF33`.
- `Btn-effect`: inner shadow at `2px` offset, `0 -2`, color `#3030301A`; inner shadow at `12px` offset, `0 7`, color `#FFFFFF14`.
- No motion tokens found.
- Avatar instances include a drop shadow in the source, but its color is not part of the allowed palette and is therefore unspecified here.

## Components
Only use these component families:

### `.Table-row`
- Horizontal fixed layout, width `846px`.
- Variants observed:
  - Height `60px`; fill `#FFFFFF`; stroke `#DCE0E5` at `1px`; text uses `Text-style-base` and `Typography/text-sm`.
  - Height `44px`; fill `#FFFFFF`; stroke `#DCE0E5` at `1px`; text uses `Text-style-base`, `Typography/text-sm`, and `Typography/text-base-500`.
- Padding and gap: `0`.

### `Column-table`
- Vertical fixed layout, `200x484px`.
- Padding and gap: `0`.
- Stroke: `border-color` at `1px`.
- Text: `Text-style-base`.
- Content variants: `col-avatar+text`, `col-checkbox`, `col-controls`, `col-icon+text`, `col-status`, `col-text`, `col-text-right`.

### `Column-table-lg`
- Vertical fixed layout, `200x644px`.
- Padding and gap: `0`.
- Text: `Typography/text-sm` and `Text-style-base`.
- Content variants: `col-avatar+text`, `col-checkbox`, `col-controls`, `col-icon+text`, `col-status`, `col-text`, `col-text-right`.

### `Button`
- Fixed size `32x32px`.
- Radius `8px`.
- Horizontal layout; padding `8px 6px 8px 6px`; gap `6px`; centered alignment.
- Fill: `#F6F7F9`.
- Variants: `btn-delete`, `btn-edit`, `btn-more`, `btn-view`.
- Effect styles: `button-effect` and `Btn-effect`.

### `Status`
- Fixed size `75x24px` for the base specification.
- Horizontal centered layout; padding `4px 12px 4px 12px`; gap `4px`.
- Radius `29px`.
- Base fill: `#FFED9E`.
- Text: `Typography/text-sm`.
- `pending`: fill `#FFED9E`, text `#DB6E00`; observed size `75x24px`.
- `complete`: fill `#9EFFB3`, text `#00A81C`; observed size `92x24px`.
- Variants: `complete`, `pending`.

### `Avatar`
- Fixed size `24x24px`.
- Radius `24px`.
- Fill: `#FFFFFF`.
- Variants: `avatar-1`, `avatar-house`, `avatar-letter`, `avatar-pic`.
- Avatar placeholder details use `#DDE1E7`, `#A6B5C3`, and a `#FFFFFF` stroke.

### `Icons`
- Fixed size `24x24px`.
- Variants: `icon-file`, `icon-star`, `icon-star-fill`, `icon-user`, `icon-user-fill`.

### `_base-checkbox`
- Fixed size `24x24px`.
- Fill: `#FFFFFF`.
- Variants: `off`, `on`.

### `_base-table-header`
- Fixed size `200x44px`.
- Horizontal layout; padding `8px` on all sides; gap `4px`; minimum/center alignment.
- Fill: `#F6F7F9`.
- Stroke: `#DCE0E5` at `1px`.
- Text: `Text-style-base`.
- Variants: `basic`, `check-all`, `empty`, `sortable`.

### `_base-table-cell`
- Fixed size `200x44px`.
- Horizontal layout; padding `8px` on all sides; gap `8px`; minimum/center alignment.
- Stroke: `border-color` at `1px`.
- Text: `Text-style-base`.
- Variants: `cell-action`, `cell-badge`, `cell-checkbox`, `cell-expand-btn`, `cell-icon+text`, `cell-persona`, `cell-text`, `cell-text-right`.

### `_base-table-cell-lg`
- Fixed size `200x60px`.
- Horizontal layout; padding `8px` on all sides; gap `8px`; minimum/center alignment.
- Stroke: `border-color` at `1px`.
- Text: `Typography/text-sm` and `Text-style-base`.
- Variants: `cell-action`, `cell-badge`, `cell-checkbox`, `cell-expand-btn`, `cell-icon+text`, `cell-persona`, `cell-text`, `cell-text-right`.

## Screen patterns
- **Table components / Column-table:** configurable table columns are shown as vertical stacks of one `200px` header followed by repeated table cells. Column content patterns include text, right-aligned text, icon plus text, avatar plus text, checkbox, controls, and status.
- **Table compositions:** columns can be combined into a horizontal table or `.Table-row`; standard rows are `44px` high and larger rows are `60px` high.
- **Cover:** source page is present, but no additional screen pattern details were provided.

## Notes for implementers
- Use only the listed component families and their named variants.
- Preserve fixed dimensions where specified; do not substitute fluid sizes for the table primitives.
- `border-color` and `text-color-base` are referenced heavily but have no resolved source values. Treat them as unresolved tokens rather than assigning a new color.
- Prefer `#DCE0E5` for explicitly specified table strokes.
- Use `#F6F7F9` for table headers and button fills, and `#FFFFFF` for table-row and avatar surfaces.
- Use the complete/pending status color pairs exactly as specified.
- No spacing or radius token system was extracted; use the component-level values listed above.
- The source contains an avatar image asset token `Avatars/person-1`, but no usable image value was extracted.
