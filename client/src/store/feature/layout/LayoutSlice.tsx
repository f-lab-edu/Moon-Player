import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState, Alarm } from 'types/store';

export const initialState: LayoutState = {
  alarm: {
    text: '',
    isOpen: false,
  },
  ui: {
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
    handleOpenUI: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.ui.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { handleOpenAlarm, handleOpenUI } = LayoutSlice.actions;
