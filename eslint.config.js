import { common, jsonc, node } from './config/index.js'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    ...common,
    ...node,
    // ...typescript,
    ...jsonc,
    {
        rules: {
            'import/default': 'off',
            'import/export': 'off',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
        },
    },
    {
        files: ['**/*.d.{ts,tsx,cts,mts}'],
        languageOptions: { parserOptions: { project: false } },
    },
]
