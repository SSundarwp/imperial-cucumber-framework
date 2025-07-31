module.exports = {
  default: {
    tags: '@wp or @signup or @valid or @invalid',
    require: [
      'src/support/world.js',
      'src/step-definitions/*.js',
      'src/support/**/*.js',
      'src/step-definitions/**/*.js',
    ],
    paths: ['src/features/**/*.feature'],
    format: ['json:src/reports/cucumber-report.json'],
    parallel: 1,
    timeout: 1800000,
  },
};
