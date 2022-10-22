import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchById } from '../../utils/API/musicAPI';

// 액션 생성
const fetchmusicList = createAsyncThunk(
  'musicList',
  async (id) => {
    const response = await fetchById(id)
    return response.music
  }
)

// Reducer
export const musicPlayListSlice = createSlice({
  name: 'musicPlayList',

  // 가져온 음악리스트 들이 존재
  initialState: {
    musicList: [],
  },

  // // 동기적인 액션 처리
  reducers: {

  },
  // 비동기적인 액션처리(action create 자동생성 불가능)
  extraReducers: (builder) => {
    builder.addCase(fetchmusicList.pending, (state, action) => {
      state.status = 'Loading';
    })

    builder.addCase(fetchmusicList.fulfilled, (state, action) => {
      state.status = 'Complete';

      state.musicList = action.payload;

    })

    builder.addCase(fetchmusicList.rejected, (state, action) => {
      state.status = 'fail';
    })

  }

})
export default musicPlayListSlice;
export { fetchmusicList }
