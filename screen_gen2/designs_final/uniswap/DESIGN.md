---
name: uniswap-app-community
source: Uniswap App (Community)
kind: design-system-context
---

# uniswap - Design System

## Overview

Mobile-first Uniswap wallet experience captured at 375x812px. The source includes onboarding, home, and swap screens for the `iPhone X, 11 Pro` component family.

Core UI characteristics:
- White elevated cards over a soft gradient background.
- Pink primary actions and accents.
- Dark neutral typography with muted gray secondary information.
- Rounded cards, pill controls, token selectors, and bottom-sheet interaction patterns.
- Token balances, portfolio values, swap inputs, and wallet actions are the dominant content patterns.

## Design language

- Use a clean, iOS-oriented interface with generous rounded surfaces.
- Primary actions use saturated pink, especially `#E8006F` and `#FF007A`.
- Use dark text rather than pure black for most application content: `#181818`.
- Use muted grays for balances, percentages, and supporting metadata.
- Place major content in white cards with soft layered elevation.
- Use pink-tinted pill backgrounds for selected controls and wallet identity elements.
- Use thin gray dividers and borders to separate content without heavy visual weight.
- Decorative gradients and image fills appear in onboarding and portfolio areas.
- The interface is designed around a 375px-wide mobile viewport.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 140 | Primary black, system text, keyboard text |
| `#181818` | 117 | Primary application text and headings |
| `#A9AAB2` | 74 | Secondary metadata, balances, and percentage labels; consolidate the near-identical `#A9ABB2` usage here |
| `#FFFFFF` | 64 | Cards, surfaces, component fills, and status-bar areas |
| `#DADADA` | 59 | Neutral UI detail |
| `#E5E5E5` | 43 | Dividers, borders, handles, and control outlines |
| `#FF007A` | 41 | Primary pink accent, links, icons, and selected labels |
| `#FCFCFE` | 30 | Numeric keyboard key backgrounds |
| `#E8006F` | 21 | Primary action fill and stronger pink icon/accent color |
| `#919299` | 18 | Tertiary labels such as chart ranges |
| `#FF007A1A` | 16 | Translucent pink control backgrounds |
| `#F4F5F7` | 8 | Swap input surfaces |
| `#C4C4C4` | 5 | Neutral token placeholder |
| `#979797` | 4 | Keyboard key stroke and home-indicator stroke |

Named color tokens:
- `Label Color / Light / Primary`: `#000000`
- `SystemOrange / Light`: `#FF9500`

## Type scale

Fonts are SF Pro families. Use Display styles for headings and prominent values; use Text styles for labels, metadata, and navigation.

| Size | Family and weight | Usage count |
|---:|---|---:|
| 28px | SF Pro Display Semibold | 3 |
| 25px | SF Pro Display Regular | 30 |
| 24px | SF Pro Display Medium | 4 |
| 20px | SF Pro Display Medium | 29 |
| 20px | SF Pro Display Semibold | 11 |
| 18px | SF Pro Display Medium | 19 |
| 18px | SF Pro Display Semibold | 3 |
| 16px | SF Pro Text Medium | 55 |
| 15px | SF Pro Text Medium | 24 |
| 14px | SF Pro Text Medium | 34 |
| 13px | SF Pro Text Medium | 19 |
| 10px | SF Pro Text Bold | 27 |

Recommended hierarchy:
- `28px SF Pro Display Semibold`: large numeric input values and major headings.
- `25px SF Pro Display Regular`: numeric keyboard keys.
- `20px SF Pro Display Medium` or `Semibold`: card headings, section titles, and primary actions.
- `18px SF Pro Display Medium` or `Semibold`: action labels and wallet controls.
- `16px SF Pro Text Medium`: navigation, token names, and standard labels.
- `15px SF Pro Text Medium`: portfolio and wallet value figures.
- `14px SF Pro Text Medium`: token quantities and balance metadata.
- `13px SF Pro Text Medium`: percentage metadata.
- `10px SF Pro Text Bold`: compact keyboard labels.

## Spacing scale

_No spacing variables found in source._

Observed component dimensions that inform layout:
- Viewport and device width: `375px`.
- Onboarding and application screen height: `812px`.
- Main cards: `347px` wide.
- Swap sheet content width: `325px`.
- Action bar: `347x64px`.
- Primary action button: `325x64px`.
- Token input surfaces: `325x98px`.
- Common icon frames: `28x28px`, `24x24px`, and `20x20px`.
- Avatar and token image sizes: `40x40px` and `24x24px`.

## Radius scale

Observed radii:
- `5px`: numeric keyboard keys.
- `8px`: selected chart range control.
- `12px`: swap control with arrow icon.
- `20px`: cards, primary buttons, and swap input surfaces.
- `32px`: iOS time/status-bar group.
- `100px`: pills, circular controls, token selectors, and handles.

## Elevation & effects

Observed elevation uses layered drop shadows on cards, buttons, avatars, and token images:
- Card shadow layers include offsets of `0 0`, `0 4`, `0 16`, and `0 24`.
- Card shadow blur values include `1px`, `8px`, `24px`, and `32px`.
- Primary onboarding and swap buttons use the same four-layer pattern with stronger depth.
- Avatar and token images use shadow layers with offsets `0 1`, `0 3`, and `0 4`.
- Token selector controls use shadows with offsets `0 1` and `0 4`.
- Numeric keyboard keys use a `0 1` shadow.
- A background blur of `108.73px` is used in the numeric keyboard area.
- Onboarding gradient imagery is shown at `50%` opacity.

## Components

### Device chrome

- Component family: `iPhone X, 11 Pro`.
- Base size: `375x44px`.
- Fill: `#FFFFFF`.
- Time display uses `9:41` in `28.43x11.09px`.
- The left status group is `54x21px` with a `32px` radius.
- The right status group is approximately `66.66x11.34px`.

### Cards

- White surface: `#FFFFFF`.
- Common widths: `347px` for home content and `325px` inside the swap sheet.
- Common heights: `348px`, `290px`, and `98px`.
- Standard radius: `20px`.
- Use layered soft elevation.
- Portfolio cards may contain a `347x146px` or `347x148px` image area.

### Primary action

- Onboarding button: `326x64px`.
- Swap sheet button: `325x64px`.
- Radius: `20px`.
- Fill: `#E8006F`.
- Label: `20px SF Pro Display Semibold`.
- Primary button text uses `#FFFFFF` where specified by the source.

### Action bar

- Size: `347x64px`.
- Surface: `#FFFFFF`.
- Radius: `20px`.
- Contains Buy, Send, and Swap actions.
- Uses `1.5x64px` vertical dividers in `#E5E5E5`.
- Action icons use `28x28px` frames.
- Pink action icon colors are `#FF007A`.

### Wallet identity control

- Size: `144x40px`.
- Pill radius: `100px`.
- Background: `#FF007A1A`.
- Border: `#E5E5E5`.
- Contains a `24x24px` avatar, chevron, and `18px SF Pro Display Medium` wallet name.
- Wallet name is shown in `#E8006F`.

### Token list

- Card width: `347px`.
- Section heading: `20px SF Pro Display Medium`.
- Token names: `16px SF Pro Text Medium`.
- Values: `15px SF Pro Text Medium`.
- Quantities: `14px SF Pro Text Medium` in `#A9AAB2`.
- Performance percentages: `13px SF Pro Text Medium` in `#A9AAB2`.
- Token images are `40x40px` circles.
- Separators use `#E5E5E5`.

### Swap token input

- Size: `325x98px`.
- Surface: `#F4F5F7`.
- Border: `#E5E5E5`.
- Radius: `20px`.
- Token selector: `113x40px`, white fill, `100px` radius, and `1px` `#E5E5E5` border.
- Token selector labels use `18px SF Pro Display Medium`.
- Main numeric value uses `28px SF Pro Display Semibold`.
- Supporting price and balance use `14px SF Pro Text Medium` in `#A9AAB2`.
- Swap direction control is `32x32px` with a `12px` radius.

### Search control

- Outer control: `40x40px`.
- Outer radius: `100px`.
- Background: `#FF007A1A`.
- Border: `#E5E5E5`.
- Search frame: `28x28px`.
- Search icon uses `#E8006F`.

### Numeric keyboard

- Keyboard frame: `375x291px`.
- Home indicator area: `375x34px`.
- Home indicator: `134x5px`, `100px` radius.
- Key widths are `117px`.
- Key heights are `46px` or `47px`.
- Key radius: `5px`.
- Numeric labels use `25px SF Pro Display Regular`.
- Secondary key labels use `10px SF Pro Text Bold`.

## Screen patterns

### Onboarding

- Screen size: `375x812px`.
- White base surface with decorative gradient imagery.
- Main heading: “Buy, swap, and send crypto tokens.”
- Heading style: `28px SF Pro Display Semibold`.
- Primary onboarding action uses a `326x64px` pink button with `20px` radius.
- Secondary wallet-import action is pink text using `20px SF Pro Display Semibold`.
- Includes the `iPhone X, 11 Pro` status-bar component.

### Home

- Screen size: `375x812px`.
- Header displays “Uniswap” and a dollar balance.
- Main content uses stacked white cards over a soft gradient background.
- Token list card contains “My Tokens”, token names, balances, quantities, and performance values.
- Portfolio card contains a chart image, portfolio value, performance value, and time-range controls.
- A lower action bar provides Buy, Send, and Swap.
- A wallet identity pill and search control appear as floating or header-level controls.

### Swap

- Uses the same mobile header, token list, portfolio, action bar, and wallet identity patterns as Home.
- Opens a bottom sheet over the underlying screen.
- Bottom sheet includes a full-width white card, a `40x6px` handle, “Swap Tokens” heading, settings icon, two token input surfaces, a direction control, and a pink Swap button.
- A numeric keyboard appears below the sheet during numeric entry.
- Swap inputs use DAI and ETH selector examples with large numeric values and muted balance metadata.

## Notes for implementers

- Preserve the 375px mobile composition and prioritize vertical stacking.
- Use `#181818` for most application text; reserve `#000000` for system and keyboard text.
- Use `#A9AAB2` for secondary values and metadata; treat `#A9ABB2` as the same muted-gray role.
- Use `#E8006F` for filled primary actions and stronger accent icons; use `#FF007A` for links, icons, and selected labels.
- Keep cards and major controls at a `20px` radius unless a more specific observed radius applies.
- Use `#E5E5E5` for dividers and thin borders.
- Keep token and avatar imagery circular at the observed `40px` or `24px` sizes.
- Apply layered soft shadows to cards and floating image elements rather than a single heavy shadow.
- Bottom sheets should overlay the existing screen and retain the underlying home structure.
- Use SF Pro Display for headings and prominent numeric values; use SF Pro Text for labels and metadata.
- Do not introduce additional colors, type sizes, component families, or design tokens beyond those documented here.
