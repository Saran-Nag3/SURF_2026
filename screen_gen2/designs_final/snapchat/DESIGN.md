---
name: snapchat-ui-community
source: Snapchat UI (Community), Page 1
kind: design-system-context
---

# snapchat - Design System

## Overview

Mobile Snapchat-style chat UI extracted from a 390×844px screen. The primary pattern is a white chat list with a top title, action controls, repeated conversation rows, avatars or emoji thumbnails, status metadata, and subtle dividers.

No local variables, paint styles, text styles, spacing variables, motion variables, grid styles, or effect styles were found.

## Design language

- Clean, white mobile interface with compact information density.
- Primary text is black; supporting metadata uses muted gray.
- Rounded gray action buttons contain utility controls near the header.
- Conversation rows use large 16px names, compact 11–12px metadata, circular avatars, emoji imagery, and thin light dividers.
- Accent colors appear in small status or decorative indicators: pink-red, coral, yellow, blue, purple, and Snapchat yellow.
- Primary typeface is Roboto. SF Pro Text Medium and Helvetica Neue Medium Extended MediumExt appear in system/status content.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 293 | Primary text, icons, status-bar content |
| `#5D616A` | 176 | Secondary metadata and supporting text |
| `#FFFFFF` | 120 | Main background, avatar backgrounds, icon fills |
| `#F23B57` | 88 | Small pink-red status indicator |
| `#D9D9D9` | 56 | Circular action-button backgrounds |
| `#E1E1E1` | 44 | Neutral UI surface |
| `#EC6F59` | 44 | Coral decorative accent |
| `#F8F8F8` | 44 | Conversation-row dividers |
| `#FAD15C` | 44 | Yellow decorative accent |
| `#3EB5E9` | 42 | Blue accent |
| `#F9F9F9` | 33 | Near-white surface |
| `#AAA7A7` | 27 | Neutral gray |
| `#00000000` | 22 | Transparent fill |
| `#565656` | 22 | Add-friend icon |
| `#9760BB` | 14 | Purple accent |
| `#323232` | 12 | Dark gray |
| `#656C78` | 11 | Muted utility icon gray |
| `#FFFC00` | 8 | Snapchat yellow accent |
| `#CED3D9` | 6 | Light blue-gray |

`#656D78` also appears 11 times and is treated as the near-identical equivalent of `#656C78` for implementation consistency.

## Type scale

| Size | Family and weight | Usage |
|---:|---|---:|
| 18px | Roboto Bold | Screen title; 11 uses |
| 16px | Roboto Regular | Conversation names and primary row text; 132 uses |
| 16px | Roboto SemiBold | Emphasized 16px text; 6 uses |
| 12px | Roboto Regular | Supporting status text; 44 uses |
| 12px | Roboto Bold | Emphasized metadata; 36 uses |
| 12px | Roboto SemiBold | Emphasized metadata; 30 uses |
| 12px | SF Pro Text Medium | System/status-bar text; 22 uses |
| 11px | Roboto Regular | Counts and time labels; 88 uses |
| 11px | Helvetica Neue Medium Extended MediumExt | System/status content; 12 uses |
| 10px | Roboto Light | Small supporting text; 30 uses |

## Spacing scale

_None found in source._

## Radius scale

- `16px` observed on the 390×844px main screen frame.
- No radius variables were found.

## Elevation & effects

- No elevation or effect styles were found.
- The status-bar battery outline uses `#000000` at 44% opacity.
- Conversation rows use a `#F8F8F8` divider with a 1px stroke.

## Components

Allowed component families and observed specifications:

| Component | Size | Appearance |
|---|---:|---|
| `chevron_right` | 16×16px | No fill specified |
| `dehaze` | 16×16px | No fill specified |
| `expand_more` | 16×16px | No fill specified |
| `Polygon 2` | 13×11px | Fill `#FFFFFF` |
| `Chat` | 25.25×28.97px | Fill `#FFFFFF` |
| `people` | 30×30px | No fill specified |
| `Discover` | 27×27px | Fill `#FFFFFF` |
| `Camera` | 25×22.5px | No fill specified |
| `Map` | 17.5×25px | No fill specified |
| `more_horiz` | 24×24px | Inner 16×4px element uses `#656D78` |

Observed composite controls:

- Header utility buttons: 38×38px circular `#D9D9D9` backgrounds.
- Add-friend control: 16×16px and 8×8px icon elements using `#565656`.
- Search control: 17×16px icon using `#656C78`.
- Emoji control: 38×38px circular background with a 41×41px image layer.
- Conversation avatar: 45×45px white ellipse.
- Conversation emoji thumbnails: approximately 48×48px or 49×49px.
- Decorative coral/yellow mark: 9×12.6px, with coral `#EC6F59` and yellow `#FAD15C`.

## Screen patterns

### Main chat list

- Canvas: 390×844px with white fill and 16px radius.
- Status bar occupies 375×20px at the top.
- Header includes the `Chat` title in Roboto Bold 18px and four compact utility controls: friend add, search, settings/more, and emoji.
- Conversation rows span approximately 390.46px and are 55.01px or 57.01px high.
- Each row combines:
  - A small numeric count in Roboto Regular 11px, black.
  - A `just now` label in Roboto Regular 11px, `#5D616A`.
  - A `Delivered` label in Roboto Regular 12px, `#5D616A`.
  - A 45×45px avatar ellipse.
  - A contact name in Roboto Regular 16px, black.
  - A small `#F23B57` indicator.
  - Two muted gray punctuation marks.
  - A small coral/yellow decorative mark.
  - Optional 48–49px emoji thumbnail.
  - A thin `#F8F8F8` divider.

### Repeated screen variant

The extraction contains two nearly identical main chat-list screens, both 390×844px, with the same header, controls, typography, colors, and conversation-row structure.

## Notes for implementers

- Use only the listed colors; do not introduce additional colors.
- Prefer Roboto for application UI text. Use SF Pro Text Medium only for system/status-bar content and Helvetica Neue Medium Extended MediumExt only where that system text is required.
- Preserve the hierarchy: 18px bold title, 16px conversation names, 11px counts/time labels, and 12px delivery status.
- Use 38px circular gray action controls with the specified icon sizes.
- Keep conversation rows compact at approximately 55–57px high and separate them with a 1px `#F8F8F8` divider.
- Treat `#656C78` and source `#656D78` as one muted utility-gray role.
- No spacing, motion, elevation, grid, or reusable style tokens were extracted; avoid assuming undocumented values.
