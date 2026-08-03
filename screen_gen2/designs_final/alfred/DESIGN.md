---
name: meenakshi-alfred-s-pizza-digital-wireframe-community
source: meenakshi-Alfred's pizza digital wireframe (Community)
kind: design-system-context
---

# alfred - Design System

## Overview

A monochrome mobile pizza-ordering wireframe for Alfred’s Pizza. The source contains nine iPhone 13 Pro Max screens at 428×926px, covering pizza discovery, custom pizza building, toppings, order review, checkout, pickup, and payment.

## Design language

- Wireframe-led visual language using black, white, light gray, and translucent black.
- Inter Regular is used throughout the interface.
- Large text headings are the primary hierarchy mechanism.
- Layouts use outlined cards, gray image placeholders, horizontal dividers, pill-shaped controls, and large full-width action areas.
- Brand presentation centers on the “Alfred’s pizza” wordmark and a black circular mark.
- Controls alternate between white outlined states and black filled selected states.

## Color palette

Ranked by source usage:

| Color | Usage | Primary use |
|---|---:|---|
| `#000000` | 186 | Text, marks, strokes, filled controls, selected states |
| `#D9D9D9` | 142 | Placeholder fills, dividers, progress lines, disabled or secondary surfaces |
| `#FFFFFF` | 32 | Screen backgrounds, card surfaces, outlined controls, inverse text |
| `#00000040` | 7 | Dimmed screen and overlay surfaces |
| `#131212` | 6 | Dark input borders |
| `#F7F9F7` | 5 | Payment input backgrounds |

## Type scale

All typography uses Inter Regular:

| Size | Usage count |
|---:|---:|
| 30px | 27 |
| 28px | 17 |
| 32px | 14 |
| 33px | 10 |
| 24px | 4 |

Observed hierarchy:

- 33px: payment information, total, and other large checkout headings.
- 32px: prominent section headings and primary actions.
- 30px: screen titles and configuration headings.
- 28px: order details, labels, and payment fields.
- 24px: smaller headings and pickup text.
- 25px: confirmation text, “confirm your order”.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- 12px
- 14px
- 15px
- 19px
- 20px
- 21px

Additional compound radius values include `15/0/0/15px` and `0/0/0/0px`.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

- **Pizza discovery:** Brand header, “Today’s top pizza” content, gray image placeholders, “Add to order” action, and “Pizza’s you might like” recommendation cards.
- **Pizza builder:** Brand header, “Build your own alfred’s pizza” title, pizza preview, size choices, ingredient cards, and a large action area.
- **Sauce selection:** Brand header, “Sauce” heading, dimmed overlay surfaces, and selectable ingredient cards.
- **Pizza finalization:** “Finalize your pizza” heading, pizza preview, “Toppings” section, topping cards, and bottom divider.
- **Current order:** “Current order” heading, ordering location, item rows, total, and “Add item” action.
- **Checkout confirmation:** Checkout header, “confirm your order” section, order summary, total, and a large gray action area.
- **Pickup scheduling:** “Pickup time” heading, selected “pickup” pill, ordering location, pickup-by and time-of-pickup fields.
- **Payment:** “Payment information” heading, credit card number field, secondary payment fields, total, and “Complete order” action.
- **Dimmed states:** Some screens use `#00000040` as a dimmed frame or card surface.

## Notes for implementers

- Use a 428×926px mobile screen frame for the extracted screen patterns.
- Use only the extracted palette: `#000000`, `#00000040`, `#131212`, `#D9D9D9`, `#F7F9F7`, and `#FFFFFF`.
- Use Inter Regular at 24px, 25px, 28px, 30px, 32px, or 33px.
- Preserve the strong black-and-white contrast and gray placeholder treatment.
- Represent selected controls with black fill and white text; represent unselected controls with white fill and black stroke or text.
- Use gray horizontal dividers and progress-like lines between major checkout sections.
- Use rounded controls with the observed 12px, 14px, 15px, 19px, 20px, or 21px radii.
- Do not introduce component-family assumptions: the source contains no extracted Figma components or component sets.
