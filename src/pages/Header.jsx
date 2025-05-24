import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );
  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);
  const handleChange = () => {
    setIsDark(!isDark);
  };

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Roommate", path: "/roommate" },
    { name: "Browse Listing", path: "/browse-listings" },
    { name: "My Listings", path: "/my-listings" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/WWBSf9ns/istockphoto-1884947552-612x612.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-bold text-blue-700">RoomieFind</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className="relative group transition duration-300 hover:text-blue-600"
            >
              {({ isActive }) => (
                <span>
                  {name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  
                </span>
                
              )}
            </NavLink>
            
          ))}
          <div>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="coffee"
            />
            <FaMoon className="swap-on h-6 w-6" />
            <IoMdSunny className="swap-off h-6 w-6" />
          </label>
          <input
            type="checkbox"
            value="dark"
            checked={isDark}
            onChange={handleChange}
            className="toggle theme-controller"
          />
        </div>
        </nav>
        

        <div className="hidden md:block">
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
            <div className="space-x-2">
              <Link to="/login">
                <button className="btn btn-outline btn-primary px-6">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-primary px-6">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-1 rounded hover:bg-blue-50 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
          <div>
            {user ? (
              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                    alt="user"
                    className="w-10 h-10 rounded-full border"
                  />
                  <p className="text-gray-700 text-sm font-medium">
                    {user.displayName || "Unknown User"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-sm text-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 mt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn btn-outline btn-primary w-full">
                    Login
                  </button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn btn-outline btn-primary w-full">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
