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
  
};
