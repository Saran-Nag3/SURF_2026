---
name: vinted-app-airfrance-apple-fitness-site-community
source: Vinted App, AirFrance & Apple Fitness site (Community)
kind: design-system-context
---

# vinted - Design System

## Overview

Design-system extraction covering three product/site experiences: Vinted App, Apple Site, and AirFrance Site. The source contains no local variable collections, paint styles, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles.

Primary component families are organized around:
- Vinted mobile commerce navigation, search, categories, product cards, and actions.
- AirFrance travel navigation, flight offers, dropdowns, country selection, and booking actions.
- Apple-style navigation and high-contrast action buttons.

## Design language

- Use white surfaces with black or dark navy typography.
- Use #007782 for Vinted active states and primary actions.
- Use #051039 and #0045B6 for AirFrance navigation and actions.
- Use #AAFF00 for Apple-style primary actions.
- Use thin gray borders for category rows, tabs, cards, and dropdowns.
- Vinted mobile layouts use compact Inter typography, 393x852px screens, bottom navigation, category rows, and rounded phone frames.
- AirFrance layouts use larger Roboto typography, broad horizontal navigation, large flight-offer areas, and compact 5px controls.
- Apple navigation uses SF Pro Display typography, white navigation surfaces, and pill-shaped buttons.

## Color palette

Ranked by raw usage count:

| Color | Raw uses | Usage |
|---|---:|---|
| #000000 | 576 | Primary black text, icons, and strokes |
| #051039 | 188 | AirFrance dark navy surfaces and actions |
| #FFFFFF | 168 | Backgrounds, controls, and inverse text/icon areas |
| #717171 | 51 | Gray text and dropdown strokes |
| #909090 | 34 | Gray interface details |
| #C2C2C2 | 30 | Card and offer borders |
| #0045B6 | 25 | AirFrance blue action button |
| #8B8B8B | 22 | Gray interface details |
| #898989 | 18 | Gray interface details |
| #9747FF | 18 | Purple accent present in the source |
| #8D8D8D | 13 | Search and chevron strokes |
| #D40504 | 11 | Error or warning state |
| #71717194 | 7 | Translucent gray |
| #9D9D9D | 7 | Gray interface details |
| #E9E9EB | 7 | Light neutral surface or border |

Additional component colors present in the source:
- #007782 — Vinted primary green/teal actions and active states.
- #AAFF00 — Apple primary green action.
- #DDDDDD — thin borders on tabs and category rows.
- #F5F5F5 — Card_Comment surface.
- #898989 and #8D8D8D — search placeholder and icon details.
- #FFFFFF with #000000 — App Store badge and dark-on-light controls.

## Type scale

Use the specified family and weight together; do not substitute families between product experiences.

### Highest-use text styles

- SF Pro Display Bold, 24px — 93 uses
- SF Pro Display Regular, 12px — 79 uses
- Roboto Regular, 28px — 50 uses
- Inter Medium, 10px — 46 uses
- SF Pro Display Regular, 24px — 40 uses
- Inter Regular, 14px — 36 uses
- Roboto Regular, 24px — 24 uses
- Roboto Bold, 24px — 23 uses
- Roboto Bold, 32px — 19 uses
- SF Pro Display Medium, 24px — 16 uses
- Inter Medium, 15px — 13 uses
- Inter Medium, 12px — 12 uses
- SF Pro Display Bold, 14px — 12 uses
- Inter Medium, 14px — 11 uses
- SF Pro Display Regular, 16px — 10 uses

### Additional specified styles

- SF Pro Display Regular, 21px — 8 uses
- SF Pro Display Bold, 39px — 6 uses
- SF Pro Display Regular, 10px — 6 uses
- Inter SemiBold, 14px — 5 uses
- Roboto Bold, 28px — 5 uses
- SF Pro Display Bold, 20px — 5 uses
- Inter Regular, 12px — 4 uses
- Roboto Medium, 17px — 4 uses
- Roboto Regular, 17px — 4 uses
- SF Pro Display Bold, 27px — 4 uses
- Inter Regular, 13.14px — 3 uses
- Inter Regular, 4px — 3 uses
- Inter SemiBold, 23px — 3 uses
- Inter SemiBold, 7px — 3 uses
- SF Pro Display Bold, 48px — 3 uses
- SF Pro Display Medium, 39px — 3 uses

### Product-family guidance

- Vinted: Inter Regular, Medium, and SemiBold, primarily 10px–15px.
- AirFrance: Roboto Regular, Medium, and Bold, primarily 17px–32px.
- Apple: SF Pro Display Regular, Medium, and Bold, primarily 12px–48px.

## Spacing scale

No spacing variables were defined. The following explicit component values are available:

- 0px — zero padding or gap
- 2px — Dropdown vertical padding
- 3px — App Store gap
- 4px — search-bar internal gap
- 5px — ItemDropdownHover padding; Dropdown horizontal padding; 5px component radii
- 7px — App Store text size
- 8px — Vinted Button vertical padding
- 10px — common gap; Tap Bar padding; category-row padding; Apple button gap; multiple component paddings
- 12px — Apple button vertical padding
- 15px — Button 2 and AirFrance Button vertical padding
- 16px — Vinted search-bar horizontal inset
- 20px — Apple button horizontal padding; Button 2 and AirFrance Button horizontal padding
- 21px — Card_Comment vertical padding
- 25px — Card_Comment horizontal padding
- 32px — Vinted Button horizontal padding
- 36px — Tap Bar bottom padding

Use the component-specific padding and gap values rather than introducing a new spacing value.

## Radius scale

Explicit radii:

- 3px — Vinted search-bar surface
- 4px — Vinted Button; App Store badge
- 5px — Pays; Se connecter; Button 2; AirFrance Button; Liste; Dropdown
- 30px — Vinted mobile screen frame
- 115px — Apple Site Button pill

No radius variables were defined.

## Elevation & effects

No local effect styles or elevation tokens were found.

Explicit borders:
- 0.5px #C2C2C2 — Card_Comment
- 0.5px #717171 — Dropdown
- 1px #DDDDDD — Tap Bar Component and category rows
- 1px #C2C2C2 — Offre Montréal
- 1px #FFFFFF — App Store badge

## Components

Only use the extracted component families and their listed variants.

### Checkbox

- Size: 20.25x20.25px
- Fill: #FFFFFF
- Variants: Coché, Décoché

### Tap Bar Component

- Size: 393x80px
- Horizontal layout; space-between and center alignment
- Padding: 10px 10px 36px 10px
- Gap: 10px
- Fill: #FFFFFF
- Stroke: 1px #DDDDDD
- Text: Inter Regular, 14px
- Variants: Tab Home Active, Tab Inactive, Tab Search Active

### Button

#### Vinted App Button

- Size: 361x36px
- Radius: 4px
- Padding: 8px 32px
- Gap: 10px
- Fill: #007782 or white variant
- Text: Inter Regular, 14px
- Variants: Button Green, Button White

#### Apple Site Button

- Size: 126x41px
- Radius: 115px
- Padding: 12px 20px
- Gap: 10px
- Fill: #AAFF00 or white variant
- Text: SF Pro Display Bold, 14px
- Variants: Green, White

#### AirFrance Site Button

- Size: 230x68px
- Radius: 5px
- Padding: 15px 20px
- Gap: 10px
- Fill: #051039
- Text: Roboto Bold, 32px
- Variants: Default, Variant2

### Button 2

- Size: 191x68px
- Radius: 5px
- Padding: 15px 20px
- Gap: 10px
- Fill: #0045B6
- Text: Roboto Bold, 32px
- Variants: Default, Variant2

### Search Bar Component

- Size: 371x31px
- Horizontal layout; minimum and center alignment
- Gap: 10px
- Text: Inter Regular, 14px
- Vinted screen instances use a 16px horizontal screen inset.
- The visible search field uses a 3px radius and a light neutral gray surface from the source.

### Product Card

- Size: 136x265px
- Vertical layout
- Padding: 0px
- Gap: 0px
- Text: Inter Medium, 12px and Inter Medium, 10px

### nav_component

- Size: 1728x36px
- Vertical layout; centered
- Padding: 0px
- Gap: 0px
- Width: fill; height: fixed
- Fill: #FFFFFF
- Text: SF Pro Display Regular, 12px
- Variants: Default, Mac, Store

### Card_Comment

- Size: 537x108px
- Horizontal layout; minimum and center alignment
- Padding: 21px 25px
- Gap: 5px
- Fill: #F5F5F5
- Stroke: 0.5px #C2C2C2
- Text: Roboto Regular, 17px and Roboto Medium, 17px
- Variants: Default, Hover

### Pays

- Size: 182x54px
- Radius: 5px
- Fill: #FFFFFF
- Text: Roboto Bold, 24px
- Variants: Default, Survol

### Se connecter

- Size: 212x54px
- Radius: 5px
- Horizontal padding: 10px
- Gap: 23px
- Text: Roboto Bold, 24px
- Variants: Default, Variant2

### Slider

- Size: 1400x742px
- Vertical layout
- Gap: 10px
- Width: fill; height: fixed
- Text: Roboto Bold, 32px; SF Pro Display Bold, 24px, 14px, and 20px; SF Pro Display Medium, 24px; SF Pro Display Regular, 21px and 24px
- Variants: BilletFlying, Nos Offres, Vol+Hôtel

### Offre Montréal

- Size: 1400x100px
- Horizontal layout; space-between and center alignment
- Padding: 10px 0px
- Gap: 10px
- Stroke: 1px #C2C2C2
- Text: SF Pro Display Bold, 24px and SF Pro Display Regular, 24px
- Variants: Default, Hover

### Onglet secondaire

- Size: 1850x229.11px
- Vertical layout
- Horizontal padding: 10px
- Text: Roboto Bold, 24px and Roboto Regular, 24px
- Variants: Acheter un billet, Utiliser des Miles, Vol + Hôtel

### Onglet primaire

- Size: 1920x70px
- Horizontal layout
- Gap: 10px
- Fill: #FFFFFF
- Text: Roboto Regular, 28px
- Variants: Acheter, Aide, Enregistrement, Information, Reservation

### Footer

- Size: 192x53px
- Horizontal layout; centered
- Padding: 10px 0px
- Gap: 10px
- Fill: #051039
- Text: Roboto Regular, 28px
- Variants: Default, Variant2

### App Store

- Size: 70x23px
- Radius: 4px
- Horizontal padding: 7px
- Gap: 3px
- Fill: #000000
- Stroke: 1px #FFFFFF
- Text: Inter SemiBold, 7px and Inter Regular, 4px
- Variants: AppGallery, Apple, Google

### Plane

- Size: 24x24px
- Fill: #FFFFFF
- Variants: Arrivé, Départ

### ItemDropdownHover

- Size: 174x38px
- Horizontal layout
- Padding: 5px
- Gap: 10px
- Width: fill; height: fixed
- Text: Roboto Regular, 24px
- Variants: Off, On

### Liste

- Size: 255x78px
- Radius: 5px
- Vertical layout
- Gap: 10px
- Text: Roboto Regular, 24px
- Variants: Erreur, Valorisé, Vide; Hover Off/On; Dropdown Off/On

### Dropdown

- Size: 204x204px
- Radius: 5px
- Vertical layout; minimum and maximum alignment
- Padding: 2px 5px
- Fill: #FFFFFF
- Stroke: 0.5px #717171
- Text: Roboto Regular, 24px and Roboto Bold, 24px

## Screen patterns

### Vinted mobile category screens

- Frame size: 393x852px
- White background with 30px screen-frame radius.
- 56px header image area at the top.
- Search Bar Component below the header.
- Category rows are 393x44px, use 10px padding, 10px gaps, space-between alignment, and 1px #DDDDDD strokes.
- Category lists use vertical wrapping with 10px vertical padding and 10px gaps.
- Sub-category screen includes: Tous, Vetements, Chaussures, Accessoires, and Soin.
- Category screen includes: Femmes, Homme, Créateurs, Enfants, Maison, Electronique, Divertissement, and Animaux.
- Tap Bar Component is fixed at the bottom and contains Accueil, Rechercher, Vendre, Messages, and Profil.
- Active search state uses #007782; inactive labels use #000000.

### AirFrance site

- Use broad fixed-width sections: 1400px Slider and Offre Montréal; 1920px Onglet primaire; 1850px Onglet secondaire.
- Use Roboto for large travel navigation and actions.
- Use #051039 for footer and primary dark actions.
- Use #0045B6 for Button 2 actions.
- Use 5px-radius travel controls and 24px–32px Roboto text for prominent controls.
- Combine country selection, login, flight direction indicators, dropdowns, lists, tabs, offers, and footer elements.

### Apple site

- Use nav_component at 1728x36px with white fill and SF Pro Display Regular, 12px text.
- Use Apple Site Button at 126x41px with 115px radius.
- Use #AAFF00 for the green button variant and white for the alternate variant.
- Keep Apple navigation typography in SF Pro Display.

## Notes for implementers

- Do not create new design tokens; the source has no local variable collections or style definitions.
- Preserve the product-specific typography: Inter for Vinted, Roboto for AirFrance, and SF Pro Display for Apple.
- Use only the listed component families: App Store, Button, Button 2, Card_Comment, Checkbox, Dropdown, Footer, ItemDropdownHover, Liste, Offre Montréal, Onglet primaire, Onglet secondaire, Pays, Plane, Product Card, Se connecter, Search Bar Component, Slider, Tap Bar Component, and nav_component.
- Treat variants as explicit states, not separate component families.
- Keep borders thin where specified: 0.5px or 1px.
- Use the exact component dimensions when the component is fixed-size; use fill sizing only where specified.
- The source contains image fills and decorative vector icons, but no reusable icon-token system. Do not infer additional icon specifications from the truncated node dump.
- No motion, grid, elevation, or effect behavior is specified.
