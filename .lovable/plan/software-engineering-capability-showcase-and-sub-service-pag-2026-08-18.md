# Software Engineering: Capability Showcase and Sub Service Page Overhaul

Goal: turn the Software Engineering pillar into the flagship of the site. Step one rebuilds the section that links to the five sub service pages. Step two rebuilds each sub service page, one page per stage, into an interactive, visual proof piece that sells without ever sounding like a sales pitch.

Everything already agreed for this project stays: Origami99 branding, coral accent tokens, existing routes, existing SEO head blocks, the backend and admin work. No em dashes anywhere in the plan or in any future code and copy for this website.

## Step 1: The capability launcher

Replaces the current four column card grid on /services/software, which reads flat and unevenly sized.

New concept: an interactive "Capability Console". A single wide, dark, glass panel that behaves like a piece of software rather than a set of marketing tiles.

- Left rail: five capability entries (Custom Software, SaaS Products, Mobile Apps, ERP, UI and UX). Hovering or focusing one drives the whole panel.
- Right stage: a live preview that morphs per capability. Each capability gets its own animated mini artefact built in SVG and CSS, not stock imagery:
  - Custom Software: a data flow graph with packets travelling along the edges.
  - SaaS Products: a multi tenant dashboard skeleton with a metric line drawing itself.
  - Mobile Apps: a phone frame with screens sliding through a real flow.
  - ERP: connected modules lighting up around a shared ledger core.
  - UI and UX: a wireframe resolving into a high fidelity screen.
- Motion: shared layout transition on the active indicator, a soft coral spotlight that tracks the pointer, and staggered reveals on scroll. Everything respects prefers-reduced-motion and falls back to a static first state.
- Mobile: the console collapses into a snap scrolling carousel where each card still carries its own animated artefact. Card heights become uniform, so the current ragged grid disappears.
- Each entry is a full link to its sub service route with a clear "Explore" affordance, keyboard accessible and crawlable as a real anchor.

## Step 2: Sub service pages, one per stage

Five pages, treated as separate stages so each gets full attention:

1. Custom Software Development
2. Custom SaaS Products
3. Mobile App Development
4. ERP Development
5. UI and UX Design

Each rebuilt page follows the same skeleton so the pillar feels like one system, while the signature visual in the middle is unique to that page.

Page skeleton:

```text
1  Hero          3D or canvas scene tied to the discipline, real H1, one line of proof
2  Reality       The situation the reader is already living, told as fact not fear
3  Signature     The page's unique interactive centrepiece
4  How we build  Scroll driven process spine, stage by stage
5  Under the hood Architecture or system diagram that animates as it enters view
6  Proof         Numbers, engineering standards, what we hand over
7  Fit           Where we are the right call and where we are not
8  FAQ + CTA     Answers first, invitation second
```

Signature centrepiece per page:

- Custom Software: an operations map where a spreadsheet dissolves into a modelled system, node by node, as you scroll.
- SaaS Products: a tenancy and billing simulator. Toggle plan tiers and seats and watch the architecture, limits and metering panels respond live.
- Mobile Apps: a device stage with a real, tappable flow running inside a phone frame, plus a release train showing build, review and rollout.
- ERP: a shared ledger core with finance, inventory, sales and HR modules orbiting it. Trigger an event and watch it propagate through every module.
- UI and UX: a fidelity slider that morphs one screen from sketch to wireframe to hi fi to shipped, in place.

3D usage: reserved for hero scenes and one accent per page using the libraries already in the project. Every 3D scene is client only, lazy loaded, capped by device pixel ratio, paused when offscreen, and replaced by a still gradient composition when reduced motion is on or WebGL is unavailable.

Content: rewritten per page to sound like a team that has shipped this many times. Specific, technical, unhurried, no superlatives, no fabricated case studies or invented client names. Metrics used are the ones already present on the site. Every page ends with an honest "when not to hire us" block, which is what makes the rest credible.

## Technical notes

- Step 1 edits the sub services section inside `src/components/service3d/PremiumServicePage.tsx`, with the console extracted into new components under `src/components/service3d/` so the other pillars keep their current section untouched until we choose to roll it out.
- Sub service page bodies live in `src/components/service-pages/software-*.tsx`. Routes, head metadata, canonical URLs and JSON-LD in `src/routes/services.software.*.tsx` stay as they are, with descriptions refreshed to match new copy.
- New shared building blocks (scroll spine, animated diagram primitives, device stage, reduced motion hook) go into a small local kit so the five pages stay consistent and the files stay readable.
- Colour, radius and shadow values come from existing tokens in `src/styles.css`. No hardcoded colour utilities. Any new token is added there first.
- Animation uses `motion`, already installed. 3D uses `@react-three/fiber` and `drei`, already installed. No new heavy dependencies.
- Accessibility and SEO: one H1 per page, semantic sections, real links, alt text on any generated imagery, and full keyboard support on every interactive centrepiece.

## Sequencing

- Stage A: the Capability Console on /services/software.
- Stage B to F: one sub service page per stage, in the order listed above.

Each stage ships complete and reviewable on its own, so you can give feedback before the next page starts.
