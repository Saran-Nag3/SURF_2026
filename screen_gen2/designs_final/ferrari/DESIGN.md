---
name: ferrari-website-ui-ux-community
source: Ferrari Website UI UX (Community)
kind: design-system-context
---

# ferrari - Design System

## Overview

- Source: Ferrari Website UI UX (Community), Page 1.
- Single extracted screen: Ferrari Website UI UX, 1280×720px.
- No local variables, paint styles, text styles, components, grids, motion tokens, or effect styles were found.
- Visual direction centers on a high-contrast Ferrari wordmark, automotive imagery, a prancing horse logo, and a horizontal navigation.

## Design language

- Use oversized display typography for the primary Ferrari wordmark.
- Combine solid white lettering with white outlined lettering.
- Use a red-to-orange linear gradient as the primary screen background.
- Use black navigation and contact text over the white top bar.
- Pair the wordmark and automotive imagery with the Ferrari prancing horse logo.
- Maintain a strong contrast between the white header, dark navigation text, and saturated background.

## Color palette

| Color | Usage |
|---|---:|
| #000000 | 5 uses |
| #FFFFFF | 4 uses |

- The screen background uses a linear gradient, but no local color token was extracted for it.
- White is used for the Ferrari wordmark, outlined wordmark strokes, and top-bar surface.
- Black is used for navigation and contact text.

## Type scale

| Size | Family | Weight | Usage |
|---:|---|---|---|
| 250px | Poppins | SemiBold | Ferrari wordmark; 3 uses |
| 14px | Poppins | Medium | Navigation and contact text; 5 uses |

- The primary display treatment uses Poppins SemiBold at 250px.
- Navigation labels and “Contact Seller” use Poppins Medium at 14px.

## Spacing scale

_None found in source._

## Radius scale

- 20px: top-bar rectangle.
- 0px: extracted groups.

## Elevation & effects

- No local effect or elevation styles were found.
- The outlined Ferrari wordmark uses a 3px #FFFFFF stroke.
- The background is a linear gradient.
- No shadow, blur, or motion values were extracted.

## Components

_None found in source._

## Screen patterns

### Ferrari Website UI UX

- Canvas: 1280×720px.
- A 1280×149px white top bar spans the screen and uses a 20px radius.
- Navigation includes “Home”, “About”, “Design”, and “Overview”.
- “Contact Seller” appears as a separate navigation action.
- A 42×55px Ferrari prancing horse logo appears in the header area.
- The central visual area combines a large Ferrari wordmark, repeated white outlined wordmark treatments, and a 980×654px automotive image.
- The main wordmark group is 995×751px.
- The screen background is a linear gradient.

## Notes for implementers

- Preserve the 1280×720px screen composition when reproducing the extracted design.
- Use only the extracted type styles: Poppins SemiBold at 250px and Poppins Medium at 14px.
- Use #FFFFFF for the wordmark, wordmark strokes, and top bar; use #000000 for navigation and contact text.
- Recreate the primary wordmark with both filled white and 3px white outlined treatments.
- Keep the top bar at 149px height with a 20px radius.
- No reusable component specifications were extracted; implement the navigation, wordmark, logo, and image as screen-specific patterns.
- Image assets were present in the source, but their visual contents were not converted into design tokens.
