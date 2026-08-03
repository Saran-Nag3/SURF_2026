---
name: databest-mobile-ui-kit-community-community
source: DataBest Mobile UI Kit [Community] (Community)
kind: design-system-context
---

# orange - Design System

## Overview

Mobile UI kit for marketing, business data analysis, onboarding, home, and analytics experiences. The source contains three primary mobile screens: Onboard, Home, and Analyticcs. No local variable collections or component families were found.

## Design language

- Mobile-first layouts use 390px × 844px screens with 30px outer screen radius.
- Visual language combines warm light-gray surfaces, white cards, black typography, orange accents, and lavender analytics highlights.
- Typography is predominantly bold Space Grotesk for headings, labels, and metrics.
- Supporting copy uses Space Grotesk Regular and Inder Regular.
- Cards and controls use rounded corners, with 20px used prominently for larger containers.
- Analytics visualizations use concentric circular metrics, compact legends, and vertical bar charts.
- The mobile grid uses 4 columns, 74.5px section sizing, 20px gutters, and stretch alignment.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 66 | Primary text, icons, and lines |
| `#A9A9A9` | 50 | Secondary text, borders, dividers, and chart labels |
| `#FFFFFF` | 29 | Card surfaces, icon fills, and inverse text |
| `#BAB7B8` | 12 | Large card surfaces and neutral chart bars |
| `#0F0F0F` | 10 | Dark icon strokes |
| `#F46F45` | 8 | Primary orange analytics accent |
| `#E8E0E2` | 6 | Mobile screen background |
| `#F1691C` | 6 | Orange accent |
| `#AAB6E2` | 4 | Lavender analytics accent |
| `#FDB790` | 4 | Light orange analytics accent |

Named token:

- `RED`: `#1E1E1E`

## Type scale

Font families used:

- Space Grotesk
- Inder

| Style | Family | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---|---:|---|
| Big | Space Grotesk | 700 | 45px | auto | 0px | Primary onboarding heading and large metrics |
| Raw heading | Space Grotesk | 700 | 30px | — | — | Large analytics metrics |
| Small | Space Grotesk | 700 | 24px | auto | 0px | Heading style token |
| Raw heading | Space Grotesk | 700 | 26px | — | — | Home feature title |
| Small | Space Grotesk | 700 | 16px | auto | 0px | Labels, buttons, and compact headings |
| Body | Space Grotesk | Regular | 16px | — | — | Supporting copy and labels |
| Body | Inder | Regular | 16px | — | — | Supporting metadata |

Raw usage counts:

- Space Grotesk Regular, 16px: 38 uses
- Space Grotesk Bold, 16px: 20 uses
- Inder Regular, 16px: 8 uses
- Space Grotesk Bold, 30px: 4 uses

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- 7px: compact tag
- 10px: icon tiles and compact controls
- 20px: cards, buttons, analytics controls, and large containers
- 30px: mobile screen frames
- 0px: groups without rounded corners

## Elevation & effects

- Layer Blur: 100px
- A blurred shadow layer is used on the Cover screen.

## Components

_None found in source._

## Screen patterns

### Onboard

- 390px × 844px mobile screen with `#E8E0E2` background and 30px radius.
- Header logo combines the `databest` wordmark with a 32px circular mark.
- Large 45px Space Grotesk Bold onboarding headline.
- Supporting 16px Space Grotesk Regular subtitle.
- Primary CTA is 265px × 58px with 20px radius, white label, and arrow icon.
- Two side-by-side 189px × 236px cards use white surfaces and 20px radius.
- One card presents a `500` metric with overlapping circular avatars and an add icon.
- The second card presents “best new solutions” with concentric circular decoration.

### Home

- 390px × 844px mobile screen with `#E8E0E2` background and 30px radius.
- Featured content card is 358px × 199px with 20px radius.
- Data actions area uses a bordered 358px-wide container with 20px radius.
- Action tiles are white, 49px × 49px, with 10px radius and dark linear icons.
- Email open rate section contains two 60px circular avatars, bold names, metadata, percentages, and dividers.
- Header pairs a profile label and avatar with a hamburger control.

### Analyticcs

- 390px × 844px mobile screen with `#E8E0E2` background and 30px radius.
- Header contains a back arrow, `analytics` label, and hamburger control.
- KPI statistics section includes a “see more” outlined control, concentric metric circles, and a three-item legend.
- Metric circles use `#FDB790`, `#F46F45`, and `#AAB6E2`.
- Sales revenue section includes a “Monthly” outlined control and six vertical bars.
- Bars are 36px wide with 10px radius; the March bar uses `#F46F45`, while the other bars use `#BAB7B8`.
- Summary metrics display 30px Space Grotesk Bold values with 16px supporting labels.

## Notes for implementers

- Use only the documented palette colors; prioritize `#000000`, `#A9A9A9`, and `#FFFFFF` for neutral UI.
- Preserve the 390px × 844px mobile composition and 30px screen radius.
- Use Space Grotesk Bold for prominent headings, metrics, labels, and actions.
- Use Space Grotesk Regular or Inder Regular for supporting text according to the type scale.
- Keep major cards and CTA controls at 20px radius.
- Use 10px radius for compact icon tiles and controls.
- Treat image-filled avatars and content imagery as visual assets rather than color tokens.
- No reusable component families or spacing variables were extracted; implement repeated patterns consistently from the observed screen patterns.
