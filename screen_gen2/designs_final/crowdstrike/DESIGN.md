---
name: crowdstrike-the-falcon-foundry-ui-kit-community
source: Crowdstrike | The Falcon Foundry UI Kit (Community)
kind: design-system-context
---

# crowdstrike - Design System

## Overview

CrowdStrike Falcon Foundry UI kit covering styles, tokens, components, page templates, guidance, and change-log material. Extracted screens include:

- **Cover:** 1600×960px presentation screen with logo, title, and description.
- **Getting Started / Resources:** 828×566px white guidance card.
- **Getting Started / FAQs:** 828×722px white guidance card.
- **Getting Started / Get started:** 828×1214px white guidance card.

No local variable collections, spacing variables, radius variables, or motion variables were found.

## Design language

- Use SF Pro as the primary sans-serif family.
- Use Consolas for monospace content.
- Calibre appears in navigation and selected type tokens.
- The most-used text styles are `type/sans-serif/m` (994 uses), `type/sans-serif/m-tight` (414), and `type/sans-serif/m-semibold` (366).
- Interfaces use compact controls, 32–36px control heights, 1px strokes, 2px control radii, and white surfaces.
- Dark-mode semantic tokens are provided for navigation, surfaces, interactive states, titles, and body text.
- Light-mode semantic tokens are provided for backgrounds, surfaces, input borders, text, and elevation.

## Color palette

Ranked raw colors:

| Color | Raw usage |
|---|---:|
| `#FFE897` | 247 |
| `#9747FF` | 188 |
| `#FFFFFF` | 180 |
| `#000000` | 34 |
| `#FAFAFA` | 20 |
| `#D9D9D9` | 19 |
| `#7B61FF` | 10 |
| `#09090C` | 4 |
| `#212121` | 4 |
| `#A6ACB0` | 4 |
| `#BABFC7` | 4 |

Semantic and component colors:

- **Light mode**
  - Ground floor: `#FFFFFF`
  - Large surface: `#FFFFFF` with `#FFFFFF14`
  - Interactive text and icons: `#202020`
  - Body and labels: `#767676`
  - Input focus border: `#181D1F`
- **Dark mode**
  - Navigation text and icons: `#FAFAFA`
  - Surface 2XL and inner surface: `#222126` with `#FFFFFF1F`
  - Normal interactive state: `#4E4F5A`
  - Interactive text and icons: `#FAFAFA`
  - Body and labels: `#A6ACB0`
  - Titles and attributes: `#E2E2E4`
- **Component colors**
  - Primary control fill: `#DDDDDF`
  - Selected checkbox/radio fill: `#0F687B`
  - Borders and strokes: `#B8B7BD`, `#86858E`
  - Secondary surface: `#F7F7F8`
  - Navigation background: `#212121`
  - Woodsmoke and light input focus border: `#181D1F`

## Type scale

Sans-serif tokens:

| Token | Family | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `type/sans-serif/4xl` | SF Pro Semibold | 590 | 44px / 52px | -2.2px |
| `type/sans-serif/3xl` | SF Pro Semibold | 590 | 36px / 48px | -0.72px |
| `type/sans-serif/2xl` | SF Pro Semibold | 590 | 28px / 40px | 0px |
| `type/sans-serif/xl` | SF Pro Semibold | 590 | 20px / 32px | 0px |
| `type/sans-serif/l` | SF Pro Regular | 400 | 18px / 32px | -0.18px |
| `type/sans-serif/l-semibold` | SF Pro Semibold | 590 | 18px / 32px | -0.18px |
| `type/sans-serif/l-tight-semibold` | SF Pro Semibold | 590 | 18px / 24px | -0.18px |
| `type/sans-serif/m` | SF Pro Regular | 400 | 14px / 24px | 0px |
| `type/sans-serif/m-semibold` | SF Pro Semibold | 590 | 14px / 24px | 0px |
| `type/sans-serif/m-tight` | SF Pro Regular | 400 | 14px / 20px | 0px |
| `type/sans-serif/m-tight-semibold` | SF Pro Semibold | 600 | 14px / 20px | 0px |
| `type/sans-serif/m-underline` | SF Pro Regular | 400 | 14px / 24px | 0px |
| `type/sans-serif/m-tight-underline` | SF Pro Regular | 400 | 14px / 24px | 0px |
| `type/sans-serif/xs` | SF Pro Regular | 400 | 11px / 20px | 0px |
| `type/sans-serif/xs-tight` | SF Pro Regular | 400 | 11px / 16px | 0px |
| `type/sans-serif/xs-tight-underline` | SF Pro Regular | 400 | 11px / 16px | 0px |

Additional tokens:

- `$type-md`: Calibre Regular 400, 16px / 24px, 0px tracking.
- `$type-md-medium`: Calibre Medium 500, 16px / 24px, 0px tracking.
- `$type-xs-tight`: Calibre Regular 400, 12px / 16px, 0px tracking.
- `type/mono/s-tight`: Consolas 400, 13px / 20px.
- `type/mono/s`: Consolas 400, 13px / 22px.
- `type/mono/m-tight`: Consolas 400, 14px / 20px.
- `type/mono/m`: Consolas 400, 14px / 24px.
- Cover title: SF Pro Heavy, 120px.
- Raw styles also include Roboto Regular 13px, Segoe UI 14px, Calibre Medium 36px, Consolas Bold 28px, and Segoe UI Semibold 28px.

## Spacing scale

No spacing variables were found. Observed spacing values are:

- `0px`, `1px`, `2px`, `4px`, `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `40px`, `60px`, `64px`, `80px`, `120px`, `177px`.
- Common component padding: `6px 12px`, `6px 20px`, `12px 20px`, `20px`, and `60px 64px`.
- Common gaps: `4px`, `8px`, `10px`, `12px`, `16px`, `40px`, and `177px`.
- Grid: 1 column, 120px section, 20px gutter, stretch alignment.

## Radius scale

No radius variables were found.

Observed radii:

- `0px`
- `2px`: buttons, dropdowns, alerts, controls
- `4px`: card and tooltip corners
- `12px`: Getting Started guidance cards
- `0/0/4/4px`: Card footer
- `4/4/0/0px`: Card header

## Elevation & effects

- Dark-mode elevation 2: drop shadow, 8px, offset `0 2px`, color `#00000026`.
- Light input focus: drop shadow, 6px, offset `0 0`, color `#2196F366`.
- Alert shadow: drop shadow, 6px, offset `0 4px`, color `#0000000F`.
- Light base elevation: drop shadows, 1px offset `0 0` with `#00000012`, and 2px offset `0 1px` with `#00000026`.
- Input shadow: inner shadow, 4px, offset `0 2px`, color `#00000014`.
- Light inner-medium elevation: inner shadow, 4px, offset `0 2px`, color `#00000014`.
- Getting Started cards: drop shadow, 15px, offset `0 5px`, color `#00000026`.

## Components

- **Alert:** 560×64px, 2px radius, white fill, 1px `#B8B7BD` stroke. Variants: Danger, Info, Success; descriptor off/on; 0–2 buttons; shadow off/on.
- **Breadcrumb:** 235×32px. Variants: 2, 3, or 4 links.
- **Button:** 102×32px, 2px radius, `#DDDDDF` fill, 6px 20px padding. Styles: Danger, Default, Neutral, Primary. States: Active, Focus, Hover, Inactive.
  - Loading: 72×32px, 16px 20px padding, 4px gap.
  - Dismiss: 24×24px, `#FFFFFF` fill.
  - Icon: 32×32px, 2px radius.
  - Text: 76×32px, 4px 8px padding, underline text.
  - IconText: 112×32px, 6px 12px padding, 8px gap, optional leading/trailing icons.
- **Button Group:** 205×32px, 1px gap. Group sizes: 2 or 3.
- **Card:** 520×512px. Optional header, tab group, text, details view, and footer.
  - Header: 520×72px, 4/4/0/0px radius, 20px padding, `#FFFFFF` fill, `#B8B7BD` stroke.
  - Body: 520×64px, 20px padding, white fill, `#B8B7BD` stroke.
  - Footer: 520×72px, 0/0/4/4px radius, 20px padding, 2px gap.
  - Content types: 480×76px, 20px padding, 8px gap; Stacked, Tab Group, Text, Wrapped.
- **Checkbox:** 128×24px, 6px gap, white fill. States: checked/unchecked and disabled/focus/idle.
- **.Checkbox - Radio:** 16×16px, 2px radius, `#0F687B` fill. Supports checkbox/radio, selected, unselected, indeterminate, disabled, and focus.
- **Details:** 600×72px. Closed/open states.
  - Header: 600×72px, 20px padding, 8px gap, 1px `#B8B7BD` stroke.
  - Body: 600×144px, 20px padding, 8px gap, 1px `#B8B7BD` stroke.
- **Dialog:** 1024×768px, centered vertical layout. Sizes: Large, Medium, Small.
- **Divider:** 80×1px, `#DDDDDF` fill. Types: Strong, Subtle, Subtlest.
- **Drawer:** 520×800px, vertical layout, 1px `#86858E` stroke.
  - Header: 564×72px, `#F7F7F8` fill, 20px padding, 1px `#B8B7BD` stroke.
  - Body: 524×168px, 20px padding, 8px gap, content types Card, Table, Text.
  - Footer: 564×72px, 20px padding, 2px gap.
- **Dropdown:** 112×32px, 2px radius, white fill. Styles: Default, Neutral, Primary. States: Active, Disabled, Focus, Hover, Inactive. Trigger: Closed/Open.
- **Input:** 275×56px, 4px gap, white fill. States: Disabled, Error, Focus, Idle.
- **Input Help Text:** 226×16px, `type/sans-serif/xs-tight`.
- **Input Label:** 38×20px, `type/sans-serif/m-tight-semibold`.
- **Input Text:** 81×20px, `type/sans-serif/m-tight`.
- **Menu:** 275×237px, white fill, 1px `#B8B7BD` stroke. Types: Default, No Results.
  - Menu-Item: 363×36px, 0 12px padding, space-between alignment. States: Disabled, Focus, Hover, Inactive.
  - Menu Label: 363×36px, 0 12px padding, semibold tight text.
  - Empty state: 363×36px.
- **Radio:** 136×24px, 8px gap, white fill. Checked yes/no; states disabled/focus/idle.
- **Radio Group:** 136×108px, vertical, 8px gap. Supports 2–6 options.
- **Select:** 275×76px, 4px gap, white fill. States: Disabled, Error, Focus, Multiple, No selection, Selected.
- **Spinner:** 16×16px small, 32×32px medium, 48×48px large. Animation states 1–4; indicators Color, Inverse, Primary.
- **Switch:** 128×24px, 2px vertical padding, 16px gap. On/off; disabled/focus/idle.
  - `.Switch`: 31×20px. On/off; disabled/focus/idle.
- **Tab:** 64×36px, 6px 20px padding, 1px `#B8B7BD` stroke. States: Active, Disabled, Focus, Hover, Inactive. Types: Horizontal, Vertical.
- **Tab Group:** 652×36px, 4px gap. Types: Horizontal, Vertical.
- **Textarea:** 275×124px, 4px gap. States: Disabled, Error, Focused, Idle.
- **Tooltip:** 125×32px, white fill. Positions: Bottom, Left, Right, Top.
  - `.tooltip`: 125×32px, 4px radius, 1px `#86858E` stroke.
  - `.beak`: 310×0px, white fill, 1px `#86858E` stroke.
- **Tree:** 234×324px. Types: Multi select tree, Single select tree.
  - Leaf nodes: 234×36px, 6px 12px padding, 177px gap, indent 1–4.
  - Parent nodes: 234×36px, 6px 12px padding, indent 1–3, open yes/no.
  - States include Active, Disabled, Focus, Hover, Inactive.
- **Navigation:** 1440×44px, `#212121` fill; uses Calibre 16px and Calibre 36px styles.
- **SimpleTable:**
  - Column: 216×336px.
  - Cell: 140×48px, 12px 20px padding, 10px gap, white fill, 1px `#B8B7BD` stroke.
  - Header: 140×48px, `#F7F7F8` fill, 1px `#86858E` stroke.

## Screen patterns

- **Cover:** Use a `#DDDDDF` 1600×960px frame. Content is 1504×344px with 80px horizontal padding and 40px vertical gap. Place the 531×93px logo above centered text. The title uses SF Pro Heavy 120px; the description uses `type/sans-serif/4xl`.
- **Getting Started cards:** Use 828px-wide white cards with 60px vertical and 64px horizontal padding, 12px radius, and the `#00000026` shadow. Logo area is 240×60px. Guidance content is 700px wide with 40px vertical gaps.
- **Resources:** 566px card height. Use a 28px / 40px section heading, followed by 20px / 32px subsection headings and 14px / 24px body text.
- **FAQs:** 722px card height. Structure consists of a 28px / 40px heading and repeated question blocks using 20px / 32px headings with 14px / 24px descriptions.
- **Get started:** 1214px card height. Use the same logo, card padding, guidance width, and 40px vertical section gap as the other Getting Started patterns.

## Notes for implementers

- Prefer semantic color tokens over raw colors when the semantic mapping is available.
- Use `type/sans-serif/m` for standard body text unless a tighter or semibold style is explicitly required.
- Preserve the documented component dimensions and states; variants are part of the component contract.
- Use 1px strokes with the specified stroke color rather than substituting heavier borders.
- Use the documented focus shadows for focused inputs and controls.
- No spacing, radius, or motion variables were defined; use only the observed spacing and radius values documented here.
- The extraction includes both light-mode and dark-mode tokens, but no complete screen-level dark-mode layout was provided.
