---
name: wealthfront-advanced-ui-ux-design-community
source: WealthFront Advanced UI & UX Design (Community) / WealthFront Wireframe
kind: design-system-context
---

# wealthfront - Design System

## Overview

- Source: Figma file `WealthFront Advanced UI & UX Design (Community)`, page `WealthFront Wireframe`.
- The extracted design centers on a dark financial dashboard called `Overview Navy Blue`.
- The primary desktop frame is 1440×1024px.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The interface uses a dark navy background, white content, blue emphasis, muted gray metadata, and green/orange/yellow market indicators.

## Design language

- Dark, finance-oriented dashboard UI with high-contrast white text on navy surfaces.
- Primary navigation is a fixed-width 256px sidebar with white iconography and text.
- Active navigation uses a blue selection surface with a 10px radius.
- Content is organized into rounded dark cards, market watch-list cards, chart panels, and portfolio tables.
- Headings use Poppins SemiBold; supporting UI text predominantly uses Poppins Regular or Medium.
- Inter SemiBold is used for prominent button text.
- Market gains use green or yellow; market losses use orange.
- Secondary text, labels, chart axes, and footer links use muted gray.
- Decorative icons are generally 24×24px; smaller controls use 18×18px or 32×32px containers.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Raw uses | Named usage |
|---|---:|---|
| #FFFFFF | 304 | White, Text/100 |
| #000000 | 106 | Unstyled black |
| #E31937 | 20 | Unstyled red |
| #002868 | 18 | Unstyled navy |
| #BF0A30 | 18 | Unstyled red |
| #FF0000 | 16 | Unstyled red |
| #1ECB4F | 14 | Secondary/100; positive chart strokes |
| #1B2028 | 12 | Background Color/2 |
| #3A6FF8 | 12 | Main/Linear; active selection |
| #66DC43 | 12 | Unstyled green |
| #DADADA | 10 | Unstyled light gray |
| #00FF47 | 8 | Unstyled green |
| #E30A17 | 8 | Unstyled red |
| #D9D9D9 | 6 | Table and chart divider lines |
| #001489 | 4 | Unstyled navy |
| #003399 | 4 | Unstyled blue |
| #004990 | 4 | Unstyled blue |
| #007749 | 4 | Unstyled green |
| #2A385B | 4 | Main overview frame and footer surface |
| #3A6FF803 | 4 | Low-opacity blue selection surface |
| #606060 | 4 | Footer border |
| #E03C31 | 4 | Unstyled red |
| #E52E2E | 4 | Unstyled red |
| #FFB81C | 4 | Unstyled yellow |
| #FFCC00 | 4 | Unstyled yellow |
| #1D4ED8 | — | Blue/700 |
| #9E9E9E | — | Text/10 |
| #E4E4E4 | — | Stroke |
| #FFC01E | — | Secondary/100 |
| #F46D22 | — | Sec/100 |

Most-used named styles:

- Main/Linear: 316 uses; mapped to #3A6FF8.
- Text/10: 164 uses; mapped to #9E9E9E.
- Text/100: 88 uses; mapped to #FFFFFF.
- Background Color/1: 47 uses; no color value found.
- Secondary/100: 44 uses; source maps this name to #FFC01E and separately to #1ECB4F.
- Background Color/2: 26 uses; mapped to #1B2028.
- Stroke: 18 uses; mapped to #E4E4E4.
- White: 16 uses; mapped to #FFFFFF.
- Main/100: 8 uses; no color value found.
- Sec/100: 8 uses; mapped to #F46D22.
- Blue/700: 4 uses; mapped to #1D4ED8.

## Type scale

Typography is primarily Poppins, with Inter used for selected prominent button text.

| Size | Family and weight | Raw uses |
|---:|---|---:|
| 32px | Poppins SemiBold | 4 |
| 21px | Poppins SemiBold | 16 |
| 20px | Inter SemiBold | 4 |
| 18px | Poppins Regular | 4 |
| 18px | Poppins SemiBold | 4 |
| 16px | Inter SemiBold | 4 |
| 16px | Poppins SemiBold | 8 |
| 14px | Poppins Regular | 60 |
| 14px | Poppins Medium | 32 |
| 14px | Poppins SemiBold | 12 |
| 12px | Poppins Regular | 80 |
| 12px | Poppins Medium | 10 |
| 10px | Poppins Medium | 20 |
| 10px | Poppins SemiBold | 6 |

Observed hierarchy:

- 32px Poppins SemiBold: dashboard heading.
- 21px Poppins SemiBold: section and card headings.
- 20px Inter SemiBold: prominent button text.
- 18px Poppins Regular or SemiBold: chart values and secondary headings.
- 16px Poppins SemiBold: card values.
- 14px Poppins Regular, Medium, or SemiBold: navigation, labels, and market values.
- 12px Poppins Regular or Medium: metadata, chart labels, and table headings.
- 10px Poppins Medium or SemiBold: compact controls and pagination.

## Spacing scale

No spacing variables were found. Observed fixed spacing values:

- 0px padding.
- 5px padding and gaps.
- 7px padding.
- 8px padding.
- 10px padding and gaps.
- 11px padding.
- 12px gaps.
- 14px padding.
- 15px padding and gaps.
- 20px gaps.
- 24px padding.
- 32px gaps.
- 50px gaps.
- 88px gaps.

Observed layout dimensions include:

- Sidebar: 256px wide.
- Navigation item: 166×32px.
- Navigation selection: 197×50px.
- Dashboard header: 1185×65px.
- Search bar: 450×44px.
- Watch-list cards: 258×178px.
- Main chart panel: approximately 1124×441px.
- Portfolio panel: approximately 1122×201px.
- Icon sizes: 18×18px and 24×24px.
- Common compact controls: 32×32px.
- User photo: 44×44px.

## Radius scale

Observed corner radii:

- 0px: square corners and footer grouping.
- 5px: compact controls, currency selector, chart settings, and small buttons.
- 6px: deposit and withdrawal button containers.
- 8px: search bar.
- 10px: overview frame, navigation selection, profile photo, and selected icon containers.
- 15px: watch-list cards, chart panel, portfolio panel, and pagination controls.

## Elevation & effects

- Drop shadows are used on navigation selection surfaces and dark dashboard cards.
- Watch-list and chart cards use a drop shadow with 33px blur and 4px/4px offset.
- Navigation selection uses a drop shadow with 32px blur and 4px/4px offset.
- Some card graph points use a 5px layer blur.
- Chart area fills can use very low opacity; one graph fill is specified at 2% opacity.
- No local effect styles were found.

## Components

_None found in source._

The extraction reports no component families or component geometry. Reusable patterns are visible in the screen structure but are not defined as component sets.

## Screen patterns

### Overview Navy Blue dashboard

- Desktop frame: 1440×1024px with a 10px radius and #2A385B fill.
- Left sidebar: 256px wide, dark surface using #1B2028 in the named token mapping.
- Sidebar navigation:
  - 24×24px icons.
  - 166×32px navigation rows.
  - 20px gaps between icons and labels.
  - Active selection is 197×50px with a 10px radius and #3A6FF8.
  - Navigation labels use 14px Poppins, with `Overview` in SemiBold and other items primarily Regular.
- Header:
  - Dashboard title uses 32px Poppins SemiBold in #FFFFFF.
  - Search field is 450×44px with an 8px radius.
  - User profile uses a 44×44px photo, 15px gap, and 14px Poppins Medium name text.
- Watch list:
  - Four 258×178px market cards.
  - Cards use 15px radii and the dark #1B2028 surface.
  - Card headings use 21px Poppins SemiBold.
  - Percentage changes use 14px Poppins SemiBold.
  - Positive cards use #FFC01E or #1ECB4F; negative cards use #F46D22.
  - Graphs are approximately 111×46.5px with 2px strokes.
- Main chart:
  - Approximately 1124×441px with a 15px radius.
  - Includes a 21px Poppins SemiBold heading, currency selector, current value, chart plot, axis labels, range pagination, and chart settings control.
  - Chart plot stroke uses #3A6FF8.
  - Axis and metadata labels use 12px Poppins Regular in #9E9E9E.
  - Range controls use 10px Poppins Medium and 15px radii.
- Portfolio:
  - Approximately 1122×201px.
  - Includes a 21px Poppins SemiBold heading, table headings, rows, divider lines, a `View More` control, and deposit/withdraw actions.
  - Table metadata uses 12px Poppins Regular in #9E9E9E.
  - Table values use 14px Poppins Regular or Medium.
- Footer:
  - Uses a dark #2A385B surface.
  - Footer links use 14px Poppins Regular in #9E9E9E.
  - Links are separated by a 50px gap.

## Notes for implementers

- Use only the extracted colors and named mappings; unresolved tokens such as Background Color/1 and Main/100 have no source color value.
- Preserve the dark navy dashboard contrast: white headings and navigation text, muted gray metadata, and blue emphasis.
- Use Poppins for the majority of interface text and Inter SemiBold 20px for prominent deposit and withdrawal button labels.
- Keep navigation rows at 166×32px with 24×24px icons and 20px icon-to-label gaps.
- Use 15px radii for major cards and panels, 10px for navigation selection and profile imagery, and 5px for compact controls.
- Treat watch-list cards as a repeated visual pattern, but do not assume they are formally defined components.
- Use green or yellow for positive market movement and orange for negative movement as shown in the source.
- No responsive behavior, component states, spacing variables, motion, or accessibility specifications were extracted.
