const { Given, When, And, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { PersonalDetailsPage } = require('../pages/PersonalDetailsPage');

Before(function () {
  if (!this.personalDetailsPage) {
    this.personalDetailsPage = new PersonalDetailsPage(this.page);
  }
});

Then('the page title should be {string}', async function (expectedTitle) {
  await expect(this.page).toHaveTitle(expectedTitle);
  console.log(`✅ Page title validated: "${expectedTitle}"`);
});

Then('the form title should be {string}', async function (expectedFormTitle) {
  const formTitleLocator = this.page
    .getByLabel('Basic Form')
    .locator('h2');
  await expect(formTitleLocator).toContainText(expectedFormTitle);
  console.log(`✅ Form title validated: "${expectedFormTitle}"`);
});

Then('the applicant provides personal details', async function () {
  await this.personalDetailsPage.clickNextButton();
  await this.page.waitForLoadState('networkidle');
});