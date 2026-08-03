---
name: slack-design-system-components-community
source: Slack Design System (Components) (Community)
kind: design-system-context
---

# slack - Design System

## Overview

Slack component-focused design system covering navigation, chat, search, forms, buttons, dropdowns, huddles, onboarding, icons, photos, and template web patterns. The source contains 11 Figma pages, including Component, Template Web, Colors, Text Styles, Icons, Image, and playground.

No local variable collections, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Primary typeface: Lato.
- Supporting typefaces: Inter for profile content and IBM Plex Sans for `Utility styles/label-01`.
- Interface controls commonly use 4px, 6px, or 8px radius.
- Larger cards and containers commonly use 8px radius.
- Pills use 100px radius.
- Common control heights are 26px, 28px, 30px, 34px, 36px, 38px, 42px, and 48px.
- Common borders use `#DDDDDD` or `#BBBBBB` at 1px.
- Primary dark brand surfaces use `#3A123E`, `#4A154B`, or `#4F3452`.
- Buttons and list items expose explicit Active, Hover, Normal, Default, Disabled, Error, and Selected states where specified.
- Icons are generally 24x24px.

## Color palette

### Named color tokens

- `Labels/Primary`: `#000000`
- `neutral/white`: `#FFFFFF`
- `Text/$text-secondary`: `#C6C6C6`

### Raw colors ranked by usage

| Color | Uses |
|---|---:|
| `#D9D9D9` | 417 |
| `#D8A4A4` | 325 |
| `#000000` | 212 |
| `#868686` | 174 |
| `#616061` | 159 |
| `#B9B9B9` | 154 |
| `#FFFFFF` | 118 |
| `#606060` | 112 |
| `#4D4D4D` | 78 |
| `#9747FF` | 59 |
| `#1D1C1D` | 44 |
| `#1364A3` | 25 |
| `#020202` | 20 |
| `#EA4335` | 19 |
| `#34A853` | 14 |
| `#4285F4` | 14 |
| `#BBDEEE` | 14 |
| `#FBBC05` | 14 |

### Component colors

- `#F8F8F8`: dropdown surfaces, Like state, List view control, Banner, and related light surfaces.
- `#DDDDDD`: 1px strokes on dropdowns, Chatbox, List, Banner, Normal, Draft send, Canvas, and Navigation.
- `#BBBBBB`: 1px strokes on Profile, Kabab, and button controls.
- `#1364A3`: filled Filter Button.
- `#522653`: Huddle Full View stroke and Company frame stroke.
- `#4A154B`: Huddle slider fill.
- `#4F3452`: search surface.
- `#3A123E`: Company frame fill.
- `#E01E5A`: Fancy button stroke.
- `#0000001A`: dropdown shadow color.

## Type scale

All tracking values are `0px` unless stated otherwise.

| Style | Typeface | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| Heading 1 | Lato | 900 | 48px / 68px | 0px |
| Heading 4 | Lato | 900 | 22px / 30px | 0px |
| Heading 4 | Lato | 700 | 22px / 30px | 0px |
| Heading 4 | Lato | 600 | 22px / 30px | 0px |
| Body | Lato | 900 | 18px / 26px | 0px |
| Body | Lato | 700 | 18px / 26px | 0px |
| Body | Lato | 600 | 18px / 26px | 0px |
| Body | Lato | 400 | 18px / 26px | 0px |
| Subheading | Lato | 900 | 15px / 22px | 0px |
| Subheading | Lato | 700 | 15px / 22px | 0px |
| Subheading | Lato | 600 | 15px / 22px | 0px |
| Subheading | Lato | 400 | 15px / 22px | 0px |
| Cap 1 | Lato | 700 | 13px / 18px | 0px |
| Cap 1 | Lato | 600 | 13px / 18px | 0px |
| Cap 1 | Lato | 400 | 13px / 18px | 0px |
| Cap 2 | Lato | 700 | 12px / 16px | 0px |
| Cap 2 | Lato | 600 | 12px / 16px | 0px |
| Cap 2 | Lato | 400 | 12px / 16px | 0px |
| `label-01` | IBM Plex Sans | 400 | 12px / 16px | 0.32px |

### Raw typography usage

- Lato Regular, 16px: 169 uses.
- Lato SemiBold, 12px: 49 uses.
- Lato Bold, 12px: 25 uses.
- Lato ExtraBold, 100px: 24 uses.
- Lato SemiBold, 16px: 24 uses.
- Lato Regular, 13px: 21 uses.
- Lato Bold, 40px: 20 uses.
- Lato Regular, 15px: 16 uses.
- Inter Regular, 12px: 15 uses.
- Inter SemiBold, 14px: 14 uses.
- Lato Regular, 14px: 13 uses.
- Lato Semibold, 16px: 13 uses.
- Lato SemiBold, 15px: 12 uses.
- Lato Regular, 12px: 10 uses.
- Lato Black, 16px: 8 uses.
- Lato Medium, 20px: 8 uses.
- Lato Regular, 18px: 8 uses.
- Lato Regular, 20px: 8 uses.
- Lato Regular, 24px: 7 uses.
- Lato Black, 18px: 5 uses.
- Lato Bold, 15px: 4 uses.
- Lato SemiBold, 14px: 4 uses.
- Lato Bold, 24px: 3 uses.
- Lato Regular, 22px: 3 uses.

## Spacing scale

No spacing variables were found.

Observed component spacing and padding values:

- `0px`: no padding or gap.
- `1px`: photo gap and borders.
- `2px`, `4px`, `5px`, `6px`, `8px`, `10px`, `11px`, `12px`, `14px`, `16px`, `24px`, and `28px`.
- Documented large layout gaps include `89px`, `360px`, and `10px`.
- Common horizontal padding: `6px 16px`, `6px 8px`, `6px 10px`, `8px 16px`, `10px 16px`, and `16px`.
- Common vertical padding: `4px`, `6px`, `8px`, `10px`, `12px`, and `16px`.

## Radius scale

No radius variables were found.

Observed radii:

- `0px` where no radius is specified.
- `4px`: buttons, controls, Chat, Send & Dropdown, Sort, Notification, Huddle button, Dropdown Field, and Onboarding button.
- `6px`: Dropdown variations, Hash, Draft nav, Left nav, and Kabab.
- `8px`: Chatbox, Profile, Normal, Draft send, Banner, Huddle Full View, Search, and Company frame-related surfaces.
- `100px`: Like state and Huddle slider.
- Compound radii: `4px / 0px / 0px / 4px` for Send & Dropdown; `8px / 8px / 0px / 0px` for Huddle Full View.

## Elevation & effects

- Dropdown variations use `drop_shadow 8px`, offset `0px 0px`, color `#0000001A`.
- No other local effect styles were found.
- Common surface strokes are 1px using `#DDDDDD` or `#BBBBBB`.
- Onboarding button uses a 2px `#BBBBBB` stroke.

## Components

### Navigation and list items

- **Dropdown**
  - `316x36px`, horizontal, padding `6px 16px`, gap `8px`.
  - Also documented at `337x36px`, horizontal, padding `6px 16px`, gap `6px`.
  - Uses `Regular/15px Subheading`.
  - Variants: List item; Hover and Normal.
- **Dropdown variations**
  - `216x84px`, radius `6px`, vertical, padding `8px 0px`, gap `0px`.
  - Fill `#F8F8F8`, 1px `#DDDDDD` stroke, dropdown shadow.
  - Variants: Add more, Add profile, Canvas more, More, New channel, Recent.
- **Copy link**
  - `240x34px`, padding `6px 16px`, gap `8px`.
  - Variants: Default and Hover.
- **Unreads**
  - `288x34px`, padding `6px 16px`, gap `8px`.
  - Variants: Default and Hover.
- **Normal list**
  - `216x34px`, padding `6px 16px`, gap `8px`.
  - Variants: Default and Hover.
- **Hash**
  - `259x34px`, radius `6px`, padding `6px 8px`, gap `8px`.
  - Uses `Regular/12px Cap 2` and `Semibold/15px Subheading`.
  - Variants: Hover, Normal, Selected.
- **Draft nav**
  - `259x34px`, radius `6px`, padding `6px 8px`, gap `8px`.
  - Variants: Active, Hover, Normal.
- **Left nav**
  - `259x34px`, radius `6px`, padding `6px 8px`, gap `8px`.
  - Variants: List and Listimage; Active, Hover, Normal.
- **Component 45**
  - `101x30px`, horizontal, gap `8px`.
  - Variants: Channels and Direct messages; Hover and Normal.
- **Component 38**
  - `73x30px`, padding `4px 6px`, gap `10px`.
  - Fill `#FFFFFF`.
  - Variants: channel/direct messages; Active, default, hover.
- **Component 37**
  - `20x20px`, radius `4px`.
  - Variants: Add; default and hover.
- **Side nav dropdown**
  - `20x20px`, radius `4px`.
  - Variants: Nav-dropdown; Active, Close, Default, Hover.
- **Navigation**
  - `37x38px`, padding `10px 0px`, gap `10px`.
  - 1px `#DDDDDD` stroke and `Bold/13px Cap 1`.
  - Variants: Active, Hover, Normal.
- **Text button**
  - `65x18px`, fill `#FFFFFF`.
  - Uses `Regular/13px Cap 1`.
  - Variants: Hover, Normal, Selected.

### Chat and messaging

- **Replies**
  - `600x32px`, horizontal, no padding or gap.
  - Uses `Regular/12px Cap 2`.
  - Variants: Replies; Hover and Normal.
- **Chat**
  - `644x114px`, vertical, gap `8px`.
  - Uses `Regular/12px Cap 2`, `Regular/15px Subheading`, and `Black/15px Subheading`.
  - Variants: Hover, No replies, Normal.
  - Additional Chat instance: `958x156px`, vertical, gap `8px`, using `Regular/12px Cap 2`, `Bold/13px Cap 1`, Lato SemiBold 16px, `Regular/15px Subheading`, and `Black/15px Subheading`.
- **Chatbox**
  - `1059x118px`, radius `8px`, vertical, 1px `#DDDDDD` stroke.
  - Uses `Regular/13px Cap 1`.
  - Variants: Hover and Normal.
- **Chat heading**
  - `175x30px`, padding `2px 4px`, gap `4px`.
  - Uses `Black/18px Body`.
  - Variants: Active, Hover, Normal.
- **Send & Dropdown**
  - `30x28px`, compound radius `4px / 0px / 0px / 4px`, padding `5px 6px`, gap `10px`.
  - Variants: Dropdown and Send; Active, Hover, Normal.
- **Chat**
  - `55x28px`, radius `4px`, horizontal.
  - Variants: Send; Active and Hover.
- **Like state**
  - `45x26px`, radius `100px`, padding `4px 8px`, gap `4px`.
  - Fill `#F8F8F8`, uses `Regular/12px Cap 2`.
  - Variants: Like; Hover and Normal.

### Search, filtering, and lists

- **Search**
  - `1072x48px`, vertical, padding `4px`, gap `10px`.
  - Uses `Regular/13px Cap 1`.
  - Variants: Hover and Normal.
  - Additional Search instance: `843x32px`, radius `8px`, horizontal, padding `6px 8px 6px 360px`, gap `360px`, fill `#4F3452`.
- **List**
  - View control: `60x30px`, radius `4px`, fill `#F8F8F8`, 1px `#DDDDDD` stroke. Variants: Grid and List.
  - List row: `1063x76px`, vertical, padding `16px`, gap `4px`, 1px `#DDDDDD` stroke. Uses `Regular/13px Cap 1` and `Bold/15px Subheading`.
- **Sort**
  - `128x30px`, radius `4px`, padding `6px`, gap `4px`.
  - Uses `Regular/13px Cap 1`.
  - Variants: Hover and Normal.
- **Filter Button**
  - `120x30px`, radius `4px`, padding `6px 8px`, gap `6px`.
  - Filled surface `#1364A3`; uses `Regular/13px Cap 1`.
  - Variants: Filled and Stoke; Hover and Normal.
- **Profile**
  - `168x272px`, radius `8px`, vertical, padding bottom `28px`, gap `16px`.
  - 1px `#BBBBBB` stroke.
  - Uses Inter Regular 12px and Inter SemiBold 14px.
  - Variants: Hover and Normal.
- **Photos**
  - Available sizes: `20x20px`, `24x24px`, `26x26px`, `36x36px`, `48x48px`, `72x72px`, `102x102px`, and `258x258px`.
  - `photos/26x26` is documented as `32x30px`.
  - `photos/48x48` uses a `1px` gap.

### Forms and controls

- **Checkbox**
  - `150x24px`, horizontal, gap `10px`, centered vertically.
  - Uses `Regular/15px Subheading`.
  - Variants: Checkbox and Radio; Hover and Normal.
- **Field**
  - `533x100px`, vertical, no padding or gap.
  - Uses `Regular/13px Cap 1` and `Regular/15px Subheading`.
  - Variants: Error, Hover, Normal.
  - Additional Common field instance: `533x136px`, same layout and typography.
- **Dropdown Field**
  - `207x42px`, radius `4px`, padding `4px`, gap `10px`.
  - Uses `Regular/13px Cap 1`.
  - Variants: Dropdown; Hover and Normal.
- **Dropdown field**
  - `533x100px`, vertical, no padding or gap.
  - Uses `Regular/13px Cap 1` and `Regular/15px Subheading`.
  - Variants: Invite; Error, Hover, Normal.
- **Fields**
  - `318x42px`, vertical, padding `4px`, gap `10px`.
  - Uses `Regular/13px Cap 1`.
  - Variants: Search; Hover and Normal.
- **Placeholder**
  - `436x124px`, vertical, padding `4px`, gap `10px`.
  - Uses `Regular/13px Cap 1`.
  - Variants: Preference; Hover and Normal.
- **Onboarding form**
  - `402x70px`, vertical, no padding or gap.
  - Uses `Regular/13px Cap 1` and `Regular/15px Subheading`.
  - Filled style; Active, Error, Hover, Normal.
- **Notification**
  - `197x30px`, radius `4px`, padding `4px 8px`, gap `8px`.
  - Uses `Regular/15px Subheading`.
  - Variants: Preference; Active, Hover, Normal.

### Buttons

- **Fancy button**
  - `91x26px`, radius `4px`, padding `4px 8px`, gap `10px`.
  - 1px `#E01E5A` stroke and `Bold/13px Cap 1`.
  - Variants: Gray-Hover, Gray-Normal, Green-Hover, Green-Normal, Red-Hover, Red-Normal.
- **Dropdown button**
  - `95x30px`, radius `4px`, padding `6px 10px`, gap `4px`.
  - Fill `#FFFFFF`, 1px `#BBBBBB` stroke.
  - Uses `Semibold/13px Cap 1`.
- **Dropdown button**
  - `120x38px`, radius `4px`, padding `8px 16px`, gap `8px`.
  - Fill `#FFFFFF`, 1px `#BBBBBB` stroke.
  - Uses `Semibold/15px Subheading`.
- **Dropdown button variations**
  - `116x38px`, radius `4px`, padding `8px 14px`, gap `8px`.
  - Fill `#FFFFFF`, 1px `#BBBBBB` stroke.
  - Uses `Semibold/15px Subheading`.
  - Variants: Filled and Stoke; Active, Hover, Normal.
- **Outline & Filled button**
  - `68x38px`, radius `4px`, padding `8px 16px`, gap `10px`.
  - 1px `#BBBBBB` stroke and `Semibold/15px Subheading`.
  - Variants: Filled, Flled, Stoke; Error, Hover, Normal.
- **Icon button**
  - `77x30px`, radius `4px`, padding `6px 10px`, gap `8px`.
  - Fill `#FFFFFF`, 1px `#BBBBBB` stroke.
  - Uses `Semibold/13px Cap 1`.
  - Variants: Active, Disable, Hover, Normal.
- **Onboarding button**
  - `403x50px`, radius `4px`, padding `12px 96px`, gap `8px`.
  - 2px `#BBBBBB` stroke and `Semibold/18px Body`.
  - Variants: Filled and Stock; Active, Hover, Normal.
- **Kabab**
  - `38x38px`, radius `6px`, padding `10px`, gap `10px`.
  - Fill `#FFFFFF`, 1px `#BBBBBB` stroke.
  - Variants: Button; Hover and Normal.

### Huddles, banners, and surfaces

- **Banner**
  - `404x76px`, radius `8px`, padding `10px 16px`, gap `16px`.
  - Fill `#F8F8F8`, 1px `#DDDDDD` stroke.
  - Uses `Regular/12px Cap 2`.
  - Variants: Info-1 and Info-2.
- **Huddle Full View**
  - `275x44px`, compound radius `8px / 8px / 0px / 0px`, vertical, padding `6px 12px`, gap `10px`.
  - 1px `#522653` stroke and `Regular/15px Subheading`.
  - Variants: Call and Normal.
- **Huddle button**
  - `127x26px`, radius `4px`, padding `2px 4px`, gap `4px`.
  - Uses `Regular/15px Subheading`.
  - Variants: Active, Hover, Normal.
- **Huddle slider**
  - `57x32px`, radius `100px`, vertical, padding `4px 5px 4px 4px`, gap `10px`.
  - Fill `#4A154B`.
  - Variants: Active, Hover, Normal.
- **Canvas**
  - `334x48px`, horizontal, padding `11px 16px`, gap `8px`.
  - Fill `#FFFFFF`, 1px `#DDDDDD` stroke.
  - Uses `Black/18px Body`.
  - Variants: Canvas and Profile.
- **Company frame**
  - `275x48px`, horizontal, padding `10px 16px`, gap `89px`.
  - Fill `#3A123E`, 1px `#522653` stroke.
  - Uses `Semibold/15px Subheading`.
- **add channels**
  - `117x46px`, horizontal, padding `12px 0px`, gap `8px`.
  - Uses `Regular/15px Subheading`.

### Icons

- **Icon**
  - Standard size: `24x24px`.
  - Variants: Line; Active, Disabled, Gray, Hover, Normal, White.
- **Header**
  - `24x24px`, fill `#FFFFFF`.
  - Variants: Icon; Hover and Normal.
- **Component 1**
  - `24x24px` base icon.
  - Base icon variants include Accessibility, Add, Add user, Apps, Arrows, At the rate, Bold, Bookmark, Burger, Calendar, Cancel, Canvas, Channels, Chat, Checkbox, Chevron down, Chevron left, Chevron right, Clock, Code, Code block, Command, Connected around, Dropdown, Edit, Edit pencil, Emoji Add, Emoji smile 1, Filter, Forward, Frame 61, Hash, Heart, Help, Huddle, I, Kabab, Language & region, Left algn, Left arrow, Link, List, Mail, Mark as read, Mic, Mic Huddle, Mobile, More resource, Notification, Number, Page, People, Privacy, Right arrow, Run, Search, Send, Send empty, Send selected, Settings, Sidebar, Slack connected, Star, Strike through, TV, Text, Themes, Thread, Unavailable, Unread, Video, Video Huddle, View.
- Named icon instances are `24x24px`, including Result, Eye, View, Video, Photo, search-cancel, Sendtime, Delete, Video Huddle, Unread, Active, Unavailable, TV, Thread, Text, Strike through, Star, Slack connected, Sidebar, Settings, Send selected, Send empty, Search, Run, Right arrow, Privacy, People, Page, Number, Notification, More resource, Mobile, Mic, Mic Huddle, Mark as read, Mail, List, Link, left arrow, Left algn, Language & region, meatball, Kabab, Italic, Huddle, Help, Heart, Hash, Frame, Forward, Filter, Emoji smile, Emoji Add, Edit, Edit pencil, apple, Google, Dropdown right, Dropdown, Connected around, Command, Code, Code block, Clock, Chevron up, Chevron right, Chevron left, Chevron down, Window, Linking, Correct, checked, Checkbox preference, Radiofilled, Radio, Emptybox, Check mark, Chat, Channels, Canvas, Cancel, Calendar, Burger 1, Bookmark, Bold, At the rate, Arrows, Apps, Add, Add user, Accessibility.

## Screen patterns

- **Template Web**
  - Use a structured web layout combining Header, Navigation, Search, List, Sort, Filter Button, Profile, Photos, and button controls.
  - List rows use `1063x76px` sizing, `16px` padding, `4px` gap, and a 1px `#DDDDDD` stroke.
- **Chat workspace**
  - Combine Company frame, Left nav, Draft nav, Hash, Chat heading, Chat, Replies, Chatbox, Send & Dropdown, and Like state.
  - Use dark purple surfaces for the company frame and huddle/search surfaces where specified.
- **Dropdown and navigation menus**
  - Use Dropdown variations for `216x84px` menu surfaces with `6px` radius, `#F8F8F8` fill, `#DDDDDD` stroke, and the documented shadow.
  - Use Hash, Draft nav, Left nav, Unreads, Copy link, and Normal list for compact navigation rows.
- **Forms and onboarding**
  - Combine Onboarding form, Field, Dropdown field, Dropdown Field, Fields, Placeholder, Checkbox, and Onboarding button.
  - Use Error, Active, Hover, and Normal states rather than introducing unspecified states.
- **Huddle surfaces**
  - Combine Huddle Full View, Huddle button, Huddle slider, Banner, and Company frame.
  - Preserve the documented `#522653` stroke, `#4A154B` slider fill, and `#3A123E` Company frame fill.
- **Icon and image libraries**
  - Use 24x24px Icon and Component 1 assets for controls.
  - Use the documented Photos sizes for avatars, thumbnails, and large images.

## Notes for implementers

- Use only the listed colors; do not substitute near-identical grays without preserving the documented value.
- Prefer named typography styles when available: `Regular/15px Subheading`, `Regular/13px Cap 1`, `Regular/12px Cap 2`, `Semibold/15px Subheading`, and `Black/18px Body`.
- Treat each listed size as fixed for the corresponding component.
- Preserve component-specific padding, gap, stroke, fill, radius, and variant states.
- The source contains both `Dropdown Field` and `Dropdown field`, and both should remain distinct because their documented sizes and variant purposes differ.
- The source contains multiple `Dropdown`, `Chat`, `List`, `Field`, and `Search` instances with different dimensions; select the instance matching the intended context.
- Do not infer undocumented motion, elevation, grid, spacing tokens, or radius tokens.
- Icon names are source labels; use the corresponding 24x24px asset and preserve its listed fill when specified.
