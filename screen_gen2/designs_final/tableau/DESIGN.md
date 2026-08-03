---
name: tableau-ui-kit-community
source: Tableau UI Kit (Community)
kind: design-system-context
---

# tableau - Design System

## Overview

- Source: Tableau UI Kit (Community)
- Source page: All pages, 58 pages.
- Extracted: 2026-07-25T09:13:28.531780+00:00
- The source covers getting-started documentation, design tokens, filters, parameters, chart examples, and dashboard UI patterns.
- No local variable collections were found.

## Design language

- Typography uses Inter across regular, medium, semibold, bold, and extra-bold weights.
- The visual language is documentation-oriented: white page surfaces, dark headings, neutral body copy, blue links, and pale blue badges.
- Content layouts use a centered 720px content column inside an 848px page.
- Common page structure: header, content sections, resource links, and a muted footer.
- Imagery commonly uses 8px corner radius.
- Raw colors include a five-color Figma palette, each recorded with 19 uses: #0ACF83, #1ABCFE, #A259FF, #F24E1E, #FF7262.

## Color palette

Ranked by recorded usage where counts are available:

| Token | Color | Usage |
|---|---|---:|
| Neutral/500 | #6B7280 | 51 |
| Neutral/900 | #111827 | 51 |
| Primary/50 | #EFF6FF | 51 |
| Primary/500 | #3B82F6 | 51 |
| White | #FFFFFF | 1 |
| Raw color | #0ACF83 | 19 |
| Raw color | #1ABCFE | 19 |
| Raw color | #A259FF | 19 |
| Raw color | #F24E1E | 19 |
| Raw color | #FF7262 | 19 |

Additional allowed source colors recorded without usage counts:

- #000000
- #0000000A
- #0000001A
- #065F46
- #08081A
- #080C1A
- #111827
- #1F2937
- #374151
- #3B82F6
- #4B5563
- #4E79A7
- #59A14F
- #606B7680
- #666666
- #6B7280
- #76B7B2
- #9C755F
- #A259FF
- #B07AA1
- #BAB0AC
- #BFDBFE
- #D1D5DB
- #DBEAFE
- #E15759
- #E5E7EB
- #EDC948
- #EFF6FF
- #F24E1E
- #F28E2B
- #F9FAFB
- #FF7262
- #FF9DA7
- #FFFFFF
- #FFFFFF00
- #FFFFFF80

## Type scale

Font family: Inter.

| Size | Weight | Line height | Tracking | Usage |
|---:|---|---:|---:|---|
| 64px | ExtraBold (800) | Not specified | Not specified | Raw typography |
| 36px | Bold (700) | auto | 0px | File/Heading/H1 |
| 32px | Regular (400) | Not specified | Not specified | Raw typography |
| 24px | SemiBold (600) | auto | 0px | File/Heading/H2 |
| 18px | Regular (400) | 32px | 0px | Body, link, paragraph regular |
| 16px | Regular (400) | auto | 0px | File/Heading/H3 |
| 13px | Medium (500) | 19px | 0px | 10/Medium |
| 11px | Medium (500) | 17px | 0px | 8/Medium |

Recorded usage counts:

- Inter Regular, 32px: 102 uses.
- Inter SemiBold, 24px: 60 uses.
- Inter ExtraBold, 64px: 51 uses.
- File/Paragraph/Body: 48 uses.
- 10/Medium: 30 uses.
- File/Heading/H2: 19 uses.
- File/Paragraph/Link: 19 uses.
- File/Heading/H1: 10 uses.
- 8/Medium: 4 uses.
- Tableau UI Kit Only/Paragraph/Regular: 1 use.

## Spacing scale

No spacing variables were found.

Observed layout spacing values:

- 4px: link text and chevron gap.
- 8px: title/subtitle gap.
- 12px: image/caption gap and logo/URL gap.
- 16px: horizontal grouping gap.
- 20px: page-header internal gap.
- 24px: section heading/content gap.
- 32px: content padding, section image/text gap, footer padding, resource-link gap.
- 36px: footer internal gap.
- 64px: page content horizontal padding and major content-section gap.

## Radius scale

No radius variables were found.

Observed radii:

- 8px: documentation images.
- 10px: badges.

## Elevation & effects

- No local effect styles were found.
- No motion tokens were found.
- No local grid styles were found.
- No elevation values were extracted.

## Components

No component families or component geometry were found in the source.

Named UI areas appear in the source page index, but they are not available as extracted component specifications:

- Avatar
- Badge
- Button Group
- Button
- Chips
- Dashboard
- Headings
- Layout
- Sidebar
- Slideover
- Tabs
- Topbars
- Filters
- Parameters
- Other
- Shared

## Screen patterns

- Getting Started documentation pages use an 848px-wide fixed page with a 140px header, a 720px content column, and a 164px footer.
- Header pattern: white surface, 64px horizontal padding, 64px top padding, 32px bottom padding, and an H1.
- Content pattern: white surface, 32px vertical padding, 64px horizontal padding, and 64px gaps between major sections.
- Section pattern: 720px-wide content, 24px gap between heading and content, and image blocks commonly sized 720px wide with 8px radius.
- Resource-link pattern: 24px icon, 16px icon-to-link gap, link text, 4px gap, and a 24px chevron.
- Footer pattern: #F9FAFB surface, 32px padding, and muted paragraph content.
- Documented getting-started screens include Libraries, New Versions, Components, General Info, and Styles.
- The source also includes examples for area, bar, barbell, boxplot, bullet, combination, diverging, dot strip, Gantt, heatmap, histogram, KPI, line, map, pie, scatter plot, slope, table, treemap, and waterfall charts.

## Notes for implementers

- Prefer the named typography tokens over raw styles when implementing documentation UI.
- Use the 720px content column within an 848px page for the documented desktop layout.
- Use #111827 for primary dark text, #6B7280 for neutral text, #3B82F6 for primary accents, #EFF6FF for pale primary surfaces, and #FFFFFF for white surfaces.
- Preserve the documented 64px page padding and 64px major-section spacing where the fixed desktop layout applies.
- Use 8px radius for image content and 10px radius for badges.
- Do not assume extracted component APIs, variants, elevations, motion, or spacing variables; none were provided.
