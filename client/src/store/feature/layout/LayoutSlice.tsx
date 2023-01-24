import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutStateType } from 'types/store';
export const initialState: LayoutStateType = {
  main: {
    playList: {
      selected: false,
    },
    musicList: {
      selected: true,
    },
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
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleOpenCustomPlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.isOpen = action.payload;
    },
    handleOpenAddPlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.addMusicList.isOpen = action.payload;
    },
    handleOpenMyPlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.myMusicList.isOpen = action.payload;
    },
    handleMusicListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.main.musicList.selected = action.payload;
    },
    handlePlayListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.main.playList.selected = action.payload;
    },
    handleOpenMusicFooterUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.footer.isOpen = action.payload;
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
  handleMusicListUI,
  handlePlayListUI,
} = LayoutSlice.actions;
