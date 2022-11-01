// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: [1, 'single'],
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': [1, { max: 1 }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', { code: 120 }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-useless-escape': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
