import dotenv from 'dotenv';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { server } from './src/mocks/server/server.js';
import './src/styles/GlobalStyle';
dotenv.config({ path: '.env' });

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add dring the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
