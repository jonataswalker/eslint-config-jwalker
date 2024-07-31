import { common, jsonc, node, typescript } from './config/index.js'

/** @type {import("eslint").Linter.Config} */
export default [
    ...common,
    ...node,
    ...typescript,
    ...jsonc,
    { ignores: ['**/*.d.{ts,tsx,cts,mts}'] },
    {
        rules: {},
    },
]
