import { defineConfig } from 'eslint/config'
import { parser, plugin } from 'typescript-eslint'

import { GLOB_JS, GLOB_TS, GLOB_JSX, GLOB_TSX } from './constants.js'
import { tsStrictTypeCheckedRules, tsDisableTypeCheckedRules, tsRecommendedTypeCheckedRules } from './utils.js'

export default defineConfig([
    {
        files: [GLOB_TS, GLOB_TSX],
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                projectService: true,
            },
        },
        name: 'jwalker:ts:recommended-type-checked + strict-type-checked + custom',
        plugins: { '@typescript-eslint': plugin },
        rules: {
            ...tsRecommendedTypeCheckedRules,
            ...tsStrictTypeCheckedRules,

            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
            '@typescript-eslint/ban-tslint-comment': 'error',

            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-confusing-void-expression': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/no-for-in-array': 'error',

            '@typescript-eslint/no-implied-eval': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                { allowShortCircuit: true, allowTernary: true, enforceForJSX: true },
            ],
            '@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/unbound-method': 'error',
            'no-shadow': 'off',
            'no-unused-expressions': 'off',
            'no-use-before-define': 'off',

        },
    },
    {
        files: [GLOB_JS, GLOB_JSX, '**/*.d.ts'],
        // disable type-aware linting on JS files
        name: 'jwalker:ts:disable-type-checked',
        plugins: { '@typescript-eslint': plugin },
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
])
