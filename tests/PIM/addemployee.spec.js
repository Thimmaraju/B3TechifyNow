import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Verify admin User can add Employee', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    console.log("Lauched URL ")

    await expect(page.locator("img[alt='company-branding']")).toBeVisible()
    console.log("Logo Visible")

    await page.locator("input[name='username']").fill(process.env.APP_USERNAME) //30 sec
    console.log("Username Entered ")
    await page.locator("//input[@type='password']").fill(process.env.APP_PASSWORD)
    console.log("Password Entered ")
    await page.locator("//button[@type='submit']").click({ timeout: 60000 })
    console.log("click on Login Button ")

    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()
    console.log("Cliked on PIM")
    await page.locator("//a[normalize-space(text())='Add Employee']").click()
    await page.locator("input[name='firstName']").fill(faker.person.firstName())
    await page.locator("input[name='lastName']").fill(faker.person.lastName())
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(faker.string.alpha(5))
    await page.locator("button[type='submit']").click()

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({ timeout: 60000 })

});