---
name: chanel-allure-perfume-ui-concept-community
source: Chanel Allure Perfume - UI Concept (Community)
kind: design-system-context
---

# chanel - Design System

## Overview

- Source page: Chanel Allure Perfume.
- The concept uses a dark, editorial perfume presentation with white navigation and copy.
- Primary extracted screen: 1856 × 1393px.
- Main content frame: 1488 × 1065px with a 40px radius.
- No local variables, styles, components, or component geometry were found.

## Design language

- Editorial luxury direction with large photographic imagery, dark presentation panels, restrained typography, and minimal navigation.
- Primary navigation is positioned over the experience and includes a menu control, brand wordmark, account actions, cart, and search.
- Supporting content uses concise promotional statements and understated text links with arrow-up-right icons.
- Layout combines fixed-width columns, centered panel content, and large negative space.
- Buttons and links are text-led rather than visibly heavy controls.

## Color palette

| Color | Usage |
|---|---|
| #FFFFFF | Primary text, navigation labels, links, icon fills, and interface elements; 17 raw uses |

- Additional dark, gray, and muted green fills are present in the extracted layout, but no additional colors are included in the palette because only `#FFFFFF` is an allowed palette value.

## Type scale

| Size | Typeface and weight | Observed usage |
|---:|---|---|
| 14px | Nunito Medium | Sign in, Cart, Search; 3 raw uses |
| 14px | Inter ExtraLight | Supporting descriptive copy |
| 14px | Inter Regular | Text links such as “See collection” and “Buy Now” |
| 14px | Inter Light | “Discover” |
| 18px | Inter Bold | “MENU” |
| 20px | Nunito ExtraBold | “Chanel” wordmark |
| 27px | Inter Light | Editorial heading “LE QUART D’HEURE ALCHIMIQUE” |
| 27px | Nunito Bold | Editorial heading “A balance of freshness and sensuality” |

## Spacing scale

Observed spacing and padding values:

- 0px
- 9px
- 10px
- 14px
- 16px
- 20px
- 30px
- 33px
- 36px
- 40px
- 68px
- 69px
- 195px
- 223px
- 478px

Notable layout relationships:

- Main promotional panels use 10px and 33px internal gaps.
- Navigation groups use 20px and 40px gaps.
- Editorial content uses 36px between copy and action.
- Centered dark panels use vertical padding of 195px or 223px and horizontal padding around 68–69px.

## Radius scale

- 40px: main content frame.
- No other radius tokens were found.

## Elevation & effects

- Main content frame: drop shadow with 2px offset on both axes and no extracted blur or spread value.
- Main content frame also has a 20px stroke.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

### Chanel Allure Perfume

- Canvas: 1856 × 1393px.
- Main experience frame: 1488 × 1065px, positioned at the top-left, with a 40px radius.
- Hero content is arranged as three adjacent 496px-wide columns:
  - Left dark editorial panel with centered copy, a descriptive statement, and a “See collection” link.
  - Center image panel sized 496 × 559.36px.
  - Right dark editorial panel with a large heading, supporting paragraph, and “Discover” action.
- A lower content region spans 1328 × 221px and combines a decorative vector area with a right-aligned editorial text block.
- The lower editorial block is 322px wide and includes a heading, supporting copy, and “Buy Now” action.
- Overlay navigation includes:
  - Menu icon and “MENU”.
  - “Chanel” wordmark.
  - “Sign in”, “Cart”, and “Search”.
  - Search includes a magnifying-glass icon.
- Arrow-up-right icons accompany “See collection” and “Buy Now”.

## Notes for implementers

- Preserve the high-contrast editorial composition: dark content areas, white interface text, and prominent imagery.
- Use the observed typefaces and weights exactly; do not substitute a generic type scale without a source-approved equivalent.
- Keep navigation minimal and horizontally spaced, with the menu control separated from account and commerce actions.
- Treat the main frame as a rounded presentation surface with a 40px radius and extracted shadow treatment.
- Maintain the three-column hero structure with two text panels surrounding the central image.
- Use text links and arrow-up-right icons for collection and purchase actions rather than introducing unextracted component styles.
- No reusable component family or local design token collection was extracted.
