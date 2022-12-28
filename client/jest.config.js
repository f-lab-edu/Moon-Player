module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": ["jest-transform-css", { modules: true }]
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7).*/"],
  modulePaths: ['<rootDir>/src/'],
 
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
