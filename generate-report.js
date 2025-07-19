const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  openReportInBrowser: true,
  displayReportTime: false,
  pageFooter: '                                 Developed by Subash Sundar',

  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: process.platform,
      version: process.version,
    },
  },

  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'GSS OutReach' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Regression' },
      { label: 'Executed By', value: process.env.USER || 'Subash Sundar' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Environment', value: process.env.BASE_URL || 'Staging' },
    ],
  },
});
