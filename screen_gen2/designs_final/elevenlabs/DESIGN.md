---
name: elevenlabs-ai-audio-platform-saas-ui-community
source: ElevenLabs - AI Audio Platform SaaS UI (Community)
kind: design-system-context
---

# elevenlabs - Design System

## Overview

- Source: Figma file “ElevenLabs - AI Audio Platform SaaS UI (Community)”.
- Pages: “🎨 Replicated UI” and “📕 Cover”.
- Extracted screens include an analytics empty state and a pricing/subscription page.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, grid styles, or component families were found.
- Primary color: `#3758F9`.

## Design language

- Light interface foundation using `#FFFFFF`, `#F9FCFC`, `#FBFAFA`, and `#FEFFFF`.
- Primary text is dark `#171A1F`; secondary text uses `#565D6D`, `#9095A1`, and `#BDC1CA`.
- Controls are compact, bordered, and commonly use 4px or 8px radii.
- Pricing uses a four-card horizontal comparison layout with a dark `#312B40` “Most Popular” banner and dark primary action.
- Analytics uses bordered control groups, date navigation, segmented choices, and chart labels.
- Typography is predominantly regular-weight ABeeZee, with display and heading usage across Inter, PingFang HK, Lexend, Helvetica, Actor, and other observed families.

## Color palette

Ranked by observed usage:

| Color | Uses | Observed role |
|---|---:|---|
| `#171A1F` | 120 | Primary text and dark UI content |
| `#FFFFFF` | 55 | Main surfaces and card backgrounds |
| `#9095A1` | 50 | Secondary text and descriptions |
| `#000000` | 48 | Dark action background and text |
| `#838495` | 47 | Secondary interface color |
| `#BDC1CA` | 42 | Muted text, disabled states, and icon strokes |
| `#F9FCFC` | 38 | Control and analytics surfaces |
| `#565D6D` | 26 | Supporting text and chart labels |
| `#DCE0E6` | 20 | Borders and control backgrounds |
| `#312B40` | 17 | Dark accent and featured pricing actions |
| `#3F2AA8` | 15 | Accent control text |
| `#DFE7FF` | 12 | Light accent surface |
| `#E4E7EB` | 12 | Pricing card borders |
| `#FEFFFF` | 12 | Light surface |
| `#CACFD8` | 9 | Borders and dividers |
| `#666666` | 8 | Neutral text |
| `#FBFAFA` | 7 | Navigation surface |
| `#070707` | 6 | Near-black text or accents |
| `#3857BA` | 6 | Blue accent |
| `#4A44AD` | 6 | Purple accent |
| `#7936B1` | 6 | Purple accent |
| `#EAEBEC` | 6 | Light neutral surface |
| `#F3E7FF` | 6 | Light purple surface |
| `#6F7081` | 5 | Muted neutral |
| `#F3F3F4` | 5 | Light neutral surface |
| `#F3F4F6` | 5 | Light neutral surface |
| `#111111` | 4 | Near-black text |
| `#7F7F7F` | 4 | Neutral text |

## Type scale

Observed type styles, ordered by size:

| Size | Family and weight | Uses |
|---:|---|---:|
| 120px | Inter Black | 3 |
| 42px | PingFang HK Semibold | 3 |
| 24px | Helvetica Helvetica | 5 |
| 24px | Lexend SemiBold | 3 |
| 19px | Actor Regular | 6 |
| 18px | ABeeZee Regular | 4 |
| 18px | Lexend Medium | 6 |
| 18px | PingFang HK Regular | 3 |
| 16px | ABeeZee Regular | 31 |
| 15px | ABeeZee Regular | 58 |
| 15px | Manrope Regular | 8 |
| 14px | ABeeZee Regular | 38 |
| 14px | Lexend Regular | 6 |
| 14px | Manrope Regular | 18 |
| 13px | ABeeZee Regular | 17 |
| 13px | Manrope Regular | 5 |
| 12.6px | ABeeZee Regular | 7 |
| 12px | ABeeZee Regular | 3 |
| 12px | Manrope Regular | 13 |

Additional styles observed in screen content:

- 28px Acme Regular for “API Requests”.
- 18px Adamina Regular for “Subscription”.
- 43px PingFang HK Semibold for a pricing value.
- 39px PingFang HK Semibold for a pricing value.
- 16px PingFang HK Semibold for a featured pricing action.
- 14px ABeeZee Regular for pricing controls and feature labels.
- 12px ABeeZee Regular for the “Most Popular” label.

Hierarchy guidance:

- Use 42px–43px PingFang HK Semibold for prominent pricing values.
- Use 24px heading styles for analytics headings.
- Use 18px–19px styles for section headings and chart labels.
- Use 14px–16px ABeeZee for controls, descriptions, and feature content.
- Use 12px–13px text for compact labels and supporting pricing copy.

## Spacing scale

No spacing variables were found.

Observed layout values include:

- 0px, 1px, 3px, 4px, 5px, 6px, 7px, 9px, 10px, 11px, 12px, 13px, 14px, 15px, 19px, 23px, 28px, 51px, 62px, 67px, 83px, 138px, 318px.
- Common control padding uses 5px–15px.
- Common internal gaps use 10px–15px.
- Pricing cards are separated by 28px.
- The navigation bar uses 13px horizontal padding and 15px vertical padding.

## Radius scale

No radius variables were found.

Observed radii:

- 3px
- 4px
- 6px
- 8px
- 9px
- 45px
- 104px

Usage observations:

- 4px appears on compact analytics controls.
- 8px appears on analytics containers and pricing cards.
- 6px appears on the selected monthly pricing control.
- 9px appears on the featured pricing banner.
- 45px and 104px appear on pill-shaped controls.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Screen-level drop shadow with a 6px value and offset `0 3`.
- Container drop shadows with 1px and 2px values and offset `0 0`.
- Pricing card drop shadows with 1px and 3.3px values and offset `0 0`.
- Navigation bar inner shadow with offset `-1 0`.
- Exact effect color and alpha values are not included as reusable palette tokens.

## Components

_None found in source._

## Screen patterns

### Analytics empty state

- 1440px × 806px white screen.
- Left navigation bar is 62px wide with `#FBFAFA`.
- Main analytics content uses light `#F9FCFC` containers with borders and compact 4px–8px radii.
- “Character Usage” section includes a description, month navigation for “May 2024”, daily/cumulative selection, breakdown selection, and a chart area.
- “API Requests” section includes past-period selection, granularity selection, and a circular action icon.
- “Usage Analytics” header includes account/workspace switching with a pill-shaped control.

### Pricing page

- 1440px × 806px white screen.
- Subscription header includes a monthly/annual segmented control.
- Pricing content is a four-card horizontal comparison with 28px gaps.
- Cards use white surfaces, `#E4E7EB` borders, 8px radii, and drop shadows.
- The featured card has a 31px “Most Popular” banner using `#312B40` and `#FFFFFF`.
- Pricing cards include plan descriptions, character allowances, prices, feature lists with check icons, and subscription buttons.
- Featured actions use `#312B40` with `#FFFFFF` text; secondary actions use light surfaces with muted borders and text.
- A promotional label uses a light green surface in the source, but that color is not part of the allowed palette.

## Notes for implementers

- Treat the listed raw values as observed values, not as a complete token system; the source contains no local variables or named styles.
- Prefer the most-used colors for defaults: `#171A1F` for primary text, `#FFFFFF` for surfaces, `#9095A1` for secondary text, `#F9FCFC` for light controls, and `#565D6D` for supporting content.
- Use ABeeZee Regular as the default text style where no more specific family is required.
- Preserve the compact control geometry: 34px–39px control heights, 4px–8px radii, and 10px–15px internal padding are repeatedly observed.
- Build pricing as a four-column card comparison and analytics as stacked bordered sections with control groups.
- Do not infer missing spacing, radius, motion, effect, grid, or component tokens beyond the observed values above.
