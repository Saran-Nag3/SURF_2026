---
name: unsplash
source: Unsplash Mobile App Mockup (Community); Unsplash Website Light theme (Community)
kind: design-system-context
---

# unsplash - Design System

## Overview

This extraction covers two Unsplash mockup screens:

- Mobile app mockup: 1020 × 1024px frame containing an iPhone 13 Pro group and blurred decorative ellipses.
- Website light theme: 1728 × 1117px frame with a 20px radius, image-led content, navigation, search, introductory copy, and a login/sign-up action.

No local variables, styles, components, grids, or motion tokens were found.

## Design language

- Image-first visual presentation using large photographic regions and tiled image placeholders.
- Minimal monochrome interface treatment with black text, white surfaces, and neutral gray supporting tones.
- Navigation uses large Istok Web text.
- Primary interaction emphasis is placed on search and login/sign-up actions.
- The mobile mockup includes a decorative device presentation with soft blurred shadow ellipses.

## Color palette

Ranked by reported raw usage across the source:

| Color | Reported uses | Usage |
|---|---:|---|
| #000000 | 11 | Primary text, vectors, strokes, and mobile decorative ellipses |
| #C4C4C4 | 5 | Website image placeholders |
| #FFFFFF | 3 | Mobile mockup raw color |
| #A3A3A3 | 3 | Search placeholder text and search icon strokes |
| #2F2F2F | 3 | Chevron strokes |

Additional extracted usage includes white website surfaces and a gray website line stroke, but no allowed palette token was provided for the line stroke.

## Type scale

| Size | Typeface | Weight/style | Usage |
|---:|---|---|---|
| 25px | Istok Web | Regular | Navigation labels and heading copy |
| 20px | Istok Web | Regular | Search placeholder text |

Extracted text examples include “Explore,” “Advertise,” “Blog,” “About Us,” “Login / Sign Up,” and “Search Free High-resolution photos.”

## Spacing scale

_None found in source._

## Radius scale

| Radius | Usage |
|---:|---|
| 10px | Search field |
| 15px | Login / Sign Up action |
| 20px | Website light-theme frame |

## Elevation & effects

- Three mobile mockup ellipses use a 19px layer blur.
- No local effect styles or elevation tokens were found.

## Components

_None found in source._

## Screen patterns

### Mobile app mockup

- 1020 × 1024px presentation frame.
- Contains an approximately 792.25 × 957.75px “iPhone 13 Pro” group.
- Includes three blurred black ellipses sized 247 × 11px, 205 × 11px, and 241 × 11px.
- The device group is marked decorative in the extraction.

### Website light theme

- 1728 × 1117px frame with a 20px radius.
- Full-frame photographic background layer.
- Image mosaic includes regions sized 394 × 424px, 250 × 250px, and 394 × 342px.
- Header includes a stacked Unsplash logo, a separate vector mark, and navigation labels.
- Navigation labels use Istok Web Regular at 25px.
- Search field is 495 × 68px with a 10px radius, search icon, and placeholder text at 20px.
- Introductory heading uses Istok Web Regular at 25px.
- Login / Sign Up action is 240 × 75px with a 15px radius and a 1px black stroke.
- Chevron icon is 24 × 24px with 2px strokes.

## Notes for implementers

- No reusable component specifications were extracted; implement the observed patterns directly rather than assuming a component library.
- Preserve the image-led composition and monochrome interface treatment.
- Use Istok Web Regular at 25px for navigation and heading text, and 20px for the search placeholder.
- Use the extracted radius values only for their observed patterns: 10px search field, 15px login/sign-up action, and 20px website frame.
- Apply the 19px blur only to the mobile mockup’s decorative ellipses.
- Use the provided palette values without introducing additional color tokens.
