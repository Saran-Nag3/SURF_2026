---
name: jake-portfolio-website-theme-for-hubspot-cms-community
source: Jake Portfolio - Website Theme for HubSpot CMS (Community)
kind: design-system-context
---

# hubspot - Design System

## Overview

Portfolio website theme for HubSpot CMS, shown across desktop and mobile wireframes. The visual system uses a white base, dark navy headings and navigation, blue actions and links, Source Sans Pro for interface and heading text, and Montserrat for descriptive body copy.

Primary screen patterns:
- Portfolio homepage with responsive navigation, portfolio image grid, article listings, introduction panel, and footer.
- Portfolio detail page with project metadata, imagery, content sections, comments, and form fields.
- Mobile homepage at `375px` wide and desktop layouts at `1440px` wide.

## Design language

- Minimal, editorial portfolio presentation with generous white surfaces.
- Dark navy `#003062` is used for brand headings, active navigation, labels, and icons.
- Bright blue `#007CFF` indicates links and actions.
- Body copy commonly uses semi-transparent black `#000000CC`.
- Portfolio imagery is displayed in rectangular masked tiles with light gray `#E2E3EA` image backdrops.
- Navigation is horizontal on desktop and represented by a menu icon on mobile.
- Typography combines Source Sans Pro for headings, navigation, metadata, labels, and controls with Montserrat for descriptive paragraphs.
- Components use square corners; no radius tokens were found.

## Color palette

Colors ranked by usage:

| Color | Usage count | Typical use |
|---|---:|---|
| `#000000CC` | 38 | Body copy, metadata, supporting text |
| `#003062` | 29 | Brand title, headings, active navigation, labels, icons |
| `#E2E3EA` | 28 | Image placeholders and input borders |
| `#FFFFFF` | 24 | Page, component, button, input, and card surfaces |
| `#000000` | 21 | Inactive navigation and form labels |
| `#007CFF` | 21 | Links, action text, button fills, and button borders |
| `#00000066` | 5 | Device viewport marker lines |
| `#63707D` | 5 | Source color present in extraction; no mapped usage was identified |
| `#00306233` | 4 | Portfolio tile overlays |
| `#00000080` | 3 | Footer divider lines |
| `#D9D9D9` | 3 | Circular profile-image placeholder |
| `#F7F9FC` | 3 | Introduction/about panel background |

## Type scale

### Font families

- `Source Sans Pro`
- `Montserrat`

### Source Sans Pro

| Size | Weight/style | Usage |
|---:|---|---|
| `42px` | Bold | Main “Jake Portfolio” brand heading |
| `38px` | Bold | Portfolio detail title |
| `28px` | Bold | Article titles and section headings |
| `22px` | Bold | Portfolio tile title |
| `20px` | Bold | Source typography token |
| `18px` | Bold | Desktop navigation |
| `16px` | Bold | Links and supporting headings |
| `16px` | SemiBold | Buttons and form labels |
| `16px` | Regular | Body copy, metadata, footer text, table values |
| `14px` | Regular | Source typography token |

### Montserrat

| Size | Weight/style | Usage |
|---:|---|---|
| `14px` | Regular | Introductory and portfolio-detail descriptive copy |

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles or shadows were found.
- Portfolio image tiles use `#E2E3EA` as a backdrop.
- Featured portfolio tiles use a `#00306233` overlay.
- Standard button border: `#007CFF`, `1px`.
- Primary button: `161x40px`, fill `#007CFF`, border `#007CFF`, label `Source Sans Pro SemiBold`, `16px`, white text.
- Secondary outlined button: `95x44px`, fill `#FFFFFF`, border `#007CFF`, `1px`, label `Source Sans Pro SemiBold`, `16px`, blue text.
- Form inputs use `#FFFFFF` fill with `#E2E3EA`, `1px` borders.
- Footer divider uses `#00000080`, `1px`.

## Components

Only the extracted component families `Component 1` and `Component 2` are available.

### Component 1

- Size: `1289x44px`
- Fill: `#FFFFFF`
- Contains `Source Sans Pro Regular`, `16px` text.
- Desktop footer pattern includes “Bootstrap Creative”, “Copyright © 2023”, and a `1280x1px` divider using `#00000080`.

### Component 2

- Size: `1264x59px`
- Fill: `#FFFFFF`
- Desktop header/navigation pattern.
- Brand title: “Jake Portfolio”, `Source Sans Pro Bold`, `42px`, `#003062`.
- Brand subtitle: “website designer”, `Source Sans Pro Regular`, `16px`, `#000000CC`.
- Navigation labels use `Source Sans Pro Bold`, `18px`.
- Active “Work” uses `#003062`; inactive “About”, “Services”, “Contact”, “Style Guide”, and “Buy This Theme” use `#000000`.
- Instagram icon uses `#003062`.

### Buttons

- Outlined button: `95x44px`, white fill, `#007CFF` `1px` border, blue `Source Sans Pro SemiBold`, `16px` label.
- Filled button: `161x40px`, `#007CFF` fill and border, white `Source Sans Pro SemiBold`, `16px` label.

### Form fields

- Labels: `Source Sans Pro SemiBold`, `16px`, `#000000`.
- Standard fields: `1189x40px`, white fill, `#E2E3EA` `1px` border.
- Comment field: `1189x80px`, white fill, `#E2E3EA` `1px` border.
- Fields shown: First Name, Last Name, Email, Website, Comment.

## Screen patterns

### Homepage

- Desktop frame: `1440x1426px`, white background.
- Mobile frame: `375x3522px`, white background.
- Desktop header uses `Component 2`; mobile header shows the brand, Instagram/menu controls, and no full horizontal navigation.
- Portfolio gallery uses masked rectangular image tiles with `#E2E3EA` backdrops.
- Desktop tile widths include `209px`, `279px`, `355px`, and `410px`; tile height is `299px`.
- Mobile portfolio tiles are `330x299px`.
- Featured tile overlays use `#00306233` and white `Source Sans Pro Bold`, `22px` title text.
- Article listings use `Source Sans Pro Bold`, `28px` navy titles with `Source Sans Pro Regular`, `16px` date metadata in `#000000CC`.
- Introduction panel uses `#F7F9FC`; desktop size `627x386px`, mobile size `330x365px`.
- Introduction copy uses Montserrat Regular, `14px`, `#000000CC`; “View Experience” uses Source Sans Pro Bold, `16px`, `#007CFF`.
- Profile image is circular, `101x101px`, with `#D9D9D9` placeholder fill.
- Desktop footer uses `Component 1`; mobile footer includes copyright text and a `330x1px` divider.

### Portfolio detail page

- Desktop frame: `1440x4102px`, white background.
- Uses the desktop header and footer patterns.
- Project title uses Source Sans Pro Bold, `38px`, `#003062`.
- Descriptive sections use Montserrat Regular, `14px`, `#000000CC`.
- Project metadata is arranged as label/value rows:
  - Labels: Source Sans Pro Bold, `16px`, `#003062`.
  - Values: Source Sans Pro Regular, `16px`, `#000000CC`.
  - Shown labels: Role, Technology, Timeline, Client, URL.
  - URL value uses `#007CFF`.
- Large project imagery uses `#E2E3EA` backdrops and masked image rectangles.
- Comments heading uses Source Sans Pro Bold, `28px`, `#003062`.
- Comment form uses the extracted form field dimensions and button styles.

### Responsive image/content layouts

- Two-column desktop patterns pair descriptive text with masked imagery.
- Desktop examples include image areas `719x402px` and `598x446px`.
- A stacked detail pattern uses a `674x584px` group with `598x446px` imagery.
- Mobile layouts stack portfolio imagery, article content, and introduction content vertically.

## Notes for implementers

- Use only the extracted colors listed in the palette; preserve alpha variants where specified.
- Use `#003062` for the primary brand and heading color, and `#007CFF` for interactive links and actions.
- Use `Source Sans Pro` for navigation, headings, labels, metadata, buttons, and standard body text.
- Use `Montserrat Regular`, `14px`, for descriptive portfolio and introduction copy.
- Keep page and component surfaces white unless the pattern explicitly calls for `#F7F9FC`.
- Do not add corner rounding or shadows; no radius or effect tokens were extracted.
- Preserve the rectangular masked-image treatment and use `#E2E3EA` behind portfolio imagery.
- Keep desktop navigation horizontal and switch to the mobile menu representation at the mobile layout.
- Use the extracted component families only as `Component 1` and `Component 2`.
