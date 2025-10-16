import format from 'eslint-plugin-format'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        files: ['**/*.css'],
        languageOptions: {
            parser: format.parserPlain,
        },
        name: 'jwalker:formatters',
        plugins: { format },
        rules: {
            'format/prettier': ['error', { parser: 'css', tabWidth: 4 }],
        },
    },
])
