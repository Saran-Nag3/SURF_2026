---
name: wise-design-system-community
source: Wise Design System (Community)
kind: design-system-context
---

# wise - Design System

## Overview

- Source: Figma file **Wise Design System (Community)**.
- Source pages: **Components**, **Thumbnail**, **🏗️ To Do**.
- Extracted: 2026-07-25.
- No local variable collections, spacing variables, radius variables, motion tokens, or grid styles were found.
- The system uses Inter typography, a forest-green and bright-green brand palette, pill-shaped controls, rounded cards, and elevated dropdowns/tooltips.

## Design language

- Brand foundation:
  - Forest green: `#163300`
  - Bright green: `#9FE870`
  - Primary content: `#0E0F0C`
  - White contrast and elevated surfaces: `#FFFFFF`
- Use rounded pill controls for primary, destructive, link, chip, and icon actions.
- Use `10px` radii for compact options, inputs, dropdown rows, and button cards.
- Use `16px` radii for graph containers and larger cards.
- Use `24px` radius for section cards.
- Typography is Inter with mostly `400` regular and `600` semibold weights.
- Component states are commonly expressed as `Default`, `Hover`, `Active`, `Selected`, `Disabled`, or variant-specific states.

## Color palette

### Core semantic colors

| Token | Color |
|---|---|
| Primary bright green | `#9FE870` |
| Primary forest green | `#163300` |
| Primary content | `#0E0F0C` |
| Secondary content | `#454745` |
| Tertiary content | `#6A6C6A` |
| Neutral background | `#16330014` |
| Neutral active background | `#1633002E` |
| Neutral hover background | `#16330021` |
| Screen/elevated background | `#FFFFFF` |
| Dimmer | `#FFFFFFB2` |
| Overlay border | `#0E0F0C1F` |
| Secondary interactive | `#868685` |
| Secondary interactive hover | `#6C6C6B` |
| Primary interactive | `#163300` |
| Primary interactive hover | `#0D1F00` |
| Primary interactive active | `#0E0F0C` |
| Accent interactive | `#9FE870` |
| Accent interactive hover | `#80E142` |
| Accent interactive active | `#65CF21` |
| Negative interactive | `#E74848` |
| Negative interactive hover | `#D03238` |
| Negative interactive active | `#BF1E2C` |
| Negative sentiment | `#A8200D` |
| Positive sentiment | `#2F5711` |
| Warning sentiment | `#EDC843` |
| Base dark | `#121511` |
| Base contrast/light | `#FFFFFF` |

### Category colors

| Category | Color |
|---|---|
| Trips | `#C8AD98` |
| Transport | `#FFAA99` |
| Shopping | `#7B8ABE` |
| Savings | `#C293C9` |
| Salary | `#79A6FC` |
| Personal care | `#8DA1C7` |
| Investments | `#F2C374` |
| Housing | `#F09EBC` |
| Groceries | `#FC8D94` |
| General | `#CDD0CD` |
| Family | `#F2A9CE` |
| Expenses | `#9ACED9` |
| Entertainment | `#9DDDD5` |
| Eating out | `#92B0EA` |
| Cash | `#AFCCA1` |
| Bills | `#EDB37E` |

### Flag colors

- Red: `#F0263C`
- White: `#FFFFFF`
- Dark blue: `#231D9A`
- Yellow: `#FFD400`
- Green: `#005B13`
- Orange: `#FF7700`
- Black: `#000000`
- Amber: `#CC9500`
- Light blue: `#78C9FF`
- Maroon: `#960A3C`
- Dark green: `#163300`

### Secondary illustration colors

- Dark charcoal: `#21231D`
- Bright blue: `#A0E1E1`
- Dark gold: `#3A341C`
- Bright yellow: `#FFEB69`
- Dark purple: `#260A2F`
- Bright orange: `#FFC091`
- Dark maroon: `#320707`
- Bright pink: `#FFD7EF`

### Raw color usage

Ranked by observed usage in unstyled source nodes:

1. `#000000` — 234 uses
2. `#9747FF` — 53 uses
3. `#FFFFFF` — 34 uses
4. `#1E1E1F` — 30 uses
5. `#0000001A` — 20 uses
6. `#231D9A` — 19 uses
7. `#A3A19C` — 12 uses
8. `#C4C4C4` — 9 uses
9. `#0E0F0C` — 8 uses
10. `#D9D9D9` — 6 uses
11. `#163300` — 4 uses
12. `#1633001A` — 3 uses
13. `#3B5998` — 3 uses

## Type scale

Font family: **Inter**.

| Style | Weight | Size | Line height | Tracking |
|---|---:|---:|---:|---:|
| Title Screen | 600 | 30px | 34px | -0.75px |
| Title Section | 600 | 26px | 32px | -0.39px |
| Title Subsection | 600 | 22px | 28px | -0.33px |
| Title Body | 600 | 18px | 24px | -0.18px |
| Body/Large | 400 | 16px | 24px | -0.08px |
| Body/Large Bold | 600 | 16px | 24px | 0.08px |
| Link/Large | 600 | 16px | 24px | 0.16px |
| Body/Default | 400 | 14px | 22px | 0.14px |
| Body/Default Bold | 600 | 14px | 22px | 0.18px |
| Link/Default | 600 | 14px | 22px | 0.18px |
| Title Group | 500 | 14px | 20px | 0.21px |
| Axis Label | 400 | 12px | auto | 0px |

Raw typography also contains Inter Regular at `12px` and `22px`, and Inter SemiBold at `14px`.

## Spacing scale

No spacing variables were found. Concrete component spacing values include:

- `0px`, `1px`, `2px`, `4px`, `5px`, `6px`, `8px`, `10px`, `11px`, `12px`, `16px`, and `24px` paddings.
- `0px`, `4px`, `8px`, `13px`, `16px`, and `48px` gaps.
- `_Progress Bar` uses a `-4px` gap.
- Common compact control padding: `12px 16px`.
- Common pill button padding: `12px 24px`.
- Section Card padding: `24px`.
- Exchange Graphs padding: `16px 0`.

## Radius scale

No radius variables were found. Concrete radii used by components:

- `2px`: `_Calendar Chevrons`, `_Calendar Header`
- `3px`: `Checkboxes`
- `10px`: `_Supporting Text Options`, `_Fee Options`, `_Country Options`, `_Category Options`, `_Simple Options`, `_Country Code Dropdowns`, `_Country Code Options`, `Checkbox Button`, `Toggle Button`, `Transaction Buttons`, `Action Button`, `Account Button`, `Option Button`, `_Countries Dropdown`, `_Categories Dropdown`
- `16px`: `Exchange Graphs`, `Card Buttons`, `Calendar Dropdown`, `_Simple Dropdown`
- `24px`: `Section Card`
- `100px`: `Stepper`, `Circle Sign`, `Avatar`, `Toggle`, `Chip Button`, `Icon Button`, `Destructive Button`, `Link Button`, `Sign In Buttons`, `Primary Button`

## Elevation & effects

- Small shadow: `drop_shadow 40px offset 0 0 #45474533`
- Large shadow: `drop_shadow 66px offset 0 20 #22304933`
- Small shadow is used by `_Country Code Dropdowns`, `Tooltip`, `Calendar Dropdown`, `_Step Tooltip`, `_Categories Dropdown`, and `_Simple Dropdown`.
- Large shadow is used by `_Countries Dropdown`.
- Overlay border color: `#0E0F0C1F`.
- Neutral border color: `#FFFFFF`.
- Interactive input border color: `#868685`.

## Components

### Navigation, actions, and buttons

- `Primary Button`: `85x48px`, `100px` radius, `12px 24px` padding, accent fill; supports hierarchy, state, size, and leading/false icon variants.
- `Destructive Button`: `111x48px`, `100px` radius, `12px 24px` padding, negative fill; supports primary/secondary hierarchy and active/default/hover states.
- `Link Button`: `219x48px`, `100px` radius, `11px 24px` padding; supports large/small sizes and trailing/false icon variants.
- `Sign In Buttons`: `72x48px`, `100px` radius, white fill, `1px` border; supports Google, Apple, and Facebook variants.
- `Action Button`: `231x72px`, `10px` radius, `12px` padding, `16px` gap.
- `Account Button`: `88x64px`, `10px` radius, `8px` padding, `8px` gap; supports open/closed state.
- `Menu Buttons`: `112x48px`, `12px 16px` padding, `16px` gap.
- `Option Button`: `292x80px`, `10px` radius, `16px` padding, `16px` gap; supports icon, supporting text, flag, and hover variants.
- `Toggle Button`: `326x82px`, `10px` radius, `16px` padding, `16px` gap; supports on/off state.
- `Icon Button`: `48x48px`, `100px` radius, `12px` padding; supports alert and warning states.
- `Chip Button`: `50x32px`, `100px` radius, `5px 16px` padding, white fill, `1px` border.
- `Category Button`: `127x32px`, `100px` radius, `4px 8px 4px 4px` padding, `1px` border.
- `Card Buttons`: `208x208px`, `16px` radius, `16px` padding.
- `Illustration Card Buttons`: `208x232px`.
- `Transaction Buttons`: `913x82px`, `10px` radius, `16px 12px` padding, `4px` gap; supports receiving/sending.
- `Checkbox Button`: `203x48px`, `10px` radius, `12px 16px` padding, `16px` gap.
- `Toggle`: `50x28px`, `100px` radius, `4px` padding.
- `Circle Sign`: `16x16px`, `100px` radius; supports equals, minus, multiply, none, and plus.
- `_Circle Buttons`: `56x84px`, `8px` gap; supports default, disabled, hover, and pressed states.

### Forms and inputs

- `Text Input Field`: `320x108px`, `13px` internal gap; supports password type, error state, filled hidden/shown, active, default, and hover.
- `Password Input Field`: `320x108px`, `13px` internal gap; supports error and filled hidden/shown states.
- `Dropdown Input Field`: `120x108px`, `13px` internal gap.
- `Dropdown Support Text Input Field`: `200x130px`, `13px` internal gap.
- `Currency Input Field`: `534x132px`, `13px` gap; uses `Title Subsection`, `Body/Default`, and raw Inter Regular `22px`; supports destructive state.
- `Checkboxes`: `22x22px`, `3px` radius, white fill, `1px` interactive border.
- `_Search Input Field`: `201x48px`, `10px` radius, `12px 16px` padding, `8px` gap, white fill, `1px` secondary interactive border.
- `Avatar`: `48x48px`, `100px` radius, `4px` padding; supports optional flag.
- `Tooltip`: `283x177px`, small shadow; supports arrow direction and optional button.
- `_Step Tooltip`: `200x85px`, small shadow.

### Dropdowns and options

- `Calendar Dropdown`: `400x306px`, `16px` radius, `8px` padding, white fill, small shadow; supports decades, month, and year.
- `_Countries Dropdown`: `314x1436px`, `10px` radius, `8px` padding, white fill, large shadow.
- `_Categories Dropdown`: `336x904px`, `10px` radius, `8px` padding, elevated background, small shadow.
- `_Simple Dropdown`: `299x200px`, `16px` radius, `8px` padding, elevated background, small shadow.
- `_Country Code Dropdowns`: `217x352px`, `10px` radius, `8px` padding, white screen background, small shadow.
- `_Country Options`: `148x48px`, `10px` radius, `12px 16px` padding, `8px` gap.
- `_Country Code Options`: `112x48px`, `10px` radius, `12px 16px` padding, `8px` gap.
- `_Category Options`: `99x52px`, `10px` radius, `10px 16px` padding, `8px` gap.
- `_Simple Options`: `110x46px`, `10px` radius, `12px 16px` padding; supports optional icon.
- `_Fee Options`: `280x74px`, `10px` radius, `12px 16px` padding, `4px` gap.
- `_Supporting Text Options`: `143x74px`, `10px` radius, `12px 16px` padding, `4px` gap.
- `Account Dropdown`: `88x64px`, uses `Title Group` and `Body/Default`.

### Calendar, graphs, and progress

- `Stepper`: `554x36px`; variants for steps 1, 2, 3, and 4.
- `_Stepper`: `514x2px`, `100px` radius, neutral background.
- `_Stepper Buttons`: `55x24px`, `1px 0px` padding, `4px` gap; current/next/previous states.
- `Exchange Graphs`: `436x351px`, `16px` radius, `16px` vertical padding, `48px` gap, neutral background.
- `Graph`: `436x155px`, white fill.
- `_Bullet Pointer`: `8x8px`.
- `_Progress Step`: `8x8px`, white fill.
- `_Progress Bar`: `257x2px`, `-4px` gap.
- `_Bullet Point`: `374x64px`, `8px 0px` vertical padding, `8px` gap; negative/positive variants.
- `Calendar Dropdown` calendar cells:
  - `_Calendar Month`: `40x40px`, `4px` padding.
  - `_Calendar Day`: `40x40px`, `4px` padding.
  - `_Calendar Week Day`: `47x38px`, `8px` padding.
  - `_Calendar Chevrons`: `28x28px`, `2px` radius, `2px` padding.
  - `_Calendar Header`: `99x28px`, `2px` radius, `2px` padding.

### Cards and layout

- `Section Card`: `422x200px`, `24px` radius, `24px` padding, `4px` gap, white fill, `1px` neutral border.
- `_Dashed Line`: `2x108px`.
- `Logo`: `1155x266px`, white fill; primary and secondary variants.
- `Circle Sign`, `Avatar`, `Toggle`, and category assets provide compact circular controls or indicators.

### Assets

- Illustrations: `cookie`, `globe`, `graph`, `jars`, `megaphone`, `receive`, `multi-currency`, `convert`, `plane`, `heart`, `calendar`, and `wise-card`.
- Utility icons include `identity`, `chevron-right`, `chevron-left`, `chevron-down`, `chevron-up`, `open-envelope`, `upload`, `documents`, `direct-debits`, `auto-conversions`, `lightning`, `stocks`, `interest`, `bank-note`, `three-dots`, `bank`, `briefcase`, `key`, `receipt`, `phone-email`, `phone`, `lock`, `link`, `notification`, `message`, `email`, `logout`, `settings`, `search`, `two-arrows`, `plus`, `clock`, `user`, `menu`, `gift`, `layout`, `users`, `card`, `home`, `arrow-left`, `arrow-right`, `arrow-down`, `arrow-up`, `close`, `check`, `shield`, `filters`, `lock-open`, `download`, `open-tab`, `eye`, `warning`, `help`, and `eye-off`.
- Category assets: `trips`, `transport`, `shopping`, `savings`, `personal-care`, `investments`, `housing`, `grocery`, `entertainment`, `pie-chart`, `eating`, and `bills`.
- Communication assets: `SMS`, `WhatsApp`, and `call`.
- Country assets are available for the named country families in the source, plus `Europe`, `No Flag`, and `Cyprus flag`.

## Screen patterns

- The extraction contains a component library rather than complete application screen layouts.
- The **Components** page contains controls, inputs, dropdowns, calendars, graphs, cards, illustrations, icons, country assets, and category assets.
- The **Thumbnail** and **🏗️ To Do** pages do not provide extracted screen-level layout specifications.
- Reusable patterns represented in the source:
  - Form fields with labels, supporting text, validation, and destructive states.
  - Dropdowns with search, active, selected, and hover states.
  - Calendar selection with month, day, week-day, and navigation subcomponents.
  - Step-based progress using `Stepper`, `_Progress Step`, `_Progress Bar`, and `_Step Tooltip`.
  - Transaction and account actions using full-width buttons, account controls, and option rows.
  - Category selection using category-colored circular assets and category buttons.
  - Data visualization using `Exchange Graphs`, `Graph`, axis labels, and hover pointers.

## Notes for implementers

- Prefer semantic tokens over raw colors wherever the source provides a token.
- Use `#163300` for primary forest-green actions and `#9FE870` for accent actions.
- Use `#FFFFFF` for screen, elevated, contrast, and primary light surfaces.
- Use Inter and the exact named type styles; do not substitute arbitrary font sizes when a token applies.
- Preserve component dimensions and radii when reproducing the extracted components.
- Implement all documented state variants rather than treating components as static.
- Use `10px` radii for compact controls and option rows, `16px` for larger cards and dropdowns, and `100px` for pill controls.
- Apply the small shadow to tooltips and most dropdowns; apply the large shadow only to `_Countries Dropdown`.
- No source spacing, radius, motion, or grid variables were available; use the concrete component values documented here.
- Do not infer screen layouts, responsive behavior, or undocumented tokens from the component extraction.
