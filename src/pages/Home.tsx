import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { Car } from '../types';

const Home = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const { data, error } = await supabase
          .from('cars')
          .select('*')
          .limit(3);

        if (error) throw error;

        // Transform data to match our Car interface and add specs
        const transformedCars = data.map(car => ({
          ...car,
          specs: `${car.make} • ${car.model} • Automatic`
        }));

        setFeaturedCars(transformedCars);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cars:', err);
        setError('Failed to load cars');
        setLoading(false);
      }
    };

    fetchFeaturedCars();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        {/* ... (previous hero section code remains the same) */}
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        {/* ... (previous features section code remains the same) */}
      </div>

      {/* Featured Cars Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={car.imageurl} 
                  alt={`${car.make} ${car.model}`} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.make} {car.model}</h3>
                  <p className="text-gray-600 mb-2">{car.specs}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${car.price.toLocaleString()}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
