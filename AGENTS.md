# AGENTS.md — Constitution

Authority file for this repo. Read natively by Codex and used as a reference by
Claude Code. It defines the repo conventions and holds the **skill registry**.

## Role

This repo gathers my personal skills for coding agents (Claude Code / Codex). Each
skill's content is **canonical in its own `SKILL.md`** — this constitution does not
duplicate content, it indexes it and states when to load it.

## Conventions

- One skill = one folder `skills/<name>/SKILL.md`.
- Required YAML frontmatter: `name` and `description` (the description starts with
  "Use when…" and describes triggering conditions, not the process).
- Support files (components, scripts) live next to the `SKILL.md`.
- Default stack for frontend skills: **React + Tailwind, TypeScript (`.tsx`)**.
- **Content language: English. Writing in French is forbidden.** All files in this
  repo — skills, docs, comments, commit messages — must be written in English.

## Skill registry

| Skill | When to load | Source |
|---|---|---|
| `landing-page` | Building a landing page or a hero section in React + Tailwind | [`skills/landing-page/SKILL.md`](./skills/landing-page/SKILL.md) |

**Agent instruction:** when a task matches the "When to load" column, read the
matching `SKILL.md` and follow its instructions before writing code.
