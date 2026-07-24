import format from 'eslint-plugin-format'
import { defineConfig } from 'eslint/config'

import { GLOB_CSS, GLOB_HTML } from './constants.js'

export default defineConfig([
    {
        files: [GLOB_CSS],
        languageOptions: {
            parser: format.parserPlain,
        },
        name: 'jwalker:formatters:css',
        plugins: { format },
        rules: {
            'format/prettier': ['error', { parser: 'css', tabWidth: 4 }],
        },
    },
    {
        files: [GLOB_HTML],
        languageOptions: {
            parser: format.parserPlain,
        },
        name: 'jwalker:formatters:html',
        plugins: { format },
        rules: {
            'format/prettier': ['error', { parser: 'html', tabWidth: 4 }],
        },
    },
])
