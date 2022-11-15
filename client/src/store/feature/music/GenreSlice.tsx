import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from 'utils/fetch';
import { PURGE } from 'redux-persist';
import { GenreState } from 'types/store';

const initialState: GenreState = {
  musicList: [],
  status: '',
};

// 액션 생성
const fetchmusicGenre = createAsyncThunk('genre', async () => {
  try {
    const response = await fetchData('http://localhost:4000/api/music/genre/');

    return response.music;
  } catch (error) {
    console.log(error);
    //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
  }
});
// Reducer
export const musicGenreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchmusicGenre.pending, (state) => {
      state.status = 'Loading';
    });

    // 비동기는 타입안달아줘도 될거같음

    builder.addCase(fetchmusicGenre.fulfilled, (state, action) => {
      state.status = 'Complete';
      state.musicList = action.payload;
    });

    builder.addCase(fetchmusicGenre.rejected, (state) => {
      state.status = 'Fail';
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export default musicGenreSlice;
export { fetchmusicGenre };
