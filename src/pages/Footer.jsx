import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-gray-300 pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
  
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
            RoomMate<span className="text-pink-500">Finder</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Find your ideal roommate. Safe, smart, and stylish living made easy.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Home</li>
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Browse Listings</li>
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Add Listing</li>
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Privacy Policy</li>
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Terms of Service</li>
            <li className="hover:text-pink-400 cursor-pointer transition-all duration-200">Cookies</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <span className="hover:scale-110 hover:text-white cursor-pointer transition-all duration-300 text-xl"><FaFacebookF /></span>
            <span className="hover:scale-110 hover:text-white cursor-pointer transition-all duration-300 text-xl"><FaTwitter /></span>
            <span className="hover:scale-110 hover:text-white cursor-pointer transition-all duration-300 text-xl"><FaInstagram /></span>
            <span className="hover:scale-110 hover:text-white cursor-pointer transition-all duration-300 text-xl"><FaLinkedinIn /></span>
          </div>
        </div>
      </div>


      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} RoomMateFinder. Made with ❤️ by Sojib Boss.
      </div>
    </footer>

    );
};

export default Footer;
