import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 액션 생성
const fetchmusicGenre = createAsyncThunk(
  'fetch/musicgenre',
  async () => {
    const data = await (await fetch('http://localhost:4000/api/music/genre')).json()
    return data.music
  }
)

// Reducer
export const musicGenreSlice = createSlice({
  name: 'music',
  initialState: {
    music: [],
  },
  // // 동기적인 액션 처리
  reducers: {},
  // 비동기적인 액션처리(action create 자동생성 불가능)
  extraReducers: (builder) => {
    builder.addCase(fetchmusicGenre.pending, (state, action) => {
      state.status = 'Loading';
    })

    builder.addCase(fetchmusicGenre.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.value = action.payload;

    })

    builder.addCase(fetchmusicGenre.rejected, (state, action) => {
      state.status = 'fail';
    })

  }

})
export default musicGenreSlice;
export { fetchmusicGenre }
