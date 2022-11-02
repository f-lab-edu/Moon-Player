import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { sendToken } from 'utils/fetchAPI';
import { getToken } from 'utils/webAPI';

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
  initialState: {
    info: {},
  },
  reducers: {
    handleRemoveUserinfo: (state, action) => {
      state.info = {};
    },
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
export const { handleRemoveUserinfo } = UserSlice.actions;
