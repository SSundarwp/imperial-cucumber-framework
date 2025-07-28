const { When } = require('@cucumber/cucumber');
const { MoreAboutYouPage } = require('../pages/MoreAboutYouPage');

When('the applicant provides more about you information', async function (dataTable) {
  const data = dataTable.rowsHash();
  const moreAboutYouPage = new MoreAboutYouPage(this.page);

  if (data.FreeSchoolMeals) {
    await moreAboutYouPage.selectFreeSchoolMeals(data.FreeSchoolMeals);
  }
  if (data.HouseHoldIncome) {
    await moreAboutYouPage.selectHouseholdIncome(data.HouseHoldIncome);
  }
  if (data.PupilPremium) {
    await moreAboutYouPage.selectPupilPremium(data.PupilPremium);
  }

  if (data.OutreachInCare) {
    await moreAboutYouPage.selectOutreachInCare(data.OutreachInCare);
  }

  if (data.CareFromAge) {
    await moreAboutYouPage.selectCareFromAge(data.CareFromAge);
  }
  if (data.CareToAge) {
    await moreAboutYouPage.selectCareToAge(data.CareToAge);
  }
  if (data.DurationInCare) {
    await moreAboutYouPage.selectDurationInCare(data.DurationInCare);
  }
  if (data.YoungCarer) {
    await moreAboutYouPage.selectYoungCarer(data.YoungCarer);
  }
  if (data.MoreDetails) {
    await moreAboutYouPage.inputMoreDetails(data.MoreDetails);
  }
  if (data.FirstGeneration) {
    await moreAboutYouPage.selectFirstGeneration(data.FirstGeneration);
  }
  if (data.FirstGenRelationship) {
    await moreAboutYouPage.inputFirstGenerationRelationship(data.FirstGenRelationship);
  }
  if (data.FirstGenOccupation) {
    await moreAboutYouPage.inputFirstGenerationOccupation(data.FirstGenOccupation);
  }
  if (data.FirstGenGuardian) {
    await moreAboutYouPage.selectFirstGenerationGuardian(data.FirstGenGuardian);
  }
  if (data.FirstGenUniversity) {
    await moreAboutYouPage.inputFirstGenerationUniversity(data.FirstGenUniversity);
  }
  if (data.FirstGenLevel) {
    await moreAboutYouPage.inputFirstGenerationLevel(data.FirstGenLevel);
  }
  if (data.FirstGenSubject) {
    await moreAboutYouPage.inputFirstGenerationSubject(data.FirstGenSubject);
  }
  if (data.Estranged) {
    await moreAboutYouPage.selectEstranged(data.Estranged);
  }
  if (data.GTRSB) {
    await moreAboutYouPage.selectGTRSB(data.GTRSB);
  }
  if (data.RefugeeOrAsylumSeeker) {
    await moreAboutYouPage.selectRefugeeOrAsylumSeeker(data.RefugeeOrAsylumSeeker);
  }
  if (data.MilitaryFamily) {
    await moreAboutYouPage.selectMilitaryFamily(data.MilitaryFamily);
  }
  if (data.Veteran) {
    await moreAboutYouPage.selectVeteran(data.Veteran);
  }

  await moreAboutYouPage.clickNextButton();
  await this.page.waitForLoadState('networkidle');
});
