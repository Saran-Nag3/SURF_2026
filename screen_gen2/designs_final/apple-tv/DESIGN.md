---
name: apple-tv-ui-kit-community
source: Apple TV+ UI Kit (Community)
kind: design-system-context
---

# apple-tv - Design System

## Overview

- Source: Apple TV+ UI Kit (Community).
- Source pages: Cover, Copyright Disclaimer, and APPLE TV+.
- The extraction contains dark and light Apple TV screen presentation patterns, a licensing disclaimer layout, color and typography tokens, and two effect styles.
- No local variable collections, spacing variables, radius variables, motion variables, grid styles, or components were found.

## Design language

- Apple platform-inspired visual language using SF Pro Display for titles and SF Pro Text for body and supporting copy.
- Strong contrast between primary labels and dark or light backgrounds.
- Dark-mode tokens use white labels, translucent white secondary labels, blue tint accents, gray surfaces, and translucent separators.
- Light-mode tokens use black labels, blue tint accents, gray surfaces, and translucent or opaque separators.
- Large editorial headings are paired with generous fixed padding and wide horizontal layouts.
- UI presentation includes dark and light mode screen showcases, breadcrumb navigation, title-and-description headers, and structured body sections.

## Color palette

Ranked by reported usage where counts are available.

### Primary usage

| Token | Value | Usage |
|---|---|---:|
| Dark / Labels / 1.Primary | #FFFFFF | 326 |
| Light / Labels / 1.Primary | #000000 | 187 |
| Dark / Labels / 2.Secondary [60%] | #EBEBF599 | 137 |
| Light / Labels / 2.Secondary [60%] | #3C3C4399 | 97 |
| Light / Tints / Blue | #007AFF | 94 |
| Dark / Tints / Blue | #0A84FF | 91 |
| Light/Basic/Grayed | #979798 | 56 |
| Dark / Separators / Non-Opaque | #646468CC | 36 |
| Light / Separators / Non-Opaque | #3C3C4361 | 27 |
| Dark / Backgrounds / 1.Primary | #000000 | 18 |
| Light / Backgrounds / 1.Primary | #FFFFFF | 18 |
| Dark / Overlays / Thick [92%] | #222222EB | 7 |
| Light / Overlays / Thick [92%] | #F5F5F5EB | 7 |
| Light / Separators / Opaque | #C6C6C8 | 7 |

### Additional tokens

| Token | Value | Usage |
|---|---|---:|
| Captured raw color | #000000 | 14 |
| Dark / Backgrounds / 3.Tretiary | #2C2C2E | 1 |
| Dark / Grays / Gray 5 | #2C2C2E | 4 |
| Dark / Grays / Gray 6 | #1C1C1D | 2 |
| Dark / Grays / Gray 4 | #3A3A3C | 2 |
| Dark / Grays / Gray 1 | #8E8E93 | 2 |
| Light / Grays / Gray 6 | #F2F2F7 | 2 |
| Light / Grays / Gray 1 | #8E8E93 | 2 |
| Default/Gray/Light/2 | #AEAEB2 | 2 |
| Dark/Basic/Grayed | #757575 | 28 |
| Dark / Labels / 4.Quarternary [18%] | #EBEBF52E | 4 |
| Dark / Fills / 3.Tretiary [24%] | #6F72783D | 1 |
| Light / Fills / 3.Tretiary [24%] | #7676801F | 4 |
| Dark/Overlays/Regular [78%] | #313335C7 | 4 |
| White | #FFFFFF | 10 |

Use the semantic token appropriate to the active mode rather than substituting a visually similar color.

## Type scale

### Display and title styles

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Big Titles / Large Title [34] | SF Pro Display | 700 | 34px | 41px | 0.37px |
| Titles / Title 1 [28] | SF Pro Display | 700 | 28px | auto | 0.36px |
| Titles / Title 2 [22] | SF Pro Display | 400 | 22px | 22px | 0.5px |
| Titles / Title 2 [22] • Bold | SF Pro Display | 700 | 22px | 28px | 0.35px |
| Titles / Title 3 [20] | SF Pro Display | 400 | 20px | 24px | 0.38px |
| Titles / Title 3 [20] • Semibold | SF Pro Display | 600 | 20px | 24px | 0.38px |

### Text styles

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Headlines / Headline [17] • Semibold | SF Pro Text | 600 | 17px | 22px | -0.41px |
| Body / Body [17] | SF Pro Text | 400 | 17px | 22px | -0.41px |
| Callouts / Callout [16] | SF Pro Text | 400 | 16px | 21px | -0.32px |
| SubHL / Subheadline [15] | SF Pro Text | 400 | 15px | 20px | -0.24px |
| SubHL / Subheadline [15] • Semibold | SF Pro Text | 600 | 15px | 20px | -0.24px |
| Rubrics / Rubric 2 [13] • Semibold | SF Pro Text | 600 | 13px | 18px | -0.07px |
| Footnotes / Footnote [13] | SF Pro Text | 400 | 13px | 16px | -0.08px |
| Captions / Caption 1 [12] | SF Pro Text | 400 | 12px | 16px | 0px |
| Captions / Caption 1 [12] • Medium | SF Pro Text | 500 | 12px | 16px | 0px |
| Captions / Caption 2 [11] | SF Pro Text | 400 | 11px | 12px | 0.07px |
| Captions / Caption 2 [11] • Semibold | SF Pro Text | 600 | 11px | 13px | 0px |
| Captions / Caption 2 [11] • Semibold Italic | SF Pro Text | 600 italic | 11px | 13px | 0.06px |
| Captions / Caption 3 [10] | SF Pro Text | 500 | 10px | 12px | 0.07px |

### Additional observed text sizes

Raw screen or unstyled text also uses SF Pro Display at 24px, 25px, and 27.5px; SF Pro Text at 9px, 13px, 15px, 16px, and 17px; SF Pro Display Bold at 24px; SF Pro Display Semibold at 17px; SF Pro Text Medium at 11px; SF Pro Text Semibold at 11px and 16px; and SF Pro Text Bold at 9px.

## Spacing scale

_No spacing variables found in source._

Observed layout values:

- Disclaimer frame padding: 60px on all sides.
- Disclaimer section gap: 24px.
- Disclaimer heading-to-divider gap: 18px.
- APPLE TV+ outer frame padding: 80px.
- Dark/light showcase horizontal padding: 100px.
- Dark/light showcase gap: 100px.
- Header padding: 80px.
- Header gap: 100px.
- Body padding: 80px top, 80px horizontal, 100px bottom.
- Body gap: 60px.
- Screen content frame gap: 40px.
- Breadcrumb gap: 12px.

## Radius scale

_No radius variables found in source._

Observed radii:

- Cover decorative rectangle: 107.06px.
- Cover decorative frame: 40px.

## Elevation & effects

- Overlays / Medium Blur: background blur 30px.
- Shadows / Tiny Shadow: drop shadow, 8px blur, offset 0 2px, color #0000001F.
- A screen showcase also contains a source shadow specification with unsupported color data; do not reproduce it as a token.

## Components

_None found in source._

## Screen patterns

### Cover

- Preview frame: 1600×1200px.
- Uses a full-frame image and decorative geometric elements.
- Decorative elements include a small rounded rectangle with a 107.06px radius and a 123×123px rounded frame with a 40px radius.
- The cover includes a 5px white stroke specification.

### Copyright disclaimer

- Disclaimer frame: 936×1265.5px.
- Fixed vertical layout with 60px padding on all sides and 24px section gaps.
- Content width: 816px.
- Structure:
  - “Licensing Agreement” heading.
  - 0.5px divider.
  - Introductory body copy.
  - Section headings for product definition, allowed usage, prohibited usage, and other license terms.
  - Body copy beneath each heading.
- Extracted screen-specific heading styles include SF Pro Display Bold at 44px and 24px. Body copy uses SF Pro Text Regular at 17px.

### APPLE TV+ screen showcase

- Overall showcase frame: 3920×3762px with 80px padding and 80px gap.
- Contains separate Dark Mode and Light Mode presentations.
- Each mode presentation is 3760×1761px with 100px horizontal padding and 100px gap.
- Each mode contains a 3560×1561px “Travel & Places” screen.
- Header:
  - 3560×448px.
  - 80px padding on all sides.
  - 100px gap.
  - Breadcrumb row uses a 12px gap and 20px SF Pro Display Semibold text.
  - Title-and-description area uses a 12px gap.
  - Screen-specific title uses SF Pro Display Bold at 64px.
  - Screen-specific description uses SF Pro Display Regular at 32px.
- Body:
  - 3560×1113px.
  - 80px top and horizontal padding; 100px bottom padding.
  - 60px gap.
  - Content showcase area uses 3400×844px frames with 40px gaps.
- Dark and light variants share the same overall composition and spacing structure; change only the mode-specific content and token application.

## Notes for implementers

- Prefer the named typography tokens over raw, unstyled text values.
- Use SF Pro Display for titles and SF Pro Text for body, captions, and supporting UI copy.
- Apply dark and light label, background, separator, fill, overlay, and tint tokens according to the active mode.
- Preserve the large editorial hierarchy observed in the showcase: 64px screen titles, 32px descriptions, and 24px section labels.
- Preserve the extracted fixed dimensions and padding for showcase and disclaimer compositions when recreating those layouts.
- Do not create component abstractions, spacing variables, radius variables, motion tokens, or grids unless they are added to the source system.
- Do not use colors outside the documented palette.
