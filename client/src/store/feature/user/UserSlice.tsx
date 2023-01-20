import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getRequestForOauth } from 'utils/auth';
import { UserStateType } from 'types/store';
import { getToken } from 'utils/auth';
import { authTokenType } from 'types/app/auth/index';

interface LoginInfo {
  code: string;
  socialName: string;
}
const initialState: UserStateType = {
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
    const { code, socialName } = info;
    const { REQUEST_URI, REQUEST_BODY } = getRequestForOauth(code, socialName);
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
    handleLoginInfo: (state: UserStateType, action: PayloadAction<string>) => {
      state.info = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserToken.pending, (state: UserStateType) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchUserToken.fulfilled, (state: UserStateType, action: PayloadAction<authTokenType>) => {
      state.status = 'Complete';
      state.data = action.payload;
    });

    builder.addCase(fetchUserToken.rejected, (state: UserStateType) => {
      state.status = 'Fail';
    });

    // 로그아웃시 발생
    builder.addCase(PURGE, () => initialState);
  },
});
export default UserSlice;
export { fetchUserToken };
export const { handleLoginInfo } = UserSlice.actions;
