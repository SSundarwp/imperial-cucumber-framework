const { expect } = require('@playwright/test');
const { addressPage: l } = require('../locators/locators');

class AddressPage {
    constructor(page) {
        this.page = page;

        this.addressLine1 = page.locator(l.ap_addressLine1);
        this.addressLine2 = page.locator(l.ap_addressLine2);
        this.addressLine3 = page.locator(l.ap_addressLine3);
        this.city = page.locator(l.ap_city);
        this.countryClear = page.locator(l.ap_countryClearLookup);
        this.countryLookup = page.locator(l.ap_countryLookupModal);
        this.countrySelect = page.getByRole('button', { name: 'Select' });
        this.postcode = page.locator(l.ap_postcode);
        this.nextButton = page.locator(l.ap_nextButton);
        this.pageTitle = l.ap_pageTitle;
        this.formTitleLocator = l.ap_formTitleLocator;
        this.formTitleText = l.ap_formTitle;
    }

    async enterAddressDetails(data) {
        await this.addressLine1.clear();
        await this.addressLine2.clear();
        await this.addressLine3.clear();
        await this.city.clear();
        await this.postcode.clear();
        await this.countryClear.click();

        await this.addressLine1.fill(data.AddressLine1);
        await this.addressLine2.fill(data.AddressLine2);
        await this.addressLine3.fill(data.AddressLine3);
        await this.city.fill(data.City);
        await this.postcode.fill(data.Postcode);
        await this.countryLookup.click();
        const countryCell = this.page.getByRole('cell', { name: data.Country, exact: true });
        await expect(countryCell).toBeVisible();
        await countryCell.click();
        await this.countrySelect.click();

        console.log('✅ Address details filled');
    }

    async clickNextButton() {
        await this.nextButton.click();
        console.log("✅ Successfully added address Details");
    }
}
module.exports = { AddressPage };