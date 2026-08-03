---
name: wealthsimple-design-system-2025-ui-kit-community
source: Wealthsimple Design System 2025 | UI Kit (Community)
kind: design-system-context
---

# wealthsimple - Design System

## Overview

- Wealthsimple 2025 UI kit covering foundations, light and dark mode, icons, typography, radius, and reusable mobile-oriented components.
- Source contains 39 Figma pages, including component references for navigation, forms, cards, notifications, modals, sheets, and controls.
- No local variable collections, color styles, spacing variables, radius variables, motion variables, or grid styles were found.
- Primary extracted colors by usage:
  - `#000000`: 249 uses
  - `#FFFFFF`: 153 uses
  - `#6F8197`: 123 uses
  - `#252A31`: 35 uses
  - `#D9D9D9`: 32 uses
  - `#AE8948`: 8 uses
  - `#EBEBEB`: 5 uses

## Design language

- Support both light and dark mode.
- Use rounded surfaces and controls prominently, including radii of `12px`, `16px`, `24px`, and `32px`.
- Use Futura and OPTIFuturaDemiBold for the design-system typography styles.
- Use heavy Futura styles for monetary values.
- Use white surfaces with dark charcoal primary controls and subtle neutral fills.
- Use compact mobile layouts, bottom navigation, bottom sheets, modal footers, account cards, and notification containers.
- Use icon-led navigation and controls; the standard icon size is `20x20px`.

## Color palette

Ranked by raw usage:

| Color | Usage | Typical role |
|---|---:|---|
| `#000000` | 249 | Primary dark text and dark surfaces |
| `#FFFFFF` | 153 | Light surfaces, controls, and content |
| `#6F8197` | 123 | Secondary blue-gray content |
| `#252A31` | 35 | Dark headers and dark-mode surfaces |
| `#D9D9D9` | 32 | Neutral graphic or structural elements |
| `#AE8948` | 8 | Gold accent |
| `#EBEBEB` | 5 | Light neutral surface or divider |

Additional extracted colors:

- `#32302F`: primary charcoal control and text color.
- `#32302F0D`: subtle charcoal surface.
- `#32302F14`: subtle charcoal border or surface.
- `#62A215`: active switch fill.
- `#D5E1EA`: icon-circle fill.
- `#DDE9F1`: toast fill.
- `#E4E2E1`: light border and stroke.
- `#E9E3DE`: warm gradient start.
- `#F7F6F2`: warm gradient end.
- `#FCFCFC`: sheet and modal surface.
- `#0000000D`, `#0000001F`, `#00000033`: shadow colors.

## Type scale

Use the named typography styles where possible.

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `body/large` | Futura Book | 400 | 16px | 26px | -0.25px |
| `body/med` | Futura Book | 400 | 14px | 20px | 0px |
| `body/small` | Futura Book | 400 | 12px | 20px | 0px |
| `body/x-small` | Futura Book | 400 | 10px | 16px | 0.5px |
| `H1` | OPTIFuturaDemiBold | 700 | 22px | 29px | 1px |
| `H2` | OPTIFuturaDemiBold | 700 | 20px | 27px | 0.25px |
| `H3` | OPTIFuturaDemiBold | 700 | 16px | 21px | 0.5px |
| `H4` | OPTIFuturaDemiBold | 700 | 14px | 19px | 0.5px |
| `H5` | OPTIFuturaDemiBold | 700 | 12px | 16px | 0.5px |
| `H6` | OPTIFuturaDemiBold | 700 | 11px | 15px | 1.5px |
| `H7` | OPTIFuturaDemiBold | 700 | 10px | 13px | 0.5px |
| `button/large` | OPTIFuturaDemiBold | 700 | 18px | auto | 0px |
| `button/med` | OPTIFuturaDemiBold | 700 | 16px | 21px | 0px |
| `button/small` | OPTIFuturaDemiBold | 700 | 16px | 20px | 0px |
| `$/x-large` | Futura Heavy | 900 | 36px | 46px | 1px |
| `$/large` | Futura Heavy | 900 | 20px | 25px | 1px |
| `$/med` | Futura Heavy | 900 | 16px | 20px | 0.5px |
| `$/small` | Futura Heavy | 900 | 14px | 18px | 0.5px |
| `$/x-small` | Futura Heavy | 900 | 10px | 10px | 0.5px |
| `link` | Futura Book | 400 | 12px | 16px | 0.25px |

Most-used styles: `H3` 52 uses, `body/med` 49, `H4` 29, `H5` 18, `button/med` 18, and `button/large` 13.

Raw source also contains Circular Std, SF Pro Text, Open Sans, and additional Futura and OPTIFuturaDemiBold instances. Use them only when reproducing source content that explicitly uses those raw styles.

## Spacing scale

No spacing variables were found. Observed component spacing values:

- `0px`, `2px`, `4px`, `5px`, `6px`, `8px`, `10px`, `12px`, `14px`, `16px`, `18px`, `20px`, `24px`, `32px`, `40px`, `44px`, `62px`, `64px`, `91px`, `101px`, `111px`, `143px`.
- Common horizontal and vertical padding: `12px`, `16px`, `18px`, `20px`, and `24px`.
- Common gaps: `4px`, `8px`, `12px`, `16px`, and `24px`.
- Bottom navigation padding: `16px 64px 44px 64px`.
- Section header padding: `62px 18px 16px 18px`.
- Bottom sheet footer padding: `16px 16px 32px 16px`.
- Modal footer padding: `16px`.
- Modal header padding: `18px 16px 8px 16px`.

## Radius scale

No radius variables were found. Observed radii:

- `8px`: icon in square.
- `12px`: virtual card and search-related card treatment.
- `16px`: accordion, badge, app card, notification surfaces, pill, toast, and common cards.
- `24px`: icon in circle, segment control, and icon buttons.
- `32px`: primary button and modal footer corners.
- `48px`: avatar treatment.
- `100px`: bottom home indicator.
- Compound radii:
  - Bottom sheet header: `16px 16px 0 0`.
  - Modal header: `32px 32px 0 0`.
  - Modal footer: `0 0 32px 32px`.

## Elevation & effects

- `item-shadow-light`:
  - Drop shadow: `6px`, offset `0 2px`, color `#00000033`.
  - Drop shadow: `4px`, offset `0 1px`, color `#0000001F`.
- `card-shadow`:
  - Drop shadow: `16px`, offset `0 0`, color `#0000000D`.
  - Drop shadow: `7px`, offset `0 1px`, color `#0000000D`.
- `card-shadow` is used 22 times.
- `item-shadow-light` is used 4 times.

## Components

### icons

- Standard size: `20x20px`.
- Includes navigation, account, transaction, status, utility, and communication icons.
- Available variants include arrows, chevrons, bell states, calendar states, card, checkmark, close, copy, deposit, edit, eye states, filter, home, lock, money, plus, profile, search, settings, transfer, trash, wallet, warning, withdraw, and more.

### icon in square

- Size: `32x32px`.
- Radius: `8px`.
- Padding: `2px`.
- Gap: `8px`.
- Fill: `#32302F0D`.
- Center-align the icon horizontally and vertically.

### icon in circle

- Size: `42x42px`.
- Radius: `24px`.
- Padding: `8px`.
- Gap: `8px`.
- Fill: `#D5E1EA`.

### icon with notification

- Size: `20x20px`.

### accordion

- Size: `358x56px`.
- Radius: `16px`.
- Padding: `16px 20px`.
- Gap: `143px`.
- Fill: `#FFFFFF`.
- Text style: `H3`.
- Variants: `size` large/small; `open` false/true.

### badge

- Size: `78x28px`.
- Radius: `16px`.
- Padding: `6px 12px`.
- Gap: `4px`.
- Fill: `#32302F14`.
- Text style: `H5`.
- Variants: size large/small; type info/negative/neutral/positive.

### button

- Default size: `358x60px`.
- Radius: `32px`.
- Padding: `12px 24px`.
- Gap: `4px`.
- Fill: `#32302F`.
- Text style: `button/large`.
- Variants: primary, secondary, teritary, warning; icon large, icon small, large, medium, small; active, disabled.

### link

- Active link size: `94x19px`.
- Text style: `H4`.
- Gap: `4px`.

### bottom nav

- Size: `390x86px`.
- Padding: `16px 64px 44px 64px`.
- Gap: `58px`.
- Fill: `#FFFFFF`.
- Stroke: `#32302F14`, `1px`.
- Variants: activity, home, move, search.

### bottom sheet header

- Size: `390x56px`.
- Radius: `16px 16px 0 0`.
- Padding: `18px 16px`.
- Gap: `101px`.
- Fill: `#FCFCFC`.
- Stroke: `#E4E2E1`, `1px`.
- Text style: `H4`.
- Variants: large/small.

### bottom sheet footer

- Size: `390x108px`.
- Padding: `16px 16px 32px 16px`.
- Gap: `8px`.
- Fill: `#FCFCFC`.
- Stroke: `#E4E2E1`, `1px`.
- Text style: `button/large`.
- Variants: one button; one button plus link; two buttons.

### carousel dot

- Size: `6x6px`.
- Fill: `#FFFFFF`.

### checkbox

- Size: `20x20px`.
- Variants: checked false/true.

### wealthsimple app card

- Size: `354x175px`.
- Radius: `16px`.
- Padding: `16px`.
- Gap: `12px`.
- Fill: linear gradient from `#E9E3DE` to `#F7F6F2`.
- Stroke: `#E4E2E1`, `1px`.
- Effect: `card-shadow`.
- Text styles: `$/med`, `H3`, and raw OPTIFuturaDemiBold `12px`.

### virtual card

- Size: `352x217px`.
- Radius: `12px`.
- Padding: `16px`.
- Gap: `91px`.
- Fill: `#000000`.
- Stroke: `#E4E2E1`, `1px`.
- Text styles: Open Sans SemiBold `16px` and `10px`.

### divider

- Size: `880x0px`.
- Fill: `#FFFFFF`.

### horizontal bar

- Size: `131x32px`.
- Fill: `#FFFFFF`.
- Variants: left, middle, right.

### legend dot

- Size: `12x12px`.
- Fill: `#FFFFFF`.

### hide $

- Size: `164x46px`.
- Fill: `#FFFFFF`.
- Text style: `$/x-large`.
- Variants: size large, med, small, x-large, x-small; hide false/true.

### field

- Size: `357x60px`.
- Gap: `4px`.
- Text styles: `body/med`, `H3`, `H5`.
- Variants: active, default, disabled, empty, error.

### modal header

- Size: `358x58px`.
- Radius: `32px 32px 0 0`.
- Padding: `18px 16px 8px 16px`.
- Gap: `16px`.
- Fill: `#FCFCFC`.
- Text style: OPTIFuturaDemiBold `20px`.

### modal footer

- Size: `358x92px`.
- Radius: `0 0 32px 32px`.
- Padding: `16px`.
- Gap: `8px`.
- Fill: `#FCFCFC`.
- Text style: `button/large`.
- Variants: one button; one button plus link; two buttons.

### status dot

- Size: `8x8px`.
- Variants: black, blue, green, red.

### notification container

- Size: `390x88px`.
- Padding: `12px 24px 12px 16px`.
- Gap: `12px`.
- Width: fill.
- Text style: `body/med`.

### notification header

- Size: `160x15px`.
- Padding: `0 16px`.
- Gap: `8px`.
- Text style: `H6`.

### pill

- Size: `87x31px`.
- Radius: `16px`.
- Padding: `6px 16px`.
- Gap: `8px`.
- Fill: `#32302F`.
- Text style: OPTIFuturaDemiBold `14px`.
- Variants: selected false/true.

### radio

- Size: `22x22px`.
- Fill: `#FFFFFF`.
- Variants: false/true.

### search

- Size: `358x60px`.
- Radius: `16px`.
- Padding: `20px 14px 20px 18px`.
- Gap: `8px`.
- Fill: `#FFFFFF`.
- Stroke: `#E4E2E1`, `1px`.
- Text style: OPTIFuturaDemiBold `16px`.
- Variants: default, empty, focus.

### section header

- Size: `390x102px`.
- Padding: `62px 18px 16px 18px`.
- Gap: `111px`.
- Text style: `H3`.

### segment control

- Size: `169x41px`.
- Radius: `24px`.
- Padding: `10px 8px`.
- Gap: `8px`.
- Fill: `#FFFFFF`.
- Text style: OPTIFuturaDemiBold `16px`.
- Variants: selected false/true; size large/small.

### switch

- Size: `56x30px`.
- Radius: `16px`.
- Padding: `4px`.
- Gap: `8px`.
- Fill: `#62A215`.
- Width: fill.
- Variants: false/true.

### toast

- Size: `80x44px`.
- Radius: `16px`.
- Padding: `12px 16px`.
- Gap: `9px`.
- Fill: `#DDE9F1`.
- Text style: Futura Book `14px`.

### tab

- Size: `27x35px`.
- Gap: `11px`.
- Text style: `H3`.
- Variants: selected false/true.

### text box

- Size: `357x145px`.
- Gap: `6px`.
- Text styles: `body/med`, `H3`, `H5`.
- Variants: default, empty, focus.

## Screen patterns

- Thumbnail: `1920x1080px` presentation screen showing light and dark mockups, a 48px Futura Heavy heading, and warm neutral background treatments.
- Read-me panel: `720x420px` rounded introductory panel with nested containers, avatar imagery, explanatory text, and update metadata.
- Light/dark mode guidance: `1280x2973px` documentation screen with an `880px` content column, dark header, instructional steps, and a large mobile notification example.
- Mobile notification/home pattern: approximately `390x844px`, with a section header, monetary balance with hide-money control, account and promotional cards, notifications, and bottom navigation.
- Bottom navigation uses four primary destinations: activity, home, move, and search.
- Forms use stacked fields or text boxes with explicit default, empty, focus, active, disabled, and error states.
- Modal and bottom-sheet patterns separate header and footer regions and use full-width action buttons.

## Notes for implementers

- Prefer named styles over raw typography instances; `H3`, `body/med`, `H4`, and `button/med` are the most frequently used styles.
- Use `card-shadow` for recurring card surfaces and `item-shadow-light` for lighter elevated items.
- Preserve the specified fixed dimensions when reproducing the mobile components.
- Use the listed component variants rather than creating new state names.
- The source contains no local variables, so treat the documented values as explicit component-level tokens.
- Do not infer missing spacing, radius, color, motion, or grid tokens.
- The component list extracted from the source does not include standalone avatar, card, credit card, graph, list item, progress bar, skeleton, slider, or illustration families; use only the documented allowed component families above.
