/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        rules: {
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',

            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/naming-convention': 'off',

            '@typescript-eslint/no-magic-numbers': 'off',
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/no-type-alias': 'off',
            'promise/no-callback-in-promise': 'off',
            'unicorn/prefer-dom-node-remove': 'off',
            'unicorn/prefer-dom-node-append': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/prefer-query-selector': 'off',
            'unicorn/no-unused-properties': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-process-exit': 'off',
            'unicorn/no-array-reduce': 'off',

            'class-methods-use-this': 'off',
            'max-lines-per-function': 'off',
            'promise/always-return': 'off',
            'unicorn/no-empty-file': 'off',
            'unicorn/prefer-spread': 'off',
            'no-underscore-dangle': 'off',
            'unicorn/import-style': 'off',
            'no-process-exit': 'off',
            'unicorn/no-null': 'off',
            'sort-imports': 'off',
            'func-names': 'off',
        },
        name: 'jwalker:disabled',
    },

]
