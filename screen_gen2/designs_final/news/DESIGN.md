---
name: news-app-ui-kit-community
source: News App UI Kit (Community)
kind: design-system-context
---

# news - Design System

## Overview

- Mobile news application UI kit from the Figma pages Mockup, Component, and Branding.
- Primary frame size shown: 428 × 926px.
- Component system includes authentication, onboarding, news content, authors, topics, navigation, inputs, controls, notifications, and icons.
- Primary typeface in design tokens: Poppins.
- No local variable collections, spacing variables, radius variables, or motion variables were found.

## Design language

- Mobile-first layouts use fixed-width content frames, compact cards, 6px corner radii, and 24px-scale horizontal page padding.
- Primary interaction color is `#1877F2`.
- Light mode uses white backgrounds and dark body text; dark mode uses `#1C1E21` backgrounds, `#E4E6EB` titles, and `#B0B3B8` body text.
- Typography is rounded and editorial, using Poppins with 0.12px tracking across the defined scale.
- News imagery is prominent, with large image panels in onboarding and fixed image ratios in news content.
- Cards and controls use subtle shadows rather than heavy borders.
- Layouts use horizontal and vertical auto-layout with explicit gaps and padding.

## Color palette

### Semantic colors

- `Primary/Default`: `#1877F2`
- `Grayscale/Body Text`: `#4E4B66` — 953 uses
- `Grayscale/Title-active`: `#050505` — 363 uses
- `Grayscale/White`: `#FFFFFF` — 492 uses
- `White`: `#FFFFFF` — consolidated with `Grayscale/White`
- `Grayscale/Secondary Button`: `#EEF1F4` — 43 uses
- `Grayscale/Button Text`: `#667080` — 38 uses
- `Grayscale/Placeholder`: `#A0A3BD` — 32 uses
- `Grayscale/Disable Input`: `#EEF1F4` — 8 uses
- `Darkmode/Body`: `#B0B3B8` — 532 uses
- `Darkmode/Title`: `#E4E6EB` — 183 uses
- `Darkmode/Input Background`: `#3A3B3C` — 80 uses
- `Darkmode/Background`: `#1C1E21` — 77 uses
- `iOS/Key Label`: `#000000` — 206 uses
- `iOS/Keyboard Background`: `#C5C9D0E5` — 6 uses
- `iOS/Key Background Highlight`: `#FFFFFF` — 132 uses
- `iOS/Key Background Dim`: `#AEB3BE` — 12 uses
- `Warning/Default`: `#F4B740` — 1 use
- `Warning/Dark`: `#946200` — 1 use
- `Warning/Darkmode`: `#FFD789` — 1 use
- `Success/Default`: `#00BA88` — 1 use
- `Success / Dark`: `#00966D` — 1 use
- `Success/Darkmode`: `#34EAB9` — 1 use
- `Error/Default`: `#ED2E7E` — 10 uses
- `Error/Dark`: `#C30052` — 36 uses
- `Error/Darkmode`: `#FF84B7` — 18 uses
- `Error/Light`: `#FFF3F8` — 20 uses

### Raw colors with usage counts

- `#000000` — 925 uses
- `#FFFFFF` — 531 uses
- `#C4C4C4` — 240 uses
- `#646464` — 132 uses
- `#CC0000` — 51 uses
- `#FFFFFF80` — 44 uses
- `#F5F5F5` — 40 uses
- `#1F2933` — 30 uses
- `#B0B3B8` — 24 uses
- `#EEF1F4` — 19 uses
- `#50545B` — 16 uses
- `#7B61FF` — 15 uses
- `#EEF1F452` — 14 uses
- `#FAFAFA` — 14 uses
- `#34A853` — 13 uses
- `#4285F4` — 13 uses
- `#EB4335` — 13 uses
- `#FBBC05` — 13 uses
- `#3F3F3F` — 12 uses

## Type scale

All defined typography tokens use `0.12px` tracking.

| Token | Typeface | Weight | Size / line height |
|---|---|---:|---:|
| Display/Large | Poppins | 400 | 48px / 72px |
| Display/Large Bold | Poppins | 700 | 48px / 72px |
| Display/Medium | Poppins | 400 | 32px / 48px |
| Display/Medium Bold | Poppins | 700 | 32px / 48px |
| Display/Small | Poppins | 400 | 24px / 36px |
| Display/Small Bold | Poppins | 700 | 24px / 36px |
| Link/Large | Poppins | 600 | 20px / 30px |
| Text/Large | Poppins | 400 | 20px / 30px |
| Link/Medium | Poppins | 600 | 16px / 24px |
| Text/Medium | Poppins | 400 | 16px / 24px |
| Link/Small | Poppins | 600 | 14px / 21px |
| Text/Small | Poppins | 400 | 14px / 21px |
| Link/X-Small | Poppins | 600 | 13px / 19.5px |
| Text/X-Small | Poppins | 400 | 13px / 19.5px |

Raw typography also appears in the source:

- Poppins SemiBold, 15px — 94 uses
- SF Pro Text Regular, 23px — 208 uses
- SF Pro Text Regular, 24px — 40 uses
- SF Pro Text Heavy, 10px — 36 uses
- SF Pro Text Regular, 16px — 28 uses
- SF Pro Text Regular, 17px — 24 uses
- Arial ArialMT, 16px — 17 uses
- Arial BoldMT, 16px — 6 uses
- SF Pro Text Regular, 12px — 4 uses
- Arial ArialMT, 14px — 3 uses

## Spacing scale

No spacing variables were found. The following explicit values appear in component and layout definitions:

- `0px`
- `4px`
- `5px`
- `6px`
- `8px`
- `10px`
- `12px`
- `13px`
- `14px`
- `15.3px`
- `16px`
- `20px`
- `24px`
- `34px`
- `40px`
- `48px`
- `49px`
- `76px`
- `1000px`

Grid definitions:

- iOS/Alphabet 20 Column: 20 columns, 15.3px section, 6px gutter, stretch alignment.
- Large: 4 columns, 551.75px section, 20px gutter; 1000 rows, 8px section, 8px gutter.
- Detail: 4 columns, 384px section, 24px gutter; 1000 rows, 8px section, 8px gutter.

## Radius scale

No radius variables were found.

Observed radii:

- `0px`
- `2.67px`
- `3px`
- `6px`

The primary card, input, button, and notification radius is `6px`.

## Elevation & effects

- Card/Shadow: drop shadow `10px`, offset `0 0`, color `#00000014`.
- Mobile: drop shadow `25px`, offset `0 0`, color `#00000014`.
- Bar/Shadow: drop shadow `4px`, offset `0 -2`, color `#0000000D`.
- iOS/Background Blur: background blur `54px`.
- Opacity values observed in iOS status-bar elements: `35%` and `40%`.

## Components

### Notification

- Size: `380 × 99px`
- Radius: `6px`
- Horizontal layout; padding `14px 8px 14px 8px`; gap `16px`
- Alignment: min / center
- Fixed width and height
- Fill: `#EEF1F4`
- Text: `Text/X-Small`, `Text/Medium`
- Variants: `Type: Default/Follow`; `Darkmode: Off/On`

### Bottom Navigation Bar

- Size: `428 × 78px`
- Horizontal layout; padding `34px 48px 34px 48px`; gap `32px`
- Alignment: center / center
- Fill: `#FFFFFF`
- Text: `Text/Small`
- Variants: `State: Bookmark/Explore/Home/Profile`; `Darkmode: False/True`

### Comment

- Size: `374 × 114px`
- Horizontal layout; padding `8px` on all sides; gap `8px`
- Fill: `#F3F3F3`
- Text: `Text/X-Small`, `Text/Medium`, `Link/Medium`
- Variants: `Type: Default/Subcomment`; `More: False/True`; `Darkmode: False/True`

### Author Card

- Size: `113 × 158px`
- Radius: `6px`
- Vertical layout; padding `5px 8px 5px 8px`; gap `8px`
- Alignment: center / center
- Fill: `#FAFAFA`
- Text: `Link/Medium`, `Text/Medium`
- Variants: `Follow: False/True`; `Darkmode: False/True`

### Topics & Author Card

- Size: `380 × 86px`
- Radius: `6px`
- Horizontal layout; padding `8px` on all sides; gap `8px`
- Alignment: center / center
- Fill: `#FFFFFF`
- Text: `Link/Medium`, `Text/Small`, `Text/Medium`
- Variants: `Type: Author/Topic`; `State: Off/On`; `Darkmode: False/True`

### Cards

- Size: `380 × 303px`
- Radius: `6px`
- Vertical layout; padding `8px` on all sides; gap `8px`
- Text: `Text/X-Small`, `Link/X-Small`, `Text/Medium`
- Variants: `Type: Card Horizontal/Card Vertical`; `Darkmode: False/True`

### OTP

- Size: `304 × 64px`
- Horizontal layout; padding `0px`; gap `16px`
- Variants: `State: Error/Filled/Initial`

### Input field

- Size: `379 × 73px`
- Vertical layout; padding `0px`; gap `4px`
- Alignment: max / min
- Text: `Text/Small`
- Variants: `State: Active/Disabled/Error/Filled/Initial/Typing`; `Icon: False/True`; `Darkmode: False/True`

### Toggle

- Size: `40 × 24px`
- Variants: `State: Off/On`

### Radio button

- Size: `24 × 24px`
- Radius: `3px`
- Variants: `State: Off/On`

### Checkbox

- Size: `24 × 24px`
- Fill: `#FFFFFF`
- Variants: `State: Off/On`

### Button

- Default size: `148 × 50px`
- Radius: `6px`
- Horizontal layout; padding `13px 24px 13px 24px`; gap `10px`
- Alignment: center / center
- Default fill: `#1877F2`
- Text: `Link/Medium`
- Variants: `Type: Outline/Primary/Secondary`; `Left Icon: Off/On`; `Right Icon: Off/On`

### Add

- Size: `54 × 54px`
- Fill: `#FFFFFF`

### News Author

- Size: `24 × 24px`
- Fill: `#FFFFFF`
- Variants: `Author: BBC/Buzzfeed/CNBC/CNET/CNN/Daily Mail/Image/MSN/SCMP/Time/USA Today/Vice/Vox`

### Profile

- Size: `140 × 140px`
- Variants: `Image: False/True`

### Icon

- Size: `24 × 24px`
- Fill: `#FFFFFF`
- Icon variants: Add, Add Box, Align Center, Align Left, Back, Bold, Bookmark, Check, Close, Comment, Compass, Delete, Down, Edit, Eye, Eye Close, Facebook, Filter, Font Size, Google, Heart, Home, Image, Italic, Link, List Ordered, List Unordered, Lock, Logout, Mail, Message, Moon, More Hor, More Ver, Notification, Profile, Question, Reply, Right, Search, Send, Setting, Share, Time, User, figma
- Type variants: `Filled/Outline`

### News Images

- Size: `364 × 183px`

### Topic Images

- Size: `256 × 256px`

### Image

- Size: `40 × 40px`

## Screen patterns

### Login

- Mobile frame: `428 × 926px`, white background.
- Status bar height: `44px`.
- Main content uses `24px` horizontal padding and a `379px` content width.
- Greeting block uses `Display/Large Bold` for “Hello Again!” and `Text/Large` for supporting text.
- Two input fields use `379 × 73px` input-field instances with `48px` text-input areas, `10px` horizontal padding, `6px` radius, white fill, and `1px` body-text stroke.
- Password support row places a `24 × 24px` checkbox and `Text/Small` “Remember me” beside a password-recovery text action.
- Primary action uses a `379 × 50px` button.
- Social continuation area uses two `174 × 48px` secondary buttons separated by `16px`.
- Bottom account prompt uses `Text/Small`.

### Onboarding

- Mobile frame: `428 × 926px`.
- Status bar height: `44px`.
- News image panel: `428 × 584px`.
- Bottom navigation/content panel: `428 × 130px`, horizontal padding `40px 24px 40px 24px`.
- Pagination indicators: three `14px` circles with `5px` gap; active indicator uses `#1877F2`, inactive indicators use `#A0A3BD`.
- Navigation action uses an `85 × 50px` primary button; later onboarding states also show a `Link/Medium` “Back” action.
- Onboarding copy panel: `428 × 212px`, padding `24px 24px 8px 24px`.
- Copy block width: `318px`; heading uses `Display/Small Bold`, supporting copy uses `Text/Medium`.
- Light onboarding uses `#FFFFFF`; dark onboarding uses `#1C1E21`, `#E4E6EB` titles, and `#B0B3B8` body text.
- A separate centered logo state uses a `315 × 173px` frame with `49px` horizontal padding and a `217 × 66px` primary-colored vector.

## Notes for implementers

- Prefer the named semantic tokens over raw colors when both are available.
- Use `#1877F2` for primary buttons, active onboarding pagination, and primary actions.
- Use `#4E4B66` for standard body text and `#050505` for active titles in light mode.
- Use `#1C1E21`, `#E4E6EB`, and `#B0B3B8` for dark-mode background, title, and body roles.
- Use `6px` radius for buttons, cards, inputs, and notifications unless a component explicitly specifies another radius.
- Preserve the fixed component dimensions and explicit gaps when implementing the mobile layouts.
- Use Poppins typography tokens for new UI; raw SF Pro Text and Arial styles are present as extraction artifacts or platform-specific elements.
- No motion behavior is defined in the source.
