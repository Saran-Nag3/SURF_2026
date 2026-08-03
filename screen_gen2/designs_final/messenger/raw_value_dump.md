---
name: messenger-app-screen-community
source_file: Messenger App Screen (Community)
source_page: Page 1
generated_at: 2026-07-25T09:17:38.703264+00:00
---

# Messenger App Screen (Community) Design Guidelines

## Source
- Figma file: Messenger App Screen (Community)
- Figma page: Page 1
- Extracted at: 2026-07-25T09:17:38.703264+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- black/black: [#200E32]

## Raw Colors (unstyled)
- #FFFFFF: 123 uses
- #8C8098: 46 uses
- #8667F2: 26 uses
- #200E32: 18 uses
- #230B34: 16 uses
- #CCC7D1: 9 uses
- #FFFFFFE5: 9 uses
- #171717: 6 uses
- #DADADA: 6 uses
- #FA6969: 6 uses
- #2B99FF: 5 uses
- #3A63FB: 5 uses
- #C4C4C4: 4 uses
- #EBE9ED: 3 uses
- #F2F1F3: 3 uses
- #FC4A22: 3 uses

## Typography Tokens
- head/auto/14px: SF Pro Text Semibold (600), 14px / auto, tracking 0px
- body/auto/12px: SF Pro Text Regular (400), 12px / auto, tracking 0px

## Raw Typography (unstyled)
- General Sans Regular, 12px: 13 uses
- General Sans Regular, 14px: 9 uses
- Helvetica Bold, 14px: 8 uses
- General Sans Medium, 16px: 7 uses
- General Sans Medium, 14px: 6 uses
- General Sans Medium, 12px: 5 uses
- General Sans Regular, 16px: 5 uses
- General Sans Medium, 15px: 3 uses

## Typography Hierarchy
- 16px - General Sans Medium, 16px (raw)
- 16px - General Sans Regular, 16px (raw)
- 15px - General Sans Medium, 15px (raw)
- 14px - General Sans Medium, 14px (raw)
- 14px - General Sans Regular, 14px (raw)
- 14px - Helvetica Bold, 14px (raw)
- 14px - head/auto/14px (SF Pro Text Semibold)
- 12px - General Sans Medium, 12px (raw)
- 12px - General Sans Regular, 12px (raw)
- 12px - body/auto/12px (SF Pro Text Regular)

## Spacing Tokens
- No spacing variables found.

## Radius Tokens
- No radius variables found.

## Motion Tokens
- No motion variables found.

## Effect Styles
- block-down: [drop_shadow 16px offset 0 4 #8C809733]

## Grid Styles
- No local grid styles found.

## Component Families
- No components were found in any page of this file. Add component sets to improve guideline coverage.

## Component Specs
- No component geometry was extracted. Add components or component sets to populate this section.

## Most-Used Styles
- head/auto/14px: 4 uses
- black/black: 3 uses
- block-down: 1 use
- body/auto/12px: 1 use

## Layout & Structure
Screen: Page 1 / Messenger App
- FRAME "Messenger App", 1600x1200px, constraints left/top, fill #F4F0FA
  - ELLIPSE "Ellipse 183", 1117.37x1117.37px, constraints left/top, fill #8667F21A, effect [layer_blur 112.68px]
  - ELLIPSE "Ellipse 184", 1117.37x1117.37px, constraints left/top, fill #8667F21A, effect [layer_blur 112.68px]
  - FRAME "Chat info - Observer", 375x812px, constraints left/top, radius 44px, fill #F2F1F3, stroke #FFFFFF 8px, effect [drop_shadow 60px offset 60 60 #2D01471A]
    - RECTANGLE "unsplash:cfKwE7k9qqA", 375x375px, constraints center/top, fill image(hash: 02a2e83734177572f6f83faa63cb49636478f929)
    - FRAME "Frame 265", 375x1643px, constraints left/top, radius 16px
      - FRAME "bg", 375x812px, constraints left/top, fill #FFFFFF [decorative, ~5 shapes]
      - FRAME "Frame 265", 375x247px, constraints left/top
        - FRAME "Frame 241", 375x182px, constraints left_right/top, fill #FFFFFFE5, effect [background_blur 20px]
          - TEXT "Cat lovers", 156x43px, constraints center/top, fill #200E32, text [General Sans Semibold, 32px], [heading]
          - FRAME "Frame 239", 84x22px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/center
            - FRAME "Frame 288", 25x20px, horizontal pad 0 0 0 0px gap 2px align min/center sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 287", 51x22px, horizontal pad 0 0 0 0px gap 2px align min/center sizing W:fixed H:fixed, constraints left/top
          - TEXT "text", 343x66px, constraints center/top, fill #200E32, text [General Sans Regular, 16px]
        - FRAME "Frame 265", 375x65px, constraints left/top, fill #FFFFFFE5, effect [background_blur 20px]
          - FRAME "Frame 303", 423x50px, horizontal pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
            - FRAME "icon-button", 121x50px, vertical pad 14 20 14 16px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 6px, fill #FFFFFF, stroke #CCC7D1 1px
            - FRAME "icon-button", 116x49px, vertical pad 14 20 14 16px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 6px, fill #FFFFFF, stroke #CCC7D1 1px
            - FRAME "icon-button", 170x49px, vertical pad 14 20 14 16px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 6px, fill #FFFFFF, stroke #CCC7D1 1px
      - FRAME "Frame 265", 343x146px, vertical pad 0 0 0 0px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 242", 343x46px, constraints center/top, radius 8px, fill #FFFFFFE5, effect [background_blur 20px]
          - FRAME "Frame 265", 69x22px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/center
            - FRAME "icon/sound-off", 22x22px, constraints center/center, fill #FFFFFF
            - TEXT "Mute", 39x22px, constraints center/bottom, fill #200E32, text [General Sans Medium, 16px]
          - FRAME "Frame 267", 47x22px, horizontal pad 0 0 0 0px gap 4px align max/center sizing W:fixed H:fixed, constraints right/center
            - TEXT "No", 21x22px, constraints center/bottom, fill #8C8098, text [General Sans Regular, 16px]
            - FRAME "icon/chevron-right", 22x22px, constraints left/top, fill #FFFFFF
        - FRAME "Frame 244", 343x46px, constraints center/top, radius 8px, fill #FFFFFFE5, effect [background_blur 20px]
          - FRAME "Frame 265", 172x22px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/center
            - FRAME "icon/heart", 22x22px, constraints center/center, fill #FFFFFF
            - TEXT "Mute", 142x22px, constraints center/bottom, fill #200E32, text [General Sans Medium, 16px]
          - FRAME "Frame 267", 48x22px, horizontal pad 0 0 0 0px gap 4px align max/center sizing W:fixed H:fixed, constraints right/center
            - TEXT "No", 22x22px, constraints center/bottom, fill #8C8098, text [General Sans Regular, 16px]
            - FRAME "icon/chevron-right", 22x22px, constraints left/top, fill #FFFFFF
        - FRAME "Frame 243", 343x46px, constraints center/top, radius 8px, fill #FFFFFFE5, effect [background_blur 20px]
          - FRAME "Frame 265", 83x22px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/center
            - FRAME "icon/search", 22x22px, constraints center/center, fill #FFFFFF
            - TEXT "Mute", 53x22px, constraints center/bottom, fill #200E32, text [General Sans Medium, 16px]
          - FRAME "Frame 267", 22x22px, horizontal pad 0 0 0 0px gap 4px align max/center sizing W:fixed H:fixed, constraints right/center
            - FRAME "icon/chevron-right", 22x22px, constraints left/top, fill #FFFFFF
    - RECTANGLE "Rectangle 163", 375x120px, constraints left_right/top, fill gradient_linear(#000000 0% | #00000000 100%)
    - FRAME "Frame 7", 20x20px, horizontal pad 0 0 0 0px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "icon-native/small/chevron-left", 20x20px, constraints left/top
        - TEXT "􀆉", 13x19px, constraints center/center, fill #FFFFFF, text [SF Pro Display Semibold, 16px]
    - FRAME "icon/share", 22.54x22.54px, constraints right/top, fill #FFFFFF
      - GROUP "Upload", 17.37x17.88px, constraints left/top, fill #FFFFFF
        - VECTOR "Stroke 1", 17.37x11.5px, constraints scale/scale, stroke #FFFFFF 1.41px
        - VECTOR "Stroke 3", 0.94x11.31px, constraints scale/scale, stroke #FFFFFF 1.41px
        - VECTOR "Stroke 5", 5.48x2.75px, constraints scale/scale, stroke #FFFFFF 1.41px
  - FRAME "Chat - Inner", 375x812px, constraints left/top, radius 44px, fill #FFFFFF, stroke #FFFFFF 8px
    - FRAME "bg", 375x812px, constraints left/top, fill #FFFFFF
      - ELLIPSE "Ellipse 1", 381x381px, constraints left/top, fill #8667F2
      - ELLIPSE "Ellipse 2", 381x381px, constraints left/top, fill #3A63FB
      - RECTANGLE "Rectangle 161", 375x812px, constraints left/top, fill #FFFFFFCC, effect [background_blur 250px]
    - FRAME "chatbox/owner", 295x82px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12/12/3/12px, fill #FFFFFF
      - FRAME "chatbox/owner/voice", 295x82px, vertical pad 12 12 12 12px gap 4px align center/max sizing W:fixed H:fixed, constraints left/top, fill #8667F2
        - FRAME "Frame 240", 271x40px, constraints left/top [decorative, ~38 shapes]
        - FRAME "Frame 239", 271x14px, horizontal pad 0 0 0 8px gap 4px align space_between/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 243", 69x17px, horizontal pad 0 0 0 0px gap 16px sizing W:fixed H:fixed, constraints left/top
            - TEXT "time", 21x17px, constraints left_right/top, fill #FFFFFF, text [General Sans Regular, 12px]
            - FRAME "likes", 32x17px, horizontal pad 0 0 0 0px gap 4px align max/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 243", 68x17px, horizontal pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
            - FRAME "views", 36x17px, horizontal pad 0 0 0 0px gap 2px align max/center sizing W:fixed H:fixed, constraints left/top
            - TEXT "time", 24x17px, constraints left_right/top, fill #FFFFFF, text [General Sans Regular, 12px]
    - FRAME "Frame 241", 303x338px, horizontal pad 0 0 0 0px gap 8px align center/max sizing W:fixed H:fixed, constraints left/top
      - RECTANGLE "Rectangle 162", 40x40px, constraints right/center, radius 12px, fill image(hash: 74865fee70ca2ca232615d39e91b02ddf6e6538b)
      - FRAME "Frame 289", 255x338px, vertical pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
        - FRAME "chatbox/chatter", 255x219px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12/12/12/3px, fill #FFFFFF, stroke #EBE9ED 1px
          - FRAME "chatbox/chatter/photo", 255x219px, vertical pad 12 12 12 12px gap 4px sizing W:fixed H:fixed, constraints left/top, radius 12/12/12/3px, fill #FFFFFF
            - FRAME "Frame 239", 231x195px, vertical pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
        - FRAME "chatbox/chatter", 252x111px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12/12/12/3px, fill #FFFFFF, stroke #EBE9ED 1px
          - FRAME "chatbox/chatter/text", 252x111px, vertical pad 12 12 12 12px gap 4px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
            - FRAME "Frame 239", 228x87px, vertical pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame 242", 303x219px, horizontal pad 0 0 0 0px gap 8px align center/max sizing W:fixed H:fixed, constraints left/top
      - RECTANGLE "Rectangle 162", 40x40px, constraints right/center, radius 12px, fill image(hash: 4ad8963024962c5ccc1e61fe3b4fc7cb78cb9cea)
      - FRAME "Frame 289", 255x219px, vertical pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
        - FRAME "chatbox/chatter", 255x219px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 12/12/12/3px, fill #FFFFFF, stroke #EBE9ED 1px
          - FRAME "chatbox/chatter/photo", 255x219px, vertical pad 12 12 12 12px gap 4px sizing W:fixed H:fixed, constraints left/top, radius 12/12/12/3px, fill #FFFFFF
            - FRAME "Frame 239", 231x195px, vertical pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
    - FRAME "down-bar", 375x34px, constraints center/bottom, fill #FFFFFFE5, effect [background_blur 20px]
    - FRAME "nav-bar/chat", 375x88px, constraints left_right/top, fill #FFFFFFE5, effect [background_blur 20px]
      - FRAME "left-tapable-area", 52x44px, vertical pad 12 20 12 12px gap 10px align center/center sizing W:fixed H:fixed, constraints left/center
        - FRAME "Frame 7", 20x20px, horizontal pad 0 0 0 0px gap 4px align center/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "icon-native/small/chevron-left", 20x20px, constraints left/top
            - TEXT "􀆉", 13x19px, constraints center/center, fill #8667F2, text [SF Pro Display Semibold, 16px]
      - RECTANGLE "Rectangle 162", 40x40px, constraints right/center, radius 12px, fill image(hash: c1923d58ee3f0a2af3a04531cab9ba027732175b)
      - FRAME "Frame 239", 76x17px, horizontal pad 0 0 0 0px gap 8px align center/center sizing W:fixed H:fixed, constraints center/top
        - FRAME "Frame 288", 25x17px, horizontal pad 0 0 0 0px gap 2px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "icon/user", 12x12px, constraints scale/scale, fill #FFFFFF
            - GROUP "Profile", 8x10px, constraints left/top, fill #FFFFFF
          - TEXT "12", 11x17px, constraints left/top, fill #8C8098, text [General Sans Medium, 12px]
        - FRAME "Frame 287", 43x17px, horizontal pad 0 0 0 0px gap 2px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "icon/eye", 12x12px, constraints scale/scale, fill #FFFFFF [decorative, ~5 shapes]
          - TEXT "3 827", 29x17px, constraints left/top, fill #8C8098, text [General Sans Medium, 12px]
      - FRAME "Frame 239", 93x19px, horizontal pad 0 0 0 0px gap 4px align center/center sizing W:fixed H:fixed, constraints center/top
        - TEXT "Purple haze", 93x19px, constraints center/top, fill #200E32, text [SF Pro Text Semibold, 16px]
    - FRAME "text-bar/normal", 375x56px, constraints left_right/bottom, fill #FFFFFFE5, effect [background_blur 20px]
      - FRAME "textbar-input", 263x40px, constraints left_right/center, radius 8px, fill #F2F1F3
        - TEXT "Type something...", 116x20px, constraints center/center, fill #8C8098, text [General Sans Medium, 14px]
      - FRAME "icon/plus", 24x24px, constraints left/center, fill #FFFFFF
        - VECTOR "Vector", 0x16px, constraints scale/scale, stroke #8C8098 1.5px
        - VECTOR "Vector", 16x0px, constraints scale/scale, stroke #8C8098 1.5px
      - FRAME "icon/micro", 24x24px, constraints left/top
        - GROUP "Mic", 15x19.5px, constraints left/top, radius 0/0/0/0px
          - RECTANGLE "Rectangle 7", 9x13.5px, constraints scale/scale, radius 8px, stroke #8C8098 1.5px
          - VECTOR "Rectangle 7.1", 15x9px, constraints scale/scale, radius 11px, stroke #8C8098 1.5px
          - VECTOR "Vector 3", 6x2.25px, constraints scale/scale, radius 4px, stroke #8C8098 1.5px
    - GROUP "Group 239", 40x49px, constraints left/top, radius 0/0/0/0px
      - FRAME "floating-button", 40x40px, constraints right/bottom, radius 40px, fill #FFFFFF, effect block-down
        - FRAME "icon/chevron-down", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 12x6px, constraints scale/scale, stroke #8C8098 1.8px
      - FRAME "counter", 26x18px, vertical pad 2 6 2 6px gap 10px align center/center sizing W:fixed H:fixed, constraints right/bottom, radius 20px, fill #8667F2
        - TEXT "count", 14x14px, constraints left_right/top, fill #FFFFFF, text [body/auto/12px]
  - FRAME "Chats", 375x812px, constraints left/top, radius 44px, fill #F2F1F3, stroke #FFFFFF 8px, effect [drop_shadow 60px offset 60 60 #2D01471A]
    - FRAME "bg", 375x812px, constraints left/top, fill #FFFFFF [decorative, ~5 shapes]
    - FRAME "Frame 274", 375x264px, constraints left/top, fill gradient_linear(#FFFFFF 0% | #FFFFFF00 100%), effect [background_blur 72px]
      - TEXT "Chats", 99x46px, constraints center/top, fill #200E32, text [General Sans Semibold, 34px], [heading]
    - FRAME "Frame 273", 375x264px, constraints left/top, fill #FFFFFF99, effect [background_blur 72px]
      - TEXT "Chats", 99x46px, constraints center/top, fill #200E32, text [General Sans Semibold, 34px], [heading]
      - FRAME "Frame 683", 343x40px, constraints left_right/top_bottom, radius 8px, fill #FFFFFF
        - FRAME "Frame 273", 147x22px, horizontal pad 0 0 0 0px gap 8px align center/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "icon/search", 20x20px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 13.33x13.33px, constraints scale/scale, stroke #8C8098 1.3px
            - VECTOR "Vector", 3.63x3.63px, constraints scale/scale, stroke #8C8098 1.3px
          - TEXT "Search by chats", 119x22px, constraints center/center, fill #8C8098, text [General Sans Medium, 16px]
      - FRAME "Frame 242", 56x44px, constraints left/top
        - FRAME "icon/write", 24x24px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 18x18px, constraints scale/scale, stroke #8667F2 1.5px
          - VECTOR "Vector", 14.12x14.12px, constraints scale/scale, stroke #8667F2 1.5px
    - FRAME "chat", 343x148px, constraints left/top, radius 12px, fill #FFFFFF
      - FRAME "Frame 241", 201x32px, horizontal pad 0 0 0 0px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 240", 144x32px, horizontal pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top [decorative, ~6 shapes]
        - TEXT "+ 8 936", 41x17px, constraints left/top, fill #8C8098, text [General Sans Medium, 12px]
      - RECTANGLE "Rectangle 162", 64x64px, constraints right/center, radius 12px, fill image(hash: c1923d58ee3f0a2af3a04531cab9ba027732175b)
      - TEXT "time", 28x19px, constraints left_right/top, fill #8C8098, text [General Sans Regular, 14px]
      - FRAME "counter", 20x20px, constraints right/top, radius 20px, fill #8667F2
        - TEXT "count", 8x21px, constraints left_right/top, fill #FFFFFF, text [General Sans Medium, 14px]
      - TEXT "Esther Howard", 94x19px, constraints center/top, fill #200E32, text [General Sans Regular, 14px]
      - TEXT "I posted a new video on YouTub...", 207x19px, constraints center/top, fill #8C8098, text [General Sans Regular, 14px]
      - FRAME "Frame 241", 107x22px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
        - TEXT "Purple haze", 87x22px, constraints center/top, fill #200E32, text [General Sans Medium, 16px]
        - FRAME "icon/pin", 16x16px, constraints scale/scale
          - VECTOR "􀎧", 15.43x15.43px, constraints scale/scale, fill #CCC7D1
      - FRAME "button", 61x32px, horizontal pad 9 16 10 16px gap 10px align center/center sizing W:fixed H:fixed, constraints right/bottom, radius 50px, fill #8667F2
        - TEXT "Join", 29x17px, constraints center/center, fill #FFFFFF, text [head/auto/14px], [heading]
    - FRAME "chat", 343x138px, constraints left/top, radius 12px, fill #8667F2, effect [drop_shadow 14px offset 0 4 #8667F266]
      - ELLIPSE "Ellipse 190", 98x98px, constraints left/top, stroke #FFFFFF66 8px
      - ELLIPSE "Ellipse 189", 98x98px, constraints left/top, stroke #FFFFFF 8px, effect [drop_shadow 12px offset 0 0 #FFFFFF99]
      - TEXT "Bust your room", 174x32px, constraints center/top, fill #FFFFFF, text [General Sans Semibold, 24px], [heading]
      - FRAME "button", 185x32px, horizontal pad 9 16 10 16px gap 10px align center/center sizing W:fixed H:fixed, constraints right/bottom, radius 50px, fill #FFFFFF
        - TEXT "Join", 55x17px, constraints center/center, fill #8667F2, text [head/auto/14px], [heading]
      - TEXT "Up to 75% more profit", 144x19px, constraints center/top, fill #FFFFFF, text [General Sans Medium, 14px]
      - TEXT "75%", 37x27px, constraints center/top, fill #FFFFFF, text [General Sans Medium, 20px]
    - FRAME "chat", 343x148px, constraints left/top, radius 12px, fill #FFFFFF
      - FRAME "Frame 241", 150x32px, horizontal pad 0 0 0 0px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 240", 96x32px, horizontal pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top [decorative, ~4 shapes]
        - TEXT "+ 2 144", 38x17px, constraints left/top, fill #8C8098, text [General Sans Medium, 12px]
      - RECTANGLE "Rectangle 162", 64x64px, constraints right/center, radius 12px, fill image(hash: 82e3dd11c39898b483e59e74b0605df65bd7a62b)
      - TEXT "time", 27x19px, constraints left_right/top, fill #8C8098, text [General Sans Regular, 14px]
      - TEXT "Ronald Richards", 102x19px, constraints center/top, fill #200E32, text [General Sans Regular, 14px]
      - TEXT "Love to watch our great game...", 197x19px, constraints center/top, fill #8C8098, text [General Sans Regular, 14px]
      - FRAME "Frame 241", 62x22px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
        - TEXT "BIDMAS", 62x22px, constraints center/top, fill #200E32, text [General Sans Medium, 16px]
      - FRAME "button", 61x32px, horizontal pad 9 16 10 16px gap 10px align center/center sizing W:fixed H:fixed, constraints right/bottom, radius 50px, fill #8667F2
        - TEXT "Join", 29x17px, constraints center/center, fill #FFFFFF, text [head/auto/14px], [heading]
    - FRAME "chat", 343x148px, constraints left/top, radius 12px, fill #FFFFFF
      - FRAME "Frame 241", 201x32px, horizontal pad 0 0 0 0px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 240", 144x32px, horizontal pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top [decorative, ~6 shapes]
        - TEXT "+ 8 936", 41x17px, constraints left/top, fill #8C8098, text [General Sans Medium, 12px]
      - RECTANGLE "Rectangle 162", 64x64px, constraints right/center, radius 12px, fill image(hash: 0f9baa9c7a42a87831037606c8cdf372b191d1aa)
      - TEXT "time", 31x19px, constraints left_right/top, fill #8C8098, text [General Sans Regular, 14px]
      - FRAME "counter", 20x20px, constraints right/top, radius 20px, fill #CCC7D1
        - TEXT "count", 8x21px, constraints left_right/top, fill #FFFFFF, text [General Sans Medium, 14px]
      - TEXT "Marvin McKinney", 108x19px, constraints center/top, fill #200E32, text [General Sans Regular, 14px]
      - TEXT "I love to review our joint family p...", 208x19px, constraints center/top, fill #8C8098, text [General Sans Regular, 14px]
      - FRAME "Frame 241", 176x22px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
        - TEXT "Fanboys connectives", 156x22px, constraints center/top, fill #200E32, text [General Sans Medium, 16px]
        - FRAME "icon/sound-off", 16x16px, constraints scale/scale, fill #FFFFFF
          - GROUP "Volume Off", 12.67x12.67px, constraints left/top, fill #FFFFFF
            - BOOLEAN_OPERATION "Volume Off", 12.67x12.67px, constraints scale/scale, fill #CCC7D1
      - FRAME "button", 61x32px, horizontal pad 9 16 10 16px gap 10px align center/center sizing W:fixed H:fixed, constraints right/bottom, radius 50px, fill #8667F2
        - TEXT "Join", 29x17px, constraints center/center, fill #FFFFFF, text [head/auto/14px], [heading]
    - FRAME "tab-bar", 375x83px, constraints left_right/bottom, fill #FFFFFFE5, effect [background_blur 20px] [decorative, ~11 shapes]
  - GROUP "stars", 1089.21x1075.29px, constraints left/top, radius 0/0/0/0px [decorative, ~6 shapes]

Screen: Page 1 / About us
- FRAME "About us", 1920x114px, constraints left/top, fill #F4F0FA
  - LINE "Line 1", 32x55.43px, constraints left/top, stroke #171717 1px, opacity 15%
  - FRAME "color", 220.8x51px, constraints scale/scale
    - FRAME "logo", 220.8x51px, constraints scale/scale
      - VECTOR "Union", 129.45x4.35px, constraints scale/scale, fill #FC4A22
      - VECTOR "Union", 62.66x3.4px, constraints scale/scale, fill #FC4A22
      - VECTOR "Spaceberry", 218.05x49.42px, constraints scale/scale, fill #171717
  - FRAME "Frame 14", 719x24px, horizontal pad 0 0 0 0px gap 40px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame 14", 149x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "social-icon", 24x24px, constraints left/top, fill #FFFFFF [decorative, ~8 shapes]
      - TEXT "visit our Behance", 117x16px, constraints scale/scale, fill #171717, text [Helvetica Bold, 14px]
    - FRAME "Frame 15", 148x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "social-icon", 24x24px, constraints left/top, fill #FFFFFF
        - VECTOR "back", 24x24px, constraints scale/scale, fill #F26798
        - FRAME "Frame 171", 10.91x10.91px, constraints scale/scale
          - VECTOR "Path", 10.91x10.91px, constraints scale/scale, fill #FFFFFF
      - TEXT "visit our Dribbble", 116x16px, constraints scale/scale, fill #171717, text [Helvetica Bold, 14px]
    - FRAME "Frame 16", 158x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "social-icon", 24x24px, constraints left/top, radius 100px, fill #FFFFFF
        - FRAME "Instagram", 24x24px, constraints scale/scale, fill #FFFFFF
          - VECTOR "Vector", 24x24px, constraints scale/scale, radius 100px, fill gradient_radial(#FFDD55 0% | #FFDD55 10% | #FF543E 50% | #C837AB 100%)
          - VECTOR "Vector", 24x24px, constraints scale/scale, radius 100px, fill gradient_radial(#3771C8 0% | #3771C8 13% | #6600FF00 100%)
          - VECTOR "Vector", 12x12px, constraints scale/scale, fill #FFFFFF
      - TEXT "visit our Instagram", 126x16px, constraints scale/scale, fill #171717, text [Helvetica Bold, 14px]
    - FRAME "Frame 17", 144x24px, horizontal pad 0 0 0 0px gap 8px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Квадратный формат", 24x24px, constraints left/top [decorative, ~4 shapes]
      - TEXT "visit our Website", 112x16px, constraints scale/scale, fill #171717, text [Helvetica Bold, 14px]

Screen: Page 1 / Cover
- FRAME "Cover", 1920x960px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Tracking app 1", 1920x1440px, constraints left/top, fill image(hash: d2265798f06786b8cad1b35113a922ab0a22defc)


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
