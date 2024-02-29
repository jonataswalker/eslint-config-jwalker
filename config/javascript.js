import globals from 'globals'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        // @ts-ignore
        name: 'jwalker:common',

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly',
            },
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                },
            },
        },
        linterOptions: { reportUnusedDisableDirectives: true },
        rules: {
            'sort-vars': 'error',
            'no-undefined': 'error',
            'no-inline-comments': 'error',
            'max-classes-per-file': 'error',
            'no-negated-condition': 'error',
            'no-duplicate-imports': 'error',
            'prefer-exponentiation-operator': 'error',
            'max-depth': ['error', 4],
            'max-params': ['error', 3],
            'max-statements': ['error', 25],
            'max-nested-callbacks': ['error', 4],
            'object-curly-spacing': ['error', 'always'],
            'new-cap': ['error', { capIsNew: false, properties: false }],
            'max-statements-per-line': ['error', { max: 1 }],
            'object-curly-newline': ['error', { consistent: true }],
            'line-comment-position': ['error', { position: 'above' }],
            'prefer-destructuring': ['error', { object: true, array: false }],
            'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
            'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'always', prev: 'directive', next: '*' },
                { blankLine: 'always', prev: ['for', 'do', 'while'], next: '*' },
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: 'import', next: '*' },
                { blankLine: 'any', prev: 'import', next: 'import' },
                { blankLine: 'always', prev: 'if', next: '*' },
                { blankLine: 'always', prev: 'function', next: '*' },
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: '*', next: 'export' },
            ],
            'no-restricted-syntax': [
                'error',
                // {
                //     selector: 'SequenceExpression',
                //     message: 'The comma operator is confusing and a common mistake. Don’t use it!',
                // },
                {
                    selector: 'ForInStatement',
                    message:
                        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                },
                {
                    selector: 'LabeledStatement',
                    message:
                        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                },
                {
                    selector: 'WithStatement',
                    message:
                        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                },
            ],
            'no-unused-vars': [
                'error',
                {
                    caughtErrors: 'all',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
            'no-use-before-define': [
                'error',
                {
                    classes: true,
                    functions: false,
                    variables: true,
                },
            ],
            'no-shadow': [
                'error',
                { builtinGlobals: false, hoist: 'functions' },
            ],
            'no-useless-rename': [
                'warn',
                {
                    ignoreDestructuring: false,
                    ignoreExport: false,
                    ignoreImport: false,
                },
            ],

            // best practices ?
            'no-labels': 'error',
            'no-eq-null': 'error',
            'no-div-regex': 'error',
            'require-await': 'error',
            'accessor-pairs': 'error',
            'no-useless-call': 'error',
            'no-setter-return': 'error',
            'no-empty-function': 'error',
            'no-implicit-globals': 'error',
            'no-unreachable-loop': 'error',
            'no-implicit-coercion': 'error',
            'no-constructor-return': 'error',
            'no-constant-condition': 'error',
            'grouped-accessor-pairs': 'error',
            'require-atomic-updates': 'error',
            'no-promise-executor-return': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-param-reassign': ['error', { props: false }],
            'no-warning-comments': 'warn',
            'complexity': [1, 20],

            // unicorn
            'unicorn/filename-case': ['error', { cases: { kebabCase: true, camelCase: true, pascalCase: true } }],

            // stylistic
            '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],

            'array-callback-return': 'error',
            'block-scoped-var': 'error',
            'constructor-super': 'error',
            'default-case-last': 'error',
            'dot-notation': ['error', { allowKeywords: true }],
            'eqeqeq': ['error', 'smart'],
            'no-alert': 'error',
            'no-array-constructor': 'error',
            'no-async-promise-executor': 'error',
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': ['error', 'always'],
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-const-assign': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-empty-character-class': 'error',
            'no-empty-pattern': 'error',
            'no-eval': 'error',
            'no-ex-assign': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-global-assign': 'error',
            'no-implied-eval': 'error',
            'no-import-assign': 'error',
            'no-invalid-regexp': 'error',
            'no-irregular-whitespace': 'error',
            'no-iterator': 'error',
            'no-lone-blocks': 'error',
            'no-loss-of-precision': 'error',
            'no-misleading-character-class': 'error',
            'no-multi-str': 'error',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-symbol': 'error',
            'no-new-wrappers': 'error',
            'no-obj-calls': 'error',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-proto': 'error',
            'no-prototype-builtins': 'error',
            'no-redeclare': ['error', { builtinGlobals: false }],
            'no-regex-spaces': 'error',
            'no-restricted-globals': [
                'error',
                { message: 'Use `globalThis` instead.', name: 'global' },
                { message: 'Use `globalThis` instead.', name: 'self' },
            ],
            'no-restricted-properties': [
                'error',
                { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
                { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
                { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
                { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
                { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
            ],
            'no-self-assign': ['error', { props: true }],
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-shadow-restricted-names': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-this-before-super': 'error',
            'no-throw-literal': 'error',
            'no-undef': 'error',
            'no-undef-init': 'error',
            'no-unexpected-multiline': 'error',
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-useless-backreference': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-constructor': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-with': 'error',
            'object-shorthand': [
                'error',
                'always',
                {
                    avoidQuotes: true,
                    ignoreConstructors: false,
                },
            ],
            'one-var': ['error', { initialized: 'never' }],
            'prefer-arrow-callback': [
                'error',
                {
                    allowNamedFunctions: false,
                    allowUnboundThis: true,
                },
            ],
            'prefer-const': [
                'error',
                {
                    destructuring: 'all',
                    ignoreReadBeforeAssign: true,
                },
            ],
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'sort-imports': [
                'error',
                {
                    allowSeparatedGroups: false,
                    ignoreCase: false,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                },
            ],

            'symbol-description': 'error',
            'unicode-bom': ['error', 'never'],
            'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
            'valid-typeof': ['error', { requireStringLiterals: true }],
            'vars-on-top': 'error',
            'yoda': ['error', 'never'],

        },
    },
]
