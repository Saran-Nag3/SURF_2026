---
name: gemini-ui-screens-community
source: Gemini UI Screens (Community), Page 1
kind: design-system-context
---

# gemini - Design System

## Overview

- Source: Gemini UI Screens (Community), Page 1.
- Primary screen context: dark mobile Gemini conversation UI at 374×812px.
- Extracted screens include Conversation, Typing, and Home.
- No local variable collections, spacing variables, radius variables, motion variables, or local effect styles were found.
- No component families or component sets were found.

## Design language

- Dark, high-contrast conversational interface.
- Figtree is the primary typeface for interface text.
- Use compact typography, restrained spacing, rounded controls, and muted secondary text.
- Conversation responses are paired with feedback, sharing, copying, and overflow actions.
- Bottom input areas use a rounded top container with a subtle border and elevation effect.
- Mobile layouts use a 374×812px viewport with a 374px-wide status/navigation region.
- Icons are predominantly 20px or 24px.

## Color palette

Ranked raw colors by recorded usage:

| Color | Usage | Role |
|---|---:|---|
| #F0F0F0 | 56 | Most-used raw color |
| #0052B4 | 28 | Blue accent |
| #000000 | 27 | Primary black |
| #D80027 | 14 | Red accent |
| #ECB22E | 14 | Yellow accent |
| #50555C | 7 | Neutral gray |
| #0000005C | 6 | Translucent black |
| #DADADA | 5 | Light neutral |

Named color tokens:

- `Global/Blue/700`: #6C92E4
- `Content / contentPrimary`: #000000
- `Text Colours/Tertiary`: #5D758F
- `Ink/Base`: #0E0F0F
- `Ink/Lighter`: #464A4D

## Type scale

Primary typeface: Figtree.

| Token or style | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `text-xxs/font-semibold` | Figtree | 600 | 10px | 14px | 0px |
| `text-xs/font-semibold` | Figtree | 600 | 12px | 14px | 0px |
| `text-xs/font-medium$` | Figtree | 500 | 12px | 16px | 0px |
| `text-xs/font-bold$` | Figtree | 700 | 12px | 16px | 0px |
| `text-sm/font-semibold` | Figtree | 600 | 14px | 20px | 0px |
| `text-sm/font-medium$` | Figtree | 500 | 14px | 20px | 0px |
| `text-sm/font-regular$` | Figtree | 400 | 14px | 20px | 0px |
| `Caption L/Medium` | Figtree | 500 | 14px | 20px | -0.1px |
| `text-base/font-medium$` | Figtree | 500 | 16px | 24px | 0px |
| `text-lg/font-semibold` | Figtree | 600 | 18px | 28px | -0.09px |
| `text-4xl/font-semibold` | Figtree | 600 | 36px | 44px | -0.36px |

Additional raw typography found:

- Inter Regular, 22.5px.
- Inter Regular, 16px.
- SF Pro Text Semibold, 15px.
- Figtree SemiBold, 128px.

Most-used text styles:

- `text-xs/font-semibold`: 34 uses.
- `text-xxs/font-semibold`: 33 uses.
- `text-sm/font-semibold`: 28 uses.
- `text-sm/font-medium$`: 11 uses.
- `text-sm/font-regular$`: 5 uses.
- `text-xs/font-medium$`: 5 uses.
- `text-base/font-medium$`: 3 uses.
- `text-xs/font-bold$`: 2 uses.
- `text-4xl/font-semibold`: 1 use.
- `text-lg/font-semibold`: 1 use.

## Spacing scale

_None found in source._

Observed layout gaps and padding values include 4px, 6px, 7px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 55px, 157px, 164px, and 220px.

## Radius scale

_No radius variables found in source._

Observed radii:

- 2px, 4.6px, 6px, 8px, 20px, 100px, 200px, and 1000px.
- Conversation text container: asymmetric radius `8/8/2/8px`.
- Bottom input container: top radius 20px.
- Circular icon containers: radius 200px.
- Pill controls: radius 1000px.
- Home indicators: radius 100px.

## Elevation & effects

- Bottom input container uses a drop shadow with 12px blur, offset `0 -4px`.
- Typing keyboard background uses an 81.55px background blur.
- Bottom input container has a 1px border.
- No reusable local effect styles were found.

## Components

_None found in source._

## Screen patterns

- **Conversation:** 374×812px mobile conversation screen. Includes a compact top navigation area, Gemini response content, response action icons, model identity and voice controls, and a bottom input panel with prompt text and action controls.
- **Typing:** Same conversation structure as Conversation, with the bottom input panel in an active typing state and a 374×291px on-screen keyboard occupying the lower portion.
- **Home:** A Home screen exists in the source extraction; the raw dump is truncated before its detailed structure.

## Notes for implementers

- Prefer the named Figtree tokens for interface text; use raw Inter and SF Pro Text styles only where the source explicitly requires them.
- Prioritize the high-use styles: `text-xs/font-semibold`, `text-xxs/font-semibold`, and `text-sm/font-semibold`.
- Preserve the 374×812px mobile composition and the 374px-wide full-bleed regions shown in the source.
- Use 20px and 24px icon dimensions where the source specifies icon geometry.
- Keep the bottom input region pinned to the viewport bottom, with a 20px top radius, 1px border, and the recorded drop-shadow treatment.
- Do not assume unextracted spacing, radius, motion, component, or effect tokens.
- The source contains no component families; build screen-specific controls from the documented geometry and styles rather than assuming a component library.
