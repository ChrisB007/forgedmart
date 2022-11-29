export default function FormComponent({
  id,
  type,
  name,
  email,
  value,
  handleChange,
  labelText,
}) {
  return (
    <>
      <div className="sm:col-span-4 w-96 p-3">
        <label
          htmlFor={name}
          className="block text-lg font-medium text-gray-700"
        >
          {`Enter your ${name}`}
        </label>
        <div className="mt-1 w-[94%] flex rounded-md shadow-sm h-8">
          <input
            id={id}
            type={type}
            name={name}
            onChange={handleChange}
            value={value}
            autoComplete={name}
            className="block w-[70%] min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/*<div className="sm:col-span-3">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <div className="mt-1">
          <select
            id={id}
            value={value}
            handleChange={handleChange}
            name={name}
            autoComplete="country-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={value}>United States</option>
            <option value={value}>Canada</option>
            <option value={value}>Mexico</option>
          </select>
        </div>
      </div>*/}
    </>
  );
}
