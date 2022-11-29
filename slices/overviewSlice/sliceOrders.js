import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderNum: 0,
  total_orderNum: 0,
  orderPercent: 0,
};

export const prodOrders = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    retailOrders: (state, action) => {
      state.orderNum = action.payload;
      state.total_orderNum = action.payload;
      state.orderPercent = action.payload;
    },
  },
});

export const { retailOrders } = prodOrders.actions;
export default prodOrders.reducer;
