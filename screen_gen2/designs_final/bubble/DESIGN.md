---
name: bubble-ui-kit-community
source: Bubble UI Kit (Community)
kind: design-system-context
---

# bubble - Design System

## Overview

Bubble UI Kit is a component library organized into Atoms, Molecules, and Organisms. The extracted system centers on a white surface, vivid periwinkle primary color, dark text, rounded form controls, and Inter typography. Components support form-entry, selection, dropdown, phone, password, button, and final-choice patterns.

## Design language

- Use a clean, high-contrast form UI with white surfaces and periwinkle primary accents.
- Use Inter for application UI text.
- Use rounded controls, especially `8px` input corners, `16px` button corners, and `32px` form corners.
- Use `#7176FF1A` for calm or inactive input backgrounds.
- Use `#7176FF` for primary actions, active controls, and captions in active states.
- Use `#FF6767` for error and callout states.
- Use `#000000E5` for primary text and `#00000026` for placeholder or secondary gray text.
- Use `#FFFFFF` for backgrounds and button/icon surfaces where specified.

## Color palette

Colors are consolidated by identical value and ranked by reported usage where available.

| Role | Value | Usage |
|---|---|---:|
| Primary | `#7176FF` | 73 |
| Inactive / Primary Calm / Input Done | `#7176FF1A` | 65 / 3 / 4 |
| Caption | `#7176FF` | 43 |
| Black / Text Black | `#000000E5` | 39 / 18 |
| Footnote | `#00000040` | 43 |
| White / Background | `#FFFFFF` | 17 / 1 |
| Text Gray / Placeholder | `#00000026` | 10 / 2 |
| Separator | `#0000001A` | 5 |
| Error / Callout | `#FF6767` | 12 / 3 |
| Raw black | `#000000` | 10 |
| Raw purple | `#7B61FF` | 5 |
| Raw purple | `#9747FF` | 5 |
| Raw lavender | `#AD8BF5` | 5 |
| Raw purple | `#7046C9` | 4 |
| Raw primary overlay | `#7176FF40` | 4 |
| Shadow accent | `#A7AAFF` | Component effect |
| Primary Light | No value found | 65 reported uses |

Additional aliases:
- Primary Active uses `#7176FF`.
- Text Black uses `#000000E5`.
- Primary Calm and Input Done use `#7176FF1A`.
- White and Background use `#FFFFFF`.
- Error and Callout use `#FF6767`.

## Type scale

Font family: Inter for UI typography unless otherwise specified.

| Style | Font | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---:|---:|---:|
| Title 36px | Inter | Bold (700) | 36px | auto | 0px | 1 |
| Title 24px | Inter | Bold (700) | 24px | 30px | 0px | 5 |
| Button | Inter | Bold (700) | 18px | auto | 0px | 16 |
| Body Medium | Inter | Medium (500) | 18px | auto | 0px | 26 |
| Body Regular | Inter | Regular (400) | 18px | auto | 0px | 2 |
| Text 18px | Inter | Medium (500) | 18px | auto | 0px | 33 |
| Caption / Caption 16px | Inter | Medium (500) | 16px | 20px | 0px | 43 / 23 |
| Footnote / Footnote 14px | Inter | Medium (500) | 14px | 20px | 0px | 43 / 12 |
| Callout | Inter | Medium (500) | 14px | 20px | 0px | 3 |
| Raw large heading | Inter | Bold | 48px | Not specified | Not specified | 10 |
| Raw medium text | Inter | Medium | 16px | Not specified | Not specified | 5 |
| Cover heading | Roboto Flex | Bold | 128px | Not specified | Not specified | 3 |

Use `Title 24px` for component headings, `Button` for button labels, `Body Medium` for checkbox and choice labels, `Text 18px` for entered or placeholder input text, `Caption` for field labels, and `Footnote` for supporting text.

## Spacing scale

No spacing variables were found. Concrete spacing values used by components:

- `4px`: input content-to-footnote gap.
- `8px`: input vertical gap, input icon/content gap, checkbox icon/label gap, button content gap.
- `10px`: input content/icon gap.
- `12px`: input horizontal padding where specified.
- `16px`: button vertical padding, radio option gap.
- `20px`: space atom padding.
- `24px`: phone/password field gap.
- `32px`: form padding and final-choice gap.
- `48px`: form section gap.
- `82px`: button horizontal padding.

## Radius scale

Concrete radius values found:

- `1px`: inactive checkbox inner rectangle.
- `2px`: active checkbox inner rectangle.
- `5px`: component-set containers; inactive checkbox icon; active checkbox icon.
- `8px`: all-border and active input fields.
- `11px`: radio icon radius.
- `16px`: button radius.
- `32px`: form radius.
- `64px`: About screen radius.

## Elevation & effects

- `btn`: drop shadow with `0px` offset, `0px` position, and `#A7AAFF`.
- `form`: drop shadow with `32px` offset, `0px` position, and `#00000040`.
- No local effect styles were found.
- No motion tokens were found.
- No local grid styles were found.

## Components

Only the following component families are defined.

### `btn`

- Size: `238x54px`.
- Radius: `16px`.
- Layout: horizontal; centered on both axes.
- Padding: `16px 82px 16px 82px`.
- Gap: `8px`.
- Fill: Primary Active, `#7176FF`.
- Text style: `Button`.
- Variants:
  - State: `Default`, `Disabled`, `Hover`, `Pressed`.
  - Type: `Filled`, `Outlined`, `no border`.

### `checkbox`

- Size: `104x22px`.
- Layout: horizontal.
- Gap: `8px`.
- Text style: `Body Medium`.
- Variants: `active: no/yes`.
- Uses a `22x22px` `icon_choose` checkbox icon.

### `dropdown`

- Size: `286x74px`.
- Fill: `#FFFFFF`.
- Text styles: `Footnote 14px`, `Text 18px`, `Caption 16px`.
- Variants:
  - Type: `calendar`, `list`.
  - Active: `no`, `yes`.

### `final_choice`

- Size: `596x301px`.
- Layout: vertical.
- Gap: `32px`.
- Text styles: `Button`, `Body Medium`, `Title 24px`.
- Variants: `active: no/yes`.

### `form`

- Size: `660x1530px`.
- Radius: `32px`.
- Layout: vertical.
- Padding: `32px` on all sides.
- Gap: `48px`.
- Fill: Background, `#FFFFFF`.
- Effect: drop shadow with `32px` offset and `#00000040`.
- Supports: `Button`, `Body Medium`, `Title 24px`, `Inter Medium 16px`, `Footnote 14px`, `Text 18px`, `Caption`, `Caption 16px`, `Callout`, `Body Regular`, `Footnote`, and `Title 36px`.

### `icon_add.`

- Size: `22x22px`.
- Fill: `#FFFFFF`.
- Variants:
  - Type: `calendar`, `drop_down`, `show_password`.
  - Active: `no`, `yes`.
- Inactive icon graphics use `#7176FF1A`.
- Active icon graphics use `#7176FF`.

### `icon_choose`

- Size: `22x22px`.
- Radio radius: `11px`.
- Checkbox radius: `5px`.
- Stroke: Primary Light, `2px`; Primary Light has no source color value.
- Variants:
  - Type: `checkbox`, `radio_btn`.
  - Active: `no`, `yes`.
- Active radio uses a `12x12px` primary inner circle.
- Inactive radio uses a `6x6px` primary inner circle at `0%` opacity.
- Active checkbox uses a `12x12px` primary inner rectangle with `2px` radius.
- Inactive checkbox uses a `6x6px` primary inner rectangle with `1px` radius at `0%` opacity.

### `input`

- Size: `286x98px`.
- Layout: vertical.
- Gap: `8px`.
- Variants:
  - Type: `All-border`, `Bottom-border`.
  - Status: `Active`, `Empty`, `Error`, `Fill`.
- Label style: `Caption 16px`.
- Input text style: `Text 18px`.
- Supporting text style: `Footnote 14px`.
- Inner input height: `46px`.
- Inner content gap: `10px`.
- Inner input fill: `#7176FF1A`.
- Horizontal padding:
  - `All-border`: `12px` on both sides.
  - `Bottom-border`: `12px` left and right values as specified by the source; the shown bottom-border instances use `12px` left and `0px` right.
- Radius: `8px` for all-border inputs.
- State strokes:
  - Empty: Inactive, `#7176FF1A`.
  - Active: Primary Active, `#7176FF`.
  - Fill: Primary Calm, `#7176FF1A`.
  - Error: Error, `#FF6767`.
- Empty text uses Text Gray, `#00000026`.
- Filled and active text uses Text Black, `#000000E5`.

### `password_field`

- Size: `596x118px`.
- Layout: horizontal.
- Gap: `24px`.
- Text styles: `Footnote 14px`, `Text 18px`, `Caption`.
- Variants: `active: no/yes`.
- Uses `icon_add.` with `type=show_password`.

### `phone_field`

- Size: `596x74px`.
- Layout: horizontal.
- Gap: `24px`.
- Padding: `0px` on all sides.
- Sizing: fixed width and fixed height.
- Text styles: `Button`, `Footnote 14px`, `Text 18px`, `Caption`.
- Variants: `step: 1/2/3`.

### `radiobtn`

- Size: `349x58px`.
- Layout: vertical.
- Gap: `16px`.
- Text styles: `Body Medium` and Inter Medium `16px`.
- Variants: `choice: first/second/third`.
- Each choice presents three horizontal options with `16px` gap between options.
- Each option pairs a `22x22px` `icon_choose` radio icon with a label.
- The selected option uses the active radio state; the other two use inactive radio states.

## Screen patterns

- **Cover:** A branded cover screen with large display typography. The source uses a `1024x614px` frame and raw display styles including Roboto Flex Bold at `128px`.
- **About:** A large informational screen with a `1600x960px` frame and `64px` radius. It includes a logo area and large Inter typography.
- **Atoms:** Foundational `icon_add.`, `icon_choose`, separator, and spacing examples. Icons are `22x22px`.
- **Molecules:** Reusable input, dropdown, password, phone, radio-button, button, and checkbox patterns.
- **Organisms:** The component extraction identifies a `form` and `final_choice` family for assembled form flows.
- **Form flow:** Combine field labels, `input`, `dropdown`, `password_field`, `phone_field`, selection controls, and `btn` within a `form` container using `32px` padding and `48px` vertical gaps.

## Notes for implementers

- Use only the named component families and their documented variants.
- Preserve the distinction between `All-border` and `Bottom-border` input types.
- Use `#7176FF1A` for inactive, calm, and input backgrounds; do not replace it with opaque primary color.
- Use `#FF6767` consistently for both error borders/text and callout styling.
- Treat `Primary`, `Primary Active`, and `Caption` as the same color: `#7176FF`.
- Treat `Black` and `Text Black` as the same color: `#000000E5`.
- Treat `White` and `Background` as the same color: `#FFFFFF`.
- No spacing, radius, motion, variable, or local effect collections were defined; the scales above are inferred only from explicit component measurements.
- `Primary Light` is referenced by components but has no color value in the source.
