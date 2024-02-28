import path from 'node:path'
import { fileURLToPath } from 'node:url'

import js from '@eslint/js'
import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'
import unicorn from 'eslint-plugin-unicorn'
import arrayFunc from 'eslint-plugin-array-func'
import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'
import gitignore from 'eslint-config-flat-gitignore'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const compat = new FlatCompat({
    baseDirectory: dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    gitignore(),
    js.configs.recommended,
    arrayFunc.configs.all,
    unicorn.configs['flat/recommended'],
    jsdoc.configs['flat/recommended'],
    ...compat.extends('airbnb-base'),
    ...compat.extends('plugin:import/recommended'),
    ...compat.extends('plugin:promise/recommended'),
    ...compat.extends('plugin:sonarjs/recommended'),
    ...compat.extends('plugin:eslint-comments/recommended'),
    stylistic.configs['disable-legacy'],
    stylistic.configs['recommended-flat'],
    stylistic.configs.customize({ indent: 4, quotes: 'single' }),

    {
        ignores: ['dist/**/*', 'coverage/**/*', '**/*.d.ts', '**/*.min.js'],
    },

    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        rules: {
            'sort-vars': 'error',
            'no-undefined': 'error',
            'prefer-const': 'error',
            'no-inline-comments': 'error',
            'max-classes-per-file': 'error',
            'no-negated-condition': 'error',
            'no-duplicate-imports': 'error',
            'prefer-exponentiation-operator': 'error',
            'max-depth': ['error', 4],
            'max-params': ['error', 3],
            'max-statements': ['error', 25],
            'max-nested-callbacks': ['error', 4],
            'object-curly-spacing': ['error', 'always'],
            'new-cap': ['error', { capIsNew: false, properties: false }],
            'max-statements-per-line': ['error', { max: 1 }],
            'object-curly-newline': ['error', { consistent: true }],
            'line-comment-position': ['error', { position: 'above' }],
            'prefer-destructuring': ['error', { object: true, array: false }],
            'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
            'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'always', prev: 'directive', next: '*' },
                { blankLine: 'always', prev: ['for', 'do', 'while'], next: '*' },
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: 'import', next: '*' },
                { blankLine: 'any', prev: 'import', next: 'import' },
                { blankLine: 'always', prev: 'if', next: '*' },
                { blankLine: 'always', prev: 'function', next: '*' },
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: '*', next: 'export' },
            ],
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'SequenceExpression',
                    message: 'The comma operator is confusing and a common mistake. Don’t use it!',
                },
                {
                    selector: 'ForInStatement',
                    message:
                        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                },
                {
                    selector: 'LabeledStatement',
                    message:
                        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                },
                {
                    selector: 'WithStatement',
                    message:
                        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                },
            ],
            'no-unused-vars': [
                'error',
                {
                    caughtErrors: 'all',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
            'no-use-before-define': [
                'error',
                {
                    classes: true,
                    functions: false,
                    variables: true,
                },
            ],
            'id-length': [
                'warn',
                {
                    exceptions: ['_', '$', 'a', 'b', 'c', 'x', 'y', 'z', 'i'],
                    min: 2,
                },
            ],
            'no-shadow': [
                'error',
                { builtinGlobals: false, hoist: 'functions' },
            ],
            'no-useless-rename': [
                'warn',
                {
                    ignoreDestructuring: false,
                    ignoreExport: false,
                    ignoreImport: false,
                },
            ],

            // best practices ?
            'no-labels': 'error',
            'no-eq-null': 'error',
            'no-div-regex': 'error',
            'require-await': 'error',
            'accessor-pairs': 'error',
            'no-useless-call': 'error',
            'no-setter-return': 'error',
            'no-empty-function': 'error',
            'no-implicit-globals': 'error',
            'no-unreachable-loop': 'error',
            'no-implicit-coercion': 'error',
            'no-constructor-return': 'error',
            'no-constant-condition': 'error',
            'grouped-accessor-pairs': 'error',
            'require-atomic-updates': 'error',
            'no-promise-executor-return': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-param-reassign': ['error', { props: false }],
            'no-warning-comments': 'warn',
            'complexity': [1, 20],

            // import
            'import/named': 'error',
            'import/first': 'error',
            'import/export': 'error',
            'import/default': 'error',
            'import/no-duplicates': 'error',
            'import/no-self-import': 'error',
            'import/no-mutable-exports': 'error',
            'import/no-named-as-default': 'error',
            'import/no-useless-path-segments': 'error',
            'import/no-named-as-default-member': 'error',
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'import/extensions': [
                'error',
                'always',
                {
                    ignorePackages: true,
                    pattern: { ts: 'never', tsx: 'never' },
                },
            ],
            'import/order': [
                'error',
                {
                    'groups': ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],

            // unicorn
            'unicorn/filename-case': ['error', { cases: { kebabCase: true, camelCase: true, pascalCase: true } }],
            'unicorn/prefer-module': 'error',

            // stylistic
            '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],

            // disabled
            'func-names': 'off',
            'no-process-exit': 'off',
            'no-underscore-dangle': 'off',
            'class-methods-use-this': 'off',
            'max-lines-per-function': 'off',

            'promise/always-return': 'off',
            'promise/no-callback-in-promise': 'off',

            'import/namespace': 'off',
            'import/exports-last': 'off',
            'import/group-exports': 'off',
            'import/no-deprecated': 'off',
            'import/no-unresolved': 'off',
            'import/no-absolute-path': 'off',
            'import/max-dependencies': 'off',
            'import/no-unused-modules': 'off',
            'import/prefer-default-export': 'off',
            'import/no-anonymous-default-export': 'off',

            'unicorn/no-null': 'off',
            'unicorn/import-style': 'off',
            'unicorn/no-empty-file': 'off',
            'unicorn/prefer-spread': 'off',
            'unicorn/no-process-exit': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-unused-properties': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/prefer-query-selector': 'off',
            'unicorn/prefer-dom-node-remove': 'off',
            'unicorn/prefer-dom-node-append': 'off',

            '@typescript-eslint/no-type-alias': 'off',
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        },
    },
]
