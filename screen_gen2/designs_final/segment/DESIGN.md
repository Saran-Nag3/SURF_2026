---
name: tabs-segment-control-ui-component-community
source: Tabs / Segment Control - UI Component (Community)
kind: design-system-context
---

# tabs-segment-control-ui-component-community - Design System

## Overview

A Figma design system for tabs and segment controls with three visual styles:

- Classic
- Colorful
- Levels

The primary component patterns support active, inactive, focus, hover, and icon variants.

## Design language

- Typeface: Inter is the primary typeface.
- Layout: horizontal tab groups with centered content.
- Controls use fixed dimensions, explicit padding, and centered alignment.
- Classic tabs use neutral borders and inactive fills.
- Colorful tabs use purple borders and active text.
- Levels tabs use a light gray segmented container with a raised active tab.
- Icons are optional and placed inline with an 8px gap in Classic and Colorful tabs.
- Component titles and documentation also use Johnston100 Light in the source.

## Color palette

### Ranked raw colors

| Color | Raw usage |
|---|---:|
| #000000 | 461 |
| #FFFFFF | 84 |
| #C54600 | 72 |
| #660CE3 | 70 |
| #6B6B6B | 62 |
| #0D69D4 | 60 |
| #007D00 | 48 |
| #F2F2F2 | 37 |
| #767676 | 18 |
| #007D004D | 16 |
| #0D69D433 | 15 |
| #D9D9D9 | 11 |
| #1E1E1E | 8 |
| #303030 | 7 |
| #E3CFFC | 5 |

### Named color tokens

- `cool-gray/900`: #111827; 463 uses in most-used styles.
- `CoolGray/700`: #4A5568; 1 use in most-used styles.
- `purple/600`: #9333EA; 1 use in most-used styles.
- `cool-gray/500`: #6B7280; 3 uses in most-used styles.
- `cool-gray/400`: #9CA3AF; 2 uses in most-used styles.
- `white`: #FFFFFF; 1 use in most-used styles.

### Component color roles

- Levels container fill: #D9D9D9.
- Levels active tab fill: #FFFFFF.
- Levels active label: #1E1E1E.
- Levels inactive tab fill: #D9D9D9.
- Levels inactive label: #6B6B6B.
- Levels active shadow: #00000040.
- Classic active fill: #FFFFFF.
- Classic active border and label: #1E1E1E.
- Classic inactive fill: #F2F2F2.
- Classic inactive label: #6B6B6B.
- Classic hover border and label: #660CE3.
- Colorful fill: #FFFFFF.
- Colorful border: #660CE3.
- Colorful active label: #660CE3.
- Colorful inactive label: #767676.
- Focus border: #000000 or #303030, depending on the documented state.

## Type scale

### Named styles

| Style | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Title Hero | Inter | Bold 700 | 72px | 99.15% | -2.16px |
| Subtitle | Inter | Regular 400 | 32px | 99.15% | 0px |
| Heading | Inter | SemiBold 600 | 24px | 99.15% | -0.48px |
| Subheading | Inter | Regular 400 | 20px | 99.15% | 0px |
| Body Strong | Inter | SemiBold 600 | 16px | 115.68% | 0px |
| Body Base | Inter | Regular 400 | 16px | 115.68% | 0px |
| Body Small | Inter | Regular 400 | 14px | 115.68% | 0px |

### Additional raw sizes

- Inter Regular: 12px, 14px, 11px.
- Inter SemiBold: 20px.
- Inter Bold: 12px, 16px, 24px, 36px, 48px, 64px.
- Johnston100 Light: 18px.

## Spacing scale

No spacing variables found in source.

Component spacing values:

- Component 1: 12px padding on all sides, 6px gap.
- Tabs - Levels: 8px vertical padding, 32px horizontal padding, 0px gap.
- Tabs - Classic: 12px vertical padding, 48px horizontal padding, 0px gap.
- Tabs - Colorful: 12px vertical padding, 48px horizontal padding, 0px gap.
- Icon-bearing Classic and Colorful tabs: 8px label-to-icon gap.

## Radius scale

No radius variables found in source.

Documented component radii:

- Component 1: 16px.
- Tabs - Levels: 8px.
- Tabs - Classic: 4px top corners and 0px bottom corners.
- Tabs - Colorful: no component radius specified.
- Component-set containers: 5px.

## Elevation & effects

- Tabs - Levels active tab: drop shadow with 4px blur, offset `0 4px`, color #00000040.
- No local effect styles found beyond the Levels drop shadow.
- No motion tokens found.
- No grid styles found.

## Components

### Component 1

- Family: `Component 1`.
- Size: 466px × 62px.
- Layout: horizontal.
- Padding: 12px on all sides.
- Gap: 6px.
- Alignment: minimum/center.
- Sizing: fixed width and fixed height.
- Fill: #D9D9D9.
- Text style: Body Strong.
- Styles: Classic, Colorful, Levels.

### Tabs - Levels

- Family: `Tabs - Levels`.
- Size: 106px × 38px.
- Radius: 8px.
- Layout: horizontal.
- Padding: 8px vertical, 32px horizontal.
- Gap: 0px.
- Alignment: center/center.
- Sizing: fixed width and fixed height.
- Fill: #FFFFFF.
- Text style: Body Strong.
- Variants:
  - Active: No/Yes.
  - Focus: No/Yes.
  - Hover: No/Yes.
  - Icon: No/Yes.
- Active tab uses the documented drop shadow.
- Icon size in documented instances: 20px × 20px.

### Tabs - Classic

- Family: `Tabs - Classic`.
- Size: 149px × 48px without an icon.
- Size: 177px × 48px with an icon.
- Radius: 4px top corners and 0px bottom corners.
- Layout: horizontal.
- Padding: 12px vertical, 48px horizontal.
- Gap: 0px without an icon; 8px with an icon.
- Alignment: center/center.
- Sizing: fixed width and fixed height.
- Fill: #FFFFFF when active; #F2F2F2 in the documented inactive state.
- Border: #1E1E1E at 1px for the active default state; #660CE3 at 1px for active hover.
- Focus border: #1E1E1E or #000000 at 2px, depending on the documented focus state.
- Text: Inter SemiBold, 20px.
- Variants:
  - Active: No/Yes.
  - Focus: No/Yes.
  - Hover: No/Yes.
  - Icon: No/Yes.
- Icon size: 20px × 20px.

### Tabs - Colorful

- Family: `Tabs - Colorful`.
- Size: 149px × 48px without an icon.
- Size: 177px × 48px with an icon.
- Layout: horizontal.
- Padding: 12px vertical, 48px horizontal.
- Gap: 0px without an icon; 8px with an icon.
- Alignment: center/center.
- Sizing: fixed width and fixed height.
- Fill: #FFFFFF.
- Default border: #660CE3 at 1px.
- Focus border: #303030 or #000000 at 2px, depending on the documented focus state.
- Active text and icon: #660CE3 in the default active state.
- Inactive text and icon: #767676.
- Focused active text and icon: #303030.
- Text: Inter SemiBold, 20px.
- Variants:
  - Active: No/Yes.
  - Focus: No/Yes.
  - Hover: No/Yes.
  - Icon: No/Yes.
- Icon size: 20px × 20px.

### Icon

- Family: `Icon`.
- Size: 24px × 24px.
- Variants:
  - Style: Outline/Solid.
  - Icon: the source includes a broad Tailwind icon set, including arrows, actions, communication, files, navigation, commerce, users, media, status, and utility icons.
- Documented tab icon instances use 20px × 20px containers with 18px × 14px vectors.

## Screen patterns

- Cover / Thumbnail: a fixed 1428px × 900px overview screen presenting the UI Component title, the “3 Tabs / Segment Controls styles” title, and visual examples of Levels, Colorful, and Classic controls.
- Notes: a 595px × 842px documentation screen with a title area, explanatory copy, feedback text, and author attribution.
- Components / Tab - Colourful: a component documentation screen showing tab states for active, inactive, focus, hover, and icon combinations.
- Components / Tab - Classic: a component documentation screen showing the same state matrix for Classic tabs.
- Additional source pages include cover, notes, components, Tailwind Icons, and documentation.

## Notes for implementers

- Use only the documented component families: `Component 1`, `Tabs - Levels`, `Tabs - Classic`, `Tabs - Colorful`, and `Icon`.
- Treat active, focus, hover, and icon as independent component states where supported.
- Keep tab dimensions fixed to the documented sizes.
- Use 149px width for Classic and Colorful tabs without icons and 177px width when an icon is present.
- Keep icon-bearing tabs at an 8px content gap.
- Use the documented focus border thickness of 2px; do not substitute a shadow for focus.
- Preserve Classic’s 4px top-corner and 0px bottom-corner radius.
- Use the Levels drop shadow only for the active raised tab.
- Use Inter SemiBold 20px for Classic and Colorful tab labels.
- Use Body Strong for Levels labels.
- No spacing, motion, grid, or local effect variable collections were found.
