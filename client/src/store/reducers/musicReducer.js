import { combineReducers } from '@reduxjs/toolkit';
import { musicGenreSlice } from '../feature/music/GenreSlice';
import { musicPlayerSlice } from '../feature/music/PlayerSlice';
import { musicPlayListSlice } from '../feature/music/PlayListSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const musicReducer = combineReducers({
  musicGenre: musicGenreSlice.reducer,
  musicPlayList: musicPlayListSlice.reducer,
  musicPlayer: musicPlayerSlice.reducer,
});
const persistConfig = {
  key: 'PlayerList',
  storage,
  whitelist: ['musicPlayer'],
};

export default persistReducer(persistConfig, musicReducer);
