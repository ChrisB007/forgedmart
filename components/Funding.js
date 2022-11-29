import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function GrowthFunding({ session, role }) {
  const [fundData, setFundData] = useState({
    company: '',
    website: '',
    about: '',
    platform: '',
    revenue: '',
    frequency: '',
    loans: '',
    full_name: '',
    email: '',
    position: '',
    country: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFundData({ ...fundData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        fundData.company &&
        fundData.website &&
        fundData.about &&
        fundData.platform &&
        fundData.revenue &&
        fundData.frequency &&
        fundData.loans &&
        fundData.full_name &&
        fundData.email &&
        fundData.position &&
        fundData.country
      ) {
        const baseURL = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/fundings`;

        const response = await fetch(baseURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              company: fundData.company,
              website: fundData.website,
              about: fundData.about,
              platform: fundData.platform,
              revenue: fundData.revenue,
              frequency: fundData.frequency,
              loans: fundData.loans,
              full_name: fundData.full_name,
              email: fundData.email,
              position: fundData.position,
              country: fundData.country,
            },
          }),
        });

        const data = await response.json();
        setFundData({
          company: '',
          website: '',
          about: '',
          platform: '',
          revenue: '',
          frequency: '',
          loans: '',
          full_name: '',
          email: '',
          position: '',
          country: '',
        });
      } else {
        console.log('Something is missing');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="space-y-6 md:px-40 lg:px-64" onSubmit={handleSubmit}>
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Get capital for growth
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please use this form to apply for capital to fund your growth.
                This capital can be used for marketing, scale your brand,
                purchase inventory or re-brand your company and products
                entirely.
              </p>
            </div>
            <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="company"
                  placeholder="Your company name"
                  onChange={handleChange}
                  value={fundData.company}
                  className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      https://
                    </span>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      onChange={handleChange}
                      value={fundData.website}
                      className="block w-full pl-2 flex-1 rounded-none rounded-r-md h-12 border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full pl-2 rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                    placeholder="Tell us about your Brand"
                    value={fundData.about}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="platform"
                  className="block text-sm font-medium text-gray-700"
                >
                  Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  autoComplete="platform"
                  value={fundData.platform}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                >
                  <option value={`Shopify`}>Shopify</option>
                  <option value={`Amazon`}>Amazon FBA</option>
                  <option value={`WooCommerce`}>WooCommerce</option>
                  <option value={`BigCommerce`}>BigCommerce</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="revenue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Revenue from sales
                </label>
                <input
                  type="number"
                  name="revenue"
                  id="revenue"
                  autoComplete="revenue"
                  onChange={handleChange}
                  value={fundData.revenue}
                  placeholder="What's your monthly sales"
                  className="mt-1 block w-full pl-2 text-lg rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="frequency"
                  className="block text-sm font-medium text-gray-700"
                >
                  How consistently
                </label>
                <input
                  type="text"
                  name="frequency"
                  id="frequency"
                  autoComplete="frequency"
                  onChange={handleChange}
                  value={fundData.frequency}
                  placeholder="e.g: Monthly for six months"
                  className="mt-1 block w-full pl-2 text-lg rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="loan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Do you have an outstanding loan
                </label>
                <select
                  id="loan"
                  name="loan"
                  autoComplete="no"
                  value={fundData.loans}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                >
                  <option value={`No`}>No</option>
                  <option value={`Yes`}>Yes</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contact Information
              </h3>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="full_name"
                    value={fundData.full_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={fundData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    value={fundData.position}
                    onChange={handleChange}
                    autoComplete="position"
                    placeholder="e.g - Marketing Director"
                    className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={fundData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
                  >
                    <option value={`US`}>United States</option>
                    <option value={`Canada`}>Canada</option>
                    <option value={`Mexico`}>Mexico</option>
                    <option value={`UK`}>United Kingdom</option>
                    <option value={`Germany`}>Germany</option>
                    <option value={`Australia`}>Australia</option>
                    <option value={`France`}>France</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
