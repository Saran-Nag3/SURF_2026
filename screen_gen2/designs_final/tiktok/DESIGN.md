---
name: tiktok-ui-screens-community
source: TikTok UI Screens (Community)
kind: design-system-context
---

# tiktok - Design System

## Overview

- Source: Figma file “TikTok UI Screens (Community)”.
- Source page: All pages (3): TikTok, ---, High-Quality Resources for UI Designers.
- Primary extracted UI viewport: 414 × 896px iPhone-style screens.
- No local variable collections were found.
- No component sets or component geometry were extracted.

## Design language

- Light, white-dominant interface with dark charcoal primary text.
- Settings and profile screens use vertically stacked rows with muted gray secondary labels and icons.
- Navigation uses compact labels and stroke icons.
- Typography combines Proxima Nova for product UI, Public Sans for prominent display treatments, Crimson Text for editorial-style headings, and SF Pro Text for system status content.
- Accent colors include light blue, pink, yellow, green, orange, and button red.
- Use subtle drop shadows for action buttons, floating bubbles, and screen bars.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role / token |
|---|---:|---|
| `#FFFFFF` | 209 | White; primary screen and surface background |
| `#455154` | 98 | Unnamed raw color |
| `#86878B` | 85 | Muted labels, secondary icons, navigation items |
| `#FFFFFF4D` | 32 | White with transparency |
| `#060606` | 30 | Dark system UI elements |
| `#3E5155` | 28 | Unnamed raw color |
| `#ABABAB` | 28 | Unnamed raw color |
| `#C4C4C4` | 26 | Neutral placeholder and avatar color |
| `#000000` | 17 | Black text and UI elements |
| `#4E4F57` | 12 | Unnamed raw color |
| `#8A8B8F` | 10 | Muted navigation icon and label color |
| `#F5F5F4` | 10 | Light neutral surface |
| `#0000000D` | 8 | Black with transparency |
| `#171717` | 7 | Dark system text |
| `#65D2E9` | 7 | Tik Tok Light Blue |
| `#E6436D` | 6 | Tik Tok Pink |
| `#E8E8E7` | 6 | Light neutral |
| `#FBFBFB` | 6 | Near-white surface |
| `#FFFFFF33` | 6 | White with transparency |
| `#E9E9E9` | 5 | Light neutral |
| `#FFFFFF99` | 4 | White with transparency |

Named color tokens:

- Tik Tok Dark: `#161722`
- Tik Tok Light Blue: `#65D2E9`
- Tik Tok Pink: `#E6436D`
- Tik Tok Button: `#EA4359`
- Gray 90: `#000000`
- Gray 70: `#4D4D4D`
- Gray 50: `#808080`
- White: `#FFFFFF`
- Yellow: `#FFA800`
- Green: `#67CE00`
- Orange: `#FF5E00`

Most-used named styles:

- Tik Tok Dark: 79 uses
- White: 12 uses
- Tik Tok Light Blue: 10 uses
- Gray 70: 9 uses
- Tik Tok Pink: 9 uses
- Tik Tok Button: 8 uses
- Gray 50: 5 uses
- Yellow: 3 uses
- Green: 2 uses
- Orange: 1 use

## Type scale

Defined typography tokens:

| Font | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---:|---|
| Public Sans | ExtraBold (800) | 48px | 56px | -0.48px | Display |
| Crimson Text | Regular (400) | 28px | 32px | -0.28px | Large editorial heading |
| Crimson Text | Regular (400) | 22px | 28px | -0.22px | Editorial heading |
| Public Sans | ExtraBold (800) | 12px | 16px | -0.12px | Compact emphasis |
| Public Sans | Regular (400) | 14px | 20px | -0.14px | Body text |
| Proxima Nova | Regular (400) | 10px | auto | 0.15px | Button 10 |

Raw typography also uses:

- Proxima Nova Regular: 15px, 13px, 14px, 11px
- Proxima Nova Semibold: 18px, 17px, 16px, 15px, 13px, 10px
- Proxima Nova Bold: 17px, 15px, 10px
- SF Pro Text Semibold: 15px
- Public Sans Regular: 18px
- Public Sans ExtraBold: 24px

Most-used raw text styles:

- Proxima Nova Regular, 15px: 49 uses
- Proxima Nova Semibold, 13px: 24 uses
- Proxima Nova Regular, 13px: 20 uses
- SF Pro Text Semibold, 15px: 14 uses
- Proxima Nova Regular, 11px: 12 uses
- Public Sans Regular, 18px: 10 uses
- Proxima Nova Bold, 17px: 9 uses
- Proxima Nova Semibold, 18px: 8 uses
- Public Sans ExtraBold, 24px: 8 uses

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- Action Button Shadow: drop shadow, offset `0 0.33`, color `#0000001A`; 9 uses.
- Text Drop: drop shadow, offset `1 1`, color `#0000004D`; 7 uses.
- A floating “Tap to create” bubble uses a drop shadow with offset `4` and `#0000001A`.
- No motion tokens were found.
- No local grid styles were found.

## Components

_None found in source._

## Screen patterns

- **TikTok Find Friends** — 414 × 896px mobile screen. White top bar, stacked 76px social-action rows, compact search field, and iPhone status/home bars.
- **TikTok Privacy and settings** — 414 × 896px mobile screen. Grouped settings sections including Support, General, and Account; rows are 52px high with section labels and trailing navigation/icon affordances.
- **TikTok Edit Profile** — 414 × 896px mobile screen. Top bar, profile media actions, and stacked 52px editable profile rows.
- **TikTok User** — 414 × 896px mobile screen. Profile header, avatar and account statistics, thumbnails, tabs, floating creation bubble, and bottom navigation.
- **TikTok / App** — 321 × 409.22px app illustration containing a 248 × 248px icon and large display typography.
- **TikTok / Line** — horizontal line element with a 2px stroke.

## Notes for implementers

- Prioritize `#FFFFFF` surfaces and `#161722` or `#000000` for primary text.
- Use `#86878B` and `#8A8B8F` for secondary text, navigation labels, and secondary icons.
- Use Proxima Nova Regular at 15px for standard mobile row labels.
- Use Proxima Nova Bold at 17px for screen titles and prominent profile values.
- Preserve the 414 × 896px mobile composition when reproducing the extracted screens.
- Settings and profile rows should remain vertically stacked and visually separated by subtle neutral rules or shadows.
- Use only the documented colors, typography styles, and effects; no spacing, radius, motion, grid, or component tokens were defined.
