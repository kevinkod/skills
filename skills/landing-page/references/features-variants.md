# Features variants catalog

Three ready-to-copy features templates. All are React + Tailwind (`.tsx`),
responsive, and accessible. The default **grid** variant is the top-level
[`../Features.tsx`](../Features.tsx); alternatives live in
[`../features/`](../features/).

| Variant | File | When to use | Icons |
|---|---|---|---|
| **Grid** (default) | [`../Features.tsx`](../Features.tsx) | Many short, equal-weight features (3-col grid) | `ReactNode` slot |
| **Alternating** | [`features/FeaturesAlternating.tsx`](../features/FeaturesAlternating.tsx) | A few rich features, each with its own visual (zigzag rows) | Images per row |
| **Split** | [`features/FeaturesSplit.tsx`](../features/FeaturesSplit.tsx) | Strong intro (heading + CTA) beside a compact feature list | `ReactNode` slot |

## Choosing a variant

- **Lots of small features?** → Grid.
- **Each feature deserves a screenshot/illustration?** → Alternating.
- **Want a section heading + CTA anchored next to the list?** → Split.

## Props by variant

- **Grid**: `eyebrow?`, `title`, `subtitle?`, `features: { icon?, title, description }[]`.
- **Alternating**: `eyebrow?`, `title`, `features: { title, description, bullets?, imageUrl, imageAlt }[]`.
- **Split**: `eyebrow?`, `title`, `subtitle?`, `cta?`, `features: { icon?, title, description }[]`.

## Quality checklist

- [ ] One `<h2>` for the section; feature names are `<h3>`.
- [ ] Feature titles are benefit-oriented, descriptions concrete.
- [ ] Icons via `ReactNode` (no library dependency); decorative images use `alt=""`,
      content images get real `alt`.
- [ ] Responsive: grid collapses cleanly; alternating rows stack on mobile.
