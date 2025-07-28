module.exports = {
  signupOrSignInPage: {
    soip_emailInput: '#email',
    soip_passwordInput: '#password',
    soip_signInButton: '#next',
    soip_hamburgerButton: 'a.sidebar-toggle[aria-label="Menu"]',
    soip_logoutLink: { role: 'link', name: 'Log out' },
    soip_pageTitle: 'My Imperial My Imperial',
  },

  signInMyImperialPage: {
    simip_gssTab: '#studentTab',
    simip_outreachTab: '#applicantTab',
    simip_gssLoginButton: { role: 'button', name: 'GSS Login' },
    simip_gssRegisterButton: { role: 'button', name: 'GSS Register' },
    simip_outreachLoginButton: { role: 'button', name: 'Outreach Login' },
    simip_outreachRegisterButton: { role: 'button', name: 'Outreach Register' },
  },

  myOutReachApplicationNewPage: {
    moanp_startANewApplicationButton: { role: 'link', name: 'Start a new application' },
    moanp_unRegulatedProgrammeSearchButton: '[aria-label="Unregulated programme Launch lookup modal"]',
    moanp_unRegulatedProgrammeAvailabilitySearchButton: '[aria-label="Unregulated programme availability Launch lookup modal"]',
    moanp_selectButton: { role: 'button', name: 'Select' },
    moanp_submitButton: { role: 'button', name: 'Submit' },
  },

  myImperialPage: {
    mip_welcomeTitle: 'div.fs-2.h2',

    mip_homeTab: { role: 'tab', name: 'Home' },
    mip_admissionsTab: '#Admissions',
    mip_socialTab: '#Social',

    mip_homeTabTiles: 'div#nav-home a.stretched-link',
    mip_admissionsTabTiles: 'div#nav-Admissions a.stretched-link',
    mip_socialTabTiles: 'div#nav-Social a.stretched-link',
  },

  personalDetailsPage: {
    pdp_pageTitle: 'Outreach',
    pdp_formTitleLocator: { label: 'Basic Form', selector: 'h2' },
    pdp_firstNameInput: '#firstname',
    pdp_lastNameInput: '#lastname',
    pdp_dateofBirthInput: '#birthdate_datepicker_description',
    pdp_primaryEmailaddressInput: '#emailaddress1',
    pdp_mobileNumberInput: '#mobilephone',
    pdp_genderCodeInput: ['Male', 'Female'],
    pdp_ethnicityInput: '#ic_ethnicityid_name',
    pdp_nationalityInput: '#ic_nationalityid_name',
    pdp_nextButton: '#NextButton',
  },

  addressPage: {
    ap_pageTitle: 'Outreach',
    ap_formTitle: 'Address',
    ap_formTitleLocator: { label: 'Basic Form', selector: 'h2' },
    ap_addressLine1: '#address1_line1',
    ap_addressLine2: '#address1_line2',
    ap_addressLine3: '#address1_line3',
    ap_city: '#address1_city',
    ap_countryClearLookup: '[aria-label="Country Clear lookup field"]',
    ap_countryLookupModal: '[aria-label="Country Launch lookup modal"]',
    ap_postcode: '#address1_postalcode',
    ap_nextButton: '#NextButton',
  },

  educationPage: {
    ep_pageTitle: 'Outreach',
    ep_formTitle: 'Qualification',
    ep_formTitleLocator: { label: 'Basic Form', selector: 'h2' },
    ep_nextButton: '#NextButton',
  },

  teacherDetailsPage: {
    tdp_addTeacherDetailsButton: { role: 'button', name: 'Add teacher details' },
    tdp_iframeSelector: 'iframe[title="Create"]',

    tdp_teacherTitleLaunchLookupButton: { role: 'button', name: 'Teacher title Launch lookup' },
    tdp_checkboxMrRow: { role: 'checkbox', name: 'Select or deselect the row Mr', exact: true },
    tdp_firstNameInput: { role: 'textbox', name: 'First name' },
    tdp_lastNameInput: { role: 'textbox', name: 'Last name' },
    tdp_workEmailAddressInput: { role: 'textbox', name: 'Work email address' },
    tdp_selectButton: { role: 'button', name: 'Select' },
    tdp_addTeacherDetailsButtonInsideIframe: { role: 'button', name: 'Add Teacher Details' },
    tdp_nextButton: '#NextButton',
  },

  guardianDetailsPage: {
    gdp_addGuardianDetailsButton: { role: 'button', name: 'Add guardian details' },
    gdp_iframeSelector: 'iframe[title="Create"]',

    gdp_guardianTitleLaunchLookupButton: { role: 'button', name: 'Guardian title Launch lookup' },
    gdp_checkboxMrRow: { role: 'checkbox', name: 'Select or deselect the row Mr', exact: true },

    gdp_firstInitialInput: { role: 'textbox', name: 'Guardian first initial' },
    gdp_lastNameInput: { role: 'textbox', name: 'Guardian last name' },
    gdp_workEmailAddressInput: { role: 'textbox', name: 'Guardian email address' },
    gdp_phoneNumberInput: { role: 'textbox', name: 'Guardian phone number' },

    gdp_guardianSameAddressButton: { role: 'radio', name: 'Yes' }, // Assuming it's a radio button with "Yes" label

    gdp_selectButton: { role: 'button', name: 'Select' },
    gdp_addGuardianDetailsButtonInsideIframe: { role: 'button', name: 'Add Guardian Details' },
    gdp_nextButton: '#NextButton',
  },

  moreAboutYouPage : {
    ma_freeSchoolMealsSelect: { selector: '#ic_freeschoolmealscode' },
    ma_householdIncomeSelect: { selector: '#ic_householdincomecode' },

    ma_pupilPremiumYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_pupilpremium_1' },
    ma_pupilPremiumNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_pupilpremium_0' },

    ma_outreachInCareYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_outreachincare_1' },
    ma_outreachInCareNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_outreachincare_0' },

    ma_careFromAgeSelect: { selector: '#ic_carefromagecode' },
    ma_careToAgeSelect: { selector: '#ic_caretoagecode' },
    ma_durationInCareSelect: { selector: '#ic_durationincarecode' },

    ma_youngCarerYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_youngcarer_1' },
    ma_youngCarerNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_youngcarer_0' },

    ma_moreDetailsInput: { selector: '#ic_carerdetails' },

    ma_firstGenerationYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_firstgeneration_1' },
    ma_firstGenerationNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_firstgeneration_0' },

    ma_firstGenerationRelationshipInput: { selector: '#ic_firstgenrelationship' },
    ma_firstGenerationOccupationInput: { selector: '#ic_firstgenoccupation' },

    ma_firstGenerationGuardianYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_firstgenguardian_1' },
    ma_firstGenerationGuardianNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_firstgenguardian_0' },

    ma_firstGenerationUniversityInput: { selector: '#ic_firstgenuni' },
    ma_firstGenerationLevelInput: { selector: '#ic_firstgenlevel' },
    ma_firstGenerationSubjectInput: { selector: '#ic_firstgensubject' },

    ma_outreachEstrangedYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_outreachestranged_1' },
    ma_outreachEstrangedNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_outreachestranged_0' },

    ma_gTRSBSelect: { selector: '#ic_gtrsbcode' },
    ma_refugeeOrAsylumSeekerSelect: { selector: '#ic_refugeeasylumcode' },

    ma_militaryFamilyYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_militaryfamily_1' },
    ma_militaryFamilyNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_militaryfamily_0' },

    ma_veteranYesRadio: { role: 'radio', name: 'Yes', exact: false, id: '#ic_veteran_1' },
    ma_veteranNoRadio: { role: 'radio', name: 'No', exact: false, id: '#ic_veteran_0' },

    ma_nextButton: '#NextButton',
  }
};
