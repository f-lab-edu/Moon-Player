import { createSlice } from '@reduxjs/toolkit'

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',

  // playerItems 이랑 , playingItem이랑 따로 관리
  initialState: {
    playerItems: [],
    playmusic: ''

  },

  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    handleAddPlayer: (state, action) => {
      state.playerItems = [...state.playerItems, Object.assign({}, action.payload)]
    },
    handleShuffleMusics: (state, action) => {
      state.playerItems = action.payload
    },
    // 플레이어에서 삭제하는 함수 
    // playItems도 업데이트 되어야함
    // playingItem도 업데이트 되어야함
    handleRemoveMusic: (state, action) => {
      state.playerItems = state.playerItems.filter((item) => item.video_title !== action.payload)
      state.playmusic = ''
    },
    handleAddMusic: (state, action) => {
      state.playmusic = action.payload
    },
    handlePrevMusic: (state, action) => {
      state.playmusic = action.payload
    },
    handleNextMusic: (state, action) => {
      state.playmusic = action.payload
    }

  },

})
export default musicPlayerSlice;
export const { handleAddPlayer, handleAddMusic, handleRemoveMusic, handleShuffleMusics, handlePrevMusic, handleNextMusic } = musicPlayerSlice.actions
