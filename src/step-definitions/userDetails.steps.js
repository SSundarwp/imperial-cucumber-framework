const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const GuerillaMailHelper = require('../utils/mailHelper');
const { UserDetailsPage } = require('../pages/UserDetailsPage');


let guerillaMail;
let userDetailsPage;

When('the user enters a valid email address', async function () {
  guerillaMail = new GuerillaMailHelper();
  const email = await guerillaMail.initEmail();
  this.generatedEmail = email;

  userDetailsPage = new UserDetailsPage(this.page);
  await userDetailsPage.fillEmail(email);
  this.attach(`Email Address: ${email}`);

  console.log(`🆕 Using generated email: ${email}`);
});

When('the user requests an email verification code', async function () {
  await userDetailsPage.clickSendVerificationCode();
  console.log('✅ Requested verification code');
});

Then('a verification code should be sent to the generated email', async function () {
  this.verificationCode = await guerillaMail.fetchVerificationCode();
  console.log(`✅ Retrieved verification code: ${this.verificationCode}`);
});

Then('the password fields should be disabled before verification', async function () {
  const isNewPasswordEnabled = await userDetailsPage.newPasswordInput.isEnabled();
  const isReenterPasswordEnabled = await userDetailsPage.reenterPasswordInput.isEnabled();

  if (isNewPasswordEnabled || isReenterPasswordEnabled) {
    throw new Error('❌ Password fields are enabled BEFORE verification — expected to be disabled.');
  }

  console.log('✅ Password fields are disabled BEFORE verification as expected.');
});

When('the user enters the correct verification code', async function () {
  await userDetailsPage.fillVerificationCode(this.verificationCode);
  console.log(`✅ Entered verification code: ${this.verificationCode}`);
});

Then('user requests to validate the verification code', async function () {
  await userDetailsPage.clickVerifyCode();
});

Then('the password fields should be enabled after verification', async function () {
  await expect(userDetailsPage.newPasswordInput).toBeEnabled();
  await expect(userDetailsPage.reenterPasswordInput).toBeEnabled();
  console.log('✅ Password fields are enabled AFTER verification as expected.');
});

Then('the user should be prompted to create a secure password {string}', async function (password) {
  if (password === '*********') {
    password = process.env.REAL_PASSWORD;
    if (!password) throw new Error('REAL_PASSWORD not set in env');
  }

  await userDetailsPage.fillPassword(password);
  console.log('✅ Filled in the secure password');
});

When('provides the following personal details', async function (dataTable) {
  const data = dataTable.rowsHash();

  const displayName = data.DisplayName;
  const givenName = data.GivenName;
  const surname = data.Surname;
  const outreachType = data.OutreachApplicantType;

  await this.page.waitForLoadState('domcontentloaded');

  await userDetailsPage.fillName(givenName, surname, displayName);
  await userDetailsPage.selectApplicationType(outreachType);
});

Then('submits the registration form by clicking Create', async function () {
  await userDetailsPage.clickCreate();
  await this.page.waitForTimeout(10000);
})

