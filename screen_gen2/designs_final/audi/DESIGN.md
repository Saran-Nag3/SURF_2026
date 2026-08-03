---
name: audi-car-control-app-concept-community
source: Audi car control app(concept) (Community)
kind: design-system-context
---

# audi - Design System

## Overview

- Audi car control app concept from the Figma file `Audi car control app(concept) (Community)`.
- Source pages: `Page 1`, `cover`, and `icon`.
- No local variable collections were found.
- Component families: `Frame`, `Group 59`, `Items Card`, and `remix-icons`.

## Design language

- Light interface with white surfaces and dark blue headline/icon accents.
- Primary action treatment uses blue `#4475F2` with white content.
- Content is organized into rounded cards with soft shadows.
- Typography is primarily Open Sans for the documented design tokens, with additional raw usage of PingFang SC, MiSans, Audi Type WideBold, and SF Pro Text.
- Icons use 24px line and fill variants, primarily rendered in white within icon treatments.

## Color palette

Ranked by raw usage where counts are available:

| Color | Raw uses | Documented usage |
|---|---:|---|
| `#FFFFFF` | 60 | White, general white, light background base, card fill, icon fill |
| `#000000` | 27 | Dark background, label color/light/primary |
| `#DADADA` | 26 | Raw unstyled color |
| `#666666` | 10 | Raw unstyled color |
| `#09121FBF` | 8 | Raw unstyled color |
| `#00000066` | 7 | Raw unstyled color |
| `#000000D9` | 7 | Raw unstyled color |
| `#D9D9D9` | 6 | Raw unstyled color |
| `#E1E1E1` | 6 | Raw unstyled color |
| `#999999` | 5 | Raw unstyled color |
| `#FAFAFA` | 5 | Raw unstyled color |
| `#FFFFFFCC` | 4 | Raw unstyled color |
| `#010101` | 3 | Raw unstyled color |
| `#09121F` | — | Icons |
| `#162A48` | — | Headlines |
| `#AEB9CA` | — | Tab bar |
| `#909EB0` | — | Body secondary |
| `#646668` | — | Body primary |
| `#4475F2` | — | Blue primary action |
| `#F7F6F5` | — | Neutral / Grey 2 |
| `#F5F8FA` | — | White token |
| `#FF9500` | — | System orange / light |
| `#E5E7EB` | — | Border/shadow effect |
| `#03071233` | — | Border/shadow effect |
| `#0000000A` | — | Card shadow |
| `#00000040` | — | Text shadow |

## Type scale

Documented typography tokens:

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `.Headline/H1` | Open Sans | Bold 700 | 38px | 46px | 0px |
| `.Headline/H3` | Open Sans | Bold 700 | 24px | 32px | 0px |
| `.Headline/H4` | Open Sans | SemiBold 600 | 20px | 28px | 0px |
| `.Body/Primary` | Open Sans | Regular 400 | 16px | 24px | 0px |

Raw typography also includes:

- MiSans Demibold: 30px and 24px.
- PingFang SC Medium: 14px and 12px.
- PingFang SC Semibold: 20.09px and 14px.
- PingFang SC Regular: 14px.
- Audi Type WideBold: 14.35px.
- SF Pro Text Semibold: 17px.
- PingFang SC Light: 11.48px.

## Spacing scale

No spacing variables or spacing scale were found.

Documented component spacing:

- `Items Card` horizontal variant: padding `12px 12px 12px 12px`, gap `12px`.
- `Items Card` vertical variant: padding `12px 12px 12px 12px`, gap `4px`.
- 1440px grid: 12 columns, 342px section, 24px gutter, stretch alignment.
- 4-column grid: 68.75px section, 20px gutter, stretch alignment.

## Radius scale

No radius variables or radius scale were found.

Documented component radii:

- `Group 59`: `10px`.
- `Items Card`: `12px` for both variants.

## Elevation & effects

- Card shadow: `drop_shadow`, offset `0 4`, color `#0000000A`, blur `8px`.
- Text shadow: `drop_shadow`, offset `0 1`, color `#00000040`, blur `1px`.
- `Light/Borders/base-with-shadow`:
  - `drop_shadow`, offset `0 0`, color `#E5E7EB`.
  - `drop_shadow`, offset `0 1`, color `#03071233`, blur `2px`.

No motion tokens were found.

## Components

### Group 59

- Size: `328px × 56px`.
- Radius: `10px`.
- Fill: `#4475F2`.
- Stroke: `#4475F2`, `1px`.
- Text: PingFang SC PingFang SC Bold, `16px`.

### Items Card

Two documented variants on Page 1:

**Horizontal variant**

- Size: `163px × 74px`.
- Radius: `12px`.
- Layout: horizontal.
- Padding: `12px 12px 12px 12px`.
- Gap: `12px`.
- Alignment: center / center.
- Sizing: width fill, height fill.
- Fill: `#FFFFFF`.
- Effect: card shadow.
- Text: PingFang SC PingFang SC Medium, `14px`.

**Vertical variant**

- Size: `74.25px × 74px`.
- Radius: `12px`.
- Layout: vertical.
- Padding: `12px 12px 12px 12px`.
- Gap: `4px`.
- Alignment: center / center.
- Sizing: width fill, height fill.
- Fill: `#FFFFFF`.
- Effect: card shadow.
- Text: PingFang SC PingFang SC Medium, `14px`.

### remix-icons

- Icon size: `24px × 24px`.
- Fill: `#FFFFFF`.
- Available styles: line and fill.
- Available icon groups include weather, user, and design.
- Documented examples include:
  - `buildings/home-heart-line`
  - `weather/moon-foggy-line`
  - `weather/moon-foggy-fill`
  - `weather/sun-line`
  - `weather/sun-fill`
  - `user/user-line`
  - `user/user-fill`
  - `design/tools-line`
  - `design/tools-fill`

### Frame

- Component family present in the source.
- No additional Frame specifications were extracted.

## Screen patterns

- The source covers three Figma pages: `Page 1`, `cover`, and `icon`.
- `Page 1` uses white rounded `Items Card` surfaces with card shadows and both horizontal and vertical card layouts.
- A primary blue `Group 59` control is documented at `328px × 56px`.
- The icon page contains 24px remix-icons in line and fill variants across weather, user, and design categories.
- A 12-column desktop grid is documented for a 1440px layout, with 342px sections and 24px gutters.
- A 4-column grid is also documented, with 68.75px sections and 20px gutters.

## Notes for implementers

- Use only the documented component families: `Frame`, `Group 59`, `Items Card`, and `remix-icons`.
- Prefer the documented Open Sans tokens for headline and body hierarchy.
- Use `#162A48` for headline color, `#09121F` for icon color, `#646668` for primary body text, and `#909EB0` for secondary body text.
- Use `#4475F2` for the documented primary blue action treatment.
- Keep cards white with a `12px` radius and the documented card shadow.
- Use 24px remix-icons and select line or fill style according to the source treatment.
- Do not infer a spacing, radius, motion, or component specification where the source does not provide one.
