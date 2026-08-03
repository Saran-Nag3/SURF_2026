---
name: ui-flow-community
source: UI Flow (Community)
kind: design-system-context
---

# line - Design System

## Overview

UI Flow is a monochrome user-flow documentation system centered on a vertical flow of labeled steps.

- Source pages: Introduction and Components.
- Introduction includes three 1070×638px presentation screens: Cover, What is it?, and Legend.
- The Components page defines a numbered flow title, “What people see” steps, “What people do” steps, and label states.
- Primary typeface: Inter.
- Primary visual treatment: white surfaces, black text and strokes, compact outlined step rows, and numbered headings.

## Design language

- Use a restrained, diagrammatic visual language for documenting user journeys.
- Prefer fixed-width components and explicit vertical sequencing.
- Use black 1px strokes for flow-step containers.
- Center content vertically and horizontally inside step rows.
- Use numbered titles with a black number block and a bold heading.
- Use compact labels to communicate step state.
- Flow elements are separated by 20px inside the elements stack and by 24px between the title and elements.
- No local variables, styles, grids, motion tokens, or effect styles were found.

## Color palette

| Color | Usage |
|---|---:|
| #000000 | 34 uses; primary text, strokes, number blocks, and step markers |
| #FFFFFF | 5 uses; page and default label surfaces |

Additional component state fills are present in the source extraction but are not represented as allowed palette hex values. Preserve their semantic roles: default, new, follow, and oop.

## Type scale

| Size | Typeface | Weight | Usage |
|---:|---|---|---|
| 28px | Inter | Regular | Introduction heading |
| 22px | Inter | Bold | Flow title heading |
| 16px | Inter | Regular | Labels, flow steps, and body text |
| 12px | Inter | Bold | Number text and compact title text |

Raw typography usage counts:

- Inter Regular, 16px: 22 uses.
- Inter Regular, 28px: 4 uses.

No local text styles were found.

## Spacing scale

Observed spacing values:

- 0px: no padding in the `ui flow` container, title, and elements frame.
- 10px: component padding and internal gaps.
- 20px: vertical gap between flow elements.
- 24px: vertical gap between the title and the elements frame.

Component padding and layout values:

- `What people do`: 10px on all sides, 10px gap.
- `What people see`: 10px on all sides, 10px gap.
- `title`: 0px padding, 0px gap.
- `ui flow`: 0px padding, 24px gap.
- `elements`: 0px padding, 20px gap.

## Radius scale

- 5px: component-set boundary radius for `label` and `What people do`.
- 8px: radius of the title number block.

No radius variables were found.

## Elevation & effects

_None found in source._

Observed border treatment:

- 1px black stroke on `What people do` and `What people see`.
- No local effect styles, shadows, blur, or elevation tokens were found.

## Components

### What people do

- Family: What people do.
- Size: 380×39px.
- Layout: horizontal; fixed width and fixed height.
- Padding: 10px on all sides.
- Gap: 10px.
- Alignment: center/center.
- Stroke: 1px black.
- Content: a `label` plus a 4×4px black ellipse marker.
- Variants:
  - `interaction=yes, more choices=yes`
  - `interaction=no, more choices=yes`
  - `interaction=yes, more choices=no`
  - `interaction=no, more choices=no`

### What people see

- Family: What people see.
- Size: 366×39px.
- Layout: horizontal; fixed width and fixed height.
- Padding: 10px on all sides.
- Gap: 10px.
- Alignment: center/center.
- Stroke: 1px black.
- Content: a `label`.
- Text: Inter Regular, 16px.

### label

- Family: label.
- Base size: 346×19px.
- Default fill: white.
- Text: Inter Regular, 16px, black.
- Variants:
  - `default`
  - `new`
  - `follow`
  - `oop`
- The `oop` state uses muted text and a muted surface in the source.
- The `new` state uses a pale green surface in the source.
- The `follow` state uses a pale yellow surface in the source.
- A nested label instance appears in the `new` state.

### title

- Family: title.
- Size: 380×47px.
- Layout: horizontal; fixed width and fixed height.
- Padding: 0px on all sides.
- Gap: 0px.
- Alignment: minimum/center.
- Contains:
  - Number block: 26×35px, black fill, 8px radius, 10px padding, centered content.
  - Header region: 354×47px, 10px padding, fills remaining width.
  - Heading: “User Flow”, Inter Bold, 22px.
  - Number: Inter Bold, 12px, white.

### ui flow

- Family: ui flow.
- Size: 380×700px.
- Layout: vertical; fixed width and fixed height.
- Padding: 0px on all sides.
- Gap: 24px.
- Alignment: center/minimum.
- Contains one `title` followed by an `elements` stack.
- The elements stack is 380×629px with a 20px vertical gap.
- Supports `What people see` and `What people do` instances in sequence.

## Screen patterns

### Introduction

- Presentation screens are 1070×638px with white surfaces.
- The Introduction page includes Cover, What is it?, and Legend screens.
- A separate 922×34px heading uses Inter Regular, 28px, black text.
- The heading text references adaptation from an article and another Figma Community template.

### Component documentation

- Component examples are organized as individual component demonstrations and component sets.
- `title` establishes the numbered flow heading.
- `What people see` represents a visible screen or result.
- `What people do` represents an action and may include a black marker.
- Labels communicate default, new, follow, or oop states.

### User-flow composition

- Start with a 380×47px `title`.
- Stack flow elements vertically below it.
- Maintain a 24px separation between title and elements.
- Maintain a 20px separation between successive elements.
- Use 380px-wide `What people do` rows and 366px-wide `What people see` rows within the 380px flow.

## Notes for implementers

- Use only the documented component families: What people do, What people see, label, title, and ui flow.
- Preserve the fixed dimensions exactly when recreating the component examples.
- Keep the 1px black outline on both step-row families.
- Use the 4×4px black ellipse only for `What people do`.
- Keep `What people see` 14px narrower than `What people do`.
- Use Inter Regular at 16px for labels and step text, Inter Bold at 22px for flow headings, Inter Bold at 12px for number blocks, and Inter Regular at 28px for the Introduction heading.
- Treat label states as semantic variants rather than inventing additional states.
- No responsive behavior, alternate breakpoints, motion, elevation, or local design tokens were defined in the source.
