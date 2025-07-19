const { expect } = require('@playwright/test');

class SignupOrSignInPage {
  constructor(page) {
    this.page = page;
    this.signupOrSignInPageTitle = 'My Imperial My Imperial';
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.locator('#next');
    this.hamburgerButton = page.locator('a.sidebar-toggle[aria-label="Menu"]');
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
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

module.exports =  SignupOrSignInPage ;
