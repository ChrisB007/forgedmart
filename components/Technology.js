import {
  CreditCardIcon,
  ChatBubbleLeftIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

const supportLinks = [
  {
    name: 'Listening Tool',
    href: '#',
    description:
      'Our listening tool sets, monitors, and listens for keywords relevant to your Brand/products mentioned anywhere on the web and on most social media platforms in real-time.',
    icon: BellIcon,
  },
  {
    name: 'Human Touch',
    href: '#',
    description:
      'Once an opportunity is identified through our listening tool, our associates then responds back with a message to contribute to the conversation all the while plugging your product.',
    icon: ChatBubbleLeftIcon,
  },
  {
    name: 'Sales Tool',
    href: '#',
    description:
      "Monitoring the desired keywords and hashtags with predefined search parameters helps track brands' reputations while doubling up as an effective sales tool.",
    icon: CreditCardIcon,
  },
];

export default function Tech() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/images/techno.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Technology
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Our platform uses the power of technology to automatically identify
            opportunities in social media posts through real-time listening
            tools, accompanied by human expertise and resources to monitor and
            engage brand products in social media conversations.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-red-600 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-red-700 hover:text-red-600"
                >
                  Get started<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
