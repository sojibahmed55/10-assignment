// import axios from 'axios';
// import React, { useEffect, useState } from 'react';


// const BrowseListing = () => {
//     const [roommates, setRoommates] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/roommates")
//       .then(res => {
//         setRoommates(res.data);
//       })
//       .catch(err => console.error("Error loading all roommates", err));
//   }, []);
  
//   console.log()

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">All Available Roommates</h2>

//       {roommates.length === 0 ? (
//         <p className="text-gray-500">No roommates available right now.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {roommates.map((roommate) => (
//             <div key={roommate._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold">{roommate.title}</h3>
//               <p className="text-sm text-gray-600">Location: {roommate.location}</p>
//               <p className="text-sm text-gray-600">Rent: ${roommate.rent}</p>
//               <p className="text-sm text-green-600">{roommate.availability}</p>
//               <button onClick={} className='btn btn-primary'>View details</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     );
// };

// export default BrowseListing;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowseListing = () => {
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/roommates")
      .then(res => setRoommates(res.data))
      .catch(err => console.error("Error loading roommates", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">All Available Roommates</h2>

      {roommates.length === 0 ? (
        <p className="text-gray-500">No roommates available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roommates.map((roommate) => (
            <div key={roommate._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{roommate.title}</h3>
              <p className="text-sm text-gray-600">Location: {roommate.location}</p>
              <p className="text-sm text-gray-600">Rent: ${roommate.rent}</p>
              <p className="text-sm text-green-600">{roommate.availability}</p>
              <Link to={`/all-details/${roommate._id}`} className="btn btn-primary mt-2 inline-block">
                View details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseListing;
