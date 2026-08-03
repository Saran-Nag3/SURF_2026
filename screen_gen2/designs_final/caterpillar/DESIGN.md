---
name: nft-ui-design-caterpillar-community-community
source: NFT UI Design - Caterpillar (Community) (Community)
kind: design-system-context
---

# caterpillar - Design System

## Overview

A dark NFT marketplace interface centered on discovery, featured NFT cards, top sellers, and detailed artwork views. Supporting screens include a splash screen, promotional thumbnail, and usage-terms page.

- Primary mobile canvas: 428 × 926.76px.
- Core dark surface: #111111.
- Primary action color: #3772FF.
- Secondary status color: #45B26B.
- Visual language: high-contrast typography, image-led NFT cards, rounded surfaces, and prominent call-to-action buttons.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, grid styles, or component families were found.

## Design language

- Use dark backgrounds with white or near-white primary text.
- Use #3772FF for prominent actions such as “Let’s Get Started,” “Place Bid,” and “Make Offer.”
- Use rounded cards and controls, ranging from compact radii to highly pill-shaped buttons.
- NFT cards combine artwork, title, price, creator metadata, and an action row.
- Artwork is presented inside masked, rounded image containers.
- Use green for new-status indicators and purple, gold, and blue as supporting accent colors where applicable.
- Headings use bold display treatments; supporting metadata uses smaller medium or semibold text.
- The interface uses both Poppins and Manrope prominently, with additional display treatments from Epilogue, DM Sans, Inter, and SF Pro Display in individual screens.

## Color palette

### Ranked raw colors by usage

| Color | Usage |
|---|---:|
| #FFFFFF | 67 |
| #121212 | 9 |
| #2A2D3A | 8 |
| #854BFE | 8 |
| #FFFFFF12 | 8 |
| #FFFFFF4D | 8 |
| #111111 | 6 |
| #3772FF | 4 |
| #848484 | 3 |
| #8D8D8D | 3 |
| #DEC16D | 3 |
| #ECECEC | 3 |

### Named color tokens

| Token | Value | Usage |
|---|---|---:|
| Neutrals/4 | #777E90 | 5 |
| Neutrals/7 | #F4F5F6 | 3 |
| Primary/4 | #45B26B | 2 |
| GrayScale/Background | #F8F8F8 | 1 |
| GrayScale/Off white | #FCFCFC | 1 |
| Neutrals/1 | #141416 | 1 |
| Neutrals/8 | #FCFCFD | 1 |
| White | #FFFFFF | 1 |

### Additional observed colors

- #848484 and #8D8D8D: muted metadata and secondary labels.
- #ECECEC: light NFT card surfaces.
- #DEC16D: highlighted terms-page copy.
- #2A2D3A: dark supporting surface.
- #854BFE: supporting accent.
- #FFFFFF12 and #FFFFFF4D: translucent white treatments.

## Type scale

No local text styles were found. The following text treatments and sizes were observed:

### Poppins

- Regular, 7.8px
- Regular, 11.61px
- Regular, 24px
- Medium, 22px
- Medium, 36px
- Medium, 48px
- SemiBold, 13.55px
- SemiBold, 22px
- SemiBold, 25.11px
- SemiBold, 27.39px
- SemiBold, 29.96px
- SemiBold, 43px
- Bold, 80px

### Manrope

- Medium, 10.79px
- Medium, 12.58px
- SemiBold, 12.58px
- SemiBold, 13.55px
- SemiBold, 14.38px
- SemiBold, 16.54px
- SemiBold, 18.61px
- SemiBold, 22px
- SemiBold, 40px
- Bold, 16.18px
- Bold, 16.37px
- Bold, 18.26px
- Bold, 20.68px
- Bold, 40px
- ExtraBold, 24.81px
- SemiBold, 48px

### Other observed type

- DM Sans Bold, 14.88px
- DM Sans Bold, 15.98px
- Epilogue Bold, 22.89px
- Epilogue Bold, 40.7px
- Inter Bold, 140px
- SF Pro Display Black, 36.52px

### Hierarchy anchors

- Large promotional heading: Inter Bold, 140px.
- Terms heading: Poppins Bold, 80px.
- Thumbnail supporting heading: Manrope SemiBold, 48px.
- Splash heading: SF Pro Display Black, 36.52px.
- Marketplace display heading: Epilogue Bold, 40.7px.
- NFT detail heading: Manrope ExtraBold, 24.81px.
- Compact labels and metadata: 7.8px–16.54px.

## Spacing scale

No spacing variables were found. Explicit spacing values observed in component geometry include:

- 0px
- 11.16px
- 11.41px
- 13.7px
- 14.88px
- 22.31px
- 59.35px

Observed padding and gap usage:

- Splash CTA: horizontal padding 59.35px, vertical padding 13.7px, gap 11.41px.
- Notification status: 11.41px padding on all sides.
- Outlined button: horizontal padding 22.31px, vertical padding 14.88px, gap 11.16px.
- Logo: 8px gap between symbol and wordmark.

## Radius scale

Observed corner radii:

- 0px
- 9.13px
- 10.79px
- 12.41px
- 13.7px
- 14.33px
- 16.18px
- 18.26px
- 18.61px
- 22.62px
- 22.83px
- 24.56px
- 25.17px
- 35.95px
- 41.35px
- 83.68px

Notable applications:

- NFT artwork and cards: 22.62px, 22.83px, 25.17px, or 35.95px.
- Detail-screen panels: 18.26px and 41.35px.
- Compact controls: 9.13px–18.61px.
- Pill-shaped outlined button: 83.68px.
- Splash CTA: 13.7px.

## Elevation & effects

- Drop shadow observed on an NFT card:
  - Blur: 71.91px
  - Offset: 0px horizontal, 3.6px vertical
- Layer blur observed on an artwork placeholder:
  - Blur: 171.2px
- Background blur observed on the thumbnail:
  - Blur: 240px
- Background blur observed on a thumbnail ellipse:
  - Blur: 68px
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

- **Splash Screen:** Dark 428 × 926.76px entry screen with Caterpillar branding, a large welcome heading, decorative dark shape, and a blue “Let’s Get Started” CTA.
- **Home:** Dark NFT marketplace home with logo, notification control, hero copy, featured NFT cards, top-seller rows, and bid/follow actions.
- **Art View:** NFT detail screen with breadcrumb navigation, logo, notification control, large masked artwork, creator and sale metadata, description, bid and offer actions, and a heart control.
- **Thumbnail:** Promotional composition combining a dark panel, large “NFT App Design” typography, author credit, blurred circular outlines, and an image-led panel.
- **Terms:** Usage-terms layout with dark side panels, white content areas, large Poppins headings, gold explanatory copy, allowed and not-allowed statements, contact information, and social links.

## Notes for implementers

- Preserve the dark marketplace foundation using #111111 and #121212.
- Use #FFFFFF for primary text and #F4F5F6, #FCFCFC, or #FCFCFD for softer light surfaces and text.
- Use #3772FF for primary CTAs and offer actions.
- Use #45B26B for new-status indicators.
- Keep NFT cards image-forward with rounded masking, title, price, creator metadata, and a bid/favorite action row.
- Use Manrope for marketplace card and detail content; use Poppins for branding, splash, and terms content where the source specifies it.
- Do not introduce component families or token values not present in the source.
- Image fills are present throughout the marketplace and promotional screens; preserve their rounded masks and cropping behavior.
- The extraction contains no reusable component geometry or local design-token collections.
