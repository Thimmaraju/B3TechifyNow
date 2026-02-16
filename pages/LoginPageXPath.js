class LoginPageXPath {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[@id='user-name']");
    this.passwordField = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//input[@id='login-button']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username) {
    await this.usernameField.fill(username);
  }

  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}

module.exports = LoginPageXPath;
