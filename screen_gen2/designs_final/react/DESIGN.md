---
name: react-application-mobile-web-community
source: React Application (Mobile+Web)) (Community)
kind: design-system-context
---

# react - Design System

## Overview

- Source: Figma file `React Application (Mobile+Web)) (Community)`.
- Source page: `All pages (3): Mobile, Web, Icons`.
- Primary extracted screens: Mobile `Team_profile`, `Profile`, and `Card_detailed`.
- Mobile frame size: `375x812px`.
- Visual direction: blue and pale-blue community interface with white cards, dark navigation, compact metadata, skill tags, and rounded content blocks.

## Design language

- Use Inter for the primary interface typography.
- Use Ubuntu Bold for appbar labels.
- Primary blue is used for section labels, icons, tag text, and action controls.
- Pale blue is used for page backgrounds, tags, and circular icon containers.
- White cards sit on pale-blue page backgrounds.
- Secondary metadata uses black with `60%` opacity.
- Cards and tags use rounded corners; separators use a `0.5px` pale-blue stroke.
- Mobile navigation is a `375x56px` dark bottom bar with a centered blue circular control.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage / role |
|---|---|
| `#0D38CE` | 220 raw uses; Primary / Blue; primary actions, labels, icons, tag text |
| `#E4EAFF` | 103 raw uses; pale-blue page background and tag fill |
| `#FFFFFF` | 98 raw uses; Primary / White; cards, appbar, light surfaces |
| `#B8C8FF` | 27 raw uses; separators and thin borders |
| `#C4C4C4` | 18 raw uses; image placeholders |
| `#000000` | 14 raw uses; Primary Black; primary text |
| `#00B6FF` | 10 raw uses; appbar logo accent |
| `#0D38CE26` | 10 raw uses; bottom navigation border |
| `#121212` | 10 raw uses; bottom navigation background |
| `#D8D8D8` | 10 raw uses |
| `#4C6C91` | 7 raw uses; VK icon |
| `#1A49EE` | 6 raw uses |
| `#0E38CAA6` | 4 raw uses |
| `#00000099` | Accent / Gray token; secondary text |
| `#FFFFFF0A` | States_white overlay / Hover |

Near-identical blue values are consolidated around the primary `#0D38CE` token where possible.

## Type scale

- **Title**: Inter Bold, `28px`, line height `auto`, tracking `-0.56px`.
- **Inter SemiBold**:
  - `20.21px`
  - `20.18px`
  - `17.68px`
  - `17.65px`
  - `17.63px`
  - `16px`
  - `14px`
  - `12.63px`
  - `12.61px`
  - `12.6px`
  - `12.59px`
  - `10px`
- **Inter Regular**:
  - `15.16px`
  - `15.15px`
  - `15.13px`
  - `15.11px`
  - `12px`
- **Footnote**: Inter Regular, `12px`, line height `auto`, tracking `0.12px`.
- **Ubuntu Bold**:
  - `18.22px`
  - `14.45px`
- Component-specific Button text: Poppins SemiBold, `14px`.

## Spacing scale

_None found in source._

## Radius scale

- `8px`: image thumbnails, skill tags, and outlined request controls.
- `12px`: primary card surfaces and pale-blue placeholder surfaces.
- `20.32px`: circular bottom-navigation control.
- `0px`: groups and sections without a rounded-corner specification.

## Elevation & effects

- Bottom navigation background uses drop shadows with offsets:
  - `0 5px`, blur `5px`
  - `0 3px`, blur `14px`
  - `0 8px`, blur `10px`
- Circular bottom-navigation control uses drop shadows with offsets:
  - `0 1.45px`, blur `2.9px`
  - `0 0.73px`, blur `7.26px`
  - `0 2.9px`, blur `3.63px`
- No local effect styles were found.
- No local grid styles were found.

## Components

Only these component families are present:

### `2. Bottom`

- `2. Bottom /C. FAB center cut (Mobile)`: `375x56px`, fill `#FFFFFF`.
- `2. Bottom /C. FAB center cut (Web)`: `56x375px`, fill `#FFFFFF`.
- Mobile implementation details:
  - Dark background: `375x56px`, fill `#121212`.
  - Border: `1px`, `#0D38CE26`.
  - Center circular control: `40.64x40.64px`, radius `20.32px`, fill `#0D38CE`.
  - Notifications icon: `15.17x19.5px`, fill `#0D38CE`.
  - Hackatons icon: `18x15.43px`, fill `#0D38CE`.
  - Profile icon: `14x14px`, fill `#FFFFFF`.

### `Button`

- Size: `326x36px`.
- Fill: `#E4EAFF`.
- Text: Poppins SemiBold, `14px`.

### `Rich_crad`

- Size: `327x213px`.
- Text styles: Inter SemiBold `10px`, Footnote, and Inter SemiBold `16px`.

### `team`

- Mobile variant: `288x58px`.
- Mobile expanded variant: `327x156px`.
- Text styles: Inter SemiBold `10px`, Footnote, and Inter SemiBold `14px`.
- Repeated skill tags:
  - `Design`: `67x22px`, radius `8px`
  - `UX/UI`: `61x22px`, radius `8px`
  - `Figma`: `61x22px`, radius `8px`
  - Tag fill: `#E4EAFF`
  - Tag text: Inter SemiBold, `10px`, fill `#0D38CE`
- Expanded team content uses a `58x58px` image, radius `8px`, secondary `About` text, team name, people count, and an outlined `Запрос` control sized `73x22px`.

## Screen patterns

- **Mobile / Team_profile**
  - `375x812px` pale-blue page.
  - White team summary card approximately `327x173px`, radius `12px`.
  - White participants card `327x412px`, radius `12px`.
  - Cards use blue section labels, black primary names, gray metadata, pale-blue separators, skill tags, social icons, and the mobile bottom navigation.
  - Appbar is `375x96px` with a branded image and logo treatment.

- **Mobile / Profile**
  - `375x812px` pale-blue page.
  - Stacked white sections for archive, achievements, current team, and profile.
  - Main section sizes include `327x236px`, `327x149px`, and `327x236px`.
  - Repeated row pattern: `287x58px` content row with `58x58px` rounded image, primary title, and Footnote metadata.
  - Profile content includes skill tags, biography text, social networks, identity metadata, and the mobile bottom navigation.

- **Mobile / Card_detailed**
  - `375x812px` pale-blue page.
  - White invitation card approximately `327x399px`, radius `12px`.
  - Reuses the `team` component in `327x156px` variants.
  - Includes skill tags, team image, team name, people count, `About` text, outlined `Запрос` action, separator, and blue section label.

## Notes for implementers

- Preserve the mobile canvas size of `375x812px` when reproducing the extracted screens.
- Use `327px` or `328px` card widths as specified; do not normalize them to the full viewport width.
- Use `#E4EAFF` for the page background and skill-tag surfaces, and `#FFFFFF` for card surfaces.
- Use `#000000` for primary names and `#00000099` for metadata and descriptive text.
- Use `#0D38CE` for primary blue labels, icons, tag text, and action controls.
- Keep card corners at `12px` and tag/image corners at `8px` where specified.
- Use `0.5px` `#B8C8FF` separators between card sections.
- Use Inter unless a component explicitly specifies Ubuntu Bold or Poppins SemiBold.
- Do not introduce spacing, radius, motion, grid, or effect tokens that are not listed in this document.
