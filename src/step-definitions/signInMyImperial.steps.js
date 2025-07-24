// steps/signupSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignInMyImperialPage = require('../pages/SignInMyImperialPage');
const SignupOrSignInPage = require('../pages/SignupOrSignInPage');
// Add other page objects as needed for further steps

Given('The {string} applicant accesses the {string} application portal', async function (applicationType, applicantType) {
  this.signInMyImperialPage = new SignInMyImperialPage(this.page);
  this.signupOrSignInPage = new SignupOrSignInPage(this.page);
  await this.signInMyImperialPage.goto(process.env.BASE_URL);
  // Example: click relevant tab/button depending on applicationType
  if (applicationType === 'GSS') {
    await this.signInMyImperialPage.clickGssTab();
    await this.signInMyImperialPage.clickGSSLoginButton();
  }
  await this.signInMyImperialPage.clickOutReachTab();
  await this.signInMyImperialPage.clickOutReachLoginButton();
});

When('the applicant provides login credentials with email {string} and password {string}', async function (email, password) {
  if (password === '********') {
    password = process.env.REAL_PASSWORD;  // store your real password securely in env var
  }
  await this.signupOrSignInPage.enterEmail(email);
  await this.signupOrSignInPage.enterPassword(password);
  console.log('Email:', email);
  console.log('Password: ********');
});

When('successfully signs into the {string} application portal', async function (applicationType) {
  await this.signupOrSignInPage.clickSignInButton();
  await this.page.waitForLoadState('networkidle');
});

Then('application portal should display the page title as {string}', async function (expectedTitle) {
  const actualTitle = await this.page.title();
  expect(actualTitle).toContain(expectedTitle);
});
