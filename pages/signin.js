import Link from 'next/link';
import {
  getCsrfToken,
  getSession,
  getProviders,
  signIn,
} from 'next-auth/react';

export default function SignIn({ csrfToken, providers }) {
  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 mb-2 text-sm text-gray-600">
                <Link href="/#how-it-works">
                  <a className="font-medium text-red-600 hover:text-red-500">
                    Click to request a demo
                  </a>
                </Link>
              </p>
            </div>
            <div>
              {Object.values(providers).map((provider) => (
                <div
                  key={provider.name}
                  className="flex justify-center block w-full appearance-none rounded-md border mb-3
        border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
        focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                >
                  <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form method="post" action="/api/auth/signin/email">
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="email_style m-auto text-center w-full rounded-md outline-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs mb-3"
                    placeholder="Enter your email"
                  />

                  <button
                    type="submit"
                    className="block w-full appearance-none rounded-md border bg-red-500 text-white
        border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm mt-3
        focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  >
                    Sign in with Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 w-full object-cover"
            src="/images/storeowner.jpg"
            alt="login-image"
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: { csrfToken, providers },
  };
}
