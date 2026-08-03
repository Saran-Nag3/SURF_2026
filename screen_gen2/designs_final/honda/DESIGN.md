---
name: interior-website-design-services-page-community
source: Interior Website Design Services Page (Community)
kind: design-system-context
---

# honda - Design System

## Overview

- Source: Interior Website Design Services Page (Community)
- Source page: Page 1
- Primary page: Services, sized 1600×3374px.
- Additional screens/patterns: Thumbnail, Services header, breadcrumb, testimonials, and footer.
- No local variables, components, component families, grid styles, motion tokens, or effect styles were found.

## Design language

- Interior-design editorial aesthetic combining large Gotham headlines, spacious layouts, architectural imagery, and warm accent colors.
- Typography is predominantly Gotham, with bold display headings and lighter paragraph copy.
- Navigation and body content use dark text with reduced-opacity supporting text.
- Image-led sections use cards, layered overlays, rounded corners, and testimonial treatments.
- Brand wordmark: `InTior.`

## Color palette

Ranked by reported usage where available:

| Role | Color | Usage |
|---|---|---:|
| White | `#FFFFFF` | 29 style uses; 6 raw uses |
| Black | `#1F2730` | 21 style uses |
| Dark navy | `#061936` | Token; usage not reported |
| Paragraph black | `#000000` | 4 raw uses |
| Paragraph light surface | `#FDFEFF` | Token; usage not reported |
| Primary button/link blue | `#1473E2` | 4 style uses |
| Caption orange / accent | `#F28F1A` | 4 style uses |
| Testimonial lime | `#E0FF23` | 3 raw uses |
| Light green | `#28AB13` | 1 style use |
| Cyan | `#28A8EA` | 3 raw uses |

Additional source color names `Paragraph` and `Parpel` have no defined color values.

## Type scale

All tracking values are `0px` unless noted.

| Role | Typeface | Weight | Size | Line height |
|---|---|---:|---:|---:|
| Title | Gotham Bold | 700 | 57px | 100% |
| Subtitle | Gotham Bold | 700 | 40px | 104.17% |
| Subheading | Gotham Medium | 500 | 23px | 120.83% |
| Pragraph Bold | Gotham Medium | 500 | 20px | 133.33% |
| Paragraph light | Gotham Book | 400 | 18px | 133.33% |
| Raw body text | Gotham Book | — | 16px | — |

Additional type styles observed in the source:

- Gotham Medium, 20px, used for testimonial eyebrow text.
- Gotham Medium, 18px, used for active navigation and contact text.
- Gotham Bold, 18px, used for testimonial names.
- Gotham Book, 14px, used for supporting testimonial and footer text.
- Gotham Light, 14px, used for copyright text.
- Gotham BookItalic, 18px, used for testimonial quotations.
- Open Sans Regular, 10px, used for the copyright symbol.

Hierarchy: `Title` → `Subtitle` → `Subheading` → `Pragraph Bold` → `Paragraph light` → raw 16px body text.

## Spacing scale

No spacing variables were found.

Observed layout gaps and padding values:

- `2px`, `8px`, `10px`, `12px`, `14px`, `15px`, `20px`, `24px`, `28px`, `30px`, `40px`, `50px`.
- Header contact control padding: `14px 50px 14px 50px`.
- Services hero content gap: `30px`.
- Hero heading/content gap: `24px`.
- Service link row gap: `40px`.
- Icon-to-label gap: `8px`.
- Testimonial author block gap: `20px`.
- Testimonial name/subtitle gap: `2px`.

## Radius scale

No radius variables were found.

Observed corner radii:

- `5px`: header contact control.
- `10px`: service cards and card image tops.
- `20px`: feature image.
- Asymmetric image radii: `100/10/150/10px` and `190.71/10/10/10px`.

## Elevation & effects

- Service cards use a drop shadow with `14px` blur and offset `0 4px`.
- Testimonial overlay uses `20px` background blur.
- Testimonial image overlay uses `25%` opacity.
- Supporting navigation and footer text commonly uses `80%` opacity.
- Testimonial quotation text uses `80%` opacity.
- Header contact control uses a `1.5px` stroke in `#1473E2`.
- Testimonial accent divider uses a `3px` stroke in `#E0FF23`.
- Footer separator uses a `1px` stroke in `#FFFFFF` at `20%` opacity.

## Components

_None found in source._

## Screen patterns

- **Thumbnail:** 1200×900px visual cover composition using multiple large image rectangles.
- **Services page:** 1600×3374px page with an 800px image-led hero, editorial services content, experience section, service cards, image composition, testimonials, and footer.
- **Header:** 1400×57px navigation bar. Brand wordmark uses `Subtitle` styling and `#F28F1A`; active `Services` navigation uses `#1473E2`; contact action is a rounded `5px` outlined control.
- **Hero:** Large `Title` heading, supporting bold and light paragraph text, followed by four service links: Consulting, Concept Design, Construction, and Design Development. Each link includes a 20×20px icon.
- **Experience section:** `Subtitle` heading, supporting `Paragraph light` copy, one 752×375px image, and three 364×450px cards. Cards use 10px radius, 255px image areas, white surfaces, and drop shadows.
- **Breadcrumb:** 141×32px pattern with an icon, chevron, and active `Services` label in `#1473E2`.
- **Testimonials:** 1600×640px section with orange eyebrow text, `Subtitle` heading, full-width image background, dark overlay, blurred panel, lime divider, client identity, and italic quotation.
- **Footer:** 1600×572px dark section with useful links, menu links, address/contact information, payment methods, online connection links, brand wordmark, copyright, and a low-opacity horizontal separator.

## Notes for implementers

- Use only the documented palette values; prioritize `#FFFFFF`, `#1F2730`, and `#1473E2` for primary interface structure.
- Preserve the strong display hierarchy: 57px title, 40px subtitle, and 23px subheading.
- Use Gotham consistently where available. Keep body copy lighter than headings and use `80%` opacity for supporting navigation or secondary text where specified.
- Treat service cards as white elevated surfaces with 10px radius, image-led tops, and a 14px drop shadow.
- Keep the orange accent for branding and testimonial labels; use lime specifically for testimonial quotation marks and divider accents.
- Preserve the image-first composition and asymmetric image radii in editorial sections.
- No reusable component family or component geometry was extracted; implement repeated patterns such as service cards, navigation links, and footer link groups consistently.
