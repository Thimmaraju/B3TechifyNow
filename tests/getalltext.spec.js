import { test, expect } from '@playwright/test';

const creds = ["Admin", "admin123"]

test("Get all text of a elements", async ({page}) => {

      await page.goto('/web/index.php/auth/login');
      await page.locator("input[name='username']").fill(creds[0]) //30 sec
      await page.locator("//input[@type='password']").fill(creds[1])
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

      const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()

      console.log(menuitems)

      console.log(menuitems.length)

      expect(menuitems.length).toBe(12)

      expect(menuitems.includes("Buzz")).toBe(true)

 })
