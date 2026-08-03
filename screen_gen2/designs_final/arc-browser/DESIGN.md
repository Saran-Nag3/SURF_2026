---
name: arc-browser-interface-community
source: Arc browser interface (Community)
kind: design-system-context
---

# arc-browser - Design System

## Overview

Dark Arc browser interface design system for sidebar navigation, tabs, pinned tabs, browser controls, spaces, favicons, and browser window modes.

Source Figma page: `All pages (9): Thumbnail, Assets & Components, ----------, Sidebar, Main Window, Split Screen, Little Arc, -------, Arc Browser`.

No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Dark, desktop-oriented browser interface.
- Primary shell color: `#0E1116`.
- High-contrast white foreground and text.
- Secondary surfaces use translucent black and white overlays.
- Compact controls use rounded rectangles, small icon buttons, and fixed dimensions.
- Typography uses SF Pro Text for interface content and Clash Display for large presentation headings.
- Iconography is primarily white on dark surfaces, with branded favicon colors.
- Sidebar and top navigation use rounded outer corners.
- Component variants commonly represent resting, hover, active, disabled, expanded, and color modes.

## Color palette

Ranked by raw usage:

| Color | Raw uses | Usage |
|---|---:|---|
| `#FFFFFF` | 98 | Primary light foreground and light background |
| `#FFFFFFB2` | 94 | High-opacity light text |
| `#00000036` | 90 | Translucent dark control and tab surfaces |
| `#D9D9D9` | 57 | Neutral gray |
| `#FFFFFF66` | 50 | Light secondary text |
| `#FFFFFF0A` | 45 | Subtle white overlay |
| `#000000` | 41 | Black background and foreground |
| `#0E1116` | 39 | Arc dark shell and sidebar fill |
| `#0A66C2` | 36 | LinkedIn blue |
| `#DC2217` | 36 | YouTube red and active solid accent |
| `#FFFFFF14` | 31 | Default dark overlay |
| `#1ED760` | 25 | Spotify green |
| `#1D9BF0` | 23 | Twitter blue |
| `#FFFFFFCC` | 20 | High-opacity light text |
| `#9747FF1A` | 16 | Subtle purple overlay |
| `#888888` | 12 | Apple gray |
| `#F4BD50` | 12 | Minimize control yellow |
| `#9747FF` | 11 | Purple accent and component outline |
| `#FFFFFF33` | 11 | Medium light overlay |
| `#D9D9D905` | 9 | Very subtle gray overlay |
| `#00000040` | 4 | Dark icon/control detail |

Named color tokens:

- `linear for arc`: `#0E1116`
- `On Dark/Text/Light`: `#FFFFFF66`
- `On Light/Background`: `#FFFFFF`
- `On Dark/Default`: `#FFFFFF14`
- `On Dark/Hover`: `#FFFFFF26`
- `On Dark/Foreground`: `#FFFFFF`
- `On Dark/Background`: `#000000`
- `On Dark/Text/Foreground`: `#000000`

## Type scale

| Size | Font | Weight/style | Raw uses |
|---:|---|---|---:|
| 10px | SF Pro Text | Medium | 22 |
| 12px | SF Pro Text | Medium | 77 |
| 12px | SF Pro Text | Semibold | 48 |
| 14px | SF Pro Text | Regular Italic | 3 |
| 16px | SF Pro Text | Medium | 33 |
| 64px | Clash Display | Regular | Source screen heading |
| 120px | Clash Display | Regular | 5 |
| 240px | Clash Display | Semibold | Source screen heading |

Interface typography:

- Use SF Pro Text Medium at 10px for compact labels such as spaces.
- Use SF Pro Text Medium or Semibold at 12px for tabs, new-tab controls, and navigation labels.
- Use SF Pro Text Medium at 16px for larger sidebar labels.
- Use SF Pro Text Regular Italic at 14px for developer mode.
- Use Clash Display Regular at 120px for large presentation headings.
- Clash Display Regular at 64px and Clash Display Semibold at 240px occur in the thumbnail presentation screen.

## Spacing scale

No spacing variables were found. Use only the observed component values:

- 0px padding: Controls.
- 1px vertical padding: Figma and Twitter favicons.
- 2px vertical padding: `otta`.
- 4px horizontal/vertical padding: Space.
- 6px padding: New Tab and Tabs.
- 8px padding: Pinned tabs.
- 8px gap: New Tab, Hr, Space, Tabs, and `otta`.
- 12px horizontal/vertical padding: Lil arc nav.
- 16px horizontal/vertical padding: Developer mode.
- 24px horizontal/vertical padding: Controls and IconBtn component sets.
- 24px horizontal padding and 12px vertical padding: Lil arc nav.
- 24px horizontal padding and 16px vertical padding: Developer mode.
- 53px vertical gap: Thumbnail heading group.
- 1003px gap: Developer mode layout.

## Radius scale

Observed radii:

- 2px: favicon components including Raycast, Linear, Gmail, YouTube, GitHub, Figma, Google, and Twitter.
- 5px: component-set outlines and Interface / Folder.
- 6px: Pinned tabs and IconBtn.
- 8px: New Tab, Space, and Tabs.
- 12px: Sidebar and Lil arc nav outer corners.
- 13px: `otta`.
- 50px: Google favicon frame.
- 100px: Controls window-control circles.
- Lil arc nav and Developer mode use `12px 12px 0px 0px` corner radii.
- No radius variables were found.

## Elevation & effects

No local effect styles were found.

Observed visual treatments:

- Sidebar uses a 1px `linear for arc` stroke in one specification.
- Sidebar also uses a 1px gradient stroke from `#FFFFFF` to `#D9D9D96E`.
- Interface / Folder, Controls, and IconBtn component sets use a 1px `#9747FF` outline in the component showcase.
- Active Pinned tabs can use a 1px `#DC2217` stroke.
- Active linear Pinned tabs use a 1px gradient stroke involving `#9747FF` and `#DC2217`.
- Hover controls use translucent overlays such as `#FFFFFF26`.
- No shadows or motion values were found.

## Components

### Sidebar

- Family: Sidebar.
- Size: `224x1024px`.
- Fill: `#0E1116`.
- Radius: `12px`.
- Stroke: `linear for arc`, or a 1px gradient stroke from `#FFFFFF` to `#D9D9D96E`.
- Text styles: SF Pro Text Medium 16px, SF Pro Text Semibold 12px, SF Pro Text Medium 10px, SF Pro Text Medium 12px.
- Grain variants: `0%`, `10%`, `5%`, `linear`.

### New Tab

- Size: `201x32px`.
- Radius: `8px`.
- Fill: `#00000036`.
- Padding: `6px`.
- Gap: `8px`.
- Horizontal layout; fixed width and height; minimum/center alignment.
- Variants: resting, hover.
- Text: SF Pro Text Semibold 12px.

### Hr / On Dark

- Size: `212x16px`.
- Fill: `#FFFFFF`.
- Padding: `8px 10px`.
- Gap: `8px`.
- Vertical layout; fixed width and height.
- Variants: default, hover.

### Space

- Size: `180x32px`.
- Radius: `8px`.
- Fill: `#00000036`.
- Padding: `4px 6px`.
- Gap: `8px`.
- Horizontal layout; space-between/center alignment.
- Variants: resting, hover.
- Text: SF Pro Text Regular 10px.

### Tabs

- Size: `180x32px`.
- Radius: `8px`.
- Fill: `#00000036`.
- Padding: `6px`.
- Gap: `8px`.
- Horizontal layout; minimum/center alignment.
- Variants: active, hover, resting, URL.
- Text: SF Pro Text Semibold 12px.

### Pinned tabs

- Size: `32x32px`.
- Radius: `6px`.
- Fill: `#00000036`.
- Padding: `8px`.
- Center/center alignment.
- Variants: resting, hover, active.
- Active modes: none, solid, linear.
- Active solid example uses `#DC2217` stroke.
- Favicon content is `16x16px`.

### IconBtn

- Size: `26x26px`.
- Radius: `6px`.
- Variants: active, default, disabled, hover.
- Hover fill: `#FFFFFF26`.
- Disabled icon token: On Dark/Disabled, which has no explicit color value in the source.

### Controls

- Content size: `52x12px`.
- Three controls, each `12x12px`, with an `8px` gap.
- Component-set frame: `100x96px`, with `24px` padding and `24px` gap.
- Window-control circles use a `100px` radius.
- Variants: default, hover.
- Default fill: `#FFFFFF14`.
- Hover states use source-specified control colors; only `#F4BD50` is an allowed explicit source color.

### Interface

- Standard interface icons: `24x24px`.
- Icons include Pencil, Library, Add, Refresh, ArrowRight, ArrowLeft, Window, Close, Lock, Search, Camera, Link, and More.
- Interface / Folder component: `22x22px` icon, with expanded false/true variants.
- Interface / Folder showcase frame: `82x30px`, `5px` radius, `#9747FF` 1px stroke.
- Interface / Folder uses On Dark/Hover and On Dark/Background fills with On Dark/Text/Foreground strokes.

### Lil arc nav

- Size: `1361x56px`.
- Fill: `#0E1116`.
- Radius: `12px 12px 0px 0px`.
- Padding: `12px 24px`.
- Gap: `14px`.
- Horizontal layout; minimum/center alignment.
- Text: SF Pro Text Semibold 12px.

### Developer mode

- Size: `1374x56px`.
- Fill: `#3E43CA`.
- Radius: `12px 12px 0px 0px`.
- Padding: `16px 24px`.
- Gap: `1003px`.
- Horizontal layout; minimum/center alignment.
- Text: SF Pro Text Regular Italic 14px.

### Space icons

- Every Space icon is `24x24px`.
- Available icons: Pizza, Music, Bed, Planet, Chat, Palette, Baseball, Cloud outline, Shapes, Flag, Skull, Map, Heart, Circle, Code, Video, Airplane, Paw, Egg, Cutlery, People, Present, Square, Basket, Cloud, Mail, Sun, Weight, Moon, Page, Terminal, Triangle, Book, Checkbox, Inbox, Folder, Squares, Globe, Coins, Layers, Star, Grid 3x3, Grid 2x2, Bell, Lightning, Bookmark.

### Favicons

- Standard size: `16x16px`.
- Available variants: Placeholder, Apple, Spotify, Raycast, Linear, Gmail, YouTube, GitHub, Figma, Google, and Twitter.
- Raycast, Linear, Gmail, YouTube, GitHub, Figma, Google, and Twitter use a `2px` radius.
- Figma and Twitter use `1px` vertical padding.
- Branded colors present in the source include Spotify `#1ED760`, Twitter `#1D9BF0`, YouTube `#DC2217`, Apple `#888888`, and LinkedIn `#0A66C2`.
- Placeholder uses `#9747FF` for its accent detail.

### `otta`

- Size: `20x20px`.
- Fill: `#FECE32`.
- Radius: `13px`.
- Padding: `4px 2px`.
- Gap: `8px`.
- Contains a `16x12px` black mark.

### LinkedIn svg

- Size: `16x16px`.
- Fill: `#FFFFFF`.
- LinkedIn mark detail uses `#0A66C2`.

## Screen patterns

- Thumbnail: Dark `#0E1116` presentation screen with large Clash Display headings, including “Arc Browser Interface.”, “For presentation”, “Editable components”, “Lilttle arc”, “Split screen”, “Developer mode”, and “With sidebar & Without”.
- Assets & Components: Showcase layout containing Favicons, Interface icons, Spaces icons, Controls, IconBtn, Pinned tabs, and Tabs.
- Sidebar: Browser layout featuring a `224x1024px` dark sidebar with grain variants.
- Main Window: Browser window pattern represented by the sidebar, navigation, tabs, pinned tabs, and controls.
- Split Screen: Browser pattern for split-screen presentation.
- Little Arc: Compact browser/navigation pattern using Lil arc nav.
- Arc Browser: Overall browser interface composition.
- Developer mode: Top navigation/banner pattern using the purple `#3E43CA` bar.

## Notes for implementers

- Preserve the dark-first hierarchy: use `#0E1116` for the shell, `#FFFFFF` for primary foreground, and translucent overlays for secondary surfaces.
- Use the exact fixed dimensions specified for controls, tabs, sidebar, navigation bars, icons, and favicons.
- Do not substitute generic icons when a named Interface or Space icon is available.
- Keep tabs, Spaces, and New Tab controls compact with their specified 6px or 8px radii.
- Treat active, hover, resting, disabled, and expanded states as distinct component variants.
- Use SF Pro Text for interface UI and Clash Display only for large presentation typography.
- Do not infer missing disabled colors, shadows, motion, spacing variables, or effect styles.
- The source contains image-based favicon assets; preserve their branded appearance rather than recreating unsupported colors.
