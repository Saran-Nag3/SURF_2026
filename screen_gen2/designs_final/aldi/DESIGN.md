---
name: aldi
source: Montrack (Fun Money Tracker App) (Community)
kind: design-system-context
---

# aldi - Design System

## Overview

Montrack is a fun money-tracker UI kit with mobile finance patterns, including wallets, activities, transaction inputs, navigation, keyboards, confirmation dialogs, and onboarding/progress elements. The primary typeface is Inter. Supporting typefaces in source examples include Archivo, DM Sans, SF Pro Display, and SF Pro Text.

The source includes a 4-column mobile grid with 70.75px sections, 20px gutters, and stretch alignment.

## Design language

- Bright, friendly finance interface with blue as the primary action color.
- Light backgrounds use layered blue tints: `#E5F0FF`, `#F2F7FF`, `#CCE1FF`, and `#A1C2F1`.
- White surfaces are commonly paired with thin monochrome strokes and small shadows.
- Primary actions use `#3077E3`.
- Success uses `#22CD22`; error uses `#F45454`.
- Cards and controls use rounded corners, most commonly `8px` or `12px`.
- Typography is predominantly Inter with negative tracking on the defined Inter styles.
- Gradients combine blue, purple, tan, and pink stops.

## Color palette

Ranked by raw usage where available:

| Role | Color | Usage |
|---|---:|---:|
| White | `#FFFFFF` | 1184 raw uses |
| Primary blue | `#3077E3` | 461 raw uses |
| White with transparency | `#FFFFFF5C` | 418 raw uses |
| Black | `#000000` | 317 raw uses |
| Light gray | `#DADADA` | 113 raw uses |
| Black at 10% | `#0000001A` | 56 raw uses |
| Dark neutral | `#343330` | 48 raw uses |
| Dark translucent navy | `#1A1B365C` | 34 raw uses |
| Purple | `#9747FF` | 24 raw uses |
| Background 1 | `#A1C2F1` | — |
| Background 2 | `#CCE1FF` | 225 most-used-style uses |
| Background 3 | `#E5F0FF` | 107 most-used-style uses |
| Background 4 | `#F2F7FF` | 683 most-used-style uses |
| Success | `#22CD22` | 34 most-used-style uses |
| Error | `#F45454` | 66 most-used-style uses |
| Black 100% | `#3C3C3C`, `#313131` | — |
| Black 80% | `#585858` | 662 most-used-style uses |
| Black 60% | `#ABA4A4` | 541 most-used-style uses |
| Black 40% | `#D6D6D6` | 152 most-used-style uses |
| Dark base | `#161719`, `#0D0E0F` | — |
| Primary color 1 | `#5A96E3` | 24 most-used-style uses |
| Primary color 2 | `#4631E9` | 6 most-used-style uses |
| Secondary color 1 | `#E7CEA6` | 1 most-used-style use |
| Pink | `#EB5176` | — |
| Gray | `#8F8E94` | — |
| Keyboard gray | `#D1D5DBE5` | — |

Gradients:

- `Gradient 1`: `#3077E3` at 0% to `#5A96E3` at 100%.
- `Gradient 1`: `#4631E9` at 0%, `#A1C2F1` at 33%, `#E7CEA6` at 66%, and `#EB5176` at 100%.

## Type scale

Primary Inter styles:

| Size | Line height | Weight/style | Tracking |
|---:|---:|---|---:|
| 56px | 67px | Regular, SemiBold, Bold, ExtraBold | -1.12px |
| 48px | 58px | Regular, SemiBold, Bold, ExtraBold | -0.96px |
| 32px | 48px | Regular, SemiBold, Bold, ExtraBold | -0.64px |
| 24px | 32px | Regular, SemiBold, Bold, ExtraBold | -0.48px |
| 20px | 32px | Regular, SemiBold, Bold, ExtraBold | -0.4px |
| 16px | 24px | Regular, SemiBold, Bold, ExtraBold | -0.32px |
| 12px | 16px | Regular, SemiBold, Bold, ExtraBold | -0.24px |

Additional source styles:

- Inter Heading 4 Regular and SemiBold also use `24px / 37px`, tracking `-0.48px`.
- Inter Body 2 uses `12px / 16px`, tracking `-0.24px`.
- Inter Body 2 uses `16px / auto`, weight SemiBold, tracking `0px`.
- DM Sans Bold Text Title 3: `24px / auto`, tracking `0px`.
- Archivo Heading 4 Bold: `24px / auto`, tracking `-0.48px`.
- Default File Metadata: Inter Regular, `12px / auto`, tracking `0px`.
- Raw source examples include SF Pro Display Regular at `22px`, `25px`, and `26px`; SF Pro Text Regular at `16px`; SF Pro Text Bold at `10px`; Inter SemiBold at `15px`; Inter Medium at `32px`; Archivo Regular at `24px`; and Archivo SemiBold at `48px`.

Most-used styles include Inter Body 1 Regular, Inter Body 2 Regular, Inter Body 1 SemiBold, Inter Body 1 Bold, Inter Heading 5 SemiBold, Inter Heading 3 SemiBold, Inter Heading 2 SemiBold, and Inter Heading 4 SemiBold.

## Spacing scale

_No spacing variables found in source._

Concrete component spacing values:

- `0px`, `2px`, `4px`, `8px`, `10px`, `12px`, `16px`, `20px`, `24px`, and `32px` occur in component padding, gaps, or layouts.
- Mobile grid gutter: `20px`.
- Mobile grid section: `70.75px`.
- Common card padding: `16px`.
- Wallet Card padding: `16px 24px`.
- Button padding: `8px 24px`.
- Add Attachment padding: `12px`.
- Table Head padding: `12px`.
- Nav Bar padding: `16px`.
- Wrapper padding: `12px 16px 16px`.
- Modal Confirmation Dialog padding: `16px`.

## Radius scale

_No radius variables found in source._

Concrete component radii:

- `4px`: Toast.
- `8px`: Add Attachment, Button, Modal Confirmation Dialog.
- `12px`: Add New Wallet Button, Activity Card, Wallet Card, Card, Wrapper, Step.
- `61.83px`: profile image in source screen patterns.
- `99px`: Toggle Button.
- `100px`: Floating Action Button.

## Elevation & effects

Shadow styles:

- Small: drop shadow `16px`, offset `0 12px`, color `#0000000A`.
- Medium: drop shadow `24px`, offset `0 4px`, color `#0000001F`.
- Large: drop shadow `48px`, offset `0 12px`, color `#0000001F`.
- Extra Large: drop shadow `48px`, offset `0 12px`, color `#00000029`.
- Input Typing: drop shadow `0px`, offset `0 0`, color `#5A96E340`.

Other effects:

- Numeric Keyboard and Alphabetic Keyboard use background blur `108.73px`.
- Cover background artwork uses layer blur `200px`.
- Card, Activity Card, Wallet Card, Action, Toast, and Floating Action Button use the defined shadow styles.
- Overlay fill: `#313131`.

## Components

Allowed component families and concrete specifications:

- **Table Head** — `109x48px`; padding `12px`; gap `10px`; fill `#E5F0FF`; Inter Body 1 SemiBold. Variants: Default, Variant2, Variant3.
- **Illustration** — `236x420px`; fill `#FFFFFF`. Variants: 1, 2, 3, 4.
- **Toggle Button** — `36x20px`; radius `99px`; fill `#D6D6D6`. Variants: Off, On.
- **Accordion Button** — `60x24px`; gap `4px`; Inter Body 1 Regular. Variants: Default, Variant2.
- **Boleean Label** — `72x24px`; gap `8px`; Inter Body 1 Regular. Variants: Default, Variant2.
- **Nav Bar Button** — `44x52px`; gap `4px`; Inter Body 1 Regular. Variants: Active, Default.
- **Add New Wallet Button** — `343x56px`; radius `12px`; padding `16px`; gap `16px`; fill `#E5F0FF`; Inter Body 1 Regular.
- **Step** — `24x8px`; radius `12px`; fill `#3077E3`. States: Active, Inactive.
- **Action** — `88x111px`; gap `-1px`; Small shadow; Inter Body 1 Regular. Variants: 2, 2 With Button, 3 With Button.
- **Add Attachment** — `343x56px`; radius `8px`; padding `12px`; gap `0px`; fill `#F2F7FF`; stroke `#D6D6D6` at `1px`; Inter Body 1 Regular. Variants: Default, Filled.
- **Progress Bar** — `295x8px`; radius `100px`; fill `#FFFFFF`; variants: 0%, 25%, 50%, 75%, 100%.
- **Activity Card** — `343x84px`; radius `12px`; padding `16px`; gap `4px`; fill `#FFFFFF`; stroke `#FFFFFF` at `1px`; Small shadow. Variants: Expense, Income.
- **Wallet Card** — `343x108px`; radius `12px`; padding `16px 24px`; gap `4px`; fill `#FFFFFF`; stroke `#FFFFFF` at `1px`; Small shadow. Text uses Inter Heading 3 SemiBold and Body 1 Regular. Variants: Default, Used.
- **Wrapper** — `375x60px`; padding `12px 16px 16px`; gap `8px`; fill Gradient 1; Inter Heading 5 SemiBold. Variants: Default, With Icon Back, With Icon Back and More.
- **Card** — `365x136px` in Components and `343x84px` in Prototype; radius `12px`; padding `16px`; gap `4px`; fill `#FFFFFF` or `#E5F0FF`; stroke `#FFFFFF` at `1px`; Medium shadow for Components. Variants include Expense, Income, No Description, With Description, With Progress Bar 1, With Progress Bar 2, Default, Variant2.
- **Logo** — `252x57.06px`. Variants: Full Big, Full Medium, Full Medium - White, Logogram - Big, Logogram - Small.
- **Emoji** — `72x72px`. Variants cover the listed facial-expression emoji set, including Alien, Grinning Face, Smiling Face, Crying Face, Skull, Thinking Face, Worried Face, and others.
- **Toast** — `472x60px`; radius `4px`; padding `12px`; gap `12px`; fill `#5A96E3`; Small shadow; Inter Body 1 SemiBold. Variants: Default, Variant2, Variant4.
- **Divier** — `220x5px`; padding `2px 0`; gap `10px`. Types: Horizontal, Vertical.
- **Status Bar** — `375x44px`; fill `#8F8E94`; Inter SemiBold at `15px`. Variants: Dark Mode No, Dark Mode Yes.
- **Home Indicator** — `375x34px`; fill `#FFFFFF`. Variants: Dark Mode No, Dark Mode Yes.
- **Numeric Keyboard** — `375x291px`; fill `#D1D5DBE5`; background blur `108.73px`; text uses SF Pro Display Regular `25px` and SF Pro Text Bold `10px`. Variant: Dark Mode False.
- **Alphabetic Keyboard** — `375x291px`; fill `#D1D5DBE5`; background blur `108.73px`; text uses SF Pro Text Regular `16px` and SF Pro Display Regular `22px`. Variants: Uppercase False/True; Type Letters/Symbols.
- **Input Field Text Area** — `400x128px`; gap `8px`; Inter Body 1 Regular. Variants combine Label, Icon, Helper Text, and states Default, Disable, Error, Filled, Hover, Typing.
- **Input Field** — `400x48px`; gap `8px`; fill `#F2F7FF`; Inter Body 1 Regular. Variants combine Text Field type, Label, Icon placement, Text Beside Icon, Text Inside Field, Icon Above, Helper Text, and states Default, Disable, Error, Filled, Hover, Typing.
- **Button** — `123x40px`; radius `8px`; padding `8px 24px`; gap `8px`; fill `#3077E3`; Inter Body 1 SemiBold. Types: Icon Only, Primary, Secondary, Tertiary. Icon positions: Left, No, Right. States: Default, Disable, Hover.
- **Boolean Input** — `160x60px`; gap `12px`; Inter Body 1 Regular.
- **Overlay** — `375x812px`; fill `#313131`.
- **Floating Action Button** — `64x64px`; radius `100px`; fill `#3077E3`; Extra Large shadow.
- **Modal Confirmation Dialog** — `343x148px`; radius `8px`; padding `16px`; gap `16px`; fill `#FFFFFF`; Inter Body 1 SemiBold and Regular.
- **google** — `32x32px`; fill `#FFFFFF`.
- **Nav Bar** — `375x84px`; padding `16px`; gap `24px`; fill `#FFFFFF`; stroke `#FFFFFF` at `1px`; Inter Body 1 Regular.

## Screen patterns

- **Cover** — Large `1920x1080px` presentation surface with `32px` radius and `#F2F7FF` fill. Uses a blurred Gradient 1 ellipse, logo, large Inter Heading 2 text, profile identity content, and a supporting link.
- **Read Me** — `1612x1447px` documentation surface with `128px` padding, `56px` section gap, `16px` radius, and `#F2F7FF` fill. Uses Heading 1 and Heading 3 typography, dividers, license content, profile identity, and footer metadata.
- **Typography** — Foundation page showing Archivo typography on a white panel inside a `#D6D6D6` section with a `#0000001A` stroke.
- **Mobile finance screens** — Use `375px`-wide navigation, status bar, home indicator, keyboard, cards, wallet summaries, activity cards, inputs, progress bars, toasts, overlays, and confirmation dialogs.
- **Mobile layout** — The source defines a 4-column stretch grid with `20px` gutters and `70.75px` sections.

## Notes for implementers

- Use Inter for the main product UI unless a component explicitly specifies another typeface.
- Prefer the highest-usage colors and styles: `#FFFFFF`, `#3077E3`, `#F2F7FF`, `#585858`, `#ABA4A4`, `#E5F0FF`, and Inter Body 1 Regular.
- Preserve the distinction between background fills, surface fills, text neutrals, and semantic accents.
- Use `#3077E3` for primary buttons, progress steps, floating action buttons, and primary blue surfaces.
- Use `#22CD22` only for success and `#F45454` only for error.
- Use `12px` radius for cards and wallet surfaces; use `8px` for buttons, attachment controls, and dialogs.
- Apply the defined shadows rather than inventing new elevation values.
- Treat `Card` as two source-defined size contexts: `365x136px` for Components and `343x84px` for Prototype.
- The source contains no spacing, radius, motion, or local variable collections; use the concrete component values listed above.
