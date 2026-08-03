---
name: vox-cinema-website-community
source: vox cinema website (Community)
kind: design-system-context
---

# vox - Design System

## Overview

- Source: Figma file `vox cinema website (Community)`, page `Page 1`.
- Screen: `home`, 1980×3300px.
- No local variables, paint styles, text styles, spacing tokens, radius tokens, motion tokens, effect styles, grid styles, or components were found.
- The page uses an image-led cinema homepage structure with navigation, movie listings, booking actions, experience promotions, and a footer.

## Design language

- Cinema-focused, image-led presentation.
- Primary accent usage is blue against white text and large visual areas.
- Headings are prominent and use bold or semibold weights.
- Navigation and booking actions are explicit and highly visible.
- Movie cards pair large poster imagery with white movie titles and a blue `show times` action.
- Footer content uses grouped navigation links, booking selectors, app-download content, and support information.

## Color palette

Ranked by usage in the extracted source:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 25 |
| `#2B78AE` | 15 |
| `#3D7CC9` | 7 |
| `#D9D9D9` | 4 |

Usage guidance from the source:

- `#FFFFFF`: primary text, navigation labels, headings, icons, and light surfaces.
- `#2B78AE`: primary brand accent, active navigation, section headings, booking actions, and selected indicators.
- `#3D7CC9`: secondary blue used for the footer `Book` action and app-download icon treatment.
- `#D9D9D9`: neutral fill used for cinema and movie selection fields and inactive indicators.

## Type scale

| Font family | Weight | Size | Observed usage |
|---|---|---:|---|
| Encode Sans | Bold | 60px | Large section headings such as `WHAT'S ON` and `TRY A VOX EXPERIENCE` |
| Inter | Bold | 40px | Primary headings, movie titles, login and sign-up labels, and footer title content; 11 token uses |
| Inter | Regular | 40px | Footer navigation and informational text; 3 token uses |
| Inter | Regular | 32px | Text hierarchy; 3 token uses |
| Work Sans | SemiBold | 32px | Primary navigation labels; 5 token uses |
| Inter | Bold | 32px | Text hierarchy; 3 token uses |
| Inter | Regular | 24px | Footer `Book` label and selection-field labels; 3 token uses |
| Inter | Medium | 35px | `view all` action |
| Inter | Light | 40px | Language label `EN` |
| Inter | Light | 20px | Movie-card `show times` action; 4 token uses |

## Spacing scale

_None found in source._

## Radius scale

- `0px`: explicitly extracted on the navigation group.

No radius variables were found.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

### Home screen

- Canvas: 1980×3300px.
- Hero area: approximately 1980×829px, using a large image region, carousel chevrons, three pagination indicators, and a `Country` heading.
- Primary navigation: labels `Movies`, `Tickets Offers`, `Promotions`, `Food & Drinks`, and `Ways to watch`, set in Work Sans SemiBold 32px. `Food & Drinks` uses `#2B78AE`; the other labels use `#FFFFFF`.
- Account and utility controls: `Login`, `Sign-up`, search icon, and `EN` language control.
- Booking action: `Book a Ticket` paired with a blue vector mark.
- Movie listing: four poster-led cards:
  - `Gold`
  - `Halftime`
  - `Uncharted`
  - `Against the Ice`
- Movie cards use approximately 288.71×390.01px poster imagery, 40px Inter Bold white titles, and a 123.36×43.96px blue action area containing `show times` in 20px Inter Light.
- Section heading: `WHAT'S ON`, using Encode Sans Bold 60px in `#2B78AE`.
- Experience section: approximately 1980×645px, with `TRY A VOX EXPERIENCE`, two 604×299px image tiles, and blue carousel chevrons.
- Footer: large informational area containing copyright, site links, help and support links, about links, booking controls, mobile-app content, and social/contact content.
- Footer booking controls include two approximately 355px-wide selection fields labeled `select cinema` and `select movie`, using `#D9D9D9` fills.
- Footer includes a `Book` action approximately 164×52px with `#3D7CC9` fill and white 24px Inter Regular text.
- Footer also includes `Download our mobile app` and `Stay in touch` headings in 40px Inter Bold.

## Notes for implementers

- Use only the extracted palette values: `#FFFFFF`, `#2B78AE`, `#3D7CC9`, and `#D9D9D9`.
- Preserve the observed font assignments by role:
  - Encode Sans Bold 60px for major section headings.
  - Work Sans SemiBold 32px for primary navigation.
  - Inter Bold 40px for prominent headings and movie titles.
  - Inter Light 20px for movie-card actions.
  - Inter Regular 24px for compact footer actions and field labels.
- Keep `Food & Drinks` as the active navigation item using `#2B78AE`.
- Keep movie titles white and place them over or alongside poster imagery.
- Use blue action areas for `show times`, with white Inter Light 20px labels.
- Preserve the four-card movie content pattern and the two-tile experience pattern.
- No reusable component families or component geometry were extracted; treat these patterns as screen-level guidance rather than defined component specifications.
- No spacing, effect, motion, grid, or local style tokens were extracted.
