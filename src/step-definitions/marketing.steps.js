const { Then } = require('@cucumber/cucumber');
const { MarketingPage } = require('../pages/MarketingPage');

Then('the applicant provides marketing preference {string}', async function (_, dataTable) {
  const data = dataTable.rowsHash();
  const marketingPage = new MarketingPage(this.page);

  // Select Attend Outreach Before
  if (data.AttendOutreachbefore === 'Yes') {
    await marketingPage.radioAttendOutreachbeforeYes.check();
  } else if (data.AttendOutreachbefore === 'No') {
    await marketingPage.radioAttendOutreachbeforeNo.check();
  } else {
    throw new Error(`Invalid AttendOutreachbefore value: "${data.AttendOutreachbefore}"`);
  }

  // Select Newsletter Sign Up
  if (data.NewsLetterSignUp === 'Yes') {
    await marketingPage.radioNewsLetterSignupYes.check();
  } else if (data.NewsLetterSignUp === 'No') {
    await marketingPage.radioNewsLetterSignupNo.check();
  } else {
    throw new Error(`Invalid NewsLetterSignUp value: "${data.NewsLetterSignUp}"`);
  }

  // Click Next button to proceed
  await marketingPage.clickNextButton();
  console.log('✅ Clicked Next button after providing marketing preferences');
});
