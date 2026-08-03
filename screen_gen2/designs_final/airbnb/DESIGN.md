---
name: airbnb-ui-kit-community
source: Airbnb UI Kit (Community)
kind: design-system-context
---

# airbnb - Design System

## Overview

- Source: Airbnb UI Kit (Community), Figma page covering 21 pages including components, colors and typography, elevation, navigation, reviews, tabs, toggles, tooltips, and tiles.
- The system uses SF Pro typography, white and black neutrals, pink/red primary colors, radial gradients, rounded controls, and subtle elevation.
- Most-used styles:
  - Shade 02 / `#222222`: 1271 uses
  - Shade 01 / `#FFFFFF`: 521 uses
  - Neutral 07 / `#FFFFFF`: 337 uses
  - Body Copy/16pt Regular: 250 uses
  - Body Copy/14pt Regular: 179 uses
  - Neutral 06 / `#FFFFFF`: 166 uses
  - Neutral 08 / `#5E5E5E`: 111 uses

## Design language

- Font family: SF Pro.
- Primary text color: `#222222`.
- Secondary text color: `#5E5E5E`.
- Surfaces are predominantly `#FFFFFF`, with `#F7F7F7` and `#EBEBEB` neutrals.
- Primary actions use `Gradient 02`; additional primary colors are `#F6475F` and `#FF385C`.
- Controls commonly use 8px, 12px, or pill-shaped radii.
- Buttons use centered horizontal layouts and 14px vertical padding.
- Navigation includes rounded search controls and pill-shaped containers.
- Borders commonly use `#222222` or `#FFFFFF` at 1px.
- Elevation uses black shadows with alpha values `#0000002B`, `#00000030`, and `#0000001F`.

## Color palette

Colors are de-duplicated by concrete value; aliases are grouped.

- `#222222` — Shade 02, Neutral 04; 1271 uses for Shade 02 and 90 uses for Neutral 04.
- `#FFFFFF` — Shade 01, Neutral 03, Neutral 05, Neutral 06, Neutral 07, Gray_02/10, Link; 521 uses for Shade 01 and 337 uses for Neutral 07.
- `#5E5E5E` — Neutral 08; 111 uses.
- `#EBEBEB` — Neutral 02; 41 uses.
- `#F7F7F7` — Neutral 01; 17 raw uses and 8 token uses.
- `#FEF8F6` — Error 01; 9 uses.
- `#C13515` — Error 02; 59 uses.
- `#F6D7DF` — Accent 01; 10 uses.
- `#FF385C` — Primary 02; 20 uses.
- `#F6475F` — Primary 01; 5 uses.
- `#008A05` — Discounts; 4 uses.
- `#2222220D` — Shade 02 - 5%; 15 uses.
- `#2222224D` — Shade 02 - 30%; 10 uses.
- `#9747FF` — raw unstyled color; 66 uses.
- `#D9D9D9` — raw unstyled color; 42 uses.
- `#000000` — raw unstyled color; 40 uses.
- `#0000001A` — raw unstyled color; 17 uses.
- `#717171` — raw unstyled color; 8 uses.
- `#201A1A` — raw unstyled color; 5 uses.

Gradients:

- Gradient 01: radial gradient `#C72D65` at 0%, `#D23760` at 48%, `#D23755` at 100%; another source instance uses `#EB4C60` at 0%, 48%, and 100%.
- Gradient 02: radial gradient `#D33753` at 0%, `#D13660` at 53%, `#C72D65` at 100%; 15 uses.
- Gradient 03: radial gradient `#C72D65` at 0%, `#D23760` at 48%, `#D23755` at 100%; 7 uses.

## Type scale

All listed tracking values are `0px`; unspecified line heights are `auto`.

- 10px: SF Pro Semibold, weight 590 — Mirco Text/10pt Semibold.
- 12px: SF Pro Regular, weight 400 — Body Copy/12pt Regular.
- 12px: SF Pro Semibold, weight 590 — Body Copy/12pt Semibold.
- 12px: SF Pro Semibold, weight 590, underlined — Body Copy/12pt Semibold Underlined.
- 13px: SF Pro Regular, weight 400 — Body Copy/13pt Regular.
- 13px: SF Pro Semibold, weight 590 — Body Copy/13pt Semibold.
- 14px: SF Pro Regular, weight 400 — Body Copy/14pt Regular.
- 14px: SF Pro Semibold, weight 590 — Body Copy/14pt Semibold.
- 16px: SF Pro Regular, weight 400 — Body Copy/16pt Regular.
- 16px: SF Pro Regular, weight 400, underlined — Body Copy/16pt Regular Underlined.
- 16px: SF Pro Semibold, weight 590 — Body Copy/16pt Semibold.
- 18px: SF Pro Regular, weight 400, line height 24px — Body Copy/18pt Regular.
- 18px: SF Pro Medium, weight 510, line height 24px — Body Copy/18pt Medium.
- 18px: SF Pro Semibold, weight 590 — Body Copy/18pt Semibold.
- 22px: SF Pro Regular, weight 400 — Header/22pt Regular.
- 22px: SF Pro Semibold, weight 590 — Header/22pt Semibold.
- 40px: SF Pro Medium — raw typography style.

Most-used raw typography:

- SF Pro Regular, 16px: 71 uses.
- SF Pro Regular, 14px: 48 uses.
- SF Pro Medium, 12px: 36 uses.
- SF Pro Regular, 12px: 35 uses.
- SF Pro Medium, 40px: 15 uses.

## Spacing scale

No spacing variables found in source.

Documented component spacing values include:

- 0px padding and 0px gap in Map Chips and Underline Tabs.
- 4px gap in price groups and Chips.
- 8px gap in Callouts.
- 10px gap in Map Chips, Tooltips, and Property Type tiles.
- 12px gap in Checkboxes with labels and Inputs.
- 14px vertical padding in buttons.
- 16px padding in Tooltips and Property Type tiles.
- 20px horizontal padding in Chips.
- 24px padding in Callouts and Tooltips.
- 32px gap in Accordion.
- 24px gap in Textarea.

## Radius scale

No radius variables found in source.

Documented component radii:

- 0px: rectangular edges and unrounded vectors.
- 0.5px: rating star.
- 2px: cover color groups.
- 8px: Primary Buttons, Secondary Buttons, Tertiary Buttons, and Gradient 02 content.
- 12px: Callouts, Card, Textarea-related surfaces, Property Type tiles, and Sleep Card-related surfaces.
- 43px: Map Chips.
- 50px: Chips and Pill Tabs.
- 500px: Navigation search container.
- Per-corner radii include `12/0/0/0px` and `500/0/0/500px`.

## Elevation & effects

- Elevation 01: drop shadow, offset `0 4`, blur `18px`, color `#0000002B`; 5 uses. Used by Menu / Open.
- Elevation 02: drop shadow, offset `0 1`, blur `5px`, color `#00000030`; 19 uses. Used by Map Chips.
- Elevation 03: drop shadow, offset `0 6`, blur `16px`, color `#0000001F`; 9 uses. Used by Card.
- Common strokes are 1px.
- Cover button focus examples use a 2px stroke with Neutral 04 / `#222222`.

## Components

Component families and documented specifications:

- **Accordion** — `628x242px`, vertical layout, 32px gap; states: Closed, Open; text uses SF Pro Regular 18px and Header/22pt Regular.
- **Callout Icons** — `32x32px`; types: Clock, Diamond, Tags.
- **Callouts** — `349x86px`, 12px radius, 24px padding, 8px gap, `#FFFFFF` fill, 1px `#FFFFFF` stroke; types: Cancelation, Property Highlight.
- **Card** — `303x387px`; types: Default Card, Discount Card, Map Card, Reservation Card, Reservation Confirmation Card, Sleep Card.
- **Checkboxes** — `24x24px`, 16px gap; states: Default, Focus, Hover; statuses: Checked, Unchecked.
- **Checkboxes with labels** — `356x59px`, 12px gap; states: Default, Focus, Hover; statuses: Checked, Unchecked; sizes: Medium, Small; optional subtext.
- **Chips** — `59x40px`, 50px radius, 10px vertical and 20px horizontal padding, 4px gap, `#FFFFFF` fill, 1px `#FFFFFF` stroke; states: Default, Focus, Hover, Pressed, Select.
- **Map Chips** — `44x29px`, 43px radius, 6px vertical and 8px horizontal padding, 10px gap, `#FFFFFF` fill, Elevation 02; states: Default, Favorited, Hover, Pressed, Selected, Viewed.
- **Drop Down** — `520x51px`, 12px gap; states: Default, Focus, Hover, Loading; optional label and icon.
- **Drop down** — open menu is `243x254px`; text uses 14px Regular and 14px Semibold.
- **FAQ** — desktop frame `1440x806px`, `#F7F7F7` fill; uses 22px and 18px typography.
- **Inputs** — `522x61px`, 12px gap; states: Default, Filled, Focus, Hover; statuses: Default, Error; optional label, helper text, and icon.
- **Links** — `33x14px`, `#FFFFFF` fill; states: Default, Focus; sizes: Medium, Small; types: Legal Link, Subtle Link; optional icon; uses underlined 12px Semibold.
- **Menu** — open menu `520x183px`, Elevation 01; text uses 16px Regular.
- **Navigation** — `1440x81px`, `#FFFFFF` fill, 1px `#FFFFFF` stroke; types: Expanded Stays Navigation, Main Navigation, Stays Navigation.
- **Pill Tabs** — `310x41px`, 50px radius, 4px padding, `#EBEBEB` fill; states: Default, Focus, Hover.
- **Primary Buttons** — `520x47px`, 8px radius, 14px vertical padding, Gradient 02 fill; states: Default, Disabled, Focus, Hover, Loading, Pressed; sizes: Full Width, Small; icon is Off.
- **Property Type** — icon size `32x32px`; types: Apartment, Guesthouse, Hotel, house.
- **Property Type** tiles — `166x123px`, 12px radius, 16px padding, 10px gap, `#FFFFFF` fill, 1px `#FFFFFF` stroke; states: Default, Focus, Hover, Pressed, Selected.
- **Radio Button** — `24x24px`; states: Default, Focus, Hover; statuses: Checked, Unchecked.
- **Radio Buttons with Labels** — `360x42px`, 16px gap; states: Default, Focus, Hover; statuses: Checked, Unchecked; size: Medium; optional subtext.
- **Reviews** — `567x102px`; types: Review, Review Scale.
- **Secondary Buttons** — `520x47px`, 8px radius, 14px vertical padding, Shade 02 / `#222222` fill; states: Default, Disabled, Focus, Hover, Loading, Pressed; sizes: Full Width, Small; optional icon.
- **Sleep Areas** — `24x24px`; types: Bunk Bed, Crib, Living Room, Queen Bed, Single Bed.
- **Sleep Card** — `207x143px`; uses 16px Semibold and 14px Regular.
- **Textarea** — `661x171px`, 24px gap; text uses 16px Regular and 18px Semibold.
- **Tertiary Buttons** — `520x47px`, 8px radius, 14px vertical padding, 1px Shade 02 / `#222222` stroke; states: Default, Disabled, Focus, Hover, Loading, Pressed; sizes: Full Width, Small; optional icon.
- **Toggle** — `48x32px`; states: Default, Focus, Hover; statuses: Off, On.
- **Toggle with Labels** — `452x46px`, 16px gap; states: Default, Focus, Hover; statuses: Off, On; size: Medium; optional subtext.
- **Tooltips** — `253x112px`, 16px padding, 10px gap; positions: Bottom, Left, Right, Top; optional title; colors: Black, White.
- **Underline Tabs** — `40x65px`, 8px gap; states: Default, Focus, Hover, Pressed; optional line and icon.
- **Union** — `253x121px`, `#FFFFFF` fill.

## Screen patterns

- **Cover** — `1920x1080px`, `#FFFFFF` background. Demonstrates the color palette, gradients, buttons, cards, navigation, and typography.
- **FAQ desktop** — `1440x806px`, Neutral 01 / `#F7F7F7` background.
- **Navigation** — documented desktop size `1440x81px`; the cover also shows a rounded search navigation pattern with Where, Check-in, Check-out, and Who sections.
- **Grid styles**:
  - 12-column grid with 12 columns, `101.67px` section, `20px` gutter, stretch alignment.
  - Desktop/12 col grid with 12 columns, `137.33px` section, `16px` gutter, stretch alignment, and an 8px grid.

## Notes for implementers

- No local variable collections were found.
- No spacing, radius, or motion variables were found; use the documented component values directly.
- Prefer the most-used canonical values: `#222222` for primary dark content, `#FFFFFF` for primary surfaces, `#5E5E5E` for secondary content, and `#EBEBEB` or `#F7F7F7` for neutral surfaces.
- Use the named typography styles where available rather than raw typography styles.
- Preserve component state variants exactly: Default, Focus, Hover, Pressed, Loading, Disabled, Checked, Unchecked, Selected, Viewed, Favorited, and Open/Closed where documented.
- Keep button dimensions at `520x47px` for the documented full-width specification, with 8px radius and 14px vertical padding.
- Use Gradient 02 for the documented Primary Buttons fill.
- Use Elevation 01 for open menus, Elevation 02 for Map Chips, and Elevation 03 for Cards.
