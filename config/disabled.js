import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        name: 'jwalker:disabled',
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',

            '@typescript-eslint/no-type-alias': 'off',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            'class-methods-use-this': 'off',
            'func-names': 'off',
            'max-lines-per-function': 'off',
            'no-process-exit': 'off',
            'no-underscore-dangle': 'off',
            'promise/always-return': 'off',
            'promise/no-callback-in-promise': 'off',
            'sort-imports': 'off',
            'unicorn/import-style': 'off',

            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-empty-file': 'off',
            'unicorn/no-null': 'off',
            'unicorn/no-process-exit': 'off',
            'unicorn/no-unused-properties': 'off',
            'unicorn/prefer-dom-node-append': 'off',
            'unicorn/prefer-dom-node-remove': 'off',
            'unicorn/prefer-query-selector': 'off',
            'unicorn/prefer-spread': 'off',
            'unicorn/prevent-abbreviations': 'off',
        },
    },
])
