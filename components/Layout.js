import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ForgedMart</title>
        <meta
          name="description"
          content="ForgedMart - Helping eCommerce businesses attain Unicorn status. From growth funding to brand building strategies, brand marketing to investor relations strategies..."
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
