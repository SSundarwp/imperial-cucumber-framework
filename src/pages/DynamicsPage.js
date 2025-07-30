const { expect } = require('@playwright/test');

class DynamicsPage {
  constructor(page) {
    this.page = page;
    this.applicationsOldTab = this.page.locator('span:has-text("Applications (old)")');
    this.searchBox = this.page.locator('input[placeholder="Filter by keyword"][role="searchbox"][aria-label="Application Filter by keyword"]');
    this.selectAllButton = page.locator('button.cc-ds-header-select-all-btn[title="Select All"]');
    this.firstDataRow = this.page.locator('div.wj-row[aria-rowindex="2"]');
  }

  async navigateToDynamics(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    console.log('🔗 Navigated to Dynamics dashboard');
  }

    async clickSelectAll() {
    await this.selectAllButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.selectAllButton.click();
    console.log('✅ Clicked "Select All" button');
  }

  async openApplicationsOldTab() {
    await this.applicationsOldTab.waitFor({ state: 'visible', timeout: 90000 });
    await this.applicationsOldTab.click();
    console.log('📑 Clicked on Applications (old) tab');
    await this.searchBox.waitFor({ state: 'visible', timeout: 90000 });
  }

  async searchForApplication(applicationNumber) {
    await this.searchBox.fill(applicationNumber);
    await this.searchBox.press('Enter');
    console.log(`🔍 Searched for application: ${applicationNumber}`);
  }

  async openApplicationRecord() {
    await this.firstDataRow.waitFor({ state: 'visible', timeout: 90000 });
    await this.firstDataRow.click();
    console.log('📂 Opened first application record in Dynamics');
  }

  async validateStatus(expectedStatus) {
  // Wait for any data row (rowindex >= 2) to appear and be visible
  const dataRows = this.page.locator('div.wj-row[role="row"][aria-rowindex]');
  
  // Wait for at least one data row visible with timeout
  await dataRows.first().waitFor({ state: 'visible', timeout: 90000 });

  const rowCount = await dataRows.count();
  console.log(`Found ${rowCount} data rows.`);

  // Find the row containing the expected Application Number in col 2
  for (let i = 0; i < rowCount; i++) {
    const row = dataRows.nth(i);
    // Check visibility to avoid hidden rows
    if (!(await row.isVisible())) {
      continue;
    }
    // Get Application Number text from colindex=2 cell
    const appNumCell = row.locator('div[aria-colindex="2"] span');
    const appNumText = (await appNumCell.textContent())?.trim();

    if (appNumText === this.applicationNumber) {
      console.log(`Found matching application number: ${appNumText} at row ${i + 2}`);

      // Now check the status from colindex=7 cell
      const statusCell = row.locator('div[aria-colindex="7"] span');
      const actualStatus = (await statusCell.textContent())?.trim();

      console.log(`Application status found: "${actualStatus}"`);

      if (actualStatus.includes(expectedStatus)) {
        console.log(`✅ Application status matches expected: ${expectedStatus}`);
        return;
      } else {
        throw new Error(`Expected status "${expectedStatus}" but found "${actualStatus}"`);
      }
    }
  }

  throw new Error(`Application Number "${this.applicationNumber}" not found in results`);
}


}

module.exports = { DynamicsPage };
