import { configureStore } from '@reduxjs/toolkit'
import { musicReducer } from './musicReducer'
// import { musicGenreSlice } from './feature/music/GenreSlice'
// import { musicPlayListSlice } from './feature/music/PlayListSlice'
// import { musicPlayerSlice } from './feature/music/PlayerSlice';

//  1. Redux 스토어를 만들어준다 여기서 store를관리 그리고 Redux DevTools extension도 사용가능
// 각각의 Slice의 reducer들이 들어간다

export const store = configureStore({
  reducer: {
    musicReducer,
  },
})
