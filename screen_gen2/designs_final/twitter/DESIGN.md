---
name: twitter-ui-screens-community
source: Twitter UI Screens (Community)
kind: design-system-context
---

# twitter - Design System

## Overview

Twitter UI screen extraction from the Figma file “Twitter UI Screens (Community)”. The source contains mobile layouts at 414×896px, including settings, video playback, and profile views. Component families are limited to Controls and System. No local variables, spacing variables, radius variables, motion tokens, or grid styles were found.

## Design language

- Mobile-first Twitter interface patterns with white content surfaces, light gray application backgrounds, dark media surfaces, and blue active states.
- Primary text uses SF Pro Text in regular, semibold, bold, medium, heavy, and light weights.
- Public Sans and Crimson Text are also present in named typography tokens.
- Settings use grouped white cards with thin separators and trailing arrow icons.
- Profiles use a dark heading area, white profile information surface, tab navigation, tweet cards, avatar imagery, and a floating compose button.
- Video playback uses dark controls, a media area, timing progress, pause, close, and minimize controls.
- Common interaction colors include blue for active and linked content, green for retweet activity, and red/pink for likes.

## Color palette

Ranked by raw usage where counts are available:

| Rank | Color | Usage / role |
|---|---|---|
| 1 | `#FFFFFF` | 229 raw uses; white surfaces and primary light UI |
| 2 | `#455154` | 147 raw uses |
| 3 | `#000000` | 130 raw uses; dark controls and text |
| 4 | `#FCFCFE` | 84 raw uses |
| 5 | `#060606` | 70 raw uses; home indicator and system UI |
| 6 | `#FFFFFF4D` | 46 raw uses; translucent white |
| 7 | `#50555C` | 45 raw uses |
| 8 | `#3E5155` | 42 raw uses |
| 9 | `#ABABAB` | 42 raw uses |
| 10 | `#171717` | 17 raw uses; dark system text |
| 11 | `#4C9EEB` | 16 raw uses; Blue Active |
| 12 | `#59BC6C` | 12 raw uses; retweet activity |
| 13 | `#CE395F` | 12 raw uses; like activity |
| 14 | `#C4C4C4` | 11 raw uses |
| 15 | `#ADB3BC` | 9 raw uses |
| 16 | `#0000000D` | 8 raw uses; subtle black overlay |
| 17 | `#141619` | 8 raw uses; Bold text |
| 18 | `#DADADA` | 6 raw uses |
| 19 | `#E7ECF0` | 6 raw uses; Background |
| 20 | `#BDC5CD` | Primary Separator and Primary Card effect |
| 21 | `#B9DCF7` | Blue non-active |
| 22 | `#687684` | Darken text; 345 style uses |
| 23 | `#FFA800` | Yellow |
| 24 | `#67CE00` | Green |
| 25 | `#FF5E00` | Orange |
| 26 | `#4D4D4D` | Gray 70; 9 style uses |
| 27 | `#808080` | Gray 50; 5 style uses |
| 28 | `#CED5DC` | Secondary Card effect and secondary separators |

Semantic mapping:

- White: `#FFFFFF`
- Background: `#E7ECF0`
- Darken text: `#687684`
- Bold text: `#141619`
- Blue Active: `#4C9EEB`
- Blue non-active: `#B9DCF7`
- Primary Separator: `#BDC5CD`
- Secondary Card / separator: `#CED5DC`
- Yellow: `#FFA800`
- Green: `#67CE00`
- Orange: `#FF5E00`

## Type scale

Named typography tokens:

| Font | Weight | Size | Line height | Tracking |
|---|---:|---:|---:|---:|
| Public Sans | ExtraBold (800) | 48px | 56px | -0.48px |
| Crimson Text | Regular (400) | 28px | 32px | -0.28px |
| Crimson Text | Regular (400) | 22px | 28px | -0.22px |
| Public Sans | Regular (400) | 14px | 20px | -0.14px |
| Public Sans | ExtraBold (800) | 12px | 16px | -0.12px |

Raw type usage is dominated by:

- SF Pro Text Regular, 16px — 179 uses
- SF Pro Text Semibold, 16px — 99 uses
- SF Pro Text Regular, 22.5px — 81 uses
- SF Pro Text Regular, 14px — 51 uses
- SF Pro Text Regular, 12px — 47 uses
- SF Pro Text Semibold, 14px — 23 uses
- SF Pro Text Semibold, 15px — 21 uses
- SF Pro Text Medium, 16px — 16 uses
- SF Pro Text Heavy, 17px — 11 uses
- Public Sans Regular, 18px — 10 uses
- SF Pro Text Regular, 19px — 9 uses
- Public Sans ExtraBold, 24px — 8 uses
- SF Pro Text Regular, 18px — 7 uses
- SF Pro Text Heavy, 22px — 6 uses
- SF Pro Text Light, 22px — 6 uses
- SF Pro Text Regular, 17px — 6 uses
- SF Pro Text Heavy, 19px — 5 uses
- SF Pro Text Bold, 16px — 4 uses
- SF Pro Text Bold, 22px — 4 uses

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed component radii include:

- 12px: tweet media
- 16px: profile button
- 17.5px: video reply field
- 32px: circular video controls
- 56px: floating add-text button
- 100px: home indicator

## Elevation & effects

- Primary Card: drop shadow with 0px horizontal offset, 0.33px vertical offset, color `#BDC5CD`.
- Secondary Card: drop shadow with 0px horizontal offset, 0.33px vertical offset, color `#CED5DC`.
- Hover button: drop shadow with 0px horizontal offset, 1px vertical offset, 4px blur, color `#00000040`.
- Settings cards use the Secondary Card effect.
- Profile tweet and tab surfaces use card-like separators and shadows using `#BDC5CD` and `#CED5DC`.

## Components

Component families:

### Controls

- Table View / Row / x / Switch / Dark - Off
  - Size: 51×31px
  - Fill: `#000000`
- Table View / Row / x / Switch / Dark - On
  - Size: 51×31px
  - Fill: `#000000`

### System

- Keyboards / iPhone / Light - Alphabetic
  - Size: 414×301px
  - Fill: `#CCCED3`
  - Text styles: SF Pro Text Regular, 22.5px and SF Pro Text Regular, 16px

Observed reusable UI patterns:

- Settings row: 414×44px white row, SF Pro Text Semibold 16px label, secondary separator, trailing arrow icon.
- Profile action button: 93×32px, 16px radius, `#4C9EEB` 1px stroke, SF Pro Text Semibold 14px label.
- Floating add-text button: 56×56px circular blue button with hover button effect.
- Tab bar: 414×44px white surface, 2px active tab line, SF Pro Text Semibold 16px labels.
- Avatar sizes: 35×35px, 55×55px, and 68×68px are present.
- Tweet media: approximately 311×174–175px with 12px radius.
- Video timing control: 3px progress lines, 16×16px progress handle, and 12px timing text.
- System bars: 414×35px home indicator area and 414×44px status bar area.

## Screen patterns

- **Settings and Privacy**
  - 414×896px mobile screen with `#E7ECF0` background.
  - Header areas identify “General” and the account.
  - Grouped white sections contain navigation rows for Account, Privacy and safety, Notifications, Content preferences, Display and sound, Data usage, Accessibility, and About Twitter.
  - Top bar contains “Settings and privacy” and a blue “Done” action.
  - Includes iPhone status bar and home indicator.

- **Video Player**
  - 414×896px dark media-focused screen.
  - 414×414px media region followed by a dark reply/action area.
  - Includes close and minimize circular controls, timing bar, pause control, elapsed/total time, account avatar, and engagement actions.
  - Retweet activity uses `#59BC6C`; like activity uses `#CE395F`.

- **Profile — Likes**
  - 414×896px profile screen with dark heading bar and white profile surface.
  - Profile identity includes avatar, name, handle, website, following/follower counts, joined date, description, calendar icon, and link icon.
  - Tweet card includes author metadata, text, media, engagement actions, and “Show this thread”.
  - Tabs include Tweets, Tweets & replies, Media, and Likes, with Likes active in blue.
  - Includes bottom navigation and floating compose button.

- **Profile — Media**
  - Same profile header and profile information pattern as the Likes screen.
  - Tweet content includes download/link text, descriptive copy, hashtags, avatar, and media.
  - Media tab is the active profile tab.

- **App introduction**
  - 339×425px composition with a 248×248px icon area, Twitter logo, “Twitter UI” heading, and supporting text.

## Notes for implementers

- Use only the documented colors; prioritize semantic tokens over raw colors when both are available.
- Preserve the 414px-wide mobile layout patterns shown throughout the source.
- Use SF Pro Text for the dominant Twitter interface styles. Use the named Public Sans and Crimson Text tokens only where their corresponding styles are required.
- Keep settings sections white and separate them with thin secondary separators.
- Use `#4C9EEB` for active tabs, links, profile actions, and the floating compose button.
- Use `#687684` for subdued text and `#141619` for emphasized labels.
- Apply the documented card effects to grouped settings and tweet surfaces.
- Treat status bars, home indicators, battery, Wi-Fi, signal, and navigation bars as decorative system UI.
