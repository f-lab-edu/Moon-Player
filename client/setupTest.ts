import dotenv from 'dotenv';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import '../client/src/styles/GlobalStyle';
import { server } from './src/mocks/server/server.js';

dotenv.config({ path: '.env' });
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
