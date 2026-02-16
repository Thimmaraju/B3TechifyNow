const { test, expect } = require('@playwright/test');
const testData = require('../testdata/saucedemo-credentials.json');
const LoginPageXPath = require('../pages/LoginPageXPath');
const InventoryPage = require('../pages/InventoryPage');

test('Login as standard user using POM with XPath locators', async ({ page }) => {
  // Get credentials from JSON file
  const { username, password } = testData.standard_user;

  // Initialize page objects
  const loginPage = new LoginPageXPath(page);
  const inventoryPage = new InventoryPage(page);

  // Navigate to login page
  await loginPage.goto();

  // Perform login
  await loginPage.login(username, password);

  // Wait for navigation and verify successful login
  await page.waitForURL('**/inventory.html');

  // Verify we are on the products page
  await expect(inventoryPage.pageTitle).toBeVisible();
  expect(await inventoryPage.verifyPageTitle()).toBe(true);
});
