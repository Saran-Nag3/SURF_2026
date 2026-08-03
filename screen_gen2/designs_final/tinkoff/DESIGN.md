---
name: tinkoff-form-design-system-community
source: Tinkoff Form Design System (Community)
kind: design-system-context
---

# tinkoff - Design System

## Overview

Tinkoff form design system extracted from the Figma file “Tinkoff Form Design System (Community)”. The system centers on universal form fields for PC and mobile, including inputs, dropdowns, checkbox/radio solutions, validation states, field titles, green points, buttons, and form footers.

Source pages: Cover; Typography & Components; Example.

## Design language

- Font family: Roboto.
- Form controls use compact, rectangular geometry with a 7px field/button radius.
- Primary actions use yellow backgrounds and dark text.
- Secondary and supporting text use Dim Gray `#6C6F71`.
- Enabled and completed fields use pale blue backgrounds.
- Error states use red text and pale red backgrounds.
- Required or status indicators use green points.
- Component widths are primarily 536px for PC and 290px for mobile.
- Universal Field documentation uses a large white canvas with a 20px radius and a 5px component-set radius.

## Color palette

Ranked by recorded usage where counts are available.

| Color | Usage / semantic roles |
|---|---|
| `#FFFFFF` | 12 raw uses; radio and checkbox backgrounds/borders; typing, focus, and error-focus field backgrounds; button/icon fills |
| `#6C6F71` | 789 field icon uses; 409 Dim Gray uses; secondary text, field names, placeholders, subtitles, radio subtitles, hover icons |
| `#141414` | 37 Eerie Black uses; primary text, titles, input text, button text, focused field border |
| `#27AE60` | Green point fill and field success icon |
| `#ECF1F7` | Enabled/completed field backgrounds; default checkbox/radio backgrounds |
| `#AFAFAF` | Disabled field text; checkbox/radio icons |
| `#FFDD2D` | Primary button default background; active checkbox/radio backgrounds |
| `#EB5757` | Error text and error-focused border |
| `#E3EAF2` | Field hover background; checkbox/radio hover backgrounds |
| `#FFEBEA` | Error field background |
| `#FCC722` | Primary button hover background; checkbox/radio hover backgrounds |
| `#FAB619` | Primary button clicked background |
| `#336FEE` | Flat button default text |
| `#1F50BA` | Flat button hover and clicked text |
| `#FFFFFF00` | Flat button transparent background |
| `#332C09` | Active checkbox/radio icons |
| `#000000` | 5 raw unstyled uses |
| `#9747FF` | 10 raw unstyled uses; Input component-set stroke |
| `#D9D9D9` | 5 raw unstyled uses; base field fill |

No local color variable collection was found. `form footer/line` and `other/cursor` have no color value in the source.

## Type scale

All recorded typography uses Roboto with 0px tracking.

| Size | Weight | Line height | Usage |
|---:|---|---:|---|
| 10px | Regular 400 | 20px | Field labels; 203 uses |
| 11px | Regular 400 | 16px | Supporting text and green points; 1,018 uses |
| 13px | Regular 400 | 20px | Secondary/supporting component text; 480 uses |
| 15px | Regular 400 | 24px | Main form text; 590 uses |
| 15px | SemiBold 600 | Not specified | Raw typography style; 226 uses |
| 24px | SemiBold 600 | 28px | Large field titles; 251 uses |
| 42px | SemiBold 600 | Not specified | Raw typography style; 9 uses |

## Spacing scale

_No spacing variables found in source._

Recorded component spacing values include:

- 0px gaps and padding on several base/layout components.
- 3px internal text gap.
- 5px main-field gap.
- 10px icon/title or button gap.
- 12px Form Footer solution gap.
- 15px horizontal field padding.
- 16px field/button padding.
- 20px Field Title gap and bottom padding.
- 25px Form Footer top padding.
- 170px Form Footer gap.

## Radius scale

- 7px: base fields and primary buttons.
- 100px: Green point.
- 5px: Input component set.
- 20px: Universal Field documentation frame.
- `7/7/0/0px`: upper solution item.
- `0/0/7/7px`: lower solution item.
- No radius variables found.

## Elevation & effects

- No local effect styles found.
- The Universal Field frame has a multi-layer drop shadow in the source.
- No reusable elevation token is defined.

## Components

Only use the following component families and recorded dimensions/variants.

### Field structure

- **Input**
  - Size: 536x56px or 290x56px.
  - Types: Checkbox, Dropdown, Input, Radio.
  - States: Complete, Disable, Enabled, Error, Error-focus, Focus, Hover, Typing.
  - Options: Platform Mobile/PC; Number of fields 1/2/3/4; Title on/off; Green point on/off; Subtitle on/off; Subtitle Under Field on/off.
  - Recorded fills include enabled/completed `#ECF1F7`, typing/focus `#FFFFFF`, error `#FFEBEA`, disabled `#F6F6F6`, and hover `#E3EAF2`.
- **base field**
  - Size: 536x56px.
  - Radius: 7px.
  - Horizontal layout; padding `16 15 16 15px` or `7 15 8 15px`.
  - Gap: 0px.
  - Variants include Default, Focus, Focus and field with cursor, and Focus and field with cursor and input text.
- **Field Title**
  - Size: 536x92px or 290x39px.
  - Vertical layout.
  - PC padding: `0 0 20 0px`, gap 20px.
  - Mobile padding: `0 0 15 0px`, gap 12px.
  - Platform variants: Mobile/PC.
- **/ main field**
  - Size: 536x56px or 290x56px.
  - Vertical layout; gap 5px.
- **Green point**
  - Size: 47x24px.
  - Radius: 100px.
  - Padding: `4 7 4 7px`; gap 10px.
  - Fill `#27AE60`; text `#FFFFFF`.
- **Green point_for fields**
  - Size: 59x24px.
- **icons**
  - Size: 107x33px.
  - Padding: `9 0 0 0px`.

### Choice controls and solutions

- **solution main**
  - Size: 538x56px or 290x111px.
  - Horizontal or vertical layout depending on instance.
  - Gap: 20px or `-1px`.
  - Types: Checkbox/Radio.
  - Platform variants: Mobile/PC.
  - “How many” variants: 1/2/3/4.
- **solution_item**
  - Size: 259x24px or 290x56px.
  - Types: Checkbox/Radio.
  - States: off/on/on_hover.
  - Subtitle: off/on.
  - Right icon: off/on.
  - Fill `#FFFFFF`.
- **base**
  - Size: 256x24px.
  - Horizontal layout; centered alignment.
  - Types: Checkbox/Radio.
- **checkbox**
  - Size: 24x24px.
  - States: hover_on/off/on.
  - Default fill `#ECF1F7`; active fill `#FFDD2D`; icons `#AFAFAF` or active `#332C09`.
- **radio**
  - Size: 24x24px.
  - States: hover_on/off/on.
  - Default background and border `#FFFFFF`; default icon `#AFAFAF`; active fill `#FFDD2D`; active icon `#332C09`.
- **null_solution_item**
  - Size: 259x56px.
  - Fill `#FFFFFF`.

### Buttons

- **button**
  - Size: 79x56px.
  - Types: Flat/Primary.
  - Sizes: L/M.
  - States: Hover/Normal/Clicked.
- ** button**
  - Size: 79x56px.
  - Radius: 7px.
  - Padding: `16 25 16 25px`; gap 10px.
  - Primary default fill `#FFDD2D`; hover `#FCC722`; clicked `#FAB619`; text `#141414`.
- Flat button:
  - Background `#FFFFFF00`.
  - Default text `#336FEE`.
  - Hover/clicked text `#1F50BA`.

### Form footers

- **Form Footer**
  - Size: 536x81px.
  - Horizontal layout; padding `25 0 0 0px`.
  - Gap: 170px.
  - Alignment: space-between/min.
  - Platform variants: Mobile/PC.
  - Left variants: Checkbox/Link.
  - Stroke: `form footer/line`, 1px.
- **Form Footer solution**
  - Size: 268x40px.
  - Horizontal layout; gap 12px.
- **base**
  - Also recorded as a general checkbox/radio item at 256x24px.

### Icons

Each icon is 24x24px with fill `#FFFFFF`:

- **help_FILL1_wght300_GRAD0_opsz24 1**
- **done_FILL0_wght300_GRAD0_opsz24 1**
- **expand_circle_down_FILL0_wght300_GRAD0_opsz24 1**
- **expand_less_FILL0_wght300_GRAD0_opsz24 1**
- **expand_more_FILL0_wght300_GRAD0_opsz24**

## Screen patterns

- **Cover**
  - Demonstrates field-title combinations, completed fields, typing/focus fields, error fields with under-field messages, mobile and PC widths, dropdown/choice solutions, and fields with subtitles.
  - Primary field widths: 536px PC and 290px mobile.
- **Typography & Components / Universal Field**
  - Large component documentation board containing the Input component set.
  - Input examples cover PC/mobile platforms, Input/Dropdown/Checkbox/Radio types, field counts, titles, subtitles, green points, and interaction/validation states.
- **Example**
  - Listed as a source page; no additional screen structure was provided in the extraction.

## Notes for implementers

- Prefer 536px field components for PC and 290px field components for mobile where the component variant specifies platform.
- Keep field height at 56px for the base control.
- Use 7px radius for fields and primary buttons.
- Use 15px text for primary field content, 10px for compact field labels, 11px for supporting text, and 13px for supporting/error content.
- Apply `#ECF1F7` to enabled and completed fields; use `#FFFFFF` with a `#141414` border for focus where specified.
- Apply `#FFEBEA` with `#EB5757` error text for error fields; use `#EB5757` for the error-focus border.
- Keep green points at 47x24px with a 100px radius and `#27AE60` fill.
- Use 24x24px checkbox, radio, and icon controls.
- Do not infer spacing, radius, motion, or elevation tokens beyond the recorded component values; no local spacing variables, radius variables, motion variables, or effect styles were found.
