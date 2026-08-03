---
name: grok-ios-ui-community
source_file: Grok iOS UI (Community)
source_page: Page 1
generated_at: 2026-07-25T09:29:59.528388+00:00
---

# Grok iOS UI (Community) Design Guidelines

## Source
- Figma file: Grok iOS UI (Community)
- Figma page: Page 1
- Extracted at: 2026-07-25T09:29:59.528388+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- No local paint styles or color variables found.

## Raw Colors (unstyled)
- #000000: 66 uses
- #FFFFFF: 48 uses
- #E0E0DE: 25 uses
- #7D7D7B: 13 uses
- #FAFBF8: 10 uses
- #252525: 4 uses
- #7F7F7D: 4 uses
- #BABBB8: 4 uses
- #7A7B78: 3 uses
- #7B7B7B: 3 uses
- #EF6229: 3 uses
- #F8F6F5: 3 uses
- #FCFBFC: 3 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- SF Pro Semibold, 17px: 13 uses
- SF Pro Semibold, 13px: 10 uses
- SF Pro Regular, 15px: 6 uses
- SF Pro Medium, 16px: 5 uses
- SF Pro Regular, 16px: 5 uses
- SF Pro Medium, 10px: 4 uses
- SF Pro Medium, 19px: 3 uses
- SF Pro Regular, 13px: 3 uses
- SF Pro Semibold, 16px: 3 uses

## Typography Hierarchy
- 19px - SF Pro Medium, 19px (raw)
- 17px - SF Pro Semibold, 17px (raw)
- 16px - SF Pro Medium, 16px (raw)
- 16px - SF Pro Regular, 16px (raw)
- 16px - SF Pro Semibold, 16px (raw)
- 15px - SF Pro Regular, 15px (raw)
- 13px - SF Pro Regular, 13px (raw)
- 13px - SF Pro Semibold, 13px (raw)
- 10px - SF Pro Medium, 10px (raw)

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
- No components were found in any page of this file. Add component sets to improve guideline coverage.

## Component Specs
- No component geometry was extracted. Add components or component sets to populate this section.

## Most-Used Styles
- No style references were counted. Apply local styles to layers to populate usage counts.

## Layout & Structure
Screen: Page 1 / Paywall
- FRAME "Paywall", 393x852px, constraints left/top, fill #000000
  - INSTANCE "Home Indicator", 393x21px, constraints left_right/bottom
    - RECTANGLE "Home Indicator", 139x5px, constraints center/bottom, radius 100px, fill #BBBBBB
  - FRAME "Skip button container", 58x32px, horizontal pad 4 4 4 4px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, fill #FFFFFF1A
    - TEXT "Skip button", 35x22px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 16px]
  - VECTOR "Vector", 288.85x54.25px, constraints center/top, fill gradient_linear(#A2A2A2 0% | #ADADAD 60% | #DDDDDD 100%), effect [drop_shadow 8px offset 0 4 #00000040]
  - TEXT "Section title", 290x25px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 21px]
  - FRAME "Features list", 267x152px, vertical pad 0 0 0 0px gap 24px sizing W:fixed H:fixed, constraints center/top
    - FRAME "Feature", 267x20px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fill H:fixed, constraints left/top
      - VECTOR "Star 24", 16x16px, constraints left/top, radius 0/0/0/0px, stroke #FFFFFF 1.5px
      - TEXT "Guaranteed access to Grok 3", 232x20px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
    - FRAME "Feature", 267x20px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - VECTOR "Star 24", 16x16px, constraints left/top, radius 0/0/0/0px, stroke #FFFFFF 1.5px
      - TEXT "Unlock DeepSearch and Think", 241x20px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
    - FRAME "Feature", 267x20px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fill H:fixed, constraints left/top
      - VECTOR "Star 24", 16x16px, constraints left/top, radius 0/0/0/0px, stroke #FFFFFF 1.5px
      - TEXT "Access Grok Voice Mode", 198x20px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
    - FRAME "Feature", 267x20px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fill H:fixed, constraints left/top
      - VECTOR "Star 24", 16x16px, constraints left/top, radius 0/0/0/0px, stroke #FFFFFF 1.5px
      - TEXT "Early access to new features", 228x20px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
  - FRAME "Plan options", 313x56px, horizontal pad 4 4 4 4px gap 12px align center/center sizing W:fixed H:fixed, constraints center/top, radius 20px, fill gradient_linear(#181818 0% | #111111 100%), stroke #252525 2px
    - FRAME "Plan option", 146.5x48px, horizontal pad 0 0 0 0px gap 4px align center/center sizing W:fill H:fill, constraints left/top, radius 20px, fill gradient_linear(#292929 0% | #292929 100%), stroke #343434 2px
      - TEXT "Monthly", 63x19px, constraints left/top, fill #FFFFFF, text [SF Pro Medium, 16px]
    - FRAME "Plan option", 146.5x48px, horizontal pad 0 0 0 0px gap 4px align center/center sizing W:fill H:fill, constraints left/top, radius 20px
      - TEXT "Yearly", 48x19px, constraints left/top, fill #979797, text [SF Pro Medium, 16px]
  - TEXT "Billing info", 267x16px, constraints center/top, fill #8F8F8F, text [SF Pro Regular, 13px]
  - FRAME "Upgrade button container", 353x56px, horizontal pad 16 0 16 0px gap 12px align center/center sizing W:fixed H:fixed, constraints center/top, radius 20px, fill #FF5401
    - TEXT "Upgrade button", 179x20px, constraints left/top, fill #FFFFFF, text [SF Pro Medium, 17px]
  - TEXT "Terms & Privacy", 223x16px, constraints left/top, fill #5D5D5D, text [SF Pro Regular, 13px]
  - INSTANCE "Status Bar - iPhone", 393x54px, constraints left/top, fill #FFFFFF
    - FRAME "Time", 140.5x54px, constraints scale/center
      - TEXT "Time", 37x22px, constraints scale/scale, fill #FFFFFF, text [SF Pro Semibold, 17px]
    - FRAME "Levels", 140.5x54px, constraints scale/center [decorative, ~5 shapes]

Screen: Page 1 / Chat
- FRAME "Chat", 393x852px, constraints left/top, fill #F8F6F5
  - INSTANCE "Home Indicator", 393x21px, constraints left_right/bottom
    - RECTANGLE "Home Indicator", 139x5px, constraints center/bottom, radius 100px, fill #000000
  - FRAME "Input Container", 369x92px, vertical pad 16 8 10 8px gap 14px sizing W:fixed H:fixed, constraints left/top, radius 24px, fill #FCFBFC, stroke #E0E0DE 1px
    - FRAME "Input Field", 353x20px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fill H:fixed, constraints left/top
      - TEXT "Input Placeholder", 337x20px, constraints left/top, fill #7A7B78, text [SF Pro Regular, 16px]
    - FRAME "Input Options", 353x32px, horizontal pad 0 0 0 0px gap 6px align min/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "PaperclipHorizontal", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 7.5x15.5px, constraints scale/scale, fill #000000
      - FRAME "Input Option", 130x32px, horizontal pad 0 12 0 12px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "LightbulbFilament", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 11.5x14.5px, constraints scale/scale, fill #000000
        - TEXT "Input Option Text", 87x20px, constraints left/top, fill #000000, text [SF Pro Regular, 15px]
      - FRAME "Input Option", 83x32px, horizontal pad 0 12 0 12px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "LightbulbFilament", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 11.5x14.5px, constraints scale/scale, fill #000000
        - TEXT "Input Option Text", 39x20px, constraints left/top, fill #000000, text [SF Pro Regular, 15px]
      - FRAME "Input Option", 90x32px, horizontal pad 0 0 0 0px gap 6px align max/center sizing W:fill H:fixed, constraints left/top
        - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
          - FRAME "Microphone", 16x16px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 11.5x15px, constraints scale/scale, fill #7B7B7B
        - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, fill #000000, stroke #E0E0DE 0.6px
          - FRAME "Waveform", 16x16px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 11.5x13.5px, constraints scale/scale, fill #FFFFFF
  - FRAME "Mode Selection", 405x114px, horizontal pad 0 0 0 0px gap 18px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Mode Container", 72x96px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Smiley", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 20.25x20.25px, constraints scale/scale, fill #7D7D7B
      - TEXT "Mode Text", 72x18px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 72x96px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Book", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 17.25x20.25px, constraints scale/scale, fill #7D7D7B
      - TEXT "Mode Text", 72x18px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 72x114px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "PersonArmsSpread", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 18.75x21.75px, constraints scale/scale, fill #7D7D7B
        - TEXT "KIDS", 24x12px, constraints left/top, fill #7F7F7D, text [SF Pro Medium, 10px]
      - TEXT "Mode Text", 72x36px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 72x114px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Trophy", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 23.25x18.75px, constraints scale/scale, fill #7D7D7B
        - TEXT "KIDS", 24x12px, constraints left/top, fill #7F7F7D, text [SF Pro Medium, 10px]
      - TEXT "Mode Text", 72x36px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 45x96px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 45x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Smiley", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 20.25x20.25px, constraints scale/scale, fill #7D7D7B
      - TEXT "Mode Text", 45x18px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
  - FRAME "Voice Activation", 232x20px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "Waveform", 16x16px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 11.5x13.5px, constraints scale/scale, fill #BABBB8
    - TEXT "Voice Activation Text", 208x20px, constraints left/top, fill #BABBB8, text [SF Pro Medium, 15px]
  - FRAME "Menu", 369x24px, horizontal pad 0 0 0 0px gap 95px align space_between/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "List", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 18.75x10.25px, constraints scale/scale, fill #000000
    - FRAME "Model", 93x20px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - ELLIPSE "Ellipse", 9x9px, constraints left/top, fill #EF6229
      - FRAME "Status Container", 76x20px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
        - TEXT "Status Text", 56x20px, constraints left/top, fill #000000, text [SF Pro Semibold, 17px]
        - FRAME "CaretRight", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 6.5x11.5px, constraints scale/scale, fill #7D7D7B
    - FRAME "edit-contained", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Icon", 16x16px, constraints scale/scale, radius 0/0/0/0px, stroke #000000 2px
  - INSTANCE "Status Bar - iPhone", 393x54px, constraints left/top, fill #FFFFFF
    - FRAME "Time", 140.5x54px, constraints scale/center
      - TEXT "Time", 37x22px, constraints scale/scale, fill #000000, text [SF Pro Semibold, 17px]
    - FRAME "Levels", 140.5x54px, constraints scale/center [decorative, ~5 shapes]

Screen: Page 1 / Permissons
- FRAME "Permissons", 393x852px, constraints left/top, fill #F8F6F5
  - FRAME "Input Container", 369x92px, vertical pad 16 8 10 8px gap 14px sizing W:fixed H:fixed, constraints left/top, radius 24px, fill #FCFBFC, stroke #E0E0DE 1px
    - FRAME "Input Field", 353x20px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fill H:fixed, constraints left/top
      - TEXT "Input Placeholder", 337x20px, constraints left/top, fill #7A7B78, text [SF Pro Regular, 16px]
    - FRAME "Input Options", 353x32px, horizontal pad 0 0 0 0px gap 6px align min/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "PaperclipHorizontal", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 7.5x15.5px, constraints scale/scale, fill #000000
      - FRAME "Input Option", 130x32px, horizontal pad 0 12 0 12px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "LightbulbFilament", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 11.5x14.5px, constraints scale/scale, fill #000000
        - TEXT "Input Option Text", 87x20px, constraints left/top, fill #000000, text [SF Pro Regular, 15px]
      - FRAME "Input Option", 83x32px, horizontal pad 0 12 0 12px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "LightbulbFilament", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 11.5x14.5px, constraints scale/scale, fill #000000
        - TEXT "Input Option Text", 39x20px, constraints left/top, fill #000000, text [SF Pro Regular, 15px]
      - FRAME "Input Option", 90x32px, horizontal pad 0 0 0 0px gap 6px align max/center sizing W:fill H:fixed, constraints left/top
        - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
          - FRAME "Microphone", 16x16px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 11.5x15px, constraints scale/scale, fill #7B7B7B
        - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, fill #000000, stroke #E0E0DE 0.6px
          - FRAME "Waveform", 16x16px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 11.5x13.5px, constraints scale/scale, fill #FFFFFF
  - FRAME "Mode Selection", 405x114px, horizontal pad 0 0 0 0px gap 18px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Mode Container", 72x96px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Smiley", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 20.25x20.25px, constraints scale/scale, fill #7D7D7B
      - TEXT "Mode Text", 72x18px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 72x96px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Book", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 17.25x20.25px, constraints scale/scale, fill #7D7D7B
      - TEXT "Mode Text", 72x18px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 72x114px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "PersonArmsSpread", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 18.75x21.75px, constraints scale/scale, fill #7D7D7B
        - TEXT "Kids Mode Label", 24x12px, constraints left/top, fill #7F7F7D, text [SF Pro Medium, 10px]
      - TEXT "Mode Text", 72x36px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 72x114px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 72x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Trophy", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 23.25x18.75px, constraints scale/scale, fill #7D7D7B
        - TEXT "Kids Mode Label", 24x12px, constraints left/top, fill #7F7F7D, text [SF Pro Medium, 10px]
      - TEXT "Mode Text", 72x36px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
    - FRAME "Mode Container", 45x96px, vertical pad 0 0 0 0px gap 6px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Mode Icon Container", 45x72px, constraints left/top, radius 20px, fill #FAFBF8, stroke #E0E0DE 0.8px, effect [drop_shadow 1px offset 0 1 #00000003, drop_shadow 3px offset 0 3 #00000003, drop_shadow 4px offset 0 6 #00000003, drop_shadow 4px offset 0 11 #00000000, drop_shadow 5px offset 0 17 #00000000]
        - FRAME "Smiley", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 20.25x20.25px, constraints scale/scale, fill #7D7D7B
      - TEXT "Mode Text", 45x18px, constraints left/top, fill #000000, text [SF Pro Semibold, 13px]
  - FRAME "Voice Activation", 232x20px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "Waveform", 16x16px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 11.5x13.5px, constraints scale/scale, fill #BABBB8
    - TEXT "Voice Activation Text", 208x20px, constraints left/top, fill #BABBB8, text [SF Pro Medium, 15px]
  - FRAME "Menu", 369x24px, horizontal pad 0 0 0 0px gap 95px align space_between/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "List", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 18.75x10.25px, constraints scale/scale, fill #000000
    - FRAME "Model", 93x20px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - ELLIPSE "Ellipse", 9x9px, constraints left/top, fill #EF6229
      - FRAME "Status Container", 76x20px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
        - TEXT "Status Text", 56x20px, constraints left/top, fill #000000, text [SF Pro Semibold, 17px]
        - FRAME "CaretRight", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 6.5x11.5px, constraints scale/scale, fill #7D7D7B
    - FRAME "edit-contained", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Icon", 16x16px, constraints scale/scale, radius 0/0/0/0px, stroke #000000 2px
  - FRAME "Alert", 393x852px, constraints center/center, fill #00000033
    - FRAME "Modal", 393x454px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints center/bottom
      - FRAME "Contents", 393x420px, vertical pad 20 16 20 16px gap 40px align min/center sizing W:fill H:fixed, constraints left/top, radius 32/32/24/24px, fill #FFFFFF
        - FRAME "Modal Header", 107x67px, vertical pad 0 0 0 0px gap 12px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Waveform", 32x32px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 23x27px, constraints scale/scale, fill #000000
          - TEXT "Modal Title", 107x23px, constraints left/top, fill #000000, text [SF Pro Semibold, 19px]
        - FRAME "Permissions Container", 361x181px, vertical pad 0 0 0 0px gap 16px sizing W:fill H:fill, constraints left/top
          - FRAME "Microphone Permission", 361x42px, horizontal pad 0 0 0 0px gap 16px align min/center sizing W:fill H:fixed, constraints left/top
            - FRAME "Microphone", 24x24px, constraints left/top, fill #FFFFFF
            - FRAME "Microphone Permission Text Container", 254x42px, vertical pad 0 0 0 0px gap 4px sizing W:fill H:fixed, constraints left/top
            - INSTANCE "Toggle", 51x31px, constraints left/top, radius 100px, fill #34C759
          - FRAME "Speech Recognition Permission", 361x42px, horizontal pad 0 0 0 0px gap 16px align min/center sizing W:fill H:fixed, constraints left/top
            - FRAME "Waveform", 24x24px, constraints left/top, fill #FFFFFF
            - FRAME "Speech Recognition Permission Text Container", 254x42px, vertical pad 0 0 0 0px gap 4px sizing W:fill H:fixed, constraints left/top
            - INSTANCE "Toggle", 51x31px, constraints left/top, radius 100px, fill #78788029
        - FRAME "Upgrade button container", 359x52px, horizontal pad 16 0 16 0px gap 12px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #0A0A0A
          - TEXT "Upgrade button", 200x20px, constraints left/top, fill #FFFFFF, text [SF Pro Medium, 17px]
      - INSTANCE "Home Indicator", 393x34px, constraints left/top
        - RECTANGLE "Home Indicator", 139x5px, constraints center/bottom, radius 100px, fill #000000
  - INSTANCE "Status Bar - iPhone", 393x54px, constraints left/top, fill #FFFFFF
    - FRAME "Time", 140.5x54px, constraints scale/center
      - TEXT "Time", 37x22px, constraints scale/scale, fill #000000, text [SF Pro Semibold, 17px]
    - FRAME "Levels", 140.5x54px, constraints scale/center [decorative, ~5 shapes]

Screen: Page 1 / DeepSearch
- FRAME "DeepSearch", 393x852px, constraints left/top, fill #F8F6F5
  - INSTANCE "Home Indicator", 393x21px, constraints left_right/bottom
    - RECTANGLE "Home Indicator", 139x5px, constraints center/bottom, radius 100px, fill #000000
  - FRAME "Input Container", 369x92px, vertical pad 16 8 10 8px gap 14px sizing W:fixed H:fixed, constraints left/top, radius 24px, fill #FCFBFC, stroke #E0E0DE 1px
    - FRAME "Input Field", 353x20px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fill H:fixed, constraints left/top
      - TEXT "Input Placeholder", 337x20px, constraints left/top, fill #7A7B78, text [SF Pro Regular, 16px]
    - FRAME "Input Options", 353x32px, horizontal pad 0 0 0 0px gap 6px align min/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "PaperclipHorizontal", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 7.5x15.5px, constraints scale/scale, fill #000000
      - FRAME "Input Option", 130x32px, horizontal pad 0 12 0 12px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, fill #E3EFFA, stroke #D1DAE6 0.6px
        - FRAME "LightbulbFilament", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 11.5x14.5px, constraints scale/scale, fill #2069CC
        - TEXT "Input Option Text", 87x20px, constraints left/top, fill #2069CC, text [SF Pro Regular, 15px]
      - FRAME "Input Option", 83x32px, horizontal pad 0 12 0 12px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
        - FRAME "LightbulbFilament", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 11.5x14.5px, constraints scale/scale, fill #000000
        - TEXT "Input Option Text", 39x20px, constraints left/top, fill #000000, text [SF Pro Regular, 15px]
      - FRAME "Input Option", 90x32px, horizontal pad 0 0 0 0px gap 6px align max/center sizing W:fill H:fixed, constraints left/top
        - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, stroke #E0E0DE 0.6px
          - FRAME "Microphone", 16x16px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 11.5x15px, constraints scale/scale, fill #7B7B7B
        - FRAME "Input Option", 32x32px, horizontal pad 0 8 0 8px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, fill #000000, stroke #E0E0DE 0.6px
          - FRAME "Square", 16x16px, constraints left/top, fill #FFFFFF
            - RECTANGLE "Input Option Icon", 10x10px, constraints scale/scale, radius 2px, fill #FFFFFF
  - FRAME "Menu", 369x24px, horizontal pad 0 0 0 0px gap 95px align space_between/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "List", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 18.75x10.25px, constraints scale/scale, fill #000000
    - FRAME "Model", 93x20px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - ELLIPSE "Ellipse", 9x9px, constraints left/top, fill #EF6229
      - FRAME "Status Container", 76x20px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
        - TEXT "Status Text", 56x20px, constraints left/top, fill #000000, text [SF Pro Semibold, 17px]
        - FRAME "CaretRight", 16x16px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 6.5x11.5px, constraints scale/scale, fill #7D7D7B
    - FRAME "edit-contained", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Icon", 16x16px, constraints scale/scale, radius 0/0/0/0px, stroke #000000 2px
  - FRAME "Question Container", 337x66px, horizontal pad 4 12 4 16px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 22/22/10/22px, fill #FDFBF9, stroke #E0E0DE 1px
    - TEXT "Question Text", 309x48px, constraints left/top, fill #000000, text [SF Pro Medium, 16px]
  - FRAME "Message Container", 361x74px, horizontal pad 16 12 16 16px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, radius 16px, fill gradient_linear(#DAEFF8 0% | #F3F6F9 100%), stroke #B7C7DB 1px
    - ELLIPSE "Loading", 26x26px, constraints left/top, stroke gradient_angular(#86CFE21A 0% | #86CFE2 100%) 3px
    - FRAME "Message Info", 255x41px, vertical pad 0 0 0 0px gap 5px sizing W:fill H:fixed, constraints left/top
      - TEXT "DeepSearch", 255x20px, constraints left/top, fill #000000, text [SF Pro Semibold, 17px]
      - TEXT "Time", 255x16px, constraints left/top, fill #697A82, text [SF Pro Regular, 13px]
    - FRAME "CaretRight", 20x20px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 8.13x14.38px, constraints scale/scale, fill #000000
  - INSTANCE "Status Bar - iPhone", 393x54px, constraints left/top, fill #FFFFFF
    - FRAME "Time", 140.5x54px, constraints scale/center
      - TEXT "Time", 37x22px, constraints scale/scale, fill #000000, text [SF Pro Semibold, 17px]
    - FRAME "Levels", 140.5x54px, constraints scale/center [decorative, ~5 shapes]

Screen: Page 1 / Login
- FRAME "Login", 393x852px, constraints left/top, fill #030303
  - INSTANCE "Home Indicator", 393x21px, constraints left_right/bottom
    - RECTANGLE "Home Indicator", 139x5px, constraints center/bottom, radius 100px, fill #FFFFFF
  - TEXT "Terms and Privacy", 299x32px, constraints left/top, fill #878787, text [SF Pro Regular, 12px]
  - FRAME "Buttons Container", 353x233px, vertical pad 0 0 0 0px gap 22px align min/center sizing W:fixed H:fixed, constraints left/top
    - FRAME "Buttons Container", 353x192px, vertical pad 0 0 0 0px gap 12px sizing W:fill H:fixed, constraints left/top
      - FRAME "Button", 353x56px, horizontal pad 16 0 16 0px gap 12px align center/center sizing W:fill H:fixed, constraints left/top, radius 20px, fill gradient_linear(#181818 0% | #111111 100%), stroke #252525 2px
        - GROUP "Group", 16x16.33px, constraints left/top [decorative, ~10 shapes]
        - TEXT "Button Text", 196x23px, constraints left/top, fill #FFFFFF, text [SF Pro Medium, 19px]
      - FRAME "Button", 353x56px, horizontal pad 16 0 16 0px gap 12px align center/center sizing W:fill H:fixed, constraints left/top, radius 20px, fill gradient_linear(#181818 0% | #111111 100%), stroke #252525 2px
        - FRAME "Logo.svg", 16x19.67px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 16x19.67px, constraints scale/scale
            - VECTOR "Vector", 16x19.67px, constraints scale/scale, fill #FFFFFF
        - TEXT "Button Text", 184x23px, constraints left/top, fill #FFFFFF, text [SF Pro Medium, 19px]
      - FRAME "Button", 353x56px, horizontal pad 16 0 16 0px gap 12px align center/center sizing W:fill H:fixed, constraints left/top, radius 20px, fill gradient_linear(#181818 0% | #111111 100%), stroke #252525 2px
        - FRAME "x_logo.svg", 18x16.27px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 18x16.27px, constraints scale/scale
            - VECTOR "Vector", 18x16.27px, constraints scale/scale, fill #FFFFFF
        - TEXT "Button Text", 144x23px, constraints left/top, fill #FFFFFF, text [SF Pro Medium, 19px]
    - TEXT "Other Options", 353x19px, constraints left/top, fill #858585, text [SF Pro Semibold, 16px]
  - TEXT "Subtitle", 353x21px, constraints left/top, fill #858585, text [Geist Mono Regular, 17px]
  - VECTOR "Grok Logo", 150.12x52.49px, constraints center/top, fill gradient_linear(#ECECEC 0% | #E7E7E7 100%)
  - FRAME "Skip Button", 58x32px, horizontal pad 4 4 4 4px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top, radius 99px, fill #FFFFFF1A
    - TEXT "Skip Text", 35x22px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 16px]
  - INSTANCE "Status Bar - iPhone", 393x54px, constraints left/top, fill #FFFFFF
    - FRAME "Time", 140.5x54px, constraints scale/center
      - TEXT "Time", 37x22px, constraints scale/scale, fill #FFFFFF, text [SF Pro Semibold, 17px]
    - FRAME "Levels", 140.5x54px, constraints scale/center [decorative, ~5 shapes]


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
