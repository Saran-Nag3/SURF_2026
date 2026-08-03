---
name: android-ussd-prompts-community
source_file: Android USSD prompts (Community)
source_page: All pages (3): Android USSD prompt, Cover, versions
generated_at: 2026-07-25T09:56:27.717196+00:00
---

# Android USSD prompts (Community) Design Guidelines

## Source
- Figma file: Android USSD prompts (Community)
- Figma page: All pages (3): Android USSD prompt, Cover, versions
- Extracted at: 2026-07-25T09:56:27.717196+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- grays/gray-lighter: [#F7F7F7]
- theme/light: [#FFFFFF]
- grays/gray-light: [#5E5E5F]
- secondary: [#3EAEAE]
- theme/dark: [#444445]
- primary: [#3A86FF]
- grays/gray: [#1A1A1A]
- white: [#FFFFFF]

## Raw Colors (unstyled)
- #FFFFFF0A: 9 uses
- #FFFFFF08: 6 uses
- #7B61FF: 4 uses
- #000000: 3 uses

## Typography Tokens
- Body/Default-regular: Roboto Regular (400), 12px / 20px, tracking 0px
- Body/Default-bold: Roboto Bold (700), 12px / 20px, tracking 0px
- Body/Large-bold: Roboto SemiBold (600), 14px / 20px, tracking 0px

## Raw Typography (unstyled)
- Roboto Condensed Bold, 40px: 4 uses

## Typography Hierarchy
- 40px - Roboto Condensed Bold, 40px (raw)
- 14px - Body/Large-bold (Roboto SemiBold)
- 12px - Body/Default-bold (Roboto Bold)
- 12px - Body/Default-regular (Roboto Regular)

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
- USSD prompt [new]
- _input-field
- _buttons
- _loader
- USSD prompt old

## Component Specs
- USSD prompt [new]: size 308x161px, radius 12px, vertical layout, padding 0 0 0 0px, gap 0px, sizing W:fixed H:fixed, fill theme/dark, text [Body/Default-bold, Body/Default-regular, Body/Large-bold] | variants: theme: dark/light; state: default/loading; button-count: none(0)/one(1)/two(2)
- _input-field: size 308x29px, vertical layout, padding 8 16 1 16px, gap 10px, align center/min, sizing W:fixed H:fixed, fill theme/light, effect [drop_shadow 0px offset 0 2 #3A86FF], text [Body/Default-regular] | variants: theme: dark/light
- _buttons: size 76x52px, horizontal layout, padding 16 16 16 16px, gap 8px, sizing W:fixed H:fixed, text [Body/Default-bold] | variants: state: Default
- _loader: size 40x40px, fill #FFFFFF
- USSD prompt old: size 308x144px, radius 12px, vertical layout, padding 0 0 0 0px, gap 0px, sizing W:fixed H:fixed, fill theme/dark, text [Body/Default-bold, Body/Default-regular] | variants: theme: dark/light; header: false/true; action: none/one/two

## Most-Used Styles
- primary: 45 uses
- Body/Default-regular: 37 uses
- white: 26 uses
- Body/Default-bold: 22 uses
- grays/gray-lighter: 17 uses
- grays/gray-light: 15 uses
- theme/dark: 12 uses
- theme/light: 12 uses
- grays/gray: 11 uses
- Body/Large-bold: 7 uses
- secondary: 7 uses

## Layout & Structure
Screen: Android USSD prompt / _buttons
- COMPONENT_SET "_buttons", 160x83px, constraints left/top, radius 5px, stroke #7B61FF 1px
  - COMPONENT "state=Default", 76x52px, horizontal pad 16 16 16 16px gap 8px sizing W:fixed H:fixed, constraints left/top
    - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]

Screen: Android USSD prompt / _input-field
- COMPONENT_SET "_input-field", 340x98px, constraints left/top, radius 5px, stroke #7B61FF 1px
  - COMPONENT "theme=light", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fixed H:fixed, constraints left/top, fill theme/light, effect [drop_shadow 0px offset 0 2 #3A86FF]
    - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
      - TEXT "1", 7x20px, constraints left/top, fill grays/gray, text [Body/Default-regular]
      - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px
  - COMPONENT "theme=dark", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fixed H:fixed, constraints left/top, fill theme/dark, effect [drop_shadow 0px offset 0 2 #3A86FF]
    - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
      - TEXT "1", 7x20px, constraints left/top, fill white, text [Body/Default-regular]
      - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px

Screen: Android USSD prompt / USSD prompt [new]
- COMPONENT_SET "USSD prompt [new]", 735x569px, constraints left/top, radius 5px, stroke #7B61FF 1px
  - COMPONENT "theme=dark, state=default, button-count=two(2)", 308x161px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "text-content", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fill H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill white, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "footer", 308x89px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - INSTANCE "_input-field", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fill H:fixed, constraints left/top, fill theme/dark, effect [drop_shadow 0px offset 0 2 #3A86FF]
        - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "1", 7x20px, constraints left/top, fill white, text [Body/Default-regular]
          - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px
      - FRAME "buttons", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 46x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 31x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=light, state=default, button-count=two(2)", 308x161px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/light
    - FRAME "text-content", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fill H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill grays/gray, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]
    - FRAME "footer", 308x89px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - INSTANCE "_input-field", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fill H:fixed, constraints left/top, fill theme/light, effect [drop_shadow 0px offset 0 2 #3A86FF]
        - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "1", 7x20px, constraints left/top, fill grays/gray, text [Body/Default-regular]
          - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px
      - FRAME "buttons", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 46x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 31x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=dark, state=default, button-count=one(1)", 308x132px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "text-content", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fill H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill white, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "footer", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "divider", 308x0px, constraints left/top, stroke grays/gray-light 1px
      - FRAME "buttons", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 16x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=light, state=default, button-count=one(1)", 308x132px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill white
    - FRAME "text-content", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fill H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill grays/gray, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]
    - FRAME "footer", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "divider", 308x0px, constraints left/top, stroke grays/gray-lighter 1px
      - FRAME "buttons", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 16x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=dark, state=loading, button-count=none(0)", 308x72px, horizontal pad 16 24 16 24px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, fill theme/dark
    - INSTANCE "_loader", 40x40px, constraints left/top, fill #FFFFFF
      - ELLIPSE "Ellipse 4", 26.67x26.67px, constraints scale/scale, fill secondary
    - TEXT "USSD code running...", 112x20px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
  - COMPONENT "theme=light, state=loading, button-count=one(1)", 308x72px, horizontal pad 16 24 16 24px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, fill theme/light
    - INSTANCE "_loader", 40x40px, constraints left/top, fill #FFFFFF
      - ELLIPSE "Ellipse 4", 26.67x26.67px, constraints scale/scale, fill secondary
    - TEXT "USSD code running...", 112x20px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]

Screen: Android USSD prompt / _loader
- COMPONENT "_loader", 40x40px, constraints left/top, fill #FFFFFF
  - ELLIPSE "Ellipse 4", 26.67x26.67px, constraints scale/scale, fill secondary

Screen: Android USSD prompt / Example
- FRAME "Example", 875x836px, constraints left/top, fill grays/gray-lighter
  - INSTANCE "USSD prompt [new]", 308x132px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "text-content", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fill H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill white, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "footer", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "divider", 308x0px, constraints left/top, stroke grays/gray-light 1px
      - FRAME "buttons", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 16x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - FRAME "Property-list", 274x213px, horizontal pad 16 16 16 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 8px, fill white, stroke secondary 1px
    - TEXT "component property list ----------------------------------- ", 242x181px, constraints left/top, fill #000000, text [Body/Default-regular]
  - FRAME "Property-list", 274x353px, horizontal pad 16 16 16 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 8px, fill white, stroke secondary 1px
    - TEXT "component property list ------------------------------------", 242x321px, constraints left/top, fill #000000, text [Body/Default-regular]
  - VECTOR "Arrow 1", 83x0px, constraints left/top, stroke primary 3px
  - VECTOR "Arrow 2", 83x0px, constraints left/top, stroke primary 3px
  - INSTANCE "USSD prompt [new]", 308x253px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/light
    - FRAME "text-content", 308x164px, vertical pad 16 16 8 16px gap 8px sizing W:fill H:fixed, constraints left/top
      - TEXT "Connection problem or invalid MMI code.", 276x140px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]
    - FRAME "footer", 308x89px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - INSTANCE "_input-field", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fill H:fixed, constraints left/top, fill theme/light, effect [drop_shadow 0px offset 0 2 #3A86FF]
        - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "1", 7x20px, constraints left/top, fill grays/gray, text [Body/Default-regular]
          - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px
      - FRAME "buttons", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 46x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 31x20px, constraints left/top, fill primary, text [Body/Default-bold]

Screen: Cover / Cover-old
- FRAME "Cover-old", 1728x1117px, constraints left/top, fill primary
  - GROUP "Group 1", 1510x1510px, constraints left/top
    - ELLIPSE "Ellipse 5", 1133.37x1133.37px, constraints left/top, fill #FFFFFF08
    - ELLIPSE "Ellipse 6", 1309.89x1309.89px, constraints left/top, fill #FFFFFF08
    - ELLIPSE "Ellipse 7", 1510x1510px, constraints left/top, fill #FFFFFF08
  - TEXT "Android USSD", 591x124px, constraints left/top, fill white, text [Roboto Condensed Bold, 105.98px], [heading]
  - TEXT "What you see when you dial shortcodes of mobile network oper", 1007x91px, constraints left/top, fill grays/gray-lighter, text [Roboto Condensed Regular, 36px], [heading]
  - RECTANGLE "image 7", 439.62x305.49px, constraints left/top, fill image(hash: ab0fac89dfc5acde3e262e9992aa615db9300e34), effect [drop_shadow 46.18px offset 23.09 46.18 #00000033]
  - RECTANGLE "image 5", 405.92x204.43px, constraints left/top, fill image(hash: 1025282f01a431ffd70b81d98b739abb3f0416d1), effect [drop_shadow 46.18px offset 23.09 46.18 #00000033]
  - RECTANGLE "image 3", 420.21x233.51px, constraints left/top, fill image(hash: 8c9c184841c85a9006810be783608fa9e7b00ce5), effect [drop_shadow 46.18px offset 23.09 46.18 #00000033]
  - RECTANGLE "image 1", 338.33x168.78px, constraints left/top, fill image(hash: 73ff6ec2b4723c0cca562fd97b2b22f94ed00a06), effect [drop_shadow 26.79px offset 5.36 10.72 #0000001A]
  - RECTANGLE "image 8", 434x293.03px, constraints left/top, fill image(hash: c700327c6535085d12c18952f5caa1ebb9baa4ef), effect [drop_shadow 46.18px offset 23.09 46.18 #00000033]
  - RECTANGLE "image 6", 401.77x195px, constraints left/top, fill image(hash: 6840767db60b1ef9a91e6330669c016a43a9da58), effect [drop_shadow 46.18px offset 23.09 46.18 #00000033]
  - RECTANGLE "image 4", 410.39x202.89px, constraints left/top, fill image(hash: 5aa045f42d53e3b86debb5d948ab5782e592f370), effect [drop_shadow 46.18px offset 23.09 46.18 #00000033]
  - RECTANGLE "image 2", 338.8x159.96px, constraints left/top, fill image(hash: 6a86f0727020c88c59f3e62362ef55fcf00cb9ba), effect [drop_shadow 26.79px offset 5.36 10.72 #0000001A, drop_shadow 32.27px offset 6.45 12.91 #0000001A]
  - RECTANGLE "image 10", 276.61x614px, constraints left/top, radius 18.44px, fill image(hash: cc7d1565989245a4eaccbe8958f4bcc717f5f176), stroke grays/gray 9.22px, effect [drop_shadow 50.19px offset 25.09 50.19 #00000033]

Screen: Cover / Cover
- FRAME "Cover", 1728x1228px, constraints left/top, fill primary
  - GROUP "Group 1", 2137x2137px, constraints left/top
    - ELLIPSE "Ellipse 5", 1603.99x1603.99px, constraints left/top, fill #FFFFFF08
    - ELLIPSE "Ellipse 6", 1853.8x1853.8px, constraints left/top, fill #FFFFFF08
    - ELLIPSE "Ellipse 7", 2137x2137px, constraints left/top, fill #FFFFFF08
  - GROUP "Group 4", 862.02x666px, constraints left/top [decorative, ~8 shapes]
  - FRAME "Frame 2", 1085x215px, vertical pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
    - TEXT "Android USSD", 591x124px, constraints left/top, fill white, text [Roboto Condensed Bold, 105.98px], [heading]
    - TEXT "What you see when you dial shortcodes of mobile network oper", 1085x91px, constraints left/top, fill grays/gray-lighter, text [Roboto Condensed Regular, 36px], [heading]

Screen: Cover / Social
- FRAME "Social", 955x1117px, constraints left/top, fill primary
  - GROUP "Group 1", 1369x1369px, constraints left/top
    - ELLIPSE "Ellipse 5", 1027.54x1027.54px, constraints left/top, fill #FFFFFF0A
    - ELLIPSE "Ellipse 6", 1187.58x1187.58px, constraints left/top, fill #FFFFFF0A
    - ELLIPSE "Ellipse 7", 1369x1369px, constraints left/top, fill #FFFFFF0A
  - RECTANGLE "image 10", 323.58x337.96px, constraints left/top, radius 21.57px, fill image(hash: cc7d1565989245a4eaccbe8958f4bcc717f5f176), stroke grays/gray 10.79px
  - RECTANGLE "image 7", 330.12x229.39px, constraints left/top, fill image(hash: ab0fac89dfc5acde3e262e9992aa615db9300e34), effect [drop_shadow 34.68px offset 17.34 34.68 #00000033]
  - RECTANGLE "image 5", 304.81x153.51px, constraints left/top, fill image(hash: 1025282f01a431ffd70b81d98b739abb3f0416d1), effect [drop_shadow 34.68px offset 17.34 34.68 #00000033]
  - RECTANGLE "image 3", 315.54x175.35px, constraints left/top, fill image(hash: 8c9c184841c85a9006810be783608fa9e7b00ce5), effect [drop_shadow 34.68px offset 17.34 34.68 #00000033]
  - RECTANGLE "image 1", 254.52x109.7px, constraints left/top, fill image(hash: 73ff6ec2b4723c0cca562fd97b2b22f94ed00a06), effect [drop_shadow 20.12px offset 4.02 8.05 #0000001A]
  - RECTANGLE "image 8", 314.25x196.71px, constraints left/top, fill image(hash: c700327c6535085d12c18952f5caa1ebb9baa4ef), effect [drop_shadow 34.68px offset 17.34 34.68 #00000033]
  - RECTANGLE "image 6", 313.51x175.4px, constraints left/top, fill image(hash: 6840767db60b1ef9a91e6330669c016a43a9da58), effect [drop_shadow 34.68px offset 17.34 34.68 #00000033]
  - RECTANGLE "image 4", 298.81x128.55px, constraints left/top, fill image(hash: 5aa045f42d53e3b86debb5d948ab5782e592f370), effect [drop_shadow 34.68px offset 17.34 34.68 #00000033]
  - RECTANGLE "image 2", 254.29x102.65px, constraints left/top, fill image(hash: 6a86f0727020c88c59f3e62362ef55fcf00cb9ba), effect [drop_shadow 20.12px offset 4.02 8.05 #0000001A, drop_shadow 24.23px offset 4.85 9.69 #0000001A]
  - TEXT "Android USSD", 398x84px, constraints left/top, fill white, text [Roboto Condensed Bold, 71.36px], [heading]
  - TEXT "A FIGMA COMMUNITY FILE", 467x28px, constraints left/top, fill white, text [Roboto Condensed Light, 24px], [heading]

Screen: Cover / Social
- FRAME "Social", 955x1117px, constraints left/top, fill primary
  - GROUP "Group 1", 1369x1369px, constraints left/top
    - ELLIPSE "Ellipse 5", 1027.54x1027.54px, constraints left/top, fill #FFFFFF0A
    - ELLIPSE "Ellipse 6", 1187.58x1187.58px, constraints left/top, fill #FFFFFF0A
    - ELLIPSE "Ellipse 7", 1369x1369px, constraints left/top, fill #FFFFFF0A
  - FRAME "Frame 5", 588x163px, vertical pad 0 0 0 0px gap 24px align min/center sizing W:fixed H:fixed, constraints left/top
    - TEXT "Android USSD Prompts", 588x75px, constraints left/top, fill white, text [Roboto Condensed Bold, 64px], [heading]
    - FRAME "Frame 4", 359.33x64px, horizontal pad 16 24 16 24px gap 16px align center/center sizing W:fixed H:fixed, constraints left/top, radius 32px, fill #444445
      - FRAME "Figma svg", 21.33x32px, constraints left/top, fill #FFFFFF [decorative, ~6 shapes]
      - LINE "Line 1", 0x32px, constraints left/top, stroke grays/gray-light 1px
      - TEXT "A FIGMA COMMUNITY FILE", 258x19px, constraints left/top, fill white, text [Roboto Condensed Medium, 16px]
  - GROUP "Group 12", 599.78x736.22px, constraints left/top [decorative, ~10 shapes]

Screen: Cover / Social
- FRAME "Social", 955x1117px, constraints left/top, fill primary
  - GROUP "Group 1", 1369x1369px, constraints left/top
    - ELLIPSE "Ellipse 5", 1027.54x1027.54px, constraints left/top, fill #FFFFFF0A
    - ELLIPSE "Ellipse 6", 1187.58x1187.58px, constraints left/top, fill #FFFFFF0A
    - ELLIPSE "Ellipse 7", 1369x1369px, constraints left/top, fill #FFFFFF0A
  - FRAME "Frame 5", 588x147px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
    - TEXT "Android USSD Prompts", 588x75px, constraints left/top, fill white, text [Roboto Condensed Bold, 64px], [heading]
    - FRAME "Frame 4", 359.33x64px, horizontal pad 16 24 16 24px gap 16px align center/center sizing W:fixed H:fixed, constraints left/top, radius 32px, fill #444445
      - FRAME "Figma svg", 21.33x32px, constraints left/top, fill #FFFFFF [decorative, ~6 shapes]
      - LINE "Line 1", 0x32px, constraints left/top, stroke grays/gray-light 1px
      - TEXT "A FIGMA COMMUNITY FILE", 258x19px, constraints left/top, fill white, text [Roboto Condensed Medium, 16px]
  - GROUP "Group 11", 706.78x775.73px, constraints left/top [decorative, ~10 shapes]

Screen: versions / USSD prompt old
- COMPONENT_SET "USSD prompt old", 814x949px, constraints left/top, radius 5px, stroke #7B61FF 1px
  - COMPONENT "theme=dark, header=false, action=one", 308x144px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "Frame 1213", 308x84px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Authorize payment of 1000.00 from your account to [expressPa", 276x60px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "Frame 1215", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "Line 56", 308x0px, constraints left/top, stroke grays/gray-light 1px
      - FRAME "Frame 1214", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=dark, header=false, action=two", 308x144px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "Frame 1213", 308x84px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Authorize payment of 1000.00 from your account to [expressPa", 276x60px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "Frame 1215", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "Line 56", 308x0px, constraints left/top, stroke grays/gray-light 1px
      - FRAME "Frame 1214", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=dark, header=true, action=one", 308x132px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "Frame 1213", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill white, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "Frame 1215", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "Line 56", 308x0px, constraints left/top, stroke grays/gray-light 1px
      - FRAME "Frame 1214", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=light, header=true, action=one", 308x132px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/light
    - FRAME "Frame 1213", 308x72px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Vodafone GH Message", 276x20px, constraints left/top, fill grays/gray, text [Body/Large-bold]
      - TEXT "Connection problem or invalid MMI code.", 276x20px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]
    - FRAME "Frame 1215", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "Line 56", 308x0px, constraints left/top, stroke grays/gray-lighter 1px
      - FRAME "Frame 1214", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=light, header=false, action=one", 308x144px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/light
    - FRAME "Frame 1213", 308x84px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Authorize payment of 1000.00 from your account to [expressPa", 276x60px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]
    - FRAME "Frame 1215", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "Line 56", 308x0px, constraints left/top, stroke grays/gray-lighter 1px
      - FRAME "Frame 1214", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 308x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=light, header=false, action=two", 308x144px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/light
    - FRAME "Frame 1213", 308x84px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Authorize payment of 1000.00 from your account to [expressPa", 276x60px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]
    - FRAME "Frame 1215", 308x60px, vertical pad 0 0 0 0px gap 8px align min/center sizing W:fill H:fixed, constraints left/top
      - LINE "Line 56", 308x0px, constraints left/top, stroke grays/gray-lighter 1px
      - FRAME "Frame 1214", 308x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 154x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=dark, header=false, action=two", 312x181px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/dark
    - FRAME "Frame 1213", 308x84px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Authorize payment of 1000.00 from your account to [expressPa", 276x60px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
    - FRAME "Frame 1215", 312x97px, vertical pad 0 0 0 0px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Frame 1216", 312x29px, vertical pad 0 2 0 2px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
        - INSTANCE "_input-field", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fixed H:fixed, constraints left/top, fill theme/dark, effect [drop_shadow 0px offset 0 2 #3A86FF]
          - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
            - TEXT "1", 7x20px, constraints left/top, fill white, text [Body/Default-regular]
            - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px
      - FRAME "Frame 1214", 312x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 156x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 156x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=light, header=false, action=two", 312x181px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12px, fill theme/light
    - FRAME "Frame 1213", 308x84px, vertical pad 16 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top
      - TEXT "Authorize payment of 1000.00 from your account to [expressPa", 276x60px, constraints left/top, fill grays/gray, text [Body/Default-regular]
    - FRAME "Frame 1215", 312x97px, vertical pad 0 0 0 0px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Frame 1216", 312x29px, vertical pad 0 2 0 2px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
        - INSTANCE "_input-field", 308x29px, vertical pad 8 16 1 16px gap 10px align center/min sizing W:fixed H:fixed, constraints left/top, fill theme/light, effect [drop_shadow 0px offset 0 2 #3A86FF]
          - FRAME "Frame 1210", 7x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
            - TEXT "1", 7x20px, constraints left/top, fill grays/gray, text [Body/Default-regular]
            - LINE "Line 55", 0x20px, constraints left/top, stroke primary 1px
      - FRAME "Frame 1214", 312x52px, horizontal pad 0 0 0 0px gap 0px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "_buttons", 156x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
        - INSTANCE "_buttons", 156x52px, horizontal pad 16 16 16 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top
          - TEXT "Action", 44x20px, constraints left/top, fill primary, text [Body/Default-bold]
  - COMPONENT "theme=dark, header=false, action=none", 308x72px, horizontal pad 16 24 16 24px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, fill theme/dark
    - INSTANCE "_loader", 40x40px, constraints left/top, fill #FFFFFF
      - ELLIPSE "Ellipse 4", 26.67x26.67px, constraints scale/scale, fill secondary
    - TEXT "USSD code running...", 112x20px, constraints left/top, fill grays/gray-lighter, text [Body/Default-regular]
  - COMPONENT "theme=light, header=false, action=none", 308x72px, horizontal pad 16 24 16 24px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, fill theme/light
    - INSTANCE "_loader", 40x40px, constraints left/top, fill #FFFFFF
      - ELLIPSE "Ellipse 4", 26.67x26.67px, constraints scale/scale, fill secondary
    - TEXT "USSD code running...", 112x20px, constraints left/top, fill grays/gray-light, text [Body/Default-regular]

Screen: versions / version 0.0.1
- FRAME "version 0.0.1", 375x168px, horizontal pad 24 24 24 24px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 8px, fill grays/gray-lighter
  - TEXT "This component set did not have the highlighted variants. Th", 327x120px, constraints left/top, fill #000000, text [Body/Default-regular]

Screen: versions / Rectangle 1
- RECTANGLE "Rectangle 1", 962x169px, constraints left/top, stroke #FF0000 2px


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
