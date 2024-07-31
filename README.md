# eslint-config-jwalker

Shareable ESLint config

## Install

```sh
npm i -D eslint-config-jwalker
```

## Usage

```javascript
import { common, typescript, node } from 'eslint-config-jwalker'

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...common,
    ...node,
    ...typescript,
    {
        rules: {
            // override?
            'import-x/extensions': 'off',
        },
    },
]
```

## Presets + Custom Rules

![Screenshot](ESLint-Flat-Config-Viewer.png)
