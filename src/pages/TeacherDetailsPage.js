const { expect } = require('@playwright/test');
const { teacherDetailsPage: l } = require('../locators/locators');
const teacherDetailsData = require('../fixtures/outreach/teacherDetails.json');

class TeacherDetailsPage {
  constructor(page) {
    this.page = page;

    this.nextButton = this.page.locator(l.tdp_nextButton);
    this.addTeacherDetailsButton = this.page.getByRole(
      l.tdp_addTeacherDetailsButton.role,
      { name: l.tdp_addTeacherDetailsButton.name }
    );

    this.frameLocator = this.page.frameLocator(l.tdp_iframeSelector);

    this.teacherTitleSearchButton = this.frameLocator.getByRole(
      l.tdp_teacherTitleLaunchLookupButton.role,
      { name: l.tdp_teacherTitleLaunchLookupButton.name }
    );
    this.checkboxMrRow = this.frameLocator.getByRole(l.tdp_checkboxMrRow.role,
      { name: l.tdp_checkboxMrRow.name, exact: l.tdp_checkboxMrRow.exact }
    );
    this.inputFirstName = this.frameLocator.getByRole(
      l.tdp_firstNameInput.role,
      { name: l.tdp_firstNameInput.name }
    );
    this.inputLastName = this.frameLocator.getByRole(
      l.tdp_lastNameInput.role,
      { name: l.tdp_lastNameInput.name }
    );
    this.workEmailAddressInput = this.frameLocator.getByRole(
      l.tdp_workEmailAddressInput.role,
      { name: l.tdp_workEmailAddressInput.name }
    );
    this.selectButton = this.frameLocator.getByRole(
      l.tdp_selectButton.role,
      { name: l.tdp_selectButton.name }
    );
    this.createAddTeacherDetailsButton = this.frameLocator.getByRole(
      l.tdp_addTeacherDetailsButtonInsideIframe.role,
      { name: l.tdp_addTeacherDetailsButtonInsideIframe.name }
    );
  }

  async clickAddTeacherDetailsButton() {
    await this.addTeacherDetailsButton.click();
    console.log('✅ Clicked Add Teacher Details button');
  }

  async selectTeacherTitle(title) {
    await this.teacherTitleSearchButton.click();
    await this.checkboxMrRow.click(); // This assumes title is always Mr for now
    await this.selectButton.click();
    console.log(`✅ Selected teacher title: "${title}"`);
  }

  async fillTeacherDetails(data) {
    await this.inputFirstName.fill(data.FirstName);
    await this.inputLastName.fill(data.LastName);
    await this.workEmailAddressInput.fill(data.Email);
    console.log(`✅ Filled name and email: ${data.FirstName} ${data.LastName}, ${data.Email}`);
  }

  async clickCreateAddTeacherDetailsButton() {
    await this.createAddTeacherDetailsButton.click();
    console.log('✅ Submitted teacher details');
  }

  async clickNextButton() {
    await this.nextButton.click();
    console.log('✅ Clicked Next button');
  }
}

module.exports = { TeacherDetailsPage };
