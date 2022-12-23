import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from 'utils/axios';
import { PURGE } from 'redux-persist';
import { GenreState, Genre } from 'types/store';

const initialState: GenreState = {
  musicList: [],
  status: '',
};

// 액션 생성
const fetchmusicGenre = createAsyncThunk('genre', async (url: string, thunkApi: any) => {
  try {
    const response = await fetchData(url);
    return response.music as Genre;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message); //  Alert Store 생성해서 오류 발생시 addAlert() action 호출하는 방식으로 UI 노출 가능
  }
});
// Reducer
export const musicGenreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchmusicGenre.pending, (state: GenreState) => {
      state.status = 'Loading';
    });
    builder.addCase(fetchmusicGenre.fulfilled, (state: GenreState, action: PayloadAction<Genre[]>) => {
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
