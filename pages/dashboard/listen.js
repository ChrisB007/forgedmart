import BrandMessage from '../../components/BrandMessage';
import InfluencerMessage from '../../components/InfluencerMessage';
import ResultGrid from '../../components/ResultGrid';
import SearchBar from '../../components/SearchBar';
import { useSession } from 'next-auth/react';
import FirstPageModal from '../../components/FirstPageModal';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';

export default function Listen() {
  const { data: session } = useSession();
  const { role } = useSelector((store) => store.userStatus.user);

  console.log(role);

  return (
    <>
      <div className="dashlog min-h-full">
        {/* Static sidebar for desktop  */}
        <div className="sidebar-bg">
          <Sidebar session={session} role={role} />
        </div>
        {session && !role ? <FirstPageModal /> : 'ddd'}
        <div className="space-y-6 md:px-40 lg:pl-64">
          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Social Marketing at it&apos;s best
                </h3>
                <BrandMessage />
                {/*<InfluencerMessage />*/}
              </div>
              <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                <SearchBar />
                <ResultGrid />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
