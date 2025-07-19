module.exports = {
  default: {
    tags: '@wp',
    require: [
      'support/world.js',
      'src/step-definitions/*.js',
      'src/support/**/*.js',
      'src/step-definitions/**/*.js',
    ],
    paths: ['src/features/*.feature'],
    format: ['json:reports/cucumber-report.json'],
    parallel: 1,
    timeout: 1200000,
  },
};
