---
name: landing-website-section-layouts-community
source: Landing Website Section Layouts (Community)
kind: design-system-context
---

# triumph - Design System

## Overview

A wire-framing design system for landing-page section layouts. The source covers Intro, One Column Section, Two Columns Section, Three Columns Section, Four Columns Section, Testimonial Section, Pricing Section, Slider Section, and Header Section.

No local variable collections, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Wireframe-oriented visual language using white surfaces, light-gray backgrounds, gray placeholder content, black framing, and a translucent purple accent.
- Layouts primarily use vertical stacks with explicit fixed dimensions and gaps.
- Content blocks commonly combine gray title placeholders, light-gray body-line placeholders, white surfaces, and subtle borders.
- Buttons and action elements use white fills or translucent blue fills, with rounded geometry.
- Typography data is sparse. Raw typography uses Chalkboard Chalkboard; screen-level heading instances also use Outfit SemiBold.

## Color palette

Ranked by raw usage:

| Color | Usage | Source roles |
|---|---:|---|
| `#EEEEEE` | 254 | Background, Border / Subtle |
| `#AAAAAA` | 98 | Unstyled placeholder content |
| `#FFFFFF` | 95 | Surface, Primary, Text / Subtle |
| `#000000` | 16 | Intro screen frame background |
| `#C4C4C4` | 11 | Unstyled color |
| `#808080` | 8 | Unstyled color |
| `#BC31EA33` | 8 | Accent |
| `#DADADA` | 6 | Unstyled color |
| `#C2D1D9` | 3 | Unstyled color |

Additional component color:

- `#074EE833`: Frame 14 fill.

Most-used semantic styles:

- Border / Subtle: 222 uses
- Background: 111 uses
- Primary: 58 uses
- Surface: 56 uses
- Text / Subtle: 37 uses
- Accent: 8 uses

## Type scale

Observed raw typography:

| Family | Weight/style | Size |
|---|---|---:|
| Chalkboard Chalkboard | — | 13.16px |
| Chalkboard Chalkboard | — | 8.99px |

Observed screen-level text:

- Outfit SemiBold, 69.48px: Intro heading.
- Outfit SemiBold, 41.57px: Intro headings.
- Outfit SemiBold, 24px: Intro action label.

Typography hierarchy extracted from raw typography:

- 13.16px — Chalkboard Chalkboard
- 8.99px — Chalkboard Chalkboard

## Spacing scale

No spacing variables were found. Observed component and layout values:

- 4.52px
- 6.18px
- 6.47px
- 8.72px
- 10px
- 10.84px
- 12.88px
- 14.45px
- 15.52px
- 16px
- 19.74px
- 20.69px
- 23.58px
- 24.01px
- 26.33px
- 27.28px
- 32px
- 40px
- 48px
- 54.56px
- 64px
- 71.14px
- 72.03px
- 105px

Observed component padding values include `0`, `14.45px`, `15.52px`, `16px`, `19.74px`, `20.69px`, `24.01px`, `26.33px`, `27.28px`, `32px`, and `48px`.

## Radius scale

Observed radii:

- 5px — Pricing table and Pricing table Collapsed
- 6.82px — Single Info #6
- 7.5px — Single Info Box
- 64.67px — Frame 14
- 135.51px — Intro decorative action shape
- 152.18px — Intro “Open Next page” action
- 200px — Single Info #4 action shape

## Elevation & effects

- No local effect styles were found.
- No elevation or shadow tokens were found.
- Intro includes an image fill with 40% opacity.
- Borders use Text / Subtle or Border / Subtle strokes at the component-specific widths documented below.
- No motion tokens were found.

## Components

Only the following component families are present.

### Frame 14

- Size: `206px × 44.22px`
- Layout: vertical
- Padding: `15.52px 20.69px 15.52px 20.69px`
- Gap: `6.47px`
- Sizing: fixed width, fixed height
- Radius: `64.67px`
- Fill: `#074EE833`
- Stroke: Primary, `1.94px`

### Single Info #1

- Present in the source component families.
- No direct standalone component specification was extracted.

### Single Info #2

- Size: `315.8px × 143.4px`
- Layout: vertical
- Padding: `0`
- Gap: `16px`
- Sizing: fixed width, fixed height
- Fill: `#FFFFFF`

### Single Info #3

- Size: `302px × 191.02px`
- Layout: vertical
- Padding: `0`
- Gap: `16px`
- Sizing: fixed width, fixed height
- Fill: `#FFFFFF`

### Single Info #4

- Size: `481.28px × 300.22px`
- Layout: vertical
- Padding: `0`
- Gap: `32px`
- Sizing: fixed width, fixed height
- A related screen instance uses a `481.28px × 50.66px` gray title placeholder, a `360.26px × 134.9px` body-placeholder frame with `16px` gap, and a `141.06px × 50.66px` Primary action shape with `200px` radius.

### Single Info #6

Two Columns Section variant:

- Size: `255.45px × 268.69px`
- Layout: vertical
- Padding: `54.56px 27.28px 54.56px 27.28px`
- Gap: `6.18px`
- Sizing: fixed width, fixed height
- Radius: `6.82px`
- Fill: `#FFFFFF`
- Stroke: Text / Subtle, `2.05px`

Testimonial Section variants:

- `310px × 217.4px`
  - Padding: `32px 24px 32px 24px`
  - Gap: `6.18px`
  - Alignment: center/min
  - Radius: `6.82px`
  - Fill: `#FFFFFF`
  - Stroke: Text / Subtle, `2.05px`
- `266.92px × 272.84px`
  - Padding: `48px`
  - Gap: `6.18px`
  - Alignment: center/center
  - Radius: `6.82px`
  - Fill: `#FFFFFF`
  - Stroke: Text / Subtle, `2.05px`
- `266.92px × 314.65px`
  - Padding: `32px 48px 32px 48px`
  - Gap: `6.18px`
  - Alignment: center/center
  - Radius: `6.82px`
  - Fill: `#FFFFFF`
  - Stroke: Text / Subtle, `2.05px`

### Single Info Box

- Size: `291.89px × 280.47px`
- Layout: vertical
- Padding: `24.01px`
- Gap: `72.03px`
- Sizing: fixed width, fixed height
- Radius: `7.5px`
- Stroke: Text / Subtle, `2.25px`

### Pricing table Collapsed

- Size: `299px × 64.7px`
- Layout: horizontal
- Padding: `16px`
- Gap: `16px`
- Alignment: space-between/center
- Sizing: fixed width, fixed height
- Radius: `5px`
- Fill: `#FFFFFF`
- Stroke: Text / Subtle, `1.68px`

### Pricing table

- Size: `255.02px × 269.19px`
- Layout: vertical
- Padding: `26.33px 19.74px 26.33px 19.74px`
- Gap: `16px`
- Alignment: center/min
- Sizing: fixed width, fixed height
- Radius: `5px`
- Fill: `#FFFFFF`
- Stroke: Text / Subtle, `1.68px`
- Text: Chalkboard Chalkboard, `13.16px`

## Screen patterns

- **Intro:** A `1440px × 1024px` black-framed introductory screen with a partially opaque image area, white section-layout previews, large white headings, and a rounded “Open Next page” action.
- **One Column Section:** A purple-accented section containing white `1280px × 720px` layout frames. Patterns place an image placeholder and a centered information/decorative block either side-by-side or vertically.
- **Two Columns Section:** White section frames use a large image placeholder paired with either a single information block or stacked `Single Info #2` / `Single Info #3` blocks. A two-column pattern also combines a large information block with two smaller information blocks.
- **Three Columns Section:** Included as a source page; no additional extracted screen specification is present in the supplied data.
- **Four Columns Section:** Included as a source page; no additional extracted screen specification is present in the supplied data.
- **Testimonial Section:** Uses centered white `Single Info #6` cards with subtle borders and multiple padding/height variants.
- **Pricing Section:** Uses vertical `Pricing table` cards and horizontal `Pricing table Collapsed` rows.
- **Slider Section:** Included as a source page; no additional extracted screen specification is present in the supplied data.
- **Header Section:** Included as a source page; no additional extracted screen specification is present in the supplied data.

## Notes for implementers

- Use only the documented colors; prioritize `#EEEEEE` for background and subtle borders, `#FFFFFF` for surfaces and primary elements, and `#AAAAAA` for placeholder content.
- Preserve the fixed dimensions, explicit gaps, padding, alignment, and border widths of the selected component variant.
- Most extracted component layouts are fixed width and fixed height; do not infer responsive behavior from the source.
- Use the exact component family names when selecting or describing components.
- Do not introduce local variables, typography styles, spacing tokens, radius tokens, shadows, or motion behavior that are not present in the source.
- The source contains both Chalkboard Chalkboard typography in extracted component data and Outfit SemiBold typography in the Intro screen; keep these usages distinct.
