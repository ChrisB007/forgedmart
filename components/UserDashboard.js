import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import Metrics from './Metrics';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import CreatorsMetrics from './CreatorsMetrics';
import AgencyMetrics from './AgencyMetrics';
import { transactions } from './Transactions';
import { useRouter } from 'next/router';

const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UserDashboard() {
  const { data: session } = useSession();
  const { user } = useSelector((store) => store.userStatus);
  let router = useRouter();
  const role = true;

  const handleClick = () => {
    if (role === 'Brand') {
      router.push('/dashboard/ambassadors');
    } else if (role === 'Agency') {
      console.log('This iis agency Link');
    } else if (role === 'Ambassador') {
      console.log('This is Ambassador link');
    } else {
      console.log('You have no role');
    }
  };

  return (
    <>
      <main className="flex-1 pb-8">
        {/* Page header */}

        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="min-w-0 flex-1">
                {/* Profile */}
                <div className="flex items-center">
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src={session?.user?.image}
                    alt="profile-image"
                  />
                  <div>
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src={session?.user?.image}
                        alt="profile-image"
                      />
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                        Welcome, {session?.user?.name}
                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                        <UserGroupIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-800"
                          aria-hidden="true"
                        />
                        {role === 'Brand'
                          ? 'Brand'
                          : role === 'Agency'
                          ? 'Agency'
                          : role === 'Ambassador'
                          ? 'Ambassador'
                          : 'You have no role'}
                      </dd>
                      <dt className="sr-only">Account status</dt>
                      <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                        <CheckCircleIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                          aria-hidden="true"
                        />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                {/*<p className="inline-flex items-center text-sm">Creator?</p>*/}

                <button
                  id="allCick"
                  onClick={handleClick}
                  className="inline-flex items-center rounded-md border
                  border-transparent bg-green-600 px-4 py-2 text-sm font-medium
                  text-white shadow-sm hover:bg-slate-700 focus:outline-none
                  focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  {role === 'Brand'
                    ? 'Hire Brand Ambassador'
                    : role === 'Agency'
                    ? ''
                    : role === 'Ambassador'
                    ? 'Get Hired'
                    : 'You have no role'}
                </button>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  id="allSecButton"
                  onClick={handleClick}
                  className="inline-flex items-center rounded-md border
                  border-transparent bg-red-600 px-4 py-2 text-sm font-medium
                  text-white shadow-sm hover:bg-slate-700 focus:outline-none
                  focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  {role === 'Brand'
                    ? 'Work with our Agency'
                    : role === 'Agency'
                    ? ''
                    : role === 'Ambassador'
                    ? "Let's go Viral"
                    : 'You have no role'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Overview
            </h2>
            <div>
              {/* Card */}
              {role === 'Brand' ? (
                <Metrics />
              ) : role === 'Agency' ? (
                <AgencyMetrics />
              ) : role === 'Ambassador' ? (
                <CreatorsMetrics />
              ) : (
                'No card UI'
              )}
            </div>
          </div>

          <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
            Recent activities
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul
              role="list"
              className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
            >
              {transactions ? (
                transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <span className="flex items-center space-x-4">
                      <span className="flex flex-1 space-x-2 truncate">
                        <BanknotesIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col truncate text-sm text-gray-500">
                          <span className="truncate">{transaction.name}</span>
                          <span>
                            <span className="font-medium text-gray-900">
                              {transaction.amount}
                            </span>{' '}
                            {transaction.currency}
                          </span>
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </li>
                ))
              ) : (
                <li className="flex items-center justify-end ">
                  You do not have any activity yet.
                </li>
              )}
            </ul>

            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
              aria-label="Pagination"
            >
              {transactions.length > 0 ? (
                <div className="flex flex-1 justify-between sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
              ) : null}
            </nav>
          </div>

          {/* Activity table (small breakpoint and up) */}
          <div className="hidden sm:block">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mt-2 flex flex-col">
                <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Description
                        </th>
                        <th
                          className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Amount
                        </th>
                        <th
                          className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                          scope="col"
                        >
                          Status
                        </th>
                        <th
                          className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {transactions.length > 0 ? (
                        transactions.map((transaction) => (
                          <tr key={transaction.id} className="bg-white">
                            <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              <div className="flex">
                                <a
                                  href={transaction.href}
                                  className="group inline-flex space-x-2 truncate text-sm"
                                >
                                  <BanknotesIcon
                                    className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <p className="truncate text-gray-500 group-hover:text-gray-900">
                                    {transaction.name}
                                  </p>
                                </a>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                              <span className="font-medium text-gray-900">
                                {transaction.amount}
                              </span>
                              {transaction.currency}
                            </td>
                            <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                              <span
                                className={classNames(
                                  statusStyles[transaction.status],
                                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
                                )}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                              <time dateTime={transaction.datetime}>
                                {transaction.date}
                              </time>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="flex items-center justify-end ">
                          <td>You do not have any activity yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing{' '}
                        <span className="font-medium">
                          {transactions.length}
                        </span>{' '}
                        to{' '}
                        <span className="font-medium">
                          {transactions.length}
                        </span>{' '}
                        of{' '}
                        <span className="font-medium">
                          {transactions.length}
                        </span>{' '}
                        results
                      </p>
                    </div>
                    {transactions.length > 0 ? (
                      <div className="flex flex-1 justify-between sm:justify-end">
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Next
                        </a>
                      </div>
                    ) : null}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
