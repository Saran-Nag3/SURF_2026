---
name: the-ordinary-skincare-mobile-app-community
source: The Ordinary-Skincare Mobile App (Community), Page 1
kind: design-system-context
---

# the-ordinary - Design System

## Overview

Mobile skincare app design for The Ordinary. The extracted page contains three primary screens: Splash, Categories, and Homepage. The system uses CircularXX typography, a muted olive accent, monochrome neutrals, rounded controls, product cards, and iPhone-specific status and home indicators.

## Design language

- Minimal, editorial skincare aesthetic with generous white space.
- Primary accent is muted olive `#A2AA7B`.
- Text is predominantly near-black `#181717`.
- Interfaces use rounded pills, rounded cards, thin neutral borders, and restrained shadows.
- Product imagery is prominent inside cards and promotional surfaces.
- Selected controls use olive fill with white text; inactive controls use white or light neutral surfaces.
- Navigation uses compact icon-and-label items.
- Splash artwork uses soft blurred olive decoration and a warm gradient background; exact gradient colors are not included in the allowed palette.

## Color palette

Ranked by usage in the source:

| Color | Usage | Role |
|---|---:|---|
| `#181717` | 52 | Primary text, icons, dark UI details |
| `#000000` | 23 | Image masks, strokes, dark structural details |
| `#AFAFAF` | 20 | Secondary text, inactive navigation, indicators |
| `#FFFFFF` | 20 | Backgrounds, inverse text, icon fills |
| `#F0F0F0` | 14 | Borders and subtle dividers |
| `#A2AA7B` | 12 | Brand accent, selected states, primary actions |
| `#C28C7E` | 4 | Warm secondary accent for the Trending filter |
| `#A2AA7B59` | 3 | Translucent olive accent |

## Type scale

Observed typography:

| Size | Family | Style | Observed use |
|---:|---|---|---|
| 32px | CircularXX | Medium | Large category heading |
| 26px | CircularXX | Medium | Splash headings |
| 18px | CircularXX | Medium | Product titles and prominent text |
| 18px | CircularXX | Book | Supporting splash copy |
| 16px | CircularXX | Book | Body text, labels, category controls |
| 16px | CircularXX | Regular | Product descriptions and filters |
| 16px | CircularXX | Medium | Buttons, product titles, section labels |
| 15px | SF Pro Display | Regular | iPhone status-bar time |
| 12px | CircularXX | Medium | Navigation labels and metadata |
| 12px | CircularXX | Regular | Product descriptions |
| 12px | CircularXX | Medium | Small links such as “View all” |

## Spacing scale

No spacing variables were found. Observed padding and gap values:

- 2px
- 4px
- 6px
- 10px
- 12px
- 16px
- 20px
- 24px
- 26px

Key layout measurements:

- Category control gap: 20px.
- Category control internal gap: 6px.
- Category control horizontal padding: 26px.
- Category control icon size: 24px.
- Primary action height: 64px.
- Search field height: 50px.
- Product card gap: 24px.
- Product card image region height: 246.5px.
- Bottom navigation region height: 93px.
- Home indicator: 134px × 5px.

## Radius scale

No radius variables were found. Observed corner radii:

- 1.33px
- 2.67px
- 8px
- 12px
- 16px
- 21px
- 30px
- 32px
- 35px
- 100px

Usage patterns:

- Mobile screen frames: 35px.
- Pill controls and buttons: 30px or 32px.
- Product cards and promotional cards: 16px.
- Search field: 8px.
- Product image regions: 12px.
- Circular action buttons: 21px radius for 42px controls.
- Home indicator: 100px radius.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Large mobile-screen shadow: 140px blur with a 60px vertical offset.
- Product-card shadow: 16px blur with a 5px vertical offset.
- Search-field shadow: 20px blur with a 4px vertical offset.
- Filter-chip shadow: 20px blur with an 8px vertical offset.
- Bottom navigation shadow: 14px blur with a −4px vertical offset.
- Splash decorative ellipses: 400px layer blur at 56% opacity.
- Product-card decorative ellipse: 41px background blur.
- Thin borders commonly use `#F0F0F0`.
- Dark structural strokes commonly use `#000000` or `#181717`.

## Components

_None found in source._

## Screen patterns

### Splash

- 414px × 896px mobile screen with 35px corner radius.
- Warm, soft gradient background with blurred olive decorative ellipses.
- Large CircularXX Medium headings at 26px in `#181717`.
- Supporting copy uses CircularXX Book at 18px.
- Includes a 24px back arrow and iPhone status bar.

### Categories

- 414px × 896px white mobile screen with 35px corner radius.
- Heading: “Choose your favourite category” at 32px CircularXX Medium.
- Supporting instruction and skip action use muted secondary text.
- Category options are outlined pill controls, 56px high, with 24px icons and 6px icon-to-label spacing.
- Selected category uses `#A2AA7B` fill with `#FFFFFF` text.
- Primary “Continue” action is 366px × 64px with 32px radius, `#A2AA7B` fill, and `#FFFFFF` label.
- Options are arranged in rows with 20px gaps.

### Homepage

- 414px × 896px white mobile screen with 35px corner radius.
- Top promotional product card uses a 16px radius, product imagery, a 16px CircularXX Medium title, and 12px CircularXX Regular description.
- Search field is 366px × 50px with an 8px radius, `#F0F0F0` border, search icon, and muted placeholder.
- Section headers use CircularXX Medium at 20px; “View all” uses CircularXX Medium at 12px in `#A2AA7B`.
- Filter chips are pill-shaped, 38px high, with 12px spacing. The selected “Trending” state uses `#C28C7E` text and border.
- Product cards are approximately 265px × 350px with 16px radius.
- Product image region uses a 12px radius and occupies approximately 246.5px height.
- Product card titles use CircularXX Medium at 18px; descriptions use CircularXX Regular at 12px; prices use CircularXX Medium at 18px.
- Add-to-bag actions are 42px circular controls using `#A2AA7B` when active and `#AFAFAF` when inactive.
- Bottom navigation contains Home, Saved, Profile, and Explore with 24px icons and 12px CircularXX Medium labels.
- Active navigation uses `#A2AA7B`; inactive navigation uses `#AFAFAF`.

## Notes for implementers

- Use only the extracted palette values documented above.
- Prefer CircularXX for app UI. Use SF Pro Display Regular at 15px only for the iPhone status-bar time.
- Preserve the distinction between CircularXX Book, Regular, and Medium.
- Use 30px–32px radii for pill controls and 16px radii for cards.
- Keep primary actions and selected states olive with white labels.
- Keep inactive controls white with `#F0F0F0` borders and `#AFAFAF` text.
- Product cards should combine a large image area with compact title, description, price, favorite, and add-to-bag actions.
- Maintain the 414px × 896px mobile composition and the 35px outer screen radius when reproducing the extracted screens.
