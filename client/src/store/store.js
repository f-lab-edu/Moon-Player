import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './reducers/musicReducer';
import { authReducer } from './reducers/authReducer';
export const store = configureStore({
  reducer: {
    musicReducer,
    authReducer,
  },
});
