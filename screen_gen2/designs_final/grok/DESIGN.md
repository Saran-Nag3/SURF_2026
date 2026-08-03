---
name: grok-ios-ui-community
source: Grok iOS UI (Community), Page 1
kind: design-system-context
---

# grok - Design System

## Overview

- iOS UI extraction from the Figma file “Grok iOS UI (Community)”, Page 1.
- Screens represented: Paywall, Chat, and Permissions.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion styles, effect styles, grid styles, or component sets were found.
- Primary visual direction: black-and-white interface surfaces with warm off-white chat backgrounds and orange status accents.

## Design language

- High-contrast monochrome UI.
- Paywall uses a black background, white content, rounded dark plan controls, and a prominent orange upgrade action.
- Chat and Permissions use a warm off-white page background with white or near-white cards.
- Controls are predominantly pill-shaped or softly rounded.
- Icons are simple monochrome line or filled glyphs.
- Typography uses SF Pro with semibold labels, medium controls, and regular supporting text.
- Orange is used sparingly as a model/status indicator and upgrade accent.

## Color palette

Ranked by observed usage:

| Color | Uses | Observed role |
|---|---:|---|
| `#000000` | 66 | Black backgrounds, text, icons, active controls, home indicator |
| `#FFFFFF` | 48 | Paywall text, surfaces, icons, status-bar content |
| `#E0E0DE` | 25 | Borders and control outlines |
| `#7D7D7B` | 13 | Secondary icon strokes and caret |
| `#FAFBF8` | 10 | Mode icon-container surfaces |
| `#252525` | 4 | Paywall plan-container border |
| `#7F7F7D` | 4 | Small mode labels |
| `#BABBB8` | 4 | Voice activation icon and text |
| `#7A7B78` | 3 | Input placeholder |
| `#7B7B7B` | 3 | Microphone icon |
| `#EF6229` | 3 | Model/status indicator |
| `#F8F6F5` | 3 | Chat and Permissions page backgrounds |
| `#FCFBFC` | 3 | Input container surface |

Additional source colors occur in raw gradients, translucent fills, modal overlays, shadows, and unstyled layers but are not included because they are outside the allowed palette.

## Type scale

Font family: SF Pro.

| Size | Weight | Uses | Typical role |
|---:|---|---:|---|
| 19px | Medium | 3 | Modal title |
| 17px | Semibold | 13 | Paywall features, status labels, primary text |
| 16px | Medium | 5 | Plan controls |
| 16px | Regular | 5 | Input placeholder and body input text |
| 16px | Semibold | 3 | Paywall skip action |
| 15px | Regular | 6 | Input option labels |
| 13px | Semibold | 10 | Mode labels |
| 13px | Regular | 3 | Billing and legal supporting text |
| 10px | Medium | 4 | Small “KIDS” labels |

## Spacing scale

No local spacing tokens were found. Observed layout values:

- 4px: compact internal padding and small gaps.
- 6px: mode-label and input-option gaps.
- 8px: input and control padding.
- 10px: input-container bottom padding and feature icon/text gap.
- 12px: plan-option gap and control padding.
- 14px: input-container internal gap.
- 16px: modal padding, input-container padding, and permission-row gaps.
- 18px: mode-selection gap.
- 20px: recurring component height and vertical spacing.
- 24px: feature-list gap and rounded input/card dimensions.
- 32px: compact control height and icon-container dimensions.
- 40px: modal content gap.
- 54px: iPhone status-bar height.
- 56px: paywall plan selector and upgrade-button height.
- 72px: mode icon-container height.
- 92px: input-container height.
- 96px: standard mode-container height.
- 114px: taller mode-container height.
- 152px: paywall feature-list height.
- 181px: permissions-list height.
- 353px, 361px, 369px: recurring content widths within the 393px viewport.
- 393px × 852px: extracted screen size.

## Radius scale

No local radius tokens were found. Observed radii:

- 0px: square vector containers.
- 20px: plan controls, mode icon containers, and upgrade button.
- 24px: chat input container.
- 32px / 32px / 24px / 24px: Permissions modal content with larger top corners.
- 99px: skip-button and compact input-option controls.
- 100px: home indicator and toggle geometry.

## Elevation & effects

- No local effect styles were found.
- Mode icon containers use layered drop-shadow effects with offsets including `0 1px`, `0 3px`, `0 6px`, `0 11px`, and `0 17px`.
- The paywall decorative vector uses a drop-shadow effect with offset `0 4px` and blur `8px`.
- Borders are commonly `#E0E0DE`, with observed stroke widths of `0.6px`, `0.8px`, and `1px`.
- Paywall plan controls use a `2px` border.
- No motion tokens were found.

## Components

No component families or component geometry were found in the source. Reusable structures are present only as screen-level repeated patterns:

- Rounded input container with placeholder and action controls.
- Compact pill input options.
- Mode icon tile with label.
- Bottom menu with list, model status, and edit actions.
- Paywall plan selector.
- Paywall upgrade button.
- Permissions modal with permission rows and toggles.

## Screen patterns

### Paywall

- Viewport: `393px × 852px`.
- Full black background.
- Top-left skip control: `58px × 32px`, white text, strongly rounded container.
- Centered decorative vector above the paywall title.
- White semibold title and a four-item feature list.
- Feature rows use `16px` star icons, `1.5px` white strokes, `10px` icon/text gap, and `24px` vertical spacing.
- Plan selector: `313px × 56px`, `20px` radius, `4px` padding, `12px` gap, dark fill, and `2px` `#252525` border.
- Upgrade button: `353px × 56px`, `20px` radius, white medium text, orange fill in the source.
- Billing and terms text use smaller regular typography.
- iPhone status bar and home indicator are included.

### Chat

- Viewport: `393px × 852px`.
- Page background: `#F8F6F5`.
- Input container: `369px × 92px`, `24px` radius, `#FCFBFC` fill, `1px` `#E0E0DE` border.
- Input container uses vertical padding `16px 8px 10px 8px` and a `14px` internal gap.
- Input options are `32px` high, pill-shaped, and separated by `6px`.
- Mode selection uses a horizontal gap of `18px`; standard mode tiles are `72px × 72px` with `20px` radius, `#FAFBF8` fill, and `0.8px` `#E0E0DE` border.
- Mode labels use `13px` SF Pro Semibold; small “KIDS” labels use `10px` SF Pro Medium.
- Voice activation uses a `16px` waveform icon and `15px` SF Pro Medium supporting text.
- Bottom menu is `369px × 24px` with `95px` spacing between major groups.
- Model status includes a `9px` orange indicator and a right caret.

### Permissions

- Uses the same `393px × 852px` warm off-white page and the same input, mode-selection, voice-activation, and bottom-menu patterns as Chat.
- A full-screen alert overlay presents a bottom modal.
- Modal: `393px × 454px`; content area: `393px × 420px`; top corners `32px`, bottom corners `24px`; white fill.
- Modal content uses `20px` vertical and `16px` horizontal padding with a `40px` section gap.
- Header combines a `32px` waveform icon with a `19px` SF Pro Semibold title.
- Permission rows are `361px × 42px`, use `16px` gaps, and include a `24px` icon, text container, and `51px × 31px` toggle.

## Notes for implementers

- Treat the extracted values as screen-specific observations rather than a formal token library; the source contains no local variables or styles.
- Preserve the 393px-wide iPhone composition and the repeated 369px content width used by the Chat and Permissions layouts.
- Use SF Pro and select weight by role: Semibold for prominent labels, Medium for controls and status text, Regular for placeholders and supporting text.
- Keep backgrounds and controls highly rounded, especially `20px`, `24px`, and pill radii.
- Use `#EF6229` only as a restrained accent; the dominant palette is `#000000`, `#FFFFFF`, `#F8F6F5`, `#FCFBFC`, and `#E0E0DE`.
- Do not introduce additional component families, colors, spacing tokens, radii, or effects not present in this extraction.
