---
name: wechat-ui-apple-vision-pro-community-community
source_file: WeChat UI - Apple Vision Pro(Community) (Community)
source_page: UI
generated_at: 2026-07-25T09:39:04.579483+00:00
---

# WeChat UI - Apple Vision Pro(Community) (Community) Design Guidelines

## Source
- Figma file: WeChat UI - Apple Vision Pro(Community) (Community)
- Figma page: UI
- Extracted at: 2026-07-25T09:39:04.579483+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- Default/SystemRed/Light: [#FF3B30]
- Label Color/Dark/Primary: [#FFFFFF]

## Raw Colors (unstyled)
- #3B5F76: 45 uses
- #FFFFFF99: 33 uses
- #FFFFFF: 31 uses
- #FFFFFF1A: 11 uses
- #FFFFFFE5: 9 uses
- #9747FF: 4 uses
- #00000033: 3 uses
- #FF3B30: 3 uses
- #FFFFFF4D: 3 uses

## Typography Tokens
- Default/Bold/Subheadline: SF Pro Text Semibold (600), 15px / 20px, tracking -0.5px

## Raw Typography (unstyled)
- PingFang SC Medium, 14px: 9 uses
- PingFang SC Medium, 16px: 9 uses
- PingFang SC Semibold, 20px: 9 uses
- PingFang SC Medium, 18px: 4 uses

## Typography Hierarchy
- 20px - PingFang SC Semibold, 20px (raw)
- 18px - PingFang SC Medium, 18px (raw)
- 16px - PingFang SC Medium, 16px (raw)
- 15px - Default/Bold/Subheadline (SF Pro Text Semibold)
- 14px - PingFang SC Medium, 14px (raw)

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
- 消息列表Row
- 未读
- 消息列表头像
- Tab
- 语音
- 视频
- 表情
- 静音
- 添加

## Component Specs
- 消息列表Row: size 368x88px, radius 20px, horizontal layout, padding 12 12 12 12px, gap 12px, sizing W:fixed H:fixed, fill #FFFFFF33, text [PingFang SC Medium, 16px, PingFang SC Medium, 14px, PingFang SC Semibold, 20px] | variants: 选中: off/on
- 未读: size 20x20px, radius 24px, horizontal layout, padding 0 0 0 0px, gap 0px, align center/center, sizing W:fixed H:fixed, fill Default/SystemRed/Light, text [Default/Bold/Subheadline] | variants: Property 1: 数字/红点
- 消息列表头像: size 64x64px, radius 10px, fill image(hash: 8b9fb2db7a68bb463f47c433568fd97748ad2e5a) | variants: 类型: 用户/群; 未读: off/on
- Tab: size 34x34px, radius 92.73px | variants: icon类型: 收藏/文件/朋友圈/消息/联系人; Current: off/on
- 语音: size 28x28px, fill #FFFFFF
- 视频: size 34x34px, fill #FFFFFF
- 表情: size 34x34px, fill #FFFFFF
- 静音: size 22x22px, fill #FFFFFF
- 添加: size 34x34px, radius 92.73px, effect [background_blur 31.69px]

## Most-Used Styles
- Default/Bold/Subheadline: 4 uses
- Default/SystemRed/Light: 4 uses
- Label Color/Dark/Primary: 4 uses

## Layout & Structure
Screen: UI / Frame 35
- FRAME "Frame 35", 1842x1257px, constraints left/top
  - RECTANGLE "Captura de pantalla 2023-06-05 a las 21.35", 2322x1328px, constraints left/top, fill image(hash: 9ae9fb26740e7a8c728913415a0e4a036de32360), effect [layer_blur 0px]
  - FRAME "Frame 25", 1140x750px, horizontal pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints center/center, radius 50px, fill gradient_linear(#A7A7A726 0% | #8585851A 100%), stroke gradient_linear(#FFFFFF 0% | #FFFFFF00 20% | #FFFFFF 100%) 3px, effect [background_blur 160px]
    - FRAME "Frame 43", 400x750px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fill, constraints left/top, fill #00000033
      - FRAME "Frame 44", 400x110px, horizontal pad 28 28 28 28px gap 20px sizing W:fill H:fixed, constraints left/top
        - FRAME "Frame 45", 270x54px, vertical pad 16 18 16 18px gap 10px sizing W:fill H:fixed, constraints left/top, radius 57px, fill #00000033, effect [inner_shadow 4px offset 0 2 #0000001A, drop_shadow 2px offset 0 2 #FFFFFF40]
          - FRAME "Frame 46", 78x22px, horizontal pad 0 0 0 0px gap 18px align min/baseline sizing W:fixed H:fixed, constraints left/top
            - TEXT "Dictation", 20x22px, constraints left/top, fill #FFFFFF99, text [SF Pro Regular, 20px]
            - TEXT "Dictation", 40x22px, constraints left/top, fill #FFFFFF99, text [PingFang SC Medium, 20px]
        - FRAME "Frame 49", 54x54px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 60px, fill #FFFFFF26
          - INSTANCE "添加", 34x34px, constraints left/top, radius 92.73px, effect [background_blur 31.69px]
            - VECTOR "Vector", 20x20px, constraints scale/scale, fill #FFFFFF
      - FRAME "Frame 50", 400x640px, vertical pad 0 16 16 16px gap 12px sizing W:fill H:fill, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px, fill #FFFFFF33
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, constraints left/top, radius 10px, fill image(hash: 1f05f2a34b212464c2378638e2cdf8ac57cc6fcd)
            - FRAME "Frame 53", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, constraints left/top, radius 10px, fill image(hash: 8aa0eade8614c9706f8234829a57e882d80a91c9)
            - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, vertical pad 4 4 4 4px gap 2px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
            - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, constraints left/top, radius 10px, fill image(hash: d218110b54375111eb4647c0f179786ae58e442c)
            - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, constraints left/top, radius 10px, fill image(hash: 838685dffbf4e733f632dbc201c87335bdec0dd7)
            - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, vertical pad 4 4 4 4px gap 2px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
            - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - INSTANCE "消息列表Row", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fill H:fixed, constraints left/top, radius 20px
          - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 64x64px, constraints left/top, radius 10px, fill image(hash: aefb70cd3095de51fb7d7f8ca5366b643ae75d6e)
            - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
    - FRAME "Frame 67", 740x750px, vertical pad 0 0 0 0px gap 0px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 68", 740x100px, horizontal pad 28 28 28 28px gap 0px align space_between/center sizing W:fill H:fixed, constraints left/top
        - TEXT "Dictation", 60x42px, constraints left/top, fill #FFFFFF, text [PingFang SC Semibold, 30px], [heading]
        - FRAME "Frame 49", 44x44px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 60px, fill #FFFFFF1A
          - VECTOR "Vector", 24x5.14px, constraints left/top, fill #FFFFFF
      - FRAME "Frame 69", 740x540px, vertical pad 0 0 0 0px gap 0px sizing W:fill H:fill, constraints left/top
        - FRAME "Frame 70", 740x84px, vertical pad 12 28 12 28px gap 12px sizing W:fill H:fixed, constraints left/top
          - FRAME "Frame 73", 193x60px, horizontal pad 0 0 0 0px gap 12px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 60x60px, constraints left/top, radius 10px, fill image(hash: 1f05f2a34b212464c2378638e2cdf8ac57cc6fcd)
            - FRAME "Frame 72", 121x60px, horizontal pad 20 20 20 20px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
        - FRAME "Frame 71", 740x84px, vertical pad 12 28 12 28px gap 12px align min/max sizing W:fill H:fixed, constraints left/top
          - FRAME "Frame 73", 172x60px, horizontal pad 0 0 0 0px gap 12px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 72", 100x60px, horizontal pad 20 20 20 20px gap 2px align min/center sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #19B94D
            - INSTANCE "消息列表头像", 60x60px, constraints left/top, radius 10px, fill image(hash: 402696481f296c5ef7557a2219acd7a790fd48d3)
        - FRAME "Frame 72", 740x247px, vertical pad 12 28 12 28px gap 12px sizing W:fill H:fixed, constraints left/top
          - FRAME "Frame 73", 254x223px, horizontal pad 0 0 0 0px gap 12px sizing W:fixed H:fixed, constraints left/top
            - INSTANCE "消息列表头像", 60x60px, constraints left/top, radius 10px, fill image(hash: 1f05f2a34b212464c2378638e2cdf8ac57cc6fcd)
            - FRAME "Frame 72", 182x223px, vertical pad 20 20 20 20px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
        - FRAME "Frame 73", 740x84px, vertical pad 12 28 12 28px gap 12px align min/max sizing W:fill H:fixed, constraints left/top
          - FRAME "Frame 73", 190x60px, horizontal pad 0 0 0 0px gap 12px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 72", 118x60px, horizontal pad 20 20 20 20px gap 2px align min/center sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #19B94D
            - INSTANCE "消息列表头像", 60x60px, constraints left/top, radius 10px, fill image(hash: 402696481f296c5ef7557a2219acd7a790fd48d3)
      - FRAME "Frame 70", 740x110px, horizontal pad 28 28 28 28px gap 16px align min/center sizing W:fill H:fixed, constraints left/top
        - FRAME "Frame 45", 474x54px, horizontal pad 0 6 0 18px gap 10px align space_between/center sizing W:fill H:fixed, constraints left/top, radius 57px, fill #00000033, effect [inner_shadow 4px offset 0 2 #0000001A, drop_shadow 2px offset 0 2 #FFFFFF40]
          - TEXT "Dictation", 60x22px, constraints left/top, fill #FFFFFF99, text [PingFang SC Medium, 20px]
          - FRAME "Frame 74", 42x42px, vertical pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 58px, fill #FFFFFF4D
            - INSTANCE "语音", 28x28px, constraints left/top, fill #FFFFFF
        - FRAME "Frame 49", 54x54px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 60px, fill #FFFFFF1A
          - INSTANCE "表情", 34x34px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 26x26px, constraints scale/scale, fill #FFFFFF
        - FRAME "Frame 51", 54x54px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 60px, fill #FFFFFF1A
          - INSTANCE "Tab", 34x34px, constraints left/top, radius 92.73px
            - VECTOR "Vector", 21.25x19.12px, constraints scale/scale, fill #FFFFFF
        - FRAME "Frame 50", 54x54px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 60px, fill #FFFFFF1A
          - INSTANCE "视频", 34x34px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 25.87x18.48px, constraints scale/scale, fill #FFFFFF
  - RECTANGLE "SHADOW", 1084x8px, constraints center/top, radius 1000px, fill #000000, effect [layer_blur 40px]
  - FRAME "Frame 36", 269x20px, horizontal pad 0 0 0 0px gap 42px align min/center sizing W:fixed H:fixed, constraints center/top
    - FRAME "lock", 20x20px, constraints left/top, radius 20px, fill #FFFFFF99, effect [background_blur 100px]
    - FRAME "bar", 207x16px, constraints left/top, radius 16px, fill #FFFFFF99, effect [background_blur 100px]
  - FRAME "Frame 42", 74x384px, vertical pad 12 12 12 12px gap 12px sizing W:fixed H:fixed, constraints left/center, radius 77px, fill gradient_linear(#FFFFFF26 0% | #FFFFFF1A 100%), stroke gradient_linear(#FFFFFF 0% | #FFFFFF00 49% | #FFFFFF 100%) 1px, effect [background_blur 60px]
    - FRAME "Frame 37", 50x50px, horizontal pad 8 8 8 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 43px, fill #FFFFFF4D
    - FRAME "Frame 48", 50x50px, horizontal pad 8 8 8 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 43px, fill #FFFFFF4D
      - INSTANCE "Tab", 34x34px, constraints left/top, radius 92.73px
        - VECTOR "Vector", 21.25x21.25px, constraints scale/scale, fill #FFFFFF
    - FRAME "Frame 38", 50x50px, horizontal pad 8 8 8 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 43px
      - INSTANCE "Tab", 34x34px, constraints left/top, radius 92.73px
        - VECTOR "Vector", 23.38x22.31px, constraints scale/scale, fill #FFFFFF
    - FRAME "Frame 39", 50x50px, horizontal pad 8 8 8 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 43px
      - INSTANCE "Tab", 34x34px, constraints left/top, radius 92.73px
        - VECTOR "Vector", 20.19x23.38px, constraints scale/scale, fill #FFFFFF
    - FRAME "Frame 40", 50x50px, horizontal pad 8 8 8 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 43px
      - INSTANCE "Tab", 34x34px, constraints left/top, radius 92.73px
        - VECTOR "Vector", 21.25x19.12px, constraints scale/scale, fill #FFFFFF
    - FRAME "Frame 41", 50x50px, horizontal pad 8 8 8 8px gap 0px sizing W:fixed H:fixed, constraints left/top, radius 43px
      - INSTANCE "Tab", 34x34px, constraints left/top, radius 92.73px
        - VECTOR "Vector", 23.38x23.38px, constraints scale/scale, fill #FFFFFF
  - RECTANGLE "Vision Pro", 533.52x87.94px, constraints center/top, fill image(hash: 6dae047d3b682125944b1b18d24779637a746e6e)

Screen: UI / Tab
- COMPONENT_SET "Tab", 74x542px, vertical pad 20 20 20 20px gap 18px sizing W:fixed H:fixed, constraints left/top, radius 5px, stroke #9747FF 1px
  - COMPONENT "icon类型=消息, Current=off", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 21.25x21.25px, constraints center/center, fill #FFFFFF
  - COMPONENT "icon类型=联系人, Current=off", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 23.38x22.31px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=收藏, Current=off", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 20.19x23.38px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=文件, Current=off", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 21.25x19.12px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=朋友圈, Current=off", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 23.38x23.38px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=消息, Current=on", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 21.25x21.25px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=联系人, Current=on", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 23.38x22.31px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=收藏, Current=on", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 20.19x22.76px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=文件, Current=on", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 21.25x19.12px, constraints scale/scale, fill #FFFFFF
  - COMPONENT "icon类型=朋友圈, Current=on", 34x34px, constraints left/top, radius 92.73px
    - VECTOR "Vector", 23.38x23.38px, constraints scale/scale, fill #FFFFFF

Screen: UI / 添加
- COMPONENT "添加", 34x34px, constraints left/top, radius 92.73px, effect [background_blur 31.69px]
  - VECTOR "Vector", 20x20px, constraints scale/scale, fill #FFFFFF

Screen: UI / 消息列表头像
- COMPONENT_SET "消息列表头像", 356x104px, horizontal pad 20 20 20 20px gap 20px sizing W:fixed H:fixed, constraints left/top, radius 5px, stroke #9747FF 1px
  - COMPONENT "类型=用户, 未读=off", 64x64px, constraints left/top, radius 10px, fill image(hash: 8b9fb2db7a68bb463f47c433568fd97748ad2e5a)
  - COMPONENT "类型=用户, 未读=on", 64x64px, constraints left/top, radius 10px, fill image(hash: 8b9fb2db7a68bb463f47c433568fd97748ad2e5a)
    - INSTANCE "未读", 20x20px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 24px, fill Default/SystemRed/Light
      - TEXT "2", 10x20px, constraints left/top, fill Label Color/Dark/Primary, text [Default/Bold/Subheadline], [heading]
  - COMPONENT "类型=群, 未读=off", 64x64px, vertical pad 4 4 4 4px gap 2px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
    - FRAME "Frame 61", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
    - FRAME "Frame 62", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
    - FRAME "Frame 63", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
  - COMPONENT "类型=群, 未读=on", 64x64px, vertical pad 4 4 4 4px gap 2px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
    - FRAME "Frame 61", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
    - FRAME "Frame 62", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
    - FRAME "Frame 63", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
      - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
    - INSTANCE "未读", 20x20px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints right/top, radius 24px, fill Default/SystemRed/Light
      - TEXT "2", 10x20px, constraints left/top, fill Label Color/Dark/Primary, text [Default/Bold/Subheadline], [heading]

Screen: UI / 未读
- COMPONENT_SET "未读", 100x60px, horizontal pad 20 20 20 20px gap 20px align min/center sizing W:fixed H:fixed, constraints left/top, radius 5px, stroke #9747FF 1px
  - COMPONENT "Property 1=数字", 20x20px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 24px, fill Default/SystemRed/Light
    - TEXT "2", 10x20px, constraints left/top, fill Label Color/Dark/Primary, text [Default/Bold/Subheadline], [heading]
  - COMPONENT "Property 1=红点", 20x20px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top, radius 24px
    - ELLIPSE "Ellipse 8", 10x10px, constraints left/top, fill #FF3B30

Screen: UI / 静音
- COMPONENT "静音", 22x22px, constraints left/top, fill #FFFFFF
  - VECTOR "Vector", 14.67x15.58px, constraints scale/scale, fill #FFFFFF99

Screen: UI / 消息列表Row
- COMPONENT_SET "消息列表Row", 408x249px, constraints left/top, radius 5px, stroke #9747FF 1px
  - COMPONENT "选中=on", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #FFFFFF33
    - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
      - INSTANCE "消息列表头像", 64x64px, constraints left/top, radius 10px, fill image(hash: 8b9fb2db7a68bb463f47c433568fd97748ad2e5a)
      - FRAME "Frame 53", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - FRAME "Frame 66", 268x22px, horizontal pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - TEXT "Dictation", 198x22px, constraints left/top, fill #FFFFFFE5, text [PingFang SC Semibold, 20px]
          - TEXT "Dictation", 62x20px, constraints left/top, fill #FFFFFF99, text [PingFang SC Medium, 14px]
        - FRAME "Frame 65", 268x22px, horizontal pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - TEXT "Dictation", 238x22px, constraints left/top, fill #FFFFFF99, text [PingFang SC Medium, 16px]
          - INSTANCE "静音", 22x22px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 14.67x15.58px, constraints scale/scale, fill #FFFFFF99
  - COMPONENT "选中=off", 368x88px, horizontal pad 12 12 12 12px gap 12px sizing W:fixed H:fixed, constraints left/top, radius 20px
    - FRAME "Frame 54", 344x64px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fill H:fixed, constraints left/top
      - INSTANCE "消息列表头像", 64x64px, vertical pad 4 4 4 4px gap 2px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF1A
        - FRAME "Frame 61", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
          - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
          - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
          - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
        - FRAME "Frame 62", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
          - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
          - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
          - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
        - FRAME "Frame 63", 56x17.33px, horizontal pad 0 0 0 0px gap 2px sizing W:fill H:fill, constraints left/top
          - FRAME "Frame 58", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
          - FRAME "Frame 59", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
          - FRAME "Frame 60", 17.33x17.33px, constraints left/top, radius 4px, fill #3B5F76
      - FRAME "Frame 54", 268x52px, vertical pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
        - FRAME "Frame 66", 268x22px, horizontal pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - TEXT "Dictation", 198x22px, constraints left/top, fill #FFFFFFE5, text [PingFang SC Semibold, 20px]
          - TEXT "Dictation", 62x20px, constraints left/top, fill #FFFFFF99, text [PingFang SC Medium, 14px]
        - FRAME "Frame 65", 268x22px, horizontal pad 0 0 0 0px gap 8px sizing W:fill H:fixed, constraints left/top
          - TEXT "Dictation", 238x22px, constraints left/top, fill #FFFFFF99, text [PingFang SC Medium, 16px]
          - INSTANCE "静音", 22x22px, constraints left/top, fill #FFFFFF
            - VECTOR "Vector", 14.67x15.58px, constraints scale/scale, fill #FFFFFF99

Screen: UI / 表情
- COMPONENT "表情", 34x34px, constraints left/top, fill #FFFFFF
  - VECTOR "Vector", 26x26px, constraints scale/scale, fill #FFFFFF

Screen: UI / 视频
- COMPONENT "视频", 34x34px, constraints left/top, fill #FFFFFF
  - VECTOR "Vector", 25.87x18.48px, constraints scale/scale, fill #FFFFFF

Screen: UI / 语音
- COMPONENT "语音", 28x28px, constraints left/top, fill #FFFFFF
  - VECTOR "Vector", 21.41x21.41px, constraints scale/scale, fill #FFFFFF


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
