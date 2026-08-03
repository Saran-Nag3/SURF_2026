---
name: adidas-blueprint-app-icon-community
source: Adidas Blueprint App Icon (Community, Page 1)
kind: design-system-context
---

# adidas - Design System

## Overview

- Source: Adidas Blueprint App Icon (Community)
- Page: Page 1
- Screens:
  - Adidas Blueprint Icon: 5810x8357px
  - Introduction: 8915x4962.57px
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.
- Component family: `social_icons`.

## Design language

- High-contrast monochrome presentation using #000000, #FFFFFF, #CACACA, and #ADADAD.
- Introduction screen uses a #000000 background with #FFFFFF primary text, #CACACA supporting text, and a #FFFFFF 5px divider.
- Social links use grayscale icons with #ADADAD artwork and #CACACA labels.
- Typography is Inter, with large bold display text and large supporting text.
- The Adidas Blueprint Icon screen combines a large rounded decorative frame, a black wordmark area, outlined metadata labels, and a black vector mark.

## Color palette

| Color | Raw uses | Observed usage |
|---|---:|---|
| #FFFFFF40 | 13 | Raw unstyled color |
| #FFFFFF26 | 12 | Raw unstyled color |
| #000000 | 9 | Backgrounds, text, strokes, and vector artwork |
| #ADADAD | 7 | Social icon artwork |
| #CACACA | 6 | Supporting and social-link text |
| #FFFFFF | 5 | Backgrounds, primary text, and divider stroke |

## Type scale

No local text styles were found. Observed typography:

| Family | Weight/style | Size | Raw uses |
|---|---|---:|---:|
| Inter | SemiBold | 150.13px | 5 |
| Inter | Bold | 156.95px | Not counted |
| Inter | Medium | 83.71px | Not counted |
| Inter | Regular | 150.13px | Not counted |
| Inter | Medium | 300.27px | Not counted |
| Inter | Bold | 300.27px | Not counted |

Observed text roles:

- Display title: Inter Bold, 300.27px, #FFFFFF.
- Introduction body: Inter Regular, 150.13px, #CACACA.
- Social-link labels: Inter SemiBold, 150.13px, #CACACA.
- Blueprint title: Inter Bold, 156.95px, #000000.
- Blueprint metadata labels: Inter Medium, 83.71px, #000000.
- Emoji marks: Inter Medium, 300.27px, #000000.

## Spacing scale

No spacing variables were found. Observed layout values:

- 0px padding.
- 10px gap.
- 20px vertical padding.
- 112.6px gap.
- 113px gap.
- 188px gap.
- 199px gap.
- 200px gap.
- 300px vertical and horizontal padding.
- 445px gap.
- Introduction frame padding: 300px on all sides.
- Introduction header vertical padding: 20px top and bottom.
- Socials vertical padding: 20px top and bottom.
- Introduction outer gap: 200px.
- Social row icon-to-label gap: 445px.

## Radius scale

No radius variables were found. Observed radii:

- 225.2px: Introduction frame.
- 750.12px: Adidas Blueprint Icon decorative frame.

## Elevation & effects

_No effects, elevation, or motion tokens found in source._

## Components

### `social_icons`

Available variants:

| Variant | Size |
|---|---:|
| grayscale / instagram | 300x300px |
| grayscale / linkedin | 300x300px |
| grayscale / twitter | 300x300px |
| grayscale / behance | 300x300px |

Observed icon artwork:

- Behance vector: 237.5x150px, #ADADAD.
- Twitter vector: 250x200px, #ADADAD.
- LinkedIn vector: 225x212.5px, #ADADAD.
- Instagram artwork group: 224.91x225px.

## Screen patterns

### Adidas Blueprint Icon

- Canvas: 5810x8357px.
- White background: #FFFFFF.
- Decorative frame: 3460x3460px with a 750.12px radius.
- Metadata/title area includes:
  - `ASMIT` in Inter Bold, 156.95px, #000000.
  - `16112023` in Inter Medium, 83.71px, #000000, inside a 1.74px #000000 outline.
  - `Adidas Blueprint` in Inter Medium, 83.71px, #000000, inside a 1.74px #000000 outline.
- Includes a 2627x605.86px black vector.

### Introduction

- Canvas: 8915x4962.57px.
- Outer frame: 8915x4962.57px, #000000 fill, 225.2px radius, 300px padding on all sides.
- Header presents a black emoji mark with the white title `Asmit Malakannawar`.
- Supporting text: `I am a product designer and I love to create design resource` in #CACACA.
- Divider: 8314.04px line with a 5px #FFFFFF stroke.
- Social links are arranged in rows with 300x300px icon areas and #CACACA labels:
  - Behance/asmitbm
  - GitHub/asmitbm
  - Twitter/asmitbm
  - LinkedIn/asmitbm
  - Instagram/asmitmalakannawar
- Social rows use a 445px icon-to-label gap.
- Section heading: `Social Links` in Inter Bold, 300.27px, #FFFFFF, paired with a black globe emoji mark.

## Notes for implementers

- Use only the six extracted colors: #000000, #ADADAD, #CACACA, #FFFFFF, #FFFFFF26, and #FFFFFF40.
- Use the `social_icons` family only with the extracted grayscale variants and 300x300px component size.
- Preserve the monochrome hierarchy: #FFFFFF for primary content on #000000, #CACACA for supporting text, and #ADADAD for social icon artwork.
- Keep typography in Inter and use the observed sizes rather than introducing additional sizes.
- Do not treat the observed values as local Figma tokens; the extraction found no local variable or style definitions.
- Preserve the 225.2px Introduction radius and 750.12px Blueprint decorative-frame radius when reproducing the two screen patterns.
