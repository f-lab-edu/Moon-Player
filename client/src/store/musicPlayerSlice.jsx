import { createSlice, current } from '@reduxjs/toolkit'

// Reducer
export const musicPlayerSlice = createSlice({
  name: 'musicPlayer',

  // 가져온 음악리스트 들이 존재
  initialState: {
    playerItems: [],
  },
  // // 동기적인 액션 처리

  reducers: {
    // 플레이어에 add 해주는 함수
    add: (state, action) => {
      const isItem = state.playerItems.filter((item) => item.id === action.payload.id).length
      // playerItems에 중복이 있으면 추가 x
      state.playerItems = isItem ? [...state.playerItems] : [...state.playerItems, Object.assign({}, action.payload)]
    }

  },

})
export default musicPlayerSlice;
export const { add } = musicPlayerSlice.actions
