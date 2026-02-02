# Manutech — Site intralogistique premium

Site web haut de gamme pour une entreprise d'intralogistique et de manutention.
x
## Technologies

- Next.js 16 (App Router)
- Tailwind CSS v4
- Prisma (PostgreSQL)
- NextAuth
- Vercel Blob (stockage images)

## Installation locale

```bash
npm install
```

Créer un fichier `.env` à la racine :

```
DATABASE_URL="postgresql://user:pass@host:5432/db?pgbouncer=true"
DIRECT_URL="postgresql://user:pass@host:5432/db"
NEXTAUTH_SECRET="votre-secret-32-caracteres-minimum"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_EMAIL="admin@votredomaine.fr"
ADMIN_PASSWORD="votre-mot-de-passe-securise"
```

**Base de données :** PostgreSQL requis. Options gratuites :
- [Neon](https://neon.tech) — Postgres serverless
- [Vercel Postgres](https://vercel.com/storage/postgres) — via le dashboard Vercel
- [Supabase](https://supabase.com) — Postgres hébergé

Initialiser la base de données :

```bash
npx prisma db push
```

## Lancer le projet

```bash
npm run dev
```

- Site : http://localhost:3000
- Admin : http://localhost:3000/admin
- Connexion : email et mot de passe définis dans `.env`

## Déploiement Vercel

### 1. Prérequis

- Compte [Vercel](https://vercel.com)
- Repo Git (GitHub, GitLab, Bitbucket)

### 2. Déployer

1. Importer le projet depuis votre repo sur [vercel.com/new](https://vercel.com/new)
2. Vercel détecte automatiquement Next.js — aucune config supplémentaire

### 3. Variables d'environnement

Dans **Vercel** > **Settings** > **Environment Variables**, ajouter :

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | URL Postgres (pooled) |
| `DIRECT_URL` | URL Postgres directe (migrations) |
| `NEXTAUTH_SECRET` | Secret aléatoire (32+ caractères) |
| `NEXTAUTH_URL` | URL du site (ex. `https://xxx.vercel.app`) |
| `ADMIN_EMAIL` | Email de connexion admin |
| `ADMIN_PASSWORD` | Mot de passe admin |
| `BLOB_READ_WRITE_TOKEN` | (Optionnel) Pour upload d'images via Blob |

**Base de données :** Ajouter **Vercel Postgres** ou **Neon** depuis **Storage** dans le dashboard. Les variables `DATABASE_URL` et `DIRECT_URL` sont injectées automatiquement.

**Stockage images :** Créer un **Blob Store** dans **Storage**. Le token `BLOB_READ_WRITE_TOKEN` est ajouté automatiquement. Sans Blob, utilisez uniquement des URLs d'images externes dans l'admin.

### 4. Premier déploiement

Après le premier déploiement, exécuter les migrations :

```bash
npx prisma db push
```

Ou via **Vercel** > **Storage** > votre base > **Query** pour exécuter le schéma Prisma.

### 5. URL de production

Mettre à jour `NEXTAUTH_URL` avec l'URL finale une fois le domaine configuré.

## Structure

- `src/app/` — Pages et routes
- `src/components/` — Composants réutilisables
- `src/lib/` — Utilitaires, Prisma, auth
- `prisma/` — Schéma et migrations

## Contenu par défaut

Le site affiche des produits et articles de démonstration si la base est vide. Après connexion admin, créez vos contenus via Produits et Blog.
