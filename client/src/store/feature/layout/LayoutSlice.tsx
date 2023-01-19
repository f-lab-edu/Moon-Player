import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState } from 'types/store';

type MusicDialogInfoType = {
  name: string;
  img_url: string;
};
export const initialState: LayoutState = {
  music: {
    customPlayList: {
      isOpen: false,
      addMusicList: {
        isOpen: false,
      },
      myMusicList: {
        isOpen: false,
      },
    },
    musicDialog: {
      isOpen: false,
      info: {
        name: '',
        img_url: '',
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
    handleOpenAddPlayListUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.music.customPlayList.addMusicList.isOpen = action.payload;
    },
    handleOpenMyPlayListUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.music.customPlayList.myMusicList.isOpen = action.payload;
    },
    handleOpenMusicInfoUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.music.musicDialog.isOpen = action.payload;
    },
    handleSelectedMusicInfoUI: (state: LayoutState, action: PayloadAction<MusicDialogInfoType>) => {
      state.music.musicDialog.info = action.payload;
    },
    handleOpenMusicFooterUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.music.footer.isOpen = action.payload;
    },
    handleOpenCustomPlayListUI: (state: LayoutState, action: PayloadAction<boolean>) => {
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
  handleOpenMusicInfoUI,
  handleSelectedMusicInfoUI,
} = LayoutSlice.actions;
