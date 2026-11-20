# Live video wall for 13 new portfolio projects

Add the 13 shared builds to the existing Work section as our own client work, each represented by a short looping screen recording of its most visually impressive section. No reference to the platform they were built on appears anywhere.

## The 13 projects

Each keeps its own brand, so the wall reads as real client work:

1. CMJ Door and Hardware Corp, Miami. Commercial doors, hardware and installation.
2. AutoParts POS. Spare parts billing and inventory software.
3. AGOG Travel Solutions, Islamabad. Curated journeys.
4. Thomas Forum. Long horizon capital for enduring businesses.
5. Electrolux Power, Islamabad. Solar installation.
6. Evolve Lagree, Katy TX. Boutique fitness studio.
7. Ambient. Bamboo flooring and premium building materials.
8. Mr. Pure Water and Mr. Water Heater. Whole home water solutions.
9. RXL USA. Brand platform.
10. SnZ Ventures Student Services. Study abroad in Europe.
11. SnZ Ventures. European gateway for business, fintech and talent.
12. AxonPOS. Futuristic POS dashboard.
13. Alaya Noir. Luxury ladies footwear.

Note: a SnZ Ventures tile already exists in the Work section. That tile gets upgraded to the new recording rather than duplicated, and the student services build is added as a second, separate entry.

## How each recording is made

For every site I open it in a headless browser at 1280x800, drive a slow scripted scroll through the sections with the strongest motion (hero reveal, animated stats, scroll driven sections, product galleries), and record it. Each clip is then:

- trimmed to roughly 8 to 10 seconds, silent, seamless loop
- encoded to MP4 (H.264) plus a WebM fallback, tuned to stay small and fast
- exported with a still poster frame from the best moment

Files are stored in the site under `public/work/video/` so they load fast and are cached, with the poster used before playback starts.

## How they appear on the site

The recordings slot into the current Work grid, inside the existing browser frame, so nothing about the layout feels bolted on:

- The tile shows the poster image until it scrolls into view, then the clip fades in and loops silently.
- Only clips currently visible on screen play. Everything else stays paused, so scrolling stays smooth.
- On phones and for visitors who prefer reduced motion, the poster still is shown instead of video, with a small play control to opt in.
- Hover on desktop scrubs slightly faster or restarts the loop, giving the wall a live feel.
- Each new project gets a category (Software, Ecommerce, Web, WordPress, Local SEO, Healthcare), a one line description in plain language, and an outcome chip, so the existing filters keep working.

## Content rules

- No mention of the build platform anywhere: not in copy, file names, alt text, metadata or page source.
- Each project is written as our delivery, in simple confident language.
- No em dashes anywhere.

## Sequencing

Because 13 recordings is a lot of capture time, this runs in batches:

- Batch 1: CMJ Door, AxonPOS, Alaya Noir, Thomas Forum, Ambient. Includes the video tile component work, so after this batch the wall is live and reviewable.
- Batch 2: AutoParts POS, AGOG Travel, Electrolux Power, Evolve Lagree.
- Batch 3: Mr. Pure Water, RXL USA, SnZ Ventures, SnZ Student Services.

You review after each batch and I adjust naming, copy or which section gets recorded.

## Technical notes

- Capture: Playwright Chromium with video recording enabled, scripted scroll timeline per site, output converted with ffmpeg to `h264 mp4` and `vp9 webm`, plus a JPG poster.
- Storage: `public/work/video/<slug>.mp4`, `.webm` and `<slug>.jpg`. Static public files, referenced by path, no asset pointer indirection.
- `src/components/site/Work.tsx`: extend the `Project` type with optional `videoUrl`, `videoWebmUrl` and `posterUrl`, add a `ProjectVideo` component that uses `IntersectionObserver` to play and pause, `muted`, `playsInline`, `loop`, `preload="none"`, poster fallback, and a `prefers-reduced-motion` guard.
- Existing static shot tiles are untouched and keep rendering as images.
