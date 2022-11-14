import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

type layout = {
  alarm: {
    isOpen: boolean;
    text: string;
  };
};

type alarmData = {
  isOpen: boolean;
  text: string;
};
const initialState: layout = {
  alarm: {
    isOpen: false,
    text: '',
  },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleAlarm: (state: layout, action: PayloadAction<alarmData>) => {
      state.alarm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { handleAlarm } = LayoutSlice.actions;
