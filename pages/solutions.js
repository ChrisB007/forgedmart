/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Our Solutions
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/ecomm.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                We invest various resources in helping eCommerce business
                partners scale and increase ROI through funding, brand
                marketing, and eventually providing an exit strategy.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <div className="mb-3">
                <h2 className="text-lg font-bold ">Capital</h2>
                <p>
                  With the right products/services, management teams, and
                  customers - any company can achieve unicorn status. We along
                  with our financial partners provide suites of financial
                  products to help fund growth for our eCommerce partners.
                </p>
                <ul role="list" className="font-bold list-disc m-4">
                  <li>Equity-free. Bias-free. Hassle-free funding</li>
                  <li>This is NOT a loan</li>
                  <li>Repayment based on generated sales/revenue.</li>
                </ul>
              </div>
              <div className="mb-3">
                <h2 className="text-lg font-bold ">
                  Brand Building & Marketing
                </h2>
                <p>
                  Once growth financing is secured we work closely with our
                  eCommerce partners in parallel to their ongoing effort to
                  address the following.
                </p>
                <ul role="list" className="font-bold list-disc m-4">
                  <li>Establishing Brand Identity</li>
                  <li>Solidifying your business as a Brand</li>
                  <li>Addressing Brand Equity/Value</li>
                  <li>Strategic Communication</li>
                  <li>Reputation Building</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>Social Media Marketing</li>
                </ul>
              </div>
              <h2 className="text-lg font-bold ">Exit Strategy</h2>
              <p>
                Transferring ownership of your company to a third party when you
                are ready to let go can be a daunting task - This is how you get
                a return on the hard work invested in the business. Common exit
                strategies include being acquired by another company, the sale
                of equity or going public with a SPAC, it’s never too early to
                plan ahead.
              </p>
              <ul role="list" className="font-bold list-disc m-4">
                <li>We identify the right time for your exit strategy</li>
                <li>We assign dedicated Exit Strategy Advisor</li>
                <li>Exit via IPO, SPAC, Private sale.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
