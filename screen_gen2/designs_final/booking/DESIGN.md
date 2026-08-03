---
name: booking-app-community
source: Booking App (Community)
kind: design-system-context
---

# booking - Design System

## Overview

Mobile booking app UI extracted from the Figma file “Booking App (Community)”. The source includes app screens for the main booking flow, date selection, and credit-card payment. Primary frame size is 375×812px with white surfaces, blue actions, calendar selection states, hotel/trip cards, bottom navigation, and checkout inputs.

## Design language

- Mobile-first layouts use 375px-wide screens.
- Primary actions use blue fills and white labels.
- Content surfaces are predominantly white with 5px corners on controls and cards.
- Typography combines Poppins for prominent headings with Open Sans for controls and supporting content.
- Inter is used for calendar content and compact date labels.
- Navigation uses a 70px bottom tab bar with a white surface.
- Calendar selection uses solid blue selected states and low-opacity blue range backgrounds.
- Checkout uses bordered text inputs with 5px corners and gray placeholder labels.
- Orange is available as a button variant accent.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 191 | Headlines, primary text, entered form values |
| `#FFFFFF` | 132 | App backgrounds, cards, buttons, navigation surfaces |
| `#CCCCCC` | 76 | Icons, borders, inactive controls |
| `#3865E0` | 73 | Calendar selection, active navigation, links and accents |
| `#007AFF` | 38 | Primary buttons, arrows, active controls |
| `#FFFFFF5C` | 25 | White translucent elements |
| `#FF9500` | 24 | Orange accent |
| `#FF8D23` | 18 | Orange accent variant |
| `#86878B` | 17 | Gray interface elements |
| `#003473` | 16 | Dark blue accent |
| `#ABB9CD` | 12 | Muted blue-gray |
| `#2E3543` | 11 | Calendar weekday text |
| `#0000005C` | 10 | Black translucent elements |
| `#DADADA` | 10 | Light gray elements |
| `#777777` | 9 | Gray icons and supporting text |
| `#7B61FF` | 7 | Purple accent |
| `#C4C4C4` | 7 | Gray controls |
| `#D9D5D2` | 6 | Warm gray |
| `#FFFFFFE5` | 6 | White with high opacity |
| `#9597A1` | 5 | Segmented-control background |
| `#F0F0F0` | 5 | Light gray background |
| `#F0F0F1` | 4 | Main calendar background |
| `#FCB131` | 4 | Yellow accent |

Named color mappings:

- Headlines / Black: `#000000`
- Colors | Basic / Light / White: `#FFFFFF`
- Blue: `#007AFF`
- Gray Icon: `#A3A3A3`
- Gray Text: `#777777`
- Gray/03: `#BDBDBD`
- Tik Tok Dark: `#161722`

## Type scale

### Defined typography tokens

| Token | Family | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| Title/ 1 | Poppins | 600 | 25px / 28px | 0px |
| Title/2 | Poppins | 600 | 22px / 28px | 0.35px |
| Secondary / active | Open Sans | 600 | 17px / 22px | -0.41px |
| Secondary/not active | Open Sans | 400 | 17px / 22px | -0.41px |
| Button | Open Sans | 700 | 16px / 22px | -0.41px |

### Additional raw styles

- Inter Medium, 14px
- Inter Regular, 14px
- Open Sans Regular, 18px
- Open Sans Regular, 15px
- Open Sans Regular, 13px
- Open Sans Regular, 12px
- Open Sans SemiBold, 22px
- Open Sans SemiBold, 16px
- Open Sans SemiBold, 15px
- Open Sans SemiBold, 14px
- Open Sans Bold, 16px
- Roboto Bold, 14px

## Spacing scale

No spacing variables were found.

Concrete component spacing:

- Boxes padding: 6px 10px 6px 10px
- Boxes content gap: 10px
- Button height: 50px
- Navigation height: 70px
- Purchase row height: 62px
- Main content width: 343px or 345px within a 375px screen
- Calendar day cells: 35×35px

## Radius scale

No radius variables were found.

Observed concrete radii:

- 5px: boxes, buttons, hotel cards, calendar cards, checkout inputs
- 10px top corners: bottom sheets and bottom navigation surfaces
- 15px: main mobile screen frame
- 40px: toggle control
- 2px: segmented-control background
- 0px: row and container groups without rounded corners

## Elevation & effects

- A navigation bottom bar uses a drop shadow with 3px offset and a vertical offset of -2px.
- A toggle control uses a drop shadow with 0.3px offset and 0px horizontal and vertical displacement.
- No local effect styles were found.
- No local motion variables were found.
- No local grid styles were found.

## Components

Only the following component families are present.

### Boxes

- Size: 130×35px
- Variant widths also include 56px
- Radius: 5px
- Layout: horizontal
- Padding: 6px 10px 6px 10px
- Gap: 10px
- Alignment: minimum/center or center/center
- Sizing: fixed width and fixed height
- Fill: `#FFFFFF`
- Stroke: `#FFFFFF`, 1px
- Text: Open Sans SemiBold, 14px
- Variants: `Box_city`, `Box_data`, `Box_main`, `Box_man`, `auto_l_#`, `auto_l_a`, `auto_l_data`

### Buttons

- Size: 345×50px
- Radius: 5px
- Text: Open Sans Bold, 16px
- Label variants use Open Sans SemiBold, 17px
- Fill: `#FFFFFF` base; blue button fill uses `#007AFF`
- Variants: `Button_blue`, `Button_orange`

### Group 706

- Size: 345×167px
- Typography:
  - Open Sans Bold, 16px
  - Open Sans SemiBold, 16px
  - Secondary/not active
  - Title/ 1
- Use for grouped content blocks combining headings, button text, and secondary labels.

### Hotel Card

- Size: 343×216px
- Fill: `#FFFFFF`
- Typography:
  - Open Sans Regular, 12px
  - Open Sans SemiBold, 22px
  - Open Sans Regular, 18px
  - Open Sans Regular, 15px
  - Open Sans Regular, 13px
- Used for property or hotel information with image, title, metadata, and navigation affordance.

### Navigation

- Size: 375×70px
- Fill: `#FFFFFF`
- Uses four tab destinations:
  - Search
  - Main
  - Notification
  - Profile
- Active icon color: `#3865E0`
- Inactive icon color: `#CCCCCC`
- Top corners: 10px

### Purchase

- Main purchase component size: 343×255px
- Text: Open Sans Regular, 18px
- Variant: `Credit card/Group/face id`
- Checkout inputs:
  - Input height: 43.59px
  - Input radius: 5px
  - Border: `#CCCCCC`, 1px
  - Labels: Gray Text, Open Sans Regular, 18px
- Supporting purchase rows:
  - Width: 375px
  - Height: 62px
  - Title: Open Sans Regular, 17px
  - Subtitle: Open Sans Regular, 15px
  - Subtitle opacity: 48%
  - Arrow control: 32×32px
- Used for payment entry and checkout summary rows.

## Screen patterns

### Main

- 375×812px mobile screen with white frame.
- Large blue visual header area with a prominent Poppins title.
- Hotel/trip card pattern includes a 50×50px image, destination title, date range, passenger metadata, and arrow.
- Date selection begins with heading text and Boxes controls.
- Bottom Navigation is fixed as a 375×70px white tab bar.
- Links and arrows use `#3865E0`.

### Main / Choose data

- 375×812px screen with a `#F0F0F1` calendar background.
- Top area is 375×105px and includes a blue back arrow and segmented Year/Month control.
- Calendar cards are white with 5px corners.
- Calendar day cells use 35×35px sizing and Inter 14px text.
- Weekday labels use Inter Regular, 14px; Saturday and Sunday are visually distinct in the source.
- Selected dates use `#3865E0`.
- Selected ranges use translucent blue fills.
- Bottom action sheet is 375×144px with white fill, 10px top corners, a toggle, title text, and a 345×50px blue button.

### Checkout / Payment / Credit card

- 375×812px white screen with 15px frame radius.
- Top area is 375×105px with back navigation and iPhone status-bar treatment.
- Payment form width: 343px.
- Card number, expiration date, CVV/CVC, and card holder name fields use 5px-radius inputs with `#CCCCCC` 1px borders.
- Form labels use Gray Text and Open Sans Regular, 18px.
- Entered values use `#000000` and Open Sans Regular, 18px.
- Primary payment action is a 345×50px blue button with a white label.
- Checkout summary rows use 375×62px purchase rows.

## Notes for implementers

- Use the defined Poppins tokens for main titles and Open Sans tokens for actions, navigation labels, form labels, and supporting text.
- Preserve the 375px mobile composition and the recurring 343–345px content width.
- Use `#3865E0` for calendar selections and active navigation; use `#007AFF` for primary actions, arrows, and action links.
- Use `#CCCCCC` for inactive icons and form borders.
- Keep controls at the extracted dimensions rather than introducing a new spacing system.
- Do not add unobserved component families, local variables, motion values, or effect styles.
