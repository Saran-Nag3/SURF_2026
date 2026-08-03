---
name: apple-maps-ios-26-dark-mode-community
source: Apple Maps iOS 26 - Dark Mode (Community)
kind: design-system-context
---

# apple-maps - Design System

## Overview

Apple Maps iOS 26 dark-mode community design extraction. The source contains a Cover screen and map-oriented Screens, with a 390×844 px Map component and responsive mockups at 390×844 px and 196×426.13 px.

## Design language

- Dark-mode Apple Maps presentation with high-contrast white labels and translucent overlays.
- SF Pro is the primary typeface; Inter appears in the cover presentation.
- Use layered translucency, blur, glass effects, gradient masks, rounded sheets, and pill-shaped controls.
- Primary interactive accent: blue.
- Alert surfaces use translucent gray fills over darkened map content.
- Map imagery is used as a visual background inside rounded device frames.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 540 | Primary light surface, white labels, fills |
| `#000000` | 315 | Dark backgrounds and dark overlays |
| `#FFFFFF0F` | 230 | Low-opacity white translucency |
| `#FFFFFF0D` | 222 | Very low-opacity white translucency |
| `#CCCCCC80` | 201 | Translucent gray surfaces |
| `#00000033` | 147 | Dark translucent overlays |
| `#000000D9` | 135 | Strong dark overlay |
| `#00000099` | 77 | Medium dark overlay |
| `#0091FF40` | 60 | Translucent blue accent |
| `#00000001` | 56 | Near-transparent glass layer |
| `#0000000A` | 48 | Very low-opacity dark layer |
| `#333333` | 48 | Dark decorative or icon detail |
| `#F7F7F7` | 48 | Light neutral surface |
| `#FFFFFF80` | 48 | Medium-opacity white |
| `#FFFFFF1A` | 22 | Translucent white layer |
| `#CCCCCCA6` | 19 | Higher-opacity translucent gray |
| `#0091FF1A` | 18 | Low-opacity blue accent |
| `#0091FF24` | 18 | Light blue accent layer |
| `#2C2C2E80` | 16 | Dark gray translucency |

Named tokens:

- Vibrant Labels/Dark/Vibrant Primary: `#FFFFFF`
- Backgrounds/Primary: `#FFFFFF`
- Backgrounds/Tertiary: `#FFFFFF`
- Backgrounds/Secondary: `#F2F2F7`
- Blue90: `#0C79FE`
- Colors/Red: `#FF3B30`
- White: `#FFFFFF`
- Grays/White: `#FFFFFF`
- Brand/700: `#6941C6`

## Type scale

Named text styles:

| Style | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Large Title/Emphasized | SF Pro | Bold 700 | 34px | 41px | 0.4px |
| Text xl/Medium | Inter | Medium 500 | 20px | 30px | 0px |
| Body/Regular | SF Pro | Regular 400 | 17px | 22px | -0.43px |
| Headline/Regular | SF Pro | Semibold 590 | 17px | 22px | -0.43px |
| Caption1/Regular | SF Pro | Regular 400 | 12px | 16px | 0px |

Additional raw sizes present: 25px, 18px, 14.5px, 14px, 13.91px, 13.46px, 13px, 12.43px, 11.34px, 10.95px, 9.09px, 8.83px, 8.67px, 8.58px, 8.29px, 8.01px, 7.32px, 7.02px, 6.56px, and 6.06px.

## Spacing scale

No spacing variables were defined. Observed layout spacing values include:

- `0px`
- `2.02px`
- `2.67px`
- `3.03px`
- `3.9px`
- `4.04px`
- `4.51px`
- `4.88px`
- `5.05px`
- `5.15px`
- `5.85px`
- `6.06px`
- `6.44px`
- `6.67px`
- `7.8px`
- `8.01px`
- `9.26px`
- `10.31px`
- `10.67px`
- `12.24px`
- `13.53px`
- `14.01px`
- `15.46px`
- `16.01px`

## Radius scale

No radius variables were defined. Observed radii include:

- `12.68px`
- `16.58px`
- `16.75px`
- `17.17px`
- `20.48px`
- `21.91px`
- `22.68px`
- `23.4px`
- `24.38px`
- `27.06px`
- `30.93px`
- `32.21px`
- `48.76px`
- `64.43px`
- `144.32px`
- `149.45px`
- `190.71px`
- `504.89px`
- `667.18px`

## Elevation & effects

- Background blur values: `4.88px`, `6.44px`, `20.2px`, `26.69px`, `29.25px`, `38.66px`, `39px`, and `51.54px`.
- Layer blur values: `10.1px`, `13.34px`, `19.5px`, and `25.77px`.
- Glass effects are used on alert surfaces, map controls, and lower map controls.
- Alert backgrounds combine a translucent gray fill, dark blur layer, glass effect, and rounded corners.
- Scroll-edge effects use a gradient mask and blurred dark layer.
- Map bottom bars use a translucent blurred layer and a dark gradient fill.
- No motion tokens, local effect styles, or grid styles were defined.

## Components

### Map

- Family: Map
- Base size: `390x844px`
- Fill: `#FFFFFF`
- Variants: `Step: 2`, `Step: 3`, `Step: 4`, `Default`, `Pin1`, `Pin2`, `Pin3`
- Text styles used within the component include:
  - SF Pro Semibold, 17px
  - SF Pro Regular, 17px
  - Body/Regular
  - SF Pro Medium, 12px
  - SF Pro Medium, 13.91px
  - SF Pro Regular, 17.49px
  - SF Pro Semibold, 14.5px
  - SF Pro Semibold, 18px
  - SF Pro Regular, 13px
  - SF Pro Regular, 25px
  - SF Pro Regular, 34px
  - Headline/Regular
  - SF Pro Medium, 17px
  - SF Pro Bold, 17px
  - SF Pro Medium, 14px

## Screen patterns

- **Cover:** Black `#000000` presentation background with a large white heading treatment, supporting text, and multiple device mockups. The heading area uses a 34px symbol and large Inter display text.
- **Map screen:** Rounded map viewport with map imagery, status bar, top controls, location pin, bottom toolbar or inspector sheet, and translucent blurred surfaces.
- **Alert state:** Centered rounded alert over a darkened map or device screen. Includes a title, description, two stacked text fields, and two horizontally arranged pill buttons.
- **Device mockups:** The same map and alert patterns are shown at `259x563.1px`, `260.2x563.1px`, `196x426.13px`, and `196.91x426.13px`.
- **Location pin:** Circular blue gradient halo with a smaller blue pin marker and white stroke.
- **Inspector sheet:** Rounded lower sheet or toolbar layered over the map, with translucent glass treatment and rounded controls.

## Notes for implementers

- Preserve the dark-mode contrast hierarchy: white primary labels over dark or translucent surfaces.
- Prefer named styles over raw typography values where available.
- Use `#0C79FE` for the primary solid blue token and the listed translucent blue values for blue overlays.
- Keep alert and sheet surfaces rounded and layered with blur/glass effects.
- Scale the supplied mockup dimensions proportionally; the source includes both 390×844 and 196×426.13 presentations.
- Do not assume spacing, radius, motion, or grid tokens beyond the observed values; no corresponding variable collections were found.
