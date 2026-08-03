---
name: service-apartment-app-community
source: SERVICE APARTMENT APP (Community), Page 1
kind: design-system-context
---

# service - Design System

## Overview

- Source: SERVICE APARTMENT APP (Community), Page 1.
- Primary component family: iPhone 13 Pro.
- Two iPhone 13 Pro/Gold screen specifications are present, both 437×882px.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Residential property-search experience centered on homes, rentals, locations, pricing, and listing details.
- Use high-contrast black headings and actions with neutral gray supporting text.
- Yellow is used as a brand accent for selected or emphasized controls and favorite affordances.
- Cards and controls use rounded corners, white surfaces, imagery, and restrained shadows.
- Typography is Inter, with semibold used frequently for navigation, labels, and values; extra-bold used for prominent headings and prices.

## Color palette

Ranked by observed usage:

| Color | Uses | Role |
|---|---:|---|
| `#9A9898` | 23 | Secondary labels, metadata, property attributes, supporting text |
| `#000000` | 22 | Primary text, headings, icons, status information |
| `#0000005E` | 8 | Inactive navigation labels and secondary icon treatments |
| `#343338` | 7 | Property names, descriptive text, and listing values |
| `#FFDA16` | 6 | Favorite accent and brand highlight |
| `#FFFFFF` | 6 | Card surfaces, icon backgrounds, and light text on colored controls |
| `#737373` | 3 | Neutral supporting content |
| `#C4C4C4` | 3 | Dividers and neutral surfaces |

## Type scale

Font family: Inter.

| Size | Weight | Observed use |
|---:|---|---|
| 10px | Regular | Small superscript-like property detail |
| 15px | Medium | Metadata, labels, location, and property attributes; 9 observed uses |
| 15px | SemiBold | Small headings and status labels |
| 15px | Bold | Emphasized status text |
| 16px | SemiBold | Navigation and interface labels; 13 observed uses |
| 16px | ExtraBold | Emphasized action labels |
| 18px | Medium | Supporting promotional or descriptive text |
| 20px | SemiBold | Section headings and property/location values; 5 observed uses |
| 24px | Bold | Listing headings |
| 28px | ExtraBold | Prominent price heading |
| 42px | ExtraBold | Large hero heading |

Observed hierarchy priority: 42px ExtraBold for the largest hero heading, 28px ExtraBold for prominent pricing, 24px Bold for listing headings, 20px SemiBold for section headings, 16px SemiBold for navigation and controls, and 15px Medium for supporting information.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 10px: search and action controls.
- 20px: image cards, card surfaces, and the primary inner phone surface.
- 40px: large inner phone frame.
- Mixed corner radii: 20/0/0/0px, 20/20/0/0px, and 0/0/20/20px for selectively rounded card sections.

## Elevation & effects

Observed drop shadows:

- 4px effect with offset `0 4px` on the phone group.
- 8px effect with offset `0 2px` on listing imagery and card sections.
- 15px effect with offset `0 4px` on a white result card.

No local effect styles were defined.

## Components

### iPhone 13 Pro

Allowed component family: `iPhone 13 Pro`.

Observed variant:

- `iPhone 13 Pro/Gold`
- Size: 437×882px.
- Used for both the property-search screen and the property-detail screen.

Observed component patterns within the family:

- Bottom or secondary navigation with labels such as Favourites, Chat, Profile, and Search.
- Search and filtering controls for region and price range.
- Primary yellow or emphasized action for showing available homes.
- Property result cards with imagery, listing count, rent category, price, location, and navigation arrows.
- Property detail cards with image areas, service-apartment label, location, price, rental period, availability status, and attribute groups.
- Attribute group includes area, bedrooms, and bathroom information.
- Status bar content includes time, LTE, reception, notification, and battery indicators.
- Icon frames are generally 24×24px; the location icon is 16×16px.

## Screen patterns

### Twitter header - 1

A 1600×1200px presentation frame containing a 437×882px iPhone 13 Pro/Gold mockup. The screen presents a home-search experience with navigation, a large “Find a home” heading, descriptive copy, region and price controls, a prominent homes-results action, and a rental result card. Supporting presentation elements include a notification/status area and a neutral lower panel.

### iPhone 13 Pro/Gold property detail

A 437×882px phone screen with a large rounded white inner surface. The layout uses stacked imagery and card sections, followed by property metadata and attributes. It includes a service-apartment label, location, prominent price, per-night qualifier, open-status badge, back navigation, favorite control, and property details for area, bedrooms, and bathroom.

## Notes for implementers

- Use only the listed palette colors; do not introduce additional colors.
- Preserve the Inter family and the observed weight-size pairings.
- Treat 437×882px as the reference phone component size.
- Use 24×24px icon frames unless a smaller location icon is specifically required.
- Apply 10px radii to compact controls and 20px radii to cards and image surfaces; use 40px for the large inner phone frame.
- Keep major property imagery and card sections visually separated with the observed shadow treatments.
- Use `#000000` for primary headings and actions, `#9A9898` or `#0000005E` for secondary content, and `#FFDA16` for favorites or brand emphasis.
- No spacing, motion, grid, or reusable local style tokens were defined; derive layout from the screen compositions rather than assuming an unrecorded scale.
