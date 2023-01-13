import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { Music, PlayerState } from 'types/store';
import { PlayerControlModuleState } from 'types/app/player';

const initialState: PlayerState = {
  list: [],
  playingMusic: { source_url: '', name: '', img_url: '', id: 0 },
  playerControlModuleState: {
    playing: false, // 재생중인지
    ismuted: false, // 음소거인지
    controls: true, // 기본으로 제공되는 컨트롤러 사용할건지
    volume: 50, // 볼륨크기
    playbackRate: 1.0, // 배속
    played: 0, // 재생의 정도 (value)
    seeking: false, // 재생바를 움직이고 있는지
    duration: 0, // 전체 시간
    music: { source_url: '', name: '', img_url: '', id: 0 },
    isrepeat: false,
    currentTime: '00:00',
    endTime: '00:00',
  },
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
      state.playingMusic = action.payload;
    },
    handlePrevPlayMusic: (state: PlayerState, action: PayloadAction<Music>) => {
      state.playingMusic = action.payload;
    },
    handleNextPlayMusic: (state: PlayerState, action: PayloadAction<Music>) => {
      state.playingMusic = action.payload;
    },
    handleRepeatMusicModule: (state: PlayerState, action: PayloadAction<PlayerControlModuleState>) => {
      state.playerControlModuleState = action.payload;
    },
    handlePlayMusicModule: (state: PlayerState, action: PayloadAction<PlayerControlModuleState>) => {
      state.playerControlModuleState = action.payload;
    },
    handleVolumeMusicModule: (state: PlayerState, action: PayloadAction<PlayerControlModuleState>) => {
      state.playerControlModuleState = action.payload;
    },
    handleProgressBarModule: (state: PlayerState, action: PayloadAction<PlayerControlModuleState>) => {
      state.playerControlModuleState = action.payload;
    },
    handlePlaySelectedMusicModlue: (state: PlayerState, action: PayloadAction<PlayerControlModuleState>) => {
      state.playerControlModuleState = action.payload;
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
  handlePrevPlayMusic,
  handleNextPlayMusic,
  handleRepeatMusicModule,
  handlePlayMusicModule,
  handleVolumeMusicModule,
  handleProgressBarModule,
  handlePlaySelectedMusicModlue,
} = musicPlayerSlice.actions;
