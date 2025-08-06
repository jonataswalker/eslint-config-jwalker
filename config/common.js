import gitignore from 'eslint-config-flat-gitignore'

import eslintRecommended from './recommended.js'
import { GLOB_EXCLUDE } from './constants.js'
import disabled from './disabled.js'
import common from './javascript.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
    gitignore(),
    { ignores: GLOB_EXCLUDE },
    ...eslintRecommended,
    ...disabled,
    ...common,
]
