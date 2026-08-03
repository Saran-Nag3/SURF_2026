---
name: 40-responsive-pop-up-modal-windows-ui-kit-community
source: 40+ Responsive Pop up/ Modal Windows UI Kit (Community)
kind: design-system-context
---

# modal - Design System

## Overview

A desktop modal and pop-up UI kit focused on centered dialogs for confirmations, status messages, sharing, file uploads, and media-led requests.

- Source pages: Modals/Pop up Designs, Thumbnail
- Primary desktop frame: 1366 × 768px
- Modal width: 556px
- Standard modal padding: 24px
- Standard modal corner radius: 16px
- Modal content width: 508px
- Modal actions commonly use 36px height and 16px gaps.

## Design language

- Clean, compact modal layouts with white surfaces and centered presentation.
- Use strong heading/body hierarchy with Inter.
- Dialog content is vertically structured with 12px, 16px, 24px, and 32px gaps.
- Actions are placed at the bottom of the dialog.
- Confirmation and destructive dialogs use status icons above the message.
- Sharing and upload dialogs use larger 44px controls and 8px corner radii.
- A cyan linear gradient and magenta secondary accent are available for branded treatments.

## Color palette

Use only the following extracted colors:

| Token / color | Value | Usage |
|---|---|---:|
| Dark | `#0D0543` | 1 use |
| Brand gradient start | `#00FBFF` | Brand gradient |
| Brand gradient middle/end | `#10DCE8` | Brand gradient |
| Brand gradient end | `#09C9E3` | Brand gradient |
| Secondary | `#EB24BF` | 2 uses |
| White | `#FFFFFF` | 10 uses |
| Black | `#000000` | 15 uses |
| Facebook blue | `#1877F2` | 4 uses |
| Error red | `#E60019` | 4 uses |
| Orange | `#FF4500` | 4 uses |
| Soft lavender | `#E5CFE7` | Avatar background |
| Warning background | `#FEF0C7` | 4 uses |
| Shadow alpha | `#10182808` | Shadow-lg |
| Shadow alpha | `#1018280D` | Shadow-xs |
| Shadow alpha | `#10182814` | Shadow-lg |

Brand gradient:

```text
linear-gradient(#00FBFF 0%, #10DCE8 100%, #09C9E3 100%)
```

## Type scale

Font families: Inter and Young Serif.

| Style | Font | Weight | Size / line height | Tracking | Usage |
|---|---|---:|---:|---:|---:|
| Display 2xl/Bold | Inter | 700 | 72px / 90px | -1.44px | 11 uses |
| Display sm/Medium | Inter | 500 | 30px / 38px | 0px | 3 uses |
| Display xs/Medium | Inter | 500 | 24px / 32px | 0px | 15 uses |
| Text xl/Medium | Inter | 500 | 20px / 30px | 0px | 18 uses |
| Text lg/Medium | Inter | 500 | 18px / 28px | 0px | 1 use |
| Text md/Semibold | Inter | 600 | 16px / 24px | 0px | 4 uses |
| Text md/Regular | Inter | 400 | 16px / 24px | 0px | 51 uses |
| Text sm/Medium | Inter | 500 | 14px / 20px | 0px | 16 uses |
| Text sm/Regular | Inter | 400 | 14px / 20px | 0px | 24 uses |
| Text-Small/Normal | Inter | 400 | 14px / 20px | 0px | 1 use |
| Text xs/Regular | Inter | 400 | 12px / 18px | 0px | 4 uses |
| Raw display | Inter | 600 | 36px | Not specified | 3 uses |
| Serif display | Young Serif | 400 | 32px | Not specified | 4 uses |

## Spacing scale

No spacing variables were found.

Observed spacing and padding values:

- 4px: button internal gap.
- 6px: input and control label gaps.
- 8px: control padding and content gaps.
- 10px: control vertical padding.
- 12px: content gaps and button horizontal padding.
- 14px: input horizontal padding.
- 16px: modal content gaps, action gaps, upload padding.
- 20px: icon/text and grid row gutter.
- 24px: modal padding, major content gaps, upload horizontal padding.
- 32px: modal section gap and tablet/desktop grid gutters.
- 56px: mobile grid row section.
- 70px: mobile grid column section.

Responsive grids:

- Mobile: 4 columns, 70px section, 16px gutter; rows use 56px section and 20px gutter.
- Tablet: 6 columns, 133.33px section, 32px gutter.
- Desktop: 12 columns, 65.83px section, 32px gutter.

## Radius scale

No radius variables were found.

Observed corner radii:

- 4px: compact buttons and media frames.
- 8px: inputs, upload controls, social buttons, share controls, close buttons.
- 12px: media image frame.
- 16px: modal surface.
- 9999px: circular featured icon.

## Elevation & effects

- `Shadows/shadow-xs`: drop shadow with 2px offset, `0 1px`, color `#1018280D`.
- `Shadows/shadow-lg`: two drop shadows:
  - `0 4px` with color `#10182808`
  - `0 12px` with color `#10182814`
- Usage:
  - Shadow-xs: 112 uses.
  - Shadow-lg: 34 uses.
- Modal surfaces use shadow-lg.
- Buttons, inputs, upload controls, social buttons, and close controls commonly use shadow-xs.

## Components

_None found in source._

## Screen patterns

- Centered desktop modal on a 1366 × 768px frame.
- Standard dialog:
  - 556px wide.
  - 24px padding on all sides.
  - 16px corner radius.
  - 508px internal content width.
  - 32px gap between content and action area.
- Modal heights observed: 208px, 232px, 260px, 278px, 312px, 320px, 414px, 494px, and 546px.
- Confirmation dialog:
  - Heading and supporting text.
  - Bottom action row.
  - Actions separated by 16px.
- Status dialog:
  - 40px or 48px featured icon.
  - 16px gap before message content.
  - Heading followed by supporting text.
  - Bottom action row.
- Media request dialog:
  - Media area approximately 508px wide.
  - Media heights observed at 256px and 266px.
  - 12px gap between media and text.
- Share dialog:
  - 20px heading style.
  - Social button group with six 50 × 44px buttons and 12px gaps.
  - Copy-link input and action button at 44px height.
  - Close control at 36 × 36px.
- File upload dialog:
  - 20px heading style.
  - Supporting text below the heading.
  - Upload area approximately 508 × 126px.
  - Upload control uses 8px radius and a 1px border.
- Closeable dialogs:
  - Close button is 36 × 36px.
  - Positioned at the top-right.
  - Close icon is 20 × 20px.

## Notes for implementers

- Keep dialogs centered within the viewport.
- Preserve the 556px outer width and 24px inset for the standard desktop modal.
- Use the extracted type styles rather than introducing new sizes.
- Prefer the most-used styles first: shadow-xs, Text md/Regular, shadow-lg, Text sm/Regular, and Text xl/Medium.
- Use 16px for action-row gaps and 32px between major modal sections.
- Keep primary, secondary, destructive, warning, and neutral treatments distinct, but use only the documented palette values.
- No local variables, component families, or motion tokens were extracted.
- Image assets are present in the source, including avatar and media images, but their visual color values are not specified.
