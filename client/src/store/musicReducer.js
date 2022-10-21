import { combineReducers } from '@reduxjs/toolkit';
import { musicGenreSlice } from './feature/music/GenreSlice'
import { musicPlayerSlice } from './feature/music/PlayerSlice';
import { musicPlayListSlice } from './feature/music/PlayListSlice';

export const musicReducer = combineReducers({
  musicGenre: musicGenreSlice.reducer,
  musicPlayList: musicPlayListSlice.reducer,
  musicPlayer: musicPlayerSlice.reducer,

})
