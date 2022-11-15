import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { LayoutState, alarmDataType } from 'types/store';

const initialState: LayoutState = {
  alarm: {
    isOpen: false,
    text: '',
  },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleAlarm: (state: LayoutState, action: PayloadAction<alarmDataType>) => {
      state.alarm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { handleAlarm } = LayoutSlice.actions;
