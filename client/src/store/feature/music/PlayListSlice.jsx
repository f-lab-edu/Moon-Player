import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { fetchById } from 'utils/API';

// 액션 생성
const fetchmusicList = createAsyncThunk('musicList', async (id) => {
  try {
    const response = await fetchById(id);
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
  initialState: {
    musicList: [],
  },
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
  },
});
export default musicPlayListSlice;
export { fetchmusicList };
