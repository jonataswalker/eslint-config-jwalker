import { config, parser, plugin } from 'typescript-eslint'

import { tsRecommendedTypeCheckedRules, tsDisableTypeCheckedRules, tsStrictTypeCheckedRules } from './utils.js'
import { GLOB_JSX, GLOB_TSX, GLOB_JS, GLOB_TS } from './constants.js'

/** @type {import('typescript-eslint').Config} */
export default config(
    {
        rules: {
            ...tsRecommendedTypeCheckedRules,
            ...tsStrictTypeCheckedRules,

            '@typescript-eslint/no-unused-expressions': [
                'error',
                { allowShortCircuit: true, enforceForJSX: true, allowTernary: true },
            ],
            '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
            '@typescript-eslint/no-use-before-define': ['error', { functions: false, variables: true, classes: false }],
            '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],

            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
            '@typescript-eslint/no-confusing-void-expression': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',

            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/no-implied-eval': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/unbound-method': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/no-shadow': 'error',
            'no-unused-expressions': 'off',
            'no-use-before-define': 'off',
            'jsdoc/require-jsdoc': 'off',
            'no-shadow': 'off',

        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                projectService: true,
            },
            parser,
        },
        name: 'jwalker:ts:recommended-type-checked + strict-type-checked + custom',

        plugins: { '@typescript-eslint': plugin },

        files: [GLOB_TS, GLOB_TSX],
    },

    {
        rules: {
            ...tsDisableTypeCheckedRules,
        },
        // disable type-aware linting on JS files
        name: 'jwalker:ts:disable-type-checked',
        files: [GLOB_JS, GLOB_JSX, '**/*.d.ts'],
    },
    {
        rules: {
            'eslint-comments/no-unlimited-disable': 'off',
            'import-x/no-duplicates': 'off',
            'no-restricted-syntax': 'off',
        },
        name: 'jwalker:ts:dts-overrides',
        files: ['**/*.d.ts'],
    },
)
