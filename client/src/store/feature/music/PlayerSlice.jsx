import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  playerItems: [],
  playmusic: '',
};
// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    handleAddPlayer: (state, action) => {
      state.playerItems = [...state.playerItems, Object.assign({}, action.payload)];
    },
    handleShuffleMusics: (state, action) => {
      state.playerItems = action.payload;
    },
    // 플레이어에서 삭제하는 함수
    // playItems도 업데이트 되어야함
    // playingItem도 업데이트 되어야함
    handleRemoveMusic: (state, action) => {
      state.playerItems = state.playerItems.filter((item) => item.video_title !== action.payload);
      state.playmusic = '';
    },
    handleAddMusic: (state, action) => {
      state.playmusic = action.payload;
    },
    handlePrevMusic: (state, action) => {
      state.playmusic = action.payload;
    },
    handleNextMusic: (state, action) => {
      state.playmusic = action.payload;
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
