import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

// 액션 생성
const fetchmusicList = createAsyncThunk(
  'fetch/musicgenreList',
  async (music_id) => {
    const data = await (await fetch(`http://localhost:4000/api/music/genre/${music_id}`)).json()
    return data.music
  }
)

// Reducer
export const musicListSlice = createSlice({
  name: 'musicList',

  // 가져온 음악리스트 들이 존재
  initialState: {
    musics: [],
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

      state.musics = action.payload;

    })

    builder.addCase(fetchmusicList.rejected, (state, action) => {
      state.status = 'fail';
    })

  }

})
export default musicListSlice;
export const { select } = musicListSlice.actions
export { fetchmusicList }
