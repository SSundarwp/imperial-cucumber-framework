const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { dynamicsPage: l } = require('../locators/locators');

class DynamicsPage {
  constructor(page) {
    this.page = page;

    this.applicationsOldTab = this.page.getByRole(
      l.dp_applicationsOldTab.role,
      { name: l.dp_applicationsOldTab.name }
    );

    this.searchBox = this.page.getByRole(
      l.dp_searchBox.role,
      { name: l.dp_searchBox.name }
    );
  }

  async navigateToDynamics(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    console.log('🔗 Navigated to Dynamics dashboard');
  }

  async openApplicationsOldTab() {
    await this.applicationsOldTab.waitFor({ state: 'visible', timeout: 90000 });
    await this.applicationsOldTab.locator('div').nth(3).click();
    await this.applicationsOldTab.click();
    console.log('📑 Clicked on Applications (old) tab');
    await this.searchBox.waitFor({ state: 'visible', timeout: 90000 });
  }

  async searchForApplication(applicationNumber) {
    await this.searchBox.fill(applicationNumber);
    await this.searchBox.press('Enter');
    console.log(`🔍 Searched for application: ${applicationNumber}`);
  }

  async selectApplicationRow(applicationNumber) {
    const appCell = this.page.getByText(applicationNumber);
    await appCell.waitFor({ state: 'visible', timeout: 90000 });

    const row = appCell.locator('xpath=ancestor::div[@role="row"]');
    const selectCell = row.locator(l.dp_colIndex.checkbox);

    await selectCell.click();
    console.log(`✅ Selected checkbox for application ${applicationNumber}`);

    return row;
  }

  async validateStatus(rowLocator, expectedStatus) {
    const statusCell = rowLocator.locator(l.dp_colIndex.status);
    const statusText = (await statusCell.textContent())?.trim();

    console.log(`Status found: "${statusText}", expecting: "${expectedStatus}"`);
    expect(statusText).toContain(expectedStatus);

    console.log(`✅ Status "${statusText}" matches expected "${expectedStatus}"`);
  }

  async takeScreenshot(appNumber) {
    const safeAppNumber = appNumber.replace(/[^a-zA-Z0-9-_]/g, '_');
    const screenshotDir = path.join('src', 'reports', 'screenshots');
    const fileName = `${safeAppNumber}.png`;
    const filePath = path.join(screenshotDir, fileName);

    fs.mkdirSync(screenshotDir, { recursive: true });
    await this.page.screenshot({ path: filePath, fullPage: true });
    console.log(`📸 Screenshot saved as ${filePath}`);

    return filePath;
  }
}

module.exports = { DynamicsPage };
