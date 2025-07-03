import { test, expect } from '@playwright/test';

test('Login avec identifiants valides', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*dashboard/);
});
