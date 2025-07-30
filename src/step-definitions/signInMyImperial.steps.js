const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignInMyImperialPage = require('../pages/SignInMyImperialPage');
const SignupOrSignInPage = require('../pages/SignupOrSignInPage');

function normalizeAppType(type) {
  return type.trim().toLowerCase();
}

Given('a {string} user accesses the {string} application portal', async function (applicantType, applicationType) {
  this.signInMyImperialPage = new SignInMyImperialPage(this.page);
  this.signupOrSignInPage = new SignupOrSignInPage(this.page);

  await this.signInMyImperialPage.goto(process.env.BASE_URL);

  const appType = normalizeAppType(applicationType);

  switch (appType) {
    case 'gss':
      await this.signInMyImperialPage.clickGssTab();
      await this.signInMyImperialPage.clickGSSLoginButton();
      break;
    case 'outreach':
      await this.signInMyImperialPage.clickOutReachTab();
      await this.signInMyImperialPage.clickOutReachLoginButton();
      break;
    default:
      throw new Error(`Unsupported application type: ${applicationType}`);
  }
});

When('selects the {string} option', async function (applicationType) {
  this.signInMyImperialPage = this.signInMyImperialPage || new SignInMyImperialPage(this.page);

  const appType = normalizeAppType(applicationType);

  // Navigate to correct tab before clicking register (in case page reloads)
  switch (appType) {
    case 'gss':
      await this.signInMyImperialPage.clickGssTab();
      await this.signInMyImperialPage.clickGSSRegisterButton();
      break;
    case 'outreach':
      await this.signInMyImperialPage.clickOutReachTab();
      await this.signInMyImperialPage.clickOutReachRegisterButton();
      break;
    default:
      throw new Error(`Unsupported registration option: ${applicationType}`);
  }

  // Prefer a specific wait instead of fixed timeout
  await this.page.waitForLoadState('networkidle');
});

When('the applicant provides login credentials with email {string} and password {string}', async function (email, password) {
  this.signupOrSignInPage = this.signupOrSignInPage || new SignupOrSignInPage(this.page);

  if (password === '********') {
    password = process.env.REAL_PASSWORD;
  }

  await this.signupOrSignInPage.enterEmail(email);
  await this.signupOrSignInPage.enterPassword(password);

  console.log(`Login attempt with email: ${email}`);
});

When('successfully signs into the {string} application portal', async function (applicationType) {
  this.signupOrSignInPage = this.signupOrSignInPage || new SignupOrSignInPage(this.page);

  await this.signupOrSignInPage.clickSignInButton();

  // Wait for page/network to settle after sign in
  await this.page.waitForLoadState('networkidle');
});

Then('application portal should display the page title as {string}', async function (expectedTitle) {
  const actualTitle = await this.page.title();
  expect(actualTitle).toContain(expectedTitle);
});
