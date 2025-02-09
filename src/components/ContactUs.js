import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [message, setMessage] = useState(""); 

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/contact/talktous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", enquiry: "" }); 
        setMessage("Email sent successfully!");

    }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-300 min-h-screen py-14 px-6 md:px-20">
      <div className="bg-gradient-to-r from-blue-300 to-blue-500 py-6 rounded-xl mb-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-white">
          Reach Us Out
        </h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">
              Enquiry
            </label>
            <input
              type="text"
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>


          {message && (
            <p className="mt-3 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
