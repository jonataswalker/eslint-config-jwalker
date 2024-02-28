import node from 'eslint-plugin-n'
import pluginSecurity from 'eslint-plugin-security'
import globals from 'globals'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    node.configs['flat/recommended'],
    pluginSecurity.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                NodeJS: 'readonly',
            },
        },
        rules: {
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
