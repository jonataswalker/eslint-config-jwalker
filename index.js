const general = require('./rules/general.js');
const unicorn = require('./rules/unicorn.js');
const bestPractices = require('./rules/best-practices.js');
const importRules = require('./rules/import.js');

const rules = { ...general, ...unicorn, ...bestPractices, ...importRules };

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
    env: {
        es2022: true,
        'shared-node-browser': true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
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
    plugins: ['promise', 'security', 'import', 'sonarjs'],
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'airbnb-base/whitespace',
        'plugin:no-unsanitized/DOM',
        'plugin:promise/recommended',
        'plugin:array-func/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:security/recommended',
    ],
};
