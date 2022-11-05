import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import { PERSIST, PURGE } from 'redux-persist';
export const store = configureStore({
  reducer: rootReducer,

  // PlainObject 이슈제거
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, PURGE],
      },
    }),
});
