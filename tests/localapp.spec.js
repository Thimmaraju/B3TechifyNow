import { test, expect } from '@playwright/test';

test.describe("Login functionality", () => {


  test('Verify Login with Valid Credentials', async ({ page }) => {

    await page.goto('http://localhost:3000/')
  })

  // test('Verify Login with Valid Credentials', async ({ page }) => {

  //   await page.goto('http://localhost:3000/')
  // })

})


for(let i=1 ; i<=10 ; i--){
 
    test(`Verify Login with Valid Credentials - ${i}`, async ({ page }) => {
    await page.goto('/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole("button", { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  });

}




//Accebility testing 

//ARIA standards 