---
name: rolex-watch-e-commerce-app-community
source: Rolex Watch E-Commerce App (Community)
kind: design-system-context
---

# rolex - Design System

## Overview

- Mobile watch e-commerce experience shown across 360×800px screens.
- Primary flows include product detail, checkout, delivery/address selection, and payment progression.
- Cover presentation includes 430×approximately 931px device screens within a 1600×1200px frame.
- No local variables, text styles, spacing variables, radius variables, motion variables, grid styles, or component families were found.

## Design language

- Premium product presentation combines warm bronze accents with dark slate text and pale neutral surfaces.
- Product detail screens use a large image area above a white lower information panel.
- Primary actions use warm bronze backgrounds with white labels.
- Product color choices are represented by blue and green swatches with bronze selection outlines.
- Checkout screens use pale translucent panels, compact metadata rows, dividers, and full-width action buttons.
- Address selection uses a dimmed overlay with a white bottom sheet and bronze radio indicators.
- Typography is predominantly Open Sans, with SF Pro Text for the device status bar, Inter for one 32px heading treatment, and Roboto for one 48px treatment.

## Color palette

Ranked by recorded raw-color usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 93 | Primary body and overlay-related content |
| `#AA7455` | 41 | Primary bronze accent, CTA backgrounds, selected indicators, swatch outlines |
| `#FFFFFF` | 38 | Primary light surface and action-label color |
| `#282C3F` | 29 | Headings, prices, and dark slate text |
| `#ADADAD` | 29 | Disabled or secondary action background |
| `#D9D9D9` | 29 | Secondary price text |
| `#282C3F1A` | 19 | Dividers and low-opacity slate borders |
| `#736E6E` | 12 | Secondary metadata text |
| `#FF000000` | 9 | Transparent black usage |
| `#282C3F0D` | 8 | Subtle circular icon background |
| `#282C3F1F` | 8 | Subtle circular icon border |
| `#E0E2E9` | 8 | Neutral light interface color |
| `#29679B` | 7 | Blue product swatch and accent text |
| `#F5F5F599` | 6 | Translucent light surface |
| `#FBFBF9` | 6 | Warm off-white surface |
| `#006032` | 5 | Green product swatch |
| `#F2F1F1` | 4 | Screen background |
| `#F5F5F566` | 4 | Translucent panel and bottom-bar surface |
| `#FCFEFC` | 4 | Near-white surface |
| `#00000099` | 3 | Full-screen dimming overlay |

Named color tokens:

- `fl-gray-600`: `#636F73`
- `fl-gray-1000`: `#121515`
- `Screen Components`: `#262C2D`
- `Device BG`: `#121515`
- `Device Surround`: `#3A4245`
- `Side Buttons`: `#121515`
- `Greys/Slate 100`: `#02060C`

Most-used named styles:

- `Greys/Slate 100`: 36 uses
- `Screen Components`: 8 uses
- `fl-gray-1000`: 8 uses
- `fl-gray-600`: 8 uses

## Type scale

| Size | Family and weight | Usage |
|---:|---|---:|
| 48px | Roboto Regular | 3 uses |
| 32px | Inter Bold | 8 uses |
| 32px | Open Sans Bold | 7 uses; primary screen headings |
| 28px | Open Sans Regular | 3 uses |
| 24px | Open Sans Bold | 4 uses; bottom-sheet heading |
| 18px | Open Sans SemiBold | 22 uses; prices and primary action labels |
| 15px | SF Pro Text Semibold | 9 uses; device status-bar time |
| 14px | Open Sans Bold | 5 uses; emphasized metadata |
| 14px | Open Sans Regular | 11 uses; descriptive body text |
| 14px | Open Sans SemiBold | 43 uses; metadata, labels, and secondary actions |

Observed text colors include `#282C3F`, `#000000`, `#736E6E`, `#D9D9D9`, `#FFFFFF`, `#AA7455`, and `#29679B`. Several body and metadata text instances use 70% opacity.

## Spacing scale

_None found in source._

Observed fixed dimensions are not defined as spacing tokens. Repeated layout dimensions include 32px icon containers, 40px swatch containers, 48px action heights, 1px dividers, 20px location icons, and 16px radio controls.

## Radius scale

_None found in source._

Observed corner radii:

- 42.67px: device-screen rectangles
- 30px: product-detail lower panels and address bottom sheets
- 16px: checkout panels
- 11px: selected swatch outlines
- 8px: swatches and primary action buttons

## Elevation & effects

- `Drop Mobile`: drop shadow with 128px offset value `0 0` and color `#80808033`; used 6 times.
- Product-detail lower panels use a drop shadow with a 10px offset value `0 -2`.
- Checkout panels use a drop shadow with a 10px offset value `0 0`.
- Bottom navigation or utility bars use a drop shadow with a 2px offset value `0 1`.
- Shadow color details for the latter effects are not represented in the allowed palette.

## Components

_None found in source._

## Screen patterns

- **Cover / device showcase:** A 1600×1200px cover frame presents multiple approximately 430×931px device screens with 42.67px corner radii and the `Drop Mobile` effect.
- **Product detail:** 360×800px screen with a pale `#F2F1F1` background, centered product image, back and share controls, a white lower panel with 30px top corners, product heading, descriptive text, color swatches, price, and a 184×48px bronze `Buy Now` action.
- **Checkout summary:** 360×800px white screen with a centered 80×115.15px product image, translucent 16px-radius panels, product metadata, dividers, and a 328×48px `Proceed to Pay` action.
- **Address selection:** Product detail remains behind a `#00000099` overlay. A 360×500px white bottom sheet with 30px top corners contains a 24px heading, address options, 16px radio controls, dividers, and a 328×48px bronze `Done` action.
- **Address row:** A compact row combines a location icon, bronze item label, and bronze arrow indicator.
- **Device status bar:** A 360×32px white bar contains a 15px SF Pro Text Semibold time label and signal, Wi-Fi, and battery indicators using `#02060C`.

## Notes for implementers

- Use only the documented palette; prioritize `#AA7455` for primary actions and selected states.
- Use `#282C3F` for headings and prominent prices, with `#000000` or `#736E6E` for body and secondary metadata.
- Keep primary action buttons at 48px height with 8px corner radii. Product-detail actions are 184px wide; checkout and bottom-sheet actions are 328px wide.
- Preserve the distinction between full-width white product-detail panels with 30px top corners and compact checkout panels with 16px corners.
- Use `#00000099` for the address-selection backdrop.
- Use 70% opacity for the documented descriptive and metadata text treatments.
- No reusable component sets or formal spacing/type/radius variables were extracted; implement repeated patterns from the concrete dimensions and styles documented above.
