module.exports = {
    'unicorn/filename-case': ['error', { cases: { kebabCase: true, camelCase: true, pascalCase: true } }],
    'unicorn/prevent-abbreviations': [
        'error',
        {
            allowList: {
                args: true,
                ctx: true,
                props: true,
                Props: true,
                req: true,
                res: true,
                evt: true,
                pkg: true,
            },
            ignore: ['\\.e2e$', '\\.e2e-spec$'],
            checkShorthandProperties: true,
        },
    ],
};
