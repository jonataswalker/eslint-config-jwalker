import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'
import unicorn from 'eslint-plugin-unicorn'
import promise from 'eslint-plugin-promise'
import style from '@stylistic/eslint-plugin'
import * as sonarjs from 'eslint-plugin-sonarjs'
import * as importPlugin from 'eslint-plugin-import-x'
import comments from 'eslint-plugin-eslint-comments'
import arrayFunc from 'eslint-plugin-array-func'

const config = style.configs.customize({
    flat: true,
    indent: 4,
    jsx: true,
    quotes: 'single',
    semi: false,
})

/** @type {import("eslint").Linter.Config[]} */
export default [
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
        name: 'jsdoc:recommended',
        plugins: { jsdoc },
        rules: {
            ...jsdoc.configs['flat/recommended'].rules,
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
            'import-x/named': 'error',
            'import-x/first': 'error',
            'import-x/export': 'error',
            'import-x/default': 'error',
            'import-x/no-duplicates': 'error',
            'import-x/no-self-import': 'error',
            'import-x/no-mutable-exports': 'error',
            'import-x/no-named-as-default': 'error',
            'import-x/no-useless-path-segments': 'error',
            'import-x/no-named-as-default-member': 'error',
            'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'import-x/order': [
                'error',
                {
                    'groups': ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
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
        name: 'promise:recommended',
        plugins: { promise },
        rules: {
            ...promise.configs.recommended.rules,
        },
    },
    {
        name: 'sonarjs:recommended',
        plugins: { sonarjs },
        rules: {
            ...sonarjs.configs.recommended.rules,
        },
    },
    {
        name: '@stylistic:recommended',
        plugins: { '@stylistic': style },
        rules: {
            ...style.configs.recommended.rules,
            ...style.configs['disable-legacy'].rules,
            ...config.rules,
            '@stylistic/arrow-parens': ['error', 'always'],
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/curly-newline': ['error', { multiline: true, consistent: true }],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/max-statements-per-line': [
                'error',
                { max: 2, ignoredNodes: ['BreakStatement'] },
            ],
            '@stylistic/max-len': [
                'error',
                {
                    code: 100,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreComments: true,
                    ignoreRegExpLiterals: true,
                    ignoreTemplateLiterals: true,
                },
            ],
            '@stylistic/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: '*', next: 'try' },
                { blankLine: 'always', prev: '*', next: 'class' },
                { blankLine: 'always', prev: '*', next: 'throw' },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'export' },
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: '*', next: 'block-like' },
                { blankLine: 'always', prev: ['case', 'default'], next: '*' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            ],
        },
    },
]
