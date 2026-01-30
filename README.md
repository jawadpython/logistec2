# Manutech — Site intralogistique premium

Site web haut de gamme pour une entreprise d'intralogistique et de manutention.

## Technologies

- Next.js 16 (App Router)
- Tailwind CSS v4
- Prisma (SQLite)
- NextAuth

## Installation

```bash
npm install
```

Créer un fichier `.env` à la racine :

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="votre-secret-32-caracteres-minimum"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_EMAIL="admin@votredomaine.fr"
ADMIN_PASSWORD="votre-mot-de-passe-securise"
```

Initialiser la base de données :

```bash
npx prisma generate
npx prisma db push
```

## Lancer le projet

```bash
npm run dev
```

- Site : http://localhost:3000
- Admin : http://localhost:3000/admin
- Connexion : email et mot de passe définis dans `.env`

## Structure

- `src/app/` — Pages et routes
- `src/components/` — Composants réutilisables
- `src/lib/` — Utilitaires, Prisma, auth
- `prisma/` — Schéma et migrations

## Contenu par défaut

Le site affiche des produits et articles de démonstration si la base est vide. Après connexion admin, créez vos contenus via Produits et Blog.
