---
name: ui-flow-community
source_file: UI Flow (Community)
source_page: All pages (2): Introduction, Components
generated_at: 2026-07-25T09:56:23.652943+00:00
---

# UI Flow (Community) Design Guidelines

## Source
- Figma file: UI Flow (Community)
- Figma page: All pages (2): Introduction, Components
- Extracted at: 2026-07-25T09:56:23.652943+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- No local paint styles or color variables found.

## Raw Colors (unstyled)
- #000000: 34 uses
- #FFFFFF: 5 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- Inter Regular, 16px: 22 uses
- Inter Regular, 28px: 4 uses

## Typography Hierarchy
- 28px - Inter Regular, 28px (raw)
- 16px - Inter Regular, 16px (raw)

## Spacing Tokens
- No spacing variables found.

## Radius Tokens
- No radius variables found.

## Motion Tokens
- No motion variables found.

## Effect Styles
- No local effect styles found.

## Grid Styles
- No local grid styles found.

## Component Families
- What people do
- label
- ui flow
- What people see
- title

## Component Specs
- What people do: size 380x39px, horizontal layout, padding 10 10 10 10px, gap 10px, align center/center, sizing W:fixed H:fixed, stroke #000000 1px, text [Inter Regular, 16px] | variants: interaction: no/yes; more choices: no/yes
- label: size 346x19px, fill #FFFFFF, text [Inter Regular, 16px] | variants: state: default/follow/new/oop
- ui flow: size 380x700px, vertical layout, padding 0 0 0 0px, gap 24px, align center/min, sizing W:fixed H:fixed, text [Inter Regular, 16px, Inter Bold, 22px, Inter Bold, 12px]
- What people see: size 366x39px, horizontal layout, padding 10 10 10 10px, gap 10px, align center/center, sizing W:fixed H:fixed, stroke #000000 1px, text [Inter Regular, 16px]
- title: size 380x47px, horizontal layout, padding 0 0 0 0px, gap 0px, align min/center, sizing W:fixed H:fixed, text [Inter Bold, 22px, Inter Bold, 12px]

## Most-Used Styles
- No style references were counted. Apply local styles to layers to populate usage counts.

## Layout & Structure
Screen: Introduction / Adapted from this article and this other template on figma community
- TEXT "Adapted from this article and this other template on figma c", 922x34px, constraints left/top, fill #000000, text [Inter Regular, 28px], [heading]

Screen: Introduction / Cover
- FRAME "Cover", 1070x638px, constraints left/top, fill #FFFFFF
  - RECTANGLE "image 5", 1070x638px, constraints left/top, fill image(hash: 10002b4b9a9c9062cb6db7b7cae104100190c669)

Screen: Introduction / What is it?
- FRAME "What is it?", 1070x638px, constraints left/top, fill #FFFFFF
  - RECTANGLE "image 6", 1070x638px, constraints left/top, fill image(hash: 4b3676a9b9f371069fdd39845ba84170adf76a15)

Screen: Introduction / Legend
- FRAME "Legend", 1070x638px, constraints left/top, fill #FFFFFF
  - RECTANGLE "image 7", 1070x638px, constraints left/top, fill image(hash: c3ec32db74cbb064a232d122d0462076c4d11415)

Screen: Components / title
- COMPONENT "title", 380x47px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
  - FRAME "no.", 26x35px, vertical pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 8px, fill #000000
    - TEXT "1", 6x15px, constraints left/top, fill #FFFFFF, text [Inter Bold, 12px]
  - FRAME "header", 354x47px, horizontal pad 10 10 10 10px gap 10px sizing W:fill H:fixed, constraints left/top
    - TEXT "User Flow", 300x27px, constraints left/top, fill #000000, text [Inter Bold, 22px]

Screen: Components / What people see
- COMPONENT "What people see", 366x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, stroke #000000 1px
  - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
    - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]

Screen: Components / label
- COMPONENT_SET "label", 403x209px, constraints left/top, radius 5px, stroke #9747FF 1px
  - COMPONENT "state=default", 346x19px, constraints left/top, fill #FFFFFF
    - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
  - COMPONENT "state=new", 346x19px, constraints left/top, fill #CFFFBE
    - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
    - INSTANCE "label", 399.05x19px, constraints scale/scale, fill #FFFFFF
      - TEXT "What people do", 399.05x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
  - COMPONENT "state=follow", 346x19px, constraints left/top, fill #FEFFBE
    - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
  - COMPONENT "state=oop", 346x19px, constraints left/top, fill #E7E7E7
    - TEXT "What people do", 346x19px, constraints scale/scale, fill #757575, text [Inter Regular, 16px]

Screen: Components / What people do
- COMPONENT_SET "What people do", 833x197px, constraints left/top, radius 5px, stroke #9747FF 1px
  - COMPONENT "interaction=yes, more choices=yes", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, stroke #000000 1px
    - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
      - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
    - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
  - COMPONENT "interaction=no, more choices=yes", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, stroke #000000 1px
    - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
      - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
    - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
  - COMPONENT "interaction=yes, more choices=no", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
    - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
      - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
    - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
  - COMPONENT "interaction=no, more choices=no", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
    - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
      - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
    - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000

Screen: Components / ui flow
- COMPONENT "ui flow", 380x700px, vertical pad 0 0 0 0px gap 24px align center/min sizing W:fixed H:fixed, constraints left/top
  - INSTANCE "title", 380x47px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "no.", 26x35px, vertical pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 8px, fill #000000
      - TEXT "1", 6x15px, constraints left/top, fill #FFFFFF, text [Inter Bold, 12px]
    - FRAME "header", 354x47px, horizontal pad 10 10 10 10px gap 10px sizing W:fill H:fixed, constraints left/top
      - TEXT "User Flow", 300x27px, constraints left/top, fill #000000, text [Inter Bold, 22px]
  - FRAME "elements", 380x629px, vertical pad 0 0 0 0px gap 20px sizing W:fixed H:fixed, constraints left/top
    - INSTANCE "What people see", 366x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, stroke #000000 1px
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, stroke #000000 1px
      - INSTANCE "label", 346x19px, constraints left/top, fill #FEFFBE
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, stroke #000000 1px
      - INSTANCE "label", 346x19px, constraints left/top, fill #E7E7E7
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #757575, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #CFFFBE
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
        - INSTANCE "label", 399.05x19px, constraints scale/scale, fill #FFFFFF
          - TEXT "What people do", 399.05x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000
    - INSTANCE "What people do", 380x39px, horizontal pad 10 10 10 10px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "label", 346x19px, constraints left/top, fill #FFFFFF
        - TEXT "What people do", 346x19px, constraints scale/scale, fill #000000, text [Inter Regular, 16px]
      - ELLIPSE "Ellipse 1", 4x4px, constraints left/top, fill #000000


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
