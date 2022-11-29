import {
  UserGroupIcon,
  IdentificationIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const ambassadors = [
  {
    id: 1,
    name: 'Grow your Channels',
    description:
      'Whether you have a few hundreds or thousand followers, our real-time "listening tool" can help grow your social media presence exponentially and organically.',
    icon: UserGroupIcon,
  },
  {
    id: 2,
    name: 'Become Brand Ambassador',
    description:
      'Brands are always looking for ways to collaborate with Influencers who can help them grow. Make money representing and promoting eCommerce brands and their products to your followers and beyond. ',
    icon: IdentificationIcon,
  },
  {
    id: 3,
    name: 'Ambassador Program',
    description:
      'Pool followers and share resources with other Ambassadors looking to grow their channels. Share links to each others contents and channels within the same categories, receive hot tips from guest pros on how to grow your channels.',
    icon: AcademicCapIcon,
  },
];

export default function Creators() {
  return (
    <div id="creators" className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              For Brand Ambassadors
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
                    src="/images/creators.jpg"
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
                Growing your channels organically shouldn&apos;t put you between
                a rock and a hard place. Our platform provide tools that you can
                use to grow and monetize your social media channels as Brand
                Ambassadors.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="mb-6 text-lg">
                Get hired as an Ambassador to promote eCommerce Brands whose
                products align with your channel goals.
              </p>
              {ambassadors.map((item) => {
                return (
                  <div key={item.id} className="relative mt-5">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className=" ml-16 text-lg text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                );
              })}

              <div className="logo-list mt-12 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                <div className="flex flex-wrap items-start justify-between">
                  <div className="flex justify-center px-1 mt-1">
                    <img
                      className="h-9 sm:h-10 "
                      src="/images/iglogo.png"
                      alt="Shopify"
                    />
                  </div>
                  <div className="flex justify-center px-1  mt-1">
                    <img
                      className="h-9 sm:h-10"
                      src="/images/twitter.png"
                      alt="BigCommerce"
                    />
                  </div>
                  <div className="flex justify-center px-1 mt-1">
                    <img
                      className="h-9 sm:h-10"
                      src="/images/ytubelogo.png"
                      alt="social media"
                    />
                  </div>
                  <div className="flex justify-center px-1 mt-1">
                    <img
                      className="h-9 sm:h-10"
                      src="/images/tik.png"
                      alt="social media"
                    />
                  </div>
                  <div className="flex justify-center px-1 mt-1">
                    <img
                      className="h-9 sm:h-10"
                      src="/images/fblogo.png"
                      alt="faire"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
