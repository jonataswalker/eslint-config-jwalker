import format from 'eslint-plugin-format'

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        rules: {
            'format/prettier': ['error', { parser: 'css', tabWidth: 4 }],
        },
        languageOptions: {
            parser: format.parserPlain,
        },
        name: 'jwalker:formatters',
        files: ['**/*.css'],
        plugins: { format },
    },
]
