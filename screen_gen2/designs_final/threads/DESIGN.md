---
name: threads-ui-screens-community
source: Threads UI Screens (Community), Page 1
kind: design-system-context
---

# threads - Design System

## Overview

A Threads community UI centered on profile, thread, media, navigation, notification, and follow interactions. The primary screen canvas is white. Components use fixed dimensions primarily based on a 430px-wide layout.

## Design language

- Minimal monochrome interface with black primary text and white surfaces.
- Secondary metadata uses gray text.
- Primary actions use black fills with white labels.
- Verification and accent states use blue.
- Component outlines and dividers use light gray.
- Typography is predominantly SF Pro.
- Layouts use compact horizontal and vertical gaps, rounded controls, and thin borders.
- Profile and thread content is organized around circular profile pictures and stacked metadata.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 271 | Primary text, labels, button fill, active states |
| `#FFFFFF` | 187 | Page and component surfaces, button text, image borders |
| `#D9D9D9` | 73 | Dividers, strokes, placeholder profile picture |
| `#9A9A9A` | 72 | Secondary metadata |
| `#4192EF` | 52 | Verification accent |
| `#B8B8B8` | 28 | Gray UI elements |
| `#B5B5B5` | 19 | Gray UI elements |
| `#9747FF` | 13 | Component-set outline |
| `#A1A1A1` | 8 | Secondary labels and timestamps |
| `#303030` | 7 | Dark gray UI elements |
| `#999999` | 7 | Inactive and secondary text |
| `#828282` | 4 | Gray UI elements |
| `#D0D0D066` | — | Notification-pill drop shadow |

Named styles:

- `Labels/Primary`: `#000000`, 36 uses.
- `Grays/Black`: `#000000`, 7 uses.
- `threads text`: 40 uses.
- `Bio text`: 1 use.

## Type scale

Fonts and sizes present in the source:

| Size | Font | Weight/style | Usage |
|---:|---|---|---|
| 44.97px | Instagram Sans Headline | Regular | Headline |
| 30px | SF Pro | Bold | Profile name |
| 24px | SF Pro | Regular | Profile handle |
| 20.14px | SF Pro | Regular | Body or metadata |
| 20px | SF Pro | Regular | Following statistics |
| 18px | SF Pro | Regular | Body and metadata |
| 18px | SF Pro | Medium, weight 510 | Thread text and button labels |
| 18px | SF Pro | Bold | Usernames |
| 17px | SF Pro | Semibold | Text |
| 16.48px | SF Pro | Semibold | Segmented picker labels |
| 14px | SF Pro | Regular | Small profile labels |

Named typography:

- `threads text`: SF Pro Medium, weight 510, `18px / 26px`, tracking `0px`.
- `Bio text`: SF Pro Regular, weight 400, `18px / 22px`, tracking `0px`.

Raw usage counts:

- SF Pro Regular, 18px: 139.
- SF Pro Medium, 18px: 65.
- SF Pro Bold, 18px: 51.
- SF Pro Regular, 20px: 23.
- SF Pro Semibold, 16.48px: 20.
- SF Pro Semibold, 17px: 14.
- SF Pro Regular, 20.14px: 8.
- SF Pro Bold, 30px: 6.
- SF Pro Regular, 14px: 6.
- SF Pro Regular, 24px: 6.
- Instagram Sans Headline Regular, 44.97px: 3.

## Spacing scale

No spacing variables were found.

Explicit component spacing values:

- `5px`: notification pill component-set gap.
- `6px`: username gap; following-button horizontal gap; following-stats text gap.
- `7px`: profile vertical gap; following-stats gap.
- `8px`: notification-pill vertical padding; thread connector gaps.
- `10px`: following-button horizontal padding and gap; profile user-info gap; media-type gap; thread horizontal padding; notification-pill horizontal padding; profile-to-content gap in thread layouts.
- `12px`: thread profile-picture-to-content gap.
- `15px`: profile vertical gap; notification-pill shadow blur value.
- `17px`: thread content vertical gap.
- `18px`: thread interaction gap.
- `20px`: thread padding; profile-picture border width in thread structures; thread vertical gap.
- `35px`: replying-view frame overlap gap.
- `52px`: vertical spacing within thread profile-picture columns.
- `137px`: thread and media-thread horizontal gap.
- `-3px`, `-4px`, and `-5px`: overlapping or compressed layout gaps.
- `-35px`: replying-view nested frame gap.

## Radius scale

Explicit radii:

- `5px`: component-set outline containers.
- `10px`: following button.
- `30px`: notification pill.
- `50px`: page background rectangle and profile service pill.

No radius variables were found.

## Elevation & effects

- Notification pill: drop shadow with `15px` offset value and color `#D0D0D066`.
- No local effect styles were found beyond the notification-pill drop shadow.
- Borders and dividers are generally `1px` using `#D9D9D9`.
- Segmented-picker option borders use `0.82px`.
- Thread connector strokes use `2px`.
- Circular profile-image borders use `3px` or `4px`.

## Components

Only the following component families are defined:

### navbar

- Size: `430x83px`.
- Fill: `#FFFFFF`.
- Variant: `light`.

### media type

- Size: `338x250px`.
- Horizontal layout.
- Padding: `0 0 0 0px`.
- Gap: `10px`.
- Fixed width and height.
- Variants: `carousel`, `image`, `quote rethread`.

### media thread

- Size: `430x428.5px`.
- Horizontal layout with space-between/min alignment.
- Padding: `20 10 20 10px`.
- Gap: `137px`.
- Fixed width and height.
- Stroke: `#D9D9D9`, `1px`.
- Text styles: SF Pro Regular 18px, SF Pro Medium 18px, `threads text`, and SF Pro Bold 18px.
- Variants:
  - `replies?`: `false` or `true`.
  - `media?`: `false` or `true`.

### thread's profile picture

- Size: `47x47px`.
- Variant: `show plus?`: `false` or `true`.

### following button

- Size: `390x44px`.
- Radius: `10px`.
- Fill: `#000000`.
- Horizontal layout.
- Padding: `6 10 6 10px`.
- Gap: `10px`.
- Center/center alignment.
- Label: SF Pro Medium, `18px`, `#FFFFFF`.
- Variants: `following?`: `false` or `true`.

### profile picture

- Size: `84x84px`.
- Variant: `is verified?`: `false` or `true`.

### username

- Size: `65.5x21px`.
- Horizontal layout.
- Gap: `6px`.
- Min/center alignment.
- Label: SF Pro Bold, `18px`, `#000000`.
- Variant: `is verified?`: `false` or `true`.

### notif pill

- Size: `115.5x38px`.
- Radius: `30px`.
- Fill: `#FFFFFF`.
- Vertical layout.
- Padding: `7 8 7 8px`.
- Gap: `5px`.
- Drop shadow: `15px`, `#D0D0D066`.
- Variants: `tweets`: `less`, `max`, or `medium`.

### like button

- Size: `22.5x21.38px`.
- Variants: `liked?`: `false` or `true`.
- Unliked state: black outline.
- Liked state: source-defined red fill and outline; no allowed palette value is available for this state.

### thread

- Standard size: `430x171.5px`.
- Replying-view size: `430x305px`.
- Horizontal layout with space-between/min alignment.
- Padding: `20 10 20 10px`.
- Gap: `137px`.
- Stroke: `#D9D9D9`, `1px`.
- Text styles: SF Pro Regular 18px, SF Pro Medium 18px, `threads text`, and SF Pro Bold 18px.
- Variants: `replying view?`: `false` or `true`.
- Standard thread content includes a `47x47px` thread profile picture, username, thread text, interaction controls, reply/like statistics, and timestamp metadata.
- Thread interaction row uses four `22.5px`-scale controls with an `18px` gap.

### profile

- Size: `390x257px` with bio; `390x185px` without bio.
- Vertical layout.
- Gap: `15px`.
- Fixed width and height.
- Profile name: SF Pro Bold, `30px`.
- Handle: SF Pro Regular, `24px`.
- Bio: `Bio text`.
- Following statistics: SF Pro Regular, `20px`.
- Follow button: `390x44px`, radius `10px`, black fill.
- Variants: `bio?`: `false` or `true`.

### following stats

- With website: `287.46x32px`.
- Without website: `207.5x32px`.
- Horizontal layout.
- Gap: `7px`.
- Center/center alignment.
- Follower metadata uses SF Pro Regular, `20px`, `#A1A1A1`.
- Avatar cluster: three overlapping circular images, approximately `24px` high, with `3px` white strokes and a `-5px` gap.
- Variant: `website?`: `false` or `true`.

### segmented picker

- Size: `430x46.77px`.
- Horizontal layout.
- Gap: `0.82px`.
- Fixed width and height.
- Labels: SF Pro Semibold, `16.48px`.
- Two equal options, each `215x46.77px`.
- Option padding: `9.89 49.43 9.89 49.43px`.
- Active option: `#000000` text and `0.82px` black stroke.
- Inactive option: `#999999` text and `0.82px` `#A1A1A1` stroke.
- Variants: `selected`: `replies` or `threads`.

## Screen patterns

- **White page canvas:** Use a white background with a large rounded outer rectangle; the source canvas is `2767x1241px` with a `50px` radius.
- **Profile screen:** Stack profile name, handle/service pill, optional bio, following statistics, and a full-width follow button inside a `390px` content width.
- **Thread feed:** Use a `430px`-wide bordered thread row with a left profile-picture column, content column, interaction controls, statistics, and timestamp.
- **Replying thread:** Expand the thread row to `305px` high and add a nested reply structure connected by vertical gray strokes.
- **Profile tabs:** Place the `430x46.77px` segmented picker below profile content. Keep the two `215px` options equal in width.
- **Notification overlay:** Use a white `115.5x38px` pill with a `30px` radius and the defined drop shadow.
- **Media thread:** Use the `430x428.5px` media-thread frame with the `338x250px` media-type region and the defined media variants.

## Notes for implementers

- Prefer the fixed `430px`-wide layout values for navbar, thread, media thread, and segmented picker implementations.
- Use `390px` content width for profile and following-button layouts.
- Treat `threads text` and `Bio text` as named styles when available.
- Preserve the distinction between active black labels and inactive gray labels in the segmented picker.
- Preserve `#D9D9D9` 1px thread and media-thread strokes.
- Use circular profile imagery with white borders where specified.
- Keep follow buttons black with white SF Pro Medium 18px labels.
- Do not introduce additional colors, spacing tokens, radius tokens, or effect styles not present in this source.
- No local variables, motion tokens, grid styles, or local effect styles were found.
