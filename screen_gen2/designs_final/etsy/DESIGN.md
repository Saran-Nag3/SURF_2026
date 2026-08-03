---
name: etsy-wireframe-community
source: Etsy Wireframe (Community)
kind: design-system-context
---

# etsy - Design System

## Overview

A grayscale Etsy wireframe design system with Inter typography and sparse, low-fidelity listing UI patterns.

Source screens:
- **Etsy Listing:** 1288×855px frame.
- **Etsy Thumbnail:** 910×812px frame containing repeated listing-card layouts.

No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, grid styles, or component families were found.

## Design language

- Low-fidelity wireframe visual language.
- Predominantly white surfaces with black, gray, and dark-neutral accents.
- Inter is the only extracted typeface.
- Listing cards use thin borders, small corner radii, image placeholders, compact metadata, and small labels.
- Use restrained contrast and compact typography.
- No branded color token was extracted.

## Color palette

Ranked by recorded usage:

| Color | Usage | Observed role |
|---|---:|---|
| `#FFFFFF` | 112 | Primary surfaces, vector strokes, circular controls |
| `#000000` | 40 | Primary text, stars, rules, strokes |
| `#FDFDFD` | 34 | Near-white surface |
| `#FFFEFE` | 29 | Near-white surface |
| `#595959` | 16 | Secondary text and pricing |
| `#D9D9D9` | 13 | Placeholder fills |
| `#00000024` | 8 | Very subtle borders |
| `#00000026` | 8 | Subtle card borders |
| `#3A3836` | 8 | Dark image-placeholder fills |
| `#59595980` | 8 | Muted gray |
| `#5A595AD1` | 8 | Dark muted gray |
| `#CA2424BD` | 8 | Red accent |
| `#DDDDDD` | 5 | Light gray |

## Type scale

Typeface: **Inter**

| Size | Weight/style | Recorded usage |
|---:|---|---:|
| 13px | Regular | 8 |
| 11.58px | Regular | Observed in “Etsy’s Pick” |
| 11px | Regular | 8 |
| 10px | Light | 8 |
| 9px | Medium | 8 |
| 8px | Light | 8 |
| 8px | Regular | 8 |

Observed text examples:
- “Etsy’s Pick”: Inter Regular, 11.58px.
- “Your Listing”: Inter Medium, 9px.
- “$ ------”: Inter Regular, 8px.
- “Expires”: Inter Light, 8px.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- 1px
- 1.5px
- 2px
- 2.5px
- 14px

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

### Etsy Listing

- 1288×855px white frame.
- Includes 56×54–55px light-gray placeholder tiles.
- Includes a 92×27px pill-shaped element with a 14px radius.
- Includes “Etsy’s Pick” text in black.
- Includes black rules and star shapes.
- Includes a large 714×539px light-gray image placeholder.
- Includes white circular controls sized 39×39px and 45×46px.

### Etsy Thumbnail

- 910×812px white frame.
- Repeated listing cards are approximately 146px wide and 236–247px tall.
- Cards use white fills, 2px radii, and `#00000026` 0.5px borders.
- Image placeholders are approximately 140–142px wide and 110–113px tall, with 1px radii and `#3A3836` fills.
- “Your Listing” uses Inter Medium, 9px, in black.
- Price text uses Inter Regular, 8px, in `#595959`.
- “Expires” uses Inter Light, 8px, in `#595959`.
- Dividers use `#00000024` at 0.5px.

## Notes for implementers

- Treat the file as a wireframe reference rather than a complete production design system.
- Use only the extracted Inter sizes and weights.
- Prefer `#FFFFFF` for primary surfaces and `#D9D9D9` or `#3A3836` for placeholder imagery.
- Use `#00000026` for listing-card borders and `#00000024` for subtle internal dividers.
- Keep listing cards compact, with approximately 146px width and 236–247px height where the thumbnail pattern applies.
- No reusable component geometry or component-family specifications were extracted.
