import { test, expect } from '@playwright/test';

const ExcelJS = require('exceljs');

test(`Verify admin User can add Job Title`, async  ({ page }) => {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('testdata/jobtitle.xlsx');

    const sheet = workbook.getWorksheet(1); // Sheet1

    const excelData = {};
    sheet.eachRow((row) => {
        const key = row.getCell(1).text;
        const value = row.getCell(2).text;

        if (key) {
            excelData[key] = value;
        }
    });

    console.log(excelData);

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


    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(excelData.jobtitle);
    await page.locator(`//textarea[@placeholder='Type description here']`).fill(excelData.jobdescription);
    await page.locator("//textarea[@placeholder='Add note']").fill("kjewnfjbew");
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
});