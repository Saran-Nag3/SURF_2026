---
name: perplexity-ul-screens-community
source: perplexity Ul Screens (Community) / UIKit
kind: design-system-context
---

# perplexity - Design System

## Overview

- Source page: UIKit.
- No local variable collections, paint styles, text styles, spacing variables, radius variables, motion tokens, grid styles, or effect styles were found.
- The extraction is primarily composed of unstyled layers and showcase screens.
- No component sets or component geometry were extracted.

## Design language

- Typography is predominantly Inter Regular across 13–25px, with the highest usage at 20px, 19px, and 18px.
- Manrope is used selectively for emphasized introductory content, including SemiBold 24px.
- Layouts use generous outer padding and large vertical gaps, especially in the Intro and generation showcase screens.
- Content is presented through large, high-contrast showcase areas with simple section headings and grouped examples.
- The source does not establish a canonical design-token system; treat observed values as screen-specific unless explicitly listed as recurring tokens.

## Color palette

Raw unstyled colors, ranked by usage:

| Color | Uses |
|---|---:|
| `#000000` | 28 |
| `#FEFEFE` | 24 |
| `#FBFBF8` | 12 |
| `#FFFFFF` | 10 |
| `#505050` | 9 |
| `#4D4D4D` | 8 |
| `#51524D` | 8 |
| `#000403` | 7 |
| `#4B4C47` | 6 |
| `#F2F3EE` | 6 |
| `#F7F7F7` | 6 |

- No semantic color names or local color tokens were defined.
- Prefer the listed near-neutral colors for backgrounds, surfaces, text, and supporting UI.
- Do not introduce colors outside this palette.

## Type scale

Observed typography:

| Size | Family | Weight/style | Uses |
|---:|---|---|---:|
| 20px | Inter | Regular | 208 |
| 19px | Inter | Regular | 198 |
| 18px | Inter | Regular | 130 |
| 16px | Inter | Regular | 127 |
| 21px | Inter | Regular | 119 |
| 17px | Inter | Regular | 84 |
| 15px | Inter | Regular | 76 |
| 22px | Inter | Regular | 29 |
| 24px | Inter | Regular | 18 |
| 14px | Inter | Regular | 17 |
| 23px | Inter | Regular | 16 |
| 25px | Inter | Regular | 11 |
| 13px | Inter | Regular | 6 |
| 24px | Manrope | SemiBold | 6 |

Additional screen-specific typography:

- Intro title: Manrope ExtraBold, 50px.
- Intro section headings: Manrope ExtraBold, 40px.
- Intro supporting text: Manrope SemiBold, 24px.
- Intro call-to-action label: Manrope Bold, 30px.
- Showcase screen titles: Inter Medium, 80px.
- Generated design heading: Inter Regular, 40px.
- Small component labels: Inter Regular, 14px.

No local text styles were defined. Preserve the listed family and weight combinations when matching the source screens.

## Spacing scale

No spacing tokens were defined. Observed layout spacing and padding values:

`0px`, `10px`, `14px`, `20px`, `24px`, `31px`, `40px`, `66px`, `80px`, `84px`, `88px`, `120px`, `160px`.

Notable screen layouts:

- Intro outer padding: 160px on all sides.
- Intro section gap: 88px.
- Intro content gaps: 24px and 14px.
- Intro call-to-action padding: 31px and 66px.
- Before/after generation outer padding: 160px on all sides.
- Before/after generation section gap: 120px.
- Generated content group gaps: 80px.
- Component example padding and internal gap: 84px.

These are observed geometry values, not confirmed global spacing tokens.

## Radius scale

No radius variables were defined. Observed radii:

- `1px`
- `16px`
- `297px`

Use the 16px radius for the observed Intro call-to-action treatment. The 297px radius appears on a showcase composition and should not be generalized without matching that artwork.

## Elevation & effects

- No local effect styles or elevation tokens were found.
- No shadows were specified in the extraction.
- Image fills are present in the showcase screens.
- Use flat surfaces unless a source screen explicitly requires an image or other extracted artwork.

## Components

_None found in source._

- No component families or component geometry were extracted.
- Named showcase frames such as `BASIC_COMPONENT`, `FEATURE_COMPONENTS`, and `RESOURCE` are screen content labels, not verified reusable component definitions.
- Do not infer variants, states, APIs, or component behavior from these frame names alone.

## Screen patterns

- **Intro:** A 1333×3788px vertical presentation with 160px outer padding and an 88px section gap. It contains a branded title row, explanatory sections, capability bullets, and a prominent call-to-action.
- **Before generation (Image):** A 7040×3788px showcase canvas with 160px outer padding, a large 80px screen title, and a wide image/example region.
- **After generation (Figma design):** A 15220×3788px showcase canvas with 160px outer padding, a large 80px screen title, a generated-design area, and a generated UI components area.
- **Generated design area:** Uses a heading row followed by multiple 1921×1200px document examples arranged with 80px gaps.
- **Generated UI components area:** Groups basic, feature, and resource examples into labeled containers. Example surfaces use 84px padding and 84px internal gaps, with 14px labels.

## Notes for implementers

- Treat this extraction as an observational reference rather than a complete design system; local tokens are absent.
- Use Inter as the default typeface and apply Manrope only where the screen-specific typography calls for it.
- Prioritize the most-used type sizes: 20px, 19px, 18px, 16px, and 21px.
- Use only the documented color palette: `#000000`, `#000403`, `#4B4C47`, `#4D4D4D`, `#505050`, `#51524D`, `#F2F3EE`, `#F7F7F7`, `#FBFBF8`, `#FEFEFE`, and `#FFFFFF`.
- Preserve the generous 160px showcase margins and 80–120px inter-group spacing when recreating the presentation screens.
- Do not create reusable components or token names that were not extracted.
