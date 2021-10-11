const general = require('./rules/general');
const unicorn = require('./rules/unicorn');
const bestPractices = require('./rules/best-practices');
const importRules = require('./rules/import');

const rules = { ...general, ...unicorn, ...bestPractices, ...importRules };

module.exports = {
    env: {
        es2021: true,
        'shared-node-browser': true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    reportUnusedDisableDirectives: true,
    ignorePatterns: [
        '!.*',
        '.git/',
        'node_modules/',
        '.npm/',
        'vendor/',
        'lib-cov/',
        'coverage/',
        '.nyc_output/',
        '.cache/',
        'build/',
        'dist/',
        'tmp/',
        '**/*.min.*',
    ],
    rules,
    plugins: ['security', 'import', 'sonarjs'],
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'airbnb-base/whitespace',
        'plugin:no-unsanitized/DOM',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'plugin:array-func/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:security/recommended',
    ],
};
