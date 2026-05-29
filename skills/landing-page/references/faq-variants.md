# FAQ variants catalog

Three ready-to-copy FAQ templates. All are React + Tailwind (`.tsx`), responsive, and
accessible. The default **accordion** variant is the top-level
[`../FAQ.tsx`](../FAQ.tsx); alternatives live in [`../faqs/`](../faqs/).

| Variant | File | When to use | Stateful |
|---|---|---|---|
| **Accordion** (default) | [`../FAQ.tsx`](../FAQ.tsx) | A handful of questions; one open at a time | Yes (`useState`) |
| **Grid** | [`faqs/FAQGrid.tsx`](../faqs/FAQGrid.tsx) | Short answers, everything visible/scannable | No |
| **Categorized** | [`faqs/FAQCategorized.tsx`](../faqs/FAQCategorized.tsx) | Larger FAQ grouped by topic (billing, account…) | Yes (`useState`) |

## Choosing a variant

- **Few questions, save space?** → Accordion.
- **Short answers, want them all visible?** → Grid.
- **Many questions across topics?** → Categorized.

## Props by variant

- **Accordion**: `title?`, `items: { question, answer }[]`.
- **Grid**: `title?`, `items: { question, answer }[]`.
- **Categorized**: `title?`, `categories: { name, items: { question, answer }[] }[]`.

## Quality checklist

- [ ] Accordion/categorized: `aria-expanded` + `aria-controls`; panel `role="region"`;
      unique IDs (categorized keys by `category-item`).
- [ ] Grid uses semantic `<dl>`/`<dt>`/`<dd>`.
- [ ] Answer real objections (pricing, cancellation, support, compatibility).
