import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const AllDetails = () => {
  const roommate = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl shadow-2xl border border-indigo-200 mt-12">
  <h2 className="text-4xl font-extrabold text-indigo-900 mb-6 tracking-wide drop-shadow-md">
    {roommate.title}
  </h2>

  <div className="space-y-4 text-gray-800 font-medium text-lg leading-relaxed">
    <p>
      <span className="font-semibold text-indigo-700">📍 Location:</span>{" "}
      <span className="text-indigo-900">{roommate.location}</span>
    </p>
    <p>
      <span className="font-semibold text-green-700">💰 Rent:</span>{" "}
      <span className="text-green-900">${roommate.rent}</span>
    </p>
    <p>
      <span className="font-semibold text-purple-700">📞 Contact:</span>{" "}
      <span className="text-purple-900">{roommate.contactInfo}</span>
    </p>
    <p>
      <span className={`inline-block px-3 py-1 rounded-full font-semibold ${
        roommate.availability.toLowerCase() === "available"
          ? "bg-green-200 text-green-900 shadow-md"
          : "bg-red-200 text-red-900 shadow-md"
      }`}>
        {roommate.availability}
      </span>
    </p>
    <p>
      <span className="font-semibold text-indigo-700">📝 Description:</span>
      <br />
      <span className="text-indigo-900 whitespace-pre-line">{roommate.description}</span>
    </p>
  </div>
  <button
        onClick={() => navigate('/browse-listings')}
        className="mb-6 px-7 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md font-semibold text-sm"
      >
        ← Back
      </button>
</div>
  );
};

export default AllDetails;

