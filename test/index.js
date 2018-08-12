'use strict';

const eslint = require('eslint');
const rules = require('../src').rules;

const report = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: '.eslintrc.js'
}).executeOnFiles([
  'src/index.js',
  'test/index.js'
]);

report.results.forEach((value, key) => {
  console.log(`=> ${ key }
    Errors: ${ value.errorCount }
    Fixable: ${ value.fixableErrorCount }
    Warnings: ${ value.warningCount }
  `);
});
