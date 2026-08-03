---
name: mobile-sidebar-community
source: Mobile Sidebar (Community)
kind: design-system-context
---

# hermes - Design System

## Overview

A responsive mobile sidebar system for Hermes with a warm peach, pink, brown, and gold palette. The system includes a top navigation bar, account dropdown, and rounded sidebar items.

Screens represented:
- Android Large: 360×800px
- iPhone 13 Pro Max: 428×926px
- iPad Pro 11": 834×1194px, with closed and open sidebar states
- Components page with Navbar, Sidebar Item, and Dropdown Menu definitions

## Design language

- Warm, soft interface palette using peach, dusty pink, translucent gold, cream, brown, and white.
- Brand wordmark uses Macondo Regular at 32px in #82530C.
- Interface labels and sidebar items use Josefin Sans Regular.
- Controls and sidebar items use rounded 8px corners.
- Sidebar items use translucent gold fills and a subtle drop shadow.
- Layouts are centered and responsive across mobile and tablet widths.

## Color palette

Ranked by reported usage:

| Color | Usage | Observed role |
|---|---:|---|
| #535151 | 22 | Sidebar item text |
| #F4D08999 | 20 | Inner dropdown button and nested sidebar item fill |
| #F4D08966 | 14 | Primary sidebar item fill |
| #3C3131 | 8 | Dropdown text |
| #82530C | 8 | Hermes wordmark |
| #F2B59B | 8 | Navbar fill |
| #A4616159 | 6 | Dropdown Menu outer fill |
| #D4B4B4 | 4 | Sidebar background |
| #FFFFFF | 4 | Screen background |
| #F4EEEE26 | 3 | Nested sidebar group background |
| #CDCDCD40 | — | Sidebar item drop-shadow color |

## Type scale

| Size | Font | Weight/style | Usage |
|---:|---|---|---|
| 32px | Macondo | Regular | Hermes wordmark and heading |
| 22px | Josefin Sans | Regular | Sidebar items and large account label |
| 14px | Josefin Sans | Regular | Compact dropdown label |

## Spacing scale

_None found in source._

## Radius scale

- 8px: Dropdown Menu, Dropdown button, Sidebar Item, nested sidebar group.
- 5px: Navbar component set container.

## Elevation & effects

- Sidebar Item drop shadow:
  - Effect: `drop_shadow`
  - Blur: 8px
  - Offset: 0px horizontal, 2px vertical
  - Color: #CDCDCD40
- No other effect styles were found.

## Components

### Navbar

- Family: Navbar
- Height: 70px.
- Fill: #F2B59B.
- Chevron: 50×50px, aligned to the left and vertically centered.
- Wordmark:
  - Text: `Hermes`
  - Font: Macondo Regular
  - Size: 32px
  - Color: #82530C
  - Rendered text bounds: 98×38px
- Variants:
  - `type=mobile-small, sidebar=closed`
  - `type=mobile-small, sidebar=open`
  - `type=mobile-large, sidebar=closed`
  - `type=mobile-large, sidebar=open`
- Mobile-small width: 360px.
- Mobile-large component width: 696px.
- Mobile-large variants include a right-aligned Dropdown Menu sized 135×40px.
- Mobile-small variants do not include the Dropdown Menu in the extracted component examples.

### Dropdown Menu

- Family: Dropdown Menu
- Default size: 135×40px.
- Outer fill: #A4616159.
- Radius: 8px.
- Inner button: 129×34px.
- Inner button fill: #F4D08999.
- Inner button radius: 8px.
- Label:
  - Text: `My Account`
  - Font: Josefin Sans Regular
  - Size: 14px
  - Color: #3C3131
  - Rendered text bounds: 75×14px
- In expanded sidebar screens, the Dropdown Menu is rendered at the full sidebar content width and height 50px:
  - Android Large: 326×50px
  - iPhone 13 Pro Max: 390×50px
  - iPad Pro 11" open state: 309×50px
- The expanded-screen label uses Josefin Sans Regular at 22px with rendered text bounds of 118×22px.

### Sidebar Item

- Family: Sidebar Item
- Component size: 254×50px.
- Screen item heights: 50px.
- Screen item widths:
  - Android Large: 326px for primary items, 294px for nested items
  - iPhone 13 Pro Max: 390px for primary items, 358px for nested items
  - iPad Pro 11" open state: 309px for primary items, 277px for nested items
- Fill:
  - Primary items: #F4D08966
  - Nested items: #F4D08999
- Radius: 8px.
- Effect: drop shadow with 8px blur, 0px horizontal offset, 2px vertical offset, #CDCDCD40.
- Label:
  - Example: `Project Title`
  - Font: Josefin Sans Regular
  - Size: 22px
  - Color: #535151
  - Component example rendered text bounds: 80×22px

## Screen patterns

- Mobile screens place a 70px-high Navbar at the top and a full-width Sidebar below it.
- Android Large uses a 360px-wide screen with a 360×730px Sidebar beneath the Navbar.
- iPhone 13 Pro Max uses a 428px-wide screen with a 428×856px Sidebar beneath the Navbar.
- Mobile sidebars contain three primary Sidebar Items followed by a nested group.
- The nested group has a 309px height and uses #F4EEEE26 with an 8px radius.
- The nested group contains one Dropdown Menu followed by four nested Sidebar Items.
- On iPad Pro 11", the closed sidebar is a narrow 56px-wide strip with a 1124px height.
- On iPad Pro 11", the open sidebar is 348px wide and contains the same primary and nested item pattern.
- Navbar width follows the screen width in screen examples: 360px, 428px, or 834px.
- The iPad open state uses a 348px sidebar; the remaining screen area stays white.

## Notes for implementers

- Use only the listed colors and typography values; no local variables or text styles were extracted.
- Preserve the distinction between primary Sidebar Item fill #F4D08966 and nested Sidebar Item fill #F4D08999.
- Keep the Sidebar Item drop shadow consistent: 8px blur, 0px horizontal offset, 2px vertical offset, #CDCDCD40.
- Keep the Navbar at 70px height across screen sizes.
- Preserve the responsive sidebar states: narrow 56px closed state on iPad Pro 11" and expanded 348px state.
- Do not treat the chevron image as a color token; its image asset was extracted only as an image hash.
- No spacing variables, motion tokens, grid styles, or local effect styles were found.
