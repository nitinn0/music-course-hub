import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve token from localStorage
  const token = localStorage.getItem("token"); // Make sure the key is consistent

  useEffect(() => {
    if (!token) {
      console.warn("No token found. Redirecting to login.");
      navigate("/login");
      return;
    }

    fetch(`http://localhost:3000/course/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Course not found or unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id, token, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-blue-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!course || !course.title || !course.description || !course.price || !course.imageUrl) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-yellow-500">
          Course details are missing or incorrect.
        </div>
      </div>
    );
  }

  // Handle Enroll Now button click
  const handleEnroll = () => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      console.warn("User is not authenticated, redirecting to login.");
      navigate("/login");
    } else {
      console.log("Token found, navigating to buy course page.");
      navigate(`/buy-course/${course._id}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-300 min-h-screen py-14 px-6 md:px-20">
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 py-6 rounded-xl mb-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-white">Course Details</h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Course Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Course Info */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold text-black-600 mb-4">{course.title}</h2>
            <p className="text-md text-gray-700 mb-4">{course.description}</p>
            <p className="text-xl font-semibold text-black mb-6">₹{course.price}</p>

            {/* Enroll Now Button */}
            <button
              onClick={handleEnroll}
              className="w-full md:w-auto py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
