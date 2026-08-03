---
name: stream-app-community
source: Stream App (Community)
kind: design-system-context
---

# stream - Design System

## Overview

Mobile streaming-community interface designed for 430×932px screens.

- Two primary screens are represented: Home and Explore.
- Visual system uses gradient backgrounds, translucent gradient cards, rounded containers, white headings, and blurred surfaces.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- No component families or component geometry were extracted.

## Design language

- Mobile-first layout at 430×932px.
- Large white section headings and compact supporting metadata.
- Rounded cards and image tiles are used throughout content areas.
- Translucent surfaces use background blur.
- Navigation is presented as a floating, dark, rounded bottom bar.
- Icons are primarily outline-style and commonly use white strokes.
- Content patterns include live streams, popular games, genres, streamers, and watch history.
- Use image-backed content tiles where the source specifies image fills.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Usage / role |
|---|---|
| #FFFFFF | 113 raw uses; primary light text, icons, strokes, and fills |
| #000000 | 15 raw uses; primary dark text and labels |
| #FF0000 | 5 raw uses; notification indicator |
| #D9D9D980 | 4 raw uses; translucent neutral surface or divider |
| #CFCFCF80 | 3 raw uses; translucent divider strokes |
| #D6CCCC | 3 raw uses; progress or secondary line |
| #F80B0B | 3 raw uses; active progress line |

Named color tokens:

- `Labels/Primary`: #000000
- `Base/Black`: no value specified

## Type scale

No local text styles were found. Observed typography:

| Size | Family | Weight |
|---:|---|---|
| 28px | Inter | Regular |
| 24px | Inter | Regular |
| 18px | Inter | Regular |
| 17px | SF Pro | Semibold |
| 16px | Inter | Regular |
| 15px | Inter | Regular |
| 14px | Inter | Regular |
| 13px | Inter | Regular |

Observed usage:

- 28px Inter Regular: primary screen titles such as “Stream” and “Explore”.
- 24px Inter Regular: section headings such as “Popular Games”, “Live”, “Latest streams”, “Popular Genres”, “Popular Streamer”, and “Watch history”.
- 18px Inter Regular: game names and time values.
- 17px SF Pro Semibold: status-bar time.
- 16px Inter Regular: stream names, usernames, and genre labels.
- 15px Inter Regular: supporting subtitle text.
- 14px Inter Regular: secondary metadata and viewer counts.
- 13px Inter Regular: “See All” links.

## Spacing scale

No spacing tokens were defined. Observed spacing and padding values include:

- 0px
- 1px
- 6px
- 8px
- 9px
- 10px
- 15px
- 16px
- 18px
- 20px
- 22px
- 26px
- 31px
- 42px
- 43px
- 88px
- 97px
- 103px
- 121px
- 138px
- 140px
- 146px
- 160px
- 181px
- 205px
- 257px
- 271px

Common layout observations:

- Card content commonly uses 9px or 15px horizontal padding.
- Compact icon-label groups commonly use 6px or 10px gaps.
- Section stacks commonly use 18px or 20px gaps.
- Genre controls use 10px vertical padding.
- Stream cards commonly use 15px gaps between thumbnail and metadata.

## Radius scale

No radius tokens were defined. Observed radii:

- 0px
- 10px
- 13px
- 16px
- 18px
- 20px
- 23px
- 24px

Usage patterns:

- 24px: large content cards and image tiles.
- 20px: square game artwork tiles.
- 16px: stream-list cards and search surfaces.
- 10px: thumbnails and compact image tiles.
- 23px: floating bottom navigation background.
- 18px: screen frame radius.
- 13px: smaller rounded controls and image surfaces.

## Elevation & effects

- Background blur: 100px on search and stream-card surfaces.
- Background blur: 19.4px on the bottom navigation surface.
- Background blur: 3.5px on a small circular playback surface.
- No shadow styles were extracted.
- No local effect styles were found.
- Translucent surfaces use the documented palette where applicable, including #D9D9D980 and #CFCFCF80.
- Image fills are used for game and streamer artwork.

## Components

_None found in source._

## Screen patterns

### Home

- Screen size: 430×932px.
- Rounded screen frame with an overall gradient fill.
- iPhone status bar occupies 430×58px at the top.
- Header area contains:
  - “Stream” title at 28px Inter Regular.
  - “Anything you want” subtitle at 15px Inter Regular with 70% opacity.
  - Notification icon with a red #FF0000 indicator.
  - Rounded search field, 360×38px, with 16px radius and 100px background blur.
- Content sections include:
  - “Popular Games”.
  - “Live”.
  - Large rounded image-backed game tiles.
  - “Latest streams”.
  - Compact 400×106px stream cards with 16px radius.
- Bottom navigation:
  - 387×73px.
  - 23px radius.
  - 19.4px background blur.
  - Contains home, airplay, search, and settings icons.
  - Active and inactive icons use differing opacity levels.

### Explore

- Screen size: 430×932px.
- Uses the same rounded mobile screen frame and overall gradient treatment as Home.
- iPhone status bar occupies 430×58px at the top.
- Header contains:
  - “Explore” title at 28px Inter Regular.
  - Add-circle icon.
  - Divider lines using #CFCFCF80 at 0.5px.
- Popular game cards:
  - 269×333px outer cards.
  - 24px radius.
  - 225×225px artwork with 20px radius.
  - 16px internal vertical gap.
  - Progress lines use #D6CCCC and #F80B0B at 2px.
  - Game title uses 18px Inter Regular.
  - User metadata uses 16px Inter Regular at 70% opacity.
- Popular genres:
  - 24px Inter Regular section heading.
  - Genre controls use 45px-high containers with 10px padding.
  - Labels use 16px Inter Regular.
  - Categories include Action, Sports, Strategy, Platformers, Sandbox, and More.
- Popular streamer list:
  - 24px Inter Regular section heading.
  - “See All” uses 13px Inter Regular.
  - Streamer cards are approximately 360×88px with 16px radius.
  - Cards contain 70×70px thumbnails with 10px radius.
  - Metadata includes game title, streamer name, viewer count, user icon, eye icon, and play icon.
- Watch history uses the same section-heading and “See All” pattern.
- Bottom navigation matches Home: 387×73px with 23px radius and 19.4px background blur.

## Notes for implementers

- Treat the source as a screen-specific visual reference rather than a reusable component library; no component families were extracted.
- Preserve the 430×932px mobile composition and the 18px screen-frame radius.
- Use the listed typography sizes and families exactly; do not introduce additional font styles.
- Use #FFFFFF for primary light content and #000000 for primary dark content.
- Use #FF0000 only for notification emphasis and #F80B0B for active progress emphasis.
- Apply opacity only where the source specifies it, including 60%, 70%, and 100px or 19.4px blur effects.
- Keep image-backed tiles rounded according to the observed radius values.
- Reuse the bottom navigation structure across screens.
- Do not infer missing design tokens for spacing, radius, elevation, motion, or components.
