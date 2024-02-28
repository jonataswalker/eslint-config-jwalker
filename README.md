# eslint-config-jwalker

Shareable ESLint config

## Install

```sh
# flat config
npm i -D eslint-config-jwalker

# classic config
npm i -D eslint-config-jwalker@8
```

## Usage - Flat Config

```javascript
import tsParser from '@typescript-eslint/parser'
import dwEslintConfig from '@deepwaterv2/eslint-config'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    ...dwEslintConfig,
    { ignores: ['types/*', 'scripts/*', '**/*.d.ts'] },
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['./tsconfig.eslint.json'],
            },
        },
    },
]
```


## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Add this to your `.eslintrc` file (or `package.json`):

```json
{
    "extends": "jwalker"
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
