// jest에서 읽기위해 트랜스컴파일 해줘야함
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
};