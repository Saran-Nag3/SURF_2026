---
name: app-de-recetas-pantry-pal-community
source: App de Recetas Pantry Pal (Community)
kind: design-system-context
---

# pantry - Design System

## Overview

- Recipe and pantry community app design system for mobile layouts.
- Primary mobile frame references: `360px` wide; key screens use `360x807px`, `360x800px`, and components sized for this width.
- Main product areas: Home, recipes, trends, search, favorites, pantry, profile, account actions, and recipe details.
- No local variable collections were found.

## Design language

- Friendly recipe-focused interface using green primary colors, pale pink backgrounds, white surfaces, and orange accent styling.
- Use Roboto for interface and content text. Use Nunito Bold for the logo wordmark.
- Use green for primary actions and pantry-related surfaces:
  - Primario Light: `#C8E6C9`
  - Primario: `#4CAF50`
  - Primario Dark: `#388E3C`
- Use `#FFF3F3` for app backgrounds and `#FF5722CC` as the accent.
- Use white for text/icons on colored surfaces and for component fills.
- Navigation is organized around Home, Alacena, Favoritos, and related recipe/trend destinations.
- Components commonly provide explicit variants for active/inactive, filled/unfilled, and content-specific states.

## Color palette

Ranked by recorded usage where available:

| Color | Usage | Source roles |
|---|---:|---|
| `#020202` | 429 | Grey / 900 |
| `#FF5722CC` | 393 | Acento |
| `#C8E6C9` | 373 | Textos primario, Primario Light |
| `#FFFFFF` | 254+ | Texto-e-Iconos, White, raw white |
| `#3D3D3D` | 7 | Texto |
| `#4CAF50` | 128 | Primario |
| `#388E3C` | 89 | Primario Dark |
| `#FFF3F3` | 33 | Fondos |
| `#E0E0E0` | 13 | Grey / 300 |
| `#000000` | 1494 | Raw unstyled color |
| `#D9D9D9` | 366 | Raw unstyled color |
| `#CECBCB` | 65 | Raw unstyled color |
| `#DADADA` | 65 | Raw unstyled color |
| `#8D8D8A` | 18 | Raw unstyled color |

- Prefer named color roles when available over raw colors.
- White is used for text/icons, surfaces, separators, and several component fills.
- Raw grayscale colors appear in wireframe and unstyled source elements.

## Type scale

Use the named typography tokens where applicable:

| Token | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Texto Común | Roboto | 400 | `12px` | auto | `0px` |
| texto lista ingredientes | Roboto | 400 | `15px` | `24px` | `0px` |
| Titulo | Roboto | 800 | `20px` | auto | `0px` |
| Subtitulos | Roboto | 400 | `20px` | auto | `0px` |
| textAppearanceHeadline5 | Roboto | 400 | `24px` | `32px` | `0px` |
| textAppearanceButton | Roboto | 500 | `14px` | `24px` | `1.5px` |
| Texto Negrita | Roboto | 700 | `12px` | auto | `0px` |
| texto flitros | Roboto | 500 | `10px` | auto | `0px` |
| Texto Logo | Nunito | 700 | `20px` | auto | `0px` |
| Botones | Roboto | 400 | `14px` | auto | `0px` |

Additional raw source sizes: `8px`, `10px`, `11px`, `12px`, `13px`, `14px`, `16px`, `20px`, `24px`, `36px`, `48px`, `96px`, and `130px`.

Raw families include Roboto, Inter, and Dancing Script. The highest recorded raw usage is Roboto Regular `24px` with `338 uses`; the largest hierarchy sizes are Dancing Script SemiBold `130px` and Inter Regular `96px`.

## Spacing scale

- No spacing variables were found.
- Recorded layout spacing values:
  - Material grid: `8px`, section `4px`, gutter `0px`.
  - Four-column grid: section `76px`, gutter `8px`.
  - `lista ingrediente fondo verde`: padding `2px 13px 2px 13px`, gap `82px`.
  - `Ingrediente`: padding `0 10px 0 10px`, gap `60px`.
  - `Carousel`: gap `13px`.
  - `Recetas`: gap `5px`.
  - `boton cerrar sesion`: gap `8px`.
- Preserve fixed component dimensions where specified rather than introducing new spacing values.

## Radius scale

_None found in source._

## Elevation & effects

- `Sombras alertas`: inner shadow, offset `0px -4px -6px`, color `#388E3C`.
- `Sombra Iconos Menu`: drop shadow, offset `1px 2px 2px`, color `#FFFFFF`.
- No additional elevation or motion tokens were found.
- Wireframe elements include `1px` black strokes using `#000000`.

## Components

Use only the following component families and their recorded dimensions/variants.

### Navigation and shell

- `Encabezado`: `360x68px`.
- `Footer`: `360x68px`; variants `Alacena`, `Default`, `Favoritos`, `Home`.
- `Boton Alacena`: `61x49px`; fill `#FFFFFF`.
- `Boton Inicio`: `61x47px`; fill `#FFFFFF`.
- `Component 3`: `61x48px`; fill `#FFFFFF`.
- `home`: `53.5x53.5px`; variant `activo`.
- `icono heladera desactivado`: `46.5x46.5px`.
- `icono menu hamburguesa`: `47.53x31.96px`.
- `Logo`: `129x171px`.
- `Logo con letra`: `134.43x145px`; text `Texto Logo`.
- `Logo icono Android`: `60x60px`.

### Search, filters, and actions

- `Input`: `328x51px`; variants `Default`, `Usuario lleno`, `contraseña no visible`, `contraseña visible`.
- `Boton Buscar`: `328x75px`; text `Subtitulos`.
- `Boton`: `230x40px`; variants `Default`, `verde`; text `Subtitulos`.
- `Boton Logo Google`: `230x40px`; variants `Facebook`, `Google`.
- `boton filro activo`: `76x33px`; variants `activo`, `desactivo`; text `texto flitros`.
- `forma Boton filtro`: `76x33px`; variants `activo`, `desactivo`; fill `#FFFFFF`.
- `boton Guardar`: `129x36px`; text `Titulo`.
- `boton volver`: `100x38px`; text `Titulo`.
- `boton cerrar sesion`: `181x36px`; gap `8px`; text `Titulo`.
- `add`: `24x24px`.
- `buscar`: `38x35px`.
- `save`: `45x42px`.
- `salir`: `44x42px`.
- `flecha atras`: `45x42px`.
- `icono X`: `23.48x23.48px`.
- `Icono select`: `21.44x21.78px`.

### Recipes, pantry, and content

- `Tarjeta Receta`: `328x170px`; text `Texto Común`, `Titulo`.
- `Tarjeta Receta Like`: `328x130.09px`; text `Texto Común`, `Titulo`.
- `Recetas`: `140x42px`; gap `5px`; text `Titulo`.
- `Tendencias`: `160x42px`; text `Titulo`.
- `Carousel`: `905x154px`; gap `13px`.
- `Carousel de tendencias`: `287x154px`; text `Titulo`.
- `Portada video`: `360x240px`; fill `#FFFFFF`.
- `circulo de play`: `80x80px`.
- `Lista ingredientes`: `325x380px`; variants `Default`, `Variant2`; text `texto lista ingredientes`, `Subtitulos`, `Titulo`.
- `lista ingrediente fondo verde`: `279x28px`; padding `2px 13px 2px 13px`; gap `82px`; fill `#C8E6C9`; variants `Default`, `Variant2`.
- `Ingrediente`: `268x24px`; padding `0 10px 0 10px`; gap `60px`; text `texto lista ingredientes`.
- `subtitulo clases ingredientes`: `280x16px`; fill `#FFFFFF`; text `Subtitulos`.
- `Lista vacia`: `325x282px`; fill `#FFFFFF`; text `Titulo`.
- `ultima recta vista`: `247x42px`; text `Titulo`.
- `Component 4`: `281x54px`; fill `#FFFFFF`.
- `Component 6`: `306x31px`; fill `#FFFFFF`; variants `Tipo inactivo`, `para los demas`, `tipo activo`; text `Subtitulos`.
- `separador`: `300x0px`; fill `#FFFFFF`.

### Profile, feedback, and icons

- `Usuario`: `92x92px`; variants `Default`, `Fernando`, `Maria`, `Pablo`.
- `tarjeta opinion`: `306x84px`; text `Texto Negrita`, `Texto Común`.
- `Icono Corazon`: `50.64x51.55px`; variants `Inactivo`, `activo`, `corazon fill`, `de lista de favoritos`, `like receta`, `para nav bar`.
- `🦆 icon "star"`: `42x42px`; variants `Default`, `con borde`, `fill`.
- `iconos compartir`: `61x47px`; fill `#FFFFFF`; variants `Copiar enlace`, `facebook`, `instagram`, `messenger`, `twitter X`, `whatsapp`; text `Texto Negrita`.
- `compartir`: `157x44px`; text `Titulo`.
- `escribir comentario`: `247x42px`; text `Titulo`.
- `visibility`: `24.68x24px`; variants `Default`, `Variant2`.
- `Icono historial`: `42x42px`.
- `photo_camera`: `42x42px`.
- `Icono Ayuda`: `42x42px`.
- `Icono terminos y condiciones`: `42x42px`.
- `Icono arriba`: `32.24x19px`.
- `icono abajo`: `32.24x19px`.
- `Icono borrar`: `46x49px`.
- `Icono editar`: `42x42px`.
- `icono compartir`: `45x42px`.
- `icono receta`: `42.17x42px`.
- `icono tendencias`: `37.63x42px`.
- `scroll up`: `54x54px`.
- `alertas`: `360x188px`; variants `Default`, `salida`; text `Subtitulos`.
- `Charger`: `33x33px`; fill `#FFFFFF`; variants `Default`, `Variant2`, `Variant3`, `Variant4`, `Variant5`, `Variant6`, `Variant7`, `Variant9`.
- `android`: `360x232px`; fill `#FFFFFF`; text styles `Roboto Regular 24px`, `textAppearanceHeadline5`, `textAppearanceButton`.

## Screen patterns

- **Home:** mobile `360x807px` composition with header/navigation groups, recipe/content blocks, image placeholders, and text summaries.
- **Recipe detail:** mobile `360x800px` pattern for recipe cover, navigation, ingredients, and steps.
- **Search flow:** search input and `Boton Buscar`, followed by recipe results and multi-select filter controls.
- **Trends:** image-led recipe trend carousels using `Carousel de tendencias`, `Carousel`, `Tarjeta Receta`, and star/heart actions.
- **Pantry:** ingredient lists using `Lista ingredientes`, `Ingrediente`, `lista ingrediente fondo verde`, and ingredient category subtitles.
- **Favorites:** recipe cards with `Tarjeta Receta Like` and `Icono Corazon` variants.
- **Profile and account:** `Usuario`, edit/help/terms/history icons, save/back actions, logout confirmation, and alert states.
- **Bottom navigation:** `Footer` variants for `Home`, `Alacena`, and `Favoritos`, supported by fixed-size navigation buttons and icons.
- **Wireframes:** source includes schematic flows for Home, Alacena, Profile, Search, Trends, Favorites, recipe results, filters, logout, help, account editing, and recipe detail.

## Notes for implementers

- Do not create new tokens for spacing, radius, motion, or elevation; none were defined beyond the concrete values listed.
- Treat the `360px` mobile width as the primary layout reference.
- Use exact component dimensions when a component spec provides them.
- Use the named typography tokens for production UI; raw Inter and wireframe typography belong to extracted source material unless the target screen explicitly requires them.
- Keep active/inactive behavior aligned with the component variants rather than changing dimensions.
- Use `#020202` for the most-used dark text/icon treatment, while `#3D3D3D` is the named text color.
- Preserve white fills and white text/icon treatments where specified; do not substitute them with another neutral.
- Use `#C8E6C9`, `#4CAF50`, and `#388E3C` for the primary green hierarchy, and `#FF5722CC` for accent emphasis.
