# Site vitrine — Jérémy Samper, Consultant culinaire

Site vitrine professionnel pour Jérémy Samper, consultant en restauration spécialisé dans l'organisation des cuisines et l'optimisation de la rentabilité.

## Stack technique

- **Vite 5** + **React 18**
- **React Router v6** pour le routing
- **Framer Motion 11** pour les animations au scroll
- **CSS Modules + variables CSS** pour le styling (pas de framework)
- **vite-imagetools + sharp** pour la génération automatique des variantes WebP responsives au build

## Installation locale

```bash
npm install
cp .env.example .env       # facultatif — par défaut l'ID Formspree intégré marche
npm run dev
```

Le site est servi sur `http://localhost:5173`.

## Build de production

```bash
npm run build              # génère le bundle dans dist/
npm run preview            # sert dist/ en local sur :4173 pour vérifier
```

## Structure du projet

```
src/
├── pages/           Pages du site (Home, Services, About, Realisations, Contact, légales)
├── components/
│   ├── layout/      Header, Footer, WhatsappFloat
│   ├── home/        Sections spécifiques à la page d'accueil (Hero, ServicesGrid, …)
│   └── ui/          Composants réutilisables (Button, Container, FadeIn, ResponsiveImage)
├── data/            Données structurées (services, méthode, audiences, clients, contact, témoignages)
├── hooks/           useDocumentTitle (SEO par page)
├── assets/
│   ├── images/      Sources JPG haute résolution (converties automatiquement en WebP au build)
│   └── clients/     Logos partenaires (PNG)
└── styles/          tokens.css (DA), reset.css, global.css
```

## Variables d'environnement

| Variable | Usage | Obligatoire ? |
|---|---|---|
| `VITE_FORMSPREE_ID` | Identifiant du formulaire Formspree (https://formspree.io) | Non — fallback intégré |

Voir `.env.example`.

## Déploiement

### Vercel (cible principale)

```bash
# Premier déploiement
npx vercel              # déploiement preview
npx vercel --prod       # déploiement production

# Ou via auto-deploy GitHub : push sur main → Vercel build automatique
```

Le fichier `vercel.json` configure :
- le fallback SPA (toute route renvoyée vers `index.html`)
- les headers de sécurité (`X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`, etc.)
- le cache long sur les assets immutables

Pour configurer l'ID Formspree côté Vercel :
```
Settings → Environment Variables → VITE_FORMSPREE_ID=xxxx
```

### Cloudflare Pages (fallback)

`public/_redirects` contient déjà le fallback SPA. Connecter le repo GitHub à Cloudflare Pages, build command `npm run build`, output `dist`.

### Autres plateformes

Tout hébergement statique servant `dist/` fonctionne, à condition de configurer un fallback SPA renvoyant toutes les routes inconnues sur `index.html`.

## Optimisation images

Les images du dossier `src/assets/images/` sont importées avec la query string `?responsive` (cf. `vite.config.js`). Au build, `vite-imagetools` génère automatiquement :
- des variantes en **640w / 1024w / 1600w / 2400w**
- au format **WebP (qualité 82)** et fallback **JPG**
- consommées par le composant `<ResponsiveImage>` qui produit un `<picture>` avec `srcset` et `sizes`

Le Hero garde `loading="eager"` + `fetchpriority="high"` ; toutes les autres images sont en `loading="lazy"`.

## Domaine

`jeremysamper.ch` — à pointer sur Vercel via les enregistrements DNS au moment de la bascule.

## SEO

- `useDocumentTitle` configure `<title>` et `<meta description>` sur chaque page
- `index.html` contient OG, Twitter Card et un JSON-LD `ProfessionalService`
- `public/sitemap.xml` liste les 5 pages principales + 4 légales
- `public/robots.txt` autorise tout, pointe sur le sitemap
