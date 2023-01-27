import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutStateType } from 'types/store';
export const initialState: LayoutStateType = {
  main: {
    isOpenMusicList: true,
  },
  customPlayList: {
    isOpen: false,
    addPlayList: {
      isOpen: false,
    },
    myPlayList: {
      option: {
        isOpen: true,
      },
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
      state.customPlayList.addPlayList.isOpen = action.payload;
    },
    handleMyPlayListOptionUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.customPlayList.myPlayList.option.isOpen = action.payload;
    },
    handleMusicListUI: (state: LayoutStateType, action: PayloadAction<boolean>) => {
      state.main.isOpenMusicList = action.payload;
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
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
  handleMusicListUI,
  handleMyPlayListOptionUI,
} = LayoutSlice.actions;
