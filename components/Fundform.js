import { useState } from 'react';
import { useRouter } from 'next/router';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import FormComponent from './FormComponent';

const reducer = (state, action) => {
  //This function takes in a default state, and dispatches an action on it
};

export default function Funding() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: '',
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
      const { email } = userData;

      if (email) {
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              email: email,
            },
          }),
        });
        const data = await response.json();

        // REDIRECT TO TEST DRIVE PAGE HERE
        console.log(data);
        setUserData({
          email: '',
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
      <form onSubmit={handleSubmit}>
        <div
          id="funding-form"
          className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        >
          <div id="formDiv" className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Take a test drive
              </h2>
            </div>
          </div>
        </div>
        <div className="flex min-h-full items-center justify-center pt-12 px-4 sm:px-8 lg:px-8">
          <FormComponent
            type="email"
            name="email"
            value={userData.value}
            handleChange={handleChange}
          />
        </div>
        <div className=" h-20 w-96 flex justify-center lg:pl-14 mb-16">
          <button
            type="submit"
            className="flex w-[60%] h-[46px]  justify-center rounded-md border border-transparent bg-red-600 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try it now
          </button>
        </div>
      </form>
    </>
  );
}
