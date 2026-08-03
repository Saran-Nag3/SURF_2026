---
name: roblox-mobile-app-old-community
source: Roblox Mobile App (OLD) (Community)
kind: design-system-context
---

# roblox - Design System

## Overview

Dark Roblox mobile app design for a 393×852px iPhone-oriented interface. Screens include Home, Connect, Discovery, More, and Avatar, plus a 1920×1080px cover presentation. The interface uses dark surfaces, white Gotham typography, compact game and social listings, rounded image tiles, and a persistent bottom navigation area.

## Design language

- Dark-first mobile UI with primary surface `#232527`.
- High-contrast white headings and navigation icons.
- Gotham is the dominant display and interface typeface.
- SF Pro is used for iOS status-bar content.
- Headings use heavy Gotham Black at 32px.
- Content is organized into vertical sections, game cards, social rows, and a tiled More menu.
- Image-driven content uses rounded-square tiles, generally with 7px or 10px corner radii.
- Secondary metadata uses muted gray text.
- Green `#00B06F` is used for online/status indicators.
- Orange and brown tones appear in content or artwork accents rather than as dominant UI surfaces.

## Color palette

Ranked by extracted usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 94 | Primary text, icons, navigation, light surfaces |
| `#BDBEBF` | 63 | Secondary metadata and subdued labels |
| `#FFAC33` | 16 | Accent/content color |
| `#9B9C9D` | 14 | Muted icon detail and secondary gray |
| `#232527` | 12 | Primary app background |
| `#393B3D` | 12 | More-menu tile surface |
| `#BDBEBE` | 10 | Muted menu labels |
| `#C4C5C5` | 10 | Muted icon fills |
| `#FFCC4D` | 8 | Accent/content color |
| `#00B06F` | 6 | Online/status indicator |
| `#2E3032` | 6 | Dark content surface |
| `#A3A2A5` | 6 | Neutral avatar or placeholder fill |
| `#000000` | 4 | Black artwork, cover text/icon detail |
| `#191B1D` | 4 | Bottom navigation surface |
| `#8A4633` | 4 | Brown content accent |
| `#9AAAB4` | 4 | Blue-gray content accent |
| `#BF6952` | 4 | Warm content accent |
| `#CCD6DD` | 4 | Light blue-gray content accent |
| `#D99E82` | 4 | Peach content accent |
| `#FFFFFFB2` | 4 | Translucent white icon detail |
| `#656667` | 3 | Neutral border, placeholder, or progress detail |

Named color tokens:

- `Grays/White`: `#FFFFFF`
- `Labels/Primary - Dark`: `#FFFFFF`

## Type scale

No local text styles were found. Extracted text styles:

| Size | Typeface | Usage count |
|---:|---|---:|
| 65px | Gotham Black Black | Cover title |
| 32px | Gotham Black Black | Screen headings |
| 25px | SF Pro Bold | Cover attribution |
| 20px | Gotham Bold | Section headings and prominent labels; 9 uses |
| 17px | SF Pro Semibold | iOS status-bar time; 5 uses |
| 16px | Gotham Bold | Card and interface labels; 30 uses |
| 15px | Gotham Bold | Avatar/category labels; 13 uses |
| 12px | Gotham Bold | Compact labels and metadata; 33 uses |
| 11.5px | Gotham Bold | Compact game metadata; 6 uses |
| 11px | Gotham Bold | Compact friend-count metadata; 4 uses |

Hierarchy:

- Display heading: Gotham Black Black, 32px, white.
- Cover title: Gotham Black Black, 65px, white.
- Section heading: Gotham Bold, 20px, white.
- Card title: Gotham Bold, 16px, white.
- Avatar/category label: Gotham Bold, 15px.
- Metadata label: Gotham Bold, 12px.
- Small metadata: Gotham Bold, 11px or 11.5px, typically `#BDBEBF`.
- iOS status-bar time: SF Pro Semibold, 17px.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed corner radii:

- 4px
- 6px
- 7px
- 9px
- 10px
- 15px
- 35px
- 37px
- 38px
- 42px
- 48px
- 100px
- 103px

Observed usage includes 7px rounded game/menu tiles, 10px avatar surfaces, 48px screen clipping, and pill-like elements using 35px, 37px, 38px, 42px, or 100px radii.

## Elevation & effects

- No local effect styles were found.
- Linear gradient overlays are present in the cover and avatar artwork.
- No elevation, shadow, blur, or motion tokens were extracted.
- Screens use clipped rounded containers with a 48px radius.

## Components

No component families or component geometry were found in the source.

Recurring UI structures visible in the screens:

- iOS status bar: 393×54px.
- Bottom navigation region: 393×78px with `#191B1D` surface and a 139×5px rounded home indicator.
- More-menu tile: 169×169px with 7px radius and `#393B3D` surface.
- Home game artwork tile: approximately 109×109px with 7px radius.
- Discovery artwork tile: approximately 106×106px with 7px radius.
- Avatar/content tile: approximately 115×115px with 10px radius.
- Circular avatar or status elements use large radii around 100px.

## Screen patterns

- **Cover**: 1920×1080 presentation frame with dark `#232527` background, multiple image panels, a large white cover title, a large footer logo, and a dark linear overlay.
- **Home**: Dark home feed with a 32px “Home” heading, friend content, recommended games, square game artwork, 16px game titles, and compact gray friend-count metadata. Includes persistent bottom navigation.
- **Connect**: People-search screen with a 32px “Connect” heading, search field, user/friend rows, avatars, online indicators in `#00B06F`, and social metadata.
- **Discovery**: Discovery feed with a 32px “Discover” heading and repeated game/content rows. Each item combines approximately 106px artwork, a 16px title, and 12px engagement metrics such as percentages and player counts.
- **More**: 2-column grid of 169px square tiles for Marketplace, Premium, Profile, Friends, Groups, Inventory, Messages, and Create. Tiles use `#393B3D`, 7px radius, muted labels, and centered gray iconography. The Friends tile includes a notification badge.
- **Avatar**: Image-led avatar customization screen with a large artwork area, dark clipped content region, category navigation, item tiles, and muted item-count metadata.

## Notes for implementers

- Build for a 393×852px mobile viewport and preserve the rounded 48px clipped screen treatment.
- Use `#232527` as the primary screen background and `#191B1D` for the bottom navigation surface.
- Use white for primary headings, labels, and icons; use `#BDBEBF` or `#BDBEBE` for secondary metadata.
- Use Gotham Bold for nearly all product UI text and Gotham Black Black for major 32px headings.
- Use SF Pro Semibold, 17px, for the status-bar time.
- Keep game and menu imagery square with small rounded corners, primarily 7px.
- Keep the bottom navigation at 78px high and include the 139×5px rounded home indicator.
- Use `#00B06F` only for online/status indicators observed in the extracted UI.
- No component library, spacing tokens, radius tokens, effect styles, or motion tokens were provided; use the observed geometry only where a matching pattern is required.
