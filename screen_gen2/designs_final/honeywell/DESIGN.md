---
name: honeywell-thermostat-ui-community
source: Honeywell Thermostat UI (Community), Page 1
kind: design-system-context
---

# honeywell - Design System

## Overview

Honeywell thermostat interface for desktop-sized 1133×744px screens. The system supports home temperature control, cold/heat mode selection, fan control, room summaries, scheduling, month selection, keypad input, and settings.

No local variable collections, spacing variables, radius variables, motion tokens, grid styles, or local effect styles were found.

## Design language

- Light thermostat-control interface with white cards on a `#F5F6F8` background.
- Primary text and controls use `#000000`.
- Secondary and inactive UI uses gray values, especially `#B4B0B0` and `#6C6C6C`.
- Temperature and numeric controls use large Inter typography.
- Cards and controls commonly use rounded corners and drop shadows.
- Header bars use `#FFFFFF` and include the Honeywell logo, navigation, and settings controls.
- Status indicators support active, inactive, negative, and positive states.

## Color palette

Ranked by raw usage where counts were available:

| Color | Usage | Named token / role |
|---|---:|---|
| `#000000` | 376 | Background token; primary text, dark controls, icons |
| `#FFFFFF` | 192 | Text Style token; card and control fills |
| `#B4B0B0` | 153 | Secondary text, temperature values, settings icon |
| `#F8CCD554` | 70 | Unstyled translucent color |
| `#EBEBEB` | 30 | Divider lines |
| `#9747FF` | 26 | Unstyled accent color |
| `#F5F6F8` | 21 | Screen background |
| `#CC1C3B` | 13 | Unstyled red |
| `#E0E0E0` | 10 | Secondary control fill |
| `#FFFFFF00` | 10 | Transparent white |
| `#030209` | 9 | Unstyled near-black |
| `#068E34` | 9 | Unstyled green |
| `#E8E8E8` | 9 | Unstyled light gray |
| `#D9D9D9` | 8 | Placeholder or masked content fill |
| `#C4C4C4` | 6 | Unstyled gray |
| `#9A9A9A` | 5 | Unstyled gray |

Named tokens:

- `dark blue`: `#343348` — 9 uses.
- `Background`: `#000000` — 2 uses.
- `Text Style`: `#FFFFFF` — 161 uses.
- `Indicator / Negative`: `#E31D40` — 3 uses.
- `Indicator/Active`: `#6C6C6C` — 31 uses.
- `Indicator/Inactive`: `#FFFFFF33` — 27 uses.

## Type scale

Font family: Inter.

| Size | Weight / style | Usage |
|---:|---|---:|
| 128px | Regular | Large temperature display; `Component 16` |
| 96px | ExtraBold | Hour and minute selectors |
| 48px | Bold | Month selector |
| 36px | SemiBold | Numeric keypad and calendar day values |
| 32px | Light; SemiBold | Large labels and room controls |
| 28px | SemiBold | Button PIN numbers |
| 24px | Bold; Light; SemiBold | Buttons, labels, room names |
| 20px | Bold; Light | Header token and calendar weekday labels |
| 13px | Light | Fan and mode options |
| 12px | Bold | Subheader token |

Defined typography tokens:

- `Header - XSmall`: Inter Bold, 20px, 123.94% line height, 0px tracking.
- `Subheader - XSmall`: Inter Bold, 12px, 123.94% line height, 0px tracking.

Raw usage ranking:

- Inter SemiBold, 28px — 134 uses.
- Inter Light, 32px — 52 uses.
- Inter Light, 13px — 51 uses.
- Inter SemiBold, 36px — 35 uses.
- Inter SemiBold, 24px — 32 uses.
- Inter ExtraBold, 96px — 30 uses.
- Inter Bold, 24px — 14 uses.
- Inter Bold, 48px — 10 uses.
- Inter Light, 24px — 8 uses.
- Inter Regular, 128px — 8 uses.
- Inter SemiBold, 32px — 8 uses.
- Inter Light, 20px — 7 uses.

## Spacing scale

No spacing variables were found. Observed component spacing values:

- `0px` padding in `Steps`.
- `10px` gap in `Num Pad`, `day`, and some horizontal layouts.
- `20px` padding in the Scheduling white panel.
- `22px` left and right padding in `Num Pad`.
- `24px` gap in `Steps`.

## Radius scale

No radius variables were found. Observed radii:

- `8px`: `Indicator`, `Button PIN`, and `Num Pad`.
- `22px`: primary control buttons, room cards, and rounded control sections.
- `30px`: Scheduling white panel.
- `0px`: unrounded groups and some rectangular sections.

## Elevation & effects

- Drop shadow: `4px` offset `0 4`.
- Drop shadow: `20px` offset `0 4`.
- Layer blur: `118px`.
- Drop shadows are used on circular temperature controls, room cards, plus/minus controls, and Scheduling controls.
- The Scheduling panel uses a `30px` radius with a `20px` drop shadow.
- No local effect styles were found.

## Components

Only the following component families are present:

### Slider

- Size: `74×36px`.
- Variants: `Property 1: Group 171/Group 172`.

### Component 25

- Size: `39×41px`.
- Fill: `#FFFFFF`.
- Variants: `Property 1: Default/Variant2`.

### Indicator

- Size: `14×14px`.
- Radius: `8px`.
- Default fill: `#FFFFFF33`.
- Variants: Active, Inactive, Negative, Positive.
- Active token: `#6C6C6C`.
- Negative token: `#E31D40`.

### Button PIN

- Size: `80×80px`.
- Radius: `8px`.
- Fill: `#FFFFFF`.
- Text: Inter SemiBold, 28px.
- Variants:
  - Property 1: Icon/Number.
  - Property 2: Neutral/Pressed.

### Steps

- Size: `128×14px`.
- Horizontal layout.
- Padding: `0 0 0 0px`.
- Gap: `24px`.
- Alignment: center/center.
- Fixed width and height.
- Variants: State `0/1/2/3/4/Negative/Positive`.

### Num Pad

- Size: `86×86px`.
- Radius: `8px`.
- Vertical layout.
- Padding: `0 22 0 22px`.
- Gap: `10px`.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text variant: Inter SemiBold, 36px.
- Variants:
  - Property 1: Variant2/Variant3.
  - Property 1: Default/Variant2.

### component

- Spinner size: `117×117px`.
- Variants: Default, Variant2, Variant3, Variant4.

### minutes

- Size: `226×1539px`.
- Fill: `#FFFFFF`.
- Text: Inter ExtraBold, 96px.
- Variants: Default and Variant2 through Variant12.

### hours

- Size: `116×1508px`.
- Fill: `#FFFFFF`.
- Text: Inter ExtraBold, 96px.
- Variants: Default and Variant2 through Variant12.

### button

Includes the AM/PM, confirm, Set Time, rooms, plus, and minus controls.

- AM/PM button: `170×173px`; text Inter Bold, 24px; variants Group 168/Group 169/Group 170.
- Confirm button: `271×79px`; text Inter Bold, 24px; variants Group 162/Group 163.
- Set Time button: `271×79px`; text Inter Bold, 24px; variants Group 162/Group 163.
- Rooms button: `251×507px`; fill `#FFFFFF`; text Inter SemiBold, 32px and 24px; five variants.
- Minus button: `77×77px`; fill `#FFFFFF`; Default/Variant2.
- Plus button: `77×77px`; fill `#FFFFFF`; Default/Variant2.

### Month

- Size: `335×376px`.
- Fill: `#FFFFFF`.
- Text: Inter Bold, 48px.
- Variants: Default through Variant5.

### Expand_left_light

- Size: `47×47px`.
- Default variant.
- Arrow stroke uses the `fill_icon` role.

### day

- Size: `64×64px` in the standalone component.
- Calendar instance size: `73.2×49.43px`.
- Horizontal layout.
- Padding: `10px` on all sides.
- Gap: `10px`.
- Alignment: center/center.
- Text: Inter SemiBold, 36px for dates; Inter Light, 20px for weekday labels.
- Variant: Active/default.

### hours and minutes controls

- Large scrolling selectors use Inter ExtraBold, 96px.
- `hours` and `minutes` use white fills and multiple value variants.

### icon

- Size: `56×24px`.
- Variants: cold/heat.

### Component 18

- Size: `85×170px`.
- Fill: `#FFFFFF`.
- Text: Inter Light, 13px.
- Variants: Default through Variant4.
- Used for fan options: ON, OFF, AUTO.
- Divider lines use `#EBEBEB`.

### Component 17

- Size: `85×170px`.
- Fill: `#FFFFFF`.
- Text: Inter Light, 13px.
- Variants: Default through Variant4.
- Used for mode options: COOL, AUTO, HEAT.
- Divider lines use `#EBEBEB`.

### Component 16

- Size: `392×177px`.
- Fill: `#FFFFFF`.
- Text: Inter Regular, 128px.
- Variants: Default through Variant5.
- Used as the primary large temperature control with separate `77×77px` minus and plus controls.

## Screen patterns

### HOME/COLD

- Canvas: `1133×744px`.
- Screen fill: `#F5F6F8`.
- White `87px` header bar.
- Header includes the Honeywell logo, calendar icon, and settings icon.
- Main area centers a large temperature control with large numeric temperature text.
- Includes separate fan control with ON/OFF/AUTO options.
- Includes mode control with COOL/AUTO/HEAT options.
- Includes room summary cards for Room 1 through Room 4 and an All Rooms control.
- Includes outside temperature text and cold/heat iconography.
- White circular controls and room cards use drop shadows.
- Primary room cards use `251×79px` sections with `22px` radius.
- The All Rooms control uses a black fill and white Inter SemiBold, 32px text.

### Scheduling

- Canvas: `1133×744px`.
- Screen fill: `#F5F6F8`.
- White `87px` header bar with Honeywell logo and settings icon.
- Includes a `724×405.32px` white scheduling panel.
- Panel padding: `20px` on all sides.
- Panel radius: `30px`.
- Panel uses a `20px` drop shadow with offset `0 4`.
- Calendar content uses repeated day cells, weekday labels, date values, and month navigation.
- Includes a `271×79px` Set Time button.
- Includes a Month selector sized `335×376px`.
- Uses `Expand_left_light` navigation controls sized `47×47px`.

### Settings

- Canvas: `1133×744px`.
- Screen fill: `#F5F6F8`.
- White `87px` header bar.
- Header includes the Honeywell logo and settings icon.
- Includes `Expand_left_light` navigation and `Component 25`.
- Settings icon is black on the Settings screen; it is gray in the Home and Scheduling headers.

## Notes for implementers

- Use Inter for all text.
- Preserve the strong contrast between `#F5F6F8` screens, `#FFFFFF` cards, and `#000000` primary controls.
- Use `#B4B0B0` for secondary temperature values and inactive secondary controls.
- Use `#EBEBEB` for thin dividers.
- Use the defined Indicator tokens for status states rather than substituting colors.
- Keep temperature and time values visually dominant with the 96px, 128px, and 36px styles where specified.
- Treat `button`, `component`, `day`, `hours`, `minutes`, and `icon` as the source component families; preserve their listed sizes and variants.
- Do not introduce spacing, radius, motion, or effect tokens that are not listed above.
- The source contains additional raw node details and truncated Settings content; implement only the summarized screen patterns and concrete component specifications available here.
