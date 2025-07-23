const { expect } = require('@playwright/test');
const { signupOrSignInPage: l } = require('../locators/locators');

class SignupOrSignInPage {
  constructor(page) {
    this.page = page;
    this.signupOrSignInPageTitle = l.soip_pageTitle;
    this.emailInput = page.locator(l.soip_emailInput);
    this.passwordInput = page.locator(l.soip_passwordInput);
    this.signInButton = page.locator(l.soip_signInButton);
    this.hamburgerButton = page.locator(l.soip_hamburgerButton);
    this.logoutLink = page.getByRole(l.soip_logoutLink.role, { name: l.soip_logoutLink.name });
  }

  async getSignupOrSignInPageTitle() {
    await expect(this.page).toHaveTitle(this.signupOrSignInPageTitle);
    console.log(`✅ Page title validated: "${this.signupOrSignInPageTitle}"`);
  }

  async enterEmail(email) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
    console.log(`📧 Email entered: ${email}`);
  }

  async enterPassword(password) {
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
    console.log(`🔒 Password entered (hidden)`);
  }

  async clickSignInButton() {
    await this.signInButton.click();
    console.log(`🔓 Clicked "Sign In" button`);
  }

  async clickLogout() {
    await this.hamburgerButton.click();
    await this.logoutLink.click();
    console.log(`🚪 Logged out`);
  }
}

module.exports = SignupOrSignInPage;
