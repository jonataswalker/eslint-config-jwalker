module.exports = {
    'import/named': 'error',
    'import/first': 'error',
    'import/export': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
        'error',
        'always',
        {
            ignorePackages: true,
            pattern: { ts: 'never', tsx: 'never' },
        },
    ],
    'import/order': [
        'error',
        {
            groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
        },
    ],
};
