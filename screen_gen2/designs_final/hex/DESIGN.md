---
name: hex-design-system-community
source: Hex design system (Community)
kind: design-system-context
---

# hex - Design System

## Overview

- Source: Hex design system (Community)
- Figma pages: Cover, icons, Buttons, Text input, Table, Horizontal tabs, Checkbox — Radio — Switch, Tag — Status, Component workspace, Archived.
- No local variable collections found.
- Primary documented typeface: Inter.
- Primary interaction color: #D61A46.
- Secondary background token: #1C1E2E.
- Link color token: #FAC3BE.

## Design language

- Interface styling combines dark navy backgrounds, white surfaces, pale gray borders, and red primary actions.
- Typography is predominantly Inter with 12px, 14px, and 16px body styles.
- Icons use 16x16px components by default; `.icon-placeholder` uses 24x24px.
- Controls use explicit state variants such as default, hover, disabled, selected, pressed, loading, error, and active.
- Buttons support large, medium, and small sizes with primary, secondary, tertiary, and destructive variants.
- Tables use white rows, pale gray separators, 44px row heights, and 46px cells.
- Tabs use bordered 40px-high controls.
- Tags and statuses use compact 12px or 14px text with color variants.

## Color palette

### Semantic tokens

| Token | Value | Usage |
|---|---|---|
| `link_color` | #FAC3BE | Link color token; 4 uses |
| `secondary_bg_color` | #1C1E2E | Secondary background token; 1 use |

### Raw colors ranked by usage

| Value | Uses |
|---|---:|
| #FFFFFF | 375 |
| #000000 | 333 |
| #484C64 | 253 |
| #6E748C | 84 |
| #474A62 | 75 |
| #EE2E6B | 74 |
| #9399B7 | 63 |
| #EEF1F7 | 46 |
| #CECCEB | 40 |
| #6B75CA | 37 |
| #21243B | 36 |
| #D3D6F0 | 33 |
| #222222 | 29 |
| #6C708C | 29 |
| #EBECF2 | 25 |
| #FEEBF1 | 20 |
| #5FB45F | 19 |
| #B5BAE5 | 14 |
| #C2C6D5 | 13 |
| #32A7E2 | 11 |
| #8C89B4 | 10 |
| #EE9C50 | 10 |

### Component colors

- Button fill: #D61A46.
- Button stroke: #BD2241 with 0px stroke.
- White-filled icon variants: #FFFFFF.
- Table row fill: #FFFFFF.
- Table row stroke: #EAEBF0 at 1px.
- Pagination fill: #FFFFFF.
- Pagination stroke: #EAEBF0 at 1px.
- Tab fill: #FFFFFF.
- Tab stroke and tab group stroke: #C1C7D2 at 1px.
- Switch fill: #D61A46.
- Switch stroke: #BD2241 at 0px.
- Radio stroke: #EAEBF0 at 1px.
- Checkbox stroke: #C1C7D2 at 1px.
- Tag fill: #EAF7EA.
- Page row fill: #F8F8FA.

## Type scale

All documented tracking values are 0px unless noted.

| Style | Typeface | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| Heading/H1 | Inter | 700 | 48px / 64px | 0px |
| Heading/H2 | Inter | 500 | 32px / 40px | 0px |
| Heading/H4 | Inter | 500 | 20px / 28px | 0px |
| Heading/H5 | Inter | 600 | 11px / 14px | 0.49px |
| Body/Large/Regular | Inter | 400 | 16px / 20px | 0px |
| Body/Large/Medium | Inter | 500 | 16px / 20px | 0px |
| Body/Large/Semibold | Inter | 600 | 16px / 20px | 0px |
| Body/Default/Regular | Inter | 400 | 14px / 16px | 0px |
| Body/Default/Medium | Inter | 500 | 14px / 16px | 0px |
| Body/Default/Medium — Underline | Inter | 500 | 14px / 16px | 0px |
| Body/Default/Bold | Inter | 700 | 14px / 16px | 0px |
| Body/Medium/Strong | Public Sans | 500 | 14px / 18px | 0px |
| Body/Small/Regular | Inter | 400 | 12px / 14px | 0px |
| Body/Small/Medium | Inter | 500 | 12px / 14px | 0px |
| Body/Small/Semibold | Inter | 600 | 12px / 14px | 0px |

Most-used styles:

- Body/Default/Medium: 165 uses.
- Body/Small/Regular: 108 uses.
- Body/Large/Medium: 53 uses.
- Body/Small/Medium: 42 uses.
- Body/Small/Semibold: 23 uses.
- Body/Default/Regular: 22 uses.
- Body/Large/Regular: 13 uses.
- Body/Default/Bold: 12 uses.
- Heading/H1: 9 uses.
- Heading/H4: 5 uses.

Additional raw typography observed includes Figtree, Poppins, Neue Plak, Plus Jakarta Sans, and Mynerve. Raw sizes include 11px, 12px, 13px, 14px, 16px, 32px, 48px, 64px, 96px, 128px, and 164px.

## Spacing scale

No spacing variables were defined. Observed component spacing and padding values:

- 0px.
- 2px.
- 4px.
- 8px.
- 12px.
- 16px.
- 24px.
- 120px.
- 160px.
- 654px.
- 690px.

Component-specific spacing:

- `button`: padding 12px on all sides; gap 0px.
- `text input`: padding 0px; gap 8px.
- `_switch page`: padding 8px on all sides; gap 8px.
- `_page rows`: horizontal padding 12px; gap 8px.
- `cell`: vertical padding 8px, horizontal padding 12px; gap 4px.
- `row`: horizontal padding 24px; gap 24px.
- `pagination`: padding 12px 24px 16px 24px; gap 566px.
- `_cell actions`: gap 8px.
- `Tab`: vertical padding 4px; gap 0px.
- `switch`: padding 2px on all sides; gap 0px.
- `tag`: padding 2px 4px; gap 4px.

## Radius scale

No radius variables were defined. Observed radii:

- 0px.
- 4px: `checkbox`, `tag`.
- 10px: `_page rows`.
- 12px: `button`.
- 20px and 24px: `pagination` bottom corner radii, represented as `0/0/20/24px`.
- 30px: social-links frame.
- 999px: `_switch page`, `switch`, and `radio`.

## Elevation & effects

- No local effect styles found.
- No elevation values found.
- No motion tokens found.
- No local grid styles found.

## Components

### Buttons

**`button`**

- Size: 128x48px.
- Horizontal layout; centered alignment.
- Padding: 12px on all sides.
- Gap: 0px.
- Fixed width and height.
- Fill: #D61A46.
- Stroke: #BD2241 at 0px.
- Radius: 12px.
- Text style: Body/Large/Medium.
- Size variants: large, medium, small.
- Variant variants: destructive, primary, secondary, tertiary.
- State variants: default, disabled, hover, loading, pressed.

### Form controls

**`text input`**

- Size: 240x96px.
- Vertical layout.
- Padding: 0px.
- Gap: 8px.
- Fixed width and height.
- Text styles: Body/Default/Medium, Body/Large/Medium, Body/Large/Regular.
- State variants: default, disabled, error, filled.
- Size variants: large, medium.

**`switch`**

- Size: 40x24px.
- Radius: 999px.
- Padding: 2px on all sides.
- Horizontal layout.
- Fill: #D61A46.
- Stroke: #BD2241 at 0px.
- State variants: off, off-disabled, on, on-disabled.

**`checkbox`**

- Size: 20x20px.
- Radius: 4px.
- Stroke: #C1C7D2 at 1px.
- State variants: deselected, disabled-deselected, disabled-selected, partial, selected.

**`radio`**

- Size: 20x20px.
- Radius: 999px.
- Stroke: #EAEBF0 at 1px.
- State variants: default, disabled, selected.

### Tabs and pagination

**`Tab`**

- Size: 180x40px.
- Vertical layout; centered alignment.
- Padding: 4px top and bottom.
- Gap: 0px.
- Fill: #FFFFFF.
- Stroke: #C1C7D2 at 1px.
- Text style: Body/Large/Medium.
- State variants: select_hover, selected, unselected, unselected_hover.

**`Tab Group`**

- Size: 900x40px.
- Horizontal layout.
- Gap: 0px.
- Stroke: #C1C7D2 at 1px.
- Text style: Body/Large/Medium.

**`_switch page`**

- Size: 24x24px.
- Radius: 999px.
- Padding: 8px on all sides.
- Gap: 8px.
- Fill: #FFFFFF.
- Text style: Body/Small/Regular.
- State variants: active, active_hover, default, default_hover.
- Variant variants: chevron, page.

**`_page rows`**

- Size: 72x24px.
- Radius: 10px.
- Horizontal layout.
- Horizontal padding: 12px.
- Gap: 8px.
- Fill: #F8F8FA.
- Text style: Body/Small/Regular.
- Status variants: default, open.

**`pagination`**

- Size: 1008x52px.
- Fill: #FFFFFF.
- Stroke: #EAEBF0 at 1px.
- Radius: 0/0/20/24px.
- Padding: 12px 24px 16px 24px.
- Gap: 566px.
- Text styles: Body/Small/Regular, Body/Small/Semibold.

### Tables

**`row`**

- Size: 1000x44px.
- Horizontal layout.
- Horizontal padding: 24px.
- Gap: 24px.
- Fill: #FFFFFF.
- Stroke: #EAEBF0 at 1px.
- Text: Figtree Medium, 14px.
- State variants: default, error, error_hover, header, hover, selected.

**`cell`**

- Size: 120x46px.
- Horizontal layout.
- Padding: 8px 12px.
- Gap: 4px.
- Text styles: Body/Small/Regular, Body/Default/Medium.
- Cell variants: blank, error, first cell, header, status, text subdued.
- State variants: default, hover.

**`.example header content`**

- Size: 880x52px.
- Horizontal layout.
- Gap: 0px.
- Width fills available space; fixed height.
- Text style: Body/Small/Semibold.

**`.example row`**

- Size: 880x46px.
- Horizontal layout.
- Gap: 0px.
- Width fills available space; fixed height.
- Text styles: Body/Default/Medium, Body/Default/Regular, Body/Small/Regular.

**`_cell actions`**

- Size: 184x28px.
- Horizontal layout.
- Gap: 8px.
- Text style: Body/Small/Medium.

### Tags and statuses

**`tag`**

- Size: 36.2x16px.
- Radius: 4px.
- Horizontal layout.
- Padding: 2px 4px.
- Gap: 4px.
- Fill: #EAF7EA.
- Text: Figtree Medium, 12px.
- Variants: Default, Variant2, Variant3, Variant4, Variant5.

**`status`**

- Size: 58x16px.
- Horizontal layout.
- Gap: 4px.
- Text style: Body/Default/Medium.
- Variants: blue, green, orange, purple, red.
- State variants: default, hover.

### Icons

- Default icon size: 16x16px.
- `.icon-placeholder`: 24x24px.
- `loader`, `gear-filled`, `table`, `graph`, `link`, `zoom_out`, `zoom_in`, `search-2`, `search`, `heart`, `wifi`, `eye_closed`, `eye`, `camera-2`, `camera`, `video`, `video_camera`.
- `music_note`, `music_note-2`, `vinyl`, `next_track`, `forward`, `pause-2`, `pause`, `play-2`, `play`, `rewind`, `previous_track`, `mute_audio`, `volume down`, `volume_up`, `audio`.
- `mute_microphone`, `microphone`, `mute_microphone-2`, `microphone-2`, `credit card`, `cart-2`, `cart`, `shopping_bag`, `shop-2`, `shop`, `money`, `coins`, `discount`.
- `bar_code`, `qr_code`, `scan_code`, `moon`, `lightning`, `sun bright`, `sun dim`, `cloud`, `planet`, `star`.
- `arrow ↕︎`, `arrow ↔︎`, `dual chevron ←`, `chevron ↓`, `chevron ↑`, `chevron ←`, `chevron →`.
- `arrow_circle ←`, `arrow_circle ↑`, `arrow_circle →`, `arrow_circle ↓`.
- `arrow-2 ←`, `arrow-2 ↑`, `arrow-2 →`, `arrow-2 ↓`.
- `arrow ←`, `arrow ↑`, `arrow →`, `arrow ↓`, `download`.
- `bicycle`, `motorcycle`, `truck`, `truck-2`, `bus`, `bus -2`, `car`, `car-2`, `rocket`, `rocket-2`.
- `chat`, `share`, `share-2`, `comment`, `comment-2`, `pencil_and_scale`, `tv`, `folder`, `bulb`, `bulb_on`, `floppy`, `note`, `clipboard`, `clipboard-2`, `doc`, `doc-2`.
- `funnel`, `alarm`, `stopwatch`, `clock-1`, `clock2`, `cross`, `plus`, `minus`, `upload`, `alert`, `lock_open`, `lock_closed`.
- `bell`, `bell-2`, `bell_ringing`, `bell_ringing-2`, `info`, `gear`, `bookmark`, `dislike`, `like`, `calendar`, `calendar-2`, `pin`, `ID`.
- `mail`, `mail_open`, `inbox`, `printer`, `slider`, `slider-2`, `pencil`, `hambruger`, `trash`, `trash-2`, `box`, `box-2`, `Image`.
- `headphones`, `tablet`, `phone`, `phone-2`, `laptop`, `laptop-2`, `pc`, `game_controller`, `game_controller-2`.
- `location`, `location-2`, `location-3`, `fullscreen`, `exit-fullscreen`, `collapse`, `expand`, `home`, `refresh`, `refresh-2`.
- `battery_33%`, `battery_66%`, `battery_100%`, `battery_charging`, `user`, `user-2`.

White-filled icon variants documented:

- `pause`: #FFFFFF fill.
- `play`: #FFFFFF fill.
- `chat`: #FFFFFF fill.
- `comment`: #FFFFFF fill.
- `comment-2`: #FFFFFF fill.
- `share`: #FFFFFF fill.
- `funnel`: #FFFFFF fill.
- `dislike`: #FFFFFF fill.
- `like`: #FFFFFF fill.
- `refresh-2`: #FFFFFF fill.

### Supporting components

- `slot`: 48x40px, vertical layout, centered alignment, Figtree Medium 14px.
- `button`, `text input`, `switch`, `checkbox`, `radio`, `status`, `tag`, `Tab`, `Tab Group`, `pagination`, `row`, `cell`, `_cell actions`, `_page rows`, `_switch page`, `.example header content`, `.example row`, and `.icon-placeholder` are documented component families.

## Screen patterns

- **Cover:** 1920x1080px dark cover screen with “work in progress...”, “HEX”, “Design System”, “Version 0.3”, logo, social links, and decorative graphics.
- **Icons source:** 676x906px icon reference frame with 100px padding and 30px gap. Icons are displayed as 16x16px components.
- **Icon grid:** 168x159px reference grid showing 16px construction guides and a 24px `.icon-placeholder`.
- **Button documentation:** 1920x2394px documentation screen with 120px top, left, and right padding, 160px bottom padding, 120px section gap, a 1680px content width, and a #F8F8FA content area.
- **Button:** 1920x2390px component documentation screen with the same 120px top, left, and right padding and 160px bottom padding.
- **Component documentation pages:** Dedicated patterns exist for text input, table, horizontal tabs, checkbox/radio/switch, tag/status, and component workspace.

## Notes for implementers

- Use only the documented colors; do not infer additional semantic colors from raw extraction artifacts.
- Prefer the named Inter typography tokens for interface text.
- Use 16x16px for standard icons and 24x24px for `.icon-placeholder`.
- Preserve component states and variants rather than creating separate ad hoc controls.
- Use #D61A46 for documented primary button and switch fills, with #BD2241 for their documented stroke value.
- Use #FFFFFF surfaces and #EAEBF0 or #C1C7D2 borders according to the component specification.
- No spacing, radius, elevation, motion, or grid variables were defined; use the documented component-level values only.
- Preserve the exact component names where an icon or family is selected, including names with spaces, hyphens, arrows, and percentage signs.
