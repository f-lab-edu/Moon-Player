import { createSlice, current } from '@reduxjs/toolkit'

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',

  // 가져온 음악리스트 들이 존재
  initialState: {
    playerItems: [],
  },

  // 동기적인 액션 처리
  reducers: {
    // 플레이어에 add 해주는 함수
    add: (state, action) => {
      state.playerItems = [...state.playerItems, Object.assign({}, action.payload)]
    },
    // 플레이어에서 삭제하는 함수
    remove: (state, action) => {
      state.playerItems = state.playerItems.filter((item) => item.video_id !== action.payload)
    }

  },

})
export default musicPlayerSlice;
export const { add, remove } = musicPlayerSlice.actions
