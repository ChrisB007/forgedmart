import Link from 'next/link';

export default function Partners() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-white-600">
          Lending Partners we are lucky to work with
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 cursor flex justify-center bg-white-50 py-8 px-8">
            <a href="https://www.onrampfunds.com" target="_blank">
              <img
                className="max-h-12"
                src="/images/onramp_logo.png"
                alt="Clearco"
              />
            </a>
          </div>
          <div className="col-span-1 cursor flex justify-center bg-white-50 py-8 px-8">
            <a href="https://www.capchase.com" target="_blank">
              <img className="max-h-12" src="/images/capp.png" alt="Capchase" />
            </a>
          </div>
          <div className="col-span-1 cursor flex justify-center bg-white-50 py-8 px-8">
            <a href="https://stripe.com" target="_blank">
              <img className="max-h-12" src="/images/stripe.png" alt="Stripe" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
