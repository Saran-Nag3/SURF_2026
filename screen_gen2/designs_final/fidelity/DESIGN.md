---
name: fidelity
source: Shopping app - lo fidelity / Wireframe (Community)
kind: design-system-context
---

# fidelity - Design System

## Overview

- Low-fidelity shopping app wireframe covering onboarding, home, shopping bag, sign-in, and account experiences.
- Source pages: Cover, Deisgn / Lo fidelity, Prototype / Lo fidelity, Components.
- Primary mobile frame size: 428 × 926px with rounded 50px corners.
- No local variable collections, spacing variables, radius variables, or motion variables were found.
- Component families: Account, Dark Bar, Icon menu, Icons add, Icons arrow right, Icons cart, Icons delete, Icons left, Icons right, Image placeholder, Light Bar, Nav.

## Design language

- Minimal, mobile-first shopping interface with large rounded surfaces, pale gray backgrounds, white cards, and dark text.
- Primary actions use muted blue-gray `#667080`; strong secondary actions use `#393F48`.
- Content surfaces are predominantly `#FFFFFF`, with secondary surfaces using `#EEF1F4` or `#F8F8F8`.
- Onboarding and sign-in use centered compositions with large account or image placeholders and pill-shaped primary actions.
- Product and content cards use rounded corners, horizontal carousels, and image-first layouts.
- Navigation uses rounded white bottom bars and compact top navigation controls.
- Typography combines Mulish for most interface and marketing text with Roboto for selected headings, prices, controls, and action labels.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role / notes |
|---|---:|---|
| `#000000` | 329 | Black text and labels |
| `#FFFFFF` | 168 | Primary surface, light text, and controls |
| `#201A25` | 116 | Raw dark neutral |
| `#00000099` | 56 | Translucent black |
| `#F8F8F8` | 36 | Light screen background |
| `#262525` | 28 | Dark heading text |
| `#0E1514` | 16 | Raw dark neutral |
| `#FFFFFF66` | 14 | Translucent white overlay |
| `#181D27` | 12 | Primary black text |
| `#ABABAB` | 10 | Gray secondary text |
| `#00000066` | 8 | Translucent black |
| `#667080` | 4 | Primary action color |
| `#393F48` | — | Primary deep color |
| `#EEF1F4` | — | Secondary surface color |

Named token usage:

- `Primary`: `#667080`, 813 uses.
- `Secondary`: `#EEF1F4`, 475 uses.
- `Secondary Deep`: no source color value; 259 uses.
- `Light/Label/Primary`: `#000000`, 222 uses.
- `Primary Deep`: `#393F48`, 188 uses.
- `White`: `#FFFFFF`, 182 uses.
- `Black`: `#000000`, 27 uses.
- `Dark/Label/Primary`: `#FFFFFF`, 6 uses.
- `Gray / Dark`: `#ABABAB`, 2 uses.
- `Primary black`: `#181D27`, 2 uses.

## Type scale

Named hierarchy:

| Level | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---|---:|
| H1 | Mulish | SemiBold 600 | 35px | 50px | 0px |
| H2 | Roboto | Medium 500 | 18px | auto | 0px |
| H3 | Mulish | SemiBold 600 | 12px | auto | 0px |

Raw styles ranked by usage:

- Mulish SemiBold, 14px — 128 uses.
- Mulish Light, 14px — 71 uses.
- Mulish SemiBold, 16px — 60 uses.
- Mulish SemiBold, 12px — 58 uses.
- Roboto Medium, 20px — 41 uses.
- Helvetica Helvetica, 15px — 38 uses.
- Mulish Bold, 20px — 33 uses.
- Roboto Medium, 16px — 25 uses.
- Mulish SemiBold, 20px — 23 uses.
- Mulish Light, 16px — 22 uses.
- Roboto Black, 18px — 14 uses.
- Roboto Medium, 18px — 14 uses.
- Mulish Bold, 14px — 12 uses.
- Mulish Light, 20px — 5 uses.
- Roboto Bold, 15px — 4 uses.
- Roboto Medium, 24px — 4 uses.

## Spacing scale

_No spacing variables found in source._

Concrete spacing values used by layouts and components:

- 5px gaps in store image content.
- 8px gaps in cart controls and price content.
- 10px gaps in navigation, controls, and account content.
- 13px gaps in store and news card rows.
- 15px gaps in icon controls and card padding.
- 16px gaps in arrival card text.
- 18px gaps in cart layouts.
- 20px gaps in onboarding text, navigation padding, and account card padding.
- 22px horizontal padding in the sign-in action.
- 24px top-navigation horizontal padding.
- 25px gaps in account and shopping bag layouts.
- 27px gaps between arrival cards.
- 38px gap in cart composition.
- 40px account card icon size.
- 48px onboarding section gap.
- 93px horizontal sign-in action padding on each side.
- 128px gap in the price card.
- 366px top-navigation gap.

Grid style:

- App layout uses 5 columns.
- Section size: 60px.
- Gutter: 20px.
- Alignment: stretch.

## Radius scale

- 8px: cart quantity controls.
- 15px: cart image placeholders and delete icon.
- 18.31px: store and arrival image cards.
- 20px: cart cards and account cards.
- 30px: price background and checkout action.
- 33px: menu bar shapes.
- 50px: navigation, onboarding, sign-in actions, and mobile screen frames.

## Elevation & effects

- `screen - dropShadow`: drop shadow, offset `0 20px`, blur `104px`, color `#0000001A`.
- `onboarding - icon - dropShadow`: drop shadow, offset `0 40px`, blur `40px`, color `#0000001A`.
- `img - draopShadow`: drop shadow, offset `0 20px`, blur `35px`, color `#0000000D`.
- Screen frames use the screen shadow.
- Onboarding imagery and some sign-in controls use the onboarding icon shadow.
- Cart backgrounds use the image shadow.
- Arrival cards use a `#FFFFFF66` overlay over the image surface.
- Cart image placeholders may use 50% opacity.

## Components

### Account

- Default size: 35 × 35px.
- Fill: `#FFFFFF`.
- Used at larger sizes including 111 × 111px and 169 × 169px.
- Account graphics use `#667080` in the source instances.

### Dark Bar

- Size: 375 × 44px.
- Text style: Helvetica Helvetica, 15px.

### Icon menu

- Size: 20.95 × 20.18px.

### Icons add

- Size: 66 × 66px.
- Horizontal layout.
- Gap: 15px.
- Alignment: min / center.
- Fixed width and height.
- Padding: 0px on all sides.

### Icons arrow right

- Size: 30 × 30px.

### Icons cart

- Size: 102 × 30px.
- Horizontal layout.
- Gap: 15px.
- Alignment: min / center.
- Fixed width and height.
- Text style: Roboto Medium, 20px.
- Quantity controls are 30 × 30px with 8px radius and `#EEF1F4` fill.

### Icons delete

- Size: 68.09 × 144px.
- Radius: 15px.
- Fill token: Secondary Deep; source provides no hex value for this token.

### Icons left

- Size: 34 × 34px.
- Back-arrow stroke: 3.17px in instances.

### Icons right

- Size: 24 × 24px.
- Arrow stroke: 2px in instances.

### Image placeholder

- Base size: 300 × 183px.
- Fill: `#EEF1F4`.
- Stroke: Primary, 3px.
- Common instance sizes: 428 × 926px, 374.19 × 108.71px, 302.1 × 353.59px, 383.34 × 157.91px, and 106 × 106px.
- Common instance radii: 15px and 18.31px.

### Light Bar

- Size: 392.82 × 44px.
- Text style: Helvetica Helvetica, 15px.

### Nav

- Size: 428 × 93px.
- Vertical layout.
- Padding: 20px top and bottom; 0px left and right.
- Gap: 10px.
- Alignment: center / center.
- Fixed width and height.
- Radius: 50px.
- Fill: `#FFFFFF`.
- Used as a decorative bottom navigation bar.

## Screen patterns

- **Onboarding:** 428 × 926px white rounded screen. Full-screen `Image placeholder` surface, centered onboarding content, 48px section gap, H1 heading, Mulish Light 20px supporting text, and a 250 × 66.93px pill-shaped Primary action.
- **Home:** 428 × 926px `#F8F8F8` screen with top navigation, bottom `Nav`, store carousel, new-arrivals product carousel, and news/community image carousel.
- **Store cards:** Horizontal cards with 13px gap. Images use rounded 18.31px corners and supporting Mulish Light 16px text.
- **New arrivals:** Two-column horizontal product presentation with 302.1 × 353.59px image cards, 18.31px radius, translucent white overlay, product name in Roboto Medium 18px, and price in Roboto Black 18px using Primary.
- **Shopping bag:** 428 × 926px `#F8F8F8` screen with four repeated 375 × 144px cart cards. Each card contains a 106 × 106px image placeholder, product text, and `Icons cart` quantity controls.
- **Price summary:** White price region with a Primary background panel, total label in Mulish Light 14px, total value in Mulish SemiBold 20px, and a 195 × 62px checkout action using Primary Deep.
- **Sign-in:** 428 × 926px white rounded screen with full-screen Secondary image placeholder, centered 169 × 169px Account component, 250 × 65px pill-shaped Primary sign-in action, and Mulish Light 20px account-creation text.
- **Account:** 428 × 926px `#F8F8F8` screen with centered account identity, stacked white rounded account cards, 40px circular secondary icons, 24px right-arrow icons, and H3 secondary labels.
- **Top navigation:** 428 × 35px horizontal layout with 24px left and right padding, a left menu or back icon, and a 35px Account component aligned with space-between.

## Notes for implementers

- Preserve the 428 × 926px mobile composition and 50px outer screen radius where a screen frame is represented.
- Use only the documented colors; `Secondary Deep` is referenced repeatedly but has no source hex value.
- Prefer named typography styles H1, H2, and H3 where specified; use raw styles only where the source explicitly assigns them.
- Keep primary actions pill-shaped with 50px radius unless the component specification defines another radius.
- Use white cards over `#F8F8F8` screen backgrounds for home, shopping bag, and account patterns.
- Treat image placeholders as structural content, not decorative filler: retain their documented sizes, fills, strokes, radii, and shadows.
- The source extraction is truncated after part of the Account screen; do not infer additional components or values beyond the documented source.
