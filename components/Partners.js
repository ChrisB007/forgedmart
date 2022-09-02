/* This example requires Tailwind CSS v2.0+ */
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
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-white-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-white-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/laravel-logo-white-400.svg"
              alt="Laravel"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-white-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-white-50 py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statamic-logo-white-400.svg"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
