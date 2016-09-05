# eslint-config-jwalker
Shareable ESLint config


## Install

```sh
npm i --save-dev eslint-config-jwalker
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

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
