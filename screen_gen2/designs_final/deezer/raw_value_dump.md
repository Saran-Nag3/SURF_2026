---
name: deezer-app-concept-community
source_file: Deezer App Concept (Community)
source_page: Page 1
generated_at: 2026-07-25T09:25:21.686820+00:00
---

# Deezer App Concept (Community) Design Guidelines

## Source
- Figma file: Deezer App Concept (Community)
- Figma page: Page 1
- Extracted at: 2026-07-25T09:25:21.686820+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- No local paint styles or color variables found.

## Raw Colors (unstyled)
- #FFFFFF: 149 uses
- #000000: 43 uses
- #868686: 20 uses
- #00000080: 16 uses
- #A238FF: 14 uses
- #505050: 12 uses
- #A0A0A0: 12 uses
- #D9D9D9: 10 uses
- #FFFFFF26: 8 uses
- #FFFFFF40: 8 uses
- #0000000D: 6 uses
- #1C1C1C: 6 uses
- #7B9CFF: 6 uses
- #E438FF: 6 uses
- #FD6149: 6 uses
- #FFFFFF80: 6 uses
- #6038FF: 5 uses
- #1F1F1F99: 4 uses
- #262626CC: 4 uses
- #434343: 4 uses
- #00000033: 3 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- Barlow Condensed Bold, 25px: 18 uses
- Barlow Condensed Regular, 15px: 14 uses
- Barlow Condensed Regular, 20px: 8 uses
- Barlow Condensed Bold, 36px: 6 uses
- Barlow Condensed Bold, 60px: 4 uses
- Barlow Condensed SemiBold, 22px: 4 uses
- Barlow Condensed SemiBold, 25px: 4 uses
- Barlow Condensed SemiBold, 35px: 4 uses
- SF Pro Semibold, 17px: 4 uses

## Typography Hierarchy
- 60px - Barlow Condensed Bold, 60px (raw)
- 36px - Barlow Condensed Bold, 36px (raw)
- 35px - Barlow Condensed SemiBold, 35px (raw)
- 25px - Barlow Condensed Bold, 25px (raw)
- 25px - Barlow Condensed SemiBold, 25px (raw)
- 22px - Barlow Condensed SemiBold, 22px (raw)
- 20px - Barlow Condensed Regular, 20px (raw)
- 17px - SF Pro Semibold, 17px (raw)
- 15px - Barlow Condensed Regular, 15px (raw)

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
Screen: Page 1 / player
- FRAME "player", 390x844px, constraints left/top, fill #1C1C1C
  - INSTANCE "Status Bar - iPhone", 390x43px, vertical pad 21 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame", 390x22px, horizontal pad 0 0 0 0px gap 134px align space_between/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Time", 133x22px, horizontal pad 0 6 0 16px gap 10px align center/center sizing W:fill H:fixed, constraints left/top
        - TEXT "Time", 37x22px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
      - FRAME "Dynamic Island spacer", 124x10px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Levels", 133x13px, horizontal pad 0 16 0 6px gap 7px align center/center sizing W:fill H:fixed, constraints left/top [decorative, ~5 shapes]
  - FRAME "bar", 481x140px, constraints left/top
    - FRAME "tabs", 481x114px, constraints left/top
      - RECTANGLE "tabs", 481x114px, constraints left/top, fill #262626CC, effect [background_blur 60px, layer_blur 20px]
      - FRAME "tabbs", 390x78px, constraints left/top, opacity 90%
        - FRAME "tab 1", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A238FF, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #A238FF, opacity 40%
          - INSTANCE "Home 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x23.25px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 2", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Shuffle", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x21.78px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 3", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Heart", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 24.87x21.24px, constraints scale/scale, stroke #FFFFFF 3px
        - FRAME "tab 4", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Search 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 21.7x21.7px, constraints scale/scale, stroke #FFFFFF 3px
    - FRAME "player", 380x55px, constraints left/top
      - RECTANGLE "Rectangle 5", 380x55px, constraints left/top, radius 20px, fill #A238FF
      - FRAME "ico", 40x40px, constraints left/top
        - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
        - VECTOR "Vector 9", 0x20px, constraints left/top, stroke #FFFFFF 4px
      - FRAME "texts", 276x44px, constraints left/top
        - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 22px]
        - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
      - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
  - TEXT "Home", 369x75px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 60px], [heading]
  - FRAME "player", 390x809px, constraints left/top
    - FRAME "back", 390x809px, constraints left/top, radius 30/30/0/0px
      - RECTANGLE "img", 810x808px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee)
      - RECTANGLE "fonColor", 390x809px, constraints left/top, radius 30/30/0/0px, fill #1F1F1F99, effect [background_blur 120px]
    - RECTANGLE "img", 338x338px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee), effect [drop_shadow 15px offset 0 7 #3A3A3A80]
    - FRAME "texts", 276x44px, constraints left/top, opacity 70%
      - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 25px], [heading]
      - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
    - FRAME "ico", 30x30px, constraints left/top, fill #FFFFFF, opacity 70%
      - VECTOR "Vector", 30x30px, constraints scale/scale, fill #FFFFFF
      - VECTOR "Vector", 22.23x12.13px, constraints scale/scale, fill #FFFFFF
    - TEXT "ico", 18x47px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 35px], [heading], opacity 70%
    - FRAME "tabs", 223x41px, constraints left/top [decorative, ~5 shapes]
    - RECTANGLE "Rectangle 10", 120x5px, constraints left/top, radius 9px, fill #434343

Screen: Page 1 / player
- FRAME "player", 390x844px, constraints left/top, fill #1C1C1C
  - INSTANCE "Status Bar - iPhone", 390x43px, vertical pad 21 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame", 390x22px, horizontal pad 0 0 0 0px gap 134px align space_between/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Time", 133x22px, horizontal pad 0 6 0 16px gap 10px align center/center sizing W:fill H:fixed, constraints left/top
        - TEXT "Time", 37x22px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
      - FRAME "Dynamic Island spacer", 124x10px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Levels", 133x13px, horizontal pad 0 16 0 6px gap 7px align center/center sizing W:fill H:fixed, constraints left/top [decorative, ~5 shapes]
  - FRAME "bar", 481x140px, constraints left/top
    - FRAME "tabs", 481x114px, constraints left/top
      - RECTANGLE "tabs", 481x114px, constraints left/top, fill #262626CC, effect [background_blur 60px, layer_blur 20px]
      - FRAME "tabbs", 390x78px, constraints left/top, opacity 90%
        - FRAME "tab 1", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A238FF, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #A238FF, opacity 40%
          - INSTANCE "Home 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x23.25px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 2", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Shuffle", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x21.78px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 3", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Heart", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 24.87x21.24px, constraints scale/scale, stroke #FFFFFF 3px
        - FRAME "tab 4", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Search 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 21.7x21.7px, constraints scale/scale, stroke #FFFFFF 3px
    - FRAME "player", 380x55px, constraints left/top
      - RECTANGLE "Rectangle 5", 380x55px, constraints left/top, radius 20px, fill #A238FF
      - FRAME "ico", 40x40px, constraints left/top
        - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
        - VECTOR "Vector 9", 0x20px, constraints left/top, stroke #FFFFFF 4px
      - FRAME "texts", 276x44px, constraints left/top
        - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 22px]
        - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
      - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
  - TEXT "Home", 369x75px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 60px], [heading]
  - FRAME "player", 390x809px, constraints left/top
    - FRAME "back", 390x809px, constraints left/top, radius 30/30/0/0px
      - RECTANGLE "img", 810x808px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee)
      - RECTANGLE "fonColor", 390x809px, constraints left/top, radius 30/30/0/0px, fill #1F1F1F99, effect [background_blur 120px]
    - RECTANGLE "img", 338x338px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee), effect [drop_shadow 15px offset 0 7 #3A3A3A80]
    - FRAME "texts", 276x44px, constraints left/top, opacity 70%
      - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 25px], [heading]
      - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
    - FRAME "ico", 30x30px, constraints left/top, fill #FFFFFF, opacity 70%
      - VECTOR "Vector", 30x30px, constraints scale/scale, fill #FFFFFF
      - VECTOR "Vector", 22.23x12.13px, constraints scale/scale, fill #FFFFFF
    - TEXT "ico", 18x47px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 35px], [heading], opacity 70%
    - FRAME "tabs", 223x41px, constraints left/top [decorative, ~5 shapes]
    - RECTANGLE "Rectangle 10", 120x5px, constraints left/top, radius 9px, fill #434343
    - ELLIPSE "Ellipse 4", 36x36px, constraints left/top, fill image(hash: 5d43cf2b68b625963d573a74e235c5cbbeb7d37e), stroke gradient_linear(#A238FF 0% | #4335C0 100%) 3px, opacity 75%

Screen: Page 1 / home
- FRAME "home", 390x844px, constraints left/top, fill #1C1C1C
  - FRAME "more for you", 390x230px, constraints left/top
    - FRAME "lists", 390x184px, constraints left/top
      - FRAME "list block", 150x184px, constraints left/top
        - TEXT "Made with Imagine Dragons and Tones and I", 150x27px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px], opacity 50%
        - FRAME "play list", 150x150px, constraints left/top, radius 30px
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, radius 30px, fill #E438FF
          - TEXT "Daily", 78x54px, constraints left/top, fill #000000, text [Barlow Condensed Bold, 36px], [heading]
          - RECTANGLE "17309142020065577068184718447825 1", 81x96px, constraints left/top, fill image(hash: 922c52f26f0ee2a1e44f1514d5fdc82aac467435)
          - RECTANGLE "17309142921922211333593041689416 1", 69x96px, constraints left/top, fill image(hash: 2b1ed6ce51bd379fda665538f15c5116490e21d9)
        - BOOLEAN_OPERATION "logo", 47.62x8.2px, constraints left/top, fill #FFFFFF, opacity 70%
      - FRAME "list block", 150x184px, constraints left/top
        - TEXT "Made with Sia and Ed Sheeran", 150x27px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px], opacity 50%
        - FRAME "play list", 150x150px, constraints left/top, radius 30px
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, radius 30px, fill #E438FF
          - TEXT "Weekly", 105x54px, constraints left/top, fill #000000, text [Barlow Condensed Bold, 36px], [heading]
          - RECTANGLE "image", 81x96px, constraints left/top, fill image(hash: ab05e808101f92b1a1a1690154c85e14544bc3e5)
          - RECTANGLE "image", 69x96px, constraints left/top, fill image(hash: a334810c8c2b4bae764dff9ae6d0639357f2ca42)
        - BOOLEAN_OPERATION "logo", 47.62x8.2px, constraints left/top, fill #FFFFFF, opacity 70%
      - FRAME "list block", 150x184px, constraints left/top
        - TEXT "Made with Last All listening from your likes", 150x27px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px], opacity 50%
        - FRAME "play list", 150x150px, constraints left/top, radius 30px
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, radius 30px, fill #E438FF
          - TEXT "More from Music", 142x76px, constraints left/top, fill #000000, text [Barlow Condensed Bold, 36px], [heading]
          - RECTANGLE "17309142020065577068184718447825 1", 57x71px, constraints left/top, fill image(hash: 922c52f26f0ee2a1e44f1514d5fdc82aac467435)
          - RECTANGLE "image", 33x71px, constraints left/top, fill image(hash: ab05e808101f92b1a1a1690154c85e14544bc3e5)
          - RECTANGLE "image", 60x71px, constraints left/top, fill image(hash: ab05e808101f92b1a1a1690154c85e14544bc3e5)
          - BOOLEAN_OPERATION "logo", 47.62x8.2px, constraints left/top, fill #FFFFFF, opacity 70%
    - TEXT "Made for You", 369x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
  - FRAME "Flow block", 390x196px, constraints left/top
    - FRAME "more of flow", 390x100px, constraints left/top
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Workout", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Party", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Chillout", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Sadly", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - GROUP "flow", 150x150px, constraints left/top, radius 0/0/0/0px
        - RECTANGLE "bloom", 150x150px, constraints left/top, fill gradient_linear(#B200FF 0% | #FF3300 100%), effect [background_blur 40px, layer_blur 60px]
        - FRAME "frow", 150x150px, constraints left/top, radius 30px, fill gradient_linear(#B200FF 0% | #FF3300 100%)
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, fill gradient_linear(#B200FF 0% | #FF3300 100%)
          - TEXT "Flow", 150x145px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 45px], [heading]
    - TEXT "Flow: listen to the mood", 369x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
  - FRAME "last block", 390x187px, constraints left/top
    - FRAME "lists", 390x100px, constraints left/top
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #FF9E7B
        - BOOLEAN_OPERATION "Union", 58.05x47.33px, constraints left/top, fill #FD6149
        - TEXT "Likes", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
        - TEXT "Likes tracks", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #7B9CFF
        - TEXT "Loaded", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
        - TEXT "Downloads", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #7B9CFF
        - RECTANGLE "17309123538305609710438037966738 1", 100x100px, constraints left/top, radius 30px, fill image(hash: fa908bff6b173024a19ff94423ae227d8d86da9a)
        - TEXT "Evolve", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #7B9CFF
        - FRAME "image", 100x100px, constraints left/top, radius 30px
          - RECTANGLE "17309125180094049328498473146028 1", 100x100px, constraints left/top, radius 30px, fill image(hash: 3ac6315fd84f6f725c7de7ba22d355a48a040a87)
          - TEXT "Cinematic Zen", 100x40px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 20px]
          - BOOLEAN_OPERATION "logo", 36x6.2px, constraints left/top, fill #FFFFFF, opacity 30%
        - TEXT "Cinematic Zen", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
    - TEXT "Last listening", 369x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
  - TEXT "Home", 369x75px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 60px], [heading]
  - FRAME "bar", 481x140px, constraints left/top
    - FRAME "tabs", 481x114px, constraints left/top
      - RECTANGLE "tabs", 481x114px, constraints left/top, fill #262626CC, effect [background_blur 60px, layer_blur 20px]
      - FRAME "tabbs", 390x78px, constraints left/top, opacity 90%
        - FRAME "tab 1", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A238FF, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #A238FF, opacity 40%
          - INSTANCE "Home 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x23.25px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 2", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Shuffle", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x21.78px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 3", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Heart", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 24.87x21.24px, constraints scale/scale, stroke #FFFFFF 3px
        - FRAME "tab 4", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Search 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 21.7x21.7px, constraints scale/scale, stroke #FFFFFF 3px
    - FRAME "player", 380x55px, constraints left/top
      - RECTANGLE "Rectangle 5", 380x55px, constraints left/top, radius 20px, fill #A238FF
      - FRAME "ico", 40x40px, constraints left/top
        - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
        - VECTOR "Vector 9", 0x20px, constraints left/top, stroke #FFFFFF 4px
      - FRAME "texts", 276x44px, constraints left/top
        - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 22px]
        - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
      - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
  - INSTANCE "Status Bar - iPhone", 390x43px, vertical pad 21 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame", 390x22px, horizontal pad 0 0 0 0px gap 134px align space_between/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Time", 133x22px, horizontal pad 0 6 0 16px gap 10px align center/center sizing W:fill H:fixed, constraints left/top
        - TEXT "Time", 37x22px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
      - FRAME "Dynamic Island spacer", 124x10px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Levels", 133x13px, horizontal pad 0 16 0 6px gap 7px align center/center sizing W:fill H:fixed, constraints left/top [decorative, ~5 shapes]
  - FRAME "profile", 43x43px, constraints left/top
    - FRAME "ico", 43x43px, constraints left/top
      - ELLIPSE "Ellipse 3", 43x43px, constraints left/top, fill #262626
      - INSTANCE "User Profile 03", 24x24px, constraints left/top, fill #FFFFFF
        - VECTOR "Icon", 17.52x15px, constraints scale/scale, radius 0/0/0/0px, stroke #A238FF 2px
  - FRAME "player", 390x809px, constraints left/top
    - FRAME "back", 390x809px, constraints left/top, radius 30/30/0/0px
      - RECTANGLE "img", 810x808px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee)
      - RECTANGLE "fonColor", 390x809px, constraints left/top, radius 30/30/0/0px, fill #1F1F1F99, effect [background_blur 120px]
    - RECTANGLE "img", 338x338px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee), effect [drop_shadow 15px offset 0 7 #3A3A3A80]
    - FRAME "texts", 276x44px, constraints left/top, opacity 70%
      - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 25px], [heading]
      - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
    - FRAME "ico", 30x30px, constraints left/top, fill #FFFFFF, opacity 70%
      - VECTOR "Vector", 30x30px, constraints scale/scale, fill #FFFFFF
      - VECTOR "Vector", 22.23x12.13px, constraints scale/scale, fill #FFFFFF
    - TEXT "ico", 18x47px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 35px], [heading], opacity 70%
    - FRAME "tabs", 223x41px, constraints left/top [decorative, ~5 shapes]
    - RECTANGLE "Rectangle 10", 120x5px, constraints left/top, radius 9px, fill #434343

Screen: Page 1 / home
- FRAME "home", 390x844px, constraints left/top, fill #1C1C1C
  - FRAME "more for you", 390x230px, constraints left/top
    - FRAME "lists", 390x184px, constraints left/top
      - FRAME "list block", 150x184px, constraints left/top
        - TEXT "Made with Imagine Dragons and Tones and I", 150x27px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px], opacity 50%
        - FRAME "play list", 150x150px, constraints left/top, radius 30px
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, radius 30px, fill #E438FF
          - TEXT "Daily", 78x54px, constraints left/top, fill #000000, text [Barlow Condensed Bold, 36px], [heading]
          - RECTANGLE "17309142020065577068184718447825 1", 81x96px, constraints left/top, fill image(hash: 922c52f26f0ee2a1e44f1514d5fdc82aac467435)
          - RECTANGLE "17309142921922211333593041689416 1", 69x96px, constraints left/top, fill image(hash: 2b1ed6ce51bd379fda665538f15c5116490e21d9)
        - BOOLEAN_OPERATION "logo", 47.62x8.2px, constraints left/top, fill #FFFFFF, opacity 70%
      - FRAME "list block", 150x184px, constraints left/top
        - TEXT "Made with Sia and Ed Sheeran", 150x27px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px], opacity 50%
        - FRAME "play list", 150x150px, constraints left/top, radius 30px
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, radius 30px, fill #E438FF
          - TEXT "Weekly", 105x54px, constraints left/top, fill #000000, text [Barlow Condensed Bold, 36px], [heading]
          - RECTANGLE "image", 81x96px, constraints left/top, fill image(hash: ab05e808101f92b1a1a1690154c85e14544bc3e5)
          - RECTANGLE "image", 69x96px, constraints left/top, fill image(hash: a334810c8c2b4bae764dff9ae6d0639357f2ca42)
        - BOOLEAN_OPERATION "logo", 47.62x8.2px, constraints left/top, fill #FFFFFF, opacity 70%
      - FRAME "list block", 150x184px, constraints left/top
        - TEXT "Made with Last All listening from your likes", 150x27px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px], opacity 50%
        - FRAME "play list", 150x150px, constraints left/top, radius 30px
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, radius 30px, fill #E438FF
          - TEXT "More from Music", 142x76px, constraints left/top, fill #000000, text [Barlow Condensed Bold, 36px], [heading]
          - RECTANGLE "17309142020065577068184718447825 1", 57x71px, constraints left/top, fill image(hash: 922c52f26f0ee2a1e44f1514d5fdc82aac467435)
          - RECTANGLE "image", 33x71px, constraints left/top, fill image(hash: ab05e808101f92b1a1a1690154c85e14544bc3e5)
          - RECTANGLE "image", 60x71px, constraints left/top, fill image(hash: ab05e808101f92b1a1a1690154c85e14544bc3e5)
          - BOOLEAN_OPERATION "logo", 47.62x8.2px, constraints left/top, fill #FFFFFF, opacity 70%
    - TEXT "Made for You", 369x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
  - FRAME "Flow block", 390x196px, constraints left/top
    - FRAME "more of flow", 390x100px, constraints left/top
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Workout", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Party", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Chillout", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #000000
        - TEXT "Sadly", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
      - GROUP "flow", 150x150px, constraints left/top, radius 0/0/0/0px
        - RECTANGLE "bloom", 150x150px, constraints left/top, fill gradient_linear(#B200FF 0% | #FF3300 100%), effect [background_blur 40px, layer_blur 60px]
        - FRAME "frow", 150x150px, constraints left/top, radius 30px, fill gradient_linear(#B200FF 0% | #FF3300 100%)
          - RECTANGLE "Rectangle 2", 150x150px, constraints left/top, fill gradient_linear(#B200FF 0% | #FF3300 100%)
          - TEXT "Flow", 150x145px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 45px], [heading]
    - TEXT "Flow: listen to the mood", 369x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
  - FRAME "last block", 390x187px, constraints left/top
    - FRAME "lists", 390x100px, constraints left/top
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #FF9E7B
        - BOOLEAN_OPERATION "Union", 58.05x47.33px, constraints left/top, fill #FD6149
        - TEXT "Likes", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
        - TEXT "Likes tracks", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #7B9CFF
        - TEXT "Loaded", 100x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
        - TEXT "Downloads", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #7B9CFF
        - RECTANGLE "17309123538305609710438037966738 1", 100x100px, constraints left/top, radius 30px, fill image(hash: fa908bff6b173024a19ff94423ae227d8d86da9a)
        - TEXT "Evolve", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
      - FRAME "play list", 100x100px, constraints left/top
        - RECTANGLE "Rectangle 2", 100x100px, constraints left/top, radius 30px, fill #7B9CFF
        - FRAME "image", 100x100px, constraints left/top, radius 30px
          - RECTANGLE "17309125180094049328498473146028 1", 100x100px, constraints left/top, radius 30px, fill image(hash: 3ac6315fd84f6f725c7de7ba22d355a48a040a87)
          - TEXT "Cinematic Zen", 100x40px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 20px]
          - BOOLEAN_OPERATION "logo", 36x6.2px, constraints left/top, fill #FFFFFF, opacity 30%
        - TEXT "Cinematic Zen", 90x50px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 20px]
    - TEXT "Last listening", 369x46px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 25px], [heading]
  - TEXT "Home", 369x75px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Bold, 60px], [heading]
  - FRAME "profile", 43x43px, constraints left/top
    - FRAME "ico", 43x43px, constraints left/top
      - ELLIPSE "Ellipse 3", 43x43px, constraints left/top, fill #262626
      - INSTANCE "User Profile 03", 24x24px, constraints left/top, fill #FFFFFF
        - VECTOR "Icon", 17.52x15px, constraints scale/scale, radius 0/0/0/0px, stroke #A238FF 2px
  - FRAME "bar", 481x140px, constraints left/top
    - FRAME "tabs", 481x114px, constraints left/top
      - RECTANGLE "tabs", 481x114px, constraints left/top, fill #262626CC, effect [background_blur 60px, layer_blur 20px]
      - FRAME "tabbs", 390x78px, constraints left/top, opacity 90%
        - FRAME "tab 1", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A238FF, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #A238FF, opacity 40%
          - INSTANCE "Home 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x23.25px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 2", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Shuffle", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 23.25x21.78px, constraints scale/scale, radius 0/0/0/0px, stroke #FFFFFF 3px
        - FRAME "tab 3", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Heart", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 24.87x21.24px, constraints scale/scale, stroke #FFFFFF 3px
        - FRAME "tab 4", 76x76px, constraints left/top
          - RECTANGLE "Rectangle 6", 73x52px, constraints left/top, radius 12px, fill #A0A0A0, effect [layer_blur 8px], opacity 25%
          - RECTANGLE "Rectangle 7", 60x40px, constraints left/top, radius 12px, fill #505050, opacity 40%
          - INSTANCE "Search 02", 31x31px, constraints left/top, fill #FFFFFF
            - VECTOR "Icon", 21.7x21.7px, constraints scale/scale, stroke #FFFFFF 3px
    - FRAME "player", 380x55px, constraints left/top
      - RECTANGLE "Rectangle 5", 380x55px, constraints left/top, radius 20px, fill #A238FF
      - FRAME "ico", 40x40px, constraints left/top
        - REGULAR_POLYGON "Polygon 2", 32x40px, constraints left/top, radius 3px, fill #FFFFFF
        - VECTOR "Vector 9", 0x20px, constraints left/top, stroke #FFFFFF 4px
      - FRAME "texts", 276x44px, constraints left/top
        - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 22px]
        - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
      - REGULAR_POLYGON "Polygon 2", 33x40px, constraints left/top, radius 3px, fill #FFFFFF
  - INSTANCE "Status Bar - iPhone", 390x43px, vertical pad 21 0 0 0px gap 0px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame", 390x22px, horizontal pad 0 0 0 0px gap 134px align space_between/center sizing W:fill H:fixed, constraints left/top
      - FRAME "Time", 133x22px, horizontal pad 0 6 0 16px gap 10px align center/center sizing W:fill H:fixed, constraints left/top
        - TEXT "Time", 37x22px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 17px]
      - FRAME "Dynamic Island spacer", 124x10px, horizontal pad 0 0 0 0px gap 0px align center/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Levels", 133x13px, horizontal pad 0 16 0 6px gap 7px align center/center sizing W:fill H:fixed, constraints left/top [decorative, ~5 shapes]
  - FRAME "player", 390x809px, constraints left/top
    - FRAME "back", 390x809px, constraints left/top, radius 30/30/0/0px
      - RECTANGLE "img", 810x808px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee)
      - RECTANGLE "fonColor", 390x809px, constraints left/top, radius 30/30/0/0px, fill #1F1F1F99, effect [background_blur 120px]
    - RECTANGLE "img", 338x338px, constraints left/top, radius 30px, fill image(hash: 74cbf40f002a779abd76b037331cd27af1c5ffee), effect [drop_shadow 15px offset 0 7 #3A3A3A80]
    - FRAME "texts", 276x44px, constraints left/top, opacity 70%
      - TEXT "Dance Monkey", 276x32px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 25px], [heading]
      - TEXT "Tones and I", 276x19px, constraints left/top, fill #FFFFFF, text [Barlow Condensed Regular, 15px]
    - FRAME "ico", 30x30px, constraints left/top, fill #FFFFFF, opacity 70%
      - VECTOR "Vector", 30x30px, constraints scale/scale, fill #FFFFFF
      - VECTOR "Vector", 22.23x12.13px, constraints scale/scale, fill #FFFFFF
    - TEXT "ico", 18x47px, constraints left/top, fill #FFFFFF, text [Barlow Condensed SemiBold, 35px], [heading], opacity 70%
    - FRAME "tabs", 223x41px, constraints left/top [decorative, ~5 shapes]
    - RECTANGLE "Rectangle 10", 120x5px, constraints left/top, radius 9px, fill #434343

Screen: Page 1 / a54cac50-3f93-47c9-a535-553207675949 1
- RECTANGLE "a54cac50-3f93-47c9-a535-553207675949 1", 1024x1024px, constraints left/top, fill image(hash: 3ac6315fd84f6f725c7de7ba22d355a48a040a87)

Screen: Page 1 / 173090964078458659002856863630 1
- RECTANGLE "173090964078458659002856863630 1", 502x140px, constraints left/top, fill image(hash: 61681a02f46307336ee1a2f96a4c5c0cd8329432)

Screen: Page 1 / Subtract
- BOOLEAN_OPERATION "Subtract", 320.5x55.2px, constraints left/top, fill #4C38FF, effect [background_blur 20px], opacity 70%

Screen: Page 1 / Plugin / file cover - 1
- FRAME "Plugin / file cover - 1", 1920x1080px, constraints left/top, fill #1C1C1C
  - GROUP "Group 1", 1496.35x1774.01px, constraints left/top, radius 500px
    - RECTANGLE "Rectangle 9", 1496.35x1774.01px, constraints left/top, radius 500px, fill #6E36DD, effect [layer_blur 280.1px]
  - RECTANGLE "projectTitle", 1325x1080px, constraints left/top, fill image(hash: 0175ae81edffa2d7fbc9c2c0e7b82b5695e76efe)
  - RECTANGLE "iPhone 16", 1912x1434px, constraints left/top, fill image(hash: 5e5601a7048fca781b1d2dc2db422d344cc1c9c9)

Screen: Page 1 / Plugin / file cover - 2
- FRAME "Plugin / file cover - 2", 1920x1080px, constraints left/top, fill #1C1C1C
  - RECTANGLE "Rectangle 9", 1479.59x1934.04px, constraints left/top, radius 500px, fill #6E36DD, effect [layer_blur 313.1px]
  - FRAME "Frame 1", 1056.28x349.25px, constraints left/top
  - RECTANGLE "iPhone 15 Pro", 1500x1125px, constraints left/top, fill image(hash: c730685659d7f94ef89729d86a549d8c762344de)
  - RECTANGLE "projectTitle", 720x458px, constraints left/top, fill image(hash: 7177905c23df67569edf727844886dc8b5cb2992)

Screen: Page 1 / Frame 1
- FRAME "Frame 1", 1056.28x349.25px, constraints left/top
  - BOOLEAN_OPERATION "Union", 348x349.25px, constraints left/top, fill gradient_linear(#4C38FF 0% | #2E2299 100%), stroke #000000 1px
  - BOOLEAN_OPERATION "Subtract", 650.28x112px, constraints left/top, fill #FFFFFF, effect [background_blur 20px]

Screen: Page 1 / Rectangle
- RECTANGLE "Rectangle", 512x512px, constraints left/top, fill image(hash: 5d43cf2b68b625963d573a74e235c5cbbeb7d37e)


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
