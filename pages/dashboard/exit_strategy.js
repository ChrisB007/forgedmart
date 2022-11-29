import { useSession } from 'next-auth/react';
import Exit from '../../components/Exit';
import FirstPageModal from '../../components/FirstPageModal';
import Sidebar from '../../components/Sidebar';
import { useSelector } from 'react-redux';

const Exit_Strategy = () => {
  const { data: session } = useSession();
  const { role } = useSelector((state) => state.userStatus.user);
  return (
    <div className="dashlog min-h-full">
      {/* Static sidebar for desktop  */}
      <div className="sidebar-bg">
        <Sidebar session={session} role={role} />
      </div>
      <FirstPageModal />
      <Exit />
    </div>
  );
};

export default Exit_Strategy;
