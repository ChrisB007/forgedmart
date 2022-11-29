import { configureStore } from '@reduxjs/toolkit';
import userStatusSlice from './slices/userSlice/userStatus';
import activitiesSlice from './slices/activitySlice/sliceActivity';
import retailSlice from './slices/overviewSlice/sliceRetails';
import orderSlice from './slices/overviewSlice/sliceOrders';

export default configureStore({
  reducer: {
    userStatus: userStatusSlice,
    activity: activitiesSlice,
    retailStores: retailSlice,
    retailOrders: orderSlice,
  },
});
