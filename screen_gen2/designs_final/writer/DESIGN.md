---
name: writer-app-community
source: Writer app (Community)
kind: design-system-context
---

# writer - Design System

## Overview

A writing-focused community app with a playful editorial identity. The interface uses compact mobile screens at 390×844px, a white base, rounded screen containers, poetry-oriented content cards, profile and community views, messaging, and content publishing flows. The welcome screen is a 1920×960px cover layout.

## Design language

- **Brand voice:** Creative, literary, friendly, and community-oriented.
- **Display identity:** Pompiere is used for the Yepty wordmark and large welcome branding.
- **Interface typography:** Poppins is the primary UI typeface, with Regular, Light, Medium, and Bold weights.
- **Layout:** Mobile-first, white surfaces, thin dividers, compact content blocks, circular avatars, and bottom footer navigation.
- **Content presentation:** Poetry and writing content appears in image-like cards with white text over muted or decorative backgrounds.
- **Accent:** Blue is used for selected controls and action icons.
- **Decorative treatment:** The welcome cover and selected content areas use gradients, but their source colors are not part of the allowed palette.

## Color palette

Ranked by observed usage:

| Color | Usage count | Role |
|---|---:|---|
| `#FFFFFF` | 96 | Primary surface, light text, transparent icon backing |
| `#D9D9D9` | 63 | Placeholder avatars, image and content placeholders |
| `#000000` | 60 | Primary text and dark UI elements |
| `#231F2099` | 36 | Secondary icon and control color |
| `#231F20B2` | 20 | Secondary icon color |
| `#00000080` | 18 | Muted metadata and divider strokes |
| `#231F20CC` | 12 | Dark icon color |
| `#516DFF` | 12 | Blue accent and selected actions |
| `#00000066` | 10 | Translucent black |
| `#231F20` | 9 | Dark neutral |
| `#00000033` | 8 | Light black overlay |
| `#0000004D` | 7 | Drag handle and translucent divider |
| `#000000B2` | 6 | Strong muted black |
| `#0378FFD9` | 6 | Blue accent variant |
| `#0000008C` | 5 | Translucent black |
| `#D9D9D933` | 5 | Very light placeholder/content surface |
| `#D9D9D94D` | 5 | Translucent placeholder surface |
| `#00000099` | 4 | Translucent black |
| `#0076FFD9` | 4 | Blue accent variant |
| `#F1F1F1` | 4 | Input and form surface |

## Type scale

### Pompiere

| Size | Weight | Usage count | Use |
|---:|---|---:|---|
| 50px | Regular | 7 | Welcome brand heading |
| 25px | Regular | 6 | App wordmark and compact brand heading |

### Poppins

| Size | Weight | Usage count | Use |
|---:|---|---:|---|
| 20px | Medium | 5 | Prominent numeric or interface text |
| 20px | Bold | 3 | Profile metrics |
| 15px | Regular | 11 | Section labels and standard interface text |
| 13px | Regular | 12 | Message metadata |
| 12px | Regular | 23 | Card titles and compact labels |
| 12px | Medium | 17 | Names and emphasized compact text |
| 12px | Light | 6 | Descriptive copy |
| 10px | Regular | 16 | Compact story labels |
| 10px | Light | 12 | Small supporting copy |

### Other observed text

- Inter Medium, 17px: publishing title placeholder.
- Inter Medium, 13px: publishing body placeholder.

## Spacing scale

_None found in source._

## Radius scale

Observed geometric radii:

- 11px: mobile screen frames and publishing title field.
- 5px: publishing content fields.
- 0px: posts group corners.

No radius variables or local radius styles were found.

## Elevation & effects

_None found in source._

## Components

_None found in source._

No component families, component sets, or component geometry were extracted. Repeated UI patterns are present visually but are not defined as reusable components in the source.

## Screen patterns

- **Welcome cover:** 1920×960px composition with decorative phone artwork, large Pompiere brand wordmark, and a Poppins tagline reading “A PLACE FOR WRITERS.”
- **Home page:** 390×844px white mobile screen with Yepty wordmark, search and add actions, a 205px translucent blue header area, footer navigation, and a vertically scrolling feed of writing posts.
- **Community:** 390×844px screen with shared header treatment and a masonry-like arrangement of writing cards using gray placeholders, white titles, and small supporting descriptions.
- **Profile:** 390×844px screen with avatar, profile metadata, biography, metrics, and a four-card writing grid.
- **Post creation:** 390×844px publishing flow with title and body fields, color and wallpaper selectors, rounded light-gray input surfaces, and a blue action control.
- **Messages:** 390×844px screen with a header, story row, and repeated 353×50px message entries. Each entry contains a 50px circular avatar, Poppins name and status text, and a video action icon.
- **VC:** 390×844px screen with Yepty header, divider, two large decorative gradient areas, and two 90px circular placeholders.

## Notes for implementers

- Use only the documented palette values. Colors visible in the raw extraction but outside the allowed palette are not included as reusable tokens.
- Treat `#FFFFFF` and `#000000` as the primary surface and text colors.
- Use `#D9D9D9` for avatar and media placeholders.
- Use `#516DFF` as the primary blue accent where an action or selected state is needed.
- Preserve translucent colors as distinct values; do not replace them with opaque equivalents.
- Use Pompiere for the Yepty brand mark and welcome display text.
- Use Poppins for interface text, with Light for supporting copy and Medium or Bold for emphasis.
- Maintain the 390×844px mobile frame pattern and 11px screen radius where reproducing the mobile screens.
- Do not assume spacing, elevation, motion, or reusable component tokens; none were defined in the source.
