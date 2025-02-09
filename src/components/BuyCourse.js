import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BuyCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Fetch course details
  useEffect(() => {
    fetch(`http://localhost:3000/course/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course:", error));
  }, [id]);

  // Fetch user details
  useEffect(() => {
    fetch("http://localhost:3000/user/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
        });
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/course/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        courseId: id,
        userDetails: userData,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Enrollment successful! Check your email.");
        navigate("/dashboard");
      })
      .catch((error) => console.error("Error enrolling:", error));
  };

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading Course Details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-lg font-semibold text-blue-600 mb-4">₹{course.price}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userData.name} 
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email} 
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={userData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyCourse;
