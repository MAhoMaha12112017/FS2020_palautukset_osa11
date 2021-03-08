module.exports = {
    'env': {
        'node': true,
        'es6': true,
        'browser': true,
        'commonjs': true,
        'es2021': true,
        // 'jest/globals': true,
        // 'cypress/globals': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'plugins': [
        'react'//, 'jest', 'cypress'
    ],
    'parserOptions': {
        'ecmaFeatures': {
          'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error'
    }
}
