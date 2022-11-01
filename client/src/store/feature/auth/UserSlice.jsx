import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { requestGoogleLogin } from 'utils/OAuthGoogle';

const fetchUserInfo = createAsyncThunk('userInfo', async () => {
  try {
    const response = await requestGoogleLogin();
    return response;
  } catch (error) {
    console.log(error);
  }
});

// Reducer
export const UserSlice = createSlice({
  name: 'user',

  // 가져온 유저정보
  initialState: {
    info: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state, action) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.info = action.payload;
    });

    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      state.status = 'Fail';
    });
  },
});
export default UserSlice;
export { fetchUserInfo };
