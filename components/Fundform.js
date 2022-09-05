import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function Funding() {
  return (
    <>
      <div
        id="funding-form"
        className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Establish an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Name
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="website"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your website"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Name
                </label>
                <input
                  id="revenue"
                  name="revenue"
                  type="text"
                  autoComplete="revenue"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="What is your monthly revenue (In numbers)"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Name
                </label>
                <input
                  id="month"
                  name="month"
                  type="number"
                  autoComplete="month"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="How long (In months)"
                />
              </div>
              <div>
                <input
                  id="file"
                  name="file-name"
                  type="file"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Select a file"
                />
                <label
                  htmlFor="file-upload"
                  className="text-sm flex justify-center"
                >
                  Upload your Revenue Report for the time stated above
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white-500 group-hover:text-white-400"
                    aria-hidden="true"
                  />
                </span>
                Start Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
