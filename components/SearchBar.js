import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useRef } from 'react';
import ResultGrid from './ResultGrid';

const SearchBar = () => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    inputRef.current.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseURL = `${process.env.NEXT_PUBLIC_SEARCH_ALL}/search?q=${inputRef.current.value}`;

    try {
      let response = await fetch(baseURL);
      let data = await response.json();

      let posts = data.posts;

      //<ResultGrid posts={posts} />;
    } catch (error) {
      console.log(error);
    }

    if (!inputRef.current.value) return;
    inputRef.current.value = '';
  };

  return (
    <div className="flex flex-1">
      <form onSubmit={handleSubmit} className="flex w-full md:ml-0">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2"
            aria-hidden="true"
          >
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="search-field"
            name="search-field"
            className="block border border-solid rounded-full bg-gray-100 border-gray-400 h-full w-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 sm:text-sm focus:outline-none"
            placeholder="Search conversations by keywords"
            type="search"
            ref={inputRef}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="hidden mt-3  w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
