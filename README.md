# Site vitrine — Jérémy Samper, Consultant culinaire

Site vitrine professionnel pour Jérémy Samper, consultant en restauration spécialisé dans l'organisation des cuisines et l'optimisation de la rentabilité.

## Stack technique

- **Vite** + **React 18**
- **React Router v6** pour le routing
- **Framer Motion** pour les animations au scroll
- **CSS Modules + variables CSS** pour le styling (pas de framework)

## Installation locale

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview  # pour tester le build localement
```

## Structure du projet

```
src/
├── pages/           Pages du site (Home, Services, About, etc.)
├── components/
│   ├── layout/      Header, Footer, composants globaux
│   ├── home/        Sections spécifiques à la page d'accueil
│   └── ui/          Composants réutilisables (Button, Container, etc.)
├── data/            Données structurées (services, témoignages, clients)
├── assets/
│   ├── images/      Photos optimisées
│   └── fonts/       Polices auto-hébergées
└── styles/          Tokens DA, reset, styles globaux
```

## Déploiement

Le site est conçu pour être déployé sur **Vercel** avec auto-deploy depuis GitHub.

## Domaine

`jeremysamper.ch` (à configurer côté DNS au moment de la bascule)
