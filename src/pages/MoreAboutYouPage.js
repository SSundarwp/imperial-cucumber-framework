const { expect } = require('@playwright/test');
const { moreAboutYouPage: l } = require('../locators/locators');

class MoreAboutYouPage {
  constructor(page) {
    this.page = page;

    this.selectFreeSchoolMealsLocator = this.page.locator(l.ma_freeSchoolMealsSelect.selector);
    this.selectHouseholdIncomeLocator = this.page.locator(l.ma_householdIncomeSelect.selector);

    this.radioPupilPremiumYesLocator = this.page.locator(l.ma_pupilPremiumYesRadio.id);
    this.radioPupilPremiumNoLocator = this.page.locator(l.ma_pupilPremiumNoRadio.id);

    this.radioOutreachInCareYesLocator = this.page.locator(l.ma_outreachInCareYesRadio.id);
    this.radioOutreachInCareNoLocator = this.page.locator(l.ma_outreachInCareNoRadio.id);

    this.selectCareFromAgeLocator = this.page.locator(l.ma_careFromAgeSelect.selector);
    this.selectCareToAgeLocator = this.page.locator(l.ma_careToAgeSelect.selector);
    this.selectDurationInCareLocator = this.page.locator(l.ma_durationInCareSelect.selector);

    this.radioYoungCarerYesLocator = this.page.locator(l.ma_youngCarerYesRadio.id);
    this.radioYoungCarerNoLocator = this.page.locator(l.ma_youngCarerNoRadio.id);

    this.inputMoreDetailsLocator = this.page.locator(l.ma_moreDetailsInput.selector);

    this.radioFirstGenerationYesLocator = this.page.locator(l.ma_firstGenerationYesRadio.id);
    this.radioFirstGenerationNoLocator = this.page.locator(l.ma_firstGenerationNoRadio.id);

    this.inputFirstGenerationRelationshipLocator = this.page.locator(l.ma_firstGenerationRelationshipInput.selector);
    this.inputFirstGenerationOccupationLocator = this.page.locator(l.ma_firstGenerationOccupationInput.selector);

    this.radioFirstGenerationGuardianYesLocator = this.page.locator(l.ma_firstGenerationGuardianYesRadio.id);
    this.radioFirstGenerationGuardianNoLocator = this.page.locator(l.ma_firstGenerationGuardianNoRadio.id);

    this.inputFirstGenerationUniversityLocator = this.page.locator(l.ma_firstGenerationUniversityInput.selector);
    this.inputFirstGenerationLevelLocator = this.page.locator(l.ma_firstGenerationLevelInput.selector);
    this.inputFirstGenerationSubjectLocator = this.page.locator(l.ma_firstGenerationSubjectInput.selector);

    this.radioOutreachEstrangedYesLocator = this.page.locator(l.ma_outreachEstrangedYesRadio.id);
    this.radioOutreachEstrangedNoLocator = this.page.locator(l.ma_outreachEstrangedNoRadio.id);

    this.selectGTRSBLocator = this.page.locator(l.ma_gTRSBSelect.selector);
    this.selectRefugeeOrAsylumSeekerLocator = this.page.locator(l.ma_refugeeOrAsylumSeekerSelect.selector);

    this.radioMilitaryFamilyYesLocator = this.page.locator(l.ma_militaryFamilyYesRadio.id);
    this.radioMilitaryFamilyNoLocator = this.page.locator(l.ma_militaryFamilyNoRadio.id);

    this.radioVeteranYesLocator = this.page.locator(l.ma_veteranYesRadio.id);
    this.radioVeteranNoLocator = this.page.locator(l.ma_veteranNoRadio.id);

    this.nextButtonLocator = this.page.locator(l.ma_nextButton);
  }

  async selectFreeSchoolMeals(option) {
    await this.selectFreeSchoolMealsLocator.selectOption(option);
    console.log(`✅ Selected Free School Meals: ${option}`);
  }

  async selectHouseholdIncome(option) {
    await this.selectHouseholdIncomeLocator.selectOption(option);
    console.log(`✅ Selected Household Income: ${option}`);
  }

  async selectPupilPremium(option) {
    if (option === 'Yes') {
      await this.radioPupilPremiumYesLocator.check();
    } else {
      await this.radioPupilPremiumNoLocator.check();
    }
    console.log(`✅ Selected Pupil Premium: ${option}`);
  }

  async selectOutreachInCare(option) {
    if (option === 'Yes') {
      await this.radioOutreachInCareYesLocator.check();
    } else {
      await this.radioOutreachInCareNoLocator.check();
    }
    console.log(`✅ Selected Outreach In Care: ${option}`);
  }

  async selectCareFromAge(age) {
    await this.selectCareFromAgeLocator.selectOption(age);
    console.log(`✅ Selected Care From Age: ${age}`);
  }

  async selectCareToAge(age) {
    await this.selectCareToAgeLocator.selectOption(age);
    console.log(`✅ Selected Care To Age: ${age}`);
  }

  async selectDurationInCare(duration) {
    await this.selectDurationInCareLocator.selectOption(duration);
    console.log(`✅ Selected Duration In Care: ${duration}`);
  }

  async selectYoungCarer(option) {
    if (option === 'Yes') {
      await this.radioYoungCarerYesLocator.check();
    } else {
      await this.radioYoungCarerNoLocator.check();
    }
    console.log(`✅ Selected Young Carer: ${option}`);
  }

  async inputMoreDetails(text) {
    await this.inputMoreDetailsLocator.fill(text);
    console.log(`✅ Entered More Details: ${text}`);
  }

  async selectFirstGeneration(option) {
    if (option === 'Yes') {
      await this.radioFirstGenerationYesLocator.check();
    } else {
      await this.radioFirstGenerationNoLocator.check();
    }
    console.log(`✅ Selected First Generation: ${option}`);
  }

  async inputFirstGenerationRelationship(text) {
    await this.inputFirstGenerationRelationshipLocator.fill(text);
    console.log(`✅ Entered First Generation Relationship: ${text}`);
  }

  async inputFirstGenerationOccupation(text) {
    await this.inputFirstGenerationOccupationLocator.fill(text);
    console.log(`✅ Entered First Generation Occupation: ${text}`);
  }

  async selectFirstGenerationGuardian(option) {
    if (option === 'Yes') {
      await this.radioFirstGenerationGuardianYesLocator.check();
    } else {
      await this.radioFirstGenerationGuardianNoLocator.check();
    }
    console.log(`✅ Selected First Generation Guardian: ${option}`);
  }

  async inputFirstGenerationUniversity(text) {
    await this.inputFirstGenerationUniversityLocator.fill(text);
    console.log(`✅ Entered First Generation University: ${text}`);
  }

  async inputFirstGenerationLevel(text) {
    await this.inputFirstGenerationLevelLocator.fill(text);
    console.log(`✅ Entered First Generation Level: ${text}`);
  }

  async inputFirstGenerationSubject(text) {
    await this.inputFirstGenerationSubjectLocator.fill(text);
    console.log(`✅ Entered First Generation Subject: ${text}`);
  }

  async selectEstranged(option) {
    if (option === 'Yes') {
      await this.radioOutreachEstrangedYesLocator.check();
    } else {
      await this.radioOutreachEstrangedNoLocator.check();
    }
    console.log(`✅ Selected Outreach Estranged: ${option}`);
  }

  async selectGTRSB(option) {
    await this.selectGTRSBLocator.selectOption(option);
    console.log(`✅ Selected GTRSB: ${option}`);
  }

  async selectRefugeeOrAsylumSeeker(option) {
    await this.selectRefugeeOrAsylumSeekerLocator.selectOption(option);
    console.log(`✅ Selected Refugee or Asylum Seeker: ${option}`);
  }

  async selectMilitaryFamily(option) {
    if (option === 'Yes') {
      await this.radioMilitaryFamilyYesLocator.check();
    } else {
      await this.radioMilitaryFamilyNoLocator.check();
    }
    console.log(`✅ Selected Military Family: ${option}`);
  }

  async selectVeteran(option) {
    if (option === 'Yes') {
      await this.radioVeteranYesLocator.check();
    } else {
      await this.radioVeteranNoLocator.check();
    }
    console.log(`✅ Selected Veteran: ${option}`);
  }

  async clickNextButton() {
    await this.nextButtonLocator.click();
    console.log('✅ Clicked Next button');
  }
}

module.exports = { MoreAboutYouPage };
