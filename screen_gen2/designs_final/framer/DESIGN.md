---
name: saas-website-ui-kit-framer-website-kit-community
source: SaaS Website UI Kit — Framer Website Kit (Community)
kind: design-system-context
---

# framer - Design System

## Overview

SaaS website UI kit for Framer with light and dark marketing-page patterns. The source includes Cover, Light Page, Dark Page, Components, and usage/integration pages.

Primary layout width is 1200px. The system uses DM Sans for headings and Inter for body and interface text. Major patterns include announcement bars, desktop navigation, hero sections, feature grids, pricing cards, testimonials, forms, and footers.

## Design language

- Marketing-oriented SaaS visual language.
- Light pages use white surfaces, pale blue and indigo gradient artwork, and black or dark-indigo text.
- Dark treatments use #000000, white text, and translucent white borders or fills.
- Headings use bold DM Sans with tight negative tracking.
- Body and interface copy use Inter.
- Tags and compact labels use rounded 10px containers with 1px borders.
- Cards commonly use 20px or 24px radius, 1px borders, and soft shadows.
- Decorative product imagery and gradient artwork are present in the source; their source image assets are not tokenized.

## Color palette

### Ranked raw colors

| Rank | Color | Usage count |
|---|---|---:|
| 1 | #000000 | 358 |
| 2 | #FFFFFF | 250 |
| 3 | #7B7B7B | 90 |
| 4 | #00000026 | 44 |
| 5 | #FFFFFF80 | 39 |
| 6 | #FFFFFF33 | 36 |
| 7 | #808080 | 35 |
| 8 | #010D3E | 22 |
| 9 | #F1F1F1 | 22 |
| 10 | #2222221A | 17 |
| 11 | #00000099 | 15 |
| 12 | #FFFFFF00 | 15 |
| 13 | #9747FF | 12 |
| 14 | #0D0D0D | 10 |
| 15 | #0000001A | 9 |
| 16 | #070707 | 8 |
| 17 | #1B1B1B14 | 7 |
| 18 | #999999 | 6 |

Additional source colors used by components and effects:

- #7D5E9C
- #14142B14
- #EAEAEA
- #24262B
- #FFFFFF03
- #FFFFFF99
- #FFFFFF1A
- #FFFFFF26
- #FFFFFF40
- #FFFFFFB2
- #0000000F
- #3D3D3D66
- #6F6C90
- #8C45FF
- #8C45FF66
- #9855FF
- #D9D9D9
- #282729
- #140B27
- #020103

### Named color tokens

- Neutral/100: #FFFFFF
- Neutral/300: #FFFFFF
- Neutral/600: #6F6C90

The Neutral/100 and Neutral/300 tokens resolve to the same source color, #FFFFFF.

## Type scale

| Style | Font | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---:|---:|---|
| H1 | DM Sans | 700 | 90px | 90px | -5.85px | Primary page headings |
| H2 | DM Sans | 700 | 54px | 60px | -3.24px | Section headings |
| H4 | DM Sans | 700 | 26px | 60px | -1.04px | Card or subsection headings |
| H5 | DM Sans | 700 | 18px | auto | -0.56px | Small headings |
| Body Large | Inter | 400 | 22px | 31px | -0.79px | Hero and section descriptions |
| Body Bold | Inter | 500 | 16px | auto | -0.32px | Buttons and emphasized UI text |
| Body Medium | Inter | 400 | 16px | 23px | -0.16px | Standard body copy |
| Body S | Inter | 400 | 14px | auto | 0px | Navigation and compact body text |
| Body S Bold | Inter | 700 | 14px | auto | 0px | Emphasized compact text |
| Body Small Tag | DM Sans | 400 | 14px | auto | 0px | Announcement and footer labels |
| Tag | Inter | 500 | 13px | 31px | -0.33px | Pills and tags |

Additional raw typography in the source:

- Switzer Semibold, 32px.
- DM Sans Bold, 64px.
- DM Sans Bold, 130px.
- DM Sans Bold, 390px.
- Inter ExtraBold, 120px.

Most-used named styles:

- Body S: 171 uses.
- Body Medium: 123 uses.
- Body Bold: 67 uses.
- H5: 54 uses.
- H2: 27 uses.
- Tag: 27 uses.
- Body Large: 21 uses.
- Body S Bold: 20 uses.
- Body Small Tag: 18 uses.
- H4: 7 uses.
- H1: 2 uses.

## Spacing scale

No spacing variables were found in the source.

Documented component spacing values:

- 0px padding and gap are used in several layout wrappers.
- 4px gap: Buttons.
- 8px gap: Logo, Bar, and Socials card content.
- 10px gap: Tag and Feature Cards.
- 17px gap: grouped hero buttons.
- 20px gap: Testimonial content and section heading groups.
- 24px gap: Desktop navigation links.
- 29px gap: Hero content.
- 34px gap: Pricing card internal groups.
- 40px padding: Footer-L, Feature Cards, Testimonial, and Socials card.
- 60px gap: “Everything you need” section.
- 110px horizontal padding: Bar.
- 512px gap: Footer-L.
- 633px gap: Footer-S.

## Radius scale

Documented radii:

- 10px: Tag, Buttons, and the Logo/Default image.
- 20px: Testimonial and Socials card.
- 24px: Pricing Card.
- 0px: Cover decorative group corners.

No radius variables were found.

## Elevation & effects

- Shadow: drop shadow, offset 0 4px, blur/spread value 104px, color #7D5E9C.
- General/Shadow 02: drop shadow, offset 0 2px, blur/spread value 12px, color #14142B14.
- Testimonial shadow: drop shadow, offset 0 7px, blur/spread value 14px, color #EAEAEA.
- Footer-S/Socials card shadow: drop shadow, offset 0 7px, blur/spread value 24px, color #24262B.
- Product image shadow: drop shadow, offset 0 4px, blur/spread value 64px; the source color is omitted because it is not an allowed palette value.
- Nav Bar-Desktop background blur: 14px.
- Logo decorative layer blur: 11px.
- Borders are commonly 1px using #FFFFFF33, #2222221A, #1B1B1B14, #F1F1F1, or Neutral/300.

## Components

### Bar

- Size: 1200×46px.
- Horizontal layout.
- Padding: 14px vertical, 110px horizontal.
- Gap: 8px.
- Alignment: center/center.
- Fill: #000000.
- Text style: Body Small Tag.
- Variants: Darkmode-Bar, Lightmode-Bar.

### Buttons

- Default size: 139×40px.
- Radius: 10px.
- Horizontal layout.
- Padding: 10px vertical, 15px horizontal.
- Gap: 4px.
- Alignment: center/center.
- Fill: #000000.
- Text style: Body Bold.
- Variants: Black S, Black S arrow, No Background, White M, White S.
- A navigation button instance is 115×39px with the same 10px/15px padding and 10px radius.

### Feature Cards

- Size: 282×225px.
- Vertical layout.
- Padding: 40px vertical, 0px horizontal.
- Gap: 10px.
- Text styles: Body Medium and H5.
- Variants: Feature Card-Dark Mode, Feature Card-Light Mode.

### Form

- Standard form size: 411×42px.
- Horizontal layout.
- Padding: 0px.
- Gap: 10px.
- Alignment: min/center.
- Text style: Body Bold.
- FAQ variant: 449×84.75px, horizontal layout, 30px vertical padding, 0px gap, center/center alignment, 1px #FFFFFF33 stroke, H5 text.

### Footer-L

- Size: 1212×327px.
- Horizontal layout.
- Padding: 40px vertical, 20px horizontal.
- Gap: 512px.
- Fixed width and height.
- Fill: #000000.
- Text styles: Body S and Body S Bold.
- Variants: Desktop, Mobile.

### Footer-S

- Size: 1210×64px.
- Horizontal layout.
- Padding: 20px vertical, 40px horizontal.
- Gap: 633px.
- Alignment: min/center.
- 1px #FFFFFF33 stroke.
- Text style: Body Small Tag.
- Variant: Footer-S-mobile.

### Socials

- Size: 24×24px.
- Fill: #FFFFFF.
- Variants: Instagram, LinkedIn, Pinterest, TikTok, X, Youtube.

### Footer-S/Socials card

- Size: 486×538px.
- Radius: 20px.
- Vertical layout.
- Padding: 40px on all sides.
- Gap: 0px.
- Alignment: center/center.
- 1px #1B1B1B14 stroke.
- Shadow: 24px drop shadow, offset 0 7px, color #24262B.
- Text styles: Body Medium and H4.

### Icons

- Standard size: 20×20px.
- Fill: #FFFFFF.
- Variants: Arrow-b, Arrow-w, Ecosystem, Ecosystem-White, Lock, Lock-White, Menu, Menu-w, Notifications, Notifications-White, Target, Target-White, Tick, Tick-White.
- Icons are also used at 16×16px and 24×24px in specific layouts.

### Logo

#### Logo

- Navigation logo size: 182×41px.
- Horizontal layout.
- Gap: 8px.
- Alignment: center/center.
- Fixed width and height.
- Variant: Default.
- Includes a 40×41px Logo/Default mark.
- A separate Components logo frame is 390×81px with 20px padding on all sides and a 290px gap.
- Variants for the 390×81px frame: Nav Bar-Desktop-W, Nav Bar-Desktop-b, Nav-Mobile.

#### Logo/Default

- Size: 40×41px.

### Nav Bar-Desktop

- Size: 1200×81px.
- Horizontal layout.
- Padding: 20px on all sides.
- Gap: 463px.
- Alignment: center/center.
- Fill: #FFFFFF03.
- Background blur: 14px.
- Text styles: Body Bold, Body Medium, Body S.
- Variants: Default, NavDark.

### Nav elements

- Navigation links use Body Medium.
- The source navigation includes About, Features, Customers, Updates, and Help.
- Navigation link color uses #00000099 in the light navigation treatment.
- Navigation groups use a 24px gap.

### Pricing Card

- Three source card sizes:
  - 351×508px.
  - 351×728px.
  - 351×603px.
- Radius: 24px.
- Internal content width: 271px.
- Internal vertical gaps: 34px.
- Light variants use Neutral/100 fill and Neutral/300 1px stroke.
- Dark variant uses #000000 fill.
- All variants use General/Shadow 02.

### Tag

- Standard size: 137×29px.
- Radius: 10px.
- Horizontal layout.
- Padding: 10px vertical, 13px horizontal.
- Gap: 10px.
- Alignment: center/center.
- 1px #2222221A stroke.
- Text style: Tag.
- Variants: Bar-Dark, Bar-Light.
- Other source instances use 165×27px and 101×31px dimensions.

### Testimonial

- Standard size: 325×234px.
- Other source heights: 211px and 257px.
- Radius: 20px.
- Vertical layout.
- Padding: 40px on all sides.
- Gap: 20px.
- Fill: #FFFFFF.
- 1px #F1F1F1 stroke.
- Shadow: 14px drop shadow, offset 0 7px, color #EAEAEA.
- Text styles: Body Medium and Body Bold.
- Author row uses a 42×42px avatar and an 8px gap between avatar and author details.

### CTA

_None found in source._

### CTA S

_None found in source._

### AI Kit

_None found in source._

### Badge

_None found in source._

### Toggle

_None found in source._

### Toggle Button

_None found in source._

## Screen patterns

- **Cover / Thumbnail:** 1920×960px presentation cover with a large SaaS Website UI Kit title, black-and-white logo artwork, gradient artwork, and decorative abstract shapes.
- **Light Page / Desktop:** 1200px-wide marketing page. Sequence includes a 46px announcement Bar, 81px desktop navigation, 710px hero, logo ticker, product section, feature grid, “Everything you need” cards, pricing, testimonials, and footer patterns.
- **Dark Page:** Dark-mode counterpart using the same broad SaaS marketing structures and dark component variants.
- **Components:** Reference page showing reusable logos, navigation, bars, forms, tags, buttons, icons, feature cards, testimonials, and footer components.
- **Pricing pattern:** Centered section heading followed by three 351px-wide pricing cards with differing heights.
- **Testimonials pattern:** Centered H2/tag heading followed by repeated 325px-wide testimonial cards with variable heights.
- **Feature pattern:** Four feature cards arranged in a grid; each card uses a 24px icon, H5 heading, and Body Medium copy.
- **Hero pattern:** Tag, H1, Body Large description, and grouped buttons alongside decorative product imagery.

## Notes for implementers

- Treat #FFFFFF as the shared value for Neutral/100 and Neutral/300; do not create separate visual colors for these tokens.
- Preserve the distinction between opaque black values such as #000000 and translucent black values such as #00000099, #00000026, #0000001A, and #2222221A.
- Use named typography styles where available instead of recreating text settings ad hoc.
- Use DM Sans for headings and Inter for body and interface text unless applying one of the explicitly extracted raw typography styles.
- Keep tags and buttons at a 10px radius.
- Keep testimonial and Socials card surfaces at a 20px radius; keep pricing cards at a 24px radius.
- Use 1px borders for the documented card, tag, FAQ, and footer treatments.
- Do not infer missing spacing, radius, motion, or grid variables. The source contains no spacing, radius, motion, or local grid token collections.
- Decorative fills and image assets are present in the source but are not available as reusable color tokens. Use the referenced source assets where available rather than inventing replacement colors.
- Do not use #00000040; it is not part of the allowed palette.
