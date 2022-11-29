import {
  agencynav,
  navigation,
  ambassadornav,
  secondaryNavigation,
} from './SidebarElements';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = ({ session, role }) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 sidebar-bg mt-20 z-0 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto  divide-gray-800 pt-5 pb-4">
        <nav
          className={
            session && role === 'Agency'
              ? 'mt-5 flex flex-1 flex-col divide-y divide-gray-800 overflow-y-auto'
              : 'mt-5 flex flex-1 flex-col overflow-y-auto'
          }
          aria-label="Sidebar"
        >
          <div className="space-y-1 px-2">
            {session && role === 'Brand'
              ? navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-500 text-white'
                        : 'text-black hover:text-black',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 flex-shrink-0 text-rose-700"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))
              : session && role === 'Agency'
              ? agencynav.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-500 text-white'
                        : 'text-black hover:text-black ',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 flex-shrink-0 text-rose-700"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))
              : session && role === 'Ambassador'
              ? ambassadornav.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-500 text-white'
                        : 'text-black hover:text-black ',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 flex-shrink-0 text-rose-700"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))
              : 'There is no Sidebar UI'}
          </div>
          <div className="secNav mt-6 pt-6">
            <div className="space-y-1 px-2">
              {session && role === 'Agency'
                ? secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-gray-900 hover:bg-gray-600 hover:text-white"
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-rose-700"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))
                : null}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
