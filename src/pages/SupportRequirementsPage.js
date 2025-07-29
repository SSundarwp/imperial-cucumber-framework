const { expect } = require('@playwright/test');
const { supportRequirementsPage: l } = require('../locators/locators');

class SupportRequirementsPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = l.srp_pageTitle;
    this.formTitle = l.srp_formTitle;

    this.addSupportRequirementsButton = this.page.getByRole(
      l.srp_addSupportRequirementsButton.role,
      { name: l.srp_addSupportRequirementsButton.name }
    );

    this.frameLocator = this.page.frameLocator(l.srp_iframeSelector);

    this.radioYes = this.frameLocator.locator(l.srp_specialEducationNeedsYes);
    this.radioNo = this.frameLocator.locator(l.srp_specialEducationNeedsNo);
    this.submitButton = this.frameLocator.locator(l.srp_submitButton);

    // Other locators
    this.nextButton = this.page.locator(l.srp_nextButton);
  }

  async clickAddSupportRequirementsButton() {
    await this.addSupportRequirementsButton.click();
    console.log('✅ Clicked "Add your support requirements" button');
  }

  async selectSpecialEducationNeeds(option) {
    if (option === 'Yes') {
      await this.radioYes.check();
    } else {
      await this.radioNo.check();
    }
    console.log(`✅ Selected special education needs: ${option}`);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
    console.log('✅ Clicked Submit button');
  }

  async clickNextButton() {
    await this.nextButton.click();
    console.log('✅ Clicked Next button on Support Requirements page');
  }
}

module.exports = { SupportRequirementsPage };
