---
name: medium-article-screens-community
source: Medium Article Screens (Community)
kind: design-system-context
---

# medium - Design System

## Overview

Medium-inspired article and news-app mobile screens from the Figma file “Medium Article Screens (Community).”

- Source page: All pages (2): Coverpage, Mobile Screens
- Primary mobile frame: 393×852px detail page
- Primary mobile frame: 393×1189px listing page
- Cover artwork frame: 1920×1080px
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, grid styles, or effect styles were found.

## Design language

- Editorial, content-first layout with generous white space and dark neutral typography.
- Primary surfaces use #FFFFFF, with notification surfaces using #F9F9F9.
- Brand accents use #1A8917 for action text and buttons, and #5C6BC0 for an icon mark.
- Secondary interface text and controls use #6F6F6F and #959595.
- Article previews use repeated vertical cards with light dividers in #F0EEEE.
- Controls are compact, outlined, and rounded, such as the 107×34px “Listen” and “Share” controls.
- Desktop cover content uses large editorial headings and a green “Light mode” button with a 14px radius.

## Color palette

Ranked by reported usage:

| Color | Usage | Typical role |
|---|---:|---|
| #6F6F6F | 335 | Secondary text, icons, navigation labels |
| #000000 | 141 | Primary text, headings, dividers |
| #D9D9D9 | 84 | Placeholder surfaces and neutral icon fills |
| #FFFFFF | 65 | Page surfaces, button text, outlined control surfaces |
| #F0EEEE | 47 | Listing-card dividers |
| #373737 | 36 | Article summary text |
| #B2B2B2 | 36 | Avatar border |
| #242424 | 25 | Medium wordmark |
| #F9F9F9 | 21 | Membership notification surface |
| #5C6BC0 | 18 | Brand/icon accent |
| #959595 | 11 | Outlined control text and icons |
| #696969 | 10 | Coverpage supporting text |
| #1A8917 | 6 | Brand action text and green button fill |
| #D9D9D900 | 5 | Transparent frame fill |

## Type scale

Fonts observed:

- Test Söhne Buch
- Test Söhne Leicht
- Test Söhne Halbfett
- Test Söhne Dreiviertelfett
- Test Söhne Kraftig
- Inter Bold

Observed type styles, ranked by usage where available:

| Font | Size | Usage |
|---|---:|---:|
| Test Söhne Buch | 18px | 172 uses; article summary and navigation text |
| Test Söhne Buch | 14px | 78 uses; metadata and interface text |
| Test Söhne Leicht | 14px | 73 uses; supporting and metadata text |
| Test Söhne Dreiviertelfett | 24px | 36 uses; headings |
| Test Söhne Halbfett | 38px | 19 uses; Medium wordmark |
| Test Söhne Halbfett | 21.61px | 18 uses |
| Test Söhne Dreiviertelfett | 14px | 15 uses |
| Test Söhne Buch | 16px | 14 uses; control labels |
| Test Söhne Buch | 24px | 13 uses |
| Test Söhne Buch | 12px | 4 uses |
| Test Söhne Buch | 20px | 4 uses |

Additional observed text styles:

- Test Söhne Dreiviertelfett, 34px: article title.
- Test Söhne Halbfett, 160.36px: coverpage “Medium” heading.
- Test Söhne Dreiviertelfett, 65.31px: coverpage heading.
- Test Söhne Buch, 34.58px: coverpage supporting heading.
- Test Söhne Buch, 30.73px: “Light mode” button label.
- Inter Bold, 34.47px: “Multi-state screen lesson” heading.

## Spacing scale

_No spacing variables found in source._

Observed layout spacing values:

- 1px: metadata/control gap and strokes
- 3px: outlined control content gap
- 5px: outlined control vertical padding
- 6px: category navigation vertical padding
- 7px: article content stack gap
- 9px: listing-card internal gap
- 10px: membership notification gap and card padding
- 13px: outlined control horizontal padding and category navigation gap
- 21px: membership notification horizontal padding
- 26px: header icon gap
- 29px: membership notification horizontal padding
- 32px: listing-card group gap
- 34px: listing collection gap
- 54px: listing placeholder vertical padding

## Radius scale

_No radius variables found in source._

Observed corner radii:

- 4px: article/listing placeholder rectangles
- 14px: green “Light mode” button
- 20px: outlined “Listen,” “Share,” and “More” controls

## Elevation & effects

_No local effect styles found in source._

Observed effects:

- 4px background blur on a 340×38px membership notification rectangle.
- 4px layer blur on membership notification text in one detail-page state.
- No elevation, shadow, or motion tokens were found.

## Components

_None found in source._

## Screen patterns

### Coverpage

- 1920×1080px white thumbnail composition.
- Large “Medium” heading in Test Söhne Halbfett at 160.36px and #242424.
- Supporting heading “News app inspired screens” in Test Söhne Dreiviertelfett at 65.31px and #000000.
- Supporting text in Test Söhne Buch at 34.58px and #696969.
- Green “Light mode” button: 220.9×65.31px, #1A8917 fill, #FFFFFF 1.92px stroke, 14px radius.

### Mobile detail page

- 393×852px white screen.
- “Medium” wordmark in Test Söhne Halbfett at 38px and #242424.
- Header icon group is 146.5×38px with a 26px gap and a 38×38px #5C6BC0 icon mark.
- Membership notification is 392×80px with #F9F9F9 fill and 14px Test Söhne Leicht text.
- Article content width is 362px.
- Article label uses Test Söhne Buch at 14px.
- Article title uses Test Söhne Dreiviertelfett at 34px.
- Article summary uses Test Söhne Buch at 18px and #373737.
- Author metadata includes a 75×73px avatar with a #B2B2B2 1px stroke and a 50×48px #D9D9D9 inner circle.
- “Follow” uses Test Söhne Kraftig at 14px and #1A8917.
- “Listen,” “Share,” and “More” controls use white fill, #959595 1px stroke, 20px radius, and 34px height.
- Placeholder media rectangle is 362×95px, #D9D9D9, with 4px radius.

### Mobile listing page

- 393×1189px white screen.
- Same 38px Test Söhne Halbfett “Medium” wordmark and 146.5×38px header icon group as the detail page.
- Listing collection is composed of repeated 402×296px article groups with 32px internal spacing.
- Article content area is 362px wide.
- Placeholder media area is 362×198px with a 362×213px surrounding content region.
- Placeholder label rectangle is 85.84×46px with 4px radius and #D9D9D9 fill.
- Article groups are separated by #F0EEEE 1px lines.
- Category navigation uses “+”, “For you,” “Following,” and “Disability” in #6F6F6F.
- Category navigation uses Test Söhne Buch at 24px for “+” and 18px for category labels.
- Membership notification appears as a 392×80px #F9F9F9 surface with 14px Test Söhne Leicht text.

### Multi-state lesson

- A “Multi-state screen lesson” heading is present in Inter Bold at 34.47px with #FFFFFF.

## Notes for implementers

- Use only the listed colors; do not introduce additional palette values.
- Prefer Test Söhne for the primary interface and editorial hierarchy.
- Use Test Söhne Halbfett at 38px for the mobile “Medium” wordmark.
- Use Test Söhne Dreiviertelfett at 34px for prominent article titles.
- Keep mobile content widths at 362px within the 393px viewport where specified.
- Preserve the repeated listing-card rhythm: 198px placeholder area, 9px internal gap, 264px card content region, 296px group height, and 32px group spacing.
- Use #F0EEEE 1px dividers between listing groups.
- Treat the membership notification as a low-contrast #F9F9F9 banner with 14px Test Söhne Leicht text.
- Use 20px radius for outlined action controls and 14px radius for the green coverpage button.
- No component families or reusable component specifications were extracted.
