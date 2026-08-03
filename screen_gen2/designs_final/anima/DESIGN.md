---
name: trainerz-anima-high-fidelity-prototype-demo-community
source: Trainerz - Anima High-fidelity Prototype Demo (Community), Page 1
kind: design-system-context
---

# anima - Design System

## Overview

Trainerz is a fitness dashboard prototype with mobile and tablet layouts. The visual system combines dark green navigation, white elevated cards, black editorial headings, Lato and Mulish utility text, and Castoro display typography. Extracted screens include sidebar and profile menus, video overlays, and dashboard sections for invitations, activity, targets, recent classes, profile, and welcome content.

## Design language

- Use dark green for primary navigation, progress indicators, accents, and primary actions.
- Use white surfaces with subtle drop shadows for cards, menus, and dashboard sections.
- Use black for primary text and headings.
- Use muted text through opacity, including 50%, 40%, and 20% treatments.
- Display typography uses Castoro; interface text primarily uses Lato; chart labels and numeric metrics use Mulish.
- Use rounded cards and controls with small radii: 5px is common for cards and form controls; 10px is used for video cards.
- Mobile layouts are 375px wide; tablet layouts include 768px-wide screens.
- Decorative handwritten emphasis uses the Feature Caveat style.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 203 | Primary text, headings, labels |
| `#FFFFFF` | 127 | Page backgrounds, card surfaces, inverse text |
| `#084C37` | 96 | Sidebar backgrounds, progress indicators, green accents |
| `#2F6FC6` | 72 | Activity charts, graph lines, graph points |
| `#1D4835` | 65 | Primary CTA background and profile metrics |
| `#D8D8D8` | 59 | Form fills, dividers, icon fills, image placeholders |
| `#979797` | 47 | Borders, masks, image placeholders |
| `#CBCBCB` | 42 | Neutral interface color |
| `#FF5656` | 21 | Error or alert accent |
| `#2A2928` | 14 | Dark borders and strokes |
| `#FFC2C2` | 10 | Soft alert accent |
| `#F9F9F9` | 4 | Dashboard page background |

## Type scale

Use the following observed styles:

| Size | Family | Weight | Usage |
|---:|---|---:|---|
| 40px | Castoro | Regular | Large welcome heading |
| 26px | Mulish | Regular | Target and metric values |
| 24px | Castoro | Regular | Section headings such as “Start your free trial” |
| 23px | Lato | Regular | Large interface text |
| 21px | Caveat | Bold | Feature Caveat emphasis |
| 18px | Castoro | Regular | Card and section headings |
| 18px | Lato | Light | Menu items and welcome supporting text |
| 18px | Lato | Regular | Card titles |
| 16px | Castoro | Regular | Form labels and section labels |
| 16px | Lato | Light | Menu and form text |
| 16px | Lato | Regular | Body text, CTA labels, and titles |
| 14px | Lato | Regular | Secondary labels and profile names |
| 13px | Lato | Regular | Trainer metadata |
| 12px | Lato | Regular | Compact card text |
| 12px | Mulish | Regular | Chart labels and legends |
| 8px | Mulish | Regular | Very small utility text |

Feature Caveat is defined as Caveat Bold, 700, 21px line height, 21px, with 0px tracking.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 1.45px: chart legend swatches.
- 5px: dashboard cards, forms, CTA, progress-related cards, and tablet profile menu.
- 7px: progress bars.
- 9px: tablet video media treatment.
- 10px: video cards.
- 0px: explicit square corners on some groups and backgrounds.

## Elevation & effects

- Mobile sidebar menu: drop shadow with 10px blur, offset 0px horizontally and 5px vertically.
- Mobile profile menu: drop shadow with 10px blur, offset 0px horizontally and 5px vertically.
- Mobile video card: drop shadow with 10px blur, offset 0px horizontally and 5px vertically.
- Dashboard cards: drop shadow with 10px blur, offset 0px horizontally and 5px vertically.
- Invite card: drop shadow with 10px blur, offset 0px horizontally and 4px vertically.
- Tablet profile menu: drop shadow with 30px blur, offset 0px horizontally and 2px vertically.
- Video overlays use `#000000` at 80% opacity.
- Secondary text and chart treatments use 50%, 40%, and 20% opacity.
- Activity charts use a linear gradient from `#2F6FC6` to transparent at 20% opacity.

## Components

### Feature dot

- Size: 43px × 43px.
- The source identifies Feature dot as the only component family.
- Feature Caveat is the most-used named style, with 11 uses.

## Screen patterns

- **Mobile sidebar menu:** 375px-wide white screen with a 375px × 256px dark-green sidebar, four white Lato Light menu items, and a 17px × 17px close symbol.
- **Tablet sidebar menu:** 768px-wide screen with a 290px × 244px dark-green sidebar using the same menu-item and close-symbol treatment.
- **Mobile profile menu:** 375px-wide screen with a 375px × 448px white menu, profile image, green subtitle, Castoro title, menu links, and divider lines.
- **Tablet profile menu:** 768px-wide screen with a right-aligned 290px × 471px white menu, profile image, dividers, and a click-out overlay.
- **Mobile video:** 375px-wide dark overlay at 80% opacity with a centered 335px × 282px white video card, rounded to 10px.
- **Tablet video:** 768px-wide screen with a top bar and centered 546px × 414px video card, including media, title, subtitle, heart icons, and close symbol.
- **Mobile dashboard:** 375px-wide `#F9F9F9` page containing stacked white sections:
  - Invite form with a 24px Castoro heading, two 304px × 44px fields, and a 111px × 44px green CTA.
  - Weekly activity card with blue chart lines, points, legend, day labels, and gradient area.
  - Target card with three progress rows, dark-green progress bars, and Mulish 26px metrics.
  - Recent classes card with title, subtitle, heart icons, and class-card media.
  - My profile card with trainer rows, checkboxes, circular avatars, profile metrics, and circular progress.
  - Welcome card with a 40px Castoro heading and Lato Light supporting text.
  - 64px-high mobile top bar.
- **Dashboard card pattern:** White surfaces commonly use 5px radius, 10px blur drop shadows, and black headings with muted secondary text.
- **Progress pattern:** Use a muted dark-green track with a darker filled segment, rounded to 7px; pair with a label and Mulish 26px metric.
- **Activity chart pattern:** Use `#2F6FC6` for chart lines and points; secondary series and legend entries use reduced opacity.

## Notes for implementers

- No local variable collections, paint styles, color variables, spacing variables, radius variables, motion variables, grid styles, or effect styles were found.
- Use only the listed palette colors.
- Preserve the observed font-family assignments rather than substituting a single font across the interface.
- Apply opacity explicitly where noted; do not replace muted treatments with new colors.
- Keep mobile screens at 375px width and tablet screens at 768px width where the source specifies those frames.
- Use image assets only where the source indicates image content; no image color or asset details were extracted.
