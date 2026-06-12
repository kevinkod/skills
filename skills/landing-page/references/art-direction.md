# Art direction — vibe presets

The landing-page components are **theme-driven**: they reference a fixed set of
semantic design tokens, never raw colors (`bg-indigo-600`, `text-gray-900`…).
Each "vibe" is one complete set of token values in `themes/<vibe>.css`. Pasting a
different preset restyles the whole page. **Requires Tailwind v4** (tokens are
declared with `@theme`).

## How it works

1. Pick a vibe below.
2. Paste its `themes/<vibe>.css` contents into your `app.css`, right after
   `@import "tailwindcss";` (or, in a Vite + Tailwind v4 setup, `import` the file).
3. Load the fonts the vibe names (Google Fonts `<link>` or `@import`).
4. Build the page from the section components — they already consume the tokens.

To restyle later, swap the preset block. No component edits.

## The token contract

Every vibe defines the same tokens. `@theme` turns each into a utility.

| Token | Utility | Role |
|---|---|---|
| `--color-surface` | `bg-surface` | page background |
| `--color-surface-2` | `bg-surface-2` | alt section + card background |
| `--color-ink` | `text-ink` | headings and body text |
| `--color-muted` | `text-muted` | secondary text, captions |
| `--color-brand` | `bg-brand` | primary CTA / key accent fill |
| `--color-on-brand` | `text-on-brand` | label on a brand-colored surface |
| `--color-accent` | `text-accent` | links, eyebrows, secondary accent |
| `--color-border` | `border-border` | hairlines, dividers, card borders |
| `--font-display` | `font-display` | display / headings |
| `--font-body` | `font-body` | UI, body, labels |
| `--font-mono` | `font-mono` | code, mono eyebrows |
| `--radius-control` | `rounded-control` | buttons, inputs, chips |
| `--radius-card` | `rounded-card` | cards, images, panels |
| `--shadow-cta` | `shadow-cta` | CTA / hover elevation (may be `none`) |
| `--shadow-card` | `shadow-card` | resting card elevation (may be `none`) |

Two extra `:root` variables (Tailwind v4 has no namespace for them):
`--border-width` (consumed via `border-[length:var(--border-width)]`) and
`--gradient-accent` (a decorative hero/CTA background via
`bg-[image:var(--gradient-accent)]`; `none` where a vibe is flat).

Convention: surfaces that need emphasis (the CTA band, the highlighted pricing
tier) use `bg-brand text-on-brand` — this reads correctly in every vibe (a black
band in editorial/brutalist, violet in aurora, coral in playful).

## Choosing a vibe

| Vibe | Character | Best for |
|---|---|---|
| **editorial** | Type-forward serif, warm cream, generous whitespace, minimal color | Content/brand sites, writing tools, agencies, "tasteful" SaaS |
| **aurora** | Dark, glassy, vivid violet→cyan glow | Developer tools, AI/infra, anything that wants a premium-tech feel |
| **brutalist** | Monospace, hard black borders, offset shadows, zero radius | Dev tools with attitude, launches, portfolios, memorable one-pagers |
| **playful** | Warm coral, rounded, soft shadows, friendly | Consumer apps, communities, education, anything human and approachable |

### editorial

Fonts: Fraunces (display), Inter (body). Surface `#faf9f5`, ink `#14110f`, brand =
ink, accent rust `#9a3b1b`, borders `#e6e1d6`, radius ~2–6px, no shadows.

### aurora

Fonts: Space Grotesk (display), Inter (body). Surface `#0a0a0f`, surface-2
`#15151f`, ink `#f5f5fa`, brand violet `#7c5cff`, accent cyan `#22d3ee`, radius
8–12px, colored glow shadows, aurora `--gradient-accent`.

### brutalist

Fonts: Space Mono / IBM Plex Mono. Surface `#fff`, ink/brand/border `#000`, accent
`#ff3b00`, radius `0`, hard offset shadow `4px 4px 0 0 #000`, `--border-width: 2px`.

### playful

Fonts: Baloo 2 (display), Inter (body). Surface `#fff7ef`, ink plum `#2a1626`,
brand coral `#ff6b45`, accent strawberry `#d63d54`, radius 12–16px, soft colored
shadows, peach→gold `--gradient-accent`.

## Extending

Add a vibe = a new `themes/<name>.css` defining the **same** token set with your
values. Do not add tokens for a one-off need in a single vibe; if a token is
missing, add it to the contract (and to every preset) so swaps stay clean.
