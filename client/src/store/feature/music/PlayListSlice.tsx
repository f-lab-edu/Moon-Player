import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchById } from 'utils/fetch';
import { PURGE } from 'redux-persist';

type PlayerListState = {
  musicList: Music[];
  status: string;
};

type Music = {
  video_link: string;
  video_title: string;
  video_img: string;
  id: number;
};

const initialState: PlayerListState = {
  musicList: [],
  status: '',
};

const fetchmusicList = createAsyncThunk('musicList', async (id: string) => {
  try {
    const response = await fetchById('http://localhost:4000/api/music/genre/', id);
    return response.music;
  } catch (error) {
    console.log(error);
    //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
  }
});

// Reducer
export const musicPlayListSlice = createSlice({
  name: 'musicPlayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchmusicList.pending, (state: PlayerListState) => {
      state.status = 'Loading';
    });

    // 비동기로 가져올떄 PlayList에 렌더링 할 아이템 속성 변경
    builder.addCase(fetchmusicList.fulfilled, (state: PlayerListState, action: PayloadAction<Music[]>) => {
      state.status = 'Complete';
      state.musicList = action.payload;
    });

    builder.addCase(fetchmusicList.rejected, (state: PlayerListState) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default musicPlayListSlice;
export { fetchmusicList };
