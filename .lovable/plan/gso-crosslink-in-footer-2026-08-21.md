# GSO Crosslink in Footer

Add an engaging footer-only crosslink to gso.origami99.com so visitors know Origami 99 also runs a Pakistan-based general supply order service.

## What to build

- **Location**: place the element inside the footer, above the copyright bar, separate from the main 3 glass cards.
- **Design**: a compact, pill-shaped button / mini-card that looks like a sibling Origami 99 property, not a generic external link.
- **Visual idea**: package / box icon + a small "Also by Origami 99" tagline, followed by "General Supply Order (Pakistan)" and an arrow. Use the existing coral accent color, glass surface, and a subtle hover lift.
- **Copy constraints**: no em dashes. Keep words simple.
- **Responsiveness**: stays readable on mobile; inline flex layout that wraps if needed.
- **Accessibility**: external link opens in a new tab with `rel="noopener noreferrer"`, `aria-label` describes it.
- **Performance**: no extra animations beyond the existing hover transitions; no heavy CSS filters.

## Files to edit

- `src/components/site/Footer.tsx` — add the new crosslink element.
- `src/styles.css` — add a small utility class for the GSO button if needed (reuse existing glass / CTA tokens where possible).

## Verification

- Render the footer on mobile and desktop viewports.
- Confirm the link points to `https://gso.origami99.com` and opens externally.
- Confirm no em dashes appear in the copy.
