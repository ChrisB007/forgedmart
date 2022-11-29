import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activity: '',
  description: '',
  status: '',
  date: '',
};

export const activitiesSlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    recentActivity: (state, action) => {
      state.activity = action.payload;
      state.description = action.payload;
      state.status = action.payload;
      state.date = action.payload;
    },
  },
});

export const { recentActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;
