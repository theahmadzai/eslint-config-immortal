module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [ 'eslint:recommended' ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: require('./src').rules
};
