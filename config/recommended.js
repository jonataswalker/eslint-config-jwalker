import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'
import unicorn from 'eslint-plugin-unicorn'
import promise from 'eslint-plugin-promise'
import style from '@stylistic/eslint-plugin'
import * as sonarjs from 'eslint-plugin-sonarjs'
import * as importPlugin from 'eslint-plugin-import-x'
import comments from 'eslint-plugin-eslint-comments'
import { default as arrayFunc } from 'eslint-plugin-array-func'

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
            ...unicorn.configs['flat/recommended'].rules,
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
            ...style.configs['recommended-flat'].rules,
            ...style.configs['disable-legacy'].rules,
            ...config.rules,
        },
    },
]
