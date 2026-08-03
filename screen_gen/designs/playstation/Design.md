---
name: concept-playstation-app-community
source_file: Concept Playstation App (Community)
source_page: All pages (3): Cover, Playstation, UI Kits
generated_at: 2026-07-02T20:55:50.244319+00:00
---

# Concept Playstation App (Community) Design Guidelines

## Source
- Figma file: Concept Playstation App (Community)
- Figma page: All pages (3): Cover, Playstation, UI Kits
- Extracted at: 2026-07-02T20:55:50.244319+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- black: [#000000]
- White: [#FFFFFF]
- Black: [#222222]

## Raw Colors (unstyled)
- #FFFFFF: 169 uses
- #000000: 116 uses
- #0072CE: 31 uses
- #C4C4C4: 30 uses
- #BF8609: 25 uses
- #2C5CF4: 21 uses
- #DF6C58: 10 uses
- #0070D1: 5 uses
- #9D6A1E: 5 uses
- #C4C4C403: 5 uses
- #FFE125: 5 uses
- #FF6B00: 4 uses
- #19181E: 3 uses

## Typography Tokens
- No local text styles found.

## Raw Typography (unstyled)
- Roboto Regular, 14px: 13 uses
- Roboto Regular, 10px: 9 uses
- Roboto Regular, 15px: 8 uses
- Gilroy ExtraBold, 12px: 6 uses
- Gilroy ExtraBold, 25px: 5 uses
- Gilroy ExtraBold, 11px: 4 uses
- Gilroy ExtraBold, 10px: 3 uses
- Gilroy ExtraBold, 16px: 3 uses
- Gilroy ExtraBold, 20px: 3 uses

## Typography Hierarchy
- 25px - Gilroy ExtraBold, 25px (raw)
- 20px - Gilroy ExtraBold, 20px (raw)
- 16px - Gilroy ExtraBold, 16px (raw)
- 15px - Roboto Regular, 15px (raw)
- 14px - Roboto Regular, 14px (raw)
- 12px - Gilroy ExtraBold, 12px (raw)
- 11px - Gilroy ExtraBold, 11px (raw)
- 10px - Gilroy ExtraBold, 10px (raw)
- 10px - Roboto Regular, 10px (raw)

## Spacing Tokens
- No spacing variables found.

## Radius Tokens
- No radius variables found.

## Motion Tokens
- No motion variables found.

## Effect Styles
- icons: [inner_shadow 0.5px offset -0.5 -0.5 #FFFFFF66, inner_shadow 0.5px offset 0.5 0.5 #21446866]

## Grid Styles
- No local grid styles found.

## Component Families
- Card Producto
- Organismo
- Menu
- Organismos

## Component Specs
- Card Producto: size 286x424px, effect [drop_shadow 4px offset 0 4 #0000001A], text [Gilroy ExtraBold, 16px, Gilroy ExtraBold, 10px, Roboto Regular, 10px, Gilroy ExtraBold, 12px]
- Organismo/Bar: size 375x44px, fill #FFFFFF, text [Roboto Regular, 15px]
- Menu: size 357x71px, fill #FFFFFF
- Organismos/Buscador: size 375x44px, text [Roboto Regular, 14px]

## Most-Used Styles
- White: 100 uses
- black: 6 uses
- Black: 2 uses
- icons: 1 use

## Layout & Structure
Screen: Cover / Frame 1
- FRAME "Frame 1", 1400x1000px, constraints left/top, fill #FFFFFF
  - RECTANGLE "Rectangle", 1508x1026px, constraints scale/scale, radius 7.77px, fill Black, effect [drop_shadow 24.27px offset 0 0.97 #00000066]
  - RECTANGLE "Rectangle", 1508x1026px, constraints scale/scale, radius 7.77px, fill #242424, effect [drop_shadow 10px offset 0 1 #0000000D]
  - VECTOR "Vector", 1318x629px, constraints scale/scale, radius 0/0/0/0px, fill gradient_linear(#FFFFFF 0% | #FFFFFF00 100%)
  - RECTANGLE "Juego2 1", 432.64x710.85px, constraints left/top, fill image(hash: fd492f30323bad36c5bafdf783b68db2243a3f96)
  - RECTANGLE "Catalogo2 1", 423.22x708.09px, constraints left/top, radius 20px, fill image(hash: 02c47fc5f81ac67e86de8ef3c9536e4b48a3263f)
  - RECTANGLE "Home (5) 1", 574.2x727.19px, constraints left/top, radius 20px, fill image(hash: e67fe32338fe57d2c780a9dd2417028a15edf787)
  - TEXT "UI Design", 167x44px, constraints left/top, fill #2C5CF4, effect [drop_shadow 5px offset 0 5 #2C5CF440], text [Inter SemiBold, 36px], [heading]
  - TEXT "Movil app design", 295x44px, constraints left/top, fill #2C5CF4, effect [drop_shadow 5px offset 0 5 #00000059], text [Inter SemiBold, 36px], [heading]
  - TEXT "PLAYSTATION", 1242x218px, constraints left/top, fill #2C5CF4, effect [drop_shadow 5px offset 0 5 #2C5CF459], text [Play Bold, 180px], [heading]

Screen: Playstation / Home
- FRAME "Home", 375x810px, constraints left/top, radius 30px, fill #19181E
  - TEXT "Juegos", 69x20px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 20px]
  - INSTANCE "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
    - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
    - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
  - GROUP "Group 45", 333x134px, constraints left/top, radius 0/0/0/0px
    - RECTANGLE "image 5", 145x134px, constraints left/top, fill image(hash: ced6ef28f38a9db1c1853e5130f1c009c93901eb)
    - TEXT "Consola PlayStation 5", 178x21px, constraints left/top, fill #FFFFFF, text [Roboto Bold, 18px]
    - TEXT "Vive una nueva generación de juegos increíbles de PlayStatio", 169x60px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
    - GROUP "Group 2", 138.1x30px, constraints left/top, radius 10px
      - RECTANGLE "Rectangle 15", 138.1x30px, constraints left/top, radius 10px, fill #0072CE
      - TEXT "Más información", 138.1x30px, constraints left/top, fill #FFFFFF, text [Roboto Medium, 12px]
  - TEXT ">>", 22x20px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 20px]
  - GROUP "Group 65", 493x204px, constraints left/top, radius 0/0/0/0px
    - RECTANGLE "image 7", 493x204px, constraints left/top, fill image(hash: 44493196d4f2eacb69ca6e6c55c161154476dac1)
    - RECTANGLE "Rectangle 6", 384x204px, constraints left/top, radius 0/0/20/20px, fill gradient_linear(#00000000 0% | #000000 100%)
    - TEXT "Descubre más juegos excelentes", 249x50px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 25px], [heading]
  - INSTANCE "Organismos/Buscador", 375x44px, constraints left_right/top
    - GROUP "Busqqueda", 248x36px, constraints left/top, radius 0/0/0/0px
      - RECTANGLE "BUSCADOR", 248x36px, constraints center/top, radius 10px, stroke #2C5CF4 1px
      - GROUP "Search", 16.34x16px, constraints scale/scale
        - VECTOR "Rectángulo 176", 16.34x16px, constraints scale/scale
        - VECTOR "Trazado 99", 16.24x15.9px, constraints scale/scale, fill #FFFFFF
      - TEXT "Buscar Juego", 86.26x20px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
    - GROUP "Filter", 36x36px, constraints left/top, radius 0/0/0/0px [decorative, ~10 shapes]
    - VECTOR "Vector", 14.58x21px, constraints scale/scale, fill #0072CE
  - FRAME "Frame 7", 375x311px, horizontal pad 0 20 0 20px gap 18px align min/center sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group 1", 281.02x311px, constraints left/top, radius 0/0/0/0px, effect [drop_shadow 25px offset 0 14 #00000026]
      - RECTANGLE "Rectangle 1", 281.02x310.79px, constraints scale/scale, radius 20px, fill image(hash: 14211cbff922d6f9966b86cf946e1ba10353ff56)
      - RECTANGLE "Rectangle 6", 281x89px, constraints left/top, radius 0/0/20/20px, fill gradient_linear(#00000000 0% | #000000 100%)
      - TEXT "Horizon Forbidden West", 249x50px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 25px], [heading]
      - VECTOR "Vector", 20.07x18.75px, constraints scale/scale, fill #FFFFFF
    - GROUP "Group 2", 281.36x310.8px, constraints left/top, radius 0/0/0/0px, effect [drop_shadow 25px offset 0 14 #00000026]
      - RECTANGLE "Rectangle 1", 281.02x310.79px, constraints scale/scale, radius 20px, fill image(hash: 6150a00e176f90b3f339b6599bc1c486487cf052)
      - RECTANGLE "Rectangle 6", 280x89px, constraints left/top, radius 0/0/20/20px, fill gradient_linear(#00000000 0% | #000000 100%)
      - TEXT "MLB® The Show™ 22", 251x25px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 25px], [heading]
      - VECTOR "Vector", 20.07x18.75px, constraints scale/scale, fill #FFFFFF
    - GROUP "Group 3", 281.02x310.8px, constraints left/top, radius 0/0/0/0px, effect [drop_shadow 25px offset 0 14 #00000026]
      - RECTANGLE "Rectangle 1", 281.02x310.79px, constraints scale/scale, radius 20px, fill image(hash: 4fa3a44b1e8891e3184759eecf36f33e81f16861)
      - RECTANGLE "Rectangle 6", 280x89px, constraints left/top, radius 0/0/20/20px, fill gradient_linear(#00000000 0% | #000000 100%)
      - TEXT "Demon's Souls", 249x19px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 25px], [heading]
      - VECTOR "Vector", 20.07x18.75px, constraints scale/scale, fill #FFFFFF
  - RECTANGLE "Rectangle 39", 375x60px, constraints left/top, fill #C4C4C403
  - GROUP "Group 67", 328x39.96px, constraints left/top [decorative, ~5 shapes]
  - FRAME "Frame 9", 375x174px, horizontal pad 0 20 0 20px gap 17px align min/center sizing W:fixed H:fixed, constraints left/top [decorative, ~4 shapes]
  - INSTANCE "Menu", 357x71px, constraints left/top, fill #FFFFFF
    - VECTOR "Rectangle 20", 357x53px, constraints scale/scale, radius 10px, fill #FFFFFF
    - ELLIPSE "Ellipse 34", 49x49px, constraints scale/scale, fill #FFFFFF
    - VECTOR "image 2 (Traced)", 34x20px, constraints scale/scale, fill #2C5CF4
    - GROUP "Group 1", 20.08x25.6px, constraints scale/scale, radius 0/0/0/0px [decorative, ~17 shapes]
    - GROUP "Group 7", 27.53x26px, constraints scale/scale [decorative, ~7 shapes]
    - GROUP "Group 5", 30.75x37.5px, constraints left/top, radius 0/0/0/0px [decorative, ~15 shapes]
    - VECTOR "Vector 22", 26x24px, constraints left/top, radius 0/0/0/0px, fill gradient_linear(#7C9BFF 0% | #2C5CF4 100%)

Screen: Playstation / Inicio
- FRAME "Inicio", 375x810px, constraints left/top, radius 30px, fill #19181E
  - RECTANGLE "Rectangle", 375x791px, constraints scale/scale, radius 7.77px, fill Black, effect [drop_shadow 24.27px offset 0 0.97 #00000066]
  - VECTOR "Vector", 408x375px, constraints scale/scale, radius 0/0/0/0px, fill gradient_linear(#FFFFFF 0% | #FFFFFF00 100%)
  - GROUP "Group", 134.98x113.05px, constraints scale/scale
    - GROUP "Group", 134.98x113.05px, constraints scale/scale
      - VECTOR "Vector", 134.98x113.05px, constraints scale/scale, fill #FFFFFF
  - INSTANCE "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
    - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
    - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
  - FRAME "Boton Primario", 302x52px, horizontal pad 14 130 14 130px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 10px, fill #2C5CF4, effect [drop_shadow 5px offset 0 5 #2C5CF459]
    - TEXT "Entrar", 68x19px, constraints scale/scale, fill #FFFFFF, text [Roboto Medium, 16px]

Screen: Playstation / Menu
- FRAME "Menu", 375x812px, constraints left/top, radius 30px, fill #19181E
  - TEXT "Hola, Eliecer", 123x48px, constraints left/top, fill #FFFFFF, text [Poppins Bold, 24.4px], [heading]
  - GROUP "Group", 47.71x39.96px, constraints scale/scale
    - GROUP "Group", 47.71x39.96px, constraints scale/scale
      - VECTOR "Vector", 47.71x39.96px, constraints scale/scale, fill #FFFFFF
  - ELLIPSE "Ellipse 32", 57x57px, constraints left/top, fill image(hash: f3971aedfe7ae33b4f0daed6182c12c8fc07c28f)
  - INSTANCE "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
    - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
    - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
  - VECTOR "Vector", 18x20px, constraints scale/scale, fill #FFFFFF
  - FRAME "Frame 2", 145x297px, vertical pad 0 0 0 0px gap 30px align center/min sizing W:fixed H:fixed, constraints left/top
    - FRAME "Frame 1", 80.95x38px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Perfil", 80.95x38px, horizontal pad 0 0 0 0px gap 15.75px align center/center sizing W:fixed H:fixed, constraints left/top
        - INSTANCE "person_outline", 25.2x25.2px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 16.8x16.8px, constraints scale/scale, fill #FFFFFF
        - TEXT "Perfil", 40x38px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 16.8px]
    - FRAME "Frame 2", 100.64x36px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - FRAME "Favorites", 100.64x36px, horizontal pad 0 0 0 0px gap 15px align center/center sizing W:fixed H:fixed, constraints left/top
        - INSTANCE "favorite", 19.64x19.64px, constraints left/top, fill #FFFFFF
          - VECTOR "Vector", 16.36x15.01px, constraints scale/scale, fill #FFFFFF
        - TEXT "Favoritos", 66x36px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 16px]
    - VECTOR "image 2 (Traced)", 57x38px, constraints scale/scale, fill #2C5CF4
    - FRAME "Frame 4", 78.63x19.69px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 6", 20.63x19.69px, constraints left/top
        - VECTOR "Vector", 20.63x19.69px, constraints scale/scale, fill #FFFFFF
      - TEXT "Juegos", 48x18px, constraints left/top, fill #FFFFFF, text [Poppins SemiBold, 12px]
    - FRAME "Frame 5", 145x24px, horizontal pad 0 0 0 0px gap 10px align min/center sizing W:fixed H:fixed, constraints left/top
      - GROUP "Group 7", 24x24px, constraints left/top
        - GROUP "Settings button", 24x24px, constraints left/top
          - VECTOR "Settings", 24x24px, constraints scale/scale, fill #FFFFFF, effect icons
      - TEXT "Configuaracion", 111x18px, constraints left/top, fill #FFFFFF, text [Poppins SemiBold, 12px]

Screen: Playstation / Juego
- FRAME "Juego", 375x812px, constraints left/top, radius 30px, fill #000000
  - VECTOR "Vector", 20.07x18.75px, constraints scale/scale, fill #000000
  - FRAME "Frame 4", 126x44px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top
    - FRAME "tabler:world", 20x20px, constraints left/top, fill #FFFFFF [decorative, ~5 shapes]
    - TEXT "Juego offline activado", 76x24px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 12px]
  - FRAME "Frame 5", 124x32px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top
    - GROUP "Group", 16x12px, constraints scale/scale
      - VECTOR "Vector", 10x12px, constraints scale/scale, fill #FFFFFF
      - VECTOR "Vector", 6.94x5px, constraints scale/scale, fill #FFFFFF
      - VECTOR "Vector", 5x5px, constraints scale/scale, fill #FFFFFF
    - TEXT "1-4 jugadores", 78x12px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 12px]
  - TEXT "Activision", 96x18px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 17.84px]
  - GROUP "Group 64", 334x119px, constraints left/top, radius 0/0/0/0px
    - RECTANGLE "Rectangle 10", 334x119px, constraints left/top, radius 20px, fill #0070D1
    - RECTANGLE "image 4", 54x81px, constraints left/top, fill image(hash: 24ff5db16079b0d81fa15e75891ede13807fd607)
    - TEXT "Lenguaje, Referencia al alcohol, Travesuras cómicas, Violenc", 214x75px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 15px]
  - TEXT "US$69.99", 124x28px, constraints left/top, fill #0070D1, text [Gilroy ExtraBold, 27.75px], [heading]
  - RECTANGLE "image 9", 375x212px, constraints left/top, fill image(hash: f855ceda58973ecbc85a2bc6862c4649a3748fff)
  - INSTANCE "Organismos/Buscador", 375x44px, constraints left_right/top
    - GROUP "Busqqueda", 248x36px, constraints left/top, radius 0/0/0/0px
      - RECTANGLE "BUSCADOR", 248x36px, constraints center/top, radius 10px, stroke #2C5CF4 1px
      - GROUP "Search", 16.34x16px, constraints scale/scale
        - VECTOR "Rectángulo 176", 16.34x16px, constraints scale/scale
        - VECTOR "Trazado 99", 16.24x15.9px, constraints scale/scale, fill #FFFFFF
      - TEXT "Buscar Juego", 86.26x20px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
    - GROUP "Filter", 36x36px, constraints left/top, radius 0/0/0/0px [decorative, ~10 shapes]
    - VECTOR "Vector", 14.58x21px, constraints scale/scale, fill #2C5CF4
  - FRAME "Frame 3", 334x38px, horizontal pad 10 20 10 20px gap 10px align center/center sizing W:fixed H:fixed, constraints left/top, radius 20px, fill #FF6B00
    - TEXT "Comprar", 75x18px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 18px]
  - GROUP "Group 60", 739x131px, constraints left/top, radius 5px [decorative, ~8 shapes]
  - INSTANCE "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
    - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
    - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
  - GROUP "Group 51", 150x32px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Horizon Forbidden West™ PS4™ y PS5™", 134x32px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Group 52", 150x32px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Banda sonora y libro de ilustraciones", 134x32px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Group 54", 150x32px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Dos objetos de Bégimo Carja de élite", 134x32px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Group 55", 150x32px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Pieza de Asalto Mecánico", 134x32px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Group 56", 150x32px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Dos objetos de trueno Nora de élite", 134x32px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Group 57", 150x32px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Dos objetos de trueno Nora de élite", 134x32px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Group 53", 98x16px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Cómic digital", 82x16px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - RECTANGLE "Rectangle 39", 375x60px, constraints left/top, fill #C4C4C403
  - GROUP "Group 67", 328x39.96px, constraints left/top [decorative, ~5 shapes]
  - INSTANCE "Menu", 357x71px, constraints left/top, fill #FFFFFF
    - VECTOR "Rectangle 20", 357x53px, constraints scale/scale, radius 10px, fill #FFFFFF
    - ELLIPSE "Ellipse 34", 49x49px, constraints scale/scale, fill #FFFFFF
    - VECTOR "image 2 (Traced)", 34x20px, constraints scale/scale, fill #2C5CF4
    - GROUP "Group 1", 20.08x25.6px, constraints scale/scale, radius 0/0/0/0px [decorative, ~17 shapes]
    - GROUP "Group 7", 27.53x26px, constraints scale/scale [decorative, ~7 shapes]
    - GROUP "Group 5", 30.75x37.5px, constraints left/top, radius 0/0/0/0px [decorative, ~15 shapes]
    - VECTOR "Vector 22", 26x24px, constraints left/top, radius 0/0/0/0px, fill gradient_linear(#7C9BFF 0% | #2C5CF4 100%)

Screen: Playstation / Juego2
- FRAME "Juego2", 375x812px, constraints left/top, radius 30px, fill #000000
  - VECTOR "Vector", 20.07x18.75px, constraints scale/scale, fill #000000
  - RECTANGLE "image 9", 375x212px, constraints left/top
  - INSTANCE "Organismos/Buscador", 375x44px, constraints left_right/top
    - GROUP "Busqqueda", 248x36px, constraints left/top, radius 0/0/0/0px
      - RECTANGLE "BUSCADOR", 248x36px, constraints center/top, radius 10px, stroke #2C5CF4 1px
      - GROUP "Search", 16.34x16px, constraints scale/scale
        - VECTOR "Rectángulo 176", 16.34x16px, constraints scale/scale
        - VECTOR "Trazado 99", 16.24x15.9px, constraints scale/scale, fill #FFFFFF
      - TEXT "Buscar Juego", 86.26x20px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
    - GROUP "Filter", 36x36px, constraints left/top, radius 0/0/0/0px [decorative, ~10 shapes]
    - VECTOR "Vector", 14.58x21px, constraints scale/scale, fill #2C5CF4
  - INSTANCE "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
    - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
    - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
  - RECTANGLE "mlb-22-the-show-hero-banner-desktop-01-en-ps4-ps5-10jan22 1", 375x348px, constraints left/top, fill image(hash: 6150a00e176f90b3f339b6599bc1c486487cf052)
  - RECTANGLE "Rectangle 6", 375x198px, constraints left/top, fill gradient_linear(#00000000 0% | #000000 100%)
  - TEXT "MLB® The Show™ 22", 230x25px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 25px], [heading]
  - RECTANGLE "image 16", 140x145px, constraints left/top, fill image(hash: a59d3a3aa9c6c6ee890b815c8564367fae44a4e1)
  - RECTANGLE "image 17", 141.51x145px, constraints left/top, fill image(hash: eee11d4d9744f7cbe7e26e935991f1a9810aee8f)
  - GROUP "Group 52", 150x28px, constraints left/top
    - ELLIPSE "Ellipse 33", 10x10px, constraints left/top, fill #0072CE
    - TEXT "Crea y usa a múltiples jugadores de béisbol.", 134x28px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 11px]
  - GROUP "Group 55", 177x140px, constraints left/top, radius 0/0/0/0px
    - TEXT "Con el nuevo MLB® The Show™, hay más formas que nunca de que", 177x140px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 11px]
  - GROUP "Group 53", 168x28px, constraints left/top
    - ELLIPSE "Ellipse 33", 11.2x10px, constraints left/top, fill #0072CE
    - TEXT "¡Diamond Dynasty vuelve mejor que nunca!", 150.08x28px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 11px]
  - GROUP "Group 54", 168x28px, constraints left/top
    - ELLIPSE "Ellipse 33", 11.2x10px, constraints left/top, fill #0072CE
    - TEXT "Enfréntate a tus amigos con la función multiplataforma.", 150.08x28px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 11px]
  - TEXT "Ediciones", 87x23px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 20px]
  - RECTANGLE "Rectangle 39", 375x60px, constraints left/top, fill #C4C4C403
  - TEXT "Sony Interactive Entertainment", 175x12px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 12px]
  - RECTANGLE "image 18", 84x31px, constraints left/top, fill image(hash: dc1b003dd3c5134f534553f843066749e8974676)
  - GROUP "Group 67", 328x39.96px, constraints left/top [decorative, ~5 shapes]
  - FRAME "Frame 11", 375x444px, horizontal pad 10 10 10 10px gap 10px sizing W:fixed H:fixed, constraints left/top
    - FRAME "Scroll", 662x424px, horizontal pad 0 0 0 0px gap 18px align center/center sizing W:fixed H:fixed, constraints left/top
      - INSTANCE "Ficha 1", 286x424px, constraints left/top, effect [drop_shadow 4px offset 0 4 #0000001A]
        - RECTANGLE "Rectangle 37", 286x389.84px, constraints scale/scale, radius 10px, fill #FFFFFF
        - RECTANGLE "image 19", 286x259.91px, constraints scale/scale, radius 10px, fill image(hash: e04a8428ce5a6a3a184429ab8dc412bf1edb8a6a)
        - FRAME "Atomo/Estrella-Activa", 28.6x32.15px, constraints scale/scale, radius 10px, fill #FFFFFF
        - TEXT "Edición Estándar", 94x13.22px, constraints scale/scale, fill #000000, text [Gilroy ExtraBold, 12px]
        - GROUP "Group 51", 193x13.22px, constraints scale/scale, radius 10px
          - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
          - TEXT "Horizon Forbidden West™ PS4™ y PS5™", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
        - GROUP "Group 65", 193x13.22px, constraints scale/scale, radius 10px
          - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
          - TEXT "Cinco paquetes The Show", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
        - GROUP "Group 66", 193x13.22px, constraints scale/scale, radius 10px
          - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
          - TEXT "10 000 Stubs™", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
        - FRAME "Frame 3", 254x26.43px, horizontal pad 10 20 10 20px gap 10px align center/center sizing W:fixed H:fixed, constraints scale/scale, radius 10px, fill #FF6B00
          - TEXT "Comprar", 42x10px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 10px]
        - GROUP "PS5 logo", 52x17.62px, constraints scale/scale, radius 0/0/0/0px [decorative, ~4 shapes]
        - TEXT "US$59.99", 70x18px, constraints scale/scale, fill #0070D1, text [Gilroy ExtraBold, 16px]
      - INSTANCE "Ficha 2", 286x424px, constraints left/top, effect [drop_shadow 4px offset 0 4 #0000001A]
        - RECTANGLE "Rectangle 37", 286x389.84px, constraints scale/scale, radius 10px, fill #FFFFFF
        - RECTANGLE "image 19", 286x259.91px, constraints scale/scale, radius 10px, fill image(hash: a4a16fa4b637a8bc42077bde7957ed47011584b3)
        - FRAME "Atomo/Estrella-Activa", 28.6x32.15px, constraints scale/scale, radius 10px, fill #FFFFFF
        - TEXT "Edición Estándar", 94x13.22px, constraints scale/scale, fill #000000, text [Gilroy ExtraBold, 12px]
        - GROUP "Group 51", 193x13.22px, constraints scale/scale, radius 10px
          - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
          - TEXT "Horizon Forbidden West™ PS4™ y PS5™", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
        - GROUP "Group 65", 193x13.22px, constraints scale/scale, radius 10px
          - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
          - TEXT "Cinco paquetes The Show", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
        - GROUP "Group 66", 193x13.22px, constraints scale/scale, radius 10px
          - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
          - TEXT "10 000 Stubs™", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
        - FRAME "Frame 3", 254x26.43px, horizontal pad 10 20 10 20px gap 10px align center/center sizing W:fixed H:fixed, constraints scale/scale, radius 10px, fill #FF6B00
          - TEXT "Comprar", 42x10px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 10px]
        - GROUP "PS5 logo", 52x17.62px, constraints scale/scale, radius 0/0/0/0px [decorative, ~4 shapes]
        - TEXT "US$59.99", 70x18px, constraints scale/scale, fill #0070D1, text [Gilroy ExtraBold, 16px]
  - INSTANCE "Menu", 357x71px, constraints left/top, fill #FFFFFF
    - VECTOR "Rectangle 20", 357x53px, constraints scale/scale, radius 10px, fill #FFFFFF
    - ELLIPSE "Ellipse 34", 49x49px, constraints scale/scale, fill #FFFFFF
    - VECTOR "image 2 (Traced)", 34x20px, constraints scale/scale, fill #2C5CF4
    - GROUP "Group 1", 20.08x25.6px, constraints scale/scale, radius 0/0/0/0px [decorative, ~17 shapes]
    - GROUP "Group 7", 27.53x26px, constraints scale/scale [decorative, ~7 shapes]
    - GROUP "Group 5", 30.75x37.5px, constraints left/top, radius 0/0/0/0px [decorative, ~15 shapes]
    - VECTOR "Vector 22", 26x24px, constraints left/top, radius 0/0/0/0px, fill gradient_linear(#7C9BFF 0% | #2C5CF4 100%)

Screen: Playstation / Catalogo2
- FRAME "Catalogo2", 375x812px, constraints left/top, radius 30px, fill #000000
  - VECTOR "Vector", 20.07x18.75px, constraints scale/scale, fill #000000
  - INSTANCE "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
    - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
      - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
    - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
    - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
      - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
      - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
      - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
    - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
    - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000
  - RECTANGLE "Rectangle 39", 375x60px, constraints left/top, fill #C4C4C403
  - FRAME "Frame 10", 370x1129px, vertical pad 0 20 0 20px gap 17px align min/center sizing W:fixed H:fixed, constraints left/top [decorative, ~12 shapes]
  - RECTANGLE "Rectangle 40", 375x60px, constraints left/top, fill #C4C4C403
  - TEXT "Todos los Juegos", 159x20px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 20px]
  - GROUP "Group 67", 328x39.96px, constraints left/top [decorative, ~5 shapes]
  - INSTANCE "Menu", 357x71px, constraints left/top, fill #FFFFFF
    - VECTOR "Rectangle 20", 357x53px, constraints scale/scale, radius 10px, fill #FFFFFF
    - ELLIPSE "Ellipse 34", 49x49px, constraints scale/scale, fill #FFFFFF
    - VECTOR "image 2 (Traced)", 34x20px, constraints scale/scale, fill #2C5CF4
    - GROUP "Group 1", 20.08x25.6px, constraints scale/scale, radius 0/0/0/0px [decorative, ~17 shapes]
    - GROUP "Group 7", 27.53x26px, constraints scale/scale [decorative, ~7 shapes]
    - GROUP "Group 5", 30.75x37.5px, constraints left/top, radius 0/0/0/0px [decorative, ~15 shapes]
    - VECTOR "Vector 22", 26x24px, constraints left/top, radius 0/0/0/0px, fill gradient_linear(#7C9BFF 0% | #2C5CF4 100%)

Screen: UI Kits / Organismos/Buscador
- COMPONENT "Organismos/Buscador", 375x44px, constraints left_right/top
  - GROUP "Busqqueda", 248x36px, constraints left/top, radius 0/0/0/0px
    - RECTANGLE "BUSCADOR", 248x36px, constraints center/top, radius 10px, stroke #2C5CF4 1px
    - GROUP "Search", 16.34x16px, constraints scale/scale
      - VECTOR "Rectángulo 176", 16.34x16px, constraints scale/scale
      - VECTOR "Trazado 99", 16.24x15.9px, constraints scale/scale, fill #FFFFFF
    - TEXT "Buscar Juego", 86.26x20px, constraints left/top, fill #FFFFFF, text [Roboto Regular, 14px]
  - GROUP "Filter", 36x36px, constraints left/top, radius 0/0/0/0px [decorative, ~10 shapes]
  - VECTOR "Vector", 14.58x21px, constraints scale/scale, fill #2C5CF4

Screen: UI Kits / Menu
- COMPONENT "Menu", 357x71px, constraints left/top, fill #FFFFFF
  - VECTOR "Rectangle 20", 357x53px, constraints scale/scale, radius 10px, fill #FFFFFF
  - ELLIPSE "Ellipse 34", 49x49px, constraints scale/scale, fill #FFFFFF
  - VECTOR "image 2 (Traced)", 34x20px, constraints scale/scale, fill #2C5CF4
  - GROUP "Group 1", 20.08x25.6px, constraints scale/scale, radius 0/0/0/0px [decorative, ~17 shapes]
  - GROUP "Group 7", 27.53x26px, constraints scale/scale [decorative, ~7 shapes]
  - GROUP "Group 5", 30.75x37.5px, constraints left/top, radius 0/0/0/0px [decorative, ~15 shapes]
  - VECTOR "Vector 22", 26x24px, constraints left/top, radius 0/0/0/0px, fill gradient_linear(#7C9BFF 0% | #2C5CF4 100%)

Screen: UI Kits / Organismo/Bar
- FRAME "Organismo/Bar", 360x44px, constraints left_right/top
  - TEXT "Time", 54x18px, constraints left/center, fill black, text [Roboto Regular, 15px]
  - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
    - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke black 1px, opacity 35%
    - VECTOR "Cap", 1.33x4px, constraints right/center, fill black, opacity 40%
    - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill black
  - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill black
  - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill black

Screen: UI Kits / Organismo/Bar
- COMPONENT "Organismo/Bar", 375x44px, constraints left_right/top, fill #FFFFFF
  - FRAME "fa6-solid:x", 384x512px, constraints left/top, fill #FFFFFF
    - VECTOR "Vector", 384.01x448px, constraints scale/scale, fill #FFFFFF
  - TEXT "Time", 54x18px, constraints left/center, fill #000000, text [Roboto Regular, 15px]
  - GROUP "Battery", 24.33x11.33px, constraints left/top, radius 0/0/0/0px, fill #FFFFFF
    - RECTANGLE "Border", 22x11.33px, constraints right/center, radius 2.67px, stroke #000000 1px, opacity 35%
    - VECTOR "Cap", 1.33x4px, constraints right/center, fill #000000, opacity 40%
    - RECTANGLE "Capacity", 18x7.33px, constraints right/center, radius 1.33px, fill #000000
  - BOOLEAN_OPERATION "Wifi", 15.33x11px, constraints right/top, fill #000000
  - BOOLEAN_OPERATION "Cellular Connection", 17x10.67px, constraints right/top, fill #000000

Screen: UI Kits / Organismos/Buscador
- FRAME "Organismos/Buscador", 360x44px, constraints left_right/top
  - GROUP "Busqqueda", 281x36px, constraints left/top, radius 0/0/0/0px
    - RECTANGLE "BUSCADOR", 281x36px, constraints center/top, radius 10px, fill #C4C4C480
    - GROUP "Search", 17.77x16px, constraints scale/scale
      - VECTOR "Rectángulo 176", 17.77x16px, constraints scale/scale
      - VECTOR "Trazado 99", 17.66x15.9px, constraints scale/scale, fill #00000033
    - TEXT "Buscar Juego", 97.74x20px, constraints left/top, fill #00000033, text [Roboto Regular, 14px]
  - GROUP "Filter", 36x36px, constraints left/top, radius 0/0/0/0px [decorative, ~10 shapes]

Screen: UI Kits / Card Producto
- COMPONENT "Card Producto", 286x424px, constraints left/top, effect [drop_shadow 4px offset 0 4 #0000001A]
  - RECTANGLE "Rectangle 37", 286x389.84px, constraints scale/scale, radius 10px, fill #FFFFFF
  - RECTANGLE "image 19", 286x259.91px, constraints scale/scale, radius 10px, fill image(hash: e04a8428ce5a6a3a184429ab8dc412bf1edb8a6a)
  - FRAME "Atomo/Estrella-Activa", 28.6x32.15px, constraints scale/scale, radius 10px, fill #FFFFFF
  - TEXT "Edición Estándar", 94x13.22px, constraints scale/scale, fill #000000, text [Gilroy ExtraBold, 12px]
  - GROUP "Group 51", 193x13.22px, constraints scale/scale, radius 10px
    - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
    - TEXT "Horizon Forbidden West™ PS4™ y PS5™", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
  - GROUP "Group 65", 193x13.22px, constraints scale/scale, radius 10px
    - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
    - TEXT "Cinco paquetes The Show", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
  - GROUP "Group 66", 193x13.22px, constraints scale/scale, radius 10px
    - ELLIPSE "Ellipse 33", 6.67x7.34px, constraints scale/scale, fill #0072CE
    - TEXT "10 000 Stubs™", 182x13.22px, constraints scale/scale, fill #000000, text [Roboto Regular, 10px]
  - FRAME "Frame 3", 254x26.43px, horizontal pad 10 20 10 20px gap 10px align center/center sizing W:fixed H:fixed, constraints scale/scale, radius 10px, fill #FF6B00
    - TEXT "Comprar", 42x10px, constraints left/top, fill #FFFFFF, text [Gilroy ExtraBold, 10px]
  - GROUP "PS5 logo", 52x17.62px, constraints scale/scale, radius 0/0/0/0px [decorative, ~4 shapes]
  - TEXT "US$59.99", 70x18px, constraints scale/scale, fill #0070D1, text [Gilroy ExtraBold, 16px]


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
