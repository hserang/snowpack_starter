module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: false
        },
        ecmaVersion: 2018,
        project: ['./tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: __dirname
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['draft'] }
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/prop-types': 0
    }
};
