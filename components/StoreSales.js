import { useState } from 'react';
import Link from 'next/link';

export default function Exit() {
  const [formData, setFormData] = useState({
    brand_name: '',
    website: '',
    about: '',
    branded: '',
    capital: '',
    in_stores: '',
    start_date: '',
    email: '',
    name: '',
    country: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        formData.brand_name &&
        formData.website &&
        formData.about &&
        formData.branded &&
        formData.capital &&
        formData.in_stores &&
        formData.start_date &&
        formData.email &&
        formData.name &&
        formData.country
      ) {
        const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/retail-sales`;

        const retailResponse = await fetch(baseUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              brand_name: formData.brand_name,
              website: formData.website,
              about: formData.about,
              branded: formData.branded,
              capital: formData.capital,
              in_stores: formData.in_stores,
              start_date: formData.start_date,
              email: formData.email,
              name: formData.name,
              country: formData.country,
            },
          }),
        });
        const data = await retailResponse.json();
        setFormData({
          brand_name: '',
          website: '',
          about: '',
          branded: '',
          capital: '',
          in_stores: '',
          start_date: '',
          email: '',
          name: '',
          country: '',
        });
      } else {
        console.log('something is missing');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-6 md:px-40 lg:px-64">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Let&apos;s get your products on the shelves
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We have a growing number of retail stores we&apos;ve established
              partnerships with, and can introduce your products to. These
              stores host and sell products ranging from Wellness, Apparel, and
              Beauty to Kids, Organic, and Energy drinks. Use this form to let
              us know about your products, and want them sold at retail store
              locations.
            </p>
          </div>
          <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="brand_name"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Name
              </label>
              <input
                type="text"
                name="brand_name"
                id="brand_name"
                autoComplete="brand_name"
                placeholder="Your company name"
                onChange={handleChange}
                value={formData.brand_name}
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
                    value={formData.website}
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
                Tell us about your Products
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full pl-2 rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  placeholder="'Example: Our skincare product help treat eczema' "
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="branded"
                className="block text-sm font-medium text-gray-700"
              >
                Are your products branded with your brand name/ logo?
              </label>
              <select
                id="branded"
                name="branded"
                autoComplete="branded"
                value={formData.branded}
                onChange={handleChange}
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`yes`}>Yes</option>
                <option value={`no`}>No</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="capital"
                className="block text-sm font-medium text-gray-700"
              >
                Do you have budget /working capital set aside?
              </label>
              <select
                id="capital"
                name="capital"
                autoComplete="capital"
                value={formData.capital}
                onChange={handleChange}
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`no`}>No</option>
                <option value={`yes`}>Yes</option>
              </select>
            </div>
            <Link href="/dashboard/funding">
              <a className="text-xs underline">Apply for funding</a>
            </Link>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="in_stores"
                className="block text-sm font-medium text-gray-700"
              >
                Are your products currently sold in stores
              </label>
              <select
                id="in_stores"
                name="in_stores"
                value={formData.in_stores}
                onChange={handleChange}
                autoComplete="in_stores"
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`no`}>No</option>
                <option value={`yes`}>Yes</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700"
              >
                How soon do you want to start?
              </label>
              <select
                id="start_date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                autoComplete="no"
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`Asap`}>As soon as possible</option>
                <option value={`six_months`}>Within six months</option>
                <option value={`one_year`}>Within a year</option>
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
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Your name"
                  className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="e.g - Founder"
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
                  value={formData.country}
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
  );
}
