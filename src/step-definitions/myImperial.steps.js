const { Given, When, Then, Before } = require('@cucumber/cucumber');
const MyImperialPage = require('../pages/MyImperialPage');
const { takeAndAttachScreenshot } = require('../utils/screenshotHelper');

Before(function () {
  if (!this.myImperialPage) {
    this.myImperialPage = new MyImperialPage(this.page);
  }
});

Then('the user should be greeted with the welcome message {string}', async function (expectedWelcomeMessage) {
  await this.page.waitForLoadState('networkidle');
  await this.myImperialPage.expectWelcomeTitle(expectedWelcomeMessage);

  await takeAndAttachScreenshot(this.page, this.attach, 'welcome_message');
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

When('initiates the Outreach Application process', async function () {
  await this.myImperialPage.clickTilebyTitle('Outreach Applications', 1);
})
