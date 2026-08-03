---
name: seat-reservation-app-community
source: Seat Reservation App (Community)
kind: design-system-context
---

# seat - Design System

## Overview

Mobile seat-reservation and movie-ticket purchase experience from the Figma file “Seat Reservation App (Community)”.

- Source pages: Hi-Fi Prototype, Mock up 1, Sticker sheet
- Primary frame width: `428px`
- Primary frame heights: `926px`, `928px`, and `1346px`
- Core flow: home page → movie and time selection → seat selection → confirmation → preview → payment information

## Design language

- Cinema-focused interface with blue visual surfaces, white content areas, and strong black typography.
- Roboto is the primary typeface, spanning Light through Bold weights.
- IBM Plex Mono Medium appears at `30px`.
- Headings use prominent black Roboto Bold typography, commonly at `20px`, `23px`, and `24px`.
- Controls are compact and rectangular or pill-shaped, often using `#E0E0E0` with a black `1px` stroke.
- Seat selection uses compact colored square indicators with rounded top corners.
- Repeated black drop shadows use a `4px` blur and `0 4px` offset.
- Back navigation is represented by a circular black button with a white left arrow.

## Color palette

Ranked by extracted usage:

| Color | Usage | Likely use |
|---|---:|---|
| `#000000` | 755 | Primary text, strokes, unavailable seats, dark controls |
| `#FFFFFF` | 427 | Text on dark surfaces, backgrounds, light UI surfaces |
| `#143CC9` | 373 | Available seats and primary blue accents |
| `#E0E0E0` | 47 | Buttons, confirmation controls, neutral surfaces |
| `#747474` | 26 | Secondary preview information |
| `#D9D9D9` | 17 | Neutral blocks and supporting surfaces |
| `#000000BF` | 10 | Translucent black |
| `#FF0000` | 10 | Selected seat indicator |

## Type scale

No local text styles were found. Extracted raw typography:

### `30px`

- IBM Plex Mono Medium — `10` uses
- Roboto Bold — `13` uses
- Roboto Medium — `6` uses

### `29px`

- Roboto Bold — `10` uses

### `24px`

- Roboto Bold — `12` uses

### `23px`

- Roboto Bold — `12` uses

### `20px`

- Roboto Bold — `15` uses
- Roboto Medium — `14` uses
- Roboto ExtraLight — `4` uses
- Roboto Regular — `4` uses

### `16px`

- Roboto Bold — `10` uses
- Roboto Regular — `9` uses

### `15px`

- Roboto Light — `25` uses
- Roboto Medium — `10` uses
- Roboto Bold — `9` uses
- Roboto SemiBold — `4` uses

### `13px`

- Roboto SemiBold — `27` uses

### `12px`

- Roboto Regular — `36` uses
- Roboto Medium — `6` uses
- Roboto Bold — `4` uses

### `11px`

- Roboto Medium — `153` uses

### `10px`

- Roboto Medium — `12` uses
- Roboto Bold — `6` uses
- Roboto Regular — `4` uses

### `8px`

- Roboto Light — `15` uses

### `6px`

- Roboto ExtraLight — `4` uses

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed radius values:

- `0px`
- `1.35px`
- `2.69px`
- `4px`
- `13px`

Seat indicators use `4px` radius on their top corners with square bottom corners. Confirmation and secondary controls use `13px` radius.

## Elevation & effects

No local effect styles were found. Observed effects:

- Drop shadow: `4px` blur, offset `0 4px`
- Drop shadow: `2px` blur, offset `0 0`
- Background blur: `4px`
- Background blur: `6px`
- Background blur: `40px`
- Layer blur: `15px`
- Some translucent surfaces use opacity `80%`, `40%`, or `35%`.

## Components

### Arrow

Allowed component family: `arrow`.

#### `arrow/chevron-down`

- Size: `24px × 24px`
- Fill: `#FFFFFF`

#### Back arrow button pattern

- Outer button: `30px × 29px`
- Outer fill: `#000000`
- Icon frame: `16.36px × 15.82px`
- Arrow group: `10.23px × 7.94px`
- Arrow stroke: `#FFFFFF`
- Stroke width: `1.5px`
- Shadow: `4px` blur, offset `0 4px`
- Background blur: `40px`

## Screen patterns

### Home Page

- Frame: `428px × 928px`
- Includes registration and sign-in actions.
- Includes “Now Showing”, “View All”, “Contact Us”, and “Promotions and Offers” content areas.
- Uses black headings and separators with white and neutral supporting surfaces.

### Movies and Times Screen

- Frame: `428px × 1346px`
- Organizes movie listings by “Movies”, “Times”, and “Dates”.
- Time controls are white rectangles with `4px` blur shadows.
- Time labels use Roboto Medium at `11px`.
- Format labels include `XD`, `IMAX`, and `STANDARD` in Roboto SemiBold at `13px`.

### Seat Screen

- Frame: `428px × 926px`
- Displays a “SCREEN” label and a large seat grid.
- Available seats use `#143CC9`.
- Selected seats use `#FF0000`.
- Unavailable seats use `#000000`.
- Seat markers are approximately `20.1px × 20.1px` with `4px` top-corner radii.
- Includes a legend for “Selected”, “Available”, and “Unavailable”.
- Movie title: “THOR: LOVE AND THUNDER”, Roboto Bold at `23px`.
- Includes mobile status indicators and a circular back arrow button.

### Seat Selected Screen

- Reuses the seat grid and seat-status legend from the Seat Screen.
- Adds a confirmation state with “CONFIRM?” in Roboto Bold at `24px`.
- Confirmation control: `176px × 54px`, `#E0E0E0` fill, black `1px` stroke, `13px` radius.
- Cancel control: `96px × 27px`, `#E0E0E0` fill, black `1px` stroke, `13px` radius.
- “Cancel” uses Roboto Medium at `20px`.

### Preview Screen

- Frame: `428px × 926px`
- Presents selected date, seats, total amount, movie title, and time.
- Secondary preview details use `#747474`.
- Includes “BUY NOW?” in Roboto Bold at `24px`.
- Includes a cancel control and circular back arrow button.

### Payment Information Screen

- A Payment Information Screen is present in the extracted prototype.
- The raw extraction is truncated before its detailed child structure.

## Notes for implementers

- Use the listed palette only; prioritize `#000000`, `#FFFFFF`, and `#143CC9`.
- Use Roboto for interface text unless the `30px` IBM Plex Mono Medium style is specifically required.
- Preserve the compact `428px` mobile layout and the dense seat-grid presentation.
- Treat seat states distinctly: available `#143CC9`, selected `#FF0000`, unavailable `#000000`.
- Use `#E0E0E0` controls with black `1px` strokes and `13px` radii for confirmation and cancel actions.
- Apply the repeated `4px` blur, `0 4px` offset shadow treatment to prominent controls and headings where shown.
- No local variable collections, spacing tokens, radius tokens, motion tokens, grid styles, or local text/effect styles were found.
