---
name: waste-management-mobile-application-community
source: Waste Management Mobile Application (Community)
kind: design-system-context
---

# waste-management - Design System

## Overview

- Mobile waste-management community application.
- Source pages: Design, Artboard, Page 3.
- Primary extracted screens:
  - Sign Up
  - Register
  - Onboarding 1/2
  - Onboarding 2/2
  - Home
- Mobile frame reference: 394×852px for authentication and onboarding screens.
- Main content width: 362–363px.
- No local variable collections found.

## Design language

- Clean mobile utility interface with a white base and dark green primary actions.
- Headings use Poppins Bold at 32px in #2B4B40.
- Most interface text uses Poppins, with supporting Inter and Roboto styles.
- Primary buttons use #2B4B40 with white text and 8px radius.
- Authentication uses stacked labeled fields, light gray borders, and tab-like Sign Up/Register switching.
- Home content uses card-based layouts, rounded containers, utility icons, notifications, profile access, and waste-related actions.
- Decorative onboarding content is centered vertically within a constrained mobile layout.
- Grid reference: 4 columns with 78.5px sections and 16px gutters; rows use 8px sections and 20px gutters.

## Color palette

Ranked by raw usage count:

| Color | Usage | Recommended use |
|---|---:|---|
| #000000 | 327 | Primary text and dark icon detail |
| #E0E0E0 | 124 | Input borders, inactive controls, neutral surfaces |
| #2B4B40 | 78 | Primary actions and headings |
| #FFFFFF | 69 | Base surfaces, button text, icon fills |
| #1E1E1E | 59 | Dark interface content |
| #3F3D56 | 40 | Supporting dark accent |
| #3A6351 | 26 | Secondary green accent |
| #F3F2F0 | 24 | Soft neutral surfaces |
| #57B894 | 21 | Green decorative accent |
| #292828 | 12 | Secondary dark content |
| #D9D9D9 | 9 | Placeholder or image-like neutral surface |
| #E6E6E6 | 7 | Light neutral detail |
| #2F2E41 | 6 | Dark accent |
| #319F43 | 5 | Green accent |

Named neutral tokens:

- Neutral/10: #F5F5F5
- Neutral/50: #737373
- Neutral/100: #0A0A0A

Additional extracted effect colors:

- #00000014
- #0000003D
- #FFFFFF40

## Type scale

Use the following extracted styles as discrete options:

| Size | Family | Weight | Usage |
|---:|---|---:|---|
| 32px | Poppins | Bold | Main screen headings |
| 20px | Poppins | Regular | Sign Up/Register switch labels |
| 18px | Poppins | SemiBold | Secondary headings where emphasized |
| 18px | Poppins | Regular | Field labels, prominent text, button labels |
| 16px | Poppins | Regular | Supporting interface text |
| 14px | Poppins | Medium | Medium-weight supporting text |
| 14px | Poppins | Regular | Input placeholders and body text |
| 14px | Poppins | SemiBold | Emphasized supporting text |
| 13px | Inter | SemiBold | Instagram Embed text |
| 12px | Roboto | Medium | Body/Small/Medium token; line height 16px; tracking 0px |
| 12px | Inter | Bold | Instagram Embed text |
| 12px | Inter | Medium | Instagram Embed text |
| 12px | Poppins | Medium | Compact labels |
| 12px | Poppins | Regular | Tabs and compact body text |
| 12px | Poppins | SemiBold | Compact emphasized text |
| 10px | Poppins | Regular | Small supporting text |

Usage priority from raw extraction:

- Poppins Regular 18px: 135 uses
- Poppins Regular 12px: 50 uses
- Poppins Regular 14px: 37 uses
- Poppins SemiBold 18px: 19 uses
- Poppins Regular 10px: 17 uses
- Poppins SemiBold 12px: 16 uses
- Poppins Medium 14px: 14 uses
- Inter Medium 12px: 8 uses
- Poppins Medium 12px: 7 uses
- Inter Bold 12px: 6 uses
- Poppins SemiBold 14px: 6 uses
- Inter SemiBold 13px: 4 uses
- Poppins Regular 16px: 4 uses
- Poppins Regular 20px: 4 uses
- Poppins Bold 32px: 3 uses

## Spacing scale

No spacing variables were defined. Use these observed layout values:

- 0px: zero padding and zero gaps
- 2px: timer gap
- 4px: field label-to-input gap; compact container padding
- 5px: compact horizontal container padding
- 8px: icon or compact content gaps; grid row section
- 9px: Instagram Embed vertical padding
- 10px: button and input padding; common component gap
- 12px: Instagram Embed gap
- 16px: primary stack gap; grid gutter; common section gap
- 18px: password section gap
- 20px: onboarding spacing; grid row gutter
- 21px: social sign-in stack gap
- 24px: card padding
- 25px: home content gaps
- 32px: password input content gap; social icon gap
- 36px: onboarding outer gap
- 39px: onboarding outer gap
- 40px: common icon and control dimension
- 105px: home header spacing

Observed padding patterns:

- 4px 4px 4px 4px
- 4px 10px 4px 10px
- 5px 10px 5px 10px
- 8px 0px 8px 0px
- 9px 0px 9px 0px
- 10px 4px 10px 4px
- 10px 5px 10px 5px
- 10px 10px 10px 10px
- 24px 24px 24px 24px

## Radius scale

Observed radii:

- 4px: Instagram Embed
- 8px: inputs, tabs, buttons, compact controls, RSVP Button, proicons:checkmark
- 16px: Home bill card
- 300px: circular back control

No radius variables were defined.

## Elevation & effects

- `small`: drop shadow, 2px offset, 0 2px, color #0000003D.
- `elevation mini`: drop shadow, 16px offset, 0 8px, color #00000014.
- `aurora`: inner shadow, 2px offset, 0 -2px, color #FFFFFF40.
- `aurora` and `small` each appear 2 times.
- `elevation mini` appears 1 time.
- Background blur effects are present in the source but their associated gradient colors are not part of the allowed palette.

## Components

Only use the extracted component families below.

### Buttons and controls

- **Button**
  - Size: 344×56px.
  - Radius: 8px.
  - Padding: 10px on all sides.
  - Vertical layout; centered alignment; 10px gap.
  - Fill: #2B4B40.
  - Text: Poppins Regular, 18px.
- **RSVP Button**
  - Size: 51×26px.
  - Radius: 8px.
  - Horizontal layout; centered alignment.
  - Padding: 4px 10px.
  - Gap: 10px.
  - Fill: #2B4B40.
  - Text: Poppins Medium, 12px.
- **proicons:checkmark**
  - Size: 51×29.55px.
  - Radius: 8px.
  - Padding: 10px 4px.
  - Vertical layout; centered alignment.
  - Stroke: #2B4B40, 1px.
- **Tabs**
  - Size: 362×58px.
  - Horizontal layout.
  - Text: Poppins Regular, 12px.
  - Variants: Billing, Home, More, Support.
- **Frame 15**
  - Size: 362×58px.
  - Horizontal layout with space-between alignment.
  - Padding: 0px 20px.
  - Gap: 10px.
  - Text: Poppins Regular, 12px.
- **Component 1**
  - Size: 51×26px.
  - Horizontal layout.
  - Text: Poppins Medium, 12px.
  - Variant: Property 1 / Frame 19 / proicons:checkmark.

### Authentication and onboarding

- **Password Visibility Icon**
  - Size: 16×16px.
  - Fill: #FFFFFF.
- **Text**
  - Size: 70×27px.
  - Text: Poppins Regular, 18px.
  - Fill: #FFFFFF when used inside primary buttons.
- **weui:back-filled**
  - Size: 36×36px.
  - Radius: 300px.
  - Padding: 8px 0px.
  - Horizontal layout; centered alignment.
  - Fill: #F3F2F0.
- **mdi:tick-circle**
  - Size: 16×16px.
  - Fill: #FFFFFF.
- **devicon:google**
  - Size: 40×40px.
  - Fill: #FFFFFF.
- **devicon:facebook**
  - Size: 40×40px.
  - Fill: #FFFFFF.

### Social and utility icons

- `mingcute:warning-fill`: 16×16px, fill #FFFFFF.
- `material-symbols:call`: 24×24px, fill #FFFFFF.
- `uil:instagram`: 40×40px, fill #FFFFFF.
- `basil:viber-solid`: 40×40px, fill #FFFFFF.
- `logos:messenger`: 40×38px, fill #FFFFFF.
- `logos:whatsapp-icon`: 40×40.31px, fill #FFFFFF.
- `lucide:copy`: 20×20px, fill #FFFFFF.
- `material-symbols:info-outline`: 24×24px, fill #FFFFFF.
- `hugeicons:garbage-truck`: 24×24px, fill #FFFFFF.
- `mingcute:box-line`: 24×24px, fill #FFFFFF.
- `marketeq:iron`: 25×25px, fill #FFFFFF.
- `la:wine-bottle`: 24×24px, fill #FFFFFF.
- `ei:plus`: 25×25px, fill #FFFFFF.
- `ei:minus`: 25×25px, fill #FFFFFF.
- `mynaui:book-solid`: 24×24px, fill #FFFFFF.
- `solar:star-line-duotone`: 24×24px, fill #FFFFFF.
- `mdi:user-outline`: 24×24px, fill #FFFFFF.
- `mdi:camera-outline`: 24×24px, fill #FFFFFF.
- `mdi:map-marker-outline`: 24×24px, fill #FFFFFF.
- `majesticons:share-line`: 24×24px, fill #FFFFFF.
- `material-symbols:volunteer-activism-outline`: 24×24px, fill #FFFFFF.
- `material-symbols:article-outline`: 24×24px, fill #FFFFFF.
- `tabler:bulb`: 24×24px, fill #FFFFFF.
- `material-symbols:event`: 24×24px, fill #FFFFFF.
- `material-symbols:recycling`: 24×24px, fill #FFFFFF.
- `material-symbols:schedule-outline`: 24×24px, fill #FFFFFF.
- `tabler:bell`: 40×40px, fill #FFFFFF.
- `material-symbols:home-outline`: 40×40px, fill #FFFFFF.
- `bx:support`: 40×40px, fill #FFFFFF.
- `octicon:kebab-horizontal-24`: 24×24px, fill #FFFFFF.

### Content embeds

- **Instagram Embed**
  - Size: 360×777px.
  - Radius: 4px.
  - Vertical layout.
  - Padding: 9px 0px.
  - Gap: 12px.
  - Fill: #FFFFFE.
  - Stroke: #DBDCDB, 0.4px.
  - Text styles: Inter Medium 12px, Inter Bold 12px, Inter SemiBold 13px, Inter Medium 10px, Inter SemiBold 12px.

## Screen patterns

### Sign Up

- White 394×852px mobile frame.
- Centered 362px-wide main container with 16px vertical gaps.
- 32px Poppins Bold heading in #2B4B40.
- 362×48px Sign Up/Register switch bar with #E0E0E0 fill and 8px radius.
- Active Sign Up segment: white fill, 8px radius.
- Form fields:
  - 18px Poppins Regular labels in #000000.
  - 14px Poppins Regular placeholders in #E0E0E0.
  - 41px-high input container with 10px horizontal padding.
  - #E0E0E0, 1px stroke.
- Password field includes Password Visibility Icon.
- “Forgot Password?” appears below the password field.
- Primary Register button fills the 362px content width and is 56px high.
- Social sign-in options use 40px icons.

### Register

- Same 394×852px white frame and 362px-wide structure as Sign Up.
- Register segment is the active white segment.
- Form contains Email, Password, and Confirm Password fields.
- Password and Confirm Password fields include Password Visibility Icon.
- Terms row uses `mdi:tick-circle` and 12px Poppins Regular text.
- Primary Register button is 362×56px, radius 8px, fill #2B4B40.

### Onboarding 1/2

- White 394×852px mobile frame.
- 363px-wide centered content area.
- Safasathi Logo frame: 49×48px.
- Three stacked 363px-wide input areas:
  - Two 72px fields.
  - One 78px phone field.
  - 4px label-to-input gap.
  - 10px horizontal input padding.
  - #E0E0E0, 1px input stroke.
- Phone field includes the visible `+977-` prefix.
- One outlined 363×56px action button with #2B4B40, 1px stroke.
- One filled 362×56px primary action button using #2B4B40.

### Onboarding 2/2

- White 394×852px mobile frame.
- 363px-wide content area with 39px vertical separation.
- Safasathi Logo frame: 49×48px.
- Centered 200×200px neutral circular image placeholder using #D9D9D9.
- Supporting label below the placeholder uses Poppins Regular, 18px.
- Three stacked outlined 363×56px action buttons.
- Outlined buttons use #2B4B40, 1px stroke, and 8px radius.

### Home

- White 394px-wide mobile screen; extracted height 1550px.
- 362px-wide header with:
  - 32px Poppins Bold heading in #2B4B40.
  - 40px notification icon.
  - 40px profile image container.
- Main content uses 362px-wide stacked sections.
- Bill card:
  - 360×168px.
  - Radius: 16px.
  - 24px internal padding.
  - Uses the `small` shadow effect.
- Home utility cards use 104×75px dimensions, 8px radius, and #F3F2F0 fill.
- Waste-related actions use the extracted recycling, garbage-truck, box, iron, wine-bottle, plus, and minus icon families.
- Navigation and service areas use home, support, bell, article, event, schedule, volunteerism, bulb, and kebab icon families.

## Notes for implementers

- Do not introduce colors outside the allowed palette.
- Prefer the ranked colors for repeated UI decisions: #000000, #E0E0E0, #2B4B40, and #FFFFFF.
- Use #2B4B40 for primary buttons and major headings.
- Use #E0E0E0 for field borders, inactive tab surfaces, and neutral controls.
- Preserve the 394px mobile frame and 362–363px content width for authentication and onboarding layouts.
- Use 8px radius for standard controls and 16px radius for the Home bill card.
- Keep labels at Poppins Regular 18px unless a more specific extracted style applies.
- Use the Roboto Medium 12px / 16px style only where the Body/Small/Medium token is intended.
- Use only the listed component families; do not substitute unlisted icon families.
- No spacing, radius, motion, or local variable collections were defined; rely on the observed concrete values above.
