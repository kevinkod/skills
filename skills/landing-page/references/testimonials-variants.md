# Testimonials variants catalog

Three ready-to-copy testimonials templates. All are React + Tailwind (`.tsx`),
responsive, and accessible (semantic `<figure>`/`<blockquote>`/`<figcaption>`). The
default **grid** variant is the top-level [`../Testimonials.tsx`](../Testimonials.tsx);
alternatives live in [`../testimonials/`](../testimonials/).

| Variant | File | When to use |
|---|---|---|
| **Grid** (default) | [`../Testimonials.tsx`](../Testimonials.tsx) | 3 balanced quotes side by side |
| **Single** | [`testimonials/TestimonialSingle.tsx`](../testimonials/TestimonialSingle.tsx) | One flagship quote / customer story, high impact |
| **Masonry** | [`testimonials/TestimonialsMasonry.tsx`](../testimonials/TestimonialsMasonry.tsx) | Many short quotes — show volume of love |

## Choosing a variant

- **A handful of strong quotes?** → Grid.
- **One standout story or punchy one-liner?** → Single.
- **Lots of short praise to display as a wall?** → Masonry.

## Props by variant

- **Grid**: `eyebrow?`, `title`, `testimonials: { quote, author, role?, avatarUrl? }[]`.
- **Single**: `quote`, `author`, `role?`, `avatarUrl?`, `logo?` (ReactNode).
- **Masonry**: `eyebrow?`, `title`, `testimonials: { quote, author, role?, avatarUrl? }[]`.

## Quality checklist

- [ ] Real names + specific, concrete quotes (outcomes, not adjectives).
- [ ] Decorative avatars use `alt=""` (name is in the caption).
- [ ] Masonry uses CSS `columns` + `break-inside-avoid`; reading order stays logical.
- [ ] One `<h2>` per section (Single uses an `sr-only` heading).
