export function Hero() {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Perfect Car
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-300">
          Browse through our extensive collection of premium vehicles and find the
          one that matches your style and needs.
        </p>
        <div className="mt-10">
          <a
            href="#search"
            className="rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100"
          >
            Start Browsing
          </a>
        </div>
      </div>
    </div>
  );
}
