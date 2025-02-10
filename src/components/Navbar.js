import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-[#e5f0f7] relative">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        The Crescendo
      </div>


      <div className="flex space-x-6 text-gray-700 relative">
        <Link to='/courses' className="hover:text-black font-bold">Courses</Link>
        <Link to="/about" className="hover:text-black">About us</Link>
        <Link to="/contact" className="hover:text-black">Talk to us</Link>
      </div>


      <div className="flex space-x-4">
        {token ? (
          <button onClick={handleLogout} className="text-gray-700">Logout</button>
        ) : (
          <>
            <Link to="/login" className="text-gray-700">Login</Link>
            <Link to="/register" className="bg-black text-white px-4 py-2 rounded">
              Sign up free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
