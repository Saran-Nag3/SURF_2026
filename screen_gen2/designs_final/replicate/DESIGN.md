---
name: piggyvest-replicate-web-and-mobile-design-community
source: PiggyVest Replicate Web and Mobile Design (Community)
kind: design-system-context
---

# replicate - Design System

## Overview

PiggyVest savings and investment product design spanning desktop and mobile screens.

- Desktop canvas: 1440 × 5322px.
- Mobile canvas: 428 × 5978px.
- Additional section labels: “Web” and “Mobile”, using black backgrounds with white text.
- Brand structure uses dark navy headings, muted gray body copy, bright blue actions, and colored savings-category accents.
- No local variables, component families, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Use large, high-contrast U8 headings for marketing statements and section titles.
- Use DM Sans for descriptive copy, labels, buttons, and supporting content.
- Use dark navy for primary headings and primary actions.
- Use muted gray for explanatory text.
- Use compact cards with pale neutral backgrounds and colored icon treatments for savings products.
- Use rounded corners throughout buttons, cards, store badges, and device mockups.
- Use generous vertical section spacing on desktop and stacked content on mobile.
- Decorative product illustrations and device mockups support the financial-product narrative.

## Color palette

Ranked by raw usage where counts were available:

| Color | Usage | Role |
|---|---:|---|
| `#464F59` | 66 | Primary body copy and supporting text |
| `#000000` | 24 | Dark labels, social icons, and icon artwork |
| `#0C1825` | 23 | Main brand color; headings and primary buttons |
| `#F6EEFD` | 22 | Pale purple surface/accent |
| `#00000000` | 17 | Transparent icon or overlay background |
| `#F9F9F9` | 16 | Savings-product card background |
| `#FFFFFF` | 10 | Page background, button text, and light surfaces |
| `#BBBBBB` | 9 | Store-badge borders |
| `#287AF2` | 8 | Blue links and investment actions |
| `#DFDFDF` | 8 | Progress tracks and neutral icon surfaces |
| `#DADADA` | 7 | Neutral decorative elements |
| `#0D60D8` | 6 | Blue promotional section background |
| `#003399` | 4 | Blue savings-card icons |
| `#00D3FF` | 4 | Cyan accent |
| `#00EE76` | 4 | Green accent |
| `#61B3FE` | 4 | Light-blue savings-card accents |
| `#B3B0B0` | 4 | Neutral gray accent |
| `#D9D9D9` | 4 | Neutral gray surface |
| `#E0EFFF` | 4 | Pale blue savings-card surface |
| `#E3F5FF` | 4 | Pale cyan savings-card surface |
| `#E4FFF1` | 4 | Pale green savings-card surface |
| `#E5288E` | 4 | Pink savings-card accent |
| `#F43249` | 4 | Red accent |
| `#FDE7F5` | 4 | Pale pink savings-card surface |
| `#FFD900` | 4 | Yellow accent |

Named color tokens:

- `Label Color/Light/Primary`: `#000000`
- `Label Color/Dark/Primary`: `#FFFFFF`
- `System Background/Dark Elevated/Primary`: `#1C1C1E`
- `Main`: `#0C1825`
- `White`: `#FFFFFF`
- `Part colors (Blue)`: `#C1E1FB`

## Type scale

Font families and styles found:

- U8 Bold, `70px` — desktop hero heading.
- U8 Bold, `50px` — desktop section headings; 6 uses at `50px`.
- U8 Bold, `35px` — mobile promotional heading.
- U8 Bold, `40px` — mobile hero heading.
- U8 Bold, `25px` — mobile section headings; 4 uses at `25px`.
- U8 Regular, `25px` — 4 uses.
- U8 Regular, `20px` — 3 uses.
- U8 Regular, `17.13px` — card titles; 4 uses.
- U8 Regular, `15px` — 3 uses.
- DM Sans Regular, `18px` — desktop body copy; 21 uses.
- DM Sans Regular, `15px` — 12 uses.
- DM Sans Regular, `13px` — mobile body copy; 14 uses.
- DM Sans Regular, `12px` — 13 uses.
- DM Sans Regular, `10.28px` — compact card descriptions; 8 uses.
- DM Sans Medium, `15px` — 7 uses.
- DM Sans Medium, `14px` — investment return badge.
- DM Sans Medium, `13px` — 3 uses.
- DM Sans Medium, `12.8px` — desktop decorative card label.
- DM Sans Medium, `10.71px` — desktop decorative card label.
- DM Sans Bold, `15px` — desktop button labels; 4 uses.
- DM Sans Bold, `11.92px` — mobile button label.
- DM Sans Bold, `9.75px` — compact mobile button label.
- DM Sans Regular, `10.78px` — mobile iPhone badge label.
- DM Sans Regular, `10.03px` — mobile Android badge label.
- SF Pro Text Semibold, weight `600`, `17px / 22px`, tracking `-0.41px` — body/bold token.
- Inter Regular, `60px` — “Web” and “Mobile” section labels.

Typography hierarchy:

1. U8 Bold hero and major section headings.
2. U8 Regular savings-product card titles.
3. DM Sans Regular supporting copy and descriptions.
4. DM Sans Medium labels, links, and badges.
5. DM Sans Bold primary action labels.

## Spacing scale

_None found in source._

Observed layout values:

- Desktop primary button padding: `10px 14px 10px 10px`, gap `10px`.
- Mobile primary button padding: `7.94px 11.12px 7.94px 7.94px`, gap `7.94px`.
- Compact mobile primary button padding: `6.5px 9.1px 6.5px 6.5px`, gap `6.5px`.
- Investment badge padding: `9px 19px`, gap `10px`.
- Social icon group gap: `11px`.

## Radius scale

Observed corner radii:

- `4.3px`
- `5.13px`
- `6.5px`
- `7.14px`
- `7.94px`
- `8.02px`
- `8.53px`
- `8.63px`
- `10px`
- `12px`
- `12.04px`
- `13.71px`
- `20px`
- `20px` pill radius on the investment-return badge.

## Elevation & effects

- Decorative floating cards use drop shadows.
- Desktop decorative card shadow geometry: `14.29px` blur, offset `2.14px 2.86px`.
- Larger desktop decorative card shadow geometry: `17.06px` blur, offset `2.56px 3.41px`.
- Mobile decorative card shadow geometry: `8.6px` blur, offset `1.29px 1.72px`.
- Larger mobile decorative card shadow geometry: `10.27px` blur, offset `1.54px 2.05px`.
- Device mockups use dark strokes: desktop `3px`; mobile `1.81px`.
- No reusable elevation tokens were defined.

## Components

_None found in source._

## Screen patterns

- **Desktop landing page:** A wide, vertically structured marketing page with social icons, hero heading, supporting copy, primary account-creation actions, app-store badges, device/product artwork, security messaging, savings-product cards, investment messaging, and promotional sections.
- **Mobile landing page:** A single-column adaptation with a `428px` canvas, smaller U8 headings, compact action buttons, compact app-store badges, stacked savings cards, and vertically arranged investment and promotional content.
- **Savings product cards:** Four pale neutral cards sized `278.22 × 270px`, with `13.71px` radius. Each combines a U8 Regular title, DM Sans description, product label, colored icon surface, and circular arrow action.
- **Primary action buttons:** Dark navy fill, white DM Sans Bold label, and rounded corners. Desktop examples include `180 × 57px` and `142 × 55px`; mobile examples include `143 × 42px` and `117 × 34.36px`.
- **App-store badges:** White outlined badges with `#BBBBBB` stroke, rounded corners, platform icon, and DM Sans Regular label. Desktop sizes are `153 × 51px` for iPhone and `160 × 51px` for Android. Mobile badges are approximately `110 × 32px`.
- **Investment return badge:** Pale purple rounded badge, `160 × 36px`, with “Up to 25% Returns” in DM Sans Medium at `14px`.
- **Device/product mockups:** Desktop mockup framing includes a `413 × 658px` outlined device area; mobile framing includes a `248.56 × 396.01px` outlined device area, with floating savings indicators and decorative artwork.
- **Section labels:** Black frames sized `291 × 93px` and `354 × 93px`, with white Inter Regular `60px` labels “Web” and “Mobile”.

## Notes for implementers

- Preserve the contrast hierarchy: `#0C1825` for headings and primary actions, `#464F59` for body copy, and `#FFFFFF` for light text on dark surfaces.
- Use U8 Bold for marketing headlines and U8 Regular for savings-card titles.
- Use DM Sans for nearly all interface copy, labels, links, descriptions, and actions.
- Keep savings cards visually consistent: `#F9F9F9` surface, `13.71px` radius, dark title, muted description, and one colored product accent.
- Use the four demonstrated savings accents: blue with `#E0EFFF` and `#003399`, light blue with `#E3F5FF` and `#61B3FE`, green with `#E4FFF1`, and pink with `#FDE7F5` and `#E5288E`.
- Do not introduce additional component families or unlisted design tokens.
- Scale desktop layouts into stacked mobile sections rather than reproducing desktop proportions directly.
- Keep store badges outlined and white; keep primary conversion buttons filled with `#0C1825`.
- Decorative artwork and imagery are important to the visual identity, but no reusable asset specifications were extracted.
