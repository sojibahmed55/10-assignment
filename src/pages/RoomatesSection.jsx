import React from 'react';

const RoomatesSection = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Find Your <span className="text-yellow-300">Perfect Roommate</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Discover verified listings, secure connections, and real people — all in one place.
            Your ideal roommate is just a few clicks away.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full text-lg">
            Start Searching
          </button>
        </div>

        <div className="flex-1">
          <img
            src="https://i.ibb.co/Ndfn52xF/2characteristics-istock-1278823047.jpg"
            alt="Roommates"
            className="rounded-3xl w-full shadow-2xl"
          />
        </div>
      </div>
      

    </section>
    );
};

export default RoomatesSection;