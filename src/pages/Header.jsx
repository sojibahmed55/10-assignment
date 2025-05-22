import React, { useContext } from "react";
import { Link } from "react-router";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
  signOut(auth)
    .then(() => {
      Swal.fire({
        title: "Logged out!",
        text: "You have been successfully logged out.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
        
      });
    })
    .catch((error) => {
      console.error("Logout error:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to log out. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
};

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto navbar px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-blue-700">RoomieFind</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition duration-300 relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/roommate" className="hover:text-blue-600 transition duration-300 relative group">
            Roommate
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/listings" className="hover:text-blue-600 transition duration-300 relative group">
            Browse Listing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/my-listings" className="hover:text-blue-600 transition duration-300 relative group">
            My Listings
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        <div className="space-x-2 relative">
          {user ? (
            <div className="group relative cursor-pointer">
              <img
                src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                  {user.displayName || "Unknown User"}
                </p>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline btn-primary px-6">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-primary px-6">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

