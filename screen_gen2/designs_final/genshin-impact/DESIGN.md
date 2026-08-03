---
name: genshin-impact-web-ui-design-community
source: Genshin Impact Web UI Design (Community)
kind: design-system-context
---

# genshin-impact - Design System

## Overview

Genshin Impact character-focused web UI extracted from the Figma file “Genshin Impact Web UI Design (Community).” The source contains desktop screens at 1920x1080px, character cards, character detail content, translucent navigation controls, and animated/image-led backgrounds.

No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Character showcase interface with large image-led backgrounds and prominent character artwork.
- Use translucent white surfaces over blurred imagery.
- Navigation combines pale beige pill buttons, white text, rounded glass panels, and circular controls.
- Character cards use large rounded corners and subtle inner highlights.
- Typography mixes serif, monospace, handwritten, display, and sans-serif styles.
- Desktop compositions use centered content, horizontal character-card groups, vertical side navigation, and large character titles.

## Color palette

Ranked by raw usage count:

| Color | Raw uses | Usage |
|---|---:|---|
| `#F4EBDB` | 342 | Primary pale beige fill |
| `#FFFFFF` | 309 | White backgrounds, icons, and surfaces |
| `#D9D9D933` | 96 | Translucent neutral surface |
| `#FCFCFC` | 69 | Near-white surfaces and highlights |
| `#9AB929` | 60 | Accent green |
| `#F7F7F733` | 52 | Translucent light surface |
| `#FFFFFF33` | 41 | Glass panel and button fill |
| `#D9DCD2` | 27 | Light neutral |
| `#9747FF` | 22 | Purple accent |
| `#EAEDE840` | 22 | Translucent side-navigation fill |
| `#151412` | 18 | Dark text |
| `#414742` | 18 | Dark muted neutral |
| `#D9D9D9` | 18 | Neutral gray |
| `#F3E6D4` | 18 | Login and sign-in button fill |
| `#FFFFFFEB` | 18 | Near-opaque white navigation fill |
| `#F5ECDB` | 16 | Login and sign-in button stroke |
| `#F0EFEE` | 15 | Login text |
| `#0E362D` | 14 | Back-button icon stroke |
| `#E8EBE3A3` | 14 | Back-button translucent surface |
| `#FFFFFF40` | 13 | Translucent white effect |
| `#EBD7FB` | 12 | Light purple accent |
| `#FFFFFF4D` | 11 | Translucent white |
| `#603915` | 10 | Brown accent |
| `#C3EEE0` | 10 | Pale mint accent |
| `#E1E0F8` | 10 | Pale lavender accent |
| `#FCF8F8` | 10 | Off-white surface |

## Type scale

No local text styles were found. Raw typography:

| Size | Family and style | Raw uses |
|---:|---|---:|
| 70px | Bright DEMO Regular | 6 |
| 48px | Caveat Regular | 21 |
| 48px | STSong STSong | 30 |
| 42px | Crimson Text BoldItalic | 18 |
| 28.61px | Metropolis Medium | 165 |
| 28px | Metropolis Medium | 53 |
| 28px | Anonymous Pro Bold | 54 |
| 28px | STSong STSong | 56 |
| 28px | Crimson Text SemiBold | 26 |
| 26px | Anonymous Pro Bold | 55 |

Additional screen typography:

- Ocean Rush DEMO OceanRushDEMO, 95px, used for the character title “Clorinde.”
- Ocean Rush DEMO OceanRushDEMO, 115px, used for a large character title.

## Spacing scale

No spacing variables were found. Use only the following extracted layout values:

- 1.33px: Nav_Button padding on all sides.
- 6px: More_Button gap.
- 6.66px: Nav_Button gap.
- 7.78px: slide bar_nav gap.
- 8px: Login_Nav vertical padding.
- 10px: Login_Nav gap; glass-panel inner padding; common frame gap.
- 12px: content-section gap.
- 13px: More_Button vertical padding.
- 16px: tag/button vertical padding.
- 18px: five-star tag vertical padding.
- 20px: More_Button horizontal padding; tag horizontal padding; content gap.
- 21px: card-group gap.
- 24px: content-section gap and rounded glass-panel radius usage.
- 29px: Login_Nav horizontal padding.
- 30px: top navigation gap and content grouping gap.
- 34.21px: slide bar_nav horizontal padding.
- 40px: title/content frame gap.
- 59.1px: slide bar_nav vertical padding.
- 72px: character-card group gap.
- 75px: primary content frame gap.
- 87.87px: side-navigation icon gap.
- 204px: top navigation group gap.

## Radius scale

No radius variables were found. Extracted radius values:

- 24px: More_Button, glass panels, content frames, information tags.
- 26px: content frame.
- 32px: Login_Nav.
- 52px: character cards.
- 65.24px: Nav_Button.
- 77.76px: right-side slide bar corners.
- 78px: Back_Button icon surface.

## Elevation & effects

- `background_blur 4px`: More_Button and translucent content panels.
- `background_blur 19.9px`: Back_Button icon surface.
- `background_blur 22.08px`: slide bar_nav.
- `background_blur 36.2px`: Nav_Button.
- `inner_shadow 0.8px`, offset `1.2 1.1`: More_Button and translucent content panels, color `#F8FAF0`.
- `inner_shadow 0.8px`, offset `1.2 1.1`: official-introduction panel, color `#F8F9F8C9`.
- `inner_shadow 0.78px`, offset `0 1.71`: slide bar_nav, color `#F8F9F8C9`.
- `inner_shadow 0.9px`, offset `0.4 2.1`: character cards, color `#FCFCFC`.
- `drop_shadow 8.5px`, offset `1 4`: Nav_Button, color `#E9EDEE`.
- `drop_shadow 2.4px`, offset `1 2`: Back_Button icon surface, color `#FFFFFF40`.
- `layer_blur 56.5px`: large background imagery.
- No local effect styles were found.

## Components

Only use the extracted component families:

### Login_Nav

- Size: `134x52px`.
- Radius: `32px`.
- Layout: horizontal.
- Padding: `8px 29px 8px 29px`.
- Gap: `10px`.
- Alignment: center/center.
- Sizing: fixed width, fixed height.
- Fill: `#F3E6D4`.
- Stroke: `#F5ECDB`, `1px`.
- Text: STSong STSong, `28px`.
- Variants: Property 1 — Default, Variant2.

### More_Button

- Size: `154x64px`.
- Radius: `24px`.
- Layout: horizontal.
- Padding: `13px 20px 13px 20px`.
- Gap: `6px`.
- Alignment: center/center.
- Sizing: fixed width, fixed height.
- Fill: `#FFFFFF33`.
- Effects: `background_blur 4px`; inner shadow `0.8px`, offset `1.2 1.1`, color `#F8FAF0`.
- Text: Metropolis Medium, `28px`.
- Variants: Property 1 — Default, Variant2.

### Back_Button

- Size: `82x82px`.
- Fill: `#FFFFFF`.
- Inner icon surface: radius `78px`, fill `#E8EBE3A3`.
- Icon stroke: `#0E362D`, `3px`.
- Variants: Property 1 — Default, Variant2.

### Nav_Button

- Size: `136x130px`.
- Radius: `65.24px`.
- Layout: horizontal.
- Padding: `1.33px` on all sides.
- Gap: `6.66px`.
- Alignment: min/center.
- Sizing: fixed width, fixed height.
- Fill: `#FFFFFFEB`.
- Effects: `background_blur 36.2px`; drop shadow `8.5px`, offset `1 4`, color `#E9EDEE`.
- Variants: Property 1 — Default, Variant2.

### character 1, charcter 2, character 3, character 4, character 5, character 6

- Size: `529x311px`.
- Radius: `52px`.
- Fill: image.
- Effect: inner shadow `0.9px`, offset `0.4 2.1`, color `#FCFCFC`.
- `character 3` includes Bright DEMO Regular, `70px`.
- Each has Property 1 — Default, Variant2.

### hovering_Frame

- Size: `814x555px`.
- Layout: vertical.
- Padding: `0px` on all sides.
- Gap: `10px`.
- Sizing: fixed width, fixed height.
- Variants: Property 1 — Default, Variant2.
- Character variants: `1`, `2`, `3`, `4`, `5`, `Default`.

### character_data_0, character_data_1, character_data_2, character_data_3, character_data_4, character_data_5

- Size: `711.48x911px`.
- Text: Metropolis Medium, `28.61px`.
- Variants: Property 1 — Variant2, default; character `o`.

### main conteny frame 2

- Size: `1920x1080px`.
- Fill: `#FFFFFF`.
- Text styles: Anonymous Pro Bold, `26px`; Anonymous Pro Bold, `28px`; Crimson Text BoldItalic, `42px`.
- Variants: Property 1 — Default, Variant2.
- Character variants: `0`, `1`, `2`, `3`, `4`, `5`.

### slide bar_nav

- Size: `115.08x437px`.
- Radius: `0/77.76/77.76/0px`.
- Layout: vertical.
- Padding: `59.1px 34.21px 59.1px 34.21px`.
- Gap: `7.78px`.
- Alignment: center/center.
- Sizing: fixed width, fixed height.
- Fill: `#EAEDE840`.
- Effects: inner shadow `0.78px`, offset `0 1.71`, color `#F8F9F8C9`; `background_blur 22.08px`.
- Variants: Property 1 — Default, Variant2.

### nahida animation

- Size: `1772x1086px`.
- Fill: `#FFFFFF`.
- Variants: Property 1 — Default, Variant2.

### animation

- Size: `916x940px`.
- Layout: vertical.
- Padding: `0px` on all sides.
- Gap: `0px`.
- Alignment: min/center.
- Sizing: fixed width, fixed height.
- Variants: Property 1 — Default, Variant2.

## Screen patterns

### Desktop character landing screen

- Canvas: `1920x1080px`.
- White base fill with oversized blurred image background.
- Top navigation uses a `1005x52px` group with `204px` spacing between navigation clusters.
- Login and sign-in controls use `Login_Nav`.
- Genshin Impact logo frame: `311x113px`.
- Character title may be paired with an image mark in an `856.37x144px` centered frame.
- Main content uses centered character cards and a vertical side navigation.
- Character groups use `529x311px` cards with `72px` gaps in one extracted layout.

### Desktop character detail screen

- Canvas: `1920x1080px`.
- Character title appears above a translucent content layout.
- Content panels use `#FFFFFF33`, `24px` radius, `background_blur 4px`, and inner shadow.
- About panel extracted at `889x145px` or `642x177px`.
- Attribute tags use `24px` radius and `#FFFFFF33`.
- The “Electro” tag uses `167px` or `168px` width and `61px` height.
- The “5 star” tag is `257x64px` and contains five `20x20px` icon instances.
- More_Button is used beside attribute tags.
- Character story panels use extracted heights of `397px`, `421px`, and `506px`.

### Character showcase and animation

- `nahida animation` is used as a large `1772x1086px` image-led layer.
- `animation` is a `916x940px` vertical composition.
- `main conteny frame 2` provides a `1920x1080px` character-content frame.
- `character_data_0` through `character_data_5` provide `711.48x911px` character detail variants.
- `slide bar_nav` provides a translucent vertical navigation rail with three vertically spaced icon instances.

## Notes for implementers

- Preserve the exact component family names when mapping variants.
- Do not substitute unlisted colors; use the extracted palette, especially `#F4EBDB`, `#FFFFFF`, `#FFFFFF33`, and `#EAEDE840`.
- Treat image fills as essential character artwork rather than generic placeholders.
- Use `#FFFFFF33` with the extracted blur and inner-shadow values for glass panels.
- Keep desktop art direction centered around `1920x1080px` compositions.
- Use the extracted typography families and sizes; no local type styles were defined.
- The source contains inconsistent naming, including `charcter 2` and `main conteny frame 2`; retain those names when referring to extracted component families.
- No responsive, interaction, motion, or grid rules were extracted.
