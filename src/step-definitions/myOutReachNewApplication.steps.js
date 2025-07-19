const { Given, When, Then, And, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const MyOutReachApplicationNewPage = require('../pages/MyOutReachNewApplicationPage');

Before(function () {
  if (!this.myOutReachApplicationNewPage) {
    this.myOutReachApplicationNewPage = new MyOutReachApplicationNewPage(this.page);
  }
});

Then('the page title for Outreach Application should be {string}', async function (expectedTitle) {
  await this.page.waitForLoadState('domcontentloaded');
  await expect(this.page).toHaveTitle(expectedTitle);
  console.log(`✅ Page title validated: "${expectedTitle}"`);
});

When('the applicant starts a new application', async function () {
  await this.myOutReachApplicationNewPage.clickStartANewApplication();
});

When('selects an Unregulated Programme and its availability', async function () {
  await this.myOutReachApplicationNewPage.selectUnregulatedProgramme();
  await this.myOutReachApplicationNewPage.selectUnregulatedProgrammeAvailability();
});

When('submits the Programme Selection', async function () {
  await this.myOutReachApplicationNewPage.submitProgrammeSelection();
  await this.page.waitForLoadState('networkidle');
  await this.page.waitForTimeout(5000);
});
