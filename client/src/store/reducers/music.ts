import { combineReducers } from '@reduxjs/toolkit';
import { musicGenreSlice } from '../feature/music/GenreSlice';
import { musicPlayerSlice } from '../feature/music/PlayerSlice';
import { musicPlayListSlice } from '../feature/music/PlayListSlice';
export const music = combineReducers({
  genre: musicGenreSlice.reducer,
  playList: musicPlayListSlice.reducer,
  player: musicPlayerSlice.reducer,
});
