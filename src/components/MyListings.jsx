import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://10th-assignment-server-opal.vercel.app/roommates?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://10th-assignment-server-opal.vercel.app/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Listing deleted successfully!");
              setListings((prev) => prev.filter((item) => item._id !== id));
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );
            }
          });
      }
    });
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
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Lifestyle Preferences</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.rent}</td>
                  <td>{item.lifestylePreferences}</td>
                  <td className="space-x-2">
                    <Link to={`/roommate-update/${item._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Update
                      </button>
                    </Link>
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
