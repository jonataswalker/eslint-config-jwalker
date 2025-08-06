import node from 'eslint-plugin-n'
import security from 'eslint-plugin-security'

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        plugins: { n: node },
        // @ts-ignore
        name: 'node:recommended',

        rules: {
            ...node.configs['flat/recommended'].rules,
        },
    },
    {
        plugins: { security },
        // @ts-ignore
        name: 'security:recommended',

        rules: {
            ...security.configs.recommended.rules,
        },
    },
    {
        // @ts-ignore
        name: 'jwalker:node',
        rules: {
            'n/prefer-promises/fs': 'error',
            'n/prefer-promises/dns': 'error',
            'security/detect-object-injection': 'off',
            'n/file-extension-in-import': ['error', 'always'],
            'no-restricted-globals': [
                'error',
                {
                    name: 'Buffer',
                    message: 'Import Buffer from `node:buffer` instead',
                },
                {
                    name: 'process',
                    message: 'Import process from `node:process` instead',
                },
                {
                    name: 'setTimeout',
                    message: 'Import setTimeout from `node:timers` instead',
                },
                {
                    name: 'setInterval',
                    message: 'Import setInterval from `node:timers` instead',
                },
                {
                    name: 'setImmediate',
                    message: 'Import setImmediate from `node:timers` instead',
                },
                {
                    name: 'clearTimeout',
                    message: 'Import clearTimeout from `node:timers` instead',
                },
                {
                    name: 'clearInterval',
                    message: 'Import clearInterval from `node:timers` instead',
                },
                {
                    name: 'clearImmediate',
                    message: 'Import clearImmediate from `node:timers` instead',
                },
            ],
        },
    },
]
