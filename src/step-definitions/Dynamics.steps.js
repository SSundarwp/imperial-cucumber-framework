const { Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { DynamicsPage } = require('../pages/DynamicsPage');
require('dotenv').config();
const fs = require('fs');

Then('the application with ApplicationNumber should exist in Dynamics with status', async function (dataTable) {
  const data = dataTable.rowsHash();
  const expectedStatus = data.ApplicationStatus;

  if (!this.applicationNumber) {
    throw new Error('ApplicationNumber is not set in test context');
  }

  const browser = await chromium.launch({ headless: process.env.HEADLESS === 'true' });
  const context = await browser.newContext({
    storageState: 'dynamics-session.json',
  });

  const page = await context.newPage();
  const dynamics = new DynamicsPage(page);

  await dynamics.navigateToDynamics(process.env.DYNAMICS_URL);
  await dynamics.openApplicationsOldTab();
  await dynamics.searchForApplication(this.applicationNumber);

  const rowLocator = await dynamics.selectApplicationRow(this.applicationNumber);
  await dynamics.validateStatus(rowLocator, expectedStatus);

  // Take screenshot and attach
  const screenshotPath = await dynamics.takeScreenshot(this.applicationNumber);
  const imageBuffer = fs.readFileSync(screenshotPath);
  this.attach(imageBuffer, 'image/png');

  await browser.close();
});
