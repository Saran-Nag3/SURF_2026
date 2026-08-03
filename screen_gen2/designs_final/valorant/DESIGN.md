---
name: valorant-ui-design-community
source: VALORANT UI DESIGN (Community) — Page 1
kind: design-system-context
---

# valorant - Design System

## Overview

A VALORANT-themed game landing page for desktop layout at 1280×832px. The visual direction combines a dark interface, high-contrast white typography, red action accents, oversized display text, translucent panels, blurred red glows, and game-related navigation.

## Design language

- Dark, cinematic gaming aesthetic.
- Use white typography against dark surfaces for strong contrast.
- Use deep red as the primary visual accent.
- Use large, condensed-looking display typography for prominent calls to action and branding.
- Use translucent gray surfaces with background blur for layered glass-like panels.
- Use blurred red ellipses as ambient background lighting.
- Use rounded rectangles for cards and buttons, with especially prominent 45px and 50px corners.
- Navigation includes menu and search iconography.
- Brand presentation uses repeated, vertically arranged “VALORANT” typography with varied white opacity treatments in the source.

## Color palette

Ranked by recorded usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 8 | Primary text, icons, and high-contrast foregrounds |
| `#000000` | 4 | Vector strokes and dark icon details |
| `#8B1818` | 3 | Blurred red ambient glow |
| `#D9D9D940` | 3 | Translucent gray pills or decorative surfaces |

Additional source colors are present in extracted layers but are excluded here because they are outside the permitted palette.

## Type scale

- **119.9px — Inter SemiBold**: oversized VALORANT brand heading; 5 uses.
- **63.28px — Barlow Bold**: primary “DOWNLOAD NOW” heading.
- **28.81px — Barlow Thin**: supporting “Play with your friends” heading.
- **24px — Barlow Bold**: “PLAY NOW” button label.
- **19.81px — Barlow Bold**: “Theme :” label.
- **18.99px — Barlow ExtraLight**: supporting descriptive copy.
- **16.4px — Barlow ThinItalic**: category labels including “Action,” “Online,” and “Multiplayer”; 3 uses.
- **10px — Be Vietnam ThinItalic**: secondary descriptive paragraph.

## Spacing scale

_None found in source._

## Radius scale

- `0px`: group geometry.
- `19.19px`: decorative rounded rectangle.
- `21px`: decorative rounded rectangle height with `50px` radius.
- `30px`: primary action button.
- `45px`: main card and page frame corners.
- `45.7px`: decorative rounded rectangle.
- `50px`: page frame and decorative rounded rectangles.

## Elevation & effects

- Layer blur: `500px` on one red ellipse.
- Layer blur: `600px` on two red ellipses.
- Background blur: `400px` on a translucent content panel.
- Drop shadow: `92.63px` blur with `0` horizontal offset and `14.56px` vertical offset on an image layer.
- Drop shadow: `70px` blur with `0` horizontal offset and `11px` vertical offset on an image layer.
- Drop shadow: `29.2px` blur with `0` horizontal offset and `8px` vertical offset on the primary action button.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

- **MacBook Air - 1**: A 1280×832px desktop landing screen with menu and search controls, a large rounded visual area, oversized VALORANT branding, blurred red background lighting, image-based artwork, translucent content panel, theme/category labels, and primary “DOWNLOAD NOW” and “PLAY NOW” actions.
- **Valorant description screen**: A text-focused screen containing a short descriptive paragraph about VALORANT, set in small translucent white italic typography.
- **Search icon screen**: A standalone 24×24px search icon treatment using white and black vector details.

## Notes for implementers

- Prioritize the recorded palette: white for foreground content, black for vector details, deep red for ambient glow, and translucent gray for secondary surfaces.
- Preserve the contrast between oversized display type and much smaller supporting copy.
- Use `#D9D9D940` for translucent decorative pills or surfaces where the source calls for that treatment.
- Use rounded corners consistently, especially `45px` for large containers and `30px` for the primary action button.
- Recreate the atmospheric background with red ellipse blurs and layered image drop shadows.
- Keep primary actions explicit and uppercase: “DOWNLOAD NOW” and “PLAY NOW”.
- No reusable component families, spacing tokens, radius tokens, motion tokens, or local styles were defined in the source.
