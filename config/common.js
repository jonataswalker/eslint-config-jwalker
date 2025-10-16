import { defineConfig } from 'eslint/config'
import gitignore from 'eslint-config-flat-gitignore'

import disabled from './disabled.js'
import common from './javascript.js'
import { GLOB_EXCLUDE } from './constants.js'
import eslintRecommended from './recommended.js'

export default defineConfig([
    gitignore(),
    { ignores: GLOB_EXCLUDE },
    ...eslintRecommended,
    ...disabled,
    ...common,
])
