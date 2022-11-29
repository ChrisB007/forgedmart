import GrowthFunding from '../../components/Funding';
import { useSession } from 'next-auth/react';
import Sidebar from '../../components/Sidebar';
import { useSelector } from 'react-redux';
import FirstPageModal from '../../components/FirstPageModal';

const Funding = () => {
  const { data: session } = useSession();
  const { role } = useSelector((state) => state.userStatus.user);

  return (
    <div className="dashlog min-h-full">
      {/* Static sidebar for desktop  */}
      <div className="sidebar-bg">
        <Sidebar session={session} role={role} />
      </div>
      <FirstPageModal />
      {session && role === 'Brand' ? (
        <GrowthFunding role={role} session={session} />
      ) : (
        'You have no role'
      )}
    </div>
  );
};

export default Funding;
