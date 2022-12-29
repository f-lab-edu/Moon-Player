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
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper:{
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",

  },
 
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
