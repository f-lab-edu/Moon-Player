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
      // playerItems에 중복 체크
      const isItem = state.playerItems.filter((item) => item.video_id === action.payload.video_id).length
      state.playerItems = isItem ? [...state.playerItems] : [...state.playerItems, Object.assign({}, action.payload)]
    }

  },

})
export default musicPlayerSlice;
export const { add } = musicPlayerSlice.actions
