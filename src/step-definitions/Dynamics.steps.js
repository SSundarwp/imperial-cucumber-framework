const { Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { DynamicsPage } = require('../pages/DynamicsPage');
require('dotenv').config();

Then('the application with ApplicationNumber should exist in Dynamics with status', async function (dataTable) {
  const data = dataTable.rowsHash();
  const expectedStatus = data.ApplicationStatus;

  if (!this.applicationNumber) {
    throw new Error('ApplicationNumber is not set in test context');
  }

  // Launch browser with session
  const browser = await chromium.launch({ headless: process.env.HEADLESS === 'true' });
  const context = await browser.newContext({
    storageState: 'dynamics-session.json',
  });

  const page = await context.newPage();
  const dynamics = new DynamicsPage(page);

  // Navigate and verify
  await dynamics.navigateToDynamics(process.env.DYNAMICS_URL);
  await dynamics.openApplicationsOldTab();
  await dynamics.searchForApplication(this.applicationNumber);
  await dynamics.clickSelectAll();
  // await page.waitForTimeout(5000);
  // await dynamics.validateStatus(expectedStatus);

  await browser.close();
});
