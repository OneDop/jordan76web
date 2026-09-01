// Shared owner of the hero's scroll-video frames.
//
// Both the boot screen (which reports progress) and ScrollVideoCanvas (which
// draws them) need these images. Loading lives here so the two share one set of
// HTMLImageElements and the browser fetches each frame exactly once.

const frameModules = import.meta.glob<{ default: string }>('../assets/frames/*.webp', {
  eager: true,
});

export const frameUrls: string[] = Object.keys(frameModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((key) => frameModules[key].default);

export const frameImages: HTMLImageElement[] = [];

export type FrameProgress = (settled: number, total: number) => void;

let started = false;
let settled = 0;
const listeners = new Set<FrameProgress>();

/** Begin fetching every frame. Safe to call repeatedly; only the first starts. */
export function startFramePreload(): void {
  if (started) return;
  started = true;

  frameUrls.forEach((url, index) => {
    const img = new Image();
    // Failures count as settled too — one missing frame must not strand the
    // boot screen at 99%.
    const onSettled = () => {
      settled += 1;
      listeners.forEach((fn) => fn(settled, frameUrls.length));
    };
    img.onload = onSettled;
    img.onerror = onSettled;
    img.src = url;
    frameImages[index] = img;
  });
}

/** Subscribe to load progress. Fires immediately with the current tally so a
 *  late subscriber still sees frames that already settled. Returns an
 *  unsubscribe. */
export function onFrameProgress(fn: FrameProgress): () => void {
  listeners.add(fn);
  fn(settled, frameUrls.length);
  return () => {
    listeners.delete(fn);
  };
}
