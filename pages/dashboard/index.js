import Dashboard from './dashboard';
import { useSession, getSession } from 'next-auth/react';
import FirstPageModal from '../../components/FirstPageModal';
import { useSelector } from 'react-redux';
import axios from 'axios';

const DashboardHome = () => {
  const { data: session } = useSession();
  const { user } = useSelector((state) => state.userStatus);

  const { role } = user;

  return (
    <>
      <FirstPageModal role={role} />
      {session && role ? (
        <Dashboard session={session} user={user} />
      ) : (
        'Select a role'
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`;

  try {
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json();
    console.log('DATA:', data);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default DashboardHome;
