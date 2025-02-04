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
    </div>
  );
}
