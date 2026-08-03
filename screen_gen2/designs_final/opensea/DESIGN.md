---
name: opensea-mobile-design-community
source: OpenSea Mobile Design (Community)
kind: design-system-context
---

# opensea - Design System

## Overview

- Mobile design system extracted from the Figma file “OpenSea Mobile Design (Community),” Page 1.
- Primary mobile frame: `428px` wide.
- Screens include Home, Search, Collection, Create NFT, and Splash.
- Only one named component family was extracted: `splash`.
- No local variables, paint styles, color variables, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Clean white mobile surfaces with dark primary text.
- Blue is used for primary actions and the splash background.
- Content is organized around NFT imagery, collection cards, profile information, metrics, search, and creation forms.
- Card and input surfaces use subtle borders and `8px` corner radii.
- Primary actions use either `8px` or `100px` corner radii.
- Typography is primarily Archivo in the extracted design tokens, with Poppins and Montserrat also observed in screen content.
- The mobile layout uses repeated `396px` content regions inside a `428px` viewport.

## Color palette

Ranked by observed usage:

| Color | Uses | Role |
|---|---:|---|
| `#111315` | 27 | Primary text and dark UI elements |
| `#FFFFFF` | 24 | Page, card, input, and button text surfaces |
| `#98A2B3` | 15 | Input borders and placeholder text |
| `#11131514` | 10 | Subtle card borders |
| `#11131566` | 10 | Secondary metadata text such as “current bid” |
| `#2081E2` | 10 | Primary action backgrounds and splash background |
| `#000000` | 7 | Black headings and icons |
| `#11131580` | 3 | Muted collection metadata |
| `#2234CF` | 3 | Alternate timer and bid-action blue |

## Type scale

### Archivo

| Size | Weight | Observed usage |
|---:|---|---:|
| `16px` | Regular | 15 uses |
| `18px` | Medium | 25 uses |
| `24px` | SemiBold | 5 uses |

### Additional observed screen typography

- Poppins SemiBold: `18px`, `24px`, and `28px`.
- Poppins Medium: `18px`.
- Poppins SemiBold: `20px`.
- Montserrat SemiBold: `18px` and `20px`.

### Hierarchy

- `24px` Archivo SemiBold is used for section and page headings.
- `18px` Archivo Medium is used for prominent body labels, names, and metadata.
- `16px` Archivo Regular is used for supporting labels and form labels.

## Spacing scale

Observed spacing values:

- `0px` padding and gaps in tightly grouped content.
- `8px` gaps between labels and fields, and between collection items.
- `9px` gap between button icon and label.
- `16px` input padding and internal gaps.

## Radius scale

Observed radii:

- `0px` for unrounded price groups.
- `8px` for search fields, inputs, cards, timers, collection surfaces, and standard buttons.
- `100px` for large pill-style action buttons.

## Elevation & effects

- Drop shadows are used on header bars, image or navigation surfaces, and bid timers.
- Observed shadow specification: `4px`, offset `0 4`.
- Header-like rectangles use `50%` opacity.
- No local effect styles were defined.

## Components

### splash

- Component family: `splash`.
- Base size: `428px × 926px`.
- Uses a `#2081E2` full-screen background.
- Contains a centered white OpenSea logo treatment and white decorative mark shapes.
- The logo and decorative marks use `#FFFFFF`; additional internal details use `#2081E2`.

## Screen patterns

### Home

- `428px × 926px` white mobile home screen.
- Top navigation includes the OpenSea logo, menu icon, and search icon.
- Hero content includes a large NFT marketplace heading, supporting statement, notable drops, and a primary `Create NFT` action.
- NFT imagery is presented in compact horizontal content areas.
- A “Trending in all categories” section follows the hero content.

### Search

- `428px × 1524px` white screen.
- Uses a `24px` page heading and `24px` section headings.
- Search field: `396px × 54px`, `8px` radius, `1px` `#98A2B3` stroke, `16px` internal padding.
- Featured collection cards use `8px` radius, white fill, and `1px` `#11131514` stroke.
- Large collection cards are `396px × 563px`; compact cards are `190px × 271px`.
- Cards include artwork, profile information, current bid metadata, timers, and bid actions.

### Collection

- `428px × 1098px` white collection detail screen.
- Collection banner: `396px × 119px`, `8px` radius.
- Profile avatar: `64px × 64px`.
- Collection identity and metrics use Archivo typography.
- Follow action: `190px × 54px`, `8px` radius, `#2081E2` fill, white label.
- Collection items use a two-column grid of `190px × 271px` cards.

### Create NFT

- `428px × 1104px` white form screen.
- Page heading uses `24px` typography.
- Form content uses `396px` wide fields.
- Photo/video upload field: `396px × 162px`.
- Standard single-line fields: `396px × 54px`.
- Bio field: `396px × 119px`.
- Fields use `8px` radius, `1px` `#98A2B3` stroke, and `16px` internal padding.
- Primary `Post For Sale` action uses a pill-style `100px` radius treatment.

### Splash

- `428px × 926px` launch screen.
- Full-screen blue background with white OpenSea branding.
- Implement as the extracted `splash` component.

## Notes for implementers

- Target a `428px` mobile viewport and use `396px` content regions where the source specifies them.
- Preserve the observed color usage and prioritize `#111315`, `#FFFFFF`, `#98A2B3`, and `#2081E2`.
- Use Archivo as the default system typeface when implementing the extracted typography tokens.
- Use `24px` SemiBold for section headings, `18px` Medium for prominent labels and metadata, and `16px` Regular for supporting labels.
- Use `8px` radii for cards, inputs, timers, and standard buttons.
- Use `100px` radii only for the large pill-style primary actions.
- Keep collection cards image-led, with price metadata and action controls separated from the artwork.
- Reuse the consistent `396px` field width, `16px` field padding, and `8px` label-to-control spacing on forms.
- No reusable component specifications were extracted beyond the `splash` family. Treat other patterns as screen-level compositions rather than named component contracts.
