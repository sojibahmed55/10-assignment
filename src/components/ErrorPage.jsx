import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-tr from-blue-900 via-purple-900 to-pink-900 px-8 py-16 text-white">
      
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Error Illustration"
          className="max-w-md rounded-3xl shadow-2xl"
          loading="lazy"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full md:w-1/2 max-w-lg text-center md:text-left">
        <h1 className="text-[12rem] font-extrabold leading-none drop-shadow-lg">404</h1>
        <h2 className="text-5xl font-bold mb-4 drop-shadow-md">Page Not Found</h2>
        <p className="mb-8 text-lg text-gray-300 leading-relaxed drop-shadow-sm">
          Looks like you've wandered into the unknown. But don't worry, even the greatest warriors get lost sometimes.
        </p>
        <Link
          to="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 transition px-8 py-4 rounded-full text-white font-semibold shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;