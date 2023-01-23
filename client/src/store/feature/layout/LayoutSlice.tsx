import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutStateType } from 'types/store';
export const initialState: LayoutStateType = {
  music: {
    musicList: {
      isOpen: true,
    },
    playerList: {
      isOpen: true,
    },
    customPlayList: {
      isOpen: false,
      addMusicList: {
        isOpen: false,
      },
      myMusicList: {
        isOpen: false,
      },
    },
    footer: {
      isOpen: false,
    },
  },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleOpenAddPlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.music.customPlayList.addMusicList.isOpen = action.payload;
    },
    handleOpenMyPlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.music.customPlayList.myMusicList.isOpen = action.payload;
    },
    handleOpenPlayerListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.music.playerList.isOpen = action.payload;
    },
    handleOpenMusicListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.music.musicList.isOpen = action.payload;
    },
    handleOpenMusicFooterUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.music.footer.isOpen = action.payload;
    },
    handleOpenCustomPlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.music.customPlayList.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const {
  handleOpenAddPlayListUI,
  handleOpenMyPlayListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
  handleOpenPlayerListUI,
  handleOpenMusicListUI,
} = LayoutSlice.actions;
