---
name: safe-spending-banking-app-community
source: Safe Spending Banking App (Community) — Page 1
kind: design-system-context
---

# safe - Design System

## Overview

Safe is a mobile banking and spending-control interface designed for a 375×812px iPhone frame. It combines transaction lists, spending-limit controls, merchant selection, purchase review settings, cards, curtains, and modal overlays.

Primary component families: Cell, Shops Card, Button, Avatar, Switch, Switch card, Curtain, Slider card, Bars, Slider, BehindCurtain Bg, and the icon families 􀅼, 􀊫, 􀍯, 􀎓, 􀑇.

## Design language

- Soft, rounded mobile banking UI with large rounded cards and circular controls.
- Primary surfaces use #FFFFFF, #FDFDFD, and #F3F3F3.
- Text is predominantly #000000 or #333333.
- Pink #F60FCF and accent purple #6F62FF are used for interactive emphasis.
- Secondary information uses reduced-opacity black or #797979.
- Cards and controls use generous rounded corners, circular avatars, and subtle shadows.
- Typography uses SF Pro Rounded for prominent banking and transaction text, with SF Pro Text for supporting labels and system-style copy.
- The interface is structured around 375px-wide cells, 343px-wide cards, 60px avatars, and 29px circular actions.

## Color palette

Colors ranked by raw usage where counts are available:

| Color | Usage / role |
|---|---|
| #000000 | 234 uses; primary labels and text |
| #FFFFFF | 85 raw uses; 168 most-used style uses; white surfaces and labels |
| #DADADA | 70 uses; raw neutral |
| #33333326 | 54 uses; subtle borders and low-opacity neutral |
| #0000000D | 30 uses; low-opacity black shadow |
| #FDFDFD | 12 raw uses; 12 style uses; card and screen surfaces |
| #333333B2 | 10 uses; dark translucent overlay |
| #7B61FF | 8 uses; raw purple accent |
| #FF0000 | 8 uses; red status/detail color |
| #FFE600 | 8 uses; yellow status/detail color |
| #3F3F3F | 4 uses; raw dark neutral |
| #F5F5F5 | 4 uses; raw light neutral |
| #8E8E93 | 3 uses; raw secondary neutral |
| #F3F3F3 | Background; 66 most-used style uses |
| #333333 | Text; 187 most-used style uses |
| #F60FCF | Pink; 21 most-used style uses |
| #797979 | Secondary Text; 16 most-used style uses |
| #6F62FF | Accent; 12 most-used style uses |
| #D6D9DD | Carbon Neutral/300; 10 most-used style uses |
| #FF9500 | SystemOrange / Light; 10 most-used style uses |
| #EA4C4C | Danger; 7 most-used style uses |
| #3C3C432E | Label Color / Light / Quarternary; 6 most-used style uses |
| #4CDFF3 | Blue; 3 most-used style uses |
| #1FDE00 | Green; 2 most-used style uses |
| #24262B | Carbon / Darkest |
| #78788029 | Fill Color / Light / Secondary |
| #CFD7FF | Button shadow |
| #041F811A | Button shadow |
| #FFD0EF | Button shadow |
| #6363651A | Micro shadow |
| #F1F1F1 | Bar shadow |

Named roles:

- Background: #F3F3F3
- White: #FDFDFD
- Text: #333333
- Secondary Text: #797979
- Accent: #6F62FF
- Pink: #F60FCF
- Blue: #4CDFF3
- Green: #1FDE00
- Danger: #EA4C4C
- Label Color / Dark / Primary: #FFFFFF
- Label / Light / Primary: #000000
- Carbon / Darkest: #24262B
- Carbon Neutral/300: #D6D9DD
- SystemOrange / Light: #FF9500
- Fill Color / Light / Secondary: #78788029
- Label Color / Light / Quarternary: #3C3C432E

## Type scale

Fonts and styles:

| Style | Font | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Header 48 | SF Pro Rounded Medium | 48px | 500 | auto | 0px |
| Header 32 | SF Pro Rounded Medium | 32px | 500 | auto | 0px |
| Header 20 | SF Pro Rounded Medium | 20px | 500 | auto | 0.4px |
| Body 18 | SF Pro Rounded Medium | 18px | 500 | auto | 0.9px |
| Caption 16 | SF Pro Rounded Medium | 16px | 500 | auto | 0.16px |
| SF / Subheadline - Semibold | SF Pro Text Semibold | 15px | 600 | 20px | -0.24px |
| Small / Headline | SF Pro Text Semibold | 15px | 600 | 20px | -0.24px |
| Large (Default) / Subhead | SF Pro Text Regular | 15px | 400 | 20px | -0.24px |
| Menu / Small Header | SF Pro Text Regular | 13px | 400 | 18px | -0.08px |
| xSmall / Callout | SF Pro Text Regular | 13px | 400 | 18px | -0.08px |

Additional raw styles observed:

- SF Pro Text Semibold, 50px.
- SF Pro Rounded Medium, 30px.
- SF Pro Display Medium, Regular, and Semibold, 25px.
- SF Pro Text Medium, 18px.
- SF Pro Rounded Regular, 17px.

Use Header 20 most often for merchant names, section titles, and primary card labels. Use Header 48 for prominent balance amounts and SF Pro Rounded Medium 30px for slider-card values.

## Spacing scale

_No spacing variables found in source._

Observed component dimensions:

- Standard mobile frame: 375×812px.
- Cell: 375×92px.
- Curtain: 375×69px.
- Bars / Search / Default: 375×72px.
- Shops Card: 343×150px.
- Slider card: 343×154px.
- Switch card: 343×108px.
- Button: 320×52px.
- Avatar: 60×60px.
- Add button: 60×60px.
- Circular action button: 29×29px.
- Slider / Light: 344×44px.

## Radius scale

No radius variables were defined. Explicitly observed radii:

- 100px: circular avatars, circular buttons, circular controls, and home-indicator-style elements.
- 40px: outer iPhone frame.
- 25px: Curtain top-left and top-right corners.
- 24px: primary account card.
- 20px: Shops Card, Slider card, Switch card, and related rounded surfaces.
- 10px: small add-button icon group.
- 2px: slider track.
- 1.33px: small switch details.
- 0px: square or unrounded surfaces.

## Elevation & effects

- Button Shadow:
  - drop shadow 10px offset 0 4 with #CFD7FF
  - drop shadow 10px offset 0 4 with #041F811A
  - drop shadow 20px offset 0 4 with #FFD0EF
- Micro Shadow:
  - drop shadow 5px offset 0 3 with #6363651A
- Bar Shadow:
  - drop shadow 0px offset 0 1 with #F1F1F1
- Switch knob shadows:
  - drop shadow 1px offset 0 3 with #0000000D
  - drop shadow 8px offset 0 3 with #33333326
- Slider knob uses two drop shadows with offsets 13px / 6px and 4px / 0.5px; the extracted source does not provide an allowed matching shadow color for these effects.
- Account-card shadow is present in the source, but its extracted color is not part of the allowed palette.

## Components

### Cell

- Cell / Transactions:
  - Size: 375×92px.
  - Fill: #FFFFFF.
  - Text styles: Body 18 and Header 20.
  - Variant: Pending = False / True.
  - Typical content: merchant name, time, amount, and 60×60px avatar.
- Cell / Shops:
  - Size: 375×92px.
  - Fill: #F3F3F3.
  - Text style: Header 20.
  - Variant: Added = False / True.
- Cell / Settings:
  - Size: 375×92px.
  - Fill: #FDFDFD.
  - Text styles include SF Pro Text Medium 18px, SF Pro Display Regular 25px, and Header 20.

### Button

- Primary Button:
  - Size: 320×52px.
  - Text style: Header 20.
  - Variants: Type = Accent / Basic.
- Circular action button:
  - Size: 29×29px.
  - Variants: Type = Back / Close / Forward.
- Added-state circular button:
  - Size: 29×29px.
  - Effect: Micro Shadow.
  - Variants: Added = False / True.
- Button / Add:
  - Size: 60×60px.
  - Fill: #FFFFFF.
  - Uses Button Shadow.
  - Pink plus icon.

### Avatar

- Standard Avatar:
  - Size: 60×60px.
  - Radius: 100px.
  - Fill: #FFFFFF.
  - Variants: Amazon, Asos, Barnes&Noble, DoorDash, Ebay, Ikea, Lyft, McDonalds, Sandy, Sephora, Starbucks.
- Avatar/Barnes&Noble/Hero:
  - Size: 108×108px.
  - Fill: #FFFFFF.

### Switch

- Size: 51×31px.
- Fill: #FFFFFF.
- Variants: Checked = Off / On.
- Observed active switch track: #F60FCF.
- Knob: 27×27px, white, with micro shadows.

### Switch card

- Size: 343×108px.
- Fill: #FFFFFF.
- Typical text styles: Caption 16 and Header 20.
- Used for “Purchase Review” settings with supporting explanatory text.

### Shops Card

- Size: 343×150px.
- Fill: #F3F3F3.
- Text style: Header 20.
- Variants: Filled = False / True.
- Includes a 60×60px add button.

### Slider

- Slider / Light:
  - Size: 344×44px.
  - Track: 5px high with 2px radius.
  - Active track and knob: #F60FCF.
  - Knob: 20×20px.
- Slider card:
  - Size: 343×154px.
  - Fill: #F3F3F3.
  - Text styles: Caption 16, Header 20, and SF Pro Rounded Medium 30px.
  - Used for purchase thresholds and numeric limits.

### Curtain

- Size: 375×69px.
- Fill: #FFFFFF.
- Radius: 25px on top corners and 0px on bottom corners.
- Uses Bar Shadow.
- Used for “Add shops” and other bottom-sheet or overlay headers.
- Includes circular close and navigation buttons.

### Bars

- Bars / Search / Default:
  - Size: 375×72px.
  - Fill: #FFFFFF.
  - Uses Bar Shadow.
  - Text style: Caption 16.

### BehindCurtain Bg

- Size: 375×812px.
- Fill: #FFFFFF.
- Used as the full-screen background layer behind a curtain or modal overlay.
- Overlay content uses #333333B2.

### Icon families

- 􀎓: 31×20px, white fill, SF Pro Display Regular 25px.
- 􀑇: 17×19px, white fill, Caption 16.
- 􀅼: 18×19px, white fill, Caption 16.
- 􀍯: 23×19px, white fill, Caption 16.
- 􀊫: 20×22px, white fill, SF Pro Rounded Regular 17px.

## Screen patterns

- Transaction overview:
  - 375×812px mobile screen.
  - Background and transaction cells use #F3F3F3 and #FFFFFF.
  - Header cell identifies a merchant and includes a 60×60px avatar plus a 29×29px close action.
  - Account card uses a 24px radius, #FDFDFD fill, masked account number, and a prominent balance in Header 48.
  - Transaction rows are 375×92px and show merchant, time, amount, and avatar.
  - “Today” and Send/Add actions appear as supporting navigation and action controls.
- Purchase review configuration:
  - Full-screen BehindCurtain Bg overlay with #333333B2.
  - Uses a Switch card for purchase-review enablement.
  - Uses a Slider card for a purchase threshold.
  - Uses a Shops Card for merchant-specific controls.
- Add shops flow:
  - Curtain header labeled “Add shops”.
  - White content surface below the curtain.
  - Settings-style cells list merchant or transaction controls.
  - Merchant selection uses 60×60px avatars and add buttons.
- Modal and curtain states:
  - Preserve the 375px-wide layout.
  - Use a 69px Curtain header with rounded top corners.
  - Place the curtain above a darkened full-screen background when showing modal content.

## Notes for implementers

- Keep the primary layout width at 375px and the reference height at 812px.
- Prefer the named styles over raw equivalents: Background, Text, White, Secondary Text, Accent, Pink, and the defined typography styles.
- Use Header 20 for most prominent labels and transaction text; use Header 48 only for large balances.
- Use #F60FCF for active switches, slider tracks, slider knobs, and add-button plus icons.
- Use #F3F3F3 for soft card backgrounds and inactive grouped surfaces.
- Use #FFFFFF for cells, controls, avatars, curtains, and modal surfaces.
- Use 100px radius for circular UI and 20px radius for grouped cards unless a component specifies another radius.
- Do not introduce additional spacing, radius, typography, component families, or colors not listed in this document.
