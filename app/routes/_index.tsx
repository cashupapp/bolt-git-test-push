import { Link } from "@remix-run/react";
import { FeaturedCars } from "~/components/FeaturedCars";
import { Hero } from "~/components/Hero";
import { SearchBar } from "~/components/SearchBar";
import { WhyChooseUs } from "~/components/WhyChooseUs";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchBar />
      <FeaturedCars />
      <WhyChooseUs />
      <ContactInfo /> {/* Add the ContactInfo component */}
    </div>
  );
}

function ContactInfo() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt text-4xl text-gray-700 mb-2"></i>
            <p className="text-gray-700 text-lg">
              123 Main Street, Anytown, CA 91234
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-phone text-4xl text-gray-700 mb-2"></i>
            <p className="text-gray-700 text-lg">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-envelope text-4xl text-gray-700 mb-2"></i>
            <p className="text-gray-700 text-lg">
              info@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
