import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from 'store/feature/auth/UserSlice';

export const authReducer = combineReducers({
  user: UserSlice.reducer,
});
