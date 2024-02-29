import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'
import unicorn from 'eslint-plugin-unicorn'
import promise from 'eslint-plugin-promise'
import style from '@stylistic/eslint-plugin'
import * as sonarjs from 'eslint-plugin-sonarjs'
import * as importPlugin from 'eslint-plugin-i'
import comments from 'eslint-plugin-eslint-comments'
import { default as arrayFunc } from 'eslint-plugin-array-func'

const config = style.configs.customize({
    flat: true,
    indent: 4,
    jsx: true,
    quotes: 'single',
    semi: false,
})

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        // @ts-ignore
        name: '@eslint/js:recommended',

        rules: {
            ...js.configs.recommended.rules,
        },
    },
    {
        // @ts-ignore
        name: 'array-func:recommended',
        plugins: { 'array-func': arrayFunc },

        rules: {
            ...arrayFunc.configs.all.rules,
        },
    },
    {
        // @ts-ignore
        name: 'jsdoc:recommended',
        plugins: { jsdoc },

        rules: {
            ...jsdoc.configs['flat/recommended'].rules,
        },
    },
    {
        // @ts-ignore
        name: 'eslint-comments:recommended',
        plugins: { 'eslint-comments': comments },

        rules: {
            ...comments.configs.recommended.rules,
        },
    },
    {
        // @ts-ignore
        name: 'jwalker:import',
        plugins: { import: importPlugin },

        rules: {
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
            'import/order': [
                'error',
                {
                    'groups': ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
        },
    },
    {
        // @ts-ignore
        name: 'unicorn:recommended',
        plugins: { unicorn },

        rules: {
            ...unicorn.configs['flat/recommended'].rules,
        },
    },
    {
        // @ts-ignore
        name: 'promise:recommended',
        plugins: { promise },

        rules: {
            ...promise.configs.recommended.rules,
        },
    },
    {
        // @ts-ignore
        name: 'sonarjs:recommended',
        plugins: { sonarjs },

        rules: {
            ...sonarjs.configs.recommended.rules,
        },
    },
    {
        // @ts-ignore
        name: '@stylistic:recommended',
        plugins: { '@stylistic': style },

        rules: {
            ...style.configs['recommended-flat'].rules,
            ...style.configs['disable-legacy'].rules,
            ...config.rules,
        },
    },
]
