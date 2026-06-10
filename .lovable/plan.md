## Problem
The header in `src/routes/index.tsx` (line 205) uses `absolute top-0`, so it scrolls away with the hero and is no longer reachable from lower sections like Delivery.

## Fix
Change the header to be sticky to the viewport so the nav (Home / Services / Courses / Delivery / Meet Your Team / Book Training) stays visible while scrolling.

1. In `src/routes/index.tsx`, replace the header's `absolute top-0 left-0 right-0 z-20` classes with `sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border/40`.
2. Since the header is no longer absolutely positioned over the hero, remove/adjust the hero section's top padding that was reserving space for it, so there isn't a double gap above the hero.
3. Verify no ancestor (page root / hero wrapper) has `overflow-hidden` or a `transform` that would break `sticky`. If found, remove it from the ancestor only (keep section-local clipping intact).

No changes to logic, routing, or the contact/email flow.