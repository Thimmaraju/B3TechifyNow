import { test, expect } from '@playwright/test';


test('Click on Gallery if visible ', async ({ page }) => {

    switch (process.env.ENVIRONMENT) {
        case "dev": {

           await page.goto('https://.dev.xyz.com')
        }

            break;

        case "qa":

            await page.goto('https://.qa.xyz.com')
            break;

        case "staging":

            await page.goto('https://.staging.xyz.com')
            break;

        case "uat":

            await page.goto('https://.uat.xyz.com')
            break;
        default:

            console.log('No Enviroment Matching')
            break;
    }


})