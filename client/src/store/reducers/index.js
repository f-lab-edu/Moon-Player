import { combineReducers } from '@reduxjs/toolkit';
import { UserSlice } from 'store/feature/user/UserSlice';
import { LayoutSlice } from 'store/feature/layout/LayoutSlice';
import { music } from './music';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const user = UserSlice.reducer;
const layout = LayoutSlice.reducer;
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'music', 'layout'],
};

export const rootReducer = combineReducers({
  user,
  music,
  layout,
});

export default persistReducer(persistConfig, rootReducer);
