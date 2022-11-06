import { combineReducers } from '@reduxjs/toolkit';
import { UserSlice } from 'store/feature/user/UserSlice';

import { music } from './music';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const user = UserSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'music'],
};

export const rootReducer = combineReducers({
  user,
  music,
});

export default persistReducer(persistConfig, rootReducer);
