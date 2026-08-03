---
name: stockx-app-community
source: STOCKx App (Community)
kind: design-system-context
---

# stockx - Design System

## Overview

- Source: STOCKx App (Community)
- Source pages: All pages (2): Page 1, Page 2
- Primary viewport: 375×812px iPhone 11 Pro layout
- Screens include an investment dashboard, OTP verification, and mobile-number registration.
- Additional promotional artwork includes image-filled rectangles and large promotional headings.
- No local variables, styles, components, or component sets were found.

## Design language

- Use a clean mobile-first interface on a white background.
- Primary accent color is #5156D8.
- Use black for primary text and white for text on accent surfaces.
- Typography uses Roboto with Medium, Regular, and Black weights.
- Controls commonly use rounded corners with 10px or 15px radii.
- Dashboard visualizations use #5156D8 strokes.
- Promotional headings use large Roboto Black typography.

## Color palette

Ranked by extracted usage:

| Color | Uses | Role |
|---|---:|---|
| #000000 | 25 | Primary text, dark controls, strokes |
| #FFFFFF | 14 | Screen backgrounds, text on accent or dark surfaces |
| #5156D8 | 7 | Primary accent, buttons, active surfaces, chart strokes |
| #F1F1F1 | 3 | Secondary surfaces and controls |

## Type scale

Font family: Roboto.

| Size | Weight | Extracted usage |
|---:|---|---:|
| 18px | Medium | 4 uses |
| 20px | Medium | 8 uses |
| 20px | Regular | 5 uses |
| 25px | Medium | 3 uses |
| 15px | Regular | Present in the “NEXT >” label |
| 25px | Regular | Present in registration and OTP headings |
| 35px | Black | Present in the “COMING SOON” heading |
| 48px | Black | Present in the “ALL NEW STOCKx APP” heading |
| 50px | Black | Present in the “TODAY” heading |

Observed text roles include dashboard labels, monetary values, registration headings, OTP messaging, button labels, and promotional headings.

## Spacing scale

_None found in source._

## Radius scale

- 10px: OTP entry cells, submit buttons, registration input, investment add control.
- 15px: Dashboard cards, dashboard tabs, and navigation surfaces.
- 30px: iPhone 11 Pro screen frames.

## Elevation & effects

- No elevation or shadow styles were found.
- No local effect styles were found.
- Chart strokes use #5156D8 at 5px and 3px widths.
- Image-filled rectangles are present, but no reusable image or effect specification was extracted.

## Components

_None found in source._

## Screen patterns

- **Investment dashboard:** White 375×812px mobile screen with rounded 30px frame; trending/profit content, total amount, date labels, a #5156D8 line chart, and investment cards.
- **OTP verification:** Instructional heading, “Verifying” label, four dark outer OTP cells with white inner cells, an OTP label in #5156D8, and a #5156D8 submit button.
- **Mobile registration:** “Enter Your Mobile No” heading, rounded phone-number input with country code, “Register” label, and a #5156D8 submit button.
- **Promotional artwork:** Large image-filled rectangles and promotional headings including “ALL NEW STOCKx APP” and “COMING SOON”.

## Notes for implementers

- Treat #5156D8 as the primary interactive accent.
- Use #000000 for primary text and #FFFFFF for screen backgrounds and text on dark or accent surfaces.
- Use Roboto only, selecting the extracted Regular, Medium, or Black weights according to the type scale.
- Preserve the observed 10px, 15px, and 30px corner radii.
- Build the dashboard, OTP, and registration layouts as separate screen patterns; no reusable component definitions were provided.
- Do not infer spacing, elevation, motion, or local design tokens; these were not extracted.
