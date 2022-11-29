import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentVal: '',
  prevVal: '',
};

export const brandVal = createSlice({
  name: 'valuation',
  initialState,
  reducers: {
    brandWorth: (state, action) => {
      state.currentVal = action.payload;
      state.prevVal = action.payload;
    },
  },
});

export const { brandWorth } = brandVal.actions;
export default brandVal.reducer;
