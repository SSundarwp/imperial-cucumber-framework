const { Given, When, Then, Before } = require('@cucumber/cucumber');
const MyImperialPage = require('../pages/MyImperialPage');

Before(function () {
  if (!this.myImperialPage) {
    this.myImperialPage = new MyImperialPage(this.page);
  }
});

Given('the user is on the My Imperial dashboard', async function () {
  // No need to initialize again here if done in Before hook
});

Then('the user should be greeted with the welcome message {string}', async function (expectedWelcomeMessage) {
  await this.myImperialPage.expectWelcomeTitle(expectedWelcomeMessage);
});

When('the applicant navigates to the Home dashboard', async function () {
  await this.myImperialPage.clickHomeTab();
});

When('the applicant navigates to the Admin dashboard', async function () {
  await this.myImperialPage.clickAdminTab();
});

When('the applicant navigates to the Admissions dashboard', async function () {
  await this.myImperialPage.clickAdmissionTab();
});

// Then('the page title for Outreach Application should be {string}', async function (expectedTitle) {
//   await this.myImperialPage.validatePageTitle(expectedTitle);
// });

When('initiates the Outreach Application process', async function () {
  await this.myImperialPage.clickTilebyTitle('Outreach Applications', 1);
})
