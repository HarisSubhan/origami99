# Rebuild the Custom Web Development page from scratch

Rewrite `/services/web-development/custom-web-development` as a standalone flagship page with its own hero, its own background treatment, and a narrative built entirely around custom web builds. Brand identity stays untouched: same colors, fonts, tokens, shell, header, footer and contact block as the rest of the site.

## Tone

Educational and consultative, never pitchy. It should read like a senior engineer walking a founder through how a serious website is actually built, with the sale landing naturally at the end. No fake statistics, no invented client names, no fake testimonials. Any number shown is framed as a target or a budget, not a claim.

## New page structure

1. **Hero, new composition**
   A left narrative column with a fresh headline and subhead, plus a right-side signature visual: a live "build console" panel that shows a site being assembled (route tree resolving, bundle size settling, vitals turning green). Replaces the current three-bar meter.

2. **New background**
   A page-specific ambient layer: soft blueprint grid that fades toward the fold, faint drifting node-and-line lattice suggesting a rendered DOM, all drawn from existing theme tokens so light and dark both hold. Cheap CSS/SVG only, no new WebGL, so mobile stays fast.

3. **The honest framing**
   A short section on when a template is genuinely the right answer and when it stops being one. Builds trust by not claiming custom always wins.

4. **Anatomy of the build**
   An annotated diagram of the stack: content layer, render layer, edge layer, measurement layer, with a plain-language note on what decision gets made at each and what happens if you get it wrong.

5. **How a page actually loads**
   A horizontal timeline from request to interactive, marking where most sites lose their speed and what we do at each step.

6. **The performance budget**
   Presented as a contract each commit is measured against, with the reasoning behind each ceiling rather than just the number.

7. **Content model, the part nobody plans**
   A realistic before/after of a badly modelled CMS versus a properly modelled one, shown as a small schema mockup, plus what that means for the marketing team's day to day.

8. **Search architecture**
   What gets authored per route, what gets generated, and how redirects and internal linking are handled as owned systems.

9. **Engagement shape**
   Phases, what you receive at each, and who from your side is involved. No fixed week counts presented as promises.

10. **Objections, answered directly**
    Rewritten FAQ covering cost versus platform, who edits after launch, what happens if we disappear, and testing without wrecking performance.

11. **Close plus related capabilities**
    A quieter CTA offering a review of the current site, then links to Shopify, Webflow/Framer and SEO.

## Technical notes

- Only `src/components/service-pages/web-custom.tsx` is rewritten. Route file, metadata, canonical and JSON-LD stay as they are.
- Continues to use the shared atoms from `_shared.tsx` (`PageShell`, `SectionTitle`, `Panel`, `Chip`, `Faq`, `Related`, `ContextCta`, `CtaButton`) so the page stays consistent with the rest of the site.
- Custom sections are local to this file, including a page-scoped hero wrapper so the new background doesn't leak into other sub-service pages.
- All color via semantic tokens, verified in light and dark.
- Responsive down to 360px: diagrams collapse to stacked cards, the timeline becomes vertical.
- No hyphens, en dashes or em dashes in the copy, per the existing site rule.
