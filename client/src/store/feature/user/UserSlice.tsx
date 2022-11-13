import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { sendToken } from 'utils/oAuth';
import { getToken } from 'utils/oAuth';

const initialState = {
  GoogleUserinfo: {},
  NaverUserInfo: {},
  KaKaoUserInfo: {},
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
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state, action) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.GoogleUserinfo = action.payload;
    });

    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      state.status = 'Fail';
    });
    // 로그아웃시 발생
    builder.addCase(PURGE, () => initialState);
  },
});
export default UserSlice;
export { fetchUserInfo };
export const { handleRemoveUserinfo } = UserSlice.actions;