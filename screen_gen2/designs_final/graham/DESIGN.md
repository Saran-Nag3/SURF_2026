---
name: graham
source: Android USSD prompts (Community)
kind: design-system-context
---

# graham - Design System

## Overview

- Android USSD prompt design system for light and dark mobile USSD dialogs.
- Primary UI patterns are fixed-width 308px prompts with text content, optional input, loading state, and one or two actions.
- Source pages: Android USSD prompt, Cover, and versions.
- Component families: `USSD prompt [new]`, `USSD prompt old`, `_buttons`, `_input-field`, `_loader`.

## Design language

- Compact Android-style dialogs with 12px rounded corners.
- Blue is the primary action and focus color.
- Dark theme uses `#444445`; light theme uses `#FFFFFF`.
- Dialog hierarchy uses bold 14px headings, regular 12px body text, and bold 12px actions.
- Footer actions are full-width or split evenly between one or two buttons.
- Loading states use a 40px loader beside a short status message.
- Cover artwork uses a vivid blue background, white typography, translucent white circular decoration, and gray device imagery.

## Color palette

Ranked by recorded usage where available:

| Token / use | Color | Usage |
|---|---:|---:|
| primary | `#3A86FF` | 45 uses |
| Body and surfaces: white | `#FFFFFF` | 26 uses; theme/light and white tokens are duplicates |
| grays/gray-lighter | `#F7F7F7` | 17 uses |
| grays/gray-light | `#5E5E5F` | 15 uses |
| theme/dark | `#444445` | 12 uses |
| grays/gray | `#1A1A1A` | 11 uses |
| secondary | `#3EAEAE` | 7 uses |
| translucent white | `#FFFFFF0A` | 9 raw uses |
| translucent white | `#FFFFFF08` | 6 raw uses |
| decorative purple stroke | `#7B61FF` | 4 raw uses |
| black | `#000000` | 3 raw uses |

Usage guidance:

- `#3A86FF`: primary action text, input caret, input focus effect, and arrows.
- `#FFFFFF`: light surfaces, dark-theme heading text, loader fill, and cover heading text.
- `#444445`: dark dialog and dark cover badge surface.
- `#F7F7F7`: light gray body text on dark surfaces and cover subtitle text.
- `#5E5E5F`: secondary text and dividers.
- `#1A1A1A`: dark text on light surfaces.
- `#3EAEAE`: loader accent and example strokes.
- `#FFFFFF08` and `#FFFFFF0A`: translucent decorative cover circles.
- `#7B61FF`: component-set outline in the source.
- `#000000`: example property-list text.

## Type scale

Font family and styles:

- Body/default regular: Roboto Regular, 400, 12px / 20px, tracking 0px.
- Body/default bold: Roboto Bold, 700, 12px / 20px, tracking 0px.
- Body/large bold: Roboto SemiBold, 600, 14px / 20px, tracking 0px.
- Raw display style: Roboto Condensed Bold, 40px.
- Cover heading: Roboto Condensed Bold, 64px, 71.36px, and 105.98px.
- Cover subtitle: Roboto Condensed Regular, 36px.
- Cover label: Roboto Condensed Medium, 16px.
- Raw unstyled text: Roboto Condensed Bold, 40px, used 4 times.

Hierarchy:

1. 14px Roboto SemiBold for prompt titles.
2. 12px Roboto Bold for actions.
3. 12px Roboto Regular for prompt messages, input values, and loading text.
4. Cover display sizes use the explicitly specified 64px, 71.36px, and 105.98px styles.

## Spacing scale

No spacing variables found. Explicit layout values used by the system:

- `0px`: prompt and footer padding; several container gaps.
- `1px`: input bottom padding and strokes.
- `8px`: text-content bottom padding, text-content gap, and button gap.
- `10px`: input-field gap.
- `16px`: standard prompt text padding, button padding, input horizontal padding, loading horizontal padding, and cover badge padding.
- `24px`: loading horizontal padding and cover badge horizontal padding.
- `52px`: button height.
- `60px`: one-action footer height.
- `72px`: prompt text-content height and loading height.
- `89px`: two-action/input footer height.

## Radius scale

- `5px`: component-set outlines.
- `8px`: example property-list frames.
- `12px`: USSD prompt and legacy prompt corners.
- `18.44px`: cover device image.
- `21.57px`: social cover device image.
- `32px`: cover badge pill.

## Elevation & effects

- No local effect styles found.
- `_input-field` uses a drop shadow with offset `0 2px` and color `#3A86FF`.
- Cover image effects use drop shadows in the source; their colors are not included here because they are outside the allowed palette.
- Dialogs use 1px divider strokes in `#5E5E5F` for dark theme and `#F7F7F7` for light theme.

## Components

### `USSD prompt [new]`

- Base size: `308x161px`.
- Radius: `12px`.
- Vertical layout; fixed width and height.
- Variants:
  - `theme`: dark, light
  - `state`: default, loading
  - `button-count`: none (`0`), one (`1`), two (`2`)
- Default prompt:
  - Text content: `308x72px`.
  - Padding: top `16px`, horizontal `16px`, bottom `8px`.
  - Gap: `8px`.
  - Title uses Body/Large-bold.
  - Message uses Body/Default-regular.
  - Footer uses `8px` gap.
- One action:
  - Total size: `308x132px`.
  - Footer: `308x60px`.
  - Includes a `308px` divider and one `308x52px` action.
- Two actions:
  - Total size: `308x161px`.
  - Footer: `308x89px`.
  - Includes an input field and two evenly split `154x52px` actions.
- Loading:
  - Size: `308x72px`.
  - Horizontal layout.
  - Padding: `16px 24px`.
  - Gap: `16px`.
  - Includes `_loader` and the text `USSD code running...`.

### `USSD prompt old`

- Base size: `308x144px`.
- Radius: `12px`.
- Vertical layout; fixed width and height.
- Variants:
  - `theme`: dark, light
  - `header`: false, true
  - `action`: none, one, two
- Uses Body/Default-bold and Body/Default-regular.
- Legacy prompt examples use a `308x84px` content area, followed by a `308x60px` footer with a divider and action area.

### `_buttons`

- Base size: `76x52px`.
- Horizontal layout.
- Padding: `16px` on all sides.
- Gap: `8px`.
- Variant: `state=Default`.
- Button text uses Body/Default-bold and `#3A86FF`.
- In prompts, buttons expand to `308px` for one action or `154px` each for two actions.

### `_input-field`

- Size: `308x29px`.
- Vertical layout.
- Padding: top `8px`, right `16px`, bottom `1px`, left `16px`.
- Gap: `10px`.
- Center/min alignment.
- Variants: `theme=dark`, `theme=light`.
- Fill:
  - Dark: `#444445`.
  - Light: `#FFFFFF`.
- Input value uses Body/Default-regular.
- Caret uses `#3A86FF`.
- Drop shadow uses offset `0 2px` with `#3A86FF`.

### `_loader`

- Size: `40x40px`.
- Fill: `#FFFFFF`.
- Contains a `26.67x26.67px` ellipse filled with `#3EAEAE`.

## Screen patterns

### Android USSD prompt

- Center a fixed-width `308px` prompt.
- Use a two-line text block with `16px` top and horizontal padding.
- Use a divider before a single full-width action or before the footer containing input and actions.
- For two actions, split the footer into two equal `154px` buttons.
- For loading, replace the standard content with a horizontal loader and status message.

### Legacy prompt versions

- Use `USSD prompt old` for the earlier dialog structure.
- Support optional header content and zero, one, or two actions.
- Preserve the fixed `308px` width and `12px` radius.

### Cover and social presentation

- Use `#3A86FF` as the cover background.
- Add large translucent circular decoration using `#FFFFFF08` or `#FFFFFF0A`.
- Use white Roboto Condensed display text.
- Use `#444445` for the rounded community-file badge.
- Keep device and prompt imagery as decorative supporting content rather than reusable UI components.

## Notes for implementers

- Do not introduce additional component families beyond the five listed in this document.
- Preserve the fixed `308px` prompt width unless a source screen explicitly uses a larger presentation frame.
- Treat `theme/light` and `white` as the same `#FFFFFF` value.
- Use `#F7F7F7` for light text on dark prompts and `#5E5E5F` for secondary text or dividers.
- Use `#1A1A1A` for primary text on light prompts.
- Keep action labels in Body/Default-bold at `12px / 20px` and colored `#3A86FF`.
- Use the documented variants rather than creating separate components for each theme, state, or action count.
- No spacing, motion, grid, or local effect variables were found in the source.
