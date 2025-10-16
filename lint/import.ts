import { log } from 'node:console'

import { bar } from './export.ts'
import doc from './file.json' with { type: 'json' }

import type { Linter } from 'eslint'

log(doc, bar)

export const config: Linter.Config[] = []
