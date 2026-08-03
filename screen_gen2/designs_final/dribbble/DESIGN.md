---
name: cinema-app-dribbble-shot-community
source: Cinema App - Dribbble Shot 🏀 (Community)
kind: design-system-context
---

# dribbble - Design System

## Overview

Cinema streaming app design system extracted from the Cover and Screens pages. The primary UI is a dark, mobile-first movie detail experience at 375×812px, with rounded content panels, poster imagery, rating information, metadata, cast and genre tags, descriptions, recommendations, and prominent action buttons.

## Design language

- Dark cinematic interface built around deep purple backgrounds and elevated purple panels.
- White typography provides primary contrast; muted white and pink-lilac tones support secondary content and tags.
- Orange is used for ratings and star indicators.
- Large rounded panels and pill-like tags create a soft, approachable visual style.
- Hero imagery is overlaid with dark gradients to preserve text legibility.
- Decorative translucent surfaces use `#FFFFFF2B` with 4px background blur.
- The Cover page uses a large promotional lockup with white “Dribbble Shot” typography.
- Screen content includes Russian-language labels and movie metadata, with some English labels such as “Watch movie” and “IMDb”.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 508 | Primary text, icons, buttons, ratings metadata |
| `#F79E44` | 376 | Ratings and star indicators |
| `#ECBBDA` | 117 | Tag text, secondary actions, accent labels |
| `#36274B` | 95 | Tag and chip backgrounds |
| `#00000080` | 50 | Translucent black overlay |
| `#210F37` | 45 | Primary content panels |
| `#200F37` | 34 | Secondary panel/background surface |
| `#444F61` | 32 | Source color present in extraction |
| `#FFFFFF2B` | 29 | Translucent controls and blurred surfaces |
| `#6644B8` | 24 | Primary purple action and promotional surfaces |
| `#815325` | 22 | Source color present in extraction |
| `#E15062` | 22 | Source color present in extraction |
| `#BCB7C3` | 21 | Muted metadata and vector details |
| `#17082A` | 13 | Mobile page background and hero overlay |
| `#FF8FC6` | 10 | Promotional action button |

Additional color token:

- `#000000` — black token; 1 most-used-style occurrence.

## Type scale

No local text styles were defined. Raw typography uses SF Pro Display and SF Pro Text.

| Size | Family and weight | Usage |
|---:|---|---:|
| 38px | SF Pro Display Bold | Hero movie heading |
| 32px | SF Pro Display Bold | Large heading |
| 27px | SF Pro Display Semibold | Section heading |
| 26px | SF Pro Display Semibold | Promotional heading |
| 23px | SF Pro Display Semibold | Section headings |
| 23px | SF Pro Display Regular | Large supporting text |
| 21px | SF Pro Display Semibold | Rating value |
| 20px | SF Pro Display Semibold | Buttons and labels |
| 20px | SF Pro Display Medium | Secondary action |
| 20px | SF Pro Display Regular | Metadata and supporting text |
| 18px | SF Pro Display Bold | Bold display text |
| 18px | SF Pro Text Bold | Bold text |
| 17px | SF Pro Text Bold | Rating-provider values |
| 15px | SF Pro Display Semibold | Tags and compact labels |
| 15px | SF Pro Text Semibold | Compact text |
| 14px | SF Pro Display Semibold | Small tags |

Most-used raw styles:

- SF Pro Display Semibold, 15px — 88 uses
- SF Pro Display Regular, 20px — 82 uses
- SF Pro Display Semibold, 14px — 68 uses
- SF Pro Display Semibold, 23px — 67 uses
- SF Pro Display Semibold, 21px — 51 uses
- SF Pro Display Medium, 20px — 41 uses
- SF Pro Text Bold, 17px — 33 uses

## Spacing scale

No spacing variables were defined. Observed explicit spacing values:

- 7px, 10px, 12px, 13px, 22px
- Chip padding: 7px vertical and 13px horizontal, with 10px internal gap.
- Cast and genre chip padding: 12px vertical and 22px horizontal, with 10px internal gap.
- Common content width inside mobile panels: 295px.
- Common mobile panel width: 345px.
- Mobile viewport: 375×812px.

## Radius scale

No radius variables were defined. Observed radii:

- 0px
- 0.87px
- 3px
- 9.8px
- 11px
- 12px
- 15.63px
- 17px
- 19px
- 25px
- 178.24px

Usage guidance from the screens:

- 11px for chips and compact tags.
- 17px for translucent controls.
- 19px for the primary “Watch movie” button.
- 25px for large content panels and promotional cards.
- 15.63px for poster imagery.
- 178.24px for the large Cover-page promotional shape.

## Elevation & effects

- Background blur: 4px on translucent white controls and surfaces using `#FFFFFF2B`.
- Hero imagery uses a linear darkening gradient based on `#17082A`; the extraction does not define a reusable gradient token.
- Promotional imagery uses a linear darkening gradient based on `#200F37`; the extraction does not define a reusable gradient token.
- A Cover-page promotional shape has a drop shadow with 74px blur and 34px vertical offset.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

- **Cover page:** 1920×960px promotional composition with decorative oversized shapes, a rounded promotional banner, image artwork, and a white “Dribbble Shot” lockup.
- **Movie detail screen:** 375×812px dark mobile layout with a full-width hero poster, dark overlay, 38px movie title, genre subtitle, and floating translucent controls.
- **Rating panel:** Rounded 345px-wide panel containing a primary orange rating, star graphics, and provider-specific scores such as IMDb and КиноПоиск.
- **Metadata panel:** Rounded panel for genre, release year, country, duration, language, and supporting visual details.
- **Description panel:** Large rounded panel with description text, “Читать все”, cast chips, genre chips, director information, and section dividers.
- **Rating prompt:** Rounded panel with a section heading and decorative rating controls.
- **Primary actions:** Full-width 295×58px rounded buttons. Purple `#6644B8` is used for “Watch movie”; pink `#FF8FC6` is used for “Подробнее”.
- **Promotional card:** Purple promotional surface with decorative artwork, a large heading, and a rounded action button.
- **Recommendations:** Poster-based movie cards with titles, poster imagery, and orange rating values.

## Notes for implementers

- Use `#17082A` as the mobile page background and `#210F37` for the main rounded content panels.
- Keep the mobile content centered around a 345px panel width with 295px inner content width.
- Use 25px radii for major panels and 11px radii for tags.
- Use SF Pro Display for display, heading, label, and metadata text; use SF Pro Text for compact rating text.
- Preserve the strong hierarchy: 38px bold hero title, 23px semibold section headings, 20px regular metadata, and 15px semibold chips.
- Use `#F79E44` consistently for numeric ratings and stars.
- Use `#ECBBDA` for chip labels and secondary text actions.
- Apply white text at reduced opacity for secondary hero and description content where the source specifies opacity.
- Do not treat the repeated screen structures as component sets; the extraction contains no formal components or local variables.
