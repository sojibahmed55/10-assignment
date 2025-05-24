
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseListing = () => {
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/roommates")
      .then((res) => setRoommates(res.data))
      .catch((err) => console.error("Error loading roommates", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <h2 className="text-5xl text-center font-extrabold mb-16 text-gray-900 tracking-tight drop-shadow-md">
        All Available Roommates
      </h2>
      {roommates.length === 0 ? (
        <p className="text-center text-lg italic text-gray-500 select-none">
          No roommates available right now.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {roommates.map((roommate) => (
            <div
              key={roommate._id}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-400 ease-in-out border border-gray-200"
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-5 leading-snug tracking-wide">
                {roommate.title}
              </h3>

              <p className="text-base text-gray-600 mb-3 font-semibold tracking-wide">
                Location: <span className="text-gray-800">{roommate.location}</span>
              </p>

              <p className="text-base text-gray-600 mb-5 font-semibold tracking-wide">
                Rent: <span className="text-gray-800">${roommate.rent}</span>
              </p>
              <p
                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-wide ${
                  roommate.availability.toLowerCase() === 'available'
                    ? 'bg-green-200 text-green-900 shadow-md'
                    : 'bg-red-200 text-red-900 shadow-md'
                }`}
              >
                {roommate.availability}
              </p>
              <Link
                to={`/all-details/${roommate._id}`}
                className="mt-8 block text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-4 rounded-full shadow-lg transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseListing;
