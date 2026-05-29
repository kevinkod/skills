# Skills

My personal skills for coding agents (**Claude Code** & **Codex**). A public repo
to share and reuse them easily across projects.

I'm Kevin Raimbaud, a fullstack JavaScript developer. These skills encode my
recurring ways of working so the agent applies them automatically.

## Available skills

| Skill | Description |
|---|---|
| [`landing-page`](./skills/landing-page/SKILL.md) | Build a landing page / hero section in React + Tailwind (TypeScript), section by section. |

## Installation

### Claude Code

Copy (or symlink) the skills you want into your personal skills folder:

```bash
git clone https://github.com/kevinkod/skills.git
ln -s "$(pwd)/skills/skills/landing-page" ~/.claude/skills/landing-page
```

Claude Code then discovers the skill and loads it when the context calls for it.

### Codex

Codex natively reads [`AGENTS.md`](./AGENTS.md), which acts as the **constitution**:
it indexes the skills and states when to load them. Point Codex at this repo (or
copy `AGENTS.md` + the `skills/` folder to the root of your project).

## Structure

```
.
├── AGENTS.md                 Constitution: conventions + skill registry
├── README.md
└── skills/
    └── landing-page/
        ├── SKILL.md          The skill (source of truth)
        ├── Navbar.tsx        Reference navbar / header
        ├── Hero.tsx          Reference hero section (split variant)
        ├── heroes/           5 alternative hero templates
        │   ├── HeroCentered.tsx
        │   ├── HeroGradient.tsx
        │   ├── HeroBackgroundImage.tsx
        │   ├── HeroWaitlist.tsx
        │   └── HeroScreenshot.tsx
        ├── references/
        │   ├── hero-variants.md       Hero catalog: when to use each, props
        │   ├── features-variants.md   Features catalog
        │   ├── pricing-variants.md    Pricing catalog
        │   ├── testimonials-variants.md  Testimonials catalog
        │   ├── cta-variants.md        CTA catalog
        │   └── footer-variants.md     Footer catalog
        ├── LogoCloud.tsx     Reference logo cloud (social proof)
        ├── Features.tsx      Reference features section (grid variant)
        ├── features/         Alternative features templates
        │   ├── FeaturesAlternating.tsx
        │   └── FeaturesSplit.tsx
        ├── Pricing.tsx       Reference pricing section (tiers + toggle)
        ├── pricing/          Alternative pricing templates
        │   ├── PricingSingle.tsx
        │   └── PricingTable.tsx
        ├── Testimonials.tsx  Reference testimonials section (grid variant)
        ├── testimonials/     Alternative testimonials templates
        │   ├── TestimonialSingle.tsx
        │   └── TestimonialsMasonry.tsx
        ├── FAQ.tsx           Reference FAQ section
        ├── CTA.tsx           Reference call-to-action section (band variant)
        ├── cta/              Alternative CTA templates
        │   ├── CTASplit.tsx
        │   └── CTAGradient.tsx
        ├── Footer.tsx        Reference footer section (columns variant)
        └── footers/          Alternative footer templates
            ├── FooterMinimal.tsx
            └── FooterNewsletter.tsx
```

## Contributing

Personal repo, but feedback and suggestions are welcome via issues/PRs.

## License

MIT.
