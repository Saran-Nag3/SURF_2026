---
name: airtable-apps-ui-kit-community
source: Airtable Apps UI Kit (Community) — Components
kind: design-system-context
---

# airtable - Design System

## Overview

Airtable Apps UI Kit community design system extracted from the Figma file “Airtable Apps UI Kit (Community)”, page “Components”.

The system uses SF Pro Text for interface text and SF Pro Display for larger headings. The primary interface palette is grayscale with blue, red, green, yellow, orange, pink, purple, teal, and cyan accent families. Components generally use 3px radius, 32px control height, compact typography, and an 8px-based spacing scale.

## Design language

- Compact, utility-focused interface styling.
- SF Pro Text is used for interface labels, controls, body text, and paragraphs.
- SF Pro Display is used for larger headings.
- Most-used foreground colors:
  - Dark: `#333333` — 784 uses
  - Light: `#757575` — 131 uses
  - White: `#FFFFFF` — 95 uses
  - Dark gray 2: `#424242` — 43 uses
  - Black: `#0F0F0F` — 7 uses
- Common control surfaces:
  - Light gray 2: `#F2F2F2`
  - White: `#FFFFFF`
  - Gray light 2: `#EEEEEE`
- Controls are predominantly horizontal, fixed-size layouts with centered alignment.
- Common control gap: `10px`; segmented controls use `4px`; switches use `8px`.
- Common control radius: `3px`.
- Pill-shaped tokens and switches use `100px` or `9999px`.

## Color palette

### Grayscale

Ranked by reported usage where available:

| Token | Value | Usage |
|---|---:|---:|
| Dark | `#333333` | 784 |
| Light | `#757575` | 131 |
| White | `#FFFFFF` | 95 |
| Light gray 2 | `#F2F2F2` | 57 |
| Dark gray 2 | `#424242` | 43 |
| Light gray 4 | `#FFFFFF` | 28 |
| Black | `#0F0F0F` | 7 |
| Gray light 2 | `#EEEEEE` | 8 |
| Light gray 1 | `#FAFAFA` | 2 |
| Light gray 3 | `#E8E8E8` | 1 |
| Gray light 1 | `#CCCCCC` | 2 |
| Gray | `#666666` | 5 |
| Gray dark 1 | `#444444` | 1 |
| Raw gray | `#898989` | 17 |
| Raw gray | `#000000` | 15 |
| Raw black overlay | `#0000001A` | 10 |
| Raw black overlay | `#00000040` | 4 |

`#FFFFFF` is used by both White and Light gray 4; treat them as the same color value.

### Accent colors

| Family | Dark | Base | Bright | Light 1 | Light 2 |
|---|---|---|---|---|---|
| Blue | `#2750AE` | `#1283DA` | `#2D7FF9` | `#9CC7FF` | `#CFDFFF` |
| Cyan | `#0B76B7` | `#01A9DB` | `#18BFFF` | `#77D1F3` | `#D0F0FD` |
| Teal | `#06A09B` | `#02AAA4` | `#20D9D2` | `#72DDC3` | `#C2F5E9` |
| Green | `#338A17` | `#11AF22` | `#20C933` | `#93E088` | `#D1F7C4` |
| Yellow | `#B87503` | `#E08D00` | `#FCB400` | `#FFD66E` | `#FFEAB6` |
| Orange | `#D74D26` | `#F7653B` | `#FF6F2C` | `#FFA981` | `#FEE2D5` |
| Red | `#BA1E45` | `#EF3061` | `#F82B60` | `#FF9EB7` | `#FFDCE5` |
| Pink | `#B2158B` | `#E929BA` | `#FF08C2` | `#F99DE2` | `#FFDAF6` |
| Purple | `#6B1CB0` | `#7C39ED` | `#8B46FF` | `#CDB0FF` | `#EDE3FE` |

Additional raw colors:

- `#E9EEF9` — 17 uses; used by the Linked record token.
- `#0B1D05` — 4 uses.
- `#102046` — 4 uses.
- `#3B2501` — 4 uses.

Most-used accent tokens include:

- Blue bright `#2D7FF9` — 24 uses
- Red `#EF3061` — 15 uses
- Red light 1 `#FF9EB7` — 10 uses
- Green bright `#20C933` — 7 uses
- Red bright `#F82B60` — 6 uses
- Yellow light 2 `#FFEAB6` — 6 uses
- Blue `#1283DA`, cyan `#01A9DB`, gray `#666666`, green `#11AF22`, orange `#F7653B`, pink `#E929BA`, purple `#7C39ED`, and teal `#02AAA4` — 5 uses each

## Type scale

### SF Pro Text

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Text / small | SF Pro Text | Regular 400 | 11px | 14px | 0px |
| Text / small - paragraph | SF Pro Text | Regular 400 | 11px | 16px | 0px |
| Text / default | SF Pro Text | Regular 400 | 13px | 16px | 0px |
| Text / default - paragraph | SF Pro Text | Regular 400 | 13px | 20px | 0px |
| Label / default | SF Pro Text | Medium 500 | 13px | 16px | 0px |
| Heading / small - caps | SF Pro Text | Semibold 600 | 13px | 16px | 0.65px |
| Text / large | SF Pro Text | Regular 400 | 15px | 20px | 0px |
| Text / large - paragraph | SF Pro Text | Regular 400 | 15px | 22px | 0px |
| Heading / xsmall | SF Pro Text | Bold 700 | 15px | 22px | 0px |
| Heading / default - caps | SF Pro Text | Medium 500 | 15px | 20px | 0.75px |
| Heading / small | SF Pro Text | Semibold 600 | 17px | 24px | 0px |
| Text / xlarge | SF Pro Text | Regular 400 | 17px | 24px | 0px |
| Text / xlarge - paragraph | SF Pro Text | Regular 400 | 17px | 26px | 0px |
| Heading / xsmall - caps | SF Pro Text | Bold 700 | 11px | 16px | 0.55px |

### SF Pro Display

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Heading / default | SF Pro Display | Medium 500 | 21px | 26px | 0px |
| Heading / large | SF Pro Display | Medium 500 | 23px | 29px | 0px |
| Heading / xlarge | SF Pro Display | Medium 500 | 27px | 34px | 0px |
| Heading / xxlarge | SF Pro Display | Medium 500 | 35px | 44px | 0px |

Raw extraction also reports SF Pro Display Semibold at 35px and SF Pro Text Medium at 14px, but no corresponding named type token is defined.

## Spacing scale

The documented spacing scale is based on an 8px grid:

- `0px`
- `4px`
- `8px`
- `16px`
- `32px`
- `64px`
- `128px`
- `256px`
- `512px`

Common documented layout values:

- Page/frame padding: `64px`
- Section gap: `40px`
- Header gap: `24px`
- Text scale row gap: `32px`
- Description gap: `8px`
- Button padding: `7px 12px`
- Input padding: `0px 10px`
- Select buttons padding: `4px`
- Switch padding: `8px 10px`
- Tooltip padding: `8px 6px`

## Radius scale

Documented radii:

- `3px`: Color swatch, Select button, Record card, Switch, Select buttons, Input, Select, Button, Tooltip, Linked record token
- `6px`: Confirmation dialog
- `99px`: Progress bar
- `100px`: Switch button and Choice token
- `9999px`: Avatar and cover pill

## Elevation & effects

_No local effect styles found._

- Confirmation dialog uses a `2px` stroke of `#0000001A`.
- Color swatch and Record card use a `2px` stroke of Light gray 4, which resolves to `#FFFFFF`.
- No shadows, blur values, elevation tokens, motion tokens, or grid styles were found.

## Components

Only use the following component families.

### Avatar

- Size: `48x48px`
- Radius: `9999px`
- Fill: `#FFFFFF`
- Variants: Image `1/2/3/4/5/6/7`

### Button

- Default size: `71x32px`
- Radius: `3px`
- Horizontal layout
- Padding: `7px 12px`
- Gap: `10px`
- Alignment: min/center
- Text: SF Pro Text Semibold, `13px`
- Fill: Light gray 2 `#F2F2F2`
- Variants:
  - Size: default, large, small
  - Variant: danger, default, primary, secondary
  - Icon: false, true

### Choice token

- Size: `50x18px`
- Radius: `100px`
- Horizontal layout
- Padding: `0px 8px`
- Gap: `0px`
- Alignment: min/center
- Fill: default blue light 2 `#CFDFFF`
- Text: SF Pro Text Regular, `13px`
- Color variants:
  - Blue: `#2D7FF9`, `#2750AE`, `#9CC7FF`, `#CFDFFF`
  - Cyan: `#18BFFF`, `#0B76B7`, `#77D1F3`, `#D0F0FD`
  - Gray: grayBright, grayDark1 `#444444`, grayLight1 `#CCCCCC`, grayLight2 `#EEEEEE`
  - Green: `#20C933`, `#338A17`, `#93E088`, `#D1F7C4`
  - Orange: `#FF6F2C`, `#D74D26`, `#FFA981`, `#FEE2D5`
  - Pink: `#FF08C2`, `#B2158B`, `#F99DE2`, `#FFDAF6`
  - Purple: `#8B46FF`, `#6B1CB0`, `#CDB0FF`, `#EDE3FE`
  - Red: `#F82B60`, `#BA1E45`, `#FF9EB7`, `#FFDCE5`
  - Teal: `#20D9D2`, `#06A09B`, `#72DDC3`, `#C2F5E9`
  - Yellow: `#FCB400`, `#B87503`, `#FFD66E`, `#FFEAB6`

### Collaborator token

- Size: `70x22px`
- Horizontal layout
- Padding: `0px`
- Gap: `0px`
- Alignment: min/center
- Text: SF Pro Text Regular, `13px`
- Avatar variants: `1/2/3/4/5/6/7`

### Color palette

- Size: `344x24px`
- Horizontal layout
- Padding: `0px`
- Gap: `8px`
- Fixed width and height

### Color swatch

- Size: `24x24px`
- Radius: `3px`
- Fill: White `#FFFFFF`
- Stroke: Light gray 4 `#FFFFFF`, `2px`
- Color variants: blue, cyan, gray, green, orange, pink, purple, red, teal, white, yellow
- Enabled variants: false, true

### Confirmation dialog

- Size: `399x132px`
- Radius: `6px`
- Vertical layout
- Padding: `16px`
- Gap: `0px`
- Alignment: min/center
- Fill: White `#FFFFFF`
- Stroke: `#0000001A`, `2px`
- Text styles:
  - SF Pro Text Semibold, `13px`
  - SF Pro Text Regular, `13px`
  - SF Pro Text Semibold, `17px`

### Icon

- Default size: `16x16px`
- Size variants: default, micro
- Glyph variants include navigation, editing, formatting, records, collaboration, communication, media, and system icons, including:
  - `add`: plus, plusFilled
  - Navigation: chevronDown, chevronLeft, chevronRight, chevronUp, left, right, up, down
  - Editing: edit, duplicate, trash, undo, redo
  - Records: attachment, calendar, checkbox, check, link, lookup, rollup
  - Interface: search, settings, menu, overflow, filter, sort
  - Status: warning, info, help, check
  - Formatting: bold, italic, underline, strikethrough, paragraph, quote, code
  - Platforms: android, apple, windows, laptop, mobile, phone
  - Collaboration: team, personal, multicollaborator, share
  - Other: home, star, heart, lock, print, download, upload, video

### Input

- Size: `280x32px`
- Radius: `3px`
- Horizontal layout
- Padding: `0px 10px`
- Gap: `10px`
- Fixed width and height
- Fill: Light gray 2 `#F2F2F2`
- Text: SF Pro Text Regular, `13px`
- Variants:
  - Size: default, large, small
  - Placeholder: false, true

### Linked record token

- Size: `42x22px`
- Radius: `3px`
- Horizontal layout
- Padding: `0px 4px`
- Gap: `10px`
- Alignment: min/center
- Fill: `#E9EEF9`
- Text: SF Pro Text Regular, `13px`

### Loader

- Size: `24x23.61px`

### Progress bar

- Size: `360x8px`
- Radius: `99px`
- Fill: gray light 1 `#CCCCCC`

### Record card

- Size: `572x84px`
- Radius: `3px`
- Fill: White `#FFFFFF`
- Stroke: Light gray 4 `#FFFFFF`, `2px`
- Text styles:
  - SF Pro Text Regular, `13px`
  - SF Pro Text Medium, `11px`
  - SF Pro Text Medium, `14px`
- Variant: Attachment false, true

### Select

- Size: `278x32px`
- Radius: `3px`
- Horizontal layout
- Padding: `0px 10px`
- Gap: `10px`
- Alignment: min/center
- Fixed width and height
- Fill: Light gray 2 `#F2F2F2`
- Variants: Size default, large, small

### Select button

- Size: `170x24px`
- Radius: `3px`
- Fill: Light `#757575`
- Text: Text / default, SF Pro Text Regular, `13px`
- Variants:
  - Size: default, large, small
  - Selected: false, true

### Select buttons

- Size: `280x32px`
- Radius: `3px`
- Horizontal layout
- Padding: `4px`
- Gap: `4px`
- Fixed width and height
- Fill: Light gray 2 `#F2F2F2`
- Text: SF Pro Text Regular, `13px`
- Variants:
  - Size: default, large, small
  - Options: 2 options, 3 options

### Switch

- Size: `280x32px`
- Radius: `3px`
- Horizontal layout
- Padding: `8px 10px`
- Gap: `8px`
- Alignment: min/center
- Fixed width and height
- Fill: Light gray 2 `#F2F2F2`
- Text: SF Pro Text Regular, `13px`
- Variants:
  - Size: default, large, small
  - Variant: danger, default
  - Enabled: false, true

### Switch button

- Size: `20x12px`
- Radius: `100px`
- Fill: `#0000001A`
- Variants:
  - Variant: danger, default
  - Enabled: false, true

### Text button

- Default size: `47x16px`
- Horizontal layout
- Padding: `0px`
- Gap: `0px`
- Alignment: min/center
- Fixed width and height
- Text: SF Pro Text Semibold, `13px`
- Variants:
  - Size: default, large, small, xlarge
  - Variant: dark, default, light
  - Icon: false, true

### Tooltip

- Size: `87x32px`
- Radius: `3px`
- Horizontal layout
- Padding: `8px 6px`
- Gap: `8px`
- Alignment: min/center
- Fixed width and height
- Fill: Dark `#333333`
- Text: SF Pro Text Regular, `13px`

## Screen patterns

- Cover:
  - `1440x960px` frame.
  - Fill: blue dark 1 `#2750AE`.
  - Large white “Custom Apps” heading.
  - Yellow light 2 `#FFEAB6` pill with `9999px` radius.
  - Airtable logo and hero image are image fills.
- Spacing:
  - `1280x444px` white section.
  - Padding: `64px`.
  - Header gap: `40px`.
  - Uses the documented 8px grid scale from `0px` through `512px`.
  - Section header uses a `35px` SF Pro Display heading and a `2px` divider.
- Fonts:
  - `1280x398px` white section.
  - Demonstrates SF Pro Display and SF Pro Text.
  - Large font samples use `52px` in the source screen.
- Text:
  - `1280x804px` white section.
  - Demonstrates single-line sizes: small, default, large, xlarge.
  - Demonstrates paragraph sizes: small, default, large, xlarge.
  - Section headings use `35px` SF Pro Display.
- Headings:
  - `1280x755px` white section.
  - Section heading uses `35px` SF Pro Display.
  - Detailed heading content is truncated in the supplied extraction.

## Notes for implementers

- Use only the named component families and variants documented above.
- Prefer the most-used colors for core UI: Dark `#333333`, Light `#757575`, White `#FFFFFF`, Light gray 2 `#F2F2F2`, and Dark gray 2 `#424242`.
- Use SF Pro Text for controls and body copy; use SF Pro Display for large headings.
- Preserve the documented line heights and tracking values; all named typography tokens use `0px` tracking except caps styles.
- Use the 8px grid for spacing. The source explicitly documents `4px` as the first nonzero step and `8px` as the base grid unit.
- Use `3px` radius for standard controls and cards.
- Use `100px` or `9999px` only for pill-like elements.
- No spacing, radius, motion, elevation, or effect variable collections were found; use the concrete values documented in component and screen specs.
- The supplied raw extraction is truncated within the Headings screen and may omit additional screen-level details.
