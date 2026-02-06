const { test, expect } = require('@playwright/test');

test.describe('Flipkart - Dell Laptop Purchase Flow', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('should search for Dell laptops and add first product to cart', async () => {
    // Step 1: Navigate to Flipkart homepage
    await page.goto('https://www.flipkart.com/');
    await page.waitForLoadState('networkidle');
    
    // Verify homepage loaded
    const flipkartLogo = page.locator('a[href="/"]').first();
    await expect(flipkartLogo).toBeVisible();

    // Step 2: Search for DELL LAPTOPS
    const searchBox = page.locator('input[placeholder="Search for products, brands and more"]');
    await searchBox.click();
    await searchBox.fill('DELL LAPTOPS');
    await searchBox.press('Enter');
    
    // Wait for search results to load
    await page.waitForLoadState('networkidle');
    
    // Verify search results page
    const searchTitle = page.locator('text=DELL LAPTOPS');
    await expect(searchTitle).toBeVisible({ timeout: 5000 });

    // Step 3: Click on first product (DELL 15 Intel Core i3 13th Gen)
    const firstProduct = page.locator('a').filter({ 
      hasText: /DELL 15 Intel Core i3 13th Gen 1305U.*3530 Thin and Light Laptop/ 
    }).first();
    
    await expect(firstProduct).toBeVisible();
    await firstProduct.click();
    
    // Wait for product page to load
    await page.waitForLoadState('networkidle');
    
    // Verify product details page loaded
    const productTitle = page.locator('heading', { hasText: /DELL 15 Intel Core i3/ }).first();
    await expect(productTitle).toBeVisible({ timeout: 5000 });
    
    // Verify product price is displayed
    const price = page.locator('text=₹40,990').first();
    await expect(price).toBeVisible();

    // Step 4: Add to Cart
    const addToCartButton = page.locator('button', { hasText: 'Add to cart' }).first();
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
    
    // Wait for cart page to load
    await page.waitForLoadState('networkidle');
    
    // Verify product added to cart
    const cartTitle = page.locator('text=Shopping Cart');
    await expect(cartTitle).toBeVisible({ timeout: 5000 });
    
    // Verify cart contains the product
    const cartProductName = page.locator('text=DELL 15 Intel Core i3 13th Gen');
    await expect(cartProductName).toBeVisible();
    
    // Verify cart price details
    const cartPrice = page.locator('text=₹40,990');
    await expect(cartPrice).toBeVisible();
    
    // Verify quantity is 1
    const quantityInput = page.locator('input[value="1"]');
    await expect(quantityInput).toBeVisible();
    
    // Verify total amount is displayed
    const totalAmount = page.locator('text=Total Amount');
    await expect(totalAmount).toBeVisible();
    
    console.log('✅ Successfully navigated through Flipkart and added Dell laptop to cart');
  });

  test('should verify cart order summary', async () => {
    // Navigate to Flipkart and add product to cart
    await page.goto('https://www.flipkart.com/');
    await page.waitForLoadState('networkidle');
    
    const searchBox = page.locator('input[placeholder="Search for products, brands and more"]');
    await searchBox.click();
    await searchBox.fill('DELL LAPTOPS');
    await searchBox.press('Enter');
    await page.waitForLoadState('networkidle');
    
    const firstProduct = page.locator('a').filter({ 
      hasText: /DELL 15 Intel Core i3 13th Gen 1305U.*3530 Thin and Light Laptop/ 
    }).first();
    await firstProduct.click();
    await page.waitForLoadState('networkidle');
    
    const addToCartButton = page.locator('button', { hasText: 'Add to cart' }).first();
    await addToCartButton.click();
    await page.waitForLoadState('networkidle');
    
    // Verify cart details
    const cartPage = page.url();
    expect(cartPage).toContain('viewcart');
    
    // Verify all cart elements
    const productInCart = page.locator('text=DELL 15 Intel Core i3 13th Gen');
    await expect(productInCart).toBeVisible();
    
    const originalPrice = page.locator('text=₹54,479');
    const discountedPrice = page.locator('text=₹40,990');
    const discountText = page.locator('text=24% Off');
    
    await expect(originalPrice).toBeVisible();
    await expect(discountedPrice).toBeVisible();
    await expect(discountText).toBeVisible();
    
    // Verify delivery information
    const deliveryInfo = page.locator('text=Delivery by Wed Feb 4');
    await expect(deliveryInfo).toBeVisible();
    
    // Verify place order button is visible
    const placeOrderButton = page.locator('button', { hasText: 'Place Order' });
    await expect(placeOrderButton).toBeVisible();
    
    console.log('✅ Cart order summary verification passed');
  });
});
