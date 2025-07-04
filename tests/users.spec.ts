import { test, expect } from '@playwright/test';

test('Ajout d’un utilisateur via le formulaire', async ({ page }) => {
  await page.goto('http://localhost:3000/users');

  await page.fill('input[name="username"]', 'Utilisateur 3');
  await page.fill('input[name="password"]', 'monMotDePasse');
  await page.click('button[type="submit"]');

  await expect(page.locator('table')).toContainText('Utilisateur 3');
});
