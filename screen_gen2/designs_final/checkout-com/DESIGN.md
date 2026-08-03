---
name: nike-e-commerce-website-checkout-page-community
source: NIKE E-COMMERCE WEBSITE CHECKOUT PAGE (Community)
kind: design-system-context
---

# checkout-com - Design System

## Overview

Single desktop checkout/product screen from the Nike e-commerce website source. The screen combines a dark product presentation area with product imagery, navigation, search, wishlist/cart actions, ratings, and a payment form.

## Design language

- Dark, high-contrast interface.
- White typography and controls over dark surfaces.
- Rounded pill-shaped navigation and control surfaces.
- Product-focused presentation with large promotional headline text.
- Checkout form uses compact dark input fields and a prominent order action.
- Typography uses Poppins and Inter in regular, light, and semibold weights where specified.

## Color palette

Ranked by usage in the source:

1. `#FFFFFF` — 14 uses; primary light text, icons, and high-contrast elements.
2. `#1D1D1D` — 5 uses; dark input and form surfaces.
3. `#7E7E7E` — 5 uses; secondary labels and supporting form text.
4. `#5050504D` — 3 uses; translucent rounded control surfaces with background blur.

## Type scale

- Poppins Regular — `19.72px`; primary navigation labels.
- Inter Regular — `16.34px`; form labels and supporting text.
- PT Sans Caption CaptionBold — `74.36px`; large product headline.
- Questrial Regular — `30.92px`; product subheading.
- PT Sans Caption CaptionBold — `30.92px`; brand label.
- Questrial Regular — `17px`; product description.
- Poppins Regular — `17.49px`; search label.
- Inter Regular — `16px`; ratings and review text.
- Inter Regular — `14.43px`; credit-card section label.
- Inter Light — `30.47px`; masked card number.
- Poppins Regular — `27.52px`; masked security value.
- Inter Regular — `17.24px`; expiry placeholder.
- Inter Light — `31.56px`; masked CVV value.
- Inter Regular — `16.14px`; payment method label.
- Inter SemiBold — `19.3px`; primary order action.
- Inter Regular — `13.49px`; payment method value.
- Inter Regular — `12.79px`; rating score.

## Spacing scale

_None found in source._

## Radius scale

- `0px` — group containers.
- `4px` — primary card input and order action.
- `4.13px` — order-form control.
- `4.44px` — payment-method control.
- `5.29px` — expiry and CVV fields.
- `5.69px` — compact form control.
- `21.2px` — product image container.
- `22.86px` — rating control.
- `33.46px` — search and icon controls.

## Elevation & effects

- Background blur: `8px`, applied to translucent rounded control surfaces.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

- Desktop canvas: `1440x1024px`.
- Product hero area includes a large product image, brand label, product name, tagline, description, rating summary, and review count.
- Header navigation includes Nike branding, Men, Women, New & Feaature, Kids, Search, favorite, and shopping cart actions.
- Checkout area includes credit-card details, masked card number, expiry date, CVV, terms and condition, payment method selection, and a PLACE ORDER action.
- Primary order action is a full-width form control measuring `420x46.25px`.
- Credit-card entry fields use dark surfaces with rounded corners.

## Notes for implementers

- Preserve the dark, high-contrast visual hierarchy using only the documented palette.
- Use `#FFFFFF` for primary content and controls, `#7E7E7E` for secondary form labels, `#1D1D1D` for form fields, and `#5050504D` for translucent rounded header controls.
- Use Poppins for navigation and search, and Inter for checkout and supporting interface text.
- Keep the product headline visually dominant at `74.36px`.
- Use the documented radius values rather than introducing additional corner sizes.
- Apply `background_blur` at `8px` only to the translucent rounded control surfaces.
- No reusable component families or local design tokens were extracted; implement the documented patterns directly.
