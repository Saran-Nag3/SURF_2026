---
name: aliexpress
source: AliExpress Prototype - CS449 (Community)
kind: design-system-context
---

# aliexpress - Design System

## Overview

- Source: AliExpress Prototype - CS449 (Community)
- Figma page: All pages (2): Main Page, Subpage
- Screens represented:
  - Main Page: desktop storefront with navbar, category filter bar, image content, and dropdown states.
  - Subpage: desktop page with the same navbar and account dropdown states, plus a breadcrumb and large image content.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion styles, effect styles, or grid styles were found.

## Design language

- Desktop canvas size: 1512 × 982px.
- Primary font family: Inter.
- Navigation uses a dark #1A1919 background with white text and icons.
- Active category text uses #D71919; inactive category text uses #FFFFFF.
- Content surfaces and dropdown menus use #FFFFFF.
- Text in dropdown menus uses #323232.
- Visual language is structured around horizontal navigation, compact utility controls, category filtering, image-led content, and rounded dropdown surfaces.

## Color palette

Ranked by observed usage:

| Color | Uses | Observed roles |
|---|---:|---|
| #FFFFFF | 40 | Page backgrounds, dropdown surfaces, navigation text, icons, cart badge |
| #323232 | 32 | Dropdown menu text |
| #000000 | 7 | Cart badge text, breadcrumb text, divider strokes |
| #1A1919 | 5 | Primary navbar, filter bar, selected dropdown control |
| #D71919 | 3 | Active “Super Firsatlar” category |

## Type scale

All typography uses Inter.

| Size | Weight | Observed usage |
|---:|---|---:|
| 32px | SemiBold | Subpage breadcrumb heading |
| 21px | SemiBold | Filter bar categories |
| 20px | SemiBold | Category dropdown items; “Giris yap” |
| 18px | Regular | Account dropdown items |
| 16px | Light | Account dropdown links |
| 16px | Regular | “Kaydol” |
| 15px | Bold | Cart label and cart count |
| 15px | Regular | Utility navigation text |
| 15px | Bold | Cart label and cart count |
| 16px | Light | Account dropdown links |

Observed usage counts from raw typography:

- Inter Light, 16px: 14 uses
- Inter Regular, 18px: 10 uses
- Inter SemiBold, 20px: 8 uses
- Inter SemiBold, 21px: 7 uses
- Inter Bold, 15px: 6 uses
- Inter Regular, 15px: 6 uses

## Spacing scale

_None found in source._

## Radius scale

No radius tokens were found. Observed geometry uses:

- 0px: navbar and several grouped controls
- 30px: dropdown menu surface and cart badge
- 40px: selected dropdown control

## Elevation & effects

- Dropdown menus use a drop shadow with 10.5px blur and offset 2px, 6px.
- No local effect styles were found.
- No motion tokens were found.

## Components

_None found in source._

Observed repeated UI patterns are not registered as component families:

- Navbar
- Search bar
- Download app control
- Currency selector
- User info control
- Cart control
- Filter bar
- Category dropdown
- Account dropdown

## Screen patterns

### Main Page

- Desktop frame: 1512 × 982px with a #FFFFFF fill.
- Navbar: 1512 × 200px group containing:
  - 1512 × 109px dark navigation area
  - 401 × 51px decorative search bar
  - Download app control with QR-code frame and Turkish label
  - Currency selector showing “TR/TRY”
  - User info control showing “Hosgeldiniz! Giris yap/Kayit ol”
  - Cart control showing “Sepet” and count “0”
  - 300 × 200px image-based logo
- Filter bar: 1512 × 73px with dark #1A1919 fill.
- Filter categories use 21px Inter SemiBold. “Super Firsatlar” is active in #D71919; other categories use #FFFFFF.
- Main content includes one 1391 × 385px image and two approximately 700 × 361px images.
- Category dropdown:
  - 236 × 295px outer frame.
  - White 222 × 295px menu with 30px radius and drop shadow.
  - Six category items in 20px Inter SemiBold and #323232.
- Account dropdown:
  - 236 × 593px outer frame.
  - White 222 × 593px menu with 30px radius and drop shadow.
  - Account links use #323232.
  - “Giris yap” uses #FFFFFF on a dark control.
  - Two 190px divider lines use #000000 at 0.5px.

### Subpage

- Desktop frame: 1512 × 982px with a #FFFFFF fill.
- Reuses the Main Page navbar and account dropdown pattern.
- Includes a 710 × 74px breadcrumb rendered in 32px Inter SemiBold with #000000.
- Includes a 1500 × 872.34px image-based content area.

## Notes for implementers

- Use only the extracted colors: #FFFFFF, #323232, #000000, #1A1919, and #D71919.
- Use Inter with the observed sizes and weights; no additional type styles are defined.
- Preserve the dark two-level navigation treatment: a 109px navbar area followed by a 73px filter bar.
- Keep the active filter category in #D71919 and inactive categories in #FFFFFF.
- Dropdown menus are white, rounded to 30px, and elevated with the observed drop shadow.
- Do not assume a reusable component API or additional spacing scale; no component families or spacing tokens were extracted.
- Image assets are present in the source, but their visual contents are not represented by extracted design tokens.
