---
name: flutterwave-website-design-community
source: Flutterwave Website Design (Community)
kind: design-system-context
---

# flutterwave - Design System

## Overview

- Source page: All pages (2): Page 1, Cover.
- Primary extracted screen: Desktop - 17, 1440px wide and 10180px high.
- The design is a Flutterwave marketing website with sections for commerce, cards, APIs, global payments, metrics, conversion CTA, and footer navigation.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Marketing-led visual system combining large editorial display headings with practical product descriptions.
- Primary display type uses FritzQuadrata Bold at 40px, 48px, 64px, 80px, and 96px.
- Yorkie DEMO is used for the “Ready to get started?” CTA heading at 56px and for an 80px display heading.
- Body and interface typography primarily use DM Sans.
- Supporting interface typography uses SF Pro Text and Space Grotesk.
- Layouts use large centered sections, generous whitespace, dark contrast sections, pale blue-gray section backgrounds, rounded cards, and orange/red accents.
- Common section backgrounds are #FFFFFF, #F8FAFD, and #1D1D1D.
- Buttons use 10px radius, fixed heights of 48px or 64px, centered horizontal layouts, and 10px internal gap.

## Color palette

Ranked by raw usage count:

| Color | Usage | Observed role |
|---|---:|---|
| #FFFFFF | 177 | Primary background, button text, dark-section text |
| #1F1F1F | 53 | Primary dark text and dark section background |
| #4E4E4E | 50 | Body and supporting text |
| #262C55 | 46 | Dark blue accent |
| #000000 | 30 | Primary black text and lines |
| #737373 | 24 | Footer and secondary text |
| #EB3223 | 19 | Learn-more links and arrow accents |
| #393939 | 15 | Dark card backgrounds |
| #D9D9D9 | 15 | Dividers |
| #292D32 | 11 | Dark supporting color |
| #0A0E27 | 10 | Primary dark button fill |
| #9747FF | 9 | Purple accent |
| #0F0F0F | 7 | Near-black color |
| #EEEEEE | 7 | Default Button fill |
| #F9EEF3 | 6 | Pale pink background/accent |
| #FDF6E6 | 6 | Pale cream background/accent |
| #1D1D1D | 4 | Dark section background |
| #F8FAFD | 4 | Pale blue-gray section background |
| #FB9129 | 4 | Orange display-heading accent |
| #D9F4E4 | 3 | Pale green background/accent |
| #DCFFE0 | 3 | Pale green background/accent |
| #E9EAF3 | 3 | Pale lavender-gray background/accent |

- Do not introduce colors outside this palette.
- White text on #1D1D1D, #1F1F1F, #393939, or #0A0E27 is repeatedly used for high contrast.
- Supporting text commonly uses #4E4E4E.
- Footer metadata commonly uses #737373.
- Accent links use #EB3223.

## Type scale

### Display and headings

- FritzQuadrata Bold, 96px: large orange display heading.
- FritzQuadrata Bold, 80px: major section headings.
- Yorkie DEMO Bold, 80px: display heading.
- DM Sans Regular, 64px: large editorial heading.
- FritzQuadrata Bold, 64px: large editorial heading.
- FritzQuadrata Bold, 48px: display heading.
- DM Sans Regular, 48px: large heading.
- FritzQuadrata Bold, 40px: display heading.
- Yorkie DEMO SemiBold, 56px: CTA heading.
- DM Sans Bold, 24px: product and subsection headings.
- DM Sans Bold, 20px: card and subsection headings.
- DM Sans Regular, 24px: supporting heading or introductory copy.
- DM Sans Bold, 18.72px: emphasized text.

### Body and interface

- DM Sans Regular, 20px: feature descriptions and supporting copy.
- DM Sans Regular, 18px: footer navigation and links.
- DM Sans Medium, 18px: medium-weight supporting text.
- DM Sans Regular, 16px: body copy and metrics descriptions.
- DM Sans Medium, 16px: links and interface text.
- DM Sans Bold, 16px: emphasized interface text.
- SF Pro Text Bold, 16px: bold button label.
- SF Pro Text Medium, 16px: standard button label.
- Space Grotesk Medium, 16px: card details.
- DM Sans Bold, 15px: small emphasized text.
- DM Sans Regular, 14px: compact body copy.
- DM Sans Medium, 14px: compact links and labels.
- DM Sans Bold, 14px: compact emphasized text.
- DM Sans Regular, 12.48px: compact text.
- DM Sans Regular, 12px: small text.
- DM Sans Medium, 12px: small medium-weight text.
- SF Pro Text Medium, 12px: small interface text.
- DM Sans Regular, 10.5px: microcopy.
- Space Grotesk Medium, 9.6px: microcopy.
- DM Sans Regular, 5.66px: smallest extracted text.

## Spacing scale

No spacing variables were found. Use only observed values:

- Button padding: 14px vertical and 17px horizontal in the Button component.
- Larger button padding: 15px vertical and 30px horizontal.
- Button internal gap: 10px.
- Common component gaps: 30px, 35px, 40px, 50px, and 57px.
- Section padding observed: 80px vertical and 200px horizontal.
- Footer column gap: 57px.
- Footer social-link gap: 30px.
- Footer legal-link gap: 10px.
- Footer primary layout gaps: 95px and 500px.
- CTA card and section gap: 50px.

## Radius scale

Observed radii:

- 10px: Buttons and card surfaces.
- 15px: Dark feature cards.
- 30px: Large CTA panel.
- 0px: Components and frames with no radius explicitly specified.

## Elevation & effects

- Card shadow: drop shadow with 24px blur, 0px x offset, 4px y offset, using #000000 at 25% opacity.
- Feature-card shadow: drop shadow with 20px blur, -4px x offset, 10px y offset, using #000000 at 25% opacity.
- CTA panel shadow: drop shadow with 20px blur, 0px x offset, 10px y offset, using #000000 at 25% opacity.
- Glass card background blur: 40px.
- Glass cards use a #FFFFFF stroke at 0.5px.
- Card image overlays use 10% opacity.
- Card text is shown at 80% opacity in some Component 3 variants.
- Mastercard imagery is shown at 30% or 80% opacity in card variants.
- No motion tokens were found.

## Components

Only the following component families were extracted.

### Button

- Default size: 140px × 48px.
- Layout: horizontal, centered on both axes.
- Padding: 14px 17px.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Radius: 10px.
- Default fill: #EEEEEE.
- Text: SF Pro Text Medium, 16px.
- Variants: Default, Hover.
- In screen usage, larger instances use 64px height, 15px vertical padding, 30px horizontal padding, and either #0A0E27 or #FFFFFF fill.
- Dark button labels use #FFFFFF; white button labels use #1F1F1F.

### Component 3

- Size: 500px × 360px.
- Variants: card 1, card 2, card 3, card 4.
- Text: Space Grotesk Medium, 16px.
- Used for layered payment-card visuals.
- Card surfaces use 10px radius, a #FFFFFF 0.5px stroke, 40px background blur, and drop shadows.
- Card widths shown in the variants are 400px, 450px, and 500px; card height is 300px.

### Component 4

- Size: 1040px × 250px.
- Variants: Frame 10518, Frame 10519, Frame 10520.
- Text: DM Sans Regular, 14px and DM Sans Bold, 20px.
- Composed of three 460px × 250px dark cards.
- Card radius: 15px.
- Card fill: #393939.
- Card content width: 386px.
- Internal content gap: 30px.
- Titles use DM Sans Bold, 20px; descriptions use DM Sans Regular, 14px.

### Component 5

- Size: 160px × 364px.
- Variants: menu card, menu item.
- Text: SF Pro Text Medium, 12px and DM Sans Regular, 14px.

### Component 6

- Size: 343px × 200px.
- Variants: Frame 10532, Frame 10534.
- Text: DM Sans Regular, 16px and 12px; DM Sans Bold, 14px.

### Component 7

- Size: 322px × 200px.
- Variants: Frame 10533, Frame 10535.
- Text: DM Sans Regular, 16px and 12px; DM Sans Bold, 14px.

### Component 8

- Size: 390px × 32px.
- Fill: #FFFFFF.
- Variants: Frame 10536, Frame 10537.
- Text: DM Sans Medium, 14px and DM Sans Regular, 12px.

### Component 11

- Size: 390px × 32px.
- Fill: #FFFFFF.
- Variants: Component 10, Component 9.
- Text: DM Sans Medium, 14px and DM Sans Regular, 12px.

### Component 14

- Size: 390px × 32px.
- Fill: #FFFFFF.
- Variants: Component 12, Component 13.
- Text: DM Sans Medium, 14px and DM Sans Regular, 12px.

## Screen patterns

- **Hero / opening statement:** Large editorial heading, supporting text, and prominent payment or commerce imagery. Display typography uses FritzQuadrata Bold or DM Sans at large sizes.
- **Trusted-business strip:** White section with a centered trust statement and a row of decorative shapes.
- **Product feature section:** Pale #F8FAFD background, large heading, product title, 20px description, and dark CTA button.
- **Commerce tools section:** Large black or near-black heading, paired imagery, product feature descriptions, and red “Learn more” links with right arrows.
- **Cards section:** #1D1D1D background, centered white FritzQuadrata heading, supporting copy, white CTA button, and layered translucent payment cards.
- **Business benefits section:** Three dark #393939 cards inside Component 4, each with a 20px white title and 14px white description.
- **Developer/API section:** Pale #F8FAFD background with large display heading, supporting copy, dark CTA, and API feature text.
- **Global reach section:** Large centered display heading followed by payment and payout feature blocks.
- **Metrics section:** Numeric claims with bold 24px labels, 16px descriptions, and black divider lines.
- **Conversion CTA:** 1040px × 450px dark #1F1F1F panel with 30px radius, white Yorkie DEMO heading, supporting text, white CTA button, and “Contact sales” link.
- **Footer:** Multi-column navigation, horizontal #D9D9D9 dividers, country and social links in #737373, followed by legal links.

## Notes for implementers

- Preserve the contrast hierarchy: dark text on white or #F8FAFD, white text on #1D1D1D or #1F1F1F, and #4E4E4E for supporting copy.
- Use FritzQuadrata Bold for the strongest editorial headings; do not replace it with DM Sans in major display areas.
- Use DM Sans for most product titles, descriptions, metrics, links, and navigation.
- Use SF Pro Text Medium, 16px for standard button labels.
- Keep buttons centered, with 10px radius and a 10px internal gap.
- Use #EB3223 for “Learn more” links and arrow accents.
- Use 30px radius only for the large CTA panel; use 15px for feature cards and 10px for buttons and payment-card surfaces.
- Use the extracted fixed widths when reproducing desktop compositions: 1040px content sections, 500px card compositions, 460px feature cards, and 390px compact components.
- Do not infer additional tokens from the source; no formal local design-token collections were present.
