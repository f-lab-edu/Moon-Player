import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState, Alarm, LayoutPlayerHeaderState } from 'types/store';

export const initialState: LayoutState = {
  alarm: {
    text: '',
    isOpen: false,
  },
  confirm: {
    logout: {
      isOpen: false,
    },
    save: {
      isOpen: false,
    },
    load: {
      isOpen: false,
    },
  },
  player: {
    isOpen: false,
    ui: 'main',
  },
  playerHeader: {
    header: 'main-header',
    name: '현재 재생 목록',
  },
  footer: {
    isOpen: false,
  },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleOpenAlarm: (state: LayoutState, action: PayloadAction<Alarm>) => {
      state.alarm = action.payload;
    },
    handleOpenPlayerUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.player.isOpen = action.payload;
    },
    handlePlayerUI: (state: LayoutState, action: PayloadAction<string>) => {
      state.player.ui = action.payload;
    },
    handlePlayerHeaderUI: (state: LayoutState, action: PayloadAction<LayoutPlayerHeaderState>) => {
      state.playerHeader = action.payload;
    },
    handleOpenLogOutConfirm: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.confirm.logout.isOpen = action.payload;
    },
    handleOpenLoadConfirm: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.confirm.load.isOpen = action.payload;
    },
    handleOpenSaveConfirm: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.confirm.save.isOpen = action.payload;
    },
    handleOpenFooterUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.footer.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const {
  handleOpenAlarm,
  handleOpenPlayerUI,
  handlePlayerUI,
  handlePlayerHeaderUI,
  handleOpenSaveConfirm,
  handleOpenLoadConfirm,
  handleOpenLogOutConfirm,
  handleOpenFooterUI,
} = LayoutSlice.actions;
