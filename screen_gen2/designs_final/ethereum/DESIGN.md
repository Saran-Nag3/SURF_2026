---
name: ethereum-org-design-system-community
source: ethereum.org Design System (Community)
kind: design-system-context
---

# ethereum - Design System

## Overview

- Source: ethereum.org Design System (Community).
- Coverage: foundations, base components, composed components, and layouts across 36 Figma pages.
- No local variable collections, spacing variables, radius variables, motion variables, or local grid styles were found.
- Primary typeface: Inter. Code typeface: IBM Plex Mono.
- Component families include typography, controls, navigation, content blocks, social links, illustrations, heroes, headers, footers, FAQs, sliders, tabs, modals, and layout containers.

## Design language

- Use a clean, documentation-oriented interface with strong typographic hierarchy.
- Use Inter for interface and content text; use IBM Plex Mono for code blocks and snippets.
- Use bold Inter for headings and emphasis, regular Inter for body copy, and medium Inter for tags.
- Use blue as the primary action color, with white surfaces and dark text.
- Use compact controls with 4px corner radius where specified.
- Use 24px icon containers for navigation and utility icons.
- Use responsive Desktop/Mobile variants where provided.
- Use illustrations as large, centered visual assets on white surfaces.

## Color palette

Ranked by raw usage:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 2435 |
| `#222222` | 1825 |
| `#1616B4` | 1045 |
| `#000000` | 966 |
| `#C9B3F5` | 349 |
| `#F0CDC2` | 349 |
| `#1C1CFF` | 292 |
| `#88AAF1` | 175 |
| `#B8FAF6` | 175 |
| `#B8FBF6` | 148 |
| `#4A2502` | 116 |
| `#87A9F0` | 73 |
| `#646464` | 65 |
| `#B0B0B0` | 54 |

Additional extracted colors:

- `#1E1E1E`
- `#1B1B1B`
- `#616161`
- `#8C8C8C`
- `#E7E7E7`
- `#F2F2F2`
- `#F7F7F7`
- `#DEDEFF`
- `#EBEBFF`
- `#352313`
- `#0000001F`
- `#00000024`
- `#00000040`
- `#09090966`
- `#3A8E8933`
- `#5484EA33`
- `#55555533`
- `#5555FF`
- `#7F7FD533`
- `#8AA8E733`
- `#91EAE433`
- `#B9B9F133`
- `#F7C8C8`
- `#B8FBF6`

Theme and gradient data:

- Dark Theme/Gradient A base: `#1E1E1E`.
- Dark Theme/Gradient A linear gradient:
  - `#7F7FD533` at 0%.
  - `#8AA8E733` at 52%.
  - `#91EAE433` at 100%.
- White token: `#FFFFFF`.

## Type scale

All typography uses `0px` tracking unless otherwise specified.

### Inter Regular

- 12px, line height `132.21%`: Text/xs, Text/xs - i, Text/xs - link.
- 12px, line height `22px`: final/footnote text.
- 14px, line height `132.21%`: Text/sm, Text/sm - i, Text/sm - link.
- 16px, line height `132.21%`: Text/md, Text/md - i, Text/md - link.
- 16px, line height `26px`: final/text.
- 18px, line height `132.21%`: Text/lg, Text/lg - i, Text/lg - link.
- 20px, line height `123.94%`: Text/xl, Text/xl - i, Text/xl - link.
- 24px, line height `123.94%`: Text/2xl, Text/2xl - i, Text/2xl - link.
- 30px, line height `123.94%`: Text/3xl, Text/3xl - i, Text/3xl - link.
- 36px, line height `123.94%`: Text/4xl, Text/4xl - i, Text/4xl - link.
- 48px, line height `99.15%`: Text/5xl, Text/5xl - i, Text/5xl - link.
- 60px, line height `99.15%`: Text/6xl, Text/6xl - i, Text/6xl - link.

### Inter Bold

- 12px, line height `132.21%`: Text/xs -b.
- 14px, line height `132.21%`: Text/sm - b, Heading Large/xs, Heading Small/xs.
- 16px, line height `132.21%`: Text/md -b, Heading Large/sm, Heading Small/sm.
- 18px, line height `132.21%`: Text/lg -b.
- 20px, line height `115.68%`: Heading Large/md, Heading Small/md.
- 20px, line height `123.94%`: Text/xl -b.
- 24px, line height `123.94%`: Text/2xl - b, Heading Small/lg.
- 26px, line height `111.55%`: Heading Large/lg.
- 28px, line height `111.55%`: Heading Small/xl.
- 30px, line height `123.94%`: Text/3xl - b.
- 32px, line height `99.15%`: Heading Small/2xl.
- 36px, line height `99.15%`: Heading Large/xl.
- 36px, line height `123.94%`: Text/4xl - b.
- 48px, line height `95.02%`: Heading Large/2xl.
- 48px, line height `99.15%`: Text/5xl - b, Heading Small/3xl.
- 60px, line height `95.02%`: Heading Large/3xl.
- 60px, line height `90.89%`: Heading Small/4xl, Text/6xl - b.
- 72px, line height `90.89%`: Heading Large/4xl.

### Inter Medium

- Tags text: 12px, line height `99.15%`.

### IBM Plex Mono

- Text/Monospace Code snipts: 14px, line height `123.08%`.
- Text/Monospace Block code: 16px, line height `123.08%`.

### Raw typography observations

- Inter Light 12px is the most-used raw style: 1504 uses.
- Inter Regular 16px: 571 uses.
- Inter Regular 14px: 153 uses.
- SF Mono Regular 16px: 102 uses.
- Inter Regular 6px: 92 uses.
- Inter Regular 8px: 86 uses.
- Inter Bold 36px: 40 uses.
- Inter Regular 70px: 18 uses.

## Spacing scale

_No spacing variables found in source._

Explicit component spacing values:

- `0px` padding and gap are common in fixed content and icon containers.
- `4px` gap: dropdown group, dropdown option.
- `6px` padding: warning icon, tooltop icon.
- `8px` padding: List, dropdown option, input text, Tag, table of content links, button.
- `10px` gap: glyph, List, image placeholders, illustrations, button, Breadcrumb-nav.
- `16px` gap: base input elements, input text, blockquote; button padding in the larger button.
- `32px` horizontal padding: blockquote.
- `84px` radius-sized Tag shape is specified as a component radius, not a global spacing token.

## Radius scale

_No radius variables found in source._

Explicit component radii:

- `2px`: checkbox.
- `4px`: key [/], Dropdown, input text, button.
- `4px / 4px / 0px / 0px`: Dropdown.
- `84px`: Tag.
- `0px`: no radius is specified for most listed components.

## Elevation & effects

- Light/Tooltip drop shadow: `drop_shadow 16px offset 0 0 #00000040`.
- Dark/Button hover shadow: `drop_shadow 0px offset 4 4 #352313`.
- Light/Button hover shadow: `drop_shadow 0px offset 4 4 #EBEBFF`.
- Light/Button hover shadow: `drop_shadow 0px offset 4 4 #DEDEFF`.
- Menu shadow light: `drop_shadow 4px offset 0 3 #55555533`.
- Accordeon inner shadow:
  - `inner_shadow 2px offset 0 2 #0000001F`.
  - `inner_shadow 2px offset 0 -3 #00000024`.
- No motion variables were found.

## Components

Only use the extracted component families and their documented variants.

### Typography and content

- `body text base`: `480x130px`; Text/md; Desktop/Mobile.
- `Heading base`: `464x55px`; Heading Large/2xl; Desktop/Mobile; H1–H6.
- `body text normal`: `414x156px`; Text/md.
- `List`: `480x314px`; padding `8px`; Inter Regular 16px; Ordered Lists/Unordered Lists; Desktop/Mobile.
- `big numers text`: `192x129px`; Text/sm, Text/md, Text/5xl - b; Default/Error.
- `blockquote`: `672x142px`; horizontal padding `32px`; gap `16px`; stroke `#616161`, `1px`; Text/sm and Text/md - i.
- `glyph`: `355.34x565.71px`; gap `10px`; centered; fixed width and height.

### Controls and forms

- `button` large: `320x77px`; radius `4px`; padding `16px`; gap `10px`; fill `#1C1CFF`; stroke `#FFFFFF`, `1px`; Text/xs and Text/md; primary outline, primary solid, secondary outline; lg/sm.
- `button` regular: `123x42px`; radius `4px`; padding `8px 16px`; gap `10px`; stroke `#1B1B1B`, `1px`; Text/md; Primary Ghost, Primary Link, Primary Outline, Primary Solid, Secondary Ghost, Secondary Outline; Active/Default/Disable/Focus/Hover; Regular/Small.
- `button content`: `159x26px`; gap `8px`; Text/md; regular/small.
- `two line button content`: `215x45px`; gap `8px`; Text/xs and Text/md; left/right icon placement.
- `base input elements`: `138x26px`; gap `16px`; Text/md; Large/small.
- `input text`: `154x42px`; radius `4px`; padding `8px`; gap `16px`; fill `#FFFFFF`; stroke `#1B1B1B`, `1px`; Text/md; Default/active/disable/focus/hover; Regular/Small.
- `Dropdown`: `254.53x42px`; radius `4px / 4px / 0px / 0px`; fill `#FFFFFF`; stroke `#616161`, `1px`; Text/md; active/default/focus/hover/is open/is open and group; full border/simple border.
- `dropdown option`: `223x38px`; padding `8px`; gap `4px`; Text/sm; Default/active/focus/hover.
- `dropdown group`: `239x153px`; padding `8px`; gap `4px`; stroke `#EBEBFF`, `1px`; Text/sm and Text/xs.
- `checkbox`: `16x16.01px`; radius `2px`; fill `#FFFFFF`; stroke `#616161`, `1px`; Default/Disable checked/Error/active/disable uncked/focus/hover.
- `switch`: `26x16px`; Switch/radio; Normal, Hover, Focus, checked, Checked and hover, Disable, Disable checked, error.
- `Tag`: `161x32px`; radius `84px`; padding `4px 8px`; gap `4px`; fill `#F7F7F7`; Inter Light 12px and Tags text; Error/Normal/Success/Tag/Warning; High Contrast/Outline/Solid/Subtle.
- `tooltop`: `24x24px`; fill `#FFFFFF`; active/close/focus/hover/open.

### Navigation and utility icons

- `key [`: `24x24px`; radius `4px`; stroke `#1B1B1B`, `1px`; large/small; `/`, `k`, `⌘`.
- `Users`: `24x24px`.
- `external link`: `24x24px`.
- `minus`, `close`, `plus`, `chevron down`, `chevron up`, `chevron right`, `chevron left`: `24x24px`.
- `warning icon`: `24x24px`; padding `6px`.
- `tooltop icon`: `24x24px`; padding `6px`.
- `search`: `23.49x23.49px`; padding `3px`.
- `place holder`: `26x26px`; padding `4px`.
- `hamburger menu`: `24x24px`; padding `6px 3px`.
- `dark theme switcher`: `24x24px`; padding `3px 5px`.
- `light theme switch`: `24x24px`; padding `3px`.
- `languages`: `27x28px`; padding `3px`; SF Compact Text Semibold 9px and 13.5px.
- `Discord`, `Youtube`, `Twitter`, `Github`: `36x36px`; social-media-menu gap `16px`.
- `social-media-menu`: `140x36px`; gap `16px`; Default/disable/focus/hover/visited.

### Identity and navigation structures

- `Avatar`: `48x48px`; lg `64px`, md `48px`, sm `32px`, xs `26px`; Default/active/focus/hover.
- `Avatar + Profile link`: `82x59px`; horizontal/vertical; md/sm/xs.
- `Avar group`: `93x28px`; white fill; Inter Regular 9px; sm/xs.
- `Breadcrumb-nav`: `229x26px`; gap `10px`; white fill; Inter Regular 16px; 0–3 levels.
- `Table of Content mobile`: `461x666px`; gap `1px`; Close/Open.
- `table of content links`: `121x38px`; padding `8px 8px 8px 16px`; Text/sm; levels 1–4; Active/Default/Hover.
- `Page Indicator`, `Page Indicators`, `content index link list`, `Table of Content Sidebar`: use the extracted page-navigation families.
- `Left sidebar navigation Mobile`, `Left sidebar navigation Desktop`, `full mobile menu`, `Main manu`, `nav-menu`, `nav-link`, `service-link`, `menu 2 level item`, `second level`, `therd level`, `fourth level`, `third level pages link`, `fourth level pages link`: use the extracted responsive navigation families.
- `Header`: composed from `Left-header-container`, `Right-header-container`, `nav-menu`, `languages`, theme switches, search, and social-media-menu.
- `Lamguages dropdown component`, `Languages single item`: use for language selection.
- `search line`, `search input`, `search modal window`: use for search interactions.

### Content and composed components

- `Simple accordion`, `Accordeon link`: use for expandable content; accordion inner shadow is available.
- `table`, `table row`, `table cell`: use for tabular content.
- `Alert`, `Base Alert`: use for status and warning messaging.
- `Modal content - base`: use for modal surfaces.
- `Hero`, `hero content`, `hero big numbers`, `Ethereum.org Hero`: use for hero sections and large numeric highlights.
- `FAQ`: use for question-and-answer content.
- `SliderV2`: use for slider content.
- `Tabs`: use for tabbed content.
- `Footer`, `footer Link`, `footer links`, `footer footer`, `Footer links column`: use for footer composition.
- `Complete section`, `section content`, `text content`, `layout`: use for full-grid sections and page layout.
- `Markdown content container`, `Md pages action container`, `doc navigate next and previous`: use for documentation pages.
- `Find wallet illustration`, `Image placeholder`, `Raw image place holder`, `find-wallet-hero`: use for image and illustration areas.

## Screen patterns

- Foundations screens cover Brand, Typography, Color, Illustrations, Spacing, and icons.
- Base component screens cover Social media links, Forms, Tooltips, Buttons, Avatar, Tags, Navigation, Accordions, Tables, and Alerts.
- Composed component screens cover search, Header, Modal, Hero, Footer, FAQ, Slider, Tabs, and Full grid section.
- Layout screens cover Base layout and Markdown pages layout.
- Documentation pages combine a header, responsive sidebar or table of contents, Markdown content container, page indicators, action controls, and previous/next navigation.
- Responsive navigation uses separate `Left sidebar navigation Desktop`, `Left sidebar navigation Mobile`, and `full mobile menu` families.
- Hero screens use `Hero`, `hero content`, `hero big numbers`, and extracted illustration families such as `find-wallet-hero`, `stake`, `mainnet`, `eth-main-image`, and `Ethereum.org Hero`.
- Footer screens use `Footer`, `Footer links column`, social-media-menu, and social link families.

## Notes for implementers

- Treat names exactly as extracted, including `Accordeon`, `Avar`, `Lamguages`, `therd`, `Main manu`, and `tooltop`.
- Do not create new color, spacing, radius, motion, or grid tokens; the source does not define those variables.
- Prefer the documented component dimensions, padding, gaps, fills, strokes, typography styles, and variants.
- Use `#FFFFFF` for documented white surfaces and `#222222` or `#000000` for dark text only where the source provides those colors.
- Keep icon containers at their extracted sizes rather than scaling them to undocumented values.
- Preserve Desktop/Mobile and state variants where a component defines them.
- Use the extracted illustration families as named assets rather than replacing them with invented artwork.
