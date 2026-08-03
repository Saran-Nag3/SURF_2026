---
name: angular
source: Angular UI Library Kit (Community)
kind: design-system-context
---

# angular - Design System

## Overview

Angular UI Library Kit is a multi-library component reference covering Material UI, Ant Design, and Bootstrap UI. The source contains a cover image plus component specimens for form controls, navigation-related controls, feedback, selection, and utility elements.

## Design language

- Three visual language groupings are present: Material UI, Ant Design, and Bootstrap UI.
- Typography is primarily Roboto, Inter, SF Pro Text, and Helvetica Neue.
- Material UI controls use larger, more rounded dimensions and frequent icon support.
- Ant Design controls use compact dimensions, 2px radii, white surfaces, and subtle borders.
- Bootstrap UI controls use white surfaces, 5px radii, and compact horizontal layouts.
- Icons use Material Icons Regular at 18px or 24px.
- Component states commonly include disabled, selected/checked, expanded/collapsed, filled/outline, icon placement, and full-width behavior.

## Color palette

Ranked by observed raw usage where counts are available:

- `#FFFFFF` — primary white surface and control fill; 157 raw uses.
- `#404040` — neutral dark content color; 96 raw uses.
- `#F5F5F5` — light neutral surface; 96 raw uses.
- `#16AE651A` — translucent green tag fill; 81 raw uses.
- `#91D5FF` — light blue accent; 60 raw uses.
- `#000000BF` — dark translucent content/effect color; 48 raw uses.
- `#BFBFBF` — neutral gray; 36 raw uses.
- `#1F2C42` — dark navy; 30 raw uses.
- `#334158` — dark blue-gray; 30 raw uses.
- `#9747FF` — purple component-set outline; 25 raw uses.
- `#B8B8B8` — medium gray; 24 raw uses.
- `#FFFFFF00` — transparent hitbox/background; 14 raw uses.
- `#E8F7F0` — pale green surface; 9 raw uses.
- `#FAF9FD` — pale lavender surface; 6 raw uses.
- `#0D6EFD` — primary blue.
- `#212529` — body text.
- `#00000040` — disabled and placeholder opacity.
- `#52C41A` — green success/accent.
- `#5E6A86` — popup-label blue-gray.
- `#96A2BE` — dark-mode icon blue-gray.
- `#000000D9` — title and primary character color.
- `#0000001F` — shadow layer.
- `#00000024` — shadow layer.
- `#00000033` — shadow layer.
- `#343DFF` — switch fill.
- `#E0E2EC` — Material filled-control surface.
- `#44474E` — Material control border/content color.
- `#D9D9D9` — Ant Design border.
- `#EAECEF` — progress-bar track.
- `#DEE2E6` — Bootstrap border.
- `#0000000B` — Ant Design button shadow.
- `#FFFFFF00` — transparent radio background.

## Type scale

- `34px` — Inter Bold.
- `27.14px` — Roboto Medium.
- `24px` — Material Icons Regular.
- `23.87px` — Inter Medium.
- `18px` — Material Icons Regular.
- `16px` — Helvetica Neue Regular, Inter Regular, or Roboto Regular.
- `14px` — Helvetica Neue Regular, Roboto Regular or Medium, SF Pro Text Regular or Medium, Inter Regular or Medium.
- `12px` — Inter Medium, Roboto Regular, SF Pro Text Regular, or Roboto caption.
- `11.04px` — Inter Regular.

Named typography tokens:

- `Body/Small`: Helvetica Neue Regular, `14px`, line-height `125.73%`, tracking `0px`.
- `Body/Regular`: Helvetica Neue Regular, `16px`, line-height `125.73%`, tracking `0px`.
- `Body/regular`: Roboto Regular, `14px`, line-height `22px`, tracking `0px`.
- `Base/Normal`: SF Pro Text Regular, `14px`, line-height `22px`, tracking `0px`.
- `v-text/caption`: Roboto Regular, `12px`, line-height `20px`, tracking `0.4px`.
- Checkbox label: Roboto Regular, `14px`, line-height `24px`, tracking `0px`.

Most-used raw text styles:

- Inter Medium, `12px` — 433 uses.
- Roboto Regular, `16px` — 88 uses.
- Inter Medium, `14px` — 81 uses.
- Roboto Medium, `14px` — 60 uses.
- SF Pro Text Regular, `14px` — 60 uses.

## Spacing scale

No spacing variables were found.

Observed component spacing values:

- `0px`, `2px`, `3px`, `4px`, `5px`, `6px`, `7px`, `8px`, `10px`, `11px`, `12px`, `15px`, `16px`, and `20px` appear in component padding or gaps.
- Common control padding: `4px 12px`, `5px 12px`, `6px 12px`, `7px 12px`, `4px 15px`, `12px 12px`, and `16px 20px`.
- Common gaps: `0px`, `4px`, `5.23px`, `8px`, `10px`, and `12px`.

## Radius scale

No radius variables were found.

Observed radii:

- `2px` — Ant Design controls.
- `4px` — Material and Bootstrap-adjacent controls.
- `4px / 4px / 0px / 0px` — Material filled controls.
- `5px` — Bootstrap controls and the Material component-set container.
- `12px` — Material accordion.
- `28.79px` — component tag.
- `100px` — switch.
- `9999px` — Material button.

## Elevation & effects

- Expansion panel elevation:
  - Shadow at offset `0 1px`, color `#0000001F`.
  - Shadow at offset `0 2px`, color `#00000024`.
  - Shadow at offset `0 3px`, color `#00000033`.
- Ant Design button shadow:
  - Offset `0 2px`, color `#0000000B`.
- No motion tokens were found.
- No local grid styles were found.

## Components

Only the extracted component families are listed below.

### Accordion

- Material UI: `404x95px`, radius `12px`, fill `#FAF9FD`, expansion-panel elevation, vertical layout, expanded/unexpanded variants.
- Bootstrap UI: `776x52px`, radius `5px`, fill `#FFFFFF`, stroke `#DEE2E6 1px`, padding `16px 20px`, collapsed/expanded and disabled variants.

### Autocomplete

- Material UI: `232x48px`, radius `4px / 4px / 0px / 0px`, fill `#E0E2EC`, stroke `#44474E 1px`, padding `12px`, space-between alignment.
- Variants: fill/outline, disabled, left icon visibility, full width.

### Button

- Material UI: `67x36px`, radius `9999px`, padding `0px 12px`, gap `10px`.
- Variants: extended, basic, fab, flat, icon, raised, stroked; disabled; left/none/right icon; full width.
- Ant Design: `76x32px`, radius `2px`, fill `#FFFFFF`, stroke `#D9D9D9 1px`, padding `4px 15px`, gap `8px`, shadow `#0000000B`.
- Variants: dashed, default, link, primary, text; disabled; left/none/right icon.

### Checkbox

- Material UI: `102x40px`, horizontal layout, label typography Roboto Regular `14px / 24px`, label before/after, checked and disabled states.
- Ant Design: `90x22px`, fill `#FFFFFF`, gap `8px`, SF Pro Text Regular `14px`, checked, disabled, and left/right label variants.

### Collapse

- Ant Design: `780x46px`, radius `2px`, fill `#F5F5F5`, stroke `#D9D9D9 1px`, padding `12px 16px`, gap `12px`.
- Variants: active/inactive and disabled.

### Date & Time Picker

- Material UI: `232x48px`, radius `4px / 4px / 0px / 0px`, fill `#E0E2EC`, stroke `#44474E 1px`, padding `12px`, gap `0px`.
- Variants: fill/outline, disabled, full width, left icon.

### Date Picker

- Bootstrap UI: `245x38px`, radius `5px`, fill `#FFFFFF`, stroke `#DEE2E6 1px`, padding `7px 0px 7px 12px`, gap `8px`.
- Variants: enabled and disabled.

### Date Time Picker

- Ant Design: `254.5x32px`, radius `2px`, fill `#FFFFFF`, stroke `#D9D9D9 1px`, padding `5px 12px`.
- Variants: date/time type and disabled.

### Dropdown

- `199x38px`, radius `4px`, fill `#FFFFFF`, stroke `#0D6EFD 1px`, padding `6px 12px`, gap `4px`.
- Variants: danger, primary, success, and disabled.

### Icon

- `124x124px` container, padding `50px`, centered Material Icons Regular at `24px`.

### Input

- Material UI: `232x79px`; 56px input area plus 20px message area with a `3px` gap.
- Filled appearance: fill `#E0E2EC`, stroke `#44474E 1px`, radius `4px / 4px / 0px / 0px`.
- Outline appearance: stroke `#44474E 1px` in the component specification; extracted outline examples use a `4px` radius.
- Variants: left/right icon visibility, filled/outline appearance, disabled, full width.
- Ant Design: `240x32px`, radius `2px`, fill `#FFFFFF`, stroke `#D9D9D9 1px`, padding `0px 11px`, gap `4px`.
- Variants: disabled, left/right icon, full width.

### Progress

- Material UI: `250x4px`; bar or spinner; determinate or indeterminate; accent, primary, or warn color.
- Ant Design: `384x22px`, gap `8px`; circle or line; active, exception, normal, or success status.

### Progress Bar

- `780x16px`, radius `4px`, fill `#EAECEF`.
- Variants: striped, animated, danger/info/primary/warning type, value visibility.

### Radio

- `62x22px`, horizontal layout, gap `8px`, transparent fill `#FFFFFF00`, Inter Medium `12px` and SF Pro Text Regular `14px`.
- Variants: checked, left/right label, disabled.

### Radio Button

- `102x40px`, horizontal layout, label typography Roboto Regular `14px / 24px`.
- Variants: label before/after, checked, disabled.

### Select

- Material UI: `232x56px`, vertical layout, gap `3px`.
- Variants: disabled, left icon, fill/outline appearance, full width.
- Ant Design: `240x32px`, radius `2px`, fill `#FFFFFF`, stroke `#D9D9D9 1px`, padding `4px 12px`.
- Variants: default/large/small size, disabled, multiple, allow-clear.

### Slider

- Material UI: `576x80px`, fill `#FFFFFF`, Inter Medium `12px`, thumb-label enabled/disabled.
- Ant Design: `400x11px`, with range, vertical, disabled, tooltip visibility, and tooltip placement variants.

### Switch

- `52x32px`, radius `100px`, fill `#343DFF`, padding `2px 4px`, centered alignment.
- Variants: accent/primary/warn color, checked, disabled.

### Text Area

- `224x88px`, vertical layout, gap `3px`.
- Variants: fill/outline, disabled, full width.

### component-tags

- `166.23x38px`, radius `28.79px`, fill `#16AE651A`, padding `10px 12px`, gap `5.23px`, centered.
- Text uses Inter Medium `14px`.

## Screen patterns

- Cover Image: a fixed `1648x1008px` cover frame containing a full-size image.
- Material UI page: component specimens include an icon component and a large input component set with filled, outline, icon, hint, and disabled combinations.
- Ant Design page: compact controls are presented as reusable component specimens with white surfaces and light borders.
- Bootstrap UI page: compact white controls use Bootstrap-like borders, radii, and horizontal alignment.
- The source is primarily a component library rather than a complete application screen system.

## Notes for implementers

- Preserve the distinction between Material UI, Ant Design, and Bootstrap UI styling rather than combining their control dimensions by default.
- Use the component-specific dimensions and variants above; do not infer a global spacing or radius token.
- Prefer the named typography tokens where available, especially `v-text/caption`, `Body/Regular`, `Base/Normal`, and the checkbox label token.
- Use Material Icons Regular for icon-bearing controls at the extracted `18px` or `24px` sizes.
- Treat disabled, checked, expanded, active, and appearance variants as explicit component states.
- The extraction contains inconsistent raw color references that are not part of the allowed palette; use only the documented palette values.
- No local variables, motion tokens, or grid styles were found.
