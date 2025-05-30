import { common, disabled, formatters, jsonc, node, typescript } from './config/index.js'

/** @type {import("eslint").Linter.Config} */
export default [
    ...common,
    ...node,
    ...typescript,
    ...jsonc,
    ...formatters,
    ...disabled,
    { ignores: ['**/*.d.{ts,tsx,cts,mts}'] },
    {
        rules: {},
    },
]
