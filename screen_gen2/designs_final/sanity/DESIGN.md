---
name: sanity-ui-community
source: Sanity UI (Community)
kind: design-system-context
---

# sanity - Design System

## Overview

Sanity UI Community is a component and design-token system covering primitives, components, typography, spacing, effects, colors, icons, navigation, and admin UI. The source contains 10 Figma pages, including Stickersheet, Navigation, Primitives, Components, Icons, Typography, Spacing, Effects, Colors, and `.admin`.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Interface style: compact, utility-focused, and component-driven.
- Typography uses SF Pro Text, SF Pro Display, and SF Mono.
- Controls generally use small radii: `1px`, `3px`, or `6px`.
- Common control heights are `17px`, `25px`, `27px`, `35px`, and `37px`.
- Component fills commonly use `#FFFFFF`; borders use the `gray/200` token, whose concrete color was not provided in the source.
- Semantic tones include `default`, `primary`, `positive`, `caution`, and `critical`.
- Most components support `light` and `dark` theme variants.
- Icon assets are consistently specified at `25x25px`.

## Color palette

### Usage-ranked raw colors

| Color | Usage |
|---|---:|
| `#E5389E00` | 88 |
| `#FFFFFF` | 29 |
| `#C4C4C4` | 15 |
| `#121923` | 9 |

### Neutral tokens

- `black`: `#101112` and `#121923` appear in the source under the same token name.
- `gray/950`: `#1B1D20`
- `gray/900`: `#272A2E`
- `gray/800`: `#3F434A`
- `gray/600`: `#6E7683`
- `gray/500`: `#8690A0`
- `gray/400`: `#9EA6B3`
- `gray/300`: `#B6BCC6`
- `gray/100`: `#E6E8EC`
- `gray/50`: `#F2F3F5`
- `white`: `#FFFFFF`
- `gray/200`: no concrete value provided.

### Blue

- `blue/950`: `#111B29`
- `blue/900`: `#132540`
- `blue/800`: `#17396F`
- `blue/600`: `#1E61CD`
- `blue/500`: `#2276FC`
- `blue/400`: `#4E91FC`
- `blue/300`: `#7AACFD`
- `blue/100`: `#D2E3FE`
- `blue/50`: `#E8F1FE`

### Cyan

- `cyan/950`: `#112124`
- `cyan/900`: `#133237`
- `cyan/800`: `#16545D`
- `cyan/700`: `#197583`
- `cyan/600`: `#1C97A8`
- `cyan/500`: `#1FB8CE`
- `cyan/400`: `#22DAF4`
- `cyan/300`: `#59E3F6`
- `cyan/200`: `#90ECF9`
- `cyan/100`: `#C7F5FC`
- `cyan/50`: `#E3FAFD`

### Green

- `green/950`: `#14211A`
- `green/900`: `#183122`
- `green/800`: `#215233`
- `green/700`: `#297343`
- `green/600`: `#329454`
- `green/500`: `#3AB564`
- `green/400`: `#43D675`
- `green/300`: `#72E097`
- `green/200`: `#A1EABA`
- `green/100`: `#D0F4DC`
- `green/50`: `#E7F9ED`

### Yellow

- `yellow/950`: `#201E13`
- `yellow/900`: `#312C14`
- `yellow/800`: `#534717`
- `yellow/700`: `#746219`
- `yellow/600`: `#967E1C`
- `yellow/500`: `#B7991E`
- `yellow/400`: `#D9B421`
- `yellow/300`: `#FBD024`
- `yellow/200`: `#FCDF6D`
- `yellow/100`: `#FDEFB6`
- `yellow/50`: `#FEF7DA`

### Orange

- `orange/950`: `#251A13`
- `orange/900`: `#3A2415`
- `orange/800`: `#653818`
- `orange/700`: `#904B1B`
- `orange/600`: `#BA5F1F`
- `orange/500`: `#E57322`
- `orange/400`: `#FB8B3C`
- `orange/300`: `#FCA86D`
- `orange/200`: `#FDC59D`
- `orange/100`: `#FEE2CE`
- `orange/50`: `#FEF0E6`

### Red

- `red/950`: `#261514`
- `red/900`: `#3C1A17`
- `red/800`: `#69231D`
- `red/700`: `#962C23`
- `red/600`: `#C33529`
- `red/500`: `#F03E2F`
- `red/400`: `#F36458`
- `red/300`: `#F68B82`
- `red/200`: `#F9B1AB`
- `red/100`: `#FCD8D5`
- `red/50`: `#FDEBEA`

### Magenta

- `magenta/950`: `#25141F`
- `magenta/900`: `#3A182D`
- `magenta/800`: `#65204A`
- `magenta/700`: `#8F2866`
- `magenta/600`: `#BA3082`
- `magenta/500`: `#E5389E`
- `magenta/400`: `#EA5FB1`
- `magenta/300`: `#EF87C4`
- `magenta/200`: `#F4AFD8`
- `magenta/100`: `#F9D7EB`
- `magenta/50`: `#FCEBF5`

### Purple

- `purple/950`: `#211229`
- `purple/900`: `#331440`
- `purple/800`: `#56186F`
- `purple/700`: `#7A1B9E`
- `purple/600`: `#9D1FCD`
- `purple/500`: `#C123FC`
- `purple/400`: `#CD4EFC`
- `purple/300`: `#D97BFD`
- `purple/200`: `#E6A7FD`
- `purple/100`: `#F2D3FE`
- `purple/50`: `#F8E9FE`

## Type scale

### Headings

| Token | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `Heading / 5` | SF Pro Display | 700 | 38px / 45px | 0.5px |
| `Heading / 4` | SF Pro Display | 700 | 33px / 39px | 0.5px |
| `Heading / 3` | SF Pro Display | 700 | 27px / 33px | 0.5px |
| `Heading / 2` | SF Pro Display | 700 | 21px / 27px | 0.5px |
| `Heading / 1` | SF Pro Text | 700 | 16px / 21px | 0.12px |
| `Heading/0` | SF Pro Text | 700 | 12px / 17px | 0px |

### Text

| Token | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `Text/4/regular` | SF Pro Display | 400 | 22px / 29px | 0.88px |
| `Text/4/medium` | SF Pro Display | 500 | 22px / 29px | 0.88px |
| `Text/4 / semibold` | SF Pro Display | 600 | 21px / 29px | 0.84px |
| `Text/4 / bold` | SF Pro Display | 700 | 21px / 29px | 0.84px |
| `Text/3 / regular` | SF Pro Text | 400 | 19px / 25px | 0px |
| `Text/3/medium` | SF Pro Text | 500 | 19px / 25px | 0px |
| `Text/3 / semibold` | SF Pro Text | 600 | 18px / 25px | 0px |
| `Text/3 / bold` | SF Pro Text | 700 | 18px / 25px | 0px |
| `Text/2 / regular` | SF Pro Text | 400 | 16px / 21px | 0px |
| `Text/2/medium` | SF Pro Text | 500 | 16px / 21px | 0px |
| `Text/2 / semibold` | SF Pro Text | 600 | 16px / 21px | 0px |
| `Text/2 / bold` | SF Pro Text | 700 | 16px / 21px | 0px |
| `Text/1/regular` | SF Pro Text | 400 | 13px / 17px | 0px |
| `Text/1/medium` | SF Pro Text | 500 | 13px / 17px | 0px |
| `Text/1 / semibold` | SF Pro Text | 600 | 13px / 17px | 0px |
| `Text/1 / bold` | SF Pro Text | 700 | 13px / 17px | 0px |
| `Text/0 / regular` | SF Pro Text | 400 | 10px / 13px | 0px |
| `Text/0/medium` | SF Pro Text | 500 | 10px / 13px | 0px |
| `Text/0 / semibold` | SF Pro Text | 600 | 10px / 13px | 0px |
| `Text/0 / bold` | SF Pro Text | 700 | 10px / 13px | 0px |

### Labels

- `Label / 4`: SF Pro Text Semibold, 600, `15px / 15.5px`, tracking `0.5px`
- `Label / 3`: SF Pro Text Semibold, 600, `14px / 14px`, tracking `0.5px`
- `Label / 2`: SF Pro Text Semibold, 600, `12.75px / 13px`, tracking `0.5px`
- `Label / 1`: SF Pro Text Semibold, 600, `11.25px / 12px`, tracking `0.5px`
- `Label / 0`: SF Pro Text Semibold, 600, `10px / 11px`, tracking `0.5px`

### Code

- `Code / 4`: SF Mono Regular, `22px / 29px`
- `Code / 3`: SF Mono Regular, `19px / 25px`
- `Code/2`: SF Mono Regular, `16px / 21px`
- `Code/1`: SF Mono Regular, `13px / 17px`
- `Code/0`: SF Mono Regular, `10px / 13px`

All typography uses `0px` tracking unless explicitly specified above.

## Spacing scale

No spacing scale or spacing variables were found in the source.

Component-level spacing values include:

- `0px`, `1px`, `2px`, `3px`, `4px`, `5px`, `7px`, `8px`, `10px`, `11px`, `12px`, and `20px`.
- Component-specific padding and gaps are defined in the Components section.

## Radius scale

No radius variables were found.

Observed component radii:

- `1px`: `TextInput`, `TextArea`, `Select`
- `3px`: `Tooltip`, `KBD`, `Checkbox`, `Card`, `Button`, `Badge`, `Toast`, `Tab`, `MenuItem`, `Autocomplete`
- `6px`: `Popover`, `Dialog`
- `12px`: `Switch`, `Radio`
- `100px`: `Avatar`

## Elevation & effects

### Focus rings

- `focus ring/light`: `drop_shadow 0px offset 0 0 #2276FC`, followed by `drop_shadow 0px offset 0 0 #FFFFFF`.
- `focus ring/dark`: `drop_shadow 0px offset 0 0 #2276FC`, followed by `drop_shadow 0px offset 0 0 #000000`.

### Shadow families

Each shadow is composed of four drop shadows. Use the exact tone color and offsets below.

- `Shadow 1`: all four layers use offset `0 0`, with alpha colors `66`, `33`, `24`, and `1F`.
- `Shadow 2`: offsets `0 0`, `0 3`, `0 6`, and `0 1`; blur values `0px`, `5px`, `10px`, and `18px`.
- `Shadow 3`: offsets `0 0`, `0 6`, `0 12`, and `0 5`; blur values `0px`, `8px`, `17px`, and `22px`.
- `Shadow 4`: offsets `0 0`, `0 9`, `0 18`, and `0 7`; blur values `0px`, `11px`, `28px`, and `34px`.
- `Shadow 5`: offsets `0 0`, `0 14`, `0 30`, and `0 12`; blur values `0px`, `15px`, `38px`, and `46px`.

Tone colors:

- `default`: `#8690A066`, `#8690A033`, `#8690A024`, `#8690A01F`
- `primary`: `#2276FC66`, `#2276FC33`, `#2276FC24`, `#2276FC1F`
- `positive`: `#3AB56466`, `#3AB56433`, `#3AB56424`, `#3AB5641F`
- `caution`: `#B7991E66`, `#B7991E33`, `#B7991E24`, `#B7991E1F`
- `critical`: `#F03E2F66`, `#F03E2F33`, `#F03E2F24`, `#F03E2F1F`

## Components

### Core components

- `Tooltip`: `56x25px`; radius `3px`; padding `4px 7px`; gap `0px`; white fill; `gray/200` 1px stroke; default `Shadow 2`; text `Text/1/regular`; placements `bottom`, `left`, `right`, `top`; themes `dark`, `light`.
- `TextInput`: `191x35px`; radius `1px`; padding `5px`; gap `5px`; white fill; `gray/200` 1px stroke; text `Text/2 / regular`; variants for font size, padding, and theme.
- `TextArea`: `200x56px`; radius `1px`; padding `7px 11px`; gap `10px`; white fill; `gray/200` 1px stroke; text `Text/2 / regular`.
- `Switch`: `33x17px`; radius `12px`; green/500 fill; values `false`, `indeterminate`, `true`.
- `Spinner`: `25x25px`; variants `muted: no/yes`.
- `Select`: `190x35px`; radius `1px`; padding `5px 5px 5px 12px`; gap `5px`; white fill; `gray/200` 1px stroke; text `Text/2 / regular`.
- `Radio`: `17x17px`; radius `12px`; white fill; `gray/200` 1px stroke; checked and unchecked variants.
- `Popover`: `280x54px`; radius `6px`; padding `12px`; white fill; `gray/200` 1px stroke; default `Shadow 2`; placements and alignments `start`, `middle`, `end`.
- `KBD`: `39x17px`; radius `3px`; padding `0 3px`; gap `10px`; `gray/200` 1px stroke; text `Code/1`.
- `Checkbox`: `17x17px`; radius `3px`; white fill; `gray/200` 1px stroke; values `false`, `indeterminate`, `true`.
- `Card`: `350x38px`; radius `3px`; padding `4px`; gap `12px`; white fill; default `Shadow 1`; supports all semantic tones.
- `Button`: `63x15px`; radius `3px`; no padding; gap `0px`; gray/500 fill; text `Text/0/medium`; supports font sizes, padding variants, semantic tones, modes `bleed`, `default`, `ghost`, and states `active`, `default`, `hover`.
- `Badge`: `51x17px`; radius `3px`; padding `2px 4px`; gap `10px`; gray/500 fill; text `Label / 2`; modes `default`, `outline`.
- `Avatar`: `25x25px`; radius `100px`; gray/500 fill; text `Label / 0`; sizes `0`, `1`, `2`; color families `blue`, `cyan`, `green`, `magenta`, `orange`, `purple`, `red`, `yellow`, or unset.
- `Toast`: `380x37px`; radius `3px`; padding `8px`; gap `12px`; white fill; default `Shadow 2`; text `Text/2 / semibold`; supports all semantic tones.
- `Tab`: `62x27px`; radius `3px`; padding `1px 7px 1px 1px`; gap `1px`; `#FFFFFF` fill; text `Text/2/medium`; selected and unselected variants.
- `MenuItem`: `145x35px`; radius `3px`; padding `5px`; gap `5px`; white fill; text `Text/2 / regular`; tones `caution`, `critical`, `default`, `positive`, `primary`; states `active`, `default`, `pressed`.
- `Autocomplete`: `320x35px`; radius `3px`; no padding; gap `0px`; `gray/200` 1px stroke; text `Text/2/medium` and `Text/2 / regular`; open and closed variants.
- `Dialog`: `360x119px`; radius `6px`; white fill; default `Shadow 3`; text includes `Text/1/medium`, `Text/0 / regular`, `Text/1 / semibold`, and `Text/2 / semibold`.
- `DialogHeader`: `320x51px`; padding `8px 8px 8px 20px`; white fill; `gray/200` 1px stroke; text `Text/2 / semibold`.
- `Hotkeys`: `109x17px`; gap `4px`; text `Code/1`.

### Structural and utility families

- `.header`
- `.placeholder`
- `.popover-arrow`
- `.tooltip-arrow`
- `access-denied`
- `master-detail`
- `inline`
- `inline-element`
- `block-content`
- `block-element`
- `blockquote`
- `read-only`
- `overage`
- `retry`
- `schema`
- `select`
- `spinner`

### Icon families

All listed icons are specified at `25x25px`. Most have `#FFFFFF` fill in the source.

- Navigation: `arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `arrow-top-right`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `double-chevron-down`, `double-chevron-left`, `double-chevron-right`, `double-chevron-up`, `toggle-arrow-right`, `enter`, `launch`, `leave`, `menu`, `collapse`, `expand`
- Actions: `add`, `add-circle`, `archive`, `checkmark`, `checkmark-circle`, `close`, `close-circle`, `copy`, `download`, `edit`, `generate`, `publish`, `remove`, `remove-circle`, `reset`, `restore`, `retrieve`, `retry`, `revert`, `share`, `sync`, `transfer`, `trash`, `undo`, `unpublish`, `upload`
- Content and documents: `binary-document`, `document`, `document-pdf`, `document-remove`, `document-sheet`, `document-text`, `document-video`, `document-word`, `document-zip`, `documents`, `folder`, `image`, `image-remove`, `images`, `clipboard`, `clipboard-image`, `code`, `code-block`, `string`, `number`, `schema`, `token`
- Formatting: `bold`, `italic`, `strikethrough`, `underline`, `link`, `link-removed`, `olist`, `ulist`, `truncate`, `inline`, `inline-element`, `block-element`, `blockquote`
- Interface and status: `bell`, `clock`, `comment`, `controls`, `dot`, `ellipsis-horizontal`, `ellipsis-vertical`, `error-filled`, `error-outline`, `help-circle`, `info-filled`, `info-outline`, `warning-filled`, `warning-outline`, `unknown`, `circle`, `square`, `triangle`, `stop`, `pause`, `play`, `spinner`
- Data and systems: `activity`, `api`, `bar-chart`, `chart-upward`, `dashboard`, `database`, `filter`, `sort`, `stack`, `stack-compact`, `split-horizontal`, `split-vertical`, `terminal`, `tiers`, `trend`, `package`, `plug`, `wrench`
- Objects and navigation: `basket`, `bill`, `book`, `bottle`, `calendar`, `case`, `color-wheel`, `component`, `compose`, `credit-card`, `crop`, `desktop`, `drag-handle`, `earth-americas`, `earth-globe`, `home`, `joystick`, `marker`, `mobile-device`, `pin`, `pin-removed`, `presentation`, `trolley`
- People and themes: `heart`, `heart-filled`, `star`, `user`, `users`, `lock`, `unlock`, `moon`, `sun`, `bulb-filled`, `bulb-outline`, `sparkle`, `sparkles`, `robot`, `rocket`, `ok-hand`, `ice-cream`, `lemon`, `twitter`

## Screen patterns

- **Stickersheet:** component and icon inventory presentation.
- **Navigation:** navigation-related patterns and iconography.
- **Primitives:** foundational controls, text, and layout primitives.
- **Components:** reusable controls and composed UI components.
- **Icons:** 25px icon family inventory.
- **Typography:** heading, text, label, and code styles.
- **Spacing:** spacing examples; no spacing variables were extracted.
- **Effects:** focus rings and semantic shadow families.
- **Colors:** neutral and semantic color palettes.
- **`.admin`:** administrative UI patterns.
- No detailed screen-level layout structures were provided in the extraction.

## Notes for implementers

- Use only the listed color values and token names. Do not infer a value for `gray/200`; the source only identifies its usage.
- Preserve duplicate source semantics where meaningful: `black` is associated with both `#101112` and `#121923`, while raw usage explicitly reports `#121923`.
- Prefer the named typography tokens over raw font declarations.
- Use `#FFFFFF` for component fills only where the component specification explicitly states it.
- Use semantic tones consistently: `primary`, `positive`, `caution`, `critical`, and `default`.
- Apply theme variants where specified; most controls expose `light` and `dark`.
- Icons are `25x25px` unless a component specification states otherwise.
- Do not create additional spacing, radius, motion, grid, or component tokens beyond those documented here.
