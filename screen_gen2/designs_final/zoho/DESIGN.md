---
name: zoho-books-and-whatsapp-integration-feature-prototype-community
source: Zoho Books and WhatsApp Integration(Feature Prototype) (Community)
kind: design-system-context
---

# zoho - Design System

## Overview

- Figma file: Zoho Books and WhatsApp Integration(Feature Prototype) (Community)
- Figma page: Page 1
- The source is a feature prototype combining Zoho Books sharing flows with WhatsApp-style chat and community screens.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, grid styles, or component sets were found.

## Design language

- Primary typeface: Work Sans.
- The interface uses dark blue-gray text, white surfaces, pale gray interface backgrounds, WhatsApp-inspired pale green chat accents, and strong blue action controls.
- Chat surfaces use pale beige and pale green fills.
- Avatars are circular, commonly 50px within 56px circular containers, with white borders and green outline indicators.
- Layouts are desktop-sized, with primary frames at 1512x891px and a WhatsApp chat frame at 1740x1024px.
- Imagery is used extensively for backgrounds, logos, avatars, and product imagery.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Usage / role |
|---|---:|
| #FFFFFF | 403 uses; primary surface and inverse text |
| #111B21 | 160 uses; primary dark text |
| #E9EDEF | 57 uses; interface neutral |
| #54656F | 54 uses; secondary dark blue-gray |
| #EA0038 | 54 uses; destructive or missed-call accent |
| #003BD2 | 30 uses; blue accent |
| #F0F2F5 | 28 uses; interface background |
| #6B7C85 | 21 uses; secondary text |
| #CFD5D7 | 13 uses; muted avatar or neutral fill |
| #000000 | 7 uses; black text |
| #009518 | 6 uses; green accent |
| #36CE00 | 6 uses; bright green accent |
| #C6C6C6 | 6 uses; neutral gray |
| #D9D9D9 | 6 uses; disabled or translucent control base |
| #EFEAE2 | 6 uses; chat background |
| #D9FDD3 | Chat Color token; pale green chat accent |
| #D1D7DB | Color 3 token; neutral blue-gray |

Source token aliases:

- Color 3: #6B7C85 and #D1D7DB are both listed under this token in the extraction.
- Color 2: #54656F.
- Chat Color: #D9FDD3.
- Green 1: no direct value was provided.

## Type scale

Typeface: Work Sans unless otherwise noted.

| Size | Weight | Usage count |
|---:|---|---:|
| 9px | Regular | 71 |
| 14px | Regular | 117 |
| 14px | SemiBold | 42 |
| 14px | Medium | 12 |
| 16px | Regular | 40 |
| 16px | Medium | 30 |
| 20px | SemiBold | 114 |
| 20px | Regular | 28 |
| 20px | Medium | 10 |
| 25px | Regular | 3 |

Additional extracted text style:

- Helvetica Bold, 15px: used by the “New” label.

## Spacing scale

_No spacing variables found in source._

Observed layout spacing values:

- Padding: 5px, 10px, 15px, 20px, and 24px.
- Gaps: 5px, 10px, 13px, 25px, 26px, and 278px.
- Negative overlap gap: -34px for stacked participant avatars.

## Radius scale

Observed corner radii:

- 7.6px: compact “New” control.
- 10px: search bar, missed-call card, notification badge, and share controls.

## Elevation & effects

- No local effect styles or elevation tokens were found.
- Observed opacity: 60% on a 565x48px control surface.
- Observed borders and strokes are generally 1px or 2px.
- Circular avatar treatments use 2px white borders; active avatar treatments also use 2px green outline strokes.
- No shadows were extracted.

## Components

_None found in source._

## Screen patterns

- **Zoho Books prototype screens:** Desktop frames at 1512x891px with image-led layouts, white panels, sharing controls, and branded imagery.
- **New action control:** A compact 100x37px control with a 7.6px radius, white “New” label, plus icon, and supporting imagery.
- **Share-link flow:** A white panel containing visibility information, a secure URL, sharing options, a gray input-like surface, and a blue “Copy” action.
- **Contact or community list:** Repeated contact rows with Work Sans SemiBold 20px names and circular avatar groups. Avatars are commonly 50px with 2px white borders and 56px outer rings.
- **WhatsApp chat layout:** A 1740x1024px composition with a 594px white navigation column and a 1150px pale beige chat area.
- **Search and filter controls:** A 492x50px search field with 10px radius, 20px horizontal padding, search icon, and 14px Work Sans Medium placeholder; paired with a 24x24px filter icon.
- **Community list row:** A 537x47px row containing overlapping 40px participant avatars, a 20px SemiBold community name, a 16px preview line, a 14px timestamp, and a green unread-count badge.
- **Missed-call notice:** A 268x44px white card with 10px radius, 10px vertical padding, 24px horizontal padding, a red missed-call icon, and 14px body text.

## Notes for implementers

- Use only the extracted colors listed in the palette; do not introduce additional colors.
- Use Work Sans for the main interface. Preserve the extracted weights and sizes rather than interpolating a new type scale.
- Treat #FFFFFF as the dominant surface color and #111B21 as the primary text color.
- Use #F0F2F5 and #E9EDEF for neutral interface regions, #EFEAE2 for the chat background, and #D9FDD3 for pale green chat accents.
- Keep avatar groups circular, overlap participant avatars by -34px where the community pattern is used, and retain 2px white borders.
- Preserve the observed 10px radius for cards, search fields, badges, and share controls.
- Image assets are present in the source but are identified only by extraction hashes; use the corresponding source assets when available rather than substituting unverified imagery.
- The extraction contains no reusable component families or complete component geometry specifications.
