Propelize E2E Test Project – Partie 2 🚀
Ce dépôt contient la configuration CI/CD pour l'exécution automatique des tests front-end Playwright de l’application Propelize.

⚙️ Pipeline CI/CD avec GitHub Actions
Le workflow ci.yml est situé dans .github/workflows/ et a été conçu pour automatiser l'intégration continue, avec :

✅ Déclenchement automatique sur push et pull_request vers la branche main

📦 Installation des dépendances via npm install

🛠 Installation des navigateurs Playwright avec npx playwright install --with-deps

🧪 Lancement des tests front-end Playwright

📤 Génération d’un rapport HTML et upload en tant qu’artifact

🔧 Serveur Express automatique
Le serveur local (server.js) est lancé automatiquement avant les tests grâce à la configuration suivante dans playwright.config.ts :

ts
webServer: {
  command: 'node server.js',
  port: 3000,
  timeout: 30 * 1000,
  reuseExistingServer: true,
}
📁 Lancer les tests en local
bash
npm install                   # Installer les dépendances
node server.js                # Démarrer le serveur Express
npx playwright test           # Lancer les tests
✅ Conclusion
Tous les objectifs CI/CD du TP Propelize ont été atteints avec rigueur : la configuration GitHub Actions assure une exécution fiable, reproductible et traçable des tests E2E front-end. Le pipeline est prêt pour de véritables scénarios d’intégration continue.