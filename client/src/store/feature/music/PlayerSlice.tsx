import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { Music, PlayerState } from 'types/store';
const initialState: PlayerState = {
  list: [],
  music: { source_url: '', name: '', img_url: '', id: 0 },
};

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    handleAddPlayer: (state: PlayerState, action: PayloadAction<Music>) => {
      state.list = [...state.list, Object.assign({}, action.payload)];
    },
    handleShuffleMusics: (state: PlayerState, action: PayloadAction<Music[]>) => {
      state.list = action.payload;
    },
    // string바꿔야할듯
    handleRemoveMusic: (state: PlayerState, action: PayloadAction<string>) => {
      state.list = state.list.filter((music) => music.name !== action.payload);
    },
    handleAddMusic: (state: PlayerState, action: PayloadAction<Music>) => {
      state.music = action.payload;
    },
    handlePrevMusic: (state: PlayerState, action: PayloadAction<Music>) => {
      state.music = action.payload;
    },
    handleNextMusic: (state: PlayerState, action: PayloadAction<Music>) => {
      state.music = action.payload;
    },
  },

  // 로그아웃시 발생하는 액션
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export default musicPlayerSlice;
export const {
  handleAddPlayer,
  handleAddMusic,
  handleRemoveMusic,
  handleShuffleMusics,
  handlePrevMusic,
  handleNextMusic,
} = musicPlayerSlice.actions;
