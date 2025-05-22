import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/roommates?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setListings(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/roommates/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Listing deleted successfully!");
          setListings((prev) => prev.filter((item) => item._id !== id));
        }
      });
  };

  const handleUpdate = (id) => {
    navigate(`/update-listing/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Roommate Listings</h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">No listings added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-100">
                <th>Title</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.rent} BDT</td>
                  <td>{item.phone}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;
