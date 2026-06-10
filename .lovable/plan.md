Reduce the vertical gap between the Global Reach (map) section and the Get Started (CTA) section.

Current state:
- `#reach` (map): `py-24` → 96px top + 96px bottom
- `#contact` (CTA): `py-24` → 96px top + 96px bottom
- Total dead space between them: ~192px

Changes:
1. Line 546: Change `#reach` class from `px-6 py-24` to `px-6 pt-24 pb-8`
2. Line 562: Change `#contact` class from `px-6 py-24` to `px-6 pt-8 pb-24`

Result: Gap shrinks from ~192px to ~64px (32px bottom + 32px top). No other sections or styles affected.