import node from 'eslint-plugin-n'
import security from 'eslint-plugin-security'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        // @ts-ignore
        name: 'node:recommended',
        plugins: { n: node },

        rules: {
            ...node.configs['flat/recommended'].rules,
        },
    },
    {
        // @ts-ignore
        name: 'security:recommended',
        plugins: { security },

        rules: {
            ...security.configs.recommended.rules,
        },
    },
    {
        // @ts-ignore
        name: 'jwalker:node',
        rules: {
            'security/detect-object-injection': 'off',
            'n/file-extension-in-import': ['error', 'always'],
            'n/prefer-promises/dns': 'error',
            'n/prefer-promises/fs': 'error',
            'no-restricted-globals': [
                'error',
                {
                    message: 'Import Buffer from `node:buffer` instead',
                    name: 'Buffer',
                },
                {
                    message: 'Import process from `node:process` instead',
                    name: 'process',
                },
                {
                    message: 'Import setTimeout from `node:timers` instead',
                    name: 'setTimeout',
                },
                {
                    message: 'Import setInterval from `node:timers` instead',
                    name: 'setInterval',
                },
                {
                    message: 'Import setImmediate from `node:timers` instead',
                    name: 'setImmediate',
                },
                {
                    message: 'Import clearTimeout from `node:timers` instead',
                    name: 'clearTimeout',
                },
                {
                    message: 'Import clearInterval from `node:timers` instead',
                    name: 'clearInterval',
                },
                {
                    message: 'Import clearImmediate from `node:timers` instead',
                    name: 'clearImmediate',
                },
            ],
        },
    },
]
