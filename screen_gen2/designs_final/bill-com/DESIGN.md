---
name: bill-collecting-app-community
source: bill collecting app (Community)
kind: design-system-context
---

# bill-com - Design System

## Overview

- Source: Figma file `bill collecting app (Community)`, Page 1.
- The file contains desktop presentation frames with two 390×841px mobile app screens.
- Visual direction: bold purple-and-yellow bill-splitting interface with rounded cards, pill-shaped controls, circular avatars, and strong black shadows.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, grid styles, or component sets were found.

## Design language

- Use a purple, yellow, white, and black palette.
- Favor rounded cards and controls with radii from 20px to 45px.
- Use black drop shadows to create pronounced, playful depth.
- Use Inter Regular for supporting text and Inter Bold for prominent amounts and headings.
- Organize bill information into compact cards, contribution rows, avatar groups, and segmented progress-like controls.
- Use white text on dark-purple surfaces and black text on yellow, white, or light surfaces.

## Color palette

Ranked by observed usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 32 | Primary light surfaces, cards, and text on dark backgrounds |
| `#EECB50` | 11 | Highlight cards and accent surfaces |
| `#000000` | 10 | Primary text and drop shadows |
| `#4E1B53` | 10 | Primary dark-purple cards, bars, and containers |
| `#88158A` | 4 | Secondary purple accents and selected states |

Additional observed fills include image-based avatar fills and unlisted colors; do not treat them as reusable palette tokens.

## Type scale

Typeface: Inter.

| Size | Weight | Observed usage |
|---:|---|---:|
| 10px | Regular | Small labels and metadata; 3 uses |
| 12px | Regular | Compact supporting text; 7 uses |
| 14px | Regular | Secondary labels; 3 uses |
| 15px | Regular | Primary body labels and titles; 11 uses |
| 16px | Bold | Bill amount text |
| 18px | Bold | Section heading such as “Splitting With” |
| 32px | Bold | Large total amount heading |

Observed text examples include `Total Bill`, `Contributors`, `Team Dinner`, `Splitting With`, and `$840.20`.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 20px: small rounded cards.
- 25px: compact cards and controls.
- 30px: primary cards and circular-looking rounded containers.
- 35px: mobile device frame.
- 45px: pill-shaped controls and segmented rows.

## Elevation & effects

- Drop shadows use `#000000`.
- Observed shadow configurations:
  - 5px shadow with offset `0 2px`.
  - 6px shadow with offset `0 2px`.
  - 6px shadow with offset `0 5px`.
- Shadows appear on yellow and purple cards, avatar circles, and selected controls.
- No local effect styles were defined; treat these as observed screen-level effects rather than named tokens.

## Components

_None found in source._

## Screen patterns

- **Desktop presentation:** A 1440×1024px desktop frame contains two 390×841px mobile app mockups.
- **Bill overview screen:** Uses a large yellow rounded card, dark-purple supporting cards, white utility cards, avatar circles, contributor information, and a prominent total amount.
- **Bill splitting screen:** Uses a yellow header card, dark-purple pill-shaped rows, a purple selected control, colored allocation segments, a dark-purple contributor card, and repeated circular avatars.
- **Mobile frame:** 390×841px frame with a 35px radius. The extracted frame includes a dark outer fill, but this is not part of the reusable palette.
- Image-based avatar fills are present throughout the screens and should be treated as content imagery rather than color tokens.

## Notes for implementers

- Use only the documented palette tokens for reusable UI: `#FFFFFF`, `#EECB50`, `#000000`, `#4E1B53`, and `#88158A`.
- Do not promote unlisted extracted fills or gradient colors into design tokens.
- Preserve the rounded, high-contrast visual character: dark-purple containers, yellow emphasis surfaces, white secondary surfaces, and visible black shadows.
- Use Inter Regular for sizes from 10px through 15px unless the design calls for a prominent amount or heading; use Inter Bold at 16px, 18px, or 32px as observed.
- Use 45px radii for pill controls, 25px–30px radii for cards, and 20px radii for smaller rounded elements.
- Keep total amounts visually dominant and pair them with concise labels such as `Total Bill`.
- Use circular avatars in 35px, 40px, and 50px observed sizes when reproducing contributor groups.
- No reusable component specifications were extracted; infer component reuse from the repeated card, pill, avatar, and shadow patterns rather than from named Figma components.
