---
name: hotjar-ui-screens-community
source: Hotjar UI Screens (Community) / UIKit
kind: design-system-context
---

# hotjar - Design System

## Overview

- Source page: `UIKit`.
- The extraction contains an introductory marketing screen and large before/after-generation showcase screens.
- No local variable collections, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- No component families or component sets were found.
- The source is primarily an unstyled visual extraction with repeated raw colors and typography values.

## Design language

- Typography is predominantly Inter Regular across interface content, with sizes ranging from `8px` to `32px`.
- The showcase screens use large, restrained headings and dense interface text.
- The introductory screen uses larger Manrope display and call-to-action typography in the source layout.
- Layouts use large fixed canvases, generous outer padding, stacked vertical sections, and wide horizontal showcase areas.
- Interface imagery, avatars, icons, and screenshots are prominent in the generated-design showcase.
- Rounded elements range from small control radii to large pill-like shapes.

## Color palette

Usage-ranked allowed colors from the raw extraction:

- `#000000` — 189 uses; primary black.
- `#010101` — 49 uses; near-black.
- `#030303` — 19 uses.
- `#020202` — 17 uses.
- `#060606` — 15 uses.
- `#040404` — 13 uses.
- `#0A0A0A` — 12 uses.
- `#0C0C0C` — 12 uses.
- `#050505` — 11 uses.
- `#101010` — 11 uses.
- `#070707` — 10 uses.
- `#1E1E1E` — 10 uses.
- `#2C2C2C` — 10 uses.
- `#181818` — 9 uses.
- `#FCFCFC` — 9 uses.
- `#080808` — 8 uses.
- `#171717` — 8 uses.
- `#1D1D1D` — 8 uses.
- `#2844B3` — 8 uses; only extracted blue accent.
- `#4D4D4D` — 8 uses.
- `#FDFAFB` — 8 uses.
- `#FDFDFD` — 8 uses.
- `#090909` — 7 uses.
- `#0B0B0B` — 7 uses.
- `#191919` — 7 uses.
- `#202020` — 7 uses.
- `#252525` — 7 uses.
- `#313131` — 7 uses.
- `#373737` — 7 uses.
- `#515151` — 7 uses.
- `#FFFFFF` — 7 uses; primary light color.
- `#131313` — 6 uses.
- `#161616` — 6 uses.
- `#1B1B1B` — 6 uses.
- `#242424` — 6 uses.
- `#272727` — 6 uses.
- `#292929` — 6 uses.
- `#353535` — 6 uses.
- `#5E5E5E` — 6 uses.
- `#5F5F5F` — 6 uses.
- `#686868` — 6 uses.
- `#E5E8F4` — 6 uses; pale blue-gray.
- `#F7F7F7` — 6 uses.
- `#F7F9FC` — 6 uses.
- `#F9FAFD` — 6 uses.

Use the near-black values as extracted text and interface shades rather than introducing additional neutrals. Use `#2844B3` as the extracted accent blue and the light values for pale surfaces or light controls.

## Type scale

### Inter Regular

Usage-ranked sizes:

- `14px` — 253 uses.
- `16px` — 143 uses.
- `15px` — 114 uses.
- `17px` — 107 uses.
- `18px` — 63 uses.
- `13px` — 58 uses.
- `19px` — 29 uses.
- `20px` — 19 uses.
- `25px` — 18 uses.
- `21px` — 17 uses.
- `12px` — 15 uses.
- `8px` — 14 uses.
- `9px` — 14 uses.
- `27px` — 11 uses.
- `10px` — 10 uses.
- `11px` — 9 uses.
- `26px` — 9 uses.
- `22px` — 7 uses.
- `28px` — 5 uses.
- `29px` — 5 uses.
- `32px` — 5 uses.

### Manrope

- SemiBold `24px` — 6 uses.
- The source layout also contains Manrope ExtraBold `40px` and `50px`, and Manrope Bold `30px`.

### Hierarchy guidance

- Use Inter Regular for most interface and data-display text.
- Use `14px` as the dominant body/interface size.
- Use `16px`–`18px` for prominent interface labels and supporting content.
- Use `20px`–`32px` for larger headings and showcase content.
- Use Manrope SemiBold `24px` where the source calls for emphasized introductory copy.
- Use Manrope ExtraBold `40px` or `50px` only for the large introductory headings shown in the source.
- Use Manrope Bold `30px` for the introductory call-to-action label.

## Spacing scale

No spacing variables were defined. Observed layout spacing and padding values:

- `0px` — repeated zero padding and zero-gap nested frames.
- `10px` — control padding and small gaps.
- `14px` — small stacked text gap.
- `16px` — outer introductory padding and small internal spacing.
- `24px` — introductory section gaps.
- `31px` — introductory button horizontal padding.
- `40px` — introductory logo/title gap.
- `66px` — introductory button vertical padding.
- `80px` — showcase section and document gaps.
- `88px` — introductory vertical section gap.
- `120px` — before/after showcase vertical section gap.
- `160px` — large screen outer padding.

Prefer the repeated values `10px`, `14px`, `24px`, `40px`, `80px`, `120px`, and `160px` when reconstructing layouts.

## Radius scale

No radius variables were defined. Observed radii:

- `1px`
- `2px`
- `3px`
- `4px`
- `6px`
- `7px`
- `8px`
- `9px`
- `10px`
- `11px`
- `12px`
- `16px`
- `21px`
- `23px`
- `39px`
- `41px`
- `69px`
- `87px`
- `131px`

Observed patterns include small radii for controls and image containers, medium radii around `8px`–`12px`, and large rounded or pill-like shapes using `23px`, `39px`, `41px`, `69px`, `87px`, or `131px`.

## Elevation & effects

- No local effect styles were found.
- No shadows or elevation tokens were extracted.
- Observed strokes include `1px` borders on showcase frames and selected controls.
- Allowed extracted stroke colors include `#FFFFFF`, `#FDFDFD`, `#FCFCFC`, `#E5E8F4`, and dark neutral values.
- Do not infer shadow, blur, opacity, or motion behavior from the source.

## Components

_None found in source._

No component families, component sets, or reusable component specifications were extracted. The raw showcase contains unnamed frames that visually resemble buttons, tags, avatars, icons, image containers, navigation elements, and dashboard cards, but they are not represented as component families in the source.

## Screen patterns

- **Intro screen:** A `1333px × 4727px` vertical page with `160px` outer padding and `88px` section gaps. It begins with an image/logo area and a large heading, followed by explanatory copy, a capability list, and a prominent rounded call-to-action.
- **Before-generation showcase:** A `10239.72px × 4727px` dark presentation canvas with `160px` outer padding, `120px` vertical gaps, a large white title, and a wide decorative image area.
- **After-generation showcase:** A `16133px × 4723px` dark presentation canvas with `160px` outer padding, `120px` vertical gaps, a large white title, and multiple `1920px × 1201px` generated-design documents arranged horizontally with `80px` gaps.
- **Generated document pattern:** Repeated screenshot-like documents contain top navigation rows, icons, avatars, text, buttons, image regions, tags, metric summaries, and dashboard-style cards.
- **Showcase framing:** Large presentation frames use contrasting borders and dark surfaces, while the embedded generated documents use image backgrounds and dense interface structures.
- **Control pattern:** Extracted controls include small rectangular buttons with radii around `3px`–`4px`, light filled controls, and larger rounded controls with radii up to `39px`.

## Notes for implementers

- Treat the source as a visual reference rather than a complete tokenized design system.
- Use only the listed colors; do not reproduce colors present in the raw dump that are outside the allowed palette.
- Preserve the strong contrast between black or near-black interface text, white or near-white surfaces, and the extracted blue accent `#2844B3`.
- Default to Inter Regular and the usage-ranked sizes, especially `14px`, `16px`, `15px`, and `17px`.
- Use Manrope only for the explicitly observed introductory display and call-to-action treatments.
- Build layouts around the extracted spacing values instead of inventing intermediate spacing tokens.
- Use small radii for standard controls and containers; reserve very large radii for pill-like or highly rounded showcase elements.
- Use image assets for screenshots, avatars, icons, and decorative imagery when reproducing the showcase patterns.
- Do not assume reusable component APIs, states, responsive rules, shadows, animation, or semantic color roles that were not extracted.
