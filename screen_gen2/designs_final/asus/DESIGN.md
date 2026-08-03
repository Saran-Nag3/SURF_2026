---
name: concept-beer-app-community
source: Concept Beer APP (Community)
kind: design-system-context
---

# asus - Design System

## Overview

A beer-cafe mobile app concept designed primarily for iPhone-sized screens. The visual system combines white surfaces, bright cyan decorative forms, black typography, rounded controls, and playful beer-cloud branding.

The extraction contains eight notable screens and frames, including welcome, sign-in, splash/loading, coming-soon, and iPhone mockup presentation screens. No local Figma variables, styles, or component sets were found.

## Design language

- Playful, friendly beer-cafe identity.
- Bright cyan dominates decorative backgrounds and hero areas.
- White is the primary surface color.
- Black typography and controls provide strong contrast.
- Rounded geometry is used for hero panels, buttons, inputs, and device frames.
- Decorative elements include large cyan ellipses, cloud-like beer branding, grouped abstract shapes, and arrows.
- Welcome screens use a cyan upper panel over a white background.
- Authentication screens use pill-shaped fields and buttons with lightweight outlined styling.
- Presentation mockups use colored phone shells and high-contrast labels.
- A dark coming-soon screen uses white display text and a yellow rounded action element.

## Color palette

Colors are ranked by extracted usage. Near-identical source colors are consolidated where appropriate.

| Token | Value | Extracted usage | Role |
|---|---:|---:|---|
| White | `#FFFFFF` | 127 | Primary screen, surface, button, and text color |
| Dark brown | `#472B29` | 60 | Secondary dark brand color |
| Black | `#000000` | 30 | Primary text, strokes, and dark controls |
| Warm cream | `#FDFCEF` | 24 combined from `#FDFCEF` and `#FEFDEF` | Light warm neutral |
| Bright cyan | `#2BBFFF` | 17 combined from `#2BBFFF` and `#2ABFFF` | Hero panels, decorative ellipses, and branding |
| Yellow | `#FFE000` | 7 | Coming-soon action element |
| Pale mint | `#C7EDE6` | 6 | Supporting light accent |
| Translucent cyan | `#2BBFFF47` | 4 | Input borders and subtle outlines |
| Light cyan | `#76D7FA` | 4 | Supporting cyan accent |
| Gray | `#C4C4C4` | 4 | Screen-mask or neutral placeholder surface |
| Deep blue | `#216282` | 3 | iPhone mockup shell and presentation background |
| Red | `#B40313` | 3 | Red iPhone mockup shell |

Do not introduce colors outside this palette.

## Type scale

No local text styles were found. The following raw font and size combinations are present:

| Size | Font | Weight/style | Observed use |
|---:|---|---|---|
| 36px | Kulim Park | SemiBold | Welcome heading |
| 24px | MS UI Gothic UIGothic | Regular/unspecified | Sign in and Sign up controls |
| 24px | Montserrat Alternates | ExtraLight | Large supporting or introductory text |
| 16px | Kokoro | Regular | “BEER CAFE” branding |
| 14px | MS UI Gothic UIGothic | Regular/unspecified | Form helper or descriptive text |
| 12px | MS UI Gothic UIGothic | Regular/unspecified | Form labels, links, and social sign-in text |

Additional raw typography appears in the iPhone presentation mockups:

- SF Pro Text Medium, 15px.
- SF Pro Display Regular, 45px.
- Sequel100Black-55, 32px.
- Kulim Park Bold, 20px.
- Kulim Park SemiBold, 15px.
- Kulim Park SemiBoldItalic, 20px.

Use the extracted font-family and size pairings as shown; no broader type scale or line-height system was defined.

## Spacing scale

No spacing variables were found.

Observed layout values:

- Auto-layout gap: `30px`.
- Auto-layout padding: `0px` on all sides in the extracted branded logo frame.
- Primary mobile screen dimensions: `428x926px`.
- Mockup screen dimensions: `375x812px`.
- Input and social-control width: `304px`.
- Primary button widths: `128px` and `310px`.
- Input height: `52px`.
- Button height: `45px`.

These are observed dimensions, not verified spacing tokens.

## Radius scale

No radius variables were found.

Observed corner radii:

- `17px` device and screen-frame radius.
- `23px` pill button radius.
- `30px` hero-panel corner radius.
- `43px` large white authentication-panel radius.
- `49px` input-field radius.
- Composite corner treatments include `30/30/17/17px`, `17/0/17/17px`, and `43/43/0/0px`.

## Elevation & effects

No local effect styles were found.

Observed effects and treatments:

- Authentication inputs use either inner shadows or drop shadows.
- Shadow offset: `0 4px`.
- Shadow offset distance: `4px`.
- Input borders use `#2BBFFF47`.
- iPhone mockups include decorative shadow groups and layered image-based shadows.
- Presentation backgrounds include radial or linear gradient treatments in the source; their non-palette gradient colors are not part of the approved design-system palette.
- Decorative grouped shapes and oversized ellipses create visual depth without a documented elevation scale.

## Components

_None found in source._

No component families, component sets, instances, or component geometry specifications were extracted. Reusable patterns visible in screens include buttons, pill-shaped inputs, checkbox controls, social sign-in rows, logo blocks, hero panels, and phone mockups, but they are not formal component definitions.

## Screen patterns

### Welcome screen

- Mobile canvas: `428x926px`.
- White base surface.
- Cyan upper panel approximately `428x339px`.
- Rounded panel corners.
- Large black “Welcome” heading using Kulim Park SemiBold, 36px.
- Supporting text uses Montserrat Alternates ExtraLight, 24px.
- Cyan decorative ellipses overlap the hero area.
- Two side-by-side pill buttons:
  - Black fill with white “Sign in” text.
  - White fill with black “Sign up” text.
  - Both are approximately `128x45px` with `23px` radius.

### Sign-in screen

- White screen with a cyan upper region.
- Large white lower panel with top corners rounded to `43px`.
- Black “Sign in” action button, approximately `310x45px`, with `23px` radius.
- Four pill-shaped fields or controls, approximately `304x52px`, with `49px` radius.
- White fill, `#2BBFFF47` border, and either inner-shadow or drop-shadow treatment.
- Supporting controls include:
  - Username field.
  - Password field.
  - Forgot Password link.
  - Remember me checkbox.
  - Google and Facebook continuation rows.
- Use MS UI Gothic UIGothic at 12px and 14px for small form text.

### Splash and branding screen

- White mobile screen.
- Cyan oversized circular forms.
- Centered beer-cloud logo and “BEER CAFE” wordmark.
- Logo frame approximately `186.56x239.2px`.
- Vertical gap inside the logo frame: `30px`.
- Wordmark uses Kokoro Regular, 16px.
- A black arrow stroke may appear as a navigation cue.

### Coming-soon screen

- Dark full-screen surface.
- White “Stay tuned” heading using Sequel100Black-55, 32px.
- White arrow stroke.
- Yellow rounded rectangle approximately `128x45px` with `23px` radius.
- Decorative grouped shapes are positioned behind or around the heading.

### iPhone color presentation

- Large presentation canvas with colored backgrounds and iPhone mockups.
- Blue variant uses `#216282`.
- Red variant uses `#B40313`.
- Mockup phone shell dimensions: approximately `415x852px`.
- Phone shell radius: `44px`.
- Labels are white:
  - Color name at 15px.
  - “iPhone 13” at 45px.
- Screen content is placed inside a masked approximately `375x812px` region.

## Notes for implementers

- Preserve the dominant white, black, cyan, and dark-brown contrast hierarchy.
- Use `#2BBFFF` as the canonical bright cyan when consolidating the source’s near-identical `#2ABFFF` and `#2BBFFF` usages.
- Use `#FDFCEF` as the canonical warm cream when consolidating `#FDFCEF` and `#FEFDEF`.
- Keep buttons and fields strongly rounded; use the observed `23px` button radius and `49px` field radius.
- Do not add colors outside the approved palette.
- Treat extracted dimensions as screen-specific observations rather than a complete responsive spacing system.
- Use decorative cyan ellipses and grouped beer-cloud artwork as identity elements, not as generic layout containers.
- Maintain the distinction between filled black primary actions and white secondary actions.
- Authentication fields should retain the thin translucent cyan border and subtle shadow treatment.
- No formal component API, variants, interaction states, or accessibility specifications were extracted.
