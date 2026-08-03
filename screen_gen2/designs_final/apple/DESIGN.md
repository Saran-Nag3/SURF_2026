---
name: apple-intelligence-ui-kit-community
source: Apple Intelligence UI KIT (Community)
kind: design-system-context
---

# apple - Design System

## Overview
Apple Intelligence and Siri animation UI kit for Apple device mockups and desktop templates. The source contains Thumbnail, Templates, and Components pages, with Mac, iPhone, iPad, and iMac presentation patterns.

## Design language
- Apple platform styling with light and dark label/material treatments.
- Siri and Apple Intelligence states use layered, multicolor angular gradients with progressively blurred strokes.
- Interfaces combine wallpaper-backed screens, translucent materials, rounded containers, dock areas, status bars, and device mockups.
- Primary high-usage colors are #FFFFFF and #000000, with red accents and translucent white/black materials.
- Typography uses SF Pro variants with compact tracking and Apple-style text roles.

## Color palette
Ranked by reported usage where available:

| Color | Usage | Context |
|---|---:|---|
| #FFFFFF | 344 raw uses; 2 style uses | White, primary light surfaces, Grays/White |
| #000000 | 151 raw uses; 1 style use | Black, primary labels, Grays/Black |
| #FCFCFEB2 | 84 raw uses | Translucent light surface |
| #FFFFFF99 | 31 raw uses | Translucent white |
| #FFFFFFD9 | 16 raw uses | High-opacity white |
| #1B1F2F5C | 12 raw uses | Translucent dark tone |
| #ABB0BAB2 | 12 raw uses | Translucent neutral |
| #EBF0F780 | 12 raw uses | Translucent light neutral |
| #ABB0BA99 | 11 raw uses | Translucent neutral |
| #9747FF | 10 raw uses | Template/component stroke |
| #03AAF6 | 8 raw uses | Accent |
| #C2C2C2 | 8 raw uses | Vibrant secondary dark |
| #ED75FA | 8 raw uses | Accent |
| #F62B6A | 8 raw uses | Accent |
| #FFFFFF05 | 8 raw uses | Very low-opacity white |
| #FFFFFF1A | 8 raw uses | Low-opacity white |
| #262626 | 7 raw uses | Dark neutral |
| #FF3A2F | 7 raw uses | Red accent |
| #FFFFFF33 | 7 raw uses | Translucent white section fill |
| #00000080 | 6 raw uses | Translucent black |
| #0000009E | 6 raw uses | High-opacity black |
| #414141 | 6 raw uses | Separator/dark neutral |
| #7C7C7C | 6 raw uses | Gray |
| #3C3C434D | — | Labels/Tertiary |
| #252525B2 | — | Materials/Thin - Dark |
| #9C9C9C | — | Materials/Thin - Dark |
| #7F7F7F80 | — | Vibrant Secondary - Dark |
| #BFBFBF70 | — | Materials/Ultrathin |

## Type scale
Named text styles:

| Style | Font | Size / line height | Tracking |
|---|---|---:|---:|
| Body/Regular | SF Pro Regular, 400 | 17px / 22px | -0.43px |
| Callout/Regular | SF Pro Regular, 400 | 16px / 21px | -0.31px |
| Subheadline/Regular | SF Pro Regular, 400 | 15px / 20px | -0.23px |
| Subheadline/Emphasized | SF Pro Semibold, 590 | 15px / 20px | -0.23px |
| Body/Emphasized | SF Pro Semibold, 590 | 13px / 16px | 0px |
| Headline/Regular | SF Pro Bold, 700 | 13px / 16px | 0px |
| Caption1/Regular | SF Pro Regular, 400 | 12px / 16px | 0px |

Additional raw sizes present: 37.5px SF Pro Light, 31px SF Pro Regular, 27px SF Pro Regular, 25px SF Pro Regular, 22px SF Pro Regular, 21px SF Pro Regular, 20px SF Pro Regular, 19.5px SF Pro Regular, 19px SF Pro Regular, 17px SF Pro Semibold, 16.3px SF Pro Regular, 13px SF Pro Regular, 12px SF Pro Medium, and 11.5px SF Pro Bold.

The Thumbnail title uses SF Pro Display Semibold at 125px.

## Spacing scale
_None found in source._

## Radius scale
- 2px: iMac content frame.
- 5px: lock screen frame.
- 16px: Mac dock.
- 41px: iPhone dock.
- 60px: iPhone screen and animation frame.
- 100px: search field, home indicator, and other pill-shaped elements.
- 1px: dock separator.

## Elevation & effects
- Background blur: 30px for the Mac dock; 50px for menu bars and iPhone translucent materials; 80px for the iOS mini tip.
- Layer blur: 2px, 4px, 10px, and 20px for Siri animation stroke layers.
- Siri animation stroke widths: 2px, 4px, 5px, 7px, 7.5px, 10px, 10.5px, and 15px depending on device and layer.
- Mac dock includes a drop shadow with 0px offset and #00000080.
- iPhone mockup includes a drop shadow with 4px offset on the x-axis and 4px offset on the y-axis.
- iOS mini tip includes a drop shadow with 30px blur and 10px y-offset.
- Siri animation borders use layered angular gradients with four blur levels: S, M, L, and XL.

## Components
Only the following extracted component families are available:

### Device and animation templates
- `SiriAnimationShakyPhone15ProMax` — 430x932px; variants: End, Start, Step1, Step2, TaptoStart.
- `SiriAnimationiPhone15ProMax` — 430x932px; variants: End, Start, Step1, Step2, TaptoStart.
- `SiriAnimationShakyPhone15Pro` — 393x852px; variants: End, Start, Step1, Step2, TaptoStart.
- `SiriAnimationiPhone15Pro` — 393x852px; variants: End, Start, Step1, Step2, TaptoStart.
- `SiriAnimationiPadPro11"` — 834x1194px; variants: End, Start, Step1, Step2, TaptoStart.
- `SiriAnimationShaky 14"` — 1512x982px; variants: End, Start, Step1, Step2.
- `SiriAnimationShaky 16"` — 1728x1117px; variants: End, Start, Step1, Step2.
- `SiriAnimationShaky 21"` — 2246x1266px; variants: End, Start, Step1, Step2.

### Apple Intelligence and Siri icons
- `AI_icon_black` — 105x103px; white fill.
- `AI_icon_white` — 105x103px; white fill.
- `AI_158x158_icon` — 158x158px.
- `AI_210x210_icon` — 210x210px.
- `AI_360x360_icon_gradient` — 360x352px.
- `AI_360x360_icon` — 360x360px.
- `Siri_158x158_icon` — 158x158px.
- `Siri_210x210_icon` — 210x210px.
- `Siri_360x360_icon_gradient` — 313.88x313.76px.
- `Siri_360x360_icon` — 360x360px.
- `Vector_black` — 137.76x137.71px; white fill.
- `Vector_white` — 137.76x137.71px; white fill.

### General component
- `Component 1` — 422x374px; #FFFFFF fill; uses SF Pro Regular at 17px, 27px, 25px, and 20px plus Callout/Regular and Body/Regular; variants: Default, Variant2.

## Screen patterns
- **Thumbnail:** 1512x982px white canvas with a large Apple Intelligence Siri Animation UI KIT title and supporting imagery.
- **Mac templates:** MacBook Pro 16-inch, MacBook Pro 14-inch, and iMac 21-inch layouts. Each combines a desktop wallpaper, 24px menu bar, centered Siri animation, and a bottom dock.
- **Desktop Siri animation:** Uses four full-screen blurred gradient stroke layers. MacBook Pro templates use 1512x982px or 1728x1117px content; iMac uses 2246x1266px content.
- **Mac dock:** 1244x70px overall, with a 1244x65px translucent background, 16px radius, two separators, and grouped 50x60px app icons.
- **iPhone templates:** iPhone 15 Pro presentation uses a 393x852px Siri animation over a 393x858.72px rounded home screen. It includes a status bar, app icon area, translucent search field, and translucent dock.
- **iPhone animation:** Four rounded stroke layers use 2px, 5px, 7px, and 10px strokes with 2px, 4px, 10px, and 20px blur.
- **Lock screen mockup:** 401x857px rounded frame with wallpaper, home indicator, and an iOS mini tip overlay.
- **Responsive device coverage:** Use the provided device-specific component families rather than resizing an unrelated family.

## Notes for implementers
- Prefer named typography styles where applicable; preserve the listed font, weight, size, line height, and tracking.
- Use #FFFFFF and #000000 as the dominant base colors, then apply translucent material colors for overlays.
- Reproduce Siri animation as layered gradient strokes with the specified widths and blur values; do not collapse the layers into a single border.
- Preserve the documented device dimensions and component variant names.
- Use the available component families exactly as named; no additional extracted component families are available.
- No spacing variables, radius variables, motion variables, local effect styles, or local grid styles were found.
