---
name: ios-app-icon-logo-mock-ups-community
source: iOS app icon / logo mock-ups (Community)
kind: design-system-context
---

# ups - Design System

## Overview

- The source presents an iOS app icon/logo concept across favicon, icon-shape, icon-grid, iOS dock, macOS dock, component, meta, and credits screens.
- The primary reusable component is `icon - edid this`, a 256×256px app icon with a coral-to-red linear gradient and centered white vector mark.
- Supporting presentation patterns include rounded icon variants, dock layouts, browser chrome mockups, and device mockups.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Use a coral-to-red linear gradient for the primary app icon: `#EF786F` at 0% to `#D8595E` at 100%.
- Pair the gradient icon background with a white centered glyph.
- Use rounded-square icon treatments with radius variants from subtle rounding to highly circular forms.
- Dock surfaces use translucent white gradient treatments, rounded corners, borders, and background blur.
- Supporting chrome and mockup UI is predominantly grayscale, using white, black, and gray strokes/fills.
- Typography is minimal and uses Roboto Regular.

## Color palette

Ranked by raw usage:

| Color | Usage | Application |
|---|---:|---|
| `#FFFFFF` | 140 | Backgrounds, icon glyphs, device surfaces, controls |
| `#000000` | 37 | Text, lock icon, dark icon-grid mark |
| `#A9A9A9` | 15 | Browser chrome strokes, navigation icons, window dots |
| `#C4C4C4` | 6 | Raw unstyled color |
| `#F5F8FF` | 6 | Raw unstyled color |
| `#FFFFFFBF` | 6 | Raw unstyled translucent white |
| `#F2F2F2` | 5 | Favicon, icon-shapes, and icon-grid screen backgrounds |
| `#DADADA` | 3 | Raw unstyled color |
| `#EF786F` | — | Primary icon gradient start |
| `#D8595E` | — | Primary icon gradient end |

## Type scale

- **Roboto Regular, 32px** — raw typography style, 3 uses.
- **Roboto Regular, 37.02px** — used for the `Airbnb` and `airbnb.com` labels in the favicon browser mockup.
- No local text styles were defined.

## Spacing scale

Observed spacing and layout values:

- `0px` — zero padding and gap values.
- `37.02px` — browser navigation button gap.
- `40px` — macOS dock horizontal padding and app-icon gap.
- `48px` — dock vertical padding and macOS dock horizontal padding.
- `56px` — iOS dock horizontal padding and macOS dock horizontal padding.
- `76px` — icon-shapes frame gap.
- `91px` — meta frame gap.

Observed dock padding:

- iOS dock: `56px 48px 56px 48px`.
- macOS dock: `40px 48px 40px 48px`.

## Radius scale

Observed radii:

- `0px` — square groups and device shell regions.
- `12.34px` — favicon icon instance.
- `16px` — first icon-shapes icon.
- `43.19px` — browser chrome outline.
- `56px` — second icon-shapes icon.
- `56.3px` — green dock icon rectangle.
- `64px` — dock app-icon instances.
- `94px` and `94.02px` — macOS and iOS dock containers.
- `199.8px` — iPhone screen frame.
- `200px` — third icon-shapes icon.
- `200.82px` — browser address input.

## Elevation & effects

- Background blur: `263.27px` on iOS and macOS dock surfaces.
- Icon-grid frame drop shadow: `56px`, offset `0 28px`.
- iPhone group drop shadows: `246px`, offset `70.52 70.52`; and `67.75px`, offset `0 11.75`.
- App-icons group drop shadows: `5.61px`, offset `0 5.61`; and `39.25px`, offset `0 16.82`.
- Green dock icon uses inner shadows with `2.05px` offsets.
- Green dock glyph group uses drop shadows of `8.19px` and `22.52px`.
- No local effect styles were defined.

## Components

### `icon - edid this`

- Component family: `icon - edid this`.
- Base size: `256×256px`.
- Fill: linear gradient, `#EF786F` at 0% to `#D8595E` at 100%.
- Centered vector: `139×151px`.
- Vector fill: `#FFFFFF`.
- Observed radius variants:
  - `12.34px` at `61.71×61.71px` in the favicon mockup.
  - `16px` at `256×256px`.
  - `56px` at `256×256px`.
  - `64px` at `256×256px`.
  - `200px` at `256×256px`.
- The icon appears in favicon, icon-shapes, icon-grid, iOS dock, macOS dock, and as a standalone component.

## Screen patterns

- **Favicon:** A `714×988px` light-gray browser mockup with grayscale chrome, browser labels, and a small rounded `icon - edid this`.
- **Icon shapes:** A `1245×988px` light-gray presentation screen showing three 256×256px instances with `16px`, `56px`, and `200px` radii.
- **Icon grid:** A `1245×988px` light-gray screen showing a 512×512px icon with a decorative grid overlay and black vector mark.
- **iOS app dock:** A `1245×988px` screen containing an iPhone mockup, a rounded dock, four 256px app-icon slots, and a notch.
- **macOS app dock:** A `1245×988px` white screen with a horizontal rounded dock, multiple 256px app-icon slots, and the primary icon at the end.
- **Standalone component:** A 256×256px presentation of `icon - edid this`.
- **Meta:** A `2265.41×960px` layout with a 1920×960px cover region and a decorative icon grid.
- **Credits:** A black `Roboto Regular, 32px` text treatment.

## Notes for implementers

- Use the exact component name `icon - edid this`.
- Preserve the primary icon size of `256×256px` and the centered vector proportions of `139×151px`.
- Use only the coral-to-red gradient values specified for the primary icon.
- Apply radius as a deliberate variant: `16px`, `56px`, `64px`, `12.34px`, or `200px` are all observed uses.
- Keep the icon glyph white unless reproducing the icon-grid variation, which uses a black mark.
- Treat decorative grids, device shells, browser chrome, and dock contents as presentation patterns rather than reusable component families.
- No motion behavior or responsive rules were extracted.
