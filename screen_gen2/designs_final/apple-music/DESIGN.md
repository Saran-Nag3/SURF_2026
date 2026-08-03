---
name: apple-music-ui-community
source: Apple Music UI (Community)
kind: design-system-context
---

# apple-music - Design System

## Overview

Apple Music-inspired mobile player UI extracted from the Figma file “Apple Music UI (Community)”. The source includes a 414×896px phone screen, supporting thumbnail artwork, a playback player, navigation bar, playback controls, speaker icons, and song metadata.

## Design language

- Mobile-first music playback interface.
- Strong black-and-white contrast for text, controls, progress indicators, and navigation.
- Green accent represented by SystemGreen / Light.
- Large centered artwork with rounded corners.
- Compact playback metadata and progress controls.
- SF Pro Display typography with semibold, medium, heavy, bold, and regular weights.
- White navigation and control surfaces over dark or gradient backgrounds.

## Color palette

Ranked where usage counts are available:

| Color | Token / usage |
|---|---|
| `#000000` | Raw color: 19 uses |
| `#DADADA` | Raw color: 7 uses |
| `#C4C4C4` | Raw color: 3 uses |
| `#000000` | Label Color / Light / Primary: 7 uses |
| `#D6D9DD` | Carbon Neutral/300: 1 use |
| `#333333` | Gray 1: 1 use |
| `#FFFFFF` | Label Color / Dark / Primary: 1 use |
| `#34C759` | SystemGreen / Light: 1 use |
| `#24262B` | Carbon / Darkest |

Observed usage:
- `#000000`: primary light-mode labels, playback progress, home indicator, and dark controls.
- `#FFFFFF`: dark-mode labels, navigation surfaces, and playback icons.
- `#C4C4C4`: artwork placeholders.
- `#333333`: chevron icon.
- `#D6D9DD`: Carbon Neutral/300.
- `#34C759`: SystemGreen / Light accent.
- `#24262B`: Carbon / Darkest.
- `#DADADA`: unstyled raw color.

## Type scale

| Size | Typeface | Weight / usage |
|---:|---|---|
| 9px | SF Pro Display | Bold; thumbnail creator label |
| 9px | SF Pro Display | Regular; thumbnail application label |
| 12px | SF Pro Display | Semibold; raw typography token, playback timestamps, thumbnail title |
| 18px | SF Pro Display | Medium; artist name |
| 24px | SF Pro Display | Heavy; song title |

Typography hierarchy:
- 24px heavy heading: “The Night We Met”.
- 18px medium secondary metadata: “Lord Huron”.
- 12px semibold compact labels and timestamps.
- 9px regular or bold thumbnail metadata.

## Spacing scale

_None found in source._

## Radius scale

No radius tokens were defined. Observed radii:

- `0px`: groups without rounded corners.
- `4px`: playback control group.
- `10px`: artwork rectangles.
- `16px`: player background bars.
- `25px`: phone frame and large screen background.
- `100px`: home indicator, progress bars, and playback head-related bars.

## Elevation & effects

No local effect styles were defined.

Observed effects:
- Large screen backgrounds use a drop shadow with `50px` size and offset `0 4`.
- Artwork placeholders use a drop shadow with `7px` size and offset `0 4`.
- The playback head uses a drop shadow with `5px` size and offset `0 0`.
- Screen backgrounds use radial gradient fills.
- Artwork placeholders use `#C4C4C4`.
- The phone frame and major screen backgrounds use `25px` corner radius.

## Components

Allowed component families:

### NavBar

- Size: `414×55px`.
- Fill: `#FFFFFF`.
- Used as the iPhone X or newer navigation/status bar surface.

### Action=play.fill

- Size: `24.39×27.31px`.
- Fill: `#FFFFFF`.
- Used for playback actions.
- Two grouped pairs of play controls are present in the player control area.

### Type=speaker.fill

- Size: `12×18px`.
- Fill: `#FFFFFF`.
- Used as a compact speaker icon.

### Type=speaker.wave.3.fill

- Size: `26×18px`.
- Fill: `#FFFFFF`.
- Used as an expanded speaker-volume icon.

### Playback player

- Overall observed size: `287×21px`.
- Background track: `287×5px`.
- Filled progress track: `148×5px`.
- Play head: `21×21px`.
- Track bars use `16px` radius.
- Play head uses `#FFFFFF`.

### Home Indicator

- Size: `134×5px`.
- Fill: `#000000`.
- Radius: `100px`.
- Positioned centered at the bottom of the phone screen.

## Screen patterns

### Thumbnail

- `306×306px` square composition.
- Uses an image fill for the main artwork.
- Includes a compact text block:
  - “Hands on Apple Music UI”
  - “Created by - Yash Gandhi”
  - “Application Used”
- Thumbnail text uses black SF Pro Display typography.

### Phone player screen

- Outer phone frame: `414×896px`, `25px` radius, `#FFFFFF` fill.
- Main screen content extends to `414×836px`.
- Artwork placeholder: `330×330px`, `10px` radius, `#C4C4C4` fill.
- Top navigation bar: `414×55px`, `#FFFFFF` fill.
- Song metadata:
  - Title: “The Night We Met”, 24px SF Pro Display Heavy, `#000000`.
  - Artist: “Lord Huron”, 18px SF Pro Display Medium, `#000000`.
- Playback progress includes elapsed time “1:28” and remaining time “-4:20”, both 12px SF Pro Display Semibold.
- Speaker controls use `Type=speaker.fill` and `Type=speaker.wave.3.fill`.
- Playback actions use `Action=play.fill`.
- Bottom home indicator is `134×5px`, black, with `100px` radius.

### Masked artwork screen

- Overall observed size: `414×821px`.
- Contains two `250×250px` artwork placeholders.
- Artwork placeholders use `#C4C4C4` fill and `10px` radius.
- Screen background uses a radial gradient.

## Notes for implementers

- Preserve the 414px mobile layout dimensions for the primary phone composition.
- Use only the listed component families: `Action=play.fill`, `NavBar`, `Type=speaker.fill`, and `Type=speaker.wave.3.fill`.
- Keep playback icons white and progress indicators black in the observed player composition.
- Use `#000000` for light-mode song metadata and compact timestamps.
- Use `#FFFFFF` for navigation, dark-mode labels, and playback controls.
- Keep artwork placeholders square with `10px` radius and `#C4C4C4` fill.
- Use the observed typography sizes and weights exactly; no local text styles were defined.
- Do not introduce spacing, motion, grid, or additional component tokens that are not present in the source.
