---
name: oat-meta-system-community-first-design-system-0-1-7-community
source: Oat Meta System • Community First Design System • 0.1.7 (Community)
kind: design-system-context
---

# meta - Design System

## Overview

- Source: Figma file “Oat Meta System • Community First Design System • 0.1.7 (Community)”.
- Scope: all 38 Figma pages, including guidelines, colors, effects, typography, components, slots, other, and cover.
- No local variable collections, paint styles, color variables, spacing variables, radius variables, motion variables, or grid styles were found.
- Primary typeface: Inter.
- The system uses compact controls, 12px rounded corners for most interactive elements, pale neutral surfaces, blue brand actions, red negative actions, and soft card shadows.

## Design language

- Use Inter with Regular 400, Medium 500, and Bold 700 weights.
- Use large, tightly tracked display typography for introductory and heading content.
- Use 14px–18px body text with 20px–28px line heights.
- Use white surfaces with neutral strokes such as `#D0DBE1`.
- Use `#2474FF` for brand-primary actions.
- Use `#EE2B2B` for negative-primary actions.
- Use `#EAF2FF` and `#B5D3FF` for brand-secondary fills and outlines.
- Use `#FFEBE7` and `#FFBAB1` for negative-secondary fills and outlines.
- Use 40px × 40px buttons and icon buttons with 12px radius.
- Use 12px radius for buttons, links, inputs, alerts, and accordion boxes.
- Use 16px radius for `Drop Zone`.
- Prefer card shadows from the defined `card-xs`, `card-sm`, `card-md`, `card-lg`, and `card-xl` effects.

## Color palette

Ranked by usage in the extracted source:

| Color | Uses | Usage |
|---|---:|---|
| `#FFFFFF` | 130 | Primary surface, button fill, input fill, icon and avatar backgrounds |
| `#A7B6BE` | 98 | Neutral color |
| `#56656E` | 86 | Neutral color |
| `#9747FF` | 77 | Accent color |
| `#0000001A` | 38 | Black with transparency |
| `#636363` | 18 | Neutral color |
| `#D9D9D9` | 18 | Neutral color |
| `#F2F0FF` | 15 | Pale accent surface |
| `#F0F3F4` | 13 | Pale neutral surface |
| `#FFF7E1` | 9 | Pale warning surface |
| `#000000` | 8 | Black |
| `#111111` | 7 | Dark banner surface |
| `#B4B4B4` | 6 | Neutral color |

Additional colors used by component specifications:

- Brand primary: `#2474FF`.
- Brand primary button variant: `#7A909C`.
- Brand secondary fill: `#EAF2FF`.
- Brand secondary outline: `#B5D3FF`.
- Negative primary: `#EE2B2B`.
- Negative secondary fill: `#FFEBE7`.
- Negative secondary outline: `#FFBAB1`.
- Neutral secondary fill: `#ECF1F4`.
- Neutral secondary outline: `#D0DBE1`.
- Drop Zone fill: `#F6FAFC`.
- Accordion and input stroke: `#D0DBE1`.
- Accent alert stroke: `#FFC861`.
- Dark surface: `#232323`.
- Banner fill: `#111111`.

## Type scale

All typography uses Inter.

| Token | Weight | Size | Line height | Tracking |
|---|---:|---:|---:|---:|
| Intro H1/Medium | 500 | 128px | 128px | -1.8px |
| Intro H2/Regular | 400 | 96px | 96px | -1.8px |
| Intro H2/Medium | 500 | 96px | 96px | -1.8px |
| Intro H3/Medium | 500 | 80px | 80px | -0.55px |
| Title H1/Regular | 400 | 72px | 80px | -1.8px |
| Title H4/Regular | 400 | 36px | 44px | -0.55px |
| Title H5/Regular | 400 | 32px | 40px | -0.55px |
| Title H5/Medium | 500 | 32px | 40px | -0.55px |
| Title H5/Bold | 700 | 32px | 40px | -0.55px |
| Title H6/Regular | 400 | 24px | 32px | -0.55px |
| Title H6/Medium | 500 | 24px | 32px | -0.55px |
| Subtitle/Regular | 400 | 20px | 28px | -0.2px |
| Subtitle/Medium | 500 | 20px | 28px | -0.2px |
| Subtitle/Bold | 700 | 20px | 28px | -0.2px |
| Paragraph - L/Regular | 400 | 18px | 28px | -0.2px |
| Paragraph - L/Medium | 500 | 18px | 28px | -0.2px |
| Paragraph - M/Regular | 400 | 16px | 24px | -0.16px |
| Paragraph - M/Medium | 500 | 16px | 24px | -0.16px |
| Paragraph - M/Medium - U | 500 | 16px | 24px | -0.16px |
| Paragraph - S/Regular | 400 | 14px | 20px | 0px |
| Paragraph - S/Medium | 500 | 14px | 20px | 0px |
| Caption/Regular | 400 | 12px | 20px | 0px |
| Caption/Medium | 500 | 12px | 20px | 0px |
| Footnote/Medium | 500 | 10px | 16px | 0px |
| Raw typography | 400 | 28.5px | Not specified | Not specified |

## Spacing scale

No spacing variables were found.

Recurring component spacing values:

- `0px`: no padding or gap.
- `4px`: icon and compact content gaps.
- `8px`: compact control padding and gaps.
- `12px`: button horizontal padding.
- `16px`: accordion padding and common content gaps.
- `18px`: `Avatar` content gap.
- `32px`: `Drop Zone` padding.
- `-4px`: overlapping input and add-on content gap.
- `-8px`: `Avatar Group` overlap gap.

Component padding is specified as top, right, bottom, left.

## Radius scale

No radius variables were found.

Extracted component radii:

- `8px`: `Button Input`.
- `12px`: `Accordion Box Tint`, `Accordion Box`, `Status Alert Accent`, `Status Alert`, `Alert`, `Link Contained`, `Link`, `Ghost Icon Button`, `Fill Icon Button`, `Outline Icon Button`, `Fill Button`, `Outline Button`, `Ghost Button`, `Input Area`, `Input Inline`.
- `16px`: `Drop Zone`.

## Elevation & effects

Defined effects:

- `card-xs`: drop shadow offset `0 1px`, blur `3px`, color `#0A0E1529`.
- `card-sm`: drop shadows:
  - offset `0 1px`, blur `3px`, color `#0A0E151A`;
  - offset `0 3px`, blur `8px`, color `#0A0E151A`.
- `card-md`: drop shadows:
  - offset `0 1px`, blur `3px`, color `#0A0E151A`;
  - offset `0 5px`, blur `12px`, color `#0A0E151F`.
- `card-lg`: drop shadows:
  - offset `0 2px`, blur `5px`, color `#0A0E1529`;
  - offset `0 10px`, blur `16px`, color `#0A0E151F`.
- `card-xl`: drop shadows:
  - offset `0 2px`, blur `5px`, color `#0A0E1529`;
  - offset `0 10px`, blur `24px`, color `#0A0E1533`.

## Components

### Accordion

- `Accordion Box Tint`: `640px × 96px`, 12px radius, 16px padding, 16px gap, 1px `#D0DBE1` stroke, horizontal layout, `Subtitle/Regular` and `Title H6/Medium`; `Expanded: No/Yes`.
- `Accordion Box`: `640px × 96px`, 12px radius, 16px padding, 16px gap, 1px `#D0DBE1` stroke, horizontal layout, `Subtitle/Regular` and `Title H6/Medium`; `Expanded: No/Yes`.
- `Accordion Underlined`: `640px × 80px`, bottom padding `16px`, 16px gap, 1px `#D0DBE1` stroke, horizontal layout, `Subtitle/Regular` and `Title H6/Medium`; `Expanded: No/Yes`.
- `Accordion Block`: `640px × 64px`, 16px gap, horizontal layout, `Subtitle/Regular` and `Title H6/Medium`; `Expanded: No/Yes`.

### Buttons and links

- `Fill Button`: `107px × 40px`, 12px radius, padding `8px 12px`, 8px gap, horizontal centered layout, `Paragraph - M/Medium`; states include Default, Hover, and Disabled.
- `Outline Button`: `107px × 40px`, 12px radius, padding `8px 12px`, 8px gap, 1px outline; uses `#D0DBE1`, `#B5D3FF`, or `#FFBAB1` depending on semantic variant.
- `Ghost Button`: `107px × 40px`, 12px radius, padding `8px 12px`, 8px gap, `Paragraph - M/Medium`; states include Default, Hover, Active, and Disabled.
- Brand-primary `Fill Button`: fill `#2474FF`.
- Negative-primary `Fill Button`: fill `#EE2B2B`.
- Neutral-primary `Fill Button`: fill `#7A909C`.
- Neutral-secondary `Fill Button`: fill `#ECF1F4`.
- Brand-secondary `Fill Button`: fill `#EAF2FF`.
- Negative-secondary `Fill Button`: fill `#FFEBE7`.
- `Fill Icon Button`: `40px × 40px`, 12px radius, padding `8px`, 4px gap; states include Default, Hover, and Disabled.
- `Outline Icon Button`: `40px × 40px`, 12px radius, padding `8px`, 4px gap, 1px outline.
- `Ghost Icon Button`: `40px × 40px`, 12px radius, padding `8px`, 4px gap; states include Default, Hover, Active, and Disabled.
- `Link Contained`: `107px × 40px`, 12px radius, padding `8px 12px`, 8px gap, `Paragraph - M/Medium`; states include Default/Hover and Visited No/Yes.
- `Link`: `83px × 32px`, 12px radius, vertical padding `4px`, 8px gap, `Paragraph - M/Medium`; states include Default/Hover and Visited No/Yes.
- `Chevron Button` and `Math Button`: each `40px × 40px`, white fill, no padding, no gap, fixed sizing.

### Alerts and banners

- `Alert`: `467px × 156px`, 12px radius, white fill, 1px `#D0DBE1` stroke, `Paragraph - M/Medium` and `Paragraph - M/Regular`.
- `Status Alert`: same dimensions and styling as `Alert`; `Status: Default/Variant2/Variant3/Variant4`.
- `Status Alert Accent`: same dimensions, white fill, 1px `#FFC861` stroke; `Ststus: Default/Variant2/Variant3/Variant4`.
- `Banner`: `1126px × 56px`, dark `#111111` fill, padding `8px 8px 8px 16px`, 16px gap, `Paragraph - M/Medium`.
- `Snackbar  Primary`, `Snackbar  Secondary`, and `Snackbar  Tertiary` are available snackbar families.

### Avatars and indicators

- `Avatar Round S` and `Avatar Square S`: `20px × 20px`; content variants Icon, Image, Words.
- `Avatar Round M` and `Avatar Square M`: `40px × 40px`; content variants Icon, Image, Words.
- `Avatar Round L` and `Avatar Square L`: `64px × 64px`; content variants Icon, Image, Words.
- `Avatar + Badge M`: `40px × 40px`, `Paragraph - S/Medium`.
- `Avatar + Badge L`: `64px × 64px`, `Paragraph - S/Medium`.
- `Avatar Group`: `68px × 20px`, horizontal layout, `-8px` gap.
- `Avatar`: `381px × 52px`, 18px gap, `Paragraph - M/Regular` and `Subtitle/Medium`.
- `Indicator Status`: `6px × 6px`.
- `Indicator Online`: `8px × 8px`.
- `Ststus Icon`: `24px × 24px`; variants Danger, Info, Success, Warning.
- `Verify`: `20px × 20px`, white fill.

### Inputs and upload

- `Input Inline`: `240px × 40px`, 12px radius, white fill, 1px `#D0DBE1` stroke, `Paragraph - M/Regular`; states Active, Default, Disable, Hover, Read Only; error and disabled/read-only flags are available.
- `Input Area`: `240px × 99px`, 12px radius, white fill, 1px `#D0DBE1` stroke, `Paragraph - M/Regular`; same state and flag variants as `Input Inline`.
- `Button Input`: `40px × 40px`, 8px radius, padding `4px`, 4px gap; states Default/Hover and Active No/Yes.
- `Drop Zone`: `468px × 264px`, 16px radius, `#F6FAFC` fill, 1px `#7A909C` stroke, padding `32px`, 16px gap, vertical centered layout; uses `Paragraph - M/Medium`, `Paragraph - M/Regular`, and `Title H6/Medium`.
- `Add-on Block Button`: `74px × 40px`, `#F6FAFC` fill, 1px `#D0DBE1` stroke, padding `8px`, `-4px` gap, `Paragraph - M/Regular`.
- `Add-on Block Caption`: `102px × 40px`, `#F6FAFC` fill, 1px `#D0DBE1` stroke, padding `8px`, `-4px` gap, `Paragraph - M/Regular`.
- `Auth Code`: `120px × 40px`, white fill, padding `8px 12px`, 4px gap; `Filled: No/Yes`.
- `Text Inline` and `Text Fill`: `120px × 40px`, white fill, padding `8px 12px`, 4px gap; `Filled: No/Yes`.

### Navigation and selection

- `Breadcrumb`: `157px × 32px`, padding `4px 0`, 8px gap, `Paragraph - M/Medium`; states Default/Hover and Current No/Yes.
- `Icon Breadcrumb`: `52px × 32px`, padding `4px 0`, 4px gap; states Default/Hover and Current No/Yes.
- `Chevron`: `24px × 24px`, white fill.
- `Slash`: `14px × 24px`, right padding `8px`, `Paragraph - M/Medium`.
- `Selector Button`, `Selector Button Group`, and `Selector Button Layout` are available for selector controls.
- `Select`, `Multi Select`, `Date Picker`, `Date & Time Picker`, `Time Picker`, `Search`, `Phone`, `Password`, `Payment`, `Number`, and `Quantity` are available input families.
- `Tab` is available for tab navigation.
- `Tag Group`, `Tag Removable`, and `Tag Selectable` are available tag families.

### Supporting primitives

- `Counter`: `20px × 20px`, vertical layout, `Paragraph - S/Medium`.
- `Context` and `Context Revers`: `62px × 20px`, vertical layout, `Footnote/Medium` and `Caption/Medium`.
- `Closable`: `82px × 20px`, vertical layout, `Footnote/Medium` and `Caption/Medium`.
- `Inline`: `372px × 24px`, white fill, 4px gap, `Paragraph - M/Medium`.
- `Paragraph`: `450px × 120px`, `Paragraph - M/Regular`.
- `Title + Subttle`: `486px × 64px`, vertical layout, 4px gap, `Subtitle/Regular` and `Title H6/Medium`.
- `Ellipse 4`: `21px × 21px`, white fill.
- `Ellipse 5`: `37px × 37px`, white fill.
- `Ellipse 6`: `51px × 51px`, white fill.
- `Ellipse 7`: `61px × 61px`, white fill.
- `Frame 22`: `201px × 95px`, white fill.
- `_Icon`: `20px × 20px`, horizontal centered layout.
- `_Indicator Status`: `20px × 20px`, white fill.
- `Resize Maker`: `9px × 9px`, white fill; variants Default/Variant2.

## Screen patterns

- Guidelines pages cover Colors, Effects, and Typography.
- Component pages cover Accordion, Alert, Avatar, Badge, Banner, Breadcrumb, Button, Counter, Drop Zone, Indicator, Input, Kbd, Notification, Panel, Progress, Selector, Selector Button, Selector List, Slider, Snackbar, Tab, and Tag.
- Supporting pages cover Slot, Other, and Cover.
- Reference and project pages include What's new?, About Author, Component Backlog, References, and Benchmark.
- The extracted component patterns emphasize fixed-size controls, explicit state variants, semantic brand/negative/neutral treatments, and reusable input, notification, selection, and navigation families.

## Notes for implementers

- Treat the named component families as the source of truth; do not create unlisted component families.
- Preserve the specified fixed dimensions, padding, gaps, strokes, fills, radii, and typography when implementing the corresponding components.
- Use the provided state variants rather than inventing alternate interaction states.
- No spacing or radius variables were provided; use the explicit component values and recurring values documented above.
- No motion guidance was found; do not infer animation durations or easing from this extraction.
- No grid guidance was found; do not infer column counts or breakpoints.
- Preserve source naming where component names contain apparent spelling variants such as `Ststus Icon`, `Title + Subttle`, `Avaatar`, and `Barand`.
- The raw extraction is truncated after the `Text Fill` component specification; unspecified component details should not be inferred.
