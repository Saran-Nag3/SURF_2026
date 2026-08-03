---
name: ios-26-liquid-glass-texture-community
source: iOS 26 Liquid Glass texture (Community)
kind: design-system-context
---

# lex - Design System

## Overview

- Source: iOS 26 Liquid Glass texture (Community).
- Pages: Thumbnail, Glass, Component.
- Primary component family: Glass button.
- Visual focus: iOS 26 liquid glass texture with translucent appearance, background blur, texture, and layered inner shadows.

## Design language

- Use a liquid-glass treatment with a dark button fill, translucent appearance layer, background blur, texture, and layered inner shadows.
- Use white text on the glass button.
- Typography combines Space Grotesk for the large headline and SF Pro Semibold for button and display text.
- The Thumbnail screen uses an image background and presents “iOS 26”, “iOS Glass texture”, a glass button, and a Figma mark.

## Color palette

Ranked by recorded usage where available:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 5 |
| `#0000001F` | 3 |
| `#1A1A1A` | 3 |
| `#F2F2F280` | Not specified |
| `#999999` | Not specified |
| `#B3B3B3` | Not specified |
| `#FFFFFF80` | Not specified |

- Primary button fill: `#1A1A1A`.
- Button and headline text: `#FFFFFF`.
- Glass appearance layer: `#0000001F`.

## Type scale

| Role | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Headline/Large | Space Grotesk | 400 Regular | 40px | 40px | 0px |
| Glass button label | SF Pro | Semibold | 22.29px | Not specified | Not specified |
| Display heading | SF Pro | Semibold | 80px | Not specified | Not specified |

- Headline/Large is used for “iOS 26” on the Thumbnail screen.
- SF Pro Semibold 22.29px is used for the Glass button label.
- SF Pro Semibold 80px is used for “iOS Glass texture” and “iOS 26” screen headings.

## Spacing scale

_No spacing variables found in source._

- Glass button component padding: `16px 24px 16px 24px`.
- Glass button gap: `0px`.
- Thumbnail frame padding: `80px 80px 80px 80px`.
- Thumbnail frame gap: `27px`.
- Thumbnail instance padding: `24px 40px 24px 40px`.

## Radius scale

_No radius variables found in source._

- Glass button radius: `185.71px`.

## Elevation & effects

- Glass button background blur: `10px`.
- Glass button inner shadow:
  - `40.86px` offset `0 0`, color `#F2F2F280`.
  - `0px` offset `0 0`, color `#999999`.
  - `1.86px` offset `-3.71 -3.71`, color `#B3B3B3`.
  - `1.86px` offset `3.71 3.71`, color `#B3B3B3`.
  - `0.93px` offset `5.57 5.57`, color `#FFFFFF80`.
- Glass button appearance layer:
  - Fill: `#0000001F`.
  - Texture effect.
  - Background blur: `12px`.
- No local effect styles found.

## Components

### Glass button

- Family: Glass button.
- Component size: `177x62px`.
- Layout: horizontal.
- Padding: `16px 24px 16px 24px`.
- Gap: `0px`.
- Alignment: min/center.
- Sizing: fixed width and fixed height.
- Fill: `#1A1A1A`.
- Radius: `185.71px`.
- Label:
  - Font: SF Pro Semibold.
  - Size: `22.29px`.
  - Fill: `#FFFFFF`.
- Appearance layer:
  - Size: `280x280px`.
  - Centered within the button.
  - Fill: `#0000001F`.
  - Texture effect.
  - Background blur: `12px`.
- Button effects:
  - Background blur: `10px`.
  - Inner shadows using `#F2F2F280`, `#999999`, `#B3B3B3`, and `#FFFFFF80` as specified in Elevation & effects.
- Thumbnail instance variant:
  - Size: `209x78px`.
  - Padding: `24px 40px 24px 40px`.
  - Same radius, fill, appearance layer, and effects.

## Screen patterns

- **Thumbnail / Thumbnail**
  - Fixed frame: `800x560px`.
  - Padding: `80px` on all sides.
  - Gap: `27px`.
  - Uses an image fill.
  - Contains a white `40px` “iOS 26” headline, an `80px` “iOS Glass texture” heading, a Glass button instance, and a Figma mark positioned at the top right.

- **Glass / BG**
  - Fixed rectangle: `472x1023px`.
  - Uses an image fill.

- **Glass / iOS 26**
  - Displays “iOS 26” in SF Pro Semibold at `80px`.
  - Text fill: `#FFFFFF`.

- **Glass / Glass button**
  - Centers the `177x62px` Glass button.
  - Uses the standard Glass button construction and effects.

- **Component / Glass button**
  - Defines the reusable `177x62px` Glass button component.
  - Uses the standard appearance layer, label styling, radius, blur, texture, and inner shadows.

## Notes for implementers

- Use only the documented Glass button family.
- Preserve the fixed component size of `177x62px` for the reusable component.
- Preserve the `185.71px` radius and the documented padding values.
- Keep the appearance layer centered at `280x280px`; apply `#0000001F`, texture, and `12px` background blur.
- Apply the documented `10px` button background blur and all five documented inner shadows.
- Use SF Pro Semibold at `22.29px` for button labels and `#FFFFFF` for button text.
- Use Space Grotesk Regular at `40px` with `40px` line height and `0px` tracking for Headline/Large.
- No local variables, spacing styles, radius styles, motion tokens, grid styles, or effect styles were found.
