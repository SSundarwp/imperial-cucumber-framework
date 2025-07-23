const { expect } = require('@playwright/test');

class MyOutReachApplicationPage {
  constructor(page) {
    this.page = page;
    this.myOutReachDetailsPageTitle = 'Outreach';
    this.myOutReachDetailsFormTitle = 'My Outreach Application';
    this.message = this.page.locator('#MessageLabel');
  }

  async getMyOutReachDetailsPageTitle() {
    await expect(this.page).toHaveTitle(this.myOutReachDetailsPageTitle);
    console.log(`✅ Page title validated: "${this.myOutReachDetailsPageTitle}"`);
  }

  async getMyOutReachDetailsFormTitle() {
    await expect(this.page.getByLabel('Basic Form').locator('h2')).toContainText(this.myOutReachDetailsFormTitle);
    console.log(`✅ Form title validated: "${this.myOutReachDetailsFormTitle}"`);
  }

  async verifySubmission() {
    await expect(this.message).toHaveText(
      'Thank you for Submitting your application! Your Teacher and Parent/Guardian will now be contacted in order to verify their details'
    );
    console.log('✅ Application submission verified');
  }
}

module.exports = MyOutReachApplicationPage;
