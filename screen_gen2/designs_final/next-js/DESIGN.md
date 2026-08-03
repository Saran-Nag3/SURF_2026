---
name: mini-projeto-siga-seu-atleta-app-next-js-fullstack-community
source: "[Mini projeto] Siga seu atleta - App Next.js fullstack (Community)"
kind: design-system-context
---

# next-js - Design System

## Overview

- Product: “Siga seu atleta”, a Portuguese athlete-discovery interface.
- Primary application screen: desktop athlete listing with search, category, sport, and sort controls.
- Supporting screens: presentation cover and component style guide.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- High-contrast editorial sports directory.
- Use black typography and borders against an off-white `#F9F9EB` application canvas.
- Use white controls and cards with solid black `2px` borders.
- Use dark charcoal presentation backgrounds: `#1F2937` or `#374151`.
- Use blue `#2563EB` for links and Instagram actions.
- Typography is primarily Darker Grotesque, with Inter used on presentation and cover content.
- Layouts use fixed desktop dimensions, strong rectangular outlines, and compact horizontal filter controls.
- Portuguese interface labels include “Pesquisar”, “Todos”, “Olímpicos”, “Paralímpicos”, “Todos os esportes”, “Seguidores”, and “Ver no instagram”.

## Color palette

Ranked by reported raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 358 | Primary text, borders, icons, dark controls |
| `#2563EB` | 114 | Links and Instagram action |
| `#6E7375` | 90 | Secondary text and muted labels |
| `#FFFFFF` | 85 | Cards, inputs, selects, and light surfaces |
| `#D9D9D9` | 39 | Neutral surface |
| `#E0E0E0` | 38 | Dividers and card footer stroke |
| `#5282FF` | 7 | Presentation call-to-action background |
| `#F9F9EB` | 7 | Main application desktop canvas |
| `#F59E0B` | 6 | Accent color |
| `#384046` | 5 | Sort label text |
| `#E9E9E9` | 5 | Active category toggle background |
| `#D1D5DB` | 4 | Neutral UI color |

Named color tokens:

- `gray/800`: `#1F2937`
- `gray/700`: `#374151`
- `gray/400`: `#9CA3AF`
- `gray/50`: `#F9FAFB`

## Type scale

Observed type styles:

| Size | Font | Weight | Reported usage |
|---:|---|---|---:|
| 16px | Darker Grotesque | Medium | 76 |
| 24px | Darker Grotesque | SemiBold | 43 |
| 16px | Darker Grotesque | Regular | 41 |
| 20px | Darker Grotesque | Bold | 38 |
| 24px | Darker Grotesque | Bold | 38 |
| 20px | Darker Grotesque | Regular | 18 |
| 20px | Darker Grotesque | Medium | 10 |
| 20px | Darker Grotesque | SemiBold | 10 |
| 9.5px | Inter | Light | 4 |
| 10.5px | Inter | Regular | 4 |
| 33.06px | Inter | Regular | 3 |

Additional observed presentation typography:

- Inter Regular, `30px`.
- Inter Medium, `48px`.
- Lexend Regular, `36px`.

Usage guidance:

- Athlete names: Darker Grotesque Bold, `24px`.
- Athlete metadata and descriptions: Darker Grotesque Regular or Medium, `16px`.
- Athlete follower counts: Darker Grotesque SemiBold, `24px`.
- Filter labels and values: Darker Grotesque Regular, Medium, or SemiBold, `20px`.
- Athlete handles: Darker Grotesque Bold, `20px`.
- Presentation headings: Inter Medium, `48px`; presentation supporting text: Inter Regular, `33.06px` or `30px`.

## Spacing scale

Observed spacing and padding values:

- `0px`
- `4px`
- `8px`
- `10px`
- `12px`
- `16px`
- `20px`
- `32px`
- `36px`
- `40px`
- `56px`

Observed layout applications:

- Filter group gap: `32px`.
- Filter bar gap: `40px`.
- Athlete list row gap: `36px`.
- Athlete card internal gap: `16px`.
- Search and sports control padding: `12px`.
- Athlete card content padding: `16px`.
- Main desktop frame padding: `16px 20px 16px 20px`.
- Presentation button radius and spacing are distinct from application controls.

## Radius scale

Observed corner radii:

- `31px`: presentation call-to-action button.
- `50px`: presentation and cover outer frames.
- No shared radius tokens were found for application components.

## Elevation & effects

- Presentation call-to-action button has a drop shadow with offset `0px 4px`.
- Athlete cards, search inputs, sports select, category toggles, and sort controls use solid `2px` black strokes.
- Athlete card footer uses a `1px` `#E0E0E0` stroke.
- No reusable local effect styles were found.

## Components

Only these component families are available:

### AthleteCard

- Size: `348px × 282px`.
- Layout: vertical.
- Gap: `16px`.
- Padding: `0px`.
- Alignment: space-between/min.
- Sizing: fixed width and fixed height.
- Fill: `#FFFFFF`.
- Stroke: `#000000`, `2px`.
- Content structure:
  - Top content area: `348px × 219px`, with `16px` padding and `16px` gap.
  - Header area: `316px × 64px`, horizontal, `10px` gap, space-between/baseline.
  - Description area: `316px × 108px`, with `10px` horizontal padding.
  - Footer: `348px × 59px`, with `16px` horizontal padding and a `1px` `#E0E0E0` stroke.
- Typical typography:
  - Athlete name: Darker Grotesque Bold, `24px`.
  - Sport and biography: Darker Grotesque Medium or Regular, `16px`.
  - Follower count: Darker Grotesque SemiBold, `24px`.
  - Handle: Darker Grotesque Bold, `20px`.
  - Instagram action: Darker Grotesque Medium, `16px`, `#2563EB`.

### CategorySelect

- Size: `298px × 40px`.
- Layout: horizontal.
- Gap: `8px`.
- Padding: `0px`.
- Alignment: min/center.
- Sizing: fixed width and fixed height.
- Contains three `40px`-high toggle buttons:
  - “Todos”: `69px` wide, `12px` padding, `#E9E9E9` fill, `#000000` `2px` stroke, Darker Grotesque SemiBold `20px`.
  - “Olímpicos”: `96px` wide, `12px` padding, `#FFFFFF` fill, `#000000` `2px` stroke, Darker Grotesque Medium `20px`.
  - “Paralímpicos”: `117px` wide, `12px` padding, `#FFFFFF` fill, `#000000` `2px` stroke, Darker Grotesque Medium `20px`.

### SearchInput

- Size: `224px × 40px`.
- Layout: horizontal.
- Padding: `12px`.
- Gap: `10px`.
- Alignment: min/center.
- Sizing: fixed width and fixed height.
- Fill: `#FFFFFF`.
- Stroke: `#000000`, `2px`.
- Placeholder: “Pesquisar”.
- Placeholder typography: Darker Grotesque Regular, `20px`, `#6E7375`.
- Includes a `16px × 16px` search icon.

### SortBy

- Size: `179px × 40px`.
- Layout: horizontal.
- Gap: `8px`.
- Padding: `0px`.
- Alignment: min/center.
- Sizing: fixed width and fixed height.
- Contains:
  - Sort field: `131px × 40px`, `12px` padding, `#FFFFFF` fill, `#000000` `2px` stroke.
  - Direction control: `40px × 40px`, `12px` padding, `#000000` fill, `#000000` `2px` stroke, white icon.
- Sort label: “Seguidores”, Darker Grotesque Regular, `20px`, `#384046`.
- Sort indicator uses `#6E7375` with a `2px` stroke.

### SportsSelect

- Size: `161px × 40px`.
- Layout: horizontal.
- Padding: `12px`.
- Gap: `10px`.
- Alignment: min/center.
- Sizing: fixed width and fixed height.
- Fill: `#FFFFFF`.
- Stroke: `#000000`, `2px`.
- Default label: “Todos os esportes”.
- Label typography: Darker Grotesque SemiBold, `20px`.

## Screen patterns

### Capa / Apresentação

- Canvas: `1920px × 1080px`.
- Background: `#1F2937`.
- Outer frame radius: `50px`.
- Includes a presentation title, description, decorative logo, creator credit, and a “Ver Mini Projetos” call-to-action.
- Call-to-action size: `444px × 95px`.
- Call-to-action fill: `#5282FF`.
- Call-to-action radius: `31px`.
- Call-to-action label: Lexend Regular, `36px`, `#FFFFFF`.

### Capa

- Canvas: `1920px × 1080px`, dark background.
- Centered desktop application frame: `1540px × 1024px`.
- Application frame fill: `#F9F9EB`.
- Application frame padding: `16px 20px 16px 20px`.
- Vertical frame gap: `56px`.
- Header width: `1500px`.
- Header contains the “Siga seu atleta” logo and “Sobre”.
- Filter bar width: `1500px`, height `40px`.
- Filter bar uses a `40px` gap between its filter group and sort control.
- Filter group gap: `32px`.
- Athlete list width: `1500px`.
- Athlete list rows are `282px` high with `36px` vertical gaps.
- Cards are arranged in repeated rows of `348px × 282px` AthleteCard instances.

### Guia de estilos / Componentes

- Dark charcoal section using `#1F2937`.
- Displays the component families as isolated examples.
- The AthleteCard example demonstrates athlete identity, sport, follower count, achievement description, handle, and Instagram action.
- Filter examples show the CategorySelect, SearchInput, SportsSelect, and SortBy states and dimensions.

## Notes for implementers

- Use only the listed component families: AthleteCard, CategorySelect, SearchInput, SortBy, and SportsSelect.
- Preserve the fixed dimensions specified for each component at the desktop layout size.
- Treat `#000000` as the primary border color and use `2px` borders on controls and cards.
- Use `#E9E9E9` only for the active “Todos” category toggle shown in the source.
- Use `#2563EB` for Instagram links and related action affordances.
- Keep secondary athlete information in `#6E7375`.
- Do not introduce local design tokens that were not found in the source.
- No responsive behavior, interaction states beyond the shown active toggle and sort direction, or motion rules were specified.
