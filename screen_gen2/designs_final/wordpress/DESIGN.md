---
name: wordpress-design-system-community
source: WordPress Design System (Community)
kind: design-system-context
---

# wordpress - Design System

## Overview

- Source: WordPress Design System (Community), all 75 Figma pages.
- Coverage: foundations, components, BlockEditor, and SiteEditor.
- Extracted component families include controls, navigation, overlays, feedback, editor surfaces, data views, and iconography.
- No local variable collections, paint styles, color variables, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Primary interface typeface: SF Pro.
- Core UI text uses compact sizes from 11px to 20px, with 20px line height common for controls and headings.
- Larger display typography also appears in raw source usage, including Inter, Manrope, SF Pro, SF Mono, DM Mono, and Work Sans.
- Icons are consistently specified at `24x24px` with fill `#FFFFFF`.
- Effects use layered drop shadows with progressively larger offsets and low-opacity black colors.
- The source contains both light neutral surfaces and dark neutrals, with saturated accent colors including blue, purple, pink, yellow, and red.

## Color palette

Ranked by observed usage:

| Color | Usage |
|---|---:|
| `#0000001F` | 2196 |
| `#FFFFFF14` | 2196 |
| `#1E1E1E` | 1582 |
| `#AEAEAE` | 1029 |
| `#F6F7F7` | 946 |
| `#FFFFFF` | 715 |
| `#0000001A` | 526 |
| `#111111` | 440 |
| `#070707` | 411 |
| `#000000` | 227 |
| `#DBDBDB` | 131 |
| `#F5F5F5` | 121 |
| `#FF0000` | 114 |
| `#9747FF` | 99 |
| `#EBEBEB` | 80 |
| `#D9D9D9` | 75 |
| `#24292F` | 67 |
| `#FF4785` | 67 |
| `#FF47850D` | 67 |
| `#FCFCFC` | 61 |

Additional extracted colors include `#3858E9`, `#3858E90A`, `#6952FB`, `#949494`, `#C3C3C3`, `#CCCCCC`, `#DDDDDD`, `#E0E0E0`, `#EAEAEB`, `#F0F0F0`, `#F0F0F1`, `#F9F9F9`, `#00000000`, `#00000003`, `#00000005`, `#00000008`, `#0000000A`, `#0000000D`, `#00000012`, `#00000014`, `#00000017`, `#00000021`, `#000000D9`, `#FFE992`, and `#FFFFFF`.

## Type scale

### Semantic UI tokens

| Token | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Body SM | SF Pro Regular | 400 | 12px | 16px | 0px |
| Body MD | SF Pro Regular | 400 | 13px | 20px | 0px |
| Body LG | SF Pro Regular | 400 | 15px | 24px | 0px |
| Body XL | SF Pro Regular | 400 | 20px | 32px | 0px |
| Button SM | SF Pro Regular | 500 | 11px | 20px | 0px |
| Button MD | SF Pro Regular | 500 | 13px | 20px | 0px |
| Heading S | SF Pro Semibold | 500 | 11px | 16px | 0px |
| Heading MD | SF Pro Semibold | 500 | 13px | 20px | 0px |
| Heading LG | SF Pro Semibold | 500 | 15px | 20px | 0px |
| Heading XL | SF Pro Semibold | 500 | 20px | 24px | 0px |
| Heading 2XL | SF Pro Regular | 500 | 32px | 40px | 0px |

### Additional raw type usage

- Inter SemiBold: 80px.
- Manrope Regular: 42px, 18px, 16px, 14.4px, 14px, 12.8px.
- SF Pro Semibold: 40px.
- SF Pro Display Medium: 32px.
- Inter Medium: 32px and 12px.
- Inter Regular: 24px, 20px, and 14px.
- Manrope Bold: 24px and 22px.
- SF Pro Regular: 24px and 13px.
- SF Mono Semibold: 18px.
- DM Mono Regular: 14px.
- Inter SemiBold: 14px.
- SF Pro Text Regular: 14px and 13px.
- SF Pro Text Medium: 13px.
- SF Mono Regular: 12px.
- Work Sans Regular: 14px.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

Use the extracted layered drop-shadow definitions exactly.

- **Elevation Large**
  - `drop_shadow 43px offset 0 50 #00000005`
  - `drop_shadow 36px offset 0 30 #0000000A`
  - `drop_shadow 27px offset 0 15 #00000012`
  - `drop_shadow 15px offset 0 5 #00000014`
- **Elevation Medium**
  - `drop_shadow 16px offset 0 16 #00000005`
  - `drop_shadow 5px offset 0 4 #00000008`
  - `drop_shadow 5px offset 0 4 #0000000A`
  - `drop_shadow 3px offset 0 2 #0000000D`
- **Elevation Small**
  - `drop_shadow 8px offset 0 8 #00000005`
  - `drop_shadow 2px offset 0 1 #0000000D`
  - `drop_shadow 2px offset 0 1 #0000000D`
  - `drop_shadow 2px offset 0 1 #0000000D`
- **Elevation X Small**
  - `drop_shadow 4px offset 0 4 #00000003`
  - `drop_shadow 3px offset 0 3 #00000005`
  - `drop_shadow 2px offset 0 1 #00000005`
  - `drop_shadow 1px offset 0 1 #00000008`

## Components

### Controls and inputs

- `AlignmentMatrixControl`
- `AnglePickerControl`
- `BorderControl`
- `BorderBoxControl`
- `BoxControl`
- `CheckboxControl`
- `ComboboxControl`
- `Control`
- `FormTokenField`
- `InputControl`
- `NumberControl`
- `RadioControl`
- `RangeControl`
- `SearchControl`
- `SelectControl`
- `TextareaControl`
- `TimePicker`
- `ToggleControl`
- `ToggleGroupControl`
- `UnitControl`
- `FontSizePicker`
- `FocalPointPicker`
- `GradientPicker`
- `CustomGradientPicker`
- `ColorPalette`
- `CircularOptionPicker`
- `DuotonePicker`
- `DuotoneSwatch`

### Actions and navigation

- `Button`
- `IconButton`
- `Toolbar`
- `Tabs`
- `Menu`
- `Dropdown`
- `ExternalLink`
- `ItemGroup`
- `CommandsMenu`
- `CommandInput`
- `Stepper Input`

### Surfaces and layout

- `Card`
- `Panel`
- `PanelRow`
- `Sidebar`
- `Inspector`
- `EditorHeader`
- `Canvas`
- `Page`
- `BlockEditor`
- `BlockInserter`
- `SiteEditor`
- `DataForm`
- `DataViews`
- `DataviewsOptions`
- `TreeGrid`
- `ResizableBox`
- `DropZone`
- `Placeholder`
- `Preview Frame`
- `Sample Page`
- `SampleContent`
- `SampleMenu`

### Feedback and overlays

- `Badge`
- `ConfirmDialog`
- `Guide`
- `Modal`
- `Notice`
- `Progressbar`
- `Snackbar`
- `SnackbarList`
- `Spinner`
- `Tooltip`
- `Error`

### Iconography

- All extracted icons are `24x24px` with fill `#FFFFFF`.
- Use the named icon families from the source, including:
  - Navigation: `arrow-left`, `arrow-right`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `close`, `menu`, `more`, `search`.
  - Editing: `format-bold`, `format-italic`, `format-underline`, `format-strikethrough`, `link`, `copy`, `undo`, `redo`, `trash`, `pencil`.
  - Layout: `align-left`, `align-center`, `align-right`, `align-justify`, `columns`, `grid`, `row`, `sidebar`, `layout`.
  - Content: `heading`, `paragraph`, `image`, `gallery`, `video`, `audio`, `quote`, `table`, `code`, `list`.
  - Status: `check`, `info`, `warning`, `error`, `caution`, `pending`, `published`, `offline`, `not-found`.
  - WordPress/editor: `wordpress`, `block-default`, `block-meta`, `block-table`, `site-logo`, `styles`, `typography`, `widget`, `reusable-block`.

## Screen patterns

- **Foundations**: Color, Typography, Spacing, Radius, Elevation, Layout, and Icons documentation pages.
- **Component catalog**: Individual pages for controls, buttons, cards, panels, overlays, feedback, data views, calendars, pickers, and editor utilities.
- **Block editing**: `BlockEditor`, `BlockInserter`, `Canvas`, `Inspector`, `Toolbar`, and related block controls.
- **Site editing**: `SiteEditor`, `Page`, `Sidebar`, navigation, layout, and template-related patterns.
- **Documentation and examples**: `Sample Page`, `Preview Frame`, `SampleContent`, `SampleMenu`, `Guide`, and component use-case patterns.
- **Internal and deprecated areas**: Internal component variants and a deprecated-components section are present in the source.

## Notes for implementers

- Prefer the semantic SF Pro tokens for standard interface text and controls.
- Use the semantic type tokens before selecting raw typography values.
- Preserve the exact line heights and `0px` tracking specified by the type tokens.
- Use colors from the extracted palette only; prioritize the highest-usage colors when no more specific context is provided.
- Do not infer a spacing, radius, motion, or grid token because none was extracted.
- Use the named component families rather than recreating equivalent controls.
- Use `24x24px` white icons for the extracted icon set.
- Apply elevation as layered shadows, not as a single replacement shadow.
- Keep editor interfaces organized around `Canvas`, `Toolbar`, `Inspector`, `Sidebar`, `BlockInserter`, and `Panel` patterns where applicable.
