---
name: temu-ui-screens-community
source: Temu UI Screens (Community) / UIKit
kind: design-system-context
---

# temu - Design System

## Overview

- Source: Figma file `Temu UI Screens (Community)`, page `UIKit`.
- The extraction contains an introductory marketing screen, a before-generation showcase, and an after-generation showcase.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, effect styles, grid styles, or component sets were found.
- The visual direction combines blue promotional headings, dark purple supporting text, large typography, white introductory surfaces, and dark showcase surfaces.

## Design language

- Use Inter for utility, interface, and showcase text.
- Use Manrope for prominent introductory marketing typography.
- Use #4499F8 as the primary accent for introductory headings and the main call-to-action.
- Use #1F1736 for introductory supporting copy.
- Use white text on dark showcase surfaces.
- Intro content is spacious, vertically stacked, and centered within a white canvas.
- Showcase layouts use large dark presentation frames with horizontal groupings of mobile-screen previews and generated UI examples.
- The primary call-to-action is a blue rounded rectangle with centered white text.

## Color palette

Ranked by extracted usage count:

| Color | Usage |
|---|---:|
| #000000 | 26 |
| #0A051C | 10 |
| #F7F7F7 | 6 |
| #FFFFFF | 6 |
| #000001 | 5 |
| #1F1736 | 5 |
| #010101 | 4 |
| #070707 | 4 |
| #4499F8 | 4 |
| #F8F8F8 | 4 |
| #040404 | 3 |
| #D2CED5 | 3 |
| #F8F6F7 | 3 |
| #FCFAFB | 3 |

Usage guidance:

- Primary accent: #4499F8.
- Primary introductory background: #FFFFFF.
- Primary introductory body text: #1F1736.
- Dark and near-black colors are present primarily in extracted unstyled layers and showcase content.
- Light neutral colors include #F7F7F7, #F8F8F8, #F8F6F7, #FCFAFB, and #D2CED5.

## Type scale

### Inter

All listed values are Regular unless noted otherwise.

| Size | Weight | Usage count |
|---:|---|---:|
| 20px | Regular | 7 |
| 19.67px | Regular | 6 |
| 17px | Regular | 3 |
| 16px | Regular | 8 |
| 15px | Regular | 3 |
| 14.67px | Regular | 20 |
| 14.33px | Regular | 7 |
| 14px | Regular | 12 |
| 13.67px | Regular | 6 |
| 13.33px | Regular | 7 |
| 13px | Regular | 3 |
| 12.67px | Regular | 32 |
| 12.33px | Regular | 8 |
| 11.67px | Regular | 3 |
| 11px | Regular | 10 |
| 10.67px | Regular | 4 |
| 10.33px | Regular | 3 |
| 10px | Regular | 4 |
| 9px | Regular | 3 |

Additional explicitly extracted Inter styles:

- 80px Medium: showcase screen titles.
- 40px Regular: showcase section labels.
- 30px Bold: introductory call-to-action label.
- 19px Regular and 20px Regular: extracted mobile-screen text.

### Manrope

- 50px ExtraBold: primary introductory title.
- 40px ExtraBold: introductory section headings.
- 24px SemiBold: introductory supporting copy and capability descriptions; 6 uses in the raw typography extraction.
- 24px SemiBold: hierarchy entry.
- 30px Bold: introductory call-to-action label.

## Spacing scale

No spacing tokens were defined. The following spacing values are observed in extracted layouts:

- 0px
- 10px
- 14px
- 16px
- 20px
- 24px
- 31px
- 40px
- 66px
- 80px
- 84px
- 88px
- 120px
- 160px

Observed layout usage:

- Intro frame padding: 160px on all sides.
- Intro vertical gaps: 88px, 40px, and 24px.
- Showcase frame padding: 160px on all sides.
- Showcase section gaps: 120px and 80px.
- Component container gaps: 20px.
- Introductory button padding: 31px horizontal and 66px vertical values as extracted.
- Generated component padding and gaps: 84px.

## Radius scale

No radius tokens were defined.

Observed radii:

- 1.33px
- 16px
- 26.33px

The 16px radius is used on the introductory `Download Now` button. The 26.33px radius is used on an extracted mobile-screen button.

## Elevation & effects

- No local effect styles were found.
- No elevation tokens were found.
- No motion tokens were found.
- No grid styles were found.
- Extracted showcase frames include strokes, but no reusable stroke or effect token was defined.

## Components

_None found in source._

The extraction contains component-like layer names such as `Button`, `BASIC_COMPONENT`, `FEATURE_COMPONENTS`, and `RESOURCE`, but no Figma component sets or component specifications were found.

## Screen patterns

### Intro

- White, fixed canvas: 1333×2227px.
- 160px outer padding.
- Brand row with a 140×140px image and a large blue Manrope ExtraBold title.
- Vertically stacked explanatory sections with 24px internal gaps.
- Blue Manrope ExtraBold headings at 40px.
- Dark purple Manrope SemiBold supporting text at 24px.
- Blue `Download Now` button with 16px radius and white 30px Manrope Bold label.

### Before generation (Image)

- Dark showcase canvas with 160px outer padding.
- Large white Inter Medium title at 80px.
- A wide visual area containing decorative shapes or image content.
- The source includes a stroke around the showcase frame.

### After generation (Figma design)

- Dark showcase canvas with 160px outer padding.
- Large white Inter Medium title at 80px.
- Two major areas: generated design previews and generated UI components.
- Generated design area presents multiple 375px-wide mobile-screen previews in a horizontal arrangement with 80px gaps.
- Generated UI components are organized into labeled containers, including basic, feature, and resource groupings.
- Component showcase blocks use 720px-wide containers with 84px padding and 84px internal gaps.
- Section labels use white or light-neutral 14px Inter text.

## Notes for implementers

- Treat the extracted typography as unstyled source usage rather than a validated token system.
- Preserve the distinction between Manrope marketing typography and Inter interface/showcase typography.
- Use the listed color values only; do not introduce additional colors.
- Do not assume the named component-like layers are reusable components.
- Preserve the generous 160px presentation padding for the large showcase and intro canvases.
- Use 24px gaps for stacked introductory copy and 80px gaps for major showcase groupings where the layout calls for them.
- Mobile-screen previews are explicitly 375px wide and approximately 809.67px high.
- Image fills are present in the source, but their visual content is represented only by extracted image assets and should not be recreated as invented colors.
