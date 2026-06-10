## Footer Redesign

Replace the current single-row footer in `src/routes/index.tsx` with a structured multi-column layout. Keep the existing dark/teal brand theme — only the structure and content change.

### Layout

```text
┌──────────────────────────────────────────────────────────────────────┐
│  [LOGO]              Explore              Get in touch               │
│  Enterprise          Services             ✉ contact@cloudalchemy.uk  │
│  training in AI,     Courses              🌐 Worldwide · Remote &    │
│  Agentic AI...       Delivery                  On-site               │
│                      Contact              [in]  [▶]                  │
├──────────────────────────────────────────────────────────────────────┤
│  © 2026 Cloud Alchemy. All rights reserved.   Made with ♥ for learners worldwide │
└──────────────────────────────────────────────────────────────────────┘
```

### Content per column

1. **Brand (col 1)**
   - Existing logo image (`logoAsset`)
   - Short tagline: "Enterprise training in AI, Agentic AI development, security, strategy, and end-to-end agentic architectures."

2. **Explore (col 2)** — heading + vertical link list
   - Services → `#pillars`
   - Courses → `#courses`
   - Delivery → `#delivery`
   - Contact → opens contact modal

3. **Get in touch (col 3)**
   - Mail icon + `contact@cloudalchemy.uk` (mailto)
   - Globe icon + "Worldwide · Remote & On-site"
   - Social icons row: LinkedIn + YouTube (circular icon buttons, placeholder `#` URLs the user can fill in later)

### Bottom bar
- Thin divider above
- Left: `© {year} Cloud Alchemy. All rights reserved.`
- Right: `Made with ♥ for learners worldwide` (heart icon in brand teal)

### Technical details

- Single file change: `src/routes/index.tsx`, footer block only (~lines 531–546).
- Use existing semantic tokens (`text-muted-foreground`, `border-border`, `bg-background`, `var(--brand-teal)`) — no hardcoded colors.
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-10` inside `max-w-6xl`; bottom bar in a separate flex row.
- Contact link reuses the existing `openContact` handler (lift footer into `Index` scope where it already lives).
- Lucide icons: reuse `Mail`, `Globe2`, `Heart` (new import), `Linkedin` (new), `Youtube` (new).
- Social icon buttons: rounded-full, subtle background, hover state using brand teal.

No new files, no dependency changes.
