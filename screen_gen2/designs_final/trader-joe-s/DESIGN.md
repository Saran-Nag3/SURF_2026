---
name: trader-joe-s-tomato-unofficial-design-system-ui-kit-community
source: Trader Joe's Tomato Unofficial Design System UI Kit (Community)
kind: design-system-context
---

# trader-joe-s - Design System

## Overview

Unofficial Trader Joe’s Tomato design-system UI kit covering the Cover Page, Foundations, Elements, and Components pages. The system combines editorial typography, warm food-inspired colors, illustrated imagery, recipe-specific styling, article and product content cards, and responsive site chrome.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Editorial and illustrative visual direction.
- Primary display type uses Freight TextBold.
- Interface and body content primarily uses Cerebri Sans.
- Recipe content uses Kalam Regular.
- Supporting raw styles also include Inter, Public Sans, Open Sans, Freckle Face, and Freight Text variants.
- Warm palette centered on red, brown, ivory, beige, green, mustard, and neutral grays.
- Large editorial hero banners use 1440px-wide layouts.
- Content is organized through article, product, podcast, recipe, subscribe, and section-header patterns.
- Buttons and tags use outlined brown treatments and compact fixed dimensions.
- Illustrations and icons are prominent in navigation, cards, banners, and calls to action.

## Color palette

Ranked by raw usage where counts were provided. Near-identical semantic references are consolidated.

| Color | Usage | References |
|---|---:|---|
| #000000 | 222 | Raw color |
| #2C2C2C | 171 | Raw color; dark neutral |
| #FFFFFF | 129 | Primary white, secondary brown token value, grayscale white |
| #A5684D | 76 | Brown accent |
| #AF0006 | 76 | Primary red; cover background |
| #9747FF | 50 | Raw color |
| #C4C4C4 | 42 | Mid gray |
| #834427 | 33 | Dark brown |
| #D8D8D8 | 33 | Card and product-card stroke |
| #00000033 | 28 | Raw translucent black |
| #0761C280 | 28 | Raw translucent blue |
| #CA272D | 28 | Raw red |
| #D9D9D9 | 28 | Text gray |
| #445E83 | 18 | Raw blue-gray |
| #6C757D | 16 | Raw gray |
| #343330 | 13 | Raw dark neutral |
| #D9CEC1 | 10 | Warm neutral |
| #212529 | 9 | Raw dark neutral |
| #2C2C2C33 | 9 | Translucent dark neutral |
| #4CAF50 | 8 | Raw green |
| #555555 | 8 | Raw gray |
| #FAFBF8 | 8 | Podcast card background |
| #F6F7F2 | 7 | Raw off-white |
| #0F0F0F | 6 | Raw near-black |
| #F30000 | 6 | Raw red |

Additional semantic colors without raw usage counts:

- #E4E9DB — background green; primary recipe-card background.
- #EAE3D8 — background beige.
- #E8BF91 — background mustard.
- #F2F2F2 — background gray.
- #1A1E21 — text black.
- #22272B — dark text.
- #595959 — alternate text.
- #828282 — gray 3.
- #E20F14 — alert-error red.
- #F5F6F9 — table background.
- #F8F8F3 — button ivory.
- #BA2327 — dark red.
- #0761C2 — mid blue.

## Type scale

### Heading typography

- Heading 1 — Freight TextBold, 700, 48px / 60px, tracking 0px.
- Heading 2 — Freight TextBold, 700, 35px / 78px, tracking 0px.
- Heading 3 — Freight TextBold, 700, 22px / 27px, tracking 0px.
- Heading 4 — Freight TextBold, 700, 20px / 20px, tracking 0px.
- Heading 6 — Freight TextBold, 700, 17px / 24px, tracking 0px.
- H5 raw style — Freight TextBold, 19px.
- H7 raw style — Freight TextMedium, 17px.
- H8 raw style — Freight TextBook, 17px.
- Heading Font/Heading 1 component text — Freight TextBold, 48px.
- Heading Font/Heading 2 component text — Freight TextBold, 35px.
- Heading Font/Heading 3 component text — Freight TextBold, 22px.
- Heading Font/Heading 4 component text — Freight TextBold, 20px.

### Content typography

- Body 1 — Cerebri Sans Regular, 400, 16px / 24px, tracking 0px.
- Body 1 Bold — Cerebri Sans Bold, 700, 16px / 24px, tracking 0px.
- Body 2 — Cerebri Sans Regular, 400, 14px / 18px, tracking 0px.
- Body 2 Bold — Cerebri Sans Bold, 700, 14px / 18px, tracking 0px.
- Section Title — Cerebri Sans Bold, 700, 17px / 22px, tracking 0px.
- Button Text — Cerebri Sans Bold, 700, 16px / 14px, tracking 0px.
- Article Category — 14px / 18px; Cerebri Sans Regular or Inter Regular.
- Large screens body — Public Sans Regular, 400, 16px / 24px, for screens ≥ 992px.
- Text Link — Cerebri Sans Regular, 14px.
- Raw supporting styles include Inter at 12px, 14px, 20px, 24px, 32px, 40px, 48px, and 64px; Public Sans at 16px; Open Sans at 16px; and Cerebri Sans at 14px, 16px, 32px, and 40px.

### Recipe typography

- Recipe Body — Kalam Regular, 400, 17px / 27px, tracking 0px.
- Recipe Heading 3 — Kalam Regular, 400, 22px / 35px, tracking 0px.
- Recipe Heading 2 — Kalam Regular, 400, 27px / 40px, tracking 0px.

## Spacing scale

_None found in source._

Observed component spacing values include 0px, 1px, 3px, 4px, 6px, 8px, 10px, 12px, 14px, 16px, 20px, 21px, 33px, and 39px, but no spacing token system was defined.

## Radius scale

_None found in source._

Observed component radii:

- 18px — Button/Next.
- 22.5px — Button/Play.
- 50px — Button/Tags and TextLink/Tag(filter).

## Elevation & effects

- Drop shadow style: offset 0 2px, color #00000026.
- Button/Primary: drop shadow using #00000026 with component extraction offset 10 10.
- Button/Secondary: drop shadow offset 3 3 using #00000026.
- Button/Next: drop shadow offset 3 3 using #2C2C2C33.
- Button/Play: drop shadow offset 5 5 using #2C2C2C33.
- No motion tokens were found.

## Components

Only use the following component families.

### Foundations and utility

- **Icons** — 32x32px, white fill, Active: no/yes. Named icons include Printer, RSS, Spotify, Pinterest, Instagram, Podcast, Youtube, ShoppingList, Trash, X, Hamburger, Search, Pin, Download, ArrowRight, and ArrowLeft. Forward and Rewind are 50x32px with Inter Bold 12px text.
- **Heading Font** — H1 through H8 text specimens using the heading styles defined above.
- **Content Font** — body, section title, button, article-category, and link text specimens.
- **Images** — banners, illustrations, decorative objects, and food-related imagery. Banner sizes include 1440x519px and 1440x374px; common illustration sizes include 60x60px, 64x64px, and 80x80px.
- **List** — 84x138px, Body 2 Bold text, Bold: No/Yes.
- **TextLink** — product link, tag/filter, CTA, icon link, and title link variants.
- **Table** — Columns 431x380px, Example 375x319px, and Rows 375x214px; table surfaces use #F5F6F9.
- **Text input** — 616x144px container with input-width variants: 70px, 120px, 288px, 400px, 508px, and 616px. Supports hint text and error-message variants.
- **Paragraph 1** — 522x120px, Body 1.
- **Paragraph 2** — 492.97x120px, Body 2.
- **Component 3** — 210.01x24px, Cerebri Sans SemiBold or Body 1 Bold at 16px.

### Buttons and links

- **Button** — Primary 137x40px with 1px #A5684D stroke, Secondary 146x36px, Compass/Gramaphone/Fork 60x60px, Banana 64x64px, Tags 86x30px with 50px radius, Next 36x36px with 18px radius, and Play 45x45px with 22.5px radius. Use provided hover, click, active, icon, and default variants only.
- **TextLink** — Product link 52x18px; Tag(filter) 84x30px with 50px radius and 1px #A5684D stroke; CTA 56x18px; WithIcon 97x26px with 12px gap; Title 82x78px. Use the supplied state variants.

### Content cards

- **Article Card Vertical** — 498x556px, white fill, 1px #2C2C2C stroke; Image: No/Yes.
- **Article Card Horizontal 1** — 1017.97x325px; Image, Category, and Description variants.
- **Gallery Article Card** — 597.33x526px, 39px gap, centered; Image: Yes; Pagination: No/Yes.
- **Product Category Card** — 322.63x253px, 1px #D8D8D8 stroke; Illustration, Footer, and Rest/Hover/On Click variants.
- **Product card** — 226.33x393px, 1px #D8D8D8 stroke; Image, Body, and Footer variants.
- **Podcast card Horizontal** — 863.33x158px, #FAFBF8 fill, 1px #D8D8D8 stroke, 21px vertical and 33px horizontal padding; Large/Small and Play Button variants.
- **Podcast Card Vertical** — 341.33x463.72px; Illustration, Body Part, and Button variants.
- **Recipe Card** — Primary 288x451px with #E4E9DB fill; Secondary 188x345px with white fill. Supports image, decoration, recipe brief, state, and Gray/Light Blue/Light Green color variants.
- **Subscribe Card** — Primary 700x656px; Secondary 736x523px. Supports illustration, decoration, and heading variants.

### Section and page structure

- **Section Header** — 597.33x128px; Short, Long, and Illustration variants.
- **Section Header with Gallery Article Card** — 597.33x543px; Illustration: No/Yes.
- **Section Header with Horizontal Article Card** — 1024x405px; Illustration: No/Yes.
- **Section Header with Horizontal Article Card 3** — 512x460px; Stack: No/Yes.
- **Announcement** — 341.33x147px; Stack: no/yes.
- **Header** — 1440x130px, vertical layout.
- **HeroBanner**:
  - Interior page hero with search bar — 1440x374px.
  - Interior page hero with description — 1440x374px.
  - Homepage centered layout — 1440x519px.
  - Homepage two-column layout — 1440x520px.
- **Bread Crumb** — 296x18px, horizontal layout.
- **Footer** — 1440x645px, vertical layout.
- **Sub-navigation Bar** — 210x585px, vertical layout.

## Screen patterns

- **Cover Page** — 1920x1080px cover composition with #AF0006 background and repeated imagery.
- **Foundations** — foundational color, typography, image, and component references; includes 1440px-wide banner imagery and illustration samples.
- **Elements** — reusable icons, buttons, links, tables, inputs, paragraphs, lists, and typography specimens.
- **Components** — composed editorial, product, podcast, recipe, subscribe, navigation, hero, header, footer, and section-header patterns.
- **Homepage hero** — use a 1440x519px centered layout or 1440x520px two-column layout.
- **Interior page hero** — use a 1440x374px banner with either a search bar or description.
- **Editorial content sections** — pair Section Header variants with horizontal, gallery, or vertical article-card patterns.
- **Commerce and recipe sections** — use Product Category Card, Product card, Recipe Card, and related section-header patterns.
- **Site chrome** — use Header, Announcement, Bread Crumb, Sub-navigation Bar, and Footer as separate structural regions.

## Notes for implementers

- Prefer named component families and their listed variants over creating new component types.
- Use only the documented color values; semantic names may map to the same concrete color, especially #FFFFFF and #282828.
- Use Freight TextBold for editorial headings, Cerebri Sans for interface and general content, and Kalam for recipe-specific content.
- Preserve the documented fixed dimensions when reproducing component specimens.
- Do not assume a spacing, radius, grid, or motion token system; these were not defined.
- Use #D8D8D8 for product and podcast card borders and #A5684D for outlined button and tag borders where specified.
- Use #F5F6F9 for table surfaces and #FAFBF8 for horizontal podcast cards.
- Use the supplied active, hover, click, pressing, state, image, illustration, footer, body, pagination, and stack variants rather than inventing additional states.
