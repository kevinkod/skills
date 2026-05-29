# AGENTS.md — Constitution

Fichier d'autorité de ce repo. Lu nativement par Codex et utilisé comme référence
par Claude Code. Il définit les conventions du repo et tient le **registre des
skills**.

## Rôle

Ce repo rassemble mes skills perso pour agents de code (Claude Code / Codex). Le
contenu de chaque skill est **canonique dans son `SKILL.md`** — cette constitution
ne duplique pas le contenu, elle l'indexe et indique quand le charger.

## Conventions

- Un skill = un dossier `skills/<nom>/SKILL.md`.
- Frontmatter YAML requis : `name` et `description` (la description commence par
  « Use when… » et décrit les conditions de déclenchement, pas le process).
- Fichiers de support (composants, scripts) à côté du `SKILL.md`.
- Stack par défaut des skills front : **React + Tailwind, TypeScript (`.tsx`)**.
- Langue du contenu : français.

## Registre des skills

| Skill | Quand le charger | Source |
|---|---|---|
| `landing-page` | Création d'une landing page ou d'une hero section en React + Tailwind | [`skills/landing-page/SKILL.md`](./skills/landing-page/SKILL.md) |

**Instruction agents :** quand une tâche correspond à la colonne « Quand le charger »,
lire le `SKILL.md` correspondant et suivre ses instructions avant d'écrire du code.
