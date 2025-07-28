const { expect } = require('@playwright/test');
const { guardianDetailsPage: l } = require('../locators/locators');

class GuardianDetailsPage {
  constructor(page) {
    this.page = page;

    this.nextButton = this.page.locator(l.gdp_nextButton);

    this.addGuardianDetailsButton = this.page.getByRole(
      l.gdp_addGuardianDetailsButton.role,
      { name: l.gdp_addGuardianDetailsButton.name }
    );

    this.frameLocator = this.page.frameLocator(l.gdp_iframeSelector);

    this.guardianTitleSearchButton = this.frameLocator.getByRole(
      l.gdp_guardianTitleLaunchLookupButton.role,
      { name: l.gdp_guardianTitleLaunchLookupButton.name }
    );

    this.checkboxMrRow = this.frameLocator.getByRole(
      l.gdp_checkboxMrRow.role,
      { name: l.gdp_checkboxMrRow.name, exact: l.gdp_checkboxMrRow.exact }
    );

    this.inputFirstName = this.frameLocator.getByRole(
      l.gdp_firstInitialInput.role,
      { name: l.gdp_firstInitialInput.name }
    );

    this.inputLastName = this.frameLocator.getByRole(
      l.gdp_lastNameInput.role,
      { name: l.gdp_lastNameInput.name }
    );

    this.inputWorkEmailAddress = this.frameLocator.getByRole(
      l.gdp_workEmailAddressInput.role,
      { name: l.gdp_workEmailAddressInput.name }
    );

    // this.inputPhoneNumber = this.frameLocator.getByRole(
    //   l.gdp_phoneNumberInput.role,
    //   { name: l.gdp_phoneNumberInput.name }
    // );

    this.sameAddressRadio = this.frameLocator.getByRole(
      l.gdp_guardianSameAddressButton.role,
      { name: l.gdp_guardianSameAddressButton.name }
    );

    this.selectButton = this.frameLocator.getByRole(
      l.gdp_selectButton.role,
      { name: l.gdp_selectButton.name }
    );

    this.createAddGuardianDetailsButton = this.frameLocator.getByRole(
      l.gdp_addGuardianDetailsButtonInsideIframe.role,
      { name: l.gdp_addGuardianDetailsButtonInsideIframe.name }
    );
  }

  async clickAddGuardianDetailsButton() {
    await this.addGuardianDetailsButton.click();
    console.log('✅ Clicked Add Guardian Details button');
  }

  async selectGuardianTitle(title) {
    await this.guardianTitleSearchButton.click();
    await this.checkboxMrRow.click(); // Assumes "Mr" — update logic for dynamic selection if needed
    await this.selectButton.click();
    console.log(`✅ Selected guardian title: "${title}"`);
  }

  async fillGuardianDetails(data) {
    if (!data || !data.FirstName || !data.LastName || !data.WorkEmailAddress) {
      throw new Error(`❌ Missing required guardian detail(s): ${JSON.stringify(data)}`);
    }

    await this.inputFirstName.fill(data.FirstName);
    await this.inputLastName.fill(data.LastName);
    await this.inputWorkEmailAddress.fill(data.WorkEmailAddress);

  //   if (data.PhoneNumber) {
  //     await this.inputPhoneNumber.fill(data.PhoneNumber);
  //   }

  //   if (data.SameAddress?.toLowerCase() === 'yes') {
  //     await this.sameAddressRadio.check();
  //   }
  //   console.log(`✅ Filled guardian details for: ${data.FirstName} ${data.LastName}`);
  }

  async clickCreateAddGuardianDetailsButton() {
    await this.createAddGuardianDetailsButton.click();
    console.log('✅ Submitted guardian details');
  }

  async clickNextButton() {
    await this.nextButton.click();
    console.log('✅ Clicked Next button');
  }
}

module.exports = { GuardianDetailsPage };
