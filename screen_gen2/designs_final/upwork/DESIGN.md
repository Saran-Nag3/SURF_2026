---
name: career-upwork-ui-kit-clean-professional-design-for-consultancy-platforms-community
source: Career Upwork UI Kit – Clean & Professional Design for Consultancy Platforms (Community)
kind: design-system-context
---

# upwork - Design System

## Overview

A clean, professional consultancy platform UI kit for Career Upwork. The visual direction combines deep blue branding, white content surfaces, editorial serif headings, Poppins interface text, rounded cards, and image-led content sections.

Source pages:
- Cover Image
- Consultancy

Primary desktop canvas:
- 1440px wide

## Design language

- Use deep blue as the primary brand color, with white surfaces and dark navy footer areas.
- Pair Playfair Display for prominent editorial headings and brand wordmarks with Poppins for navigation, body copy, labels, and buttons.
- Use rounded cards and content panels, commonly with 16px, 24px, or 26px radii.
- Use large image cards for country and consultancy content.
- Use centered content containers commonly sized at 1280px wide.
- Use generous section spacing and horizontal card layouts.
- Buttons use filled blue backgrounds, white text, rounded corners, and a 2px blue stroke.
- Maintain strong contrast between white text on blue/image surfaces and dark text on white surfaces.

## Color palette

### Ranked by raw usage

| Color | Raw usage | Role / source usage |
|---|---:|---|
| `#FFFFFF` | 194 | Primary surface, card backgrounds, button text, light content areas |
| `#0000801A` | 44 | Light blue transparent background, including section labels |
| `#00000033` | 15 | Unstyled shadow/overlay color |
| `#D9D9D9` | 11 | Unstyled neutral color |
| `#00000066` | 10 | Unstyled shadow/overlay color |
| `#0A66C2` | 10 | Unstyled blue |
| `#1877F2` | 10 | Unstyled blue |
| `#3D4C5E` | 10 | Active blue and active grey token |
| `#E0E4E8` | 8 | Unstyled light neutral |
| `#FFFFFFAD` | 8 | Translucent white input background |
| `#000073` | 6 | Dark blue hero shape/background |
| `#D52B1E` | 4 | Unstyled red |
| `#000080` | 3 | Primary blue |
| `#C4C4C4` | 3 | Unstyled neutral |

### Foundation and semantic tokens

- `Foundation /Blue/Normal`: `#546881`
- `Foundation /Blue/Normal :active`: `#3D4C5E`
- `Foundation /Blue/Normal`: `#000080`
- `Foundation /Blue/Normal :active`: `#000066`
- `Foundation /Blue/Dark`: `#1D242D`
- `Foundation /Blue/Dark :hover`: `#151A20`
- `Foundation /Blue/Light`: `#E6E6F2`
- `Foundation /Blue/Light :hover`: `#D9D9EC`
- `Foundation /Blue/Light :active`: `#FFFFFF`
- `Foundation /Blue/Darker`: `#00002D`
- `Foundation /Blue/Lighter`: `#B2BBC6`
- `Neutral/100`: `#FFFFFF`
- `colors/Grey/Normal :active`: `#3D4C5E`

The source lists `Foundation /Blue/Normal :hover` as a heavily used style, but does not provide a concrete color value for it.

## Type scale

### Playfair Display

- 50px — SemiBold — 11 uses
- 35px — Medium — 36 uses
- 35px — SemiBold — 7 uses
- 30px — SemiBold — 21 uses

Use for hero headings, section headings, and the `CAREER UPWORK` wordmark.

### Poppins

- 30px — Medium — 27 uses
- 28px — Medium — 9 uses
- 26px — Medium — 28 uses
- 25px — SemiBold — 10 uses
- 24px — Medium — 60 uses
- 22px — Medium — 16 uses
- 20px — Medium — 56 uses
- 20px — Regular — 45 uses
- 18px — Regular — 89 uses
- 18px — Light — 3 uses
- 17px — Medium — 10 uses
- 16px — Medium — 33 uses
- 16px — Regular — 97 uses
- 12px — Regular — 15 uses

Use Poppins for navigation, buttons, body copy, labels, card content, and footer content.

### Inter

- 12px — Regular — 1 token
- Line height: `119.81%`
- Letter spacing: `0px`

Token name: `Text 3`.

## Spacing scale

No spacing variables were found.

Observed layout gaps and padding values:
- 0px
- 4px
- 6px
- 10px
- 12px
- 15px
- 16px
- 18px
- 20px
- 22px
- 30px
- 35px
- 40px
- 46px
- 48px
- 70px

Common structural values:
- Content container width: `1280px`
- Hero content width: `579px`
- Country card gap: `16px`
- Service card gap: `16px`
- Section content gap: `40px`

## Radius scale

No radius variables were found.

Observed radii:
- `4px` — flag frame
- `8px` — compact button
- `16px` — cards, large buttons, input field, country cards, service cards
- `24px` — Google Maps Widget, hero card, subscription panel, section label
- `26px` — circular FAQ button

## Elevation & effects

Defined effect styles:

- `Cards/Short Default`
  - Drop shadow
  - Blur: `16px`
  - Offset: `0px 5px`
  - Color: `#080F340F`

- `Buttons/ Color - Default`
  - Drop shadow
  - Blur: `16px`
  - Offset: `0px 6px`
  - Color: `#4A3AFF30`

- `Shadow/Light/S`
  - Drop shadow
  - Blur: `20px`
  - Offset: `0px 4px`
  - Color: `#0000001A`

## Components

### Google Maps Widget

- Family: `Google Maps Widget`
- Size: `580px × 630px`
- Radius: `24px`
- Text styles:
  - Poppins Regular, `10px`
  - Poppins Regular, `14px`
  - Text 3

### Buttons

Observed button configurations:

- Compact navigation button:
  - Size: `135px × 40px`
  - Radius: `8px`
  - Horizontal and vertical padding: `10px`
  - Gap: `10px`
  - Fill: `#546881` or `#000080`
  - Stroke: same blue as fill, `2px`
  - Text: Poppins Medium, `16px`
  - Text color: `#FFFFFF`

- Hero CTA:
  - Size: `273px × 60px`
  - Radius: `16px`
  - Gap: `20px`
  - Text: Poppins Medium, `22px`
  - Text color: `#FFFFFF`

- Small image-card CTA:
  - Size: `136px × 39px`
  - Radius: `16px`
  - Fill: `#FFFFFF`
  - Text: Poppins Regular, `16px`
  - Text color: primary blue

- FAQ control:
  - Size: `40px × 40px`
  - Radius: `26px`
  - Fill: primary blue
  - Stroke: primary blue, `2px`

### Cards and panels

- Country cards:
  - Size: `416px × 467px`
  - Radius: `16px`
  - Drop shadow: `12px` blur, offset `0px 4px`
  - Image background
  - White title text, Poppins Medium, `30px`

- Service cards:
  - Size: `300px × 260px`
  - Radius: `16px`
  - Drop shadow: `8px` blur, offset `0px 0px`
  - One card uses the primary blue hover color; others use `#FFFFFF`

- Hero information panel:
  - Size: `289px × 202px`
  - Radius: `24px`
  - Fill: `#FFFFFF`
  - Contains a country label and supporting copy

- Subscription panel:
  - Size: `1280px × 466px`
  - Radius: `24px`
  - Image background
  - Centered title, supporting text, and email input/button row

## Screen patterns

### Cover Image / hero

- White `1440px × 802px` hero section.
- Top navigation uses a `1280px` horizontal layout.
- Brand wordmark: `CAREER UPWORK`, Playfair Display SemiBold, `30px`.
- Navigation labels: Poppins Medium, `20px`.
- Hero uses a large dark-blue shape with a two-column composition:
  - Left: Playfair Display SemiBold, `50px` heading and Poppins Regular, `20px` supporting copy.
  - Right: white rounded information panel.
- Primary hero CTA is a blue `273px × 60px` button with a `16px` radius.

### Consultancy landing page

The landing page contains these major sections:

- Hero
- Country selection
- Services
- Subscription
- Why us
- FAQ
- Success stories
- Footer

Common section behavior:

- Sections use a `1440px` outer width.
- Inner content commonly uses a `1280px` container.
- White sections alternate with deep blue or image-backed areas.
- Section headers pair an editorial Playfair Display heading with a small rounded label.
- Content cards use 16px radii and drop shadows.
- Country and service content is arranged in horizontal card rows.
- The footer uses the darkest blue token and lighter blue text.

### Country section

- Three `416px × 467px` image cards.
- Cards are separated by a `16px` gap.
- Each card includes a white `136px × 39px` CTA.
- Card titles use Poppins Medium, `30px`.
- Country examples in the source:
  - Study in Canada
  - Study in Australia
  - Study in USA

### Services section

- Section height: `546px`.
- Header and description are arranged horizontally within a `1280px` container.
- Four service cards are arranged in one row.
- Cards are `300px × 260px`, with `16px` gaps and `16px` radii.
- Section heading uses Playfair Display Medium, `35px`.

### Subscription section

- White section with a centered image-backed panel.
- Panel size: `1280px × 466px`.
- Panel radius: `24px`.
- Centered content includes:
  - Playfair Display SemiBold, `35px` title
  - Poppins Regular, `18px` supporting copy
  - Translucent white input field using `#FFFFFFAD`
  - Blue rounded submit button

### Why us section

- Uses repeated horizontal content rows.
- Each row includes a `324px × 186px` image with a `16px` radius and a wider text area.
- Rows are separated by `30px`.

### FAQ section

- White background.
- Editorial section heading with a small rounded label.
- A circular `40px × 40px` blue control appears beside the heading.
- FAQ content is grouped into stacked rows.

### Footer

- Darkest blue background: `#00002D`.
- Content container width: `1280px`.
- Includes consultancy description, company links, divider, brand wordmark, and decorative shapes.
- Footer text uses `#B2BBC6` and `#E6E6F2`.
- Company heading uses Poppins SemiBold, `25px`.
- Footer body and links use Poppins Medium, `16px`.
- Brand wordmark uses Playfair Display SemiBold, `30px`.

## Notes for implementers

- Treat `#546881` and `#000080` as distinct source-defined primary blue values; do not merge them without a design decision.
- The source contains duplicate blue token names with different concrete values. Preserve the concrete value associated with each usage.
- The source does not define spacing, radius, motion, or grid variables. Use the observed values only where the corresponding pattern requires them.
- The source lists some node effects with colors not included in the approved palette. Use only the effect colors documented in `## Elevation & effects`.
- Image fills are referenced by source hashes; no image assets or replacement colors are specified here.
- Preserve the serif/sans pairing: Playfair Display for high-emphasis headings and Poppins for interface and body text.
- Use white surfaces and rounded blue labels to create hierarchy within the consultancy sections.
- The `Foundation /Blue/Normal :hover` style is heavily used, but its concrete hover color is not provided in the extraction. Do not infer one.
