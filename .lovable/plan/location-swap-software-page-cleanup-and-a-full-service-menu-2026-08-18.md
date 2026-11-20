# Location swap, software page cleanup, and a full service menu

Three pieces of work: replace Lithuania with Germany everywhere, do a detail pass on the software service page (kill duplicate sections, simplify the words, rename the service), and rebuild the header menu so every sub service is reachable from its parent service.

## 1. Lithuania out, Germany in

Every location mention in the codebase, replaced with Germany (Berlin, flag DE, timezone Europe/Berlin):

- Global presence map: the Vilnius pin becomes Berlin, Germany, "EU Operations", with the map coordinates moved to Berlin's position.
- The follow the sun line on that section is rewritten: Islamabad hands off to Berlin, Berlin to Toronto, Toronto to Austin.
- Contact section country list.
- Footer city clock row (label plus the live timezone it ticks on).
- Home page FAQ structured data ("Pakistan, Saudi Arabia, Germany, Canada and the USA").
- Privacy policy paragraph.
- public/llms.txt agency description.

After the edit I run a repo wide search to confirm zero remaining Lithuania, Vilnius or Lithuanian flag references.

## 2. Software service page, detail and content pass

### Duplicate closing sections

The page ends with two closing pitches that do the same job: a large "Ready to build something that actually ships" block, then immediately a second "Ready to ship your software engineering" block above the contact form. Both live in `PremiumServicePage`.

Fix: keep one. The standalone dark CTA section is removed, and the contact block keeps a single tightened headline, one short line of copy, and the trust row (NDA, reply in one business day, senior team). The email link and the proof strip that only existed in the removed block are folded into the surviving section so nothing is lost. This applies to every service page that uses this template, so web development, digital marketing, SEO and brand identity all get the same fix.

### Service rename

"Software Engineering" is accurate but heavy. It becomes **Software Development** everywhere it is shown to a visitor: nav, service card, page hero, headings, metadata titles and descriptions, and the console copy. The URL stays `/services/software` so nothing already indexed breaks.

### Full page audit

I go through the software page section by section, top to bottom, and check:

- Repeated ideas across sections (senior only team, you own the code, weekly demos, six week MVP each appear more than once). Each claim gets one home; the repeats are cut or reworded so the page reads like one argument instead of a loop.
- Heading hierarchy: one H1, sensible H2 and H3 order.
- Copy rewritten in plain, short, confident words. Same authority, fewer engineering words. For example "multi tenant architecture with entitlements and observability" becomes something a business owner reads without stopping, while the technical detail stays available lower on the page.
- Every button and link goes somewhere real, on desktop and phone.
- Metadata: title, description, og and twitter tags, canonical, and the structured data all use the new service name.
- No em dashes anywhere, in this or any future work.

I do the same audit pass on the five software sub service pages so the wording and the closing sections match.

## 3. Menu with sub service flyouts

Today the header Services dropdown lists the five top level services in a flat panel. New behaviour:

**Desktop and large screens.** Hovering Services opens a two column mega panel. The left column is the service list (Software Development, Web Development, Digital Marketing, SEO, Brand Identity). Hovering or focusing a service loads its sub services into the right column with a quick fade and slide, along with a short line of copy and a "View all" link to the parent service page. Software Development, Web Development and Digital Marketing each have five sub pages; SEO and Brand Identity have none, so their panel shows the service summary and a direct link instead of an empty column. Keyboard arrows and Escape work, the panel stays open while the cursor travels diagonally toward it, and the whole thing respects reduced motion.

**Phone.** The mobile sheet becomes a two level accordion. Tap a service to expand its sub services underneath it, with the parent page as the first item in the list. Only one service stays open at a time so the sheet never becomes a wall of links, and tapping any link closes the sheet.

Sub service lists are read from the existing sub service data, so any page added later appears in the menu automatically.

## Technical notes

- Location data lives in `src/components/site/GlobalPresence.tsx`, `Contact.tsx`, `Footer.tsx`, plus `src/routes/index.tsx`, `src/routes/privacy.tsx`, `public/llms.txt`.
- The duplicate CTA is `PremiumServicePage.tsx` around the final CTA section and the contact wrapper that follows it.
- The rename touches `SERVICES[0].title` in `src/lib/services-data.ts`, the software route head tags, the console and hero copy. Slug and routes unchanged.
- The menu is rebuilt in `src/components/site/Header.tsx`, pairing `SERVICES` with `getSubServicesFor(parent)` from `src/lib/sub-services.ts`.
- Verification: Playwright pass at phone and desktop widths for the menu open states and the software page bottom, plus a repo search for leftover Lithuania strings and em dashes.
