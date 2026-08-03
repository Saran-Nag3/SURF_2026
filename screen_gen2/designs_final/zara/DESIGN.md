---
name: zara
source: Todo App (Community)
kind: design-system-context
---

# zara - Design System

## Overview

- Source: Figma file `Todo App (Community)`, pages `Pages` and `Components`.
- Product pattern: mobile todo application with home, tasks, today-tasks, automation, and performance views.
- Primary screen dimensions: 375x667px; additional screen width: 381px.
- Promotional thumb uses a 1440x1024px frame with large headline typography, app screen imagery, and a download CTA.
- No local variable collections, spacing variables, radius variables, motion tokens, or grid styles were found.

## Design language

- Use Roboto for the design-system typography tokens.
- Use a dark indigo header surface with white text and icons.
- Use pale blue and pale indigo surfaces for controls and content areas.
- Use rounded pill controls with 20px radius.
- Use compact mobile layouts with top bars, bottom navigation, list items, trailing actions, and supporting text.
- List rows commonly use 24px icons, 8px vertical padding, 8px or 16px gaps, and a 1px divider.
- Promotional artwork uses large Inter typography and a purple CTA with a subtle shadow.

## Color palette

Ranked by usage where usage counts are available:

| Rank | Token / use | Color | Usage |
|---|---|---|---:|
| 1 | `Primary/Primary` | _No concrete color found in source._ | 103 |
| 2 | `Neutral/neutral15` | #5C5C5C | 99 |
| 3 | `Neutral/neutral100` | #FFFFFF | 56 |
| 4 | `Neutral/neutral50` | #D8D8D8 | 29 |
| 5 | `Outlines/outline` | #1195F4 | 20 |
| 6 | `Neutral/neutral5` | #242424 | 19 |
| 7 | `Body/medium` and related neutral usage | _See token values below._ | 17 |
| 8 | `Secondary/Secondary100` | #E1E3FE | 15 |
| 9 | `header` | #373A5B | 15 |
| 10 | `Neutral/neutral10` | #3E3E3E | 12 |
| 11 | `Primary/Shades/Primary100` | #0970BB | 6 |
| 12 | `Primary/Tints/Primary100` | #E1F2FE | 6 |
| 13 | `Secondary/Secondary0` | #1123F4 | 3 |
| 14 | `Tertiary/Tertiary` | #E211F4 | 2 |
| 15 | `Primary/Tints/Primary50` | #88CAFA | 1 |
| 16 | `Primary/Tints/Primary80` | #B4DDFB | 1 |
| 17 | `Secondary/Secondary50` | #8891FA | 1 |
| 18 | `Tertiary/Tertiary100` | #FBE1FE | 1 |
| 19 | `Tertiary/Tertiary50` | #F188FA | 1 |

Additional concrete colors found in raw styles:

- #9747FF
- #1C1B1F
- #7346F9

Additional source tokens:

- `Neutral/neutral0`: #000000
- `Neutral/neutral10`: #3E3E3E
- `Neutral/neutral15`: #5C5C5C
- `Neutral/neutral50`: #D8D8D8
- `Neutral/neutral100`: #FFFFFF
- `Primary/Tints/Primary50`: #88CAFA
- `Primary/Tints/Primary80`: #B4DDFB
- `Primary/Tints/Primary100`: #E1F2FE
- `Primary/Shades/Primary100`: #0970BB
- `Secondary/Secondary0`: #1123F4
- `Secondary/Secondary50`: #8891FA
- `Secondary/Secondary100`: #E1E3FE
- `Tertiary/Tertiary`: #E211F4
- `Tertiary/Tertiary50`: #F188FA
- `Tertiary/Tertiary100`: #FBE1FE
- `header`: #373A5B

## Type scale

All typography tokens use 0px tracking.

| Token | Font | Weight | Size / line height |
|---|---|---:|---:|
| `Headline/medium` | Roboto | 400 | 28px / 36px |
| `Title/large` | Roboto | 400 | 22px / 28px |
| `Body/large` | Roboto | 400 | 16px / 24px |
| `Body/medium` | Roboto | 400 | 14px / 20px |
| `Label/large` | Roboto | 500 | 14px / 20px |
| `Label/small` | Roboto | 500 | 11px / 16px |

Promotional thumb typography also contains:

- Inter SemiBold, 96px, used for `Efficiency at your fingertips!`.
- Inter Regular, 32px, used for `download for free!`.

## Spacing scale

No spacing variables were found.

Documented component spacing values:

- 0px
- 1px
- 2px
- 5px
- 7px
- 8px
- 9px
- 10px
- 12px
- 16px
- 17px
- 18px
- 20px
- 22px
- 24px
- 42px
- 48px
- 72px
- 91px

## Radius scale

No radius variables were found.

Documented radii:

- 4px: `Checkbox`
- 5px: `snack-bar`
- 6px: `Frame 10`
- 20px: pill buttons, navigation controls, and `button`
- 30px top corners: home content surface

## Elevation & effects

- `Elevation/Light/2`: drop shadow, 5px offset, `0 2`, color #0000004D.
- `Elevation/Light/1`: drop shadow, 22px offset, `0 4`, color #0000004D.
- `Frame 10`: drop shadow, 2px offset, `0 2`, color #00000038.
- Home content surface uses `Elevation/Light/1`.
- Promotional CTA `Frame 10` uses the #00000038 shadow.

## Components

- `top-bar`
  - Size: 327x60px.
  - Vertical layout; padding 8px 16px; gap 0px.
  - Fill: `header` (#373A5B).
  - Text: `Headline/medium`, `Title/large`.
  - Variants: `Size` = `big` / `small`; `home-page` = `no` / `yes`.
  - Screen instances use 375x60px or 381x60px dimensions; the home instance is 375x149px.

- `Nav-bar`
  - Size: 297x60px; screen instances use 375x60px or 381x60px.
  - Horizontal layout; padding 8px; gap 20px.
  - Alignment: space-between / center.
  - Fill: `header` (#373A5B).
  - Text: `Label/small`.

- `button`
  - Components size: 111x40px or 133x44px.
  - Radius: 20px.
  - Horizontal layout; centered alignment.
  - 111x40px variant: padding 8px 16px; gap 0px; fill `Primary/Tints/Primary100` (#E1F2FE).
  - 133x44px variant: padding 10px 24px; gap 10px; fill `Primary/Primary` with no concrete color found.
  - Text: `Label/large`.
  - Variants: selected no/yes; configuration outlined/elevated/filled/plus/text; with-text no/yes; with-icon no/yes; state disabled/enabled/hovered/pressed.

- `list-item`
  - Size: 337x77px; compact instances are 337x56px or 375x53px.
  - Vertical layout; padding 8px 0px; gap 8px; centered alignment.
  - Text: `Body/medium`, `Body/large`.
  - Common row gap: 48px; supporting text gap: 9px.
  - Variants: checkbox no/yes; leading no/yes; left-icon no/yes; with-supporting-text no/yes.
  - List dividers use `Neutral/neutral15` (#5C5C5C), 1px.

- `Checkbox`
  - Size: 24x24px.
  - Radius: 4px.
  - Fill: #FFFFFF.
  - Variants: checked no/yes.

- `Group 1`
  - Size: 24x24px.
  - Variants: selected no/yes.

- `Frame 10`
  - Size: 408x83px.
  - Radius: 6px.
  - Horizontal layout; padding 22px 1px; gap 10px; centered alignment.
  - Fill: #9747FF.
  - Text: Inter Regular, 32px.
  - Effect: drop shadow 2px offset `0 2`, #00000038.

- `overlay-tasks`
  - Size: 375x158px.
  - Text: `Body/medium`, `Body/large`.

- `schedule`
  - Size: 48x28px.
  - Radius: 20px.
  - Horizontal layout; padding 0px 12px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: selected no/yes.

- `calendar`
  - Size: 48x28px.
  - Radius: 20px.
  - Horizontal layout; padding 0px 12px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: selected no/yes.

- `automation`
  - Size: 48x28px.
  - Radius: 20px.
  - Horizontal layout; padding 1px 12px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: selected no/yes.

- `menu`
  - Size: 40x28px.
  - Radius: 20px.
  - Horizontal layout; padding 2px 8px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: hovered no/yes.

- `performance`
  - Size: 48x28px.
  - Radius: 20px.
  - Horizontal layout; padding 0px 12px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: selected default/no.

- `home`
  - Size: 48x28px.
  - Radius: 20px.
  - Horizontal layout; padding 2px 12px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: selected no/yes.

- `charts`
  - Size: 48x28px.
  - Radius: 20px.
  - Horizontal layout; padding 0px 12px; gap 10px; centered alignment.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: selected no/yes.

- `snack-bar`
  - Size: 394x60px.
  - Radius: 5px.
  - Horizontal layout; padding 18px 42px; gap 10px.
  - Fill: `Neutral/neutral15` (#5C5C5C).
  - Text: `Body/large`.

- `Primary`
  - 96x30px.
  - Fill: `Primary/Shades/Primary100` (#0970BB).
  - Variants: default, Variant3, Variant4, Variant5, primary50.
  - Another `Primary` variant has no fill specified and variants `Primary`, `Surface1`, `Tertiary`.

- `Tertiary`
  - Size: 96x30px.
  - Fill: #FFFFFF.
  - Variants: default, Variant2, Variant3.

- `Shades`
  - Size: 96x30px.
  - Fill: `Secondary/Secondary100` (#E1E3FE).
  - Variant: default.

- Icon families
  - `check`, `border_color`, `more_horiz`, `arrow_right`, and `add`: 24x24px.
  - `menu`, `home`, `calendar`, `schedule`, `automation`, `performance`, and `charts` are 24px icon containers inside 28px-high pill controls.

## Screen patterns

- **Home**
  - Mobile canvas: 375x667px.
  - Dark `top-bar` header with a title, menu control, and large title treatment.
  - Main content uses a pale indigo surface with 30px top corner radii and `Elevation/Light/1`.
  - Content contains repeated list items with trailing `arrow_right` icons.

- **Tasks**
  - Mobile canvas: 375x667px.
  - `top-bar` at the top and `Nav-bar` at the bottom, both filled with `header`.
  - Central content uses repeated 337px-wide list items with trailing `more_horiz` icons and 1px dividers.
  - Bottom navigation contains calendar, schedule, automation, and charts destinations with `Label/small` captions.

- **Today tasks**
  - Canvas: 381x643px.
  - `top-bar` at the top, list content in the center, and `Nav-bar` at the bottom.
  - List items use leading icons, title/supporting-text stacks, trailing actions, and dividers.

- **Promotional thumb**
  - Canvas: 1440x1024px.
  - Large Inter SemiBold 96px headline: `Efficiency at your fingertips!`.
  - Purple 408x83px `Frame 10` CTA with Inter Regular 32px text: `download for free!`.
  - Includes six mobile app preview images.

## Notes for implementers

- Prefer the named typography tokens over unstyled text.
- Use only the concrete colors listed in the palette; `Primary/Primary` has usage but no concrete color in the extraction.
- Preserve the distinction between 20px pill controls and the 30px top-corner content surface.
- Keep navigation controls at 28px height inside 60px navigation bars.
- Use 24x24px icon containers consistently.
- Use `Body/large` for 16px primary list text and `Body/medium` for 14px supporting or secondary text.
- Use `Label/small` for bottom-navigation captions.
- Do not infer missing spacing, radius, motion, grid, or color values from the source.
