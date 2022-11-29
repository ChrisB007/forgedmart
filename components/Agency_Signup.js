import { useState } from 'react';
import Pricing from './Pricing';

export default function AgencySignup() {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    about: '',
    clients: '',
    name: '',
    email: '',
    position: '',
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
        formData.company &&
        formData.website &&
        formData.about &&
        formData.clients &&
        formData.name &&
        formData.position &&
        formData.country
        //  formData.plan
      ) {
        const baseURL = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/agency-signups`;

        const response = await fetch(baseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            data: {
              company: formData.company,
              website: formData.website,
              about: formData.about,
              clients: formData.clients,
              name: formData.name,
              position: formData.position,
              country: formData.country,
            },
          }),
        });
        const data = await response.json();
        setFormData({
          company: '',
          website: '',
          about: '',
          clients: '',
          name: '',
          email: '',
          position: '',
          country: '',
        });
      } else {
        console.log('Some fields are missing');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:px-40 lg:px-64">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Agency Account
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please use this form to apply for an agency account. With an
              agency account you can setup sub-accounts to launch and manage
              campaigns for your clients.
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
                value={formData.company}
                autoComplete="company"
                className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                onChange={handleChange}
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
                    className="block w-full pl-2 flex-1 rounded-none rounded-r-md h-12 border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                    placeholder="www.example.com"
                    onChange={handleChange}
                    value={formData.website}
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
                  placeholder="Tell us about your Agency"
                  onChange={handleChange}
                  value={formData.about}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="clients"
                className="block text-sm font-medium text-gray-700"
              >
                Number of Clients
              </label>
              <input
                type="number"
                name="clients"
                id="clients"
                autoComplete="clients"
                onChange={handleChange}
                value={formData.clients}
                className="mt-1 block w-full pl-2 text-lg rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
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
                  autoComplete="name"
                  onChange={handleChange}
                  value={formData.name}
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
                  autoComplete="email"
                  onChange={handleChange}
                  value={formData.email}
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
                  autoComplete="email"
                  onChange={handleChange}
                  value={formData.position}
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
                  autoComplete="country"
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
      <div>
        <Pricing /> {/*How to use props in this component*/}
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
