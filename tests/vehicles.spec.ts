import { test, expect } from '@playwright/test';

test('La page véhicules affiche les éléments', async ({ page }) => {
  await page.goto('http://localhost:3000/vehicles');

  await expect(page.locator('h2')).toHaveText('Gestion des véhicules');

  const items = page.locator('li');
  await expect(items).toHaveCount(2);
  await expect(items.nth(0)).toHaveText('Véhicule A');
  await expect(items.nth(1)).toHaveText('Véhicule B');
});
