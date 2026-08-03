---
name: united-states-steel-website-community
source: united states steel website (Community)
kind: design-system-context
---

# united-states-steel - Design System

## Overview

A mobile-oriented United States Steel website design extracted from Figma Page 1. Screens use 375x667px frames with white backgrounds, image-led sections, navigation links, headings, body copy, contact actions, and a customer form flow.

## Design language

- Typography uses Inknut Antiqua Regular throughout the extracted screens.
- Layouts are predominantly white with black text.
- Brand blue is used for primary action buttons.
- Dark charcoal rules appear as 5px horizontal bars.
- Imagery is used in hero and content sections, with extracted image fills.
- Navigation labels include `Home`, `Services`, and `Contacts`.
- The customer flow includes rounded input fields, action buttons, a back action, and a thank-you confirmation screen.

## Color palette

Ranked by extracted usage:

| Color | Usage | Observed role |
|---|---:|---|
| `#000000` | 23 uses | Primary text and headings |
| `#FFFFFF` | 15 uses | Screen backgrounds, inverse button text, input fills |
| `#231F20` | 10 uses | Horizontal rules and dark input/button surfaces |
| `#0058AA` | 3 uses | Primary action buttons |

## Type scale

Typeface: **Inknut Antiqua Regular**

| Size | Usage / examples |
|---:|---|
| 12px | Body copy on Home and Services screens |
| 16px | Navigation labels and form labels |
| 20px | Contact information, customer form titles, and the site title |
| 24px | Section headings, hero heading, and `Go Back` |
| 32px | `Send` and thank-you confirmation heading |

## Spacing scale

_None found in source._

## Radius scale

- `80.5px`: Rounded customer form fields and dark form controls.
- `94px`: Blue action buttons, including `Customer Form` and `Back to Home`.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

- **Home screen:** 375x667px white frame with a 72x72px image mark, navigation links, a 375x248px image hero, a white 24px hero heading, and an `About Us` content section.
- **Services screen:** 375x667px white frame with the shared navigation, a 5px `#231F20` rule, an `Our Services` heading, a 375x245px image, and 12px body copy.
- **Contact screen:** 375x667px white frame with shared navigation, a 5px `#231F20` rule, a 375x242px image, contact information, and a blue `Customer Form` button.
- **Customer form screen:** 375x667px white frame with a 72x72px image mark, 20px title text, a 5px `#231F20` rule, multiple rounded form fields, and `Go Back` and `Send` actions.
- **Thank-you screen:** 375x667px white frame with a 250x250px image mark, a blue rounded `Back to Home` button, and a 32px thank-you message.

## Notes for implementers

- Use only the extracted colors: `#000000`, `#0058AA`, `#231F20`, and `#FFFFFF`.
- Use Inknut Antiqua Regular at the extracted sizes: 12px, 16px, 20px, 24px, and 32px.
- Preserve the mobile frame size of 375x667px for the documented screens.
- Use `#0058AA` for primary action buttons with the extracted `94px` radius.
- Use `80.5px` radius for customer form fields and related dark controls.
- Keep horizontal rules at 5px and `#231F20`.
- No reusable component families, spacing tokens, elevation styles, motion tokens, or local Figma styles were found in the source.
