---
name: github-ui-resume-community
source_file: Github UI Resume (Community)
source_page: All pages (3): CV, Components, Cover
generated_at: 2026-07-25T09:29:06.613534+00:00
---

# Github UI Resume (Community) Design Guidelines

## Source
- Figma file: Github UI Resume (Community)
- Figma page: All pages (3): CV, Components, Cover
- Extracted at: 2026-07-25T09:29:06.613534+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- fg/muted: [#57606A]
- btn/counter-bg: [#1B1F2414]
- btn/text: [#24292F]
- border/subtle: [#1F2124]

## Raw Colors (unstyled)
- #8B949E: 190 uses
- #E9E9E9: 171 uses
- #FFFFFF1A: 171 uses
- #6AA6F8: 120 uses
- #162337: 86 uses
- #CAD1D8: 60 uses
- #31363C: 45 uses
- #1F2124: 28 uses
- #8C949D: 21 uses
- #1B1F2426: 14 uses
- #57606A: 8 uses

## Typography Tokens
- Font scale/f3 - 20px: SF Pro Display Regular (400), 20px / 30px, tracking 0.3px
- text/text-small-bold-condensed: SF Pro Text Semibold (600), 12px / 16px, tracking 0px
- Text style/text-small-bold: SF Pro Text Semibold (600), 12px / 18px, tracking 0px
- Heading/h3 - 20px: SF Pro Display Semibold (600), 20px / 30px, tracking 0.3px
- Text style/text-bold: SF Pro Text Semibold (600), 14px / 20px, tracking -0.15px

## Raw Typography (unstyled)
- SF Pro Display Regular, 12px: 95 uses
- SF Pro Display Regular, 10.86px: 84 uses
- SF Pro Text Semibold, 10.86px: 49 uses
- SF Pro Display Regular, 14px: 18 uses
- SF Pro Display Regular, 12.67px: 17 uses
- SF Pro Display Regular, 18.11px: 16 uses
- SF Pro Text Medium, 10.86px: 14 uses
- SF Pro Text Medium, 12px: 14 uses
- SF Pro Display Semibold, 18.11px: 8 uses
- SF Pro Display Regular, 16.3px: 5 uses
- SF Pro Display Regular, 18px: 5 uses

## Typography Hierarchy
- 20px - Font scale/f3 - 20px (SF Pro Display Regular)
- 20px - Heading/h3 - 20px (SF Pro Display Semibold)
- 18.11px - SF Pro Display Regular, 18.11px (raw)
- 18.11px - SF Pro Display Semibold, 18.11px (raw)
- 18px - SF Pro Display Regular, 18px (raw)
- 16.3px - SF Pro Display Regular, 16.3px (raw)
- 14px - SF Pro Display Regular, 14px (raw)
- 14px - Text style/text-bold (SF Pro Text Semibold)
- 12.67px - SF Pro Display Regular, 12.67px (raw)
- 12px - SF Pro Display Regular, 12px (raw)
- 12px - SF Pro Text Medium, 12px (raw)
- 12px - Text style/text-small-bold (SF Pro Text Semibold)
- 12px - text/text-small-bold-condensed (SF Pro Text Semibold)
- 10.86px - SF Pro Display Regular, 10.86px (raw)
- 10.86px - SF Pro Text Medium, 10.86px (raw)
- 10.86px - SF Pro Text Semibold, 10.86px (raw)

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
- Tag
- topic-tag
- Work Experience

## Component Specs
- Tag: size 33x14px, horizontal layout, padding 0 0 0 0px, gap 2px, sizing W:fixed H:fixed, text [SF Pro Display Regular, 12px]
- topic-tag: size 71x24px, radius 100px, vertical layout, padding 4 8 4 8px, gap 10px, sizing W:fixed H:fixed, fill #162337, text [text/text-small-bold-condensed]
- Work Experience: size 623x172px, horizontal layout, padding 0 0 24 0px, gap 25px, align max/min, sizing W:fixed H:fixed, stroke #31363C 1px, text [SF Pro Display Regular, 12px, text/text-small-bold-condensed, SF Pro Display Regular, 14px, Text style/text-small-bold, Heading/h3 - 20px, Font scale/f3 - 20px]

## Most-Used Styles
- text/text-small-bold-condensed: 46 uses
- Font scale/f3 - 20px: 19 uses
- border/subtle: 14 uses
- fg/muted: 13 uses
- Text style/text-small-bold: 10 uses
- Heading/h3 - 20px: 9 uses
- btn/text: 2 uses
- Text style/text-bold: 1 use

## Layout & Structure
Screen: CV / Resume
- FRAME "Resume", 1076x1595px, constraints left/top, fill #0E1116
  - FRAME "container", 1011x1494px, horizontal pad 0 0 0 0px gap 59px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame 39", 232x944px, vertical pad 0 0 0 0px gap 32px sizing W:fixed H:fixed, constraints left/top
      - FRAME "Bio", 232x317px, vertical pad 0 0 32 0px gap 8px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 1px
        - TEXT "Max Power", 232x24px, constraints left/top, fill #CAD1D8, text [SF Pro Text Bold, 21px]
        - TEXT "maxpower", 232x17px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 14px]
        - TEXT "Passionate about pesto, flutter, debatable rules at home and", 232x72px, constraints left/top, fill #CAD1D8, text [SF Pro Display Medium, 16px]
        - FRAME "Frame 8", 232x48px, vertical pad 8 0 8 0px gap 10px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Button", 232x32px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top, radius 6px, fill #22262C, stroke #383B41 1px
            - FRAME "Content", 70x32px, horizontal pad 6 12 6 12px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Location", 96x17px, horizontal pad 0 0 0 0px gap 8px align min/max sizing W:fixed H:fixed, constraints left/top
          - INSTANCE "location", 16x16px, constraints left/top
            - VECTOR "Icon", 13x15.07px, constraints scale/scale, fill #8C949D
          - TEXT "Milano, Italy", 72x17px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
        - FRAME "Location", 86x17px, horizontal pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
          - INSTANCE "mortar-board", 16x16px, constraints scale/scale
            - VECTOR "Icon", 16x14px, constraints scale/scale, fill #8C949D
          - TEXT "University", 62x17px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
        - FRAME "Link", 101x17px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
          - INSTANCE "link", 16x16px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 14x14px, constraints scale/scale, fill #7C838C
          - TEXT "website.com", 77x17px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
        - FRAME "Link", 187x17px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
          - INSTANCE "mail", 16x16px, constraints scale/scale
            - VECTOR "Icon", 16x12px, constraints scale/scale, fill #7C838C
          - TEXT "namesurname@gmail.com", 163x17px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
      - FRAME "Frame 9", 232x233px, vertical pad 0 0 32 0px gap 12px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 1px
        - TEXT "Education", 79x21px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 18px]
        - FRAME "Frame 46", 232x78px, vertical pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
          - TEXT "University", 232x20px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
          - TEXT "M.Sc in Computer Science, Media Technology and Engineering (", 232x54px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
        - FRAME "Frame 47", 232x78px, vertical pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
          - TEXT "University", 232x20px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
          - TEXT "M.Sc in Computer Science, Media Technology and Engineering (", 232x54px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 14px]
      - FRAME "Frame 10", 232x149px, vertical pad 0 0 32 0px gap 12px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 1px
        - TEXT "Tech Stack", 86x21px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 18px]
        - FRAME "Frame 35", 210x84px, constraints left/top
          - FRAME "Frame 41", 208x24px, horizontal pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "one", 66x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 55x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 79x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
          - FRAME "Frame 42", 119x24px, horizontal pad 0 0 0 0px gap 3px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "one", 58x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 58x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
          - FRAME "Frame 40", 201x24px, horizontal pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "one", 95x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 44x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 54x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
      - FRAME "Frame 11", 232x149px, vertical pad 0 0 32 0px gap 12px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 1px
        - TEXT "Soft Skills", 77x21px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 18px]
        - FRAME "Frame 35", 210x84px, constraints left/top
          - FRAME "Frame 44", 179x24px, horizontal pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "one", 68x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 107x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
          - FRAME "Frame 45", 199x24px, horizontal pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "one", 71x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 124x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
          - FRAME "Frame 43", 165x24px, horizontal pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "one", 94x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
            - INSTANCE "one", 67x24px, vertical pad 0 8 0 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #1F2124, stroke border/subtle 1px
    - FRAME "Frame 38", 720x1494px, vertical pad 0 0 0 0px gap 32px sizing W:fixed H:fixed, constraints left/top
      - FRAME "Frame 37", 720x1221px, vertical pad 0 0 0 0px gap 16px sizing W:fill H:fixed, constraints left/top
        - TEXT "Work Experience", 132x21px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 18px]
        - FRAME "Work List", 720x1184px, vertical pad 16 16 16 16px gap 24px sizing W:fill H:fixed, constraints left/top, radius 8px, stroke #31363C 1px
          - INSTANCE "Work Experience", 688x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 688x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Work Experience", 688x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 688x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Work Experience", 688x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 688x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Work Experience", 688x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 688x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Work Experience", 688x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 688x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Work Experience", 688x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 688x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
      - FRAME "Frame 36", 720x241px, vertical pad 0 0 0 0px gap 16px sizing W:fill H:fixed, constraints left/top
        - TEXT "Other", 45x21px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 18px]
        - FRAME "Work List", 720x204px, vertical pad 16 16 16 16px gap 16px sizing W:fill H:fixed, constraints left/top, radius 8px, stroke #31363C 1px
          - INSTANCE "Work Experience", 688x79px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top, stroke #31363C 1px
            - FRAME "Block", 623x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - INSTANCE "Work Experience", 688x71px, horizontal pad 0 0 16 0px gap 25px align max/min sizing W:fill H:fixed, constraints left/top
            - FRAME "Block", 623x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top

Screen: Components / Work Experience
- COMPONENT "Work Experience", 623x172px, horizontal pad 0 0 24 0px gap 25px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 1px
  - FRAME "Block", 623x148px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
    - FRAME "Header", 191x30px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "_pathBreadcrumb", 130x30px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Content: User/Org", 80x30px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
          - TEXT "__name", 80x30px, constraints left/top, fill #6AA6F8, text [Font scale/f3 - 20px]
        - FRAME "_path-divider", 16x30px, vertical pad 0 5 0 5px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
          - TEXT "/", 6x30px, constraints left/top, fill fg/muted, text [Font scale/f3 - 20px]
        - FRAME "Content: Repo", 34x30px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
          - TEXT "__owner.login", 34x30px, constraints left/top, fill #6AA6F8, text [Heading/h3 - 20px], [heading]
      - FRAME "labelPrivate", 53x20px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
        - FRAME "Base: Label", 53x20px, vertical pad 1 8 1 8px gap 10px align min/center sizing W:fixed H:fixed, constraints scale/scale, radius 100px, stroke #31363C 1px
          - TEXT "LabelText", 37x18px, constraints left/center, fill #8C949D, text [Text style/text-small-bold]
    - TEXT "Description of youy role and accomplishments. Description of", 623x40px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 14px]
    - FRAME "Tags", 387x32px, horizontal pad 8 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "topic-tag", 71x24px, vertical pad 4 8 4 8px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #162337
        - FRAME "Content: Text", 55x16px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "Tag", 55x16px, constraints left/top, fill #6AA6F8, text [text/text-small-bold-condensed]
      - INSTANCE "topic-tag", 71x24px, vertical pad 4 8 4 8px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #162337
        - FRAME "Content: Text", 55x16px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "Tag", 55x16px, constraints left/top, fill #6AA6F8, text [text/text-small-bold-condensed]
      - INSTANCE "topic-tag", 71x24px, vertical pad 4 8 4 8px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #162337
        - FRAME "Content: Text", 55x16px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "Tag", 55x16px, constraints left/top, fill #6AA6F8, text [text/text-small-bold-condensed]
      - INSTANCE "topic-tag", 71x24px, vertical pad 4 8 4 8px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #162337
        - FRAME "Content: Text", 55x16px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "Tag", 55x16px, constraints left/top, fill #6AA6F8, text [text/text-small-bold-condensed]
      - INSTANCE "topic-tag", 71x24px, vertical pad 4 8 4 8px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #162337
        - FRAME "Content: Text", 55x16px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "Tag", 55x16px, constraints left/top, fill #6AA6F8, text [text/text-small-bold-condensed]
    - FRAME "Container", 402x22px, horizontal pad 8 0 0 0px gap 24px sizing W:fixed H:fixed, constraints left/top
      - FRAME "Stack", 402x14px, horizontal pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]
        - INSTANCE "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
          - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
          - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]

Screen: Components / topic-tag
- COMPONENT "topic-tag", 71x24px, vertical pad 4 8 4 8px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 100px, fill #162337
  - FRAME "Content: Text", 55x16px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
    - TEXT "Tag", 55x16px, constraints left/top, fill #6AA6F8, text [text/text-small-bold-condensed]

Screen: Components / Tag
- COMPONENT "Tag", 33x14px, horizontal pad 0 0 0 0px gap 2px sizing W:fixed H:fixed, constraints left/top
  - ELLIPSE "Ellipse 1", 12x12px, constraints left/top, fill #E9E9E9, stroke #FFFFFF1A 1px
  - TEXT "Tag", 19x14px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12px]

Screen: Components / Source: Primer Web Github · https://www.figma.com/community/file/854767373644076713
- TEXT "Source: Primer Web Github · https://www.figma.com/community/", 797x30px, constraints left/top, fill #FFFFFF, text [Font scale/f3 - 20px]

Screen: Cover / Cover
- FRAME "Cover", 1920x960px, constraints left/top, fill #0E1116
  - TEXT "Github UI Resume", 452x252px, constraints left/top, fill #D9D9D9, text [Helvetica Neue Medium, 103.27px], [heading]
  - FRAME "Resume", 974.13x1444px, constraints left/top, radius 16px, fill #0E1116, stroke #31363C 1px
    - FRAME "container", 915.29x1370.81px, horizontal pad 0 0 0 0px gap 53.41px sizing W:fixed H:fixed, constraints left/top
      - FRAME "Frame 39", 210.04x852.64px, vertical pad 0 0 0 0px gap 28.97px sizing W:fixed H:fixed, constraints left/top
        - FRAME "Bio", 210.04x287.02px, vertical pad 0 0 28.97 0px gap 7.24px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
          - TEXT "Max Power", 210.04x22px, constraints left/top, fill #CAD1D8, text [SF Pro Text Bold, 19.01px]
          - TEXT "maxpower", 210.04x15px, constraints left/top, fill #8B949E, text [SF Pro Display Regular, 12.67px]
          - TEXT "Passionate about pesto, flutter, debatable rules at home and", 210.04x66px, constraints left/top, fill #CAD1D8, text [SF Pro Display Medium, 14.49px]
          - FRAME "Frame 8", 210.04x44.35px, vertical pad 7.24 0 7.24 0px gap 9.05px sizing W:fill H:fixed, constraints left/top
            - INSTANCE "Button", 210.04x28.97px, vertical pad 0 0 0 0px gap 7.24px align min/center sizing W:fixed H:fixed, constraints left/top, radius 5.43px, fill #22262C, stroke #383B41 0.91px
          - FRAME "Location", 86.73x15px, horizontal pad 0 0 0 0px gap 7.24px align min/max sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "location", 14.49x14.49px, constraints left/top
            - TEXT "Milano, Italy", 65x15px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
          - FRAME "Location", 77.73x15px, horizontal pad 0 0 0 0px gap 7.24px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "mortar-board", 14.49x14.49px, constraints scale/scale
            - TEXT "University", 56x15px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
          - FRAME "Link", 91.73x15px, horizontal pad 0 0 0 0px gap 7.24px align min/center sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "link", 14.49x14.49px, constraints left/top, fill #FFFFFF
            - TEXT "website.com", 70x15px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
          - FRAME "Link", 168.73x15px, horizontal pad 0 0 0 0px gap 7.24px align min/center sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "mail", 14.49x14.49px, constraints scale/scale
            - TEXT "namesurname@gmail.com", 147x15px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
        - FRAME "Frame 9", 210.04x208.94px, vertical pad 0 0 28.97 0px gap 10.86px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
          - TEXT "Education", 71x19px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 16.3px]
          - FRAME "Frame 46", 210.04x69.62px, vertical pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
            - TEXT "University", 210.04x18px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
            - TEXT "M.Sc in Computer Science, Media Technology and Engineering (", 210.04x48px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
          - FRAME "Frame 47", 210.04x69.62px, vertical pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
            - TEXT "University", 210.04x18px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
            - TEXT "M.Sc in Computer Science, Media Technology and Engineering (", 210.04x48px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 12.67px]
        - FRAME "Frame 10", 210.04x134.88px, vertical pad 0 0 28.97 0px gap 10.86px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
          - TEXT "Tech Stack", 78x19px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 16.3px]
          - FRAME "Frame 35", 190.12x76.05px, constraints left/top
            - FRAME "Frame 41", 187.7x22px, horizontal pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 42", 107.69x22px, horizontal pad 0 0 0 0px gap 2.72px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 40", 180.7x22px, horizontal pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 11", 210.04x134.88px, vertical pad 0 0 28.97 0px gap 10.86px sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
          - TEXT "Soft Skills", 70x19px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 16.3px]
          - FRAME "Frame 35", 190.12x76.05px, constraints left/top
            - FRAME "Frame 44", 163.59x22px, horizontal pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 45", 180.59x22px, horizontal pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 43", 149.59x22px, horizontal pad 0 0 0 0px gap 3.62px sizing W:fixed H:fixed, constraints left/top
      - FRAME "Frame 38", 651.84x1370.81px, vertical pad 0 0 0 0px gap 28.97px sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 37", 651.84x1120.2px, vertical pad 0 0 0 0px gap 14.49px sizing W:fill H:fixed, constraints left/top
          - TEXT "Work Experience", 119x19px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 16.3px]
          - FRAME "Work List", 651.84x1086.71px, vertical pad 14.49 14.49 14.49 14.49px gap 21.73px sizing W:fill H:fixed, constraints left/top, radius 7.24px, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x158.18px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x158.18px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x158.18px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x158.18px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x158.18px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x158.18px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
        - FRAME "Frame 36", 651.84x221.64px, vertical pad 0 0 0 0px gap 14.49px sizing W:fill H:fixed, constraints left/top
          - TEXT "Other", 41x19px, constraints left/top, fill #CAD1D8, text [SF Pro Display Regular, 16.3px]
          - FRAME "Work List", 651.84x188.15px, vertical pad 14.49 14.49 14.49 14.49px gap 14.49px sizing W:fill H:fixed, constraints left/top, radius 7.24px, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x71.52px, horizontal pad 0 0 21.73 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top, stroke #31363C 0.91px
            - INSTANCE "Work Experience", 622.87x64.28px, horizontal pad 0 0 14.49 0px gap 22.63px align max/min sizing W:fixed H:fixed, constraints left/top


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
