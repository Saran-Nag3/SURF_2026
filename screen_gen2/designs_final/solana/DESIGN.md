---
name: solana
source: Solana App Kit - Project Cover (Community)
kind: design-system-context
---

# solana - Design System

## Overview

A Solana App Kit project-cover system with dark presentation screens, large Franie headings, white logo artwork, subdued blue-gray supporting text, and guided edit-cover steps. The primary cover is 1920×1080px with left/top constraints and a dark background.

## Design language

- Dark, high-contrast presentation surfaces.
- Large editorial Franie typography for titles and section headings.
- White logo artwork and primary headings.
- Supporting copy uses muted light-blue or gray tones.
- Decorative abstract shape groups appear behind cover content.
- Layouts use fixed-size content groups with generous vertical gaps.
- Edit guidance is organized into numbered steps.
- Blue step surfaces are used for Step 1 and Step 3; dark surfaces are used for Step 2 and Step 4.

## Color palette

Ranked by raw usage:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 21 |
| `#64C6FF1A` | 6 |
| `#0C101A` | 4 |
| `#406DA2` | 4 |
| `#FFFFFF1A` | 4 |
| `#DAEEFE99` | 3 |

Usage:

- `#0C101A`: primary cover and dark edit-step background.
- `#FFFFFF`: primary headings, logo artwork, and light surfaces.
- `#DAEEFE99`: supporting cover copy.
- `#FFFFFF1A`: edit-step section stroke.
- `#64C6FF1A`, `#406DA2`: raw extracted colors with no further layer assignment recorded.

## Type scale

No local text styles were found. Raw and screen typography:

| Font | Size | Usage |
|---|---:|---|
| Franie SemiBold | 84px | Cover project title; Project Name instance |
| Franie Regular | 26px | Cover supporting tagline |
| Franie Regular | 32px | “Powered by” label |
| SF Pro Rounded Bold | 30.57px | “SendArcade” label |
| Inter Medium | 54.79px | Project Name component text |
| Franie SemiBold | 98.74px | Edit guidance headings |
| Inter Soft Medium | 54.79px | Step 1 and Step 2 instructional copy |
| Franie SemiBold | 90.51px | Step 3 and Step 4 headings |
| Inter Soft Medium | 50.23px | Step 4 instructional copy |

The extracted typography hierarchy identifies Franie SemiBold at 84px as the raw primary style.

## Spacing scale

Extracted spacing values:

- `0px`: frame padding and zero-offset layout edges.
- `9.34px`: horizontal gap in the SendArcade grouping.
- `10px`: Project Name component padding on all sides and component gap.
- `12.77px`: Company Logo grouping gap.
- `13.59px`: vertical gap within the Solana app-kit logo lockup.
- `33.29px`: supporting-copy frame gap.
- `37px`: gap between partner marks.
- `43.38px`: gap between the Solana mark and wordmark.
- `64px`: primary vertical grouping gap.
- `96px`: major vertical grouping gap.

## Radius scale

Extracted corner radii:

- `0px`: square decorative groups and selected vectors.
- `5px`: Project Name component set.
- `11.26px`: cover logo vector.
- `26px`: Step 4 screenshot.
- `32px`: edit-step groups and frames.
- `64px`: Step 2 Company Logo image.
- `87.43px`: large Company Logo image in the edited cover.

## Elevation & effects

- Company Logo uses `background_blur`:
  - `40px` in the component.
  - `54.65px` in the edited cover instance.
- Company Logo image rectangles use drop-shadow effects.
- The edited cover image uses a `20.49px` drop-shadow offset `0 5.46px`.
- The Step 2 Company Logo image uses a `15px` drop-shadow offset `0 4px`.
- No local effect styles were found.

## Components

### Project Name

- Family: `Project Name`
- Base component size: `800×89px`.
- Horizontal layout.
- Padding: `10px` on all sides.
- Gap: `10px`.
- Alignment: minimum/center.
- Sizing: fixed width and fixed height.
- Text: Inter Medium, `54.79px`.
- Variant: `Property 1: Frame 1000002800`.
- Used in the edit flow inside an `840×129px` component set.
- The edited-cover instance is `660×91px` and contains Franie SemiBold text at `84px`.

### Company Logo

- Family: `Company Logo`
- Component size: `650×650px`.
- Center/top placement in the Step 2 example.
- Edited-cover instance size: `933.26×933.26px`, aligned right/center.
- Inner image:
  - Step 2: `566×566px`.
  - Edited cover: `812.65×812.65px`.
- Inner image radius:
  - Step 2: `64px`.
  - Edited cover: `87.43px`.
- Uses background blur and drop-shadow effects.

## Screen patterns

### Cover

- Canvas: `1920×1080px`.
- Background: `#0C101A`.
- Decorative shape group behind the content.
- Centered project title: Franie SemiBold, `84px`, `#FFFFFF`.
- Supporting cover group: `705px` wide with a `96px` vertical gap.
- Solana app-kit logo lockup: `523×136.06px`, with a `43.38px` horizontal gap between mark and wordmark.
- Supporting tagline: `566×21px`, Franie Regular, `26px`, `#DAEEFE99`.
- Partner marks sit below with a `37px` gap.

### Edited cover

- Canvas: `1920×1080px`.
- Background: `#0C101A`.
- Decorative shape group and large Company Logo instance placed behind or beside the main content.
- Project Name appears as a large editable title.
- Main content retains the Solana app-kit lockup, supporting tagline, and partner marks from the Cover pattern.
- Company Logo is positioned right/center with a `933.26×933.26px` instance.

### Edit Cover steps

- Step 1:
  - Section size: `1005×947px`.
  - Rounded group radius: `32px`.
  - Project Name editing example uses an `861.3×191.78px` group.
  - Instruction heading: Franie SemiBold, `98.74px`.
  - Instruction copy: Inter Soft Medium, `54.79px`.
- Step 2:
  - Section size: `1074×1862px`.
  - Rounded group size: `861.3×850px`.
  - Company Logo example uses a `650×650px` component.
  - Instruction heading: Franie SemiBold, `98.74px`.
  - Instruction copy: Inter Soft Medium, `54.79px`.
- Step 3:
  - Section size: `837×388px`.
  - Heading: “Preview your Cover”, Franie SemiBold, `90.51px`.
- Step 4:
  - Section size: `1039×1095px`.
  - Heading: “Export your Cover”, Franie SemiBold, `90.51px`.
  - Instruction copy: Inter Soft Medium, `50.23px`.
  - Screenshot example: `907×384.38px`, radius `26px`.

## Notes for implementers

- Use only the extracted palette values documented above.
- Preserve the dark `1920×1080px` cover canvas and the centered or right-aligned content relationships.
- Keep Franie typography for major headings and cover messaging; use Inter or Inter Soft for editable and instructional text as specified.
- Preserve the Project Name component’s `10px` padding and `10px` gap.
- Preserve the Company Logo blur, image sizing, and radius differences between the Step 2 example and the edited-cover instance.
- Treat decorative shape groups as background decoration rather than primary content.
- No local variables, text styles, spacing styles, radius styles, motion tokens, grid styles, or effect styles were found.
