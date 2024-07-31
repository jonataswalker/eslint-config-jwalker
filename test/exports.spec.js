import assert from 'node:assert'
import { describe, it } from 'node:test'

import * as E from '../config/index.js'

const isObject = obj => Boolean(obj) && obj.constructor === Object

describe('lib exports', () => {
    it('exports', () => {
        assert.ok(Array.isArray(E.common) && E.common.length > 0)

        assert.ok(Array.isArray(E.common) && E.common.length > 0)

        assert.ok(Array.isArray(E.node) && E.node.length > 0)

        assert.ok(Array.isArray(E.typescript) && E.typescript.length > 0)

        assert.ok(Array.isArray(E.jsonc) && E.jsonc.length > 0)

        assert.ok(isObject(E.tsDisableTypeCheckedRules) && Object.keys(E.tsDisableTypeCheckedRules).length > 0)
    })

    it('exports constants', () => {
        [
            'GLOB_SRC_EXT',
            'GLOB_SRC',
            'GLOB_JS',
            'GLOB_JSX',
            'GLOB_TS',
            'GLOB_TSX',
            'GLOB_JSON',
            'GLOB_JSON',
            'GLOB_JSON5',
            'GLOB_JSONC',
        ].forEach((each) => {
            assert.ok(typeof E[each] === 'string' && E[each].length > 0)
        })

        assert.ok(Array.isArray(E.GLOB_TESTS) && E.GLOB_TESTS.length > 0)
        assert.ok(Array.isArray(E.GLOB_EXCLUDE) && E.GLOB_EXCLUDE.length > 0)
    })
})
