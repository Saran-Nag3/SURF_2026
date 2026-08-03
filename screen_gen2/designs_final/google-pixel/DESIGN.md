---
name: google-pixel-mobile-landing-page-community
source: Google Pixel Mobile landing page (Community), Page 1
kind: design-system-context
---

# google-pixel - Design System

## Overview

- Single desktop landing page, 1440×5212px.
- Product-focused Google Pixel smartphone page with hero, navigation, feature highlights, specifications, comparison content, and customer testimonial sections.
- Layout uses large fixed-width sections, high-contrast black-and-white blocks, bright yellow accents, product imagery, and decorative geometric graphics.

## Design language

- Bold, editorial product marketing aesthetic.
- Strong contrast between black and white section backgrounds.
- Large oversized headlines and numeric specifications.
- Inter is used throughout the page.
- Bright yellow is the primary accent color.
- Green tones appear as secondary accents.
- Decorative circles, geometric shapes, and product imagery support the visual identity.
- Navigation labels and calls to action use bold typography.

## Color palette

Ranked by observed usage:

| Color | Usage | Application |
|---|---:|---|
| #FFFFFF | 46 | Page background, dark-section text, product and navigation text |
| #000000 | 20 | Dark section backgrounds, light-section text |
| #FAFF00 | 14 | Bright accent and decorative graphics |
| #D9D9D9 | 5 | Neutral gray shapes or surfaces |
| #025D0B | 3 | Green accent |
| #037D0F | 3 | Green accent |

Some source layers use colors outside the approved palette; do not reproduce those values. Use only the palette above when implementing.

## Type scale

Font family: Inter.

Observed styles:

| Size | Weight | Observed usage |
|---:|---|---:|
| 125px | Bold | Oversized “Pixel Phone” hero title |
| 64px | ExtraBold | Large specification values and section headline |
| 68px | Bold | Large percentage statistic |
| 48px | SemiBold | Product statement headline |
| 45px | Bold | 3 uses in extracted typography |
| 40px | Bold | Section headings |
| 24px | Bold | 8 uses; navigation and headings |
| 24px | ExtraBold | 3 uses |
| 24px | Regular | 8 uses; supporting headings and descriptions |
| 20px | SemiBold | 5 uses; feature labels |
| 20px | Regular | Feature descriptions |
| 19px | Regular | 3 uses; hero/supporting copy |
| 15px | Regular | Supporting feature descriptions |

Typography guidance:

- Use Bold or ExtraBold for navigation, section headings, hero text, and key metrics.
- Use SemiBold for feature titles and marketing statements.
- Use Regular for descriptive copy.
- The 64px and 125px styles create the strongest visual hierarchy.

## Spacing scale

Observed spacing and layout values:

- 0px padding
- 0px gap
- 7px gap
- 9px gap
- 10px gap
- 12px gap
- 24px gap
- 28px gap
- 76px gap
- 81px gap
- -4px gap

The page primarily uses fixed-width frames with explicit gaps and no internal padding in the extracted structures.

## Radius scale

Observed corner radii:

- 0px
- 14px
- 37px
- 43px

Use rounded corners selectively for calls to action and product/content cards. Large image cards use 37px and 43px radii.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

- **Hero section:** Black background with white navigation, oversized “Pixel Phone” typography, supporting copy, geometric decoration, product imagery, and a “Buy Now” call to action.
- **Product statement section:** Light background with a centered or prominent product-strength headline and supporting description.
- **Feature section:** Black background with white “Phone Features.” heading, descriptive copy, large specification metrics, and decorative graphics.
- **Statistic section:** Light-background content featuring a large green percentage and customer satisfaction messaging.
- **Product selection section:** Large “Which Pixel is right for you?” heading, supporting product description, and large rounded product imagery.
- **Camera or feature highlight:** Image-led content with white typography describing the triple rear camera system.
- **Customer section:** Light-background testimonial area with a bold heading, supporting copy, and colored rounded content imagery.

## Notes for implementers

- Preserve the high-contrast alternation between black and light sections.
- Use only the approved palette values listed above.
- Use Inter and maintain the observed weight hierarchy: Regular for body copy, SemiBold for feature messaging, Bold or ExtraBold for headings and metrics.
- Treat oversized hero typography as a distinctive layout feature; the extracted hero title uses 125px Bold.
- Use the observed radii of 14px, 37px, and 43px for rounded controls, cards, and product imagery.
- Product and decorative image assets are present in the source but are identified only by extraction hashes; use the corresponding source assets where available.
- No reusable component families, local variables, spacing styles, radius styles, motion tokens, effect styles, or grid styles were extracted.
