---
name: klaviyo
source: Klaviyo Website UI Kit, SaaS UI Design, UI Kit Example, Website Design Inspiration (Community)
kind: design-system-context
---

# klaviyo - Design System

## Overview

Klaviyo website and SaaS UI reference covering desktop light-mode marketing pages, product pages, pricing, help, enterprise, partners, demo, integrations, customer stories, blog, and support. The extraction contains no local variables, text styles, effect styles, spacing tokens, radius tokens, or component families.

## Design language

- Light-mode layouts use white surfaces with dark charcoal sections.
- Primary accent color is purple: `#8243EA` with pale purple supporting surfaces `#EBD9FF` and `#F2EBFF`.
- Typography combines Inter, Poppins, Kodchasan, and Azeret Mono.
- Large display typography uses Kodchasan Bold, Inter Light, Inter Bold, and Poppins Regular.
- Layouts are desktop-first, with broad full-width sections and centered grid content.
- Observed grid: 16px × 16px, 1 column and 1 row, 0px gutters, centered alignment.

## Color palette

Ranked by raw usage:

| Color | Usage | Role / notes |
|---|---:|---|
| `#000000` | 2227 | Black |
| `#FFFFFF` | 447 | White; token `White-100` |
| `#333333` | 168 | Dark gray |
| `#D9D9D9` | 133 | Neutral gray |
| `#EAECF0` | 85 | Light neutral |
| `#8243EA` | 82 | Purple accent |
| `#232426` | 60 | Dark charcoal section color |
| `#EBD9FF` | 50 | Pale purple |
| `#F2F4F7` | 49 | Light gray surface |
| `#0000000D` | 36 | Black transparency |
| `#1F1F1F1F` | 35 | Dark transparent overlay |
| `#F2EBFF` | 34 | Very light purple |
| `#AFAFAF` | 28 | Mid gray |
| `#BDBDBD` | 25 | Gray |
| `#C4C4C4` | 22 | Light-mid gray |
| `#000000CC` | 40 combined | Black transparency; aliases `Black 8` and `Black-8` |
| `#0000001A` | 6 combined | Black transparency; aliases `Black-10` and `Special / Black 1` |

## Type scale

No local text styles were found. Observed type tokens, ordered from largest to smallest:

- `85.67px` — Kodchasan Bold, 5 uses
- `45.9px` — Inter Light, 7 uses
- `40px` — Inter Bold, 12 uses
- `37.3px` — Inter Light, 4 uses
- `37px` — Inter Regular, 5 uses
- `35.75px` — Poppins Regular, 4 uses
- `34px` — Poppins Regular, 4 uses
- `32.63px` — Kodchasan Bold, 5 uses
- `27.46px` — Poppins Regular, 4 uses
- `26.15px` — Poppins Regular, 4 uses
- `25px` — Poppins Regular, 7 uses
- `24px` — Inter SemiBold, 12 uses
- `22.3px` — Inter Regular, 7 uses
- `18.6px` — Inter Medium, 6 uses
- `18.3px` — Inter Regular, 7 uses
- `18px` — Poppins Regular, 12 uses
- `16.7px` — Inter Medium, 5 uses
- `16.5px` — Inter Regular, 9 uses
- `16.34px` — Poppins Regular, 7 uses
- `16px` — Poppins Regular, 6 uses
- `15.69px` — Poppins Regular, 18 uses
- `15.1px` — Inter Medium, 7 uses
- `14.9px` — Inter Regular, 18 uses
- `14.71px` — Inter Regular and Inter Medium
- `13.99px` — Inter Medium, 5 uses
- `13.8px` — Inter SemiBold, 7 uses
- `13.75px` — Poppins Regular, 14 uses
- `13.2px` — Inter Light, 9 uses
- `13.08px` — Poppins Regular, 25 uses
- `13.02px` — Inter SemiBold, 31 uses
- `13px` — Inter Regular, 34 uses
- `12.93px` — Inter Regular, 8 uses
- `12.42px` — Inter Medium, 5 uses
- `12.1px` — Inter Regular, 6 uses
- `12px` — Poppins Regular, 29 uses
- `11.1px` — Azeret Mono Regular and Inter Regular
- `11px` — Poppins Regular and Poppins SemiBold
- `10.46px` — Poppins Regular, SemiBold, and Bold; Regular has 122 uses
- `9.76px` — Inter SemiBold
- `9.68px` — Inter SemiBold
- `9.6px` — Poppins Regular
- `9.09px` — Inter SemiBold
- `8.68px` — Inter SemiBold
- `6.9px` — Inter SemiBold
- `4.73px` — Inter SemiBold

## Spacing scale

No spacing variables were found.

Observed layout values:

- Grid section: `16px`
- Grid gutter: `0px`
- Common navigation heights: `40px` and `80px`
- Alert bar height: `40px`
- Logo button height: `48px`
- Observed layout gaps include `12px`, `17.24px`, `19.94px`, `21.76px`, `24px`, `27.2px`, `36.26px`, and `42.83px`.

## Radius scale

No radius variables were found.

Observed radii:

- `0px`
- `16.54px`
- `18.13px`
- `32px`
- `89.34px`
- `100px`
- `214.17px`

## Elevation & effects

No local effect styles were found.

Observed effects:

- Layer blur: `725.21px`
- Layer blur: `116.03px`
- Drop shadow offset: `0px` horizontal, `2.15px` vertical
- Drop shadow blur: `97.29px`
- Background pattern opacity: `13%`

## Components

No component families or component geometry were found.

Observed UI structures include navigation bars, alert bars, footer menus, language selectors, outlined links, CTA buttons, logo sections, cards, plugin panels, dividers, and icon containers. These are observed structures rather than extracted component sets.

## Screen patterns

- **Desktop - Light Mode:** Long-form homepage with utility navigation, universal navigation, alert bar, hero, logo section, product and feature sections, social content, CTA blocks, and footer.
- **Pricing:** Desktop marketing page captured as a long full-page layout.
- **Help:** Support/help landing page with long-form content.
- **Enterprise:** Enterprise solution landing page.
- **Community page:** Partner/community landing page.
- **Demo page:** Demo-request conversion page.
- **Product landing page:** Marketing automation product page.
- **Features:** Feature overview page.
- **Intergrations:** Platform integrations page.
- **Case study:** Customer stories page.
- **Blog:** Blog landing page.
- **Support page:** Premium support page.
- **Web to Figma:** Promotional CTA with a rounded purple container and large white Kodchasan Bold type.
- **Chrome extension / Figma Plugin:** Large rounded promotional buttons with white labels and icon areas.
- **Web To Figma Plugin:** Dark promotional hero with oversized Kodchasan Bold headings, white and purple text, blurred purple decorative shapes, and white plugin-preview panels.

## Notes for implementers

- Prefer Inter and Poppins for general interface and marketing copy; use Kodchasan Bold for prominent promotional display text.
- Preserve the strong contrast between `#232426` dark sections and `#FFFFFF` content surfaces.
- Use `#8243EA` as the primary purple accent and `#EBD9FF` / `#F2EBFF` for pale purple areas.
- Treat transparency colors as aliases where duplicated: `#000000CC` corresponds to `Black 8` / `Black-8`; `#0000001A` corresponds to `Black-10` / `Special / Black 1`.
- Do not assume unextracted spacing, radius, component, or motion tokens; use the observed values only.
- Keep desktop page structures section-based, with centered grid content and full-width color bands.
