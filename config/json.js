import pluginJsonc from 'eslint-plugin-jsonc'
import parser from 'jsonc-eslint-parser'

import { GLOB_JSON5, GLOB_JSONC, GLOB_JSON } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        rules: {
            ...pluginJsonc.configs['recommended-with-json'].rules,

            'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
            'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'jsonc/array-bracket-spacing': ['error', 'never'],
            'jsonc/object-curly-spacing': ['error', 'always'],
            'jsonc/comma-dangle': ['error', 'never'],
            'jsonc/comma-style': ['error', 'last'],
            'jsonc/indent': ['error', 4],
            'jsonc/quote-props': 'error',
            'jsonc/quotes': 'error',
        },
        files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
        name: 'jwalker:json:recommended custom',

        plugins: { jsonc: pluginJsonc },

        languageOptions: { parser },
    },
]
