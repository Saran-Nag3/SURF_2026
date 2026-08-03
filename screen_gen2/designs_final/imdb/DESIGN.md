---
name: imdb-app-community
source: IMDB APP (Community)
kind: design-system-context
---

# imdb - Design System

## Overview

- Mobile movie-discovery app design system covering reference components, dark and light navigation, movie collections, filters, authentication controls, and movie-detail patterns.
- Primary mobile frames include 375px and 390px widths.
- No local variable collections, spacing variables, radius variables, motion tokens, or grid styles were found.
- Dominant visual direction: dark cinematic surfaces, yellow primary actions, white typography, poster-based movie cards, and compact bottom navigation.

## Design language

- Use dark or black surfaces as the primary application context.
- Use yellow for primary actions, active navigation, ratings, and selected states.
- Use white for primary text and icons on dark surfaces.
- Use gray text and neutral borders for secondary information and inactive states.
- Movie content is represented through rounded poster cards, horizontal collections, section headings, and “See more” links.
- Typography is predominantly Roboto, with Gilroy used in the referenced visual component set and Open Sans used for menu-bar text.
- Navigation uses compact icon-plus-label items with a 24px icon and 10px label.
- Use blur effects and bottom image gradients to preserve legibility over cinematic imagery.

## Color palette

Ranked by recorded raw usage where available:

| Color | Recorded usage | Role / aliases |
|---|---:|---|
| `#000000` | 1285 | Secondary-100%, Colors/Black, black surfaces |
| `#FFFFFF` | 524 | White, Colors/White, primary light text and icons |
| `#DADADA` | 518 | Neutral gray |
| `#00000033` | 250 | Translucent black overlay |
| `#323232` | 182 | Dark neutral |
| `#D9D9D9` | 111 | Secondary-75%, neutral fill |
| `#FDFDFD00` | 96 | Transparent near-white |
| `#FFFFFF00` | 96 | Transparent white |
| `#646F79` | 68 | Secondary-grey |
| `#91919F` | 62 | Secondary text gray |
| `#FEFEFE00` | 48 | Transparent near-white |
| `#646F791A` | 46 | Translucent secondary gray |
| `#F5C418` | 39 | Primary-100%, yellow primary |
| `#C4C4C4` | 28 | Neutral gray |
| `#000000BF` | 24 | Secondary-75% overlay |
| `#BEBEBE` | 23 | Neutral gray |
| `#24262B` | — | Carbon / Darkest |
| `#212325` | — | Base/Dark/Dark 50 |
| `#9C88FF` | — | Purple |
| `#40C173` | — | Default green |
| `#F5C418BF` | — | Primary-75% |
| `#00000080` | — | Secondary-50% |
| `#00000040` | — | Secondary-25% |
| `#0000001A` | — | Secondary-10% |
| `#F5C4181A` | — | Primary-10% and Primary-25% |
| `#FF003D` | — | Red |
| `#EF2D1A14` | — | Red-8% and Red-100% |
| `#2A0BE814` | — | Blue-8% and Blue-100% |
| `#00000026` | — | Secondary-15% |
| `#20111D` | — | Black |
| `#E0E0E0` | — | Gray degrees/Gray 5 |
| `#BDBDBD` | — | Gray 4 |
| `#333333` | — | Gray 1, Gray degrees/Gray 1 |
| `#828282` | — | Gray degrees/Gray 3 |
| `#F2C94C` | — | PrimaryColor, Colors/Yellow |
| `#4F4F4F` | — | Gray degrees/Gray 2 |
| `#F2F2F2` | — | Gray degrees/Gray 6 |
| `#39AFFD` | — | Gradient stop |
| `#477FFF` | — | Gradient stop |
| `#F3BE00` | — | Gradient stop |
| `#FBEC65` | — | Gradient stop |
| `#FF8F71` | — | Gradient stop |
| `#EF2D1A` | — | Gradient stop |
| `#FAF0CA0D` | — | Fill linear |
| `#FFFFFF33` | — | White gradient stop |

Recorded gradients:

- `gradient_linear(#FF8F71 0% | #EF2D1A 100%)`
- `gradient_linear(#FFFFFF 0% | #FFFFFF33 100%)`
- `gradient_linear(#39AFFD 0% | #477FFF 100%)`
- `gradient_linear(#F3BE00 0% | #FBEC65 100%)`

## Type scale

Primary named typography tokens:

| Token | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---|---:|
| `Regular-14px` | Roboto | 400 | 14px | 18px | 0px |
| `Regular-12px` | Roboto | 400 | 12px | 111.95% | 0px |
| `Semibold-20px` | Roboto | 600 | 20px | auto | 0px |
| `Font Awesome Icon / Solid (16)` | Font Awesome 5 Free Solid | 900 | 16px | auto | 0px |
| `Bold-24px` | Roboto | 700 | 24px | auto | 0px |
| `Bold-14px` | Roboto | 700 | 14px | auto | 0px |
| `body-text-regular-14px` | Open Sans | 400 | 14px | auto | 0px |

Observed hierarchy:

- 24px: bold headings.
- 20px: bold or semibold section headings.
- 16px: icons and occasional text.
- 14px: body text, labels, links, and controls.
- 12px: compact body and menu text.
- 10px: compact navigation and movie-card labels.

Additional raw typefaces observed: Gilroy Semibold, Gilroy Medium, Gilroy Bold, Lato, Mulish, Inter, and Open Sans. Use only where the corresponding source component specifies them.

## Spacing scale

No spacing variables were found. Observed component spacing and padding values:

- 0px padding and gap.
- 2px gap.
- 3px padding.
- 4px gap and effect blur.
- 8px padding, gap, and component spacing.
- 10px gap.
- 12px padding and gap.
- 14px padding.
- 16px padding and gap.
- 18px padding.
- 20px padding.
- 24px padding and gap.
- 32px padding and gap.
- 40px padding and gap.
- 45px gap.
- 70px gap.
- 90px navigation radius-related dimension.
- 171px heading gap.

Key layouts:

- Navbar: vertical padding `8px 0 8px 0`, gap `20px`.
- PrimaryButton: padding `14px 32px 14px 32px`, gap `12px`.
- Header: padding `16px 20px 16px 20px`, gap `10px`.
- Reference Components frame: padding `40px` on all sides, gap `45px`.
- Movie cards: gap `16px` between poster and title.
- Movie sections: gap `16px` between heading and body; list sections use `32px` gaps.

## Radius scale

Observed radius values:

- `0px`: stars and unrounded elements.
- `0.6px`: star radius.
- `5px`: component-set container radius.
- `8px`: PrimaryButton, movie posters, and movie-card posters.
- `30px`: dark screen container.
- `90px`: navigation pill and selected navigation item.
- `669px`: cover artwork frame.

## Elevation & effects

- `background_blur 4.81px`: named `blur` effect.
- `background_blur 4px`: PrimaryButton and translucent navigation surfaces.
- `background_blur 1px`: movie-card bottom metadata overlay.
- `layer_blur 70px`: blurred movie-box backdrop.
- Use bottom image gradients to improve text contrast over posters.
- Available recorded gradient treatments include yellow, blue, red, white-opacity, and pale-fill gradients listed in the color palette.

## Components

Only the extracted component families below are available.

### Navbar

- Size: `375x70px`.
- Horizontal layout; centered alignment.
- Padding: `8px 0 8px 0`.
- Gap: `20px`.
- Fill: `#000000` for Dark; light variant uses `#FFFFFF`.
- Variants: `Dark`, `Light`.
- Four navigation items: Home, Search, Wishlist, Profile.
- Each item is `67x40px`, vertical, centered, with a `24x24px` icon, `4px` gap, and a `10px` label.
- Active Home uses `#F2C94C`; inactive dark labels and icons use `#FFFFFF`; light variant inactive labels and strokes use `#000000`.

### PrimaryButton

- Size: `137x48px`.
- Radius: `8px`.
- Horizontal layout, centered.
- Padding: `14px 32px 14px 32px`.
- Gap: `12px`.
- Text: Gilroy Semibold, `16px`.
- Effect: `background_blur 4px`.
- Variants: `PrimaryColor`, `SecondaryColor`.
- Primary fill: `#F2C94C`; primary text and icon strokes: `#333333`.
- Secondary fill: `#333333`; secondary text and icon strokes: `#FFFFFF`.

### Movie box

- Size: `128x180px`.
- Fill: `#FFFFFF`.
- Poster content uses an `8px` radius.
- Bottom metadata overlay is `128x30px` with `8px 12px 8px 12px` padding and `background_blur 1px`.
- Text: Gilroy Semibold, `10px`.
- Uses a blurred backdrop with `layer_blur 70px`.

### Recently movie box

- Size: `120x193px`.
- Vertical layout with `16px` gap.
- Poster: `120x160px`, `8px` radius.
- Title: `120x17px`.
- Text: Gilroy Semibold, `14px`.
- Title color: `#E0E0E0`.

### Movie card 4

Two extracted sizes:

- `171x245px`, vertical, `16px` gap, Roboto Regular `14px`.
- `111.33x181.44px`, vertical, `16px` gap, Roboto Regular `14px`.

A referenced dark-screen instance is `120x193px` with a `120x160px` poster, `8px` radius, `16px` gap, and Gilroy Semibold `14px` title styling.

### Header

- Size: `390x60px`.
- Vertical layout.
- Padding: `16px 20px 16px 20px`.
- Gap: `10px`.
- Fill: `#FFFFFF`.
- Text: Roboto Bold, `24px`.

### Menu-bar

- Size: `390x80px`.
- Text: Open Sans Regular, `12px`.

### Radio Button

- Size: `71x24px`.
- Horizontal layout, minimum/center alignment.
- Gap: `8px`.
- Text: Roboto Regular, `16px`.
- Variants: `Off`, `On`.

### Switch

Wireframe variant:

- Size: `98x24px`.
- Horizontal layout, minimum/center alignment.
- Gap: `8px`.
- Text: Mulish Regular, `14px`.
- Variants: `Off`, `On`.

Design variant:

- Size: `96x24px`.
- Horizontal layout, minimum/center alignment.
- Gap: `8px`.
- Text: Roboto Regular, `14px`.
- Variants: `Off`, `On`.

### Check Box

- Size: `126x24px`.
- Horizontal layout, minimum/center alignment.
- Gap: `10px`.
- Text: Roboto Regular, `14px`.
- Variants: `Default`, `Variant2`.

### visibility_off

- Size: `24x24px`.

### visibility

- Size: `24x24px`.

### iOS

- Extracted status bar: `390x44px`.
- Variant name: `Status Bar/Black`.

## Screen patterns

- Cover screen: oversized “Mobile App Redesign” presentation with a large yellow circular frame and IMDB branding.
- Reference Components screen: centered component showcase on a black `487x957px` frame with `40px` padding and `45px` gaps.
- Dark browse screen: `375px` wide dark movie-discovery layout with a cinematic hero image, overlay gradients, pill-shaped genre navigation, horizontal movie sections, and a bottom navigation pattern.
- Genre navigation: pill container with category labels such as All, Romance, Sport, Kids, and Horror; selected category uses a white pill and dark text, while inactive categories use white text.
- Movie sections: section heading and “See more” link on one row, followed by horizontally arranged movie cards.
- Section headings use 20px semibold styling; “See more” uses 14px semibold yellow styling.
- Best-movies sections use `128x180px` movie boxes; recently watched or collection sections use `120x193px` movie cards.
- Authentication and filter patterns use the extracted Header, Radio Button, Switch, Check Box, visibility, and PrimaryButton components.
- Light and dark navigation variants support the same four-item navigation structure with inverted inactive color treatment.

## Notes for implementers

- Treat semantic aliases as distinct when their source values differ: `#F5C418` and `#F2C94C` are both yellow tokens but are not interchangeable without a design decision.
- Prefer the named component typography where available; the raw extraction contains additional unstructured font usage that should not replace specified component styles.
- Preserve the extracted fixed dimensions for reference components and mobile-width layouts.
- Use image assets as poster or hero imagery; the source references image assets by hash rather than providing reusable image tokens.
- Do not introduce additional spacing, radius, color, font, or component values beyond those listed here.
- Keep movie metadata legible over imagery using the recorded bottom gradients and blur effects.
