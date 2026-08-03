---
name: glide-ui-ux-design-community
source: Glide - UI UX Design (Community)
kind: design-system-context
---

# glide - Design System

## Overview

- Mobile-first transportation and accessibility app UI.
- Primary viewport: 390×844px.
- Main flows: onboarding, login, signup, assistance selection, accessibility-problem selection, home, destination discovery, and location details.
- Component families extracted: `SWM icons`, `navbar`.
- No local variable collections, text styles, spacing variables, radius variables, or motion variables found.

## Design language

- Accessibility-focused transportation product with friendly, rounded controls.
- Primary interface color is bright blue: `#379BF1`.
- Use white surfaces and high-contrast dark text.
- Use rounded pill-shaped actions and rounded content panels.
- Decorative onboarding illustrations and transportation imagery are prominent.
- Poppins is the dominant typeface; Inter, Public Sans, and Avenir Next also appear in the source.
- Bottom navigation is persistent on home and detail screens.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Usage | Source role / guidance |
|---|---:|---|
| `#FAFAFA` | 386 | Most-used neutral surface |
| `#000000` | 291 | Primary text and icon color |
| `#FFFFFF` | 251 | Text, surfaces, and light backgrounds |
| `#E6E6E6` | 202 | Neutral UI color |
| `#282523` | 114 | Dark neutral |
| `#302D2A` | 96 | Dark neutral |
| `#35312D` | 94 | Dark neutral |
| `#D8D8D8` | 84 | Neutral border/surface |
| `#D9D9D9` | 81 | Grey token |
| `#26231F` | 76 | Dark neutral |
| `#263238` | 76 | Dark neutral |
| `#95DA39` | 72 | Green accent |
| `#E9751C` | 70 | Orange accent |
| `#2E66B7` | 60 | Blue accent |
| `#A8A8A8` | 52 | Secondary neutral |
| `#00000066` | 51 | Black transparency |
| `#3F3932` | 44 | Dark neutral |
| `#BEBEBE` | 44 | Secondary neutral |
| `#1369D8` | 42 | Blue icon/accent |
| `#3F3D56` | 42 | Dark accent |
| `#3A3735` | 36 | Dark neutral |
| `#E2E2E2` | 36 | Neutral surface |
| `#379BF1` | 34 | Primary blue |
| `#CD8005` | 32 | Amber accent |
| `#FDFFEF` | 32 | Pale accent surface |
| `#444342` | 30 | Dark neutral |
| `#C9C6C3` | 30 | Neutral |
| `#F0FDFF` | 30 | Pale blue surface |
| `#001A72` | 24 | Deep blue icon stroke |
| `#316DC3` | 24 | Blue accent |
| `#3677D6` | 24 | Blue accent |
| `#D3D3D3` | 24 | Neutral |
| `#DDDBD8` | 24 | Neutral |
| `#EE9D11` | 24 | Amber accent |
| `#F1EEEC` | 24 | Pale neutral surface |
| `#6C63FF` | 22 | Purple accent |
| `#CCCCCC` | 22 | Neutral |
| `#36334A` | 20 | Dark accent |
| `#89C738` | 18 | Green accent |
| `#B3B3B3` | 18 | Secondary neutral |
| `#407BFF` | 16 | Blue accent |
| `#47433F` | 16 | Dark neutral |
| `#E0E0E0` | 16 | Neutral |

Named color tokens:

- `primary`: `#379BF1`
- `blue2`: `#1469D9`
- `blue3`: `#88C9F2`
- `blue4`: `#A0DBF2`
- `font`: `#FFFFFF`
- `grey`: `#D9D9D9`
- `grey1`: no value found

## Type scale

Use the following source-observed combinations; do not infer additional weights or sizes.

- `Poppins Bold`, `96px` — 3 uses
- `Poppins SemiBold`, `64px` — 8 uses
- `Inter Regular`, `32px` — 12 uses
- `Poppins Bold`, `32px` — 4 uses
- `Poppins SemiBold`, `30px` — 4 uses
- `Inter Regular`, `24px` — 8 uses
- `Poppins SemiBold`, `24px` — 17 uses
- `Public Sans Regular`, `24px` — 3 uses
- `Inter Medium`, `20px` — 4 uses
- `Inter Regular`, `20px` — 30 uses
- `Poppins ExtraBold`, `20px` — 3 uses
- `Poppins Medium`, `20px` — 9 uses
- `Poppins Regular`, `20px` — 11 uses
- `Poppins SemiBold`, `20px` — 4 uses
- `Public Sans Bold`, `20px` — 12 uses
- `Poppins Medium`, `19px` — 10 uses
- `Poppins Regular`, `16px` — 55 uses
- `Poppins Bold`, `16px` — 33 uses
- `Poppins Medium`, `16px` — 8 uses
- `Poppins SemiBold`, `16px` — 10 uses
- `Inter Medium`, `16px` — 30 uses
- `Poppins Bold`, `15px` — 6 uses
- `Poppins Medium`, `15px` — 6 uses
- `Poppins Regular`, `15px` — 10 uses
- `Inter Medium`, `13px` — 4 uses
- `Poppins Regular`, `13px` — 4 uses
- `Inter Medium`, `12px` — 22 uses
- `Poppins Bold`, `12px` — 4 uses
- `Poppins Regular`, `12px` — 6 uses
- `Avenir Next Regular`, `10px` — 43 uses
- `Inter Medium`, `10px` — 8 uses

Observed hierarchy:

- Large display: `Poppins Bold`, `96px`
- Display: `Poppins SemiBold`, `64px`
- Large headings: `Inter Regular` or `Poppins Bold`, `32px`
- Screen headings: `Poppins SemiBold`, `24px` or `30px`
- Body and controls: primarily `Poppins Regular`, `Poppins Medium`, or `Poppins Bold`, `16px`
- Supporting labels: `12px`–`15px`

## Spacing scale

- No spacing variables found.
- Observed grid: 4 columns, `67.5px` section, `20px` gutter, stretch alignment.
- Common source dimensions include `390px` mobile width, `330px` content width, `326px` form width, and `147px` or `155px` action widths.

## Radius scale

Observed radii:

- `10px` — search field, cards, transportation tiles
- `18px` — destination image
- `40px` — assistance buttons and navbar upper corners
- `70px` — large login/signup/assistance sheet upper corners
- `104.5px` — pill buttons and input controls
- `1px` — star icon detail
- `0px` — square/group containers
- `70/70/0/0px` — top corners rounded, bottom corners square
- `40/40/0/0px` — navbar top corners rounded, bottom corners square

## Elevation & effects

- `new`: drop shadow, `26px`, offset `0 4`, color `#0000001A`
- `drop shadow_f`: drop shadow, `16px`, offset `0 -8`, color `#00000014`; plus drop shadow, `4px`, offset `0 0`, color `#0000000A`
- Opacity color: `#00000066`
- Buttons and elevated sheets consistently use shadows.
- Bottom navbar uses `drop shadow_f`.
- Only the effect colors listed above are retained because they are the allowed extracted color values.

## Components

### navbar

- Family: `navbar`
- Size: `390×72.6px`
- White surface: `#FFFFFF`
- Radius: `40/40/0/0px`
- Effect: `drop shadow_f`
- Contains four navigation icon positions:
  - User
  - Clock
  - Home
  - Information
- Icon sizing is approximately `30px`; source instances range from `30×30px` to `30.55×30.39px`.
- Active and accent icon strokes use `#1369D8` or `#1469D9`.

### SWM icons

- Family: `SWM icons`
- Extracted icon: `outline / arrow-down`
- Size: `40×40px`
- Other observed icon instances include search, user, clock, home, information, star, and arrow-left variants.
- Common icon stroke widths: `1.5px`, `2px`, and `3px`.
- Deep blue icon stroke: `#001A72`.
- Blue icon stroke/fill: `#1369D8` or `#1469D9`.

## Screen patterns

- **Onboarding:** 390×844px screens with large decorative illustrations, explanatory Poppins copy, pagination-style circular controls, and a primary `NEXT` pill button. Primary action is `159×41px`, with `104.5px` radius.
- **Login:** Blue background with an image area above a white rounded content sheet. Uses `326×46px` rounded input controls, a `147×46px` primary `LOGIN` button, social sign-in, divider, password recovery, and account-switching links.
- **Signup:** Mirrors login structure with mobile and name inputs, a `147×46px` primary `SIGNUP` button, social sign-up, and login link.
- **Assistance selection:** Image-led screen with a white rounded sheet, `24px` semibold heading, explanatory `16px` body copy, and stacked `YES`/`NO` controls sized about `155px` wide.
- **Problem selection:** White rounded content sheet over a blue/image background. Presents three stacked pill choices: `Sensory`, `Physical`, and `Cerebral`, each in a `330×47px` control.
- **Home discovery:** White screen with greeting, `32px` discovery heading, search field, promotional cards, transportation mode cards, and persistent bottom navbar.
- **Destination details:** Search field, destination image, location heading, rating stars, availability labels, accessibility information, nearest metro, medical facilities, wheelchair availability, back navigation, and persistent bottom navbar.

## Notes for implementers

- Build for a 390px-wide mobile layout first.
- Keep primary actions blue with white labels: `#379BF1` and `#FFFFFF`.
- Preserve pill geometry for actions and form controls.
- Use white rounded sheets over blue/image backgrounds for authentication and decision screens.
- Prefer Poppins for new UI text, while preserving source-observed Inter, Public Sans, and Avenir Next usage where needed.
- Use the extracted `navbar` as a fixed bottom navigation pattern on home and detail screens.
- Treat decorative illustrations and image fills as visual assets rather than reusable components.
- Do not introduce unlisted colors, spacing tokens, radii, component families, or effects.
