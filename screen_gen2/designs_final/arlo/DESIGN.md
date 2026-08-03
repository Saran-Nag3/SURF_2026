---
name: travelling-app-ui-ux-kit-community
source: Travelling App - UI/UX Kit (Community)
kind: design-system-context
---

# arlo - Design System

## Overview

- Travel companion UI kit centered on destination discovery, nearby trip partners, reviews, login, and promotional social posts.
- Primary app screens are mobile layouts at 390px width.
- Supporting assets include a 1600×960 cover, 1080×1920 Instagram posts, and 1120px-wide agreement screens.
- No local variables, styles, components, spacing tokens, radius tokens, motion tokens, effect styles, or grid styles were found.

## Design language

- Bright, optimistic travel aesthetic using white surfaces, dark text, cyan/mint accents, and blue-purple gradients.
- Use large rounded containers, pill-shaped controls, circular avatars, destination imagery, and soft shadows.
- Typography mixes friendly rounded Nunito UI text with Montaga and Montserrat for agreement and editorial content.
- Mobile layouts use generous white space, prominent destination imagery, floating cards, and persistent rounded navigation areas.
- Promotional compositions use oversized type, layered abstract shapes, gradients, and texture imagery.

## Color palette

Ranked by observed raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 49 | Primary backgrounds, card surfaces, and light text |
| `#000000` | 11 | Primary dark text and branding |
| `#272727` | 8 | Agreement headings and body text |
| `#2F434E` | 6 | Navigation/menu line icons |
| `#8CDBDF` | 4 | Cyan accent strokes |
| `#B8FFE9` | 4 | Light mint accent strokes |

- No local color variables or paint styles were defined.
- Gradients are used extensively throughout the UI, especially mint-to-blue, cyan-to-purple, and blue-to-green treatments.

## Type scale

Observed typography, ranked by usage:

| Size | Font | Weight/style | Usage |
|---:|---|---|---:|
| 24px | Montaga | Regular | 7 |
| 24px | Montserrat | Regular | 6 |
| 9px | Nunito | Bold Italic | 6 |
| 11px | Nunito | Bold | 5 |
| 16px | Nunito | Bold | 5 |
| 22px | Nova Oval | NovaOval | 4 |
| 24px | Montserrat | Bold | 3 |

Hierarchy:

- 24px Montaga Regular
- 24px Montserrat Bold
- 24px Montserrat Regular
- 22px Nova Oval NovaOval
- 16px Nunito Bold
- 11px Nunito Bold
- 9px Nunito Bold Italic

Additional screen typography observed:

- Nunito ExtraBold, 25px
- Nunito Regular, 14px
- Nunito Bold, 23px
- Nunito Bold Italic, 12px, 18px, and 24.88px
- Nunito Bold, 13px, 14.63px, 17px, 17.11px, 18.19px, 22px, and 41.67px
- Nunito Regular, 8.57px and 9px
- Nunito Bold, 77.41px and 90px
- Nunito SemiBoldItalic, 12px, 24px, and 106.85px
- Montserrat Bold, 19px, 42px, and 47.87px
- Montserrat Regular, 24px

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- 10px
- 11px
- 13px
- 15px
- 20.22px
- 21px
- 25.7px
- 27px
- 27.01px
- 30px
- 38px
- 40px
- 82px
- 0px and mixed-corner square configurations

## Elevation & effects

- Drop shadows are used on destination cards, pills, navigation controls, and review cards.
- Observed drop-shadow geometry includes:
  - 10px blur with 6px horizontal and 6px vertical offset
  - 15px blur with 0px horizontal and 4px vertical offset
  - 4px blur with 3px horizontal and 4px vertical offset
  - 4.5px blur with 0px horizontal and 4.5px vertical offset
  - 8px blur with 3px horizontal and 4px vertical offset
  - 23.33px blur with 0px horizontal and 6.22px vertical offset
- Inner shadows are used on large destination cards and action buttons.
- Background blur of 5px is used on selected decorative navigation elements.
- Layer blur is used on promotional artwork, including 27px and 34px blur values.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

- **Cover Page / Plugin / file cover - 1:** 1600×960 promotional cover using layered abstract gradient shapes, texture imagery, and large white travel-brand typography.
- **Screen 1 English:** 390×1001 home/discovery screen. Includes greeting content, location selector, nearby destination cards, trip-partner cards, a rounded navigation header, search affordance, and a bottom navigation area.
- **Screen 2 English:** 390×844 destination detail screen. Includes destination imagery, title, distance and rating pills, a “Get Direction” action, traveller reviews, rounded header navigation, and bottom navigation.
- **Login Screen:** 390×844 authentication screen with layered abstract artwork, large “LiburBy” branding, supporting italic tagline, primary login button, and outlined account-creation button.
- **Instagram post - 1:** 1080×1920 promotional artwork built from layered gradients and texture imagery.
- **Instagram post - 2:** 1080×1920 promotional branding composition with abstract gradient layers, circular shapes, texture imagery, and large “LiburBy” typography.
- **Instagram post - 3:** 1080×1920 composition presenting mobile app screens inside a promotional abstract background.
- **License Agreement:** 1120×1071 agreement layout with a centered title, permitted and prohibited usage sections, and a reserved-rights footer.
- **Me on Socials:** 1120×840 promotional/social screen with a blue-to-purple gradient background and centered Montserrat typography.

## Notes for implementers

- Treat the six raw colors listed in the palette as the confirmed reusable color inventory.
- Do not assume spacing, motion, grid, component, or local style tokens; none were extracted.
- Preserve the strong contrast between white surfaces, dark text, and vibrant gradient accents.
- Use rounded geometry consistently for cards, buttons, avatars, image crops, and navigation surfaces.
- Keep destination and traveller content image-led, with white labels placed over or within colorful cards.
- Use Nunito for the primary product UI and reserve Montaga/Montserrat for agreement or editorial content where appropriate.
- Gradient treatments and image textures are recurring visual motifs, but their source endpoints are not part of the confirmed color-token inventory.
- Recreate decorative imagery and icons as assets only where the source design provides them; do not infer missing component specifications.
