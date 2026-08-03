---
name: blinkist-app-ui-kit-community
source: Blinkist App UI Kit (Community)
kind: design-system-context
---

# blinkist - Design System

## Overview

- Mobile-first Blinkist UI kit for 375px-wide screens.
- Primary screen size: 375x812px.
- Supporting presentation frame: 1920x960px, with 16:9 slide layout.
- Brand themes: dark teal/navy, bright green, pale green backgrounds, white surfaces, and lime accents.
- Typography uses Cera Pro in Regular, Medium, and Bold weights.
- Extracted screens include Splash Screen, Login Screen, Login Screen 2, Subscription Plans, and Home Screen.

## Design language

- Use a clean, editorial reading-product aesthetic.
- Use white cards and surfaces against pale green or off-white backgrounds.
- Use dark teal for primary text and navigation.
- Use bright green for brand actions, links, prices, and accent rules.
- Use lime banners for promotional labels such as “Free Daily” and “Save 49%”.
- Use blue labels and actions for book metadata and primary reading/listening controls.
- Use bold Cera Pro typography for headings, card titles, and calls to action.
- Use rounded mobile containers, cards, buttons, and status/navigation elements.
- Book content is presented through compact editorial cards with cover imagery, author labels, title, and duration metadata.

## Color palette

Ranked by raw usage where counts are available:

| Token / use | Color | Usage |
|---|---:|---:|
| White surface and text | `#FFFFFF` | 92 |
| Neutral divider/image placeholder | `#DADADA` | 70 |
| Black label/text | `#000000` | 36 |
| Neutral image placeholder | `#C4C4C4` | 17 |
| Lime promotional accent | `#E6FC88` | 10 |
| Secondary white with transparency | `#FFFFFFB2` | 5 |
| Bright blue metadata label | `#1675FC` | 4 |
| Muted neutral | `#C6C7BD` | 4 |
| Pale green background | `#EEF4F1` | 4 |
| Bright green alternate accent | `#2BDE80` | 3 |
| Secondary color with transparency | `#707C8133` | 3 |
| Primary dark teal | `#012F3F` | 36 named-style uses |
| Secondary gray-blue | `#707C81` | 19 named-style uses |
| Brand green | `#28E292` | 16 named-style uses |
| Light primary label | `#000000` | 13 named-style uses |
| System orange | `#FF9500` | 10 named-style uses |
| Dark primary label | `#FFFFFF` | 7 named-style uses |
| Brand blue | `#02314B` | 5 named-style uses |
| Secondary color with transparency | `#707C8159` | 6 |

Guidance:

- Primary text: `#012F3F` or `#000000`.
- Secondary text: `#707C81`.
- Primary surface: `#FFFFFF`.
- Pale green section background: `#EEF4F1`.
- Brand actions and links: `#28E292` or `#2BDE80`.
- Blue metadata/action labels: `#1675FC`.
- Brand blue surfaces: `#02314B`.
- Lime promotional banners and rules: `#E6FC88`.
- Light dividers and borders: `#707C8133` or `#707C8159`.
- White overlay text: `#FFFFFFB2`.

## Type scale

Font family: Cera Pro.

| Size | Weight | Raw usage |
|---:|---|---:|
| 48px | Bold | — |
| 32px | Bold | — |
| 24px | Bold | 8 |
| 20px | Bold | 8 |
| 20px | Medium | — |
| 18px | Bold | — |
| 16px | Bold | 14 |
| 16px | Medium | 8 |
| 16px | Regular | 5 |
| 14px | Bold | 3 |
| 14px | Medium | 14 |
| 14px | Regular | 12 |
| 12px | Regular | 11 |

Usage:

- Large brand wordmark: Cera Pro Bold, 48px.
- Large reading title: Cera Pro Bold, 32px.
- Screen headings: Cera Pro Bold, 24px.
- Promotional headline: Cera Pro Bold, 24px.
- Login heading: Cera Pro Bold, 24px.
- Subscription price: Cera Pro Bold, 20px.
- Secondary screen title: Cera Pro Bold, 20px.
- Card titles: Cera Pro Bold, 16px.
- Button labels: Cera Pro Bold or Medium, 16px.
- Author labels: Cera Pro Medium, 14px.
- Supporting descriptions: Cera Pro Regular or Medium, 14px.
- Metadata and legal text: Cera Pro Regular, 12px.

## Spacing scale

No spacing variables were found. Observed explicit spacing values:

- 0px padding.
- 8px internal gap.
- 10px internal gap.
- 11px vertical button padding.
- 12px padding and gap.
- 20px vertical padding.
- 31px horizontal navigation padding.
- 32px internal feature gap.
- 54px horizontal button padding.
- 82px horizontal button padding.
- 101px horizontal button padding.

Observed dimensions:

- Button heights: 36px and 44px.
- Navigation bar height: 85px.
- Status bar heights: 34px and 44px.
- Home indicator: 134x5px.
- Common icon size: 24x24px.

## Radius scale

Observed radius values:

- 2px: subscription cards.
- 3px: subscription buttons.
- 4px: email and Facebook login buttons.
- 24px: monogram tile and selected image tile.
- 32px: Reading container.
- 36px: reading action button.
- 37px: Home Screen container.
- 100px: home indicator.
- Mixed button radius: 36/32/32/32px.
- No radius variables were found.

## Elevation & effects

- Reading and Home Screen containers use layered drop shadows with offsets:
  - `0 1.85px`
  - `0 8.15px`
  - `0 20px`
  - `0 38.52px`
  - `0 64.81px`
  - `0 100px`
- Subscription cards use a drop shadow with `0 1px` offset and `2px` blur.
- Reading action button uses a drop shadow with `0 2px` offset and `3px` blur.
- Monogram tile uses a drop shadow with `0 1.85px` offset and `3.15px` blur.
- Card borders use `#707C8159` or `#707C8133` at 1px.
- No local effect styles were found.

## Components

### Component families

- `Mode=Light`
- `Mode=Dark, Type=Default`
- `Mode=Dark`
- `Mode=Light, Type=Default`

### Status bars and home indicators

- `Mode=Dark, Type=Default`: 375x44px, fill `#FFFFFF`.
- `Mode=Light, Type=Default`: 375x44px, fill `#FFFFFF`.
- `Mode=Dark`: 375x34px, fill `#FFFFFF`.
- `Mode=Light`: 375x34px, fill `#FFFFFF`.
- Light home indicator: 134x5px, radius 100px, fill `#000000`.
- Dark home indicator: 134x5px, radius 100px, fill `#FFFFFF`.

### Reading action button

- Size: 321x46px.
- Fill: `#02314B`.
- Radius: 36/32/32/32px.
- Contains “Read” and “Listen” features.
- Text: Cera Pro Bold, 16px, fill `#FFFFFF`.
- Feature icon size: 24x24px.
- Feature gap: 8px.
- Divider: 2x15px, fill `#FFFFFFB2`.
- Feature group gap: 32px.

### Login buttons

- Email button: 344x44px.
- Radius: 4px.
- Default fill: `#FFFFFF`.
- Active/alternate fill: `#2BDE80`.
- Border: 1px `#707C8133`.
- Label: Cera Pro Medium, 16px.
- Email label color: `#2BDE80` on white or `#FFFFFF` on green.
- Facebook button: 344x44px, radius 4px, label Cera Pro Medium, 16px, fill `#FFFFFF`.

### Login fields

- Field width: 343px.
- Field height: 35px.
- Placeholder: Cera Pro Medium, 20px, secondary color.
- Placeholder opacity: 35%.
- Bottom rule: 2px, primary dark text color.
- Login heading: Cera Pro Bold, 24px.
- Forgot-password link: Cera Pro Medium, 14px, fill `#2BDE80`.

### Content cards

- Common card size: 160x288px.
- Alternate card size: 158x287px.
- Surface: `#FFFFFF`.
- Border: 1px `#707C8159`.
- Image region: approximately 160x128px.
- Card title: Cera Pro Bold, 16px, fill `#012F3F`.
- Author label: Cera Pro Medium, 14px, fill `#FFFFFF`.
- Metadata: Cera Pro Regular, 12px, fill `#707C81`.
- Blue author label region: `#1675FC`.

### Subscription cards

- Width: 344px.
- Monthly card height: 114px.
- Yearly card height: 183px.
- Card radius: 2px.
- Card fill: `#FFFFFF`.
- Card shadow: 2px blur, `0 1px` offset.
- Plan name: Cera Pro Bold, 18px.
- Price: Cera Pro Bold, 20px, fill `#28E292`.
- Subscribe button: 106x36px, radius 3px, fill `#28E292`.
- Subscribe label: Cera Pro Medium, 16px, fill `#FFFFFF`.
- Promotional banner fill: `#E6FC88`.
- Promotional banner text: Cera Pro Bold, 14px, fill `#012F3F`.

### Feature rows

- Icon size: 24x24px.
- Icon/text gap: 12px.
- Feature text: Cera Pro Regular, 14px.
- Primary feature text color: `#012F3F` or `#000000`.
- Observed feature labels include unlimited titles, audio, Send to Kindle, and Evernote Sync.

### Navigation bar

- Width: 375px.
- Height: 85px.
- Fill: `#02314B`.
- Vertical padding: 20px.
- Horizontal padding: 31px.
- Contains 24x24px search and archive icons.

## Screen patterns

- **Splash Screen:** White-centered monogram image on a light screen, with a 44px light status bar and 34px light home indicator.
- **Login Screen:** Pale green background, brand logo, white email button, separator with “OR”, Facebook login button, status bar, and home indicator.
- **Login Screen 2:** Pale green background with “Log in” heading, email and password underline fields, green email action, password recovery link, status bar, and home indicator.
- **Subscription Plans:** Off-white background, monthly and yearly white plan cards, green pricing and subscribe actions, lime savings banner, feature list, promotional banner, status bar, and home indicator.
- **Home Screen:** White screen with pale green discovery region, “Discover” heading, green underline rule, horizontally arranged content cards, featured promotional banner, “For you” section, dark navigation bar, status bar, and home indicator.
- **Reading screen:** White rounded mobile container over a green presentation background, large book imagery, white reading metadata, lime rule, blue Read/Listen button, close and info icons, and status/home system elements.

## Notes for implementers

- Build for a 375px-wide mobile viewport.
- Preserve the recurring 44px status bar and 34px home-indicator regions.
- Use Cera Pro with the specified weight and size combinations; do not substitute typography roles.
- Keep primary actions rounded and compact: login actions are 344x44px, subscription actions are 106x36px, and the reading action is 321x46px.
- Use `#EEF4F1` for pale green app sections and `#FFFFFF` for cards and primary surfaces.
- Use `#012F3F` for primary dark text, `#707C81` for supporting text, and `#28E292` or `#2BDE80` for green actions.
- Use `#E6FC88` only for promotional accents and highlight rules.
- Use image assets where present for monograms, logos, book covers, and promotional imagery; gray placeholders are `#C4C4C4` or `#C6C7BD`.
- No local variable collections, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.
