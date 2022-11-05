import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchById } from 'utils/fetch';
import { PURGE } from 'redux-persist';

const initialState = {
  musicList: [],
};

const fetchmusicList = createAsyncThunk('musicList', async (id) => {
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

  // 가져온 음악리스트 들이 존재
  initialState,
  // 비동기적인 액션처리(action create 자동생성 불가능)
  extraReducers: (builder) => {
    builder.addCase(fetchmusicList.pending, (state, action) => {
      state.status = 'Loading';
    });

    // 비동기로 가져올떄 PlayList에 렌더링 할 아이템 속성 변경
    builder.addCase(fetchmusicList.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.musicList = action.payload;
    });

    builder.addCase(fetchmusicList.rejected, (state, action) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default musicPlayListSlice;
export { fetchmusicList };
