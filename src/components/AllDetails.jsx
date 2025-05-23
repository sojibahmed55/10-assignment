import React from 'react';
import { useLoaderData } from 'react-router';

const AllDetails = () => {
  const roommate = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">{roommate.title}</h2>
      <p className="mb-2"><strong>Location:</strong> {roommate.location}</p>
      <p className="mb-2"><strong>Rent:</strong> ${roommate.rent}</p>
      <p className="mb-2"><strong>Contact:</strong> {roommate.contactInfo}</p>
      <p className="mb-2"><strong>Availability:</strong> {roommate.availability}</p>
      <p className="mb-2"><strong>Description:</strong> {roommate.description}</p>
    </div>
  );
};

export default AllDetails;

