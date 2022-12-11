import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getGoogleToken } from 'utils/GoogleLogin';
import { UserState } from 'types/store';
import { getKaKaoToken } from 'utils/KaKaoLogin';

const initialState: UserState = {
  accesstoken: '',
  status: 'idle',
};

const fetchGoogleUserInfo = createAsyncThunk('user', async (token: string, thunkApi: any) => {
  try {
    const response = await getGoogleToken(token);
    console.log(response);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const fetchKakaoUserInfo = createAsyncThunk('user', async (token: string, thunkApi: any) => {
  try {
    const response = await getKaKaoToken(token);
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
    // builder.addCase(fetchGoogleUserInfo.pending, (state: UserState) => {
    //   state.status = 'Loading';
    // });

    builder.addCase(fetchGoogleUserInfo.fulfilled, (state: UserState, action: PayloadAction<string>) => {
      state.status = 'Complete';
      state.accesstoken = action.payload;
    });

    // builder.addCase(fetchGoogleUserInfo.rejected, (state: UserState) => {
    //   state.status = 'Fail';
    // });

    // 로그아웃시 발생
    builder.addCase(PURGE, () => initialState);
  },
});
export default UserSlice;
export { fetchGoogleUserInfo, fetchKakaoUserInfo };
