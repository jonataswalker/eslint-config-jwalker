const general = require('./rules/general');
// const vue = require('./rules/vue');

const rules = Object.assign({}, general);

module.exports = {
  rules,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
