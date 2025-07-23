const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const MyImperialPage = require('../pages/MyImperialPage');
require('dotenv').config(); // Load .env variables

class CustomWorld {
  constructor({ attach, parameters }) {
    this.attach = attach;
    this.parameters = parameters;
    this.browser = null;
    this.context = null;
    this.page = null;
    this.myImperialPage = null;
  }

  async launch() {
    const slowMo = parseInt(process.env.SLOW_MO || '0', 10);
    const headless = process.env.HEADLESS?.trim().toLowerCase() !== 'false';
    const recordVideo = process.env.RECORD_VIDEO?.trim().toLowerCase() === 'true';
    const baseURL = process.env.BASE_URL || '';

    // Set video options ONLY if RECORD_VIDEO=true
    const contextOptions = recordVideo
      ? { recordVideo: { dir: 'src/videos/', size: { width: 1280, height: 720 } } }
      : {};

    this.browser = await chromium.launch({ headless, slowMo });
    this.context = await this.browser.newContext(contextOptions);
    this.page = await this.context.newPage();

    this.myImperialPage = new MyImperialPage(this.page);

    console.log(`🚀 Browser launched with slowMo=${slowMo}, headless=${headless}, recordVideo=${recordVideo}`);

    if (baseURL) {
      console.log(`🌐 Navigating to base URL: ${baseURL}`);
      await this.page.goto(baseURL);
    }
  }


  async takeScreenshot(name = 'failure') {
    const path = `src/screenshots/${name}.png`;
    const buffer = await this.page.screenshot({ path, fullPage: true });
    await this.attach(buffer, 'image/png');
    return path;
  }

  async attachVideo() {
    if (this.page && this.page.video()) {
      const videoPath = await this.page.video().path();
      await this.attach(Buffer.from(`file://${videoPath}`), 'text/uri-list');
    }
  }

  async close() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.launch();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    await this.takeScreenshot(`FAILED_${Date.now()}`);
  }

  // Optionally attach video on failure
  // await this.attachVideo();

  await this.close();
});
