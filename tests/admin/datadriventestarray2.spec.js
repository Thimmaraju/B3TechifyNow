
import { test, expect } from '@playwright/test';

const jobtitles = ["SDET012", "SDET022", "SDET032"]

for (let element of jobtitles) {



    test(`Verify admin User can add Job Title - ${element}`, async ({ page }) => {
        await page.goto("/web/index.php/auth/login");
        console.log("Launched URL");
        await page.locator("input[name='username']").fill(process.env.APP_USERNAME);
        console.log("Username Entered");
        await page.locator("//input[@type='password']").fill(process.env.APP_PASSWORD);
        console.log("Password Entered");
        await page.locator("//button[@type='submit']").click({ timeout: 60000 });
        console.log("Click on Login Button");
        await page.locator("//span[text()='Admin']").click();
        await page.locator("//span[normalize-space(text())='Job']").click();
        await page.locator("//a[normalize-space(text())='Job Titles']").click();
        await page.locator('button.oxd-button.oxd-button--medium.oxd-button--secondary').click();
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(element);
        await page.locator(`//textarea[@placeholder='Type description here']`).fill("jobtitledata.jobDescription");
        await page.locator("//textarea[@placeholder='Add note']").fill("jobtitledata.jobnotes");
        await page.locator("//button[@type='submit']").click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
    });
};

