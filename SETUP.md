# Guide de mise en ligne — jeremysamper.ch

Ce document te guide pas à pas pour mettre le site en ligne sur **jeremysamper.ch**, en sortant du domaine Wix et en passant sur Vercel via GitHub.

**Durée totale estimée** : ~1h30 (en lisant tranquillement).

⚠ **Important** : ne touche au DNS du domaine que tout à la fin (étape 7). Tant que le DNS pointe encore sur Wix, ton site Wix actuel reste en ligne et personne ne voit la transition. Tu auras une URL Vercel temporaire (`xxx.vercel.app`) pour valider tout le nouveau site avant la bascule.

---

## Vue d'ensemble — les 7 étapes

```
1. Tester en local                  →  10 min
2. Créer compte GitHub               →  10 min
3. Pousser le code sur GitHub        →  10 min
4. Créer compte Vercel + déployer    →  10 min
5. Configurer le formulaire de contact (Formspree)  →  5 min
6. Tester le site sur l'URL Vercel temporaire  →  10 min
7. Sortir le domaine de Wix + migrer le DNS   →  30-60 min
```

---

## ÉTAPE 1 — Tester le site sur ton ordinateur

### Pré-requis
Tu dois avoir **Node.js** installé. Si ce n'est pas le cas :
1. Va sur [nodejs.org](https://nodejs.org/)
2. Télécharge la **version LTS** (Long Term Support)
3. Installe-la (suivant suivant suivant…)
4. Vérifie en ouvrant un terminal et en tapant : `node --version` → tu dois voir un numéro

### Lancer le site

Ouvre un terminal **dans le dossier `jeremysamper-site`** (clic droit dans le dossier → "Ouvrir dans le terminal" sur Windows/Mac, ou `cd /chemin/vers/jeremysamper-site`).

```bash
npm install
npm run dev
```

Le terminal affichera quelque chose comme `Local: http://localhost:5173/`. Ouvre cette adresse dans ton navigateur.

> Toute modification du code recharge automatiquement la page.

Pour stopper : `Ctrl + C` dans le terminal.

---

## ÉTAPE 2 — Créer un compte GitHub

GitHub stocke le code en ligne et le synchronise avec Vercel pour les déploiements automatiques.

1. Va sur [github.com](https://github.com/) → clique **Sign up**
2. Choisis un username (par exemple `jeremysamper`)
3. Utilise une adresse email pro
4. Confirme par email
5. Sur la première page d'accueil, choisis le plan **Free** (gratuit illimité pour les repos privés depuis 2020)

C'est tout pour cette étape.

---

## ÉTAPE 3 — Pousser le code sur GitHub

### Option A — GitHub Desktop (recommandé, plus simple)

1. Télécharge **GitHub Desktop** : [desktop.github.com](https://desktop.github.com/)
2. Installe et lance l'application
3. Connecte-toi avec ton compte GitHub
4. Menu **File → Add local repository** → choisis le dossier `jeremysamper-site`
5. GitHub Desktop va te dire que ce n'est pas encore un repo Git → clique **"create a repository"**
6. Dans le formulaire :
   - **Name** : `jeremysamper-site`
   - **Description** : "Site vitrine — Jérémy Samper, Consultant culinaire"
   - **Local Path** : déjà rempli
   - Coche **"Initialize this repository with a README"** seulement si tu n'as pas déjà un README
   - Clique **"Create repository"**
7. Tu vois maintenant tous les fichiers à valider → en bas, écris un message de commit (ex: "Initial commit") → clique **"Commit to main"**
8. En haut, clique **"Publish repository"**
9. Coche **"Keep this code private"** (c'est ton code, pas besoin de le rendre public)
10. Clique **"Publish repository"**

Tu peux vérifier sur [github.com](https://github.com/) → ton profil → tu dois voir le repo.

### Option B — Terminal (si tu connais Git)

```bash
cd jeremysamper-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/jeremysamper-site.git
git push -u origin main
```

---

## ÉTAPE 4 — Déployer sur Vercel

Vercel détecte automatiquement les projets Vite + React et configure tout sans intervention.

1. Va sur [vercel.com](https://vercel.com/) → **Sign Up**
2. Clique **"Continue with GitHub"** → autorise Vercel à accéder à ton compte GitHub
3. Sur le dashboard, clique **"Add New..."** → **"Project"**
4. Tu vois la liste de tes repos GitHub → trouve `jeremysamper-site` → clique **"Import"**
5. Sur l'écran de configuration :
   - **Framework Preset** : Vite (détecté automatiquement)
   - **Root Directory** : `./` (ne change rien)
   - **Build and Output Settings** : ne change rien
   - **Environment Variables** : laisse vide pour l'instant
6. Clique **"Deploy"**

Au bout d'environ **1 minute**, Vercel affiche un bouton "Visit" avec une URL du type `https://jeremysamper-site-xxxxx.vercel.app`. **Le site est en ligne !**

À chaque modification que tu pousseras sur GitHub, Vercel redéploiera automatiquement le site en quelques secondes.

---

## ÉTAPE 5 — Activer le formulaire de contact (Formspree)

Le formulaire est codé mais a besoin d'un service pour envoyer les messages.

1. Va sur [formspree.io](https://formspree.io/) → **Sign Up** (gratuit jusqu'à 50 envois/mois)
2. Connecte-toi → clique **"+ New Form"**
3. Donne un nom au formulaire (ex: "Site Jérémy Samper")
4. Indique l'**email** où tu veux recevoir les messages (l'email réel auquel tu as accès, pas `contact@jeremysamper.ch` à ce stade)
5. Formspree te donne un **ID** de formulaire (genre `xqkrwlay` ou `mleyzqra`) → **copie-le**
6. Sur ton ordinateur, ouvre le fichier `src/pages/Contact.jsx`
7. Trouve la ligne :
   ```js
   const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
   ```
8. Remplace par ton vrai ID :
   ```js
   const FORMSPREE_ID = 'xqkrwlay';  // ton ID réel
   ```
9. Sauvegarde, va dans GitHub Desktop → Commit "Configure Formspree" → Push origin

Vercel redéploie automatiquement. Teste le formulaire sur l'URL Vercel : tu dois recevoir l'email dans ta boîte.

> **Astuce** : configure Formspree pour rejeter les spams (option "reCAPTCHA" ou "Honeypot" dans les paramètres du formulaire). Le honeypot est déjà inclus dans le code.

---

## ÉTAPE 6 — Test complet sur l'URL Vercel

**Avant de toucher au DNS**, teste tout sur l'URL Vercel temporaire :

✅ **Navigation** : tous les liens du menu fonctionnent ?
✅ **Mobile** : le site est OK sur ton téléphone ?
✅ **Formulaire** : tu reçois bien le mail de test ?
✅ **WhatsApp** : le bouton flottant ouvre WhatsApp avec le bon numéro ?
✅ **Téléphones** : cliquer sur un numéro propose-t-il d'appeler ?
✅ **Pages légales** : toutes les 4 pages s'affichent ?
✅ **Logos clients** : les 3 logos sont visibles ?
✅ **Photos** : aucune image cassée ?
✅ **Vitesse** : ouvre [PageSpeed Insights](https://pagespeed.web.dev/) et entre l'URL Vercel — tu dois avoir un score > 90 mobile et > 95 desktop.

**Si tout est OK → passe à l'étape 7.** Sinon, corrige avant de migrer.

---

## ÉTAPE 7 — Migration du domaine jeremysamper.ch

Cette étape est la plus délicate. Lis tout avant de commencer.

### Le principe
Aujourd'hui, `jeremysamper.ch` pointe vers les serveurs Wix qui hébergent ton site Wix. On va :
1. **Sortir le domaine de Wix** (Wix conserve uniquement le statut de registrar — ils restent propriétaires de l'enregistrement, mais tu peux le pointer ailleurs)
2. **Configurer Wix pour qu'il indique** que le site doit être servi par Vercel (DNS "A" et "CNAME")
3. **Ajouter le domaine** côté Vercel
4. **Attendre la propagation** DNS (5 min à 24 h)

### 7.1 — Côté Vercel : préparer le domaine

1. Sur le dashboard Vercel, va sur ton projet `jeremysamper-site`
2. Clique sur l'onglet **"Settings"** → **"Domains"** dans la sidebar
3. Dans le champ "Add domain", tape `jeremysamper.ch` → clique **"Add"**
4. Vercel te dit que le domaine n'est pas configuré et te donne **les enregistrements DNS à ajouter**. Il y a généralement 2 options :
   - **Option recommandée — A record** : pointer vers l'IP `76.76.21.21`
   - **Option alternative — Nameservers** : utiliser les serveurs DNS de Vercel
   
   👉 **Choisis l'option A record** (plus simple, tu gardes le contrôle DNS chez Wix).
5. Note précisément ce que Vercel te demande (généralement) :
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
6. Ajoute aussi `www.jeremysamper.ch` dans Vercel (clique encore Add Domain) — il sera redirigé automatiquement vers `jeremysamper.ch`.

### 7.2 — Côté Wix : changer les DNS

⚠ **À ce moment précis, ton site Wix actuel cessera d'être accessible** (entre 5 min et quelques heures). Choisis un moment calme.

1. Connecte-toi à [wix.com](https://wix.com)
2. Va dans **Mes sites** → ton site → **Paramètres** → **Domaines**
3. Tu dois voir `jeremysamper.ch` listé
4. Clique sur les **3 points** à droite du domaine → **"Avancé"** ou **"Gérer DNS"**
5. Tu arrives dans un panneau **"Avancé"** avec une section **"Enregistrements DNS"**

   Le panneau contient probablement :
   - Un enregistrement **A** avec une valeur Wix (ex: `185.230.63.107`) → **modifie-le** ou **supprime-le**
   - Un enregistrement **CNAME** "www" pointant vers Wix → **modifie-le**

6. **Modifie l'enregistrement A "@"** :
   - Type : `A`
   - Hôte : `@` (ou laisse vide selon l'interface Wix)
   - Pointe vers : `76.76.21.21`
   - TTL : 3600 (1 heure)
   - Sauvegarde

7. **Modifie le CNAME "www"** :
   - Type : `CNAME`
   - Hôte : `www`
   - Pointe vers : `cname.vercel-dns.com`
   - TTL : 3600
   - Sauvegarde

8. **Supprime tous les autres enregistrements liés à Wix** (autres A, AAAA, CNAME, TXT spécifiques à Wix — sauf MX si tu as une boîte email Wix que tu veux garder, voir section suivante).

### 7.3 — ⚠ Cas particulier : email pro Wix

Si tu as une **boîte email professionnelle Wix** (`contact@jeremysamper.ch` via Wix) que tu veux **garder** :

→ **Ne supprime pas les enregistrements MX** liés à Google Workspace ou autre fournisseur email.

→ Si tu veux **migrer** ton email pro vers un autre service (par exemple **Infomaniak Mail** plus économique en CH), c'est le moment idéal pendant la migration. Sinon, garde les MX existants.

> Tu n'as **pas encore** d'email pro Wix d'après ce que tu m'as dit. Donc on **n'ajoute pas** de MX pour l'instant. Tu pourras créer `contact@jeremysamper.ch` plus tard via Infomaniak ou Google Workspace, ce qui ne nécessitera que d'ajouter des MX records sans toucher au reste.

### 7.4 — Côté Vercel : valider la propagation

1. Retourne sur Vercel → onglet Domains
2. Au bout de 5 à 30 minutes, le statut du domaine passe de **"Invalid Configuration"** à **"Valid Configuration"** ✅
3. Vercel génère automatiquement un **certificat SSL** (HTTPS) — gratuit, valable à vie, renouvelé automatiquement
4. Vérifie en allant sur `https://jeremysamper.ch` dans ton navigateur

Si ça ne fonctionne pas après 1 heure :
- Vérifie les enregistrements DNS sur [dnschecker.org](https://dnschecker.org) en tapant `jeremysamper.ch`
- L'enregistrement **A** doit pointer vers `76.76.21.21`
- Si non, retour à l'étape 7.2 pour vérifier la config Wix

### 7.5 — Désactiver le site Wix

Une fois `jeremysamper.ch` qui charge bien le nouveau site sur Vercel :

1. Sur Wix → tes sites → ton site → **"Dépublier"** ou **"Déconnecter le domaine"**
2. Ne supprime **pas** le compte Wix tout de suite — garde-le encore quelques semaines au cas où tu aurais besoin de récupérer un texte ou une image
3. Vérifie que tu ne payes plus pour Wix Premium — tu peux annuler l'abonnement (ils peuvent te conserver le domaine en gratuit jusqu'à expiration de la période payée)

---

## Modifier les contenus du site après mise en ligne

Une fois en production, tu modifies les contenus dans les fichiers suivants. Push sur GitHub → Vercel redéploie automatiquement en 30 secondes.

| Pour modifier… | Édite ce fichier |
|---|---|
| Coordonnées (téléphones, adresse, email) | `src/data/contact.jsx` |
| Liste/textes des services | `src/data/services.js` |
| Étapes de la méthode | `src/data/method.js` |
| Typologies "Pour qui ?" | `src/data/audiences.js` |
| Témoignages | `src/data/testimonials.js` (passer `published: true`) |
| Logos clients | `src/data/clients.js` (importer un nouveau PNG dans `src/assets/clients/`) |
| Couleurs et typographies | `src/styles/tokens.css` |
| Texte de la page Accueil | `src/pages/Home.jsx` (ou les composants dans `src/components/home/`) |
| Texte de la page À propos | `src/pages/About.jsx` |
| Pages légales | `src/pages/legal/Mentions.jsx`, `Conditions.jsx`, `Cookies.jsx`, `Confidentialite.jsx` |

---

## Aide rapide

**Le site ne se charge pas en local ?**
Vérifie que tu as bien lancé `npm install` avant `npm run dev`.

**J'ai une erreur au build sur Vercel ?**
Regarde le log de déploiement Vercel — il indique le fichier et la ligne en erreur.

**Je veux annuler une modification ?**
Dans GitHub Desktop : sélectionne le fichier modifié → "Discard changes".

**Le formulaire ne fonctionne pas après config Formspree ?**
Vérifie que tu as remplacé `YOUR_FORMSPREE_ID` par ton vrai ID, sauvegardé, et poussé sur GitHub. Vérifie que le formulaire affiché sur le site Vercel correspond bien à la dernière version (Vercel doit avoir redéployé après ton push).

**Le DNS ne se propage pas ?**
[whatsmydns.net](https://www.whatsmydns.net/) te montre la propagation mondiale. Patience : ça peut prendre jusqu'à 24 h.

**Je veux créer un email contact@jeremysamper.ch après la migration ?**
Le plus simple en Suisse : [Infomaniak Mail](https://www.infomaniak.com/fr/hebergement-emails) (~5 CHF/mois). Tu ajouteras les MX records dans Wix DNS.
