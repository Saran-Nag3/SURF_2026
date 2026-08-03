---
name: ecommerce-ui-kit-community
source: Ecommerce UI Kit (Community)
kind: design-system-context
---

# spline - Design System

## Overview

Ecommerce UI kit covering commerce, commerce bags shop, and Figma component-library pages. The system includes controls, form elements, navigation, status indicators, avatars, payment-method marks, social icons, crypto icons, utility icons, and map imagery.

- Source page: All pages (9)
- No local variable collections found.
- No local grid styles found.
- Base typeface: Roboto.
- Primary component sizing uses fixed width and height.
- Common control heights: 60px for buttons, inputs, and selects; 30px for compact controls and badges.

## Design language

- Use a clean ecommerce interface with pill-shaped primary controls and compact, high-contrast form controls.
- Use `#FFFFFF` surfaces with gray-blue borders and subtle gray-blue shadows for floating controls.
- Use blue as the primary action and selection color.
- Use bold and black Roboto weights for interface labels, with line heights generally set to 20px or 30px.
- Use rounded controls prominently: 30px pills for buttons, inputs, selects, and switchers; 15px surfaces for dropdowns and text areas; circular shapes for status and progress indicators.
- Use 30px icon assets consistently across utility, social, payment, crypto, and category icon groups.
- Component variants commonly include `Dark`, `Light`, and `Primary` styles; `Rectangle` and `Rounded` corner modes; and `Small`, `Default`, `Large`, and `Extra Small` sizes.

## Color palette

### Most-used raw colors

Ranked by reported usage:

| Color | Usage |
|---|---:|
| `#D8D8D8` | 707 |
| `#C3CAD9` | 604 |
| `#7B859A` | 78 |
| `#DADADA` | 61 |
| `#172B85` | 30 |
| `#979797` | 30 |
| `#D9D9D9` | 28 |
| `#FFFFFF` | 22 |
| `#F1DED8` | 17 |
| `#CACFD9` | 15 |
| `#000000` | 14 |
| `#ED0006` | 10 |
| `#F9A000` | 10 |

### Named palette

- Primary blue: `#194DFF`
- Light blue: `#6688FF`
- Blue opacity: `#3361FF1A`, `#3361FF4D`
- Deep gray-blue: `#0D111A`, `#202B40`, `#26334D`, `#2D3C59`
- Gray-blue scale: `#3F5073`, `#4D5E80`, `#6B7A99`, `#7D8FB3`, `#ADB8CC`, `#C3CAD9`, `#DADEE6`, `#DCE0E8`, `#EDEFF2`
- Near-white surfaces: `#F7F8FA`, `#FFFFFF`
- Black: `#000000`
- Black opacity: `#0000004D`, `#00000080`
- Purple: `#8833FF`, `#8833FF33`, `#8833FF4D`, `#8833FF66`
- Orange: `#FF6633`, `#FF66334D`, `#FF663366`
- Bronze: `#CC7429`, `#CC74294D`, `#CC742966`, `#994700`
- Yellow: `#FFCB334D`, `#FFCB3366`
- Green: `#29CC39`, `#29CC3933`, `#29CC394D`, `#29CC3966`
- Red: `#E62E2E33`, `#E62E2E4D`, `#E62E2E66`
- Pink: `#E62E7B4D`
- Teal blue: `#33BFFF4D`, `#33BFFF66`
- Tiffany: `#2EE6CA4D`, `#2EE6CA80`
- Product colors: `#EBDDCF`, `#EEEBE6`, `#DBE7E0`
- White opacity: `#FFFFFF80`

Named token aliases include Gray Blue/Grey Blue 10 (`#0D111A`), 25 (`#202B40`), 30 (`#26334D`), 35 (`#2D3C59`), 45 (`#3F5073`), 50 (`#4D5E80`), 60 (`#6B7A99`), 70 (`#7D8FB3`), 80 (`#ADB8CC`), 85 (`#C3CAD9`), 90 (`#DADEE6`), 95 (`#EDEFF2`), 96/97 (`#FFFFFF`), and 98 (`#F7F8FA`).

## Type scale

Typeface: Roboto. Tracking is `0px` for all listed styles.

| Style | Weight | Size | Line height |
|---|---:|---:|---:|
| Regular/Regular 64 | 400 | 64px | 90px |
| Black/Black 64 | 900 | 64px | 90px |
| Bold/Bold 48 | 700 | 48px | 70px |
| Bold/Bold 24 | 700 | 24px | 30px |
| Bold/Bold 20 | 700 | 20px | 30px |
| Bold/Bold 18 | 700 | 18px | 30px |
| Bold/Bold 16 | 700 | 16px | 30px |
| Bold/Bold 15 | 700 | 15px | 30px |
| Bold/Bold 14 | 700 | 14px | 30px |
| Black/Black 14 | 900 | 14px | 30px |
| Bold/Bold 13 | 700 | 13px | 25px |
| Bold/Bold 12 | 700 | 12px | 20px |
| Black/Black 12 | 900 | 12px | 20px |
| Bold/Bold 10 | 700 | 10px | 20px |
| Black/Black 10 | 900 | 10px | 20px |
| Black/Black 8 | 900 | 8px | 20px |

Raw typography also contains Roboto Black at `150px` and `80px`.

## Spacing scale

_No spacing variables found in source._

Component-specific spacing values:

- Button: padding `15px 35px 15px 35px`, gap `10px`.
- Group Button: padding `0px`, gap `0px`.
- Select: padding `15px 20px 15px 30px`, gap `10px`.
- Input: padding `20px 30px 20px 30px`, gap `10px`.
- Switcher: padding `5px`, gap `10px`.
- Radio: padding `5px`, gap `10px`.
- Checkbox: padding `10px`, gap `10px`.
- Steps: gap `50px`.
- Icon Tab and Tab: gap `50px`.
- Badge: padding `5px 15px`, gap `10px`.
- Visa: padding `7px 6px 7px 6px`, gap `10px`.

## Radius scale

_No radius variables found in source._

Observed component radii:

- `2px`: payment-method marks.
- `5px`: Checkbox; Avatar Text radius variant.
- `10px`: Radio.
- `15px`: Text Area, dropdowns, Switcher, Badge, and Avatar Text radius variant.
- `25px`: Avatar Text.
- `30px`: Button, Select, Input.
- `100px`: Status and Circular.
- Component variants also expose `Rectangle`, `Rounded`, `Radius 5`, and `Radius 15`.

## Elevation & effects

Drop-shadow effect styles:

- `Shadows/Gray Blue 30/3%/5b`: `5px` blur, offset `0 2px`, color `#26334D08`.
- `Shadows/Gray Blue 30/3%/10b`: `10px` blur, offset `0 2px`, color `#26334D08`.
- `Shadows/Gray Blue 30/5%/10b`: `10px` blur, offset `0 2px`, color `#26334D0D`.
- `Shadows/Gray Blue 30/5%/30b`: `30px` blur, offset `0 10px`, color `#26334D0D`.
- `Shadows/Gray Blue 30/10%/10b`: `10px` blur, offset `0 2px`, color `#26334D1A`.
- `Shadows/Gray Blue 30/15%/5b`: `5px` blur, offset `0 2px`, color `#26334D26`.
- `Shadows/Blue/15%/10b`: `10px` blur, offset `0 2px`, color `#3361FF26`.
- `Shadows/Teal Blue/5%/5b`: `5px` blur, offset `0 2px`, color `#33BFFF0D`.
- `Shadows/Gray Blue 10/3%/5b`: `5px` blur, offset `0 2px`, color `#0D111A08`.

## Components

### Controls and forms

- **Button** — `113x60px`; radius `30px`; horizontal; padding `15px 35px`; gap `10px`; fill and `2px` stroke `#194DFF`; text Black/Black 14. Variants: Default, Extra Small, Large, Small; Rectangle/Rounded; Dark/Light/Primary; Default, Dropdown, Icon, Left Icon, Right Icon, Round, and 2 Icons.
- **Group Button** — `196x60px`; horizontal; zero padding and gap; text Black/Black 14. Variants: Default, Icon, Icon and Text; size, corner, and style variants.
- **Input** — `180x60px`; radius `30px`; horizontal; padding `20px 30px`; gap `10px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`; shadow `Shadows/Gray Blue 30/3%/5b`; text Bold/Bold 12. Variants: Default, 2 Icons, Left Icon, Right Icon; size, corner, label, and style variants.
- **Select** — `180x60px`; radius `30px`; horizontal; padding `15px 20px 15px 30px`; gap `10px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`; same shadow as Input; text Bold/Bold 12. Variants: Default, Avatar, Left Icon; size, corner, label, and style variants.
- **Text Area** — `150x155px`; radius `15px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`; shadow `Shadows/Gray Blue 30/3%/5b`; text Bold/Bold 12. Variants: size, corner, hint, label, and style.
- **Dropdown** — `200x300px`; radius `15px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`; shadow `Shadows/Gray Blue 30/3%/5b`; text Bold/Bold 12. Supports Default, 2 Icon, Description, Left Icon, Left Icon Description, and Right Icon.
- **Card Dropdown** — `200x80px`; radius `15px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`; same shadow; text Bold/Bold 12.
- **Avatar Dropdown** — `200x100px`; radius `15px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`; same shadow; text Bold/Bold 12.
- **Calendar Dropdown** — `280x290px`; radius `15px`; `2px` stroke `#FFFFFF`; shadow `Shadows/Gray Blue 30/5%/30b`; text Bold/Bold 12.
- **Color Dropdown** — `230x150px`; radius `15px`; fill `#FFFFFF`; `2px` stroke `#FFFFFF`.
- **Radio** — `20x20px`; radius `10px`; fill and `2px` stroke `#194DFF`; shadow `Shadows/Gray Blue 30/10%/10b`. States: Checked, Focus, Normal.
- **Checkbox** — `20x20px`; radius `5px`; fill and `2px` stroke `#194DFF`; same shadow as Radio. States: Checked, Default, Focus, Indeterminate.
- **Switcher** — `50x30px`; radius `15px`; padding `5px`; fill and `2px` stroke `#194DFF`; shadow `Shadows/Gray Blue 30/10%/10b`. States: False/True.
- **Slider** — `76x13px`; Default or Range; Default or Small; Dark/Light.
- **Toggle** — 30px icon assets for on/off and selection states.

### Navigation, status, and feedback

- **Status** — `10x10px`; radius `100px`; fill `#FFFFFF`; `2px` stroke `#194DFF`; shadow `Shadows/Gray Blue 30/3%/10b`. Types: Center Color, Color Border, Color Center; borders `2`, `3`, or `4`.
- **Steps** — `230x50px`; horizontal; gap `50px`; fill `#FFFFFF`; text Black/Black 12 and Black/Black 14. Supports selected tabs 1–10 and four sizes.
- **Circular** — `45x45px`; radius `100px`; `4px` stroke `#FFFFFF`; centered content. Supports four sizes and Dark/Light.
- **Progress** — `200x5px`; fill `#FFFFFF`; fill states `0%`, `3%`, `5%`, `10%`, `25%`, `35%`, `50%`, `60%`, `75%`, `90%`, `100%`.
- **Icon Tab** — `1100x30px`; horizontal; gap `50px`; fill `#FFFFFF`; text Black/Black 12; selected tabs 1–10.
- **Tab** — `650x20px`; horizontal; gap `50px`; fill `#FFFFFF`; text Black/Black 12; selected tabs 1–10.
- **Tooltip** — `59x35px`; centered vertical layout; fill `#FFFFFF`; text Bold/Bold 12. Types: Default, 2 Lines, Multilines Icon; arrows Bottom, Left, Right, Top.
- **Badge** — `69x30px`; radius `15px`; horizontal; padding `5px 15px`; gap `10px`; fill and `2px` stroke `#194DFF`; text Black/Black 12. Types: Default/Square; size, corner, and style variants.
- **Alert**, **Notification**, **Reminder Ribbo**, and **Ribbon** are available component families without further extracted specs.

### Avatars and imagery

- **Avatar Text** — `50x50px`; radius `25px`; centered; fill `#3361FF1A`; text Black/Black 12. Corner variants: Radius 15, Radius 5, Rounded.
- **Avatar Image** — `50x50px`; samples 1–25; size and corner variants.
- **Map** — `1600x1145px`; fill `#FFFFFF`.
- **Image** — available as a component family.
- **Payment marks** — Amex, DinersClub, GooglePay, ApplePay, Amazon, UnionPay, JCB, Payoneer, Maestro, PayPal, Mastercard, and Visa are `30x20px`, radius `2px`, with fill `#EDEFF2`. Visa uses padding `7px 6px 7px 6px`.

### Icon and asset families

All listed icon assets are `30x30px` unless otherwise noted:

- **Social icons** — zoom, yahoo, outlook, android, apple, behance, dribbble, LinkedIn, YouTube, Telegram, Skype, Viber, Messenger, WhatsApp, Yelp, mail, VK, Instagram, Google+, Twitter, Facebook, Pinterest.
- **Crypto-format** — matic, busd, doge, dot, bnb, btc, eth; listed assets use fill `#FFFFFF`.
- **Places** — tree, sofa, circus, fantasy, horror, thriller, history, comedy, drama, body parts, bars, dry cleaning, massage, hair, automotive, service, food, hospitality, and amenity icons.
- **Action** — view stream, iPhone, chart, lines, areas, multibar.
- **Navigation** — minimize, arrows, refresh, unfold, subdirectory arrows, done, indeterminate, color dots, and conor.
- **Other** — temperature, 30, dry, bleach, cool.
- **Editor** — format paragraph.
- **Format** — jpg, png, bmp, gif, psd, ai, cdr, raw, svg, eps, ptt, txt, html, css, zip, avi, mp3, doc, xls, pdf, exe, rar, sit, wav.
- **Toggle** — toggle on/off, stars, radio buttons, and checkboxes.
- **Social** — sharing, ratings, sentiment, people, notifications, and community icons.
- **Notification** — connectivity, device, event, phone, transport, synchronization, and system-status icons.
- Additional families: Hardware, File, Device, Content, Communication, Av, Alert, Weather, Maps, Editor, Format, Other, Action, Navigation, Social, Places, and Toggle.

## Screen patterns

- **Commerce** — ecommerce shopping interface pattern using the kit’s commerce controls, product imagery, navigation, forms, badges, payment marks, and utility icons.
- **Commerce Bags Shop** — bag-shopping storefront pattern using product-focused commerce layouts and the same control, payment, avatar, and icon system.
- **Figma Components** — component reference pattern containing Button, Group Button, Forms, Components, Icons, and Images sections.
- **Forms** — use Input, Select, Text Area, Dropdown, Calendar Dropdown, Color Dropdown, Card Dropdown, Avatar Dropdown, Radio, Checkbox, Switcher, and Slider.
- **Navigation and feedback** — use Tab, Icon Tab, Steps, Badge, Tooltip, Status, Circular, Progress, Alert, and Notification.
- **Asset selection** — use payment marks, social icons, crypto formats, Places, Format, Weather, Action, Navigation, Toggle, and Notification icon families.

## Notes for implementers

- Use only extracted colors; do not substitute unlisted colors.
- Prefer the reported raw colors `#D8D8D8` and `#C3CAD9` for dominant neutral usage, while `#194DFF` is the named primary blue.
- The extraction contains duplicate aliases for `#C3CAD9`, `#FFFFFF`, and `#4D5E80`; treat each as one color.
- No spacing, radius, motion, or grid token collections were extracted. Use component-level values only.
- Several component specs reference named tokens whose source values are `none`, including Blue/Blue, Gray Blue/Grey Blue 93, and White/White 20%; do not assign replacement values.
- The source contains a typo in some variant labels, including `Ractangle` and `Ideterminate`; preserve intended component behavior as Rectangle and Indeterminate when implementing.
- Use the exact component dimensions when reproducing reference components.
- Preserve the 30px asset sizing for icon families unless a component spec explicitly gives another size.
- Payment marks use the gray-blue 95 surface (`#EDEFF2`) and `2px` corner radius.
- No motion tokens were found in source.
