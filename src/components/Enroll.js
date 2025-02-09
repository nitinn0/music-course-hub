import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EnrollForm = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // State to handle form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get token from localStorage
  const token = localStorage.getItem("authToken");

  // Check if user is authenticated
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if no auth token is present
    }
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Make API request to submit enrollment data
    fetch(`http://localhost:3000/enroll/${courseId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to enroll. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        navigate(`/course/${courseId}`); // Navigate back to course details page
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-300 min-h-screen py-14 px-6 md:px-20">
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 py-6 rounded-xl mb-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-white">Enroll Now</h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="text-xl font-semibold text-blue-500">Processing...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              Enroll Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnrollForm;
