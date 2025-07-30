const { expect } = require('@playwright/test');
const { userDetailsPage: l } = require('../locators/locators');

class UserDetailsPage {
  constructor(page) {
    this.page = page;

    // Locators from the userDetailsPage section in locators.js
    this.emailInput = this.page.locator(l.udp_emailInput);
    this.sendVerificationCodeButton = this.page.locator(l.udp_sendVerificationCodeButton);
    this.verificationCodeInput = this.page.locator(l.udp_verificationCodeInput);
    this.verifyCodeButton = this.page.locator(l.udp_verifyCodeButton);
    this.newPasswordInput = this.page.locator(l.udp_newPasswordInput);
    this.reenterPasswordInput = this.page.locator(l.udp_reenterPasswordInput);
    this.displayNameInput = this.page.locator(l.udp_displayNameInput);
    this.givenNameInput = this.page.locator(l.udp_givenNameInput);
    this.applicationTypeSelect = this.page.locator(l.udp_outreachApplicationTypeSelect);
    this.surnameInput = this.page.locator(l.udp_surnameInput);
    this.createButton = this.page.locator(l.udp_createButton);
  }

  // Fill in email field
  async fillEmail(email) {
    await this.emailInput.fill(email);
    console.log(`✅ Filled email: ${email}`);
  }

  // Click the "Send Verification Code" button
  async clickSendVerificationCode() {
    await this.sendVerificationCodeButton.click();
    console.log('✅ Clicked Send Verification Code button');
  }

  async fillVerificationCode(code) {
    await this.verificationCodeInput.waitFor({ state: 'visible' });
    await this.verificationCodeInput.fill(code);
    const value = await this.verificationCodeInput.inputValue();
    if (!value || value.trim() === '') {
      throw new Error('Verification code input is empty after filling');
    }
  }

  // Click the "Verify Code" button
  async clickVerifyCode() {
    await this.verifyCodeButton.click();
    console.log('✅ Clicked Send Verification Code button');
  }

  // Fill in password and re-enter it
  async fillPassword(password) {
    await this.newPasswordInput.fill(password);
    await this.reenterPasswordInput.fill(password);
    console.log('✅ Filled password and re-enter password');
  }

  // Fill in name-related fields
  async fillName(givenName, surname, displayName) {
    await this.givenNameInput.fill(givenName);
    await this.surnameInput.fill(surname);
    await this.displayNameInput.fill(displayName);
    console.log(`✅ Filled names: ${givenName} ${surname}, display name: ${displayName}`);
  }

  // Select outreach application type
  async selectApplicationType(type) {
    await this.applicationTypeSelect.selectOption({ label: type });
    console.log(`✅ Selected application type: ${type}`);
  }

  // Click the Create button
  async clickCreate() {
    await this.createButton.click();
    console.log('✅ Clicked Create button');
  }
}

module.exports = { UserDetailsPage };
