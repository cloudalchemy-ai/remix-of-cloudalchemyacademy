## Restructure the "Meet Your Team" section

**File:** `src/routes/index.tsx` (lines ~456–497)

**Current:** Heading and intro paragraphs share the left column; stat cards sit on the right — heading and cards aren't aligned at the top.

**Change to:**

```text
┌─────────────────────────────────────────────────┐
│ MEET YOUR TEAM (label)                          │
│ Transforming Careers Through Technology         │
│ Education                                       │
│ ──── (teal accent underline)                    │
├──────────────────────────┬──────────────────────┤
│ Mentor info paragraphs   │  Stat cards (1×4)    │
│ (Kshitij Joy bio, etc.)  │                      │
└──────────────────────────┴──────────────────────┘
```

### Implementation

1. Move `SectionLabel`, the `<h2>` heading, and a short teal accent bar out of the left column into a full-width header block above the grid.
2. Keep the existing two-column grid (`lg:grid-cols-[1.1fr_1fr]`) below the header, but change `lg:items-center` → `lg:items-start` so the mentor bio paragraphs align to the top of the cards.
3. Left column now contains only the three `<p>` bio paragraphs.
4. Right column unchanged (stat cards grid).
5. No color/theme changes — keep dark navy background and existing teal accents.

No other sections touched.