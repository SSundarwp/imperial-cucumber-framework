class HomePage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login');
  }
  async clickLogin() {
    await this.loginButton.click();
  }
}
module.exports = HomePage;
