---
name: progressive
source: PCC Employee Progressive Web App (Community)
kind: design-system-context
---

# progressive - Design System

## Overview

- Mobile-first employee progressive web app designed around a 414 × 736px viewport.
- Primary flows include splash, registration, password setup, login, dashboard, search, and modal alert states.
- Visual direction combines Polynesian cultural branding, earthy gold and brown surfaces, editorial display type, and compact Lato UI typography.
- Main app navigation is a fixed bottom mobile navbar with Home, Settings, Account, and Directory actions.

## Design language

- Use warm, earthy brand colors with gold, brown, cream, green, orange, and teal accents.
- Use `Dirty Headline DirtyHeadline` or `Broadsheet Broadsheet` for branded and editorial headings.
- Use Lato for interface text, controls, labels, descriptions, and navigation.
- Login and registration screens use centered, vertically arranged controls over a gold background.
- Dashboard content uses compact cards with rounded image areas, strong category titles, and colorful image overlays.
- Use white text on dark or saturated brand surfaces.
- Prefer rounded cards and buttons with restrained corner radii.
- Use decorative imagery and cultural visual motifs where provided by the design.

## Color palette

Ranked by source usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 382 | Primary surface, text, icons, card backgrounds |
| `#000000` | 368 | Primary text |
| `#F5F3EE` | 180 | Warm light surface and button text |
| `#C4C4C4` | 119 | Divider and neutral gray |
| `#212121` | 80 | Dark secondary text and icons |
| `#735933` | 39 | Dark brown navigation and button surfaces |
| `#3A3327` | 29 | Card title text |
| `#F3F0E9` | 29 | Light neutral surface |
| `#BB9436` | 27 | Gold header and authentication backgrounds |
| `#3B931C` | 15 | Green card accent |
| `#E27249` | 14 | Orange card accent |
| `#215968` | 11 | Teal interactive state |
| `#9F7C42` | 11 | Search button surface |
| `#BCA947` | 8 | Gold accent and selected dashboard card |

## Type scale

All typography uses `0px` tracking and auto line height unless otherwise stated.

| Size | Family and weight | Token or use |
|---:|---|---|
| 40px | Dirty Headline DirtyHeadline Regular (400) | `chapter-title-header-sm` |
| 32px | Lato Black (900) | Raw heading |
| 32px | Lato Bold (700) | Raw heading |
| 25px | Broadsheet Broadsheet Regular (400) | Splash title |
| 24px | Dirty Headline DirtyHeadline Regular (400) | Raw heading |
| 24px | Lato Regular (400) | Raw text |
| 23px | Dirty Headline DirtyHeadline Regular (400) | `navigation-title-sm`, PCC EMPLOYEE |
| 20px | Lato Black (900) | Raw heading |
| 20px | Lato Bold (700) | `button-text-sm` |
| 20px | Lato Italic | Raw text |
| 20px | Lato Regular (400) | Raw text |
| 16px | Lato Black (900) | `section-header-sm` |
| 16px | Lato Bold (700) | Raw text |
| 16px | Lato Regular (400) | `input-text-sm` |
| 16px | Lato SemiBold (600) | Raw text |
| 14px | Lato Heavy (800) | `search-result-text-sm` |
| 14px | Lato Regular (400) | Raw text |
| 14px | Lato SemiBold (600) | Raw text |
| 12px | Lato Black (900) | Raw text |
| 12px | Lato Bold (700) | `card-title-sm` |
| 12px | Lato Medium (500) | `body-text-sm` |
| 12px | Lato Regular (400) | Raw text |
| 12px | Lato SemiBold (600) | `chapter-name-text`, `search-result-description-sm` |
| 9px | Dirty Headline DirtyHeadline Regular (400) | Raw decorative text |
| 9px | Lato Bold (700) | `nav-icon-name-sm` |

Most-used named styles:

- `nav-icon-name-sm`: Lato Bold, 9px, 57 uses.
- `button-text-sm`: Lato Bold, 20px, 5 uses.
- `navigation-title-sm`: Dirty Headline DirtyHeadline, 23px, 5 uses.
- `input-text-sm`: Lato Regular, 16px, 4 uses.
- `search-result-text-sm`: Lato Heavy, 14px, 4 uses.
- `chapter-title-header-sm`: Dirty Headline DirtyHeadline, 40px, 3 uses.

## Spacing scale

No spacing variables were found. Observed layout values:

- Mobile viewport width: 414px.
- Bottom navbar padding: `12px 28px 12px 28px`.
- Bottom navbar gap: 77px.
- Dashboard card-row gaps: 27px and 28px.
- Common fixed content widths: 265px, 345px, 347px, and 355px.
- Header and search-bar height: 60px.
- Bottom navbar height: 76px.
- Dashboard card image height: 134px.
- Dashboard card width: 97px.

## Radius scale

Observed corner radii:

- 5px: login button and dashboard card image frames.
- 10px: `search-btn` and alert modal overlay.
- 30px: home-screen circular menu tiles.
- 56px: registration login icon button.
- 56px: login and registration button height, not a radius token.

## Elevation & effects

- `navbar-mobile` uses a drop shadow with `8px` blur, `0px` horizontal offset, `-3px` vertical offset, and color `#00000012`.
- Modal alert uses a drop shadow with `50px` blur, `20px` horizontal offset, `14px` vertical offset, and color `#BB9436`.
- No local effect styles were found.
- No motion tokens were found.
- No grid styles were found.

## Components

### `navbar-mobile`

- Size: 414 × 76px.
- Fixed width and height.
- Horizontal layout.
- Padding: `12px 28px 12px 28px`.
- Gap: 77px.
- Alignment: space-between/min.
- Fill: `#735933`.
- Effect: drop shadow, `8px` blur, `0px -3px` offset, `#00000012`.
- Navigation labels use `nav-icon-name-sm`.
- Actions shown: Home, Settings, Account, Directory.
- Icon and label colors: `#FFFFFF`.

### `search-btn`

- Size: 30 × 30px.
- Radius: 10px.
- Fill: `#9F7C42`.
- Search icon uses `#FFFFFF` with a 2px stroke.

## Screen patterns

- **Splash screen:** 414 × 736px gold surface using `#BB9436`; centered white PCC visual, `Polynesian Cultural Center` in Broadsheet at 25px, and `PCC EMPLOYEE` in Dirty Headline DirtyHeadline at 23px.
- **Registration:** Gold authentication surface with white 265px-wide underlined Email and Employee ID Number inputs, a centered 56px login icon button, and a white `PCC EMPLOYEE` title.
- **Set password:** Gold authentication surface with a white Password input and a 265 × 56px brown Register button with warm light button text.
- **Login:** Gold authentication surface with centered Email and Passcode inputs, a 265 × 56px brown Log in button, PCC EMPLOYEE branding, and a 30 × 30px search control.
- **Login key frame:** White transition state with a 60px gold top bar and PCC EMPLOYEE branding; login controls are represented as transparent or hidden states.
- **Home screen:** Full-screen image background with twelve 75 × 75px rounded menu tiles, primarily white with one `#BCA947` selected tile, plus a white `PCC Employee` label.
- **Dashboard:** White screen with two rows of compact 97px-wide content cards. The first row uses three cards with a 27px gap; the second uses two cards with a 28px gap. A 60px gold search bar sits above the fixed bottom navbar.
- **Dashboard cards:** Card titles use `#3A3327` and 12px Lato styles. Image areas are 97 × 134px with a 5px radius and category-specific color overlays.
- **Modal overlay:** Dashboard remains behind a full-screen overlay. The alert panel is 254 × 278px, white, with a 10px radius and shadow. It contains a brown `ALERT` heading, black explanatory text, a green `OK` action, and a gray divider.
- **Search results:** Results use 355 × 72px light cards with a 5px radius. Titles use 14px Lato Heavy, descriptions use 12px Lato SemiBold, and trailing arrows use `#212121`.

## Notes for implementers

- Target the 414 × 736px mobile composition first.
- Keep authentication layouts centered and use 265px-wide fields and buttons where specified.
- Treat `navbar-mobile` as a fixed bottom element and reserve space for its 76px height.
- Use only the two documented component families: `navbar-mobile` and `search-btn`.
- Preserve the distinction between branded display typography and Lato interface typography.
- Use the ranked palette for new UI decisions, prioritizing `#FFFFFF`, `#000000`, `#F5F3EE`, `#C4C4C4`, and `#212121`, then the brown and gold brand colors.
- Do not infer additional spacing, radius, motion, grid, or effect tokens beyond the observed values listed here.
