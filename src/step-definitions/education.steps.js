const { Given, When, And, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { EducationPage } = require('../pages/EducationPage');

Before(function () {
  if (!this.educationPage) {
    this.educationPage = new EducationPage(this.page);
  }
});

Then('the applicant enters education qualification {string}', async function(qualification) {
  this.educationPage = new EducationPage(this.page);
  await this.educationPage.clickNextButton();
  await this.page.waitForLoadState('networkidle');
});