---
name: american-steakhouse-landing-page-website-community
source: AMERICAN STEAKHOUSE - Landing page website (Community)
kind: design-system-context
---

# american - Design System

## Overview

- Restaurant landing-page design for American Steakhouse.
- Primary composition: a long desktop page with hero, menu, restaurant exploration, quote, booking, article, and footer sections.
- Visual identity combines deep steakhouse reds, warm orange accents, cream-toned imagery, white typography, large editorial headings, and food photography.
- Source pages include one desktop landing page and supporting decorative/logo artwork on Page 2.

## Design language

- Use a bold, warm, food-focused editorial style.
- Deep red is the primary brand surface and heading color.
- Orange is used for accents, labels, decorative quotation marks, and section emphasis.
- White typography is used over deep red and photographic surfaces.
- Dark charcoal supports body copy and light-background content.
- Layouts use large photographic crops, rounded image masks, prominent headings, and generous horizontal compositions.
- Decorative illustrations, badges, logos, and organic vector artwork are supporting assets rather than primary content.
- Prefer strong contrast and clear hierarchy over dense interface decoration.

## Color palette

Colors are ranked by extracted usage count. Near-identical low-frequency variants are consolidated under the dominant extracted color.

| Color | Usage | Role |
|---|---:|---|
| `#C74427` | 387 | Dominant warm red / terracotta accent |
| `#C64142` | 383 | Secondary red used in decorative artwork |
| `#333333` | 139 | Primary dark body text |
| `#FFFFFF` | 136 | Light text, button surfaces, and light backgrounds |
| `#3D2D32` | 124 | Deep brown-charcoal decorative artwork |
| `#701804` | 98 | Darkest extracted steakhouse red |
| `#D1482A` | 46 | Warm orange-red accent |
| `#F29B30` | 46 | Bright orange accent |
| `#6F1C11` | 40 | Primary deep red for headings and dark surfaces |
| `#C74325` | 16 | Near-identical terracotta variant; prefer `#C74427` when consolidating |
| `#E6932E` | 10 | Near-identical orange variant; prefer `#F29B30` when consolidating |
| `#C4C4C4` | 8 | Neutral image-mask and placeholder gray |

## Type scale

Typeface observations:

- Primary family: Roboto.
- Additional observed styles: Roboto CondensedBold and Roboto Medium.
- Use Bold for major headings, navigation labels, buttons, and booking controls.
- Use Regular for body copy, supporting labels, footer content, and descriptive text.

Observed sizes and weights:

| Size | Style | Observed use |
|---:|---|---|
| 200px | Roboto Regular | Large numeric page indicator |
| 128px | Roboto CondensedBold | Decorative quotation marks |
| 72px | Roboto Bold | Large hero heading |
| 50px | Roboto Bold | Section and hero headings |
| 50px | Roboto CondensedBold | Editorial quote heading |
| 40px | Roboto Regular | Page indicator denominator |
| 24px | Roboto Bold | Article headings and booking controls |
| 24px | Roboto Regular | Body copy and supporting headings |
| 20px | Roboto Medium | Hero supporting label |
| 20px | Roboto Bold | Navigation |
| 18px | Roboto Bold | Footer section labels |
| 16px | Roboto Regular | Navigation, footer, and utility text |
| 14px | Roboto Bold | Button labels |

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `0px`: square containers and groups.
- `15px`: buttons, booking controls, restaurant exploration panels, and article image masks.
- `20px`: large hero image masks.
- `24px`: article image masks.

## Elevation & effects

- Drop shadows are used on prominent food imagery.
- Observed shadow configuration: `20px` blur with offset `0 4px`.
- Shadows appear on hero and food-image containers to separate photography from surrounding content.
- Decorative groups and imagery may use reduced opacity.
- No local effect styles or reusable elevation tokens were found.

## Components

### Light

- Button variant: `Light/Button/Secondary/Text`.
- Size: `170x48px`.
- Corner radius: `15px`.
- Label style: Roboto Bold, `14px`.
- Component fill: `#FFFFFF`.
- In light-background contexts, the button uses `#6F1C11` text.
- In dark hero contexts, the button uses `#FFFFFF` text.
- The source shows a warm filled button treatment with a `2px` border; the border colors vary by context.

### chevron-down

- Size: `29.56x30px`.
- Used inside booking controls.
- Chevron path size: `24.02x13.12px`.
- Chevron color in booking controls: `#FFFFFF`.

## Screen patterns

- **Page 1 / Desktop - 1:** A `1920x7281px` long-form landing page. Sections progress from a full-width hero with navigation and image cards into welcome/menu content, restaurant exploration, a quote-led food section, booking controls, latest articles, and a footer.
- **Hero pattern:** Large food imagery, oversized white heading, compact supporting label, navigation, page numbering, and secondary buttons.
- **Menu/content pattern:** Deep red headings paired with charcoal body copy, food photography, category labels, thin deep-red divider lines, and secondary buttons.
- **Restaurant exploration pattern:** Large rounded photographic panel combined with a deep red content block, oversized white heading, and directional arrow artwork.
- **Quote pattern:** Large food image composition with decorative orange quotation marks and a deep red editorial statement.
- **Booking pattern:** Heading followed by three deep-red rounded selection fields for party size, date, and time, plus a matching booking action.
- **Articles pattern:** “Latest Articles” heading, three rounded image cards, dark article titles, supporting copy, and secondary action buttons.
- **Footer pattern:** Deep red surface with orange section labels, white navigation and utility text, social artwork, logo artwork, and a thin white divider.
- **Page 2 supporting artwork:** Standalone decorative vector artwork, badge collections, logo-like marks, and white-background asset frames. These should be treated as decorative supporting assets, not page-layout primitives.

## Notes for implementers

- Preserve the deep-red, orange, white, and charcoal contrast hierarchy.
- Use Roboto as the default type family unless the specific condensed quote treatment is required.
- Use the largest observed heading sizes sparingly for hero, section, and editorial statements.
- Keep food imagery prominent and crop it inside rounded masks where the source shows rounded containers.
- Use `15px` radius for buttons, booking fields, and medium image cards; use `20px` or `24px` only for the larger image treatments shown in the source.
- Reuse the `Light/Button/Secondary/Text` dimensions exactly: `170x48px`.
- Booking fields are deep red, `73px` high, rounded `15px`, with white bold text and a white `chevron-down`.
- Do not introduce spacing, radius, motion, or effect tokens that are not present in the source.
