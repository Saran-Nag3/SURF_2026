---
name: opay
source: Fintech comapny Opay Website (Community)
kind: design-system-context
---

# opay - Design System

## Overview

- Source: Figma file “Fintech comapny Opay Website (Community)”, Page 1.
- Two desktop screens were extracted:
  - MacBook Pro 16" - 1: 1728×1704px.
  - MacBook Air - 1: 1728×2854px.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion styles, effect styles, grid styles, or component sets were found.
- The interface presents OPay as a fintech product using high-contrast purple, green, white, and black, with large marketing typography, navigation, hero content, service sections, cards, and app-download prompts.

## Design language

- Clean fintech marketing layout with large desktop sections and generous horizontal composition.
- Primary brand colors are deep purple `#200F60`, green `#3DBA95`, secondary purple `#7564B5`, white `#FFFFFF`, and black `#000000`.
- Navigation uses black Inter Medium text at 20px.
- Primary call-to-action uses a deep-purple fill, white text, 20px radius, and 10px internal padding.
- Headings are predominantly large Inter styles at 40px and 48px, with some body or supporting headings at 24px and 25px.
- Repeated three-part horizontal accent bars use `#200F60`, `#3DBA95`, and `#7564B5`.
- Marketing imagery is used prominently in hero, service, debit-card, and app-download sections.
- Text content emphasizes speed, savings, debit cards, transfers, payments, and customer trust.

## Color palette

Ranked by observed usage:

| Color | Observed uses | Usage |
|---|---:|---|
| `#FFFFFF` | 13 | Page background, light surfaces, and light text |
| `#200F60` | 11 | Primary brand color, headings, CTA fill, stars, and accent bars |
| `#000000` | 10 | Navigation and primary text |
| `#7564B5` | 10 | Secondary brand color, accent bars, and large content blocks |
| `#3DBA95` | 8 | Green brand color, header strip, accent bars, and decorative vectors |
| `#D9D9D9` | 6 | Neutral circular element |
| `#000000BA` | 5 | Secondary text and feature descriptions |

## Type scale

No local text styles were found. Observed typography:

### 48px

- Inter Bold — 3 uses.
- Inter Medium — 5 uses.
- Mont HeavyDEMO — 3 uses.
- Used for large headings including “We are Beyond Banking” and customer-trust messaging.

### 40px

- Inter SemiBold — observed in “Download the app and start your journey to stress-free payme”.
- Inter Medium — observed in “Our Services”.

### 25px

- Inter Regular — observed in a hero paragraph marked as a heading.

### 24px

- Inter Regular — 8 uses.
- Inter SemiBold — 5 uses.
- Inter Bold — 3 uses.
- Used for supporting headings and larger descriptive text.

### 20px

- Inter Medium — 9 uses.
- Inter Regular — 6 uses.
- Used for navigation, CTA text, and feature descriptions.

## Spacing scale

No spacing variables were found.

Observed spacing values:

- `10px` horizontal and vertical padding on the “Create Account” CTA.
- `10px` gap inside the “Create Account” CTA frame.

## Radius scale

No radius variables were found.

Observed corner radii:

- `20px` — “Create Account” CTA and repeated feature rectangles.
- `10px` — repeated purple content rectangles.
- `4px` — star shapes.
- `0px` — groups and rectangular elements with square corners.

## Elevation & effects

No local effect styles were found.

Observed drop shadows:

- `4px` shadow with offset `(0, 4)`.
- `9px` shadow with offset `(0, 5)`.
- `20px` shadow with offset `(0, 4)`.

The source does not provide a reusable effect-token naming system.

## Components

_None found in source._

## Screen patterns

### MacBook Pro 16" - 1

- Desktop frame: 1728×1704px with a white page background.
- Top navigation includes:
  - Personal
  - Business
  - Documentation
  - Join US
  - Company
- Primary “Create Account” CTA uses a 170×44px frame, 10px padding, 10px gap, 20px radius, deep-purple fill, and white Inter Medium 20px text.
- Hero area combines a large marketing image, supporting image assets, a 25px paragraph, and the white 48px heading “We are Beyond Banking”.
- A three-part accent bar uses deep purple, green, and secondary purple.
- Three repeated 20px-radius feature surfaces are displayed with imagery and descriptive text.
- Feature messaging includes bank transfers, flexible savings, and instant debit cards.
- Additional decorative stars, vectors, and app-store imagery are present.

### MacBook Air - 1

- Desktop frame: 1728×2854px.
- Multiple large horizontal content sections use pale image-backed or colored backgrounds.
- Includes debit-card messaging, app-download messaging, service content, customer-trust messaging, and repeated service blocks.
- Headings observed include:
  - “Our Services” — Inter Medium, 40px, deep purple.
  - “OPay Debit Cards, Your Passport To The World” — Inter Medium, 48px.
  - “Join 26+ million users who already trust us with their money” — Inter Medium, 48px.
  - “No transaction failure on OPay...” — Inter Medium, 48px, deep purple.
- Repeated purple rectangles are 433×142px with 10px radius.
- App and debit-card sections use large image assets alongside descriptive text.
- A neutral 71×71px ellipse is present.

## Notes for implementers

- Use only the extracted palette values listed in the Color palette section.
- Preserve the observed typography families and weights; do not substitute a different family when implementing the supplied hierarchy.
- Use 48px for major marketing headings, 40px for section headings where observed, 24–25px for supporting headings or hero copy, and 20px for navigation and feature descriptions.
- Implement the primary CTA at 170×44px when matching the extracted desktop layout, with 10px padding, 10px internal gap, 20px radius, deep-purple fill, and white 20px Inter Medium text.
- Recreate the three-color accent bar with equal segments of `#200F60`, `#3DBA95`, and `#7564B5`.
- Treat image fills as required visual assets; the extraction identifies them by source image hashes rather than semantic asset names.
- No reusable component geometry or component-family specification exists in the source. Treat repeated rectangles, feature surfaces, navigation, and CTA patterns as visual patterns rather than registered components.
