const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const MyImperialPage = require('../src/pages/MyImperialPage');

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
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({
      recordVideo: {
        dir: 'videos/',
        size: { width: 1280, height: 720 },
      },
    });
    this.page = await this.context.newPage();
    this.myImperialPage = new MyImperialPage(this.page);
  }

  async takeScreenshot(name = 'failure') {
    const path = `screenshots/${name}.png`;
    const buffer = await this.page.screenshot({ path, fullPage: true });
    await this.attach(buffer, 'image/png');
    return path;
  }

  async attachVideo() {
    if (this.page && this.page.video()) {
      const videoPath = await this.page.video().path();
      await this.attach(
        Buffer.from(`file://${videoPath}`),
        'text/uri-list'
      );
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

  // await this.attachVideo();
  await this.close();
});
