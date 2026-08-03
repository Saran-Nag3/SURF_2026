---
name: social-ui-boot-page-illustrator-design-community
source: Social UI Boot Page Illustrator Design (Community)
kind: design-system-context
---

# illustrator - Design System

## Overview

Illustration-focused UI extracted from the Figma page `thumb all illustrations 🚀`.

- Mobile onboarding screens: three 375 × 751px screens with illustration imagery, centered “More Attractive” messaging, skip action, and supporting copy.
- Plugin promotion panel: 550 × 968px composition with a bordered white card, logo, Chinese headline and body copy, statistics, and a three-step installation flow.
- Supporting promotional compositions: 834 × 350px text-led panels, a 210 × 50px row of circular visual elements, and a 479 × 89px rounded rectangle.
- No local variables, styles, components, or component sets were found.

## Design language

- Illustration-led and editorial, combining large expressive artwork with concise instructional messaging.
- Strong contrast between white surfaces, dark typography, blue action states, and occasional pink framing.
- Mobile onboarding uses large condensed display typography and centered composition.
- Promotional/plugin layouts use bold black headlines, compact supporting copy, and large numeric metrics.
- Chinese and English content coexist in the same system.
- Decorative illustration groups are prominent and should remain visually dominant rather than being treated as UI controls.

## Color palette

Raw unstyled colors, ranked by usage:

| Color | Usage | Role |
|---|---:|---|
| `#3D3D3C` | 115 | Most-used dark neutral; illustration and interface content |
| `#FFFFFF` | 72 | Primary surface and inverted text |
| `#000000` | 48 | Promotional and plugin typography |
| `#F5F6F7` | 35 | Light neutral surface |
| `#4F4F5B` | 34 | Secondary dark neutral and onboarding content |
| `#CFCFD0` | 22 | Neutral supporting color |
| `#3782FF` | 10 | Bright blue onboarding background and action state |
| `#05111D` | 9 | Dark metric and label text |
| `#E7E7E7` | 6 | Light logo and supporting surfaces |
| `#DE6272` | 5 | Pink card border/accent |
| `#2C2E34` | 4 | Dark skip control and icon content |
| `#666666` | 4 | Secondary icon/detail color |
| `#ECEDEE` | 4 | Cover background |
| `#2369EF` | 3 | Secondary blue accent |

No local paint styles or color variables were found. Use the listed colors directly; do not introduce additional colors.

## Type scale

No local text styles were found. Raw text styles:

| Size | Family / weight | Observed use |
|---:|---|---|
| 41.03px | Roboto CondensedSemiBold | Mobile onboarding heading |
| 40px | Roboto Bold | Plugin statistics |
| 32px | Roboto Black | Plugin headline and promotional headline |
| 32px | Roboto Bold | Additional large heading |
| 26px | Roboto Black | “Install the nail Illustration Plugin” heading |
| 24px | Roboto Bold | Promotional heading |
| 21px | PingFang HK Medium | Chinese promotional copy |
| 19.15px | Roboto CondensedSemiBold | Mobile “skip” control |
| 16px | Roboto Medium | Plugin instruction labels |
| 16px | Roboto Regular | Plugin supporting copy |
| 14px | PingFang HK Semibold | Chinese metric labels |
| 10.94px | Roboto Regular | Mobile supporting copy |

Guidance:

- Use Roboto CondensedSemiBold at 41.03px for the primary mobile onboarding statement.
- Use Roboto Black at 32px for prominent plugin or promotional headlines.
- Use Roboto Bold at 40px for large statistics.
- Use Roboto Medium at 16px for instructional labels.
- Supporting mobile copy uses Roboto Regular at 10.94px with 70% opacity.
- Plugin body copy uses Roboto Regular at 16px with 80% opacity.
- Chinese labels use PingFang HK Semibold at 14px; Chinese promotional copy uses PingFang HK Medium at 21px.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- `22px`: logo mask.
- `33px`: statistics panel and promotional rectangle.
- `36px`: outer plugin card.
- `0px`: multiple decorative groups and square containers.

No radius variables were found.

## Elevation & effects

- Three 50 × 50px circular visual elements use drop shadows with `33px` shadow size and offset `0 8px`.
- No local effect styles were found.
- The plugin card uses an `11px` border.
- Preserve the layered, floating appearance of the circular visual elements without adding new shadow tokens.

## Components

_None found in source._

No component families, component sets, or component geometry were extracted. Reusable patterns are inferred from screen compositions only and should not be treated as formally defined components.

## Screen patterns

### Mobile onboarding

- Canvas: `375 × 751px`.
- Three screens share the same basic composition.
- Screen 1 uses a white base with dark gray illustration masking and white heading text.
- Screen 2 uses a `#3782FF` base with white heading text.
- Screen 3 uses a white base with `#4F4F5B` heading text and a `#3782FF` action rectangle.
- Primary heading: “More Attractive”, Roboto CondensedSemiBold, `41.03px`.
- Skip control: approximately `154.54 × 45.13px` rectangle with a `45 × 27px` inner frame and `19.15px` condensed semibold text.
- Supporting copy is positioned near the lower content area and uses `10.94px` Roboto Regular.

### Plugin promotion card

- Canvas: `550 × 968px`.
- White card with `36px` corner radius and an `11px` pink border.
- Logo area: approximately `77 × 77px`, with `22px` corner radius.
- Centered Chinese headline uses Roboto Black at `32px`.
- Supporting Chinese copy uses Roboto Regular at `16px` with 80% opacity.
- Statistics panel: `441 × 206px`, `33px` radius.
- Statistics use Roboto Bold at `40px`; labels use PingFang HK Semibold at `14px`.
- Three instructional blocks pair a small icon with Roboto Medium at `16px` labels.
- Carousel/navigation indicators use `#666666`, including a partially transparent state.

### Promotional text panel

- Canvas: `834 × 350px`.
- Decorative illustration group occupies the background.
- Text variants include Roboto Black at `32px`, Roboto Black at `24px`, and PingFang HK Medium at `21px`.
- Text is centered within the composition.

### Floating visual row

- Canvas: `210 × 50px`.
- Contains three 50 × 50px circular visual elements.
- Use layered drop shadows and tight horizontal grouping.

## Notes for implementers

- Treat illustration imagery as a primary visual asset; image fills are present in the source but their image data is not available in this extraction.
- Preserve the mobile canvas size of `375 × 751px` when reproducing onboarding screens.
- Keep onboarding content centered and maintain the contrast relationship between the background, heading, skip control, and supporting copy.
- Use only the documented palette. Do not substitute unlisted colors for borders, shadows, or image treatments.
- Maintain the observed opacity values: 70% for mobile supporting copy and 80% for plugin supporting copy.
- Do not infer a spacing system from the node geometry; no spacing tokens were extracted.
- Decorative groups contain many vector shapes and should not be simplified into generic placeholder components when the source artwork is available.
