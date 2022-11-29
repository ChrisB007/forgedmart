import Hero from '../components/Hero';
import Services from '../components/Services';
import Tech from '../components/Technology';
import { getSession } from 'next-auth/react';
import Creators from '../components/Creators';

const Index = () => {
  return (
    <>
      <Hero />
      <Services />
      <Creators />
      <Tech />
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
