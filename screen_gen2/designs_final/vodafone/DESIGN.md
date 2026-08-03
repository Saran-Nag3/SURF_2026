---
name: fitness-app-vodafone-community
source: Fitness App-Vodafone (Community)
kind: design-system-context
---

# vodafone - Design System

## Overview

- Fitness and nutrition app design system extracted from Figma page `Page 1`.
- Primary experience: 360 × 720 px mobile screens with white surfaces, coral-red actions, gray typography, rounded corners, and soft elevation.
- The source also contains a 1440 × 6028 px desktop presentation documenting problem context, personas, information architecture, onboarding, and visual designs.
- Component families: 3.

## Design language

- Clean, light mobile interface using white backgrounds and coral-red emphasis.
- Primary text uses Noto Sans; defined button and caption tokens use Roboto.
- Headings and section labels use bold Noto Sans in coral red.
- Body copy uses regular Noto Sans in gray.
- Navigation uses compact labels with iconography: Home, Workout, Diet, and Insight.
- Interactive architecture nodes use 182 × 66 px cards with 6 px radius.
- Mobile shells use 360 px width, white fill, and rounded corners.
- Use thin `#E5E5E5` or `#E1E1E1` borders for neutral separation.
- Use coral red for active states, buttons, section headings, selected navigation, and connector lines.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#EC5F5F` | 90 | Primary coral accent, active states, headings, buttons, lines |
| `#FFFFFF` | 68 | Primary surface and light background |
| `#E5E5E5` | 60 | Borders, dividers, neutral outlines |
| `#4F4F4F` | 42 | Primary gray text and inactive controls |
| `#000000` | 22 | Standard dark text |
| `#8B8B8B` | 17 | Secondary navigation and muted labels |
| `#FBFBFB` | 17 | Near-white surface |
| `#00000080` | 7 | Caption and subdued text |
| `#E1E1E1` | 5 | Light borders and dividers |
| `#FCFCFC` | 4 | Subtle circular icon backgrounds |

Named color tokens:

- `Light Color`: `#FFFFFF`
- `Gray Color`: `#5F5F5F`
- `Text Color`: `#000000DE`

Additional observed text and surface colors:

- `#000000DE`: high-emphasis text
- `#00000009`, `#0000000D`, `#00000011`, `#0000001A`: elevation shadow layers

## Type scale

Typography uses Noto Sans unless a token explicitly specifies Roboto.

| Size | Family | Weight | Usage |
|---:|---|---:|---|
| 22 px | Noto Sans | Bold | Large section headings |
| 20 px | Noto Sans | Medium | Mobile screen titles |
| 18 px | Noto Sans | Bold | Section headings and emphasized labels |
| 18 px | Noto Sans | Regular | Body copy and descriptive content |
| 16 px | Noto Sans | Regular | Information architecture labels and general text |
| 14 px | Noto Sans | Bold | Emphasized supporting labels |
| 14 px | Noto Sans | Medium | Supporting labels |
| 14 px | Noto Sans | Regular | Supporting text |
| 14 px | Roboto | Medium (500) | `BUTTON` token; 14 px, auto line height, 0 px tracking |
| 12 px | Noto Sans | Bold | Compact emphasized labels |
| 12 px | Noto Sans | Medium | Compact navigation labels |
| 12 px | Noto Sans | Regular | Compact supporting text |
| 12 px | Roboto | Regular (400) | `Caption Regular` token; 12 px, auto line height, 0 px tracking |

Most-used raw typography:

- Noto Sans Regular, 16 px: 20 uses
- Noto Sans Regular, 12 px: 14 uses
- Noto Sans Bold, 18 px: 13 uses
- Noto Sans Regular, 18 px: 9 uses
- Noto Sans Bold, 12 px: 8 uses

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 2 px: small input/content background
- 5 px: decorative indicator
- 6 px: information architecture nodes and content cards
- 10 px: desktop documentation cards
- 20 px: mobile component shell
- 27 px: larger mobile visual-design shell

## Elevation & effects

Mobile component shell elevation uses four layered drop shadows:

- Offset `0 × 1.49 px`, blur/size `1.95 px`, color `#00000009`
- Offset `0 × 4.13 px`, blur/size `5.38 px`, color `#0000000D`
- Offset `0 × 9.95 px`, blur/size `12.96 px`, color `#00000011`
- Offset `0 × 33 px`, blur/size `43 px`, color `#0000001A`

Observed component shell:

- Fill: `#FFFFFF`
- Radius: 20 px
- Size: 360 × 720 px

Additional observed effects:

- Bottom bars use a white surface with a shadow offset `0 × -4 px` and size `5 px`.
- Information architecture cards use 1 px borders.
- Large visual-design mobile shells use a 43 px shadow size, `0 × 33 px` offset, and color `#0000001A`.

## Components

### Family count

- 3 component families.

### Mobile component

- Size: 360 × 720 px
- Fill: `#FFFFFF`
- Radius: 20 px
- Contents may include:
  - 360 × 56 px white header/navigation frame
  - 20 px medium Noto Sans title
  - 18 px medium Noto Sans title variant
  - 12 px regular caption
  - 14 px button label
  - White bottom action bar, 360 × 56 px
  - Coral-red button text
  - 24 × 24 px icon frames
  - 1 px `#E5E5E5` divider
- Use the layered mobile shell elevation defined in `Elevation & effects`.

### Information architecture node

- Standard size: 182 × 66 px
- Radius: 6 px
- Fill: `#FFFFFF` for inactive nodes
- Border: 1 px `#E5E5E5` or 1 px `#EC5F5F`
- Active variant:
  - Fill: `#EC5F5F`
  - Border: 1 px `#EC5F5F`
  - Text: `#FFFFFF`
- Inactive text: `#000000`
- Typical labels include Home, Plan for today, Shopping List, Todays diet plan, Edit Profile, Groups, Cart, Diet Categories, Diet List, Receipes, Ingredient Details, and Payment.
- One observed long-label variant is 182 × 81 px.

### Content card

- Observed sizes: 312 × 71 px, 312 × 89 px
- Radius: 6 px
- Fill: `#FFFFFF`
- Border: 1 px `#E5E5E5`
- Text:
  - Label: Noto Sans Bold, 12 px, `#4F4F4F`
  - Caption: Noto Sans Regular, 12 px, `#00000080`
- Icon treatment:
  - Circular background: 40 × 40 px, fill `#FCFCFC`
  - Icon frame: 24 × 24 px
- Content examples include chair, walking, and running activity cards.

## Screen patterns

- **Documentation overview:** Desktop presentation at 1440 px wide with white cards, 10 px card corners, 1 px light borders, coral-red section headings, and gray 18 px body copy.
- **Problem and persona sections:** Large white documentation cards containing coral-red 22 px or 18 px headings and gray Noto Sans body copy.
- **Information architecture:** White canvas with coral-red connector lines and rounded navigation nodes. Active node is coral red with white text; inactive nodes are white with dark text and coral or light-gray borders.
- **Onboarding flow:** 360 × 720 px mobile screens with white rounded shells, 20 px titles, 12 px captions, light hamburger/header navigation, coral-red action labels, and bottom action bars.
- **Dashboard/home:** 360 px mobile shell with a 56 px bottom navigation area. Active Home uses `#EC5F5F`; inactive Workout, Diet, and Insight use `#8B8B8B`. Navigation labels use Noto Sans Medium, 12 px.
- **Nutrition and activity content:** White content cards with 6 px radius, light-gray borders, compact bold labels, muted captions, circular icon backgrounds, and activity icons.
- **Primary action:** Coral-red text or active surface, using the `BUTTON` token at 14 px Roboto Medium.

## Notes for implementers

- Do not introduce colors outside the documented palette.
- Prefer `#EC5F5F` for primary emphasis and active states.
- Use `#FFFFFF` for primary surfaces and `#E5E5E5` for neutral borders and dividers.
- Use Noto Sans for general UI and content; use Roboto only for the defined button and caption tokens.
- Preserve the 360 px mobile width and 56 px navigation/action-bar height where the mobile patterns apply.
- Use 6 px corners for cards and information architecture nodes; use 20 px corners for the standard mobile shell.
- Keep captions visually subordinate with `#00000080`.
- Use the documented shadow layers for elevated mobile shells rather than adding new effect values.
- No spacing, motion, grid, or local variable collections were found in the source.
