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
        ├── Hero.tsx          Reference hero section
        ├── LogoCloud.tsx     Reference logo cloud (social proof)
        ├── Features.tsx      Reference features section
        ├── Pricing.tsx       Reference pricing section
        ├── Testimonials.tsx  Reference testimonials section
        ├── CTA.tsx           Reference call-to-action section
        └── Footer.tsx        Reference footer section
```

## Contributing

Personal repo, but feedback and suggestions are welcome via issues/PRs.

## License

MIT.
