---
name: fall-guys-mobile-ui-social-media-community
source: Fall Guys-Mobile UI+social media (Community)
kind: design-system-context
---

# fall-guys - Design System

## Overview

- Mobile-focused personal fitness instructor portfolio and community UI.
- Primary mobile screen size shown: 393×852px.
- Main content areas: O meni, Usluge, Preporuke, Projekti, Freebies, Kontakt, Društvene mreže, and navigation overlays.
- No local variables, paint styles, text styles, spacing styles, effect styles, grid styles, or components were found.

## Design language

- Use a clean, friendly fitness-portfolio visual language.
- The dominant palette is green, mint, white, and neutral gray.
- Standard content screens use a white background with a 138px-high mint header.
- Header titles are white, large, and bold.
- Body and section text is primarily green.
- Repeated bottom navigation controls use a 46×46px green circular control with three 26×5px mint bars.
- Navigation menu screens use large 32px bold labels.
- Content is presented in vertically stacked sections with rounded cards, fields, buttons, and image areas.
- Use image fills only where supplied by the source assets; no image content details were extracted.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| #000000 | 763 | Black text, navigation text, and vector strokes |
| #FFFFFF | 346 | White backgrounds, header text, button text, and light UI surfaces |
| #D9D9D900 | 157 | Transparent gray |
| #D9D9D9 | 133 | Neutral icon and shape fills |
| #D1D1D1 | 121 | Neutral gray |
| #358672 | 120 | Primary green for text, controls, borders, and emphasis |
| #00000066 | 70 | Semi-transparent black |
| #D3F9D8 | 56 | Light green accent |
| #E7E7E7 | 42 | Light neutral surface |
| #A1A1A1 | 40 | Medium gray |
| #9AC3B8 | 38 | Mint header backgrounds, navigation bars, and accents |
| #BDBDBD | 36 | Neutral gray |
| #36ADF8 | 26 | Blue accent |
| #31574F | 18 | Dark green for recommendation cards |

## Type scale

No local typography styles were found. Use only the extracted font and size combinations:

| Font | Weight/style | Size | Uses |
|---|---|---:|---:|
| Inter | ExtraBold | 280px | 4 |
| Roboto | Bold | 96px | 3 |
| Inter | Bold | 64px | 10 |
| Roboto | Bold | 64px | 3 |
| Roboto | Bold | 48px | 20 |
| Roboto | Regular | 48px | 18 |
| Rockwell | Rockwell | 48px | 3 |
| Rowdies | Bold | 48px | 3 |
| Roboto | Regular | 40px | 5 |
| Inter | Bold | 36px | 5 |
| Roboto | Bold | 36px | 8 |
| Inter | Bold | 32px | 15 |
| Roboto | Bold | 32px | 22 |
| Roboto | Regular | 32px | 39 |
| Inter | Bold | 24px | 3 |
| Kantumruy | Bold | 24px | 4 |
| Roboto | Bold | 24px | 21 |
| Roboto | Regular | 24px | 36 |
| Rockwell | Bold | 24px | 3 |
| Inter | Bold | 20px | 4 |
| Inter | Regular | 20px | 22 |
| Roboto | Regular | 20px | 48 |
| Inter | Bold | 16px | 22 |
| Inter | Regular | 16px | 33 |
| Roboto | Bold | 16px | 4 |
| Roboto | Regular | 16px | 27 |
| Roboto | Bold | 15px | 9 |
| Roboto | Regular | 15px | 3 |
| Inter | Bold | 14px | 12 |
| Roboto | Regular | 14px | 36 |
| Inter | Regular | 13px | 12 |
| Kantumruy | Regular | 13px | 51 |

Common screen patterns:
- Page titles: Roboto Bold, 48px, white.
- Body copy and section descriptions: Roboto Regular, 24px, #358672.
- Section headings: Roboto Bold, 24px, #358672.
- Navigation labels: Roboto Bold, 32px.
- Form labels: Roboto Regular, 20px.
- Buttons: Roboto Bold, 16px.

## Spacing scale

_No spacing variables or spacing scale found in source._

Observed layout dimensions include:
- Mobile frames: 393×852px.
- Header height: 138px.
- Common content width: 345px.
- Form field width: 342px.
- Recommendation card: 314×122px.
- Social and testimonial image tiles: 85×85px.
- Project image area: 328×195px.
- Freebie buttons: 288×73px.
- Bottom navigation control: 46×46px.
- Navigation bars: 26×5px.

## Radius scale

No radius variables were found. Observed corner radii:

- 10px: navigation bars, project image, and icon shapes.
- 15px: social tiles and freebie buttons.
- 20px: recommendation cards and contact fields.
- 25px: submit button.
- 30px: promotional field and gray indicator.
- 64px: freebie image area.
- 0px: repeated navigation groups.

## Elevation & effects

- No local effect styles or elevation tokens were found.
- One gradient fill was extracted: linear gradient from #D9D9D900 at 0% to #9AC3B8 at 100%.
- Borders are commonly 3px in #358672 or #31574F.
- Social tiles use 1px borders.
- Profile and testimonial circular images use 2px or 8px #358672 borders.
- Vector arrows use 3px #000000 strokes.

## Components

_No component families or component geometry were found in source._

Observed reusable UI patterns:
- 138px mint header with a large white title.
- Green circular 46×46px navigation controls.
- Three-bar menu icon using 26×5px rounded mint bars.
- Green filled pill-shaped submit button.
- Rounded mint-tinted form fields.
- Rounded recommendation cards with dark green text and borders.
- Rounded social and project image tiles.
- Full-screen burger navigation menu.

## Screen patterns

- **Primary profile screen:** image-led mobile home screen with a circular profile image, Rockwell name/title typography, and repeated navigation controls.
- **Content pages:** white 393×852px screens with a 393×138px #9AC3B8 header, white 48px title, and stacked green content.
- **O meni:** large green introductory text followed by a mint gradient area and navigation controls.
- **Usluge:** stacked service headings and descriptions with a supplied image area.
- **Preporuke:** three 314×122px rounded recommendation cards, followed by three circular image items.
- **Projekti:** introductory text, project title, and a 328×195px rounded image with a 3px green border.
- **Freebies:** explanatory text, two 288×73px rounded outlined options, and a rounded image area.
- **Društvene mreže:** introductory text, four 85×85px rounded social tiles, and additional explanatory text.
- **Kontakt:** three labeled fields, including a 342×97px message field, explanatory copy, and a 142×31px green submit button.
- **Burger navigation:** full-screen menu with seven large 32px bold navigation labels. The colored variant uses #E7E7E7 with #358672 labels; the white variant uses #FFFFFF with #000000 labels and control icon.
- **Promotional desktop composition:** a 1440×1024px frame containing image, typography, rounded fields, and a submit control. The source also includes large decorative and arrow artwork.

## Notes for implementers

- Preserve the mobile-first 393×852px composition for the portfolio screens.
- Use #358672 as the primary interactive and content color, with #9AC3B8 for headers and mint accents.
- Keep page headers at 138px tall where the source shows the repeated header pattern.
- Use white 48px Roboto Bold titles in mint headers.
- Use 24px Roboto Regular for long body copy and 24px Roboto Bold for section headings.
- Reuse the 46×46px circular navigation control and its three 26×5px bars across content screens.
- Use rounded corners according to the observed pattern; do not introduce unobserved radius values.
- Use supplied image assets for image-filled areas rather than substituting invented colors or imagery.
- No component API, spacing tokens, elevation tokens, or motion behavior is defined by the source.
