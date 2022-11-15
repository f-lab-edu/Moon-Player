import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { MusicDataType, PlayerState } from 'types/store';
const initialState: PlayerState = {
  playerItems: [],
  playmusic: {},
};

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    handleAddPlayer: (state: PlayerState, action: PayloadAction<MusicDataType>) => {
      state.playerItems = [...state.playerItems, Object.assign({}, action.payload)];
    },
    handleShuffleMusics: (state: PlayerState, action: PayloadAction<MusicDataType[]>) => {
      state.playerItems = action.payload;
    },
    // string바꿔야할듯
    handleRemoveMusic: (state: PlayerState, action: PayloadAction<string>) => {
      state.playerItems = state.playerItems.filter((music) => music.video_title !== action.payload);
    },
    handleAddMusic: (state: PlayerState, action: PayloadAction<MusicDataType>) => {
      state.playmusic = action.payload;
    },
    handlePrevMusic: (state: PlayerState, action: PayloadAction<MusicDataType>) => {
      state.playmusic = action.payload;
    },
    handleNextMusic: (state: PlayerState, action: PayloadAction<MusicDataType>) => {
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
