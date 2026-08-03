---
name: universal-design-system-community
source: UNIVERSAL DESIGN SYSTEM (Community)
kind: design-system-context
---

# universal - Design System

## Overview

- Figma source: `UNIVERSAL DESIGN SYSTEM (Community)`
- Pages: 🎁Hero, 🧱components, 💥buttons, 🧨Style guide, ⚙️IOS system.
- The system combines an Inter-based visual style with iOS system UI patterns using SF Pro, including navigation bars, status bars, keyboards, dividers, controls, buttons, fields, tabs, and sliders.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Primary visual language: blue actions, light-blue supporting surfaces, neutral gray fills, white surfaces, and black text.
- The style guide uses Inter for primary display and interface content.
- iOS system components use SF Pro Display and SF Pro Text.
- Controls support multiple semantic states, including selected, deselected, active, disabled, error, open, closed, filled, password, and multiselect states.
- Rounded controls are used alongside sharp variants.
- Background blur is used at `15px`.

## Color palette

Ranked by reported usage where available:

1. `#DADADA` — 789 raw uses.
2. `#000000` — 517 raw uses.
3. `#50555C` — 476 raw uses.
4. `#B0B4BA` — 244 raw uses.
5. `#FFFFFF` — 191 most-used style uses; 112 raw uses.
6. `#191919` — 91 raw uses.
7. `#C6CCD2` — 53 raw uses.
8. `#4F555D` — 22 raw uses.
9. `#0000005C` — 16 raw uses.
10. `#CFD9FF` — 61 most-used style uses; 13 raw uses.

Additional named or component colors:

- Primary blue: `#3E66FB` — 152 most-used style uses.
- iOS accent blue: `#007AFF` — 11 most-used style uses.
- Light blue: `#CFD9FF`.
- White: `#FFFFFF`.
- Black fill: `#0D0C0C`.
- Gray fill: `#838383` — 168 most-used style uses.
- Gray 2: `#4F4F4F`.
- Gray 3: `#828282`.
- Gray 4: no concrete color reported.
- Gray 5: no concrete color reported.
- Gray 1: no concrete color reported.
- Gray outline: `#FFFFFF`.
- Keyboard gray: `#D2D5DBF0`.
- Keyboard light gray: `#EFEFF4F0`.
- Bar light gray: `#F8F8F8EB`.
- Keyboard key fill: `#D2D5DB`.
- Green: `#4CD964` — 6 most-used style uses.
- Green 1: `#219653`.
- Green dot: `#4FBD28` — 25 most-used style uses.
- Red: `#EB5757`.
- Dark keyboard suggestion background: `#04040F`.
- Additional gray fill: `#D4D4D4`.
- iOS white-state gray: `#8F8E94`.

## Type scale

Named typography tokens:

- Body regular: SF Pro Text Regular, `17px`, line height `22px`, weight `400`, tracking `-0.41px`.
- Body semibold: SF Pro Text Semibold, `17px`, line height `22px`, weight `600`, tracking `-0.41px`.
- Large title: SF Pro Display Bold, `34px`, line height `41px`, weight `700`, tracking `0.41px`.

Frequently used raw styles, ranked by reported usage:

- Roboto Regular, `32px` — 185 uses.
- Inter Medium, `17.64px` — 90 uses.
- SF Pro Display Regular, `21px` — 52 uses.
- SF Pro Display Regular, `23px` — 52 uses.
- SF Pro Text Regular, `16px` — 51 uses.
- Inter SemiBold, `69.28px` — 43 uses.
- Inter SemiBold, `41.46px` — 32 uses.
- SF Pro Display Regular, `25px` — 22 uses.
- Inter Regular, `51.3px` — 18 uses.
- SF Pro Display Bold, `10px` — 18 uses.
- SF Pro Text Semibold, `15px` — 17 uses.
- Inter Regular, `20.48px` — 11 uses.
- Inter Regular, `27.3px` — 11 uses.
- Inter Bold, `27.3px` — 10 uses.
- Inter SemiBold, `35.89px` — 10 uses.
- Inter Medium, `27.3px` — 9 uses.
- Inter SemiBold, `46.04px` — 8 uses.
- SF Pro Display Semibold, `12px` — 8 uses.
- SF Pro Text Regular, `12px` — 8 uses.
- SF Pro Text Semibold, `12px` — 7 uses.
- Inter SemiBold, `36.27px` — 7 uses.
- Inter SemiBold, `41.02px` — 6 uses.
- Inter SemiBold, `65.43px` — 6 uses.
- SF Pro Text Bold, `10px` — 6 uses.
- Inter Regular, `30.77px` — 5 uses.
- SF Pro Display Bold, `20px` — 5 uses.
- SF Pro Text Regular, `13px` — 5 uses.
- Inter Medium, `13.65px` — 4 uses.
- Inter Medium, `40.95px` — 4 uses.
- Inter Regular, `35.89px` — 4 uses.
- Inter Regular, `41.02px` — 4 uses.
- Inter SemiBold, `27.3px` — 4 uses.
- Inter SemiBold, `81.9px` — 4 uses.
- Roboto Regular, `9.5px` — 4 uses.
- SF Pro Text Regular, `15px` — 4 uses.

Additional hierarchy sizes: `81.9px`, `69.28px`, `65.43px`, `51.3px`, `46.04px`, `41.46px`, `41.02px`, `40.95px`, `36.27px`, `35.89px`, `34px`, `32px`, `30.77px`, `27.3px`, `25px`, `23px`, `21px`, `20.48px`, `20px`, `17.64px`, `17px`, `16px`, `15px`, `13.65px`, `13px`, `12px`, `10px`, and `9.5px`.

## Spacing scale

_None found in source._

Component-specific spacing values are documented with their components, including:

- Button + icon: horizontal padding `35.28px`, gap `4.41px`.
- Hero Button: horizontal padding `35.28px`, vertical padding `8.82px`, gap `8.82px`.
- Style-guide buttons: horizontal padding `54.6px` or `27.3px`, vertical padding `13.65px`, gap `13.65px`.

## Radius scale

- `27.3px` — style-guide cards and color swatches.
- `13.65px` — large style-guide buttons.
- `6.83px` — compact style-guide buttons.
- `0px` — square or sharp variants.
- `1.71px` — style-guide card stroke width; not a radius token.

## Elevation & effects

- Background Blur `15px`: `background_blur 15px`, reported at 20 uses.
- No elevation or shadow tokens were found.
- A `whiteshadow` button variant exists, but its effect values were not specified.

## Components

Allowed component families:

- **IconButton**
  - Size: `329.14 × 329.14px`.
  - Size variants: `24`, `32`, `48`.

- **Checkbox**
  - Size: `127.5 × 127.5px`.
  - Selection variants: deselected, selected.
  - Color variants: blue, dual, grey.

- **RadioButton**
  - Size: `127.5 × 127.5px`.
  - Selection variants: deselected, selected.
  - Color variants: blue, dual, gray.

- **Dropdown**
  - Size: `831.69 × 181.37px`.
  - Typography: Inter SemiBold `36.27px` and `41.46px`.
  - Open states: close, open.
  - Content variants: flags, icons, multiselect, multiselect2, native, simple.

- **TextField**
  - Size: `820.44 × 179.47px`.
  - Typography: Inter SemiBold `35.89px`, Inter Regular `41.02px`.
  - Content variants: empty, filled, password, password check, text area.
  - Optional variant: optional.
  - Interaction variants: Autofill, active, error, thickborder.

- **Tabs**
  - Size: `1026.06 × 153.91px`.
  - Typography: Inter Regular `51.3px`.
  - Shape variants: pill, square.
  - Position variants: left, middle, right.

- **Button + icon**
  - Size: `158.74 × 52.91px`.
  - Horizontal layout; fixed width and height; centered alignment.
  - Horizontal padding: `35.28px`; gap: `4.41px`.
  - Default fill: `#3E66FB`.
  - Typography: Inter Medium `17.64px`.
  - Color variants: black, blue, disabled, lightblue, white, whiteshadow.
  - Radius variants: `16`, `4`, `8`, pill, sharp.

- **Button**
  - Hero button sizes: `145.19 × 52.91px` and `127.55 × 52.91px`.
  - Horizontal layout; fixed width and height; centered alignment.
  - Padding: `8.82px` vertical and `35.28px` horizontal.
  - Gap: `8.82px`.
  - Default fill: `#3E66FB`.
  - Typography: Inter Medium `17.64px`.
  - Color variants: black, blue, disabled, lightblue, white, whiteshadow.
  - Optional dot variant.
  - Radius variants: `16`, `4`, `8`, pill, sharp.
  - Style-guide button sizes include `214.2 × 68.25px`, `233.2 × 68.25px`, `168.2 × 68.25px`, `211.2 × 68.25px`, and `153.56 × 40.95px`.

- **Range slider**
  - Size: `1269.88 × 260.88px`.
  - Typography: Inter SemiBold `46.04px` and `53.71px`.
  - Variants: v1, v2.

- **Keyboards**
  - Default: `375 × 216px`; landscape: `667 × 162px`.
  - Numpad: `375 × 216px`.
  - Emoji: `375 × 258px`.
  - iPhone Xs default: `375 × 291px`; landscape: `812 × 172px`.
  - iPhone Xs numpad: `375 × 291px`.
  - iPhone Xs emoji: `375 × 333px`.
  - Voice: `375 × 216px`; landscape: `667 × 162px`.
  - Key icons include Brush `40 × 32px`, Mic `38 × 32px`, Smile `62 × 32px`, Delete `42 × 42px`, and Shift `41 × 42px`.
  - Keyboard key rows use `#D2D5DB`; keyboard surfaces use `#FFFFFF`.
  - Suggestions bars: `375 × 50px`, fill `#04040F`.
  - Number pad keys: `375 × 52px`; landscape key rows: `667 × 40px` or `812 × 40px`.

- **Divider**
  - Size: `375 × 1px`.
  - Fill: `#FFFFFF`.
  - Variants include inset values `0pt`, `16pt`, `48pt`, `60pt`, `68pt`, `88pt`, and `118pt`.

- **Bars**
  - Status bars: `375 × 20px`, with action variant `375 × 40px`.
  - iPhone XS status bars: `375 × 44px`.
  - iPhone XS navigation default: `375 × 88px`.
  - iPhone XS navigation large: `375 × 140px`.
  - Standard navigation default: `375 × 64px`.
  - Standard navigation large: `375 × 116px`.
  - Standard bars use `#FFFFFF`; white variants use `#8F8E94`.
  - Status typography uses SF Pro Text Regular or Semibold at `12px`, `14px`, or `15px`.
  - Navigation typography uses Body regular, Body semibold, and Large Title.

- **• iPhone XS**
  - Screen shape: `375 × 812px`, fill `#FFFFFF`.
  - Includes iPhone XS status, navigation, keyboard, home indicator, and divider patterns.

- **• iPhone Xs**
  - Includes portrait and landscape keyboard variants.
  - Home indicator: `375 × 34px`.
  - White home indicator variant uses `#8F8E94`.

## Screen patterns

- **🎁Hero / Thumbnail**
  - Large style-guide canvas containing color cards, typography cards, button examples, and headings.
  - Color cards use `#3E66FB`, `#CFD9FF`, `#838383`, `#0D0C0C`, and `#FFFFFF`.
  - Color cards use `27.3px` rounded corners and a `1.71px` stroke.
  - Typography cards demonstrate Inter Regular, Inter SemiBold, and Inter Bold.
  - Headings include “Colours” and “Buttons”.

- **🧱components / components**
  - A component showcase screen represented by an extracted image.
  - Use the component families and variants defined above.

- **💥buttons / buttons**
  - A button-focused showcase screen represented by an extracted image.
  - Use Button and Button + icon variants, including semantic color and radius variants.

- **🧨Style guide / Colours and Typography**
  - A style-guide screen represented by an extracted image.
  - Demonstrates the color palette, Inter typography, and button treatments.

- **⚙️IOS system / Frame 1**
  - iOS system UI showcase containing headlines, status bars, navigation bars, dividers, keyboards, home indicators, and screen shapes.
  - Use SF Pro Text and SF Pro Display for iOS-oriented patterns.

## Notes for implementers

- Use only the concrete colors listed in this document; do not substitute unlisted colors.
- Prefer `#3E66FB` for the primary design-system blue and `#007AFF` for iOS accent blue.
- Use Inter for general design-system screens and SF Pro for iOS system patterns.
- Preserve the distinction between standard iPhone dimensions and iPhone XS dimensions.
- Implement component states explicitly rather than treating variants as decorative labels.
- Keep button sizing, padding, gaps, and radius variants tied to the specified component family.
- No universal spacing, radius, motion, grid, or elevation token exists beyond the concrete component values and effect style documented here.
