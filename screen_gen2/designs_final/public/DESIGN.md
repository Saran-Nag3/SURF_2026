---
name: public-transportation-app-tirana-community
source: Public Transportation App Tirana (Community)
kind: design-system-context
---

# public - Design System

## Overview

- Public transportation app concept for Tirana, Albania.
- The source contains light and dark versions and references 65 screens.
- Visual identity combines deep red, bright red, warm yellow, dark neutrals, white, and soft pink surfaces.
- No local variable collections were found.
- No component families or component geometry were extracted.

## Design language

- Bold, editorial transportation branding with large display typography.
- Primary brand treatment: dark red surfaces and large dark-red “Tirana Bus” wordmarks.
- Supporting visual language: red-to-warm-yellow gradients, soft pink backgrounds, layered circular bus/location graphics, and rounded containers.
- Light layouts use white or pale pink surfaces; dark layouts use dark neutral surfaces with white text.
- Use strong contrast, oversized headings, rounded cards, and transportation/location imagery.
- Both light and dark screen variants are present.

## Color palette

Colors are ranked by raw usage where counts are available.

| Color | Usage | Guidance |
|---|---:|---|
| `#000000` | 80 | Primary black text, dividers, and strokes |
| `#FFFFFF` | 52 | White text, icons, and surfaces; also the canonical value for all white-named aliases |
| `#DADADA` | 40 | Neutral supporting color |
| `#FCE3E3` | 25 | Pale pink background and light surface |
| `#8B232359` | 23 | Translucent dark-red accent |
| `#990000` | 18 | Core brand dark red; wordmarks, icon backgrounds, and numbered layout blocks |
| `#F9F9F9` | 8 | Near-white light surface |
| `#FF4E0040` | 7 | Translucent orange-red decorative treatment |
| `#FF4D4D` | 6 | Bright red icon and accent surface |
| `#181A20` | 4 | Dark neutral |
| `#6C6C6C` | 4 | Gray text or supporting neutral |
| `#C4C4C4` | 4 | Light gray supporting neutral |
| `#F8A0A0` | 4 | Soft red surface |
| `#F55F5F` | 3 | Medium red accent |
| `#F50100` | — | Albania flag red token |
| `#1A1A1A` | — | Albania flag dark token |
| `#111827` | — | Greyscale Grey 900 token |
| `#121826` | — | Dark/Dark 3 token; used for dark layout surfaces |
| `#212121` | — | Greyscale 900 token |
| `#35383F` | — | Dark/Dark 3 named style |
| `#FEC949` | — | Primary 400 warm yellow accent |
| `#FF9500` | — | System orange light token |

- White aliases `Others / White`, `Other Colors / White`, `ALPHA White`, and `Title` resolve to `#FFFFFF`.
- The source contains additional gradient and image treatments; use only the concrete palette values above when recreating them.

## Type scale

| Size | Family | Weight/style | Observed usage |
|---:|---|---|---:|
| 300px | Poppins | SemiBold | Large section labels |
| 200px | Source Sans Pro | Bold | “Tirana” and “Bus” wordmarks |
| 69px | Urbanist | Bold | Numbered layout labels |
| 48px | Urbanist | SemiBold | Layout titles |
| 40px | Roboto Mono | Bold | Large headings |
| 40px | Roboto Mono | Regular | License and explanatory text |
| 36px | Roboto Mono | Medium | Contact heading |
| 32px | Adamina | Regular | Display text |
| 32px | Roboto Mono | Bold | Thumbnail heading |
| 24px | ABeeZee | Italic | Large supporting text |
| 20px | Roboto Mono | Regular | License links and metadata |
| 20px | Roboto Mono | Bold | Supporting display text |
| 20px | PT Sans | Regular | Supporting text |
| 18px | ABeeZee | Regular | Body/supporting text |
| 18px | Urbanist | Bold | H6/bold style |
| 15px | Niramit | Medium | Body text |
| 12px | Inter | Regular | Small text |

- `H6/bold`: Urbanist Bold, 18px, line height 100%, tracking 0px.
- Use `Roboto Mono` for technical, attribution, metadata, and license content.
- Use `Urbanist` for structured layout labels and interface headings.
- Use `Source Sans Pro Bold` for the oversized “Tirana Bus” brand wordmark.

## Spacing scale

No spacing variables were found.

Observed concrete spacing values:

- Auto-layout padding: 8px.
- Auto-layout padding: 13px.
- Auto-layout padding: 24px.
- Auto-layout padding: 48px.
- Auto-layout gaps: 0px, 8px, and 10px.
- Layout title blocks use 48px horizontal padding.
- Number blocks use 24px padding.
- Icon/location elements use 8px padding.

## Radius scale

Observed concrete radii:

- 0px: square corners.
- 15px: nested circular/icon frame corners.
- 20px: cards, icon containers, and thumbnail elements.
- 24px: layout blocks and large rounded surfaces.
- 25px: brand icon containers and thumbnail groups.
- 43px: large decorative blurred surface.
- 100px: circular location/map elements.
- 1000px: pill-like auto-layout elements.

Directional radius patterns:

- Layout blocks use 24px on the outer leading corners and 0px on the adjoining inner corners.
- Layout title blocks use 0px on the leading corners and 24px on the trailing corners.

## Elevation & effects

- Drop shadow: 4px blur, offset `0 4`.
- Layer blur: 100px.
- Background blur: 4px.
- Inner shadow: 4px blur, offset `0 4`.
- Rounded icon groups commonly combine a 150px container with a drop shadow.
- Decorative translucent blurred surfaces use `#FF4E0040` and 100px layer blur.
- Brand and location icons use nested surfaces and repeated drop shadows to create depth.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

- **Preview / Thumbnail:** 1600×960 composition with pale pink background, large dark-red “Tirana Bus” branding, black monospace subtitle, a rounded bus icon, decorative blurred shapes, and metadata labels such as “65 screens” and “light & dark”.
- **License:** Attribution and project-status page using black Roboto Mono text, large “Tirana” and “Bus” brand text, soft red/pink gradient panels, source links, and contact information.
- **Design overview:** Documentation-style layout showing numbered sections from `00` through `04`. Each section pairs a red/warm accent number block with a dark neutral title block and white Urbanist typography.
- **Layout sections:** Repeated 152px-tall horizontal blocks for “App Apperance”, “Post Download Layout”, “Incorrect/Forgoten Password”, “Bank details”, and “Post setup look”.
- **Iconography:** 150px rounded bus icon tiles in dark red or bright red, plus layered circular location/map graphics with white location icons.
- **Screen previews:** Mobile compositions are represented at 375×812px in separate light and dark versions.
- **Documentation labels:** Large Poppins headings identify “Light Version”, “Dark Version”, and “SCREEN PREVIEW”.

## Notes for implementers

- Preserve the red-centered brand identity; use `#990000` as the primary dark-red brand color and `#FF4D4D` for brighter red accents.
- Use `#FFFFFF` for text and icons on dark red or dark neutral surfaces.
- Use `#121826` or the documented dark neutral token for dark layout title blocks.
- Keep layout section blocks horizontal, with a fixed 152px height where the source pattern is used.
- Use rounded corners consistently, especially 20px, 24px, and 25px for cards and icon containers.
- Use oversized typography only for branding and documentation section labels; use Roboto Mono for license, attribution, and technical copy.
- Do not infer reusable components, spacing variables, radius variables, or effect styles beyond the concrete observations in this document.
- Image-based screen previews and bus/location assets are present in the source, but their visual contents are not defined as editable design tokens.
