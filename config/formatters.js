import format from 'eslint-plugin-format'

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        files: ['**/*.css'],
        plugins: { format },
        name: 'jwalker:formatters',
        languageOptions: {
            parser: format.parserPlain,
        },
        rules: {
            'format/prettier': ['error', { tabWidth: 4, parser: 'css' }],
        },
    },
]
