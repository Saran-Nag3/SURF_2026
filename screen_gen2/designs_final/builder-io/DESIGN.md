---
name: appstore-screenshot-builder-ios-ipad-community
source: AppStore - Screenshot Builder (iOS & iPad) (Community)
kind: design-system-context
---

# builder-io - Design System

## Overview

A screenshot-builder design system for iOS and iPad App Store presentation assets. The source includes research, iPhone, iPad, cover, and legacy pages. The visual system uses dark backgrounds, high-contrast white typography, large display text, rounded controls, and device-specific screenshot specifications.

## Design language

- High-contrast monochrome foundation with red accent colors.
- Large editorial display typography, especially Satoshi Variable at 150px, 200px, 400px, and 700px.
- Rounded containers and pill-like selector controls.
- Device categories are presented as large, horizontally arranged labels.
- Screenshot specifications pair a display size such as `6.5”` with a pixel dimension such as `1242x2688`.
- Primary controls use black fills with white text; secondary controls use light fills with dark text where present in the source.
- Layouts use generous vertical gaps and centered content.
- Research content includes source links, reference cards, imagery, and call-to-action controls.

## Color palette

Ranked by observed usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 132 | Primary light surface and text |
| `#000000` | 60 | Primary dark surface and text |
| `#444444` | 42 | Dark neutral |
| `#FFFFFFCC` | 33 | Secondary white text |
| `#555555` | 29 | Dark neutral |
| `#DA4848` | 12 | Red accent |
| `#333333` | 7 | Dark neutral |
| `#FF2500` | 7 | Bright red accent |
| `#9B1A1A` | 6 | Deep red accent |
| `#FF0000` | 6 | Red accent |
| `#FFFFFF14` | 6 | Subtle white overlay |
| `#111111` | 5 | Near-black text |
| `#222222` | 4 | Dark neutral |
| `#FFF7FA` | 4 | Pale pink-tinted surface |
| `#FFFFFFE5` | 4 | High-emphasis white overlay |

Use `#FFFFFF` and `#000000` as the primary contrast pair. Use red values only for accents and emphasis.

## Type scale

Observed typography values:

| Size | Family and style | Usage |
|---:|---|---|
| `150px` | Satoshi Variable Medium | Device selector labels |
| `400px` | Satoshi Variable Medium | Device display sizes |
| `200px` | Satoshi Variable Medium | Device pixel dimensions |
| `700px` | Satoshi Variable Bold | Large headings |
| `30.6px` | Inter Regular | Heading or body text |
| `30.6px` | Inter Medium | Heading or body text |
| `24px` | Inter Regular | Supporting text |
| `21.86px` | Inter Regular | Supporting text |
| `16px` | SF Pro Rounded Bold | Compact heading or control text |
| `10.97px` | SF Pro Rounded Medium | Small source links |
| `10px` | Inter Medium | Compact labels |
| `10px` | Inter SemiBold | Compact labels |
| `10px` | SF Pro Text Medium | Compact labels |
| `10px` | SF Pro Text Semibold | Compact labels |

Additional observed styles:

- Satoshi Variable Medium at `400px`, `200px`, `150px`, and `18px`.
- Satoshi Variable Bold at `700px` and `16px`.
- Satoshi Variable Regular at `120px`.
- SF Pro Rounded Bold at `52.66px`.
- Figtree ExtraBold at `32px`.
- P22 Mackinac Pro ExtraBold at `2000px`.

## Spacing scale

No spacing variables were defined. Observed layout values:

- `8px`
- `10px`
- `16px`
- `20px`
- `24px`
- `40px`
- `80px`
- `120px`
- `240px`
- `600px`

Observed patterns:

- Research card padding: `24px`.
- Research card internal gap: `16px`.
- Research button gap: `8px`.
- Research grid section: `80px`.
- Research grid gutter: `20px`.
- Large device specification group gap: `240px`.
- Device selector horizontal gap: `40px`.
- Device selector horizontal padding: `120px`.
- Device selector vertical padding: `80px`.
- Large device detail gap: `80px`.

## Radius scale

Observed corner radii:

- `0px`
- `8px`
- `16px`
- `80px`
- `444px`
- `4444px`

Use `16px` for research cards and buttons, `8px` for smaller research containers and imagery, `80px` for large device selector controls, and `4444px` for fully pill-shaped navigation controls.

## Elevation & effects

_No explicit elevation or effect styles found in source._

Observed visual treatments:

- Image-based fills are used extensively in research and screenshot presentation areas.
- Subtle overlay colors include `#FFFFFF14`.
- High-emphasis translucent white text uses `#FFFFFFCC` and `#FFFFFFE5`.

## Components

### `.label`

- Family: `.label`
- Size: `750x944px`
- Layout: vertical
- Padding: `0 0 0 0px`
- Gap: `80px`
- Sizing: fixed width, fixed height
- Alignment: centered/min
- Text styles: Satoshi Variable Medium at `240px` and `400px`

The `.label` family is used for device specification blocks containing a display size, pixel dimensions, and one or more device selector controls.

## Screen patterns

- **Research:** Source links, a prominent `Sources` heading, reference cards, image content, and paired calls to action such as `Visit our website` and `See our work`.
- **iPhone:** A large device-family navigation area for iPhone generations, followed by screenshot guidance and device-specific specification labels. Device labels include screen size, pixel dimensions, and model selectors.
- **iPad:** A dedicated iPad presentation page is listed in the source. Use the same high-contrast, large-type device specification approach where applicable.
- **Cover:** A cover or introductory presentation page is listed in the source.
- **Old:** A legacy page is listed in the source and should not override the current iPhone, iPad, or research patterns.

## Notes for implementers

- Use only the documented palette values.
- Preserve the strong black-and-white contrast and use red sparingly as an accent.
- Prefer Satoshi Variable for large device and marketing text.
- Keep device specification labels visually dominant, with pixel dimensions subordinate to the display-size text.
- Use rounded controls with centered white text on black fills for primary selections.
- Use `16px` internal gaps for research cards and `240px` vertical separation for large device specification groups.
- Do not introduce undocumented spacing variables, radius values, component families, or effect styles.
