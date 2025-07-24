
```
imperial-cucumber-framework
├─ .env
├─ 2025-07-19_03h30_01.mp4
├─ cucumber.js
├─ generate-report.js
├─ package-lock.json
├─ package.json
├─ playwright.config.js
├─ README.md
├─ src
│  ├─ features
│  │  ├─ new-application.feature
│  │  └─ sample.feature
│  ├─ fixtures
│  │  └─ outreach
│  │     ├─ addressData.json
│  │     ├─ EducationData.json
│  │     ├─ guardianDetails.json
│  │     ├─ MoreAboutYouData.json
│  │     ├─ personalDetailsData.json
│  │     ├─ programmesListData.json
│  │     ├─ supportDetails.json
│  │     └─ teacherDetails.json
│  ├─ locators
│  │  └─ locators.js
│  ├─ pages
│  │  ├─ HomePage.js
│  │  ├─ MyImperialPage.js
│  │  ├─ MyOutReachNewApplicationPage.js
│  │  ├─ SignInMyImperialPage.js
│  │  └─ SignupOrSignInPage.js
│  └─ step-definitions
│     ├─ myImperial.steps.js
│     ├─ myOutReachNewApplication.steps.js
│     ├─ sample.steps.js
│     └─ signInMyImperial.steps.js
├─ support
│  └─ world.js
└─ tests
   ├─ global-setup.js
   ├─ global-teardown.js
   └─ hooks

```

Sure! Here's a detailed example of a **README.md** file tailored for your `imperial-cucumber-framework`, which uses Playwright and Cucumber with the project structure you provided.

---

# Imperial Cucumber Framework

A Playwright and Cucumber-based end-to-end testing framework designed for testing the Imperial outreach application and other features.

---

## Table of Contents

* [Overview](#overview)
* [Project Structure](#project-structure)
* [Setup & Installation](#setup--installation)
* [Running Tests](#running-tests)
* [Writing Tests](#writing-tests)
* [Page Objects](#page-objects)
* [Fixtures](#fixtures)
* [Locators](#locators)
* [Step Definitions](#step-definitions)
* [Support & Custom World](#support--custom-world)
* [Test Hooks & Global Setup/Teardown](#test-hooks--global-setupteardown)
* [Reports & Videos](#reports--videos)
* [Environment Variables](#environment-variables)
* [Contributing](#contributing)
* [License](#license)

---

## Overview

This framework integrates Playwright with Cucumber for behavior-driven development (BDD) style automated UI testing. It uses feature files to describe test scenarios in Gherkin syntax, step definitions to implement steps, and page objects for UI abstraction.

---

## Project Structure

```
imperial-cucumber-framework
├─ .env                        # Environment variables
├─ cucumber.js                 # Cucumber CLI configuration
├─ generate-report.js          # Custom report generator script
├─ package.json                # Node dependencies and scripts
├─ playwright.config.js        # Playwright configuration
├─ src
│  ├─ features                # Gherkin feature files
│  ├─ fixtures                # Test data in JSON format
│  ├─ locators                # UI locators grouped for reusability
│  ├─ pages                   # Page Object Model (POM) files
│  └─ step-definitions        # Step definitions implementing Gherkin steps
├─ support
│  └─ world.js                # Custom Cucumber World context
└─ tests
   ├─ global-setup.js         # Setup before test suite runs
   ├─ global-teardown.js      # Cleanup after test suite finishes
   └─ hooks                   # Cucumber hooks (before, after, etc.)
```

---

## Setup & Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-org/imperial-cucumber-framework.git
   cd imperial-cucumber-framework
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set environment variables:**

   Create a `.env` file at the root or update it with necessary configuration (e.g., URLs, credentials).

4. **(Optional) Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

---

## Running Tests

* **Run all tests:**

  ```bash
  npx cucumber-js
  ```

* **Run tests with Playwright:**

  ```bash
  npx playwright test
  ```

* **Run specific feature file:**

  ```bash
  npx cucumber-js src/features/new-application.feature
  ```

* **Generate reports:**

  ```bash
  node generate-report.js
  ```

---

## Writing Tests

* Feature files (`.feature`) are located in `src/features`. They describe behavior in Gherkin syntax:

  ```gherkin
  Feature: New Application
    Scenario: Submit new application form
      Given I am on the outreach new application page
      When I fill in the application details
      Then I should see a confirmation message
  ```

* Corresponding step implementations are in `src/step-definitions`.

---

## Page Objects

* Encapsulate UI interactions inside classes located in `src/pages`.

* Example:

  ```js
  // src/pages/HomePage.js
  class HomePage {
    constructor(page) {
      this.page = page;
      this.signInButton = page.locator('button#signIn');
    }

    async goto() {
      await this.page.goto('https://imperial.example.com');
    }

    async clickSignIn() {
      await this.signInButton.click();
    }
  }

  module.exports = HomePage;
  ```

---

## Fixtures

* JSON test data files are stored under `src/fixtures/outreach`.

* Use them to drive data-driven tests, e.g. `personalDetailsData.json`.

---

## Locators

* Centralized UI selectors reside in `src/locators/locators.js`.

* This promotes reusability and maintainability.

---

## Step Definitions

* Each feature file has related step files in `src/step-definitions`.

* Example:

  ```js
  // src/step-definitions/myOutReachNewApplication.steps.js
  const { Given, When, Then } = require('@cucumber/cucumber');
  const MyOutReachNewApplicationPage = require('../pages/MyOutReachNewApplicationPage');

  Given('I am on the outreach new application page', async function() {
    this.pageObject = new MyOutReachNewApplicationPage(this.page);
    await this.pageObject.goto();
  });

  When('I fill in the application details', async function() {
    await this.pageObject.fillApplicationForm(this.testData);
  });

  Then('I should see a confirmation message', async function() {
    const isVisible = await this.pageObject.confirmationMessage.isVisible();
    if (!isVisible) throw new Error('Confirmation message not displayed');
  });
  ```

---

## Support & Custom World

* Custom World context (`support/world.js`) extends Cucumber’s World object to share state (e.g., Playwright `page`, test data).

---

## Test Hooks & Global Setup/Teardown

* `tests/hooks` contains hooks to run code before/after scenarios.

* `tests/global-setup.js` and `tests/global-teardown.js` handle setup/cleanup before and after the entire test suite.

---

## Reports & Videos

* Video recordings of test runs are saved as `.mp4` files (e.g., `2025-07-19_03h30_01.mp4`).

* Use `generate-report.js` to create detailed HTML reports.

---

## Environment Variables

* Configure URLs, credentials, and other settings in the `.env` file.

* Example:

  ```
  BASE_URL=https://imperial.example.com
  USERNAME=testuser
  PASSWORD=securepassword
  ```

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

If you want, I can also help generate specific parts like example step definitions, or the `cucumber.js` config file! Would you like that?
