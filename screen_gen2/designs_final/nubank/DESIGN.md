---
name: app-nubank-desktop-community
source: App Nubank - Desktop (Community)
kind: design-system-context
---

# nubank - Design System

## Overview

- Desktop Nubank app design system extracted from the Figma file `App Nubank - Desktop (Community)`.
- Source page: `All pages (2): 🖼️ Thumbnail, 👨‍💻 Design`.
- Primary UI contexts: dashboard, Shopp, Pix, login, notifications, profile, blog, loans, investments, cashback, and account actions.
- No local variable collections, spacing variables, radius variables, or motion variables were found.
- Overview grid: 12 columns, 100.67px section, 32px gutter, stretch alignment.

## Design language

- Typography is predominantly Gellix, using Light, Regular, Medium, SemiBold, and Bold weights.
- Interfaces combine dark Nubank surfaces with white text, purple accents, pale backgrounds, and high-contrast black surfaces.
- Cards and banners commonly use 16px radius.
- Circular controls use 100px radius.
- Large dashboard panels use generous padding and spacing, including 80px padding and 64px gaps.
- Interaction states are represented through component variants such as Default, Hover, Click, Loading, Sucesso, Focus, Selecionado, Ativada, and Desativada.
- Notification overlays use dark purple surfaces with drop shadows.
- Glow hover effect: drop shadow 20px offset 0 0 using `#BB87FF4D`.
- Background blur effect: 20px on `ArrowRight`.

## Color palette

Ranked by raw usage count where available:

| Color | Usage | Token / role |
|---|---:|---|
| `#FFFFFF` | 340 | White, primary light surface and text |
| `#F8FCFF` | 80 | Very light background |
| `#000000` | 78 | Black, primary dark surface |
| `#9747FF` | 65 | Purple accent |
| `#421D5D` | 39 | Dark purple control surface |
| `#EAEAFF` | 36 | Pale lavender surface |
| `#0D0D0D` | 32 | Near-black surface |
| `#7D78D6` | 28 | Muted purple accent |
| `#506ECE` | 24 | Blue accent |
| `#D9D9D9` | 23 | Light neutral |
| `#1F1F1F` | 22 | Dark neutral |
| `#89CBED` | 20 | Light blue accent |
| `#E47EBF` | 20 | Pink accent |
| `#191919CC` | 19 | Translucent dark surface |
| `#23E844` | 12 | Green status/accent |
| `#4D86B1` | 12 | Muted blue |
| `#FF0606` | 12 | Red status/accent |
| `#FFFFFF1A` | 12 | Translucent white |
| `#191919BF` | 10 | Translucent dark |
| `#25799E` | 10 | Blue accent |
| `#2E054B99` | 10 | Translucent dark purple |
| `#90909000` | 10 | Transparent gray |
| `#FFFFFF99` | 10 | Translucent white |
| `#080808` | 9 | Near-black |
| `#0F0F0F` | 9 | Near-black |
| `#19191933` | 9 | Translucent dark |
| `#2C2C2CB2` | 9 | Translucent dark |
| `#00000000` | 8 | Transparent |
| `#0158A7` | 8 | Blue |
| `#EFEEFE` | 8 | Pale lavender |
| `#743406` | 6 | Brown accent |
| `#991040` | 6 | Burgundy accent |
| `#EBE9E9` | 6 | Light neutral |
| `#FF9101` | 6 | Orange accent |

Named color tokens:

- `04`: `#2E054B`
- `50`: `#FFFFFF`
- `200`: `#DADDDC`
- `05`: `#BE87FF`
- `400`: `#909090`
- `700`: `#0F0F0F`
- `Roxo 01 - Nubank`: `#820AD1`
- `250`: `#C8C2C2`
- `03`: `#4E0578`
- `All Black`: `#000000`
- `500`: `#000000`

Additional colors used in components:

- `#E1F2FA`, `#BB87FF4D`, `#00000040`

## Type scale

Primary typeface: Gellix.

| Size | Weight / family | Source style or usage |
|---:|---|---|
| 96px | Gellix Medium | Large display text |
| 56px | Gellix SemiBold | Large display text |
| 50.68px | Gellix SemiBold | Gifts cards |
| 48px | Gellix Medium | Large headings |
| 48px | Diagramm Regular | Diagram/chart text |
| 46px | Gellix SemiBold | Card headings |
| 42px | Gellix Medium | Dashboard panel text |
| 40px | Gellix Medium | Large headings |
| 40px | Gellix SemiBold | Large card text |
| 40px | Gellix Light | `Número painel` |
| 32px | Gellix Medium | Login and headings |
| 30.61px | Diagramm Regular | Diagram/chart text |
| 30px | Gellix Medium | `P - Dashboard` |
| 30px | Gellix Light | `P Light - Dashboard` |
| 28.8px | Gellix Light | Dashboard supporting text |
| 28px | Gellix Medium | Dashboard text |
| 26px | Gellix Medium | Dashboard text |
| 26px | Gellix Regular | Login text |
| 24px | Gellix Medium | `P2 - Dashboard`, blog headings |
| 24px | Gellix Regular | Login and banner text |
| 20.25px | Gellix Medium | Profile text |
| 20px | Gellix Medium | Dashboard headings |
| 20px | Gellix Regular | Login and supporting text |
| 20px | Gellix SemiBold | Section text |
| 20px | Gellix Bold | `H Sessão Bold - Dashboard` |
| 20px | Gellix Light | `P3 - Dashboard` |
| 18px | Gellix Regular | Side panel and supporting text |
| 18px | Gellix Light | Supporting text |
| 16px | Gellix Medium | Dashboard text |
| 16px | Gellix Regular | Supporting text |
| 16px | Gellix Light | `P 5 - Dashboard` |
| 16px | Gellix SemiBold | `P5 - Semi bold` |
| 15.71px | Gellix SemiBold | `Abrir conta pJ` |
| 14px | Gellix Regular | Labels and controls |
| 14px | Gellix Light | Supporting text |
| 12.66px | Gellix Regular | `P - Perfil` |
| 12px | Gellix Medium | Small labels |
| 12px | Gellix Regular | Small labels |
| 11.78px | Gellix Regular | `Abrir conta pJ` |
| 11.5px | Gellix Medium | Small labels |
| 11.09px | Gellix Medium | Small labels |
| 10.12px | Gellix Regular | Profile labels |
| 10px | Gellix Regular | Small labels |
| 8px | Gellix Light | Notification text |
| 8px | Gellix Medium | Small labels |
| 5.89px | Gellix Regular | `Abrir conta pJ` |

Tracking is 0px and line height is auto for the named typography tokens.

## Spacing scale

No spacing variables found in source.

Observed component spacing values:

- 0px, 4px, 8px, 10px, 12px, 13px, 15.19px, 16px, 20px, 25px, 26px, 32px, 34px, 36px, 42px, 46px, 61px, 64px, 80px, 158px, 427px.
- Common component padding: 16px, 32px, 34px, 36px, 80px.
- Common component gaps: 8px, 12px, 32px, 42px, 61px, 64px.

## Radius scale

No radius variables found in source.

Observed radii:

- 7.86px
- 12px
- 16px
- 26px
- 36px
- 46px
- 56px
- 100px

## Elevation & effects

- Notification overlays: drop shadow 40px, offset 0 4, color `#00000040`.
- `Efeito de glow - Hover`: drop shadow 20px, offset 0 0, color `#BB87FF4D`.
- `ArrowRight`: background blur 20px.
- Notification surfaces use `#2E054B`.
- Profile and notification circular controls use `#421D5D`.
- Large dark panels use `#0F0F0F`.
- Transparent and translucent colors are used for overlays and interaction surfaces, including `#00000000`, `#FFFFFF1A`, `#FFFFFF99`, `#19191933`, `#191919BF`, `#191919CC`, `#2C2C2CB2`, and `#2E054B99`.

## Components

Component families available:

- Abrir conta pJ
- ArrowRight
- Banner
- Banner - NU pay
- Barra notificações
- Barra notificações Não lidas
- Botão - voltar página inicial
- Botão Buscar - Shopp
- Botão básico principal
- Botão component
- Botão maior
- Botão variant 2
- Bullet link
- Bullet malditos
- Buscar
- Card - Opção área pix
- Card Olhos fechados
- Card aba pagar mais
- Card aba pagar mais - empréstimos
- Card caixinha
- Card caixinha e investimento
- Card especial - cta
- Card saiba mais
- Cashback Black friday - Sessão
- Categorias
- Categorias card
- Categorias pedidos - cards
- Component 14
- Component 17
- Consultar meus limites Pix
- Conteiner Login
- Conteiner com CTA
- Conteiner dos tópicos - Blog
- Convide todo mndo
- Cupons exclusivos
- Esqueceu sua senha?
- Frame 1000005772
- Gifts cards
- Icons
- Imagem
- Login
- Marcar todas como lidas
- Menu burguer
- Menu lateral (Side Bar)
- Notficação
- Notificação Lida
- Notificação Mensagem
- Notificação Não lida
- Não tem uma conta? Faça seu cadastro aqui
- Olhos abertos e fechados
- Opção Overlay
- Opções- Shopp
- Overlay 02
- Painel peril do usuário
- Painel transferência Gambiarra
- Painel transferência com variáveis
- Perfil opções
- Produto Shopp Nubank
- Progress bar
- Sessão nossos empréstimos
- Slide (início)
- Spinner-Round
- Telas de login
- Tópicos menu
- Valor de recarga (selecionável)
- Valor total criptomoedas
- attach_money
- opções de cashback
- `|`

Key dimensions and construction patterns:

- `Login`: 664x873px, 46px radius, 36px vertical and 25px horizontal padding, 46px gap, `#0F0F0F` fill, 1px `#909090` stroke.
- `Telas de login`: 1920x1080px, `#000000` fill.
- `Painel transferência Gambiarra`: 984x783px, 36px radius, 80px padding, 64px gap, `#0F0F0F` fill.
- `Painel transferência com variáveis`: 984x783px, 36px radius, 80px padding, 64px gap, `#0F0F0F` fill.
- `Banner - NU pay`: 1572x345px, 26px radius.
- `Banner`: 1562x202px, 16px radius, 32px horizontal padding, 158px gap, `#FFFFFF` fill.
- `Component 14`: 773x277px, 16px radius, `#E1F2FA` fill.
- `Card especial - cta`: 719x298px horizontal variant with 16px radius, 34px vertical and 32px horizontal padding, 61px gap, `#0F0F0F` fill.
- `Card Olhos fechados`: 390x277px, 16px radius, 34px vertical and 32px horizontal padding, 61px gap, `#0F0F0F` fill.
- `Card - Opção área pix`: 354x374px, 16px radius, 32px padding, 42px gap, `#0F0F0F` fill.
- `Card aba pagar mais`: 299x234px, 16px radius, 16px padding, `#909090` fill.
- `Card aba pagar mais - empréstimos`: 299x262px, 16px radius, 16px padding, `#000000` fill, 1px `#000000` stroke.
- `Card caixinha`: 269.75x369px, 12px gap.
- `Card caixinha e investimento`: 269.75x369px, 12px gap.
- `Conteiner com CTA`: 764x244px, 16px radius, 34px vertical and 32px horizontal padding, 61px gap, `#909090` fill.
- `Botão básico principal`: 122x41px, 56px radius, 12px vertical and 25px horizontal padding, `#820AD1` fill.
- `Botão component`: 614x61px, 12px radius, 16px vertical and 25px horizontal padding, `#820AD1` fill.
- `Botão Buscar - Shopp`: 102.04x78.04px, 100px radius, 20px vertical and 32px horizontal padding, `#000000` fill.
- `Buscar`: 248x40px, 100px radius, 8px vertical and 12px horizontal padding, `#FFFFFF` fill, 1px `#DADDDC` stroke.
- `Menu burguer`: 72x72px, 100px radius, `#421D5D` fill.
- `Perfil opções`: 183.75x71.69px, 100px radius, 8px vertical and 12px horizontal padding, `#421D5D` fill.
- `Notficação`: 71.69x71.69px, 100px radius, 12px padding, `#421D5D` fill.
- `Valor de recarga (selecionável)`: 80x53px, 100px radius, 12px vertical and 16px horizontal padding, 1px `#000000` stroke.
- `Valor total criptomoedas`: 1175x127.7px, 16px radius, 34px vertical and 32px horizontal padding, 61px gap, `#0F0F0F` fill.
- `Slide (início)`: 1176x177px, 16px radius, 34px vertical and 32px horizontal padding, 20px gap, `#909090` fill.
- `Barra notificações`: 335x163px, 16px radius, padding 16px top and 24px bottom, `#2E054B` fill.
- `Barra notificações Não lidas`: 252x146px, 16px radius, padding 16px top and 20px bottom, `#2E054B` fill.
- `Overlay 02`: 252x241px, 16px radius, padding 16px top and 20px bottom, `#2E054B` fill.
- `Perfil opções`: modal variant is 387x129px, 16px radius, padding 16px top and 20px bottom, `#2E054B` fill.
- `Progress bar`: 173.22x173.22px.
- `Spinner-Round`: 30.79x30.79px.
- `Icons`: 15px or 15.2px, with `#FFFFFF` fill.
- `Olhos abertos e fechados`: 40x40px, with `#FFFFFF` fill.

## Screen patterns

- Dashboard: dark transfer and balance panels, cards for caixinhas, investments, account visibility, Pix limits, loans, cashback, and invitations.
- Shopp: search control, category tiles, product cards, coupon and gift-card banners, cashback options, and product navigation controls.
- Login: full-screen 1920x1080px black frame containing a large dark login card, account actions, password recovery, registration, and eye visibility controls.
- Notifications: circular notification trigger opens dark purple notification overlays with read, unread, message, and mark-all-as-read variants.
- Profile: profile pill and profile options modal use dark purple circular or rounded controls.
- Blog: horizontal topic menu and topic container with cards, CTAs, and “saiba mais” content.
- Loans and Pix: dark cards and CTA containers with hover, click, and variant states.
- Banners: wide horizontal promotional surfaces with 16px or 26px radii and large Gellix headings.
- Navigation: side menu topics, burger menu, arrow controls, and icon-based actions.

## Notes for implementers

- Use only the listed component families and their documented variants.
- Preserve the named Portuguese labels and variant names when mapping source components.
- Prefer the named typography tokens where available instead of substituting arbitrary font styles.
- Use Gellix as the primary typeface; Diagramm appears only in diagram/chart text.
- No spacing, radius, or motion token system was defined. Use the observed component-specific values rather than introducing a new scale.
- Preserve exact component dimensions when recreating fixed desktop compositions.
- Use `#820AD1` for the named Nubank purple token `Roxo 01 - Nubank`; use `#4E0578` for token `03` and `#2E054B` for token `04`.
- For dark dashboard surfaces, use the documented `#0F0F0F`, `#000000`, or named token values according to the component.
- Apply hover glow only where the source specifies `Efeito de glow - Hover`.
- Apply notification and profile overlay shadows using the documented 40px drop shadow with `#00000040`.
- Maintain the source interaction states: Default, Hover, Click, Focus, Loading, Sucesso, Selecionado, Ativada, and Desativada.
