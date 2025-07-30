const fs = require('fs');
const path = require('path');

/**
 * Takes a full-page screenshot and attaches it to the Cucumber report.
 *
 * @param {import('playwright').Page} page - The Playwright page instance.
 * @param {Function} attach - The Cucumber World `this.attach` function.
 * @param {string} [name='screenshot'] - Screenshot name prefix.
 * @returns {Promise<string>} - Path to saved screenshot.
 */
async function takeAndAttachScreenshot(page, attach, name = 'screenshot') {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `${name}_${timestamp}.png`;
  const screenshotDir = path.join('src', 'reports', 'screenshots');
  const filePath = path.join(screenshotDir, fileName);

  fs.mkdirSync(screenshotDir, { recursive: true });

  const buffer = await page.screenshot({ path: filePath, fullPage: true });

  // Attach to Cucumber report
  await attach(buffer, 'image/png');

  console.log(`📸 Screenshot saved and attached: ${filePath}`);
  return filePath;
}

module.exports = { takeAndAttachScreenshot };
