import { test, expect } from '@playwright/test';


let credentials = {

  username: "Admin",
  password: "admin123",
  wrongusername: "fbfnvb"
}

test.describe("Verify Login functionality", () => {

  test.beforeEach( async ({page}) =>{
    await page.goto('/web/index.php/auth/login');

  })


  test.only('Verify Login with Valid Credentials', async ({ page }) => {

     test.slow()
    //2 se
    console.log("Lauched URL ")
    await page.locator("input[name='usernamefbgv']").fill(credentials.username) //30 sec
    console.log("Username Entered ")
    await page.locator("//input[@type='password']").fill(credentials['password'])
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    credentials['wrongpassword'] = "kjerngkjunwr"

    delete credentials.wrongusername
  });


  test('Verify login with invalid Username and Valid Password', async ({ page }) => {
   
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(credentials.wrongusername);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });


  test('Verify login with valid Username and invalid Password', async ({ page }) => {
   
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('fkbnkjdfnb');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });



  test('Verify login with invalid Username and invalid Password', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('vbkjf');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('fkbnkjdfnb');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

})




