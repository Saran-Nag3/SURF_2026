---
name: brawl-stars-mobile-app-community
source: Brawl Stars Mobile App (Community)
kind: design-system-context
---

# brawl-stars - Design System

## Overview

- Mobile app community design for iPhone 13 & 14-sized screens.
- Source page: Page 1.
- Primary frame size: 390 × 844px.
- Visual direction combines bold game artwork, large outlined display headings, vivid blue backgrounds, and high-contrast white text.
- No local variables, paint styles, spacing variables, radius variables, motion tokens, effect styles, grid styles, or component families were found.

## Design language

- Playful, game-oriented, character-led presentation.
- Use Lilita One for prominent headings, labels, and action text.
- Headings use white text with a 1px black stroke; major headings also use a black drop shadow.
- UI counters use black backing shapes, white numerals, circular image icons, black outlines, and black drop shadows.
- Screens use full-bleed character and game-mode artwork.
- Action labels such as “Select” and “Next” are large, centered, white, outlined display text.
- Device chrome is represented with a black notch, white status-bar elements, and a white home indicator.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| #000000 | 52 | Text strokes, outlines, backing shapes, notch, and shadows |
| #FFFFFF | 36 | Primary text, status-bar elements, and light surfaces |
| #DADADA | 9 | Unspecified light neutral usage |
| #8321B1 | 10 consolidated | Purple usage; consolidates the near-identical #8021AE occurrence count of 3 with #8321B1 occurrence count of 7 |
| #E91313 | 4 | Red accent usage |
| #FF805F | 4 | Orange-coral accent usage |
| #2C66DF | 3 | Blue accent usage |

Additional source fills include image assets and gradients. Their source colors are not included here because they are outside the allowed palette.

## Type scale

| Size | Typeface | Weight | Usage |
|---:|---|---:|---|
| 40px | Lilita One LilitaOne | Not specified | Major headings such as character names and “Choose Game Mode” |
| 24px | Lilita One LilitaOne | Not specified | Section headings and action labels such as “Select” and “Next” |
| 20px | Lilita One LilitaOne | Not specified | Resource-counter numerals |
| 17px | SF Pro Text Semibold | 600 | Default/Bold/Body; 22px line height, -0.41px tracking; used by status-bar time |

Typography usage counts:

- Lilita One LilitaOne, 24px: 7 uses.
- Lilita One LilitaOne, 20px: 6 uses.
- Lilita One LilitaOne, 40px: 3 uses.
- Default/Bold/Body: 3 uses.

## Spacing scale

_None found in source._

## Radius scale

- 0px: Used on unrounded groups, vectors, and the notch.
- 4px: Used on the action-button vector.
- 24px: Used on the left status-bar side.
- 50px: Used on the 390 × 844px device frames.
- 100px: Used on the 144 × 5px home indicator.

## Elevation & effects

- Black text stroke: 1px on display headings, action labels, and counter numerals.
- Black outline: 2px on circular resource icons.
- Black button outline: 2.5px.
- Drop shadow on counter numerals: 0px horizontal offset, 2px vertical offset.
- Drop shadow on circular resource icons: 0px horizontal offset, 3px vertical offset, 1px blur.
- Drop shadow on major headings: 0px horizontal offset, 1.8px vertical offset.
- Drop shadow is also used on the “Select” and “Next” action labels with 0px horizontal offset and 2px vertical offset.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

- **Character selection screen:** 390 × 844px device frame with blue background treatment, full-bleed character artwork, resource counters for Bling, Coin, and Gem, a large 40px character-name heading, and a prominent “Select” action.
- **Alternate character selection screen:** Same device-frame treatment and resource-counter pattern, with different character artwork and character name. The “Select” action is positioned over the artwork.
- **Game-mode selection screen:** Blue screen with game-mode artwork and labels for Knockout, Hot Zone, Gem Grab, and Showdown. Uses a large “Choose Game Mode” heading and a “Next” action.
- **Logo screen:** Standalone 264 × 213px logo image asset.
- **Shared device chrome:** Screens include a centered black notch at the top, white “9:41” status-bar time, decorative right-side status elements, and a centered 144 × 5px home indicator at the bottom.

## Notes for implementers

- Treat 390 × 844px as the primary mobile canvas.
- Preserve the strong contrast between white outlined typography and black outlines or shadows.
- Use Lilita One LilitaOne at 40px for primary screen headings, 24px for action and mode labels, and 20px for resource-counter values.
- Use SF Pro Text Semibold at 17px with 22px line height and -0.41px tracking for system-style body text.
- Keep artwork prominent and use image assets as the visual foundation for character, mode, and resource imagery.
- No reusable component specifications were extracted; do not assume component behavior or geometry beyond the summarized screen patterns.
- Avoid introducing unverified spacing, motion, component, or color tokens.
