import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getToken } from 'utils/auth';
import { UserState } from 'types/store';

interface LoginInfo {
  code: string;
  loginInfo: string;
}

const initialState: UserState = {
  accesstoken: '',
  info: '',
  status: 'idle',
};

const fetchUserToken = createAsyncThunk('user', async (info: LoginInfo, thunkApi: any) => {
  try {
    const { code, loginInfo } = info;
    const response = await getToken(code, loginInfo);
    //response에 토큰정보가 담겨있는데 나머지 옵션은 언제사용하는지?
    return response.access_token;
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

    builder.addCase(fetchUserToken.fulfilled, (state: UserState, action: PayloadAction<string>) => {
      state.status = 'Complete';
      state.accesstoken = action.payload;
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
