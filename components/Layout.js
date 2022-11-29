import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';
import Sidebar from './Sidebar';
import { getSession, useSession } from 'next-auth/react';

const Layout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>ForgedMart</title>
        <meta
          name="description"
          content="ForgedMart - Helping eCommerce businesses attain Unicorn status. From growth funding to brand building strategies, brand marketing to investor relations strategies..."
        />
        <meta
          name="keywords"
          content="forgedmart, shopify, shopify stores, brand your business, branding your company, brand companies, amazon fba program, shopify partners, funding,amazon fba business, business loans, shopify website, shopifyplus, amazon seller, amazon fba, big commerce, ecommerce"
        />
      </Head>
      <Nav />
      {session && <Sidebar />}
      {children}
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default Layout;
