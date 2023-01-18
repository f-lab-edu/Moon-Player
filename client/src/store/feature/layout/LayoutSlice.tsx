import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState } from 'types/store';

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
    footer: {
      isOpen: false,
    },
  },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleAddMusicListUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.music.customPlayList.addMusicList.isOpen = action.payload;
    },
    handleMyMusicListUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.music.customPlayList.myMusicList.isOpen = action.payload;
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
export const { handleAddMusicListUI, handleMyMusicListUI, handleOpenMusicFooterUI, handleOpenCustomPlayListUI } =
  LayoutSlice.actions;
