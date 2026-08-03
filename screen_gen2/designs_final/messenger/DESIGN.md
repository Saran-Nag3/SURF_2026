---
name: messenger-app-screen-community
source: Messenger App Screen (Community), Page 1
kind: design-system-context
---

# messenger - Design System

## Overview

- Messenger community interface shown across three mobile screens: Chats, Chat, and Chat info.
- Mobile screen size: 375×812px.
- Desktop presentation frame: 1600×1200px.
- Additional “About us” frame: 1920×114px.
- Visual direction: soft white surfaces, lavender and blue accents, rounded cards, translucent blurred navigation layers, and high-contrast dark-purple text.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Use white and translucent-white surfaces over pale lavender backgrounds.
- Primary accent is lavender purple `#8667F2`; blue `#3A63FB` is used in layered background decoration.
- Text is primarily dark purple `#200E32`; secondary text uses muted lavender-gray `#8C8098`.
- Cards and controls use rounded corners, with frequent 8px and 12px radii.
- Mobile surfaces use large 44px outer corner radii and white 8px strokes.
- Navigation and bottom bars use `#FFFFFFE5` with 20px background blur.
- Community cards use compact 14px body text and 16px medium-weight labels.
- Headings are large, dark, and semibold: 24px, 32px, and 34px examples are present.
- Use circular purple action buttons and pill-shaped “Join” controls.
- Decorative imagery and abstract shapes are present but should remain subordinate to text and controls.

## Color palette

Ranked by observed usage where counts were available:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 123 | Primary surfaces, cards, controls, icons, and text on accent backgrounds |
| `#8C8098` | 46 | Secondary text, placeholders, metadata, and icon strokes |
| `#8667F2` | 26 | Primary accent, active controls, counters, purple cards, and decorative shapes |
| `#200E32` | 18 | Primary text and dark-purple design token `black/black` |
| `#230B34` | 16 | Dark purple supporting color |
| `#CCC7D1` | 9 | Borders, muted counters, and inactive icons |
| `#FFFFFFE5` | 9 | Translucent navigation and overlay surfaces |
| `#171717` | 6 | About-us branding and dark graphic elements |
| `#DADADA` | 6 | Neutral supporting color |
| `#FA6969` | 6 | Coral-red accent |
| `#2B99FF` | 5 | Bright blue accent |
| `#3A63FB` | 5 | Blue decorative background accent |
| `#C4C4C4` | 4 | Neutral gray |
| `#EBE9ED` | 3 | Chat-card borders |
| `#F2F1F3` | 3 | Mobile shell background and input background |
| `#FC4A22` | 3 | About-us logo accent |

## Type scale

Observed typefaces and sizes:

- 12px:
  - General Sans Regular, 400
  - General Sans Medium
  - SF Pro Text Regular, 400; token `body/auto/12px`
- 14px:
  - General Sans Regular
  - General Sans Medium
  - Helvetica Bold
  - SF Pro Text Semibold, 600; token `head/auto/14px`
- 15px:
  - General Sans Medium
- 16px:
  - General Sans Regular
  - General Sans Medium
  - SF Pro Text Semibold
- 20px:
  - General Sans Medium
- 24px:
  - General Sans Semibold; heading usage
- 32px:
  - General Sans Semibold; heading usage
- 34px:
  - General Sans Semibold; heading usage
- Tracking: 0px for the extracted SF Pro Text tokens.
- Line height: `auto` for the extracted SF Pro Text tokens.

## Spacing scale

No spacing variables were found. Observed spacing and padding values:

- 0px
- 2px
- 4px
- 8px
- 9px
- 10px
- 12px
- 14px
- 16px
- 20px

Common patterns:

- 4px gaps inside compact metadata and action rows.
- 8px gaps between icons and labels, and between stacked content blocks.
- 12px internal card padding.
- 16px and 20px horizontal control padding.
- 343px content width inside 375px mobile screens.

## Radius scale

Observed radii:

- 3px: asymmetric chat-bubble corner
- 6px: icon-button control
- 8px: input, action rows, and standard cards
- 12px: chat cards, avatars, chat bubbles, and image containers
- 16px: grouped content frame
- 20px: counters
- 40px: floating circular button
- 44px: mobile device/screen shell
- 50px: pill-shaped Join buttons

## Elevation & effects

- `block-down`: drop shadow, 16px blur, offset `0 4px`, color `#8C809733`.
- Purple community card shadow: 14px blur, offset `0 4px`, using the purple accent family.
- Navigation and bottom bars: 20px background blur with `#FFFFFFE5`.
- Chat info translucent content panels: 20px background blur with `#FFFFFFE5`.
- Chats header layers: 72px background blur.
- Chat background overlay: 250px background blur.
- Large decorative background shapes use 112.68px layer blur.
- Chat-info outer mobile shell uses a 60px drop shadow in the source, but its source color is not included in the approved palette.

## Components

_None found in source._

## Screen patterns

- **Chats screen**
  - 375×812px mobile shell with 44px outer radius, white 8px stroke, and `#F2F1F3` shell background.
  - Large “Chats” heading in 34px General Sans Semibold.
  - Search field: 343×40px, 8px radius, white fill, search icon, and 16px muted placeholder.
  - Chat list cards: 343px wide, approximately 138–148px high, 12px radius, white fill.
  - Cards include 64×64px rounded image thumbnails, 14px participant and preview text, 16px community title text, metadata, counters, and purple 61×32px Join pills.
  - Featured promotional card uses `#8667F2`, white heading text, circular decorative graphics, and a white Join pill.
  - Bottom tab bar uses `#FFFFFFE5` and 20px background blur.

- **Chat screen**
  - 375×812px mobile shell with a white background and layered purple/blue decorative circles behind a blurred white overlay.
  - Top navigation bar: 375×88px, translucent white, 20px background blur.
  - Centered title uses 16px SF Pro Text Semibold.
  - Chat bubbles use white fills, 12px asymmetric radii, and `#EBE9ED` borders for chatter messages.
  - Owner voice bubble uses `#8667F2`, white metadata, and a 12px asymmetric radius.
  - User avatars are 40×40px with 12px radius.
  - Composer bar: 375×56px, translucent white, 20px background blur.
  - Input field: 263×40px, 8px radius, `#F2F1F3` fill, 14px medium placeholder text.
  - Floating down button: 40×40px, circular, white fill, with a purple counter.

- **Chat info screen**
  - 375×812px mobile shell with 44px outer radius and white 8px stroke.
  - Full-width 375×375px top image.
  - Group title is centered and uses 32px General Sans Semibold.
  - Translucent information panels use `#FFFFFFE5` and 20px background blur.
  - Action buttons use white fill, `#CCC7D1` 1px stroke, 6px radius, and 14px/16px control text.
  - Settings rows are 343×46px, use 8px radius, and pair a left icon-label group with right-side value or chevron.
  - Top navigation includes a back control and share icon over the image area.

- **About-us strip**
  - 1920×114px frame.
  - Branding uses `#FC4A22` and `#171717`.

## Notes for implementers

- Treat `#8667F2` as the primary interactive accent.
- Use `#200E32` for primary headings and labels; use `#8C8098` for secondary content.
- Preserve the 375px mobile composition and the 343px inset content width when recreating mobile screens.
- Prefer 12px card radii and 8px field/action radii unless a pattern explicitly calls for another value.
- Use 20px background blur on translucent navigation and composer surfaces.
- Keep Join actions pill-shaped with 50px radius and 14px semibold label styling.
- Use SF Pro Text for the extracted token styles and General Sans for the dominant interface typography.
- Do not introduce component families or unlisted design tokens; the source contains no extracted reusable component sets.
