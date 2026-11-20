# Live Showroom: rebuild the work wall into a real, interactive proof machine

The current wall has three problems. It shows invented brands next to real clients, so the whole grid loses trust. It flips to a new project every 2.6 seconds while each recording is 12 seconds long, so a clip never gets past its first frames and the start always looks like a stutter. And on phones it fights itself: three scrolling rows, a 3D stage, blurred tiles and a video all animating at once.

The fix is not a tweak. We rebuild the section into a Live Showroom: fewer things moving, every moving thing intentional, and every tile real.

## Principle one: only real work is shown

Retire every fabricated brand tile. These are the invented ones currently on the wall and they go: Meridian Capital, Atlas Academy, Tavola Rossa, Tavola Rossa Market, Portway Logistics, Ridgeline HVAC, Cascade Duct Care, Sable & Stone, Wanderline, Aster Rooms, GBP Command, Content Ops, The Longform, Copperfield & Associates, Halcyon Med Spa, SunPeak Solar, Ironclad Roofing, Homely, Foxglove, Bayt Al Fakhr, Al Manasa Daily, Oud Al Muluk.

What remains is real: the 13 new recorded builds plus the existing real client screenshots (PowerCabs, Enfield Royal, Dubai Safari, Expo's KSA, Susan, Glowie, TAMR, Realtor Atif, Longshot, Hazel Beauty Bar, Culture Hijab, Luxmark, AGOG, Amble and the rest).

Scale is then proved with facts instead of props: a live counter strip above the showroom (projects shipped, countries, years, uptime) and a dense logo constellation of real client marks with the line that most work sits behind NDAs. Real and confident beats padded.

## Principle two: the showroom, not a carousel

Replace the three-row 3D marquee with a single deliberate stage.

```text
+--------------------------------------------------------------+
|  FILTERS   All  Software  Ecommerce  Web  SEO  Healthcare     |
+---------------------+----------------------------------------+
|                     |  [ browser frame ]                     |
|  INDEX RAIL         |   live clip plays here, full 12s        |
|  01 CMJ Door     >  |                                        |
|  02 AxonPOS         |   scrub bar . replay . open site        |
|  03 Alaya Noir      +----------------------------------------+
|  04 Thomas Forum    |  client . category . one line . outcome |
|  ...                |  stack chips: React, Stripe, Supabase   |
+---------------------+----------------------------------------+
|  FILMSTRIP  [][][][][][][][][][][][][][][][][][][]  drag ->   |
+--------------------------------------------------------------+
```

- One video plays at a time, in a real browser frame, and it plays its full length. Auto advance happens when the clip ends, not on a 2.6 second timer, so nothing ever gets cut off mid reveal.
- A thin progress line tracks actual video time, so the pacing is honest.
- The index rail on the left is scannable proof of volume: numbered, with client name and category, the active one highlighted.
- Under the stage sits a draggable filmstrip of every project as a still. Click any frame to jump. Drag to browse. It reads as an archive, which is exactly the "huge customer base" feeling, without anything auto scrolling in your face.

## Principle three: the clips must feel instant

The lag is a start up problem, not a size problem. Fixes:

- Every clip gets a fast start pass: proper keyframe at frame zero, faststart flag so the browser can start on first bytes, and a short warm up where the next project in the queue preloads while the current one plays.
- The poster still is shown until the video has actually decoded a frame, then it cross fades in. No black flash, no visible stall.
- Clips are re trimmed so they open on motion, loop cleanly, and land between 8 and 10 seconds. Two obviously weak captures get recaptured: the parts counter build and the student services build, whose files are far too small to contain real motion.
- Only the stage video exists in the DOM. The filmstrip is stills only. That alone removes most of the mobile cost.

## Principle four: phones get their own version, not a squeezed one

On a phone the showroom becomes a full bleed vertical deck. One project fills the screen area, swipe left and right to move between projects, the clip plays only while its card is centred, and a tiny counter shows position in the set. No 3D stage, no blur filters, no parallel rows. It should feel like flicking through a portfolio app.

## Extra layers that make it feel expensive

- Ambient detail on the active project: a small live badge, the domain in a monospace address bar, and a build spec line (timeline, stack, region).
- Hover on a filmstrip frame gives a 3 frame micro preview from the poster set, so the strip feels alive without playing 30 videos.
- Keyboard support: arrow keys move projects, space pauses, escape closes.
- Reduced motion: everything falls back to stills with a manual play control.

## Steps

1. Data and trust pass. Remove fabricated tiles, keep real work, write plain confident one liners and outcomes for every remaining project, add the counter strip and client logo constellation.
2. Showroom shell. New stage plus index rail plus filmstrip, wired to filters, keyboard and deep links.
3. Video pipeline pass. Re encode all clips for instant start, recapture the two weak ones, add poster to video cross fade and next clip preloading.
4. Mobile deck. Swipeable full bleed version with centre triggered playback.
5. Polish. Micro previews, spec lines, transitions, reduced motion, and a final pixel and copy review across phone, tablet and desktop.

You review after each step.

## Technical notes

- `src/components/site/Work.tsx` is split into `Work.tsx` (data plus section shell), `ShowroomStage.tsx`, `ShowroomRail.tsx`, `Filmstrip.tsx` and `MobileDeck.tsx` under `src/components/site/work/`.
- Auto advance is driven by the video `ended` event with an `onTimeUpdate` progress bar, replacing the fixed interval.
- Playback readiness uses `canplay` plus `requestVideoFrameCallback` where available to time the poster cross fade.
- Preload strategy: active clip `preload="auto"`, next clip warmed via a hidden `link rel=preload` swap, all others none.
- Re encode with ffmpeg: `-g 24 -keyint_min 24 -movflags +faststart -crf 26` for mp4, matching webm, posters regenerated from the first motion frame.
- Unused demo components in `src/components/work/demos/` are deleted once no project references them.
- No em dashes anywhere in copy or code comments.
