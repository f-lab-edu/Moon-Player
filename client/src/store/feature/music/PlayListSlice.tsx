import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from 'utils/api';
import { PURGE } from 'redux-persist';
import { PlayListStateType } from 'types/store';
import { PlayListType } from 'types/app/playList/index';
export const initialState: PlayListStateType = {
  genre: {
    genre_title: '',
    genre_id: 0,
    music_list: [],
  },
  status: '',
};

const fetchmusicList = createAsyncThunk('musicList', async (url: string, thunkApi) => {
  try {
    const response = await fetchData(url);
    return response.music as PlayListType;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const musicPlayListSlice = createSlice({
  name: 'musicPlayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchmusicList.pending, (state: PlayListStateType) => {
      state.status = 'Loading';
    });

    // 비동기로 가져올떄 PlayList에 렌더링 할 아이템 속성 변경
    builder.addCase(fetchmusicList.fulfilled, (state: PlayListStateType, action: PayloadAction<PlayListType>) => {
      state.status = 'Complete';
      state.genre = action.payload;
    });

    builder.addCase(fetchmusicList.rejected, (state: PlayListStateType) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default musicPlayListSlice;
export { fetchmusicList };
