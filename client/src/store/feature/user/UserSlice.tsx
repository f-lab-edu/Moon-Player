import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getToken } from 'utils/oauth';
import { UserState } from 'types/store';

const initialState: UserState = {
  accesstoken: '',
  status: 'idle',
};

const fetchUserToken = createAsyncThunk('user', async (token: string, thunkApi: any) => {
  try {
    const response = await getToken(token, 'Google');
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
  reducers: {},
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
