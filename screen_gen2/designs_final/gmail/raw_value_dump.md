---
name: gmail-mobile-app-community
source_file: Gmail Mobile App (Community)
source_page: All pages (2): Page 1, cover
generated_at: 2026-07-25T09:13:49.555624+00:00
---

# Gmail Mobile App (Community) Design Guidelines

## Source
- Figma file: Gmail Mobile App (Community)
- Figma page: All pages (2): Page 1, cover
- Extracted at: 2026-07-25T09:13:49.555624+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- Screen Components: [#262C2D]
- fl-gray-600: [#636F73]
- fl-gray-1000: [#121515]
- Device BG: [#121515]
- Device Surround: [#3A4245]
- Side Buttons: [#121515]
- gmail/grey: [#5D5C5D]
- gmail/red: [#EA4335]
- SystemOrange / Light: [#FF9500]
- Carbon / Darkest: [#24262B]
- Carbon Neutral/300: [#D6D9DD]
- gmail/light-grey: none
- gmail/blue: [#FFFFFF]
- gmail/black: [#292929]
- gmail/yellow: none

## Raw Colors (unstyled)
- #FFFFFF: 45 uses
- #000000: 7 uses
- #DADADA: 7 uses
- #C52627: 3 uses
- #EA4535: 3 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- Roboto Regular, 14px: 30 uses
- Product Sans Bold, 14px: 10 uses
- Product Sans Bold, 20px: 10 uses
- Roboto Medium, 14px: 10 uses
- Roboto Regular, 12px: 10 uses
- Product Sans Regular, 14px: 3 uses

## Typography Hierarchy
- 20px - Product Sans Bold, 20px (raw)
- 14px - Product Sans Bold, 14px (raw)
- 14px - Product Sans Regular, 14px (raw)
- 14px - Roboto Medium, 14px (raw)
- 14px - Roboto Regular, 14px (raw)
- 12px - Roboto Regular, 12px (raw)

## Spacing Tokens
- No spacing variables found.

## Radius Tokens
- No radius variables found.

## Motion Tokens
- No motion variables found.

## Effect Styles
- Device Dropshadow: [drop_shadow 2px offset 0 0 #00154024, drop_shadow 4px offset 0 2 #0015400D, drop_shadow 48px offset 13 37 #00000039]

## Grid Styles
- No local grid styles found.

## Component Families
- mail
- Devices

## Component Specs
- mail: size 351x110px, horizontal layout, padding 12 0 12 0px, gap 12px, sizing W:fixed H:fixed, fill #FFFFFF, text [Roboto Regular, 14px, Roboto Regular, 12px, Roboto Medium, 14px, Product Sans Bold, 14px, Product Sans Bold, 20px]
- Devices / Apple / iPhone 11 Pro: size 427x858px

## Most-Used Styles
- gmail/grey: 54 uses
- gmail/red: 34 uses
- gmail/blue: 30 uses
- gmail/yellow: 24 uses
- gmail/black: 20 uses
- gmail/light-grey: 20 uses
- Carbon Neutral/300: 1 use
- SystemOrange / Light: 1 use

## Layout & Structure
Screen: Page 1 / splash
- FRAME "splash", 375x812px, constraints left/top, fill #FFFFFF
  - GROUP "logo", 18x13.51px, constraints scale/scale, opacity 0% [decorative, ~5 shapes]

Screen: Page 1 / splash
- FRAME "splash", 375x812px, constraints left/top, fill #FFFFFF
  - GROUP "logo", 152.8x114.65px, constraints scale/scale [decorative, ~5 shapes]

Screen: Page 1 / iPhone 11 Pro / X - 1
- FRAME "iPhone 11 Pro / X - 1", 375x812px, constraints left/top, fill #FFFFFF
  - FRAME "email-list", 351x650px, constraints left/top
    - COMPONENT "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: c971987d3f928296e812e08a80579ad205b8831f)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 95x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 188x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 207x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
        - FRAME "files", 188x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: f5462fa0d40524b862e01d755410aa738ddeea33)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 83x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 75x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 112x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, fill gmail/yellow, stroke gmail/yellow 1.5px
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: dc0ec30e35d14bdb4a7718d896929d5c58289fa0)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 105x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 132x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 207x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 51x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: fb410b082547792bf3816f34b969e752342ab8de)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 96x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 171x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 215x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 51x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
        - FRAME "files", 188x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: f5462fa0d40524b862e01d755410aa738ddeea33)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 83x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 75x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 112x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, fill gmail/yellow, stroke gmail/yellow 1.5px
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: dd2d71795811f94efacbff587105aa1c8e3ea744)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 85x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 188x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 116x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: 06d6bf81348ae4b55c86fa4e6abd062993abac45)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 131x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 123x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 112x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: fb410b082547792bf3816f34b969e752342ab8de)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 96x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 171x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 215x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 51x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
        - FRAME "files", 188x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: 411f0a0069967b91fd9bfbde4d0ef59c07167bb8)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 94x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 188x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 170x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
        - FRAME "files", 188x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "Frame 1", 90x24px, horizontal pad 4 8 4 8px gap 3px align min/center sizing W:fixed H:fixed, constraints left/top, radius 30px, stroke gmail/light-grey 1px
            - FRAME "file", 16x16px, constraints left/top, fill #FFFFFF
            - TEXT "message", 55x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
    - INSTANCE "mail", 351x110px, horizontal pad 12 0 12 0px gap 12px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
      - FRAME "left", 32x32px, constraints left/top
        - ELLIPSE "Ellipse 2", 32x32px, constraints left/top, fill image(hash: 06d6bf81348ae4b55c86fa4e6abd062993abac45)
        - TEXT "sender", 32x32px, constraints left/top, fill #FFFFFF, text [Product Sans Bold, 20px], opacity 0%
      - FRAME "content", 307x86px, vertical pad 0 0 0 0px gap 6px sizing W:fixed H:fixed, constraints left/top
        - FRAME "body", 307x56px, constraints left/top, fill #FFFFFF
          - FRAME "middle", 264x56px, constraints left/top
            - TEXT "sender", 131x17px, constraints left/top, fill gmail/black, text [Product Sans Bold, 14px]
            - FRAME "chevrons-right", 16x20px, constraints left/top, fill #FFFFFF
            - TEXT "subject", 123x16px, constraints left/top, fill gmail/black, text [Roboto Medium, 14px]
            - TEXT "message", 112x16px, constraints left/top, fill gmail/grey, text [Roboto Regular, 14px]
          - FRAME "right", 50x49px, constraints left/top
            - TEXT "02:02 am", 50x14px, constraints right/top, fill gmail/grey, text [Roboto Regular, 12px]
            - VECTOR "Vector", 16.67x15.85px, constraints right/bottom, stroke gmail/grey 1.5px
    - TEXT "Recibidos", 60x14px, constraints left/top, fill gmail/grey, text [Roboto Medium, 12px]
  - RECTANGLE "Rectangle 3", 375x31px, constraints left/top, fill gradient_linear(#FFFFFF 0% | #FFFFFF00 100%)
  - FRAME "iPhone X, 11 Pro / Dark / Base", 375x44px, constraints left/top, fill #FFFFFF [decorative, ~18 shapes]
  - FRAME "search", 351x44px, constraints left/top, radius 8px, fill #FFFFFF, stroke #000000 1px, effect [drop_shadow 4px offset 0 0 #00000040]
    - FRAME "mdi_menu", 24x24px, constraints left/center, fill #FFFFFF
      - VECTOR "Vector", 24x24px, constraints scale/scale
      - VECTOR "Vector", 18x12px, constraints scale/scale, fill gmail/grey
    - TEXT "Busca en el correo electrónico", 183x17px, constraints left/center, fill gmail/grey, text [Product Sans Regular, 14px]
    - ELLIPSE "Ellipse 1", 28x28px, constraints left/top, fill image(hash: bfe58b21510ca86917b9c3ccc0913f92357582be)
  - FRAME "bottom", 375x64px, constraints left/bottom, fill #FFFFFF
    - RECTANGLE "Rectangle 2", 187.5x64px, constraints left/top, fill #FFFFFF, effect [drop_shadow 0px offset 0 -1 #00000040]
    - RECTANGLE "Rectangle 2", 187.5x64px, constraints left/top, fill #FFFFFF, effect [drop_shadow 0px offset 0 -1 #00000040]
    - FRAME "mail", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 20x16px, constraints scale/scale, fill gmail/red, stroke gmail/red 2px
      - VECTOR "Vector", 20x7px, constraints scale/scale, stroke #FFFFFF 2px
    - FRAME "video", 24x24px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 7x10px, constraints scale/scale, stroke gmail/grey 2px
      - VECTOR "Vector", 15x14px, constraints scale/scale, stroke gmail/grey 2px
    - TEXT "Correo", 45x17px, constraints left/top, fill gmail/red, text [Product Sans Regular, 14px]
    - FRAME "Frame 3", 24x16px, horizontal pad 2 3 2 3px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top, radius 50px, fill gmail/red
      - TEXT "99+", 18x12px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 10px]
    - TEXT "Reunirse", 56x17px, constraints left/top, fill gmail/grey, text [Product Sans Regular, 14px]

Screen: cover / Plugin / File Cover - 1
- FRAME "Plugin / File Cover - 1", 1920x960px, constraints left/top, fill #EA4535
  - VECTOR "Vector 1", 1144.62x933.9px, constraints left/top, fill #C52627
  - INSTANCE "Devices / Apple / iPhone 11 Pro", 427x858px, constraints left/top [device mockup, collapsed]
  - COMPONENT "Devices / Apple / iPhone 11 Pro", 427x858px, constraints left/top [device mockup, collapsed]
  - TEXT "GMAIL mobile app", 659x283px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 200px], [heading]
  - TEXT "Splash screen Inbox email list Prototype ready", 480x261px, constraints left/top, fill #FFFFFF, stroke #FFFFFF 1px, text [Gilroy Light, 64px], [heading]
  - ELLIPSE "Ellipse 1", 10x10px, constraints left/top, fill #FFFFFF
  - ELLIPSE "Ellipse 2", 10x10px, constraints left/top, fill #FFFFFF
  - ELLIPSE "Ellipse 3", 10x10px, constraints left/top, fill #FFFFFF


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
