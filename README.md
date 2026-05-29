# Skills

Mes skills perso pour agents de code (**Claude Code** & **Codex**). Un repo public
pour les partager et les réutiliser facilement d'un projet à l'autre.

Je suis Kevin Raimbaud, développeur fullstack JavaScript. Ces skills encodent mes
façons de faire récurrentes pour que l'agent les applique automatiquement.

## Skills disponibles

| Skill | Description |
|---|---|
| [`landing-page`](./skills/landing-page/SKILL.md) | Créer une landing page / hero section en React + Tailwind (TypeScript), section par section. |

## Installation

### Claude Code

Copie (ou symlink) les skills voulus dans ton dossier de skills personnel :

```bash
git clone https://github.com/<ton-user>/skills.git
ln -s "$(pwd)/skills/skills/landing-page" ~/.claude/skills/landing-page
```

Claude Code découvre alors le skill et le charge quand le contexte s'y prête.

### Codex

Codex lit nativement [`AGENTS.md`](./AGENTS.md), qui sert de **constitution** :
il indexe les skills et indique quand les charger. Pointe Codex vers ce repo (ou
copie `AGENTS.md` + le dossier `skills/` à la racine de ton projet).

## Structure

```
.
├── AGENTS.md                 Constitution : conventions + registre des skills
├── README.md
└── skills/
    └── landing-page/
        ├── SKILL.md          Le skill (source de vérité)
        └── Hero.tsx          Composant de référence
```

## Contribuer

Repo perso, mais les retours et suggestions sont bienvenus via issues/PR.

## Licence

MIT.
