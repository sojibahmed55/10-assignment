// import React from 'react';
// import { Link, useLoaderData } from 'react-router';

// const RoommateDetails = () => {

//     const roommate = useLoaderData();
//     const {title, location, description, lifestylePreferences, roomType } = roommate;

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-14 px-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 transform transition-all duration-500 hover:scale-[1.01]">

//         <h1 className="text-4xl font-bold text-indigo-700 mb-6 tracking-tight leading-snug">
//           {title}
//         </h1>

//         <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-800">
//           <div className="space-y-4">
//             <p>
//               <span className="font-semibold text-indigo-800"> Location:</span> {location}
//             </p>

//             <p>
//               <span className="font-semibold text-indigo-800"> Room Type:</span> {roomType}
//             </p>
//             {lifestylePreferences && (
//               <p>
//                 <span className="font-semibold text-indigo-800"> Lifestyle:</span> {lifestylePreferences}
//               </p>
//             )}
//           </div>

//           <div>
//             <p className="text-gray-700 leading-relaxed border-l-4 border-indigo-300 pl-4 text-base md:text-lg">
//               {description}
//             </p>
//           </div>
//         </div>

//         <div className="mt-10 text-center">
//           <Link
//             to="/"
//             className="inline-block text-white bg-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-indigo-800"
//           >
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default RoommateDetails;





//  A
// import React from "react";
// import { Link, useLoaderData } from "react-router";
// import { FaThumbsUp } from "react-icons/fa";

// const RoommateDetails = () => {
//   const roommate = useLoaderData();
//   const { title, location, description, lifestylePreferences, roomType } =
//     roommate;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-14 px-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 transform transition-all duration-500 hover:scale-[1.01]">
//         <h1 className="text-4xl font-bold text-indigo-700 mb-6 tracking-tight leading-snug">
//           {title}
//         </h1>

//         <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-800">
//           <div className="space-y-4">
//             <p>
//               <span className="font-semibold text-indigo-800"> Location:</span>{" "}
//               {location}
//             </p>
//             <p>
//               <span className="font-semibold text-indigo-800"> Room Type:</span>{" "}
//               {roomType}
//             </p>

//             {lifestylePreferences && (
//               <div className="space-y-4">
//                 <p>
//                   <span className="font-semibold text-indigo-800">
//                     {" "}
//                     Lifestyle:
//                   </span>{" "}
//                   {lifestylePreferences}
//                 </p>

//                 <button className="btn  inline-flex items-center px-6 py-4 rounded-full font-semibold shadow-md bg-gradient-to-r from-blue-400 to-purple-500 text-white">
//                   <FaThumbsUp className="mr-2" />
//                   Like
//                 </button>
//               </div>
//             )}
//           </div>

//           <div>
//             <p className="text-gray-700 leading-relaxed border-l-4 border-indigo-300 pl-4 text-base md:text-lg">
//               {description}
//             </p>
//           </div>
//         </div>

//         <div className="mt-10 text-center">
//           <Link
//             to="/"
//             className="inline-block text-white bg-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-indigo-800"
//           >
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoommateDetails;

// RoommateDetails.jsx
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router";
// import axios from "axios";
// import { FaThumbsUp } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RoommateDetails = ({ currentUser }) => {
//   const { id } = useParams();
//   const [roommate, setRoommate] = useState(null);
//   const [likeCount, setLikeCount] = useState(0);
//   const [showContact, setShowContact] = useState(false);
//   const [contactInfo, setContactInfo] = useState("");
//   const [loadingLike, setLoadingLike] = useState(false);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/roommates/${id}`)
//       .then(res => {
//         setRoommate(res.data);
//         setLikeCount(res.data.likes || 0);
//         setShowContact(false); // Reset contact visibility on loading new roommate
//       })
//       .catch(err => {
//         console.error(err);
//         toast.error("Failed to load roommate data.");
//       });
//   }, [id]);

//   const handleLike = async () => {
//     if (!currentUser?.email) {
//       toast.error("Please log in to like.");
//       return;
//     }

//     if (currentUser.email === roommate.posterEmail) {
//       toast.error("You can't like your own post!");
//       return;
//     }

//     setLoadingLike(true);

//     try {
//       const res = await axios.patch(`http://localhost:5000/roommates/${id}/like`, {
//         currentUserEmail: currentUser.email,
//       });

//       setLikeCount(res.data.updatedLikes);
//       setContactInfo(res.data.contactInfo);
//       setShowContact(true);
//       toast.success("Liked the profile!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong while liking.");
//     } finally {
//       setLoadingLike(false);
//     }
//   };

//   if (!roommate) return <div className="p-10 text-center">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
//       <h2 className="text-3xl font-bold text-indigo-700 mb-4">
//         {likeCount} {likeCount === 1 ? "person is" : "people are"} interested in "{roommate.title}"
//       </h2>

//       <p className="mb-3"><strong>Location:</strong> {roommate.location}</p>
//       <p className="mb-3"><strong>Room Type:</strong> {roommate.roomType}</p>
//       <p className="mb-3"><strong>Description:</strong> {roommate.description}</p>

//       <button
//         onClick={handleLike}
//         disabled={loadingLike}
//         className={`bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center ${loadingLike ? "opacity-50 cursor-not-allowed" : ""}`}
//       >
//         <FaThumbsUp className="mr-2" /> Like
//       </button>

//       {showContact && (
//         <p className="mt-4 text-green-700 font-semibold">
//           📞 Contact Number: {contactInfo}
//         </p>
//       )}

//       <div className="mt-6">
//         <Link to="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
//       </div>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default RoommateDetails;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { FaThumbsUp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoommateDetails = ({ currentUser }) => {
  const { id } = useParams();
  const [roommate, setRoommate] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [contactInfo, setContactInfo] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/roommates/${id}`)
      .then((res) => {
        setRoommate(res.data);
        setLikeCount(res.data.likes || 0);
        setShowContact(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load roommate data.");
      });
  }, [id]);

  const handleLike = async () => {
    if (!currentUser?.email) {
      toast.error("Please log in to like.");
      return;
    }

    if (currentUser.email === roommate.posterEmail) {
      toast.error("You can't like your own post!");
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:5000/roommates/${id}/like`, {
        currentUserEmail: currentUser.email,
      });

      setLikeCount(res.data.updatedLikes);
      setContactInfo(res.data.contactInfo);
      setShowContact(true);
      toast.success("Liked the profile!");
    } catch (likeErr) {
      console.error(likeErr);
      toast.error("Something went wrong while liking.");
    }
  };

  if (!roommate) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">
        {likeCount} {likeCount === 1 ? "person is" : "people are"}  
      </h2>
      <p>{roommate.title}</p>

      <p className="mb-3">
        <strong>Location:</strong> {roommate.location}
      </p>
      <p className="mb-3">
        <strong>Room Type:</strong> {roommate.roomType}
      </p>
      <p className="mb-3">
        <strong>Description:</strong> {roommate.description}
      </p>

      <button
        onClick={handleLike}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center"
      >
        <FaThumbsUp className="mr-2" /> Like
      </button>

      {showContact && (
        <p className="mt-4 text-green-700 font-semibold">
          📞 Contact Number: {contactInfo}
        </p>
      )}

      <div className="mt-6">
        <Link to="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default RoommateDetails;


