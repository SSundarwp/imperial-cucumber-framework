const { reviewandSubmissionPage } = require('../locators/locators'); // adjust path as needed

class ReviewAndSubmissionPage {
    constructor(page) {
        this.page = page;
    }

    async selectTermsandConditions(option) {
        if (option === 'Yes') {
            await this.page.locator(reviewandSubmissionPage.rsp_radioTermsandConditionsYes).check();
        } else {
            await this.page.locator(reviewandSubmissionPage.rsp_radioTermsandConditionsNo).check();
        }
        console.log(`✅ Selected Terms and Conditions option: ${option}`);
    }

    async clickSubmitButton() {
        await this.page.locator(reviewandSubmissionPage.rsp_submitButton).click();
        console.log('✅ Successfully submitted the application');
    }
}

module.exports = { ReviewAndSubmissionPage };