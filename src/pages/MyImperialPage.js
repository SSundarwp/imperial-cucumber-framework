const { expect } = require('@playwright/test');

class MyImperialPage {
  constructor(page) {
    this.page = page;

    this.welcomeTitle = 'div.fs-2.h2';

    this.homeTab = page.getByRole('tab', { name: 'Home' });
    this.admissionsTab = page.locator('#Admissions');
    this.socialTab = page.locator('#Social');

    this.homeTabTiles = page.locator('div#nav-home a.stretched-link');
    this.admissionsTabTiles = page.locator('div#nav-Admissions a.stretched-link');
    this.socialTabTiles = page.locator('div#nav-Social a.stretched-link');
  }

  // Validate page title dynamically (use this in BDD)
  async validatePageTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
    console.log(`✅ Page title validated: "${expectedTitle}"`);
  }

  async expectWelcomeTitle(expectedTitle) {
  const welcomeTitleLocator = this.page.locator(this.welcomeTitle);
  await expect(welcomeTitleLocator).toBeVisible();
  await expect(welcomeTitleLocator).toHaveText(expectedTitle);
  const text = await welcomeTitleLocator.textContent();
  console.log(`✅ Welcome message validated: "${text?.trim()}"`);
}


  async clickHomeTab() {
    await expect(this.homeTab).toBeVisible();
    await this.homeTab.click();
  }

  async clickAdminTab() {
    await expect(this.adminTab).toBeVisible();
    await this.adminTab.click();
  }

  async clickAdmissionTab() {
    await expect(this.admissionsTab).toBeVisible();
    await this.admissionsTab.click();
  }

  getTileByTitle(title, tabIndex = 1) {
    return this.page.locator(`(//a[.//h5[normalize-space(text())='${title}']])[${tabIndex}]`);
  }

  async clickTilebyTitle(title, tabIndex = 1) {
    await this.getTileByTitle(title, tabIndex).click();
  }

  async expectTileVisible(title, tabIndex = 1) {
    const tile = this.getTileByTitle(title, tabIndex);
    await expect(tile).toBeVisible();
    await expect(tile.locator('h5')).toHaveText(title);
    console.log(`✅ Tile "${title}" on tab index ${tabIndex} is visible and correct`);
  }

  // Convenience tile checks
  async expectMyCertificateAddressTile(tabIndex) {
    await this.expectTileVisible('My certificate address', tabIndex);
  }

  async expectMyPersonalDetailsTile(tabIndex) {
    await this.expectTileVisible('My personal details', tabIndex);
  }

  async expectMyPassportVisaCasDetailsTile(tabIndex) {
    await this.expectTileVisible('My passport, visa and CAS', tabIndex);
  }

  async expectPostGraduateResearchMileStoneTile(tabIndex) {
    await this.expectTileVisible('Postgraduate research milestones', tabIndex);
  }

  async expectMyPhotoIdTile(tabIndex) {
    await this.expectTileVisible('My ID photo', tabIndex);
  }

  async expectMyInterruptionOfStudiesTile(tabIndex) {
    await this.expectTileVisible('My interruption of studies', tabIndex);
  }

  async expectApplicationsTile(tabIndex) {
    await this.expectTileVisible('Applications', tabIndex);
  }

  async expectReferencesTile(tabIndex) {
    await this.expectTileVisible('References', tabIndex);
  }

  async expectOutreachApplicationsTile(tabIndex) {
    await this.expectTileVisible('Outreach Applications', tabIndex);
  }

  async expectMyActivitiesAndEventsTile(tabIndex) {
    await this.expectTileVisible('My activities and events', tabIndex);
  }

  async expectMyClubsAndSocietiesTile(tabIndex) {
    await this.expectTileVisible('My clubs and societies', tabIndex);
  }

  async expectEventsTile(tabIndex) {
    await this.expectTileVisible('Events', tabIndex);
  }

  async expectMyTimetableTile(tabIndex) {
    await this.expectTileVisible('My timetable', tabIndex);
  }

  async expectMyCampusMapTile(tabIndex) {
    await this.expectTileVisible('My campus map', tabIndex);
  }

  async expectComputerAvailabilityTile(tabIndex) {
    await this.expectTileVisible('Computer availability', tabIndex);
  }

  async expectMyStudentRecordTile(tabIndex) {
    await this.expectTileVisible('My student record', tabIndex);
  }

  async expectHomeTilesCount(expectedCount) {
    const actualCount = await this.homeTabTiles.count();
    expect(actualCount).toBe(expectedCount);
    console.log(`✅ Verified Home tab tile count: ${actualCount}`);
  }

  async getHomeTileTexts() {
    const count = await this.homeTabTiles.count();
    const tileTexts = [];
    for (let i = 0; i < count; i++) {
      const text = await this.homeTabTiles.nth(i).innerText();
      tileTexts.push(text.trim());
    }
    return tileTexts;
  }

  async expectAllHomeTilesVisible() {
    const count = await this.homeTabTiles.count();
    for (let i = 0; i < count; i++) {
      await expect(this.homeTabTiles.nth(i)).toBeVisible();
    }
  }

  async expectAdminTilesCount(expectedCount) {
    const actualCount = await this.adminTabTiles.count();
    expect(actualCount).toBe(expectedCount);
    console.log(`✅ Verified Admin tab tile count: ${actualCount}`);
  }

  async getAdminTileTexts() {
    const count = await this.adminTabTiles.count();
    const tileTexts = [];
    for (let i = 0; i < count; i++) {
      const text = await this.adminTabTiles.nth(i).innerText();
      tileTexts.push(text.trim());
    }
    return tileTexts;
  }

  async expectAllAdminTilesVisible() {
    const count = await this.adminTabTiles.count();
    for (let i = 0; i < count; i++) {
      await expect(this.adminTabTiles.nth(i)).toBeVisible();
    }
  }

  async expectAdmissionsTilesCount(expectedCount) {
    const actualCount = await this.admissionsTabTiles.count();
    expect(actualCount).toBe(expectedCount);
    console.log(`✅ Verified Admissions tab tile count: ${actualCount}`);
  }

  async getAdmissionsTileTexts() {
    const count = await this.admissionsTabTiles.count();
    const tileTexts = [];
    for (let i = 0; i < count; i++) {
      const text = await this.admissionsTabTiles.nth(i).innerText();
      tileTexts.push(text.trim());
    }
    return tileTexts;
  }

  async expectAllAdmissionsTilesVisible() {
    const count = await this.admissionsTabTiles.count();
    for (let i = 0; i < count; i++) {
      await expect(this.admissionsTabTiles.nth(i)).toBeVisible();
    }
  }
}

module.exports = MyImperialPage;
