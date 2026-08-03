---
name: 02-laundromate-laundry-express-mobile-application-ui-community
source: 02. LaundroMate-Laundry Express mobile application UI (Community)
kind: design-system-context
---

# express - Design System

## Overview

- Mobile laundry-service application UI.
- Primary frame width: 430px.
- Screens use white surfaces, blue branding, gray supporting text, yellow ratings/bookmarks, and rounded outlined actions.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Brand identity combines blue “Laundro” wordmark text with gray “Mate” text.
- Primary action color: #0E4AE3.
- Supporting brand blue: #0000FF.
- Headings use Josefin Sans Bold or SemiBold.
- Interface labels and body copy primarily use Inter or Jost.
- Laundry-shop listings use image placeholders, bookmark icons, five-star ratings, metadata labels, and horizontal dividers.
- Common controls are pill-shaped with 50px radius and blue outlines.
- Status bars use a gray treatment with white system information.

## Color palette

Ranked by source usage:

| Color | Uses | Role |
|---|---:|---|
| #000000 | 170 | Primary black text and strokes |
| #FFFFFF | 105 | White surfaces, text, and icon fills |
| #3B3B3B | 77 | Dark gray headings, dividers, and icon strokes |
| #FFC107 | 70 | Rating stars and active bookmarks |
| #0000FF | 46 | Primary brand blue and shop-name text |
| #555555 | 40 | Secondary icon color |
| #646464 | 39 | Supporting gray text and logo text |
| #D9D9D9 | 38 | Image placeholders and neutral blocks |
| #A3A3A3 | 32 | Gray supporting UI |
| #FFC10700 | 19 | Transparent yellow rating/bookmark state |
| #FFFFFF4D | 15 | Translucent white |
| #0E4AE3 | 12 | Outlined control borders and control text |
| #4DC6E14D | 12 | Translucent cyan |
| #0E4AE300 | 9 | Transparent blue control fill |
| #4DD0E14D | 9 | Translucent cyan |
| #0E4AE399 | 7 | Translucent blue text |
| #0000FF73 | 6 | Translucent blue icon |
| #090909 | 5 | Near-black detail |
| #4DC6E1 | 5 | Cyan accent |
| #25B82B | 4 | Green status/accent |
| #FFFAFA | 4 | Off-white surface |
| #FFFFFF00 | 4 | Transparent white |

## Type scale

- 50px — Josefin Sans Bold
- 35px — Josefin Sans Bold
- 25px — Josefin Sans Bold
- 19px — Josefin Sans Bold
- 18px — Josefin Sans SemiBold
- 17px — Inter Regular
- 17px — Inter SemiBold
- 16px — Inter Medium
- 15px — Jost Medium
- 15px — Inter Italic
- 15px — Inter Regular
- 15px — Josefin Sans Bold
- 15px — Jost SemiBold
- 15px — Manjari Regular
- 14px — Josefin Sans Bold
- 14px — Josefin Sans Light
- 14px — Jost Light
- 13px — Inter ExtraBold
- 12px — Inter Medium
- 12px — Jost Regular
- 9px — Inter Regular

Most-used text styles:

- Jost Medium, 15px — 48 uses
- Inter Regular, 15px — 24 uses
- Josefin Sans Light, 14px — 16 uses
- Inter Italic, 15px — 15 uses
- Josefin Sans Bold, 19px — 12 uses
- Josefin Sans Bold, 14px — 11 uses
- Josefin Sans SemiBold, 18px — 11 uses
- Inter SemiBold, 17px — 8 uses
- Josefin Sans Bold, 25px — 8 uses

## Spacing scale

No spacing variables found.

Observed component spacing:

- Login button horizontal padding: 24px.
- Login button content gap: 10px.
- Location button horizontal padding: 10px.
- Location button content gap: 10px.

## Radius scale

- 50px — pill-shaped login and location controls.
- 10px — laundry-shop image placeholders.
- 1.8px — status-bar battery rectangle.
- 0px — groups and decorative containers where explicitly shown.

## Elevation & effects

- Location-button text and icon use a drop shadow with 4px blur and offset `0 4`.
- No local effect styles were found.

## Components

### Line 9

- Size: 17x18px.
- Fill: #FFFFFF.

## Screen patterns

### Splash page

- Frame: 430x932px with #FFFFFF background.
- Centered LaundroMate logo.
- “Laundro” uses #0000FF and Josefin Sans Bold, 35px.
- “Mate” uses #646464 and Josefin Sans Bold, 35px.
- Includes a decorative logo group.

### Order completion 2

- Frame: 430x932px with #0000FF background.
- Centered “Order complete!” heading.
- Heading uses #FFFFFF and Josefin Sans Bold, 25px.
- Includes the decorative logo group.

### Log in

- Frame: 430x932px with #FFFFFF background.
- Gray status-bar area at 430x55px with white system information.
- Three 362x45px pill-shaped outlined login controls:
  - “Log in with facebook”
  - “Log in with google”
  - “Log in with phone number”
- Controls use 50px radius, #0E4AE3 1.5px stroke, and #0E4AE3 text.
- Login labels use Inter Medium, 16px.
- Includes back navigation, centered logo, tagline, and “or” separator.
- Tagline: “Got laundry? We got you, Mate!” using #0000FF and Jost Light, 15px.
- “or” uses #646464 and Inter Medium, 12px.

### Homepage 2

- Frame: 430x934px with #FFFFFF background.
- Gray status-bar area at 430x55px with white system information.
- Headings:
  - “Top laundry shops” — #3B3B3B, Josefin Sans Bold, 25px.
  - “Shops available 24/7” — #3B3B3B, Josefin Sans Bold, 25px.
  - “Recent transaction” — #3B3B3B, Josefin Sans SemiBold, 18px.
- Location control: 398x33px pill-shaped outlined button with 50px radius.
- Location text uses Inter Regular, 17px and translucent blue.
- Neutral loading/content rectangles: 400x17px with #D9D9D9.
- Laundry-shop listing groups are 389px wide.
- Listing image placeholders: 123x139px, #D9D9D9, 10px radius.
- Listing metadata includes shop name, location, availability, and customer rating.
- Shop names use #0000FF and Josefin Sans Bold, 19px or 15px.
- Metadata labels use #000000 and Jost Medium, 15px.
- Address text uses #000000 and Inter Regular, 15px.
- Availability text uses #000000 and Inter Italic, 15px.
- Ratings use five 15x15px stars with #FFC107 filled states and #FFC10700 empty states, with #000000 0.5px strokes.
- Listing dividers use #3B3B3B at 1px.
- Bookmark states use yellow active or transparent yellow inactive treatments.

### Composing search 2

- Repeats the Homepage 2 structure and laundry-shop listing pattern.
- Uses the same 430x934px frame, white background, gray status-bar area, headings, location/listing content, image placeholders, bookmarks, ratings, and dividers.

## Notes for implementers

- Preserve the 430px mobile frame width used across the extracted application screens.
- Use Josefin Sans for prominent headings and brand text; use Inter or Jost for interface labels and supporting copy.
- Keep brand blue and gray logo text distinct: “Laundro” is blue and “Mate” is gray.
- Use pill controls with 50px radius for login and location actions.
- Use 10px radius for laundry-shop image placeholders.
- Build laundry-shop cards around a 123x139px image placeholder and a 389px listing width.
- Represent ratings as five 15x15px stars with filled and transparent yellow states.
- Use #D9D9D9 for unavailable image/content placeholders.
- Do not infer additional design tokens; the source contains no local variable or style definitions.
