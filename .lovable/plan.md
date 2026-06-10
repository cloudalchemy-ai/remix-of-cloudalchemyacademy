Problem
--------
The hero section currently has `pt-16` on BOTH the outer `<section>` and the inner content `<div>`, stacking to ~128 px of empty space between the navbar and the "Enterprise AI & Agentic AI Training" pill.

Location
--------
`src/routes/index.tsx` lines 273-281:
- Line 274: `<section className="... pt-16" ...>`
- Line 281: `<div className="... pt-16 text-center">`

Fix
---
Remove `pt-16` from the inner `<div>` on line 281 so only the outer section carries top padding. This halves the gap to a normal ~64 px breathing room and brings the hero content closer to the navbar.

No other styles or components will be touched.