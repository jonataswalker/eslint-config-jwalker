import js from '@eslint/js'
import promise from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import style from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import arrayFunc from 'eslint-plugin-array-func'
import comments from 'eslint-plugin-eslint-comments'
import * as importPlugin from 'eslint-plugin-import-x'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

const config = style.configs.customize({
    commaDangle: 'always-multiline',
    flat: true,
    indent: 4,
    jsx: true,
    quoteProps: 'consistent-as-needed',
    quotes: 'single',
    semi: false,
})

export default defineConfig([
    {
        name: '@eslint/js:recommended',
        rules: {
            ...js.configs.recommended.rules,
        },
    },
    {
        name: 'array-func:recommended',
        plugins: { 'array-func': arrayFunc },
        rules: {
            ...arrayFunc.configs.all.rules,
        },
    },
    {
        name: 'eslint-comments:recommended',
        plugins: { 'eslint-comments': comments },
        rules: {
            ...comments.configs.recommended.rules,
        },
    },
    {
        name: 'jwalker:import-x',
        plugins: { 'import-x': importPlugin },
        rules: {
            'import-x/default': 'error',
            'import-x/export': 'error',
            'import-x/first': 'error',
            'import-x/named': 'error',
            'import-x/no-duplicates': 'error',
            'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'import-x/no-mutable-exports': 'error',
            'import-x/no-named-as-default': 'error',
            'import-x/no-named-as-default-member': 'error',
            'import-x/no-self-import': 'error',
            'import-x/no-unresolved': [
                'error',
                // node builtins
                { ignore: [String.raw`^node(:\w+)?$`] },
            ],
            'import-x/no-useless-path-segments': 'error',
        },
    },
    {
        name: 'unicorn:recommended',
        plugins: { unicorn },
        rules: {
            ...unicorn.configs.recommended.rules,
        },
    },
    {
        name: 'perfectionist:recommended-line-length',
        plugins: { perfectionist },
        rules: {
            'perfectionist/sort-array-includes': [
                'error',
                {
                    ignoreCase: true,
                    order: 'asc',
                    type: 'line-length',
                },
            ],
            'perfectionist/sort-exports': [
                'error',
                {
                    fallbackSort: { order: 'asc', type: 'alphabetical' },
                    newlinesBetween: 'ignore',
                    order: 'asc',
                    type: 'line-length',
                },
            ],
            'perfectionist/sort-imports': [
                'error',
                {
                    environment: 'node',
                    fallbackSort: { order: 'asc', type: 'alphabetical' },
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'type',
                        ['parent-type', 'sibling-type', 'index-type', 'internal-type'],
                    ],
                    internalPattern: ['^~/.+', '^@/.+', '^#[a-zA-Z].+'],
                    newlinesBetween: 1,
                    order: 'asc',
                    type: 'line-length',
                },
            ],
            'perfectionist/sort-interfaces': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-jsx-props': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-maps': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-object-types': ['error', { order: 'asc', type: 'natural' }],
            'perfectionist/sort-objects': ['error', { order: 'asc', type: 'natural' }],
            'perfectionist/sort-sets': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-union-types': ['error', { order: 'asc', type: 'line-length' }],
            'perfectionist/sort-variable-declarations': ['error', { order: 'asc', type: 'line-length' }],
        },

    },
    {
        name: 'promise:recommended',
        plugins: { promise },
        rules: {
            ...promise.configs.recommended.rules,
        },
    },
    {
        name: 'unused-imports:rules',
        plugins: { 'unused-imports': pluginUnusedImports },
        rules: {
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    vars: 'all',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        name: '@stylistic:recommended',
        plugins: { '@stylistic': style },
        rules: {
            ...style.configs.recommended.rules,
            ...style.configs['disable-legacy'].rules,
            ...config.rules,
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/arrow-parens': ['error', 'always'],
            '@stylistic/curly-newline': ['error', { consistent: true, multiline: true }],
            '@stylistic/max-len': [
                'error',
                {
                    code: 100,
                    ignoreComments: true,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreUrls: true,
                    tabWidth: 4,
                },
            ],
            '@stylistic/max-statements-per-line': [
                'error',
                { ignoredNodes: ['BreakStatement'], max: 2 },
            ],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
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
                { blankLine: 'always', next: '*', prev: ['case', 'default'] },
                { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
                { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
            ],
        },
    },
])
