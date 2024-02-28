import tseslint from 'typescript-eslint'

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                project: ['./tsconfig.json', './tsconfig.eslint.json'],
            },
        },
        rules: {
            'no-shadow': 'off',
            'no-use-before-define': 'off',
            'no-unused-expressions': 'off',

            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/no-unused-expressions': [
                'error',
                { enforceForJSX: true, allowShortCircuit: true, allowTernary: true },
            ],

            'jsdoc/require-jsdoc': 'off',
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts', '**/*.js', '**/*.jsx'],
        rules: {
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
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/no-confusing-void-expression': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        },
    },
    {
        // disable type-aware linting on JS files
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
)
