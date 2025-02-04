import { Link } from "@remix-run/react";
import { featuredCars } from "~/data/cars";

export function FeaturedCars() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Featured Vehicles
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car) => (
            <div key={car.id} className="group relative">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  <Link to={`/cars/${car.id}`}>
                    <span className="absolute inset-0" />
                    {car.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{car.description}</p>
                <p className="mt-2 text-lg font-medium text-gray-900">
                  {car.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
