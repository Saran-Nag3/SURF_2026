---
name: coffee-shop-mobile-app-design-community
source: Coffee Shop Mobile App Design (Community)
kind: design-system-context
---

# shop - Design System

## Overview

Coffee shop mobile app design system for the “Coffee Shop Mobile App Design (Community)” Figma file. The source contains 10 pages covering cover/preview, thumbnail, assets, styleguide, wireframe, visual screens, author information, license, notes, and feedback.

The extracted system includes:
- Warm brown coffee branding with neutral grey and white foundations.
- Mobile app screen previews and iPhone system UI assets.
- Coffee imagery and reusable icon assets.
- Typography using Urbanist, Sora, Poppins, Inter, and Plus Jakarta Sans.
- An 8-column grid with a 16px gutter.

## Design language

- Use brown as the primary coffee-brand accent: `#C67C4E`.
- Use light brown surfaces for warm backgrounds: `#F9F2ED`, `#F6EBE4`.
- Use dark grey and near-black tones for primary text and active states: `#242424`, `#313131`, `#050505`.
- Use white and near-white surfaces for cards, screens, and page backgrounds: `#FFFFFF`, `#F9F9F9`, `#FDFDFF`.
- Use rounded controls and cards, with observed radii from `4px` through `24px`.
- Use large display typography for styleguide headings, with compact Sora text for app UI labels and supporting content.
- Use simple outlined and filled icons. Brown-filled controls use white icon artwork.
- Styleguide sections use a thin brown strip at the top and generous horizontal padding of `80px`.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role / source mapping |
|---|---:|---|
| `#DADADA` | 77 | Raw neutral |
| `#000000` | 70 | Label Color / Light / Primary |
| `#1F2028` | 56 | Raw dark neutral |
| `#FFFFFF` | 26 | Background / Surface White / Neutral grey-1 |
| `#242424` | 20 | Grey Normal active |
| `#E8E8E8` | 15 | Raw light neutral |
| `#A2A2A2` | 14 | Grey Lighter |
| `#EDEDED59` | 12 | Translucent light neutral |
| `#313131` | 10 | Grey Normal; container gradient endpoint |
| `#FBBE21` | 10 | Raw yellow accent |
| `#1F2028BF` | 7 | Translucent dark neutral |
| `#36C07E` | 6 | Raw green accent |
| `#050505` | 4 | Grey Dark active; container shadow gradient endpoint |
| `#767677` | 4 | Raw grey |
| `#9747FF` | 4 | Component-set outline stroke |
| `#C67C4E` | 4 | Brown Normal; primary coffee accent |
| `#F3F5F7` | 4 | Raw cool light neutral |
| `#FDFDFF` | 4 | Styleguide header background |
| `#F9F9F9` | 3 | Surface Light; icon and iPhone asset group backgrounds |

Additional semantic colors:
- `#F9F2ED`: Brown Light; warm mockup background.
- `#F6EBE4`: Brown Light hover.
- `#909090`: Grey Light hover.
- `#797979`: Grey Light active.
- `#EDEDED`: Surface White active and Surface Light hover.
- `#D8D8D8`: Surface Normal active.
- `#101010`: Neutral/100; iPhone home indicator.
- `#000D09`: Foundation Dark active.
- `#0C0A1C`: Foundation Dark active.
- `#FF9500`: System Orange / Light.
- `#F2F2F2`: Foundation Neutral grey-4.
- `#05050500`: Transparent black gradient endpoint.
- `#E4E4E440`: Translucent shadow color.

Gradients:
- Container gradient: `#111111` at `0%` to `#313131` at `100%`.
- Container shadow gradient: `#05050500` at `0%` to `#050505` at `24%`.

## Type scale

Ranked by raw usage:

| Size | Family / weight | Usage |
|---:|---|---:|
| `18px` | Urbanist Regular | 37 |
| `16px` | Sora SemiBold | 21 |
| `12px` | Sora Regular | 15 |
| `14px` | Sora Regular | 13 |
| `14px` | Sora SemiBold | 12 |
| `24px` | Urbanist Bold | 12 |
| `16px` | Poppins Light | 7 |
| `18px` | Poppins Light | 7 |
| `32px` | Sora SemiBold | 7 |
| `18px` | Sora Regular | 6 |
| `18px` | Sora SemiBold | 5 |
| `135px` | Inter Black | 4 |
| `48px` | Plus Jakarta Sans Bold | 4 |
| `32px` | Plus Jakarta Sans SemiBold | 4 |
| `8px` | Sora SemiBold | 4 |
| `40px` | Urbanist Bold | 4 |
| `20px` | Urbanist Medium | 4 |
| `24px` | Urbanist Medium | 4 |
| `24px` | Urbanist Regular | 4 |
| `26px` | Urbanist SemiBold | 4 |
| `60px` | Urbanist SemiBold | 4 |

Defined typography token:
- Display xs / Regular: Inter Regular, `24px`, line height `32px`, tracking `0px`.

Hierarchy:
- `135px`: Inter Black
- `60px`: Urbanist SemiBold
- `48px`: Plus Jakarta Sans Bold
- `40px`: Urbanist Bold
- `32px`: Plus Jakarta Sans SemiBold or Sora SemiBold
- `26px`: Urbanist SemiBold
- `24px`: Inter Regular, Urbanist Bold, Urbanist Medium, or Urbanist Regular
- `20px`: Urbanist Medium
- `18px`: Poppins Light, Sora Regular, Sora SemiBold, or Urbanist Regular
- `16px`: Poppins Light or Sora SemiBold
- `14px`: Sora Regular or Sora SemiBold
- `12px`: Sora Regular
- `8px`: Sora SemiBold

## Spacing scale

No spacing variables were defined. Observed spacing values:
- `4px`
- `8px`
- `10px`
- `16px`
- `20px`
- `24px`
- `32px`
- `64px`
- `72px`
- `80px`
- `96px`
- `128px`

Grid:
- 8 columns.
- Section size: `26.88px`.
- Gutter: `16px`.
- Alignment: stretch.

Styleguide header layout:
- Horizontal padding: `80px`.
- Top padding: `64px`.
- Bottom padding: `72px`.
- Header-to-content gap: `96px`.
- Heading-to-resources gap: `64px`.
- Logo-to-title gap: `16px`.
- Section-title-to-arrow and arrow-to-page-title gap: `8px`.

## Radius scale

Observed radii:
- `0px`
- `4px`
- `5px`
- `8px`
- `20px`
- `24px`
- `32px`
- `100px`

Usage:
- Logo: `8px`.
- Default icon control: `8px`.
- Plus control: `8px`.
- Circular minus and plus controls: `20px`.
- Icon and iPhone asset group containers: `24px`.
- Image component set: `5px`.
- Image title group: `4px`.
- Home indicator: `100px`.
- Time frame: `32px`.

## Elevation & effects

- Default icon control shadow: drop shadow `24px`, offset `0px 4px`, color `#E4E4E440`.
- Container gradient: `#111111` at `0%` to `#313131` at `100%`.
- Container shadow gradient: `#05050500` at `0%` to `#050505` at `24%`.
- Screen preview rectangles use drop shadows with blur `60px`; the source provides additional shadow colors outside the allowed palette and they are not specified here.

## Components

Only the following component families are present:

### Icon

- Regular icon: `24px × 24px`, fill `#FFFFFF`.
- Variants:
  - Type: Regular
  - State: Outline
  - Libraries: Arrow - Down 2, Arrow - Left 2, Arrow - Right 2, Arrow - Up 2, Bag, Calling, Discount, Filter, Heart, Home, More Circle, Notification, Search, Star.
- Default icon control:
  - `44px × 44px`
  - Radius `8px`
  - Fill `#FFFFFF`
  - Drop shadow: `24px`, offset `0px 4px`, color `#E4E4E440`
  - Libraries: bean, bike, gps, milk, minuscircle, plus, pluscircle.
- Filled plus control:
  - `32px × 32px`
  - Radius `8px`
  - Fill `#C67C4E`
  - Inner icon: `16px × 16px`, fill `#FFFFFF`.
- Minus circle:
  - `24px × 24px`
  - Radius `20px`
  - Fill `#FFFFFF`
  - Stroke `#F9F2ED`, `1px`.
- Plus circle:
  - `24px × 24px`
  - Radius `20px`
  - Fill `#FFFFFF`
  - Stroke `#F9F2ED`, `1px`.
- Bike and plus controls also appear at `32px × 32px`.
- Bean and milk icons appear at `24px × 24px`.

### Image

- Coffee image family.
- Component size variants:
  - `133px × 200px`
  - `200px × 200px`
- Properties:
  - Property 1: Coffee
  - Property 2: `1`, `2`, `3`, `4`, `5`, or `6`
- Image component-set radius: `5px`.
- Image fill: `#FFFFFF`.

### Iphone

- Component family size: `375px` wide.
- Home Indicator:
  - `375px × 34px`
  - Fill `#FFFFFF`
  - Indicator: `134px × 5px`
  - Indicator radius: `100px`
  - Indicator color: `#101010`.
- Time:
  - `375px × 44px`
  - Fill `#FFFFFF`
  - Time text uses Label Color / Light / Primary: `#000000`.

## Screen patterns

- Cover / Preview:
  - Uses a white or near-white styleguide header.
  - A `12px` brown strip appears at the top.
  - Header content uses `80px` horizontal padding, `64px` top padding, and `72px` bottom padding.
  - Logo, section title, arrow, page title, and link sit in a horizontal header.
  - Large Urbanist SemiBold `60px` headings introduce the section.
- On Mockup:
  - Combines the same styleguide header pattern with a warm brown mockup area using `#F9F2ED`.
- Screen Preview:
  - Displays mobile screen previews above a styleguide header.
  - Screen preview rectangles are `345px × 747px`.
  - Preview background uses Brown Light: `#F9F2ED`.
- Cover:
  - Displays a large coffee shop app cover image at `1200px × 900px`.
  - Uses the same `12px` brown strip and styleguide header pattern.
- Thumbnail:
  - Uses a `1440px × 840px` coffee shop app thumbnail image.
- Asset / Images:
  - Presents the Coffee image family, numbered variants, a large section number, title, progress stripe, and footer attribution.
  - Uses a bottom or section strip in Brown Normal: `#C67C4E`.
- Asset / Icon:
  - Groups icon controls on a light surface using rounded containers.
  - Uses white icon surfaces and brown-filled action controls.
- Asset / iPhone:
  - Presents iPhone system UI assets for the home indicator and time display.

## Notes for implementers

- Prefer the ranked raw colors when choosing defaults; the most-used dark active color is `#242424`, the most-used surface color is `#FFFFFF`, and the primary brown is `#C67C4E`.
- Do not introduce additional spacing or radius values; spacing and radius variables were not defined.
- Preserve the distinction between Brown Normal `#C67C4E`, Brown Light `#F9F2ED`, and Brown Light hover `#F6EBE4`.
- Use `#9747FF` only for component-set outline strokes shown in the asset documentation.
- Keep icon artwork white when placed on Brown Normal controls.
- Use the defined Display xs token only as Inter Regular at `24px` with `32px` line height and `0px` tracking.
- For mobile UI copy, the most frequently observed text styles are Urbanist Regular `18px`, Sora SemiBold `16px`, Sora Regular `12px` and `14px`, and Urbanist Bold `24px`.
- Use the iPhone components at their source widths: `375px`.
- Image assets are source-specific Figma images and should be treated as image content rather than recreated with flat colors.
