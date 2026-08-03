---
name: car-pool-app-design-3d-design-style-community
source: Car Pool / App Design -  3D Design Style (Community)
kind: design-system-context
---

# pool - Design System

## Overview

- Mobile carpool application design presented in a dark, soft-neumorphic visual style.
- Primary mobile screens use 375×812px frames with dark blue surfaces and 32px corner radii.
- Supporting presentation artwork includes a 1600×1200px thumbnail and an 1800×1200px product shot.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion styles, or grid styles were found.

## Design language

- Dark blue-gray foundation with pale blue-gray content surfaces.
- Soft neumorphic treatment: raised controls combine drop shadows and inner shadows.
- Rounded mobile shells, pills, cards, and action buttons.
- Translucent glass controls use white overlays, background blur, and subtle borders.
- Large, bold editorial typography is used for marketing artwork; compact Be Vietnam Pro typography is used throughout the app UI.
- Carpool content is organized into clear information blocks: route, time, price, driver, and available rides.
- Decorative imagery, blurred cones, illustrations, and vehicle photography support the 3D presentation style.

## Color palette

Ranked by source usage:

| Color | Uses | Recommended role |
|---|---:|---|
| `#526D82` | 114 | Primary secondary surface, labels, controls |
| `#27374D` | 98 | Main app background and dark text |
| `#DDE6ED` | 98 | Light content surfaces and primary light text |
| `#9DB2BF` | 40 | Secondary text and muted controls |
| `#FFFFFF` | 33 | White text, icons, and surfaces |
| `#FFFFFF4D` | 18 | Translucent white overlays |
| `#FFFFFFCC` | 18 | High-opacity secondary white text |
| `#FBAD39` | 16 | Warm accent and decorative highlight |
| `#000000` | 12 | Black marketing text |
| `#0A0A0C` | 7 | Near-black marketing text and strokes |
| `#00000000` | 6 | Transparent fills |
| `#2AC5F4` | 6 | Bright cyan accent |
| `#43B739` | 6 | Green accent |
| `#CECECE` | 6 | Muted light marketing text |
| `#D1DCDA` | 6 | Pale green-gray accent |
| `#DDE6ED4D` | 6 | Translucent light-blue surface |
| `#ED3159` | 6 | Pink-red accent |
| `#F6BC17` | 6 | Yellow accent |
| `#FFBC00` | 6 | Primary yellow marketing accent |
| `#FFFFFF29` | 6 | Low-opacity white control background |
| `#DCE5EC` | 5 | Light button text and pale surface |
| `#ECEEEE` | 5 | Progress track and neutral light surface |
| `#FA8E08` | 4 | Orange indicator accent |

## Type scale

Use the following source typography, ordered from largest to smallest:

| Size | Family and weight | Source uses |
|---:|---|---:|
| 64px | Plus Jakarta Sans Bold | 4 |
| 39.6px | Be Vietnam Pro Bold | 3 |
| 32px | Plus Jakarta Sans Regular | 6 |
| 22px | Be Vietnam Pro Bold | 5 |
| 22px | DM Sans Bold | 3 |
| 17.6px | Be Vietnam Pro Medium | 7 |
| 17.6px | Be Vietnam Pro Regular | 6 |
| 17.6px | Be Vietnam Pro SemiBold | 10 |
| 17.6px | DM Sans Regular | 6 |
| 16px | Be Vietnam Pro Medium | 14 |
| 16px | Be Vietnam Pro SemiBold | 5 |
| 15.4px | Be Vietnam Pro Regular | 30 |
| 15.4px | Be Vietnam Pro Medium | 22 |
| 15.4px | DM Sans Medium | 8 |
| 14px | Be Vietnam Pro Regular | 11 |
| 14px | Be Vietnam Pro Medium | 6 |
| 13.2px | Be Vietnam Pro Regular | 6 |
| 13.2px | Be Vietnam Pro Medium | 3 |
| 13.2px | Be Vietnam Pro SemiBold | 5 |
| 12px | Be Vietnam Pro Regular | 13 |
| 11.55px | Be Vietnam Pro Regular | 13 |
| 11.55px | Be Vietnam Pro Medium | 8 |
| 11.55px | DM Sans Medium | 3 |
| 10.12px | Be Vietnam Pro Medium | 3 |
| 10.12px | Be Vietnam Pro SemiBold | 5 |
| 8.86px | Be Vietnam Pro Regular | 11 |
| 8.86px | Be Vietnam Pro Medium | 6 |

Additional source typography:
- Be Vietnam Pro Bold, 20px.
- Be Vietnam Pro ExtraBold, 40px.
- Plus Jakarta Sans Medium, 40px.
- Plus Jakarta Sans Bold, 36px.
- Plus Jakarta Sans Regular, 18px and 30px.
- DM Sans Medium, 14px.
- DM Sans Regular, 16px.
- DM Sans Bold, 20px.

## Spacing scale

No spacing variables were found. Observed layout spacing values include:

- 2.2px
- 3.3px
- 4.4px
- 6.09px
- 6.6px
- 8.8px
- 10px
- 13.2px
- 15.4px
- 17.6px
- 22px
- 24px
- 26.4px
- 37.4px
- 44px
- 48px
- 94.6px
- 107.8px

## Radius scale

No radius variables were found. Observed corner radii include:

- 6.09px
- 8.12px
- 8.8px
- 13.2px
- 16.51px
- 17.6px
- 20px
- 22px
- 26.4px
- 32px
- 35.2px
- 44px
- 55px
- 99px
- 110px

Primary mobile shells use a 32px radius in component specifications and a 35.2px radius in rendered instances.

## Elevation & effects

- `Glass 2`: background blur 80px; drop shadow 16px, offset `0 8`, color `#1B1B1B29`.
- Glass controls use background blur with translucent white or pale blue-gray fills.
- Neumorphic controls combine inner shadows on the top and bottom edges with a downward drop shadow.
- Large content cards use rounded corners, inner shadows, and drop shadows.
- Progress tracks use a fully rounded 110px radius.
- Source also includes layer blur effects at 16px and 63.43px.
- Source includes background blur values of 4.57px, 5.07px, 15.22px, 27.5px, and 88px.

## Components

Allowed component families:

### Onboarding

- Mobile frame: 375×812px specification.
- Rendered instance: 412.5×893.2px.
- Background fill: `#27374D`.
- Radius: 32px specification; 35.2px rendered instance.
- Typography includes Be Vietnam Pro Medium 16px, Regular 16px, and Bold 36px.
- Contains onboarding headline, supporting copy, primary “Get Started” pill, and a large vehicle illustration.

### iPhone 13 mini - 2

- Mobile frame specification: 375×812px.
- Rendered instance: 412.5×893.2px.
- Background fill: `#27374D`.
- Radius: 32px specification; 35.2px rendered instance.
- Typography includes DM Sans and Be Vietnam Pro at 14px, 16px, and 20px.
- Home screen includes profile header, list control, search field, “Top Car Pool” section, ride cards, vehicle image, favorite heart button, and metadata.

### iPhone 13 mini - 3

- Mobile frame specification: 375×812px.
- Rendered instance: 412.5×893.2px.
- Background fill: `#27374D`.
- Radius: 32px specification; 35.2px rendered instance.
- Typography includes Be Vietnam Pro Regular 12px and 14px, Medium 16px, SemiBold 16px, and Bold 20px.
- Ride detail screen includes pickup time, walking time, route timeline, pickup and drop-off locations, price, driver profile, and “Request ride” action.

### vuesax

- `vuesax/bold/heart`
- Size: 24×24px.
- Fill: `#FFFFFF`.

## Screen patterns

### Thumbnail

- 1600×1200px presentation canvas.
- Uses large editorial typography, yellow accent pills, circular outlines, product imagery, phone mockups, and decorative vectors.
- Marketing messaging includes branding, UI/UX design, development, website call-to-action, and contact information.
- Primary marketing colors include `#FFBC00`, `#0A0A0C`, `#000000`, `#FFFFFF`, and `#CECECE`.

### Shot / CarPool App Design

- 1800×1200px dark presentation canvas using `#27374D`.
- Displays multiple mobile app states inside rounded phone frames.
- Includes a “DOWNLOAD NOW” presentation label, onboarding state, ride-detail state, and home/discovery state.
- Mobile actions are large rounded pills with neumorphic shadows.
- Home state emphasizes profile greeting, search, top car pools, vehicle imagery, distance badges, favorite controls, and price information.
- Ride-detail state emphasizes a pale route information card, vertical progress indicator, location hierarchy, price summary, driver profile, and request action.

### UI Design

- Mobile application layouts use centered content blocks inside dark rounded shells.
- Light information cards contrast with the dark background.
- Repeated content pattern: muted label above darker emphasized value.
- Primary actions use `#526D82` on `#27374D`; light cards use `#DDE6ED`.
- Secondary and supporting text use `#9DB2BF`.
- Circular profile and icon controls use rounded or fully circular geometry.

## Notes for implementers

- Restrict implementation colors to the palette listed above.
- Use `#27374D` as the dominant mobile background and `#DDE6ED` for raised information surfaces.
- Use `#526D82` for secondary surfaces, buttons, labels, and muted structural elements.
- Use Be Vietnam Pro for most product UI; use DM Sans selectively for home-screen greeting and metadata; use Plus Jakarta Sans for marketing artwork.
- Preserve the strong type contrast between large bold headings and compact muted labels.
- Build controls with generous rounded corners, especially 26.4px, 35.2px, and 44px treatments.
- Apply soft neumorphism through paired inner shadows and downward drop shadows; use the documented `Glass 2` effect for glass surfaces.
- Keep route and ride information scannable: label first, emphasized value second.
- Use imagery and decorative shapes as supporting visual layers rather than replacing core information.
- Do not introduce unlisted component families, colors, variables, spacing tokens, radius tokens, or motion tokens.
