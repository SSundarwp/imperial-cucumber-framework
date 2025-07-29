const { expect } = require('@playwright/test');
const { marketingPage: l } = require('../locators/locators');

class MarketingPage {
  constructor(page) {
    this.page = page;

    this.radioAttendOutreachbeforeYes = this.page.locator(l.mp_radioAttendOutreachbeforeYes);
    this.radioAttendOutreachbeforeNo = this.page.locator(l.mp_radioAttendOutreachbeforeNo);
    this.inputAttendedOutreachbeforemoredetail = this.page.locator(l.mp_inputAttendedOutreachbeforemoredetail);
    this.radioNewsLetterSignupYes = this.page.locator(l.mp_radioNewsLetterSignupYes);
    this.radioNewsLetterSignupNo = this.page.locator(l.mp_radioNewsLetterSignupNo);
    this.nextButton = this.page.locator(l.mp_nextButton);
  }

  async clickNextButton() {
    await this.nextButton.click();
    console.log("✅ Successfully added Marketing Details");
  }
}

module.exports = { MarketingPage };
