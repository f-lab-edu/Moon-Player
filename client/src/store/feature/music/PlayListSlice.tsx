import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from 'utils/fetch';
import { PURGE } from 'redux-persist';
import { PlayListState, PlayListDataType } from 'types/store';
const initialState: PlayListState = {
  musicList: { title: '', id: 0, musics: [] },
  status: '',
};

const fetchmusicList = createAsyncThunk('musicList', async (url: string, thunkApi) => {
  try {
    const response = await fetchData(url);
    return response.music as PlayListDataType;
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
    builder.addCase(fetchmusicList.pending, (state: PlayListState) => {
      state.status = 'Loading';
    });

    // 비동기로 가져올떄 PlayList에 렌더링 할 아이템 속성 변경
    builder.addCase(fetchmusicList.fulfilled, (state: PlayListState, action: PayloadAction<PlayListDataType>) => {
      state.status = 'Complete';
      state.musicList = action.payload;
    });

    builder.addCase(fetchmusicList.rejected, (state: PlayListState) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default musicPlayListSlice;
export { fetchmusicList };
