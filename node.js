module.exports = {
    extends: ['plugin:node/recommended'],
    rules: {
        'node/prefer-promises/fs': 'error',
        'node/prefer-promises/dns': 'error',
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/file-extension-in-import': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/exports-style': ['error', 'module.exports'],
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                'node/file-extension-in-import': ['error', 'never'],
            },
        },
    ],
};
