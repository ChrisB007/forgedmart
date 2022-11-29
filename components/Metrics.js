import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const stats = [
  {
    name: 'Total Number of Retail stores',
    stat: '0',
    previousStat: '96',
    change: '0%',
    changeType: 'increase',
    misc: 'Sell your products in retail stores',
    href: '/dashboard/retail_sales',
    message: 'stores sells your product',
  },
  {
    name: 'Total number of orders this month',
    stat: '0',
    previousStat: '0',
    change: '0.0%',
    changeType: 'increase',
    misc: 'Grow your Brand',
    href: '/dashboard/listen',
    message: '',
  },
  {
    name: 'Brand Valuation',
    stat: 'TBD',
    previousStat: '--',
    change: '0',
    changeType: 'decrease',
    misc: "What's my Valuation",
    href: '/dashboard/valuation',
    message: '',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Metrics() {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {`out of ${item.previousStat}
                    ${item.message}`}
                </span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </div>
            </dd>
            <div className="mt-4 text-sm font-medium text-gray-700">
              <Link href={item.href}>
                <a>{item.misc}</a>
              </Link>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
