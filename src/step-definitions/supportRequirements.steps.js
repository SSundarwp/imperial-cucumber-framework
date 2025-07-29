const { Then, And } = require('@cucumber/cucumber');
const { SupportRequirementsPage } = require('../pages/SupportRequirementsPage');

Then('the applicant provides Support Requirement details', async function (dataTable) {
    const data = dataTable.rowsHash();
    const supportRequirementsPage = new SupportRequirementsPage(this.page);

    await supportRequirementsPage.clickAddSupportRequirementsButton();
    await supportRequirementsPage.selectSpecialEducationNeeds(data.SpecialEducationNeeds);
    await supportRequirementsPage.clickSubmitButton();
    await supportRequirementsPage.clickNextButton();
    await this.page.waitForLoadState('networkidle');
});
