const { expect } = require('@playwright/test');

class SignInMyImperialPage {
  constructor(page) {
    this.page = page;
    this.gssTab = this.page.locator('#studentTab');
    this.gsssignInOrRegisterButton = page.getByRole('button', { name: 'GSS Sign in or Register' });
    this.outReachTab = page.locator('#applicantTab');
    this.outReachsignInOrRegisterButton = page.getByRole('button', { name: 'Outreach Sign in or Register' });
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
    console.log(`📍 Navigated to ${baseUrl}`);
  }

  async assertPageTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
    console.log(`✅ Verified page title: "${expectedTitle}"`);
  }

  async clickGssTab() {
    await this.gssTab.click();
    console.log('📘 Clicked GSS tab');
  }

  async clickOutReachTab() {
    await this.outReachTab.click();
    console.log('🎓 Clicked OutReach tab');
  }

  async clickGSSSignInOrRegisterButton() {
    await this.gsssignInOrRegisterButton.click();
    console.log('🔐 Clicked GSS Sign in or Register button');
  }

  async clickOutReachSignInOrRegisterButton() {
    await this.outReachsignInOrRegisterButton.click();
    console.log('🔐 Clicked OutReach Sign in or Register button');
  }
}

module.exports = SignInMyImperialPage;
