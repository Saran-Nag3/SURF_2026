---
name: spotify-mobile-app-community
source: SPOTIFY MOBILE APP (Community) — Page 1
kind: design-system-context
---

# spotify - Design System

## Overview

Spotify mobile app community extraction focused on a dark music-library experience. The source contains one summarized screen pattern: a 414×896px Liked Songs screen with a long track list, album artwork, playback controls, metadata badges, and bottom navigation.

No local variable collections, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Dark, high-contrast music interface.
- Primary surfaces use black and dark charcoal.
- Text is predominantly white, with secondary metadata using reduced-opacity white.
- Spotify green is used for selected states, likes, downloads, and accents.
- Album art and compact song rows are central content patterns.
- Controls use simple white iconography.
- Screen backgrounds may use a dark gradient treatment.
- Typography uses Circular Std primarily, with SF Pro Text Bold used for one 15px style.
- UI labels and metadata are compact; primary song titles use 14px Circular Std Medium.
- Selected category controls use green fills and green strokes with pill-shaped corners.

## Color palette

Ranked by usage in the source:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 1783 | Primary text, icons, fills, and controls |
| `#1ED760` | 902 | Accent, selected states, liked and downloaded indicators |
| `#FFFFFFB2` | 814 | Secondary text and metadata |
| `#000000` | 677 | Dark text on light badges and surfaces |
| `#B3B3B3` | 372 | Badge fills and muted UI elements |
| `#1ED76000` | 128 | Transparent green |
| `#121212` | 81 | Primary dark background surface |
| `#FFFFFF00` | 64 | Transparent white |
| `#C4C4C4` | 58 | Neutral gray |
| `#FFFFFF99` | 57 | Reduced-opacity white |
| `#FFFFFF33` | 36 | Low-opacity white |

## Type scale

Use the following source-observed type styles, ordered by usage:

| Font | Size | Usage |
|---|---:|---:|
| Circular Std Book | 11px | 813 uses; metadata and secondary labels |
| Circular Std Bold | 7.5px | 664 uses; compact badges and micro-labels |
| Circular Std Medium | 14px | 340 uses; primary song titles |
| Circular Std Book | 14px | 130 uses |
| Circular Std Medium | 8px | 84 uses; navigation labels |
| Circular Std Bold | 11px | 57 uses |
| Circular Std Bold | 19px | 57 uses; lyrics display |
| SF Pro Text Bold | 15px | 34 uses |
| Circular Std Bold | 14px | 31 uses |
| Circular Std Medium | 11px | 28 uses |

Hierarchy:

- 19px Circular Std Bold
- 15px SF Pro Text Bold
- 14px Circular Std Bold, Book, or Medium
- 11px Circular Std Bold, Book, or Medium
- 8px Circular Std Medium
- 7.5px Circular Std Bold

## Spacing scale

No spacing tokens were found.

Observed component spacing values:

- Category padding: `9.5px` vertical and `17.5px` horizontal.
- Category gap: `10px`.
- Metadata row gap: `4px`.
- Lyrics badge padding: `2px` vertical and `3px` horizontal.
- Explicit badge padding: `2px` vertical and `3px` horizontal.
- Seeder component gap: `10px`.
- Empty space above the Liked Songs list: `128px`.

## Radius scale

Observed radii:

- `50px`: Category pill controls.
- `3px`: Lyrics and Explicit badges.

## Elevation & effects

No local effect styles or elevation tokens were found.

The source uses dark gradient background treatments on the Liked Songs screen, but no reusable effect token was defined.

## Components

Only use the following component families and source-observed dimensions or variants.

### Lyrics (Kwaku)

- Size: `317×269px`.
- Fill: `#FFFFFF`.
- Text: Circular Std Bold, `19px`.
- Variants: Property 1 values `1`, `2`, `3`, `4`, `5`, `7`, `8`.

### Like

- Like/Unlike Animation size: `69×69px`.
- Fill: `#FFFFFF`.
- Variants: State values `1`, `2`, `3`, `4`, `5`, `6`.
- Like icon size: `24×22px`.
- Fill: `#FFFFFF`.
- Variants: State `off` and `on`.

### Seed (Kwaku)

- Size: `378×0px`.
- Variants: State `Start` and `Stop`.

### Seed (Silence)

- Size: `378×0px`.
- Variants: State `Mid`, `Start`, and `Stop`.

### Seeder (Kwaku)

- Size: `82.5×8.5px`.
- Variants: State `Mid`, `Start`, and `Stop`.

### Seeder (Silence)

- Size: `8.5×8.5px`.
- Variants: State `0s`, `5s`, `7s`, and `10s`.

### Counter (Kwaku)

- Size: `23×14px`.
- Fill: `#FFFFFF`.
- Text: Circular Std Book, `11px`.
- Variants: Property 1 values `0:26` through `0:41`.

### Counter (Silence)

- Size: `24×14px`.
- Fill: `#FFFFFF`.
- Text: Circular Std Book, `11px`.
- Variants: Property 1 values `0:00` through `0:10`.

### Song

- Size: `376×52px`.
- Text styles:
  - Circular Std Medium, `14px`.
  - Circular Std Book, `11px`.
  - Circular Std Bold, `7.5px`.
- Variants: State `Not Playing` and `Playing`.

### Category Selections

- Size: `265×34px`.
- Text: Circular Std Book, `11px`.
- Variants: `Albums`, `Albums-Downloaded`, `Downloaded`, `Downloaded-Albums`, `Downloaded-Playlists`, `Mid Albums`, `Mid Downloaded`, `Mid Playlists`, `None`, `Playlists`, and `Playlists Downloaded`.

### Album

Grid variant:

- Size: `184×226px`.
- Fill: `#FFFFFF`.
- Text:
  - Circular Std Medium, `11px`.
  - Circular Std Book, `11px`.
- Variants: State `Not Playing` and `Playing`.

List variant:

- Size: `211×68px`.
- Text: Circular Std Book, `14px` and `11px`.
- Variants: State `Not Playing` and `Playing`.

### View

- Size: `16×16px`.
- Fill: `#FFFFFF`.
- Variants: Property 1 `Grid` and `List`.

### Category

- Size: `98×34px`.
- Radius: `50px`.
- Layout: horizontal.
- Padding: `9.5px` vertical, `17.5px` horizontal.
- Gap: `10px`.
- Alignment: max/center.
- Sizing: fixed width and fixed height.
- Fill: `#1E8D46`.
- Stroke: `#1ED760`, `1.5px`.
- Text: Circular Std Book, `11px`.
- Variants: Property 1 `Selected` and `Unselected`.

### Shuffle

- Size: `23.33×20px`.
- Fill: `#FFFFFF`.
- Variants: Property 1 `Shuffle Off` and `Shuffle On`.

### Repeat

- Size: `21×26px`.
- Variants: Property 1 `Replay All`, `Replay Off`, and `Replay One`.

### Play

Play/Pause Button:

- Size: `70×70px`.
- Fill: `#FFFFFF`.
- Variants: Property 1 `Pause` and `Play`.

Play/Pause control:

- Size: `17×19px`.
- Fill: `#FFFFFF`.
- Variants: Property 1 `Pause` and `Play`.

### Home

- Size: `22×36px`.
- Fill: `#FFFFFF`.
- Text: Circular Std Medium, `8px`.
- Variants: State `off` and `on`.

### Search

- Size: `22×36px`.
- Fill: `#FFFFFF`.
- Text: Circular Std Medium, `8px`.
- Variants: State `off` and `on`.

### Library

- Size: `22×36px`.
- Fill: `#FFFFFF`.
- Text: Circular Std Medium, `8px`.
- Variants: State `off` and `on`.

### Sort By

- Size: `108×14px`.
- Text: Circular Std Book, `11px`.

### Device

- Size: `23.5×20px`.
- Fill: `#FFFFFF`.

### PC

- Size: `24.62×20px`.
- Fill: `#FFFFFF`.
- Layout: vertical.
- Gap: `10px`.
- Sizing: fixed width and fixed height.

### Headphone

- Size: `23.56×22px`.
- Fill: `#FFFFFF`.
- Layout: vertical.
- Gap: `10px`.
- Sizing: fixed width and fixed height.

### Bluetooth

- Size: `14×20px`.
- Fill: `#FFFFFF`.
- Layout: horizontal.
- Gap: `10px`.
- Sizing: fixed width and fixed height.

### Phone

- Size: `23.5×20px`.
- Fill: `#FFFFFF`.
- Layout: vertical.
- Gap: `10px`.
- Sizing: fixed width and fixed height.

### Navigation Bar

- Size: `414×105px`.
- Text: Circular Std Medium, `8px`.

## Screen patterns

### Liked Songs screen

- Viewport: `414×896px`.
- Main content width: `376px`.
- A `128px` empty-space region appears above the track list.
- Track rows use the Song pattern at `376×52px`.
- Album artwork within the track rows is `52×52px`.
- Rows include:
  - White primary song title.
  - Reduced-opacity white artist metadata.
  - Green liked and downloaded indicators.
  - Optional gray Lyrics and Explicit badges.
  - A white more-options control.
- The screen uses a dark background with a gradient treatment in the upper region and a `#121212` dark surface below.
- Bottom navigation uses the Navigation Bar pattern at `414×105px`.
- Navigation labels use Circular Std Medium, `8px`.
- Playback controls include Shuffle, Repeat, Play, Device, and related device selectors.

## Notes for implementers

- Prefer the listed source colors exactly; do not introduce additional colors.
- Use `#121212` for the primary dark surface.
- Use `#FFFFFF` for primary text and iconography.
- Use `#FFFFFFB2` for secondary metadata.
- Use `#1ED760` for active, liked, downloaded, and accent states.
- Keep song rows compact at `376×52px` with `52×52px` artwork.
- Use Circular Std as the default type family unless the SF Pro Text Bold `15px` style is specifically required.
- Preserve the distinct typography roles between 14px song titles, 11px metadata, 8px navigation labels, and 7.5px badges.
- Use the Category component’s `50px` radius for pill controls and `3px` radius for compact badges.
- No responsive, motion, elevation, or interaction timing tokens were defined in the source.
