---
name: mango-design-system-community
source: Mango Design System (Community)
kind: design-system-context
---

# mango - Design System

## Overview

Mango is a compact mobile-oriented design system extracted from the Figma pages “Design Testings” and “Components”.

- Primary screen size: 360x800px.
- Visual foundation: #367541 green backgrounds with #EEFF28 yellow surfaces and accents.
- Typography: Montserrat, primarily Black, Bold, and Medium weights.
- Layouts use fixed dimensions with horizontal and vertical auto-layout patterns.
- Component families: BUTTON 1, CARD, MENU, MENU LIST, TABS, TOP MENU.

## Design language

- Use #367541 as the primary background and dark text color.
- Use #EEFF28 for primary surfaces, active tab headers, button fills, navigation labels, and logo text.
- Use #60BC70 for expanded tab content areas.
- Use Montserrat Black for headings, navigation, labels, and button text.
- Use Montserrat Bold for card titles and supporting labels.
- Use Montserrat Medium for card body copy.
- Favor compact, fixed-size mobile compositions with strong horizontal and vertical alignment.
- Use rounded corners selectively: buttons, cards, tab headers, and the menu container have rounded corners.

## Color palette

Ranked by raw usage:

| Color | Usage | Primary use |
|---|---:|---|
| #EEFF28 | 447 | Buttons, cards, active tab headers, navigation labels, logo text, accents |
| #367541 | 351 | Screen backgrounds, top menu, menu container, dark text |
| #60BC70 | 36 | Expanded tab content |
| #9747FF | 8 | Raw extracted color; no component usage specified |

## Type scale

All typography uses Montserrat.

| Size | Weight | Usage |
|---:|---|---:|
| 15px | Bold | 171 |
| 18px | Black | 89 |
| 9.85px | Bold | 27 |
| 13.83px | Bold | 17 |
| 11.99px | Medium | 17 |
| 11.82px | Black | 15 |
| 15px | Black | 15 |
| 24px | Black | 14 |
| 14.15px | Bold | 12 |
| 12.26px | Medium | 12 |
| 9.86px | Bold | 9 |
| 11.83px | Black | 5 |
| 9.08px | Bold | 4 |
| 7.87px | Medium | 4 |
| 15.76px | Black | 3 |
| 9.85px | Black | 3 |
| 9.29px | Bold | 3 |
| 8.05px | Medium | 3 |

Hierarchy:

- 24px Montserrat Black: top-level heading and “MANGO” logo.
- 18px Montserrat Black: menu labels and tab labels.
- 15px Montserrat Bold or Black: common labels and button text.
- 14.15px or 13.83px Montserrat Bold: card titles.
- 12.26px or 11.99px Montserrat Medium: card body text.
- 11.83px or 11.82px Montserrat Black: small Black text.
- 9.86px, 9.85px, 9.29px, or 9.08px Montserrat Bold: small labels.
- 8.05px or 7.87px Montserrat Medium: smallest extracted text.

## Spacing scale

No spacing variables were found. Component-level spacing values:

- BUTTON 1: padding 15 39 15 39px; gap 10px.
- MENU LIST: padding 10 10 10 10px; gap 2px in the component specification and gap 5px in screen instances.
- CARD: padding 23.58 33.01 23.58 33.01px; gap 9.43px. Other card instances use padding 23.06 32.28 23.06 32.28px and gap 9.22px.
- TABS: padding 0 0 0 0px; gap 10px.
- TOP MENU: padding 20 11 20 11px; gap 10px.
- Nested menu frame: padding 0 0 0 0px; gap 50px.
- Logo frame: padding 10 10 10 10px; gap 10px.

## Radius scale

Extracted radius values:

- 0px: square tab-group corners and some tab-group edges.
- 3.69px: CARD instance.
- 3.77px: CARD specification and instance.
- 4px: tab header corners.
- 5px: BUTTON 1.
- 20px: MENU top corners.

## Elevation & effects

_No effects, elevation, shadows, or local effect styles found in source._

## Components

### BUTTON 1

- Size: 157x48px.
- Screen instance size: 160x48px for “BUTTON 2”; 157x48px for “BUTTON 1”.
- Layout: horizontal.
- Padding: 15 39 15 39px.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Radius: 5px.
- Fill: #EEFF28.
- Text: Montserrat Black, 15px.
- Text color: #367541.
- Variant: `Property 1: Default/button 2`.

### CARD

- Size: 332x134.51px.
- Alternate screen instance size: 332x134.64px.
- Layout: vertical.
- Primary padding: 23.58 33.01 23.58 33.01px.
- Alternate padding: 23.06 32.28 23.06 32.28px.
- Primary gap: 9.43px.
- Alternate gap: 9.22px.
- Sizing: fixed width and fixed height.
- Primary radius: 3.77px.
- Alternate radius: 3.69px.
- Fill: #EEFF28.
- Text styles: Montserrat Medium, 12.26px; Montserrat Bold, 14.15px.
- Variants: `card: bank`, `card: clock`, `card: dude`.
- Typical structure: dark green title and body copy, an icon or decorative graphic, and an info control.

### MENU LIST

- Specification size: 102x42px.
- Screen instance sizes: 105x42px and 94x42px.
- Layout: horizontal.
- Padding: 10 10 10 10px.
- Gap: 2px in the component specification; 5px in screen instances.
- Sizing: fixed width and fixed height.
- Text: Montserrat Black, 18px.
- Variants: `nombres: home`, `nombres: ivan`.
- Screen labels: HOME and IVAN.
- Screen icon size: 20x17px for HOME; 20x20px for IVAN.
- Screen icon and text color: #EEFF28.

### TABS

- Specification size: 462x176px.
- Screen sizes: 462x35px for the collapsed pattern; 462x176px or 462x177px for expanded patterns.
- Layout: horizontal.
- Padding: 0 0 0 0px.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Tab header size: 147x35px in the collapsed pattern; 147x38px in expanded patterns.
- Tab content size: 147x132px.
- Tab header fill: #EEFF28.
- Expanded tab content fill: #60BC70.
- Header radius: 4px on top corners.
- Expanded content radius: 4px on bottom corners.
- Header text: Montserrat Black, 18px.
- Expanded content text: Montserrat Bold, 15px, colored #EEFF28.
- Variants: `tabs: all tabs opened`, `standard`, `tab1`.

### TOP MENU

- Size: 360x89px.
- Layout: vertical.
- Padding: 20 11 20 11px.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Fill: #367541.
- Header group: 338x49px.
- Logo frame: 121x49px, horizontal, padding 10 10 10 10px, gap 10px.
- Logo text: “MANGO”, Montserrat Black, 24px, colored #EEFF28.
- Menu control frame: 47x47px.
- Variant details were not specified.

### MENU

- Size: 361x90px.
- Container fill: #367541.
- Top corner radius: 20px.
- Bottom corners: 0px.
- Nested menu frame: 249x42px, horizontal, gap 50px.
- Contains two MENU LIST instances: HOME and IVAN.
- MENU LIST text and icons use #EEFF28.

## Screen patterns

### HOME TEST

A 360x800px green screen containing:

- A TOP MENU.
- Multiple yellow CARD instances.
- A collapsed TABS instance with three tab headers.
- BUTTON 1 instances.
- A bottom MENU containing HOME and IVAN MENU LIST items.

### TEST 1

A 360x800px green screen containing:

- A vertical 332x642.8px content frame with 21px gap.
- Two CARD instances.
- An expanded TABS pattern with one expanded tab content area.
- A third CARD instance.
- A MENU and TOP MENU.

### TEST 2

A 360x800px green screen containing:

- MENU and TOP MENU.
- A CARD.
- An expanded TABS pattern with three expanded tab content areas.
- A BUTTON 1 instance.

### TEST 3

A 360x800px green screen containing:

- MENU and TOP MENU.
- A CARD.
- An expanded TABS pattern.
- The same green, yellow, and light-green tab treatment used in TEST 2.

## Notes for implementers

- Use only the extracted palette values: #367541, #EEFF28, #60BC70, and #9747FF.
- Preserve the strong green/yellow contrast and Montserrat typography.
- Treat component dimensions as fixed values unless the surrounding layout explicitly requires the extracted horizontal or vertical arrangement.
- Keep the 360x800px mobile composition as the primary screen context.
- Use #367541 for text placed on #EEFF28 surfaces.
- Use #EEFF28 for text placed on #367541 or #60BC70 surfaces.
- Do not introduce spacing, radius, effect, motion, grid, or typography tokens that are not listed in this document.
