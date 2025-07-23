const { expect } = require('@playwright/test');
const { myOutReachApplicationNewPage: l } = require('../locators/locators');
const programmeSelectionData = require('../fixtures/outreach/programmesListData.json');

class MyOutReachApplicationNewPage {
  constructor(page) {
    this.page = page;

    this.startANewApplicationButton = page.getByRole(l.moanp_startANewApplicationButton.role, { name: l.moanp_startANewApplicationButton.name });
    this.unRegulatedProgrammeSearchButton = page.locator(l.moanp_unRegulatedProgrammeSearchButton);
    this.unRegulatedProgrammeAvailabilitySearchButton = page.locator(l.moanp_unRegulatedProgrammeAvailabilitySearchButton);
    this.selectButton = page.getByRole(l.moanp_selectButton.role, { name: l.moanp_selectButton.name });
    this.submitButton = page.getByRole(l.moanp_submitButton.role, { name: l.moanp_submitButton.name });
  }

  async clickStartANewApplication() {
    await expect(this.startANewApplicationButton).toBeVisible();
    await this.startANewApplicationButton.click();
    console.log('✅ Clicked Start a New Application button');
  }

  async selectUnregulatedProgramme() {
    await expect(this.unRegulatedProgrammeSearchButton).toBeVisible();
    await this.unRegulatedProgrammeSearchButton.click();

    const programmeName = programmeSelectionData.programmeSelectionData[0].unregulatedProgramme[0];
    const programmeCell = this.page.getByRole('cell', { name: programmeName, exact: true });
    await expect(programmeCell).toBeVisible();
    await programmeCell.click();

    await expect(this.selectButton).toBeVisible();
    await this.selectButton.click();

    console.log(`✅ Selected Unregulated Programme: "${programmeName}"`);
  }

  async selectUnregulatedProgrammeAvailability() {
    await expect(this.unRegulatedProgrammeAvailabilitySearchButton).toBeVisible();
    await this.unRegulatedProgrammeAvailabilitySearchButton.click();

    const availabilityName = programmeSelectionData.programmeSelectionData[0].unregulatedProgrammeAvailability[0];
    const availabilityCell = this.page.getByRole('cell', { name: availabilityName, exact: true });
    await expect(availabilityCell).toBeVisible();
    await availabilityCell.click();

    await expect(this.selectButton).toBeVisible();
    await this.selectButton.click();

    console.log(`✅ Selected Programme Availability: "${availabilityName}"`);
  }

  async submitProgrammeSelection() {
    await expect(this.submitButton).toBeVisible();
    await this.submitButton.click();
    console.log('✅ Submitted the GSS Application');
  }
}

module.exports = MyOutReachApplicationNewPage;
