---
name: match-maker-site-wireframe-community
source: Match Maker Site Wireframe (Community)
kind: design-system-context
---

# match - Design System

## Overview

- Source page: All pages (2): Design, Preview.
- No local variable collections found.
- No spacing, radius, motion, effect, or grid styles found.
- Visual language combines black-and-white navigation and actions with light gray page backgrounds, white content surfaces, and muted gray secondary text.
- Screens extracted:
  - **Members list:** 1400×1880px; light gray page background; navigation, filters, member content, promotional/footer areas.
  - **Profile Settings:** 1400×7951px; light gray page background; navigation, 292×661px account sidebar, and white profile-editing sections.

## Design language

- Use Public Sans for most interface text, headings, paragraphs, labels, and buttons.
- Use Inter for the primary navigation and account controls.
- Use Poppins only for the small button text style.
- Headings are semibold and black.
- Primary actions use black fills with white labels.
- Secondary text uses muted gray.
- Inputs use white fills with thin black strokes.
- Content sections use white surfaces over the `#EFF2F6` background.
- Navigation includes a transparent 60px area, black utility bars, and a black 1px divider with 50% opacity.
- Sidebar navigation uses muted gray labels, with the active item in black.

## Color palette

### Ranked raw colors

| Color | Usage |
|---|---:|
| `#000000` | 1158 |
| `#FFFFFF` | 266 |
| `#C4C4C4` | 122 |
| `#A9ABBD` | 112 |
| `#25213B` | 48 |
| `#111111` | 45 |
| `#D9D5EC` | 41 |
| `#D9D9D9` | 22 |
| `#5F5F5F` | 15 |
| `#FFFFFF00` | 15 |

### Semantic and token colors

- `Gray/50`: `#F9FAFB`
- `Gray/900`: `#111827`
- `Background Primary`: `#EFF2F6`
- `Colors / Grey / White`: `#FFFFFF`
- `Colors / Grey / Grey 2`: `#A9ABBD`
- `Colors / Base / Color 6`: `#111111`
- `Text Secondary`: `#979797`
- `Secondary`: `#979797`
- `Primary`: none

### Additional observed colors

- `#7C7C7C` is used for the Browse File button.
- `#D9D9D9` is used for section divider lines.
- `#5F5F5F` is used for a divider line.
- `#FFFFFF00` is used for transparent fills.

## Type scale

### Named typography tokens

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Heading 03 | Public Sans | 600 | 36px | 44px | -1.5px |
| Heading 04 | Public Sans | 600 | 22px | 30px | -0.55px |
| Paragraph 01 | Public Sans | 400 | 20px | 28px | -0.4px |
| Paragraph 03 | Public Sans | 500 | 16px | 26px | -0.2px |
| Heading 05 | Public Sans | 600 | 16px | 22px | -0.4px |
| Button 03 | Public Sans | 600 | 16px | 22px | -0.4px |
| Buttons / Small | Poppins | 400 | 14px | auto | -0.3px |

### Additional raw styles

- Public Sans Regular: 13px, 14px, and 16px.
- Public Sans Medium: 16px and 18px.
- Public Sans SemiBold: 16px, 20px, and 28px.
- Public Sans Bold: 14px and 16px.
- Inter Regular: 17px.
- Inter Medium: 14px.
- Inter SemiBold: 12px.
- Inter Bold: 20px.

### Hierarchy

- 36px: Heading 03.
- 28px: Public Sans SemiBold raw style.
- 22px: Heading 04.
- 20px: Paragraph 01, Public Sans SemiBold raw style, or Inter Bold raw style.
- 18px: Public Sans Medium raw style.
- 17px: Inter Regular raw style.
- 16px: Heading 05, Paragraph 03, Button 03, and Public Sans regular, medium, semibold, or bold raw styles.
- 14px: Buttons / Small, Inter Medium, Public Sans Regular, or Public Sans Bold.
- 13px: Public Sans Regular.
- 12px: Inter SemiBold.

## Spacing scale

No spacing variables found.

Observed layout spacing and dimensions:

- Navigation item gap: 32px.
- Account control gap: 22px.
- Navigation height: 60px.
- Utility bar height: 45px.
- Common input height: 40px.
- Common button heights: 40px and 50px.
- Large text area: 695×114px.
- Profile form fields: 410×40px.
- Full-width profile field: 840×40px.
- Sidebar width: 292px.
- Profile content section width: 896px.

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles found.
- No elevation or shadow values found.
- Observed opacity: 50% on the main navigation divider and selected muted text blocks.
- Observed input stroke: black at 0.5px.
- Observed divider strokes: `#D9D9D9` at 1px and `#5F5F5F` at 1px.
- No motion variables found.

## Components

_None found in source._

## Screen patterns

### Members list

- Frame size: 1400×1880px.
- Page background: `#EFF2F6`.
- Includes a 60px navigation area and 45px black utility bars.
- Includes filters with a 22px “Filters” heading and a muted “Clear filters” control.
- Includes a 298×50px outlined button pattern with a white fill and 1px primary stroke.
- Includes 95×40px filter inputs.
- Includes a newsletter area with a 398×40px email input and 14px supporting text.
- Includes footer navigation groups and a copyright line on white and black areas.

### Profile Settings

- Frame size: 1400×7951px.
- Page background: `#EFF2F6`.
- Includes a 292×661px white account sidebar.
- Sidebar navigation uses Paragraph 03 for muted links and 16px Public Sans Bold for the active “Manage Profile” item.
- Sidebar includes black 255.87×40px buttons for “Public Profile” and “Logout”.
- Main content uses white sections sized 896px wide.
- Profile sections use 20px Public Sans SemiBold titles, 14px muted field labels, white inputs with 0.5px black strokes, and black 92×40px “Update” buttons.
- Basic information uses paired 410×40px fields and an 840×40px photo field.
- File upload uses a 139×40px `#7C7C7C` “Browse File” button.
- Introduction uses a 695×114px text area.
- Change Your Email uses a 695×40px input.

## Notes for implementers

- Preserve the distinction between `#A9ABBD` tokenized secondary gray and `#979797` text-secondary gray.
- Use `#EFF2F6` for the primary page background and `#FFFFFF` for cards, sections, inputs, and surfaces.
- Use black fills with white text for primary actions and account sidebar actions.
- Do not add component families; the extraction reports no components or component geometry.
- Do not infer spacing variables, corner radii, shadows, or motion behavior; none were defined in the source.
- The extraction contains raw typography styles beyond the named tokens. Use the named tokens where a semantic role is available.
