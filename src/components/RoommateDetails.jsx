import React from 'react';
import { Link, useLoaderData } from 'react-router';

const RoommateDetails = () => {

    const roommate = useLoaderData();
    const {title, location, description, lifestylePreferences, roomType } = roommate;

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-14 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 transform transition-all duration-500 hover:scale-[1.01]">
        
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 tracking-tight leading-snug">
          {title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-800">
          <div className="space-y-4">
            <p>
              <span className="font-semibold text-indigo-800"> Location:</span> {location}
            </p>
            
            <p>
              <span className="font-semibold text-indigo-800"> Room Type:</span> {roomType}
            </p>
            {lifestylePreferences && (
              <p>
                <span className="font-semibold text-indigo-800"> Lifestyle:</span> {lifestylePreferences}
              </p>
            )}
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed border-l-4 border-indigo-300 pl-4 text-base md:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block text-white bg-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-indigo-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
    );
};

export default RoommateDetails;