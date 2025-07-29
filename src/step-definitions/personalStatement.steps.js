const { When } = require('@cucumber/cucumber');
const { PersonalStatementPage } = require('../pages/PersonalStatementPage');

When('the applicant provides a personal statement', async function () {
  const personalStatementPage = new PersonalStatementPage(this.page);
  await personalStatementPage.fillPersonalStatement();
  await personalStatementPage.clickNextButton();
  await this.page.waitForLoadState('networkidle');
});
