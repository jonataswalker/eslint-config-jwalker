import { defineConfig } from 'eslint/config'
import pluginJsonc from 'eslint-plugin-jsonc'
import * as parserJsonc from 'jsonc-eslint-parser'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from './constants.js'

const recommendedRules = Object.assign(
    {},
    ...pluginJsonc.configs['flat/recommended-with-json'].map((c) => c.rules),
)

export default defineConfig([
    {
        files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
        languageOptions: { parser: parserJsonc },
        name: 'jwalker:json:recommended custom',
        plugins: { jsonc: pluginJsonc },
        rules: {
            ...recommendedRules,

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
