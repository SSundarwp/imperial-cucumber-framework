const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const MyOutReachApplicationPage = require('../pages/MyOutReachApplicationPage');

Before(function () {
  if (!this.myOutReachApplicationPage) {
    this.myOutReachApplicationPage = new MyOutReachApplicationPage(this.page);
  }
});

When('extracts and stores the generated Application ID', async function () {
  // ✅ use this.page instead of page
  await this.page.waitForURL(url => url.searchParams.has('id'), { timeout: 360_000 });

  const currentUrl = new URL(this.page.url()); 
  const appId = currentUrl.searchParams.get('id');
  expect(appId).not.toBeNull();

  console.log(`☑️ Application ID from URL: ${appId}`);
  this.attach(`Application ID: ${appId}`);
  this.applicationId = appId;
});
