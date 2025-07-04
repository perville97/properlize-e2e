import { test, expect } from '@playwright/test';

test('Login avec identifiants valides', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('[name="username"]', 'admin');
  await page.fill('[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*vehicles/);
});
