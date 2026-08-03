---
name: ecommerce-app-ui-community
source: Ecommerce App Ui (Community)
kind: design-system-context
---

# webflow - Design System

## Overview

Mobile-first ecommerce and finance dashboard UI shown primarily at 375×812px. The visual system uses rounded cards, a green-led financial palette, navy headings, compact transaction rows, balance cards, service shortcuts, charts, and persistent mobile status/navigation elements. A 1920×960px cover frame contains ecommerce shoe app imagery.

## Design language

- Friendly, polished mobile banking aesthetic with soft rounded geometry.
- Use green for primary financial emphasis, positive values, balance cards, charts, and large header surfaces.
- Use navy blue for headings, labels, navigation, and chart annotations.
- Use grey for supporting labels and metadata.
- Use red for negative transaction amounts.
- Use orange for secondary balance or spending emphasis.
- Use light green as a recurring surface, border, icon, and decorative accent.
- Use white text on green and orange filled surfaces.
- Use layered circular outlines and low-opacity geometric decoration behind cards and headers.
- Prefer compact vertical layouts with 343px-wide content regions inside 375px screens.

## Color palette

Ranked where source usage counts are available:

| Token / color | Value | Usage |
|---|---:|---:|
| Light Green | `#EDF7F7` | 87 uses |
| Green | Hex value not provided in source | 76 uses |
| White | `#FFFFFF` | 76 uses |
| Orange | Hex value not provided in source | 44 uses |
| Navy Blue | `#2C4363` | 38 uses |
| Grey | `#99A4B1` | 13 uses |
| Light orange | Hex value not provided in source | 5 uses |
| Red | `#DE504F` | 5 uses |
| Transparent | `#00000000` | 46 raw uses |
| Light neutral | `#DADADA` | 15 raw uses |
| Black | `#000000` | 10 raw uses |
| Neutral grey | `#D9D9D9` | 6 raw uses |
| Orange raw color | `#F79E1B` | 4 raw uses |
| Light orange raw color | `#FFB27C` | 4 raw uses |

The source does not provide hex mappings for the named Green, Orange, or Light orange tokens. Do not infer them from the raw-color entries.

## Type scale

Use the following observed typography styles, ranked by usage:

| Size | Family and weight | Usage |
|---:|---|---:|
| 15px | Gilroy Medium | 34 uses |
| 17px | Gilroy SemiBold | 14 uses |
| 13px | Gilroy Medium | 7 uses |
| 12px | Outfit Regular | 6 uses |
| 24px | Gilroy Bold | 5 uses |
| 15px | Gilroy Regular | 5 uses |
| 10px | SF Pro Text Bold | 5 uses |
| 15px | SF Pro Text Semibold | 5 uses |
| 28px | Gilroy Bold | 4 uses |
| 17px | Gilroy Medium | 3 uses |

Observed hierarchy:

- 28px Gilroy Bold: prominent balance and metric values.
- 24px Gilroy Bold: screen titles and card values.
- 17px Gilroy SemiBold: transaction names and section headings.
- 17px Gilroy Medium: secondary prominent labels.
- 15px Gilroy Medium or Gilroy Regular: body labels, metadata, and greetings.
- 15px SF Pro Text Semibold: mobile status-bar time.
- 13px Gilroy Medium: compact metadata.
- 12px Outfit Regular: chart axis labels.
- 10px SF Pro Text Bold: status-bar percentage.

## Spacing scale

No spacing variables were found in the source.

Observed layout values:

- Main mobile content width: 343px within a 375px viewport.
- Common transaction row height: 75px.
- Common transaction icon region: 59×55px.
- Common vertical frame gap: 6px.
- Status bar height: 44px.
- Bottom navigation/home-indicator region: 89px.
- Home indicator: 134×5px.
- Explicit frame padding values: 0px on all sides where extracted.

## Radius scale

Observed radius values:

- 8px: small icon or tile surfaces.
- 16px: transaction rows, compact controls, and outlined fields.
- 24px: balance cards, chart cards, large surfaces, and lower header corners.
- 32px: primary balance-card layer.
- 100px: home indicator.
- 0px: square or grouped containers.
- Mixed lower-corner radius: `0/0/24/24px`.
- Mixed masked-image radius: `0/24/24/0px`.

## Elevation & effects

- No local effect styles or elevation tokens were found.
- Use 1px strokes for light-green outlined transaction cards and decorative circles.
- Use 1px green strokes for chart/card outlines where shown.
- Notification and search icon strokes use 1.5px.
- Battery outline uses a 4px radius.
- Decorative opacity values observed: 8%, 10%, 15%, 20%, and 50%.
- Semi-transparent green layers are used behind cards and chart bars.
- Transparent icon containers use `#00000000`.
- No shadows or blur values were extracted.

## Components

_None found in source._

## Screen patterns

- **Cover / ecommerce shoe App:** 1920×960px presentation frame with a white base and multiple full-frame ecommerce shoe app image panels.
- **Home:** 375×812px dashboard with a green rounded header, greeting, notification and search controls, available-balance card, overlapping current-balance cards, service shortcuts, and transaction content.
- **Statistics:** 375×812px analytics screen with green header, title, weekly bar chart, earnings and spending metric cards, an expenses selector, and transaction history.
- **History:** 375×812px transaction list with repeated 343×75px outlined rows, 59×55px light-green icon tiles, sender/service names, transfer metadata, positive green amounts, and negative red amounts.
- Shared mobile chrome includes a 44px white status bar and an 89px bottom navigation/home-indicator region.
- Shared header treatment uses a 375×117px green surface with 24px lower corner radii.

## Notes for implementers

- Treat the source as a visual reference rather than a complete token library: no local variables, text styles, spacing variables, radius variables, motion tokens, effect styles, grid styles, or components were defined.
- Preserve the 375×812px mobile canvas and 343px inner content width when reproducing the primary screens.
- Use the supplied named color tokens only where their hex values are provided. Green, Orange, and Light orange have no explicit token hex mapping in the source.
- Keep transaction rows consistent: 343×75px outer surface, 16px radius, 1px light-green stroke, and 59×55px light-green icon tile with an 8px radius.
- Use positive amounts in green and negative amounts in red.
- Use Gilroy for the primary application interface, Outfit for chart axis labels, and SF Pro Text for status-bar elements.
- Do not add shadows, gradients, motion, or component variants not represented in the extraction.
