# Drop the video wall, go all in on screenshots

The clips are causing more problems than they solve: slow starts, stutter, heavy on phones. We remove video from the showroom entirely and make a still image gallery that looks sharper than the video ever did.

## What changes

1. Video is removed from the work section. No `<video>` element, no preloading, no autoplay, no progress bar tied to playback. The existing poster frames we already captured become the primary images, so nothing looks empty.
2. The stage becomes a still stage. One large screenshot inside the browser frame, with a slow subtle scroll style pan on the image (pure CSS transform, disabled for reduced motion). Project meta card stays as is.
3. Auto advance moves to a single steady timer for every project, since there is no clip length to respect anymore. Manual controls stay: index rail, filmstrip, arrow keys, pause.
4. Per project shot sets. Instead of one image, each recorded build gets two or three screenshots of its strongest pages, so the stage can cycle within a project before moving to the next one. Small dot markers show how many shots a project has.
5. Mobile deck becomes a swipeable screenshot deck. Cards are images only, which removes the biggest source of phone lag.
6. Filmstrip stays, now purely thumbnails, with the active frame highlighted.

## Screenshot capture pass

Reuse the readiness gates from the recording pipeline, but capture stills instead of video: wait for load, fonts, image decode and layout settle, then take full width shots of the best sections of each site, including the strong pages already scouted such as the AGOG visa page, the RXL configurator and the Electrolux solar page. Output optimised jpg, sized for retina, one folder per project.

## Cleanup

Delete the mp4 files from the public work folder and drop the video fields from the project data. That takes a large chunk of weight off the page.

## Technical notes

- `src/components/site/work/data.ts`: replace `videoUrl` and `posterUrl` with `shots: string[]`, keep `shotUrl` as the first shot for backwards use.
- `src/components/site/work/ShowroomStage.tsx`: remove video, ref, ready state and ended handling, render a cross faded image stack with a shot index.
- `src/components/site/Work.tsx`: single interval based auto advance, advancing shot first then project.
- `src/components/site/work/MobileDeck.tsx`: images only, keep the intersection based active card highlight.
- Public mp4 assets removed once no code references them.
- No em dashes in any copy.
