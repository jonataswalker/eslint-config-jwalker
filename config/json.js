import parser from 'jsonc-eslint-parser'
import { defineConfig } from 'eslint/config'
import pluginJsonc from 'eslint-plugin-jsonc'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from './constants.js'

export default defineConfig([
    {
        files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
        languageOptions: { parser },
        name: 'jwalker:json:recommended custom',
        plugins: { jsonc: pluginJsonc },
        rules: {
            ...pluginJsonc.configs['recommended-with-json'].rules,

            'jsonc/array-bracket-spacing': ['error', 'never'],
            'jsonc/comma-dangle': ['error', 'never'],
            'jsonc/comma-style': ['error', 'last'],
            'jsonc/indent': ['error', 4],
            'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
            'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
            'jsonc/object-curly-spacing': ['error', 'always'],
            'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            'jsonc/quote-props': 'error',
            'jsonc/quotes': 'error',
        },
    },
])
