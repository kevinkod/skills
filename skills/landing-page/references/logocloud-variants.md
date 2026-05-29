# Logo cloud variants catalog

Three ready-to-copy social-proof logo templates. All are React + Tailwind (`.tsx`),
responsive, and accessible (each logo has a screen-reader name; logos via `ReactNode`
slot). The default **grid** variant is the top-level
[`../LogoCloud.tsx`](../LogoCloud.tsx); alternatives live in
[`../logoclouds/`](../logoclouds/).

| Variant | File | When to use |
|---|---|---|
| **Grid** (default) | [`../LogoCloud.tsx`](../LogoCloud.tsx) | Static centered grid of logos |
| **Marquee** | [`logoclouds/LogoCloudMarquee.tsx`](../logoclouds/LogoCloudMarquee.tsx) | Many logos with subtle continuous motion |
| **Aside** | [`logoclouds/LogoCloudAside.tsx`](../logoclouds/LogoCloudAside.tsx) | Proof statement (heading) beside the logos |

## Choosing a variant

- **A handful of logos, calm layout?** → Grid.
- **Lots of logos, want motion?** → Marquee.
- **Need words next to the logos?** → Aside.

## Props by variant

- **Grid**: `heading?`, `logos: { name, logo }[]`.
- **Marquee**: `heading?`, `logos: { name, logo }[]` (list is duplicated internally for a seamless loop).
- **Aside**: `heading`, `subtext?`, `logos: { name, logo }[]`.

## Marquee setup

Add to `tailwind.config`:

```js
theme: { extend: {
  keyframes: { marquee: { '0%': { transform: 'translateX(0)' },
                          '100%': { transform: 'translateX(-50%)' } } },
  animation: { marquee: 'marquee 30s linear infinite' },
}}
```

## Quality checklist

- [ ] Logos via `ReactNode`; decorative `<img>` use `alt=""` (name comes from `name`).
- [ ] Keep logos monochrome/grayscale for calm; reveal color on hover if desired.
- [ ] Marquee: duplicated items are `aria-hidden`; respects `prefers-reduced-motion`
      (`motion-reduce:anim-none`).
