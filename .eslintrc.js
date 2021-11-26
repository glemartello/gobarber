module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'eslint-config-prettier',
    ],
    parser: 'babel-eslint',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'jsx-a11y',
        'import',
        'react-hooks',
        'prettier',
        'eslint-plugin-prettier',
    ],
    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-export': 'off',
        'no unused-vars': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no-undercore-dangle': 'off',
        camelcase: 'off',
        'no-console': ['error', { allow: ['tron'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off',
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
};
