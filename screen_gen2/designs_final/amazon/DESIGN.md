---
name: amazon-mobile-app-community
source: Amazon Mobile App (Community)
kind: design-system-context
---

# amazon - Design System

## Overview

- Source: Figma file `Amazon Mobile App (Community)`.
- Source page: `All pages (4): Poster, Amazon Workspace, Prototyping, Resources`.
- Platform context: mobile app layouts using a 375px-wide content viewport.
- No local variable collections, text styles, spacing variables, radius variables, or motion variables were found.
- Component families: Back Bar, Black Button, Only Search Bar, SliderBox, Small (Icon) Buttons (two states), Top App Bar, Top App Bar with Cart counter, Top App Bar with brand name, Transparent Button, White Button, status bar, target search.

## Design language

- Bright, white mobile surfaces with black primary text and controls.
- Pistachio green is used for product imagery areas, search actions, and selected navigation surfaces.
- Product layouts use centered content with 16px horizontal gutters and 16px inter-item gaps.
- Typography is predominantly Roboto; Poppins is used for a 20px medium style, and Open Sans appears in the branded app-name bar.
- App chrome uses 375px-wide, 64px-tall bars and 48px touch targets.
- Button shapes are fully rounded with a 100px radius.

## Color palette

Ranked by reported usage where available. Duplicate token aliases resolve to the same concrete color.

| Color | Reported usage | Source role |
|---|---:|---|
| #111111 | 1,508 style uses; 803 raw uses | Primary dark, text, black button |
| #666666 | 950 style uses | Token alias reported as #CDCDCD in the extraction |
| #FFFFFF | 1,017 raw uses; 488 style uses | Primary surface, app bars, white button |
| #DADADA | 504 raw uses | Raw neutral |
| #D9E7CB | 511 style uses; 81 raw uses | Pistachio green surfaces and search action |
| #CDCDCD | 250 style uses; 28 raw uses | Dividers and neutral borders |
| #BBBBBB | 67 raw uses | Light neutral |
| #000000 | 66 raw uses | Black text and surfaces |
| #333333 | 28 raw uses; 6 style uses | Dark neutral and device details |
| #404040 | 14 raw uses | Raw neutral |
| #77B6EA | 56 style uses | Search-bar stroke token |
| #0C5E96 | 11 style uses | Light/Primary/Navy |
| #888888 | 6 style uses | Light/Mono/Dull |
| #2B9FEE | 6 style uses | Light/Secondary/Pacific |
| #C5C9D0E5 | 2 style uses | iOS keyboard background |
| #AEB3BE | 6 style uses | iOS key background dim |
| #629FE0 | 2 style uses | Dark/Primary/Danube |
| #7ABAFF | 4 style uses | Dark/Secondary/Malibu |
| #7C848C | 3 style uses | Dark/Mono/Rolling Stone |
| #91B7DF | 3 style uses | Dark/Primary/Regent |
| #1B1F21 | 5 style uses | Dark/Mono/Shark |
| #AFBAC7 | 1 style use | Dark/Mono/Cadet |
| #737373 | 1 style use | Light/Mono/Dove Gray |
| #C7D0D9 | 4 style uses | Dark/Mono/Ghost |
| #9BA5B0 | 3 style uses | Dark/Mono/Grey Chateau |
| #555B61 | 2 style uses | Dark/Mono/Abbey |
| #EEEEEE | 2 style uses | Light/Mono/Gallery |
| #171B1E | 3 style uses | Ink Dark |
| #000000 | iOS key-label token | iOS key label |
| #FFFFFF | iOS key-background-highlight token | iOS key background highlight |

## Type scale

Use the following source typography, ordered from largest to smallest:

| Size | Family | Weight | Reported usage |
|---:|---|---|---:|
| 23px | Roboto | Regular | 52 |
| 20px | Poppins | Medium | 77 |
| 20px | Roboto | Medium | 87 |
| 16px | Roboto | SemiBold | 233 |
| 16px | Roboto | Regular | 260 |
| 16px | Roboto | Medium | 82 |
| 14px | Roboto | Medium | 917 |
| 14px | Roboto | Regular | 742 |
| 12px | Roboto | Regular | 21 |
| 8px | Roboto | Medium | 15 |

Additional source usage:

- Open Sans Regular, 24px appears in the branded app-name bar.
- Roboto Medium, 20px is used by Black Button, White Button, Transparent Button, and Back Bar text.
- Roboto Medium, 14px is used by status-bar time and common navigation text.

## Spacing scale

No spacing variables were found. Use only these extracted layout values:

- `0px` gaps and padding values occur in multiple bars and content frames.
- `3px` left padding occurs in one Back Bar variant.
- `4px` gap occurs between notification icons.
- `6px` gutter occurs in the iOS 20-column grid.
- `8px` padding occurs in app bars, buttons, status bars, and SliderBox-related layouts.
- `12px` padding occurs inside the target search control.
- `12.65px` iOS grid section value.
- `16px` is the recurring mobile content gutter, component gap, and button horizontal padding.
- `24px` is Black Button, White Button, and Transparent Button horizontal padding.
- `32px` is Product Detail content vertical padding.
- `48px` is the recurring icon/search touch-target size and Back Bar right padding in one variant.
- `61px` is the Price and Discount horizontal gap.
- `64px` is the app-bar and Back Bar height.
- `92px` is the Search Bar internal gap.
- `175px` is the status-bar gap.
- `20` columns are specified for the iOS alphabet grid, with stretch alignment and 6px gutters.

## Radius scale

- `0px`: square corners in most layout frames.
- `1px`: device-side detail corners.
- `5px`: target search and Search Bar.
- `30px` top corners: Product Detail Card.
- `40px`: mobile content frame.
- `58px`: inner device shell.
- `62px`: outer device shell.
- `100px`: Black Button, White Button, and Transparent Button.

## Elevation & effects

- Reusable effect style: `iOS/Background Blur`, background blur `54px`.
- Device-shell rectangles use inner-shadow effects in the source.
- Device-shell outer borders use a linear white gradient stroke in the source; the extraction does not provide an allowed concrete color token for the full gradient definition.
- No elevation variables were found.

## Components

### Back Bar

- Default size: `375x64px`.
- Fill: `#FFFFFF` in the component specification; a Product Detail instance uses `#D9E7CB`.
- Horizontal layout, fixed width and height.
- Text: Roboto Medium, 20px.
- Extracted variants:
  - Padding `8px 48px 8px 3px`, center/center alignment.
  - Padding `8px 16px 8px 16px`, min/center alignment.
- Product Detail instance includes a 48px back-arrow target and a `276x19px` title region.

### Black Button

- Size: `128x40px`.
- Fill: `#111111`.
- Radius: `100px`.
- Padding: `8px 24px 8px 24px`.
- Center/center alignment.
- Text: Roboto Medium, 20px.
- A Product Detail instance is `150x40.97px`.

### White Button

- Size: `128x40px`.
- Fill: `#FFFFFF`.
- Stroke: `#111111`, `2px`.
- Radius: `100px`.
- Padding: `8px 24px 8px 24px`.
- Center/center alignment.
- Text: Roboto Medium, 20px.

### Transparent Button

- Size: `128x40px`.
- Transparent fill.
- Stroke: `#111111`, `2px`.
- Radius: `100px`.
- Padding: `8px 24px 8px 24px`.
- Center/center alignment.
- Text: Roboto Medium, 20px.

### Only Search Bar

- Size: `375x64px`.
- Fill: `#FFFFFF`.
- Horizontal layout with `8px` vertical padding and `0px` horizontal padding.
- Center/center alignment.
- Text: Roboto Regular, 14px.
- Nested Search Bar: `343x48px`, radius `5px`, `#FFFFFF` fill, `#CDCDCD` 1px stroke.
- Search action target: `48x48px`, `#D9E7CB` fill, with `12px` padding.

### SliderBox

- Size: `256x296px`.
- Fill: `#FFFFFF`.
- Variants: Variant1, Variant2, Variant3, Variant4, Variant5.

### Small (Icon) Buttons (two states)

- Base size: `12x12px`.
- Fill: `#FFFFFF`.
- States: Default and Hover.
- Themes: Dark and Light.
- Kinds: Back arrow, Close mini, Close mini outline, Close outline, Close round, Close tag, Close-BIG, Close-BIG-Inverted, Close-small, Close-thick, Double arrow, Meatballs, Single arrow.
- `Close-thick / Light / Default` size: `14x14px`.

### Top App Bar

- Size: `375x64px`.
- Fill: `#FFFFFF`.
- Horizontal layout, `8px` vertical padding, `0px` horizontal padding, `8px` gap.
- Center/center alignment.
- Text: Roboto Regular, 14px.

### Top App Bar with Cart counter

- Size: `375x64px`.
- Fill: `#FFFFFF`.
- Horizontal layout, `8px` vertical padding, `0px` horizontal padding, `8px` gap.
- Center/center alignment.
- Text: Roboto Medium, 8px and Roboto Regular, 14px.

### Top App Bar with brand name

- Size: `375x64px`.
- Fill: `#FFFFFF`.
- Horizontal layout, `8px` vertical padding, `0px` horizontal padding, `8px` gap.
- Center/center alignment.
- Brand text: Open Sans Regular, 24px.
- The source instance uses 48px menu and cart targets with 24px icons.

### status bar

- Component specification size: `375x32px`.
- Source instances use `375x48px`.
- Fill: `#FFFFFF`.
- Padding: `8px 16px 8px 16px` in the specification; source instances use `16px 16px 16px 16px`.
- Gap: `175px`.
- Min/center or space-between/center alignment.
- Text: Roboto Regular, 14px. Time text instances use Roboto Medium, 14px.

### target search

- Size: `48x48px`.
- Radius: `5px`.
- Fill: `#D9E7CB`.

## Screen patterns

- **Poster / Amazon home**
  - A 375px-wide mobile content frame sits inside a larger device mockup.
  - White app surface with top app bar, search bar, banners, category lists, discount/product-color rows, and two-column product cards.
  - Main content uses 16px gutters and 16px gaps.
  - Category cards are `164px` wide and commonly `212px` high; one row uses `228px` height.
  - Product cards are `164x432px`, arranged in `344px`-wide two-column rows.
  - Horizontal separators are `375x8px` and use `#CDCDCD`.

- **Product Detail**
  - White 375px-wide mobile surface with status bar, Top App Bar, Back Bar, large pistachio-green image region, and a rounded Product Detail Card.
  - Image region: `375x494px`, fill `#D9E7CB`.
  - Product Detail Card: `375x912px`, white fill, top radius `30px`.
  - Details region: `343px` wide with `16px` horizontal padding, `32px` vertical padding, and `16px` gaps.
  - Details include price/discount, product name, color, size chart, description, and related products.
  - A Black Button is positioned as an action control.

- **Product list two**
  - White 375px-wide mobile surface with a two-column product grid.
  - Content width: `344px`.
  - Product rows: `344x432px`, with `16px` gaps.
  - Product cards: `164x432px`.

## Notes for implementers

- Preserve the 375px mobile viewport and use 16px horizontal content gutters unless a component specification explicitly differs.
- Use only the listed component families and extracted dimensions.
- Prefer `#111111` for primary dark controls and text, `#FFFFFF` for app surfaces, and `#D9E7CB` for pistachio-green accents.
- Do not treat the `#666666` token as a separate concrete color when applying its extracted mapping to `#CDCDCD`.
- Use 48px targets for menu, cart, back-arrow, and search actions where shown.
- Use Roboto for the main interface typography. Use Poppins Medium at 20px only where the source calls for it, and Open Sans Regular at 24px for the branded app-name treatment.
- No source-defined spacing, radius, motion, or elevation token systems exist beyond the concrete component and layout values documented here.
