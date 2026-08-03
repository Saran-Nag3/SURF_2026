---
name: apple-news-ios-community
source: Apple News · iOS (Community)
kind: design-system-context
---

# apple-news - Design System

## Overview

Apple News iOS community design extraction focused on welcome screens, an all-titles news screen, magazine covers, editorial imagery, and iPhone device layouts.

- Primary device screen sizes: `430x932px` and `393x852px`.
- Main screen components use fixed dimensions.
- No local variable collections were found.
- Component families: `.Magazine`, `📱 News › All Titles`, `📱 News › Welcome`.

## Design language

- iOS-native editorial interface using SF Pro as the primary type family.
- Editorial content combines structured News UI with magazine-cover typography and imagery.
- Welcome screens support light and dark presentation using `#FFFFFF` and `#000000` backgrounds.
- Content is organized around centered onboarding content, fixed-width controls, navigation bars, filters, article or magazine imagery, and scrollable areas.
- The visual system uses strong black-and-white contrast with red as an accent in the source palette.
- Editorial cover variants include Ice Cream Bulletin, Ming Weekly, Périgueux Inside, and Tahiti The Magazine.
- Decorative assets include the Apple News logo, user imagery, app thumbnails, and photography.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 108 | Primary light background and light surfaces |
| `#D9D9D9` | 42 | Neutral surface or divider color |
| `#000000` | 36 | Primary dark text, dark background, and dark controls |
| `#CC171E` | 9 | Red accent |
| `#FFFFFF80` | 9 | Translucent white |

- Deprecated black token: `🗑️ DEPRECATED/🌈/black` → `#000000`.
- Image assets are present as named source styles, including Beach, Ice Cream, Périgueux, Minerva, App Logo/News, User/Kevin Lanceplaine, and app thumbnails.

## Type scale

### Primary named styles

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `SemiBold/10pt` | SF Pro | 590 | 10px | 12px | 0.12px |
| `Regular/11pt` | SF Pro | 400 | 11px | 13px | 0.06px |
| `SemiBold/12pt` | SF Pro | 590 | 12px | 16px | 0px |
| `Regular/14pt` | SF Pro | 400 | 14px | 19px | -0.15px |
| `SemiBold/15pt` | SF Pro | 590 | 15px | 20px | -0.23px |
| `Regular/17pt` | SF Pro | 400 | 17px | 22px | -0.43px |
| `SemiBold/17pt` | SF Pro | 590 | 17px | 22px | -0.43px |
| `Underlined/17pt` | SF Pro | 400 | 17px | 22px | -0.43px |
| `SemiBold/18pt` | SF Pro | 590 | 18px | 23px | -0.44px |
| `SemiBold/22pt` | SF Pro | 590 | 22px | 28px | -0.26px |
| `SemiBold/23pt` | SF Pro | 590 | 23px | 29px | -0.1px |
| `Bold/28pt` | SF Pro | 700 | 28px | 34px | 0.38px |
| `SemiBold/28pt` | SF Pro | 590 | 28px | 34px | 0.38px |
| `Bold/34pt` | SF Pro | 700 | 34px | 41px | 0.4px |

### Raw editorial styles

The extraction also contains raw styles using SF Pro Bold, Medium, Semibold, Regular, Black, and Heavy, plus Damion, Kanit, Patua One, and Playfair Display.

Observed raw sizes: `4px`, `5px`, `8px`, `11px`, `14px`, `15px`, `17px`, `19px`, `25px`, `29px`, `31px`, `34px`, `50px`, and `123px`.

Most-used named styles:

- `SemiBold/17pt`: 46 uses
- `SemiBold/10pt`: 35 uses
- `SemiBold/23pt`: 35 uses
- `SemiBold/12pt`: 28 uses
- `Regular/17pt`: 20 uses
- `SemiBold/15pt`: 14 uses
- `SemiBold/18pt`: 10 uses
- `SemiBold/22pt`: 5 uses
- `Bold/34pt`: 3 uses
- `SemiBold/28pt`: 2 uses
- `Underlined/17pt`: 2 uses

## Spacing scale

No spacing variables were found.

Observed component and layout spacing values:

- `0px` padding and gap are common in fixed screen containers.
- `1px` divider or small gap.
- `3px` icon gap.
- `8px` bottom or filter spacing.
- `10px` filter and status-bar spacing.
- `12px` content padding or inter-element spacing.
- `13px` status-bar and filter spacing.
- `14px` button vertical padding.
- `18px` status-bar side padding.
- `20px` navigation and button horizontal padding.
- `22px` title top padding.
- `32px` bottom-content gap.
- `40px` bottom-section top padding.
- `80px` row gap in the overview screen.

## Radius scale

No radius variables were found.

Observed radii:

- `8px`: filter controls.
- `14px`: primary button.
- `100px`: Dynamic Island hole and home bar.

## Elevation & effects

- Material Blur: `background_blur 50px`, used 7 times.
- Home bar effect: `background_blur 80px`.
- No elevation or shadow tokens were found.

## Components

### `.Magazine`

- Size: `168x270px`.
- Layout: vertical.
- Padding: `0 0 0 0px`.
- Gap: `0px`.
- Sizing: fixed width and fixed height.
- Device variants: `📱 15 Pro`, `📱 15 Pro Max`.
- Content variants:
  - Ice Cream Bulletin
  - Ming Weekly
  - Périgueux Inside
  - Tahiti The Magazine
- Associated typography includes SF Pro Bold, SF Pro Semibold, SF Pro Medium, and Damion.

### `📱 News › All Titles`

- Size: `430x932px`.
- Fill: `#FFFFFF`.
- Fixed-size News screen containing navigation, title, divider, filters, and editorial content.
- Uses named styles from `SemiBold/10pt` through `SemiBold/23pt`, plus raw editorial styles including Patua One, Kanit, Playfair Display, SF Pro Heavy, and SF Pro Black.

### `📱 News › Welcome`

- Sizes: `430x932px` and `393x852px`.
- Layout: vertical.
- Padding: `0 0 0 0px`.
- Gap: `0px`.
- Sizing: fixed width and fixed height.
- Fill variants: `#FFFFFF` and `#000000`.
- Center content uses a fixed-width area of `288px`.
- Bottom content includes a fixed-width `288px` area, `32px` gap, and a `288x50px` button with `14px` radius.
- Welcome copy uses `Regular/17pt`; supporting copy uses `Regular/11pt`.
- Status bar height: `54px`.
- Home bar height: `34px`.

## Screen patterns

### Welcome screen

- Device canvas: `430x932px` or `393x852px`.
- Status bar occupies `54px` at the top.
- Center region:
  - `430x583px` on the larger device.
  - `393x503px` on the smaller device.
- Centered content width: `288px`.
- Logo container: `74x88px`.
- Title and subtitle container: `268x161px`.
- Title/subtitle spacing: `12px`.
- Supporting text width: `268px`, height `44px`.
- Bottom region height: `295px`.
- Bottom content has `40px` top padding.
- Button size: `288x50px`.
- Home bar area: `34px` high.

Light and dark versions preserve the same structure while switching the primary screen background and foreground treatment.

### All Titles screen

- Device canvas: `430x932px`.
- Main top content height: `910px`.
- Navigation bar height: `154px`.
- Status bar height: `54px`.
- Title region height: `100px`.
- Title region uses `20px` horizontal padding, `22px` top padding, and `10px` bottom padding.
- Divider spans the content with `20px` horizontal insets.
- Filter area height: `64px`.
- Filters are horizontally scrollable.
- Filter controls are `44px` high with `8px` radius.
- Filter row gap: `10px`.

### Multi-screen presentation

- Overview canvas: `1766x1944px`.
- Screens are arranged in rows with `40px` horizontal gaps.
- Rows are separated by an `80px` vertical gap.
- The presentation includes light and dark welcome variants, both supported device widths, and the All Titles screen.

## Notes for implementers

- Use only the defined component families: `.Magazine`, `📱 News › All Titles`, and `📱 News › Welcome`.
- Preserve fixed screen sizes when reproducing the extracted iPhone compositions.
- Prefer the named SF Pro styles for interface text; use raw editorial font styles only where magazine or publication branding requires them.
- Keep welcome content centered within the `288px` fixed-width content area.
- Preserve the `54px` status bar and `34px` home bar regions.
- Treat filters as a horizontal scrolling row within the `64px` filter area.
- Use the ranked palette above and do not introduce additional color values.
- No spacing, radius, motion, grid, elevation, or local variable systems were defined beyond the observed values documented here.
