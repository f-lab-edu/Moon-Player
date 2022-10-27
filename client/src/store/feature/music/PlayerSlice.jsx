import { current, createSlice } from '@reduxjs/toolkit'

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',

  // playerItems 이랑 , playingItem이랑 따로 관리
  initialState: {
    playerItems: [],

    playing: {
      music: '',
      repeat: false,
      isplaying: false,
      volume: 100,
    }

  },

  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    handleAddMusic: (state, action) => {
      state.playerItems = [...state.playerItems, Object.assign({}, action.payload)]
    },

    // 플레이어에서 삭제하는 함수 
    // playItems도 업데이트 되어야함
    // playingItem도 업데이트 되어야함
    handleRemoveMusic: (state, action) => {
      state.playerItems = state.playerItems.filter((item) => item.video_title !== action.payload)
      state.playing.music = ''
      state.playing.isplaying = false
    },
    handleShuffleMusic: (state, action) => {
      state.playerItems = action.payload
    },

    handlePlayMusic: (state, action) => {
      state.playing.music = action.payload
    },
    // 사용자가 다음음악을 선택할시 , 현재 음악 다음 인덱스를 찾아서 선택후 state.playing.music 
    handleNextMusic: (state, action) => {

      state.playing.music = action.payload
    },
    handlePrevMusic: (state, action) => {
      state.playing.music = action.payload
    },
    handleRepeatMusic: (state, action) => {
      state.playing.repeat = action.payload
    },
    handlePlayerState: (state, action) => {
      state.playing.isplaying = action.payload
    }

  },

})
export default musicPlayerSlice;
export const { handleAddMusic, handleRemoveMusic, handlePlayMusic, handleNextMusic, handlePrevMusic, handleShuffleMusic, handleRepeatMusic, handlePlayerState } = musicPlayerSlice.actions
