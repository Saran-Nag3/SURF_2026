---
name: coca-cola-app-community
source: Coca-Cola App (Community)
kind: design-system-context
---

# coca-cola - Design System

## Overview

Mobile app design extracted from five Figma pages: Project, Logo_v0, Logo_v1, MockUp_1, and MockUp_2. Screens use a 375px-wide mobile layout with rounded outer frames, product browsing, product details, login, and sign-in flows.

## Design language

- Strong Coca-Cola red accent: `#ED1B24`.
- High-contrast black, white, and light-gray surfaces.
- Serif italic typography for product names and editorial headings.
- Bold sans-serif typography for prices, primary headings, and actions.
- Rounded mobile containers and pill-shaped controls.
- Product browsing uses large circular graphic areas, product imagery, ratings, prices, and red “More” actions.
- Authentication screens use large rounded buttons, centered content, and image-led branding.
- Product detail screens use a white bottom navigation bar over an `#E6E6E5` background.

## Color palette

Ranked by observed usage:

| Color | Uses | Primary usage |
|---|---:|---|
| `#FFFFFF` | 94 | Buttons, cards, navigation bars, surfaces, light text |
| `#ED1B24` | 87 | Primary actions, accents, active controls, links |
| `#000000` | 77 | Main text, icons, graphic circles, dark surfaces |
| `#DADADA` | 24 | Neutral UI elements |
| `#2C2929` | 10 | Secondary dark text |
| `#EAEAEA` | 10 | Light neutral surfaces |
| `#E6E6E5` | 6 | Home and product page backgrounds |
| `#333333` | 4 | Quantity controls and secondary text |
| `#404870` | 4 | Search icon strokes |
| `#F1F1F5` | 4 | Light neutral UI areas |

## Type scale

Observed text styles:

| Size | Font | Weight/style | Usage |
|---:|---|---|---|
| 48px | Merriweather | Bold | Large headings and plus symbols |
| 36px | Libre Franklin | Bold | Prices and large sign-in heading |
| 28px | Merriweather | Italic | Category headings |
| 24px | Merriweather | Italic | Product detail heading |
| 22px | Libre Franklin | Bold / Regular | “Ingredients” and “Nutrition” headings |
| 20px | Circular Std | Bold | Primary button labels and authentication actions |
| 20px | Merriweather | Italic | Product names, descriptions, ratings |
| 18px | Avenir LT Pro | Roman | Search placeholder |
| 18px | Gilroy | SemiBold | Quantity value |
| 15px | Circular Std | Bold / Book | Secondary actions and supporting authentication text |
| 15px | Euclid Flex | EuclidFlexMedium | Product actions and “More” links |
| 13px | Euclid Flex | EuclidFlexMedium | Small product navigation actions |

## Spacing scale

_None found in source._

## Radius scale

No radius tokens were defined. Observed radii:

- `16px`: outer home and product frames.
- `24px`: authentication buttons and some mobile frames.
- `25px`: device-frame mockups.
- `30px`: authentication and outer mobile frames.
- `40px`: search field.
- `50px`: add-to-cart button.
- `100px`: home indicator.
- `0px`: square or unrounded groups and bars.

## Elevation & effects

No local effect styles were defined.

Observed effects:

- Authentication buttons: `drop_shadow`, `60px` blur, offset `0 16px`.
- “Get started” label: `drop_shadow`, `4px` blur, offset `0 4px`.
- Add-to-cart button: `layer_blur`, `15px`, with a secondary blurred red layer at `54%` opacity.
- Home indicator: `10%` opacity.
- Product and authentication surfaces use rounded clipping rather than a documented elevation system.

## Components

Only one component family was extracted:

### Ellipse 10

- Size: `700px × 700px`.
- Fill: `#FFFFFF`.
- Used as a large circular mask/component; the nested ellipse instance uses `#000000`.

Other repeated UI patterns are present as grouped layers rather than extracted component families:

- Authentication buttons: `305px × 58px`, `24px` radius.
- Add-to-cart button: `192px × 45px`, `50px` radius.
- Search field: `246.18px × 60px`, `40px` radius.
- Bottom navigation bar: `375px × 73px`, white fill.
- Quantity control: `99px × 24px`.
- Rating group: `78px × 14px`.
- Avatar group: `56px × 56px`.
- Product imagery: approximately `104.56px × 208px` in product cards and `180px × 358.09px` on product detail views.

## Screen patterns

### Home / product browsing

- Canvas: `375px × 818px`.
- Background: `#E6E6E5`.
- Top area includes a menu icon, Coca-Cola logo image, avatar, search field, and toggle icon.
- Category heading uses Merriweather Italic at `28px`.
- Product cards combine large `216px` black circles, `44px` accent circles, product imagery, ratings, italic product names, and `36px` bold prices.
- “More” uses `#ED1B24` with a right-pointing chevron.

### Product detail

- Canvas: `375px × 818px`.
- Background: `#E6E6E5`.
- White bottom navigation bar is `375px × 73px`.
- Content includes back navigation, product name, price, rating, rating value, description, “Ingredients,” “Nutrition,” favorite control, quantity control, and add-to-cart action.
- Add-to-cart control is red with white iconography and white Euclid Flex text.

### Login landing

- Canvas: `375px × 818px`; one variant is `375px × 811px`.
- Dark `#000000` frame with a large image area.
- Primary “Get started” button: `305px × 58px`, red fill, `24px` radius, white Circular Std Bold `20px` label.
- Secondary “Login” button: same dimensions and radius, white fill, red Circular Std Bold `20px` label.
- Supporting copy uses white Circular Std Book at `15px`.

### Sign-in

- Canvas: `375px × 818px`.
- Background: `#E6E6E5`.
- Heading “Sign in” uses `#2C2929`, Circular Std Bold at `36px`.
- Social, email, and submission controls are `305px × 58px` with `24px` radius.
- White buttons use dark or red labels; the submission button uses `#ED1B24` with white text.
- Supporting copy uses Circular Std Book at `15px`.

### Brand and product imagery

- Coca-Cola logo and product shots are image fills rather than color-only components.
- Large circular compositions use `#000000`, `#ED1B24`, and `#FFFFFF`.
- Mockup device frames use black strokes, `8px` stroke width, and `25px` radius.

## Notes for implementers

- Build for a `375px` mobile viewport and preserve the `818px` screen composition where applicable.
- Use only the extracted palette; prioritize `#ED1B24` for primary actions and active accents.
- Use `#E6E6E5` for home and product detail backgrounds.
- Keep primary buttons at `305px × 58px` with a `24px` radius.
- Keep the add-to-cart control at `192px × 45px` with a `50px` radius.
- Use Merriweather Italic for product and category text, Libre Franklin Bold for prices and major utility headings, and Circular Std for authentication controls.
- Treat product shots, logos, avatars, ratings, navigation icons, and social logos as image or decorative assets; no additional component families were extracted.
- Do not assume spacing tokens, design-token aliases, local text styles, local effect styles, grid styles, motion tokens, or variable collections; none were found in the source.
