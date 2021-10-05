module.exports = {
    'unicorn/no-null': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/import-style': 'off',
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
            },
            ignore: ['\\.e2e$', '\\.e2e-spec$'],
            checkShorthandProperties: true,
        },
    ],
};
