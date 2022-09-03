import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import Funding from '../components/Fundform';

const transferFeatures = [
  {
    id: 1,
    name: 'Funding & Growth',
    description:
      'In order to facilitate growth, you need capital. This is optional but recommended if you are planning to scale your business but running low on funds or do not have enough capital after expenses are taken care of. We can provide funding and resources for you to grow faster.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Branding & Marketing',
    description:
      'Selling your own products with your company name and logo is a key factor when it comes to branding. If you are not currently selling your own brand product we work with an array of product designers and manufacturers that can help bring your ideas to life as well as a winning go-to-market strategy.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Exit Strategy',
    description:
      'At this point, your company has a track record of successfully operating over some time, and you are now ready to reap the benefits of your hard work either to be acquired by a bigger company or make offerings to go public.',
    icon: BoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Dedicated Team',
    description:
      'Your company will be assigned an Account Manager to oversee your growth along with dedicated experts in marketing and branding. Your Account Manager will put together a road map with an executable plan to succeed.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Access to Funding',
    description:
      'Let\'s start by saying that this is not a loan. However, it is a "recommended" revenue-based financing that you can choose (if needed) to access. Your company will have revolving access to funds for you to grow faster after all the faster you grow, the sooner you attain unicorn status',
    icon: EnvelopeIcon,
  },
  {
    id: 2,
    name: 'Dedicated Branding & Marketing team',
    description:
      'Our team will propose branding ideas, help improve your marketing performance on the web as well as parallel your social media effort so that you can acquire more customers and increase profitability',
    icon: EnvelopeIcon,
  },
  {
    id: 2,
    name: 'Exit Strategy Advisor',
    description:
      'As exciting as it sounds to run your company forever, most entrepreneurs plan on retiring at some point and exiting the company. You need an expert to advise you on when is right to exit, how exit strategy helps your business valuation, types of exit strategies, which strategy is best for your company e.t.c.',
    icon: EnvelopeIcon,
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Providing robust strategies you need to Scale and Exit
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            From growth funding to brand building strategies, brand marketing to
            investor relations strategies, we provide practical value that
            accelerates growth for eCommerce businesses.
          </p>
        </div>

        <div
          id="how-it-works"
          className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
        >
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              How it works
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              The way we work with every company is tailored to their specific
              needs. However, it falls within these categories
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>

            <div className="relative mx-auto home-form">
              <Funding />
            </div>
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                What to Expect
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Below are some of the services you are guaranteed to expect from
                us.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="/images/exit.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
