---
name: bbc-news-prototype-community
source: BBC NEWS PROTOTYPE (Community)
kind: design-system-context
---

# bbc-news - Design System

## Overview

- Source: Figma file `BBC NEWS PROTOTYPE (Community)`, page `Page 1`.
- Primary screen: `Frame 1`, 1280x3263px.
- The design is a BBC News-style content interface with a white base, red brand accents, large editorial headlines, numbered content items, “Most watched” content, live indicators, and local-news prompts.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Editorial and information-led.
- Use BBC Reith Sans for interface labels, navigation-style text, numbering, and section headings.
- Use BBC Reith Serif Bold for prominent article and story headlines.
- Use a predominantly white interface with black text and BBC red accents.
- Story cards use white outer surfaces with dark text-background overlays and white serif headlines.
- Live content is marked with red `LIVE` text and a circular indicator.
- Headlines are generally large and prominent, with section headings such as `Most watched` set in sans bold.

## Color palette

Ranked by raw usage count:

| Color | Usage | Application |
|---|---:|---|
| `#000000` | 35 | Primary black text, icons, lines, and play buttons |
| `#FFFFFF` | 31 | Page and component fills; headline text over dark backgrounds |
| `#B90000` | 28 | BBC red accents, numbering, `LIVE` labels, and local-news text |
| `#333333CC` | 11 | Translucent dark headline background overlay |
| `#333333` | 9 | Dark headline background overlay |
| `#BC1918` | 8 combined | Red live-indicator element; combines the near-identical source variants `#BC1918` and `#BC191A` |

## Type scale

| Size | Font | Weight/style | Usage |
|---:|---|---|---:|
| 42px | BBC Reith Sans | Regular | Numbered content markers; 12 uses |
| 25px | BBC Reith Serif | Bold | Editorial headlines; 18 uses |
| 25px | BBC Reith Sans | Bold | Section headings and live labels; 11 uses |
| 22px | BBC Reith Serif | Bold | Smaller editorial headline variant; 4 uses |
| 20px | BBC Reith Sans | Medium | Local-news prompt; 24 uses |

Hierarchy from largest to smallest: 42px BBC Reith Sans Regular, 25px BBC Reith Sans Bold, 25px BBC Reith Serif Bold, 22px BBC Reith Serif Bold, 20px BBC Reith Sans Medium.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- Headline background overlays use `background_blur 4px`.
- No local effect styles were found beyond the extracted `background_blur 4px` effects.
- No elevation, shadow, radius, or motion values were found.
- A 1px black stroke is used for the line below `Most watched`.

## Components

Only the following extracted component families are available:

### Component 1

- Size: 529x91px.
- Fill: `#FFFFFF`.
- Dark headline background: 524x91px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `What is the Northern Ireland protocol?`

### Component 2

- Size: 544x116px.
- Fill: `#FFFFFF`.
- Dark headline background: 544x91px, `#333333CC`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 22px, `#FFFFFF`.
- Also supports a live indicator using BBC Reith Sans Bold, 25px, `#B90000`.
- Example headline: `Sunak and EU chief poised to agree new NI Brexit deal`

### Component 3

- Size: 527x104px.
- Fill: `#FFFFFF`.
- Dark headline background: 526x84px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `What is the energy price cap and what will happen to my bill`

### Component 4

- Size: 528x117px.
- Fill: `#FFFFFF`.
- Dark headline background: 527x92px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `In pictures: Red carpet at Screen Actors Guild Awards`

### Component 5

- Size: 524x115px.
- Fill: `#FFFFFF`.
- Dark headline background: 524x94px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `Listen: Tommy Fury talks Molly-Mae and Jake Paul fight`

### Component 6

- Size: 532x93px.
- Fill: `#FFFFFF`.
- Dark headline background: 532x93px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `Trainer sales go down after covid pandemic spike`

### Component 7

- Size: 533x108px.
- Fill: `#FFFFFF`.
- Dark headline background: 532x92px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `Adam Lambert: ‘I didn’t think I’d have a shot`

### Component 8

- Size: 531x115px.
- Fill: `#FFFFFF`.
- Dark headline background: 523x93px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`; also includes BBC Reith Sans Bold, 25px.
- Supports the live indicator.
- Example headline: `World Freestyle Snowboard Slopestyle Finals Brookes wins his`

### Component 9

- Size: 529x109px.
- Fill: `#FFFFFF`.
- Dark headline background: 525x88px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `Money Diary: ’I have 25p left in my bank account ‘`

### Component 10

- Size: 537x110px.
- Fill: `#FFFFFF`.
- Dark headline background: 537x91px, `#333333`, with `background_blur 4px`.
- Text: BBC Reith Serif Bold, 25px, `#FFFFFF`.
- Example headline: `Chris Mason: Breakthrough is moment of political jeopardy`

### Get the news that’s local to you

- Size: 225x86px.
- Fill: `#FFFFFF`.
- Text: BBC Reith Sans Medium, 20px, `#B90000`.
- Text: `Get the news that’s local to you`.

### Shared live indicator

- Used within Component 2 and Component 8.
- `LIVE`: BBC Reith Sans Bold, 25px, `#B90000`.
- Indicator circle: `#BC1918`.
- Inner light element: `#FFFFFF`.
- Inner red element: `#BC1918`.

## Screen patterns

### Page 1 / Frame 1

- White 1280x3263px page with a large navigation/content frame.
- Includes a large image-led area and dark translucent headline overlay.
- Repeated `Get the news that’s local to you` prompts appear across the screen.
- Numbered content items use BBC Reith Sans Regular, 42px, in `#B90000`.
- A `Most watched` section uses BBC Reith Sans Bold, 25px, `#000000`, with a 1px black divider line.
- Small black play-button polygons accompany the most-watched items.
- Live stories use the shared live indicator pattern.
- Story cards use white outer fills, dark headline overlays, white serif headlines, and `background_blur 4px`.

## Notes for implementers

- Use only the extracted colors: `#000000`, `#333333`, `#333333CC`, `#B90000`, `#BC1918`, and `#FFFFFF`.
- Treat `#BC1918` and the source’s near-identical `#BC191A` as the consolidated live-indicator red.
- Do not introduce spacing, radius, shadow, motion, grid, or typography tokens beyond those listed.
- Preserve the distinction between BBC Reith Sans and BBC Reith Serif: Sans is used for interface and utility text; Serif Bold is used for editorial headlines.
- Use white headline text over dark `#333333` or `#333333CC` backgrounds.
- Keep live labels in `#B90000` and pair them with the circular red-and-white live indicator.
- Keep the local-news component’s text red on a white fill.
- Use the named component families only; do not infer additional component types from the raw layer structure.
