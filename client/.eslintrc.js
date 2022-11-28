module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['**/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'no-multiple-empty-lines': [1, { max: 1 }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', { code: 120 }],
    'no-useless-escape': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
