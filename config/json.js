import parser from 'jsonc-eslint-parser'
import pluginJsonc from 'eslint-plugin-jsonc'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from './constants.js'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        // @ts-ignore
        name: 'jwalker:json:recommended custom',
        files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
        plugins: { jsonc: pluginJsonc },

        languageOptions: { parser },

        rules: {
            ...pluginJsonc.configs['recommended-with-json'].rules,

            'jsonc/indent': ['error', 4],
        },
    },
]
