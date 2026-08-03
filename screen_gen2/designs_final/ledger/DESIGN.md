---
name: a-truibute-to-heath-ledger-website-community
source: A truibute to Heath Ledger - Website (Community)
kind: design-system-context
---

# ledger - Design System

## Overview

Editorial tribute website for Heath Ledger. The design uses oversized condensed typography, a cream canvas, red display accents, dark green body text, and image-led biography, filmography, gallery, and awards content.

Source pages: Design, Why so serous, Cover. Extracted screens include the Index, Filmography, Filmography 01–05, and additional gallery/cover-oriented layouts.

No local variables, paint styles, text styles, spacing styles, radius styles, motion variables, effect styles, grid styles, or component families were found.

## Design language

- Use a cream background as the primary canvas.
- Use red for active navigation, major display headings, section titles, and calls to action.
- Use dark green for body copy, inactive navigation, supporting labels, and secondary headings.
- Use Denton XCondensed Test for the expressive editorial display layer.
- Use Inter for readable supporting and body copy.
- Favor very large, tightly editorial typography, including display sizes up to 288px.
- Use image-heavy layouts for filmography, biography, gallery, and awards content.
- Navigation is presented as a horizontal row with large condensed labels.
- Layouts combine fixed-width image tiles, large typographic statements, horizontal rules, and overlay treatments.

## Color palette

Ranked by source usage:

| Color | Usage |
|---|---:|
| `#333B33` | 99 |
| `#D9D9D9` | 90 |
| `#FFFEEF` | 72 |
| `#F20E0E` | 44 |
| `#FFFFFF` | 10 |
| `#000000BF` | 5 |

Usage guidance:

- `#FFFEEF`: primary page and navigation background; also used for text over image-led sections.
- `#333B33`: primary body text, inactive navigation, supporting labels, and secondary headings.
- `#F20E0E`: active navigation, display headings, section titles, and call-to-action backgrounds.
- `#D9D9D9`: neutral placeholder rectangles.
- `#000000BF`: dark overlay covering large filmography layouts.
- `#FFFFFF`: limited white usage.

## Type scale

### Denton XCondensed Test Regular

- 288px: largest hero/display title; 11 uses.
- 160px: oversized section display; 6 uses.
- 60px: prominent section and film titles; 12 uses.
- 50.8px: display size; 3 uses.
- 40px: navigation and large headings; 46 uses.
- 37.8px: call-to-action label; 3 uses.
- 24px: condensed supporting heading; 13 uses.
- 14px: small condensed text; 12 uses.

### Denton XCondensed Test Bold

- 40px: bold navigation and headings; 5 uses.
- 32px: awards titles; 4 uses.
- 11.99px: small bold text; 4 uses.

### Inter Regular

- 18px: 3 uses.
- 16px: 3 uses.
- 13px: 4 uses.

### Inter SemiBold

- 24px: prominent body and introductory copy; 11 uses.
- 16px: supporting awards copy; 5 uses.
- 6px: very small text; 4 uses.

Hierarchy from largest to smallest: 288px, 160px, 60px, 50.8px, 40px, 37.8px, 32px, 24px, 18px, 16px, 14px, 13px, 11.99px, 6px.

## Spacing scale

No spacing tokens were defined. Observed layout values:

- `0px`: frame padding and some frame gaps.
- `6.3px`: gallery call-to-action padding and gap.
- `16px`: navigation horizontal padding.
- `32px`: navigation vertical padding.
- `35px`: awards column gap.
- `36px`: awards text/image group gap.
- `55px`: awards column content gap.
- `68px`: BAFTA award text/content gap.
- `120px`: navigation item gap.
- `136px`: awards column gap.
- `150px`: biography word spacing.

Observed navigation padding is `16px 32px 16px 32px`. A gallery call-to-action uses `6.3px` padding on all sides with a `6.3px` internal gap.

## Radius scale

- `0px`: explicitly observed on an awards content group.
- No other radius values or radius tokens were found.

## Elevation & effects

- `#000000BF` is used as a dark overlay across large filmography layouts.
- No local effect styles were found.
- No shadows, blurs, or other effect values were extracted.

## Components

_None found in source._

## Screen patterns

- **Index / Design:** A tall editorial landing page on a `1440px` wide cream canvas. Includes a large red Heath Ledger title, horizontal navigation, introductory biography copy, film references, oversized biography headings, award cards, and a gallery entry call to action.
- **Filmography:** A `1440px` wide cream page with an `85px` navigation bar and repeated `360px × 530px` film tiles. Neutral `#D9D9D9` rectangles act as placeholders.
- **Filmography 01–05:** Filmography states with the same navigation and tile system. Film images include Casanova, Four Feathers, Mountain, Joker, I'm not there, Knight's Tale, Candy, Order, and 10 Things I Hate. Large `1440px × 2034px` dark overlays are used in the extracted states.
- **Awards area:** Four award columns, each using a `205px × 292px` image beneath red Denton XCondensed Test Bold titles and dark green Inter descriptions.
- **Gallery entry:** A large dark green condensed heading, “Life captured in frames,” followed by decorative imagery and a red call-to-action frame containing cream text.
- **Cover / Why so serous:** These source pages are listed in the extraction, but no additional detailed screen structure was included in the available dump.

## Notes for implementers

- Preserve the contrast hierarchy: red for emphasis and active states, dark green for readable content, cream for the primary canvas.
- Keep navigation horizontal with large condensed labels and a `120px` gap where the desktop pattern is reproduced.
- Use Denton XCondensed Test for all large editorial headings and navigation labels; use Inter for paragraph and supporting copy.
- Do not normalize the oversized display typography; sizes such as `160px` and `288px` are intentional.
- Filmography tiles use a consistent `360px × 530px` geometry.
- Awards image cards use a consistent `205px × 292px` geometry.
- Use `#D9D9D9` only as the extracted neutral placeholder treatment.
- Use `#000000BF` for the extracted filmography overlay treatment.
- No reusable component specifications were extracted; implement repeated patterns from the screen-level geometry and typography above.
