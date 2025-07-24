const { expect } = require('@playwright/test');
const { educationPage: l } = require('../locators/locators');

class EducationPage {
    constructor(page) {
        this.page = page;
        this.nextButton = page.locator(l.ep_nextButton);
    }

    async clickNextButton() {
        await this.nextButton.click();
        console.log('✅ Successfully updated education details');
    }
}

module.exports = { EducationPage };
