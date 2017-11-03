module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'array-bracket-spacing': 2,
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-dangle': [2, 'only-multiline'],
    'comma-style': 2,
    'complexity': [1, 20],
    'curly': [2, 'multi-line'],
    'default-case': 1,
    'eol-last': 2,
    'eqeqeq': [2, 'smart'],
    'func-call-spacing': [2, 'never'],
    'indent': [2, 2, { VariableDeclarator: 2, SwitchCase: 1 }],
    'key-spacing': 0,
    'keyword-spacing': 2,
    'max-depth': [1, 5],
    'max-len': [2, 80, 2, { ignoreUrls: true }],
    'no-alert': 2,
    'no-class-assign': 2,
    'no-caller': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-mixed-spaces-and-tabs': [2, false],
    'no-multiple-empty-lines': 2,
    'no-multi-spaces': [
      2,
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true,
          AssignmentExpression: true
        }
      }
    ],
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 1,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-shadow': [
      2,
      {
        allow: ['resolve', 'reject', 'done', 'next', 'cb', 'i', 'err', 'error']
      }
    ],
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unneeded-ternary': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-negation': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-whitespace-before-property': 2,
    'no-with': 2,
    // 'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'object-curly-spacing': [2, 'always'],
    'quotes': [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'rest-spread-spacing': [2, 'never'],
    'semi': [2, 'always', { omitLastInOneLineBlock: true }],
    'semi-spacing': 2,
    'strict': [2, 'safe'],
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'vars-on-top': 1,
    'wrap-iife': [2, 'any']
  }
};
