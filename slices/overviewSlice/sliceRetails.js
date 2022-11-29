import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storeInfo: {
    numRetailStores: 0,
    numPartnerStores: 199,
    storePercentage: 0,
    storeName: '',
    address: '',
  },
};

export const retailOverview = createSlice({
  name: 'retailStores',
  initialState,
  reducers: {
    retailStats: (state, action) => {
      state.numRetailStores = action.payload;
      state.numPartnerStores = action.payload;
      state.storePercentage = action.payload;
    },
  },
});

export const { retailStats } = retailOverview.actions;

export default retailOverview.reducer;
