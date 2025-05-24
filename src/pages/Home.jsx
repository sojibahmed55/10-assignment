import React from "react";
import SimpleSlider from "./SimpleSlider";
import { useLoaderData } from "react-router";
import RoommateCard from "../components/RoommateCard";

const Home = () => {
  const roommateData = useLoaderData();
  console.log("Fetched Roommates", roommateData);

  const availableRoommates = roommateData.filter(
    (item) => item.availability?.toLowerCase() === "available"
  );

  return (
    <>
      <div>
        <SimpleSlider />
        <div className="max-w-[1500px] mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
            Featured Roommates
          </h1>

          {availableRoommates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableRoommates.map((roommate) => (
                <RoommateCard key={roommate._id} roommate={roommate} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No available roommates found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;



