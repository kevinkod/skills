# Hero variants catalog

Six ready-to-copy hero templates. All are React + Tailwind (`.tsx`), responsive, and
accessible (single `<h1>`, AA contrast, visible focus, tappable CTAs). Pick one,
copy it, and adapt the copy/links/colors. Variants live in
[`../heroes/`](../heroes/); the split variant is the top-level
[`../Hero.tsx`](../Hero.tsx).

| Variant | File | When to use | Stateful |
|---|---|---|---|
| **Split** | [`../Hero.tsx`](../Hero.tsx) | Default SaaS: copy on the left, product visual on the right | No |
| **Centered** | [`heroes/HeroCentered.tsx`](../heroes/HeroCentered.tsx) | Early-stage / pre-launch; the message carries the page, no visual | No |
| **Gradient** | [`heroes/HeroGradient.tsx`](../heroes/HeroGradient.tsx) | Bold, design-forward brand wanting a vivid above-the-fold | No |
| **Background image** | [`heroes/HeroBackgroundImage.tsx`](../heroes/HeroBackgroundImage.tsx) | Lifestyle/brand pages where a photo sets the mood | No |
| **Waitlist** | [`heroes/HeroWaitlist.tsx`](../heroes/HeroWaitlist.tsx) | Pre-launch goal is collecting emails (inline form) | Yes (`useState`) |
| **Screenshot** | [`heroes/HeroScreenshot.tsx`](../heroes/HeroScreenshot.tsx) | App/SaaS where seeing the UI sells; large screenshot below copy | No |

## Choosing a variant

- **Have a product UI to show?** → Split (side-by-side) or Screenshot (large, below).
- **No visual yet / message-first?** → Centered or Gradient.
- **Need emails before launch?** → Waitlist.
- **Brand/emotion-led?** → Background image (keep text contrast high).

## Shared props

Most variants share this shape:

```ts
type CTA = { label: string; href: string };

eyebrow?: string;        // small label above the title
title: string;           // the value proposition (renders as <h1>)
subtitle: string;        // 1–2 sentences
primaryCta: CTA;         // the #1 action
secondaryCta?: CTA;      // low-friction alternative
```

Extra props by variant:

- **Background image**: `imageUrl: string` (required).
- **Screenshot**: `imageUrl: string`, `imageAlt: string` (required).
- **Waitlist**: no CTAs; instead `onSubmit?(email)`, `ctaLabel?`, `placeholder?`,
  `note?`. Shows a success state after submit.

## Quality checklist (all variants)

- [ ] Exactly one `<h1>` on the page.
- [ ] Title is a concrete benefit, not a vague slogan.
- [ ] One dominant primary CTA; secondary is clearly lower-weight.
- [ ] AA contrast — verify on gradient / background-image variants especially.
- [ ] Responsive from 320px up; CTAs ≥ 44px tall.
- [ ] Images: `alt` set (decorative → `alt=""`), `loading` chosen intentionally.
