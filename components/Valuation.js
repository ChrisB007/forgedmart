import { useState } from 'react';

export default function ValuationComponent() {
  const [valuationData, setValuationData] = useState({
    brand_name: '',
    website: '',
    net_income: '',
    interest: '',
    taxes: '',
    depreciation: '',
    amortization: '',
    market_cap: '',
    debt: '',
    minority: '',
    preferred_shares: '',
    cash: '',
    full_name: '',
    position: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValuationData({ ...valuationData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        valuationData.brand_name &&
        valuationData.website &&
        valuationData.net_income &&
        valuationData.interest &&
        valuationData.taxes &&
        valuationData.depreciation &&
        valuationData.amortization &&
        valuationData.market_cap &&
        valuationData.debt &&
        valuationData.minority &&
        valuationData.preferred_shares &&
        valuationData.cash &&
        valuationData.full_name &&
        valuationData.position
      ) {
        const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/valuation`;

        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              brand_name: valuationData.brand_name,
              website: valuationData.website,
              net_income: valuationData.net_income,
              interest: valuationData.interest,
              taxes: valuationData.taxes,
              depreciation: valuationData.depreciation,
              amortization: valuationData.amortization,
              market_cap: valuationData.market_cap,
              debt: valuationData.debt,
              minority: valuationData.minority,
              preferred_shares: valuationData.preferred_shares,
              cash: valuationData.cash,
              full_name: valuationData.full_name,
              position: valuationData.position,
            },
          }),
        });

        const data = await response.json();
        setValuationData({
          brand_name: '',
          website: '',
          net_income: '',
          interest: '',
          taxes: '',
          depreciation: '',
          amortization: '',
          market_cap: '',
          debt: '',
          minority: '',
          preferred_shares: '',
          cash: '',
          full_name: '',
          position: '',
        });
      } else {
        console.log('something went missing');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Formula for calculating valuation
  //  EBITDA = Net Income + interest + Taxes + Depreciation + Amortization Expense
  // Enterprise Value = (Market Capitalization + Value of Debt + Minority Interest + Preferred Shares) – (Cash & Cash Equivalents)
  // EBITDA Multiple  (Valuation) = Enterprise Value/EBITDA
  // EBITDA MARGIN = EBITDA / TOTAL REVENUE
  // EBITDA COVERAGE RATIO (ABILITY TO PAY OFF DEBT) > 1 = (EBITDA + LEASE) / (INTEREST PAYMENT + PRINCIPAL PAYMENT + LEASE PAYMENTS)

  return (
    <form className="space-y-6 md:px-40 lg:px-64" onSubmit={handleSubmit}>
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Let's find out what your business is worth
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please provide us some information about your business to help us
              calculate your valuation. You may contact your accountant for
              financial data requested below.
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
                value={valuationData.valuationData}
                onChange={handleChange}
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
                    value={valuationData.website}
                    className="block w-full pl-2 flex-1 rounded-none rounded-r-md h-12 border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>
            <h3>EBITDA</h3>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="net_income"
                className="block text-sm font-medium text-gray-700"
              >
                What is your Net Income
              </label>
              <input
                type="number"
                name="net_income"
                id="net_income"
                onChange={handleChange}
                value={valuationData.net_income}
                autoComplete="net-income"
                placeholder="Enter your Net Income"
                className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-700"
              >
                Interest
              </label>
              <input
                type="number"
                name="interest"
                id="interest"
                autoComplete="interest"
                onChange={handleChange}
                value={valuationData.interest}
                placeholder="Enter total amount on loan Interest (e.g:25000) "
                className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="taxes"
                className="block text-sm font-medium text-gray-700"
              >
                Taxes
              </label>
              <input
                type="number"
                name="taxes"
                id="taxes"
                autoComplete="taxes"
                onChange={handleChange}
                value={valuationData.taxes}
                placeholder="How much did you pay in Taxes?"
                className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="depreciation"
                className="block text-sm font-medium text-gray-700"
              >
                Depreciation
              </label>
              <input
                type="number"
                name="depreciation"
                onChange={handleChange}
                value={valuationData.depreciation}
                id="depreciation"
                autoComplete="depreciation"
                placeholder="Total amount invested in assets (e.g: equipments, vehicles e.t.c.)"
                className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="amortization"
                className="block text-sm font-medium text-gray-700"
              >
                Amortization Expense
              </label>
              <input
                type="number"
                name="amortization"
                id="amortization"
                autoComplete="amortization"
                placeholder="Amortization Expense"
                onChange={handleChange}
                value={valuationData.amortization}
                className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Enterprise Value
            </h3>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="market_cap"
                  className="block text-sm font-medium text-gray-700"
                >
                  Market Capitalization
                </label>
                <input
                  type="text"
                  name="market_cap"
                  id="market_cap"
                  autoComplete="market_cap"
                  placeholder="What is your market cap?"
                  value={valuationData.market_cap}
                  onChange={handleChange}
                  className="mt-1 block pl-2 w-full h-12 border border-gray-600 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="debt"
                  className="block text-sm font-medium text-gray-700"
                >
                  Value of Debt
                </label>
                <input
                  type="text"
                  name="debt"
                  id="debt"
                  onChange={handleChange}
                  value={valuationData.debt}
                  autoComplete="debt"
                  placeholder="Total amount owed"
                  className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="minority"
                  className="block text-sm font-medium text-gray-700"
                >
                  Minority Interest
                </label>
                <input
                  type="text"
                  name="minority"
                  id="minority"
                  autoComplete="minority"
                  placeholder=""
                  onChange={handleChange}
                  value={valuationData.minority}
                  className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="preferred_shares"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Shares
                </label>
                <input
                  type="text"
                  name="preferred_shares"
                  id="preferred_shares"
                  autoComplete="preferred_shares"
                  onChange={handleChange}
                  value={valuationData.preferred_shares}
                  placeholder=""
                  className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="cash"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cash & Cash Equivalents
                </label>
                <input
                  type="text"
                  name="cash"
                  id="cash"
                  autoComplete="cash"
                  value={valuationData.cash}
                  onChange={handleChange}
                  placeholder="How much cash on hand?"
                  className="mt-1 block w-full pl-2 rounded-md h-12 border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                />
              </div>
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
                  placeholder="Your name"
                  value={valuationData.full_name}
                  onChange={handleChange}
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
                  value={valuationData.position}
                  placeholder="e.g - Founder"
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
                  autoComplete="country-name"
                  value={valuationData.country}
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
