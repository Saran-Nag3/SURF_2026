---
name: discord-ui-kit-community
source: Discord UI Kit (Community)
kind: design-system-context
---

# discord - Design System

## Overview

Discord dark-mode UI kit extracted from the Figma file “Discord UI Kit (Community),” covering Assets, About, Message Builder, Changelog, Cover, and Kit Components. The system emphasizes dark neutral surfaces, compact controls, high-density messaging layouts, Blurple primary actions, and Discord-specific status, server, message, profile, and badge patterns.

No local variable collections, text styles, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Dark, layered interface with distinct surfaces for server navigation, channel navigation, chat, tooltips, profiles, and message composition.
- Primary action color is Blurple `#5865F2`; hover Blurple is `#4752C4`.
- Typography is compact and predominantly Whitney Medium/Semibold/Bold, with ABC Ginto used for prominent headings and labels.
- Controls use compact dimensions, small radii, dense horizontal layouts, and centered alignment.
- Messaging UI uses white primary text, muted gray metadata, bright status colors, and colored embeds.
- Repeated component variants represent states such as selected, hover, disabled, open, outline, status, and content type.

## Color palette

Ranked by reported usage where available:

| Color | Usage / role |
|---|---|
| `#FFFFFF` | Primary white, embed text, avatars, icons, headings; 520 named/raw uses combined |
| `#DCDDDE` | Primary dark-mode text; 314 uses |
| `#B9BBBE` | Icons and chat icons; 150 uses |
| `#5865F2` | Blurple main, primary CTA, badge and icon color; 133 named uses and 6 raw uses |
| `#4F545C` | Secondary CTA; 14 uses |
| `#72767D` | Channel names; 92 uses |
| `#202225` | Server list, title bar, selector stroke; 62 named uses and 23 raw uses |
| `#292B2F` | Sidebar profile information; 61 uses |
| `#2F3136` | Sidebar channels; 40 uses |
| `#36393F` | Primary chat area; 25 uses |
| `#40444B` | Message bar; 12 uses |
| `#393C43` | Selected channel; 10 uses |
| `#3BA55C` | Green CTA and online status; 22 named uses and 10 raw uses |
| `#00AFF4` | Link CTA; 4 uses |
| `#ED4245` | Red CTA, destructive action, DND status; 7 named uses |
| `#FAA61A` | Idle status |
| `#747F8D` | Offline status |
| `#8E9297` | Voice channel counter |
| `#949CF7` | Blurple text CTA |
| `#4752C4` | Blurple hover |
| `#FF6BFA` | Nitro main |
| `#FFB0FF` | Nitro light |
| `#EF8843` | Nitro classic |
| `#4F5D7F` | Nitro badge background |
| `#ECEFF8` | Nitro badge circle |
| `#B7C2CE` | Nitro badge hexagon |
| `#45DDC0` | Hypesquad Balance |
| `#F07D5F` | Hypesquad Brilliance |
| `#9C84EF` | Hypesquad Bravery |
| `#FBB848` | Hypesquad Events |
| `#FFD56C` | Bug Hunter gold |
| `#FFEAC0` | Bug Hunter light gold |
| `#B4E1CE` | Bug Hunter light green |
| `#3BA561` | Bug Hunter green |
| `#FAA61A1A` | Orange CTA treatment |
| `#FFFFFF80` | White with transparency; 94 raw uses |
| `#00000033` | Modal shadow |
| `#0000000D` | Title bar and server banner shadow |
| `#18191C00` | Transparent status outline |
| `#000000` | Raw black; 39 uses |
| `#99AAB5` | Raw gray; 44 uses |
| `#C0BCBC` | Raw gray; 30 uses |
| `#FFCC4D` | Raw yellow; 12 uses |
| `#5C913B` | Raw green; 9 uses |
| `#77B255` | Raw green; 6 uses |
| `#AA8DD8` | Raw purple; 6 uses |
| `#42454A` | Raw dark gray; 5 uses |
| `#1ED760` | Raw green; 4 uses |
| `#212326` | Raw dark gray; 4 uses |
| `#3B3D42` | Raw dark gray; 4 uses |
| `#5D6269` | Raw gray; 4 uses |
| `#E655D4` | Raw pink; 4 uses |
| `#FFDEF9` | Raw light pink; 4 uses |

Named tokens with no usable source color: Server Badge, Tooltips and Userprofile, and Dividers. Use no inferred replacement.

## Type scale

Font families present:

- Whitney Medium
- Whitney Semibold
- Whitney Bold
- ABC Ginto Normal Trial Medium
- ABC Ginto Normal Trial Bold

Most-used sizes:

- `9.5px` Whitney Semibold — 72 uses
- `10px` Whitney Semibold — 55 uses
- `11.5px` Whitney Medium — 36 uses
- `8px` Whitney Medium — 35 uses
- `25px` ABC Ginto Normal Trial Bold — 34 uses
- `11px` Whitney Semibold — 34 uses
- `11px` Whitney Medium — 31 uses
- `10px` Whitney Medium — 29 uses
- `20.68px` Whitney Semibold — 25 uses
- `9.19px` Whitney Semibold — 25 uses
- `9px` Whitney Semibold — 24 uses
- `15px` Whitney Medium — 20 uses
- `12px` Whitney Bold — 16 uses
- `10.5px` Whitney Medium — 15 uses
- `17.41px` Whitney Medium — 15 uses
- `7.74px` Whitney Medium — 15 uses
- `10.64px` Whitney Semibold — 15 uses
- `23.94px` Whitney Semibold — 15 uses
- `35px` ABC Ginto Normal Trial Bold — 13 uses

Other observed sizes: `4px`, `4.05px`, `4.67px`, `5.11px`, `8.5px`, `9.11px`, `10.55px`, `10.64px`, `11.14px`, `11.61px`, `12.27px`, `13px`, `13.15px`, `15.26px`, `15.7px`, `23.94px`, and `26.12px`.

Hierarchy guidance:

- Large page heading: ABC Ginto Normal Trial Bold, `35px`.
- Secondary heading: ABC Ginto Normal Trial Bold, `25px`.
- Component and content headings: Whitney Bold or ABC Ginto, `12px`–`15.26px`.
- Body and navigation: Whitney Medium, `10px`–`15px`.
- Metadata and compact labels: Whitney Medium/Semibold, `7.74px`–`11.5px`.

## Spacing scale

_No spacing variables were found in source._

Observed component spacing values:

- Padding: `0px`, `1px`, `5px`, `7px`, `9px`, `10px`, `11px`, `13px`, `15px`, `18px`.
- Gaps: `0px`, `2px`, `3px`, `4px`, `6px`, `7px`, `9px`, `10px`, `11px`, `12px`, `13px`, `16px`, `162px`.
- Common compact control padding: Button `5px 11px`; Selector `10px`; Channels `7px 9px`; Message Bar `9px 13px`; Context Menu `15px 10px`.
- Component layout commonly uses fixed width and height with horizontal or vertical auto-layout.

## Radius scale

_No radius variables were found in source._

Observed radii:

- `2px`: Input Field, Selector, Button, Context Menu.
- `3px`: Channels.
- `4px`: Embed Container, Profile.
- `5px`: Gift and component-set containers.
- `7px`: Message Bar.
- `10px`: User Components screen container.
- `0px`: Explicitly observed on a status vector.

## Elevation & effects

- Modal Shadow: drop shadow with `20px` blur, offset `0 5`, color `#00000033`.
- Title Bar shadow: drop shadow with `0px` blur, offset `0 1`, color `#0000000D`.
- Server Banner shadow: drop shadow with `0px` blur, offset `0 1`, color `#0000000D`.
- Profile and Context Menu use Modal Shadow.
- No motion tokens were found.

## Components

All extracted component families:

- Badge
- Boost Progress Bar
- Button
- Category
- Channel Icons
- Channels
- Context Menu
- Context Option
- Dropdown
- Embed Container
- Embed Image
- Embed Text
- Footer and Author
- Gift
- Group
- Icons
- Input Field
- Message
- Message Bar
- Modal
- Modal Buttons
- Profile
- RPC
- Reply
- Selector
- Server Banner
- Server Name
- Sidebar Profile
- Status
- Sub-type
- Title Bar
- User Avatar
- User Badges
- Username
- Voice Counter

Key specifications:

- **Modal:** `353x286px`, white fill, Modal Shadow. Variants: Authentication, Form, Image, Message, Promotional, Regular. Text sizes include `10px`, `12.5px`, and `19.4px`.
- **Input Field:** `306x30px`, `2px` radius, `Whitney Medium 12px`. Variants: Long Text/Short Text and Selected true/false.
- **Modal Buttons:** `302x27.95px`, horizontal, `162px` gap, space-between/center. Variants: 1/2/3 buttons and Destructive/Primary/Promotional/Success.
- **Title Bar:** `1043x36px`, primary chat area fill, `#0000000D` shadow. Variants: Channel, Friends, Group.
- **Context Option:** `117x13px`, `10px` gap, Whitney Medium `11.5px`. Dropdown true/false.
- **Dropdown:** `9x9px`, white fill, open true/false.
- **Selector:** `300x32px`, `2px` radius, `10px` padding, `10px` gap, `#202225` 1px stroke. Variants: Context and Seector.
- **Button:** `50x21px`, `2px` radius, `5px 11px` padding, Blurple main fill. Variants: Destructive, Link, Primary, Secondary, Success; Emoji and Hover true/false.
- **Footer and Author:** `55x12px`, `6px` gap, Whitney Medium `10px`. Variants: Author/Footer, image, timestamp.
- **Embed Text:** `152x15px`, white fill, Whitney Bold `13px`. Types: Description, Fields, Title.
- **Icons:** `9.8x14px`, white fill. Types: Deafen, Mute, Settings; disabled true/false.
- **Category:** `157x13px`, `4px` gap, ABC Ginto Medium `10px`. Variants: Category/Default, open, hover.
- **Channels:** `170x28px`, `3px` radius, `7px 9px` padding, `10px` gap, `#34373C` fill, Whitney Medium `11.5px`. Supports Events, Forum, Home, Hub, News, Rules, Stage, Text, Threads, Voice and selected state.
- **Boost Progress Bar:** `175x37px`, sidebar channels fill. Variants: LVL3 true/false. Text uses `9.5px`.
- **Server Banner:** `181x101px`, `#0000000D` shadow, ABC Ginto Bold `11.5px`. Variants: False, Finder, True.
- **Channel Icons:** `13x14px`, white fill. Supports active threads, events, forum, friends, group, home, hub, news, rules, stage, text, NSFW text, private text, text threads, user, voice.
- **Badge:** `12x11.43px`. Types: LVL 1, LVL 2, LVL 3, Partner, Verified; banner true/false.
- **RPC:** `212x125px`. Types: Game and Spotify. Text ranges from `8.5px` to `11.5px`, with ABC Ginto Bold `9.11px`.
- **Username:** `80x34px`, white fill, Whitney Medium `10.5px`, ABC Ginto Bold `15px`. Server Avatar true/false.
- **Status:** `20x20px`. Types: DND, Idle, Mobile, Offline, Online, Streaming; outline true/false.
- **User Badges:** `12x12px`, white fill. Includes Boost, Bug Hunter Gold/Green, Certified Moderator, Discord Partner/Staff, Early Bot Dev, Early Supporter, HS Balance/Bravery/Brilliance/Events, Nitro.
- **User Avatar:** `70x69px`, white fill. Outline and status independently enabled/disabled.
- **Message Bar:** `931.12x39px`, `7px` radius, `9px 13px` padding, `12px` gap, message bar fill, Whitney Medium `12px`.
- **Context Menu:** `143x173px`, `2px` radius, `15px 10px` padding, `13px` gap, tooltip/user-profile fill, Modal Shadow, Whitney Medium `11.5px`.
- **Gift:** `588x154px`, `5px` radius, server-list/title-bar fill, text sizes from `11.14px` to `15.26px`.
- **Embed Image:** `300x169px`, white fill.
- **Embed Container:** `333.5x406.5px`, `4px` radius, `2.5px` left padding, `10px` gap, Blurple main fill. Text sizes include `10px`, `11px`, `12px`, and `13px`.
- **Message:** `144x35px`, `9px` gap. Combines compact metadata, usernames, headings, embeds, and message text using Whitney and ABC Ginto styles.
- **Reply:** `140.5x14px`, `1px` right and `18px` left padding, `2px` gap, white fill.
- **Sidebar Profile:** `180x40px`, sidebar profile info fill. Text sizes `9.5px` and `11px`.
- **Server Name:** `102x15px`, `3px` gap, ABC Ginto Bold `11.5px`.
- **Voice Counter:** `32x13px`, Whitney Semibold `7px`.
- **Profile:** `225x457.5px`, `4px` radius, `12px` bottom padding, `11px` gap, tooltip/user-profile fill, Modal Shadow.
- **Sub-type:** `114x33px`, ABC Ginto Bold `25px`.
- **Group:** `216x121px`, `7px` gap, fill-width layout, Whitney Medium `15px` and ABC Ginto Bold `35px`.

## Screen patterns

- **User Components / Assets:** A dark showcase panel uses a `10px` radius, Sidebar Profile Info fill, Modal Shadow, `40px 50px` outer padding, and `23px` vertical gap. It presents a large ABC Ginto heading, explanatory body copy, then grouped component sets for avatars, badges, and statuses.
- **Message Builder:** Uses a layered Discord chat composition pattern: title bar, channel/sidebar navigation, message list, reply and author metadata, embeds, message bar, and action controls.
- **Profile and context surfaces:** Profile cards and context menus sit above dark surfaces using the Modal Shadow. They use compact typography, small radii, and dense vertical spacing.
- **Server and channel navigation:** Server name, server banner, category, channels, channel icons, boost progress, sidebar profile, and voice counter form the navigation hierarchy. Selected channels use the selected-channel surface and channel rows use compact `7px 9px` padding.
- **Status and identity:** User Avatar, Status, Username, Badge, and User Badges combine circular avatar treatments, optional outlines, status indicators, and identity metadata.
- **Embeds and rich messages:** Embed Container provides a Blurple-accented vertical shell with Embed Text and Embed Image content; Message and Footer and Author provide surrounding metadata.

## Notes for implementers

- Prefer named palette roles over raw colors; preserve the dark surface hierarchy exactly.
- Use only the documented colors. Do not infer colors for tokens listed as missing.
- Preserve the distinction between `#5865F2` main Blurple, `#4752C4` hover Blurple, and `#949CF7` Blurple text.
- Treat component dimensions as fixed reference sizes unless the source explicitly indicates fill width or a responsive layout.
- Keep typography compact; use Whitney for interface text and ABC Ginto for prominent headings, server names, categories, and display labels.
- Implement component state as explicit variants rather than visual approximations: selected, hover, disabled, open, outline, status, banner, image, timestamp, and emoji states are all represented.
- Use `#00000033` only for the documented Modal Shadow and `#0000000D` for the documented Title Bar and Server Banner shadows.
- The extraction contains raw colors and typography outside the named token system. Use them only where a specific component or raw treatment requires them; do not create additional tokens.
