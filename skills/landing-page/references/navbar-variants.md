# Navbar variants catalog

Three ready-to-copy navbar/header templates. All are React + Tailwind (`.tsx`),
responsive, and accessible (`<nav aria-label>`, `aria-expanded`/`aria-controls`
mobile toggle). The default **standard** variant is the top-level
[`../Navbar.tsx`](../Navbar.tsx); alternatives live in [`../navbars/`](../navbars/).

| Variant | File | When to use | Stateful |
|---|---|---|---|
| **Standard** (default) | [`../Navbar.tsx`](../Navbar.tsx) | Brand left, links + CTA right, sticky | Yes (`useState`) |
| **Centered logo** | [`navbars/NavbarCentered.tsx`](../navbars/NavbarCentered.tsx) | Editorial/brand sites; links split around a centered brand | Yes (`useState`) |
| **Announcement bar** | [`navbars/NavbarAnnouncement.tsx`](../navbars/NavbarAnnouncement.tsx) | Promote a launch/sale via a dismissible strip above the nav | Yes (`useState`) |

## Choosing a variant

- **Classic SaaS header?** → Standard.
- **Symmetric, brand-forward look?** → Centered logo.
- **Need to announce something?** → Announcement bar.

## Props by variant

- **Standard**: `brand`, `links[]`, `cta?`.
- **Centered logo**: `brand`, `links[]` (auto-split left/right on desktop).
- **Announcement bar**: `brand`, `links[]`, `cta?`, `announcement: { text, link? }`.

## Quality checklist

- [ ] All are stateful (`"use client"` in Next.js) — already included.
- [ ] Mobile toggle exposes `aria-expanded` + `aria-controls`; menu IDs are unique.
- [ ] Announcement bar is dismissible and never traps focus.
- [ ] Keep the link set short (3–6) and a single CTA.
