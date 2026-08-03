---
name: youtube
source: Youtube Mobile App UIKit (Community)
kind: design-system-context
---

# youtube - Design System

## Overview

- Mobile YouTube UI kit with a 360×800px Home screen and a 1920×960px cover page.
- Primary UI themes: white content surfaces, near-black text and navigation, red YouTube accent, light-gray secondary surfaces.
- Typography uses Roboto.
- No local variable collections, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Use a clean, content-first mobile layout with stacked video cards and horizontally scrolling story cards.
- Use white surfaces for video content, navigation, and headers.
- Use red for YouTube branding and primary accent elements.
- Use near-black for primary text and navigation icons; use gray for metadata and secondary labels.
- Navigation is icon-led with compact 12px labels.
- Controls use compact fixed dimensions, centered alignment, pill shapes, and light-gray fills or borders.
- Images and media placeholders use rectangular blocks with 12px corner radii where specified.

## Color palette

Ranked by reported usage where available:

| Color | Usage / role |
|---|---|
| `#0A0A0A` | Primary black; 201 uses in most-used styles |
| `#FFFFFF` | Primary white; 231 raw uses, 114 uses in most-used styles |
| `#C4C4C4` | Media and story placeholder gray; 124 raw uses |
| `#6C6C6C` | Secondary gray; 113 uses in most-used styles |
| `#ECECEC` | Light gray surface or border; 46 uses in most-used styles |
| `#000000` | Unstyled black; 285 raw uses |
| `#030303` | Near-black icon fill; 32 raw uses |
| `#FF0000` | Primary red; 61 uses in most-used styles, 4 raw uses |
| `#00000052` | Black transparency; 30 raw uses |
| `#0A0A0A66` | Near-black transparency; 26 raw uses |
| `#7B61FF` | Purple accent; 13 raw uses |
| `#FFFFFF8F` | White transparency; 7 raw uses; used for 8px image strokes |
| `#00000033` | Black transparency; 6 raw uses |
| `#000000A3` | Black transparency; 6 raw uses |
| `#075FDE` | Blue accent; 5 raw uses |
| `#000000B2` | Black transparency; 4 raw uses |
| `#0D0D0D` | Near-black; 4 raw uses |
| `#FFFFFF52` | White transparency; 4 raw uses |
| `#FFFFFF80` | White transparency; 4 raw uses |
| `#3B3B3B` | Dark gray; 14 uses in most-used styles |
| `#9D9D9D` | Medium gray; 8 uses in most-used styles |
| `#350000` | Dark red; 1 use in most-used styles |
| `#680000` | Dark red; 1 use in most-used styles |
| `#9A0000` | Dark red; 1 use in most-used styles |
| `#CD0000` | Dark red; 1 use in most-used styles |
| `#FF3232` | Light red; 1 use in most-used styles |
| `#FF6565` | Light red; 1 use in most-used styles |
| `#FF9797` | Light red; 1 use in most-used styles |
| `#FFCACA` | Light red; 1 use in most-used styles |

Token aliases:

- Primary Color / White: `#FFFFFF`
- Primary Color / Black: `#0A0A0A`
- Primary Color / Red: `#FF0000`
- Black Dark Color / 1: `#3B3B3B`
- Black Dark Color / 2: `#6C6C6C`
- Black Dark Color / 3: `#9D9D9D`
- Black Dark Color / 4 and 5: `#ECECEC`
- Red Dark Color / 1: `#350000`
- Red Dark Color / 2: `#680000`
- Red Dark Color / 3: `#9A0000`
- Red Dark Color / 4: `#CD0000`
- Red Light Color / 1: `#FF3232`
- Red Light Color / 2: `#FF6565`
- Red Light Color / 3: `#FF9797`
- Red Light Color / 4: `#FFCACA`

## Type scale

Font family: Roboto.

| Size | Weight | Reported usage |
|---:|---|---:|
| 24px | Medium | 3 uses |
| 16px | Bold | 4 uses |
| 16px | Medium | 18 uses |
| 16px | Regular | 16 uses |
| 14px | Medium | 44 uses |
| 14px | Regular | 36 uses |
| 12px | Medium | 62 uses |
| 12px | Regular | 148 uses |
| 10.27px | Medium | 3 uses |
| 10px | Medium | 16 uses |
| 10px | Regular | 14 uses |
| 8px | Medium | 18 uses |
| 8px | Regular | 27 uses |
| 7.7px | Medium | 18 uses |
| 6.42px | Medium | 18 uses |
| 6.42px | Regular | 3 uses |

Observed hierarchy:

- Cover title: Roboto Bold, 64px.
- Cover supporting heading: Roboto Medium, 24px.
- Cover subtitle: Roboto Medium, 20px.
- Video titles: Roboto Medium, 14px.
- Video metadata: Roboto Medium, 12px.
- Bottom navigation labels: Roboto Regular, 12px.
- Small labels: Roboto Regular or Medium, 10px, 8px, 7.7px, or 6.42px.

## Spacing scale

No spacing variables were found.

Observed layout values:

- `0px`: frame padding and gaps
- `1px`: small internal gaps and borders
- `2px`: compact frame padding
- `4px`: small control gaps
- `8px`: common gaps and padding
- `10px`: control padding and gaps
- `12px`: horizontal padding and gaps
- `14px`: section padding and gaps
- `16px`: component padding
- `18px`: cover checklist gap
- `20px`: card bottom padding
- `24px`: navigation and icon dimensions
- `25px`: cover logo-to-title gap
- `34px`: bottom navigation gap
- `80px`: cover section gap
- `107px`: header space-between gap
- `137px`: story-card internal gap

## Radius scale

No radius variables were found.

Observed corner radii:

- `0px`: square icon and vector geometry
- `0.5px`: polygon radius
- `4px`: compact filter control
- `8px`: Component 12
- `12px`: media rectangles and cover image rectangles
- `24px`: pill-shaped Component 4

## Elevation & effects

- Cover logo vector: inner shadow with `168px` blur and `0px 4px` offset.
- Cover logo vector: drop shadow with `36px` blur and `0px 16px` offset.
- Cover shadow rectangles: layer blur `236.99px`, opacity `70%`.
- Borders:
  - Cover image rectangles use `8px` white-transparency strokes.
  - Component 4 uses a `1px` gray stroke.
  - Component 12 has no reported stroke.
- No local effect styles were found.

## Components

Only the extracted component families are listed.

### Component 14

- Size: `32×32px`
- Variant: Property 1 — `OFF` / `ON`

### Component 13

- Size: `38×24px`
- Fill: `#FFFFFF`
- Variant: Property 1 — `OFF` / `ON`

### Component 12

- Size: `132×32px`
- Radius: `8px`
- Fill: `#ECECEC`
- Layout: horizontal
- Padding: `8px 16px 8px 16px`
- Gap: `10px`
- Alignment: center / center
- Sizing: fixed width / fixed height
- Text: Roboto Medium, `14px`
- Variant: Property 1 — `OFF` / `ON`

### History

- Size: `51×19px`
- Fill: `#FFFFFF`
- Text: Roboto Regular, `16px`
- Variant: Property 1 — `Default`

### Camera

- Size: `32×32px`
- Variant: Property 1 — `OFF` / `ON`

### Component 4

- Size: `38×30px`
- Radius: `24px`
- Fill: `#ECECEC`
- Stroke: `#6C6C6C`, `1px`
- Layout: vertical
- Padding: `8px 12px 8px 12px`
- Gap: `10px`
- Alignment: center / center
- Sizing: fixed width / fixed height
- Text: Roboto Regular, `12px`
- Variant: Property 1 — `OFF` / `ON`

### Component 2

- Size: `30×26px`
- Fill: `#FFFFFF`
- Variant: Property 1 — `OFF` / `ON`

### Component 1

- Size: `24×24px`
- Fill: `#FFFFFF`
- Variant: Property 1 — `OFF` / `ON`

### Frame

- Size: `24×24px`
- Fill: `#FFFFFF`
- Variant: Property 1 — `OFF` / `ON`

### Logo

- Size: `44×31.06px`
- Fill: `#FFFFFF`
- Variant: Property 1 — `OFF` / `ON`

### icons

- Size: `24×24px`
- Fill: `#FFFFFF`
- Variants: Property 1 values `1` through `55`, excluding no reported values

## Screen patterns

### Cover

- Canvas: `1920×960px`.
- Includes large YouTube logos, red branding vectors, multiple image cards, and a UI kit introduction.
- Main cover content uses:
  - “UI kit” in Roboto Bold, `64px`, red.
  - “Include The YT Files” in Roboto Medium, `20px`, gray.
  - Checklist items in Roboto Medium, `24px`, dark gray.
- Image cards use approximately `262–263px` widths, `566–596px` heights, `12px` radii, and `8px` white-transparency strokes.
- Cover presentation includes blurred shadow rectangles beneath image cards.

### Home 2

- Mobile canvas: `360×800px`.
- Main content uses a vertical feed of white video cards.
- Standard video card:
  - Width: `360px`
  - Height: `303px`
  - Media area: `360×215px`
  - Bottom content area: `336×54px`
  - Bottom padding: `20px`
  - Media-to-metadata gap: `14px`
- Video metadata layout:
  - Avatar: `36×36px`
  - Avatar-to-text gap: `12px`
  - Text column: `264×54px`
  - Title: Roboto Medium, `14px`
  - Metadata: Roboto Medium, `12px`, gray
  - Overflow action area: `24×24px`
- Stories section:
  - Section height: `327.14px`
  - Section padding: `14px 10px 20px 12px`
  - Story cards: `150×250px`
  - Story card gap: `12px`
  - Six story cards are shown in a horizontal row.
- Header:
  - Height: `48.01px`
  - Padding: `10px 10px 10px 12px`
  - Logo: `90×20px`
  - Header control group: `132×24px`
  - Control gap: `12px`
- Category controls:
  - “All” control: `89×32px`, `4px` radius, `8px` padding, `10px` gap, gray fill.
  - Pill controls: `38×30px`, `56×30px`, and `57×30px`, with `24px` radius.
- Bottom navigation:
  - Height: `56px`
  - Padding: `10px 12px 10px 12px`
  - Gap: `24px`
  - Labels: Roboto Regular, `12px`
  - Navigation destinations shown: Home, Shorts, create action, Subscription, Library.

## Notes for implementers

- Prefer the reported component dimensions exactly; do not normalize fractional values such as `31.06px`, `29.14px`, `48.01px`, or `236.99px`.
- Use `#FFFFFF` for primary surfaces and `#0A0A0A` or `#000000` for primary text according to the component specification.
- Use `#6C6C6C` for secondary metadata and `#ECECEC` for light-gray controls and borders.
- Use `#FF0000` for the primary YouTube accent.
- Preserve the 360px mobile content width and the 56px bottom navigation height.
- Keep video cards stacked vertically and stories horizontally scrollable.
- Use the supplied component families and variants rather than creating unlisted component families.
- Do not infer unavailable spacing, radius, typography, motion, grid, or effect tokens.
