//  스토어에 있는 값을 사용하기 위해서 필요한 Provider

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/reducers/index';
function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
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
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
