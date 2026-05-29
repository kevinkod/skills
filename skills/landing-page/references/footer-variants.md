# Footer variants catalog

Three ready-to-copy footer templates. All are React + Tailwind (`.tsx`), responsive,
and accessible (`<nav aria-label>`, screen-reader-only heading). The default
**columns** variant is the top-level [`../Footer.tsx`](../Footer.tsx); alternatives
live in [`../footers/`](../footers/).

| Variant | File | When to use | Stateful |
|---|---|---|---|
| **Columns** (default) | [`../Footer.tsx`](../Footer.tsx) | Full footer: brand, link columns, socials | No |
| **Minimal** | [`footers/FooterMinimal.tsx`](../footers/FooterMinimal.tsx) | Small/simple sites; centered brand + one link row | No |
| **Newsletter** | [`footers/FooterNewsletter.tsx`](../footers/FooterNewsletter.tsx) | Capture subscribers from the footer (email form) | Yes (`useState`) |

## Choosing a variant

- **Lots of links + socials?** → Columns.
- **Tiny site, few links?** → Minimal.
- **Want footer email capture?** → Newsletter.

## Props by variant

- **Columns**: `brand`, `tagline?`, `columns[]`, `socials?`, `copyright?`.
- **Minimal**: `brand`, `links?`, `copyright?`.
- **Newsletter**: `brand`, `columns[]`, `newsletterTitle?`, `newsletterText?`, `onSubscribe?(email)`, `copyright?`.

## Quality checklist

- [ ] Link columns grouped by intent; every social link has an accessible label.
- [ ] Newsletter input has a label (`sr-only` is fine) and a success state.
- [ ] Copyright present; defaults derive from `brand` when omitted.
