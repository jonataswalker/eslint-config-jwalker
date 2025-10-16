import { log } from 'node:console'

import { bar } from './export.js'
import doc from './file.json' with { type: 'json' }

log({ doc }, bar)
