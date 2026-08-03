---
name: dana-app-community
source: dana app (Community)
kind: design-system-context
---

# dana - Design System

## Overview

- Mobile-first Dana e-wallet interface extracted from Figma file `dana app (Community)`, Page 1.
- Primary viewport: `375x812px`.
- Visual direction: bright blue surfaces, white content, dark navy text, rounded mobile cards and controls.
- No local variable collections, component families, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Use a vivid blue as the primary surface color, especially for splash, onboarding content areas, sign-in headers, and PIN screens.
- Use white for high-contrast text, logos, status bars, and card surfaces.
- Use dark navy text on white or pale backgrounds.
- Onboarding screens use pale gray backgrounds, large pale-gray circular imagery backdrops, blue accent illustrations, and rounded white transaction cards.
- Controls use rounded corners, generous horizontal padding, and centered labels.
- Headings are large and light-to-medium weight, primarily `24px`; PIN keypad numerals use `32px`.
- The interface includes Indonesian copy such as `Dompet Digital untuk Anda!`, `Tetap Aman dengan Dana!`, `Pembayaran Lebih Mudah dari Sebelumnya!`, and `Selamat Datang kembali!`.

## Color palette

Ranked by extracted usage where counts were available:

| Color | Usage / role |
|---|---|
| `#FFFFFF` | 65 styled uses; 28 raw uses. White surfaces, text, logos, status bars, and icons. |
| `#0F1225` | 15 styled uses. Grayscale/Black. |
| `#75788D` | 14 styled uses. Grayscale/Light Text; secondary labels and PIN input text. |
| `#222741` | 14 styled uses. Grayscale/Text; primary dark text. |
| `#DCDDDF` | 12 styled uses. Grayscale/Dark Gray; inactive slide indicators. |
| `#EFEFEF` | 7 styled uses. Grayscale/Gray BG; onboarding and sign-in backgrounds. |
| `#3F63F6` | 6 styled uses. Primary/Blue/500; active slide indicators. |
| `#B2C6FE` | 4 styled uses. Primary/Blue/200; supporting onboarding copy and illustration accents. |
| `#F8F8F8` | 3 styled uses. Grayscale/Light Gray; large circular imagery backdrops. |
| `#1F36B1` | 2 styled uses. Primary/Blue/700; illustration details. |
| `#ACAEBE` | 2 styled uses. Grayscale/Light Text 2; tertiary transaction metadata. |
| `#14248E` | 1 styled use. Primary/Blue/800; blurred onboarding illustration accent. |
| `#99E86C` | 1 styled use. Primary/Green/500. |
| `#000000` | 62 raw uses. Black system or interface text. |
| `#108EE9` | 40 raw uses. Primary bright blue surface. |
| `#0000001A` | 8 raw uses. Black with transparency. |
| `#132256` | 7 raw uses. Dark blue. |
| `#00000099` | 6 raw uses. Black with transparency. |
| `#FFFFFF33` | 6 raw uses. White with transparency; Dana logo instance stroke. |
| `#E3F2F6` | 5 raw uses. Pale blue primary-button fill. |
| `#F4E5E5` | 5 raw uses. Pale red accent. |
| `#0E467A` | 4 raw uses. Dark blue accent. |
| `#3199E4` | 3 raw uses. Medium blue accent. |
| `#70CCE05C` | 3 raw uses. Translucent green accent. |
| `#D9D9D9` | 3 raw uses. Neutral gray accent. |

## Type scale

No local text styles were found. Use the following observed typography:

| Size | Family / weight | Observed usage |
|---:|---|---:|
| `40px` | Inter Regular | Splash title. |
| `40px` | General Sans Semibold | Sign-in title. |
| `40px` | Inter Bold | Home title. |
| `32px` | General Sans Medium | PIN keypad numerals and large labels. |
| `24px` | Inter Regular | Onboarding and authentication headings. |
| `16px` | General Sans Medium | Buttons and supporting controls. |
| `16px` | General Sans Regular | Onboarding body copy. |
| `16px` | Inter Regular | Account prompt. |
| `15px` | Inter Regular | Status-bar time. |
| `15px` | SF UI Text Semibold | Authentication status-bar time. |
| `14px` | General Sans Regular | Small transaction metadata. |
| `14px` | Inter Regular | Phone input label. |
| `14px` | General Sans Regular | PIN input text. |
| `13px` | Inter Bold | Small bold labels. |
| `12px` | Inter Medium | Small labels. |
| `10px` | Inter Bold | Small bold metadata. |
| `10px` | Inter Medium | Small metadata. |
| `8px` | Inter SemiBold | Smallest labels; highest raw typography count at 32 uses. |

Raw typography usage counts include: General Sans Medium `32px` — 22; General Sans Regular `14px` — 12; Inter Bold `13px` — 9; Inter Medium `12px` — 8; General Sans Medium `16px` — 7; Inter Medium `10px` — 7; Inter Regular `24px` — 6; Inter Bold `10px` — 3; Inter Regular `15px` — 3; Inter Regular `16px` — 3; SF UI Text Semibold `15px` — 3.

## Spacing scale

No spacing variables were found. Observed spacing values:

- `8px` gaps between common content elements and button icon/label groups.
- `12px` gaps between slide indicators and input groups.
- `16px` button horizontal padding and keyboard container gap.
- `20px` gaps between onboarding body content and controls.
- `24px` mobile horizontal page padding.
- `32px` button horizontal padding.
- `40px` vertical content padding.
- `48px`, `56px` header and content spacing.
- `59.47px`, `61.36px` transaction-card internal gaps.
- Status bars are `44px` high.
- Buttons are commonly `327x56px`; authentication PIN input cells are `44x44px`.

## Radius scale

No radius variables were found. Observed radii:

- `6px` — Dana logo instances.
- `8px` / `8.11px` / `8.37px` — transaction cards and text inputs.
- `12px` — buttons, sign-in logo tile, and illustration tiles.
- `16px` — onboarding illustration tiles.
- `24px` — primary mobile frames and some status-bar elements.
- `72px` — slide indicator containers.
- `0px` — decorative DANA shape group corners.

## Elevation & effects

- No local effect styles were found.
- Dana logo instances use `background_blur 22.27px`.
- Onboarding decorative blue rectangle uses `layer_blur 93.55px` with `20%` opacity.
- One phone input label uses `background_blur 4px`.
- Dana logo instances use a `6px` stroke in `#FFFFFF33`.
- No shadows or motion specifications were extracted.

## Components

No component families or component geometry were extracted.

Recurring instances observed in screens, without a defined component family:

- Button instances: commonly `327x56px`, `12px` radius, `16px 32px` horizontal padding, `8px` internal gap.
- Secondary buttons: `155x56px`, `12px` radius, `1px` white stroke.
- Text inputs: `327x52px` or `44x44px`, white fill, `8px` radius.
- PIN inputs: six `44x44px` white cells with `12px` gaps.
- Dana logo instances: approximately `156x96px` or `153x104px`, translucent white stroke and blur.
- Slide indicators: three `101x8px` segments with `12px` gaps and `72px` outer radius.
- Status bars: `375x44px`, white fill.

## Screen patterns

- **Splash Screen:** `375x812px` rounded frame with `#108EE9` fill, centered Dana logo, and a separate `1725x144px` dark title strip labeled `Splash Screen`.
- **Onboarding:** Three mobile slides share a pale gray background, a blue content panel, large white heading, optional supporting copy, rounded button controls, three-segment progress indicator, and a white status bar. Onboarding 1 emphasizes a single primary button and transaction-card imagery. Onboarding 2 uses supporting copy, one primary button, and Dana logo imagery. Onboarding 3 uses supporting copy, secondary and primary buttons, and two blue illustration tiles.
- **Sign-in:** Pale gray mobile screen with a blue header containing a white logo tile and welcome heading. The form includes a phone-number input with `+62`, a primary blue button, and a white account-creation prompt.
- **PIN:** Full blue mobile screen with a six-cell PIN input, `Masukkan PIN Anda` heading, a link button, a pale-blue action button, and a four-row numeric keyboard arranged in three columns.
- **Titles:** Dark text title strips use `40px` headings for `Splash Screen`, `Sign In`, and `Home`.
- **Status bar:** White `44px` strip with system-style time and decorative right-side status indicators.

## Notes for implementers

- Target the extracted mobile frame size of `375x812px`; primary page content commonly uses `24px` horizontal padding and `327px` content width.
- Preserve the rounded `24px` outer mobile frame where shown.
- Use only the palette values listed above; distinguish bright blue `#108EE9` surfaces from styled blue `#3F63F6` progress accents.
- Use `#E3F2F6` for pale-blue primary button fills where the source specifies it; use `#108EE9` for the sign-in primary button.
- Keep button height at `56px` and radius at `12px` unless the source pattern specifies another size.
- Use white text on blue surfaces and dark text on white or pale backgrounds.
- Treat decorative logo and icon groups as visual assets; their internal geometry was not extracted as reusable components.
- Do not infer missing spacing, radius, motion, grid, shadow, or component tokens beyond the observed values.
