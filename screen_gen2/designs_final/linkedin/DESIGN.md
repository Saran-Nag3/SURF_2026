---
name: linkedin-ui-screens-community
source: Linkedin UI Screens (Community)
kind: design-system-context
---

# linkedin - Design System

## Overview

- Source: Figma file `Linkedin UI Screens (Community)`.
- Source page: All pages (5), including Cover, Light theme, and Dark theme.
- Primary mobile frame: `414px` wide.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, or grid styles were found.
- Component families: `bloc`, `Dashboard`, `opentowork`, `Navigation Bar`, `Top bar`, `Post`, `Diolog`, `tabl`, `Comments`, `Card`, `txt`, `info`, `list`, `dashboard`.

## Design language

- Professional social-network interface with white cards, blue primary actions, muted gray text, profile and post surfaces, charts, tabs, and bottom navigation.
- Light-theme backgrounds use white content surfaces over `#E9E5DF` or `#F3F2EF`.
- Typography is primarily Roboto, with SF Pro Text Semibold used for iOS-style status-bar time and one top-bar text style.
- Interfaces are structured around `414px` mobile screens with top bars, content cards, posts, dashboards, and bottom navigation.
- Dark-theme tokens are present, but detailed dark-theme component specifications were not extracted.

## Color palette

Ranked by reported usage where available:

| Color | Usage | Role / source token |
|---|---:|---|
| `#585C60` | 1044 | `light_theme/Grey`; primary muted text and controls |
| `#FFFFFF` | 853 | Light and dark theme white; card and navigation surfaces |
| `#000000` | 378 | `light_theme/Dark` |
| `#8C8C8C` | 174 | `light_theme/Grey2`; secondary muted content |
| `#0A66C2` | 153 | `light_theme/Blue`; primary action and chart color |
| `#031A31` | 101 | `dark_theme/Dark` |
| `#E9E5DF` | 97 | `light_theme/BG Home`; profile/home background |
| `#446F31` | 82 | `light_theme/ava`; avatar gradient source |
| `#E0DFDC` | 71 | `light_theme/Divider` |
| `#8244CB` | 38 | `light_theme/ava2`; alternate avatar gradient source |
| `#F3F2EF` | 36 | `light_theme/BG` |
| `#DCE6F1` | 28 | `light_theme/Blue2`; Dashboard fill |
| `#CC1016` | 13 | `light_theme/Red` |
| `#C4C4C4` | 203 | Raw color |
| `#455154` | 182 | Raw color |
| `#666666` | 73 | Raw color |
| `#3E5155` | 52 | Raw color |
| `#FFFFFF4D` | 52 | Raw translucent white |
| `#5F6163` | 21 | Raw color; search icon |
| `#EBEBEB` | 12 | Raw divider color |
| `#5D3B01` | 8 | Raw color |
| `#ABABAB` | 8 | Raw color |
| `#060606` | 5 | Raw color; status-bar icons |
| `#187583` | 5 | Raw color |
| `#215B64` | 5 | Raw color |
| `#7DDBF4` | 5 | Raw color |
| `#A0B4B7` | 5 | Raw color |
| `#BFD3D5` | 5 | Raw color |
| `#DAE5E8` | 5 | Raw color |
| `#FFFFFF33` | 5 | Raw translucent white |
| `#17162F` | 6 | `dark_theme/Dark2` |
| `#1D2226` | 6 | `light_theme/Black` |
| `#C37D16` | 2 | `light_theme/gold` |
| `#495159` | 2 | `dark_theme/Grey` |
| `#053361` | 1 | `dark_theme/Darck_blue` |

Additional named tokens:

- `light_theme/Green`: no concrete color value found.
- `light_theme/ava`: gradient using `#446F31`, `#446F31FC`, `#446F31C5`, `#3B841B6F`, and `#3B841B00`.
- `light_theme/ava2`: gradient using `#8244CB`, `#8244CBFC`, `#8244CBCC`, `#8244CB78`, `#3B841B00`, and `#8244CB00`.

## Type scale

Primary typeface: Roboto.

| Size | Weight / family | Uses |
|---:|---|---:|
| `27px` | Roboto Medium | 4 |
| `24px` | Roboto Bold | 6 |
| `20px` | Roboto Medium | 46 |
| `20px` | Roboto Regular | 56 |
| `18px` | Roboto Bold | 6 |
| `18px` | Roboto Light | 12 |
| `18px` | Roboto Medium | 36 |
| `18px` | Roboto Regular | 64 |
| `17px` | Roboto Bold | 12 |
| `17px` | Roboto Light | 78 |
| `17px` | Roboto Medium | 52 |
| `17px` | Roboto Regular | 128 |
| `16px` | Roboto Regular | 4 |
| `15px` | Roboto Light | 10 |
| `15px` | Roboto Medium | 24 |
| `15px` | Roboto Regular | 10 |
| `15px` | SF Pro Text Semibold | 26 |
| `14px` | Roboto Regular | 4 |
| `12px` | Roboto Light | 56 |
| `12px` | Roboto Medium | 36 |

Additional component typography:

- `Roboto Medium, 30px` appears in `bloc`.
- `Roboto LightItalic, 17px` appears in `Dashboard`.

Hierarchy guidance from the source:

- Large heading: `Roboto Medium, 27px`.
- Prominent numeric heading: `Roboto Bold, 24px` or `Roboto Light, 40px` where specified by the dashboard component.
- Section and card headings: `Roboto Medium, 20px`.
- Body and post text: primarily `Roboto Regular, 17px` or `Roboto Regular, 20px`.
- Labels and metadata: `Roboto Medium, 12px`, `Roboto Light, 12px`, or `Roboto Regular, 15px`.

## Spacing scale

No spacing token scale was found. Use only extracted component-level spacing:

- `txt`: padding `20px 20px 20px 20px`, gap `188px`.
- `list`: gap `20px`.
- Light-theme `txt`: padding `20px 20px 20px 20px`, gap `188px`.
- Dashboard action buttons: padding `10px 20px 10px 20px`, gap `10px`.
- Post navigation frame: gap `90px`.
- Navigation items use a `2px` vertical gap internally.
- `tabl`, `info`, and other components have no extracted spacing specification.

## Radius scale

Extracted radii:

- `2px`: Premium icon.
- `4px`: `dashboard` component.
- `5px`: Top-bar search field.
- `10px`: Dashboard recommendation/profile cards.
- `18px`: Cover phone mockups.
- `25px`: Cover logo rectangle.
- `40px`: Rounded action buttons.
- `100px`: Bottom home-indicator line.

## Elevation & effects

- **Primary Card**: drop shadow, `0px` offset, `0.33px` blur, color `#BDC5CD`.
- **Secondary Card**: drop shadow, `0px` offset, `0.33px` blur, color `#CED5DC`.
- Light-theme top bars use Primary Card.
- Posts use Secondary Card.
- Navigation-bar background uses a drop shadow with `0px` offset, `-0.33px` blur, color `#BDC5CD`.
- Dashboard recommendation/profile cards use a drop shadow with `4px` offset, `1px` blur, color `#000000`.
- No motion tokens were found.

## Components

### `bloc`

- Size: `414px × 483px`.
- Fill: `#FFFFFF`.
- Typography: Roboto Light `18px`, Roboto Regular `18px`, Roboto Bold `17px`, Roboto Medium `17px`, Roboto Medium `30px`, Roboto Medium `18px`, Roboto Bold `18px`.

### `Dashboard`

- Size: `414px × 209px`.
- Fill: `#DCE6F1`.
- Typography: Roboto Regular `17px`, Roboto Bold `24px`, Roboto Medium `20px`, Roboto LightItalic `17px`, Roboto Regular `20px`.

### `dashboard`

- Base size: `414px × 326px`.
- Fill: `#FFFFFF`.
- Stroke: `#E9E5DF`, `1px`.
- Radius: `4px`.
- Typography: Roboto Regular `17px`, Roboto Regular `20px`, Roboto Light `40px`.

### `opentowork`

- Size: `64px × 64px`.

### `Navigation Bar`

- Size: `414px × 84px`.
- Fill: `#FFFFFF`.
- Typography: Roboto Light `12px`.

### `Top bar`

- Size: `414px × 88px`.
- Typography: SF Pro Text Semibold `15px`, Roboto Regular `18px`.
- The extracted light-theme instance includes a `414px × 44px` status-bar area and a search field sized `268px × 40px` with `5px` radius.

### `Post`

- Size: `414px × 344px`.
- Typography: Roboto Regular `15px`, Roboto Regular `20px`, Roboto Medium `15px`, Roboto Regular `17px`, Roboto Medium `17px`, Roboto Medium `18px`.
- Extracted post surfaces use `#FFFFFF` and Secondary Card elevation.
- Profile/avatar circles include `64px × 64px` and `75px × 75px` examples.

### `Diolog`

- Size: `349px × 52px`.
- Typography: Roboto Regular `18px`, Roboto Light `17px`, Roboto Medium `18px`, Roboto Medium `12px`.

### `tabl`

- Size: `414px × 74px`.
- Typography: Roboto Light `17px`, Roboto Medium `12px`.

### `Comments`

- Size: `414px × 296px`.
- Fill: `#E8F3FF`.
- Typography: Roboto Regular `17px`.

### `Card`

- Size: `182px × 295px`.
- Typography: Roboto Light `15px`, Roboto Medium `17px`, Roboto Light `12px`, Roboto Medium `15px`.

### `txt`

- Light-theme variant A: `414px × 63px`, horizontal layout, padding `20px 20px 20px 20px`, gap `188px`, centered alignment, `#FFFFFF` fill, Roboto Medium `20px`.
- Light-theme variant B: `414px × 109px`, Roboto Regular `20px`, Roboto Medium `20px`.
- Light-theme variant C: `414px × 83px`, Roboto Regular `20px`.

### `info`

- Size: `198px × 62px`.
- Typography: Roboto Medium `20px`, Roboto Medium `17px`.

### `list`

- Variant A: `142px × 21px`, horizontal layout, gap `20px`, Roboto Regular `18px`.
- Variant B: `246px × 28px`, Roboto Regular `18px`.

## Screen patterns

### Cover

- Canvas: `1200px × 660px`.
- Includes a LinkedIn logo treatment, white logo typography, and two `375px × 812px` mobile mockups.
- Mockup radius: `18px`.
- The extracted cover uses additional gradient and shadow colors that are not included in the allowed palette; reproduce only the documented allowed colors when implementing from this context.

### Light-theme profile and home screens

- Mobile frame: `414px × 896px`.
- Top bar and iOS-style status bar occupy the upper region.
- Profile screen background: `#E9E5DF`.
- Content is organized into stacked posts, white card surfaces, dividers, profile imagery, action labels, and a fixed bottom navigation bar.
- Home/dashboard screen uses white surfaces, a `#DCE6F1` dashboard panel, blue chart elements, profile-viewer statistics, recommendation cards, and pill-shaped actions.
- Primary action: `#0A66C2` text or chart color, with white text on green action surfaces where specified.
- Bottom navigation: `414px × 84px`, white background, muted `12px` labels, and a `2px` dark home-indicator line.

### Dark theme

- Dark-theme tokens include `#031A31`, `#17162F`, `#495159`, `#053361`, and `#FFFFFF`.
- No detailed dark-theme screen layout or component measurements were extracted.

## Notes for implementers

- Preserve the `414px` mobile-first composition for the extracted screen patterns.
- Prefer named theme tokens over raw colors when both are available.
- Use `#585C60` as the dominant muted gray because it is the most-used named style.
- Use `#FFFFFF` for primary surfaces and `#0A66C2` for primary blue actions, links, and charts.
- Do not assume an unextracted spacing, radius, typography, or motion token.
- Keep component family names exactly as extracted, including `Diolog`, `tabl`, `bloc`, and the lowercase `dashboard`.
- The source contains image fills and decorative vector groups; their visual assets were not converted into reusable color or component tokens.
- Avoid using colors present only in omitted raw nodes unless they are included in the allowed palette above.
