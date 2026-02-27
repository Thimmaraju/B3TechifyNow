import { test, expect } from '@playwright/test';



test('Verify Login with Valid Credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const usernametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()

    console.log(usernametext)

    const username = usernametext.split(" ")[2] //"Admin"

    const passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

    console.log(passwordtext)

    const password = passwordtext.split(" ")[2] // "admin123"

    await page.locator("input[name='username']").fill(username) //30 sec
    await page.locator("//input[@type='password']").fill(password)

    await page.keyboard.press('Enter')

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();


})