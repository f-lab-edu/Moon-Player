import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState, Alarm } from 'types/store';

export const initialState: LayoutState = {
  alarm: {
    text: '',
    isOpen: false,
  },
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
    handleOpenAlarm: (state: LayoutState, action: PayloadAction<Alarm>) => {
      state.alarm = action.payload;
    },
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
export const {
  handleOpenAlarm,
  handleAddMusicListUI,
  handleMyMusicListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
} = LayoutSlice.actions;
