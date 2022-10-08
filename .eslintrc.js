// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
    'quotes': [1, 'single'],
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': [1, { max: 1 }],
    'react/react-in-jsx-scope': 'off',
  },
  'settings': {
    react: { version: 'detect' }
  }
}
