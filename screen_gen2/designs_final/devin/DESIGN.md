---
name: airpods-max-landing-page-ui-community
source: AirPods Max Landing Page UI (Community), Page 1
kind: design-system-context
---

# devin - Design System

## Overview

Product landing-page system for an AirPods Max shopping experience. The source contains a large desktop presentation, an iPhone-sized mobile interface, and Behance/cover presentation frames. The visual system combines oversized display typography, rounded containers, grayscale navigation, product imagery, and prominent purchase actions.

## Design language

- Premium product-presentation aesthetic with large centered headline treatment.
- Strong use of grayscale UI: black, white, gray, and light-gray surfaces.
- Large rounded containers and pill-shaped controls.
- Navigation uses oversized gray display text.
- Product imagery and decorative visualizations are central to the composition.
- Purchase information is emphasized with large black pricing and a prominent rounded basket button.
- Mobile UI uses a dark background, white labels, compact status information, and soft blurred light effects.

## Color palette

Ranked by usage in the extracted source:

| Color | Usage |
|---|---:|
| `#CCCCCC` | 29 |
| `#282828` | 27 |
| `#FFFFFF` | 19 |
| `#000000` | 14 |
| `#777777` | 12 |
| `#D9D9D9` | 4 |
| `#717171` | 3 |

Recommended semantic usage based on observed layers:

- `#FFFFFF`: primary light surfaces, light text, icons, and mobile highlights.
- `#000000`: primary dark text and pricing.
- `#282828`: dark interface surfaces.
- `#777777`: secondary navigation, icons, and muted text.
- `#717171`: tertiary labels and fine strokes.
- `#CCCCCC`: neutral fills and supporting interface geometry.
- `#D9D9D9`: icon bounding-box fills and neutral decorative elements.

## Type scale

Observed typography:

| Size | Family | Weight/style | Observed usage |
|---:|---|---|---|
| 408px | SF Pro Display | Bold | Hero headline |
| 46px | SF Pro Display | Regular | Total label and purchase action |
| 46px | SF Pro Display | Bold | Price |
| 40px | SF Pro Display | Medium | Primary navigation and headings |
| 16px | Poppins | Medium | Mobile status and device labels |
| 10px | Poppins | Light | Mobile metadata labels |
| 8px | Poppins | Regular | Mobile time label |

Implementation guidance:

- Use SF Pro Display for large desktop navigation, hero content, price, and purchase actions.
- Use Poppins for compact mobile status and metadata.
- Preserve the contrast between large display text and small supporting labels.
- The source contains no named local text styles; treat these as observed text specifications rather than reusable Figma tokens.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `3px`: compact mobile status rectangle.
- `17px`: decorative audio-spectrum group.
- `25px`: paired mobile cards.
- `37px`: small circular image frame.
- `50px`: iPhone frame.
- `80px`: desktop add-to-basket button.
- `128px`: large desktop presentation frame.
- `0px`: square or unset corners.

## Elevation & effects

Observed effects:

- Layer blur: `300px`.
- Layer blur: `128px`.
- Layer blur: `222px`.
- Drop shadow: `16px`, offset `0px 1px`.
- Drop shadow: `40px`, offset `0px 24px`.
- Drop shadow: `138px`, offset `0px 0px`.
- Inner shadow: `4px`, offset `-2px -1px`.

No local effect styles were defined. Apply effects selectively to product imagery, presentation frames, and mobile ambient-light decorations.

## Components

_None found in source._

## Screen patterns

- **Desktop product landing page:** `2587x1455px` white rounded presentation frame with a large centered hero headline, oversized top navigation, search and shopping-bag controls, product imagery, total and price content, and a large rounded “Add to basket” action.
- **Mobile product interface:** `428x926px` dark rounded phone frame with blurred white ambient circles, product image, decorative audio spectrum, battery and pairing information, device labels, status icons, and compact media/control elements.
- **Image presentation frame:** `1200x900px` image-only frame.
- **Behance showcase:** `1920x1080px` light-gray presentation frame containing a large image.
- **Cover showcase:** `808x632px` light-gray presentation frame containing a centered image.

## Notes for implementers

- No local variables, paint styles, text styles, spacing styles, radius styles, effect styles, or grid styles were found.
- No component families or component geometry were extracted.
- Use the listed grayscale palette rather than introducing additional colors.
- Preserve the observed desktop dimensions, mobile dimensions, and radius values when recreating the compositions.
- Treat image fills as source artwork assets; the extraction provides image hashes but not their visual content.
- The decorative audio spectrum is a visual group of approximately 56 shapes, not a reusable component specification.
- Keep desktop hierarchy clear: hero headline, navigation, product selection/content, total and price, then purchase action.
- Keep mobile hierarchy compact: product, pairing/device status, battery information, and controls.
