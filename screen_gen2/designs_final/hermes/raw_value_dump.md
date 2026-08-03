---
name: mobile-sidebar-community
source_file: Mobile Sidebar (Community)
source_page: All pages (2): Page 1, Components
generated_at: 2026-07-25T09:55:42.988082+00:00
---

# Mobile Sidebar (Community) Design Guidelines

## Source
- Figma file: Mobile Sidebar (Community)
- Figma page: All pages (2): Page 1, Components
- Extracted at: 2026-07-25T09:55:42.988082+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- No local paint styles or color variables found.

## Raw Colors (unstyled)
- #535151: 22 uses
- #F4D08999: 20 uses
- #F4D08966: 14 uses
- #3C3131: 8 uses
- #82530C: 8 uses
- #F2B59B: 8 uses
- #A4616159: 6 uses
- #D4B4B4: 4 uses
- #FFFFFF: 4 uses
- #F4EEEE26: 3 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- Josefin Sans Regular, 22px: 25 uses
- Macondo Regular, 32px: 8 uses
- Josefin Sans Regular, 14px: 5 uses

## Typography Hierarchy
- 32px - Macondo Regular, 32px (raw)
- 22px - Josefin Sans Regular, 22px (raw)
- 14px - Josefin Sans Regular, 14px (raw)

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
- Navbar
- Dropdown Menu
- Sidebar Item

## Component Specs
- Navbar: size 360x70px, fill #F2B59B, text [Macondo Regular, 32px] | variants: type: mobile-large/mobile-small; sidebar: closed/open
- Dropdown Menu: size 135x40px, radius 8px, fill #A4616159, text [Josefin Sans Regular, 14px]
- Sidebar Item: size 254x50px, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40], text [Josefin Sans Regular, 22px]

## Most-Used Styles
- No style references were counted. Apply local styles to layers to populate usage counts.

## Layout & Structure
Screen: Page 1 / Android Large - 1
- FRAME "Android Large - 1", 360x800px, constraints left/top, fill #FFFFFF
  - INSTANCE "Navbar", 360x70px, constraints left_right/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
  - FRAME "Sidebar", 360x730px, constraints left/top, fill #D4B4B4
    - FRAME "Sidebar Item", 326x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 86x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Sidebar Item", 326x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 84x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Sidebar Item", 326x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 128x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Frame 1", 326x309px, constraints left_right/top, radius 8px, fill #F4EEEE26
      - INSTANCE "Dropdown Menu", 326x50px, constraints left/top, radius 8px, fill #A4616159
        - FRAME "DropdownBtn", 320x44px, constraints left_right/top_bottom, radius 8px, fill #F4D08999
          - TEXT "My Account", 118x22px, constraints center/center, fill #3C3131, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 294x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 63x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 294x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 54x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 294x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 80x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 294x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 90x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]

Screen: Page 1 / iPhone 13 Pro Max - 1
- FRAME "iPhone 13 Pro Max - 1", 428x926px, constraints left/top, fill #FFFFFF
  - INSTANCE "Navbar", 428x70px, constraints left/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
  - FRAME "Sidebar", 428x856px, constraints left_right/top, fill #D4B4B4
    - FRAME "Sidebar Item", 390x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 86x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Sidebar Item", 390x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 84x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Sidebar Item", 390x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 128x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Frame 1", 390x309px, constraints left_right/top, radius 8px, fill #F4EEEE26
      - INSTANCE "Dropdown Menu", 390x50px, constraints left_right/top, radius 8px, fill #A4616159
        - FRAME "DropdownBtn", 384x44px, constraints left_right/top_bottom, radius 8px, fill #F4D08999
          - TEXT "My Account", 118x22px, constraints center/center, fill #3C3131, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 358x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 63x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 358x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 54x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 358x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 80x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 358x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 90x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]

Screen: Page 1 / iPad Pro 11" - 1
- FRAME "iPad Pro 11" - 1", 834x1194px, constraints left/top, fill #FFFFFF
  - INSTANCE "Navbar", 834x70px, constraints left_right/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
  - FRAME "Sidebar", 56x1124px, constraints left/top, fill #D4B4B4 [decorative, ~4 shapes]

Screen: Page 1 / iPad Pro 11" - 2
- FRAME "iPad Pro 11" - 2", 834x1194px, constraints left/top, fill #FFFFFF
  - INSTANCE "Navbar", 834x70px, constraints left_right/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
  - FRAME "Sidebar", 348x1124px, constraints left/top, fill #D4B4B4
    - FRAME "Sidebar Item", 309x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 86x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Sidebar Item", 309x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 84x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Sidebar Item", 309x50px, constraints left_right/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
      - TEXT "Project Title", 128x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
    - FRAME "Frame 1", 309x309px, constraints left_right/top, radius 8px, fill #F4EEEE26
      - INSTANCE "Dropdown Menu", 309x50px, constraints left_right/top, radius 8px, fill #A4616159
        - FRAME "DropdownBtn", 303x44px, constraints left_right/top_bottom, radius 8px, fill #F4D08999
          - TEXT "My Account", 118x22px, constraints center/center, fill #3C3131, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 277x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 63x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 277x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 54x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 277x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 80x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]
      - FRAME "Sidebar Item", 277x50px, constraints left_right/top, radius 8px, fill #F4D08999, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
        - TEXT "Project Title", 90x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]

Screen: Components / Navbar
- COMPONENT_SET "Navbar", 736x547px, constraints left/top, radius 5px, stroke #7B61FF 1px
  - COMPONENT "type=mobile-small, sidebar=closed", 360x70px, constraints left/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
  - COMPONENT "type=mobile-large, sidebar=closed", 696x70px, constraints left/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
    - INSTANCE "Dropdown Menu", 135x40px, constraints right/top_bottom, radius 8px, fill #A4616159
      - FRAME "DropdownBtn", 129x34px, constraints left_right/top_bottom, radius 8px, fill #F4D08999
        - TEXT "My Account", 75x14px, constraints center/center, fill #3C3131, text [Josefin Sans Regular, 14px]
  - COMPONENT "type=mobile-large, sidebar=open", 696x70px, constraints left/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]
    - INSTANCE "Dropdown Menu", 135x40px, constraints right/top_bottom, radius 8px, fill #A4616159
      - FRAME "DropdownBtn", 129x34px, constraints left_right/top_bottom, radius 8px, fill #F4D08999
        - TEXT "My Account", 75x14px, constraints center/center, fill #3C3131, text [Josefin Sans Regular, 14px]
  - COMPONENT "type=mobile-small, sidebar=open", 360x70px, constraints left/top, fill #F2B59B
    - RECTANGLE "Chevron Right", 50x50px, constraints left/center, fill image(hash: 7f17fb9933a62141ae670df05ad00a51133457d4)
    - TEXT "Hermes", 98x38px, constraints center/center, fill #82530C, text [Macondo Regular, 32px], [heading]

Screen: Components / Sidebar Item
- COMPONENT "Sidebar Item", 254x50px, constraints left/top, radius 8px, fill #F4D08966, effect [drop_shadow 8px offset 0 2 #CDCDCD40]
  - TEXT "Project Title", 80x22px, constraints center/center, fill #535151, text [Josefin Sans Regular, 22px]

Screen: Components / Dropdown Menu
- COMPONENT "Dropdown Menu", 135x40px, constraints left/top, radius 8px, fill #A4616159
  - FRAME "DropdownBtn", 129x34px, constraints left_right/top_bottom, radius 8px, fill #F4D08999
    - TEXT "My Account", 75x14px, constraints center/center, fill #3C3131, text [Josefin Sans Regular, 14px]


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
