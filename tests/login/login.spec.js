const { test, expect } = require('@playwright/test');

test('should login with valid credentials', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/locatorspractice/');
  await page.fill('input[id="inputUsername"]', 'salman.rishad@weselect.com');
  await page.fill('input[placeholder="Password"]', 'rahulshettyacademy');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://rahulshettyacademy.com/locatorspractice/');
});