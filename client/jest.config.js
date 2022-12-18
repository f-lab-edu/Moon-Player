/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // jsdom으로 수정
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'], // setupTest를 이용하여 환경 설정
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\\/]+$"],
};