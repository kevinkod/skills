---
name: landing-page
description: Use when building a landing page or a hero section in React + Tailwind — when the user asks to create a marketing/landing page, a hero, an above-the-fold section, a header with headline + CTA, or to start a new product/SaaS landing page.
---

# Landing Page

## Overview

Build landing pages section by section in **React + Tailwind (TypeScript / `.tsx`)**.
The repo starts minimal: one solid section, the **hero section** (the above-the-fold
area). Compose the page by adding more sections on top.

Principle: one section = one self-contained `.tsx` component, responsive and
accessible, that you copy and adapt to the product. No magic generator — a
production-quality starting point you customize.

## Anatomy of a hero section

| Element | Role | Required |
|---|---|---|
| Eyebrow | Small label above the title (category, "new") | No |
| Title (h1) | The value proposition, short and concrete | **Yes** |
| Subtitle | 1–2 sentences clarifying the benefit | **Yes** |
| Primary CTA | The #1 desired action (solid button) | **Yes** |
| Secondary CTA | Low-friction alternative (link, "Learn more") | No |
| Social proof | Logos, rating, user count | Recommended |
| Visual | Product screenshot, illustration, or gradient | No |

## Layout variants

- **Centered**: everything center-aligned, ideal for early-stage / pre-launch.
- **Split**: text on the left, visual on the right (2-column grid at `lg`+). The most
  common choice for a SaaS.
- **Gradient background**: centered/split variant with a `bg-gradient-to-b`
  background and accent colors.

## Implementation

Ready-to-copy reference component: [`Hero.tsx`](./Hero.tsx) (split variant,
responsive, accessible). Adapt the copy, links, and colors.

Workflow:
1. Ask for (or infer): product, audience, value proposition, desired action.
2. Pick a layout variant based on context.
3. Copy `Hero.tsx`, fill in the content, tune the Tailwind classes to the brand.
4. Verify against the quality checklist.

## Features section

A grid of product features below the hero. Reference component:
[`Features.tsx`](./Features.tsx) — responsive grid (1 col → 2 at `md` → 3 at `lg`),
accessible (`aria-labelledby`, semantic list).

| Element | Role | Required |
|---|---|---|
| Eyebrow | Small label above the section title | No |
| Title (h2) | What the feature set delivers | **Yes** |
| Subtitle | One sentence framing the features | No |
| Feature icon | Visual marker, passed via an `icon?: ReactNode` slot (no icon-library dependency) | No |
| Feature title (h3) | Short, benefit-oriented | **Yes** |
| Feature description | 1–2 sentences | **Yes** |

Layout variants: **3-column** (default, SaaS), **2-column** (fewer, richer features),
**alternating** (icon/text rows for storytelling). Adjust the grid classes to switch.

## Pricing section

Pricing tiers with a monthly/annual billing toggle. Reference component:
[`Pricing.tsx`](./Pricing.tsx) — responsive (1 col → 3 at `lg`), accessible toggle
(`role="group"`, `aria-pressed`), optional highlighted tier.

| Element | Role | Required |
|---|---|---|
| Title (h2) | What the pricing offers | **Yes** |
| Billing toggle | Monthly/annual switch (`useState`) | **Yes** |
| Tier name (h3) | Plan name | **Yes** |
| Price | Per-month amount per period (`{ monthly, annual }`) | **Yes** |
| Feature list | What the tier includes | **Yes** |
| Tier CTA | Plan action button | **Yes** |
| Highlight | Marks the "Most popular" tier | No |

**Stateful component:** uses `useState`, so it needs `"use client"` in the Next.js
App Router (already included). Keep one tier `highlighted` to anchor the eye, and a
single primary action per tier.

## CTA section

A focused call-to-action band, typically placed right before the footer. Reference
component: [`CTA.tsx`](./CTA.tsx) — centered card on a dark band, responsive,
accessible (`aria-labelledby`).

| Element | Role | Required |
|---|---|---|
| Title (h2) | The final nudge | **Yes** |
| Subtitle | One reassuring line (e.g. "no credit card") | No |
| Primary CTA | The desired action | **Yes** |
| Secondary CTA | Low-friction alternative | No |

Keep it short and single-purpose: one dominant action, minimal copy.

## Footer section

Site footer with brand, link columns, social links, and copyright. Reference
component: [`Footer.tsx`](./Footer.tsx) — responsive (stacks on mobile), accessible
(`<nav aria-label>`, screen-reader-only heading, social icons via `ReactNode` slot).

| Element | Role | Required |
|---|---|---|
| Brand | Name or logo element | **Yes** |
| Tagline | One line under the brand | No |
| Link columns | Grouped navigation (Product, Company, Legal…) | **Yes** |
| Social links | Icon links with accessible names | No |
| Copyright | Legal line at the bottom | No (defaults) |

Group links by intent, keep 3–5 columns max, and give every social link an
accessible `label`.

## Navbar / Header section

Sticky top navigation with a mobile menu. Reference component:
[`Navbar.tsx`](./Navbar.tsx) — responsive (desktop links / mobile toggle),
accessible (`<nav aria-label>`, `aria-expanded` + `aria-controls` toggle).

| Element | Role | Required |
|---|---|---|
| Brand | Name or logo, links home | **Yes** |
| Nav links | Anchors to page sections | **Yes** |
| CTA | Primary action button | No |
| Mobile toggle | Opens the menu under `md` (`useState`) | **Yes** |

**Stateful component:** uses `useState` for the mobile menu, so it needs
`"use client"` in the Next.js App Router (already included). Keep the link set short
(3–6) and a single CTA.

## Quality checklist

- [ ] **Responsive**: tested mobile → desktop, no overflow, tappable CTA (≥ 44px).
- [ ] **Accessibility**: a single `<h1>`, AA contrast, `alt` on images, visible focus.
- [ ] **Hierarchy**: the title dominates, the primary CTA stands out from the secondary.
- [ ] **Content**: concrete title (a benefit, not a vague slogan), subtitle that complements it.
- [ ] **Performance**: optimized image (`loading`, dimensions), no heavy dependency.
- [ ] **No "AI look"**: avoid the generic purple gradient + emoji + lorem ipsum.
      Intentional typography and spacing choices.

## Extending to other sections

Adding a section = a new component in this folder (`Features.tsx`, `Pricing.tsx`,
`CTA.tsx`, `Footer.tsx`…) following the same principles (self-contained, responsive,
accessible) and added to this doc.

## Common mistakes

- Title is a vague marketing slogan ("Unlock your potential") instead of a clear benefit.
- Too many competing CTAs: keep a single primary action.
- Decorative visual with no `alt` or that breaks the mobile layout.
- Default colors/typography that produce a generic-template look.
