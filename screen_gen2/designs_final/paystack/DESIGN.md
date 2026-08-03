---
name: paystack-fintech-website-landing-page-community
source: Paystack Fintech Website Landing Page (Community)
kind: design-system-context
---

# paystack - Design System

## Overview

Paystack’s landing-page design uses a navy-and-cyan fintech palette with green conversion accents, white card surfaces, and Roboto typography. The visual language emphasizes trust, business growth, payments, developer tooling, and partner credibility.

No local variables, paint styles, text styles, spacing styles, radius styles, motion tokens, grid styles, or reusable components were found.

## Design language

- **Primary tone:** Professional, trustworthy, technology-focused, and business-oriented.
- **Primary text color:** `#011B33`.
- **Primary action color:** `#3BB75E`, with white button text.
- **Supporting palette:** Cyan and pale blue surfaces, pale green supporting surfaces, and white cards.
- **Typography:** Roboto in Regular, Medium, SemiBold, and ExtraBold weights.
- **Layout character:** Centered containers, large section headings, concise supporting text, feature sections with imagery, logo rows, and card-based trust/partner content.
- **Decorative treatment:** Hero and section backgrounds include decorative imagery and shapes. These are not represented as reusable design tokens.

## Color palette

Ranked by observed usage:

| Color | Usage | Observed role |
|---|---:|---|
| `#011B33` | 1011 | Primary text and dark brand content |
| `#BDDEF4` | 231 | Supporting blue |
| `#FFFFFF` | 207 | Page and card surfaces; button text |
| `#011B33E5` | 171 | Secondary footer text |
| `#DCF6FF` | 105 | Pale cyan surface |
| `#F6FCFF` | 99 | Very pale blue surface |
| `#3BB75E` | 84 | Primary green CTA |
| `#9FFFB3` | 60 | Bright green accent |
| `#F1FEF4` | 39 | Pale green hero surface |
| `#000000` | 27 | Black content |
| `#CBF1D1` | 27 | Pale green support color |
| `#0BA4DB` | 21 | Blue accent and control fill |
| `#3D5E69` | 21 | Muted blue-gray |
| `#00E1FF` | 18 | Bright cyan accent |
| `#051C32` | 18 | Deep navy |
| `#F0F2F3` | 18 | Card border and neutral UI detail |
| `#EAF6FC` | 13 | Pale blue section surface |
| `#CAF1FC` | 12 | Pale cyan support color |

No local color tokens or paint styles were defined.

## Type scale

**Font family:** Roboto

**Observed weights:**

- Regular
- Medium
- SemiBold
- ExtraBold

**Most-used raw styles:**

- Roboto Regular, `16px` — 77 uses
- Roboto Medium, `16px` — 19 uses
- Roboto Regular, `19px` — 17 uses
- Roboto Medium, `18px` — 15 uses
- Roboto Medium, `15px` — 12 uses
- Roboto Regular, `20px` — 12 uses
- Roboto ExtraBold, `14.33px` — 11 uses
- Roboto ExtraBold, `36px` — 11 uses
- Roboto ExtraBold, `17.91px` — 6 uses
- Roboto ExtraBold, `45px` — 6 uses
- Roboto SemiBold, `24px` — 6 uses
- Roboto ExtraBold, `13.93px` — 3 uses
- Roboto ExtraBold, `35px` — 3 uses
- Roboto Regular, `18px` — 3 uses
- Roboto Regular, `13px` — 4 uses

**Observed hierarchy:**

- Large headings: Roboto ExtraBold at `45px`, `36px`, and `35px`
- Section headings: Roboto SemiBold at `24px`
- Supporting and body content: Roboto Regular at `20px`, `19px`, `18px`, `16px`, and `13px`
- Medium labels and controls: Roboto Medium at `18px`, `16px`, and `15px`
- Smaller observed sizes: `14.33px`, `13.93px`, `9.55px`, `7.96px`, `7.56px`, `7.16px`, `6.76px`, `6.37px`, `5.97px`, `5.41px`, `5.26px`, `5.17px`, `3.61px`, `3.01px`, `2.86px`, `2.71px`, `2.41px`, `2.25px`, and `1.95px`

The extraction contains multiple very small raw sizes associated with scaled artwork and text layers. No local typography styles were defined.

## Spacing scale

No spacing variables or spacing tokens were found.

Observed layout values include:

- Section and container dimensions from approximately `180.72px` to `316.84px` wide in the extracted screen.
- Common observed gaps: `0.84px`, `1.38px`, `2.7px`, `2.71px`, `2.86px`, `3.01px`, `3.65px`, `4.21px`, `4.51px`, `6.31px`, `8.24px`, and `12.03px`.
- Observed padding values include `0.75px`, `2.41px`, `3.01px`, `3.61px`, `4.66px`, `4.96px`, `5.79px`, `5.86px`, `5.94px`, `6.42px`, `7.37px`, `8.8px`, `10.22px`, `12.78px`, `13.83px`, `16.84px`, `18.33px`, `23.9px`, `24.05px`, `26.76px`, `27.06px`, `27.36px`, `28.44px`, and `40.28px`.

These are observed layout measurements, not a defined spacing scale.

## Radius scale

No radius variables were found.

Observed corner radii:

- `0.6px` on feature imagery
- `0.75px` on large CTA buttons
- `0.9px` on cards
- `2.63px` on the small blue circular control

## Elevation & effects

No local effect styles were found.

Observed effects include:

- Drop shadow on the outer cover frame.
- Subtle drop shadows on white cards.
- Card borders using `#F0F2F3` at `0.15px`.
- Decorative background imagery with observed opacity values of `6%`, `10%`, and `20%`.

## Components

_None found in source._

No component families or component geometry were extracted.

## Screen patterns

- **Cover / landing-page composition:** A centered Paystack page sits on a pale blue cover background. The page includes a pale green hero, multiple content sections, partner and customer proof, a signup CTA, and a footer.
- **Hero:** Pale green background with decorative animation imagery, a large heading, supporting summary, green CTA, trust statement, partner logos, and a small blue video control.
- **Feature sections:** Alternating image-and-text layouts explain payment collection, APIs, fraud protection, reporting, and related product capabilities.
- **Trust section:** A pale blue section introduces customer trust with white cards containing business-category illustrations or logos.
- **Growth and partner sections:** Centered headings and summaries are followed by rows of decorative business or investor logos.
- **Signup CTA:** A compact section pairs “Try Paystack Now” messaging with a green `#3BB75E` CTA using white Roboto Medium text.
- **Footer:** Multi-column navigation uses navy group headings with secondary footer links in `#011B33E5`.

## Notes for implementers

- Use `#011B33` as the default text color and `#3BB75E` for primary conversion actions.
- Use Roboto; reserve ExtraBold for prominent headings, SemiBold for section-level emphasis, Medium for controls and navigation headings, and Regular for supporting copy.
- Preserve the contrast between pale blue or pale green section surfaces and white cards.
- Keep CTAs compact and green with white labels.
- Use centered containers and concise section headers before feature, logo, or card content.
- Treat extracted sub-10px typography and fractional spacing as raw source measurements from scaled artwork, not as a recommended default UI scale.
- Decorative SVGs, logos, GIFs, PNGs, and background imagery are present in the source but are not reusable component definitions.
