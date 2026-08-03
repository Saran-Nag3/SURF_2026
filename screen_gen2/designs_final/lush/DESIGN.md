---
name: lush-garden-florist-website-community
source: Lush Garden - Florist Website (Community)
kind: design-system-context
---

# lush - Design System

## Overview

Lush Garden is a florist and plant-commerce website centered on botanical imagery, deep green accents, white space, and nature-focused messaging. The design source is one 1440px-wide page containing hero, informational, product, benefits, gallery, testimonial, and email CTA sections.

## Design language

- Botanical, fresh, and inviting.
- Use deep green for primary headings, actions, prices, and selected states.
- Use white and near-white surfaces to keep layouts light and spacious.
- Use full-bleed photography in hero and CTA areas.
- Use rounded cards with subtle borders and drop shadows.
- Headings use Lato; body copy primarily uses Raleway.
- Primary headings are regular-weight Lato in 36px; hero headings are bold Lato in 64px.
- Product and feature titles use bold or black Lato.
- Body copy uses medium Raleway with reduced opacity.
- Buttons use compact rounded rectangles with either a filled green treatment or a white/outlined treatment.
- Decorative plant illustrations support, but do not replace, content.

## Color palette

Ranked by source usage:

| Color | Usage count | Role |
|---|---:|---|
| `#285A43` | 87 | Primary dark green; headings, primary actions, prices, icons |
| `#FFFFFF` | 79 | Hero text, card surfaces, button text, backgrounds |
| `#121212` | 25 | Main body text and dark decorative artwork |
| `#337A5B` | 25 | Secondary green; product titles, secondary actions, accents |
| `#00000008` | 22 | Subtle card borders |
| `#F8F8F8` | 9 | Soft surfaces, body-background areas, testimonial cards |
| `#337A5B99` | 7 | Secondary button outlines |
| `#444444` | 7 | Neutral icon strokes |
| `#000000` | 6 | Dark decorative vector detail |
| `#121212CC` | 6 | Dark text with reduced opacity |
| `#FFFFFFE5` | 6 | White with reduced opacity |
| `#0000001F` | 4 | Light neutral overlay or border treatment |

## Type scale

Observed type styles:

| Size | Family | Weight/style | Usage |
|---:|---|---|---|
| 64px | Lato | Bold | Hero headings |
| 36px | Lato | Regular | Section headings |
| 32px | Lato | Bold | CTA heading |
| 32px | Leckerli One | Regular | Logo lettering |
| 20px | Lato | Black | Feature titles, product names, testimonial names |
| 18px | Lato | Medium | Navigation and supporting text |
| 18px | Poppins | Medium | Hero supporting text |
| 16px | Lato | Black | Product and compact labels |
| 16px | Lato | Bold | Navigation, button labels |
| 16px | Lato | SemiBold | Video button label |
| 16px | Raleway | Medium | Body copy and testimonial text |
| 14px | Lato | Bold | Primary compact button labels |
| 12px | Lato | Black | Product button labels |
| 12px | Lato | Bold | Product prices |
| 12px | Lato | Regular | Original prices |

Hierarchy:

- Hero heading: Lato Bold, 64px, white.
- Section heading: Lato Regular, 36px, `#285A43`.
- Feature, product, and testimonial titles: Lato Black, 20px.
- Body copy: Raleway Medium, 16px, commonly rendered with reduced opacity.
- Navigation/supporting text: Lato Medium, 18px.
- Compact controls and product metadata: Lato at 12–16px.

## Spacing scale

No spacing variables were found. Observed layout values:

- Button vertical padding: 8px, 11px, or 12px.
- Button horizontal padding: 24px, 35px, 45px, or 50px.
- Button content gap: 10px.
- Common image and card dimensions include 126px decorative icon areas, 250px product image areas, and 314px product cards.
- Main content widths include 1200px, 1201px, 1220px, and 1440px section frames.
- Gallery image sizes include 459px × 325px, 460px × 325px, 500px × 660px, and 1440px × 400px CTA imagery.

## Radius scale

No radius variables were found. Observed corner radii:

- 3px: compact buttons.
- 5px: email field.
- 10px: cards and testimonial surfaces.
- `10px / 10px / 0px / 0px`: product image areas with rounded top corners only.
- 50px: circular testimonial avatars.
- 0px: full-width section and decorative group edges.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Product and informational cards use subtle drop shadows with 20px blur and an offset of 10px horizontally and 10px vertically.
- Some cards combine the shadow with a `#00000008` border.
- CTA email input uses 5px background blur.
- Decorative testimonial plant artwork is rendered at very low opacity.

## Components

_None found in source._

## Screen patterns

- **Hero:** Full-width photographic background, overlaid navigation, logo, large white headline, supporting copy, primary filled CTA, outlined video CTA, and slide numbers.
- **About Us:** Green section heading, supporting paragraph, and three category cards for indoor plants, plant pots, and outdoor plants. Cards pair decorative plant artwork with short descriptions.
- **Product:** Green section heading followed by a repeated product-card grid. Each card includes a large image, product name, like control, current price, original price, and Buy Now action.
- **Benefits:** Four benefit panels arranged over a light alternating background, each with a plant-related illustration, title, and explanatory copy.
- **Gallery:** Section heading with a collage of plant and florist photography, including a tall feature image.
- **Testimonials:** Three rounded testimonial cards with customer name, quote, circular avatar, and faint decorative plant artwork.
- **CTA:** Full-width photographic banner with a large white heading, translucent bordered email field, and email submission action.

## Notes for implementers

- Prefer `#285A43` for primary brand emphasis and filled primary actions; use `#337A5B` for secondary product and action treatments.
- Keep hero and CTA text white over photographic backgrounds.
- Use `#F8F8F8` for soft content surfaces and testimonial cards.
- Product cards should be white, rounded to 10px, and use subtle borders and shadows.
- Preserve the distinction between filled primary buttons and outlined secondary buttons.
- Use Lato for headings, navigation, labels, and commerce metadata; use Raleway Medium for paragraphs and testimonial copy.
- Body copy commonly uses reduced opacity; maintain a softer contrast than headings.
- Use circular 50px avatar crops in testimonial cards.
- Keep decorative botanical illustrations understated and low-opacity where shown in testimonials.
- No reusable component families, local variables, local text styles, spacing tokens, radius tokens, motion tokens, or effect styles were defined in the source.
