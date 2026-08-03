---
name: seatgeek-ui-kit-community
source: Seatgeek UI Kit (Community)
kind: design-system-context
---

# seatgeek - Design System

## Overview

Seatgeek UI Kit (Community), covering thumbnail, seat Geek, typography, and miscellaneous pages. The extraction includes semantic color and typography tokens, fixed-size component specifications, icon sets, event-card patterns, and screen-flow references.

## Design language

- Use Roobert for the product UI, with Regular, Medium, and Bold weights.
- Use white and near-black surfaces with light gray secondary surfaces.
- Use red, blue, purple, and green semantic accents for status, iconography, and categories.
- Favor compact, fixed-size cards and controls with 6px, 8px, and 12px radii where specified.
- Use horizontal layouts for navigation, search, list items, and medium event cards.
- Use vertical layouts for alerts and small or extra-large event cards.
- Primary text is `#181818`; inverted text and primary surfaces are `#FFFFFF`.

## Color palette

Semantic colors, ranked by observed usage:

| Token | Value | Usage |
|---|---|---:|
| Text/Primary | `#181818` | 112 |
| Surface/Primary | `#FFFFFF` | 54 |
| Text/Inverted | `#FFFFFF` | 32 |
| Text/Secondary | `#525252` | 26 |
| Icon/Red | `#FE5B48` | 20 |
| Text/Tertiary | `#757575` | 8 |
| Surface/Inverted | `#181818` | 5 |
| Divider/Primary | `#FFFFFF` | 5 |
| Surface/Icon Container Fill | `#F5F5F3` | 4 |
| Surface/Secondary | `#F2F2F2` | 4 |
| Icon/Blue | `#2F7CEE` | 3 |
| Icon/BlueBG | `#ECF5FE` | 3 |
| Icon/Purple | `#9837FF` | 2 |
| Icon/PurpleBG | `#F9F1FE` | 2 |
| Icon/RedBG | `#FFF0ED` | 10 |
| Headline and status green | `#116B45` | 1 |

Additional raw colors, ranked by usage:

- `#FFBDB5` — 464 uses
- `#FFFFFF` — 24 uses
- `#000000` — 23 uses
- `#4C4C4C` — 18 uses
- `#A4A4A4` — 12 uses
- `#181818` — 11 uses
- `#181818BF` — 9 uses
- `#9747FF` — 6 uses
- `#D9D9D9` — 6 uses
- `#FFFFFF1A` — 6 uses
- `#9837FF` — 4 uses
- `#FE5B48` — 4 uses

No value is provided for `Divider/Secondary` or `Icon/Green`.

## Type scale

Font family: Roobert unless otherwise noted.

| Style | Weight | Size | Line height | Tracking |
|---|---:|---:|---:|---:|
| Body 2 | Regular 400 | 14px | 113.84% | 0.42px |
| Body 2 Strong | Bold 700 | 14px | 104.17% | 0.42px |
| Callout | Regular 400 | 16px | 113.84% | 0px |
| Callout Strong | Bold 700 | 16px | auto | 0.32px |
| Headline | Medium 500 | 18px | auto | 0px |
| Headline strong | Bold 700 | 18px | auto | 0.54px |
| Title3 | Bold 700 | 20px | auto | 0.3px |

Raw typography also includes:

- Roobert Medium, 20px — 12 uses
- Roobert Bold, 24px — 11 uses
- Roobert Bold, 14px — 9 uses
- Roobert Bold, 26px — 8 uses
- Roobert Bold, 16px — 3 uses
- Inter Regular, 900px — 6 uses

## Spacing scale

No spacing variables were found.

Observed component spacing values:

- 0px
- 6px
- 8px
- 10px
- 12px
- 14px
- 16px
- 18px
- 30px
- 32px

These values occur as padding or gaps in component specifications; they are not defined as global spacing tokens.

## Radius scale

No radius variables were found.

Observed radii:

- 5px — icon, style-icon, favourite, and event-status component sets
- 6px — Artist Card and Search
- 8px — Button, Suggestion Chip, and Event Card Large
- 12px — Alert
- 17px — Color Style Swatch
- 0.5px — star illustration detail

## Elevation & effects

- Event Card Extra Large:
  - Drop shadow: `11.9px` blur, offset `0 2px`, color `#00000040`
  - Drop shadow: `4px` blur, offset `0 2px`, color `#00000008`
- No local effect styles were found beyond the Event Card Extra Large shadows.
- No motion tokens were found.
- No grid styles were found.

## Components

Only use the following extracted component families and variants.

### Button

- Size: `150x39px`
- Radius: `8px`
- Horizontal layout; center-aligned
- Padding: `8px 16px 12px 16px`
- Gap: `10px`
- Fixed width and height
- Fill: `Surface/Primary`
- Stroke: `Divider/Secondary`, `1px`
- Text: `Callout Strong`
- Variants:
  - Size: Large, Regular
  - Nature: Primary, Secondary

### Leading Element

- Size: `50x50px`
- Fill: `#FFFFFF`
- Variants:
  - Icon Container
  - Image circle
  - Image circular square
  - Image square

### Event Status

- Size: `22x18px`
- Text: `Body 2`
- Variants: NEW, Negative, Positive, Same

### Favourite

- Size: `16x13.16px`
- Fill: `#FFFFFF`
- Variants: off, on
- On state uses `Icon/Red` with a `Text/Inverted` stroke.
- Off state uses a `Text/Inverted` stroke.

### Style Icons

- Size: `36x36px`
- Variants:
  - Heart Icon: `Icon/RedBG` background and `Icon/Red` symbol
  - Speaker Icon: `Icon/PurpleBG` background and `Icon/Purple` symbol
  - Star Icon: `Icon/BlueBG` background and `Icon/Blue` symbol

### Icon

- Standard size: `24x24px`
- Placeholder variant: `26x26px`
- Variants:
  - Chevron
  - Cross
  - Filter Icon
  - Heart Icon
  - Microphone
  - Navigation
  - Placeholder
  - Profile
  - Search
  - Share
  - Stadium Icon
  - Ticket

### Event card medium

- Size: `360x110px`
- Horizontal layout
- Padding: `8px 16px 8px 16px`
- Gap: `16px`
- Fixed width and height
- Fill: `Surface/Primary`
- Text: `Body 2`, `Callout Strong`

### Artist Card

- Size: `168x188px`
- Radius: `6px`
- Fill: `#574545`
- Text: `Body 2` and Roobert Bold 16px

### Alert

- Size: `325x388px`
- Radius: `12px`
- Vertical layout
- Padding: `32px 30px 32px 30px`
- Gap: `32px`
- Minimum/center alignment
- Fill: `Surface/Primary`
- Text: `Callout Strong`, Roobert Regular 18px, `Title3`

### Trending event list item

- Size: `299x81px`
- Horizontal layout
- Padding: `18px 8px 0 0`
- Gap: `18px`
- Fill: `Surface/Primary`
- Text includes `Body 2`, `Callout`, `Callout Strong`, Roobert Bold, and Roobert Bold 26px

### Subheading

- Size: `360x22px`
- Horizontal layout
- Padding: `0 16px 0 16px`
- Gap: `173px`
- Space-between alignment
- Fill: `Surface/Primary`
- Text: `Callout`, `Headline strong`

### Event Card Large

- Size: `328x206px`
- Radius: `8px`
- Image fill
- Text: `Callout Strong`, `Body 2`, Roobert Bold, and Roobert Bold 14px

### Event Card Small

- Size: `158x159px`
- Vertical layout
- Padding: `0`
- Gap: `12px`
- Fixed width and height
- Fill: `Surface/Primary`
- Text: `Body 2`, `Callout Strong`, Roobert Bold, and Roobert Bold 14px

### Event Card Extra Large

- Size: `347x316px`
- Vertical layout
- Padding: `0`
- Gap: `0px`
- Fixed width and height
- Text: `Callout`, `Headline strong`, Roobert Bold, and Roobert Bold 14px
- Effects: use the two drop shadows defined in Elevation & effects

### Suggestion Chip

- Size: `75x34px`
- Radius: `8px`
- Horizontal layout; center-aligned
- Padding: `8px 16px 8px 16px`
- Gap: `10px`
- Fixed width and height
- Fill: `Text/Inverted`
- Stroke: `Divider/Secondary`, `1.25px`
- Text: `Body 2`

### List Item

- Size: `328x61px`
- Horizontal layout
- Padding: `6px 0 6px 0`
- Gap: `16px`
- Minimum/center alignment
- Fixed width and height
- Fill: `Surface/Primary`
- Text: `Body 2`, `Callout Strong`

### Suggestion List Item

- Size: `153x56px`
- Horizontal layout
- Padding: `0`
- Gap: `10px`
- Minimum/center alignment
- Fixed width and height
- Fill: `Surface/Primary`
- Text: `Callout Strong`

### Search

- Size: `329x48px`
- Radius: `6px`
- Horizontal layout
- Padding: `12px 16px 12px 16px`
- Gap: `30px`
- Space-between/center alignment
- Fill: `Surface/Secondary`
- Text: `Callout`

### Top app bar

- Size: `360x80px`
- Horizontal layout
- Padding: `0 16px 0 16px`
- Gap: `121px`
- Space-between/center alignment
- Fill: `Surface/Primary`
- Stroke: `Divider/Primary`, `1px`
- Text: `Callout`, `Title3`

### Ranking Icon Illustration

- Size: `51x48px`
- Text: Roobert Bold 26px

### Color Style Swatch

- Size: `320x280px`
- Radius: `17px`
- Fill: `#FFFFFF`
- Text: Roobert Medium 20px and 24px

## Screen patterns

- **Search flow:** A search-focused screen grouping search controls and decorative supporting elements.
- **Onboarding flow:** An onboarding screen with a large heading and a horizontally arranged content area.
- **Add Tickets flow:** A ticket-entry screen with a prominent heading and supporting content.
- **Tracking flow:** A tracking screen with a large heading and multiple content elements.
- **Explore flow:** An exploration screen combining event or discovery content with a large heading.
- **Profile flow:** A profile screen composed from mobile screenshot references and a profile heading.
- **Original SS:** A large seat Geek reference board containing many mobile screenshot states.
- **Sorted according to the flows:** A grouped reference board organizing Search, Onboarding, Add Tickets, Tracking, Explore, and Profile.
- **Master slides:** A dark presentation-style board containing grouped reference material.
- **Typography and color reference screens:** Dedicated sections show text colors, dividers, surfaces, icons, illustrations, and color swatches.

## Notes for implementers

- Prefer semantic tokens over raw colors:
  - Primary text: `#181818`
  - Primary surface: `#FFFFFF`
  - Secondary surface: `#F2F2F2`
  - Icon container surface: `#F5F5F3`
  - Red: `#FE5B48`
  - Red background: `#FFF0ED`
  - Blue: `#2F7CEE`
  - Blue background: `#ECF5FE`
  - Purple: `#9837FF`
  - Purple background: `#F9F1FE`
  - Green text: `#116B45`
- Do not create spacing, radius, motion, grid, or effect tokens that are absent from the source.
- Use the listed fixed dimensions when recreating extracted components.
- Preserve the distinction between `Body 2`, `Body 2 Strong`, `Callout`, `Callout Strong`, `Headline`, `Headline strong`, and `Title3`.
- Use `Divider/Secondary` only as a semantic stroke reference; its concrete color is not defined in the source.
- Use image fills only where the component specification explicitly calls for an image.
- Keep icons at `24x24px` unless using the explicitly specified `26x26px` Placeholder.
- Use the Event Card Extra Large shadows exactly as extracted; do not add elevation elsewhere.
