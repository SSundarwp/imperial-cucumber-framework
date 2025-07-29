const { expect } = require('@playwright/test');
const { personalStatementPage: l } = require('../locators/locators');

class PersonalStatementPage {
    constructor(page) {
        this.page = page;
        this.inputPersonalStatement = this.page.locator(l.psp_inputPersonalStatement);
        this.nextButton = this.page.locator(l.psp_nextButton);
    }

    async fillPersonalStatement() {
        const text = 'I confirm all the details mentioned is true to my knowledge';
        await this.inputPersonalStatement.fill(text);
        console.log(`✅ Entered personal statement: "${text}"`);
    }

    async clickNextButton() {
        await this.nextButton.click();
        console.log("✅ Clicked Next button on Personal Statement page");
    }
}

module.exports = { PersonalStatementPage };
