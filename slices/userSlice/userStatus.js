import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  user: {
    userName: '',
    email: '',
    image: '',
    role: '',
    isMember: false,
  },
};

const locUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users`;

const usersUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`; // URL to API of all Users

export const getUserStatus = createAsyncThunk(
  'users/getUserStatus',
  async (user, thunkAPI) => {
    try {
      const userRes = await axios.get(`${usersUrl}/users`, user, {
        Authorization:
          'bearer' + process.env.NEXT_PUBLIC_FORGEDMART_STRAPI_API_TOKEN,
      });

      //return userRes.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong:', error);
    }
  },
);

//export const createUserStatus = createAsyncThunk(
//  'users/createUserStatus',
//  async (users) => {
//    try {
//      const userRes = await axios.post(usersUrl, users); // URL to API to update one user
//      return userRes.data;
//    } catch (error) {
//      console.log(error);
//      return thunkAPI.rejectWithValue('Something went wrong:', error);
//    }
//  },
//);

export const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.user.userName = action.payload.userName; // comes from session
      state.user.email = action.payload.email; // comes from session
      state.user.role = action.payload.role; // only this value comes from payload
      state.user.image = action.payload.image; // comes from session
      state.isLoading = action.payload.isLoading; // comes from session
    },
  },
  // LifeCycle Actions
  extraReducers: (builder) => {
    builder
      .addCase(getUserStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserStatus.rejected, (state) => {
        state.isLoading = null;
      });
  },
  //  extraReducers: (builder) => {
  //    builder
  //      .addCase(createUserStatus.pending, (state) => {
  //        state.isLoading = true;
  //      })
  //      .addCase(createUserStatus.fulfilled, (state, action) => {
  //        state.isLoading = false;
  //        state.user = action.payload;
  //      })
  //      .addCase(createUserStatus.rejected, (state) => {
  //        state.isLoading = false;
  //      });
  //  },
});

// Action creators are generated for each case reducer function
export const { userInfo } = userStatusSlice.actions;

export default userStatusSlice.reducer;
