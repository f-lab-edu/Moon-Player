import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState, Alarm, LayoutPlayerHeaderState } from 'types/store';

export const initialState: LayoutState = {
  alarm: {
    text: '',
    isOpen: false,
  },
  player: {
    isOpen: false,
    ui: 'custom-Adder',
  },
  playerHeader: {
    header: 'main-header',
    name: '나만의 플레이리스트 추가',
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

    handleOpenFooterUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.footer.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { handleOpenAlarm, handleOpenPlayerUI, handlePlayerUI, handlePlayerHeaderUI, handleOpenFooterUI } =
  LayoutSlice.actions;
