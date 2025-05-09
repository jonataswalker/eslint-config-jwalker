import format from 'eslint-plugin-format'

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        name: 'jwalker:formatters',
        files: ['**/*.css'],
        languageOptions: {
            parser: format.parserPlain,
        },
        plugins: { format },
        rules: {
            'format/prettier': ['error', { parser: 'css', tabWidth: 4 }],
        },
    },
]
