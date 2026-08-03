---
name: balance-wallet-ui-community
source: Balance Wallet UI (Community)
kind: design-system-context
---

# balance - Design System

## Overview

- Mobile wallet UI extracted from Figma file `Balance Wallet UI (Community)`, page `Page 1`.
- Primary viewport: `375x812px`.
- Main patterns: camera capture, image review, group/payment success, reminder success.
- No local variable collections found.

## Design language

- Mobile-first interface with full-screen camera surfaces and white app surfaces.
- High-contrast black, white, blue, grey, and orange palette.
- Camera controls use white icons over image or dark overlays.
- Success states use a centered circular illustration, prominent success heading, and full-width return button.
- Vietnamese interface labels are present, including `Chụp lại`, `Sử dụng`, `Quay về trang chủ`, `Thanh toán thành công`, and `Gửi nhắc nhở thành công`.
- The source includes multiple raw typefaces; the defined SF styles are the clearest reusable typography tokens.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Source token / role |
|---|---:|---|
| #000000 | 7663 | Label Color / Light / Primary; black text and dark overlays |
| #FFFFFF | 7604 | Color/Neutral/6 - White; Background / Color 3; white surfaces and icons |
| #6B6969 | 1007 | Raw neutral |
| #DADADA | 971 | Raw neutral |
| #B8B2B2 | 842 | Raw neutral |
| #292D32 | 543 | Raw neutral |
| #666666 | 535 | Raw neutral |
| #FCFCFE | 508 | Raw near-white |
| #B6B6B6 | 440 | Raw neutral |
| #6A6969 | 431 | Raw neutral |
| #F5F5F5 | 422 | Raw near-white |
| #585858 | 268 | Raw neutral; alternate success-state illustration/button color |
| #28A8D7 | 265 | Raw blue |
| #50555C | 240 | Raw neutral |
| #D7DDEC | 203 | Raw cool neutral |
| #376AED | 146 | Blue; success-state accent and button fill |
| #010101 | 135 | Raw near-black |
| #D9D9D9 | 134 | Camera review control fill |
| #4F4F4F | 421 | Gray 2 |
| #7B8BB2 | 145 | Dark Grey; note-text icon fill |
| #D6D9DD | 132 | Carbon Neutral/300 |
| #FF9500 | 132 | SystemOrange / Light |
| #D0C9D6 | 71 | Color/Neutral/3 - Grey 75% |
| #6979F8 | 66 | Color/Accent/1 - Blue |
| #03053D | 18 | Primary |
| #E0E0E0 | 12 | Gray 5 |
| #57B5ED | 8 | Raw blue |
| #FBBE4B | 5 | Color/Orange/1 - Orange |
| #FF2828 | — | Close-square icon fill |
| #808080 | — | Key icon fill |

## Type scale

### Defined styles

| Style | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| SF / Caption | SF Pro Text | Regular 400 | 12px | 16px | 0px |
| SF / Body | SF Pro Text | Regular 400 | 17px | 22px | -0.41px |
| SF / Headline | SF Pro Text | Semibold 600 | 17px | 22px | -0.41px |

### Observed raw hierarchy

- `50px`: Roboto Regular.
- `25px`: SF Pro Display Regular.
- `24px`: Inter ExtraBold.
- `22.5px`: SF Pro Text Regular.
- `20px`: Inter Bold, Inter ExtraBold, Roboto Regular.
- `18px`: SF Pro Text Semibold.
- `17px`: Roboto Regular; SF / Body; SF / Headline.
- `16px`: Inter ExtraBold, Inter Regular, SF Pro Text Bold, Medium, Regular, and Semibold.
- `15px`: Roboto Regular.
- `14px`: Inter ExtraBold, Medium, Regular, and SemiBold; SF Pro Text Medium, Regular, and Semibold.
- `12px`: Inter Regular and SemiBold; Poppins Regular; SF Pro Text Light, Medium, Regular, and Semibold; SF / Caption.
- `11px`: Inter ExtraBold; PT Sans Regular.
- `10px`: Inter ExtraBold, Inter Regular, Roboto Regular, SF Pro Text Bold.
- `8px`: Inter Regular.

Observed heading example: `Thanh toán thành công` uses SF Pro Text Bold, `24px`, with black fill.

## Spacing scale

_None found in source._

Grid data: one-column grid with `364px` section width and `0px` gutter; one row with `854px` section height and `0px` gutter, aligned stretch.

## Radius scale

- `0px`: groups and full-screen structural elements.
- `8px`: success-state return button.
- `12px`: camera review rectangle.
- `32px`: iPhone status-bar time group.
- `100px`: bottom indicator bar.

## Elevation & effects

_None found in source._

- No local effect styles found.
- Camera screens use dark overlay rectangles over the image surface.
- Camera capture and review surfaces use a full-screen image background.
- The bottom indicator is `134x5.03px`, white on camera screens and black on white success screens.

## Components

Allowed component families: `Component 1`, `vuesax`.

### Component 1

- Size: `24x24px`.
- Fill: #FFFFFF.
- Variants:
  - Property 1: `Frame 51/Iconly`
  - Property 2: `Light`
  - Property 3: `Tick Square`

### vuesax

| Component | Size | Fill |
|---|---:|---|
| `vuesax/linear/gallery-add` | 18x18px | #FFFFFF |
| `vuesax/linear/camera` | 18x18px | #FFFFFF |
| `vuesax/bold/edit-2` | 13x13px | #FFFFFF |
| `vuesax/linear/receipt-2` | 20x20px | #FFFFFF |
| `vuesax/linear/dollar-circle` | 24x24px | #FFFFFF |
| `vuesax/linear/close-square` | 32x32px | #FF2828 |
| `vuesax/linear/login` | 24x24px | #FFFFFF |
| `vuesax/linear/eye` | 24x24px | #FFFFFF |
| `vuesax/linear/eye-slash` | 24x24px | #FFFFFF |
| `vuesax/linear/user` | 30.52x30.52px | #FFFFFF |
| `vuesax/bold/camera` | 24x24px | #FFFFFF |
| `vuesax/linear/arrow-left` | 24x24px | #FFFFFF |
| `vuesax/linear/clipboard-text` | 30x30px | #FFFFFF |
| `vuesax/linear/message-add` | 34x33px | #FFFFFF |
| `vuesax/linear/clock` | 34x33px | #FFFFFF |
| `vuesax/linear/document` | 34x33px | Not specified |
| `vuesax/linear/profile-circle` | 34x33px | #FFFFFF |
| `vuesax/linear/people` | 34x33px | #FFFFFF |
| `vuesax/linear/add` | 33.94x33.94px | #FFFFFF |
| `vuesax/linear/forward-5-seconds` | 26x26px | #FFFFFF |
| `vuesax/linear/flash-slash` | 26x26px | #FFFFFF |
| `vuesax/linear/key` | 12x12px | #808080 |
| `vuesax/linear/add-circle` | 22x22px | #FFFFFF |
| `vuesax/linear/link-circle` | 22x22px | #FFFFFF |
| `vuesax/linear/receipt-item` | 24x24px | #FFFFFF |
| `vuesax/bold/setting-2` | 24x24px | #FFFFFF |
| `vuesax/bold/close-circle` | 18x18px | #FFFFFF |
| `vuesax/bold/people` | 20x20px | #FFFFFF |
| `vuesax/bold/frame` | 16x16px | #FFFFFF |
| `vuesax/bold/dollar-circle` | 16x16px | #FFFFFF |
| `vuesax/linear/more-circle` | 21x21px | #FFFFFF |
| `vuesax/linear/search-normal` | 22x22px | #FFFFFF |
| `vuesax/linear/tag-user` | 25x25px | #FFFFFF |
| `vuesax/linear/profile` | 25x25px | #FFFFFF |
| `vuesax/linear/note-text` | 25x25px | #7B8BB2 |

## Screen patterns

### Camera capture

- Viewport: `375x812px`.
- Full-screen image background.
- Camera controls include:
  - `vuesax/linear/add`, approximately `40.03x40.03px`, white.
  - `vuesax/linear/flash-slash`, `26x26px`, white.
  - `vuesax/linear/forward-5-seconds`, `26x26px`, white.
- Dark top and bottom overlays are present.
- Camera status bar is `375x44px` with white status-bar content.
- Bottom indicator: `134x5.03px`, white, `100px` radius.

### Camera review

- Viewport: `375x812px`.
- Full-screen image background with dark top and bottom regions.
- Review actions:
  - `Chụp lại`
  - `Sử dụng`
- Both labels use Inter Medium, `16px`, white.
- Bottom indicator remains `134x5.03px`, white.

### Success state

- White `375x812px` surface.
- Black status-bar time and bottom indicator.
- Large centered circular illustration, approximately `193x193px`.
- Blue variant uses #376AED and source blue tones; alternate neutral variant uses #585858.
- Return button:
  - Size: `298x47px`.
  - Radius: `8px`.
  - Fill: #376AED or #585858.
  - Stroke: #000000, `1.5px`.
  - Label: `Quay về trang chủ`, white, SF Pro Text Semibold, `14px`.
- Success headings use black, SF Pro Text Bold, `24px`.
- Observed headings:
  - `Thanh toán thành công`
  - `Gửi nhắc nhở thành công`

## Notes for implementers

- Use only the documented color values; prioritize the highest-usage raw colors when no semantic token is specified.
- Keep camera controls white and place them over the image or dark overlay.
- Preserve the `375x812px` mobile composition and the `375x44px` status-bar region.
- Use the defined SF / Caption, SF / Body, and SF / Headline styles for reusable text; raw typography indicates additional legacy or screen-specific usage.
- Do not infer spacing, elevation, motion, or unlisted component behavior; those tokens were not found.
- The extraction contains repeated `Tạo Nhóm` screens and a truncated raw dump; treat repeated success-state structures as one reusable pattern with color and heading variants.
