const { When } = require('@cucumber/cucumber');
const { ReviewAndSubmissionPage } = require('../pages/ReviewAndSubmissionPage');

When('submits the application by accepting or rejecting', async function (dataTable) {
  const data = dataTable.rowsHash(); // { TermsAccepted: 'Yes' } or { TermsAccepted: 'No' }
  const reviewPage = new ReviewAndSubmissionPage(this.page);

  await reviewPage.selectTermsandConditions(data.TermsAccepted);
  await reviewPage.clickSubmitButton();
});
