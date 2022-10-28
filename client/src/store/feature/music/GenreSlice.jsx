import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from 'utils/API';

// 액션 생성
const fetchmusicGenre = createAsyncThunk(
  'musicGenre',
  async () => {
    try {
      const response = await fetchData();
      return response.music
    } catch (error) {
      console.log(error)
      //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
    }
  }
)

// Reducer
export const musicGenreSlice = createSlice({
  name: 'Genre',
  initialState: {
    musicList: [],
  },
  // 비동기적인 액션처리(action create 자동생성 불가능)
  extraReducers: (builder) => {
    builder.addCase(fetchmusicGenre.pending, (state, action) => {
      state.status = 'Loading';
    })

    // action 후 미들웨어 실행
    builder.addCase(fetchmusicGenre.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.musicList = action.payload;

    })

    builder.addCase(fetchmusicGenre.rejected, (state, action) => {
      state.status = 'Fail';
    })

  }

})
export default musicGenreSlice;
export { fetchmusicGenre }
