import pluginUnusedImports from 'eslint-plugin-unused-imports'
import perfectionist from 'eslint-plugin-perfectionist'
import * as importPlugin from 'eslint-plugin-import-x'
import comments from 'eslint-plugin-eslint-comments'
import arrayFunc from 'eslint-plugin-array-func'
import style from '@stylistic/eslint-plugin'
import unicorn from 'eslint-plugin-unicorn'
import promise from 'eslint-plugin-promise'
import jsdoc from 'eslint-plugin-jsdoc'
import js from '@eslint/js'

const config = style.configs.customize({
    quoteProps: 'consistent-as-needed',
    commaDangle: 'always-multiline',
    quotes: 'single',
    semi: false,
    flat: true,
    indent: 4,
    jsx: true,
})

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        rules: {
            ...js.configs.recommended.rules,
        },
        name: '@eslint/js:recommended',
    },
    {
        rules: {
            ...arrayFunc.configs.all.rules,
        },
        plugins: { 'array-func': arrayFunc },
        name: 'array-func:recommended',
    },
    {
        rules: {
            ...jsdoc.configs['flat/recommended'].rules,
        },
        name: 'jsdoc:recommended',
        plugins: { jsdoc },
    },
    {
        rules: {
            ...comments.configs.recommended.rules,
        },
        plugins: { 'eslint-comments': comments },
        name: 'eslint-comments:recommended',
    },
    {
        rules: {
            'import-x/order': [
                'error',
                {
                    'groups': [
                        'builtin',
                        'external',
                        'internal',
                        'unknown',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                },
            ],
            'import-x/no-unresolved': [
                'error',
                // node builtins
                { ignore: [String.raw`^node(:\w+)?$`] },
            ],
            'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'import-x/no-named-as-default-member': 'error',
            'import-x/no-useless-path-segments': 'error',
            'import-x/no-named-as-default': 'error',
            'import-x/no-mutable-exports': 'error',
            'import-x/no-self-import': 'error',
            'import-x/no-duplicates': 'error',
            'import-x/default': 'error',
            'import-x/export': 'error',
            'import-x/named': 'error',
            'import-x/first': 'error',
        },
        plugins: { 'import-x': importPlugin },
        name: 'jwalker:import-x',
    },
    {
        rules: {
            ...unicorn.configs.recommended.rules,
        },
        name: 'unicorn:recommended',
        plugins: { unicorn },
    },
    {
        rules: {
            ...perfectionist.configs['recommended-line-length'].rules,
            'perfectionist/sort-array-includes': [
                'error',
                {
                    type: 'line-length',
                    ignoreCase: true,
                    order: 'desc',
                },
            ],
        },
        name: 'perfectionist:recommended-line-length',
        plugins: { perfectionist },

    },
    {
        rules: {
            ...promise.configs.recommended.rules,
        },
        name: 'promise:recommended',
        plugins: { promise },
    },
    {
        rules: {
            'unused-imports/no-unused-vars': [
                'error',
                {
                    ignoreRestSiblings: true,
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    vars: 'all',
                },
            ],
            'unused-imports/no-unused-imports': 'error',
        },
        plugins: { 'unused-imports': pluginUnusedImports },
        name: 'unused-imports:rules',
    },
    {
        rules: {
            ...style.configs.recommended.rules,
            ...style.configs['disable-legacy'].rules,
            ...config.rules,
            '@stylistic/padding-line-between-statements': [
                'error',
                { blankLine: 'always', next: 'for', prev: '*' },
                { blankLine: 'always', next: 'try', prev: '*' },
                { blankLine: 'always', next: 'class', prev: '*' },
                { blankLine: 'always', next: 'throw', prev: '*' },
                { blankLine: 'always', next: 'return', prev: '*' },
                { blankLine: 'always', next: 'export', prev: '*' },
                { blankLine: 'always', next: 'function', prev: '*' },
                { blankLine: 'always', next: 'block-like', prev: '*' },
                { prev: ['case', 'default'], blankLine: 'always', next: '*' },
                { prev: ['const', 'let', 'var'], blankLine: 'always', next: '*' },
                { prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'], blankLine: 'any' },
            ],
            '@stylistic/max-len': [
                'error',
                {
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true,
                    ignoreComments: true,
                    ignoreStrings: true,
                    ignoreUrls: true,
                    tabWidth: 4,
                    code: 100,
                },
            ],
            '@stylistic/max-statements-per-line': [
                'error',
                { ignoredNodes: ['BreakStatement'], max: 2 },
            ],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/curly-newline': ['error', { consistent: true, multiline: true }],
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/arrow-parens': ['error', 'always'],
        },
        plugins: { '@stylistic': style },
        name: '@stylistic:recommended',
    },
]
