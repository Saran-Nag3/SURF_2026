---
name: udemy-main-page-app-community
source: Udemy Main Page App (Community)
kind: design-system-context
---

# udemy - Design System

## Overview

Mobile Udemy learning interface extracted from the “Components,” “Design,” and “Mockup and Thumb” pages.

- Primary viewport: 390px wide.
- Design screen: iPhone 14 frame, 390x844px, white background, 30px frame radius.
- Visual emphasis: course discovery, recommendation carousels, navigation, ratings, and learning categories.
- No local variable collections, text styles, spacing variables, radius variables, motion tokens, grid styles, or effect styles were found.

## Design language

- Mobile-first layout with fixed-width components sized for a 390px viewport.
- White navigation and status surfaces contrasted with a purple promotional bar.
- Black primary text, gray supporting text, purple section headings, and yellow ratings.
- Course recommendations use compact horizontal cards with image placeholders, title, instructor, rating, review count, and price.
- Navigation uses vertically stacked 30px icons with compact 10px labels.
- Typography uses Roboto across the interface, with SF Pro Text Semibold for the status bar.
- The source contains Turkish UI labels, including “Ara,” “Öğrenim İçeriğim,” “Wishlist,” “Hesap,” and “Öne Çıkanlar.”

## Color palette

Ranked by raw usage count where available:

| Color | Usage | Role |
|---|---:|---|
| `#FFC700` | 96 | Course rating stars |
| `#000000` | 70 | Primary text and dark icon content |
| `#929292` | 38 | Secondary text and review metadata |
| `#D9D9D9` | 21 | Image and content placeholders |
| `#BBBBBB` | 20 | Inactive navigation icon content |
| `#C39902` | 19 | Numeric course rating |
| `#FFFFFF` | 14 | White surfaces, text, and icon containers |
| `#A5A5A5` | 9 | Raw color present in extraction |
| `#5624D0` | 5 | Promotional bar and section headings |
| `#F8F8F8` | 3 | Close icon content |
| `#F5F5F5` | 1 token use | Light background token |
| `#0F0F0F` | 1 token use | Dark background token |
| `#00000040` | — | Navbar drop shadow |

Named color tokens:

- `colors/backgrounds/light`: `#F5F5F5`
- `colors/backgrounds/dark`: `#0F0F0F`

## Type scale

No local text styles were found. Observed type styles:

| Size | Family | Weight/style | Usage |
|---:|---|---|---|
| 200px | Roboto | Bold | Raw typography value |
| 40px | Roboto | Bold | Main hero heading |
| 20px | Roboto | Bold | Section headings |
| 18px | Roboto | Light | Search or learning prompt text |
| 17px | SF Pro Text | Semibold | Status bar time |
| 13px | Roboto | Bold | Course price |
| 13px | Roboto | Light | Promotional sentence |
| 11px | Roboto | Medium | Course title |
| 11px | Roboto | Medium | Raw typography value |
| 10px | Roboto | Bold | Navbar labels and raw typography value |
| 10px | Roboto | Regular | Instructor and rating metadata |
| 10px | Roboto | Semibold | Numeric rating |
| 8px | Roboto | Regular | Review count |

## Spacing scale

No spacing variables were found. Observed fixed spacing values:

- `3px`: vertical gap inside `suggested`.
- `5px`: navbar vertical padding.
- `8px`: navbar horizontal padding.
- `10px`: `menu-bar` gap; search prompt frame padding; navbar horizontal padding is also 8px.
- `12px`: menu bar horizontal padding; status bar right padding.
- `13px`: menu bar vertical padding.
- `20px`: promotional bar horizontal padding and gap; course carousel gap.
- `45px`: navbar item gap.
- `50px`: status bar left padding.
- `78px`: status bar gap.
- `0px`: several component paddings and the `starsandcomment` gap.

Observed component padding:

- `StatusBar`: `12px 20px 12px 50px`.
- `menu-bar-sentences`: `13px 12px 13px 12px`.
- `menu-bar`: `13px 12px 13px 12px`.
- `navbar`: `5px 8px 5px 8px`.
- `suggested`: `0px` on all sides.
- Search prompt frame: `10px` on all sides.

## Radius scale

Observed radii:

- `5px`: course image placeholder and iPhone-status-bar component-set frame.
- `10px`: status bar home indicator.
- `30px`: iPhone 14 design frame.

## Elevation & effects

- `navbar` uses a drop shadow:
  - Type: `drop_shadow`
  - Offset: `5px 6px`
  - Color: `#00000040`
  - The extraction describes the effect as `1px` with the listed offset and color.
- No local effect styles were found beyond this navbar effect.
- No motion tokens were found.

## Components

Allowed component families and specifications:

- **StatusBar**
  - Component-set dimensions: `430x73px`.
  - Default instance: `390x44px`.
  - Horizontal layout, `space_between/center`.
  - Padding: `12px 20px 12px 50px`.
  - Gap: `78px`.
  - Fill: `#FFFFFF`.
  - Time text: SF Pro Text Semibold, `17px`.
  - Default time content: `9:41`.

- **iPhone-status-bar(lower)**
  - Component-set dimensions: `798x48px`.
  - Variant dimensions: `375x32px`.
  - Variants: `Dark-mode=false` and `Dark-mode=true`.
  - Light background variant: `#F5F5F5`.
  - Home indicator: `134x5px`, radius `10px`.
  - Light variant indicator fill: `#000000`.
  - Dark variant background and indicator fill: `#0F0F0F` and `#FFFFFF`.

- **menu-bar-sentences**
  - Size: `390x42px`.
  - Horizontal layout, `space_between/center`.
  - Padding: `13px 12px 13px 12px`.
  - Gap: `20px`.
  - Fill: `#5624D0`.
  - Text: Roboto Light, `13px`, `#FFFFFF`.
  - Includes `times-icon`.

- **menu-bar**
  - Size: `390x50px`.
  - Horizontal layout, `max/center`.
  - Padding: `13px 12px 13px 12px`.
  - Gap: `10px`.
  - Fill: `#FFFFFF`.
  - Includes `basket-icon`.

- **navbar**
  - Size: `390x54px`.
  - Horizontal layout, `space_between/min`.
  - Padding: `5px 8px 5px 8px`.
  - Gap: `45px`.
  - Fill: `#FFFFFF`.
  - Uses the specified drop shadow.
  - Navigation labels use Roboto Bold, `10px`.
  - Items: `material-symbols:star-rounded`, `mingcute:search-3-line`, `material-symbols:play-circle-outline-rounded`, `ph:heart`, `mdi:account-circle-outline`.

- **mingcute:search-3-line**
  - Size: `30x30px`.
  - Outer fill: `#FFFFFF`.
  - Inner icon content includes `#BBBBBB`.

- **material-symbols:star-rounded**
  - Size: `30x30px`.
  - Outer fill: `#FFFFFF`.
  - Star content: `#000000`.

- **material-symbols:play-circle-outline-rounded**
  - Size: `30x30px`.
  - Fill: `#FFFFFF`.
  - Icon content: `#BBBBBB`.

- **ph:heart**
  - Size: `30x30px`.
  - Fill: `#FFFFFF`.
  - Icon content: `#BBBBBB`.

- **mdi:account-circle-outline**
  - Size: `30x30px`.
  - Fill: `#FFFFFF`.
  - Icon content: `#BBBBBB`.

- **basket-icon**
  - Size: `24x24px`.
  - Contains a decorative basket-cart group.

- **times-icon**
  - Size: `16x16px`.
  - Close-mark content: `#F8F8F8`.

- **picture**
  - Size: `390x200px`.
  - Placeholder fill: `#D9D9D9`.

- **stars**
  - Size: `16x16px`.
  - Outer fill: `#FFFFFF`.
  - Star content: `#FFC700`.

- **suggested**
  - Size: `130x158px`.
  - Vertical layout.
  - Gap: `3px`.
  - Padding: `0px`.
  - Course image: `130x70px`, radius `5px`, fill `#D9D9D9`.
  - Course title: Roboto Medium, `11px`, `#000000`.
  - Instructor: Roboto Regular, `10px`, `#929292`.
  - Rating: Roboto Semibold, `10px`, `#C39902`.
  - Review count: Roboto Regular, `8px`, `#929292`.
  - Price: Roboto Bold, `13px`, `#000000`.
  - Rating row: `123x16px`, with five `stars` instances.
  - Five stars occupy a `68x16px` group.
  - Example content: `4.5`, `(by 13.657)`, and `₺ 429,29`.

## Screen patterns

- **iPhone 14 home/discovery screen**
  - Frame: `390x844px`, radius `30px`, fill `#FFFFFF`.
  - Promotional `menu-bar-sentences` at the top.
  - Full-width `picture` or image placeholder: `390x200px`, fill `#D9D9D9`.
  - Large hero heading: “Size uyum sağlayan öğrenim deneyimi,” Roboto Bold, `40px`, `#000000`.
  - Purple section headings, Roboto Bold, `20px`:
    - “Sizin için önerilenler”
    - “Web Tasarımcılar İçin Popüler”
    - “Yazılım Test Mühendisleri İçin Popüler”
  - Learning prompt frame: `288x46px`, `10px` padding, `10px` gap.
  - Prompt text: Roboto Light, `18px`.
  - Course sections use horizontal rows sized `368x158px`.
  - Horizontal course gap: `20px`.
  - Each row repeats `suggested` cards at `130x158px`.

- **Course recommendation card**
  - Use a `130x70px` image placeholder above course metadata.
  - Stack title, instructor, rating/review row, and price vertically.
  - Use five yellow `stars` instances for the rating display.

- **Bottom navigation**
  - Use a `390x54px` white `navbar`.
  - Stack each icon above its label.
  - Active featured item uses black star content and black label.
  - Other navigation icons and labels use `#BBBBBB`.

- **Promotional message bar**
  - Use a purple `390x42px` bar.
  - Place the sentence and close icon in a horizontal `space_between/center` layout.
  - Use white sentence text and `#F8F8F8` close content.

## Notes for implementers

- Treat `390px` as the primary mobile layout width.
- Preserve the supplied fixed component dimensions; do not substitute responsive dimensions unless the target runtime requires it.
- Use only the extracted colors listed in the palette.
- Use `#D9D9D9` for image and course-card placeholders where imagery is not supplied.
- Keep course rows horizontal with `20px` gaps and `130x158px` cards.
- Preserve the five-star rating structure and the distinct colors for star graphics, numeric ratings, and review metadata.
- Keep navigation labels compact at Roboto Bold `10px`.
- The extraction contains repeated `suggested` instances; implement them as reusable instances rather than separate visual definitions.
- No additional typography, spacing, radius, motion, grid, or component variants are defined beyond the values documented here.
