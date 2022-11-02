import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from 'store/feature/auth/UserSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const authReducer = combineReducers({
  user: UserSlice.reducer,
});
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

export default persistReducer(persistConfig, authReducer);
