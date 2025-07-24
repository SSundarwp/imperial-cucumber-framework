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
};
