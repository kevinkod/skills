---
name: landing-page
description: Use when building a landing page or a hero section in React + Tailwind — when the user asks to create a marketing/landing page, a hero, an above-the-fold section, a header with headline + CTA, or to start a new product/SaaS landing page.
---

# Landing Page

## Overview

Crée des landing pages section par section en **React + Tailwind (TypeScript / `.tsx`)**.
Le repo démarre minimal : une seule section solide, la **Hero section** (l'espace
above-the-fold). On compose la page en ajoutant d'autres sections par-dessus.

Principe : une section = un composant `.tsx` autonome, responsive et accessible,
qu'on copie puis qu'on adapte au produit. Pas de générateur magique — un point de
départ de qualité production qu'on personnalise.

## Anatomie d'une Hero section

| Élément | Rôle | Obligatoire |
|---|---|---|
| Eyebrow | Petit label au-dessus du titre (catégorie, nouveauté) | Non |
| Titre (h1) | La proposition de valeur, courte et concrète | **Oui** |
| Sous-titre | 1–2 phrases qui précisent le bénéfice | **Oui** |
| CTA principal | Action désirée n°1 (bouton plein) | **Oui** |
| CTA secondaire | Alternative basse friction (lien, « En savoir plus ») | Non |
| Social proof | Logos, note, nombre d'utilisateurs | Recommandé |
| Visuel | Capture produit, illustration ou dégradé | Non |

## Variantes de layout

- **Centré** : tout aligné au centre, idéal early-stage / pré-launch.
- **Split** : texte à gauche, visuel à droite (grid 2 colonnes ≥ `lg`). Le plus
  courant pour un SaaS.
- **Fond dégradé** : variante centré/split avec fond `bg-gradient-to-b` et accents.

## Implémentation

Composant de référence prêt à copier : [`Hero.tsx`](./Hero.tsx) (variante split,
responsive, accessible). Adapte le texte, les liens et les couleurs.

Workflow :
1. Demander (ou déduire) : produit, audience, proposition de valeur, action désirée.
2. Choisir une variante de layout selon le contexte.
3. Copier `Hero.tsx`, remplir le contenu, ajuster les classes Tailwind à la charte.
4. Vérifier avec la checklist qualité.

## Checklist qualité

- [ ] **Responsive** : testé mobile → desktop, pas de débordement, CTA tappable (≥ 44px).
- [ ] **Accessibilité** : un seul `<h1>`, contraste AA, `alt` sur les images, focus visible.
- [ ] **Hiérarchie** : le titre domine, le CTA principal se distingue du secondaire.
- [ ] **Contenu** : titre concret (bénéfice, pas slogan vague), sous-titre qui complète.
- [ ] **Perf** : image optimisée (`loading`, dimensions), pas de dépendance lourde.
- [ ] **Pas d'« AI look »** : éviter le dégradé violet générique + emoji + lorem. Choix
      typographiques et d'espacement intentionnels.

## Étendre à d'autres sections

Ajouter une section = nouveau composant dans ce dossier (`Features.tsx`,
`Pricing.tsx`, `CTA.tsx`, `Footer.tsx`…) suivant les mêmes principes (autonome,
responsive, accessible) et l'ajouter à cette doc.

## Erreurs courantes

- Titre = slogan marketing vague (« Libérez votre potentiel ») au lieu d'un bénéfice clair.
- Trop de CTA concurrents : une seule action principale.
- Visuel décoratif sans `alt` ou qui casse le layout mobile.
- Couleurs/typo par défaut qui donnent l'aspect template générique.
