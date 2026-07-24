import assert from 'node:assert'
import { it, describe } from 'node:test'

import { ESLint } from 'eslint'

import disabled from '../config/disabled.js'

const eslint = new ESLint()

const FIXTURES = {
    css: 'lint/file.css',
    html: 'lint/file.html',
    js: 'lint/export.js',
    json: 'lint/file.json',
    ts: 'lint/export.ts',
}

const severityOf = (value) => (Array.isArray(value) ? value[0] : value)

const resolveRule = (config, name) => {
    const index = name.lastIndexOf('/')
    const namespace = index === -1 ? '@' : name.slice(0, index)
    const short = index === -1 ? name : name.slice(index + 1)

    return config.plugins?.[namespace]?.rules?.[short]
}

const replacementOf = (rule) => {
    const deprecated = rule?.meta?.deprecated
    const replacedBy = (typeof deprecated === 'object' ? deprecated.replacedBy : null) ?? []

    return replacedBy
        .map((entry) => (typeof entry === 'string' ? entry : entry?.rule?.name ?? '?'))
        .join(', ')
}

const deprecatedIn = (config) => Object.entries(config.rules)
    .filter(([, value]) => severityOf(value) !== 0)
    .map(([name]) => ({ name, rule: resolveRule(config, name) }))
    .filter(({ rule }) => Boolean(rule?.meta?.deprecated))
    .map(({ name, rule }) => `${name} -> ${replacementOf(rule) || 'no replacement listed'}`)

const authoredDisabled = disabled.flatMap((entry) => Object.keys(entry.rules ?? {}))

describe('composed config', () => {
    it('resolves a config for every supported file type', async () => {
        for (const [label, file] of Object.entries(FIXTURES)) {
            const config = await eslint.calculateConfigForFile(file)
            const enabled = Object.values(config.rules).filter((value) => severityOf(value) !== 0)

            assert.ok(enabled.length > 0, `${label} (${file}) resolved no enabled rules`)
        }
    })

    it('applies the matching prettier parser to css and html', async () => {
        const expected = { css: 'css', html: 'html' }

        for (const [label, parser] of Object.entries(expected)) {
            const config = await eslint.calculateConfigForFile(FIXTURES[label])
            const rule = config.rules['format/prettier']

            assert.ok(rule, `format/prettier is not configured for ${label}`)
            assert.equal(rule[1].parser, parser)
        }
    })

    it('does not format javascript through prettier', async () => {
        const config = await eslint.calculateConfigForFile(FIXTURES.js)

        assert.ok(!Object.hasOwn(config.rules, 'format/prettier'))
    })
})

describe('disabled preset', () => {
    it('references only rules that exist', async () => {
        const config = await eslint.calculateConfigForFile(FIXTURES.ts)
        const missing = authoredDisabled.filter((name) => !resolveRule(config, name))

        assert.deepEqual(missing, [], `unknown rule names in disabled.js: ${missing.join(', ')}`)
    })

    it('wins over every preset it is composed after', async () => {
        const config = await eslint.calculateConfigForFile(FIXTURES.ts)

        const stillOn = authoredDisabled.filter(
            (name) => Object.hasOwn(config.rules, name) && severityOf(config.rules[name]) !== 0,
        )

        assert.deepEqual(stillOn, [], `disabled.js did not take effect for: ${stillOn.join(', ')}`)
    })
})

describe('rule health', () => {
    it('enables no deprecated rule', async () => {
        const found = new Set()

        for (const file of [FIXTURES.ts, FIXTURES.js]) {
            const config = await eslint.calculateConfigForFile(file)

            deprecatedIn(config).forEach((entry) => found.add(entry))
        }

        const listed = Array.from(found)

        assert.deepEqual(listed, [], `deprecated rules are enabled:\n${listed.join('\n')}`)
    })
})
