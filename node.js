module.exports = {
    extends: ['plugin:n/recommended'],
    rules: {
        'n/prefer-promises/fs': 'error',
        'n/prefer-promises/dns': 'error',
        'n/prefer-global/url': ['error', 'always'],
        'n/prefer-global/buffer': ['error', 'always'],
        'n/prefer-global/console': ['error', 'always'],
        'n/prefer-global/process': ['error', 'always'],
        'n/file-extension-in-import': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        'n/exports-style': ['error', 'module.exports'],
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                'n/file-extension-in-import': ['error', 'never'],
            },
        },
    ],
};
