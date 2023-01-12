import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState, Alarm, LayoutPlayerState } from 'types/store';

export const initialState: LayoutState = {
  alarm: {
    text: '',
    isOpen: false,
  },
  player: {
    isOpen: false,
    title: 'Play List',
    ui: 'main',
    header: 'main-header',
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
    handlePlayerUIState: (state: LayoutState, action: PayloadAction<LayoutPlayerState>) => {
      state.player = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { handleOpenAlarm, handleOpenPlayerUI, handlePlayerUIState } = LayoutSlice.actions;
