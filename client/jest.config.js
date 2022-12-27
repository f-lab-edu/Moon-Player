module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(css|scss|sass|less)$': 'jest-preview/transforms/css',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': 'jest-preview/transforms/file',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  // 트랜스파일 하지않을것
  transformIgnorePatterns: ['/node_modules/(?!swiper|swiper/react|ssr-window|dom7)','^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'},
  modulePaths: ["<rootDir>/src/"],
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
