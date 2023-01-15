module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts','<rootDir>/src/mocks/settings/matchMedia/index.js','<rootDir>/src/mocks/settings/msw/index.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": ["jest-transform-css", { modules: true }]
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper:{
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
 
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
