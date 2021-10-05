module.exports = {
    rules: {
        'import/no-unused-modules': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended', 'jwalker/ts-for-js'],
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

                '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
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
                        allow: ['defaultStatus', 'event', 'find', 'length', 'name', 'status'],
                    },
                ],
                '@typescript-eslint/member-ordering': 'off',
                '@typescript-eslint/no-type-alias': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-restricted-imports': 'off',
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
                node: {
                    tryExtensions: ['.mjs', '.cjs', '.js', '.json', '.node', '.ts', '.d.ts'],
                },
            },
        },
    ],
    ignorePatterns: ['*.d.ts'],
};
