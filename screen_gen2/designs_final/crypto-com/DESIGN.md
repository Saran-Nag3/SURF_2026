---
name: tokee-crypto-community-app-community
source: Tokee - Crypto Community App (Community)
kind: design-system-context
---

# crypto-com - Design System

## Overview

- Source Figma file: Tokee - Crypto Community App (Community).
- Source pages: Cover, About, Prototype.
- No local variable collections found.
- Component families: Chartie, Numbers, Chart, Search results, Blur, Recent searches, Listening Text, Loading dots, Mic Oval, Pulse, Tile row, Typing, Search, Loader.
- The interface combines a dark indigo crypto-app surface, white content areas, compact Inter typography, chart/data views, community discovery, search, and voice/listening states.

## Design language

- Use high-contrast white, black, dark indigo, and neutral gray surfaces.
- Use green for positive market movement: `#00BB29`.
- Use compact, data-oriented typography, primarily Inter Medium and Inter SemiBold at 10–16px.
- Use SF Pro Text and SF Pro Display for the defined default callout and title styles.
- UI elements favor rounded cards, pills, circular avatars, compact icon-label controls, and generous white space.
- Charts and market data are prominent patterns; supporting labels are small and muted.
- Voice interaction uses centered white listening, pulse, loading-dot, typing, and microphone states.

## Color palette

Ranked by raw usage:

| Color | Usage | Role / observed usage |
|---|---:|---|
| `#FFFFFF` | 318 | Primary light surface, dark-theme label, component fills |
| `#242132` | 288 | Primary dark-indigo surface and text |
| `#A9A9A9` | 118 | Secondary icon and control strokes |
| `#BB0000` | 118 | Red status or negative state |
| `#888888` | 116 | Secondary text and muted metadata |
| `#00BB29` | 107 | Positive market movement |
| `#000000` | 56 | Primary light-theme label |
| `#F3F3F3` | 50 | Neutral card and control surface |
| `#633001` | 44 | Accent color |
| `#D8DCE1` | 40 | Chart and neutral graphic elements |
| `#50AF95` | 36 | Token or asset accent |
| `#ADB3BC` | 32 | Neutral secondary color |
| `#F5F5F5` | 32 | Light neutral surface |
| `#979EA7` | 28 | Chart labels and muted text |
| `#A8A8A8` | 25 | Neutral secondary color |
| `#C4C4C4` | 22 | Neutral graphic element |
| `#F3BA2F` | 20 | Yellow accent |
| `#50555C` | 16 | Dark neutral secondary color |
| `#7B61FF` | 11 | Purple accent |
| `#D1884F` | 11 | Orange-brown accent |
| `#FEDC90` | 11 | Pale yellow accent |
| `#6C78E1` | 10 | Blue-purple accent |
| `#E6E6E6` | 10 | Light neutral divider or surface |
| `#FA2873` | 10 | Pink accent |
| `#161616` | 9 | Dark cover typography |
| `#D9D9D9` | 9 | Neutral gray |
| `#DC1B1BE5` | 9 | Red with alpha notation from source |

Defined color tokens:

- `Label Color/Dark/Primary`: `#FFFFFF`.
- `Carbon / Darkest`: `#24262B`.
- `Carbon Neutral/300`: `#D6D9DD`.
- `Label Color/Light/Primary`: `#000000`.
- `System Background/Light/Primary`: `#FFFFFF`.

## Type scale

Defined typography tokens:

- `Default/Regular/Title2`: SF Pro Display Regular, weight 400, `22px` / `28px`, tracking `0.35px`.
- `Default/Regular/Callout`: SF Pro Text Regular, weight 400, `16px` / `21px`, tracking `-0.32px`.

Raw typography used:

- Inter Medium, `10px`.
- Inter SemiBold, `10px`.
- Inter Medium, `12px`.
- Inter SemiBold, `12px`.
- Inter Medium, `13px`.
- Inter SemiBold, `14px`.
- Inter SemiBold, `16px`.
- Inter SemiBold, `20px`.
- Inter Medium, `22px`.
- Averta Std Regular, `32px` on the cover.
- Averta Std Bold, `128px` on the cover.

Usage hierarchy:

- `22px`: title and listening text.
- `20px`: Inter SemiBold emphasis.
- `16px`: callout and prominent numeric or status text.
- `14px`: Inter SemiBold secondary emphasis.
- `13px`: compact Inter Medium labels.
- `12px`: primary compact UI labels and metadata.
- `10px`: chart labels, compact metadata, and small data text.

## Spacing scale

- No spacing variables found.
- Observed component spacing:
  - Numbers gap: `24px`.
  - Numbers padding: `0 0 0 0px`.
  - Cover copy vertical gap: `180px`.
  - Cover title/by-row gap: `24px`.
  - Cover by-row gap: `18px`.
  - Chart tooltip horizontal padding: `10px`, vertical padding: `6px`.
  - Tile and compact control content gap: `4px` where specified.
  - Avatar/control layouts include `15px` and `16px` gaps where specified.
- Do not treat these observed values as a generalized spacing token scale.

## Radius scale

Observed radii:

- `0px`.
- `4px`.
- `7px`.
- `8px`.
- `12px`.
- `24px`.
- `36px`.
- `40px`.
- `100px`.
- `137.78px`.

Use circular or pill-like geometry only where the source specifies large radii such as `100px` or `137.78px`. No radius variables found.

## Elevation & effects

- Blur component: `layer_blur 160px`.
- Cover phone frame: drop shadow with `160px` blur and offset `40px 80px`.
- Avatar frames: drop shadow with `6px` blur and offset `0 0`.
- Some source effects use opacity; preserve opacity only when implementing the corresponding source effect.
- No local effect styles found.
- No motion tokens found.

## Components

### Chartie

- Size: `52x20px`.
- Fill: `#FFFFFF`.
- Variants: Chartie 1, Chartie 1 Intro, Chartie 2, Chartie 2 Intro.

### Numbers

- Size: `375x12px`.
- Horizontal layout.
- Padding: `0 0 0 0px`.
- Gap: `24px`.
- Fixed width and fixed height.
- Text: Inter Medium, `10px`.
- Variants: Frame 10, Frame 9.

### Chart

- Size: `375x379px`.
- Text styles: Inter SemiBold, `10px`; Inter Medium, `10px`.
- States: Default, Intro.

### Search results

- Size: `327x601px`.
- Fill: `#FFFFFF`.
- Text styles: Inter Medium, `12px`; Inter SemiBold, `12px`, `14px`, and `16px`.
- Variants: Default, Intro.

### Blur

- Size: `190.8x180px`.
- Effect: `layer_blur 160px`.
- Variants: Group 48, Group 49.

### Recent searches

- Size: `179x187px`.
- Fill: `#FFFFFF`.
- Text styles: Inter Medium, `12px`; Inter SemiBold, `12px` and `16px`.
- Variants: Default, Intro.

### Listening Text

- Size: `112x24px`.
- Fill: `#FFFFFF`.
- Text: Inter Medium, `22px`.
- Variants: 1, 2, Variant3, Variant4, Variant5.

### Loading dots

- Size: `4x4px`.
- Fill: `#FFFFFF`.
- Variants: Ellipse 8, Ellipse 9.

### Mic Oval

- Size: `100x100px`.
- Fill: `#FFFFFF`.
- Variants: 1, 2.

### Pulse

- Size: `100x100px`.
- Fill: `#FFFFFF`.
- Variants: 1, 2, Variant3, Variant4.

### Tile row

- Size: `436x115px`.
- Fill: `#FFFFFF`.
- Text styles: Inter Medium, `12px`; Inter SemiBold, `12px` and `16px`.
- Variants: Tile row, Tile row intro.

### Typing

- Size: `4x20px`.
- Fill: `#FFFFFF`.
- Variants: 1, 2.

### Search

- Size: `327x56px`.
- Text styles: Inter Medium, `12px` and `13px`; Inter SemiBold, `12px` and `16px`; Default/Regular/Callout; Default/Regular/Title2.
- States: Activated, Default, Results, Voice.

### Loader

- Size: `22x4px`.
- Fill: `#FFFFFF`.

## Screen patterns

- **Cover / thumbnail:** A `1920x960px` cover composition with a large title, author row, app icon imagery, and centered phone mockups. The phone frames use a `40px` radius; one cover phone includes a market chart, navigation tiles, price data, chart-period controls, and a sentiment prompt.
- **Crypto market view:** White chart area with compact gray time/value labels, a dark-indigo primary text color, green positive movement, token identity, price, percentage change, and period-selection controls.
- **Community discovery:** Dark-indigo surface containing circular topic groups such as `#DeFi`, `#sidechain`, `#NFT`, and `#dapp`, with participant counts and stacked circular avatars.
- **Navigation tiles:** Light-gray rounded controls with dark-indigo iconography and labels including Chart, Markets, Portfolio, My feed, and Today’s best.
- **Search flow:** A `327x56px` Search control transitions through Default, Activated, Results, and Voice states. Search results and recent searches use white surfaces and compact Inter typography.
- **Voice interaction:** Listening Text, Mic Oval, Pulse, Loading dots, Typing, and Loader provide centered white feedback states.

## Notes for implementers

- Use only the listed colors; do not introduce additional colors from the raw extraction.
- Prefer the defined semantic tokens for primary labels and backgrounds before using raw colors.
- Use Inter for compact crypto data and control labels; use SF Pro styles for the defined callout and title tokens.
- Preserve exact component sizes and listed variants when reproducing component instances.
- No local spacing, radius, motion, grid, or effect token collections were found; use observed values only in the contexts where they are specified.
- Keep charts, market numbers, metadata, and status changes visually compact and clearly differentiated.
- Use white-filled voice and loading components against the dark-indigo voice surface where the screen pattern calls for voice interaction.
