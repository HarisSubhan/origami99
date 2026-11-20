# Recapture the showroom clips properly

The current clips were recorded too early and scrolled on a fixed timer, so pages were still hydrating, 3D headers had not finished loading, fonts popped in, and the scroll looks shaky. Several sites also have their best work on inner pages, not the home page. We redo the whole capture pass as a proper edit, not a screen scroll.

## What changes in the capture

1. Wait for the page to be genuinely ready before a single frame is kept.
   - Wait for network idle, then for fonts ready, then for all images and canvas or WebGL contexts in the first two screens to be painted, then a settle pause. Nothing is recorded during that window.
   - Confirm the hero has rendered by checking that the largest above the fold element has non zero size and that no skeleton or loader node is present.
   - Discard and retry a take if a load check fails, up to three tries per shot.

2. Record slow, play fast.
   - Scroll with easing at roughly half speed, 60 steps per second, with pauses at each key section so animations can actually run and finish.
   - Speed the finished clip up in the edit so the delivered video reads snappy while every animation still completed during capture. No frame skipping, no jitter.

3. Shoot the best of each site, not just the home page.
   - Each project gets a small shot list of two to four scenes, for example AGOG gets the services page with the passport style header and the custom cursor, plus the hero.
   - Cursor driven effects get a scripted pointer path so custom cursors, hover reveals and magnetic buttons are visible on camera.
   - Interactive pieces get a scripted beat: open the menu, hover the card, trigger the reveal, then move on.

4. Themes.
   - Where a site ships light and dark, we capture the stronger one as the main clip and use the other as a short accent beat inside the same clip so the theme switch itself becomes a moment.

5. Edit and encode.
   - Clips are cut to 8 to 12 seconds, opening on motion, with clean cuts between scenes and a hold on the strongest frame at the end.
   - Encode with a keyframe at frame zero, faststart, and a poster taken from the first fully painted frame so playback starts instantly with no black flash.

## Quality gate before anything ships

Every clip is reviewed as a contact sheet plus a first frame check, against a fixed checklist: fully loaded hero, no loader or skeleton, no layout shift, no badge, no cookie bar, no blank canvas, smooth scroll, correct theme, ends on a strong frame. Anything that fails is recaptured, not accepted.

## Steps

1. Build the shot list. Visit all 13 sites, note the best sections, whether they have a dark or light mode, and any cursor or hover effects worth filming. You get the list to review.
2. Rewrite the capture tool with the readiness gates, easing scroll, scripted pointer beats, scene stops and retry logic.
3. Capture batch one, five projects, and review the contact sheets together.
4. Capture the remaining eight, same review.
5. Edit, speed up, encode, regenerate posters, swap into the showroom, and do a final pass on phone, tablet and desktop.

## Technical notes

- Capture at 1280x800 for desktop scenes, plus a 390x844 pass for any site whose mobile layout is the stronger story.
- Readiness gate uses `document.fonts.ready`, an image decode wait, a `requestAnimationFrame` settle loop, and a WebGL canvas pixel check before recording starts.
- Scroll uses an eased scheduler at half real speed with per section dwell times; the speed up happens in ffmpeg with `setpts`, so no frames are dropped during capture.
- Encode: `-g 24 -keyint_min 24 -movflags +faststart -crf 25`, posters extracted from the first painted frame.
- Existing files in `public/work/video/` are replaced in place, so `src/components/site/work/data.ts` needs no slug changes except where a project gains an extra scene.
- No em dashes in any copy or comments.
