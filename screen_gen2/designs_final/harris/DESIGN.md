---
name: are-na-design-system-community
source: Are.na Design System (Community)
kind: design-system-context
---

# harris - Design System

## Overview

Are.na design system covering typography, buttons, color, cards, icons, and form fields. The visual language uses monochrome greyscale foundations with purple accents, bold editorial typography, outlined controls, and large card surfaces.

## Design language

- Minimal, monochrome interface foundation.
- Primary text is black or dark grey.
- Controls rely on outlined borders rather than filled backgrounds.
- Purple is used for channel-related emphasis and selected states.
- Typography combines Arial, Helvetica, and Work Sans.
- Interfaces use large square card imagery and generous fixed-size controls.
- Component families available: `Frame 13`, `Frame 16`, and `Frame 18`.

## Color palette

Ranked by raw usage count where available:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 36 | Black, headings, primary text, strong borders |
| `#6A6A6A` | 6 | Form-field placeholder text |
| `#E0DFDF` | 6 | Section divider lines |
| `#585858` | 5 | Dark grey text and icon strokes |
| `#C4C4C4` | 4 | Grey neutral |
| `#C6C6C6` | 4 | Medium grey borders |
| `#CCCCCC` | 4 | Form-field borders |
| `#FFFFFF` | 4 | White backgrounds and controls |
| `#7B61FF` | 3 | Component-set outline accent |
| `#F7F7F7` | 3 | Light grey surfaces |

Named palette tokens:

- Dark Grey: `#585858`
- Medium Grey: `#C6C6C6`
- White: `#FFFFFF`
- Light Grey 2: `#F7F7F7`
- Purple: `#4B3D66`

## Type scale

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| MMDS/Title | Work Sans | 600 | 56px | auto | -1.25px |
| Title 2 | Arial | 700 | 56px | 70px | 0px |
| Caption 2 | Arial | 700 | 24px | 38px | 0px |
| Body Small | Arial | 400 | 26px | 40px | 0px |
| Body Regular | Helvetica | 400 | 32px | 46px | 0px |

Additional demonstrated hierarchy:

- H1: Arial BoldMT, 48px
- H2: Arial BoldMT, 40px
- H3: Arial BoldMT, 32px
- Body Large: Helvetica, 48px
- Caption 1: Arial BoldMT, 28px
- Caption 3: Arial, 24px

## Spacing scale

_None found in source._

Component padding and gaps:

- `Frame 13`: padding `20px 39px 20px 39px`; gap `10px`
- `Frame 16`: padding `15px 20px 15px 20px`; gap `10px`
- `Frame 18`: padding `34px 0px 34px 0px`; gap `10px`

## Radius scale

- `3px`: card metadata containers
- `4px`: `Frame 13` buttons; active `Frame 16` fields
- `5px`: component-set containers
- `8px`: tag-like controls
- `15px`: outlined square icon shapes

## Elevation & effects

- No local effect styles found.
- No local grid styles found.
- No shadows are defined in the extraction.
- Component outlines use solid strokes, commonly `2px`, `3px`, or `4px`.

## Components

### Frame 13 — Button

- Default size: `170px × 78px`
- Connect, Explore, and Sign Up size: `218px × 78px`
- See more mood channels size: `454px × 78px`
- Layout: horizontal
- Padding: `20px 39px 20px 39px`
- Gap: `10px`
- Radius: `4px`
- Text: Arial BoldMT, `28px`
- Variants:
  - `Connect Default`
  - `Connect Hover`
  - `Default`
  - `Explore`
  - `Hover`
  - `Rest State`
  - `Sign Up`
- Default and non-hover borders use Light Grey 1 at `4px`.
- Hover borders use Dark Grey at `4px`.
- Rest State uses `#000000` at `3px`.
- Default button text uses Dark Grey. Explore and Sign Up use Black.

### Frame 16 — Form field

- Size: `738px × 58px`
- Layout: horizontal
- Padding: `15px 20px 15px 20px`
- Gap: `10px`
- Width and height: fixed
- Text: Arial, `24px`
- Text color: `#6A6A6A`
- Default border: `#CCCCCC`, `2px`
- Default fill: `#FFFFFF`
- Variants:
  - `Default`
  - `Variant2`
  - `Variant3`
  - `Variant5`
- Variant 2 and Variant 3 use Light Grey 2 fill.
- Variant 5 uses `#FFFFFF` fill, `3px` active border, and `4px` radius.

### Frame 18 — Channel block

- Size: `730px × 114px`
- Layout: horizontal
- Padding: `34px 0px 34px 0px`
- Gap: `10px`
- Width and height: fixed
- Text: Helvetica, `32px`
- Text color: Purple
- Border: Purple, `4px`
- Variants:
  - `Default`
  - `Variant2`
  - `Variant3`
  - `Variant4`
- Variant labels represent channel names with `1 block`, `2 blocks`, or `203 blocks`.
- Variant 3 uses Green in the source; Green has no allowed hex value, so do not reproduce that color without an available token.

## Screen patterns

- **Cover:** Full white `1920px × 960px` cover with a large dark-grey title and small maker attribution.
- **Typography:** White documentation page presenting text styles from 24px captions through 56px titles, with dark-grey examples and black section headings.
- **Buttons:** Documentation page containing button variants, channel blocks, form-field variants, tags, and basic icon geometry.
- **Colour:** Palette reference page with grayscale and accent swatches, including black, dark grey, medium grey, light grey, white, and purple.
- **Cards:** Large square card surfaces, typically `630px × 630px`, with medium-grey borders and metadata or connect controls.
- **Icons:** Small monochrome icon constructions using black or dark-grey strokes and simple geometric forms.
- **Form fields:** Rest and active states shown side by side using `Frame 16`.
- **Asset and metadata groups:** Square bordered media areas paired with captions such as filenames or attribution metadata.

## Notes for implementers

- Use only the documented color values and named tokens. Do not recreate source colors that have no available allowed token.
- Prefer the named component families `Frame 13`, `Frame 16`, and `Frame 18`; preserve their fixed dimensions, padding, gaps, border widths, and typography.
- Use Arial for buttons and fields, Helvetica for body and channel-block text, and Work Sans only for `MMDS/Title`.
- Preserve the outlined-control visual language. Default controls use white or light-grey fills with visible borders.
- Use `#000000` for primary headings and strong emphasis, `#585858` for dark-grey interface text, and `#6A6A6A` for form placeholders.
- No spacing variables, radius variables, motion tokens, or effect styles were defined. Do not infer a broader scale beyond the documented component values.
- Keep card imagery square and pair it with compact metadata captions using Medium Grey where applicable.
