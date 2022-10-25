import { current, createSlice } from '@reduxjs/toolkit'

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',

  // 가져온 음악리스트 들이 존재
  initialState: {
    playerItems: [],
    playItems: []
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
      state.playerItems = state.playerItems.filter((item) => item.video_id !== action.payload)
      state.playItems = state.playItems.filter((item) => item.video_id !== action.payload)

    },

    playmusic: {
      reducer: (state, action) => {
        state.playItems = action.payload
      }
    }
  },

})
export default musicPlayerSlice;
export const { addPlayerList, removePlayerList, playmusic } = musicPlayerSlice.actions
