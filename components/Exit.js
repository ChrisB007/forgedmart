import { useState } from 'react';
export default function Exit() {
  const [exitData, setExitData] = useState({
    brand_name: '',
    website: '',
    about: '',
    advisory_team: '',
    transition_plan: '',
    transition_structure: '',
    first_name: '',
    position: '',
    country: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setExitData({ ...exitData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        brand_name &&
        website &&
        about &&
        advisory_team &&
        transition_plan &&
        transition_structure &&
        first_name &&
        position &&
        country
      ) {
        const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/exit`;
        const exitResponse = await fetch(baseUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              brand_name: exitData.brand_name,
              website: exitData.website,
              about: exitData.about,
              advisory_team: exitData.advisory_team,
              transition_plan: exitData.transition_plan,
              transition_structure: exitData.transition_structure,
              first_name: exitData.first_name,
              position: exitData.position,
              country: exitData.country,
            },
          }),
        });

        const data = await exitResponse.json();

        setExitData({
          brand_name: '',
          website: '',
          about: '',
          advisory_team: '',
          transition_plan: '',
          transition_structure: '',
          first_name: '',
          position: '',
          country: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-6 md:px-40 lg:px-64" action="#" method="POST">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Looking to sell your brand?
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We&apos;ll give you the best strategies for a successful exit.
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
                value={exitData.brand_name}
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
                    value={exitData.website}
                    onChange={handleChange}
                    id="website"
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
                Tell us about your brand
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full pl-2 rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  placeholder="Tell us about your Brand"
                  value={exitData.about}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="advisory_team"
                className="block text-sm font-medium text-gray-700"
              >
                What will you do post-exit?
              </label>
              <div className="mt-1">
                <textarea
                  id="advisory_team"
                  name="advisory_team"
                  rows={3}
                  className="block w-full pl-2 rounded-md  border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                  placeholder="Tell us about your Brand"
                  value={exitData.advisory_team}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="transition_plan"
                className="block text-sm font-medium text-gray-700"
              >
                When do you plan to exit?
              </label>
              <select
                id="transition_plan"
                name="transition_plan"
                autoComplete="transition_plan"
                value={exitData.transition_plan}
                onChange={handleChange}
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`ASAP`}>As soon as possible</option>
                <option value={`six_months`}>In 6 Months</option>
                <option value={`one-year`}>In a Year</option>
                <option value={`two_years`}>In Two Years</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="transition_plan"
                className="block text-sm font-medium text-gray-700"
              >
                Do you have a transition plan?
              </label>
              <select
                id="transition_plan"
                name="transition_plan"
                autoComplete="transition_plan"
                value={exitData.transition_plan}
                onChange={handleChange}
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`Yes`}>Yes</option>
                <option value={`No`}>No</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="transition_structure"
                className="block text-sm font-medium text-gray-700"
              >
                Is your business structured for the transition?
              </label>
              <select
                id="transition_structure"
                name="transition_structure"
                autoComplete="laon"
                value={exitData.transition_structure}
                onChange={handleChange}
                className="mt-1 block w-full pl-2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
              >
                <option value={`Yes`}>Yes</option>
                <option value={`No`}>No</option>
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
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={exitData.first_name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Your name"
                  className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
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
                  autoComplete="position"
                  placeholder="e.g - Founder"
                  value={exitData.position}
                  onChange={handleChange}
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
                  value={exitData.country}
                  onChange={handleChange}
                  autoComplete="country"
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
