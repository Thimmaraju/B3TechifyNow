class InventoryPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.getByText('Swag Labs');
    this.productsTitle = page.locator("//span[@class='title']");
  }

  async verifyPageTitle() {
    const title = await this.page.title();
    return title === 'Swag Labs';
  }

  async isPageDisplayed() {
    return await this.pageTitle.isVisible();
  }

  async verifyProductsLoaded() {
    return await this.productsTitle.isVisible();
  }
}

module.exports = InventoryPage;
