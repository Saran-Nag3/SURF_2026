---
name: travelers-app-community
source: Travelers App (Community)
kind: design-system-context
---

# travelers - Design System

## Overview

- Product: Travelers, a travel community app.
- Source: Figma file “Travelers App (Community)”, Page 1.
- Primary screen size: 390x844px.
- Screens extracted: Splash Screen, Login, Register, Home, Community.
- Component family: Component 1.

## Design language

- Travel-focused visual identity built around full-bleed photography, rounded cards, and soft shadow effects.
- Brand title uses Katibeh Regular at 60px.
- Supporting and interface text uses Inter and Montserrat.
- Authentication screens use photographic backgrounds with translucent purple controls.
- Home uses a white and off-white content surface with rounded image cards.
- Community uses large rounded content cards and a persistent bottom navigation treatment.
- Imagery is used for backgrounds, avatars, travel cards, and navigation icons.

## Color palette

Ranked by source usage:

| Color | Uses | Observed usage |
|---|---:|---|
| `#000000` | 16 | Primary dark text and strokes |
| `#666CA6CC` | 15 | Authentication controls, borders, bottom navigation, shadows |
| `#FCFCFC` | 14 | Home screen background and light text |
| `#FFFFFF` | 10 | Surfaces, splash content, cards, and light text |
| `#666CA699` | 6 | Dividers and soft shadows |
| `#333FB699` | 4 | Accent navigation surface, links, and shadows |

## Type scale

| Size | Font | Weight/style | Observed usage |
|---:|---|---|---|
| 60px | Katibeh | Regular | “Travelers” title |
| 18px | Montserrat | SemiBold | Community headings and names |
| 15px | Inter | SemiBold | Screen subtitles |
| 15px | Inter | Bold | Authentication action labels |
| 12px | Montserrat | Regular | Home section labels and content |
| 12px | Montserrat | Medium | “See all” links |
| 12px | Montserrat | SemiBold | Community names and headings |
| 12px | Montserrat | Light | Community timestamps and descriptions |
| 12px | Inter | Medium | Bottom navigation label |
| 10px | Inter | Bold | Authentication links and actions |
| 10px | Inter | SemiBold | Authentication helper text |
| 8px | Inter | SemiBold | Authentication field labels |

## Spacing scale

_None found in source._

## Radius scale

- 5px: bottom navigation surface.
- 8px: Home content card and Community image tiles.
- 10px: Login and Register input controls.
- 15px: Community content cards.
- 18px: Splash and Register frame corners; Home popular-traveler cards; Home avatar tiles.
- 20px: Login and Home frame corners.
- `0/0/18/18px`: Login and Register bottom action area.
- `20/20/0/0px`: Home hero image.

## Elevation & effects

- Home content card: drop shadow, 10px blur, offset `0 4`, color `#666CA699`.
- Popular traveler cards: drop shadow, 10px blur, offset `0 0`, color `#333FB699` or `#666CA699`.
- Home avatar tiles: drop shadow, 10px blur, offset `0 0`, color `#666CA6CC`.
- Bottom navigation surface: drop shadow, 5px blur, offset `0 0`, color `#666CA699`.
- Community cards use a 50px drop shadow with offset `0 0`; the source specifies a shadow color that is not included in the supported palette.

## Components

### Component 1

- Family: Component 1.
- Size: 508x207px.
- Fill: `#FFFFFF`.
- Contains three 160x207px rounded image cards.
- Card radius: 18px.
- Card shadows use 10px blur and offset `0 0`.
- The component is used for popular traveler content on Home.

## Screen patterns

### Splash Screen

- 390x844px frame with 18px radius and `#FFFFFF` fill.
- Full-frame travel image background.
- “Travelers” title: Katibeh Regular, 60px.
- “Travel community app” subtitle: Inter SemiBold, 15px.
- Title and subtitle are placed over the image.

### Login

- 390x844px frame with 20px radius and `#FFFFFF` fill.
- Large travel image background.
- Title and subtitle use black text.
- Two 319x55px rounded authentication fields with 10px radius and `#666CA6CC` fill.
- Email and password fields use 1px `#666CA699` divider lines and image-based envelope and lock icons.
- Supporting labels use light text at 8px or 10px.
- Bottom action area is 390x66px with bottom radius `0/0/18/18px`, filled with `#666CA6CC`.
- Primary action label: “Log in”, Inter Bold, 15px.

### Register

- 390x844px frame with 18px radius and `#FFFFFF` fill.
- Large travel image background.
- Four 319x55px rounded authentication fields with 10px radius and `#666CA6CC` fill.
- Fields: Email, Password, Confirm Password, and Name.
- Uses envelope and lock image icons.
- Bottom action area is 390x66px with bottom radius `0/0/18/18px`, filled with `#666CA6CC`.
- Primary action label: “Sign Up”, Inter Bold, 15px.

### Home

- 390x844px frame with 20px radius and `#FCFCFC` fill.
- Hero image is 390x296px with top radius `20/20/0/0px`.
- White brand title and subtitle overlay the hero image.
- Location card: 284x54px, 8px radius, white fill, 0.5px `#666CA6CC` stroke, and soft shadow.
- Section labels include “Right now at London” and “Popular Travelers”.
- “See all” links use Montserrat Medium, 12px, with `#333FB699`.
- Popular traveler content uses Component 1.
- Four 76x76px image tiles use 18px radius and soft shadows.
- Bottom navigation uses a 109x32px rounded accent surface with 5px radius.
- Navigation includes Globe, View Module, Discussion Forum, and Notification Center image icons, plus the “Home” label in white Inter Medium, 12px.

### Community

- 390x844px frame with 20px radius and a source color not included in the supported palette.
- Uses large rounded content cards with 15px radius.
- “Popular Travelers” heading uses Montserrat Regular, 18px.
- Traveler avatars are 40x40px image-based circles.
- Traveler names use Montserrat SemiBold.
- Timestamps and descriptions use Montserrat Light, 12px.
- Recent post image tiles are 92x92px with 8px radius.
- Bottom navigation matches the Home pattern.

## Notes for implementers

- Use only the listed palette colors for solid fills, text, borders, and supported effects.
- Preserve the supplied font families, sizes, and weights; do not substitute type styles without a source-defined equivalent.
- Keep authentication controls at 319x55px with 10px radius.
- Keep primary authentication action areas at 390x66px with bottom radius `0/0/18/18px`.
- Use image assets for photographic backgrounds, avatars, travel cards, and interface icons rather than replacing them with invented colors.
- Treat Component 1 as the only extracted reusable component family.
- Maintain the rounded-card language across Home and Community screens.
- No spacing, motion, local variable, local text-style, local paint-style, grid-style, or local effect-style tokens were found.
