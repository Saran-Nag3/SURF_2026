---
name: datting-app-shirlou-community
source: Datting App Shirlou (Community)
kind: design-system-context
---

# cleo - Design System

## Overview

Mobile social and dating-app interface captured on Page 1. The system combines a white, black, and light-gray foundation with colorful decorative icon tiles, compact social-feed typography, circular avatars, and rounded mobile surfaces. Primary screens are the Tampilan splash/loading view and Dasboard community/feed views.

## Design language

- Mobile canvas: 428×886px with a 40px frame radius.
- Clean, compact social UI with high-contrast black text on white surfaces.
- Decorative app/icon tiles use 82×82px containers, 20px corner radii, colorful gradients, and dimensional shadows.
- Identity is represented through circular avatar imagery and large black circular initials.
- Display branding uses Syne Bold; interface labels primarily use Roboto, with Ubuntu, Poppins, and SeoulNamsan also present.
- Use rounded image cards and compact metadata for community updates.
- Status-bar treatment includes black `9:41` text and a centered black 134×5px home indicator.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Guidance |
|---|---:|---|
| #000000 | 230 | Primary text, icons, status elements, and high-contrast surfaces |
| #DADADA | 77 | Neutral gradient and dimensional icon shading |
| #FFFFFF | 76 | Primary surface, component fill, borders, and light icon details |
| #8F8F8F | 46 | Secondary text such as navigation labels |
| #FD9DAA | 30 | Accent color |
| #441D39 | 22 | Deep accent color |
| #B9363B | 21 | Red accent |
| #F6F6F6 | 20 | Light mobile-frame background |
| #69ABDF | 19 | Blue accent |
| #00000052 | 11 | Translucent black |
| #C1735C | 11 | Warm accent |
| #EEE4D8 | 11 | Warm neutral |
| #2A5E70 | 6 | Deep blue accent |
| #A5503C | 6 | Warm red accent |
| #C4C4C4 | 6 | Neutral gray |
| #F0EFEB | 6 | Warm light neutral |
| #FFB69F | 6 | Soft warm accent |
| #00000087 | 4 | Strong translucent black |
| #3A3B3D | 4 | Dark neutral detail |
| #AF5D4E | 4 | Warm red accent |
| #D6D6D6 | 4 | Light neutral |
| #DEF4FF | 4 | Pale blue accent |
| #F49037 | 4 | Orange accent |
| #FF7C59 | 4 | Coral accent |
| #FF9988 | 4 | Soft coral accent |
| #FFA242 | 4 | Orange accent |

Additional observed colors and tokens:

- #00000040, #00000066, #0000008C, #494949, #49494999, #5FA4EF, #686B6F, #7A7A7A24, #7A7A7A42, #8F8F8F, #959595, #A5A5A5, #BCBCBC, #C8C8C8, #D4D4D4, #D9D9D9, #E0DFDF, #E7D106, #E8E6EA, #E8E6EA, #F2F6F7, #F3F2F2, #F8F8F8, #FF9988, #FFFFFF.
- Named token `Text / Primary 40`: #00000066.
- Named token `border`: #FFFFFF, associated with #E8E6EA.
- Named token `White`: #FFFFFF.
- Observed gradient: #F2F6F7 at 0%, #DADADA at 47%, #BCBCBC at 100%.
- Observed green gradient token: transparent green #1DC23800 to #22C63D.

## Type scale

- 48px — Syne Bold, heading/display use.
- 40px — Syne Bold, splash title “Shirlou”.
- 14px — Sk-Modernist Regular (400), 125% line height, 0px tracking; named `H6 / 14 Regular`.
- 13px — SeoulNamsan CEB CEB.
- 12px — Poppins Medium.
- 12px — Roboto Black.
- 12px — Roboto Bold.
- 12px — Roboto Medium.
- 12px — Roboto Regular.
- 12px — SeoulNamsan CEB CEB.
- 12px — Ubuntu Regular.
- 11px — Roboto Medium.
- 10px — Roboto Medium.
- 10px — Roboto Regular.
- 8px — Roboto Regular.

## Spacing scale

_None found in source._

## Radius scale

- 40px — mobile screen frames.
- 22px — rounded social/feed detail surfaces.
- 20px — 82×82px icon-tile corners.
- 16px — social-feed image cards.
- 9px — camera-shaped icon detail.
- 6px — smaller icon and media details.
- 4px — compact icon details.
- 1px — small decorative details.

## Elevation & effects

- `appstoreshadow`:
  - Drop shadow: 4px, offset 0 3, color #0000008C.
  - Inner shadow: 4px, offset 0 -2, color #5FA4EF.
  - Drop shadow: 2px, offset 0 1, color #00000040.
- Other observed translucent black shadow colors include #00000040, #00000052, #00000066, #00000087, and #0000008C.
- Decorative icon tiles use dimensional inner shadows, drop shadows, gradients, and occasional blur.
- Avatar stacks use white 2px strokes.

## Components

Only the following component families are present:

### Component 1

- Size: 82×82px.
- Fill: #FFFFFF.
- Text style: Syne Bold, 48px.
- Observed use: black circular initial avatar with white “S” lettering over a decorative icon tile.

### Component 3

- Size: 71×71px.
- Fill: #FFFFFF.
- Text style: Syne Bold, 48px.
- Observed use: black circular initial avatar with white “S” lettering.

## Screen patterns

### Tampilan splash/loading

- 428×886px mobile frame with 40px radius.
- One variant uses #F6F6F6; another uses #FFFFFF.
- Large “Shirlou” wordmark uses Syne Bold at 40px.
- Brand initial is presented in a black circle with white Syne Bold lettering.
- Decorative 82×82px icon tiles appear in the loading composition.
- Bottom home indicator: black, 134×5px, centered.
- Status time: black `9:41`.

### Dasboard community overview

- White 428×886px mobile frame with 40px radius.
- Compact Roboto Medium 12px labels for categories and states.
- Categories include “Let’s be friends”, “Busy”, “Atlets”, “Nothing”, “Single”, and “Modeling”.
- Small numeric metadata uses Roboto Medium at 10px and 11px.
- Community members are represented by circular avatars and small 8px Roboto Regular name labels.
- Status time and right-side status controls occupy the top area.

### Dasboard social feed

- White mobile frame with the same 40px radius.
- Feed groups contain author name, timestamp, circular avatar, rounded image content, caption, and engagement actions.
- Post image cards use a 16px radius and a 368.64×204px observed size.
- Author labels use Roboto Regular 12px.
- Timestamps and captions use Roboto Regular 10px.
- Engagement labels use Roboto Regular 12px with translucent black text.
- Avatar stacks use circular images with white 2px strokes.

## Notes for implementers

- Use only the two extracted component families: Component 1 and Component 3.
- Preserve the 428×886px mobile composition and 40px outer radius for screen-level mockups.
- Prefer the most-used colors first: #000000, #DADADA, #FFFFFF, #8F8F8F, #FD9DAA, #441D39, #B9363B, and #F6F6F6.
- Use Syne Bold for prominent branding and initials; use Roboto for most feed and dashboard UI.
- Keep dashboard labels compact and densely arranged.
- Treat decorative icon artwork as visual content rather than a reusable component family; no additional component family is defined in the source.
- Avatar image assets are source-specific image fills and should remain circular where used in feed or member stacks.
- Do not infer spacing variables, motion behavior, or grid rules; none were extracted.
