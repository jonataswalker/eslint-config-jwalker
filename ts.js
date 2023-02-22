module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:import/typescript',
                'airbnb-typescript/base',
                'plugin:@typescript-eslint/recommended',
                'jwalker/ts-for-js',
            ],
            plugins: ['import'],
            rules: {
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    { enforceForJSX: true, allowShortCircuit: true, allowTernary: true },
                ],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        args: 'after-used',
                        caughtErrors: 'all',
                        varsIgnorePattern: '^ignore$',
                        argsIgnorePattern: '^ignore$',
                    },
                ],
                '@typescript-eslint/no-shadow': [
                    'error',
                    {
                        builtinGlobals: true,
                        allow: [
                            'defaultStatus',
                            'event',
                            'find',
                            'length',
                            'name',
                            'status',
                            'resolve',
                            'reject',
                            'done',
                        ],
                    },
                ],
                '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
                '@typescript-eslint/no-meaningless-void-operator': ['error', { checkNever: true }],
                '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
                'import/extensions': ['error', 'never'],
            },

            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx'],
                },
            },
        },
    ],
    ignorePatterns: ['*.d.ts'],
};
