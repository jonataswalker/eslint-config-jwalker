module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'require-await': 'off',
        'no-return-await': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/return-await': ['error', 'always'],
        'no-void': ['error', { allowAsStatement: true }],

        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
            'error',
            { allowComparingNullableBooleansToTrue: false },
        ],

        '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
                allowNumber: true,
                allowBoolean: false,
                allowAny: true,
                allowNullish: false,
            },
        ],

        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['strictCamelCase'],
            },
            {
                selector: 'function',
                format: ['strictCamelCase', 'StrictPascalCase'],
            },
            {
                selector: ['typeLike', 'enumMember'],
                format: ['StrictPascalCase'],
            },
            {
                selector: ['variable', 'parameter', 'property', 'accessor'],
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'has', 'are', 'can', 'should', 'did', 'will'],
            },
            {
                selector: 'property',
                format: null,
                filter: {
                    regex: '^(logger|exposeHeadRoutes|useUnifiedTopology|prettyPrint|success)$',
                    match: true,
                },
            },
        ],
    },
};
