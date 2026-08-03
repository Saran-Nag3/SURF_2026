---
name: hess
source: Website Exploration (Community)
kind: design-system-context
---

# hess - Design System

## Overview

- Image-led tourism and lifestyle content platform interface.
- Primary desktop frame: 1440×908px.
- Core layout uses a large white content panel sized 588×868px over a #F1F0EE canvas and photographic backgrounds.
- Visual focus: editorial serif headlines, compact sans-serif navigation and controls, coral accents, thin rules, and layered shadows.
- No local variables, paint styles, text styles, spacing styles, radius variables, motion variables, grid styles, or component families were found.

## Design language

- Editorial and restrained: use Noto Serif SC ExtraLight for large headlines and descriptive content.
- Functional UI uses Museo Sans with bold labels, medium action text, and thin supporting metrics.
- Real Text Pro Book appears in the alternate full-page content screen.
- Use predominantly black and white with a single coral accent, #E0604E.
- Use thin 1px black rules at reduced opacity for separators.
- Place content over large photographic imagery with white editorial panels and pronounced drop shadows.
- Navigation labels include “Solutions”, “Sign up”, and “Login”.
- Decorative controls use small outlined geometric shapes and circles.

## Color palette

Ranked by observed usage:

| Color | Uses | Primary role |
|---|---:|---|
| #000000 | 106 | Primary text, rules, icons, logos, overlays |
| #FFFFFF | 22 | Content panels, button text, light surfaces |
| #E0604E | 10 | Accent actions and highlighted navigation |
| #EFEFED | 6 | Neutral light surface |
| #F1F0EE | 6 | Primary frame background |
| #C4C4C4 | 4 | Gray image/card placeholder surfaces |
| #CBCBCB | 4 | Gray image/card placeholder surfaces |
| #1C1A1C | 3 | Dark modal/header surface |
| #FFFFFF1A | 3 | Translucent white decorative/control fill |
| #FFFFFF33 | 3 | Translucent white decorative fill |

Additional observed treatments:

- Secondary feature labels use #000000 at 20% opacity.
- Subtle separators use #000000 at 5% or 10% opacity.
- Navigation and progress group elements use #000000 at 40% opacity.
- The coral action fill is #E0604E with #FFFFFF text.
- Dark modal/header surfaces use #1C1A1C.

## Type scale

| Size | Family | Weight/style | Uses |
|---:|---|---|---:|
| 40px | Noto Serif SC | ExtraLight | Primary heading; 6 uses |
| 20px | Museo Sans | 100 | Metrics and large lightweight values; 5 uses |
| 16px | Museo Sans | 700 | Feature labels and modal actions; 23 uses |
| 16px | Noto Serif SC | ExtraLight | Supporting editorial copy; 5 uses |
| 16px | Real Text Pro | Book | Content-page subheading |
| 14px | Museo Sans | 700 | Navigation and compact labels; 15 uses |
| 14px | Museo Sans | 500 | Modal actions; 8 uses |
| 14px | Noto Serif SC | ExtraLight | Editorial body copy; 6 uses |
| 14px | Real Text Pro | Book | Alternate content-page navigation and body styling; 6 uses |

Hierarchy guidance:

- Use the 40px Noto Serif SC ExtraLight style for “Turning your content into an experience”.
- Use the 16px Noto Serif SC ExtraLight style for supporting editorial copy.
- Use Museo Sans 700 at 16px for feature labels such as “Simple Routing”, “Currate Places with a few clicks”, and “Add photos”.
- Use Museo Sans 700 at 14px for navigation such as “Solutions”, “Sign up”, and “Login”.
- Use Museo Sans 500 at 14px for “Save” and “Cancel”.
- Use Museo Sans 100 at 20px for values such as “287km, 4.5h” and location names.

## Spacing scale

_None found in source._

Observed layout dimensions are not a spacing token system. Repeated content widths include 344px, modal width 310px, and primary panel width 588px.

## Radius scale

- 0px: primary panels, image/card surfaces, groups, and most rectangles.
- 5px: coral action controls sized 135×40px and the paired action group sized 290×40px.

No local radius variables were found.

## Elevation & effects

Observed drop shadows:

- Outer frame/group: 44px effect depth with offset 0px, 4px.
- Main white panel: 54px effect depth with offset -10px, 44px.
- Modal/card surface: 44px effect depth with offset 0px, 24px.
- Decorative circles: 34px effect depth with offset 0px, 34px.
- Large image/card surfaces: 74px effect depth with offset 20px, 24px.
- Secondary image/card surfaces: 34px effect depth with offset 20px, 24px.

Effects are used to separate white panels and cards from photographic backgrounds. No local effect styles were found.

## Components

_None found in source._

Reusable visual patterns observed but not extracted as component families:

- White editorial content panel: 588×868px, 0px radius, with a pronounced shadow.
- Coral action button: 135×40px, 5px radius, #E0604E fill, #FFFFFF label.
- Modal/action card: approximately 310px wide with a dark #1C1A1C header, white surface, coral primary action, and paired “Save” / “Cancel” actions.
- Navigation cluster: “Solutions”, “Sign up”, and “Login” with a small outlined 6×6px indicator beside “Solutions”.
- Image card compositions using gray surfaces and layered shadows.

## Screen patterns

- **Cover / 3:** 1440×908px canvas with #F1F0EE background, oversized photographic imagery, a 588×868px white editorial panel, navigation, a 40px serif headline, supporting copy, feature labels, and an Add Routes modal.
- **Content / 1:** Image-led screen with the same white editorial panel and navigation. The active feature copy references “Currate Places with a few clicks”; modal action is “Add Place”.
- **Content / 2:** Image background with a darkened overlay. The white editorial panel remains, with a separate Save/Cancel action group and active copy referencing “Add photos”.
- **Content / 3:** Repeats the editorial panel, image background, route card, progress line, navigation, and Add Routes modal.
- **Content / 4:** Image-led editorial panel with the same headline, feature list, navigation, and decorative outlined shapes; no modal content is shown.
- **Content / 5:** Full-page white content layout sized 1440×908px. Navigation spans a 1230px-wide group, with “Solutions” in coral, “Blog”, “Contact”, “Sign up”, and “Login”. The page combines a 40px serif headline, 14px serif body copy, a 466×466px layered image/card area, and a 214.26×268.26px secondary image/card area.

## Notes for implementers

- Preserve the 1440×908px desktop composition when reproducing the extracted screens.
- Treat the 588×868px white panel as the primary structural anchor for the Cover and Content screens.
- Keep the headline at 40px Noto Serif SC ExtraLight and the headline content exactly as shown: “Turning your content into an experience”.
- Use #E0604E only for highlighted actions and selected navigation.
- Use #000000 for primary text and linework; reduce opacity for secondary labels and subtle separators.
- Use white surfaces and photographic imagery as the dominant contrast relationship.
- Keep most surfaces square with 0px radius; reserve 5px radius for coral action controls.
- Recreate modal actions as a coral “Save” control paired with a black “Cancel” label.
- Do not assume a component library, tokenized spacing system, or local Figma styles; none were extracted.
