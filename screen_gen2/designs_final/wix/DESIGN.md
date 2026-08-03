---
name: web-design-wix-studio-project-community
source: Web Design - Wix Studio Project (Community)
kind: design-system-context
---

# wix - Design System

## Overview

- Source: Figma file “Web Design - Wix Studio Project (Community)”.
- Source pages: Cover, Design, Asset, Typography.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.
- Primary visual direction: dark, glass-like presentation layouts with blue/cyan accents, soft gradients, translucent surfaces, rounded containers, and blurred shadows.
- Primary typeface: Inter. SF Pro, Poppins, and Barlow also appear in source typography.

## Design language

- Use dark presentation surfaces with white primary text and translucent white secondary labels.
- Use blue/cyan gradients for emphasis, illustrations, icons, and decorative elements.
- Use translucent cards and borders to create layered glass surfaces.
- Use rounded cards, pills, circular avatars, and circular icon treatments.
- Keep layouts spacious with centered content, large display headings, and clear card groupings.
- Use blur and multi-layer shadows to separate floating elements from dark backgrounds.
- Decorative bubbles, connection lines, illustrations, and logos are visual assets rather than general-purpose layout primitives.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage / role |
|---|---:|
| `#FFFFFF` | 1285 uses; primary white and card fills |
| `#3C98CC` | 426 uses; blue accent |
| `#A8FFFF` | 142 uses; cyan accent |
| `#C4C4C4` | 142 uses; neutral gray |
| `#C6E3FF` | 142 uses; pale blue |
| `#FFFFFF1F` | 142 uses; translucent white surface |
| `#8EDCFC` | 104 uses; light blue |
| `#5DCCFC` | 86 uses; light blue accent |
| `#37C9E9` | 81 uses; cyan accent |
| `#3CE5FC` | 80 uses; bright cyan |
| `#1986CC` | 71 uses; strong blue and button border |
| `#C4F3FD` | 54 uses; pale cyan |
| `#FFFFFF4D` | 53 uses; translucent white border |
| `#FFFFFF80` | 48 uses; translucent white |
| `#3CE5FC4D` | 40 uses; translucent cyan |
| `#FFFFFF1A` | 34 uses; translucent white surface |
| `#55C2FF4D` | 32 uses; translucent blue border |
| `#0070AF` | 30 uses; dark blue |
| `#00000087` | 27 uses; translucent black |
| `#C8F5FF` | 26 uses; pale cyan |
| `#FFFFFF05` | 20 uses; very subtle white surface |
| `#01A1DE` | 19 uses; cyan-blue accent |
| `#35B6FE1A` | 19 uses; translucent blue |
| `#FFFFFF33` | 18 uses; translucent white |

Additional named tokens:

- `#262626`: Grey/15 and Grey/20.
- `#E6E6E6`: Grey/90.
- `#98989A`: Grey/60.
- `#F2C94C`: yellow.
- `#F2994A`: orange.
- `#FFFFFF99`: secondary dark-mode label text.
- `#EBEBF54D`: tertiary dark-mode label.
- `#EBEBF599`: secondary dark-mode label.
- `#00000080`: dark-mode container background and border.
- `#00000099`: stroke.
- `#000000`: Bubbles1 and Bubbles2 fill.
- `#0000000D`, `#0000001A`, `#00000026`: shadow layers.
- `#FFFFFF66`: Button fill.
- `#FFFFFF05`, `#FFFFFF1A`, `#FFFFFF1F`, `#FFFFFF33`, `#FFFFFF4D`, `#FFFFFF80`, `#FFFFFF99`: translucent white surfaces, borders, and labels.
- Light blue gradient: linear gradient from `#2FB8FF` at 0% to `#9EECD9` at 100%.

## Type scale

Named typography tokens:

| Token | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Headings/Heading 1 | Inter | 600 | 60px | auto | -3px |
| Headings/Heading 2 | Inter | 600 | 50px | auto | -2px |
| Headings/Heading 4 | Inter | 600 | 30px | auto | -1.2px |
| Mobile Headings/Mobile Heading 4 | Inter | 600 | 24px | auto | -0.96px |
| Body Large/Medium | Inter | 500 | 18px | 27px | 0px |
| Body/Regular | Inter | 400 | 16px | 24px | 0px |
| Body/Medium | Inter | 500 | 16px | 24px | 0px |
| Body/Body 2 | Inter | 400 | 15px | 23px | 0px |
| Footnote/Medium | Inter | 500 | 14px | 20px | 0px |
| Footnote/Regular | Inter | 400 | 14px | 20px | 0px |
| Default / Regular / LargeTitle | SF Pro Display | 400 | 34px | 41px | 0.37px |
| Default / Bold / Title1 | SF Pro Display | 700 | 28px | auto | 0.36px |
| Default / Regular / Title3 | SF Pro Display | 400 | 20px | 24px | 0.38px |
| Default / Regular / Body | SF Pro Text | 400 | 17px | 22px | -0.41px |

Observed raw typography also includes Inter at 4.3px, 5.29px, 6.82px, 8.4px, 12px, 13px, 14px, 16px, 18px, and 24px; Poppins Medium at 14px and 25px; Barlow Medium at 16px; SF Pro Display Medium at 20px; SF Pro Compressed Regular at 22px; SF Pro Semibold at 13px; SF Pro Bold at 15px; and SF Pro Display Bold at 13.65px.

## Spacing scale

No spacing variables were found.

Observed component and layout spacing:

- Button padding: `4px 20px 4px 20px`; gap `10px`.
- Icons padding: `8px` on all sides; gap `10.73px`.
- Card Slide Animation and SliderContent use content-specific layouts; no universal spacing token is defined.
- Cover presentation horizontal padding: `100px`; gap `50px`.
- Cover profile card padding: `20px`; gap `30px`.
- Cover license card padding: `20px`; gap `30px`.
- Cover contact and social card padding: `20px`; internal gaps include `10px`, `20px`, and `34px`.
- Cover design-code card padding: `28px 20px`; gap `10px`.
- Cover content gaps include `12px`, `24px`, `38.41px`, `50px`, and `97px`.
- Illustration and connection layouts use component-specific spacing rather than a shared scale.

## Radius scale

Observed radii:

- `10px`: presentation profile and license cards; some decorative elements.
- `13.23px`: treatment and alert containers.
- `13.34px`: hover card.
- `14.67px`: nested button instance.
- `22px`: contact, Wix Studio, and DesignCode cards.
- `30.68px`: nested icon instance.
- `44px`: avatar.
- `46px`: Icons component.
- `70.5px`, `72px`: social avatars.
- `155.32px`: Figma logo treatment.
- `0px`: square and decorative containers where specified.

## Elevation & effects

Named effects:

- `Shadow-Blur/sm`: background blur `20px`; drop shadow `10px` at offset `0 10` using `#0000001A`; drop shadow `4px` at offset `0 4` using `#0000000D`; drop shadow `0px` at offset `0 1` using `#0000000D`.
- `Shadow-Blur/md`: background blur `20px`; drop shadow `30px` at offset `0 15` using `#00000026`; drop shadow `10px` at offset `0 5` using `#0000001A`; drop shadow `4px` at offset `0 2` using `#0000001A`.
- `Shadow-Blur/lg`: background blur `20px`; drop shadow `30px` at offset `0 15` using `#00000026`; drop shadow `20px` at offset `0 10` using `#0000001A`; drop shadow `6px` at offset `0 3` using `#0000001A`.

Other observed effects:

- Background blur: `30px` on major glass cards.
- Background blur: `20px` on compact shadow-blur styles.
- Background blur: `13.23px` on AlertContainer.
- Layer blur: `8.33px` on decorative shadows.
- Drop shadows use translucent black such as `#0000001A`, `#00000026`, and `#0000000D`.
- Use translucent white borders and surfaces to reinforce glassmorphism.

## Components

### Button

- Size: `128x40px`.
- Radius: `22px`.
- Layout: vertical; centered alignment.
- Padding: `4px 20px 4px 20px`.
- Gap: `10px`.
- Width and height: fixed.
- Fill: `#FFFFFF66`.
- Stroke: `#1986CC`, `1px`.
- Text: Footnote/Regular; source also references SF Pro Regular, `17px`.
- Variants: State `Default`, `Hover`.

### Chevron Buttons

- Size: `68x68px`.
- Variants: State `Default`, `Hover`.

### Icons

- Size: `86x86px`.
- Radius: `46px`.
- Layout: horizontal.
- Padding: `8px` on all sides.
- Gap: `10.73px`.
- Alignment: min/center.
- Width and height: fixed.
- Fill: gradient from `#35B6FE` at 0% to transparent `#6A33DF00` at 63%.
- Stroke: gradient from `#55C2FF` at 0% to transparent `#C8EBFF00` at 24%, `0.75px`.
- Variants: Icon Type `Alert`, `Collect`, `Management`, `Reuse`, `Treatment`.

### Nav Bar

- Size: `1440x72.94px`.
- Text: Footnote/Medium; source also references Inter Bold, `18px`.
- Variants: `Default`, `Variant2`, `Variant3`, `Variant4`.

### Card Slide Animation

- Size: `977x444px`.
- Text references: Body/Body 2, Body/Regular, Headings/Heading 4, Body Large/Medium, SF Pro Regular `17px`, and Poppins Medium `14px`.
- Variants: `Default`, `Variant2`, `Variant3`.

### SliderContent

- Size: `1047x427px`.
- Fill: `#FFFFFF`.
- Text references: Body/Body 2, Body/Regular, Headings/Heading 4, Body Large/Medium, SF Pro Regular `17px`, and Poppins Medium `14px`.
- Variants: `Default`, `Variant2`, `Variant3`.

### Cards Hover

Asset card variant:

- Size: `322x444px`.
- Text: Footnote/Regular and Headings/Heading 4.
- Variants: `Default`, `Variant2`.

Wide asset card variant:

- Size: `1142x436px`.
- Text: Footnote/Regular, Body/Body 2, Headings/Heading 4, and SF Pro Regular `17px`.
- Variants: Hover `Collect`, `Data`, `Default`, `Reuse`, `Treatment`.

### Water Analysis

- Size: `400x292px`.
- Text references: Poppins Medium `14px` and Body Large/Medium.
- Variants: `Default`, `Variant2`.

### Illustration

- Size: `400x292px`.
- Text references: Poppins Medium `14px` and Body Large/Medium.
- Variants: `Ready to use`, `Set Up Project`, `Variant4`.

### Bubbles1 and Bubbles2

- Size: `1104x991px`.
- Fill: `#000000`.
- Each has variants: `Default`, `Variant2`.
- Use as decorative background elements, not content containers.

## Screen patterns

### Cover / Presentation

- Main presentation frame: `3223x1331.94px`.
- Horizontal layout with `100px` padding and `50px` gap.
- Includes a profile/license information column and a large visual thumbnail area.
- Profile and license surfaces use rounded corners, translucent or gradient treatments, white typography, and blur.
- Social/contact cards use `22px` radius, translucent white fill, and thin gradient borders.
- The thumbnail area is a dark visual composition containing decorative branding, floating cards, icons, water analysis UI, illustrations, and connection lines.
- Use large display typography for the title and compact rounded cards for supporting content.

### Design, Asset, and Typography pages

- These pages function as design-system reference areas for components, assets, and type styles.
- Reuse the documented component families rather than creating additional component categories.
- Asset-oriented layouts emphasize cards, illustrations, icons, bubbles, water analysis, and hover states.
- Typography-oriented layouts should expose the named Inter, SF Pro, and supporting type tokens.

## Notes for implementers

- Treat named typography tokens as the preferred text styles; raw typography values are supporting source observations, not a replacement for the named hierarchy.
- Do not infer spacing, radius, motion, or grid tokens that are not listed.
- Preserve component variant names exactly where implementation state is required.
- Use the specified color values only; translucent colors are intentional and should not be replaced with opaque approximations.
- Keep decorative bubbles, logos, connection lines, and illustrations separate from semantic content.
- Use the named shadow-blur styles for elevation before introducing custom shadow combinations.
- The raw extraction is truncated after part of the Cover structure; rely on the summarized screen patterns and component specifications rather than reconstructing missing node details.
