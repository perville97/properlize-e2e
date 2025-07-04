              Propelize E2E Test Project – Partie 2

Ce dépôt contient l'implémentation complète des **tests end-to-end** pour l’application Propelize, en combinant **Docker**, **Playwright** et **GitHub Actions** pour une automatisation CI/CD maîtrisée. Le projet couvre les trois interfaces principales de Propelize, avec une logique utilisateur simulée côté Express.js.



                 Interfaces testées

- 🔐 Connexion utilisateur (`/login`)
- 🚗 Tableau de bord véhicules (`/vehicles`)
- 👤 Gestion des utilisateurs (`/users`)

Tous les tests sont écrits avec [Playwright](https://playwright.dev/), lancé dans un conteneur Docker dédié à l’environnement de test.



           Dockerisation

Le projet utilise une image basée sur Playwright `v1.53.2` pour garantir la compatibilité avec les navigateurs embarqués.

              Dockerfile
FROM mcr.microsoft.com/playwright:v1.53.2
WORKDIR /app
COPY . .
RUN npm install
CMD ["npx", "playwright", "test"]
