import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getRequestForOauth } from 'utils/auth';
import { Token } from 'types/store';

import { UserState } from 'types/store';
import { getToken } from 'utils/auth';
interface LoginInfo {
  code: string;
  loginInfo: string;
}
const initialState: UserState = {
  data: {
    access_token: '',
    expires_in: 0,
    id_token: '',
    scope: '',
    token_type: '',
  },
  info: '',
  status: 'idle',
};
const fetchUserToken = createAsyncThunk('user', async (info: LoginInfo, thunkApi: any) => {
  try {
    const { code, loginInfo } = info;
    const { REQUEST_URI, REQUEST_BODY } = getRequestForOauth(code, loginInfo);
    const response = await getToken(REQUEST_URI, REQUEST_BODY);
    if (response) {
      return response.data;
    }
    throw Error;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const UserSlice = createSlice({
  name: 'user',
  // 가져온 유저 토큰
  initialState,
  reducers: {
    handleLoginInfo: (state: UserState, action: PayloadAction<string>) => {
      state.info = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserToken.pending, (state: UserState) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchUserToken.fulfilled, (state: UserState, action: PayloadAction<Token>) => {
      state.status = 'Complete';
      state.data = action.payload;
    });

    builder.addCase(fetchUserToken.rejected, (state: UserState) => {
      state.status = 'Fail';
    });

    // 로그아웃시 발생
    builder.addCase(PURGE, () => initialState);
  },
});
export default UserSlice;
export { fetchUserToken };
export const { handleLoginInfo } = UserSlice.actions;
