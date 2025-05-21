import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Roommate = () => {
  const { user } = useContext(AuthContext);

  const handleAddRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRoommate = Object.fromEntries(formData.entries());
    console.log(newRoommate);

    fetch("http://localhost:5000/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
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
      <form onSubmit={handleAddRoommate} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="rent"
          placeholder="Rent Amount"
          className="input input-bordered w-full"
          required
        />
        <select
          name="roomType"
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
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows={5}
          required
        ></textarea>
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          className="input input-bordered w-full"
          required
        />
        <select
          name="availability"
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
          type="email"
          name="userEmail"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100 text-gray-600"
        />
        <input
          type="text"
          name="userName"
          defaultValue={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100 text-gray-600"
        />
        <button
          type="submit"
          className="btn btn-primary w-full uppercase tracking-wide"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default Roommate;
