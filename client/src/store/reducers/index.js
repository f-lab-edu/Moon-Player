import { combineReducers } from '@reduxjs/toolkit';
import { user } from './user';
import { music } from './music';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
