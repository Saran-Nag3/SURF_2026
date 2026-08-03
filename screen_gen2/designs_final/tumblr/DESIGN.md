---
name: tumblr-ui-community
source: Tumblr UI (Community)
kind: design-system-context
---

# tumblr - Design System

## Overview

Tumblr UI community extraction covering three Figma pages: Thumbnail, Post_screen, and Icons.

Primary artifacts:
- Thumbnail canvas: 1920x960px, dark navy background.
- Mobile screens: Tumblr_iPhone 8 at 375x699.83px and Tumblr_iPhone 9 at 375x752px.
- Reusable post components and a 24x24px icon family.
- Sticky note: 272x114px.

## Design language

- Mobile-first social interface composed of white post surfaces over a dark navy application background.
- Use dark navy `#051833` for screen backgrounds and navigation bars.
- Use white `#FFFFFF` for cards, headers, content surfaces, and primary icon fills.
- Use black `#000000` for post text and primary labels.
- Use blue `#52B5F9` for follow actions and thumbnail accents.
- Use yellow `#FFD600` for sticky notes.
- Post layouts are centered within 375px-wide screens.
- Posts use compact headers, media content, hashtags or captions, and social-action rows.
- Icon controls use 24x24px components.

## Color palette

Ranked by raw usage:

| Color | Usage | Token / usage |
|---|---:|---|
| `#FFFFFF` | 79 | `SystemBackground/Light/Primary`; post and card surfaces |
| `#C4C4C4` | 66 | Placeholder and profile-image fills |
| `#595959` | 45 | Secondary text and dot-menu fills |
| `#DADADA` | 30 | Raw neutral color |
| `#000000` | 27 | `Opacity / Black 100%`; primary text |
| `#EAEAEA` | 27 | Raw neutral color |
| `#FCFDFD` | 21 | Near-white icon fill |
| `#051833` | 9 | Screen background and navigation bar |
| `#333333` | 7 | `Gray 1`; profile-image fills |
| `#C0C0C0` | 7 | Dividers and strokes |
| `#52B5F9` | 6 | Follow text and thumbnail accent |
| `#191919` | 4 | Raw dark neutral |
| `#121212` | 3 | Raw dark neutral and profile-screen rules |
| `#FFD600` | 1 | `Sticky / Yellow` |
| `#0000001A` | — | Sticky shadow layer |
| `#00000040` | — | Sticky shadow layer |

## Type scale

### Primary body

- `Helvetica Neue HelveticaNeue`, weight 400, 16px, line-height 22px, tracking 0px.
- Token: `Body`.

### Raw styles and hierarchy

| Size | Family | Weight | Usage |
|---:|---|---:|---|
| 27px | Roboto | Bold | Profile heading |
| 21px | Roboto | Regular | Post title or primary post text |
| 17px | Roboto | Medium | Profile username |
| 16px | Roboto | Medium | Usernames and labels |
| 16px | Roboto | Regular | Post body and hashtags |
| 15px | Roboto | Medium | Notes count |
| 14px | Roboto | Medium | Labels and usernames |
| 14px | Roboto | Regular | Secondary metadata and follow text |
| 12px | SF Pro Text | Regular | iPhone status-bar text |
| 12px | SF Pro Text | Semibold | iPhone status-bar time |

## Spacing scale

Observed spacing values:

- `0px`: component and frame padding, dividers, and zero-gap layouts.
- `4px`: metadata text gap.
- `6px`: Personal post vertical gap.
- `8px`: Icons frame vertical padding and horizontal padding value.
- `9px`: social-action row gap.
- `10px`: Personal post vertical padding; sticky note gap and vertical padding.
- `11px`: post header internal gap.
- `12px`: user post header gap.
- `14px`: post main vertical gap.
- `16px`: Icons frame horizontal padding.
- `19px`: post bottom margin.
- `20px`: Icons frame height.
- `24px`: content gap and sticky note padding.
- `26px`: post content-to-social-section gap.
- `31px`: social icon gap.
- `65px`: Personal post header gap.
- `100px`: thumbnail decorative-frame gap.

Observed layout dimensions:
- Mobile screen width: `375px`.
- Post content width: `345px`.
- Post header inner width: `340px`.
- Personal post header width: `337px`.
- Icon size: `24x24px`.

## Radius scale

Observed corner radii:

- `1px`: profile images in user posts and Personal post.
- `3px`: Personal post profile frame and profile-screen image rectangles.
- `4px`: profile-screen image rectangle.
- `0/0/0/0px`: Edit icon vector radius.

## Elevation & effects

- `Sticky Shadow`:
  - Drop shadow: `24px`, offset `0 8`, color `#0000001A`.
  - Drop shadow: `8px`, offset `0 4`, color `#00000040`.
- No motion variables found.
- No grid styles found.

## Components

Only use the extracted component families:

### `post`

#### `post/ user`

- Size: `375x423.83px`.
- Fill: `#FFFFFF`.
- Vertical layout with `0px` padding and `0px` gap.
- Main content height: `404.83px`.
- Post header: `375x50px`.
- Header inner row: `340x33px`, gap `12px`.
- Profile image: `33x33px`, radius `1px`, fill `#333333`.
- Main content width: `345px`.
- Content gap: `24px`.
- Media: `345x250.83px`.
- Social section: `345x66px`, gap `10px`.
- Hashtag/body text: Roboto Regular, `16px`.
- Metadata includes `416 notes` in Roboto Medium, `15px`.
- Follow metadata uses Roboto Regular, `14px`; follow text uses `#52B5F9`.
- Bottom margin: `375x19px`.
- Divider stroke: `#C0C0C0`, `0.5px`.

#### `post/ Personal`

- Size: `375x147px`.
- Fill: `#FFFFFF`.
- Vertical padding: `10px` top and bottom.
- Gap: `6px`.
- Header: `337x34px`, gap `65px`.
- Profile frame: `34x34px`, radius `1px`, fill `#333333`.
- Username: Roboto Medium, `14px`.
- Divider stroke: `#C0C0C0`, `0.5px`.
- Main content: `345x81px`.
- Main content gap: `26px`.
- Post text: Roboto Regular, `21px`.
- Social icon row: `202x30px`, gap `31px`.

### `Tumblr_iPhone 8`

- Size: `375x699.83px`.
- Fill: `#051833`.
- Main region: `375x586.83px`, vertical gap `16px`.
- Navigation bar: `375x49px`, fill `#051833`.
- Status bar: `375x20px`.
- Title bar: `375x44px`, fill `#FFFFFF`.

### `Tumblr_iPhone 9`

- Size: `375x752px`.
- Fill: `#051833`.
- Main region: `375x578.05px`, vertical gap `16px`.
- Navigation bar: `375x49px`, fill `#051833`.
- Status bar: `375x20px`.
- Profile/content region includes a `376x651px` white surface.
- Profile cover image: `376x209px`.
- Profile heading: Roboto Bold, `27px`.
- Profile username: Roboto Medium, `17px`.
- Profile tabs use Roboto Medium, `14px`.
- Profile post region includes a `375x372.83px` Personal post surface.

### `Sticky`

#### `Sticky / 02. Medium`

- Size: `272x114px`.
- Fill: `#FFD600`.
- Padding: `24px` on all sides.
- Gap: `10px`.
- Text area: `224x66px`.
- Text: `Body`.
- Effect: `Sticky Shadow`.

### Icon components

All icon components are `24x24px`. Use `#FFFFFF` where a fill is specified.

- `Add_group_icon`
- `Comment_icon`
- `Delete_icon`
- `Dotmenu_icon`
- `Edit_icon`
- `Group_chat_icon`
- `Group_icon`
- `Home_icon`
- `Like_icon`
- `Private_icon`
- `Repost_icon`
- `Search_icon`
- `Sent_icon`
- `Settings_icon`
- `User_icon`

Icon-specific extracted fills:
- `Private_icon`: `#FFFFFF`
- `Group_icon`: `#FFFFFF`
- `Group_chat_icon`: `#FFFFFF`
- `User_icon`: `#FFFFFF`
- `Home_icon`: `#FFFFFF`
- `Search_icon`: `#FFFFFF`
- `Sent_icon`: `#FFFFFF` and `#FCFDFD`
- `Repost_icon`: `#FFFFFF`
- `Edit_icon`: `#FFFFFF`
- `Settings_icon`: `#FFFFFF`
- `Dotmenu_icon`: `#FCFDFD`
- `Add_group_icon`: `#FFFFFF` within its decorative group
- `Comment_icon`, `Delete_icon`, and `Like_icon`: use the extracted 24x24px component artwork.

## Screen patterns

### Thumbnail

- Canvas: `1920x960px`.
- Background: `#051833`.
- Decorative horizontal shape groups use `100px` gaps.
- Central artwork combines a white vector and a blue `#52B5F9` square with dark navy `#051833` detail.

### Mobile post screen

- Use a `375px`-wide dark navy shell.
- Place a white post surface in the main region.
- Structure the post as:
  1. `50px` header.
  2. `345px` content area with `24px` vertical gap.
  3. Media rectangle.
  4. Hashtag or caption section.
  5. Social-action row.
  6. Bottom margin where present.
- Use a dark navy `375x49px` navigation bar at the bottom.
- Use a white `375x20px` status-bar region at the top with dark status-bar content.

### Profile screen

- Use a white `376x651px` profile surface inside the Tumblr_iPhone 9 layout.
- Place a `376x209px` cover image at the top.
- Include profile statistics, profile heading, username, profile controls, divider rules, and a Personal post.
- Use `#C4C4C4` for profile-image placeholders and `#121212` for profile rules.

### Icons strip

- Frame size: `716x40px`.
- Fill: `#051833`.
- Padding: `8px` vertical and `16px` horizontal.
- Horizontal gap: `20px`.
- Center `24x24px` icon components in the strip.

## Notes for implementers

- Keep mobile layouts fixed to the extracted `375px` width when reproducing the source screens.
- Preserve the distinction between `post/ user` at `375x423.83px` and `post/ Personal` at `375x147px`.
- Use the extracted `345px` content width inside post surfaces.
- Preserve the `0.5px` `#C0C0C0` divider treatment.
- Use the provided icon component families rather than substituting generic icons.
- Do not introduce additional colors, spacing tokens, radii, motion, or grid values beyond those extracted here.
- Treat image fills as source images; the extraction identifies them by hashes but does not provide reusable color values for them.
