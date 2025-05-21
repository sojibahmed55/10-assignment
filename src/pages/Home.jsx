
import React from "react";
import SimpleSlider from "./SimpleSlider";
import { useLoaderData } from "react-router";

import RoommateCard from "../components/RoommateCard";

const Home = () => {
  const roommateData = useLoaderData();
  console.log(roommateData);

  const availableRoommates = roommateData.filter(
    (item) => item.availability.toLowerCase() === "available"
  );

  return (
    <div>
      <SimpleSlider></SimpleSlider>
    <div className="max-w-8xl mx-auto px-4 py-10">
      
      
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Featured Roommates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableRoommates.map((roommate) => (
          <RoommateCard key={roommate._id} roommate={roommate} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
