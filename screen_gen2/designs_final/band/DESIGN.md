---
name: band-merchandise-app-wireframe-community
source: Band Merchandise App wireframe (Community)
kind: design-system-context
---

# band - Design System

## Overview

A monochrome band merchandise mobile app wireframe for Android Large screens sized 360x800px. Primary flows include the store, community content, and cart.

## Design language

- Minimal wireframe visual language.
- White screen backgrounds with light gray structural regions.
- Black typography, rules, arrows, and line illustrations.
- Dark brown accent used for circular elements.
- Typography uses Work Sans for primary hierarchy and Roboto for raw supporting labels.

## Color palette

Ranked by raw usage:

| Color | Uses | Usage |
|---|---:|---|
| #000000 | 96 | Primary text, strokes, lines, arrows, and outlines |
| #C4C4C4 | 28 | Header bars, product placeholders, content panels, and blocks |
| #1B0909 | 3 | Circular accent elements |
| #DAD5D5 | 3 | Light divider lines in the cart |
| #FFFFFF | 3 | Screen background |

No local paint styles or color variables were found.

## Type scale

| Role | Font | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---|---:|---|
| Header 1 | Work Sans | 700 | 34px | auto | -0.68px | Primary page headings, including “The Store” and “My Cart” |
| Body | Work Sans | 400 | 13px | auto | -0.26px | General interface text and cart labels |
| Raw supporting text | Roboto | 400 | 12px | Not specified | Not specified | Labels including “Meet the Band”, “Events”, and “The Store” |

Most-used styles: Body, 20 uses; Header 1, 2 uses.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

_None found in source._

## Components

_None found in source._

No component families or component geometry were extracted.

## Screen patterns

- **Store landing screen:** Android Large - 2 is a 360x800px white screen with a 34px Header 1 title, a 360x48px light gray bar, a dark brown 29x29px circular element, and a grid of 105x94px light gray product placeholders. Body labels include repeated “Item Price” text.
- **Community/home screen:** Android Large - 1 is a 360x800px white screen with a 360x50px light gray top region, navigation and line graphics, a dark brown 29x29px circular element, three 105x94px light gray blocks, a 358x137px light gray feature region, and sections labeled “Meet the Band” and “Events”.
- **Cart overview screen:** Android Large - 3 is a 360x800px white screen with a 360x48px light gray top region, a dark brown 29x29px circular element, the “My Cart” Header 1 heading, “2 Items”, two 84x67px item image placeholders, item attributes, and a “Total” section. Cart dividers use #DAD5D5.
- **Cart label screen:** A separate “Cart” text node uses the Body style.
- **Store label screen:** A separate “The Store” text node uses Roboto Regular at 12px.
- **Navigation graphics:** Black 1px lines and 1px-stroked vector graphics are used for navigation and section illustration. A 3px black arrow stroke is also present.

## Notes for implementers

- Use only the extracted palette: #000000, #1B0909, #C4C4C4, #DAD5D5, and #FFFFFF.
- Use Work Sans Bold at 34px for primary headings.
- Use Work Sans Regular at 13px with -0.26px tracking for body content.
- Use Roboto Regular at 12px for supporting labels where the source identifies Roboto.
- Preserve the 360x800px Android Large screen format shown in the extracted screens.
- Do not introduce component families, spacing tokens, radius tokens, motion tokens, grid styles, or effect styles; none were found in the source.
