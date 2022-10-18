import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 액션 생성
const fetchmusicList = createAsyncThunk(
  'fetch/musicList',
  async (music_id) => {
    const data = await (await fetch(`http://localhost:4000/api/music/genre/${music_id}`)).json()
    return data.music
  }
)

// Reducer
export const musicListSlice = createSlice({
  name: 'music',
  initialState: {
    music: [],
  },
  // // 동기적인 액션 처리
  reducers: {},
  // 비동기적인 액션처리(action create 자동생성 불가능)
  extraReducers: (builder) => {
    builder.addCase(fetchmusicList.pending, (state, action) => {
      state.status = 'Loading';
    })

    builder.addCase(fetchmusicList.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.value = action.payload;

    })

    builder.addCase(fetchmusicList.rejected, (state, action) => {
      state.status = 'fail';
    })

  }

})
export default musicListSlice;
export { fetchmusicList }
