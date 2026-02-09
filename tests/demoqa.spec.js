import { test, expect } from '@playwright/test';

import qadata from "../testdata/qa.demoqa.json"

import preproddata from "../testdata/preprod.demoqa.json"


test('Verify TextBox ', async ({ page }) => {


 let data
  if (process.env.ENVIRONMENT == "QA") {

     data = qadata
  }
  else if (process.env.ENVIRONMENT == "PREPROD") {
     data = preproddata
  }

  await page.goto('https://demoqa.com/text-box')
  await page.locator('#userName').fill(data.fullname)
  await page.locator('#userEmail').fill(data.emailaddress)
  await page.locator('#currentAddress').fill(data.currentaddrss)
  await page.locator('#permanentAddress').fill(data.permanenetAddress)

})