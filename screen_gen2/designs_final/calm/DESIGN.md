---
name: calm-design-system-community
source: Calm Design System (Community)
kind: design-system-context
---

# calm - Design System

## Overview

- Source: Calm Design System (Community)
- Figma pages: All pages (2): Calm Design System by Akshay Syal, Symbols
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The extraction contains typography examples, raw color usage, form controls, buttons, labels, alerts, toasters, tooltips, pagination, and grid examples.

## Design language

- Light surfaces are dominant, with `#FFFFFF` as the most-used color.
- Primary text commonly uses `#000000`; secondary text commonly uses `#828894`.
- Status colors are represented by blue, green, cyan, orange, and red/coral tones.
- Controls use compact dimensions, 4px input corner radii, muted gray fills, and 1px borders for bordered states.
- Typography is primarily SF Pro Display, with Inter used for selected controls and pagination.
- The source includes both restrained interface components and a dark portfolio-style hero composition.

## Color palette

Ranked by source usage:

| Color | Uses | Observed role |
|---|---:|---|
| `#FFFFFF` | 389 | Primary background and light surfaces |
| `#000000` | 143 | Primary text |
| `#060606` | 130 | Dark surfaces or text |
| `#DDDDDD` | 78 | Borders and dividers |
| `#F4F5F7` | 70 | Light neutral surface |
| `#828894` | 54 | Secondary text and labels |
| `#FB6340` | 52 | Error or danger accent |
| `#2DCE89` | 41 | Success accent |
| `#8062F91A` | 40 | Translucent purple accent |
| `#11CDEF` | 35 | Info or cyan accent |
| `#172B4D` | 35 | Dark blue text or accent |
| `#5E72E4` | 35 | Blue primary accent |
| `#F5365C` | 35 | Red danger accent |
| `#010101` | 33 | Near-black text or surface |
| `#10182F` | 22 | Deep navy accent |
| `#FAFAFA` | 22 | Input and control surface |
| `#9E9E9E` | 21 | Neutral gray |
| `#DADDE3` | 19 | Light border or neutral |
| `#D8DCE6` | 16 | Light border or neutral |
| `#00EFE1` | 11 | Bright cyan accent |
| `#DADADA` | 11 | Divider; used by the typography heading line |
| `#37D5F2` | 8 | Cyan accent |
| `#ADADAD` | 8 | Neutral gray |
| `#B0B7C3` | 8 | Disabled or placeholder text |
| `#BFC0C3` | 8 | Neutral gray |
| `#CECECE` | 8 | Neutral gray |
| `#F75676` | 8 | Pink-red accent |
| `#FB9B14` | 8 | Warning accent |
| `#FC7C5F` | 8 | Coral accent |

## Type scale

### Most-used typography

- `14px SF Pro Display Bold` — 133 uses
- `24px Inter Medium` — 110 uses
- `14px SF Pro Display Medium` — 44 uses
- `12px SF Pro Display Medium` — 30 uses
- `14px SF Pro Display Regular` — 22 uses
- `14px Inter Medium` — 12 uses
- `16px SF Pro Display Medium` — 12 uses
- `14px SF Pro Display Semibold` — 12 uses
- `24px SF Pro Display Semibold` — 12 uses
- `14px Inter SemiBold` — 10 uses
- `24px SF Pro Display Regular` — 5 uses
- `18px SF Pro Display Semibold` — 5 uses
- `36px SF Pro Display Bold` — 3 uses
- `20px SF Pro Display Regular` — 3 uses

### Observed hierarchy

- Banner text: `54px SF Pro Display Bold`
- Main heading / large title: `36px SF Pro Display Bold`
- Heading / title: `24px SF Pro Display Semibold`
- Additional 24px styles: `24px Inter Medium`, `24px SF Pro Display Regular`
- Subtitle: `18px SF Pro Display Semibold`
- Medium text: `16px SF Pro Display Medium`
- Body, headline, labels, and controls: `14px`
- Small text: `12px SF Pro Display Medium`
- Additional observed sizes: `20px SF Pro Display Regular`, `13px Karla Regular`, `22px Abril Fatface Regular`, `30px Abril Fatface Regular`, `32px Abril Fatface Regular`

### Type usage

- Body copy uses `14px SF Pro Display Regular`.
- Headlines use `14px SF Pro Display Semibold`.
- Subtitles use `18px SF Pro Display Semibold`.
- Titles use `24px SF Pro Display Semibold`.
- Large headings use `36px SF Pro Display Bold`.
- Buttons and labels use `14px SF Pro Display Bold`.
- Checkbox and toggle text uses `14px Inter SemiBold`.
- Pagination uses `24px Inter Medium`.
- Input labels use `12px SF Pro Display Medium`.
- Input values commonly use `14px SF Pro Display Regular` or `14px Inter Medium`.

## Spacing scale

_None found in source._

## Radius scale

- `4px` observed on input fields, textareas, select controls, and their states.
- No reusable radius variables were found.

## Elevation & effects

- The select option menu includes a drop shadow with `4px` blur and offset `0 1`.
- No local effect styles were found.
- No motion tokens were found.

## Components

### Buttons

All button families use `43px` height and `14px SF Pro Display Bold` text.

- `btn_primary`: `105x43px`
- `btn_primary_without_border`: `105x43px`
- `btn_primary_border`: `105x43px`
- `btn_primary_border_rounded`: `105x43px`
- `btn_primary_rounded`: `105x43px`
- `btn_primary_with_icon`: `124x43px`
- `btn_primary_border_icon`: `124x43px`
- `btn_primary_rounded_icon`: `124x43px`

- `btn_default`: `106x43px`
- `btn_default_without_border`: `106x43px`
- `btn_default_border`: `106x43px`
- `btn_default_border_rounded`: `106x43px`
- `btn_default_rounded`: `106x43px`
- `btn_default_with_icon`: `118x43px`
- `btn_default_border_icon`: `118x43px`
- `btn_default_rounded_icon`: `118x43px`

- `btn_secondary`: `125x43px`
- `btn_secondary_without_border`: `125x43px`
- `btn_secondary_border`: `125x43px`
- `btn_secondary_border_rounded`: `125x43px`
- `btn_secondary_rounded`: `125x43px`
- `btn_secondary_with_icon`: `146x43px`
- `btn_secondary_border_icon`: `146x43px`
- `btn_secondary_rounded_icon`: `146x43px`

- `btn_success`: `103x43px`
- `btn_success_without_border`: `103x43px`
- `btn_success_border`: `103x43px`
- `btn_success_border_rounded`: `103x43px`
- `btn_success_rounded`: `103x43px`
- `btn_success_with_icon`: `125x43px`
- `btn_success_border_icon`: `125x43px`
- `btn_success_rounded_icon`: `125x43px`

- `btn_danger`: `103x43px`
- `btn_danger_without_border`: `103x43px`
- `btn_danger_border`: `103x43px`
- `btn_danger_border_rounded`: `103x43px`
- `btn_danger_rounded`: `103x43px`
- `btn_danger_with_icon`: `118x43px`
- `btn_danger_border_icon`: `118x43px`
- `btn_danger_rounded_icon`: `118x43px`

- `btn_warning`: `103x43px`
- `btn_warning_without_border`: `103x43px`
- `btn_warning_border`: `103x43px`
- `btn_warning_border_rounded`: `103x43px`
- `btn_warning_rounded`: `103x43px`
- `btn_warning_with_icon`: `126x43px`
- `btn_warning_border_icon`: `126x43px`
- `btn_warning_rounded_icon`: `126x43px`

- `btn_info`: `76x43px`
- `btn_info_without_border`: `76x43px`
- `btn_info_border`: `76x43px`
- `btn_info_border_rounded`: `76x43px`
- `btn_info_rounded`: `76x43px`
- `btn_info_with_icon`: `91x43px`
- `btn_info_border_icon`: `91x43px`
- `btn_info_rounded_icon`: `91x43px`

### Labels

All labels are `32px` high and use `14px SF Pro Display Bold`.

- `label_default`: `106x32px`
- `label_primary`: `105x32px`
- `label_secondary`: `125x32px`
- `label_info`: `76x32px`
- `label_success`: `103x32px`
- `label_danger`: `103x32px`
- `label_warning`: `103x32px`

### Alerts

All alert variants are `462x43px` with `14px SF Pro Display Medium` text.

- `alert_danger`, `alert_danger_with_icon`
- `alert_info`, `alert_info_with_icon`
- `alert_success`, `alert_success_with_icon`
- `alert_warning`, `alert_warning_with_icon`

### Toasters

Toasters are `462x66px`.

- `toaster_danger_with_icon`: `12px` and `14px SF Pro Display Medium`
- `toaster_info_with_icon`: `14px SF Pro Display Medium`
- `toaster_success_with_icon`: `12px` and `14px SF Pro Display Medium`
- `toaster_warning_with_icon`: `12px` and `14px SF Pro Display Medium`

### Tooltips

- `tooltips_top_center`, `tooltips_top_left`, `tooltips_top_right`, `tooltips_bottom_center`, `tooltips_bottom_left`, `tooltips_bottom_right`: `123x46px`, `14px SF Pro Display Medium`
- `tooltips_left`, `tooltips_right`: `131x38px`, `14px SF Pro Display Medium`

### Inputs

- `Input Field`: `380x72px`; `48px` control area; `4px` radius; `#FAFAFA` fill; `12px SF Pro Display Medium` label; `14px SF Pro Display Regular` value.
- `Input Field with border`: `380x72px`; same structure with a `1px #DDDDDD` border.
- `Input Field with error`: `380x96px`; includes an additional `11px SF Pro Display Regular` error line.
- `Input Field with inside error`: `380x72px`; `1px #FB6340` border and `#FB6340` value/icon treatment.
- `Input Field with warning`: `380x72px`; `1px #FB9B14` border and warning treatment.
- `Input Field with Success`: `380x72px`.
- `Input Field with Password`: `380x72px`; includes a `20x20px` icon.
- `Input Field with Disable`: `380x72px`.
- `Input Field with calendar`: `380x72px`.
- `Input Field with search`: `380x72px`.
- `Input Field with Textarea`: `400x128px`; `380x104px` textarea region; `4px` radius; includes a resizer.
- `Input Select Option`: `380x215px`; `48px` input area and `133px` option panel; option panel uses a drop shadow.

### Checkboxes and toggles

Checkbox variants are `191x20px` with `14px Inter SemiBold` text:

- `Checked`
- `Unchecked`
- `unchecked`
- `Disabled Checked`
- `Disabled Unchecked`
- `Disabled checkbox`
- `Disabled unchecked`

Toggle variants are `207x20px` with `14px Inter SemiBold` text:

- `Toggle On`
- `Toggle Off`

### Pagination

- `Pagination` uses `24px Inter Medium` text and `60px` height.
- Observed widths: `356px`, `385.91px`, `459.91px`, `502px`, `504px`, `571px`.

### Grids

- `Grids / Mobile Web Grid 320px`: `320x224px`, `#FFFFFF` fill.
- `Grids / iOS Grid 375px`: `375x224px`, `#FFFFFF` fill.
- `Grids / Desktop 1180 px`: `1180x224px`, `#FFFFFF` fill.

## Screen patterns

- **Typography screen:** A `1440x884px` white frame presenting banner text, headings, subtitles, body copy, small text, text links, and a typography heading divider using `#DADADA`.
- **Calm Design System screen:** A `1440x884px` portfolio-style composition with a dark left-side visual area, white display typography, profile imagery, contact information, and decorative shapes.
- **Text Fields screen:** A `1440x774px` white frame containing a `1224x670px` state showcase for inputs, textareas, select menus, errors, warnings, success, disabled, password, calendar, and search states.

## Notes for implementers

- Prefer the observed component dimensions exactly; do not normalize button widths across semantic variants.
- Use `43px` height for buttons and `32px` height for labels.
- Use `380px` width for standard input variants; use `400px` width for the textarea component.
- Use `4px` radius on input controls and textareas.
- Use `#FAFAFA` for standard input surfaces and `#FFFFFF` for select menus and explicitly white input states.
- Use `#DDDDDD` for standard input borders and `#FB6340` or `#FB9B14` for observed error and warning borders.
- Use SF Pro Display for most interface text. Use Inter for checkbox/toggle labels and pagination.
- No spacing, radius-token, motion, or local style system was extracted; rely only on the dimensions and values documented here.
