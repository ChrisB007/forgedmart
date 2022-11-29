import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function FirstPageModal() {
  <></>;
}

/*
// _app.js

import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import store from '../store';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;



//////////////////////

//Slice.js

import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    role: ""
  },
};

export const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.user.role = action.payload.role; // only this value comes from payload onClick
    },
  },
});

// Action creators are generated for each case reducer function
export const { userInfo } = userStatusSlice.actions;

export default userStatusSlice.reducer;

//////////////////////////////////////////////////////

//store.js

import { configureStore } from '@reduxjs/toolkit';
import userStatusSlice from './slices/userSlice/userStatus';

export default configureStore({
  reducer: {
    userStatus: userStatusSlice,
  },
});



////////////////////////////////////////////////////////////

//First Page

import { useSession, getSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

const firstPage = () => {
  const { data: session } = useSession();
  const { role } = useSelector((state) => state.userStatus.user);

  console.log(role); // There is role successfully logged to the console

  return (
    <>
    </>
  );
};

export default firstPage;


////////////////////////////

//Second page.js

import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

const secondPage = () => {
  const { data: session } = useSession();
  const { role } = useSelector((state) => state.userStatus.user);

  console.log(role) // There is NO role - why?

  return (
    <>
    </>
  );
};

export default secondPage;

*/
