import React from "react";
import { Link } from "react-router";

const RoommateCard = ({ roommate }) => {
  const { _id, title, location, description, lifestylePreferences, roomType,} =
    roommate;

  return (
    <div className="group rounded-3xl  bg-white border border-gray-200 shadow-lg p-6 flex flex-col justify-between h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-gray-900 group-hover:text-indigo-600 transition duration-300">
          {title}
        </h2>
        <p className="text-lg text-gray-700">
          <span className="font-medium text-gray-900"> Location:</span>{" "}
          {location}
        </p>
        {lifestylePreferences && (
          <p className="text-md text-gray-600">
            <span className="font-medium text-gray-800">Lifestyle:</span>{" "}
            {lifestylePreferences}
          </p>
        )}
        <p className="text-gray-700 text-base leading-relaxed">
          {description.slice(0, 100)}...
        </p>
        <p className="text-md text-gray-700">
          <span className="font-medium text-gray-900">Room Type:</span>{" "}
          {roomType}
        </p>
      </div>

      <Link
        to={`/roommate-details/${_id}`}
        className="mt-6 inline-block w-full text-center bg-indigo-600 text-white py-3 rounded-xl text-lg font-bold tracking-wide transition duration-300 group-hover:bg-indigo-700"
      >
        See More
      </Link>
    </div>
  );
};

export default RoommateCard;
