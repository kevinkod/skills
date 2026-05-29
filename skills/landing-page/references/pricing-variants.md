# Pricing variants catalog

Three ready-to-copy pricing templates. All are React + Tailwind (`.tsx`), responsive,
and accessible. The default **tiers** variant is the top-level
[`../Pricing.tsx`](../Pricing.tsx); alternatives live in
[`../pricing/`](../pricing/).

| Variant | File | When to use | Stateful |
|---|---|---|---|
| **Tiers** (default) | [`../Pricing.tsx`](../Pricing.tsx) | 2–4 plans with a monthly/annual toggle and a highlighted tier | Yes (`useState`) |
| **Single** | [`pricing/PricingSingle.tsx`](../pricing/PricingSingle.tsx) | One plan (or a dominant plan); no comparison needed | No |
| **Table** | [`pricing/PricingTable.tsx`](../pricing/PricingTable.tsx) | Plans differ on many features; buyers compare row by row | No |

## Choosing a variant

- **A few plans, classic SaaS?** → Tiers.
- **One offer / one-time price?** → Single.
- **Many feature differences to compare?** → Table.

## Props by variant

- **Tiers**: `eyebrow?`, `title`, `subtitle?`, `tiers: { name, description, price:{monthly,annual}, features[], cta, highlighted? }[]`, `currency?`.
- **Single**: `title`, `planName`, `price`, `period?`, `currency?`, `features[]`, `cta`, `note?`.
- **Table**: `title`, `plans: { name, price, cta, highlighted? }[]`, `rows: { label, values:(boolean|string)[] }[]` (one value per plan, in order).

## Quality checklist

- [ ] One dominant action per plan; highlight at most one plan.
- [ ] Table: semantic `<table>` with `scope` on header cells; boolean cells expose a
      screen-reader label ("Included" / "Not included").
- [ ] Table scrolls horizontally on small screens rather than squashing.
- [ ] Prices and periods are unambiguous (per month vs per year vs one-time).
