---
name: steam-app-concept-community
source: Steam App Concept (Community)
kind: design-system-context
---

# steam - Design System

## Overview
- Mobile Steam concept for a 375x812px iPhone viewport.
- Three primary screen patterns are represented: Steam Safety, Steam Community, and Steam Chat.
- The interface uses a dark navy foundation, white primary text, muted slate secondary text, cyan interactive accents, and green status/positive accents.
- Component family: Bars.

## Design language
- Dark, high-contrast mobile UI with full-width sections and bottom navigation.
- Primary surfaces use dark navy tones; secondary controls use lighter blue-gray surfaces.
- Headings use Gilroy Bold at large sizes.
- Interface labels and supporting content use PingFang SC.
- Controls use compact pill-like rectangles with 8px radius.
- Cyan indicates selected or active controls.
- Green indicates positive status, counts, or reactions.
- Icons are primarily outlined and use muted slate or white strokes.

## Color palette
Ranked by observed usage:

| Color | Uses | Observed role |
|---|---:|---|
| #FFFFFF | 246 | Primary text, icons, light surfaces |
| #000000 | 80 | Status bar and dark structural elements |
| #D8D8D8 | 80 | Placeholder and list-row surfaces |
| #4B5664 | 56 | Muted icon strokes and secondary UI |
| #7B8D9D | 38 | Secondary text and metadata |
| #1C202C | 31 | Primary app background |
| #303649 | 24 | Secondary controls and navigation surfaces |
| #31BCFC | 14 | Active controls and cyan accents |
| #00D44B80 | 12 | Translucent green accent |
| #12141C | 12 | Bottom navigation surface |
| #555B6F | 12 | Search icon strokes |
| #00D44B | 10 | Positive status and reaction accents |
| #000000A4 | 8 | Translucent black |
| #DFE1E2 | 8 | Light placeholder surfaces |
| #171A24 | 6 | Section separators and dark surfaces |
| #C1BCB5 | 6 | Neutral accent |
| #202532 | 4 | Dark surface |
| #62707F | 4 | Muted slate accent |
| #979797 | 4 | Placeholder strokes |

## Type scale
No local text styles were defined. Observed typography:

### Gilroy
- 54px — Bold
- 32px — Regular
- 28px — Black, Bold, Medium
- 24.88px — Black, Bold, Medium

### PingFang SC
- 18px — Light
- 16px — Light, Semibold
- 15px — Semibold
- 14.22px — Semibold
- 14px — Regular, Medium, Semibold
- 13.33px — Semibold
- 13px — Regular
- 12.44px — Regular, Medium, Semibold
- 12px — Light, Medium
- 11.55px — Regular
- 10.66px — Light, Medium
- 8px — Light

### Other observed typography
- Roboto Regular, 16px — used for one chat username.

## Spacing scale
_None found in source._

## Radius scale
Observed radius values:
- 1.33px
- 2px
- 2.67px
- 3px
- 3.5px
- 7px
- 8px
- 100px

## Elevation & effects
- Drop shadow observed with 4px blur and offset 0px horizontally, 2px vertically.
- Drop shadow observed with 12px blur and offset 0px horizontally, 3px vertically.
- Gradient overlays are used over dark content areas.
- Effect and gradient colors are not included because they are outside the permitted palette.

## Components
### Bars
- Status Bar / iPhone / x / Time - Dark
  - Size: 54x21px
  - Fill: #000000
  - Time text: PingFang SC Semibold, 15px
- Status Bar / iPhone / Dark
  - Size: 376x44px
  - Fill: #000000
  - Time text: PingFang SC Semibold, 15px
- Home Indicator / iPhone / Dark - Portrait
  - Size: 134x34px
  - Fill: #000000
- Home Indicator instance observed in the screens
  - Indicator size: 134x5px
  - Radius: 100px
  - Fill: #FFFFFF

## Screen patterns
- **Steam Safety**
  - Dark 375x812px screen.
  - Large Gilroy heading.
  - Account identity and safety instructions use white and muted slate text.
  - Segmented control uses a #303649 container with a #1C202C selected segment.
  - Bottom navigation uses a #12141C surface.
- **Steam Community**
  - Dark 375x812px screen.
  - Large “Steam Community” heading in Gilroy Bold, 28px.
  - Category filters use 38px-tall controls with 8px radius.
  - Selected filter uses #31BCFC; inactive filters use #303649.
  - Community posts combine white titles, #7B8D9D metadata, image cards with 8px radius, and reaction counts.
  - Bottom navigation uses a #12141C surface.
- **Steam Chat**
  - Dark 375x812px screen.
  - Conversation list uses repeated 375x72px rows.
  - Names use white PingFang SC Semibold, 16px.
  - Preview text uses PingFang SC Regular or Medium, 14px, with #7B8D9D or #FFFFFF.
  - Rows include circular avatars and small unread/status indicators.
  - Bottom navigation and status bar are persistent.

## Notes for implementers
- Target the observed 375x812px mobile viewport.
- Use #1C202C as the primary screen background and #12141C for bottom navigation.
- Use #FFFFFF for primary text and #7B8D9D for supporting text and metadata.
- Use #31BCFC for selected controls and active indicators.
- Use #00D44B for positive counts, reactions, and status accents.
- Use 8px radius for primary buttons, filter controls, segmented controls, and image masks.
- Preserve the 375x90px bottom navigation structure and the 134x5px white home indicator.
- Do not introduce additional component families beyond Bars.
