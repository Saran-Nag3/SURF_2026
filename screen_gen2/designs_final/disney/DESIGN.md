---
name: disney-app-replica-for-ios-and-ipados-community
source: Disney+ App Replica for iOS and iPadOS (Community)
kind: design-system-context
---

# disney - Design System

## Overview

- Disney+ iOS and iPadOS app replica design system from the Figma Community file “Disney+ App Replica for iOS and iPadOS (Community)”.
- Primary product surfaces use iOS at `393x852px` and iPadOS at `1366x1024px`.
- The system includes Disney+ media browsing patterns, navigation, profiles, settings rows, media actions, content artwork, and platform-specific chrome.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Dark Disney+ media UI uses `#1A1C28` as the dark blue foundation, with white and near-white content colors.
- Primary interactive blue is `#0072D2`.
- Typography is primarily Avenir World for Disney v2, with SF Pro and Inter appearing in raw or editorial source content.
- Interfaces combine compact labels and captions with larger, high-contrast headings.
- Media surfaces use cover artwork, translucent material overlays, bottom navigation, segmented controls, and sheet headers.
- iOS and iPadOS are both supported through component variants.
- Editorial and licensing pages use large Inter and SF Pro display typography distinct from the app UI.

## Color palette

Colors are de-duplicated and ranked by reported raw usage where available.

| Color | Usage / role |
|---|---|
| `#FFFFFF` | 528 raw uses; primary white, system primary, dark labels |
| `#000000` | 67 raw uses; black text and foundational contrast |
| `#FFFFFF66` | 52 raw uses; translucent white |
| `#FFFFFF1A` | 50 raw uses; low-opacity white |
| `#404040` | 49 raw uses; raw gray |
| `#F9F9F9CC` | 18 raw uses; White / White - 80 |
| `#9747FF` | 12 raw uses; raw accent color |
| `#1A1C28` | 8 raw uses; Blue / Blue - Dark |
| `#000000D9` | 7 raw uses; strong black overlay |
| `#FFFFFF99` | 7 raw uses; translucent white |
| `#00000080` | 5 raw uses; Black / Black 50 |
| `#0072D2` | Primary / Primary; primary blue and Avatar fill |
| `#F9F9F9` | White / White |
| `#F9F9F980` | White / White - 50 |
| `#F9F9F933` | White / White - 20 |
| `#F9F9F91A` | White / White - 10; Section Heading fill |
| `#CACACA` | Gray / Light Gray |
| `#4C4E59` | Gray / Gray |
| `#252525A6` | Material Overlay - Regular and Thick |
| `#FFFFFF4D` | System Colors / System Tertiary |
| `#1A1C28D9` | Media Sheet Header gradient, `0%` |
| `#1A1C289B` | Media Sheet Header gradient, `26%` |
| `#1A1C2861` | Media Sheet Header gradient, `44%` |
| `#1A1C2829` | Media Sheet Header gradient, `65%` |
| `#1A1C2812` | Media Sheet Header gradient, `76%` |
| `#1A1C2808` | Media Sheet Header gradient, `86%` |
| `#1A1C2800` | Media Sheet Header gradient, `100%` |

Most-used named styles include White / White (`264` uses), White / White - 80 (`95`), System Primary (`53`), Label - Bold (`39`), White / White - 10 (`26`), White / White - 20 (`24`), Label - Regular (`23`), Caption 2 (`22`), Labels / Primary - Dark (`21`), System Tertiary (`16`), Primary / Primary (`13`), and Black / Black (`11`).

## Type scale

Font family names and values are preserved exactly from the extraction.

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Heading 1 | Avenir World for Disney v2 Demi | 600 | `24px` | auto | `0.24px` |
| Heading 2 | Avenir World for Disney v2 Demi | 600 | `18px` | `22px` | `0px` |
| Body | Avenir World for Disney v2 AvenirWorldforDisneyv2 | 400 | `18px` | `26px` | `-0.09px` |
| Label - Bold | Avenir World for Disney v2 Demi | 600 | `15px` | `22px` | `0px` |
| Label - Regular | Avenir World for Disney v2 AvenirWorldforDisneyv2 | 400 | `15px` | `22px` | `0px` |
| Label Wide - Bold | Avenir World for Disney v2 Demi | 600 | `15px` | auto | `1.5px` |
| Label Wide - Regular | Avenir World for Disney v2 AvenirWorldforDisneyv2 | 400 | `15px` | auto | `1.5px` |
| Caption 1 | Avenir World for Disney v2 AvenirWorldforDisneyv2 | 400 | `12px` | `13px` | `-0.24px` |
| Caption 2 | Avenir World for Disney v2 Demi | 600 | `10px` | auto | `0.1px` |
| Caption 3 | Avenir World for Disney v2 AvenirWorldforDisneyv2 | 400 | `10px` | auto | `1.8px` |

Raw editorial typography also includes:

- Inter: Regular `17px`, `28px`, `36px`, `50px`; Medium `28px`, `40px`; SemiBold `40px`, `50px`, `80px`, `120px`.
- SF Pro: Medium `12px`, `60px`, `78px`; Regular `17px`, `28px`, `36px`, `50px`, `88px`; RegularItalic `28px`; Semibold `17px`, `50px`, `120px`.
- Avenir World for Disney v2 AvenirWorldforDisneyv2: `12px`.
- Raw hierarchy ranges from `10px` captions through `120px` editorial display headings.

## Spacing scale

No spacing variables were found. Concrete spacing values used by components include:

- `0px`
- `4px`
- `6px`
- `10px`
- `16px`
- `18px`
- `20px`
- `30px`
- `40px`
- `50px`
- `100px`
- `116px`
- `120px`
- `150px`
- `172px`
- `180px`
- `267px`

Common component padding and gaps:

- Tab Bar: padding `0 100 16 100px`, gap `10px`.
- Row: padding `18px`, gap `267px`.
- Button: horizontal padding `10px`, gap `6px`.
- Section Heading: horizontal padding `20px`, gap `10px`.
- Media Action: padding `4px`, gap `10px`.
- Primary Media Actions: vertical padding `16px`, gap `30px`.
- Media Sheet Header: top/right/bottom/left padding `16 16 40 0px`.
- Info Block: padding `20 20 20 50px`, gap `116px` in the component spec.
- Navigation Bar: no padding or gap.
- Content Cover Art, Media — Core, and Home Indicator: no spacing values specified.

## Radius scale

- `4px`: Content Cover Art and Button.
- `16px`: editorial cheetah logo rectangle.
- `100px`: Avatar.
- No local radius variables were found.

## Elevation & effects

- Material Overlay - Regular: background blur `36px`; fill `#252525A6`.
- Material Overlay - Thick: background blur `50px`; fill `#252525A6`.
- Tab Bar uses Material Overlay - Regular.
- Media Sheet Header uses a linear gradient:
  - `#1A1C28D9` at `0%`
  - `#1A1C289B` at `26%`
  - `#1A1C2861` at `44%`
  - `#1A1C2829` at `65%`
  - `#1A1C2812` at `76%`
  - `#1A1C2808` at `86%`
  - `#1A1C2800` at `100%`
- No elevation, shadow, or motion tokens were found.

## Components

All component families in the source:

### Icon

- Size `14x14px`; variants also support `18x18px`, `24x24px`, `26x26px`, and `28x28px`.
- Fixed width and height; centered alignment; no padding or gap.
- Variants: Active Download, Checkmark, Chevron Left Circle Fill, Chevron Right, Close Circle Fill, Download, GroupWatch, House, Lock, Magnifying Glass, On Device, Paused Download, Placeholder, Play, Plus, Share, Trailer, Trash.

### Navigation Bar

- Size `1366x64px`; fixed width and height.
- Variants: OS iOS or iPadOS; Type Navigation Bar or Status Bar.
- Uses Label - Regular and platform/status-bar text styles.

### Tab Bar

- Size `1366x64px`; horizontal layout.
- Padding `0 100 16 100px`; gap `10px`; space-between and center alignment.
- Uses Material Overlay - Regular and Label - Regular.
- Variant: OS iOS or iPadOS.

### Tab

- Size `72x24px`; horizontal layout; gap `10px`; centered vertically.
- Variants: Selected true or false; Type Avatar or Icon.
- Uses Label - Regular.

### Home Indicator

- Size `393x21px`.
- Variants: OS iOS or iPadOS.

### Profile

- Size `104x169px`; vertical layout; gap `10px`; centered alignment.
- Variants: Add Profile or Profile.
- Uses Label - Bold.

### Avatar

- Size `36x36px`; radius `100px`; fill `#0072D2`.
- Variants: Large or Small.

### Row

- Size `353x55px`; horizontal layout.
- Padding `18px`; gap `267px`; space-between and center alignment.
- Stroke: White / White - 20, `1px`.
- Variants: Trailing Default, None, or Toggle.
- Uses Label - Bold.

### Toggle

- Size `45x24px`.
- Variants: Position FALSE or TRUE.

### Media — Core

- Size `520x207px`; vertical layout; no padding or gap.
- Variants: OS iOS or iPadOS.
- Uses Body, Caption 2, Label Wide - Bold, and Avenir World for Disney v2 AvenirWorldforDisneyv2 `12px`.

### Segment

- Size `63x30px`; vertical layout; gap `6px`; centered alignment.
- Variants: Selected true or false.
- Uses Label Wide - Regular.

### Content Cover Art

- Size `361x203px`; radius `4px`; fill `#0072D2`.
- Variants: OS iOS or iPadOS.

### Media Action

- Size `34x50px`; vertical layout.
- Padding `4px`; gap `10px`; bottom and center alignment.
- Uses Caption 2.

### Button

- Size `353x40px`; radius `4px`; horizontal layout.
- Horizontal padding `10px`; gap `6px`; centered alignment.
- Fill White / White.
- Uses Label Wide - Bold.

### Section Heading

- Size `393x40px`; horizontal layout.
- Horizontal padding `20px`; gap `10px`; centered vertically.
- Fill White / White - 10.
- Uses Caption 3.

### Primary Media Actions

- Size `273x85px`; horizontal layout.
- Vertical padding `16px`; gap `30px`; centered alignment.
- Uses Caption 2.

### Media Sheet Header

- Size `393x84px`; horizontal layout.
- Padding `16 16 40 0px`; max and center alignment.
- Uses the dark linear gradient defined in Elevation & effects.

### iOS

- Canvas size `393x852px`.
- Fill `#FFFFFF`.

### iPadOS

- Canvas size `1366x1024px`.
- Fill `#FFFFFF`.

### Info Block (cheetah ui)

- Component size `650x319px`; vertical layout.
- Padding `20 20 20 50px`; gap `116px`.
- Fixed width and height.
- Stroke `#FFFFFF`, `1px`.
- Uses Inter Regular `28px`, Inter Regular `36px`, and Inter SemiBold `50px`.

## Screen patterns

- **Cover / promotional landing:** Large editorial display typography, white text on image-led cover content, and promotional messaging for the replica catalog.
- **Welcome and product overview:** Large light-background editorial sections introduce cheetah ui, supported customization, responsive layouts, components, iconography, colors, typography, dark mode, and updates.
- **License agreement:** Large black Inter headings and body copy organize permitted and prohibited uses into “Good to go!” and “No bueno.” groupings.
- **Disney+ app surfaces:** iOS and iPadOS media layouts use navigation bars, tab bars, tabs, profiles, avatars, rows, toggles, segments, cover art, media actions, primary media actions, and sheet headers.
- **Media detail surface:** Media — Core, Content Cover Art, Media Action, Primary Media Actions, and Media Sheet Header combine into a content-detail pattern with artwork, metadata, actions, and translucent/gradient overlays.
- **Settings or list surface:** Rows with optional trailing content or toggles are separated by a `1px` White / White - 20 stroke.
- **Platform chrome:** Navigation Bar, Tab Bar, Home Indicator, iOS, and iPadOS provide separate platform variants and canvas dimensions.

## Notes for implementers

- Use only the named Avenir World for Disney v2 styles for the core Disney+ UI unless reproducing an editorial or raw source screen that explicitly uses Inter or SF Pro.
- Preserve the distinction between Label, Label Wide, Caption, Body, and Heading styles; tracking differs materially between these families.
- Prefer the most-used white values for interface hierarchy: `#FFFFFF`, `#F9F9F9CC`, `#F9F9F91A`, and `#F9F9F933`.
- Use `#1A1C28` for dark Disney+ surfaces and `#0072D2` for primary blue accents.
- Treat iOS and iPadOS as explicit component variants rather than assuming one shared chrome layout.
- Keep the listed fixed component dimensions when reproducing the extracted designs.
- Use the provided blur effects and Media Sheet Header gradient for material and media overlays; no additional shadow or elevation values are defined.
- Do not infer spacing, radius, motion, grid, or color values that are not listed in this document.
