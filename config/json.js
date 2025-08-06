import parser from 'jsonc-eslint-parser'
import pluginJsonc from 'eslint-plugin-jsonc'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        languageOptions: { parser },
        plugins: { jsonc: pluginJsonc },
        name: 'jwalker:json:recommended custom',

        files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],

        rules: {
            ...pluginJsonc.configs['recommended-with-json'].rules,

            'jsonc/quotes': 'error',
            'jsonc/indent': ['error', 4],
            'jsonc/quote-props': 'error',
            'jsonc/comma-style': ['error', 'last'],
            'jsonc/comma-dangle': ['error', 'never'],
            'jsonc/array-bracket-spacing': ['error', 'never'],
            'jsonc/object-curly-spacing': ['error', 'always'],
            'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
            'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
            'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        },
    },
]
