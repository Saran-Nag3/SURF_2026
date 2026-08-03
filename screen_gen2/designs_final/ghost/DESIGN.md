---
name: ghost-shopping-app-e-commerce-freebies-community
source: Ghost shopping app (e-commerce) 🦄 freebies (Community)
kind: design-system-context
---

# ghost - Design System

## Overview

Ghost is a dark, mobile-first shopping experience for a spooky fashion and accessories brand. The source uses 430×932px mobile screens, image-led hero areas, expressive neon glow effects, rounded surfaces, uppercase labels, and playful editorial messaging.

## Design language

- Dark, immersive presentation with `#000000` screen backgrounds.
- High-contrast white typography paired with muted grey secondary text.
- Primary accent: lime green `#D7FC70`.
- Decorative glow colors: pink `#FF3EA6`, purple `#873EFF`, and lime `#D7FC70`.
- Large rounded image surfaces and soft blurred overlays.
- Product cards use translucent black surfaces, colorful blurred shadows, image thumbnails, compact metadata, pill-shaped actions, color swatches, and heart controls.
- Typography is uppercase for labels and headings, with wide tracking for editorial tone.
- Interface chrome uses white or translucent white icons and system indicators.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage / role |
|---|---|
| `#DADADA` | 56 raw uses; neutral light grey |
| `#FFFFFF4D` | 42 raw uses; translucent white system/icon detail |
| `#FFFFFF82` | 21 raw uses; translucent white swatch borders |
| `#0000008A` | 14 raw uses; translucent black product-card overlays |
| `#873EFF` | 14 raw uses; purple glow |
| `#FF3EA6` | 14 raw uses; pink glow |
| `#FFFFFF` | 11 raw uses; primary light text, icons, and controls |
| `#2A2A2A` | 7 raw uses; dark product swatch |
| `#FFFFFF33` | 7 raw uses; Home Indicator |
| `#435E3A` | 5 raw uses; green product swatch |
| `#C38EB8` | 5 raw uses; pink product swatch |
| `#D9D9D9` | 4 raw uses; neutral light grey |
| `#000000B5` | 3 raw uses; dark translucent glow backdrop |

Named tokens:

- `green/normal`: `#D7FC70` — most-used named style, 53 uses.
- `black`: `#000000` — screen background and dark text.
- `grey/normal`: `#95959D` — secondary text and muted icon strokes, 38 uses.
- `white`: represented by `#FFFFFF`; named style listed with 43 uses.
- `Label Color/Dark/Primary`: `#FFFFFF`.
- `Label Color/Light/Primary`: `#000000`.
- `Black/0`: `#FFFFFF`.

## Type scale

Font family: Satoshi Variable.

| Style | Weight | Size | Tracking | Usage |
|---|---:|---:|---:|---|
| `header/H1` | Bold 700 | 48px | 0px | Large hero and success messaging |
| `header/H4/Uppercase` | Regular 400 | 18px | 2.16px | Uppercase headings and secondary headings |
| `header/H4/Uppercase bold` | Bold 700 | 18px | 1.8px | Strong uppercase labels and tags |
| `body/bold` | Bold 700 | 14px | 0px | Product prices and emphasized body text |
| `body/regular` | Regular 400 | 14px | 0px | Product names and body text |
| `caption/uppercase bold` | Bold 700 | 12px | 1.2px | Compact uppercase actions and labels |

Additional unstyled typography observed:

- Satoshi Variable Bold, 24.21px — 4 uses.
- Satoshi Variable Bold, 14.51px — 3 uses.

## Spacing scale

No spacing variables found in source.

Observed layout gaps and padding:

- Product list gap: `10px`.
- Product text gap: `4px`.
- Product color-swatch gap: `6px`.
- Success-message text gap: `10px`.
- Tag-row gap: `16px`.
- Tag-group gap: `30px`.
- Product details horizontal padding: `24px`; vertical padding: `10px`.
- Tag pill horizontal padding: `36px`; vertical padding: `26px`.

## Radius scale

No radius variables found in source.

Observed radius values:

- `110.26px` — Home Indicator.
- `76px` — large background surface.
- `49px` — pill-shaped action and tag controls.
- `46px` — video and product-card surfaces.
- `30px` — product image thumbnail.
- `2.68px` — battery outline.
- `1.34px` — battery inner shape.
- `0px` — unrounded data container.

## Elevation & effects

- Status bar: `background_blur 30.14px`.
- Product card mask and background: `background_blur 40px`, fill `#0000008A`.
- Success/loading backdrop circles: `background_blur 21px`, with `#000000B5` fill and `#D7FC70` stroke.
- Product decorative glow ellipses: `layer_blur 97px`.
- Large success/loading glow ellipses: `layer_blur 168px`.
- Glow colors: `#FF3EA6`, `#873EFF`, and `#D7FC70`.
- Battery details use `#FFFFFF4D` with opacity values of 35% and 40%.
- Heart instance may use 30% opacity over white.

## Components

Only the following component families are defined in the source:

### status bar

- Size: `430×53px`.
- Background effect: `background_blur 30.14px`.
- Contains battery, Wi-Fi, mobile signal, and `9:41` indicators.
- System details primarily use `#FFFFFF4D`; battery base uses `#FFFFFF`.

### Home Indicator

- Size: `430×37.49px`.
- Indicator size: `148.85×5.51px`.
- Indicator fill: `#FFFFFF33`.
- Indicator radius: `110.26px`.
- Positioned centered at the bottom.

### product

- Size: `430×178px`.
- Inner data area: `392×144px`.
- Product image: `138.24×144px`, radius `30px`.
- Card mask/background: radius `46px`, fill `#0000008A`, `background_blur 40px`.
- Product text uses `body/regular` and `body/bold`.
- Details action: `103×36px`, radius `49px`, fill `#D7FC70`, horizontal padding `24px`, vertical padding `10px`.
- Details label uses `caption/uppercase bold` in `#000000`.
- Heart control: `24×24px`, white, optionally 30% opacity.
- Color selector: `72×20px`, `6px` gap, with `20×20px` swatches and `#FFFFFF82` 1px strokes.
- Selected tick-circle control: `22×22px`, white.
- Product list gap: `10px`.

## Screen patterns

- **Start**: Full-screen black welcome screen with a 414×562px rounded image, large white `header/H1` statement, neon glow, and a circular arrow action.
- **Category**: Black shopping screen with a 430×584px rounded video area, navigation icons, `Sunglasses` heading, and a vertical list of product components.
- **Wow**: Full-screen black success state with rounded video content, centered tick-circle confirmation, `Wow!` H1, muted uppercase supporting message, close control, and large neon glows. Variants use `impressive` and `What a cutie`.
- **loading**: Black loading state with muted uppercase loading copy and two groups of large pink, purple, and lime blurred glows.
- **tags**: Black tag-selection screen with uppercase lime pill controls, including varying opacity levels of the lime accent.
- **bg**: Large rounded background composition with layered dark surfaces; use only the permitted dark palette when reproducing it.

All mobile screen frames shown are `430×932px`.

## Notes for implementers

- Treat `#D7FC70` as the primary interactive accent and use `#000000` for the dominant screen background.
- Preserve the high-radius, pill-like silhouette of actions and tags.
- Use Satoshi Variable exactly as specified; do not substitute typefaces when matching the system.
- Keep primary headings white and secondary headings muted grey `#95959D`.
- Use uppercase text with the specified tracking for labels and editorial headings.
- Product cards should combine a large rounded image, translucent black blurred backing, neon glow decoration, compact metadata, a lime details action, and selectable color swatches.
- Reuse the `status bar` and `Home Indicator` dimensions on every 430×932px mobile screen.
- Do not infer additional spacing, radius, color, motion, grid, or component tokens beyond those documented here.
