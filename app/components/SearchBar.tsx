export function SearchBar() {
  return (
    <div id="search" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-gray-50 p-8 shadow-sm">
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                Make
              </label>
              <select
                id="make"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option>Any Make</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Audi</option>
                <option>Tesla</option>
              </select>
            </div>

            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="model"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option>Any Model</option>
                <option>Model S</option>
                <option>Model 3</option>
                <option>Model X</option>
                <option>Model Y</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Max Price
              </label>
              <select
                id="price"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option>No Max Price</option>
                <option>$30,000</option>
                <option>$50,000</option>
                <option>$75,000</option>
                <option>$100,000+</option>
              </select>
            </div>

            <div>
              <label className="invisible block text-sm font-medium text-gray-700">
                Search
              </label>
              <button
                type="submit"
                className="mt-1 w-full rounded-md bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search Cars
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
