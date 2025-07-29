const { expect } = require('@playwright/test');
const { myOutReachApplicationPage: l } = require('../locators/locators');

class MyOutReachApplicationPage {
  constructor(page) {
    this.page = page;
    this.message = this.page.locator(l.mop_confirmationMessage);
    this.myOutreachLink = this.page.locator(l.mop_myOutreachLink);
    this.applicationNumber = this.page.locator(l.mop_applicationNumber);
  }

  async clickMyOutreachLink() {
    await expect(this.myOutreachLink).toBeVisible();
    await this.myOutreachLink.click();
    console.log('✅ Clicked on My Outreach Application link');
  }

  async verifySubmission() {
    await expect(this.message).toHaveText(
      'Thank you for Submitting your application! Your Teacher and Parent/Guardian will now be contacted in order to verify their details'
    );
    console.log('✅ Application submitted successfully');
  }

  async getLastApplicationNumber() {
    const text = await this.applicationNumber.last().textContent();
    const match = text.match(/Application Number:\s*(APP\d+)/);
    if (!match) throw new Error('Application Number not found on page');
    return match[1];
  }
}

module.exports = { MyOutReachApplicationPage };
