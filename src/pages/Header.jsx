import React from "react";
import { Link } from "react-router";

const Header = () => {
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
          <Link
            to="/"
            className="hover:text-blue-600 transition duration-300 relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/roommate"
            className="hover:text-blue-600 transition duration-300 relative group"
          >
            Roommate
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/listings"
            className="hover:text-blue-600 transition duration-300 relative group"
          >
            Browse Listing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/my-listings"
            className="hover:text-blue-600 transition duration-300 relative group"
          >
            My Listings
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        
        <div className="space-x-2">
          <Link to="/login">
            <button className="btn btn-outline btn-primary px-6">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-outline btn-primary px-6">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
