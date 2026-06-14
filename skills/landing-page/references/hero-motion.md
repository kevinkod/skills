# Hero motion — subtle SVG animation

A static hero reads as a screenshot; a hero with a *whisper* of motion reads as a
product. The rule of thumb: **decorative SVG/illustration elements in a hero
should always carry a slight, slow, looping animation** — enough to feel alive,
never enough to pull the eye off the headline or CTA.

This is a convention + a copy-paste snippet, not a new component. Apply it to any
hero that has a decorative layer: the blurred blobs in
[`HeroGradient`](../heroes/HeroGradient.tsx), a background scene, or an inline
illustrative SVG.

## Principles

- **Subtle, not strident.** Low amplitude (≤ ~10px translate, ≤ ~5° rotate), long
  periods (3–30s), gentle easing (`ease-in-out`), `infinite alternate`. If a
  visitor *notices* the motion before the headline, it's too much.
- **Compositor-only.** Animate only `translate` / `rotate` / `scale` / `opacity`
  (and, for SVG, the *individual* transform properties so they compose with an
  element's existing `transform` instead of overriding it). Never animate layout
  properties — no jank, no CLS.
- **Always gate on `prefers-reduced-motion`.** Use Tailwind's `motion-safe:`
  variant so motion is applied only when the user hasn't asked for less. Under
  `reduce`, the scene is simply static.
- **Vary per element.** Stagger delay/duration so multiple elements don't move in
  lockstep — that lockstep is what makes motion look cheap.
- **Decorative = hidden from AT.** Wrap decorative SVG in `aria-hidden="true"`.

## Step 1 — Declare the keyframes (Tailwind v4 `@theme`)

Paste into your `app.css` after `@import "tailwindcss";` (alongside your chosen
vibe). These four cover the common hero motions; keep the ones you use.

```css
@theme {
  /* Named animations — usable as `animate-hero-float`, etc. */
  --animate-hero-float: hero-float 7s ease-in-out infinite alternate;
  --animate-hero-drift: hero-drift 24s ease-in-out infinite alternate;
  --animate-hero-sway: hero-sway 6s ease-in-out infinite alternate;
  --animate-hero-twinkle: hero-twinkle 3.5s ease-in-out infinite alternate;

  @keyframes hero-float {
    /* gentle vertical bob — for jars, cards, badges, blobs */
    from { translate: 0 0; }
    to { translate: 0 -10px; }
  }
  @keyframes hero-drift {
    /* slow wander — for clouds, large background shapes */
    from { translate: 0 0; }
    to { translate: 14px -8px; }
  }
  @keyframes hero-sway {
    /* tilt + tiny lift — visibly different from a float, for accents/fruit/icons */
    from { rotate: -5deg; translate: 0 0; }
    to { rotate: 5deg; translate: 0 -3px; }
  }
  @keyframes hero-twinkle {
    /* opacity pulse — for stars/sparkles; pair with a static glow */
    from { opacity: 0.5; }
    to { opacity: 1; }
  }
}
```

## Step 2 — Apply with `motion-safe:` + per-element variation

Gate every animation with `motion-safe:` (off automatically under reduced motion).
Stagger instances with an inline `--i` index and arbitrary-value utilities:

```tsx
{/* one decorative element */}
<span
  aria-hidden="true"
  style={{ "--i": 2 } as React.CSSProperties}
  className="motion-safe:animate-hero-float [animation-delay:calc(var(--i)*-1.3s)]"
/>
```

For SVG elements that already have a positioning `transform`, animating the
*individual* `translate`/`rotate` properties (which is what these keyframes do)
composes with that transform — set `transform-box: fill-box` so rotate/scale
pivot about the element's own centre:

```tsx
<g aria-hidden="true">
  {/* preserveAspectRatio="xMidYMin slice" on the <svg> gives object-cover framing */}
  <use href="#cloud" className="[transform-box:fill-box] motion-safe:animate-hero-drift" style={{ "--i": 0 } as React.CSSProperties} />
  <use href="#star"  className="[filter:drop-shadow(0_0_5px_currentColor)] motion-safe:animate-hero-twinkle" />
</g>
```

## Worked example — an inline decorative scene

A minimal, self-contained decorative SVG layer you can drop behind any hero's
content (`-z-10`). Each shape class gets its own subtle motion; the whole layer is
`aria-hidden` and motion is `motion-safe`-gated.

```tsx
// Drop inside a `relative isolate overflow-hidden` hero <section>, behind content.
function HeroSceneDecoration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMin slice"
      className="absolute inset-0 -z-10 h-full w-full"
    >
      {/* drifting soft shapes */}
      {[
        { cx: 180, cy: 120, r: 90, i: 0 },
        { cx: 980, cy: 90, r: 120, i: 1 },
        { cx: 640, cy: 220, r: 70, i: 2 },
      ].map(({ cx, cy, r, i }) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          className="fill-accent/20 [transform-box:fill-box] motion-safe:animate-hero-drift [animation-delay:calc(var(--i)*-2.3s)]"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
      {/* twinkling sparkles */}
      {[
        { cx: 320, cy: 90, i: 0 },
        { cx: 860, cy: 260, i: 1 },
        { cx: 520, cy: 320, i: 2 },
      ].map(({ cx, cy, i }) => (
        <circle
          key={`s${i}`}
          cx={cx}
          cy={cy}
          r={4}
          className="fill-accent [filter:drop-shadow(0_0_5px_currentColor)] motion-safe:animate-hero-twinkle [animation-delay:calc(var(--i)*-0.6s)]"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
```

Colors use the semantic tokens (`fill-accent`, `fill-accent/20`) so the scene
restyles with the active vibe — see [art-direction.md](./art-direction.md).

## Retrofitting existing heroes

- **HeroGradient** — its decorative blob already exists; add
  `motion-safe:animate-hero-drift` to that `<div aria-hidden>` for instant life.
- **HeroBackgroundImage** — keep the photo still; add one or two
  `motion-safe:animate-hero-float` accent shapes over it (mind text contrast).
- **Any inline icon/illustration** — wrap decorative bits and apply
  `motion-safe:animate-hero-float`/`-sway` with a per-element `--i`.

## Checklist

- [ ] Decorative SVG/elements carry a slow, low-amplitude looping animation.
- [ ] Every animation is `motion-safe:`-gated (static under `prefers-reduced-motion`).
- [ ] Only `translate` / `rotate` / `scale` / `opacity` animate (no layout props → no CLS).
- [ ] Multiple instances are staggered (`--i`), not in lockstep.
- [ ] Decorative layers are `aria-hidden="true"` and never block pointer/focus.
- [ ] Motion never reduces headline/CTA legibility.
