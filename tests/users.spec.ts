import { test, expect } from '@playwright/test';

test('Ajout d’un utilisateur via le formulaire', async ({ page }) => {
  await page.goto('http://localhost:3000/users');

  await page.fill('input[name="username"]', 'Utilisateur 3');
  await page.fill('input[name="password"]', 'monMotDePasse');
  await page.click('button[type="submit"]');

  // Attente que la page se recharge et affiche la nouvelle liste
  await expect(page.locator('ul')).toContainText('Utilisateur 3');
});
