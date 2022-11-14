import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { sendToken } from 'utils/oAuth';
import { getToken } from 'utils/oAuth';

type User = {
  GoogleUserinfo?: object;
  status: string;
};

const initialState: User = {
  GoogleUserinfo: {},
  status: 'idle',
};

const fetchUserInfo = createAsyncThunk('user', async () => {
  try {
    const response = await sendToken(getToken());
    return response;
  } catch (error) {
    console.log(error);
  }
});

// Reducer
export const UserSlice = createSlice({
  name: 'user',
  // 가져온 유저 토큰
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'Complete';
      state.GoogleUserinfo = action.payload;
    });

    builder.addCase(fetchUserInfo.rejected, (state) => {
      state.status = 'Fail';
    });
    // 로그아웃시 발생
    builder.addCase(PURGE, () => initialState);
  },
});
export default UserSlice;
export { fetchUserInfo };
