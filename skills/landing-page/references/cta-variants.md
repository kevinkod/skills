# CTA variants catalog

Three ready-to-copy call-to-action templates. All are React + Tailwind (`.tsx`),
responsive, and accessible (`aria-labelledby`). The default **band** variant is the
top-level [`../CTA.tsx`](../CTA.tsx); alternatives live in [`../cta/`](../cta/).

| Variant | File | When to use |
|---|---|---|
| **Band** (default) | [`../CTA.tsx`](../CTA.tsx) | Centered card on a dark band, no image |
| **Split** | [`cta/CTASplit.tsx`](../cta/CTASplit.tsx) | Copy beside a product shot / illustration |
| **Gradient** | [`cta/CTAGradient.tsx`](../cta/CTAGradient.tsx) | High-energy full-width closing nudge |

## Choosing a variant

- **Clean, neutral closer?** → Band.
- **Have a visual that reinforces the ask?** → Split.
- **Want maximum energy at the end of the page?** → Gradient.

## Props by variant

- **Band**: `title`, `subtitle?`, `primaryCta`, `secondaryCta?`.
- **Split**: `title`, `subtitle?`, `primaryCta`, `secondaryCta?`, `imageUrl`, `imageAlt`.
- **Gradient**: `title`, `subtitle?`, `primaryCta`, `secondaryCta?`.

## Quality checklist

- [ ] One dominant action; keep copy short and single-purpose.
- [ ] AA contrast on gradient/dark backgrounds.
- [ ] Split image gets real `alt`; it reinforces, not decorates.
