---
name: porsche-website-community
source: Porsche website (Community)
kind: design-system-context
---

# porsche - Design System

## Overview

A Porsche website concept centered on editorial automotive storytelling. The source contains desktop MacBook Pro frames and Instagram post compositions, using black or white typography over image-based paper and vehicle backgrounds.

No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, grid styles, or components were found.

## Design language

- High-contrast black-and-white visual language.
- Editorial composition with oversized display typography.
- Image-based backgrounds include a white crinkled paper texture and vehicle imagery.
- Desktop frames use a `1728x1117px` canvas.
- Instagram compositions use a `1080x1350px` canvas.
- Display copy is set in `Sequel Sans HeavyDisp`.
- Supporting copy is set in `Riccione-Regular Regular`.
- Text is positioned directly over image-based compositions rather than within extracted UI components.

## Color palette

| Color | Usage |
|---|---:|
| `#000000` | 13 uses |
| `#FFFFFF` | 8 uses |

## Type scale

| Size | Font | Usage |
|---:|---|---:|
| `89px` | Sequel Sans HeavyDisp | 5 uses; primary heading |
| `37.47px` | Sequel Sans HeavyDisp | Observed in Instagram post headings |
| `23.85px` | Sequel Sans HeavyDisp | 3 uses; secondary heading |
| `16px` | Riccione-Regular Regular | 7 uses; supporting copy |

Observed hierarchy:

- Primary desktop heading: `Sequel Sans HeavyDisp`, `89px`.
- Instagram heading: `Sequel Sans HeavyDisp`, `37.47px`.
- Secondary heading: `Sequel Sans HeavyDisp`, `23.85px`.
- Supporting copy: `Riccione-Regular Regular`, `16px`.

## Spacing scale

_None found in source._

## Radius scale

- An extracted group uses `0/0/0/0px` corner radii.
- No radius tokens or variables were found.

## Elevation & effects

_None found in source._

Image-based textures and vehicle imagery are present, but no local effect styles were extracted.

## Components

_None found in source._

No component families or component geometry were extracted.

## Screen patterns

- **MacBook Pro 16" frames:** `1728x1117px`. Use a white frame with a white crinkled paper texture, a large `89px` display heading, a `16px` supporting text block, a `23.85px` secondary heading, and vehicle imagery. Two main screens use different primary heading copy; the thumbnail repeats the same overall composition.
- **Instagram post 1:** `1080x1350px`. Uses a white frame, white crinkled paper texture, an `89px` display heading, a grouped editorial text area containing a `37.47px` heading and two `16px` paragraphs, plus vehicle imagery.
- **Instagram post 2:** `1080x1350px`. Uses the same editorial structure as Instagram post 1, with heading and supporting copy rendered in `#FFFFFF` over a dark composition.
- **Recurring editorial content:** “The all-new Porsche 911 ------------------Carrera S” appears as a heading, paired with supporting copy beginning “There is still only one car that looks, feels, and performs”. The desktop variant uses `23.85px`; Instagram variants use `37.47px`.

## Notes for implementers

- Use only `#000000` and `#FFFFFF` for extracted palette-based text and surfaces.
- Preserve the contrast between oversized `Sequel Sans HeavyDisp` headings and `Riccione-Regular Regular` supporting copy.
- Treat the white crinkled paper texture and vehicle imagery as image assets, not generated color or effect tokens.
- Reproduce the distinct `1728x1117px` desktop and `1080x1350px` Instagram compositions.
- Do not assume spacing, elevation, motion, grid, or reusable component specifications; none were extracted.
- The source contains no local styles or variables, so typography and color values should remain explicit.
