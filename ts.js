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
                '@typescript-eslint/no-magic-numbers': [
                    'error',
                    {
                        ignore: [0, 1],
                        enforceConst: true,
                        ignoreDefaultValues: true,
                    },
                ],
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
                '@typescript-eslint/prefer-readonly-parameter-types': ['error', { ignoreInferredTypes: true }],
                '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: false }],
                '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
                '@typescript-eslint/no-meaningless-void-operator': ['error', { checkNever: true }],
                '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
                'import/extensions': ['error', 'never'],
                'import/no-unused-modules': ['error', { missingExports: false, unusedExports: true }],
                'import/max-dependencies': ['error', { ignoreTypeImports: true }],
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
