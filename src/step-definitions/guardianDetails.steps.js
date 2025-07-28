const { When } = require('@cucumber/cucumber');
const { GuardianDetailsPage } = require('../pages/GuardianPage');

When('the applicant provides guardian details', async function (dataTable) {
  const data = dataTable.rowsHash();
  const guardianDetailsPage = new GuardianDetailsPage(this.page);

  await guardianDetailsPage.clickAddGuardianDetailsButton();
  await guardianDetailsPage.selectGuardianTitle(data.Title);
  await guardianDetailsPage.fillGuardianDetails({
    FirstName: data.FirstName,
    LastName: data.LastName,
    WorkEmailAddress: data.Email,
    PhoneNumber: data.PhoneNumber,
    SameAddress: data.SameAddress,
  });
  await guardianDetailsPage.clickCreateAddGuardianDetailsButton();
  await guardianDetailsPage.clickNextButton();
  await this.page.waitForLoadState('networkidle');
});
