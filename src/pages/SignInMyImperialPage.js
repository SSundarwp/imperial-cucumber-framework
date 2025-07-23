const { expect } = require('@playwright/test');
const { signInMyImperialPage: l } = require('../locators/locators');

class SignInMyImperialPage {
  constructor(page) {
    this.page = page;

    this.gssTab = page.locator(l.simip_gssTab);
    this.gssLoginButton = page.getByRole('button', { name: l.simip_gssLoginButton.name });
    this.gssRegisterButton = page.getByRole('button', { name: l.simip_gssRegisterButton.name });

    this.outReachTab = page.locator(l.simip_outreachTab);
    this.outReachLoginButton = page.getByRole('button', { name: l.simip_outreachLoginButton.name });
    this.outReachRegisterButton = page.getByRole('button', { name: l.simip_outreachRegisterButton.name });
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

  async clickGSSLoginButton() {
    await this.gssLoginButton.click();
    console.log('🔐 Clicked GSS Login button');
  }

  async clickGSSRegisterButton() {
    await this.gssRegisterButton.click();
    console.log('🔐 Clicked GSS Sign in or Register button');
  }

  async clickOutReachLoginButton() {
    await this.outReachLoginButton.click();
    console.log('🔐 Clicked OutReach Login button');
  }

  async clickOutReachRegisterButton() {
    await this.outReachRegisterButton.click();
    console.log('🔐 Clicked OutReach Register button');
  }
}

module.exports = SignInMyImperialPage;
