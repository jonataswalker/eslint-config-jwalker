import { common, jsonc, node, typescript } from './config/index.js'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    ...common,
    ...node,
    ...typescript,
    ...jsonc,
    { ignores: ['**/*.d.{ts,tsx,cts,mts}'] },
    {
        rules: {
            'import/default': 'off',
            'import/export': 'off',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
        },
    },
]
