---
name: reddit-design-system-community
source: Reddit Design System (Community)
kind: design-system-context
---

# reddit - Design System

## Overview

- Community Figma extraction covering Cover, Intro, Color, Typography, Grid, Buttons, Card, Dropdown, Icon, Input Field, Navigation, Pill, Tab, and Testing pages.
- Visual language centers on white surfaces, neutral gray borders and text, Reddit blue actions, rounded pills, compact typography, and card-based content layouts.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Use IBM Plex Sans for most interface text, titles, usernames, captions, and headings.
- Use Noto Sans for button labels and selected body/caption styles.
- Use white surfaces with neutral gray borders and light gray fills for controls.
- Use #0079D3 for primary blue emphasis, selected navigation, and interactive strokes.
- Use #FF4500 for the cover accent.
- Controls commonly use fixed dimensions, centered alignment, and explicit state variants.
- Pill-like tags and tabs use large radii: 99px or 9999px.
- Content is organized into posts, comments, community tiles, cards, tabs, dropdowns, and text fields.

## Color palette

Ranked by raw usage where available:

| Color | Usage / role |
|---|---|
| #000000 | 86 raw uses; black |
| #878A8C | 72 raw uses; Oslo Gray, neutral text or icon color |
| #FFFFFF | 61 raw uses; Nero, primary surface |
| #9747FF | 60 raw uses; raw unstyled color |
| #1C1C1C | 36 raw uses; Cod Gray |
| #1A1A1B | 25 raw uses; Shark |
| #0079D3 | 14 raw uses; Lochmara, primary blue |
| #EDEFF1 | 14 raw uses; Porcelain, light border or surface |
| #787C7E | 12 raw uses; raw neutral |
| #434343 | 10 raw uses; raw neutral |
| #D9D9D9 | 10 raw uses; raw neutral |
| #FFFFFF80 | 9 raw uses; translucent white |
| #8F8F8F | 8 raw uses; raw neutral |
| #00B162 | 6 raw uses; green |
| #1A1A1B12 | 6 raw uses; translucent Shark |
| #589AD8 | 5 raw uses; light blue |
| #0279D3 | 4 raw uses; blue |
| #46D160 | 4 raw uses; Emerald |
| #7C7C7C | 4 raw uses; Boulder |
| #FF4500 | 4 raw uses; Reddit orange |
| #106AB5 | 3 raw uses; dark blue |
| #797979 | 3 raw uses; raw neutral |
| #FF825E | 3 raw uses; orange |
| #F6F7F8 | Component fill; light control background |
| #D1D1D1 | Component stroke; card border |
| #C3C3C3 | Component stroke; tile and card border |
| #888888 | Component stroke; tag border |
| #FFFFFF00 | Transparent white fill |
| #0DD3BB | Bright Turquoise |
| #F7E1CB | Givry |
| #FFFF00 | Diesel |
| #FF7BAC | Deep Cerulean |
| #F15A24 | Flamingo |
| #171F22 | Neutral foreground |
| #9FA1A3 | Gray Chateau |
| #00000033 | Shadow color |

Named tokens:
- `www.reddit.com/Lochmara`: #0079D3
- `www.reddit.com/Nero`: #FFFFFF
- `www.reddit.com/Emerald`: #46D160
- `www.reddit.com/Black`: #000000
- `www.reddit.com/Porcelain`: #EDEFF1
- `www.reddit.com/Shark`: #1A1A1B
- `www.reddit.com/Oslo Gray`: #878A8C
- `www.reddit.com/Oslo Gray 50%`: #878A8C80
- `www.reddit.com/Gray Chateau`: #9FA1A3
- `www.reddit.com/Cod Gray`: #1C1C1C
- `www.reddit.com/Boulder`: #7C7C7C
- `www.reddit.com/Givry`: #F7E1CB
- `www.reddit.com/Diesel`: #FFFF00
- `www.reddit.com/Deep Cerulean`: #FF7BAC
- `www.reddit.com/Silver`: #CCCCCC
- `www.reddit.com/Flamingo`: #F15A24
- `www.reddit.com/Bright Turquoise`: #0DD3BB
- `colors/neutral/fg`: #171F22

## Type scale

Use these deduplicated text styles:

| Style | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| H1/Bold | IBM Plex Sans | 700 | 20px / 24px | 0px |
| H1/Medium | IBM Plex Sans | 500 | 20px / 24px | 0px |
| H2/Bold | IBM Plex Sans | 700 | 18px / 22px | 0px |
| H2/Medium | IBM Plex Sans | 500 | 18px / 22px | 0px |
| H3/Bold | IBM Plex Sans | 700 | 16px / 20px | 0px |
| H3/Medium | IBM Plex Sans | 500 | 16px / 20px | 0px |
| Title 1 | IBM Plex Sans | 500 | 20px / 24px | 0px |
| Title 2 | IBM Plex Sans | 500 | 18px / 22px | 0px |
| Title 3 | IBM Plex Sans | 500 | 16px / 20px | 0px |
| Body 1/Medium | IBM Plex Sans | 500 | 14px / 18px | 0px |
| Body 1/Regular | IBM Plex Sans | 400 | 14px / 21px | 0px |
| Body 2/Bold (button) | Noto Sans | 700 | 14px / 17px | 0px |
| Body 2/Regular | Noto Sans | 400 | 14px / 21px | 0px |
| Caption 1/Bold | IBM Plex Sans | 700 | 12px / 16px | 0px |
| Caption 1/Medium | IBM Plex Sans | 500 | 12px / 16px | 0px |
| Caption 1/Regular | IBM Plex Sans | 400 | 12px / 16px | 0px |
| Caption 2/Bold | Noto Sans | 700 | 12px / 16px | 0px |
| Caption 2/Regular | Noto Sans | 400 | 12px / 16px | 0px |
| Caption 3/Uppercase | IBM Plex Sans | 700 | 10px / 12px | 0.5px |
| Username/Bold | IBM Plex Sans | 700 | 12px / 16px | 0px |
| Username/Medium | IBM Plex Sans | 500 | 12px / 16px | 0px |
| Username/Regular | IBM Plex Sans | 400 | 12px / 16px | 0px |
| Label (username)/Bold | IBM Plex Sans | 700 | 10px / 16px | 0px |
| Label (username)/Medium | IBM Plex Sans | 500 | 10px / 16px | 0px |

Raw source also contains unnormalized sizes of 6px, 12px, 14px, 16px, 20px, 24px, 28px, 32px, 34px, 40px, 50px, 66px, and 75px, including IBM Plex Sans, Noto Sans, and Avenir Next.

## Spacing scale

No spacing variables were found. Explicit component spacing values:

- 0px gaps and padding are common for icons, cards, and tabs.
- 4px: icon padding and small tab padding.
- 6px: button-tag vertical padding.
- 8px: tab padding, icon padding, and dropdown padding.
- 10px: common control gap, field padding, and card gaps.
- 12px: card and text-field padding.
- 16px: tag horizontal padding, searchbar horizontal padding, and community-tile vertical padding.
- 17px: Create Post Dropdown and Create Post Field horizontal padding.
- 20px: tab horizontal padding.
- 32px: Tab Button -1 horizontal padding.
- 36px: Tab Button -1 gap.
- 42px and 43px: cover callout horizontal padding.
- 30px: cover “Variants” horizontal padding.

## Radius scale

No radius variables were found. Explicit radii:

- 4px: cards, dropdowns, fields, icon buttons, and text fields.
- 18px: cover callout frames.
- 99px: NSFW Button Tag and tab controls.
- 9999px: OC, Spoiler, and Flair button tags.

## Elevation & effects

- `Shadow - 1`: drop shadow, offset `0 2px`, blur `6px`, color #00000033.
- No other effect styles or motion tokens were found.
- Borders are generally 1px using #D1D1D1, #C3C3C3, #EDEFF1, #F6F7F8, or #888888.
- Cover callout frames use a 2px #FFFFFF stroke.

## Components

Use only the documented component families and their stated variants.

### Tags and tabs

- **OC - Button Tag**: 85x36px, radius 9999px, padding 6px 16px, 1px #888888 stroke, Body 2/Bold (button). States: Default, Hover, Inactive, Selected.
- **Spoiler - Button Tag**: 113x36px, radius 9999px, padding 6px 16px, 1px #888888 stroke, Body 2/Bold (button). States: Default, Hover, Inactive, Selected.
- **NSFW Button Tag**: 105x36px, radius 99px, padding 6px 16px, 1px #888888 stroke, Body 2/Bold (button). States: Default, Hover, Inactive, Selected.
- **Flair -Button Tag**: 134.88x34.06px, radius 9999px, padding 4px 16px, 1px #888888 stroke, Body 2/Bold (button). States: Default, Hover, Inactive.
- **Tab button**: 122x41px, radius 99px, padding 0 20px, gap 10px, fill #F6F7F8, Body 2/Bold (button). Current: False/True; State: hover/rest.
- **Tab Button -1**: 185x50.24px, padding 12px 32px, gap 36px, transparent #FFFFFF00 fill, 1px #0079D3 stroke, Body 2/Bold (button). States: Deselected, Selected, hover.
- **Top Tab Button**, **Best Tab Button**, **Hot Tab Button**, **New Tab Button**: each 75.76x32px, padding 4px 8px, gap 4px, Body 2/Bold (button). States: Default, Hover, Selected.
- **Tab for Homepage**: 638x60px, #FFFFFF fill, Body 2/Bold (button). States: Best selected, Hot selected, New selected, Top Selected.
- **Tab for Create a Post - Poll Active**: 740x50.44px, #FFFFFF fill, Body 2/Bold (button). Versions: Image & Video, Link, Post.
- **Tabs for Create a post - Poll Inactive**: 740x50.44px, #FFFFFF fill, Body 2/Bold (button). Versions: Image or Video, Link, Poll Selected, Post.

### Cards and content

- **Comment Card**: 704x109px, #FFFFFF fill. Types: Comment & Reply, comment, reply. Uses Caption 2/Bold, Username/Medium, Body 1/Regular, and Username/Regular.
- **Create Post Card**: 741x671px. States: active, rest, save draft active.
- **Card**: 312x336px, #FFFFFF fill, 1px #D1D1D1 stroke. Variants: Moderator, Variant2, Variant3.
- **Post**: 26.24x26.24px, padding 4px, states Unselected/selected.
- **Community tile**: 321x68px, #FFFFFF fill, 1px #C3C3C3 stroke, padding 16px 8px, horizontal layout. States: Default, Hover.
- **Recent Posts Item**: 286x87px, #FFFFFF fill, 1px #F6F7F8 stroke, padding 12px 0, gap 8px. Order: first, middle/last.
- **Card** variants represented in the source include Post (Text Only), Home, Premium Card, Reddit Rules, Post (Image Only), and About Community.
- **Card** Post (Text Only): 640x223px, radius 4px, #FFFFFF fill, 1px #D1D1D1 stroke.
- **Card** Home: 310x261px. States include Home, Create Community Hover, Create Community Pressed, Create Post Button Hover, Create Post Pressed.
- **Card** Premium Card: 306x94px, radius 4px, #FFFFFF fill, 1px #C3C3C3 stroke, padding 10px, gap 10px. States: hover/rest.
- **Card** Reddit Rules: 357.32x355.06px, radius 4px, padding 12px, gap 24px.
- **Card** About Community: 312x492.5px, radius 4px, #FFFFFF fill, 1px #CCCCCC stroke, padding 1px.
- **Image** content card: 640x672px, #FFFFFF fill.
- **Poll**: 24x24px, #FFFFFF fill. States: Inactive, Selected, Unselected.

### Inputs and controls

- **Create Post Dropdown**: 269x36px, radius 4px, padding 10px 17px, gap 10px. States: hover/rest.
- **Icon Button**: 24x24px, radius 4px. States: focused/hover/rest; Types: Image/Link/Upvote/down/downvote; Selected: False/True.
- **Dropdown**: 26.88x22.06px, #FFFFFF fill, padding 8px. States: Active/Inactive.
- **Searchbar**: 389x40px, radius 99px, #F6F7F8 fill, padding 10px 16px, gap 10px, Body 1/Regular. States: filled/focus/hover/rest.
- **Create Post Field**: 486x41px, radius 4px, #F6F7F8 fill, 1px #EDEFF1 stroke, padding 10px 17px, gap 10px. Locations: Create a post/Homepage. States: filled/focus/rest.
- **Create Post Textfield**: 707x182px, radius 4px, 1px #EDEFF1 stroke. States: filled/focused/rest.
- **Comment Field**: 707x182px, radius 4px. States: Active/Default.
- **Comments Textfield**: 613x172px, radius 4px, #FFFFFF fill, 1px #EDEFF1 stroke. States: filled/focused/rest. Types: Comments/Comments Reply.

### Icons and editor tools

- **Icon**: 19.45x19.46px. Variants: Community_Icon Big/Small.
- **Icon** Birthday Cake: 26x17.74px.
- **Add**: 24x24px. Thickness: thicker/thinner.
- **Alert-circle**: 20x20px. Types: spoiler/circle.
- **Arrow**: 24x24px. Types: circle, dropdown-down, dropdown-down bl, dropdown-up, share.
- **Search**: 24x24px. Sizes: large/medium.
- **Bookmark**: 24x24px. Types: 1/2.
- **Vote**: 24x24px. Directions: down/up.
- **Hot**, **Best**, **Top**, **New**: each 24x24px. Selected: False/True.
- **Link** and **Image**: each 24x24px. States: Selected/rest.
- **Gif**, **Code**, **Image**, **Ellipsis**, **abc list**, **Bulleted list**, **numbered list**, **Superscript**, **table**, **quote block**, and **codeblock**: primarily 32x32px editor/tool controls.
- **notification**: 32x24px; variants include Icon Button, abc list, rest, and Notification-new.
- **size**: 32x32px.

### Navigation and shell

- **Header**: 1350x59px, #FFFFFF fill. Versions: Logged In/Logged out.
- **Post**: post-related selected/unselected control at 26.24x26.24px.
- **Searchbar**, **Header**, **Tab for Homepage**, and **Tab button** form the primary navigation and discovery controls.
- **Post**, **Comment Card**, **Comments Textfield**, **Vote**, **Bookmark**, and **Ellipsis** support post and comment interaction patterns.

## Screen patterns

- **Cover**: 1920x1080px frame with #FF4500 fill, a 754x850px image region, large white IBM Plex Sans SemiBold 75px title text, and white outlined callout frames for “Auto-Layout” and “Variants.” The callout frames use 18px radius, 2px #FFFFFF strokes, and 40px IBM Plex Sans Regular text.
- **Homepage**: header, searchbar, homepage tab navigation, community/content cards, recent-post items, and post interaction controls.
- **Post and comments**: post cards, comment cards, vote/bookmark controls, tags, ellipsis actions, comment fields, and comments text fields.
- **Create a post**: Create Post Card, Create Post Field, Create Post Dropdown, Create Post Textfield, and post-type tabs. The source includes Image & Video, Link, Post, and Poll states.
- **Community surfaces**: Community tile, About Community card, Premium Card, Reddit Rules card, flair tags, and community icons.
- **Editor toolbar**: 32px controls for table, quote block, codeblock, link, alert-circle, lists, superscript, GIF, image, and code.

## Notes for implementers

- Prefer the named typography styles over raw unstyled text values.
- Preserve the distinction between IBM Plex Sans interface/content styles and Noto Sans button styles.
- Use exact fixed dimensions where a component specification provides them.
- Treat component states and variants as required behavioral states, not separate components.
- Use #FFFFFF00 when a transparent white fill is specified; do not substitute an opaque surface.
- Use 1px borders unless the source explicitly specifies a 2px cover stroke.
- No spacing, radius, motion, or grid variables are available; use the explicit component values listed above.
- Avoid introducing colors, font sizes, spacing values, radii, shadows, or component families not present in this document.
