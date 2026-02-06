import { test, expect } from '@playwright/test';

import data from "../testdata/demoqa.json"


  test('Verify TextBox ', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')
    await page.locator('#userName').fill(data[1].fullname)
    await page.locator('#userEmail').fill(data[1].emailaddress)
    await page.locator('#currentAddress').fill(data[2])
    await page.locator('#permanentAddress').fill(data[1].permanenetAddress)

  })