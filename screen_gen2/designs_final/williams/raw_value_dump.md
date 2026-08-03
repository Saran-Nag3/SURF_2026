---
name: ng-news-edit-mobile-app-community
source_file: NG News Edit Mobile App (Community)
source_page: All pages (7): cover, wireframe, design, components, design style, prototype, presentation
generated_at: 2026-07-25T09:42:44.680053+00:00
---

# NG News Edit Mobile App (Community) Design Guidelines

## Source
- Figma file: NG News Edit Mobile App (Community)
- Figma page: All pages (7): cover, wireframe, design, components, design style, prototype, presentation
- Extracted at: 2026-07-25T09:42:44.680053+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- dark: [#1D1D1D]
- primary: [#ECF4F6]
- white: [#FFFFFF]
- secondary: [#F8F8F8]
- Secondary: [#014EB1]
- Yellow Primary: [#FFBB54]
- Gray 2: [#4F4F4F]
- Base/Black: [#161C2B]
- Fill/Dark/Main Dark: [#2E2C34]
- Neutral/White: [#FFFFFF]
- Secondary: [#BE71FF]

## Raw Colors (unstyled)
- #000000: 704 uses
- #FFFFFF: 91 uses
- #D9D9D9: 36 uses
- #0000004D: 25 uses
- #0000001A: 24 uses
- #00000080: 22 uses
- #8C8C8C: 17 uses
- #999797: 17 uses
- #00000017: 12 uses
- #A9A4A4: 12 uses
- #BBBBBB: 12 uses
- #FFF6F6: 12 uses

## Typography Tokens
- H1: Montserrat Bold (700), 48px / auto, tracking 0px
- small text: Times New Roman TimesNewRomanPSMT (400), 12px / auto, tracking 0px
- Paragraph: Times New Roman TimesNewRomanPSMT (400), 16px / auto, tracking 0px
- H3: Times New Roman BoldMT (700), 20px / auto, tracking 0px
- H1: Times New Roman BoldMT (700), 32px / auto, tracking 0px
- H2: Times New Roman BoldMT (700), 24px / auto, tracking 0px
- H2: Montserrat Bold (700), 24px / auto, tracking 0px
- Body: Poppins Regular (400), 16px / auto, tracking 0px

## Raw Typography (unstyled)
- Times New Roman BoldMT, 16px: 48 uses
- Plus Jakarta Sans SemiBold, 30px: 28 uses
- SF Pro Text Semibold, 15px: 21 uses
- Times New Roman BoldMT, 12px: 16 uses
- Poppins Medium, 16px: 15 uses
- Poppins Medium, 128px: 6 uses
- Times New Roman TimesNewRomanPSMT, 16px: 6 uses
- Poppins SemiBold, 12px: 4 uses
- Times New Roman TimesNewRomanPSMT, 15px: 4 uses

## Typography Hierarchy
- 128px - Poppins Medium, 128px (raw)
- 48px - H1 (Montserrat Bold)
- 32px - H1 (Times New Roman BoldMT)
- 30px - Plus Jakarta Sans SemiBold, 30px (raw)
- 24px - H2 (Montserrat Bold)
- 24px - H2 (Times New Roman BoldMT)
- 20px - H3 (Times New Roman BoldMT)
- 16px - Body (Poppins Regular)
- 16px - Paragraph (Times New Roman TimesNewRomanPSMT)
- 16px - Poppins Medium, 16px (raw)
- 16px - Times New Roman BoldMT, 16px (raw)
- 16px - Times New Roman TimesNewRomanPSMT, 16px (raw)
- 15px - SF Pro Text Semibold, 15px (raw)
- 15px - Times New Roman TimesNewRomanPSMT, 15px (raw)
- 12px - Poppins SemiBold, 12px (raw)
- 12px - Times New Roman BoldMT, 12px (raw)
- 12px - small text (Times New Roman TimesNewRomanPSMT)

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
- button
- Frame 11
- Status bar

## Component Specs
- button: size 292x50px, radius 10px, fill #8C8C8C, text [Poppins Medium, 16px] | variants: Property 1: DESIGN/Default
- Frame 11: size 375x62px, vertical layout, padding 4 24 4 24px, gap 9px, align min/center, sizing W:fixed H:fixed, fill #999797, stroke #000000 1px, text [small text]
- Status bar: size 375x44px, text [SF Pro Text Semibold, 15px]

## Most-Used Styles
- small text: 140 uses
- primary: 62 uses
- secondary: 51 uses
- dark: 50 uses
- H3: 47 uses
- Paragraph: 34 uses
- white: 32 uses
- Yellow Primary: 28 uses
- H1: 19 uses
- Base/Black: 15 uses
- Body: 12 uses
- Fill/Dark/Main Dark: 8 uses
- H2: 8 uses
- Neutral/White: 4 uses
- Secondary: 4 uses
- Gray 2: 2 uses

## Layout & Structure
Screen: wireframe / splash
- FRAME "splash", 375x812px, constraints left/top, fill #FFFFFF
  - GROUP "Group 5", 308x69px, constraints left/top, radius 0/0/0/0px
    - TEXT "NG News Edit", 196x37px, constraints left/top, fill #000000, text [H1], [heading]
    - TEXT "For those who love it short and precise", 308x18px, constraints left/top, fill #000000, text [Paragraph]
  - GROUP "Group 4", 377x456px, constraints left/top
    - FRAME "Frame 6", 125x112px, constraints left/top, fill #999999
    - FRAME "Frame 7", 125x112px, constraints left/top, fill #999999
    - FRAME "Frame 4", 143x132px, constraints left/top, fill #8C8C8C
      - RECTANGLE "Rectangle 1", 125x112px, constraints center/top, fill #D9D9D9
    - FRAME "Frame 3", 272x251px, constraints left/top, fill #8C8C8C
      - RECTANGLE "Rectangle 1", 248x223px, constraints left/top, fill #D9D9D9
  - INSTANCE "button", 327x50px, constraints left/top, radius 10px, fill #8C8C8C
    - TEXT "Continue", 46x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]

Screen: wireframe / onboarding
- FRAME "onboarding", 375x812px, constraints left/top, fill #FFFFFF
  - GROUP "Group 1", 327x374px, constraints left/top, radius 0/0/0/0px
    - FRAME "Frame 1", 327x329px, constraints left/top, radius 15px, fill #D9D9D9
      - TEXT "Editor’s Hand-Picked", 226x56px, constraints center/top, fill #000000, text [H2], [heading]
      - INSTANCE "button", 292x50px, constraints center/top, radius 10px, fill #8C8C8C
        - TEXT "Continue", 74x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
      - TEXT "Protected by reCAPTC", 309x76px, constraints center/scale, fill #000000, text [small text]
    - FRAME "Frame 2", 67x15px, horizontal pad 0 0 0 0px gap 11px sizing W:fixed H:fixed, constraints center/top
      - ELLIPSE "Ellipse 1", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 2", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 3", 15x15px, constraints left/top, fill #D9D9D9
  - TEXT "skip", 26x18px, constraints left/top, fill #000000, text [Poppins SemiBold, 12px]

Screen: wireframe / onboarding
- FRAME "onboarding", 375x812px, constraints left/top, fill #FFFFFF
  - GROUP "Group 2", 327x374px, constraints left/top, radius 0/0/0/0px
    - FRAME "Frame 1", 327x329px, constraints left/top, radius 15px, fill #D9D9D9
      - TEXT "Thoughtful and Focused", 226x56px, constraints center/top, fill #000000, text [H2], [heading]
      - INSTANCE "button", 292x50px, constraints center/top, radius 10px, fill #8C8C8C
        - TEXT "Continue", 74x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
      - TEXT "Protected by reCAPTC", 309x76px, constraints center/scale, fill #000000, text [small text]
    - FRAME "Frame 2", 67x15px, horizontal pad 0 0 0 0px gap 11px sizing W:fixed H:fixed, constraints center/top
      - ELLIPSE "Ellipse 1", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 2", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 3", 15x15px, constraints left/top, fill #D9D9D9
  - TEXT "skip", 26x18px, constraints left/top, fill #000000, text [Poppins SemiBold, 12px]

Screen: wireframe / onboarding
- FRAME "onboarding", 375x812px, constraints left/top, fill #FFFFFF
  - GROUP "Group 3", 327x374px, constraints left/top, radius 0/0/0/0px
    - FRAME "Frame 1", 327x329px, constraints left/top, radius 15px, fill #D9D9D9
      - TEXT "Read Less, Understand More", 226x56px, constraints center/top, fill #000000, text [H2], [heading]
      - INSTANCE "button", 292x50px, constraints center/top, radius 10px, fill #8C8C8C
        - TEXT "Continue", 74x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
      - TEXT "Protected by reCAPTC", 309x76px, constraints center/scale, fill #000000, text [small text]
    - FRAME "Frame 2", 67x15px, horizontal pad 0 0 0 0px gap 11px sizing W:fixed H:fixed, constraints center/top
      - ELLIPSE "Ellipse 1", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 2", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 3", 15x15px, constraints left/top, fill #D9D9D9

Screen: wireframe / sign up
- FRAME "sign up", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 19", 328x237px, constraints left/top, radius 0/0/0/0px
    - GROUP "Group 16", 327x59px, constraints left/top, radius 20px
      - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
      - TEXT "User Name", 55x14px, constraints left/top, fill #000000, text [small text]
    - GROUP "Group 17", 327x59px, constraints left/top, radius 20px
      - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
      - TEXT "Email", 29x14px, constraints left/top, fill #000000, text [small text]
    - GROUP "Group 18", 327x59px, constraints left/top, radius 20px
      - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
      - TEXT "Password", 47x14px, constraints left/top, fill #000000, text [small text]
    - LINE "Line 1", 0x26px, constraints left/top, stroke #00000080 1px
    - LINE "Line 2", 0x26px, constraints left/top, stroke #00000080 1px
    - LINE "Line 3", 0x26px, constraints left/top, stroke #00000080 1px
    - VECTOR "Vector", 16x6px, constraints scale/scale, stroke #0000004D 1px
    - VECTOR "Vector", 8x8px, constraints scale/scale, stroke #0000004D 1px
    - GROUP "Group 11", 20x16px, constraints left/top
      - VECTOR "Vector", 20x16px, constraints scale/scale, stroke #0000004D 1px
      - VECTOR "Vector", 20x7px, constraints scale/scale, stroke #0000004D 1px
    - GROUP "Group 13", 18x19.75px, constraints left/top
      - VECTOR "Vector", 18x11px, constraints scale/scale, stroke #0000004D 1px
      - VECTOR "Vector", 10x9px, constraints scale/scale, stroke #0000004D 1px
  - GROUP "Group 9", 206x78px, constraints center/top
    - FRAME "Frame 9", 185x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_google logo", 16x16px, constraints left/top, fill #FFFFFF [decorative, ~4 shapes]
      - TEXT "label", 159x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
    - FRAME "Frame 10", 206x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_fb logo", 16x16px, constraints left/top, fill #FFFFFF
        - ELLIPSE "Oval", 16x16px, constraints scale/scale, fill #1977F3
        - VECTOR "Path", 6.84x12.88px, constraints scale/scale, fill Neutral/White
      - TEXT "label", 180x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
  - INSTANCE "button", 326x50px, constraints left/top, radius 10px, fill #8C8C8C
    - TEXT "Continue", 62x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
  - TEXT "Sign Up", 124x48px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 16", 279x24px, constraints left/top, radius 0/0/0/0px
    - TEXT "Already have an account?", 211x24px, constraints left/top, fill #000000, text [Body]
    - TEXT "Sign In!", 58x24px, constraints left/top, fill Secondary, text [Body]

Screen: wireframe / sign in
- FRAME "sign in", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 20", 327x59px, constraints left/top, radius 20px
    - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
    - TEXT "User Name", 55x14px, constraints left/top, fill #000000, text [small text]
  - GROUP "Group 21", 327x59px, constraints left/top, radius 20px
    - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
    - TEXT "Password", 47x14px, constraints left/top, fill #000000, text [small text]
  - TEXT "Sign In", 111x48px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 20", 199x78px, constraints center/top
    - FRAME "Frame 9", 179x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_google logo", 16x16px, constraints left/top, fill #FFFFFF [decorative, ~4 shapes]
      - TEXT "label", 153x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
    - FRAME "Frame 10", 199x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_fb logo", 16x16px, constraints left/top, fill #FFFFFF
        - ELLIPSE "Oval", 16x16px, constraints scale/scale, fill #1977F3
        - VECTOR "Path", 6.84x12.88px, constraints scale/scale, fill Neutral/White
      - TEXT "label", 173x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
  - INSTANCE "button", 326x50px, constraints left/top, radius 10px, fill #8C8C8C
    - TEXT "Continue", 54x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
  - GROUP "Group 21", 266x24px, constraints left/top, radius 0/0/0/0px
    - TEXT "Don’t have an account?", 191x24px, constraints left/top, fill #000000, text [Body]
    - TEXT "Sign up!", 65x24px, constraints left/top, fill Secondary, text [Body]

Screen: wireframe / home
- FRAME "home", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 22", 196x40px, constraints left/top, radius 0/0/0/0px
    - TEXT "NG News Edit", 196x37px, constraints left/top, fill #000000, text [H1], [heading]
    - LINE "Line 4", 42x0px, constraints left/top, stroke #000000 3px
  - GROUP "date", 328x40px, constraints left/top, radius 0/0/0/0px
    - LINE "Line 5", 327x0px, constraints left/top, stroke #0000004D 1px
    - LINE "Line 6", 327x0px, constraints left/top, stroke #0000004D 1px
    - TEXT "Wednesday, 30 March", 152x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
    - TEXT "Editions", 54x18px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 16px]
    - LINE "Line 7", 52x0px, constraints left/top, stroke #00000080 1px
  - TEXT "8 Stories", 60x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
  - FRAME "news carousel", 350x469px, horizontal pad 0 0 0 0px gap 16px sizing W:fixed H:fixed, constraints left/top
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "01", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "Mohbad: Naira Marley relseases last coversation with late si", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "02", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "Oshodi-Apapa: Lagos truckers, stakeholders meet over gridloc", 251x69px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "03", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "Sports: Manchester United winger, Antony returns to training", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "04", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "05", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "06", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
  - INSTANCE "Frame 11", 375x62px, vertical pad 4 24 4 24px gap 9px align min/center sizing W:fixed H:fixed, constraints left/top, fill #999797, stroke #000000 1px
    - FRAME "Frame 12", 327x40px, horizontal pad 0 0 0 0px gap 114px sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 24", 30x40px, constraints left/top
        - FRAME "text-file-line-icon 1", 20x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 20x24px, constraints scale/scale
            - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
        - TEXT "Home", 30x14px, constraints left/top, fill #000000, text [small text]
      - GROUP "Group 25", 30x40px, constraints left/top
        - TEXT "Saved", 30x14px, constraints left/top, fill #000000, text [small text]
        - GROUP "Group", 20x24px, constraints scale/scale
          - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
      - GROUP "Group 26", 39x40px, constraints left/top
        - TEXT "Settings", 39x14px, constraints left/top, fill #000000, text [small text]
        - FRAME "setting-line-icon 1", 23x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 23x24px, constraints scale/scale
            - VECTOR "Vector", 23x24px, constraints scale/scale, fill #000000
    - RECTANGLE "Home Indicator", 134x5px, constraints left/top, radius 100px, fill Base/Black, stroke #979797 0px

Screen: wireframe / home dates
- FRAME "home dates", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 22", 196x40px, constraints left/top, radius 0/0/0/0px
    - TEXT "NG News Edit", 196x37px, constraints left/top, fill #000000, text [H1], [heading]
    - LINE "Line 4", 42x0px, constraints left/top, stroke #000000 3px
  - GROUP "date", 328x40px, constraints left/top, radius 0/0/0/0px
    - LINE "Line 5", 327x0px, constraints left/top, stroke #0000004D 1px
    - LINE "Line 6", 327x0px, constraints left/top, stroke #0000004D 1px
    - TEXT "Tuesday, 29 March", 130x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
    - TEXT "Editions", 54x18px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 16px]
    - LINE "Line 7", 52x0px, constraints left/top, stroke #00000080 1px
  - TEXT "8 Stories", 60x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
  - INSTANCE "Frame 11", 375x62px, vertical pad 4 24 4 24px gap 9px align min/center sizing W:fixed H:fixed, constraints left/top, fill #999797, stroke #000000 1px
    - FRAME "Frame 12", 327x40px, horizontal pad 0 0 0 0px gap 114px sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 24", 30x40px, constraints left/top
        - FRAME "text-file-line-icon 1", 20x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 20x24px, constraints scale/scale
            - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
        - TEXT "Home", 30x14px, constraints left/top, fill #000000, text [small text]
      - GROUP "Group 25", 30x40px, constraints left/top
        - TEXT "Saved", 30x14px, constraints left/top, fill #000000, text [small text]
        - GROUP "Group", 20x24px, constraints scale/scale
          - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
      - GROUP "Group 26", 39x40px, constraints left/top
        - TEXT "Settings", 39x14px, constraints left/top, fill #000000, text [small text]
        - FRAME "setting-line-icon 1", 23x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 23x24px, constraints scale/scale
            - VECTOR "Vector", 23x24px, constraints scale/scale, fill #000000
    - RECTANGLE "Home Indicator", 134x5px, constraints left/top, radius 100px, fill Base/Black, stroke #979797 0px
  - FRAME "news carousel", 350x469px, horizontal pad 0 0 0 0px gap 16px sizing W:fixed H:fixed, constraints left/top
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "War with Nigeria? Ghana already planning for the next phase ", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "01", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "France votes: Macron’s frontrunner status conceals deep rift", 251x69px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "02", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "Deep mind accused of mishandling sexual misconduct allegatio", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "03", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "Sports: Manchester United winger, Antony returns to training", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "04", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "05", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill #BBBBBB, stroke #000000 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill #A9A4A4, stroke #000000 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill #D9D9D9
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill #FFF6F6
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill #999797
        - TEXT "06", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #000000 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]

Screen: wireframe / article
- FRAME "article", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - FRAME "Frame 13", 328x202px, constraints left/top, fill #8C8C8C
  - FRAME "Frame 15", 326x14px, horizontal pad 0 0 0 0px gap 265px sizing W:fixed H:fixed, constraints left/top [decorative, ~5 shapes]
  - GROUP "Group 30", 281x145px, constraints left/top
    - FRAME "copyright-icon 1", 11x11px, constraints left/top, fill #FFFFFF
      - GROUP "Group 29", 11x11px, constraints left/top
        - GROUP "Group", 11x11px, constraints scale/scale
          - VECTOR "Vector", 11x11px, constraints scale/scale, fill #000000
    - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh", 268x11px, constraints left/top, fill #000000, text [small text]
    - TEXT "By Williams Alayode in Lagos, Nigeria", 193x11px, constraints left/top, fill #000000, text [small text]
  - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
  - LINE "Line 4", 27x0px, constraints left/top, stroke #000000 3px
  - TEXT "Lorem ipsum dolor sit amet consectetur. In elementum in temp", 327x233px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 15px]
  - RECTANGLE "Home Indicator", 134x5px, constraints center/top, radius 100px, fill Base/Black, stroke #979797 0px

Screen: wireframe / saved article
- FRAME "saved article", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - FRAME "Frame 13", 328x202px, constraints left/top, fill #8C8C8C
  - FRAME "Frame 15", 326x14px, horizontal pad 0 0 0 0px gap 265px sizing W:fixed H:fixed, constraints left/top [decorative, ~5 shapes]
  - GROUP "Group 30", 281x145px, constraints left/top
    - FRAME "copyright-icon 1", 11x11px, constraints left/top, fill #FFFFFF
      - GROUP "Group 29", 11x11px, constraints left/top
        - GROUP "Group", 11x11px, constraints scale/scale
          - VECTOR "Vector", 11x11px, constraints scale/scale, fill #000000
    - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh", 268x11px, constraints left/top, fill #000000, text [small text]
    - TEXT "By Williams Alayode in Lagos, Nigeria", 193x11px, constraints left/top, fill #000000, text [small text]
  - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
  - LINE "Line 4", 27x0px, constraints left/top, stroke #000000 3px
  - TEXT "Lorem ipsum dolor sit amet consectetur. In elementum in temp", 327x233px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 15px]
  - RECTANGLE "Home Indicator", 134x5px, constraints center/top, radius 100px, fill Base/Black, stroke #979797 0px
  - FRAME "Frame 16", 375x41px, constraints left/top, radius 5px, fill #A8A8A8
    - GROUP "Group 31", 102x16px, constraints left/top
      - VECTOR "Vector", 11x14px, constraints left/top, fill #000000
      - LINE "Line 9", 0x16px, constraints left/top, stroke #000000 1px
      - TEXT "Saved for Later", 75x14px, constraints left/top, fill #000000, text [small text]

Screen: wireframe / editions
- FRAME "editions", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 32", 115x42px, constraints left/top, radius 0/0/0/0px
    - TEXT "Editions", 72x23px, constraints left/top, fill #000000, text [H3], [heading]
    - TEXT "Read from past editions", 115x14px, constraints left/top, fill #000000, text [small text]
  - TEXT "TODAY", 41x14px, constraints left/top, fill #000000, text [small text]
  - TEXT "PREVIOUS", 59x14px, constraints left/top, fill #000000, text [small text]
  - FRAME "Frame 17", 327x76px, constraints left/top, fill #8C8C8C
    - GROUP "Group 33", 74x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Wednesday", 74x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - TEXT "30th", 29x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 18", 327x76px, constraints left/top, fill #8C8C8C
    - GROUP "Group 33", 54x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Tuesday", 54x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - TEXT "29th", 29x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 19", 327x76px, constraints left/top, fill #8C8C8C
    - GROUP "Group 33", 54x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Monday", 54x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - TEXT "28th", 29x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 20", 327x76px, constraints left/top, fill #8C8C8C
    - GROUP "Group 33", 57x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Saturday", 57x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - TEXT "26th", 29x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 21", 327x76px, constraints left/top, fill #8C8C8C
    - GROUP "Group 33", 42x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Friday", 42x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - TEXT "25th", 29x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - TEXT "Cancel", 34x14px, constraints left/top, fill #000000, text [small text]

Screen: wireframe / saved
- FRAME "saved", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - TEXT "Saved", 52x23px, constraints center/top, fill #000000, text [H3], [heading]
  - INSTANCE "Frame 11", 375x62px, vertical pad 4 24 4 24px gap 9px align min/center sizing W:fixed H:fixed, constraints left/top, fill #999797, stroke #000000 1px
    - FRAME "Frame 12", 327x40px, horizontal pad 0 0 0 0px gap 114px sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 24", 30x40px, constraints left/top
        - FRAME "text-file-line-icon 1", 20x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 20x24px, constraints scale/scale
            - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
        - TEXT "Home", 30x14px, constraints left/top, fill #000000, text [small text]
      - GROUP "Group 25", 30x40px, constraints left/top
        - TEXT "Saved", 30x14px, constraints left/top, fill #000000, text [small text]
        - GROUP "Group", 20x24px, constraints scale/scale
          - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
      - GROUP "Group 26", 39x40px, constraints left/top
        - TEXT "Settings", 39x14px, constraints left/top, fill #000000, text [small text]
        - FRAME "setting-line-icon 1", 23x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 23x24px, constraints scale/scale
            - VECTOR "Vector", 23x24px, constraints scale/scale, fill #000000
    - RECTANGLE "Home Indicator", 134x5px, constraints left/top, radius 100px, fill Base/Black, stroke #979797 0px
  - GROUP "Group 34", 326x29px, constraints left/top
    - VECTOR "Vector", 11x14px, constraints left/top, fill #000000
    - TEXT "Wole Soyinka: ‘I say to the youths “ I hope I’m helping them", 298x28px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - LINE "Line 11", 0x24px, constraints left/top, stroke #000000 1px
  - GROUP "Group 35", 326x29px, constraints left/top
    - VECTOR "Vector", 11x14px, constraints left/top, fill #000000
    - TEXT "Wole Soyinka: ‘I say to the youths “ I hope I’m helping them", 298x28px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - LINE "Line 11", 0x24px, constraints left/top, stroke #000000 1px
  - GROUP "Group 36", 326x29px, constraints left/top
    - VECTOR "Vector", 11x14px, constraints left/top, fill #000000
    - TEXT "Wole Soyinka: ‘I say to the youths “ I hope I’m helping them", 298x28px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - LINE "Line 11", 0x24px, constraints left/top, stroke #000000 1px

Screen: wireframe / settings
- FRAME "settings", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - TEXT "Settings", 68x23px, constraints center/top, fill #000000, text [H3], [heading]
  - INSTANCE "Frame 11", 375x62px, vertical pad 4 24 4 24px gap 9px align min/center sizing W:fixed H:fixed, constraints left/top, fill #999797, stroke #000000 1px
    - FRAME "Frame 12", 327x40px, horizontal pad 0 0 0 0px gap 114px sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 24", 30x40px, constraints left/top
        - FRAME "text-file-line-icon 1", 20x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 20x24px, constraints scale/scale
            - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
        - TEXT "Home", 30x14px, constraints left/top, fill #000000, text [small text]
      - GROUP "Group 25", 30x40px, constraints left/top
        - TEXT "Saved", 30x14px, constraints left/top, fill #000000, text [small text]
        - GROUP "Group", 20x24px, constraints scale/scale
          - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
      - GROUP "Group 26", 39x40px, constraints left/top
        - TEXT "Settings", 39x14px, constraints left/top, fill #000000, text [small text]
        - FRAME "setting-line-icon 1", 23x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 23x24px, constraints scale/scale
            - VECTOR "Vector", 23x24px, constraints scale/scale, fill #000000
    - RECTANGLE "Home Indicator", 134x5px, constraints left/top, radius 100px, fill Base/Black, stroke #979797 0px
  - FRAME "Frame 17", 327x90px, constraints left/top, fill #8C8C8C
  - TEXT "Feed Us Back", 90x18px, constraints left/top, fill #000000, text [Paragraph]
  - LINE "Line 12", 325x0px, constraints left/top, stroke #00000017 1px
  - LINE "Line 13", 325x0px, constraints left/top, stroke #00000017 1px
  - LINE "Line 14", 325x0px, constraints left/top, stroke #00000017 1px
  - LINE "Line 15", 325x0px, constraints left/top, stroke #00000017 1px
  - LINE "Line 16", 325x0px, constraints left/top, stroke #00000017 1px
  - LINE "Line 17", 325x0px, constraints left/top, stroke #00000017 1px
  - GROUP "Group 37", 326x15px, constraints left/top
    - TEXT "We’d love to hear your feedback", 166x14px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - VECTOR "Vector", 6x12px, constraints left/top, stroke #00000080 2px
  - GROUP "Group 38", 326x15px, constraints left/top
    - TEXT "Report a bug", 68x14px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - VECTOR "Vector", 6x12px, constraints left/top, stroke #00000080 2px
  - GROUP "Group 39", 326x15px, constraints left/top
    - TEXT "Privacy policy", 74x14px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - VECTOR "Vector", 6x12px, constraints left/top, stroke #00000080 2px
  - GROUP "Group 40", 326x15px, constraints left/top
    - TEXT "Terms and Conditions", 114x14px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - VECTOR "Vector", 6x12px, constraints left/top, stroke #00000080 2px
  - GROUP "Group 41", 326x15px, constraints left/top
    - TEXT "Restore Purchase", 90x14px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 12px]
    - VECTOR "Vector", 6x12px, constraints left/top, stroke #00000080 2px
  - TEXT "PERMISSIONS", 105x18px, constraints left/top, fill #000000, text [Paragraph]
  - TEXT "ACCOUNT", 78x18px, constraints left/top, fill #000000, text [Paragraph]

Screen: wireframe / SPLASH & ONBOARDING
- TEXT "SPLASH & ONBOARDING", 1491x192px, constraints left/top, fill #000000, text [Poppins Medium, 128px], [heading]

Screen: wireframe / AUTHENTICATION
- TEXT "AUTHENTICATION", 1093x192px, constraints left/top, fill #000000, text [Poppins Medium, 128px], [heading]

Screen: wireframe / HOME & OTHERS
- TEXT "HOME & OTHERS", 1023x192px, constraints left/top, fill #000000, text [Poppins Medium, 128px], [heading]

Screen: design / splash
- FRAME "splash", 375x812px, constraints left/top, fill white
  - GROUP "Group 5", 308x69px, constraints left/top, radius 0/0/0/0px
    - TEXT "NG News Edit", 196x37px, constraints left/top, fill #000000, text [H1], [heading]
    - TEXT "For those who love it short and precise", 308x18px, constraints left/top, fill #000000, text [Paragraph]
  - GROUP "Group 4", 377x456px, constraints left/top
    - FRAME "Frame 6", 125x112px, constraints left/top, fill #F8F8F8
    - FRAME "Frame 7", 125x112px, constraints left/top, fill #ECF4F6
    - FRAME "Frame 4", 143x132px, constraints left/top, fill secondary
      - RECTANGLE "Rectangle 1", 125x112px, constraints center/top, fill #D9D9D9
    - FRAME "Frame 3", 272x251px, constraints left/top, fill primary
      - RECTANGLE "Rectangle 1", 248x223px, constraints left/top, fill #D9D9D9
  - INSTANCE "button", 327x50px, constraints left/top, radius 10px, fill dark
    - TEXT "Continue", 46x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]

Screen: design / onboarding
- FRAME "onboarding", 375x812px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Pexels Photo by Ketut Subiyanto", 365x549px, constraints center/top, fill image(hash: 47f5bd05b9872d7981f580673cd5ce16d4983204)
  - GROUP "Group 1", 327x374px, constraints left/top, radius 0/0/0/0px
    - FRAME "Frame 1", 327x329px, constraints left/top, radius 15px, fill primary
      - TEXT "Editor’s Hand-Picked", 226x56px, constraints center/top, fill #000000, text [H2], [heading]
      - INSTANCE "button", 292x50px, constraints center/top, radius 10px, fill dark
        - TEXT "Continue", 74x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
      - TEXT "Protected by reCAPTC", 309x76px, constraints center/scale, fill #000000, text [small text]
    - FRAME "Frame 2", 67x15px, horizontal pad 0 0 0 0px gap 11px sizing W:fixed H:fixed, constraints center/top
      - ELLIPSE "Ellipse 1", 15x15px, constraints left/top, fill dark
      - ELLIPSE "Ellipse 2", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 3", 15x15px, constraints left/top, fill #D9D9D9
  - TEXT "skip", 26x18px, constraints left/top, fill #000000, text [Poppins SemiBold, 12px]

Screen: design / onboarding
- FRAME "onboarding", 375x812px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Pexels Photo by Ketut Subiyanto", 478x715px, constraints center/top, fill image(hash: 59c03e08eda45c7e07806fc640cb342e978a0250)
  - GROUP "Group 2", 327x374px, constraints left/top, radius 0/0/0/0px
    - FRAME "Frame 1", 327x329px, constraints left/top, radius 15px, fill primary
      - TEXT "Thoughtful and Focused", 226x56px, constraints center/top, fill #000000, text [H2], [heading]
      - INSTANCE "button", 292x50px, constraints center/top, radius 10px, fill dark
        - TEXT "Continue", 74x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
      - TEXT "Protected by reCAPTC", 309x76px, constraints center/scale, fill #000000, text [small text]
    - FRAME "Frame 2", 67x15px, horizontal pad 0 0 0 0px gap 11px sizing W:fixed H:fixed, constraints center/top
      - ELLIPSE "Ellipse 1", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 2", 15x15px, constraints left/top, fill dark
      - ELLIPSE "Ellipse 3", 15x15px, constraints left/top, fill #D9D9D9
  - TEXT "skip", 26x18px, constraints left/top, fill #000000, text [Poppins SemiBold, 12px]

Screen: design / onboarding
- FRAME "onboarding", 375x812px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Pexels Photo by Zen Chung", 450x584px, constraints center/top, fill image(hash: f56939069dfe7e0d0dfe1fef2dbfd72250d8bc5f)
  - GROUP "Group 3", 327x374px, constraints left/top, radius 0/0/0/0px
    - FRAME "Frame 1", 327x329px, constraints left/top, radius 15px, fill primary
      - TEXT "Read Less, Understand More", 226x56px, constraints center/top, fill #000000, text [H2], [heading]
      - INSTANCE "button", 292x50px, constraints center/top, radius 10px, fill dark
        - TEXT "Continue", 74x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
      - TEXT "Protected by reCAPTC", 309x76px, constraints center/scale, fill #000000, text [small text]
    - FRAME "Frame 2", 67x15px, horizontal pad 0 0 0 0px gap 11px sizing W:fixed H:fixed, constraints center/top
      - ELLIPSE "Ellipse 1", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 2", 15x15px, constraints left/top, fill #D9D9D9
      - ELLIPSE "Ellipse 3", 15x15px, constraints left/top, fill dark

Screen: design / sign up
- FRAME "sign up", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 19", 328x237px, constraints left/top, radius 0/0/0/0px
    - GROUP "Group 16", 327x59px, constraints left/top, radius 20px
      - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
      - TEXT "User Name", 55x14px, constraints left/top, fill #000000, text [small text]
    - GROUP "Group 17", 327x59px, constraints left/top, radius 20px
      - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
      - TEXT "Email", 29x14px, constraints left/top, fill #000000, text [small text]
    - GROUP "Group 18", 327x59px, constraints left/top, radius 20px
      - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
      - TEXT "Password", 47x14px, constraints left/top, fill #000000, text [small text]
    - LINE "Line 1", 0x26px, constraints left/top, stroke #00000080 1px
    - LINE "Line 2", 0x26px, constraints left/top, stroke #00000080 1px
    - LINE "Line 3", 0x26px, constraints left/top, stroke #00000080 1px
    - VECTOR "Vector", 16x6px, constraints scale/scale, stroke #0000004D 1px
    - VECTOR "Vector", 8x8px, constraints scale/scale, stroke #0000004D 1px
    - GROUP "Group 11", 20x16px, constraints left/top
      - VECTOR "Vector", 20x16px, constraints scale/scale, stroke #0000004D 1px
      - VECTOR "Vector", 20x7px, constraints scale/scale, stroke #0000004D 1px
    - GROUP "Group 13", 18x19.75px, constraints left/top
      - VECTOR "Vector", 18x11px, constraints scale/scale, stroke #0000004D 1px
      - VECTOR "Vector", 10x9px, constraints scale/scale, stroke #0000004D 1px
  - GROUP "Group 9", 206x78px, constraints center/top
    - FRAME "Frame 9", 185x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_google logo", 16x16px, constraints left/top, fill #FFFFFF [decorative, ~4 shapes]
      - TEXT "label", 159x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
    - FRAME "Frame 10", 206x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_fb logo", 16x16px, constraints left/top, fill #FFFFFF
        - ELLIPSE "Oval", 16x16px, constraints scale/scale, fill #1977F3
        - VECTOR "Path", 6.84x12.88px, constraints scale/scale, fill Neutral/White
      - TEXT "label", 180x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
  - INSTANCE "button", 326x50px, constraints left/top, radius 10px, fill dark
    - TEXT "Continue", 62x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
  - TEXT "Sign Up", 110x37px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 16", 229x18px, constraints left/top, radius 0/0/0/0px
    - TEXT "Already have an account?", 166x18px, constraints left/top, fill #000000, text [Paragraph]
    - TEXT "Sign In!", 53x18px, constraints left/top, fill dark, text [Paragraph]

Screen: design / sign in
- FRAME "sign in", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 20", 327x59px, constraints left/top, radius 20px
    - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
    - TEXT "User Name", 55x14px, constraints left/top, fill #000000, text [small text]
  - GROUP "Group 21", 327x59px, constraints left/top, radius 20px
    - VECTOR "Rectangle 2", 327x50px, constraints left/top, radius 20px, stroke #000000 1px
    - TEXT "Password", 47x14px, constraints left/top, fill #000000, text [small text]
  - TEXT "Sign In", 99x37px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 20", 199x78px, constraints center/top
    - FRAME "Frame 9", 179x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_google logo", 16x16px, constraints left/top, fill #FFFFFF [decorative, ~4 shapes]
      - TEXT "label", 153x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
    - FRAME "Frame 10", 199x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "ic_fb logo", 16x16px, constraints left/top, fill #FFFFFF
        - ELLIPSE "Oval", 16x16px, constraints scale/scale, fill #1977F3
        - VECTOR "Path", 6.84x12.88px, constraints scale/scale, fill Neutral/White
      - TEXT "label", 173x24px, constraints left/top, fill Fill/Dark/Main Dark, text [Body]
  - INSTANCE "button", 326x50px, constraints left/top, radius 10px, fill dark
    - TEXT "Continue", 54x24px, constraints center/top, fill #FFFFFF, text [Poppins Medium, 16px]
  - GROUP "Group 21", 217x18px, constraints left/top, radius 0/0/0/0px
    - TEXT "Don’t have an account?", 152x18px, constraints left/top, fill #000000, text [Paragraph]
    - TEXT "Sign up!", 55x18px, constraints left/top, fill dark, text [Paragraph]

Screen: design / home
- FRAME "home", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 22", 196x40px, constraints left/top, radius 0/0/0/0px
    - TEXT "NG News Edit", 196x37px, constraints left/top, fill #000000, text [H1], [heading]
    - LINE "Line 4", 42x0px, constraints left/top, stroke #000000 3px
  - GROUP "date", 328x40px, constraints left/top, radius 0/0/0/0px
    - LINE "Line 5", 327x0px, constraints left/top, stroke #0000004D 1px
    - LINE "Line 6", 327x0px, constraints left/top, stroke #0000004D 1px
    - TEXT "Wednesday, 30 March", 152x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
    - TEXT "Editions", 54x18px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 16px]
    - LINE "Line 7", 52x0px, constraints left/top, stroke #00000080 1px
  - TEXT "8 Stories", 60x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
  - INSTANCE "Frame 11", 375x62px, vertical pad 4 24 4 24px gap 9px align min/center sizing W:fixed H:fixed, constraints left/top, fill primary, stroke #000000 1px
    - FRAME "Frame 12", 327x40px, horizontal pad 0 0 0 0px gap 114px sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 24", 30x40px, constraints left/top
        - FRAME "text-file-line-icon 1", 20x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 20x24px, constraints scale/scale
            - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
        - TEXT "Home", 30x14px, constraints left/top, fill #000000, text [small text]
      - GROUP "Group 25", 30x40px, constraints left/top
        - TEXT "Saved", 30x14px, constraints left/top, fill #000000, text [small text]
        - GROUP "Group", 20x24px, constraints scale/scale
          - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
      - GROUP "Group 26", 39x40px, constraints left/top
        - TEXT "Settings", 39x14px, constraints left/top, fill #000000, text [small text]
        - FRAME "setting-line-icon 1", 23x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 23x24px, constraints scale/scale
            - VECTOR "Vector", 23x24px, constraints scale/scale, fill #000000
    - RECTANGLE "Home Indicator", 134x5px, constraints left/top, radius 100px, fill Base/Black, stroke #979797 0px
  - FRAME "news carousel", 350x469px, horizontal pad 0 0 0 0px gap 16px sizing W:fixed H:fixed, constraints left/top
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: ebcecec08af43b0d2c5783354d7af0ae92980f0f)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "Mohbad: Naira Marley relseases last coversation with late si", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "01", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: e683d0396c3de7479b4928c8240b261f4fe0fb9a)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "02", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: 44a4c7d622ccb8e8a16e1488f060007cdc9885f9)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "Oshodi-Apapa: Lagos truckers, stakeholders meet over gridloc", 251x69px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "03", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: 482197f1bc51954dc29e778de0bf9bfdfc0656c8)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "Sports: Manchester United winger, Antony returns to training", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "04", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: e683d0396c3de7479b4928c8240b261f4fe0fb9a)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "05", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: 9087fcc455e74566e8b33789c5bb2ba9064bbc28)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "06", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]

Screen: design / home dates
- FRAME "home dates", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 22", 196x40px, constraints left/top, radius 0/0/0/0px
    - TEXT "NG News Edit", 196x37px, constraints left/top, fill #000000, text [H1], [heading]
    - LINE "Line 4", 42x0px, constraints left/top, stroke #000000 3px
  - GROUP "date", 328x40px, constraints left/top, radius 0/0/0/0px
    - LINE "Line 5", 327x0px, constraints left/top, stroke #0000004D 1px
    - LINE "Line 6", 327x0px, constraints left/top, stroke #0000004D 1px
    - TEXT "Tuesday, 29 March", 130x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
    - TEXT "Editions", 54x18px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 16px]
    - LINE "Line 7", 52x0px, constraints left/top, stroke #00000080 1px
  - TEXT "8 Stories", 60x18px, constraints left/top, fill #000000, text [Times New Roman BoldMT, 16px]
  - INSTANCE "Frame 11", 375x62px, vertical pad 4 24 4 24px gap 9px align min/center sizing W:fixed H:fixed, constraints left/top, fill primary, stroke #000000 1px
    - FRAME "Frame 12", 327x40px, horizontal pad 0 0 0 0px gap 114px sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 24", 30x40px, constraints left/top
        - FRAME "text-file-line-icon 1", 20x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 20x24px, constraints scale/scale
            - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
        - TEXT "Home", 30x14px, constraints left/top, fill #000000, text [small text]
      - GROUP "Group 25", 30x40px, constraints left/top
        - TEXT "Saved", 30x14px, constraints left/top, fill #000000, text [small text]
        - GROUP "Group", 20x24px, constraints scale/scale
          - VECTOR "Vector", 20x24px, constraints scale/scale, fill #000000
      - GROUP "Group 26", 39x40px, constraints left/top
        - TEXT "Settings", 39x14px, constraints left/top, fill #000000, text [small text]
        - FRAME "setting-line-icon 1", 23x24px, constraints left/top, fill #FFFFFF
          - GROUP "Group", 23x24px, constraints scale/scale
            - VECTOR "Vector", 23x24px, constraints scale/scale, fill #000000
    - RECTANGLE "Home Indicator", 134x5px, constraints left/top, radius 100px, fill Base/Black, stroke #979797 0px
  - FRAME "news carousel", 350x469px, horizontal pad 0 0 0 0px gap 16px sizing W:fixed H:fixed, constraints left/top
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: 32dc6513ce4d4742ba480f25e2942d4128de4adb)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "War with Nigeria? Ghana already planning for the next phase ", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "01", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: ac2a2a8357b7714b4df0898cd710973d470b9ce5)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "France votes: Macron’s frontrunner status conceals deep rift", 251x69px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "02", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: ad4b960e3ae7416e4f721aa35e4a48638340fa60)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "Deep mind accused of mishandling sexual misconduct allegatio", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "03", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: 482197f1bc51954dc29e778de0bf9bfdfc0656c8)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "Sports: Manchester United winger, Antony returns to training", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "04", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: e683d0396c3de7479b4928c8240b261f4fe0fb9a)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "05", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
    - FRAME "news frame", 327x469px, constraints left/top, fill primary, stroke secondary 1px
      - RECTANGLE "Rectangle 5", 302x214px, constraints center/top, fill secondary, stroke primary 1px
      - RECTANGLE "Rectangle 3", 301x200px, constraints left/top, fill image(hash: 9087fcc455e74566e8b33789c5bb2ba9064bbc28)
      - RECTANGLE "Rectangle 4", 271x109px, constraints center/top, fill white
      - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
      - FRAME "numbers", 36x29px, constraints left/top, fill dark
        - TEXT "06", 16x18px, constraints left/top, fill #FFFFFF, text [Times New Roman BoldMT, 16px]
      - LINE "Line 8", 271x0px, constraints left/top, stroke #0000001A 1px
      - GROUP "Group 27", 268x85px, constraints left/top, radius 0/0/0/0px
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]
        - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh quam pu", 268x42.5px, constraints left/top, fill #000000, text [small text]

Screen: design / article
- FRAME "article", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - FRAME "Frame 13", 328x202px, constraints left/top, fill image(hash: 9087fcc455e74566e8b33789c5bb2ba9064bbc28)
  - FRAME "Frame 15", 326x14px, horizontal pad 0 0 0 0px gap 265px sizing W:fixed H:fixed, constraints left/top [decorative, ~5 shapes]
  - GROUP "Group 30", 281x145px, constraints left/top
    - FRAME "copyright-icon 1", 11x11px, constraints left/top, fill #FFFFFF
      - GROUP "Group 29", 11x11px, constraints left/top
        - GROUP "Group", 11x11px, constraints scale/scale
          - VECTOR "Vector", 11x11px, constraints scale/scale, fill #000000
    - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh", 268x11px, constraints left/top, fill #000000, text [small text]
    - TEXT "By Williams Alayode in Lagos, Nigeria", 193x11px, constraints left/top, fill #000000, text [small text]
  - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
  - LINE "Line 4", 27x0px, constraints left/top, stroke #000000 3px
  - TEXT "Lorem ipsum dolor sit amet consectetur. In elementum in temp", 327x233px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 15px]
  - RECTANGLE "Home Indicator", 134x5px, constraints center/top, radius 100px, fill Base/Black, stroke #979797 0px

Screen: design / saved article
- FRAME "saved article", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - FRAME "Frame 13", 328x202px, constraints left/top, fill image(hash: 9087fcc455e74566e8b33789c5bb2ba9064bbc28)
  - FRAME "Frame 15", 326x14px, horizontal pad 0 0 0 0px gap 265px sizing W:fixed H:fixed, constraints left/top [decorative, ~5 shapes]
  - GROUP "Group 30", 281x145px, constraints left/top
    - FRAME "copyright-icon 1", 11x11px, constraints left/top, fill #FFFFFF
      - GROUP "Group 29", 11x11px, constraints left/top
        - GROUP "Group", 11x11px, constraints scale/scale
          - VECTOR "Vector", 11x11px, constraints scale/scale, fill #000000
    - TEXT "Lorem ipsum dolor sit amet consectetur. Sodales nibh", 268x11px, constraints left/top, fill #000000, text [small text]
    - TEXT "By Williams Alayode in Lagos, Nigeria", 193x11px, constraints left/top, fill #000000, text [small text]
  - TEXT "NLC strike: Union says no going back on nationwide planned s", 251x92px, constraints center/top, fill #000000, text [H3], [heading]
  - LINE "Line 4", 27x0px, constraints left/top, stroke #000000 3px
  - TEXT "Lorem ipsum dolor sit amet consectetur. In elementum in temp", 327x233px, constraints left/top, fill #000000, text [Times New Roman TimesNewRomanPSMT, 15px]
  - RECTANGLE "Home Indicator", 134x5px, constraints center/top, radius 100px, fill Base/Black, stroke #979797 0px
  - FRAME "Frame 16", 375x41px, constraints left/top, radius 5px, fill dark
    - GROUP "Group 31", 102x16px, constraints left/top
      - VECTOR "Vector", 11x14px, constraints left/top, fill white
      - LINE "Line 9", 0x16px, constraints left/top, stroke white 1px
      - TEXT "Saved for Later", 75x14px, constraints left/top, fill white, text [small text]

Screen: design / editions
- FRAME "editions", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Status bar", 375x44px, constraints left/top
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/top, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/top, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/top, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
    - FRAME "Time Style", 54x21px, constraints left/top
      - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [SF Pro Text Semibold, 15px]
  - GROUP "Group 32", 115x42px, constraints left/top, radius 0/0/0/0px
    - TEXT "Editions", 72x23px, constraints left/top, fill #000000, text [H3], [heading]
    - TEXT "Read from past editions", 115x14px, constraints left/top, fill #000000, text [small text]
  - TEXT "TODAY", 41x14px, constraints left/top, fill #000000, text [small text]
  - TEXT "PREVIOUS", 59x14px, constraints left/top, fill #000000, text [small text]
  - FRAME "Frame 17", 327x76px, constraints left/top, fill dark
    - GROUP "Group 33", 74x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Wednesday", 74x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - TEXT "30th", 29x18px, constraints left/top, fill #FFFFFF, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke white 1px
  - FRAME "Frame 18", 327x76px, constraints left/top, fill #F7F6F0
    - GROUP "Group 33", 54x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Tuesday", 54x18px, constraints left/top, fill dark, text [Paragraph]
      - TEXT "29th", 29x18px, constraints left/top, fill dark, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 19", 327x76px, constraints left/top, fill #F7F6F0
    - GROUP "Group 33", 54x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Monday", 54x18px, constraints left/top, fill dark, text [Paragraph]
      - TEXT "28th", 29x18px, constraints left/top, fill dark, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 20", 327x76px, constraints left/top, fill #F7F6F0
    - GROUP "Group 33", 57x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Saturday", 57x18px, constraints left/top, fill dark, text [Paragraph]
      - TEXT "26th", 29x18px, constraints left/top, fill dark, text [Paragraph]
      - LINE "Line 10", 23x0px, constraints left/top, stroke #000000 1px
  - FRAME "Frame 21", 327x76px, constraints left/top, fill #F7F6F0
    - GROUP "Group 33", 42x43px, constraints left/top, radius 0/0/0/0px
      - TEXT "Friday", 42x18px, constraints left/top, fill dark, text [Paragraph]
      - TEXT "25th", 29x18px, constraints left/top, fill dark, text [Paragraph]

## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.


---

---
name: musician-booking-app-community
source_file: MUSICIAN BOOKING APP (Community)
source_page: All pages (5): Wireframe, Mock Up, High Fidelity Prototype, Design Styles, Component
generated_at: 2026-07-25T09:42:47.310037+00:00
---

# MUSICIAN BOOKING APP (Community) Design Guidelines

## Source
- Figma file: MUSICIAN BOOKING APP (Community)
- Figma page: All pages (5): Wireframe, Mock Up, High Fidelity Prototype, Design Styles, Component
- Extracted at: 2026-07-25T09:42:47.310037+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- SECONDARY: [#000000]
- PRIMARY: [#FF9201]
- SystemGreen / Light: [#34C759]
- Color Dark / Yellow: [#FFD60A]
- Color Light / Green: [#34C759]
- Label Dark / Tertiary: [#EBEBF54D]
- Label Dark / Primary: [#FFFFFF]
- Label Light / Primary: [#000000]
- System Bg Dark Base / Primary: [#000000]
- EXTRA: [#FFAB41]
- MUTED: [#535353]
- BODY: [#FFFBF4]

## Raw Colors (unstyled)
- #000000: 533 uses
- #D9D9D9: 159 uses
- #FFFFFF: 118 uses
- #00000000: 62 uses
- #847C7C: 29 uses
- #8D8484: 26 uses
- #AFAFAF: 22 uses
- #FFAB41: 16 uses
- #C6C5C5: 13 uses
- #D1D1D6: 12 uses
- #7A7979: 8 uses

## Typography Tokens
- H2 STYLE: Montserrat Bold (700), 20px / auto, tracking 0px
- H3 STYLE: Montserrat Bold (700), 15px / auto, tracking 0px
- H1 STYLE: Montserrat Bold (700), 30px / auto, tracking 0px

## Raw Typography (unstyled)
- Montserrat Bold, 16px: 140 uses
- Montserrat Regular, 16px: 91 uses
- Montserrat Bold, 24px: 25 uses
- Montserrat Regular, 13px: 12 uses
- Montserrat Regular, 15px: 8 uses
- Montserrat Bold, 20px: 7 uses
- Montserrat Regular, 14px: 6 uses
- Montserrat Regular, 20px: 6 uses
- Montserrat Bold, 13px: 3 uses
- Montserrat Bold, 36px: 3 uses
- Montserrat Medium, 24px: 3 uses

## Typography Hierarchy
- 36px - Montserrat Bold, 36px (raw)
- 30px - H1 STYLE (Montserrat Bold)
- 24px - Montserrat Bold, 24px (raw)
- 24px - Montserrat Medium, 24px (raw)
- 20px - H2 STYLE (Montserrat Bold)
- 20px - Montserrat Bold, 20px (raw)
- 20px - Montserrat Regular, 20px (raw)
- 16px - Montserrat Bold, 16px (raw)
- 16px - Montserrat Regular, 16px (raw)
- 15px - H3 STYLE (Montserrat Bold)
- 15px - Montserrat Regular, 15px (raw)
- 14px - Montserrat Regular, 14px (raw)
- 13px - Montserrat Bold, 13px (raw)
- 13px - Montserrat Regular, 13px (raw)

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
- Group 4
- iPhone XStatus Bars
- Android Status Bars
- NAV BAR

## Component Specs
- Group 4: size 360x65px | variants: Property 1: Default/mock up
- iPhone XStatus Bars: size 375x44px, fill #FFFFFF | variants: Property 1: Black/TransparentBlack/TransparentWhite/White
- Android Status Bars: size 375x32px, horizontal layout, padding 0 16 0 16px, gap 179.32px, align space_between/center, sizing W:fixed H:fixed, fill #000000 | variants: Property 1: Black/TransparentBlack/TransparentWhite/White
- NAV BAR: size 360x69px | variants: Property 1: mock up/wireframe

## Most-Used Styles
- SECONDARY: 131 uses
- H3 STYLE: 89 uses
- PRIMARY: 66 uses
- EXTRA: 60 uses
- BODY: 28 uses
- H2 STYLE: 16 uses
- Color Light / Green: 4 uses
- H1 STYLE: 1 use
- MUTED: 1 use

## Layout & Structure
Screen: Wireframe / 10. ORDERS
- FRAME "10. ORDERS", 360x1142px, constraints left/top, fill #FFFFFF
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~8 shapes]
  - ELLIPSE "Ellipse 5", 100x100px, constraints left/top, fill #D9D9D9
  - GROUP "BUTTON", 169x40px, constraints left/top, radius 10px
    - FRAME "Button", 169x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "VIEW CONTRACT", 149x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - LINE "Line 43", 320x0px, constraints left/top, stroke #000000 7px

Screen: Wireframe / 9. INBOX
- FRAME "9. INBOX", 360x1142px, constraints left/top, fill #FFFFFF
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~8 shapes]
  - TEXT "INBOX", 55x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 41", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 43", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 45", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 47", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 49", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 51", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 53", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 42", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 44", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 46", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 48", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 50", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 52", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 54", 170x93px, constraints left/top, fill #847C7C
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - ... +12 more children

Screen: Wireframe / 8. FAVORITE
- FRAME "8. FAVORITE", 360x1142px, constraints left/top, fill #FFFFFF
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~8 shapes]
  - RECTANGLE "Rectangle 25", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 29", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 33", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 26", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 30", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 34", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 27", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 31", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 35", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 28", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 32", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 36", 170x93px, constraints left/top, fill #847C7C
  - LINE "Line 30", 120x95px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 34", 120x95px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 38", 120x95px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 31", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 35", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 39", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 32", 120x93px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 36", 120x93px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 40", 120x93px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 33", 120x93px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 37", 120x93px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 41", 120x93px, constraints left/top, stroke #AFAFAF 1px
  - ... +8 more children

Screen: Wireframe / 7. CONTRACT PAGE
- FRAME "7. CONTRACT PAGE", 360x1142px, constraints left/top, fill #FFFFFF
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~8 shapes]
  - TEXT "CONTRACT", 94x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - ELLIPSE "Ellipse 4", 72x72px, constraints left/top, fill #D9D9D9
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mol", 320x544px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "EMAIL ADDRESS | PHONE NUMBER", 290x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 64x40px, constraints left/top, radius 10px
    - FRAME "Button", 64x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "CALL", 44x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]

Screen: Wireframe / 6. CHART BOX
- FRAME "6. CHART BOX", 360x1142px, constraints left/top, fill #FFFFFF
  - TEXT "WELCOME!", 83x17px, constraints left/top, fill #000000, text [Montserrat Bold, 14px]
  - RECTANGLE "Rectangle 33", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 34", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 35", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 36", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 37", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 38", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 39", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 40", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - RECTANGLE "Rectangle 41", 200x34px, constraints left/top, radius 10px, fill #D9D9D9
  - TEXT "Send", 43x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "INSERT TEXT HERE", 197x24px, constraints left/top, fill #000000, text [Montserrat Bold, 20px]
  - GROUP "BUTTON", 121x40px, constraints left/top, radius 10px
    - FRAME "Button", 121x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "BOOK NOW", 101x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~8 shapes]

Screen: Wireframe / 5. CONFIRMATION PAGE
- FRAME "5. CONFIRMATION PAGE", 360x1142px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Rectangle 34", 200x149px, constraints left/top, fill #D9D9D9
  - LINE "Line 34", 200x149px, constraints left/top, stroke #686868 1px
  - LINE "Line 35", 196x147px, constraints left/top, stroke #686868 1px
  - TEXT "YOUR BOOKING IS CONFIRMED", 174x48px, constraints left/top, fill #000000, text [H2 STYLE], [heading]
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~8 shapes]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Confirmation wil be sent directly to email", 289x17px, constraints left/top, fill #000000, text [Montserrat Regular, 14px]
  - GROUP "BUTTON", 169x40px, constraints left/top, radius 10px
    - FRAME "Button", 169x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "VIEW CONTRACT", 149x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]

Screen: Wireframe / 4. PAYMENT PAGE
- FRAME "4. PAYMENT PAGE", 360x1142px, constraints left/top, fill #FFFFFF
  - TEXT "PAYMENT PAGE", 133x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 26", 200x149px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 33", 200x149px, constraints left/top, fill #D2CECE
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "Rectangle 27", 305x28px, constraints left/top, fill #D9D9D9
  - TEXT "TOTAL COSTS", 114x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 28", 320x46px, constraints left/top, fill #000000
  - TEXT "CC #", 40x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 29", 152x40px, constraints left/top, fill #D9D9D9
  - TEXT "SECURITY CODE", 137x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 30", 152x40px, constraints left/top, fill #D9D9D9
  - TEXT "EXP. DATE", 88x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - FRAME "amazon-pay", 100x74px, constraints left/top, fill #00000000
    - RECTANGLE "MClogo-c823e495c5cf455c89ddfb0e17fc7978 1", 70.03x50px, constraints left/top, fill image(hash: 05be37d81497f92c9e9294cb3bc635fea2855b20)
  - LINE "Line 33", 229x0px, constraints left/top, stroke #000000 1px
  - TEXT "Agreed upon services /terms", 229x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "Rectangle 31", 29x28px, constraints left/top, fill #D9D9D9
  - TEXT "I agree to the above terms", 210x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "068BjcjwBw0snwHIq0KNo5m-15 1", 88.81x50px, constraints left/top, fill image(hash: e7938387452b5d2b905da9ba1c7df670251bb22b)
  - RECTANGLE "Rectangle 32", 273x62px, constraints left/top, fill #D9D9D9
  - TEXT "FINALIZE BOOKING", 204x24px, constraints left/top, fill #000000, text [Montserrat Bold, 20px]
  - TEXT "Confirmation wil be sent directly to email", 289x17px, constraints left/top, fill #000000, text [Montserrat Regular, 14px]
  - LINE "Line 36", 200x147px, constraints left/top, stroke #858585 1px
  - LINE "Line 37", 200x147px, constraints left/top, stroke #858585 1px
  - ... +1 more children

Screen: Wireframe / 3. SAERCH RESULT NAME
- FRAME "3. SAERCH RESULT NAME", 360x1142px, constraints left/top, fill #FFFFFF
  - TEXT "SEARCH NAME", 100x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - RECTANGLE "Rectangle 25", 161x170px, constraints left/top, fill #D9D9D9
  - LINE "Line 30", 161x170px, constraints left/top, stroke #9C9C9C 1px
  - LINE "Line 31", 161x161px, constraints left/top, stroke #9C9C9C 1px
  - TEXT "ABOUT", 49x16px, constraints left/top, fill #000000, text [Montserrat Bold, 13px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pur", 156x155px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - TEXT "DESCRIPTION OF SERVICES", 236x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "EXPERIENCE", 108x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "PRICING", 71x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "REVIEWS", 79x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "WHAT IS INCLUDED IN BOOKING/FAQ", 318x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lao", 268x82px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ult", 289x77px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet consectetur ad", 329x38px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 319x43px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - LINE "Line 32", 340x0px, constraints left/top, stroke #000000 1px
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tur", 289x79px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - GROUP "BUTTON", 136x40px, constraints left/top, radius 10px
    - FRAME "Button", 136x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "AVAILABILITY", 116x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - ... +3 more children

Screen: Wireframe / 2. SEARH RESULTS
- FRAME "2. SEARH RESULTS", 360x1142px, constraints left/top, fill #FFFFFF
  - TEXT "SEARCH RESULTS", 118x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - TEXT "SORT FILTER", 94x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - RECTANGLE "Rectangle 7", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 9", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 11", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 13", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 15", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 17", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 19", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 21", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 23", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 8", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 10", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 12", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 14", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 16", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 18", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 20", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 22", 170x93px, constraints left/top, fill #847C7C
  - RECTANGLE "Rectangle 24", 170x93px, constraints left/top, fill #847C7C
  - LINE "Line 12", 120x95px, constraints left/top, stroke #7A7979 1px
  - LINE "Line 14", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 16", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 18", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - LINE "Line 20", 120x95px, constraints left/top, stroke #AFAFAF 1px
  - ... +14 more children

Screen: Wireframe / 1. HOME-MOBILE
- FRAME "1. HOME-MOBILE", 360x1142px, constraints left/top, fill #FFFFFF
  - LINE "Line 4", 0x18px, constraints left/top, stroke #D9D9D9 1px
  - RECTANGLE "Rectangle 4", 360x246px, constraints left/top, fill #D9D9D9
  - LINE "Line 7", 350x246px, constraints left/top, stroke #9F9D9D 1px
  - LINE "Line 8", 350x246px, constraints left/top, stroke #9F9D9D 1px
  - RECTANGLE "Rectangle 5", 339x55px, constraints left/top, fill #D9D9D9
  - TEXT "Filter", 52x24px, constraints left/top, fill #000000, text [Montserrat Regular, 20px]
  - TEXT "Search", 69x24px, constraints left/top, fill #000000, text [Montserrat Regular, 20px]
  - TEXT "ABOUT", 136x44px, constraints left/top, fill #000000, text [Montserrat Bold, 36px], [heading]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem", 326x107px, constraints left/top, fill #000000, text [Montserrat Regular, 15px]
  - LINE "Line 11", 267x0px, constraints left/top, stroke #C1BDBD 5px
  - TEXT "FAQ", 80x44px, constraints left/top, fill #000000, text [Montserrat Bold, 36px], [heading]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ", 303x143px, constraints left/top, fill #000000, text [Montserrat Regular, 15px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel", 298x109px, constraints left/top, fill #000000, text [Montserrat Regular, 15px]
  - TEXT "BOOK FOR A LOCAL MUSICIAN NOW!", 313x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - LINE "Line 38", 54x0px, constraints left/top, stroke #000000 1px
  - GROUP "NAV BAR", 360x69px, constraints left/top [decorative, ~7 shapes]
  - FRAME "search", 20x20px, constraints left/top, fill #00000000
    - VECTOR "Vector", 20x20px, constraints scale/scale, fill #000000

Screen: Wireframe / Frame 1
- FRAME "Frame 1", 360x373px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Image", 360x373px, constraints left/top, fill image(hash: 6f83923ff14025cf0830e5f82084da5dd425941e)

Screen: Wireframe / SPLASH PAGE
- FRAME "SPLASH PAGE", 360x1142px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Rectangle 58", 360x1142px, constraints left/top, fill #D9D9D9
  - TEXT "BOOK LOCAL MUSICIAN FOR YOUR EVENT.", 310x58px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "Lorem ipsum dolor sit amet", 320x78px, constraints left/top, fill #000000, text [Montserrat Regular, 24px], [heading]
  - GROUP "BUTTON", 164x49px, constraints left/top, radius 10px
    - FRAME "Button", 164x49px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "Get Started", 144x29px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 24px], [heading]
  - GROUP "Group 1", 131x15px, constraints left/top
    - ELLIPSE "Ellipse 13", 15x15px, constraints left/top, fill #000000
    - ELLIPSE "Ellipse 14", 15x15px, constraints left/top, fill #000000
    - ELLIPSE "Ellipse 15", 15x15px, constraints left/top, fill #000000

Screen: Wireframe / LOGIN
- FRAME "LOGIN", 360x1142px, constraints left/top, fill #FFFFFF
  - TEXT "Welcome!", 190x44px, constraints left/top, fill #000000, text [Montserrat Bold, 36px], [heading]
  - RECTANGLE "Rectangle 56", 128x45px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 57", 128x45px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "Sign Up", 66x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Login", 48x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Username", 86x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Password", 82x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - LINE "Line 44", 318x0px, constraints left/top, stroke #000000 2px
  - LINE "Line 45", 318x0px, constraints left/top, stroke #000000 2px
  - GROUP "BUTTON", 108x49px, constraints left/top, radius 10px
    - FRAME "Button", 108x49px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "LOG IN", 88x29px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 24px], [heading]
  - TEXT "Forgot Password?", 220x29px, constraints left/top, fill #000000, text [Montserrat Medium, 24px], [heading]

Screen: Wireframe / PROFILE
- FRAME "PROFILE", 360x1142px, constraints left/top, fill #F5F5F5
  - INSTANCE "NAV BAR", 360x69px, constraints left/top
    - RECTANGLE "Rectangle 1", 360x69px, constraints scale/scale, fill #D9D9D9
    - RECTANGLE "Rectangle 3", 136x26px, constraints scale/scale, fill #000000
    - VECTOR "Vector", 25x20px, constraints scale/scale, stroke #000000 2px
    - RECTANGLE "Rectangle 6", 25x26px, constraints scale/scale, fill #C6C5C5
    - LINE "Line 9", 25x26px, constraints scale/scale, stroke #8D8484 1px
    - FRAME "bars", 25x25px, constraints scale/scale, fill #00000000
      - VECTOR "Vector", 21.88x19.14px, constraints scale/scale, fill #000000
    - LINE "Line 10", 25x25px, constraints scale/scale, stroke #8D8484 1px
  - VECTOR "Vector", 15x15px, constraints scale/scale, fill #000000
  - ELLIPSE "Ellipse 16", 136x136px, constraints left/top, fill #D9D9D9
  - TEXT "Change Your Picture", 163x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 59", 264x66px, constraints left/top, radius 25px, fill #535353
  - TEXT "First Name", 86x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Last Name", 84x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Username", 81x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 60", 264x66px, constraints left/top, radius 25px, fill #FFFFFF
  - RECTANGLE "Rectangle 61", 264x66px, constraints left/top, radius 25px, fill #FFFFFF
  - GROUP "BUTTON", 80x49px, constraints left/top, radius 10px
    - FRAME "Button", 80x49px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "Save", 60x29px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 24px], [heading]

Screen: Wireframe / Filter-page
- FRAME "Filter-page", 526x619px, constraints left/top, fill #FFFFFF
  - TEXT "NUMBER OF ARTISTS", 167x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "PRICE PER HOUR", 141x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "TYPE OF MUSIC", 123x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 62", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 63", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 64", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 71", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 72", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 73", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 65", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 68", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 66", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 69", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 67", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 70", 25x25px, constraints left/top, fill #D9D9D9
  - TEXT "R&B", 34x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Rap", 31x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Rock", 40x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "1", 6x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "2-4", 25x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "5+", 18x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Modern", 61x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Oldies", 50x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Alternative", 88x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - VECTOR "Vector", 10.09x8.43px, constraints scale/scale, fill #000000
  - ... +5 more children

Screen: Wireframe / angle-right
- FRAME "angle-right", 25x25px, constraints left/top, fill #00000000

Screen: Mock Up / 12. ORDERS
- FRAME "12. ORDERS", 360x914px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 5", 100x100px, constraints left/top, fill #D9D9D9
  - GROUP "BUTTON", 169x40px, constraints left/top, radius 10px
    - FRAME "Button", 169x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "VIEW CONTRACT", 149x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - LINE "Line 43", 320x0px, constraints left/top, stroke EXTRA 7px
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / 11. INBOX
- FRAME "11. INBOX", 360x1142px, constraints left/top, fill BODY
  - TEXT "INBOX", 55x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 45", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 53", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 42", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 44", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 48", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 50", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 52", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - ELLIPSE "Ellipse 6", 100x100px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 7", 100x100px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 8", 100x100px, constraints left/top, fill #D9D9D9
  - ... +5 more children

Screen: Mock Up / 10. FAVORITE
- FRAME "10. FAVORITE", 360x773px, constraints left/top, fill BODY
  - RECTANGLE "Rectangle 25", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 29", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 33", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 26", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 30", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 34", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 28", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 32", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 36", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - TEXT "FAVORITES", 89x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Lorem ipsum dolor sit", 115x34px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x36px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / 9. CONTRACT PAGE
- FRAME "9. CONTRACT PAGE", 360x1142px, constraints left/top, fill BODY
  - TEXT "CONTRACT", 88x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - ELLIPSE "Ellipse 4", 72x72px, constraints left/top, fill #D9D9D9
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mol", 320x544px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "EMAIL ADDRESS | PHONE NUMBER", 290x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 64x40px, constraints left/top, radius 10px
    - FRAME "Button", 64x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "CALL", 44x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / 8. CHART BOX
- FRAME "8. CHART BOX", 360x1142px, constraints left/top, fill BODY
  - TEXT "WELCOME!", 89x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 33", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 34", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 35", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 36", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 37", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 38", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 39", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 40", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 41", 200x34px, constraints left/top, radius 10px, fill PRIMARY
  - TEXT "Send", 43x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "INSERT TEXT HERE", 197x24px, constraints left/top, fill #000000, text [Montserrat Bold, 20px]
  - GROUP "BUTTON", 121x40px, constraints left/top, radius 10px
    - FRAME "Button", 121x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "BOOK NOW", 101x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / 7. CONFIRMATION PAGE
- FRAME "7. CONFIRMATION PAGE", 360x825px, constraints left/top, fill BODY
  - RECTANGLE "Rectangle 34", 200x149px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "YOUR BOOKING IS CONFIRMED", 131x36px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Confirmation wil be sent directly to email", 289x17px, constraints left/top, fill #000000, text [Montserrat Regular, 14px]
  - GROUP "BUTTON", 160x38px, constraints left/top, radius 10px
    - FRAME "Button", 160x38px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "VIEW CONTRACT", 140x18px, constraints left/top, fill SECONDARY, text [H3 STYLE], [heading]
  - GROUP "BUTTON", 97x38px, constraints left/top, radius 10px
    - FRAME "Button", 97x38px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 77x18px, constraints left/top, fill SECONDARY, text [H3 STYLE], [heading]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / 6. PAYMENT PAGE
- FRAME "6. PAYMENT PAGE", 360x1142px, constraints left/top, fill BODY
  - TEXT "PAYMENT PAGE", 125x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 26", 200x149px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 33", 200x149px, constraints left/top, radius 20px, fill #D2CECE
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "Rectangle 27", 305x28px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "TOTAL COSTS", 107x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 28", 320x46px, constraints left/top, radius 20px, fill #000000
  - TEXT "CC #", 40x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 29", 152x40px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "SECURITY CODE", 128x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 30", 152x40px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "EXP. DATE", 82x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - FRAME "amazon-pay", 100x74px, constraints left/top, fill #00000000
    - RECTANGLE "MClogo-c823e495c5cf455c89ddfb0e17fc7978 1", 70.03x50px, constraints left/top, fill image(hash: 05be37d81497f92c9e9294cb3bc635fea2855b20)
  - LINE "Line 33", 229x0px, constraints left/top, stroke EXTRA 1px
  - TEXT "Agreed upon services /terms", 229x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "Rectangle 31", 29x28px, constraints left/top, fill #D9D9D9
  - TEXT "I agree to the above terms", 210x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "068BjcjwBw0snwHIq0KNo5m-15 1", 88.81x50px, constraints left/top, fill image(hash: e7938387452b5d2b905da9ba1c7df670251bb22b)
  - RECTANGLE "Rectangle 32", 273x62px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "FINALIZE BOOKING", 164x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Confirmation wil be sent directly to email", 289x17px, constraints left/top, fill #000000, text [Montserrat Regular, 14px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / 5. SAERCH RESULT NAME
- FRAME "5. SAERCH RESULT NAME", 360x1142px, constraints left/top, fill BODY
  - TEXT "SEARCH NAME", 100x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - RECTANGLE "Rectangle 25", 161x170px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "ABOUT", 49x16px, constraints left/top, fill #000000, text [Montserrat Bold, 13px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pur", 156x155px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - TEXT "DESCRIPTION OF SERVICES", 236x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "EXPERIENCE", 108x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "PRICING", 71x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "REVIEWS", 79x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "WHAT IS INCLUDED IN BOOKING/FAQ", 318x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lao", 268x82px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ult", 289x77px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet consectetur ad", 329x38px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 319x43px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - LINE "Line 32", 340x0px, constraints left/top, stroke EXTRA 1px
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tur", 289x79px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - GROUP "BUTTON", 136x40px, constraints left/top, radius 10px
    - FRAME "Button", 136x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "AVAILABILITY", 116x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 121x40px, constraints left/top, radius 10px
    - FRAME "Button", 121x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "BOOK NOW", 101x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - ... +1 more children

Screen: Mock Up / 4. SEARH RESULTS
- FRAME "4. SEARH RESULTS", 360x1142px, constraints left/top, fill BODY
  - TEXT "SEARCH RESULTS", 118x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - TEXT "SORT FILTER", 94x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - RECTANGLE "Rectangle 7", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 9", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 11", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 13", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 15", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 17", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 19", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 21", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 23", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 10", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 12", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 14", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 24", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 25", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 26", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 27", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - RECTANGLE "Rectangle 28", 170x93px, constraints left/top, radius 20px, fill #FFAB41
  - TEXT "Artiste", 57x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Artiste", 57x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Artiste", 57x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Artiste", 57x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Artiste", 57x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Artiste", 57x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - ... +16 more children

Screen: Mock Up / 3. HOME-MOBILE
- FRAME "3. HOME-MOBILE", 360x1118px, constraints left/top, fill BODY
  - LINE "Line 4", 0x18px, constraints left/top, stroke #D9D9D9 1px
  - RECTANGLE "Rectangle 4", 360x274px, constraints left/top, radius 25px, fill #D9D9D9
  - RECTANGLE "Rectangle 5", 339x55px, constraints left/top, radius 20px, fill EXTRA
  - TEXT "Filter", 52x24px, constraints left/top, fill #000000, text [Montserrat Regular, 20px]
  - TEXT "Search", 69x24px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 20px]
  - TEXT "ABOUT", 76x24px, constraints left/top, fill #000000, text [H2 STYLE], [heading]
  - TEXT "Start your together forever in Lagos’s Gold County! Our sutt", 326x135px, constraints left/top, fill #000000, text [Montserrat Regular, 15px]
  - TEXT "FAQ", 45x24px, constraints left/top, fill #000000, text [H2 STYLE], [heading]
  - TEXT "Accomodations Drinks Booking Rooms Gathering Weddings Privat", 303x323px, constraints left/top, fill #000000, text [Montserrat Regular, 15px]
  - FRAME "search", 20x20px, constraints left/top, fill #00000000
    - VECTOR "Vector", 20x20px, constraints scale/scale, fill #000000
  - GROUP "BUTTON", 347x44px, constraints left/top, radius 20px
    - FRAME "Button", 347x44px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 20px, fill PRIMARY
      - TEXT "Book For a Local Musician Now", 327x24px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 20px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)

Screen: Mock Up / MENU
- FRAME "MENU", 277x834px, constraints left/top, fill BODY
  - TEXT "SEARCH", 105x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "HOME", 79x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "FAVORITE", 127x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "INBOX", 83x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "ORDERS", 107x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "PROFILE", 110x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]

Screen: Mock Up / 2. LOGIN
- FRAME "2. LOGIN", 360x896px, constraints left/top, fill BODY
  - TEXT "Hi, Williams", 125x24px, constraints left/top, fill #000000, text [H2 STYLE], [heading]
  - RECTANGLE "Rectangle 56", 128x45px, constraints left/top, radius 20px, fill PRIMARY
  - RECTANGLE "Rectangle 57", 128x45px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "Sign Up", 66x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Login", 48x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Username", 86x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Password", 82x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - LINE "Line 44", 318x0px, constraints left/top, stroke EXTRA 2px
  - LINE "Line 45", 318x0px, constraints left/top, stroke EXTRA 2px
  - GROUP "BUTTON", 93x44px, constraints left/top, radius 20px
    - FRAME "Button", 93x44px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 20px, fill PRIMARY
      - TEXT "LOG IN", 73x24px, constraints left/top, fill SECONDARY, text [H2 STYLE], [heading]
  - TEXT "Forgot Password?", 220x29px, constraints left/top, fill #000000, text [Montserrat Medium, 24px], [heading]
  - LINE "Line 46", 85x0px, constraints left/top, stroke EXTRA 5px

Screen: Mock Up / 13. PROFILE
- FRAME "13. PROFILE", 360x977px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 16", 136x136px, constraints left/top, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
  - TEXT "Change Your Picture", 163x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 59", 264x66px, constraints left/top, radius 25px, fill #535353, effect [drop_shadow 4px offset 0 4 #00000040]
  - TEXT "First Name", 86x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Last Name", 84x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Username", 81x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 60", 264x66px, constraints left/top, radius 25px, fill #FFFFFF, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 61", 264x66px, constraints left/top, radius 25px, fill #FFFFFF, effect [drop_shadow 4px offset 0 4 #00000040]
  - GROUP "BUTTON", 80x49px, constraints left/top, radius 10px
    - FRAME "Button", 80x49px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "Save", 60x29px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 24px], [heading]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: Mock Up / Filter-page
- FRAME "Filter-page", 360x436px, constraints left/top, fill BODY
  - TEXT "NUMBER OF ARTISTS", 167x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "PRICE PER HOUR", 141x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "TYPE OF MUSIC", 123x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 62", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 63", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 64", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 71", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 72", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 73", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 65", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 68", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 66", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 69", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 67", 25x25px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 70", 25x25px, constraints left/top, fill #D9D9D9
  - TEXT "R&B", 34x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Rap", 31x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Rock", 40x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "1", 6x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "2-4", 25x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "5+", 18x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Modern", 61x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Oldies", 50x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Alternative", 88x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - VECTOR "Vector", 6.9x5.94px, constraints scale/scale, fill #000000
  - ... +5 more children

Screen: Mock Up / 1.SPLASH PAGE
- FRAME "1.SPLASH PAGE", 360x837px, constraints left/top, fill PRIMARY
  - TEXT "The Musician Booking App for GOLD COUNTY", 178x145px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - GROUP "Group 2", 150x100px, constraints left/top
    - ELLIPSE "Ellipse 2", 75x74.07px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 3", 75x74.07px, constraints scale/scale, fill SECONDARY
    - STAR "Star 2", 56.25x55.56px, constraints scale/scale, fill SECONDARY

Screen: Mock Up / ONBOARD
- FRAME "ONBOARD", 360x896px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Rectangle 74", 360x896px, constraints left/top, fill #D9D9D9
  - TEXT "BOOK LOCAL MUSICIAN FOR YOUR EVENT.", 310x58px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - GROUP "BUTTON", 140x44px, constraints left/top, radius 10px
    - FRAME "Button", 140x44px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill EXTRA
      - TEXT "Get Started", 120x24px, constraints left/top, fill SECONDARY, text [H2 STYLE], [heading]
  - GROUP "Group 1", 131x15px, constraints left/top
    - ELLIPSE "Ellipse 13", 15x15px, constraints left/top, fill EXTRA
    - ELLIPSE "Ellipse 14", 15x15px, constraints left/top, fill EXTRA
    - ELLIPSE "Ellipse 15", 15x15px, constraints left/top, fill EXTRA

Screen: Mock Up / Frame 1
- FRAME "Frame 1", 360x354px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Image", 392x354px, constraints left/top, fill image(hash: e6482249cd88115ccbedc48b2953819bb825952f)

Screen: Mock Up / Frame 2
- FRAME "Frame 2", 1127x1015px, constraints left/top, fill EXTRA
  - GROUP "Galaxy Note 20 Ultra", 980.75x977px, constraints left/top [decorative, ~18 shapes]
  - TEXT "THE MUSICIAN BOOKING APP FOR A LOCAL EVENT CENTER", 385x236px, constraints left/top, fill #000000, text [Montserrat Bold, 48px], [heading]
  - TEXT "12+ Screens", 144x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "Android", 102x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - TEXT "Figma", 80x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - ELLIPSE "Ellipse 18", 96x96px, constraints left/top, fill SECONDARY
  - RECTANGLE "figma 1", 44.2x50px, constraints left/top, fill image(hash: 8ebdd5fda39d6f7dc5186a772dab05cb1f3d0576)
  - ELLIPSE "Ellipse 19", 96x96px, constraints left/top, fill #FFFFFF
  - RECTANGLE "android 1", 43.13x50px, constraints left/top, fill image(hash: 0051d005285151ae7958249a2dcc457d701f4de2)

Screen: High Fidelity Prototype / 12. ORDERS
- FRAME "12. ORDERS", 360x1142px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 5", 100x100px, constraints left/top, fill #D9D9D9
  - GROUP "BUTTON", 169x40px, constraints left/top, radius 10px
    - FRAME "Button", 169x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "VIEW CONTRACT", 149x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - LINE "Line 43", 320x0px, constraints left/top, stroke EXTRA 7px
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: High Fidelity Prototype / 11. INBOX
- FRAME "11. INBOX", 360x1142px, constraints left/top, fill BODY
  - TEXT "INBOX", 55x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 45", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 53", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 42", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 44", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 48", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 50", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 52", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - ELLIPSE "Ellipse 6", 100x100px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 7", 100x100px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 8", 100x100px, constraints left/top, fill #D9D9D9
  - ... +5 more children

Screen: High Fidelity Prototype / 10. FAVORITE
- FRAME "10. FAVORITE", 360x1142px, constraints left/top, fill BODY
  - RECTANGLE "Rectangle 25", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 29", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 33", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 26", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 30", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 34", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 28", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 32", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - RECTANGLE "Rectangle 36", 170x93px, constraints left/top, radius 20px, fill EXTRA
  - TEXT "FAVORITES", 89x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "Lorem ipsum dolor sit", 115x34px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x36px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit", 112x42px, constraints left/top, fill SECONDARY, text [Montserrat Regular, 16px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: High Fidelity Prototype / 9. CONTRACT PAGE
- FRAME "9. CONTRACT PAGE", 360x1142px, constraints left/top, fill BODY
  - TEXT "CONTRACT", 88x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - ELLIPSE "Ellipse 4", 72x72px, constraints left/top, fill #D9D9D9
  - TEXT "ARTIST NAME", 108x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mol", 320x544px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "EMAIL ADDRESS | PHONE NUMBER", 290x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 64x40px, constraints left/top, radius 10px
    - FRAME "Button", 64x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "CALL", 44x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: High Fidelity Prototype / 8. CHART BOX
- FRAME "8. CHART BOX", 360x1142px, constraints left/top, fill BODY
  - TEXT "WELCOME!", 89x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 33", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 34", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 35", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 36", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 37", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 38", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 39", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 40", 200x34px, constraints left/top, radius 10px, stroke EXTRA 1px, effect [drop_shadow 4px offset 0 4 #00000040]
  - RECTANGLE "Rectangle 41", 200x34px, constraints left/top, radius 10px, fill PRIMARY
  - TEXT "Send", 43x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "INSERT TEXT HERE", 197x24px, constraints left/top, fill #000000, text [Montserrat Bold, 20px]
  - GROUP "BUTTON", 121x40px, constraints left/top, radius 10px
    - FRAME "Button", 121x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "BOOK NOW", 101x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: High Fidelity Prototype / 7. CONFIRMATION PAGE
- FRAME "7. CONFIRMATION PAGE", 360x1142px, constraints left/top, fill BODY
  - RECTANGLE "Rectangle 34", 200x149px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "YOUR BOOKING IS CONFIRMED", 131x36px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Confirmation wil be sent directly to email", 289x17px, constraints left/top, fill #000000, text [Montserrat Regular, 14px]
  - GROUP "BUTTON", 160x38px, constraints left/top, radius 10px
    - FRAME "Button", 160x38px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "VIEW CONTRACT", 140x18px, constraints left/top, fill SECONDARY, text [H3 STYLE], [heading]
  - GROUP "BUTTON", 97x38px, constraints left/top, radius 10px
    - FRAME "Button", 97x38px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 77x18px, constraints left/top, fill SECONDARY, text [H3 STYLE], [heading]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: High Fidelity Prototype / 6. PAYMENT PAGE
- FRAME "6. PAYMENT PAGE", 360x1142px, constraints left/top, fill BODY
  - TEXT "PAYMENT PAGE", 125x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 26", 200x149px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 33", 200x149px, constraints left/top, radius 20px, fill #D2CECE
  - TEXT "ARTIST NAME", 115x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "OCTOBER 23, 2024", 151x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "4PM TO 10PM", 111x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "Rectangle 27", 305x28px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "TOTAL COSTS", 107x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 28", 320x46px, constraints left/top, radius 20px, fill #000000
  - TEXT "CC #", 40x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - RECTANGLE "Rectangle 29", 152x40px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "SECURITY CODE", 128x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - RECTANGLE "Rectangle 30", 152x40px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "EXP. DATE", 82x18px, constraints left/top, fill #000000, text [H3 STYLE], [heading]
  - FRAME "amazon-pay", 100x74px, constraints left/top, fill #00000000
    - RECTANGLE "MClogo-c823e495c5cf455c89ddfb0e17fc7978 1", 70.03x50px, constraints left/top, fill image(hash: 05be37d81497f92c9e9294cb3bc635fea2855b20)
  - LINE "Line 33", 229x0px, constraints left/top, stroke EXTRA 1px
  - TEXT "Agreed upon services /terms", 229x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "Rectangle 31", 29x28px, constraints left/top, fill #D9D9D9
  - TEXT "I agree to the above terms", 210x20px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - RECTANGLE "068BjcjwBw0snwHIq0KNo5m-15 1", 88.81x50px, constraints left/top, fill image(hash: e7938387452b5d2b905da9ba1c7df670251bb22b)
  - RECTANGLE "Rectangle 32", 273x62px, constraints left/top, radius 20px, fill PRIMARY
  - TEXT "FINALIZE BOOKING", 164x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Confirmation wil be sent directly to email", 289x17px, constraints left/top, fill #000000, text [Montserrat Regular, 14px]
  - INSTANCE "Group 4", 360x65px, constraints left/top
    - INSTANCE "NAV BAR", 360x65px, constraints scale/scale
      - RECTANGLE "Rectangle 1", 360x65px, constraints scale/scale, fill PRIMARY
      - FRAME "bars", 25x23.55px, constraints scale/scale, fill #00000000
        - VECTOR "Vector", 21.88x18.03px, constraints scale/scale, fill #000000
      - ELLIPSE "Ellipse 2", 20x18.84px, constraints scale/scale, fill SECONDARY
      - ELLIPSE "Ellipse 3", 20x18.84px, constraints scale/scale, fill SECONDARY
      - STAR "Star 2", 15x14.13px, constraints scale/scale, fill SECONDARY
    - ELLIPSE "Ellipse 17", 25x25px, constraints scale/scale, fill image(hash: acb6049be90899b823c0edda7a06da12e4ab1d98)
    - VECTOR "Vector", 15x14.13px, constraints scale/scale, fill #000000

Screen: High Fidelity Prototype / 5. SAERCH RESULT NAME
- FRAME "5. SAERCH RESULT NAME", 360x1142px, constraints left/top, fill BODY
  - TEXT "SEARCH NAME", 100x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - RECTANGLE "Rectangle 25", 161x170px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "ABOUT", 49x16px, constraints left/top, fill #000000, text [Montserrat Bold, 13px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pur", 156x155px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - TEXT "DESCRIPTION OF SERVICES", 236x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "EXPERIENCE", 108x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "PRICING", 71x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "REVIEWS", 79x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "WHAT IS INCLUDED IN BOOKING/FAQ", 318x20px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lao", 268x82px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ult", 289x77px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet consectetur ad", 329x38px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 319x43px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - LINE "Line 32", 340x0px, constraints left/top, stroke EXTRA 1px
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - FRAME "star", 25x25px, constraints left/top, fill #00000000
    - VECTOR "Vector", 23.22x22.22px, constraints scale/scale, fill #000000
  - TEXT "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tur", 289x79px, constraints left/top, fill #000000, text [Montserrat Regular, 16px]
  - GROUP "BUTTON", 136x40px, constraints left/top, radius 10px
    - FRAME "Button", 136x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "AVAILABILITY", 116x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #000000
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill #FFFFFF, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 102x40px, constraints left/top, radius 10px
    - FRAME "Button", 102x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "MESSAGE", 82x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - GROUP "BUTTON", 121x40px, constraints left/top, radius 10px
    - FRAME "Button", 121x40px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill PRIMARY
      - TEXT "BOOK NOW", 101x20px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 16px]
  - ... +1 more children

Screen: High Fidelity Prototype / 4. SEARH RESULTS
- FRAME "4. SEARH RESULTS", 360x1142px, constraints left/top, fill BODY
  - TEXT "SEARCH RESULTS", 118x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - TEXT "SORT FILTER", 94x16px, constraints left/top, fill #000000, text [Montserrat Regular, 13px]
  - RECTANGLE "Rectangle 7", 120x93px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 9", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 11", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 13", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 15", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 17", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 19", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 21", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 23", 120x93px, constraints left/top, radius 20px, fill #D9D9D9
  - RECTANGLE "Rectangle 10", 170x93px, constraints left/top, radius 20px, fill #FFAB41

## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.


---

---
name: ui-for-the-keke-ride-app-community
source_file: UI for The KEKE RIDE APP (Community)
source_page: All pages (6): Wireframe, UX Case Study, Mock Up, Prototype, Design Style, Components
generated_at: 2026-07-25T09:42:49.664300+00:00
---

# UI for The KEKE RIDE APP (Community) Design Guidelines

## Source
- Figma file: UI for The KEKE RIDE APP (Community)
- Figma page: All pages (6): Wireframe, UX Case Study, Mock Up, Prototype, Design Style, Components
- Extracted at: 2026-07-25T09:42:49.664300+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- SECONDARY: [#212121]
- WHITE: [#FFFFFF]
- LIGHT: [#FFEB3B]
- EXTRA: [#9E9E9E]
- TERTIARY: [#FBFBFB]
- PRIMARY: [#FBC02D]
- Secondary: [#19104E]
- SECONDARY: [#222831]
- BODY: [#F9F6EE]
- EXTRA: [#EEEEEE]
- PRIMARY: [#D2AD32]
- WHITE: none

## Raw Colors (unstyled)
- #000000: 888 uses
- #333333: 243 uses
- #D9D9D9: 100 uses
- #FFFFFF: 90 uses
- #00000080: 79 uses
- #FFEB3B80: 67 uses
- #00000033: 39 uses
- #9B9696: 12 uses
- #A9A9AA: 11 uses
- #242E42: 10 uses
- #AAA4A4: 10 uses
- #9B9B9A: 9 uses

## Typography Tokens
- SMALL TEXT: Montserrat Regular (400), 12px / auto, tracking 0px
- BODY: Montserrat Regular (400), 16px / auto, tracking 0px
- H3: Montserrat Bold (700), 20px / auto, tracking 0px
- H2: Montserrat Bold (700), 24px / auto, tracking 0px
- H1: Montserrat Bold (700), 48px / auto, tracking 0px

## Raw Typography (unstyled)
- Montserrat SemiBold, 16px: 111 uses
- Montserrat SemiBold, 20px: 77 uses
- Montserrat Black, 15px: 40 uses
- Montserrat Medium, 16px: 23 uses
- Montserrat Bold, 48px: 15 uses
- Montserrat SemiBold, 12px: 15 uses
- Montserrat Bold, 12px: 14 uses
- Montserrat Medium, 12px: 12 uses
- Montserrat Bold, 16px: 6 uses
- Montserrat Medium, 20px: 6 uses
- Montserrat Regular, 10px: 6 uses
- Inter Bold, 14px: 3 uses
- SF Pro Semibold, 12px: 3 uses
- SF Pro Semibold, 16px: 3 uses

## Typography Hierarchy
- 48px - H1 (Montserrat Bold)
- 48px - Montserrat Bold, 48px (raw)
- 24px - H2 (Montserrat Bold)
- 20px - H3 (Montserrat Bold)
- 20px - Montserrat Medium, 20px (raw)
- 20px - Montserrat SemiBold, 20px (raw)
- 16px - BODY (Montserrat Regular)
- 16px - Montserrat Bold, 16px (raw)
- 16px - Montserrat Medium, 16px (raw)
- 16px - Montserrat SemiBold, 16px (raw)
- 16px - SF Pro Semibold, 16px (raw)
- 15px - Montserrat Black, 15px (raw)
- 14px - Inter Bold, 14px (raw)
- 12px - Montserrat Bold, 12px (raw)
- 12px - Montserrat Medium, 12px (raw)
- 12px - Montserrat SemiBold, 12px (raw)
- 12px - SF Pro Semibold, 12px (raw)
- 12px - SMALL TEXT (Montserrat Regular)
- 10px - Montserrat Regular, 10px (raw)

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
- Frame 1171275635
- BUTTON
- Frame 334
- Group 2884

## Component Specs
- Frame 1171275635: size 127x28px, radius 69px, vertical layout, padding 0 0 0 0px, gap 10px, sizing W:fixed H:fixed, fill #9B9696, effect [drop_shadow 4px offset 0 4 #00000005], text [Montserrat Medium, 12px] | variants: Property 1: Default/mock up
- BUTTON: size 327x38px, radius 20px, horizontal layout, padding 0 100 0 100px, gap 10px, align center/center, sizing W:fixed H:fixed, fill #AAA4A4, text [Montserrat SemiBold, 20px] | variants: Property 1: Default/MOCK UP
- Frame 334: size 375x76px, fill #FFFFFF, text [SMALL TEXT, Montserrat SemiBold, 16px]
- Group 2884: size 329.63x20px, text [Montserrat Black, 15px]

## Most-Used Styles
- SMALL TEXT: 143 uses
- SECONDARY: 126 uses
- WHITE: 125 uses
- BODY: 69 uses
- TERTIARY: 65 uses
- H2: 58 uses
- PRIMARY: 37 uses
- H3: 28 uses
- H1: 24 uses
- LIGHT: 9 uses
- Secondary: 9 uses
- EXTRA: 4 uses

## Layout & Structure
Screen: Wireframe / Image
- VECTOR "Image", 1600x1200px, constraints left/top, fill image(hash: 176a430bbd3b4ee2b30aca7446ec0f58b92d8153)

Screen: Wireframe / SPLASH SCREEN
- FRAME "SPLASH SCREEN", 375x812px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Rectangle 6552", 533.77x426.7px, constraints left/top, fill #D9D9D9
  - RECTANGLE "Rectangle 6553", 619.7x503.49px, constraints left/top, fill #9B9B9A
  - RECTANGLE "Rectangle 6551", 533.77x426.7px, constraints left/top, fill #D9D9D9
  - TEXT "We’re here to make your short distance trip memorable.", 327x40px, constraints left/top, fill #000000, text [Montserrat Bold, 16px]
  - TEXT "At your service", 139x20px, constraints left/top, fill #00000080, text [Montserrat Bold, 16px]
  - TEXT "Welcome", 239x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 2884", 31x31px, constraints left/top
    - ELLIPSE "Ellipse 19", 31x31px, constraints left/top, fill #A9A9AA
    - VECTOR "Vector", 7x14px, constraints scale/scale, stroke #000000 2px
    - VECTOR "Vector", 14x0px, constraints scale/scale, stroke #000000 2px
  - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 173.11x155.87px, constraints left/top, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)

Screen: Wireframe / ONBOARDING 1
- FRAME "ONBOARDING 1", 375x812px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 321", 375x600px, constraints left/top, fill #D9D9D9
  - TEXT "Request Ride", 181x29px, constraints scale/scale, fill #000000, text [H2], [heading]
  - TEXT "The fastest app to book a keke ride online near by you.", 326x40px, constraints scale/scale, fill Secondary, text [Montserrat Medium, 16px]
  - GROUP "scroll", 72x6px, constraints left/top, radius 20px
    - RECTANGLE "Rectangle 6553", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
    - RECTANGLE "Rectangle 6554", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
    - RECTANGLE "Rectangle 6555", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "Next", 29x15px, constraints left/top, fill #000000, text [SMALL TEXT]

Screen: Wireframe / ONBOARDING 2
- FRAME "ONBOARDING 2", 375x812px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 322", 375x600px, constraints left/top, fill #D9D9D9
  - TEXT "Book Driver", 182x29px, constraints scale/scale, fill #000000, text [H2], [heading]
  - TEXT "Request a driver and book a driver to pick you from your des", 311x40px, constraints scale/scale, fill Secondary, text [Montserrat Medium, 16px]
  - GROUP "scroll", 72x6px, constraints left/top, radius 20px
    - RECTANGLE "Rectangle 6553", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
    - RECTANGLE "Rectangle 6554", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
    - RECTANGLE "Rectangle 6555", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "Next", 29x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - TEXT "Back", 30x15px, constraints left/top, fill #000000, text [SMALL TEXT]

Screen: Wireframe / ONBOARDING 3
- FRAME "ONBOARDING 3", 375x812px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 322", 375x600px, constraints left/top, fill #D9D9D9
  - TEXT "Track your driver", 218x29px, constraints scale/scale, fill #000000, text [H2], [heading]
  - TEXT "Track your driver from any location with a global mapping sy", 282x40px, constraints scale/scale, fill Secondary, text [Montserrat Medium, 16px]
  - GROUP "scroll", 72x6px, constraints left/top, radius 20px
    - RECTANGLE "Rectangle 6553", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
    - RECTANGLE "Rectangle 6554", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
    - RECTANGLE "Rectangle 6555", 22x6px, constraints left/top, radius 20px, fill #D9D9D9
  - TEXT "Continue", 56x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - TEXT "Back", 30x15px, constraints left/top, fill #000000, text [SMALL TEXT]

Screen: Wireframe / GPS LOCATION
- FRAME "GPS LOCATION", 375x812px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 322", 375x600px, constraints left/top, fill #D9D9D9
  - TEXT "Hi, nice to meet you!", 268x29px, constraints scale/scale, fill #242E42, text [H2], [heading]
  - FRAME "Frame 323", 235x44px, constraints left/top, radius 20px, fill #A9A9AA
    - VECTOR "Vector", 18.22x19px, constraints scale/scale, stroke #000000 2px
    - TEXT "Use current Location", 170x20px, constraints scale/scale, fill #000000, text [Montserrat Medium, 16px]
  - GROUP "Group 2885", 146x20px, constraints left/top, radius 0/0/0/0px
    - TEXT "Select it manually", 146x20px, constraints left/top, fill #000000, text [Montserrat Medium, 16px]
    - LINE "Line 11", 140x0px, constraints left/top, stroke #000000 1px

Screen: Wireframe / SIGN UP
- FRAME "SIGN UP", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - TEXT "Get a free account", 232x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Name", 62x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Username", 107x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Email", 59x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Password", 100x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Confirm Password", 189x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - LINE "Line 4", 327x0px, constraints left/top, stroke #00000080 1px
  - LINE "Line 5", 327x0px, constraints left/top, stroke #00000080 1px
  - LINE "Line 6", 327x0px, constraints left/top, stroke #00000080 1px
  - LINE "Line 7", 327x0px, constraints left/top, stroke #00000080 1px
  - LINE "Line 8", 327x0px, constraints left/top, stroke #00000080 1px
  - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
    - TEXT "Button", 72x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Sign Up with Google", 128x15px, constraints left/top, fill #000000, text [Montserrat SemiBold, 12px]
  - LINE "Line 9", 124x0px, constraints left/top, stroke #000000 1px
  - TEXT "Already have an account?", 160x15px, constraints left/top, fill #000000, text [Montserrat SemiBold, 12px]
  - TEXT "Sign In", 42x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - LINE "Line 10", 42x0px, constraints left/top, stroke #000000 1px

Screen: Wireframe / SIGN IN
- FRAME "SIGN IN", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - TEXT "Welcome!", 127x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Username", 107x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Password", 100x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "forgot password?", 108x15px, constraints left/top, fill #000000, text [Montserrat SemiBold, 12px]
  - LINE "Line 5", 327x0px, constraints left/top, stroke #00000080 1px
  - LINE "Line 6", 327x0px, constraints left/top, stroke #00000080 1px
  - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
    - TEXT "Button", 72x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Kindly enter your details and let’s ride", 222x40px, constraints left/top, fill #000000, text [Montserrat Medium, 16px]

Screen: Wireframe / HOME
- FRAME "HOME", 375x801px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 324", 375x285px, constraints left/top, radius 10/10/0/0px, fill #9B9B9A
    - FRAME "Frame 325", 1x62px, vertical pad 0 0 0 0px gap 1px sizing W:fixed H:fixed, constraints left/top [decorative, ~9 shapes]
    - VECTOR "Line", 298x3px, constraints scale/scale, fill #D8D8D8, stroke #242E42 1px
    - TEXT "My current location", 162x20px, constraints scale/scale, fill #242E42, text [Montserrat SemiBold, 16px]
    - TEXT "Pickup", 58x20px, constraints scale/scale, fill #C8C7CC, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2886", 18x26px, constraints scale/scale
      - VECTOR "Vector", 18x26px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 6x7.09px, constraints scale/scale, stroke #000000 2px
    - ELLIPSE "Ellipse 20", 22x22px, constraints scale/scale, fill #D9D9D9
    - TEXT "105 William St, Chic", 149x20px, constraints scale/scale, fill #242E42, text [Montserrat SemiBold, 16px]
    - TEXT "Drop-off", 70x20px, constraints scale/scale, fill #C8C7CC, text [Montserrat SemiBold, 16px]
    - ELLIPSE "Ellipse 21", 8x8px, constraints scale/scale, fill #333333
    - FRAME "Frame 326", 232x39px, constraints left/top, radius 10px, fill #FFFFFF
      - ELLIPSE "Ellipse 22", 30x30px, constraints left/top, fill #D9D9D9
      - GROUP "Group 2887", 14x14px, constraints left/top
        - VECTOR "Vector", 12.44x12.44px, constraints scale/scale, stroke #000000 2px
        - VECTOR "Vector", 3.38x3.38px, constraints scale/scale, stroke #000000 2px
      - TEXT "Heading to?", 100x20px, constraints left/top, fill #00000080, text [Montserrat SemiBold, 16px]
  - FRAME "Frame 331", 351x32px, horizontal pad 0 0 0 0px gap 32px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame 327", 169x32px, horizontal pad 6 10 6 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF
      - TEXT "7, Omotayo Street", 149x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - FRAME "Frame 328", 191x32px, horizontal pad 6 10 6 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF
      - TEXT "8, Shomuyiwa Street", 171x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - FRAME "Frame 329", 158x32px, horizontal pad 6 10 6 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF
      - TEXT "26, Davies Street", 138x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - FRAME "Frame 330", 177x32px, horizontal pad 6 10 6 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #FFFFFF
      - TEXT "University of Lagos", 157x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - FRAME "Frame 1171275661", 375x527px, constraints left/top, radius 0/0/10/10px, fill image(hash: f88c9cc77369eaa73c06367a1cf769a0f0da86c0)
    - INSTANCE "Group 2884", 329.63x20px, constraints left/top
      - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
        - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
        - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
        - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
      - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
      - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
      - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 11", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 12", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 13", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 14", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 15", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 16", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - GROUP "Group 2893", 18x8px, constraints left/top
      - VECTOR "Vector", 14x0px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 18x0px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 18x0px, constraints scale/scale, stroke #000000 2px

Screen: Wireframe / MENU
- FRAME "MENU", 248x800px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 1171275649", 69x40px, vertical pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
    - TEXT "Williams Alayode", 69x40px, constraints left/top, fill #000000, text [BODY]
  - FRAME "Frame 1171275653", 56x36px, horizontal pad 8 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 38px, fill #000000
    - TEXT "Edit", 24x20px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 12px]
  - INSTANCE "arrow_forward_ios", 16x16px, constraints left/top
    - VECTOR "Vector", 8.08x13.33px, constraints scale/scale, fill #000000
  - FRAME "Frame 1171275654", 48x32px, horizontal pad 8 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 38px, fill #3B65DB
    - INSTANCE "arrow_forward_ios", 16x16px, constraints left/top
      - VECTOR "Vector", 8.08x13.33px, constraints scale/scale, fill #000000
  - FRAME "Frame 1171275654", 48x32px, horizontal pad 8 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 38px, fill #3B65DB
    - INSTANCE "arrow_forward_ios", 16x16px, constraints left/top
      - VECTOR "Vector", 8.08x13.33px, constraints scale/scale, fill #000000
  - FRAME "Frame 1171275654", 48x32px, horizontal pad 8 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 38px, fill #3B65DB
    - INSTANCE "arrow_forward_ios", 16x16px, constraints left/top
      - VECTOR "Vector", 8.08x13.33px, constraints scale/scale, fill #000000
  - FRAME "Frame 1171275667", 114x228px, vertical pad 0 0 0 0px gap 31px sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2894", 79.5x22px, constraints left/top
      - INSTANCE "electric_car", 20x20px, constraints left/top
        - GROUP "Group", 15x18.33px, constraints scale/scale
          - VECTOR "Vector", 15x13.33px, constraints scale/scale, fill #000000
          - VECTOR "Vector", 8.33x4.17px, constraints scale/scale, fill #000000
      - TEXT "Rides", 46x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2895", 90x21px, constraints left/top
      - INSTANCE "local_offer", 20x20px, constraints left/top, fill #FFFFFF
        - VECTOR "Vector", 16.67x16.67px, constraints scale/scale, fill #000000
      - TEXT "Offers", 58x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2896", 114x21px, constraints left/top
      - INSTANCE "payments", 20x20px, constraints left/top
        - VECTOR "Vector", 18.33x13.33px, constraints scale/scale, fill #000000
      - TEXT "Payments", 83x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2899", 71x20px, constraints left/top
      - INSTANCE "help_center", 20x20px, constraints left/top
        - GROUP "Group", 15x15px, constraints scale/scale
          - VECTOR "Vector", 15x15px, constraints scale/scale, fill #000000
      - TEXT "Help", 39x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2898", 82x20px, constraints left/top
      - INSTANCE "text_snippet", 20x20px, constraints left/top, fill #FFFFFF
        - VECTOR "Vector", 15x15px, constraints scale/scale, fill #000000
      - TEXT "Policy", 50x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - FRAME "Frame 1171275654", 48x32px, horizontal pad 8 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 38px, fill #3B65DB
    - INSTANCE "arrow_forward_ios", 16x16px, constraints left/top
      - VECTOR "Vector", 8.08x13.33px, constraints scale/scale, fill #000000
  - FRAME "Frame 1171275660", 248x80px, vertical pad 24 8 24 8px gap 20px sizing W:fixed H:fixed, constraints left/top, fill #FFFFFF
    - FRAME "Frame 1171275654", 232x32px, horizontal pad 0 0 0 12px gap 12px align space_between/center sizing W:fill H:fixed, constraints left/top, radius 8px, fill #F9FAFF, stroke #3B65DB 1px
      - FRAME "Frame 1171275652", 81x20px, horizontal pad 0 0 0 0px gap 12px align min/center sizing W:fixed H:fixed, constraints left/top
        - INSTANCE "logout", 20x20px, constraints left/top
          - VECTOR "Vector", 16.67x15px, constraints scale/scale, fill #000000
        - FRAME "Frame 1171275649", 49x16px, vertical pad 0 0 0 0px gap 8px sizing W:fixed H:fixed, constraints left/top
          - TEXT "Logout", 49x16px, constraints left/top, fill #000000, text [Inter Bold, 14px]
      - FRAME "Frame 1171275654", 48x32px, horizontal pad 8 16 8 16px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 38px, fill #3B65DB
        - INSTANCE "arrow_forward_ios", 16x16px, constraints left/top
          - VECTOR "Vector", 8.08x13.33px, constraints scale/scale, fill #000000
  - FRAME "Frame 1171275649", 248x71px, horizontal pad 0 24 16 12px gap 12px align min/max sizing W:fixed H:fixed, constraints left/top, fill #000000, stroke #3B65DB 1px
    - FRAME "Frame 1171275635", 101x36px, horizontal pad 4 16 4 8px gap 97px align min/center sizing W:fixed H:fixed, constraints left/top, radius 69px, fill #FFFFFF, effect [drop_shadow 4px offset 0 4 #00000005]
      - FRAME "Frame 1171275568", 77x28px, horizontal pad 0 0 0 0px gap 111px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 1171275610", 77x28px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
          - FRAME "Frame 1171275605", 28x28px, horizontal pad 4 4 4 4px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 128px, fill #3B65DB
            - INSTANCE "close", 20x20px, constraints left/top, fill #FFFFFF
          - FRAME "Frame 1171275250", 45x19px, vertical pad 0 0 0 0px gap 4px sizing W:fixed H:fixed, constraints left/top
            - FRAME "Frame 1171275244", 45x19px, horizontal pad 0 0 0 0px gap 4px align min/center sizing W:fixed H:fixed, constraints left/top
  - ELLIPSE "Ellipse 25", 43x43px, constraints left/top, fill #D9D9D9

Screen: Wireframe / CHOOSE VEHICLE TYPE
- FRAME "CHOOSE VEHICLE TYPE", 375x797px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 332", 375x280px, constraints left/top, radius 10/10/0/0px, fill #C4C4C4
    - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
      - TEXT "Button", 150x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
    - INSTANCE "Frame 334", 375x76px, constraints left/top, fill #FFFFFF
      - TEXT "Special Keke", 105x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
      - TEXT "N500", 33x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - FRAME "Frame 333", 375x76px, constraints left/top, fill #FFFFFF
    - TEXT "Regular Keke", 111x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - TEXT "N200", 33x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - FRAME "Frame 1171275662", 375x527px, constraints left/top, radius 0/0/10/10px, fill image(hash: f88c9cc77369eaa73c06367a1cf769a0f0da86c0)
    - INSTANCE "Group 2884", 329.63x20px, constraints left/top
      - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
        - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
        - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
        - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
      - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
      - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
      - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 17", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 18", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 19", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 20", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 21", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)

Screen: Wireframe / PROMO CODE
- FRAME "PROMO CODE", 375x809px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 332", 375x327px, constraints left/top, radius 10/10/0/0px, fill #C4C4C4
    - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
      - TEXT "Button", 60x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
    - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
      - TEXT "Button", 45x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
    - INSTANCE "Frame 334", 375x76px, constraints left/top, radius 10px, fill #FFFFFF
    - TEXT "Input promo code", 187x24px, constraints left/top, fill #00000080, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 333", 375x57px, constraints left/top, fill #9B9B9A
    - TEXT "Promo code", 153x29px, constraints left/top, fill #000000, text [H2], [heading]
  - FRAME "Frame 1171275663", 375x535px, constraints left/top, radius 0/0/10/10px, fill image(hash: f88c9cc77369eaa73c06367a1cf769a0f0da86c0)
    - INSTANCE "Group 2884", 329.63x20px, constraints left/top
      - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
        - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
        - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
        - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
      - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
      - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
      - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 21", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 22", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 23", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 24", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 26", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 25", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)

Screen: Wireframe / CONFIRM ORDER
- FRAME "CONFIRM ORDER", 375x797px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 1171275664", 375x480px, constraints left/top, radius 0/0/10/10px, fill image(hash: 78559bbc7cb2fbfdb706e8aa095110d62c9aaf21)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 21", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 22", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 23", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 24", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - INSTANCE "Frame 1171275635", 127x28px, vertical pad 0 0 0 0px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 69px, fill #9B9696, effect [drop_shadow 4px offset 0 4 #00000005]
      - FRAME "Frame 1171275568", 127x28px, constraints left/top
        - FRAME "Frame 1171275610", 127x28px, constraints left/top
          - FRAME "Frame 1171275605", 28x28px, constraints left/top, radius 128px
            - INSTANCE "close", 20x20px, constraints left/top, fill #FFFFFF
          - FRAME "Frame 1171275250", 95x20px, constraints left/top
            - FRAME "Frame 1171275244", 95x20px, constraints left/top
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - FRAME "Frame 332", 375x332px, constraints left/top, radius 10/10/0/0px, fill #C4C4C4
    - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
      - TEXT "Button", 149x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 333", 375x171px, constraints left/top, radius 10/10/0/0px, fill #9B9B9A
    - TEXT "7, Omotayo Street", 227x29px, constraints left/top, fill #000000, text [H2], [heading]
    - TEXT "N200", 33x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - TEXT "Regular Keke", 81x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - INSTANCE "Frame 335", 328x44px, constraints left/top, radius 10px, fill #FFFFFF
    - TEXT "Add note for driver", 113x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - GROUP "Group 2887", 14x14px, constraints left/top
      - VECTOR "Vector", 12.44x12.44px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 3.38x3.38px, constraints scale/scale, stroke #000000 2px

Screen: Wireframe / PAYMENT
- FRAME "PAYMENT", 375x797px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 1171275665", 375x480px, constraints left/top, fill image(hash: f48e2312395a48ed0a8c797318770a9eb969cbd5)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 21", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 22", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 23", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - INSTANCE "Frame 1171275635", 127x28px, vertical pad 0 0 0 0px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 69px, fill #9B9696, effect [drop_shadow 4px offset 0 4 #00000005]
      - FRAME "Frame 1171275568", 127x28px, constraints left/top
        - FRAME "Frame 1171275610", 127x28px, constraints left/top
          - FRAME "Frame 1171275605", 28x28px, constraints left/top, radius 128px
            - INSTANCE "close", 20x20px, constraints left/top, fill #FFFFFF
          - FRAME "Frame 1171275250", 95x20px, constraints left/top
            - FRAME "Frame 1171275244", 95x20px, constraints left/top
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - FRAME "Frame 332", 375x332px, constraints left/top, radius 10/10/0/0px, fill #C4C4C4
    - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
      - TEXT "Button", 107x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 333", 375x208px, constraints left/top, radius 10/10/0/0px, fill #9B9B9A
    - GROUP "Group 2891", 328x37px, constraints left/top, radius 10px
      - INSTANCE "Frame 335", 328x37px, constraints left/top, radius 10px, stroke #000000 1px
      - TEXT "Offer", 31x15px, constraints left/top, fill #000000, text [SMALL TEXT]
      - TEXT "20%", 34x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
      - TEXT "OFF", 34x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2892", 328x37px, constraints left/top, radius 10px
      - INSTANCE "Frame 335", 328x37px, constraints left/top, radius 10px, stroke #000000 1px
      - TEXT "Payment Method", 106x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - TEXT "N200", 56x24px, constraints left/top, fill #000000, text [H3], [heading]
    - TEXT "N400", 58x24px, constraints left/top, fill #000000, text [H3], [heading]
    - LINE "Line 12", 66.56x7.69px, constraints left/top, stroke #000000 1px
    - VECTOR "Vector", 12x6px, constraints scale/scale, stroke #000000 2px
    - VECTOR "Vector", 12x6px, constraints scale/scale, stroke #000000 2px
    - TEXT "Keke Wallet", 74x15px, constraints left/top, fill #000000, text [Montserrat SemiBold, 12px]

Screen: Wireframe / SELECT DRIVER
- FRAME "SELECT DRIVER", 375x797px, constraints left/top, fill #FFFFFF
  - FRAME "Frame 1171275666", 375x447px, constraints left/top, fill image(hash: 0ef6f63d833e7f10367cb74bcbcadad2b6970f6d)
    - RECTANGLE "54aee26ea61ddb5d2ab7bff3b56efed0 21", 41x41px, constraints left/top, fill image(hash: 335457d81817a9070fb0367b5a1119ac340a6a91)
    - FRAME "Frame 1171274875", 87x28px, vertical pad 4 8 4 8px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 92px, fill #000000, stroke #369844 1px
      - FRAME "Frame 1171274873", 71x20px, horizontal pad 0 0 0 0px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top
        - FRAME "Frame 1171274872", 14x20px, horizontal pad 4 4 4 4px gap 4px align min/max sizing W:fixed H:fixed, constraints left/top
          - VECTOR "Vector", 6x12px, constraints left/top, fill #F7F7F7
        - TEXT "Pickup", 57x20px, constraints left/top, fill #FFFFFF, text [Montserrat Medium, 16px]
    - REGULAR_POLYGON "Polygon 1", 8x12px, constraints left/top, fill #000000
    - INSTANCE "Frame 1171275635", 127x28px, vertical pad 0 0 0 0px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 69px, fill #9B9696, effect [drop_shadow 4px offset 0 4 #00000005]
      - FRAME "Frame 1171275568", 127x28px, constraints left/top
        - FRAME "Frame 1171275610", 127x28px, constraints left/top
          - FRAME "Frame 1171275605", 28x28px, constraints left/top, radius 128px
            - INSTANCE "close", 20x20px, constraints left/top, fill #FFFFFF
          - FRAME "Frame 1171275250", 95x20px, constraints left/top
            - FRAME "Frame 1171275244", 95x20px, constraints left/top
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - FRAME "Frame 333", 375x94px, constraints left/top, radius 10/10/0/0px, fill #9B9B9A
    - TEXT "Reaching in 3 minutes", 228x24px, constraints left/top, fill #000000, text [Montserrat Medium, 20px]
    - TEXT "To Pay", 52x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "N200", 67x29px, constraints left/top, fill #000000, text [H2], [heading]
  - FRAME "Frame 334", 375x94px, constraints left/top, radius 10/10/0/0px, fill #8A8A87
    - TEXT "MG ZS EV", 80x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - FRAME "Frame 1171275437", 148x24px, constraints left/top, radius 4px
      - TEXT "DL09 EV8987", 138x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
    - RECTANGLE "download (1) 1", 82x72px, constraints left/top, fill image(hash: abee1c1704f981d17eba6a19857b95ca531f263c)
  - FRAME "Frame 335", 375x204px, constraints left/top, radius 10/10/0/0px, fill #9B9B9A
    - ELLIPSE "Ellipse 23", 80x80px, constraints left/top, fill #D9D9D9
    - TEXT "Williams Alayode", 182x24px, constraints left/top, fill #000000, text [H3], [heading]
    - TEXT "4.5", 32x24px, constraints left/top, fill #000000, text [H3], [heading]
    - STAR "Star 1", 16x16px, constraints left/top, fill #000000
    - VECTOR "Vector 238", 0x17px, constraints left/top, stroke #000000 1px
    - TEXT "500+ Rides", 91x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - GROUP "Group 2888", 42x42px, constraints left/top
      - ELLIPSE "Ellipse 24", 42x42px, constraints left/top, fill #D9D9D9
      - VECTOR "Vector", 20.89x20.93px, constraints scale/scale, stroke #000000 2px
    - GROUP "Group 2890", 42x42px, constraints left/top
      - GROUP "Group 2889", 42x42px, constraints left/top
        - ELLIPSE "Ellipse 24", 42x42px, constraints left/top, fill #D9D9D9
      - VECTOR "Vector", 18x18px, constraints scale/scale, stroke #000000 2px

Screen: Wireframe / Vector
- VECTOR "Vector", 6x12px, constraints scale/scale, stroke #000000 2px

Screen: Wireframe / Frame 1171275634
- FRAME "Frame 1171275634", 328x116px, vertical pad 20 0 12 0px gap 8px sizing W:fixed H:fixed, constraints left/top, radius 16px, fill #FFFFFF
  - FRAME "Frame 1171275638", 328x84px, vertical pad 0 0 0 0px gap 24px align min/center sizing W:fixed H:fixed, constraints left/top
    - TEXT "Cancel Ride?", 135x24px, constraints left/top, fill #000000, text [H3], [heading]
    - FRAME "Frame 1171275637", 328x36px, horizontal pad 0 12 0 12px gap 10px sizing W:fixed H:fixed, constraints left/top
      - FRAME "Frame 1171275636", 147x36px, horizontal pad 8 16 8 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top, radius 57px, fill #000000, stroke #547CEF 1px
        - TEXT "No", 24x20px, constraints left/top, fill #FFFFFF, text [Montserrat SemiBold, 16px]
      - FRAME "Frame 1171275635", 147x36px, horizontal pad 8 16 8 16px gap 8px align center/center sizing W:fill H:fixed, constraints left/top, radius 57px, fill #FFFFFF, stroke #000000 1px
        - TEXT "YES", 32x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]

Screen: Wireframe / RIDES
- FRAME "RIDES", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - TEXT "My Rides", 114x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Mar 2023", 95x24px, constraints left/top, fill #000000, text [H3], [heading]
  - TEXT "Feb 2023", 94x24px, constraints left/top, fill #000000, text [H3], [heading]
  - TEXT "Dec 2023", 96x24px, constraints left/top, fill #000000, text [H3], [heading]
  - GROUP "Group 2900", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2903", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2906", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2901", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, La....", 230x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦200", 46x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2904", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2907", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2902", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2905", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - GROUP "Group 2908", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px

Screen: Wireframe / OFFERS
- FRAME "OFFERS", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - TEXT "Promotions", 147x29px, constraints left/top, fill #000000, text [H2], [heading]
  - LINE "Line 14", 327x0px, constraints left/top, stroke #00000033 5px
  - GROUP "Group 2911", 70x70px, constraints left/top
    - ELLIPSE "Ellipse 27", 70x70px, constraints left/top, fill #D9D9D9
    - GROUP "Group 2909", 28.17x28.17px, constraints left/top
      - VECTOR "Vector", 28.17x28.17px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 0.01x0px, constraints scale/scale, stroke #000000 2px
  - FRAME "Frame 2911", 172.17x20px, horizontal pad 0 0 0 0px gap 7px align min/center sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2910", 19.17x19.17px, constraints left/top
      - VECTOR "Vector", 19.17x19.17px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 0.01x0px, constraints scale/scale, stroke #000000 2px
    - TEXT "Enter promo code", 146x20px, constraints left/top, fill #000000, text [BODY]

Screen: Wireframe / HELP
- FRAME "HELP", 375x1142px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - TEXT "How can we help?", 230x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Support cases", 117x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - TEXT "Chat live with Keke Bot", 193x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - TEXT "Get help with recent ride", 206x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - TEXT "Get help with something else", 243x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - TEXT "Kindly report any complaint here", 265x20px, constraints left/top, fill #000000, text [BODY]
  - FRAME "Frame 1171275668", 324x204px, constraints left/top, radius 15px, stroke #000000 1px
  - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
    - TEXT "Button", 72x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - INSTANCE "BUTTON", 327x38px, horizontal pad 0 100 0 100px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #AAA4A4
    - TEXT "Button", 149x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - GROUP "Group 2900", 326x54px, constraints left/top
    - TEXT "7, Omotayo Street, Ketu, Lagos.", 248x20px, constraints left/top, fill #000000, text [BODY]
    - TEXT "27 Mar, 11:40", 74x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - TEXT "Ride Cancelled", 90x15px, constraints left/top, fill #00000080, text [SMALL TEXT]
    - ELLIPSE "Ellipse 26", 32x32px, constraints left/top, fill #D9D9D9
    - TEXT "₦0", 26x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
    - LINE "Line 13", 326x0px, constraints left/top, stroke #00000033 1px
  - FRAME "Frame 1171275669", 327x40px, vertical pad 0 0 0 0px gap 20px align min/max sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2912", 325x20px, constraints left/top
      - TEXT "About Keke Ride", 134x20px, constraints left/top, fill #000000, text [BODY]
      - VECTOR "Vector", 6x12px, constraints left/top, stroke #000000 2px
    - LINE "Line 15", 327x0px, constraints left/top, stroke #00000033 1px
  - FRAME "Frame 1171275670", 327x40px, vertical pad 0 0 0 0px gap 20px align min/max sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2912", 325x20px, constraints left/top
      - TEXT "About Keke Ride", 134x20px, constraints left/top, fill #000000, text [BODY]
      - VECTOR "Vector", 6x12px, constraints left/top, stroke #000000 2px
    - LINE "Line 15", 327x0px, constraints left/top, stroke #00000033 1px
  - FRAME "Frame 1171275671", 327x40px, vertical pad 0 0 0 0px gap 20px align min/max sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2912", 325x20px, constraints left/top
      - TEXT "About Keke Ride", 134x20px, constraints left/top, fill #000000, text [BODY]
      - VECTOR "Vector", 6x12px, constraints left/top, stroke #000000 2px
    - LINE "Line 15", 327x0px, constraints left/top, stroke #00000033 1px
  - FRAME "Frame 1171275672", 327x40px, vertical pad 0 0 0 0px gap 20px align min/max sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2912", 325x20px, constraints left/top
      - TEXT "About Keke Ride", 134x20px, constraints left/top, fill #000000, text [BODY]
      - VECTOR "Vector", 6x12px, constraints left/top, stroke #000000 2px
    - LINE "Line 15", 327x0px, constraints left/top, stroke #00000033 1px
  - FRAME "Frame 1171275673", 327x40px, vertical pad 0 0 0 0px gap 20px align min/max sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2912", 325x20px, constraints left/top
      - TEXT "About Keke Ride", 134x20px, constraints left/top, fill #000000, text [BODY]
      - VECTOR "Vector", 6x12px, constraints left/top, stroke #000000 2px
    - LINE "Line 15", 327x0px, constraints left/top, stroke #00000033 1px
  - FRAME "Frame 1171275674", 325x20px, vertical pad 0 0 0 0px gap 20px align min/max sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 2912", 325x20px, constraints left/top
      - TEXT "About Keke Ride", 134x20px, constraints left/top, fill #000000, text [BODY]
      - VECTOR "Vector", 6x12px, constraints left/top, stroke #000000 2px

Screen: Wireframe / PROFILE
- FRAME "PROFILE", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - ELLIPSE "Ellipse 28", 87x87px, constraints left/top, fill #D9D9D9
  - TEXT "Alayode Williams", 182x24px, constraints left/top, fill #000000, text [H3], [heading]
  - TEXT "Favorite locations", 146x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - TEXT "Language", 84x20px, constraints left/top, fill #000000, text [Montserrat SemiBold, 16px]
  - TEXT "Home", 38x15px, constraints left/top, fill #000000, text [Montserrat SemiBold, 12px]
  - TEXT "Walayode@gmail.com", 181x20px, constraints left/top, fill #000000, text [BODY]
  - TEXT "13, Shomuyiwa, street, Lagos, Nigeria", 219x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - TEXT "Enter work location", 118x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - TEXT "English - US", 73x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - TEXT "Communication preferences", 173x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - GROUP "Group 2913", 20x16px, constraints left/top
    - VECTOR "Vector", 20x16px, constraints scale/scale, stroke #000000 2px
    - VECTOR "Vector", 20x7px, constraints scale/scale, stroke #000000 2px
  - LINE "Line 16", 327x0px, constraints left/top, stroke #00000033 5px
  - LINE "Line 17", 327x0px, constraints left/top, stroke #00000033 5px
  - LINE "Line 18", 327x0px, constraints left/top, stroke #00000033 5px
  - GROUP "Group 2914", 18x20px, constraints left/top
    - VECTOR "Vector", 18x20px, constraints scale/scale, stroke #000000 2px
    - VECTOR "Vector", 6x10px, constraints scale/scale, stroke #000000 2px
  - GROUP "Group 2915", 20x18px, constraints left/top
    - VECTOR "Vector", 20x14px, constraints scale/scale, stroke #000000 2px
    - VECTOR "Vector", 8x18px, constraints scale/scale, stroke #000000 2px
  - TEXT "+2348146212556", 95x15px, constraints left/top, fill #000000, text [SMALL TEXT]

Screen: Wireframe / MESSAGE
- FRAME "MESSAGE", 375x812px, constraints left/top, fill #FFFFFF
  - INSTANCE "Group 2884", 329.63x20px, constraints left/top
    - GROUP "Battery", 27.77x13.39px, constraints scale/scale, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 25.11x13.39px, constraints scale/scale, radius 2.67px, stroke #333333 1px, opacity 35%
      - VECTOR "Cap", 1.52x4.73px, constraints scale/scale, fill #333333, opacity 40%
      - RECTANGLE "Capacity", 20.54x8.67px, constraints scale/scale, radius 1.33px, fill #333333
    - BOOLEAN_OPERATION "Wifi", 17.5x13px, constraints scale/scale, fill #333333
    - BOOLEAN_OPERATION "Cellular Connection", 19.4x12.61px, constraints scale/scale, fill #333333
    - TEXT "Time", 38x18px, constraints scale/scale, fill #333333, text [Montserrat Black, 15px]
  - TEXT "Keep your account safe - never share personal or account inf", 327x30px, constraints left/top, fill #000000, text [SMALL TEXT]
  - ELLIPSE "Ellipse 29", 24x24px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 30", 24x24px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 31", 24x24px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 32", 24x24px, constraints left/top, fill #D9D9D9
  - ELLIPSE "Ellipse 33", 24x24px, constraints left/top, fill #D9D9D9
  - FRAME "Frame 1171275675", 150x24px, constraints left/top, radius 10/10/10/0px, fill #A9A9AA
  - FRAME "Frame 1171275677", 150x24px, constraints left/top, radius 10/10/10/0px, fill #A9A9AA
  - FRAME "Frame 1171275676", 117x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275678", 117x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275679", 115x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275681", 127x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275683", 158x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275682", 127x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275680", 136x24px, constraints left/top, radius 10/10/0/10px, fill #A9A9AA
  - FRAME "Frame 1171275688", 426x35px, horizontal pad 0 0 0 0px gap 9px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame 1171275684", 70x35px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 15px, fill #C4C4C4
      - TEXT "I’m here", 50x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - FRAME "Frame 1171275685", 104x35px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 15px, fill #C4C4C4
      - TEXT "Be right there", 84x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - FRAME "Frame 1171275686", 137x35px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 15px, fill #C4C4C4
      - TEXT "I’m looking forward", 117x15px, constraints left/top, fill #000000, text [SMALL TEXT]
    - FRAME "Frame 1171275687", 88x35px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top, radius 15px, fill #C4C4C4
      - TEXT "I’m waiting", 68x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - FRAME "Frame 1171275689", 253x38px, constraints left/top, radius 10px, stroke #000000 2px
    - TEXT "Message", 53x15px, constraints left/top, fill #00000066, text [SMALL TEXT]
  - GROUP "Group 2917", 36x36px, constraints left/top
    - ELLIPSE "Ellipse 34", 36x36px, constraints left/top, fill #D9D9D9
    - GROUP "Group 2916", 28.26x28.26px, constraints left/top
      - VECTOR "Vector", 15.54x15.54px, constraints scale/scale, stroke #000000 2px
      - VECTOR "Vector", 28.26x28.26px, constraints scale/scale, stroke #000000 2px

Screen: UX Case Study / 15
- FRAME "15", 1440x1024px, constraints left/top, fill #FFFFFF
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 24", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 42", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "LET’S CONNECT", 399x59px, constraints left/top, fill #000000, text [H1], [heading]
  - ELLIPSE "Ellipse 40", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 41", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - TEXT "Want to work together? If you like what you see and want to ", 828x185px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - GROUP "Group 54", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "Frame 1171275690 1", 700x537px, constraints left/top, fill image(hash: 6fec653c9407ff50e0b917119eb6353665791028)

Screen: UX Case Study / 14
- FRAME "14", 1440x1024px, constraints left/top, fill #FFFFFF
  - ELLIPSE "Ellipse 24", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "DESIGN STYLE GUIDE", 537x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 53", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "STYLE 1", 1044x756px, constraints left/top, fill image(hash: 329e02da2dd90188f56b3e7eba885cc53570ce06)

Screen: UX Case Study / 13
- FRAME "13", 1440x1024px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "NEXT STEPS :", 331x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 5", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "1", 19x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 6", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "2", 29x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 7", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "3", 29x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - FRAME "Frame 10", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - ELLIPSE "Ellipse 39", 146.75x146.75px, constraints left/top, fill #FFEB3B80
    - TEXT "Do another usability study to test the application in the re", 362x111px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 11", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - ELLIPSE "Ellipse 39", 146.75x146.75px, constraints left/top, fill #FFEB3B80
    - TEXT "Work with developers to create a functional website.", 259x82px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 12", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - ELLIPSE "Ellipse 39", 146.75x146.75px, constraints left/top, fill #FFEB3B80
    - TEXT "Make final tweaks to the application with the developer’s as", 261x169px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - GROUP "Group 52", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]

Screen: UX Case Study / 12
- FRAME "12", 1440x1024px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "TAKEAWAYS", 319x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 3", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "1", 19x59px, constraints left/top, fill TERTIARY, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 4", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "2", 29x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - FRAME "Frame 8", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - ELLIPSE "Ellipse 39", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - FRAME "Frame 9", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - TEXT "Do another usability study to test the application in the re", 362x111px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
    - ELLIPSE "Ellipse 38", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - TEXT "Impact:", 103x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "What I learned", 187x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "I. “love how easy the apartment finding website looks. ” 2. ", 402x125px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - ELLIPSE "Ellipse 38", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 38", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - GROUP "Group 51", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]

Screen: UX Case Study / 11
- FRAME "11", 1440x1042px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 37", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 36", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "ACCESSBILITY CONSIDERATON", 783x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 1", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "1", 19x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 2", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "2", 29x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - FRAME "Frame 5", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - TEXT "One of the big things that we did for The Keke App to be acc", 375x144px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 7", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - TEXT "Big bold pictures helps those struggling with words.", 244x72px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - ELLIPSE "Ellipse 35", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - GROUP "Group 50", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]

Screen: UX Case Study / 10
- FRAME "10", 1440x3047px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 36", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 40", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 41", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 37", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "MOCK UPS", 275x59px, constraints left/top, fill #000000, text [H1], [heading]
  - ELLIPSE "Ellipse 35", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 38", 146.75x146.75px, constraints left/top, fill #D2AD3266
  - ELLIPSE "Ellipse 39", 146.75x146.75px, constraints left/top, fill #D2AD3266
  - GROUP "Group 49", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "iPhon 1", 1704x1277px, constraints left/top, fill image(hash: 05c40a49d22d69e6dae77e24adc519a740fa3e02)
  - RECTANGLE "iPhone 13 Pro", 1976x1482px, constraints left/top, fill image(hash: 5d193ece83dc42ab89c80ea320338bb1fc917ea3)

Screen: UX Case Study / 9
- FRAME "9", 1440x1177px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 32", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 33", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 34", 296.61x296.61px, constraints left/top, fill #FFEB3B80
  - TEXT "USABILITY FINDINGS :", 551x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 2", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "2", 29x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 4", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "3", 29x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 1", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill SECONDARY
    - TEXT "1", 19x59px, constraints left/top, fill WHITE, text [Montserrat Bold, 48px], [heading]
  - TEXT "Finding", 97x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Finding", 97x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Finding", 97x29px, constraints left/top, fill #000000, text [H2], [heading]
  - FRAME "Frame 5", 421x228px, constraints left/top, radius 20px, fill SECONDARY
  - ELLIPSE "Ellipse 31", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - FRAME "Frame 7", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - ELLIPSE "Ellipse 34", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - FRAME "Frame 8", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - TEXT "Users would like to be able to see nearby rides without leav", 336x77px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - TEXT "Users would like a way to request a ride and see number plat", 377x72px, constraints left/top, fill BODY, text [Montserrat SemiBold, 20px]
  - TEXT "Users felt confused when navigating the back button.", 301x53px, constraints left/top, fill WHITE, text [Montserrat SemiBold, 20px]
  - GROUP "Group 48", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "proto 1", 854x328px, constraints left/top, fill image(hash: 3a0752e35f3ae442a2c1274e063154d1a12cf7b9)

Screen: UX Case Study / 8
- FRAME "8", 1440x1262px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "USABILITY STUDY :", 472x59px, constraints left/top, fill #000000, text [H1], [heading]
  - TEXT "Parameters :", 158x29px, constraints left/top, fill #000000, text [H2], [heading]
  - ELLIPSE "Ellipse 25", 81x81px, constraints left/top, fill SECONDARY
  - ELLIPSE "Ellipse 27", 81x81px, constraints left/top, fill #212121
  - ELLIPSE "Ellipse 28", 81x81px, constraints left/top, fill SECONDARY
  - ELLIPSE "Ellipse 26", 81x81px, constraints left/top, fill #FFEB3B80
  - VECTOR "Vector", 42x51px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 14x14px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 44x17px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 22x22px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 8x16px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 8x22px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 49x56px, constraints scale/scale, stroke WHITE 1px
  - VECTOR "Vector", 58x58px, constraints scale/scale, stroke WHITE 2px
  - VECTOR "Vector", 12x23px, constraints scale/scale, stroke WHITE 2px
  - ELLIPSE "Ellipse 25", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 24", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 30", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 25", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 29", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - TEXT "Study type: Unmoderated usability study", 366x58px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Location: Nigeria, remote", 196x58px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Participants: 5 participants", 173x58px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Length: 20-30 minutes", 180x58px, constraints left/top, fill #000000, text [H2], [heading]
  - ... +1 more children

Screen: UX Case Study / 7
- FRAME "7", 1440x3329px, constraints left/top, fill BODY
  - ELLIPSE "Ellipse 23", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "DIGITAL WIREFRAMES :", 592x59px, constraints left/top, fill #000000, text [H1], [heading]
  - ELLIPSE "Ellipse 23", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 24", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 23", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 25", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 26", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - GROUP "Group 46", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "iPhone 1 4", 1868x1401px, constraints left/top, fill image(hash: 1e4319156501cd91de057c783573edbeeee14902)
  - RECTANGLE "iPhone 13 Pro 1", 2007x1505px, constraints left/top, fill image(hash: 442002950ebad8d5c05bec8f4fbc8ec76cf894c3)

Screen: UX Case Study / 6
- FRAME "6", 1440x1061px, constraints left/top, fill BODY
  - TEXT "SITEMAP :", 253x59px, constraints left/top, fill #000000, text [H1], [heading]
  - ELLIPSE "Ellipse 20", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 20", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 22", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 20", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 21", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - GROUP "Group 45", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "SITE MAP 2", 1243x622px, constraints left/top, fill image(hash: 4cf7ac44b80437fca3780c54bd3fe7653396c2f2)

Screen: UX Case Study / 5
- FRAME "5", 1440x1061px, constraints left/top, fill BODY
  - TEXT "USER PERSONA :", 425x59px, constraints left/top, fill #000000, text [H1], [heading]
  - ELLIPSE "Ellipse 16", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 18", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 15", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 19", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - GROUP "Group 44", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "USER PERSONA 1", 1284x728px, constraints left/top, fill image(hash: eba278cfe92418a438ab3259a497dddf03f6340e)

Screen: UX Case Study / 4
- FRAME "4", 1440x1966px, constraints left/top, fill BODY
  - TEXT "USER RESEARCH :", 453x59px, constraints left/top, fill #000000, text [H1], [heading]
  - TEXT "Summary :", 136x29px, constraints left/top, fill #000000, text [H2], [heading]
  - ELLIPSE "Ellipse 15", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 16", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 15", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 17", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - TEXT "Pain Points", 143x29px, constraints left/top, fill #000000, text [H2], [heading]
  - GROUP "Group 2", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill PRIMARY
    - TEXT "2", 29x59px, constraints left/top, fill #000000, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 4", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill PRIMARY
    - TEXT "3", 29x59px, constraints left/top, fill #000000, text [Montserrat Bold, 48px], [heading]
  - GROUP "Group 1", 100x100px, constraints left/top
    - ELLIPSE "Ellipse 18", 100x100px, constraints left/top, fill PRIMARY
    - TEXT "1", 19x59px, constraints left/top, fill #000000, text [Montserrat Bold, 48px], [heading]
  - FRAME "Frame 5", 421x228px, constraints left/top, radius 20px, fill SECONDARY
  - FRAME "Frame 6", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - TEXT "Users have trouble finding relevant, helpful information on ", 360x72px, constraints left/top, fill EXTRA, text [Montserrat SemiBold, 20px]
  - FRAME "Frame 7", 421x228px, constraints left/top, radius 20px, fill SECONDARY
    - TEXT "Users are interested in seeing how apartments compare in ord", 360x72px, constraints left/top, fill EXTRA, text [Montserrat SemiBold, 20px]
  - TEXT "Several research methods were used to complete the KEKE RIDE", 659x260px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Users would like to use a keke for their next short distance", 384x48px, constraints left/top, fill EXTRA, text [Montserrat SemiBold, 20px]
  - GROUP "Group 43", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "iPhone 12 Pro 1", 1184x889px, constraints left/top, fill image(hash: d9a242935ee203c65237b3845a97a18ccb733b70)

Screen: UX Case Study / 3
- FRAME "3", 1440x1061px, constraints left/top, fill BODY
  - TEXT "PROJECT OVERVIEW :", 553x59px, constraints left/top, fill #000000, text [H1], [heading]
  - TEXT "The Problem:", 168x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "The Goal :", 123x29px, constraints left/top, fill #000000, text [H2], [heading]
  - ELLIPSE "Ellipse 13", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "My role", 93x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "I was the only designer involved in this project. I complete", 668x48px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Responsibilities:", 212x29px, constraints left/top, fill #000000, text [H2], [heading]
  - ELLIPSE "Ellipse 13", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 14", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 13", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - TEXT "The goal of this project was to design a mobile app that all", 673x85px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "user research, wireframing, prototyping, ideation, user flow", 487x47px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Those looking for short distance ride needs an easy way to o", 656x103px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - GROUP "Group 42", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "iPhon 2", 833x625px, constraints left/top, fill image(hash: 05c40a49d22d69e6dae77e24adc519a740fa3e02)

Screen: UX Case Study / 2
- FRAME "2", 1440x1156px, constraints left/top, fill BODY
  - TEXT "INTRODUCTION :", 424x59px, constraints left/top, fill #000000, text [H1], [heading]
  - TEXT "The Product:", 161x29px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "Project Duration:", 215x29px, constraints left/top, fill #000000, text [H2], [heading]
  - ELLIPSE "Ellipse 7", 146.75x146.75px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 5", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 13", 237.06x237.06px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 11", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 14", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - ELLIPSE "Ellipse 12", 201.78x201.78px, constraints left/top, fill #FFEB3B80
  - TEXT "The KEKE RIDE App was a complete concept project from resear", 656x143px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "8 Weeks", 93x24px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - TEXT "Those looking for apartment needs an easy way to to compare ", 664x100px, constraints left/top, fill #000000, text [Montserrat SemiBold, 20px]
  - GROUP "Group 41", 144.4x116.66px, constraints left/top
    - RECTANGLE "tricycle-know-keke-napep-260nw-1055348423 1", 144.4x116.66px, constraints scale/scale, fill image(hash: 4cf0e169fe98fdcc311f289c89b557866f46b15f)
    - TEXT "The keke Ride", 89x15px, constraints left/top, fill #000000, text [Montserrat Bold, 12px]
  - RECTANGLE "iPhone 13 Pro", 1071x803px, constraints left/top, fill image(hash: 5d193ece83dc42ab89c80ea320338bb1fc917ea3)
  - RECTANGLE "iPhone 12 ProO 1", 647x486px, constraints left/top, fill image(hash: 7a917e5ffedbc509afe2de163630a70691f32c46)

Screen: UX Case Study / 1
- FRAME "1", 1440x1024px, constraints left/top, fill PRIMARY
  - TEXT "THE KEKE RIDE APP", 507x59px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 48px], [heading]
  - LINE "Line 1", 792x0px, constraints left/top, fill SECONDARY, stroke #000000 1px
  - TEXT "Williams Alayode", 436x59px, constraints left/top, fill SECONDARY, text [Montserrat Bold, 48px], [heading]

Screen: UX Case Study / THUMBNAIL
- FRAME "THUMBNAIL", 1440x1024px, constraints left/top, fill TERTIARY
  - TEXT "UX/UI", 329x88px, constraints left/top, fill #000000, text [Montserrat Bold, 96px], [heading]
  - TEXT "CASE STUDY", 692x128px, constraints left/top, fill #000000, text [Montserrat Bold, 96px], [heading]
  - TEXT "KEKE RIDE is a mobile app that allows user to order for a sh", 676x71px, constraints left/top, fill #000000, text [H2], [heading]
  - TEXT "(A Ride App)", 156x29px, constraints left/top, fill #000000, text [Montserrat Bold, 24px], [heading]
  - RECTANGLE "figma 3", 39x39px, constraints scale/scale, fill image(hash: 8ebdd5fda39d6f7dc5186a772dab05cb1f3d0576)
  - FRAME "Frame 37", 590x56px, horizontal pad 0 0 0 0px gap 44px align min/center sizing W:fixed H:fixed, constraints scale/scale
    - GROUP "Group 38", 152x33px, constraints left/top
      - TEXT "Desktop", 86x24px, constraints left/top, fill #000000, text [Montserrat Medium, 20px]
      - RECTANGLE "Windows_logo_-_2012 1", 31x33px, constraints left/top, fill image(hash: bbff2d77f32b5d2f8353a6697e6a24d198fd7718)
    - GROUP "Group 39", 167x50px, constraints left/top
      - TEXT "Android", 82x24px, constraints left/top, fill #000000, text [Montserrat Medium, 20px]
      - RECTANGLE "android 2", 50x50px, constraints left/top, fill image(hash: 0051d005285151ae7958249a2dcc457d701f4de2)
    - GROUP "Group 40", 183x56px, constraints left/top
      - TEXT "Apple", 60x24px, constraints left/top, fill #000000, text [Montserrat Medium, 20px]
      - GROUP "Group 37", 88x56px, constraints left/top
        - ELLIPSE "Ellipse 12", 56x56px, constraints left/top, fill WHITE, effect [drop_shadow 4px offset 0 4 #00000040]
        - RECTANGLE "apple_logo_black 1", 88x50px, constraints left/top, fill image(hash: d909a7ab06ed022bce7e64a3728354d52afcdd2c)
  - RECTANGLE "iPhone 13 Pro", 710x532px, constraints left/top, fill image(hash: 5d193ece83dc42ab89c80ea320338bb1fc917ea3)
  - RECTANGLE "iPhone 12 Pro 2", 733x550px, constraints left/top, fill image(hash: d9a242935ee203c65237b3845a97a18ccb733b70)

Screen: Mock Up / SPLASH SCREEN
- FRAME "SPLASH SCREEN", 375x812px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Rectangle 6552", 533.77x426.7px, constraints left/top, fill PRIMARY
  - RECTANGLE "Rectangle 6553", 619.7x503.49px, constraints left/top, fill SECONDARY
  - RECTANGLE "Rectangle 6551", 533.77x426.7px, constraints left/top, fill SECONDARY
  - TEXT "We’re here to make your short distance trip memorable.", 327x40px, constraints left/top, fill WHITE, text [Montserrat Bold, 16px]
  - TEXT "Let’s Ride", 85x20px, constraints left/top, fill #000000CC, text [Montserrat Bold, 16px]
  - TEXT "Welcome", 239x59px, constraints left/top, fill #000000, text [H1], [heading]
  - GROUP "Group 2884", 31x31px, constraints left/top
    - ELLIPSE "Ellipse 19", 31x31px, constraints left/top, fill PRIMARY
    - VECTOR "Vector", 7x14px, constraints scale/scale, fill PRIMARY, stroke #000000 2px
    - VECTOR "Vector", 14x0px, constraints scale/scale, fill PRIMARY, stroke #000000 2px
  - FRAME "undraw_city_girl_ccpd 1", 851.41x649.3px, constraints left/top, fill #FFFFFF [decorative, ~30 shapes]

Screen: Mock Up / ONBOARDING 1
- FRAME "ONBOARDING 1", 375x812px, constraints left/top, fill PRIMARY
  - FRAME "Frame 321", 375x600px, constraints left/top, fill #D9D9D9
  - TEXT "Request Ride", 181x29px, constraints scale/scale, fill #000000, text [H2], [heading]
  - TEXT "The fastest app to book a keke ride online near by you.", 326x40px, constraints scale/scale, fill Secondary, text [Montserrat Medium, 16px]
  - GROUP "scroll", 72x6px, constraints left/top, radius 20px
    - RECTANGLE "Rectangle 6553", 22x6px, constraints left/top, radius 20px, fill SECONDARY
    - RECTANGLE "Rectangle 6554", 22x6px, constraints left/top, radius 20px, fill WHITE
    - RECTANGLE "Rectangle 6555", 22x6px, constraints left/top, radius 20px, fill WHITE
  - TEXT "Next", 29x15px, constraints left/top, fill #000000, text [SMALL TEXT]

Screen: Mock Up / ONBOARDING 2
- FRAME "ONBOARDING 2", 375x812px, constraints left/top, fill PRIMARY
  - FRAME "Frame 322", 375x600px, constraints left/top, fill image(hash: 1159cb3b8691b6f8068fe00d2c77f8ea49ca9af2)
  - TEXT "Book Driver", 182x29px, constraints scale/scale, fill #000000, text [H2], [heading]
  - TEXT "Request a driver and book a driver to pick you from your des", 311x40px, constraints scale/scale, fill Secondary, text [Montserrat Medium, 16px]
  - GROUP "scroll", 72x6px, constraints left/top, radius 20px
    - RECTANGLE "Rectangle 6553", 22x6px, constraints left/top, radius 20px, fill WHITE
    - RECTANGLE "Rectangle 6554", 22x6px, constraints left/top, radius 20px, fill SECONDARY
    - RECTANGLE "Rectangle 6555", 22x6px, constraints left/top, radius 20px, fill WHITE
  - TEXT "Next", 29x15px, constraints left/top, fill #000000, text [SMALL TEXT]
  - TEXT "Back", 30x15px, constraints left/top, fill #000000, text [SMALL TEXT]

Screen: Mock Up / ONBOARDING 3
- FRAME "ONBOARDING 3", 375x812px, constraints left/top, fill PRIMARY
  - FRAME "Frame 322", 375x600px, constraints left/top, fill image(hash: b0b21e11218abdb9f750bb99fa096aa3ed79029d)
  - TEXT "Track your driver", 218x29px, constraints scale/scale, fill #000000, text [H2], [heading]

## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
