import { current, createSlice } from '@reduxjs/toolkit'

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',

  // playerItems 이랑 , playingItem이랑 따로 관리
  initialState: {
    playerItems: [],

    playing: {
      items: [],
    }

  },

  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    addPlayerList: {
      reducer: (state, action) => {
        state.playerItems = [...state.playerItems, Object.assign({}, action.payload)]
      },

    },
    // 플레이어에서 삭제하는 함수 
    // playItems도 업데이트 되어야함
    removePlayerList: (state, action) => {
      state.playerItems = state.playerItems.filter((item) => item.video_title !== action.payload)
      state.playing.items = state.playing.items.filter((item) => item.video_title !== action.payload)
    },

    // 사용자가 음악을 선택했을때 됨
    handlePlayItem: (state, action) => {
      state.playing.items = action.payload
    },

  },

})
export default musicPlayerSlice;
export const { addPlayerList, removePlayerList, handlePlayItem } = musicPlayerSlice.actions
