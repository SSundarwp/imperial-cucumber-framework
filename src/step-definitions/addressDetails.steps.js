const { When } = require('@cucumber/cucumber');
const { AddressPage } = require('../pages/AddressPage');

When('the applicant enters address information', async function (dataTable) {
  const data = dataTable.rowsHash();

  console.log('Resolved address data:', data);

  const addressPage = new AddressPage(this.page);
  await addressPage.enterAddressDetails(data);
  await addressPage.clickNextButton();
});