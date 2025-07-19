const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
require('dotenv').config();

let browser, page, homePage;

setDefaultTimeout(120 * 1000);

Given('I open the browser and navigate to {string}', async function (url) {
  browser = await chromium.launch({ headless: process.env.HEADLESS === 'true' });
  const context = await browser.newContext();
  page = await context.newPage();
  homePage = new HomePage(page);
  this.page = page;
  await page.goto(url);
});

Then('I see the homepage', async function () {
  const screenshot = await page.screenshot();
  await this.attach('Homepage is visible'); 
  await browser.close();
});
