export default function Partners() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-white-600">
          Partners we are lucky to work with
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img
              className="max-h-12"
              src="/images/clearone.jpeg"
              alt="Clearco"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img className="max-h-12" src="/images/capp.png" alt="Capchase" />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img className="max-h-12" src="/images/stripe.png" alt="Stripe" />
          </div>
        </div>
      </div>
    </div>
  );
}
