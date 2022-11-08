import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  modal: {
    isOpen: false,
    text: '',
  },
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleModal: (state, action) => {
      state.modal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { handleModal } = LayoutSlice.actions;
