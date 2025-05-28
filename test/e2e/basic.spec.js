// test/e2e/basic.spec.js
import { test, expect } from '@playwright/test';

// Update the URL if your dev server runs on a different port
const BASE_URL = 'http://localhost:5173';

test.describe('Ethical Badge App', () => {
  test('Home page loads and shows login overlay', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#loginOverlay')).toBeVisible();
    await expect(page.locator('text=Ethical Badge')).toBeVisible();
  });

  test('Navigation bar is present after login', async ({ page }) => {
    await page.goto(BASE_URL);
    // Simulate login (replace with valid test credentials if needed)
    await page.fill('#loginName', 'Test Officer');
    await page.fill('#loginEmail', 'test@agency.gov');
    await page.fill('#loginPassword', 'password123');
    await page.click('#loginButton');
    // Wait for dashboard to appear
    await expect(page.locator('text=Officer Dashboard')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('header')).toBeVisible();
  });
});
