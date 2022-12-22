//  스토어에 있는 값을 사용하기 위해서 필요한 Provider

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/reducers/index';

export function renderWithProvider(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter> {children}</BrowserRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
