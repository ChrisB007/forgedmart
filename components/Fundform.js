import { useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const reducer = (state, action) => {
  //This function takes in a default state, and dispatches an action on it
};

export default function Funding() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: '',
    full_name: '',
    revenue: '',
    website: '',
    duration: 0,
    file_name: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/prospects`;
      if (
        userData.email &&
        userData.full_name &&
        userData.revenue &&
        userData.website &&
        userData.file_name
      ) {
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              email: userData.email,
              full_name: userData.full_name,
              revenue: userData.revenue,
              website: userData.website,
              duration: userData.duration,
              file_name: userData.file_name,
            },
          }),
        });
        const data = await response.json();
        setUserData({
          email: '',
          full_name: '',
          revenue: '',
          website: '',
          duration: 0,
          file_name: '',
        });
      } else {
        console.log('field missing');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        id="funding-form"
        className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div id="formDiv" className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Signup for free Partners Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Enter Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={userData.email}
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Enter Name
                </label>
                <input
                  id="name"
                  name="full_name"
                  value={userData.full_name}
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your Full Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="website" className="sr-only">
                  Enter Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={userData.website}
                  autoComplete="website"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your website"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="revenue" className="sr-only">
                  Enter Revenue
                </label>
                <input
                  id="revenue"
                  name="revenue"
                  type="text"
                  value={userData.revenue}
                  autoComplete="revenue"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="What is your monthly sales revenue (In numbers)"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="duration" className="sr-only">
                  Enter Duration
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  value={userData.duration}
                  autoComplete="duration"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="How long (Example: 3 months)"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="file" className="sr-only">
                  Upload File
                </label>
                <input
                  id="file"
                  name="file_name"
                  type="file"
                  autoComplete="name"
                  value={userData.file_name}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Select a file"
                  onChange={handleChange}
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
          <div>
            <Link href="/solutions">
              <a className="underline">Our Solution</a>
            </Link>
          </div>{' '}
        </div>
      </div>
    </>
  );
}
