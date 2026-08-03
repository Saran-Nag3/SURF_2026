---
name: splunk-web-app-icon-toolkit-community
source_file: Splunk Web App Icon Toolkit (Community)
source_page: All pages (3): Cover, Design, Export
generated_at: 2026-07-25T09:43:59.736134+00:00
---

# Splunk Web App Icon Toolkit (Community) Design Guidelines

## Source
- Figma file: Splunk Web App Icon Toolkit (Community)
- Figma page: All pages (3): Cover, Design, Export
- Extracted at: 2026-07-25T09:43:59.736134+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- basic/grayscale/white: [#FFFFFF]
- basic/grayscale/gray-20: [#171D21]
- brand/Enterprise: [#5CC05C]
- basic/grayscale/gray-80: [#C3CBD4]
- basic/grayscale/gray-30: [#3C444D]

## Raw Colors (unstyled)
- #FFFFFF: 230 uses
- #000000: 15 uses
- #FFFFFF66: 12 uses
- #5CC05C: 7 uses
- #000000D9: 4 uses
- #32373D: 4 uses
- #3E444C: 3 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- SF Pro Regular, 14px: 4 uses
- SF Pro Regular, 32px: 4 uses
- SF Pro Medium, 53.91px: 3 uses

## Typography Hierarchy
- 53.91px - SF Pro Medium, 53.91px (raw)
- 32px - SF Pro Regular, 32px (raw)
- 14px - SF Pro Regular, 14px (raw)

## Spacing Tokens
- No spacing variables found.

## Radius Tokens
- No radius variables found.

## Motion Tokens
- No motion variables found.

## Effect Styles
- No local effect styles found.

## Grid Styles
- 16px margin: columns count 1, section 1408px, gutter 0px, align stretch + rows count 1, section 992px, gutter 0px, align stretch

## Component Families
- Icon (Edit me)

## Component Specs
- Icon (Edit me): size 144x144px

## Most-Used Styles
- basic/grayscale/white: 7 uses
- brand/Enterprise: 2 uses
- basic/grayscale/gray-20: 1 use
- basic/grayscale/gray-30: 1 use
- basic/grayscale/gray-80: 1 use

## Layout & Structure
Screen: Cover / Cover
- FRAME "Cover", 1920x1080px, constraints left/top, fill #3300C6
  - FRAME "Image", 1920x1423px, constraints left/top, fill #FFFFFF, opacity 80% [decorative, ~278 shapes]
  - TEXT "Title", 1500x144px, constraints left/top, fill #FFFFFF, text [SF Pro Black, 150px], [heading]
  - TEXT "Title", 1478x190px, constraints left/top, fill #FFFFFF, text [SF Pro Black, 197.95px], [heading]
  - TEXT "Preview and export app icons for Splunk web apps.", 1638x119px, constraints left/top, fill #FFFFFF, text [SF Pro Regular, 60px], [heading]

Screen: Design / Icon (Edit me)
- COMPONENT "Icon (Edit me)", 144x144px, constraints scale/scale
  - FRAME "Default Icon", 144x144px, constraints scale/scale, radius 16px, fill gradient_linear(#3067D3 0% | #41B2B0 100%)
    - GROUP "Group 9640827", 160x172px, constraints left/top
      - VECTOR "Vector 1", 120x88px, constraints scale/scale, fill #FFFFFF66
      - VECTOR "Vector 2", 160x84px, constraints scale/scale, fill #FFFFFF66

Screen: Design / Mockup
- FRAME "Mockup", 1440x1024px, constraints left/top, fill #32373D
  - FRAME "Sidebar", 270x990px, constraints left/top_bottom, fill #3E444C
    - FRAME "Apps", 270x119px, vertical pad 0 0 0 0px gap -1px sizing W:fixed H:fixed, constraints left/top
      - FRAME "App", 270x60px, horizontal pad 12 16 12 16px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, fill #3E444C, effect [inner_shadow 0px offset 0 -1 #2F3337]
        - INSTANCE "Icon (Edit me)", 36x36px, constraints left/top
          - FRAME "Default Icon", 36x36px, constraints scale/scale, radius 4px, fill gradient_linear(#3067D3 0% | #41B2B0 100%)
            - GROUP "Group 9640827", 40x43px, constraints left/top
        - TEXT "App Title", 181x18px, constraints left/top, fill #FFFFFF, text [SF Pro Regular, 14px]
      - FRAME "App", 270x60px, horizontal pad 12 16 12 16px gap 16px align min/center sizing W:fixed H:fixed, constraints left/top, fill #3E444C, effect [inner_shadow 0px offset 0 -1 #2F3337, inner_shadow 0px offset 0 1 #2F3337]
        - GROUP "Group 9640826", 36x36px, constraints left/top, radius 2.22px
          - RECTANGLE "0ff4f860-9189-11ea-8650-0281150c11dc 1", 36x36px, constraints scale/scale, radius 2.22px, fill image(hash: 6fbaed3bd42dc8710e0fd0be7db2595f53a7e99e)
        - TEXT "Splunk Machine Learning Toolkit", 181x36px, constraints left/top, fill #FFFFFF, text [SF Pro Regular, 14px]
  - FRAME "AppBar", 1170x44px, constraints left_right/top, fill #FFFFFF, effect [inner_shadow 0px offset 1 0 #2F3337]
    - RECTANGLE "BG", 1170x44px, constraints scale/scale, fill basic/grayscale/gray-30
    - FRAME "Navs", 129x44px, horizontal pad 0 0 0 0px gap 27px align min/max sizing W:fixed H:fixed, constraints left/scale
      - FRAME "App Title", 45x41px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top
        - TEXT "Label", 45x38px, constraints scale/center, fill basic/grayscale/gray-80, text [SF Pro Regular, 14px]
        - RECTANGLE "Selected", 45x3px, constraints scale/scale, fill brand/Enterprise, opacity 0%
      - FRAME "App Title", 57x41px, vertical pad 0 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top
        - TEXT "Label", 57x38px, constraints scale/center, fill basic/grayscale/white, text [SF Pro Regular, 14px]
        - RECTANGLE "Selected", 57x3px, constraints scale/scale, fill brand/Enterprise
    - FRAME "App Title", 28x28px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fixed H:fixed, constraints right/scale
      - INSTANCE "Icon (Edit me)", 28x28px, constraints left/top
        - FRAME "Default Icon", 28x28px, constraints scale/scale, radius 3.11px, fill gradient_linear(#3067D3 0% | #41B2B0 100%)
          - GROUP "Group 9640827", 31.11x33.44px, constraints left/top
            - VECTOR "Vector 1", 23.33x17.11px, constraints scale/scale, fill #FFFFFF66
            - VECTOR "Vector 2", 31.11x16.33px, constraints scale/scale, fill #FFFFFF66
  - FRAME "Header", 1440x34px, constraints left_right/top, fill #FFFFFF
    - RECTANGLE "Rectangle 82 Copy", 1440x34px, constraints scale/scale, fill basic/grayscale/gray-20
    - FRAME "Logo and App", 338x34px, constraints left/center
      - FRAME "Frame 4", 129x20.45px, horizontal pad 0 0 0 0px gap 25.42px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Logo/SplunkEnterprise", 129x20.45px, constraints scale/scale, fill #FFFFFF
          - GROUP "SplunkEnterprise", 124x18.33px, constraints scale/scale, fill #FFFFFF
            - VECTOR "Fill 1", 5.51x8.65px, constraints scale/scale, fill basic/grayscale/white
            - BOOLEAN_OPERATION "Fill 2", 8.26x12.98px, constraints scale/scale, fill basic/grayscale/white
            - VECTOR "Fill 3", 1.97x12.19px, constraints scale/scale, fill basic/grayscale/white
            - VECTOR "Fill 4", 7.87x8.65px, constraints scale/scale, fill basic/grayscale/white
            - VECTOR "Fill 5", 7.87x8.65px, constraints scale/scale, fill basic/grayscale/white
            - VECTOR "Fill 6", 7.87x12.19px, constraints scale/scale, fill basic/grayscale/white
            - VECTOR "Fill 7", 5.51x7.08px, constraints scale/scale, fill #5CC05C, effect [inner_shadow 0px offset 0 -1.97 #0000001A]
            - TEXT "enterprise", 66x18px, constraints scale/center, fill #5CC05C, text [SF Pro Medium, 14px]
            - BOOLEAN_OPERATION "Fill 22", 1.97x1.97px, constraints scale/scale, fill #5CC05C
    - GROUP "Placeholder", 184x15px, constraints left/top, radius 8px
      - FRAME "Placeholder", 82x15px, constraints right/center, radius 8px, fill #32373D
      - FRAME "Placeholder", 34x15px, constraints right/center, radius 8px, fill #32373D
      - FRAME "Placeholder", 34x15px, constraints right/center, radius 8px, fill #32373D

Screen: Design / Instructions
- GROUP "Instructions", 896x197px, constraints left/top, radius 0/0/0/0px
  - TEXT "Start here 👇", 314x67px, constraints left/top, fill #000000, text [SF Pro Medium, 53.91px], [heading]
  - TEXT "Design your app icon within this component frame. Be sure to", 896x120px, constraints left/top, fill #000000D9, text [SF Pro Regular, 32px], [heading]

Screen: Design / Instructions
- GROUP "Instructions", 940x117px, constraints left/top, radius 0/0/0/0px
  - TEXT "Icon mockups", 345x67px, constraints left/top, fill #000000, text [SF Pro Medium, 53.91px], [heading]
  - TEXT "See how your icon will appear in general placements.", 940x40px, constraints left/top, fill #000000D9, text [SF Pro Regular, 32px], [heading]

Screen: Export / Export icons
- TEXT "Export icons", 310x67px, constraints left/top, fill #000000, text [SF Pro Medium, 53.91px], [heading]

Screen: Export / Ensure your icons appear correctly in the frames below Go to “File > Export” in the Figma menu bar Export the icon files to your app directory at: $SPLUNK_HOME/etc/apps/$APP_NAME/static
- TEXT "Ensure your icons appear correctly in the frames below Go to", 1573x141px, constraints left/top, fill #000000D9, text [SF Pro Regular, 32px], [heading]

Screen: Export / The icon frames on this page are preconfigured to export at the correct sizes and names to be registered in your web app.
- TEXT "The icon frames on this page are preconfigured to export at ", 1045x94px, constraints left/top, fill #000000D9, text [SF Pro Regular, 32px], [heading]

Screen: Export / appIcon
- FRAME "appIcon", 36x36px, constraints left/top
  - INSTANCE "Icon (Edit me)", 36x36px, constraints left/top
    - FRAME "Default Icon", 36x36px, constraints scale/scale, radius 4px, fill gradient_linear(#3067D3 0% | #41B2B0 100%)
      - GROUP "Group 9640827", 40x43px, constraints left/top
        - VECTOR "Vector 1", 30x22px, constraints scale/scale, fill #FFFFFF66
        - VECTOR "Vector 2", 40x21px, constraints scale/scale, fill #FFFFFF66

Screen: Export / appIconAlt
- FRAME "appIconAlt", 36x36px, constraints left/top
  - INSTANCE "Icon (Edit me)", 36x36px, constraints left/top
    - FRAME "Default Icon", 36x36px, constraints scale/scale, radius 4px, fill gradient_linear(#3067D3 0% | #41B2B0 100%)
      - GROUP "Group 9640827", 40x43px, constraints left/top
        - VECTOR "Vector 1", 30x22px, constraints scale/scale, fill #FFFFFF66
        - VECTOR "Vector 2", 40x21px, constraints scale/scale, fill #FFFFFF66

Screen: Export / appLogo
- FRAME "appLogo", 40x40px, constraints left/top
  - INSTANCE "Icon (Edit me)", 28x28px, constraints left/top
    - FRAME "Default Icon", 28x28px, constraints scale/scale, radius 4px, fill gradient_linear(#3067D3 0% | #41B2B0 100%)
      - GROUP "Group 9640827", 31.11x33.44px, constraints left/top
        - VECTOR "Vector 1", 23.33x17.11px, constraints scale/scale, fill #FFFFFF66
        - VECTOR "Vector 2", 31.11x16.33px, constraints scale/scale, fill #FFFFFF66


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
