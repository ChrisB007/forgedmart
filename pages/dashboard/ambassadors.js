import React from 'react';
import Influencer from '../../components/Ambassadors';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import Sidebar from '../../components/Sidebar';

const Ambassadors = () => {
  const { isLoading, user } = useSelector((store) => store.userStatus);
  const { role } = user;
  const { data: session } = useSession();

  return (
    <main>
      <div className="dashlog min-h-full">
        {/* Static sidebar for desktop  */}
        <div className="sidebar-bg">
          <Sidebar session={session} role={role} />
        </div>
        <Influencer />
      </div>
    </main>
  );
};

export default Ambassadors;
