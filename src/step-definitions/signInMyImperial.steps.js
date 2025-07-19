// steps/signupSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignInMyImperialPage = require('../pages/SignInMyImperialPage');
const SignupOrSignInPage = require('../pages/SignupOrSignInPage');
// Add other page objects as needed for further steps

Given('The applicant accesses the {string} application portal', async function (applicationType) {
  this.signInMyImperialPage = new SignInMyImperialPage(this.page);
  this.signupOrSignInPage = new SignupOrSignInPage(this.page);
  await this.signInMyImperialPage.goto(process.env.BASE_URL);
  // Example: click relevant tab/button depending on applicationType
  if(applicationType === 'GSS'){
    await this.signInMyImperialPage.clickGssTab();
    await this.signInMyImperialPage.clickGSSSignInOrRegisterButton();
  }
});

When('the applicant provides login credentials with email {string} and password {string}', async function (email, password) {
  await this.signupOrSignInPage.enterEmail(email);
  await this.signupOrSignInPage.enterPassword(password);
});

When('successfully signs into the system', async function () {
  await this.signupOrSignInPage.clickSignInButton();
  await this.page.waitForLoadState('networkidle');
});

Then('the system should display the page title as {string}', async function (expectedTitle) {
  const actualTitle = await this.page.title();
  expect(actualTitle).toContain(expectedTitle);
});
