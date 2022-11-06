// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
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
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'no-multiple-empty-lines': [1, { max: 1 }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', { code: 120 }],
    'prettier/prettier': 'error', // eslint내에서 prettier 돌아갈떄 prettier규칙에 맞지 않는 요소는 error로
    'no-useless-escape': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
