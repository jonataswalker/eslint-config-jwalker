/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        name: 'jwalker:disabled',
        rules: {
            'func-names': 'off',
            'no-process-exit': 'off',
            'no-underscore-dangle': 'off',
            'class-methods-use-this': 'off',
            'max-lines-per-function': 'off',

            'promise/always-return': 'off',
            'promise/no-callback-in-promise': 'off',

            'unicorn/no-null': 'off',
            'unicorn/import-style': 'off',
            'unicorn/no-empty-file': 'off',
            'unicorn/prefer-spread': 'off',
            'unicorn/no-process-exit': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-unused-properties': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/prefer-query-selector': 'off',
            'unicorn/prefer-dom-node-remove': 'off',
            'unicorn/prefer-dom-node-append': 'off',

            '@typescript-eslint/no-type-alias': 'off',
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        },
    },

]
