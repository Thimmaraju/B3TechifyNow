import { test, expect } from '@playwright/test';


test('Click on Gallery if visible ', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

    const visibility = await page.locator('//a[@href="/gallery/"]').isVisible()

    console.log(visibility)

    if(await page.locator('//a[@href="/gallery/"]').isVisible()){

        console.log("Element visible")

        await page.locator('//a[@href="/gallery/"]').click()
    }
    else{

         await page.locator('//a[@href="/portfolio/"]').click()
    }


})