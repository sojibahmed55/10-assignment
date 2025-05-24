
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
      .get(`https://10th-assignment-server-opal.vercel.app/roommates/${id}`)
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
      const res = await axios.patch(`https://10th-assignment-server-opal.vercel.app/roommates/${id}/like`, {
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
      <p className="text-black">{roommate.title}</p>

      <p className="mb-3 text-black">
        <strong>Location:</strong> {roommate.location}
      </p>
      <p className="mb-3 text-black">
        <strong>Room Type:</strong> {roommate.roomType}
      </p>
      <p className="mb-3 text-black">
        <strong>Description:</strong> {roommate.description}
      </p>

      <button
        onClick={handleLike}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center"
      >
        <FaThumbsUp className="mr-2" /> Like
      </button>

      {showContact && (
        <p className="mt-4 text-green-700 font-semibold ">
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


