import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const RoommateUpdate = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    lifestylePreferences,
    description,
    contactInfo,
    availability,
  } = useLoaderData();

  const handleUpdateRoomate = (e) => {
    e.preventDefault();
    const form = e.target;
    const roommateData = new FormData(form);
    const updatedRommate = Object.fromEntries(roommateData.entries());
    console.log(updatedRommate);

    fetch(`http://localhost:5000/roommates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRommate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Rommate Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add a Listing
      </h2>
      <form onSubmit={handleUpdateRoomate} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          defaultValue={title}
          className="input input-bordered w-full"
          required
        />
        
        <input
          name="location"
          type="text"
          placeholder="Location"
          defaultValue={location}
          className="input input-bordered w-full"
          required
        />
        <input
          name="rent"
          type="number"
          placeholder="Rent Amount"
          defaultValue={rent}
          className="input input-bordered w-full"
          required
        />
        <select
          name="roomType"
          defaultValue={roomType}
          className="select select-bordered w-full"
          required
        >
          <option disabled value="">
            Room Type
          </option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>
        <select
          name="lifestylePreferences"
          defaultValue={lifestylePreferences}
          className="select select-bordered w-full"
          required
        >
          <option disabled value="">
            Lifestyle Preferences
          </option>
          <option value="Pets">Pets</option>
          <option value="Smoking">Smoking</option>
          <option value="Night Owl">Night Owl</option>
        </select>
        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows={5}
          required
        />
        <input
          name="contactInfo"
          defaultValue={contactInfo}
          type="text"
          placeholder="Contact Info"
          className="input input-bordered w-full"
          required
        />
        <select
          name="availability"
          defaultValue={availability}
          className="select select-bordered w-full"
          required
        >
          <option disabled value="">
            Availability
          </option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <input
          name="userEmail"
          type="email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100 text-gray-600"
        />
        <input
          name="userName"
          type="text"
          defaultValue={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100 text-gray-600"
        />
        <button
          type="submit"
          className="btn btn-primary w-full tracking-wide"
        >
          Roommat Update
        </button>
      </form>
    </div>
  );
};

export default RoommateUpdate;
