---
name: lottie
source: App with Lottie Animations (Community)
kind: design-system-context
---

# lottie - Design System

## Overview

- Source: Figma file “App with Lottie Animations (Community)”, Page 1.
- Visual language combines Material 3 dark-theme tokens with a light control surface and saturated accent colors.
- Primary observed screens:
  - **Alert:** 328×430px dark dialog with Lottie/image area, heading, body copy, and full-width action.
  - **menu:** 412×892px dark mobile layout with status bar, top app bar, repeated stacked cards, media, supporting content, chips, and actions.
  - **Controls menu:** 412×892px layout containing date, profile, amount, status, text-field, and cell components.
  - **Typography explorations:** oversized DM Sans headings and supporting text.

## Design language

- Use Roboto for the application UI.
- Use Material 3 naming and hierarchy for dark surfaces, primary actions, labels, titles, body text, and elevation.
- Dark surfaces use `#1D1B1E`; primary emphasis uses `#E9B2FF` and `#7100A6`.
- Light control surfaces use `#FFFFFF`, `#FCFCFC`, and `#F3F4F7`.
- Cards use rounded corners and subtle layered drop shadows.
- Mobile layouts are fixed around 412px wide with 16px content insets commonly used inside cards and bars.
- Decorative imagery and Lottie/image areas are prominent in cards and alerts.

## Color palette

Ranked by raw usage where counts are available. Near-identical `#E9B2FE` is consolidated into the more-used `#E9B2FF`.

| Color | Usage | Semantic usage |
|---|---:|---|
| `#E7E0E4` | 77 | Dark on-surface |
| `#F0DCF4` | 71 | Secondary container |
| `#1D1B1E` | 49 | Dark surface and alert background |
| `#FFFFFF` | 36 | Light surfaces and white content |
| `#FCFCFC` | 29 | Light surface |
| `#1F1F1F` | 25 | Menu background |
| `#E9B2FF` | 19 | Dark primary |
| `#8E918F80` | 17 | Menu border |
| `#FFFFFF4D` | 17 | Translucent white |
| `#231728` | 15 | On-secondary-container |
| `#E2E2E2` | 11 | Neutral light tone |
| `#000000` | 7 | Black text in typography explorations |
| `#0062FF` | 6 | Blue accent |
| `#34A853` | 6 | Green accent |
| `#4285F4` | 6 | Blue accent |
| `#E94235` | 6 | Red accent |
| `#FBBC04` | 6 | Yellow accent |
| `#182E66` | 5 | Dark blue |
| `#274E50` | 4 | Dark teal |
| `#447F6A` | 4 | Green teal |
| `#4F0076` | 4 | On-primary |
| `#C4C4C4` | 4 | Control/status fill |
| `#636363` | 3 | Gray |
| `#7100A629` | 3 | Translucent primary-container |

Additional semantic colors:

- `#7D747E`: light outline.
- `#CEC3CE`: dark on-surface-variant.
- `#21242C`: light primary text.
- `#999EA9`: light secondary text and primary element.
- `#22242A`: neutral 90.
- `#7B7E86`: neutral 50.
- `#242424`: gray 90.
- `#3A83F1`: light accent and accent background.
- `#FF3B30`: light error.
- `#E9B2FF14`: dark surface2 overlay.
- `#E9B2FF1C`: dark surface3 overlay.
- `#392C3E`: dark on-secondary.
- `#504255`: dark secondary-container.
- `#515764`: light secondary background.
- `#F3F4F7`: light additional background.
- `#7100A6`: dark primary-container.
- `#191C18`: primary text token.
- `#FFFFFFDE`: high-emphasis white.
- `#00000026`: low-opacity black shadow.
- `#0000004D`: stronger black shadow.

## Type scale

All UI typography uses Roboto unless otherwise noted.

| Style | Font | Size / line height | Tracking |
|---|---|---:|---:|
| `Default/Large_Title_1` | Roboto Bold 700 | 32px / 40px | 0px |
| `M3/headline/small` | Roboto Regular 400 | 24px / 32px | 0px |
| `Default/Title_1` | Roboto Bold 700 | 22px / 28px | 0px |
| `M3/title/large` | Roboto Regular 400 | 22px / 28px | 0px |
| `Headline 6` | Roboto Medium 500 | 20px / 24px | 0.15px |
| `M3/title/medium` | Roboto Medium 500 | 16px / 24px | 0.1px |
| `Default/Body_1` | Roboto Medium 500 | 16px / 24px | 0.5px |
| `Default/Body_2` | Roboto Regular 400 | 16px / 24px | 0.25px |
| `M3/body/large` | Roboto Regular 400 | 16px / 24px | 0.5px |
| `M3/label/large` | Roboto Medium 500 | 14px / 20px | 0.1px |
| `M3/body/medium` | Roboto Regular 400 | 14px / 20px | 0.25px |
| `Default/Subhead_2` | Roboto Medium 500 | 14px / 16px | 0px |
| `M3/label/medium` | Roboto Medium 500 | 12px / 16px | 0.5px |
| `Default/Caption_1` | Roboto Medium 500 | 12px / 16px | 0.4px |
| `M3/labelSmall` | Roboto Medium 500 | 11px / 16px | 0.5px |

Raw typography also includes Roboto Bold 14px, Roboto Black 16px, Roboto Black 14px, and DM Sans Bold 101.14px. The typography exploration includes DM Sans Medium 67.43px.

## Spacing scale

No local spacing variables were found. Observed layout spacing values:

- 0px padding and gap in multiple structural frames.
- 2px, 4px, 8px, 10px, 12px, 13px, 16px, 18px, 20px, 24px, 32px, 40px, 52px, 64px, 72px, 76px, 80px, 95px, 100px, 152px, 267px, 278px, 296px, 328px, 360px, 412px, 430px, 480px, 587px, and 892px occur as observed dimensions, padding, or gaps.
- Common mobile insets: 16px.
- Alert outer padding: 32px top/bottom and 16px left/right.
- Alert content gap: 20px; text group gap: 10px.
- Card header padding: 13px vertical and 16px horizontal.
- Card content gap: 16px.
- Card action padding: 16px horizontal; action gap: 8px.
- Top status bar padding: 10px vertical and 24px horizontal.

## Radius scale

No local radius variables were found. Observed radii:

- 8px: buttons, chips, and the alert action background.
- 12px: stacked cards.
- 16px: alert and control container.
- 18px: menu frame.
- 100px: pill-shaped card action.
- 16px / 16px / 0px / 0px: date-block corner treatment.
- 8px: home indicator.

## Elevation & effects

- `M3/Elevation Dark/1`
  - Drop shadow: 2px, offset `0 1`, color `#0000004D`
  - Drop shadow: 3px, offset `0 1`, color `#00000026`
- `M3/Elevation Dark/2`
  - Drop shadow: 2px, offset `0 1`, color `#0000004D`
  - Drop shadow: 6px, offset `0 2`, color `#00000026`
- `M3/Elevation Dark/3`
  - Drop shadow: 3px, offset `0 1`, color `#0000004D`
  - Drop shadow: 8px, offset `0 4`, color `#00000026`
- `M3/Elevation Light/1`
  - Drop shadow: 3px, offset `0 1`, color `#00000026`
  - Drop shadow: 2px, offset `0 1`, color `#0000004D`
- The repeated dark stacked card uses `M3/Elevation Dark/2`.
- The home indicator uses a drop shadow with 13px offset `0 4`; its source color is not included because it is outside the allowed palette.

## Components

- Component family: `ΩElements`.
- `ΩElements/2. Text tiles/a. Overline+Headline 6+Avatar`
  - Size: 412×70px.
  - Typography: `M3/labelSmall` and `Headline 6`.
- Alert dialog:
  - Size: 328×430px.
  - Fill: `#1D1B1E`.
  - Radius: 16px.
  - Outer padding: 32px vertical, 16px horizontal.
  - Image/icon area: 140×140px.
  - Header uses `Default/Title_1` and `#FFFFFF`.
  - Body uses `M3/body/medium` and dark on-surface-variant.
  - Action is 296×48px with 8px radius and dark primary fill.
- Dark stacked card:
  - Size: 360×480px.
  - Surface: `#1D1B1E`.
  - Radius: 12px.
  - Elevation: `M3/Elevation Dark/2`.
  - Header: 360×72px with 13px vertical and 16px horizontal padding.
  - Monogram: 40×40px.
  - Media: 360×152px.
  - Headline area: 360×100px with 16px padding.
  - Supporting chip: 121×32px, 8px radius, 1px outline.
  - Action: 122×40px, 100px radius, 24px horizontal padding.
- Dark top app bar:
  - Size: 412×64px.
  - Fill: dark surface.
  - Leading icon: 24×24px.
  - Headline uses `M3/title/large`.
  - Trailing icon: 36×36px.
- Menu shell:
  - Size: 412×892px.
  - Fill: `#1F1F1F`.
  - Radius: 18px.
  - Stroke: `#8E918F80`, 8px.
- Date block:
  - Size: 359×52px.
  - Radius treatment: 16px top corners, 0px bottom corners.
  - Date text uses `Default/Body_2`.
- Label block:
  - Size: 360×96px.
  - Avatar area: 80×80px with a 76×76px image.
- Text block:
  - Size: 360×100px.
  - Amount uses Roboto Bold, 24px, with `#E9B2FF`.
  - Name uses `Default/Body_1`.
- Status block:
  - Size: 360×72px.
  - Status fill: `#C4C4C4`.
  - Status label uses `Default/Subhead_2`.
- Text fields:
  - Content width: 328px.
  - Field height: 76px.
  - Separator height: 4px.

## Screen patterns

- **Alert pattern:** Center a dark rounded dialog. Stack a 140×140px visual, heading/body text, and a full-width primary action. Use 20px between visual and text group and 10px between heading and body.
- **Dark stacked-card pattern:** Place repeated 360×480px cards inside a 412px-wide dark shell. Organize each card as header, 152px media area, headline, supporting chip, supporting text, and bottom action row.
- **Mobile chrome pattern:** Use a 53px status bar, a 64px top app bar, and a 28px bottom navigation/home-indicator region.
- **Controls pattern:** Stack date, avatar, amount/name, status, cells, and text fields inside a 360px-wide content area.
- **Typography exploration pattern:** Use oversized black DM Sans headings on an otherwise unspecified background; the source includes 101.14px Bold and 67.43px Medium examples.

## Notes for implementers

- No local variable collections, spacing variables, radius variables, motion tokens, or grid styles were found.
- Use only the named semantic tokens and concrete values documented here.
- Preserve the distinction between dark Material 3 surfaces and light control surfaces.
- Do not infer unavailable image assets from their hashes; treat them as source imagery/Lottie content.
- `M3/sys/dark/outline` is reported as absent in the token list, although dark card instances reference it for a 1px outline.
- The source contains repeated instances of the same dark stacked card; implement it as a reusable pattern rather than separate bespoke layouts.
