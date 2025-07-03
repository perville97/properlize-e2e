test('La page véhicules affiche les éléments', async ({ page }) => {
  await page.goto('http://localhost:3000/vehicles');
  await expect(page.locator('h2')).toHaveText('Gestion des véhicules');
  await expect(page.locator('li')).toContainText(['Véhicule A', 'Véhicule B']);
});
