module.exports = {
  testEnvironment: 'jsdom', // jsdom으로 수정
  testPathIgnorePatterns: [ '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'], // setupTest를 이용하여 환경 설정
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  modulePaths: ["<rootDir>/src/"]
};
