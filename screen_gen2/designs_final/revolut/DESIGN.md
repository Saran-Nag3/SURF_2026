---
name: revolut-editable-website-community
source: Revolut Editable website (Community)
kind: design-system-context
---

# revolut - Design System

## Overview

A Revolut website exploration containing:
- Welcome / instructional and promotional slides.
- Revolut website / desktop light-mode website composition.
- A large desktop website screen with navigation, main content, footer, cards, links, and legal copy.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion tokens, grids, or component sets were found.

## Design language

- Clean, spacious editorial layouts with large centered headings and generous vertical gaps.
- Purple accenting appears in top bars, promotional surfaces, branding marks, and highlighted labels.
- Website content uses white surfaces, dark charcoal text, muted gray supporting text, and rounded cards.
- Typography combines Inter for website content and large headlines with Helvetica for compact legal and utility copy; Lato is used in branded promotional content.
- Promotional compositions use oversized typography, rounded containers, image thumbnails, decorative shapes, and layered blur/shadow treatments.
- Desktop website content is organized around a centered 1000px content region within a 1425px screen.

## Color palette

Ranked by usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| #191C1F | 260 | Primary dark text and footer background |
| #8D969E | 236 | Muted supporting text and legal copy |
| #FFFFFF | 151 | Primary page and card surfaces; light text |
| #F4F4F4 | 66 | Light neutral surface |
| #000000 | 64 | Black text and strokes |
| #505A63 | 57 | Secondary dark neutral |
| #4F5156 | 24 | Neutral strokes and overlays |
| #F7F7F7 | 15 | Card surface |
| #0066FF | 14 | Bright blue annotation or accent |
| #2F1B49 | 14 | Dark purple promotional text |
| #F4F4F41A | 9 | Translucent light overlay |
| #A664FF | 6 | Purple accent and top strip |

## Type scale

Observed typography, ordered from largest to smallest:

| Size | Family | Weight/style | Usage |
|---:|---|---|---|
| 72.9px | Lato | ExtraBold | Promotional hero heading |
| 72.27px | Lato | Bold | Website header branding |
| 57.9px | Inter | Black | Large website heading |
| 57.4px | Inter | Bold | Large promotional heading |
| 52.3px | Inter | Black | Large heading |
| 49.2px | Inter | Regular | Large supporting copy |
| 39.8px | Inter | Black | Large heading |
| 38.9px | Inter | SemiBold | Annotation label |
| 38.3px | Inter | Medium | Footer call-to-action heading |
| 30.19px | Lato | Bold | Promotional feature label |
| 28.85px | Lato | Bold | Promotional brand label |
| 26.6px | Inter | Medium | Medium heading |
| 24px | Inter | SemiBold | Utility heading |
| 23.1px | Inter | Medium | Supporting heading |
| 20.8px | Inter | Medium | Medium text |
| 17.3px | Inter | Regular | Body text |
| 17px | Inter | Regular | Body text |
| 15.4px | Inter | Medium | Compact medium text |
| 14.4px | Inter | Medium | Compact medium text |
| 14px | Helvetica | Regular | Utility text |
| 12px | Helvetica | Regular | Legal and footer copy |
| 12px | Helvetica | Bold | Legal and footer labels |

Most-used text styles:
- Helvetica Regular, 12px: 334 uses.
- Inter Regular, 17.3px: 72 uses.
- Inter Medium, 15.4px: 59 uses.
- Helvetica Regular, 14px: 57 uses.
- Helvetica Bold, 12px: 39 uses.

## Spacing scale

No spacing variables were defined. Observed layout gaps and padding values include:

- 0px
- 7.5px
- 16px
- 24px
- 30.55px
- 32.23px
- 40px
- 49.2px
- 62.14px
- 62.92px
- 64px
- 85.17px

Notable layout patterns:
- Promotional wrappers use a 16px horizontal gap in the compact header.
- Promotional content sections use a 49.2px vertical gap.
- Website header groups use 24px and 30.55px gaps.
- Footer navigation uses a 64px gap.
- The icon specimen uses 40px padding and a 40px gap.

## Radius scale

Observed corner radii:

- 4.43px
- 4.86px
- 9px
- 12px
- 13.62px
- 20px
- 24.11px
- 26px
- 28.62px
- 9999px

Usage guidance:
- 4.43px and 4.86px: small promotional shapes and labels.
- 9px and 12px: website preview containers.
- 20px: website cards.
- 24.11px and 26px: branded image or logo surfaces.
- 28.62px: large promotional container.
- 9999px: pill-shaped links or buttons.

## Elevation & effects

- Thumbnail drop shadow: offset `0 0.88px`, blur `15.93px`, color `#2900626B`.
- Promotional image treatment includes background blur of `21.43px`.
- Inner shadow treatments are used on branded logo shapes.
- Website preview content uses a thumbnail effect on a dark preview frame.

## Components

_None found in source._

No component families or component geometry were extracted. Use the observed frames, cards, links, headers, footer groups, and promotional preview compositions as screen-level patterns rather than reusable component specifications.

## Screen patterns

### Welcome / Slide 16:9 - 1

- Canvas: `1920x1721px`, white background.
- Purple top strip: `1920x18px`.
- Compact branded header wrapper: `740x57.87px`, with a `16px` gap.
- Large centered promotional copy wrappers: `1517px` wide.
- Promotional text uses large Inter headings and supporting copy with a `49.2px` vertical gap.
- Main promotional preview: `1521.3x763.47px`, with `28.62px` radius.
- Includes a large promotional heading, two feature labels, image-based preview panels, decorative shapes, and an annotation label.

### Welcome / Frame

- Canvas: `1920x3616px`, white background.
- Repeats the purple top strip and compact branded header.
- Includes an instructional heading, long supporting copy, and the same promotional preview composition.
- Main content wrapper: `1517px` wide with a `49.2px` vertical gap.

### Revolut website / Frame

- Canvas: `4735x188px`, white background.
- Purple top strip: `4735x18px`.
- Header wrapper: `4608x110.51px`.
- Header uses a large brand mark, “Revolut” wordmark, and a right-aligned “Access all websites” label.
- Header groups use a `24px` internal gap and a `30.55px` outer gap.

### Revolut website / Desktop - Light Mode

- Outer section: `1868x10337.05px`, dark gray background with a black stroke.
- Website screen: `1425x9839.05px`, white background.
- Main content height: `7715.05px`.
- Footer height: `2051px`, dark charcoal background.
- Main and footer content use a centered `1000px` region.
- Includes a large primary heading, long-form legal text, pill-shaped links, navigation lists, plan cards, and multiple large content sections.
- Footer cards use `20px` radius and `#F7F7F7` surfaces.
- Legal and utility copy primarily uses Helvetica at `12px`.
- Major website headings use Inter Black or Medium at `38.3px` and `57.9px`.
- The icon specimen is a separate `143x164px` white frame with `40px` padding.

## Notes for implementers

- Prioritize the ranked color palette; use dark charcoal for primary content, muted gray for supporting copy, white for dominant surfaces, and purple as the main accent.
- Preserve the strong contrast between large Inter/Lato display typography and compact Helvetica legal copy.
- Build desktop layouts around the observed `1000px` content region inside a `1425px` screen.
- Use generous vertical spacing, especially the observed `49.2px` promotional section gap.
- Use rounded cards and preview surfaces with the observed radius values; reserve `9999px` for pill-shaped links.
- Treat decorative imagery, blurred thumbnails, annotation labels, and layered shapes as promotional composition details, not as standardized components.
- Do not assume unextracted variables, responsive breakpoints, motion behavior, or component states.
