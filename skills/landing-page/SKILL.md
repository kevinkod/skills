---
name: landing-page
description: Use when building a landing page or a hero section in React + Tailwind — when the user asks to create a marketing/landing page, a hero, an above-the-fold section, a header with headline + CTA, or to start a new product/SaaS landing page.
---

# Landing Page

## Overview

Build landing pages section by section in **React + Tailwind v4 (TypeScript / `.tsx`)**.
The repo starts minimal: one solid section, the **hero section** (the above-the-fold
area). Compose the page by adding more sections on top.

Principle: one section = one self-contained `.tsx` component, responsive and
accessible, that you copy and adapt to the product. No magic generator — a
production-quality starting point you customize.

## Art direction (themes)

The components are **theme-driven**: they reference semantic design tokens, never
hardcoded colors. Each "vibe" is a complete token set in `themes/<vibe>.css`.
Pasting one preset restyles the whole page — this is what prevents the generic
"AI look." **Requires Tailwind v4** (tokens are declared with `@theme`).

Pick ONE vibe, paste its `themes/<vibe>.css` into your `app.css` after
`@import "tailwindcss";`, and load the fonts it names:

| Vibe | Character |
|---|---|
| `editorial` | type-forward serif, warm cream, minimal color |
| `aurora` | dark, glassy, vivid violet→cyan glow |
| `brutalist` | monospace, hard black borders, offset shadows |
| `playful` | warm coral, rounded, soft shadows |

Full token contract, per-vibe values, and a "when to use" guide live in
[`references/art-direction.md`](./references/art-direction.md). Components use
`bg-surface`, `text-ink`, `bg-brand`, `text-on-brand`, `text-accent`,
`border-border`, `rounded-control` / `rounded-card`, `shadow-cta` / `shadow-card`,
and `font-display` — never `bg-indigo-*` / `text-gray-*`.

## Recommended page order

Compose a full landing page top to bottom:

1. **Navbar** ([`Navbar.tsx`](./Navbar.tsx)) — sticky header
2. **Hero** ([`Hero.tsx`](./Hero.tsx)) — above the fold
3. **Logo cloud** ([`LogoCloud.tsx`](./LogoCloud.tsx)) — social proof
4. **Features** ([`Features.tsx`](./Features.tsx))
5. **Testimonials** ([`Testimonials.tsx`](./Testimonials.tsx))
6. **Pricing** ([`Pricing.tsx`](./Pricing.tsx))
7. **FAQ** ([`FAQ.tsx`](./FAQ.tsx))
8. **CTA** ([`CTA.tsx`](./CTA.tsx)) — final nudge
9. **Footer** ([`Footer.tsx`](./Footer.tsx))

Pick the sections that fit the product; order is a default, not a rule.

A full assembled example wiring the default components in this order, with inline
sample content, lives in
[`examples/LandingPage.tsx`](./examples/LandingPage.tsx) — copy it, swap in real
content, and replace any section with one of its variants.

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

Six ready-to-copy hero templates, all responsive and accessible. The default
**split** variant is [`Hero.tsx`](./Hero.tsx); the five alternatives live in
[`heroes/`](./heroes/). For when-to-use guidance, props, and the full catalog, see
[`references/hero-variants.md`](./references/hero-variants.md).

| Variant | File |
|---|---|
| Split (default) | [`Hero.tsx`](./Hero.tsx) |
| Centered | [`heroes/HeroCentered.tsx`](./heroes/HeroCentered.tsx) |
| Gradient | [`heroes/HeroGradient.tsx`](./heroes/HeroGradient.tsx) |
| Background image | [`heroes/HeroBackgroundImage.tsx`](./heroes/HeroBackgroundImage.tsx) |
| Waitlist (email capture) | [`heroes/HeroWaitlist.tsx`](./heroes/HeroWaitlist.tsx) |
| Screenshot | [`heroes/HeroScreenshot.tsx`](./heroes/HeroScreenshot.tsx) |

Workflow:
0. Pick a vibe preset (`themes/<vibe>.css`) and paste it into your `app.css` — see "Art direction (themes)" above.
1. Ask for (or infer): product, audience, value proposition, desired action.
2. Pick a variant (see the catalog's "Choosing a variant" guide).
3. Copy the chosen file, fill in the content; the brand look comes from the vibe tokens, not per-file color edits.
4. Verify against the quality checklist.

### Motion (always animate decorative hero SVGs)

A hero's decorative SVG/illustration elements should always carry a *slight*, slow,
looping animation — a drifting shape, a floating accent, a twinkling sparkle. It's
the cheapest way to make a hero feel like a live product instead of a screenshot,
and done right it never competes with the headline. Keep it subtle and
compositor-only (`translate`/`rotate`/`opacity`), gate it on `motion-safe:`, and
stagger instances so they don't move in lockstep. Paste-in keyframes, a worked
inline-SVG scene, and per-hero retrofitting tips live in
[`references/hero-motion.md`](./references/hero-motion.md).

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

Three ready-to-copy variants — see [`references/features-variants.md`](./references/features-variants.md):

| Variant | File |
|---|---|
| Grid (default) | [`Features.tsx`](./Features.tsx) |
| Alternating (zigzag rows) | [`features/FeaturesAlternating.tsx`](./features/FeaturesAlternating.tsx) |
| Split (heading + list) | [`features/FeaturesSplit.tsx`](./features/FeaturesSplit.tsx) |

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

Three ready-to-copy variants — see [`references/pricing-variants.md`](./references/pricing-variants.md):

| Variant | File |
|---|---|
| Tiers + toggle (default) | [`Pricing.tsx`](./Pricing.tsx) |
| Single plan | [`pricing/PricingSingle.tsx`](./pricing/PricingSingle.tsx) |
| Comparison table | [`pricing/PricingTable.tsx`](./pricing/PricingTable.tsx) |

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

Three ready-to-copy variants — see [`references/cta-variants.md`](./references/cta-variants.md):

| Variant | File |
|---|---|
| Band (default) | [`CTA.tsx`](./CTA.tsx) |
| Split with image | [`cta/CTASplit.tsx`](./cta/CTASplit.tsx) |
| Gradient band | [`cta/CTAGradient.tsx`](./cta/CTAGradient.tsx) |

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

Three ready-to-copy variants — see [`references/footer-variants.md`](./references/footer-variants.md):

| Variant | File |
|---|---|
| Columns (default) | [`Footer.tsx`](./Footer.tsx) |
| Minimal | [`footers/FooterMinimal.tsx`](./footers/FooterMinimal.tsx) |
| Newsletter signup | [`footers/FooterNewsletter.tsx`](./footers/FooterNewsletter.tsx) |

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

Three ready-to-copy variants — see [`references/navbar-variants.md`](./references/navbar-variants.md):

| Variant | File |
|---|---|
| Standard (default) | [`Navbar.tsx`](./Navbar.tsx) |
| Centered logo | [`navbars/NavbarCentered.tsx`](./navbars/NavbarCentered.tsx) |
| Announcement bar | [`navbars/NavbarAnnouncement.tsx`](./navbars/NavbarAnnouncement.tsx) |

## Logo cloud (social proof) section

A "trusted by" band of customer/brand logos, usually right under the hero.
Reference component: [`LogoCloud.tsx`](./LogoCloud.tsx) — responsive grid (2 → 3 → 5
columns), accessible (each logo has a screen-reader name), logos via `ReactNode`
slot.

| Element | Role | Required |
|---|---|---|
| Heading | Small "trusted by" label | No (defaults) |
| Logos | Brand logos with accessible `name` | **Yes** |

Use real, recognizable logos; keep them monochrome/grayscale for visual calm. Give
each logo `alt=""` (decorative) since the accessible name comes from `name`.

Three ready-to-copy variants — see [`references/logocloud-variants.md`](./references/logocloud-variants.md):

| Variant | File |
|---|---|
| Grid (default) | [`LogoCloud.tsx`](./LogoCloud.tsx) |
| Marquee (scrolling) | [`logoclouds/LogoCloudMarquee.tsx`](./logoclouds/LogoCloudMarquee.tsx) |
| Aside (heading + logos) | [`logoclouds/LogoCloudAside.tsx`](./logoclouds/LogoCloudAside.tsx) |

## Testimonials section

Customer quotes with author, role, and optional avatar. Reference component:
[`Testimonials.tsx`](./Testimonials.tsx) — responsive grid (1 → 3 columns),
accessible (semantic `<figure>`/`<blockquote>`/`<figcaption>`).

| Element | Role | Required |
|---|---|---|
| Title (h2) | Section heading | **Yes** |
| Quote | The testimonial text | **Yes** |
| Author | Who said it | **Yes** |
| Role | Title + company | No |
| Avatar | Author photo (`alt=""`, decorative) | No |

Use real names and specific, concrete quotes (outcomes, not adjectives). Decorative
avatars take `alt=""` since the name is in the caption.

Three ready-to-copy variants — see [`references/testimonials-variants.md`](./references/testimonials-variants.md):

| Variant | File |
|---|---|
| Grid (default) | [`Testimonials.tsx`](./Testimonials.tsx) |
| Single featured quote | [`testimonials/TestimonialSingle.tsx`](./testimonials/TestimonialSingle.tsx) |
| Masonry wall | [`testimonials/TestimonialsMasonry.tsx`](./testimonials/TestimonialsMasonry.tsx) |

## FAQ section

An accessible accordion of common questions. Reference component:
[`FAQ.tsx`](./FAQ.tsx) — one item open at a time, accessible (`<dl>`/`<dt>`/`<dd>`,
`aria-expanded` + `aria-controls`, panel `role="region"`).

| Element | Role | Required |
|---|---|---|
| Title (h2) | Section heading | No (defaults) |
| Question | The collapsed label | **Yes** |
| Answer | The expandable panel | **Yes** |

**Stateful component:** uses `useState` to track the open item, so it needs
`"use client"` in the Next.js App Router (already included). Answer real objections
(pricing, cancellation, support, compatibility), not filler.

Three ready-to-copy variants — see [`references/faq-variants.md`](./references/faq-variants.md):

| Variant | File |
|---|---|
| Accordion (default) | [`FAQ.tsx`](./FAQ.tsx) |
| Grid (all visible) | [`faqs/FAQGrid.tsx`](./faqs/FAQGrid.tsx) |
| Categorized | [`faqs/FAQCategorized.tsx`](./faqs/FAQCategorized.tsx) |

## Quality checklist

- [ ] **Responsive**: tested mobile → desktop, no overflow, tappable CTA (≥ 44px).
- [ ] **Accessibility**: a single `<h1>`, AA contrast, `alt` on images, visible focus.
- [ ] **Hierarchy**: the title dominates, the primary CTA stands out from the secondary.
- [ ] **Content**: concrete title (a benefit, not a vague slogan), subtitle that complements it.
- [ ] **Performance**: optimized image (`loading`, dimensions), no heavy dependency.
- [ ] **No "AI look"**: pick a vibe preset (see "Art direction"); never hardcode
      `indigo` / `gray` utilities — the token system is what prevents the generic
      template look. Intentional typography and spacing choices.

## Extending to other sections

Adding a section = a new component in this folder (`Features.tsx`, `Pricing.tsx`,
`CTA.tsx`, `Footer.tsx`…) following the same principles (self-contained, responsive,
accessible) and added to this doc.

## Common mistakes

- Title is a vague marketing slogan ("Unlock your potential") instead of a clear benefit.
- Too many competing CTAs: keep a single primary action.
- Decorative visual with no `alt` or that breaks the mobile layout.
- Default colors/typography that produce a generic-template look.
