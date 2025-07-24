const { expect } = require('@playwright/test');
const { personalDetailsPage: l } = require('../locators/locators');

class PersonalDetailsPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.locator(l.p)
    this.nextButton = this.page.locator(l.pdp_nextButton);
  }

  async clickNextButton() {
    await this.nextButton.click();
    console.log('✅ Successfully updated personal details');
  }
}

module.exports = { PersonalDetailsPage };
