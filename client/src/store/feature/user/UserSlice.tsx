import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { sendToken } from 'utils/oAuth';
import { UserState, GoogleUser } from 'types/store';

const initialState: UserState = {
  GoogleUserinfo: { email: '', id: 0, picture: '', verified_email: false },
  status: 'idle',
};

const fetchUserInfo = createAsyncThunk('user', async (token: string, thunkApi: any) => {
  try {
    const response = await sendToken(token);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const UserSlice = createSlice({
  name: 'user',
  // 가져온 유저 토큰
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state: UserState) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchUserInfo.fulfilled, (state: UserState, action: PayloadAction<GoogleUser>) => {
      state.status = 'Complete';
      state.GoogleUserinfo = action.payload;
    });

    builder.addCase(fetchUserInfo.rejected, (state: UserState) => {
      state.status = 'Fail';
    });
    // 로그아웃시 발생
    builder.addCase(PURGE, () => initialState);
  },
});
export default UserSlice;
export { fetchUserInfo };
