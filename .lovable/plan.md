## Goal
Make the nav bar match the attached reference on all screen sizes, never abbreviate "Book Training", and add a clean hamburger menu on mobile.

## Changes (all in `src/routes/index.tsx`, header block ~lines 205–241)

1. **Nav links** — keep the existing desktop layout (logo left, links center, CTA right) but show the link row from the `md` breakpoint as today. Match reference spacing/typography (white/80 links, hover white, ~14px).

2. **Book Training button**
   - Always render the full "Book Training" label (remove the `<span className="sm:hidden">Book</span>` short variant).
   - Use consistent padding (`px-4 py-2 text-sm`) at every breakpoint so it looks identical to the reference.
   - Keep mail icon + pill shape + teal background.

3. **Mobile hamburger (below `md`)**
   - Add a hamburger icon button (lucide `Menu` / `X`) shown only on `<md`, placed to the right of the Book Training button (or left of it — will match reference styling: ghost icon button, white/80).
   - Toggles a small dropdown panel anchored under the header containing the 5 links (Home, Services, Courses, Delivery, Meet Your Team) stacked vertically, same nav background color, subtle divider, tap closes the menu and scrolls to the section.
   - Local `useState` for open/close. Close on link click and on route hash change.

4. **Responsiveness safety**
   - Logo keeps current responsive sizing (`h-16 → h-24`).
   - Use `shrink-0` on logo, hamburger, and CTA so nothing wraps.
   - Header stays sticky with current background `oklch(0.16 0.03 230)`.

## Out of scope
No changes to hero, sections, colors elsewhere, or routing.
