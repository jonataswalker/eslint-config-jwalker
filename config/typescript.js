import { config, parser, plugin } from 'typescript-eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './constants.js'
import { tsDisableTypeCheckedRules, tsRecommendedTypeCheckedRules, tsStrictTypeCheckedRules } from './utils.js'

/** @type {import('typescript-eslint').Config} */
export default config(
    {
        name: 'jwalker:ts:recommended-type-checked + strict-type-checked + custom',
        files: [GLOB_TS, GLOB_TSX],
        plugins: { '@typescript-eslint': plugin },

        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                project: ['./tsconfig.json', './tsconfig.eslint.json'],
            },
        },

        rules: {
            ...tsRecommendedTypeCheckedRules,
            ...tsStrictTypeCheckedRules,

            'no-shadow': 'off',
            'jsdoc/require-jsdoc': 'off',
            'no-use-before-define': 'off',
            'no-unused-expressions': 'off',

            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
            '@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
            '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
            '@typescript-eslint/no-unused-expressions': [
                'error',
                { enforceForJSX: true, allowShortCircuit: true, allowTernary: true },
            ],

            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/unbound-method': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/no-implied-eval': 'error',
            '@typescript-eslint/no-throw-literal': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/no-confusing-void-expression': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        },
    },

    {
        // disable type-aware linting on JS files
        name: 'jwalker:ts:disable-type-checked',
        files: [GLOB_JS, GLOB_JSX, '**/*.d.ts'],
        rules: {
            ...tsDisableTypeCheckedRules,
        },
    },
    {
        files: ['**/*.d.ts'],
        name: 'jwalker:ts:dts-overrides',
        rules: {
            'eslint-comments/no-unlimited-disable': 'off',
            'import-x/no-duplicates': 'off',
            'no-restricted-syntax': 'off',
        },
    },
)
